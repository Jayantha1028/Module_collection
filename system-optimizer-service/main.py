"""
system-optimizer-service
========================
FastAPI microservice for host & container hardware telemetry, memory pressure analysis,
CPU quota recommendations, and resource reclamation plans.
"""
import os
import psutil
import datetime
from typing import Dict, Any, List, Optional
from fastapi import FastAPI
from pydantic import BaseModel, Field

app = FastAPI(
    title="System Resource Optimizer Service",
    version="1.0.0",
    description="Cross-platform hardware telemetry, memory pressure balancer, and resource reclamation planner"
)

class OptimizeRequest(BaseModel):
    aggressive_mode: bool = Field(default=False, description="Reclaim non-essential caches and suggest process renicing")
    target_memory_percent: float = Field(default=75.0, ge=40.0, le=95.0)

@app.get("/")
def root():
    return {
        "service": "system-optimizer-service",
        "status": "healthy",
        "port": 8162,
        "version": "1.0.0"
    }

@app.get("/health")
def health():
    return {"status": "ok", "timestamp": datetime.datetime.utcnow().isoformat()}

@app.get("/metrics/telemetry")
def get_telemetry():
    vm = psutil.virtual_memory()
    cpu_percent = psutil.cpu_percent(interval=0.1)
    disk = psutil.disk_usage('/')
    
    battery_info = None
    if hasattr(psutil, "sensors_battery"):
        b = psutil.sensors_battery()
        if b:
            battery_info = {
                "percent": b.percent,
                "power_plugged": b.power_plugged,
                "secsleft": b.secsleft
            }

    return {
        "timestamp": datetime.datetime.utcnow().isoformat(),
        "cpu": {
            "usage_percent": cpu_percent,
            "logical_cores": psutil.cpu_count(logical=True),
            "physical_cores": psutil.cpu_count(logical=False)
        },
        "memory": {
            "total_bytes": vm.total,
            "available_bytes": vm.available,
            "used_bytes": vm.used,
            "percent": vm.percent,
            "pressure_level": "CRITICAL" if vm.percent > 90 else "WARNING" if vm.percent > 80 else "NOMINAL"
        },
        "disk": {
            "total_bytes": disk.total,
            "free_bytes": disk.free,
            "percent": disk.percent
        },
        "battery": battery_info
    }

@app.post("/optimizer/plan")
def generate_optimization_plan(req: OptimizeRequest):
    vm = psutil.virtual_memory()
    current_used_percent = vm.percent
    
    recommendations = []
    actions_to_execute = []
    
    if current_used_percent > req.target_memory_percent:
        excess = current_used_percent - req.target_memory_percent
        recommendations.append(f"Memory is {excess:.1f}% above target threshold ({req.target_memory_percent}%).")
        actions_to_execute.append("Flush OS file cache buffers (sync && purge)")
        actions_to_execute.append("Trigger runtime Python garbage collection and release allocated arenas")
    else:
        recommendations.append(f"Memory usage is nominal ({current_used_percent:.1f}% vs threshold {req.target_memory_percent}%).")

    if req.aggressive_mode:
        actions_to_execute.append("Renice background daemon processes to lower scheduling priority")
        actions_to_execute.append("Compact inactive shared memory segments")

    return {
        "status": "plan_generated",
        "current_memory_percent": current_used_percent,
        "target_memory_percent": req.target_memory_percent,
        "aggressive_mode": req.aggressive_mode,
        "recommendations": recommendations,
        "action_plan": actions_to_execute,
        "estimated_reclaimable_mb": round((vm.total * max(0.0, current_used_percent - req.target_memory_percent) / 100) / (1024 * 1024), 2)
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8162)
