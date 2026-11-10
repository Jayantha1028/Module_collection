from datetime import datetime, timezone
from typing import Any, Dict, List, Optional
from fastapi import FastAPI, HTTPException
from fastapi.responses import HTMLResponse
from pydantic import BaseModel

app = FastAPI(
    title="K8s Compliance & Reporting Microservice",
    description="Generates executive compliance audits, CIS Benchmark evaluations, and risk scoring reports",
    version="1.0.0"
)

class FindingItem(BaseModel):
    id: str
    name: str
    severity: str  # CRITICAL, HIGH, MEDIUM, LOW
    plane: Optional[int] = 1
    mitre: Optional[str] = "T1611"
    standard: Optional[str] = "CIS Benchmark"
    description: Optional[str] = ""
    remediation: Optional[str] = ""

class AuditReportRequest(BaseModel):
    cluster_name: str = "production-cluster"
    environment: str = "Production"
    assessed_workloads_count: int = 1
    findings: List[FindingItem] = []

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "k8s-compliance-reporting-service",
        "supported_frameworks": ["CIS Benchmark v2.0", "NSA/CISA Hardening", "MITRE ATT&CK for Containers"]
    }

def calculate_compliance_score(findings: List[FindingItem]) -> float:
    # 100 max score, deduct based on severity
    score = 100.0
    for f in findings:
        sev = f.severity.upper()
        if sev == "CRITICAL":
            score -= 15.0
        elif sev == "HIGH":
            score -= 8.0
        elif sev == "MEDIUM":
            score -= 3.0
        elif sev == "LOW":
            score -= 1.0
    return max(0.0, round(score, 1))

@app.post("/reports/evaluate")
def evaluate_compliance(req: AuditReportRequest):
    score = calculate_compliance_score(req.findings)
    status = "COMPLIANT" if score >= 85 else ("WARNING" if score >= 60 else "NON_COMPLIANT")
    
    sev_counts = {"CRITICAL": 0, "HIGH": 0, "MEDIUM": 0, "LOW": 0}
    for f in req.findings:
        s = f.severity.upper()
        sev_counts[s] = sev_counts.get(s, 0) + 1

    return {
        "cluster_name": req.cluster_name,
        "environment": req.environment,
        "compliance_score": score,
        "posture_status": status,
        "total_findings": len(req.findings),
        "severity_summary": sev_counts,
        "timestamp": datetime.now(timezone.utc).isoformat()
    }

@app.post("/reports/generate/markdown")
def generate_markdown_report(req: AuditReportRequest):
    score = calculate_compliance_score(req.findings)
    status = "COMPLIANT" if score >= 85 else ("WARNING" if score >= 60 else "NON_COMPLIANT")
    now_str = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")

    lines = [
        f"# Kubernetes Security & Compliance Executive Audit",
        f"**Target Cluster:** `{req.cluster_name}` | **Environment:** `{req.environment}` | **Date:** {now_str}",
        f"",
        f"## Executive Summary",
        f"- **Overall Compliance Score:** **{score}/100**",
        f"- **Posture Status:** `{status}`",
        f"- **Assessed Workloads:** {req.assessed_workloads_count}",
        f"- **Total Security Findings:** {len(req.findings)}",
        f"",
        f"## Findings Breakdown",
        f"| ID | Severity | Name | Framework / Standard | MITRE | Remediation |",
        f"|---|---|---|---|---|---|"
    ]

    for f in req.findings:
        lines.append(f"| {f.id} | **{f.severity}** | {f.name} | {f.standard} | {f.mitre} | {f.remediation} |")

    if not req.findings:
        lines.append("| - | NONE | No vulnerabilities detected. Cluster passes all baseline checks. | - | - | - |")

    return {
        "cluster_name": req.cluster_name,
        "compliance_score": score,
        "markdown": "\n".join(lines)
    }

@app.post("/reports/generate/html", response_class=HTMLResponse)
def generate_html_report(req: AuditReportRequest):
    score = calculate_compliance_score(req.findings)
    score_color = "#10b981" if score >= 85 else ("#f59e0b" if score >= 60 else "#ef4444")
    now_str = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")

    rows = ""
    for f in req.findings:
        s_badge = f"<span style='background:#fee2e2;color:#991b1b;padding:3px 8px;border-radius:4px;font-weight:bold;'>{f.severity}</span>" if f.severity.upper() in ["CRITICAL", "HIGH"] else f"<span style='background:#fef3c7;color:#92400e;padding:3px 8px;border-radius:4px;'>{f.severity}</span>"
        rows += f"""<tr>
            <td style="padding:10px;border-bottom:1px solid #e5e7eb;font-family:monospace;font-weight:bold;">{f.id}</td>
            <td style="padding:10px;border-bottom:1px solid #e5e7eb;">{s_badge}</td>
            <td style="padding:10px;border-bottom:1px solid #e5e7eb;font-weight:500;">{f.name}</td>
            <td style="padding:10px;border-bottom:1px solid #e5e7eb;color:#4b5563;">{f.standard}</td>
            <td style="padding:10px;border-bottom:1px solid #e5e7eb;font-family:monospace;color:#6366f1;">{f.mitre}</td>
            <td style="padding:10px;border-bottom:1px solid #e5e7eb;font-size:0.9em;color:#374151;">{f.remediation}</td>
        </tr>"""

    if not req.findings:
        rows = "<tr><td colspan='6' style='padding:20px;text-align:center;color:#10b981;font-weight:bold;'>✅ All Security Controls Passed. Zero Findings.</td></tr>"

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Executive Compliance Audit - {req.cluster_name}</title>
<style>
body {{ font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; background: #f8fafc; color: #0f172a; margin: 0; padding: 40px; }}
.card {{ background: white; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); padding: 32px; max-width: 1000px; margin: 0 auto; }}
.header {{ display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #f1f5f9; padding-bottom: 24px; }}
.score-badge {{ font-size: 36px; font-weight: 800; color: {score_color}; background: #f8fafc; padding: 12px 24px; border-radius: 10px; border: 2px solid {score_color}; }}
table {{ width: 100%; border-collapse: collapse; margin-top: 24px; }}
th {{ background: #f1f5f9; text-align: left; padding: 12px; font-size: 0.85em; text-transform: uppercase; color: #64748b; }}
</style>
</head>
<body>
<div class="card">
  <div class="header">
    <div>
      <h1 style="margin:0 0 8px 0; font-size: 24px;">Kubernetes Security & Compliance Audit</h1>
      <div style="color: #64748b;">Target Cluster: <b>{req.cluster_name}</b> | Environment: <b>{req.environment}</b> | {now_str}</div>
    </div>
    <div class="score-badge">{score}/100</div>
  </div>
  <h2 style="font-size: 18px; margin-top: 28px; margin-bottom: 12px;">Detailed Security Findings ({len(req.findings)})</h2>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Severity</th>
        <th>Vulnerability Name</th>
        <th>Framework Standard</th>
        <th>MITRE ATT&CK</th>
        <th>Remediation Action</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
</div>
</body>
</html>"""
    return HTMLResponse(content=html)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8012)
