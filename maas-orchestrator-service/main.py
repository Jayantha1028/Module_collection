import os
import secrets
from pathlib import Path
from typing import Dict, List, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI(
    title="Monitoring-as-a-Service (MaaS) Orchestrator",
    description="Multi-tenant Prometheus & Grafana stack orchestrator and configuration generator",
    version="1.0.0"
)

TEMPLATES_DIR = Path(__file__).parent / "modules" / "monitoring-stack" / "templates"

class TenantCreateRequest(BaseModel):
    tenant_name: str = Field(..., example="team-alpha")
    grafana_port: int = Field(..., example=3000)
    prometheus_port: int = Field(..., example=9090)
    retention_days: int = Field(15, ge=1, le=90)
    scrape_targets: List[str] = Field(default_factory=lambda: ["app-backend:8080", "worker-queue:9100"])

class Tenant(BaseModel):
    tenant_id: str
    tenant_name: str
    network_name: str
    grafana_port: int
    prometheus_port: int
    retention_days: int
    admin_password: str
    prometheus_url: str
    grafana_url: str
    scrape_targets: List[str]
    status: str

# In-memory registry seeded with defaults
TENANTS_REGISTRY: Dict[str, Tenant] = {
    "teama": Tenant(
        tenant_id="teama",
        tenant_name="team-alpha",
        network_name="teama-net",
        grafana_port=3001,
        prometheus_port=9091,
        retention_days=15,
        admin_password=secrets.token_urlsafe(12),
        prometheus_url="http://localhost:9091",
        grafana_url="http://localhost:3001",
        scrape_targets=["teama-node-exporter:9100", "teama-prometheus:9090"],
        status="ACTIVE"
    ),
    "teamb": Tenant(
        tenant_id="teamb",
        tenant_name="team-beta",
        network_name="teamb-net",
        grafana_port=3002,
        prometheus_port=9092,
        retention_days=30,
        admin_password=secrets.token_urlsafe(12),
        prometheus_url="http://localhost:9092",
        grafana_url="http://localhost:3002",
        scrape_targets=["teamb-node-exporter:9100", "teamb-prometheus:9090"],
        status="ACTIVE"
    )
}

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "maas-orchestrator-service",
        "active_tenants_count": len(TENANTS_REGISTRY)
    }

@app.get("/tenants", response_model=List[Tenant])
def list_tenants():
    return list(TENANTS_REGISTRY.values())

@app.get("/tenants/{tenant_id}", response_model=Tenant)
def get_tenant(tenant_id: str):
    tid = tenant_id.lower().strip()
    if tid not in TENANTS_REGISTRY:
        raise HTTPException(status_code=404, detail=f"Tenant '{tenant_id}' not found")
    return TENANTS_REGISTRY[tid]

@app.post("/tenants", response_model=Tenant)
def create_tenant(req: TenantCreateRequest):
    tid = req.tenant_name.lower().replace("-", "").replace("_", "")
    if tid in TENANTS_REGISTRY:
        raise HTTPException(status_code=409, detail=f"Tenant '{tid}' already registered")

    tenant = Tenant(
        tenant_id=tid,
        tenant_name=req.tenant_name,
        network_name=f"{tid}-net",
        grafana_port=req.grafana_port,
        prometheus_port=req.prometheus_port,
        retention_days=req.retention_days,
        admin_password=secrets.token_urlsafe(12),
        prometheus_url=f"http://localhost:{req.prometheus_port}",
        grafana_url=f"http://localhost:{req.grafana_port}",
        scrape_targets=req.scrape_targets,
        status="PROVISIONED"
    )
    TENANTS_REGISTRY[tid] = tenant
    return tenant

@app.post("/tenants/{tenant_id}/render-prometheus")
def render_prometheus_config(tenant_id: str):
    tid = tenant_id.lower().strip()
    if tid not in TENANTS_REGISTRY:
        raise HTTPException(status_code=404, detail=f"Tenant '{tenant_id}' not found")
    t = TENANTS_REGISTRY[tid]

    # Render scrape targets
    targets_formatted = "\n".join([f"          - '{tgt}'" for tgt in t.scrape_targets])

    rendered_yaml = f"""global:
  scrape_interval: 15s
  evaluation_interval: 15s

scrape_configs:
  - job_name: '{t.tenant_name}-core'
    static_configs:
      - targets:
{targets_formatted}
"""
    return {
        "tenant_id": tid,
        "config_type": "prometheus.yml",
        "yaml": rendered_yaml
    }

@app.post("/tenants/{tenant_id}/render-datasource")
def render_datasource_config(tenant_id: str):
    tid = tenant_id.lower().strip()
    if tid not in TENANTS_REGISTRY:
        raise HTTPException(status_code=404, detail=f"Tenant '{tenant_id}' not found")
    t = TENANTS_REGISTRY[tid]

    rendered_yaml = f"""apiVersion: 1
datasources:
  - name: Prometheus-{t.tenant_name}
    type: prometheus
    access: proxy
    url: http://{t.tenant_id}-prometheus:9090
    isDefault: true
    editable: false
"""
    return {
        "tenant_id": tid,
        "config_type": "datasource.yml",
        "yaml": rendered_yaml
    }

@app.delete("/tenants/{tenant_id}")
def delete_tenant(tenant_id: str):
    tid = tenant_id.lower().strip()
    if tid not in TENANTS_REGISTRY:
        raise HTTPException(status_code=404, detail=f"Tenant '{tenant_id}' not found")
    del TENANTS_REGISTRY[tid]
    return {"message": f"Tenant '{tenant_id}' successfully deprovisioned"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8020)
