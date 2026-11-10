from typing import Any, Dict, List, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
import yaml

app = FastAPI(
    title="CI/CD DevSecOps Security Gate Microservice",
    description="Automated pull request security gate, manifest linter, and build pass/fail blocker",
    version="1.0.0"
)

class GatePolicy(BaseModel):
    max_critical: int = Field(0, description="Fail build if critical findings exceed this count")
    max_high: int = Field(0, description="Fail build if high findings exceed this count")
    allow_privileged: bool = False
    enforce_read_only_root_filesystem: bool = True

class PRCheckRequest(BaseModel):
    pull_request_id: str = Field(..., example="PR-104")
    author: str = Field(..., example="dev@company.com")
    manifest_yaml: str = Field(..., example="apiVersion: v1\nkind: Pod\nmetadata:\n  name: demo\nspec:\n  containers:\n  - name: test\n    image: nginx")
    policy: Optional[GatePolicy] = Field(default_factory=GatePolicy)

def lint_manifest(raw_yaml: str) -> List[Dict[str, Any]]:
    findings = []
    try:
        docs = list(yaml.safe_load_all(raw_yaml))
    except Exception as e:
        return [{"id": "SYNTAX_ERR", "severity": "CRITICAL", "message": f"Malformed YAML: {str(e)}"}]

    for doc in docs:
        if not isinstance(doc, dict):
            continue
        spec = doc.get("spec", {})
        # Check Pod / Deployment spec
        template_spec = spec.get("template", {}).get("spec", spec)
        containers = template_spec.get("containers", [])
        pod_sec = template_spec.get("securityContext", {})

        for c in containers:
            cname = c.get("name", "unknown")
            c_sec = c.get("securityContext", {})

            # Privileged check
            if c_sec.get("privileged") is True:
                findings.append({
                    "id": "SEC-001",
                    "severity": "CRITICAL",
                    "container": cname,
                    "rule": "Privileged Container Execution",
                    "remediation": "Set securityContext.privileged: false"
                })

            # Root user check
            if c_sec.get("runAsNonRoot") is not True and pod_sec.get("runAsNonRoot") is not True:
                findings.append({
                    "id": "SEC-002",
                    "severity": "HIGH",
                    "container": cname,
                    "rule": "Container May Run As Root User",
                    "remediation": "Set securityContext.runAsNonRoot: true"
                })

            # Read-only root filesystem
            if c_sec.get("readOnlyRootFilesystem") is not True:
                findings.append({
                    "id": "SEC-003",
                    "severity": "MEDIUM",
                    "container": cname,
                    "rule": "Mutable Root Filesystem",
                    "remediation": "Set securityContext.readOnlyRootFilesystem: true"
                })

            # Resource limits
            res = c.get("resources", {})
            if "limits" not in res:
                findings.append({
                    "id": "SEC-004",
                    "severity": "MEDIUM",
                    "container": cname,
                    "rule": "Missing CPU/Memory Resource Limits",
                    "remediation": "Configure resources.limits in container spec"
                })

    return findings

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "ci-security-gate-service"
    }

@app.post("/gate/evaluate")
def evaluate_gate(req: PRCheckRequest):
    policy = req.policy or GatePolicy()
    findings = lint_manifest(req.manifest_yaml)

    crit_count = sum(1 for f in findings if f["severity"] == "CRITICAL")
    high_count = sum(1 for f in findings if f["severity"] == "HIGH")
    med_count = sum(1 for f in findings if f["severity"] == "MEDIUM")

    passed = (crit_count <= policy.max_critical) and (high_count <= policy.max_high)
    status = "PASSED" if passed else "FAILED"

    # Generate Markdown Summary for PR Comment
    status_icon = "✅ **PASSED**" if passed else "❌ **FAILED (BLOCKING MERGE)**"
    md_lines = [
        f"### 🛡️ DevSecOps CI Security Gate: {status_icon}",
        f"**PR:** `{req.pull_request_id}` | **Author:** `{req.author}`",
        f"",
        f"- **Critical Findings:** {crit_count} (Max allowed: {policy.max_critical})",
        f"- **High Findings:** {high_count} (Max allowed: {policy.max_high})",
        f"- **Medium Findings:** {med_count}",
        f"",
        "| Rule ID | Severity | Container | Rule Description | Remediation |",
        "|---|---|---|---|---|"
    ]

    for f in findings:
        md_lines.append(f"| {f.get('id')} | **{f.get('severity')}** | {f.get('container', '-')} | {f.get('rule', f.get('message'))} | {f.get('remediation', '-')} |")

    if not findings:
        md_lines.append("| - | NONE | - | All shift-left security controls passed! | - |")

    return {
        "pull_request_id": req.pull_request_id,
        "status": status,
        "passed": passed,
        "critical_count": crit_count,
        "high_count": high_count,
        "medium_count": med_count,
        "total_findings": len(findings),
        "findings": findings,
        "pr_markdown_summary": "\n".join(md_lines)
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8150)
