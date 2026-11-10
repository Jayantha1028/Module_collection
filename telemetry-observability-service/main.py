from typing import Any, Dict, List, Optional
from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel, Field

try:
    from observability_engine import (
        StructuredLogStore,
        TelemetryTracker,
        AnomalyAlarmEngine,
        global_log_store,
        global_telemetry_tracker,
        global_alarm_engine,
    )
except ImportError:
    from .observability_engine import (
        StructuredLogStore,
        TelemetryTracker,
        AnomalyAlarmEngine,
        global_log_store,
        global_telemetry_tracker,
        global_alarm_engine,
    )

app = FastAPI(
    title="Centralized Telemetry & Observability Microservice",
    description="Cross-service structured log aggregation, latency tracking, and real-time anomaly alarm engine",
    version="1.0.0"
)

class LogIngestRequest(BaseModel):
    service: str = Field(..., example="product-service")
    level: str = Field("INFO", example="INFO")
    event: str = Field(..., example="product_query_cache_hit")
    message: str = Field(..., example="Fetched product ID 49 from Redis cache")
    correlation_id: Optional[str] = None
    http_method: Optional[str] = None
    http_path: Optional[str] = None
    http_status: Optional[int] = None
    duration_ms: Optional[float] = None
    extra: Optional[Dict[str, Any]] = None

class MetricRecordRequest(BaseModel):
    service: str = Field(..., example="order-service")
    duration_ms: float = Field(..., example=42.5)
    http_status: int = Field(..., example=200)

class AlarmSimulateRequest(BaseModel):
    alarm_type: str = Field("5xx_spike", example="5xx_spike")  # 5xx_spike, latency_spike, outage

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "telemetry-observability-service",
        "buffered_logs_count": len(global_log_store.tail(1000)),
        "active_alarms": len(global_alarm_engine.get_active_alarms())
    }

@app.post("/logs/ingest")
def ingest_log(req: LogIngestRequest):
    entry = global_log_store.add(
        service=req.service,
        level=req.level,
        event=req.event,
        message=req.message,
        correlation_id=req.correlation_id,
        http_method=req.http_method,
        http_path=req.http_path,
        http_status=req.http_status,
        duration_ms=req.duration_ms,
        extra=req.extra
    )
    if req.duration_ms is not None and req.http_status is not None:
        global_telemetry_tracker.record(req.duration_ms, req.http_status)
    return {"status": "ingested", "log": entry}

@app.get("/logs")
def query_logs(
    service: Optional[str] = Query(None),
    level: Optional[str] = Query(None),
    limit: int = Query(50, ge=1, le=500)
):
    logs = global_log_store.tail(limit=limit, service=service, level=level)
    return {
        "total_returned": len(logs),
        "logs": logs
    }

@app.post("/telemetry/record")
def record_telemetry(req: MetricRecordRequest):
    global_telemetry_tracker.record(req.duration_ms, req.http_status)
    # Check alarms
    global_alarm_engine.evaluate(global_telemetry_tracker)
    return {"status": "recorded"}

@app.get("/telemetry/metrics")
def get_metrics():
    summary = global_telemetry_tracker.summary()
    return summary

@app.get("/alarms")
def get_alarms():
    return {
        "active_alarms": global_alarm_engine.get_active_alarms(),
        "alarm_history": global_alarm_engine.get_history()
    }

@app.post("/alarms/simulate")
def simulate_alarm(req: AlarmSimulateRequest):
    result = global_alarm_engine.simulate(req.alarm_type)
    return result

@app.post("/alarms/reset")
def reset_alarms():
    global_alarm_engine.reset()
    return {"message": "All active alarms reset successfully."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8152)
