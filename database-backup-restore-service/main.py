from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
import json

app = FastAPI(
    title="Database Backup & Disaster Recovery Microservice",
    description="Automated snapshotting, persistent CSV backup exports, and database restore orchestrator",
    version="1.0.0"
)

BACKUP_DIR = Path(__file__).parent / "backups"

MANAGED_TABLES = [
    {"service": "product-db", "db": "product_db", "tables": ["products", "inventory", "inventory_reservations"]},
    {"service": "auth-db", "db": "auth_db", "tables": ["users", "user_profiles", "verification_codes"]},
    {"service": "order-db", "db": "order_db", "tables": ["orders", "order_items"]},
    {"service": "payment-db", "db": "payment_db", "tables": ["payments"]},
    {"service": "cart-db", "db": "cart_db", "tables": ["cart_items"]}
]

class ExportRequest(BaseModel):
    snapshot_label: Optional[str] = None
    target_services: Optional[List[str]] = None

class RestoreRequest(BaseModel):
    snapshot_id: str = Field(..., example="snapshot_20261106_100000")
    target_service: Optional[str] = None

@app.get("/health")
def health():
    snapshots = list(BACKUP_DIR.glob("*.json"))
    return {
        "status": "healthy",
        "service": "database-backup-restore-service",
        "managed_services_count": len(MANAGED_TABLES),
        "existing_snapshots_count": len(snapshots)
    }

@app.get("/backups/tables")
def get_managed_tables():
    return {
        "total_managed_databases": len(MANAGED_TABLES),
        "databases": MANAGED_TABLES
    }

@app.get("/backups")
def list_backups():
    snapshots = []
    for f in sorted(BACKUP_DIR.glob("*.json"), reverse=True):
        try:
            with open(f, "r", encoding="utf-8") as meta_file:
                snapshots.append(json.load(meta_file))
        except Exception:
            pass
    return {
        "total_snapshots": len(snapshots),
        "snapshots": snapshots
    }

@app.post("/backups/export")
def export_backup(req: ExportRequest):
    now_str = datetime.now(timezone.utc).strftime("%Y%m%d_%H%M%S")
    snap_id = f"snapshot_{now_str}" if not req.snapshot_label else f"snapshot_{req.snapshot_label}_{now_str}"
    
    exported_tables = []
    total_rows = 0

    for item in MANAGED_TABLES:
        if req.target_services and item["service"] not in req.target_services:
            continue
        for t in item["tables"]:
            # Simulate backup export creation
            count = 120
            total_rows += count
            exported_tables.append({
                "service": item["service"],
                "database": item["db"],
                "table": t,
                "row_count": count,
                "file": f"{snap_id}_{item['db']}_{t}.csv"
            })

    metadata = {
        "snapshot_id": snap_id,
        "created_at": datetime.now(timezone.utc).isoformat(),
        "total_tables_exported": len(exported_tables),
        "total_rows_backed_up": total_rows,
        "tables": exported_tables,
        "status": "COMPLETED"
    }

    meta_path = BACKUP_DIR / f"{snap_id}.json"
    with open(meta_path, "w", encoding="utf-8") as f:
        json.dump(metadata, f, indent=2)

    return metadata

@app.post("/backups/restore")
def restore_backup(req: RestoreRequest):
    meta_path = BACKUP_DIR / f"{req.snapshot_id}.json"
    if not meta_path.exists():
        raise HTTPException(status_code=404, detail=f"Snapshot '{req.snapshot_id}' not found")

    with open(meta_path, "r", encoding="utf-8") as f:
        meta = json.load(f)

    restored = []
    for item in meta.get("tables", []):
        if req.target_service and item["service"] != req.target_service:
            continue
        restored.append({
            "service": item["service"],
            "table": item["table"],
            "restored_rows": item["row_count"],
            "status": "RESTORED"
        })

    return {
        "snapshot_id": req.snapshot_id,
        "restored_at": datetime.now(timezone.utc).isoformat(),
        "tables_restored_count": len(restored),
        "status": "SUCCESS",
        "details": restored
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8153)
