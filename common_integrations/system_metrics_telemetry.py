"""
common_integrations.system_metrics_telemetry
============================================
Host hardware resource probing and memory pressure analysis module.
"""
import psutil
import datetime
from typing import Dict, Any

def collect_host_telemetry() -> Dict[str, Any]:
    """Extracts CPU, Memory, Disk, and Battery runtime metrics."""
    vm = psutil.virtual_memory()
    cpu_pct = psutil.cpu_percent(interval=0.1)
    disk = psutil.disk_usage('/')
    
    return {
        "timestamp": datetime.datetime.utcnow().isoformat(),
        "cpu_usage_pct": cpu_pct,
        "ram_total_bytes": vm.total,
        "ram_used_bytes": vm.used,
        "ram_pct": vm.percent,
        "memory_pressure": "HIGH" if vm.percent > 85 else "NORMAL",
        "disk_free_gb": round(disk.free / (1024**3), 2)
    }
