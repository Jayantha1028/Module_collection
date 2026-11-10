from typing import Any, Dict, List, Optional
from fastapi import FastAPI, HTTPException, Body
from pydantic import BaseModel
import yaml

from vulnerability_taxonomy_56 import (
    PLANES,
    TAXONOMY_56,
    scan_manifest_for_vulnerabilities
)

app = FastAPI(
    title="K8s Security Scanner Microservice",
    description="Automated scanning engine for Kubernetes manifests across 56 vulnerability signatures and 7 operational planes",
    version="1.0.0"
)

class YamlScanRequest(BaseModel):
    manifest_yaml: str
    target_name: Optional[str] = "custom-manifest"

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "k8s-security-scanner-service",
        "taxonomy_signatures_count": len(TAXONOMY_56),
        "planes_count": len(PLANES)
    }

@app.get("/planes")
def get_defense_planes():
    return PLANES

@app.get("/taxonomy")
def get_taxonomy():
    return {
        "total_signatures": len(TAXONOMY_56),
        "vulnerabilities": TAXONOMY_56
    }

@app.get("/taxonomy/{vuln_id}")
def get_vulnerability(vuln_id: str):
    vid = vuln_id.strip().upper()
    if vid not in TAXONOMY_56:
        raise HTTPException(status_code=404, detail=f"Vulnerability signature {vuln_id} not found")
    return TAXONOMY_56[vid]

@app.post("/scan/yaml")
def scan_yaml(req: YamlScanRequest):
    try:
        docs = list(yaml.safe_load_all(req.manifest_yaml))
    except Exception as e:
        raise HTTPException(status_code=400, detail=f"Invalid YAML payload: {str(e)}")

    findings = []
    seen = set()

    for idx, doc in enumerate(docs):
        if not isinstance(doc, dict):
            continue
        vuln_ids = scan_manifest_for_vulnerabilities(doc)
        for vid in vuln_ids:
            if vid not in seen:
                seen.add(vid)
                v_meta = TAXONOMY_56.get(vid, {"id": vid, "name": "Unknown", "severity": "MEDIUM"})
                findings.append({
                    "id": vid,
                    "plane": v_meta.get("plane"),
                    "plane_name": PLANES.get(v_meta.get("plane")),
                    "name": v_meta.get("name"),
                    "severity": v_meta.get("severity"),
                    "standard": v_meta.get("standard"),
                    "mitre": v_meta.get("mitre"),
                    "description": v_meta.get("description"),
                    "remediation": v_meta.get("remediation"),
                    "document_index": idx
                })

    # Calculate severity stats
    sev_counts = {"CRITICAL": 0, "HIGH": 0, "MEDIUM": 0, "LOW": 0}
    for f in findings:
        s = f["severity"].upper()
        sev_counts[s] = sev_counts.get(s, 0) + 1

    passed = len(findings) == 0
    return {
        "target_name": req.target_name,
        "passed": passed,
        "total_findings": len(findings),
        "severity_summary": sev_counts,
        "findings": findings
    }

@app.post("/scan/json")
def scan_json(doc: Dict[str, Any] = Body(...)):
    vuln_ids = scan_manifest_for_vulnerabilities(doc)
    findings = []
    for vid in vuln_ids:
        v_meta = TAXONOMY_56.get(vid, {"id": vid, "name": "Unknown", "severity": "MEDIUM"})
        findings.append({
            "id": vid,
            "plane": v_meta.get("plane"),
            "plane_name": PLANES.get(v_meta.get("plane")),
            "name": v_meta.get("name"),
            "severity": v_meta.get("severity"),
            "standard": v_meta.get("standard"),
            "mitre": v_meta.get("mitre"),
            "description": v_meta.get("description"),
            "remediation": v_meta.get("remediation")
        })

    return {
        "passed": len(findings) == 0,
        "total_findings": len(findings),
        "findings": findings
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8011)
