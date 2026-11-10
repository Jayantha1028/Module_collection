from typing import Any, Dict, List, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pandas as pd

app = FastAPI(
    title="PySpark & Big Data Analytics Service",
    description="Batch analytics, dataframe aggregation, and distributed map-reduce microservice",
    version="1.0.0"
)

class DataframeSummaryRequest(BaseModel):
    records: List[Dict[str, Any]]

class FilterRequest(BaseModel):
    records: List[Dict[str, Any]]
    column: str
    operator: str = "gt"  # gt, lt, eq, contains
    value: Any

class WordCountRequest(BaseModel):
    text: str

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "pyspark-analytics-service",
        "engine": "PySpark / Vectorized Data Engine"
    }

@app.get("/spark/status")
def spark_status():
    return {
        "application_name": "MySparkApp",
        "master": "local[*]",
        "status": "READY",
        "active_executors": 4,
        "memory_configured": "2G"
    }

@app.post("/spark/dataframes/summary")
def dataframe_summary(req: DataframeSummaryRequest):
    if not req.records:
        raise HTTPException(status_code=400, detail="Empty records provided")
    
    df = pd.DataFrame(req.records)
    num_cols = df.select_dtypes(include=['number']).columns.tolist()
    
    summary = {}
    for col in num_cols:
        summary[col] = {
            "count": int(df[col].count()),
            "mean": float(df[col].mean()),
            "std": float(df[col].std()) if len(df) > 1 else 0.0,
            "min": float(df[col].min()),
            "max": float(df[col].max())
        }
        
    return {
        "total_rows": len(df),
        "total_columns": len(df.columns),
        "columns": list(df.columns),
        "numeric_summary": summary
    }

@app.post("/spark/dataframes/filter")
def filter_records(req: FilterRequest):
    if not req.records:
        return {"total": 0, "results": []}

    df = pd.DataFrame(req.records)
    if req.column not in df.columns:
        raise HTTPException(status_code=400, detail=f"Column '{req.column}' not in dataframe")

    if req.operator == "gt":
        filtered = df[df[req.column] > req.value]
    elif req.operator == "lt":
        filtered = df[df[req.column] < req.value]
    elif req.operator == "eq":
        filtered = df[df[req.column] == req.value]
    elif req.operator == "contains":
        filtered = df[df[req.column].astype(str).str.contains(str(req.value), case=False, na=False)]
    else:
        raise HTTPException(status_code=400, detail=f"Unsupported operator '{req.operator}'")

    return {
        "matched_count": len(filtered),
        "results": filtered.to_dict(orient="records")
    }

@app.post("/spark/jobs/word-count")
def word_count(req: WordCountRequest):
    words = req.text.lower().split()
    counts = {}
    for w in words:
        w_clean = "".join(c for c in w if c.isalnum())
        if w_clean:
            counts[w_clean] = counts.get(w_clean, 0) + 1

    sorted_counts = sorted(counts.items(), key=lambda x: x[1], reverse=True)
    return {
        "total_words": len(words),
        "unique_words": len(counts),
        "top_frequencies": [{"word": k, "count": v} for k, v in sorted_counts[:20]]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8040)
