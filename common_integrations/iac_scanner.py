"""
common_integrations.iac_scanner
===============================
Static Infrastructure-as-Code (IaC) security auditor for Dockerfiles and Terraform HCL.
Evaluates CIS Docker Benchmark and cloud hardening rules with zero external dependencies.
"""
import re
from typing import Any, Dict, List

SENSITIVE_FILES_RE = re.compile(r"(id_rsa|id_dsa|\.pem|\.key|\.env|credentials|secret|passwd|shadow)", re.IGNORECASE)
CURL_BASH_RE = re.compile(r"(curl|wget)\s+[^|]+\|\s*(sh|bash)", re.IGNORECASE)
HARDCODED_SECRET_RE = re.compile(
    r"(?i)(?:[a-z0-9_-]*(?:password|secret|token|api_key|access_key)[a-z0-9_-]*)\s*[:=]\s*['\"]?([^\s'\"]{6,})['\"]?"
)


def scan_dockerfile(dockerfile_content: str, filename: str = "Dockerfile") -> Dict[str, Any]:
    """Audit Dockerfile instructions against CIS Docker Benchmark rules."""
    lines = dockerfile_content.splitlines()
    findings: List[Dict[str, Any]] = []
    has_user = False
    has_healthcheck = False
    has_from = False

    for idx, line in enumerate(lines, start=1):
        stripped = line.strip()
        if not stripped or stripped.startswith("#"):
            continue
        parts = stripped.split(None, 1)
        instr = parts[0].upper()
        args = parts[1] if len(parts) > 1 else ""

        if instr == "FROM":
            has_from = True
            img = args.split()[0]
            if ":" not in img or img.endswith(":latest"):
                findings.append({
                    "rule_id": "D01",
                    "line_number": idx,
                    "severity": "MEDIUM",
                    "title": "Mutable Base Image Tag",
                    "description": f"Image '{img}' uses mutable :latest or unpinned tag",
                    "remediation": "Pin base image to semantic version or SHA256 digest"
                })
        elif instr == "USER":
            if args.lower() in ("0", "root"):
                findings.append({
                    "rule_id": "D02",
                    "line_number": idx,
                    "severity": "HIGH",
                    "title": "Container Explicitly Runs as Root",
                    "description": "USER switches to root (UID 0)",
                    "remediation": "Use non-root USER (e.g. USER 10001)"
                })
            else:
                has_user = True
        elif instr == "HEALTHCHECK":
            has_healthcheck = True
        elif instr == "RUN":
            if CURL_BASH_RE.search(args):
                findings.append({
                    "rule_id": "D03",
                    "line_number": idx,
                    "severity": "HIGH",
                    "title": "Insecure Pipe Execution (curl | sh)",
                    "description": "Remote script piped directly into shell without verification",
                    "remediation": "Download, verify SHA256 checksum, then run"
                })
        elif instr in ("ADD", "COPY"):
            if SENSITIVE_FILES_RE.search(args):
                findings.append({
                    "rule_id": "D05",
                    "line_number": idx,
                    "severity": "CRITICAL",
                    "title": "Sensitive File Copied into Image",
                    "description": f"Credential/key file copied: {args}",
                    "remediation": "Mount secrets at runtime; never bake into container layers"
                })
        elif instr in ("ENV", "ARG"):
            if HARDCODED_SECRET_RE.search(args):
                findings.append({
                    "rule_id": "D06",
                    "line_number": idx,
                    "severity": "CRITICAL",
                    "title": "Hardcoded Secret in Build Instruction",
                    "description": f"Secret assignment found in {instr}",
                    "remediation": "Use runtime secrets or BuildKit --mount=type=secret"
                })

    if has_from and not has_user:
        findings.append({
            "rule_id": "D07",
            "line_number": len(lines),
            "severity": "HIGH",
            "title": "Missing Non-Root USER Instruction",
            "description": "No USER specified; defaults to root (UID 0)",
            "remediation": "Add 'USER 10001' before CMD/ENTRYPOINT"
        })

    if has_from and not has_healthcheck:
        findings.append({
            "rule_id": "D08",
            "line_number": len(lines),
            "severity": "LOW",
            "title": "Missing HEALTHCHECK Instruction",
            "description": "Container lacks native Docker HEALTHCHECK probe",
            "remediation": "Add HEALTHCHECK instruction for orchestration reliability"
        })

    score = max(0.0, 100.0 - sum(25 if f["severity"] == "CRITICAL" else (15 if f["severity"] == "HIGH" else (5 if f["severity"] == "MEDIUM" else 2)) for f in findings))
    return {
        "target": filename,
        "type": "dockerfile",
        "compliance_score": round(score, 1),
        "total_findings": len(findings),
        "findings": findings
    }


def scan_terraform_hcl(tf_content: str, filename: str = "main.tf") -> Dict[str, Any]:
    """Static security check for Terraform HCL Kubernetes and Cloud configurations."""
    findings: List[Dict[str, Any]] = []
    lines = tf_content.splitlines()

    for idx, line in enumerate(lines, start=1):
        low = line.lower().strip()
        if low.startswith("#") or low.startswith("//"):
            continue
        if re.search(r'privileged\s*=\s*true', low):
            findings.append({
                "rule_id": "TF01",
                "line_number": idx,
                "severity": "CRITICAL",
                "title": "Privileged Container in Terraform",
                "remediation": "Set privileged = false"
            })
        if re.search(r'host_network\s*=\s*true', low):
            findings.append({
                "rule_id": "TF02",
                "line_number": idx,
                "severity": "HIGH",
                "title": "Host Network Enabled in Terraform",
                "remediation": "Set host_network = false"
            })
        if re.search(r'cidr_blocks\s*=\s*\[\s*"0\.0\.0\.0/0"\s*\]', low):
            findings.append({
                "rule_id": "TF03",
                "line_number": idx,
                "severity": "HIGH",
                "title": "Unrestricted 0.0.0.0/0 CIDR Block",
                "remediation": "Restrict ingress CIDR to trusted corporate ranges"
            })

    score = max(0.0, 100.0 - (len(findings) * 20.0))
    return {
        "target": filename,
        "type": "terraform",
        "compliance_score": round(score, 1),
        "total_findings": len(findings),
        "findings": findings
    }
