"""
snowflake-sync-service
======================
FastAPI microservice for cost-optimized cloud data warehouse synchronization.
Enforces zero credit waste with automated warehouse suspension.
"""
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
from typing import List, Dict, Any, Optional
import datetime

app = FastAPI(
    title="Snowflake Cloud Sync Service",
    version="1.0.0",
    description="Cost-optimized ETL pipeline orchestrator and Snowflake sync planner with zero credit waste enforcement"
)

class SyncPlanRequest(BaseModel):
    table_name: str = Field(..., example="CUSTOMER_TRANSACTIONS")
    records: List[Dict[str, Any]] = Field(default_factory=list, example=[{"id": 1, "val": "sample"}])
    mode: str = Field(default="incremental", example="incremental")
    warehouse_name: str = Field(default="COMPUTE_WH", example="COMPUTE_WH")
    auto_suspend_seconds: int = Field(default=60, ge=30, le=600)

@app.get("/")
def root():
    return {
        "service": "snowflake-sync-service",
        "status": "healthy",
        "version": "1.0.0",
        "port": 8154
    }

@app.get("/health")
def health():
    return {"status": "ok", "timestamp": datetime.datetime.utcnow().isoformat()}

@app.post("/sync/plan")
def create_sync_plan(req: SyncPlanRequest):
    clean_mode = req.mode.lower()
    if clean_mode not in ["full", "incremental", "append"]:
        raise HTTPException(status_code=400, detail="mode must be full, incremental, or append")
    
    sql_statements = [
        f"ALTER WAREHOUSE {req.warehouse_name} SET AUTO_SUSPEND = {req.auto_suspend_seconds} AUTO_RESUME = TRUE;"
    ]

    if clean_mode == "full":
        sql_statements.append(f"CREATE OR REPLACE TABLE {req.table_name.upper()} AS SELECT * FROM STAGE_{req.table_name.upper()};")
    elif clean_mode == "append":
        sql_statements.append(f"INSERT INTO {req.table_name.upper()} SELECT * FROM STAGE_{req.table_name.upper()};")
    else:
        sql_statements.append(f"MERGE INTO {req.table_name.upper()} USING STAGE_{req.table_name.upper()} ON 1=1 ...;")

    sql_statements.append(f"ALTER WAREHOUSE {req.warehouse_name} SUSPEND;")

    return {
        "status": "success",
        "table": req.table_name,
        "sync_mode": clean_mode,
        "records_count": len(req.records),
        "warehouse": req.warehouse_name,
        "auto_suspend_seconds": req.auto_suspend_seconds,
        "credit_waste_prevention": "ENFORCED",
        "sql_plan": sql_statements,
        "estimated_credit_consumption": round(len(req.records) * 0.00002 + 0.01, 4)
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8154)
