"""
common_integrations.ebpf_telemetry_parser
=========================================
eBPF Kernel Syscall Telemetry Parser & Runtime Container Breakout Detector.
Evaluates runtime events (syscall, process comm, path, network destination) for MITRE signals.
"""
from dataclasses import asdict, dataclass
from typing import Any, Dict, List, Optional


@dataclass
class EBPFTraceEvent:
    syscall_name: str
    comm: str
    pod_name: str
    namespace: str = "default"
    target_path: str = ""
    dest_ip: str = ""
    dest_port: int = 0
    uid: int = 10001

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


def evaluate_syscall_event(event: EBPFTraceEvent) -> Optional[Dict[str, Any]]:
    """Evaluate a kernel trace event against runtime container threat rules."""
    sc = event.syscall_name.lower()
    path = event.target_path.lower()

    if sc == "ptrace":
        return {
            "alert_id": "RT-01",
            "severity": "CRITICAL",
            "mitre": "T1055",
            "title": "Process Injection / Ptrace Debugging Detected",
            "pod": event.pod_name,
            "details": f"Process '{event.comm}' invoked ptrace in pod '{event.pod_name}'"
        }

    if sc in ("execve", "execveat") and (path.startswith("/tmp/") or path.startswith("/dev/shm/")):
        return {
            "alert_id": "RT-02",
            "severity": "HIGH",
            "mitre": "T1059",
            "title": "Binary Executed from Writable Temp Directory",
            "pod": event.pod_name,
            "details": f"Executed '{event.target_path}' via '{event.comm}'"
        }

    if path in ("/etc/shadow", "/etc/passwd", "/var/run/docker.sock"):
        return {
            "alert_id": "RT-03",
            "severity": "CRITICAL",
            "mitre": "T1611",
            "title": "Sensitive Host File / Socket Accessed",
            "pod": event.pod_name,
            "details": f"Process '{event.comm}' accessed sensitive path '{event.target_path}'"
        }

    if event.dest_port in (4444, 1337, 6667, 9001) and event.dest_ip:
        return {
            "alert_id": "RT-04",
            "severity": "CRITICAL",
            "mitre": "T1071",
            "title": "Suspicious Outbound C2 Reverse Shell Port",
            "pod": event.pod_name,
            "details": f"Connection from '{event.comm}' to {event.dest_ip}:{event.dest_port}"
        }

    return None
