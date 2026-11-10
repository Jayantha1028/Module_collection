from datetime import datetime, timezone
from pathlib import Path
from typing import Dict, List, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import yaml

app = FastAPI(
    title="dbt Data Transformation Runner Service",
    description="Microservice for data transformation orchestration, dbt model compilation, and dependency lineage graphs",
    version="1.0.0"
)

PROJECT_DIR = Path(__file__).parent / "my_project"

class CompileRequest(BaseModel):
    model_name: str

class RunRequest(BaseModel):
    target_models: Optional[List[str]] = None

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "dbt-runner-service",
        "project_dir_exists": PROJECT_DIR.exists()
    }

@app.get("/dbt/project")
def get_project_info():
    yml_path = PROJECT_DIR / "dbt_project.yml"
    if not yml_path.exists():
        raise HTTPException(status_code=404, detail="dbt_project.yml not found")
    with open(yml_path, "r", encoding="utf-8") as f:
        data = yaml.safe_load(f)
    return {
        "name": data.get("name"),
        "version": data.get("version"),
        "profile": data.get("profile"),
        "model_paths": data.get("model-paths")
    }

@app.get("/dbt/models")
def list_models():
    models = []
    models_dir = PROJECT_DIR / "models"
    for sql_file in models_dir.rglob("*.sql"):
        with open(sql_file, "r", encoding="utf-8") as f:
            content = f.read()
        models.append({
            "name": sql_file.stem,
            "path": str(sql_file.relative_to(PROJECT_DIR)),
            "line_count": len(content.splitlines()),
            "raw_sql": content
        })
    return {
        "total_models": len(models),
        "models": models
    }

@app.post("/dbt/compile")
def compile_model(req: CompileRequest):
    models_dir = PROJECT_DIR / "models"
    matching = list(models_dir.rglob(f"{req.model_name}.sql"))
    if not matching:
        raise HTTPException(status_code=404, detail=f"Model '{req.model_name}' not found")

    with open(matching[0], "r", encoding="utf-8") as f:
        raw_sql = f.read()

    # Simple Jinja macro replacement for {{ ref(...) }} and {{ config(...) }}
    compiled_sql = raw_sql
    # Strip config block
    import re
    compiled_sql = re.sub(r"\{\{\s*config\([^)]*\)\s*\}\}", "-- Configured materialized view", compiled_sql)
    # Replace ref
    compiled_sql = re.sub(r"\{\{\s*ref\(['\"](.*?)['\"]\)\s*\}\}", r"\1", compiled_sql)

    return {
        "model_name": req.model_name,
        "compiled": True,
        "raw_sql": raw_sql,
        "compiled_sql": compiled_sql.strip()
    }

@app.post("/dbt/run")
def run_models(req: RunRequest):
    now = datetime.now(timezone.utc).isoformat()
    # Simulate dbt run pipeline execution
    models_dir = PROJECT_DIR / "models"
    all_models = [p.stem for p in models_dir.rglob("*.sql")]
    to_run = req.target_models if req.target_models else all_models

    execution_results = []
    for m in to_run:
        execution_results.append({
            "model": m,
            "status": "SUCCESS",
            "execution_time_ms": 142,
            "rows_affected": 2
        })

    return {
        "run_id": f"dbt-run-{datetime.now(timezone.utc).strftime('%Y%m%d%H%M%S')}",
        "status": "PASSED",
        "started_at": now,
        "total_executed": len(execution_results),
        "results": execution_results
    }

@app.get("/dbt/lineage")
def get_lineage():
    return {
        "nodes": [
            {"id": "source.raw_data", "type": "source"},
            {"id": "model.my_first_dbt_model", "type": "model", "materialization": "view"},
            {"id": "model.my_second_dbt_model", "type": "model", "materialization": "view"}
        ],
        "edges": [
            {"from": "source.raw_data", "to": "model.my_first_dbt_model"},
            {"from": "model.my_first_dbt_model", "to": "model.my_second_dbt_model"}
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8110)
