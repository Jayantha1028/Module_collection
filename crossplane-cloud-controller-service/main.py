from pathlib import Path
from typing import Dict, List, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
import yaml

app = FastAPI(
    title="Crossplane Declarative Cloud Controller Service",
    description="Microservice for declarative infrastructure-as-code management, S3 bucket provisioning, and drift detection",
    version="1.0.0"
)

MANIFESTS_DIR = Path(__file__).parent / "manifests"

class BucketCreateRequest(BaseModel):
    bucket_name: str = Field(..., example="my-app-storage-bucket")
    region: str = Field("us-east-1", example="us-east-1")
    provider_config_ref: str = Field("default", example="localstack-provider")
    tags: Dict[str, str] = Field(default_factory=lambda: {"Environment": "Dev", "ManagedBy": "Crossplane"})

class DriftCheckRequest(BaseModel):
    bucket_name: str
    expected_region: str = "us-east-1"
    expected_tags: Dict[str, str] = {"Environment": "Dev"}

# In-memory desired vs observed states
DECLARED_BUCKETS: Dict[str, Dict] = {
    "demo-crossplane-bucket": {
        "bucket_name": "demo-crossplane-bucket",
        "region": "us-east-1",
        "provider_config_ref": "localstack-provider",
        "tags": {"Environment": "Dev", "ManagedBy": "Crossplane"},
        "status": "Ready",
        "synced": True
    }
}

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "crossplane-cloud-controller-service",
        "provider": "crossplane-provider-aws",
        "active_buckets": len(DECLARED_BUCKETS)
    }

@app.get("/infrastructure/status")
def get_infra_status():
    return {
        "cluster": "xp-local (kind)",
        "crossplane_version": "v1.14.0",
        "provider_aws_installed": True,
        "endpoint_target": "LocalStack / AWS S3",
        "total_managed_resources": len(DECLARED_BUCKETS)
    }

@app.get("/infrastructure/manifests")
def list_manifests():
    files = {}
    if MANIFESTS_DIR.exists():
        for p in MANIFESTS_DIR.glob("*.yaml"):
            try:
                with open(p, "r", encoding="utf-8") as f:
                    files[p.name] = f.read()
            except Exception:
                pass
    return {
        "manifest_files_count": len(files),
        "manifests": files
    }

@app.post("/infrastructure/s3/buckets")
def create_bucket(req: BucketCreateRequest):
    bname = req.bucket_name.lower().strip()
    if bname in DECLARED_BUCKETS:
        raise HTTPException(status_code=409, detail=f"Bucket '{bname}' already exists in declared state")

    manifest = {
        "apiVersion": "s3.aws.upbound.io/v1beta1",
        "kind": "Bucket",
        "metadata": {
            "name": bname
        },
        "spec": {
            "forProvider": {
                "region": req.region,
                "tags": req.tags
            },
            "providerConfigRef": {
                "name": req.provider_config_ref
            }
        }
    }

    bucket_obj = {
        "bucket_name": bname,
        "region": req.region,
        "provider_config_ref": req.provider_config_ref,
        "tags": req.tags,
        "status": "Ready",
        "synced": True,
        "manifest_yaml": yaml.dump(manifest)
    }
    DECLARED_BUCKETS[bname] = bucket_obj
    return bucket_obj

@app.post("/infrastructure/drift/detect")
def detect_drift(req: DriftCheckRequest):
    bname = req.bucket_name.lower().strip()
    if bname not in DECLARED_BUCKETS:
        raise HTTPException(status_code=404, detail=f"Bucket '{bname}' not managed by Crossplane")

    declared = DECLARED_BUCKETS[bname]
    drift_detected = False
    drift_details = []

    if declared["region"] != req.expected_region:
        drift_detected = True
        drift_details.append(f"Region mismatch: declared='{declared['region']}', live='{req.expected_region}'")

    for k, v in req.expected_tags.items():
        if declared["tags"].get(k) != v:
            drift_detected = True
            drift_details.append(f"Tag mismatch on '{k}': declared='{declared['tags'].get(k)}', live='{v}'")

    return {
        "bucket_name": bname,
        "drift_detected": drift_detected,
        "synced": not drift_detected,
        "drift_details": drift_details
    }

@app.post("/infrastructure/drift/reconcile")
def reconcile_drift(bucket_name: str):
    bname = bucket_name.lower().strip()
    if bname not in DECLARED_BUCKETS:
        raise HTTPException(status_code=404, detail=f"Bucket '{bname}' not found")

    DECLARED_BUCKETS[bname]["synced"] = True
    DECLARED_BUCKETS[bname]["status"] = "Ready"
    return {
        "bucket_name": bname,
        "reconciled": True,
        "status": "Ready",
        "message": f"Crossplane reconciler loop enforced declared spec for '{bname}'."
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8090)
