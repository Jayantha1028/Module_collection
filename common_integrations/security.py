"""
common_integrations.security
============================
Reusable Kubernetes security scanner, CVE intelligence lookup, and CI/CD security gate.
Directly importable into any Python project or CI/CD workflow.
"""
from typing import Any, Dict, List, Optional
import yaml

# Reference standard 56-vulnerability signatures
TAXONOMY_SIGNATURES = {
    "V01": {"name": "Privileged Container Execution", "severity": "CRITICAL", "standard": "CIS 5.2.1", "mitre": "T1611", "remediation": "Set securityContext.privileged: false"},
    "V02": {"name": "Root User Execution (UID 0)", "severity": "HIGH", "standard": "CIS 5.2.6", "mitre": "T1611", "remediation": "Set securityContext.runAsNonRoot: true"},
    "V03": {"name": "Host Network Namespace Sharing", "severity": "HIGH", "standard": "CIS 5.2.4", "mitre": "T1611", "remediation": "Set hostNetwork: false"},
    "V04": {"name": "Host PID / IPC Namespace Sharing", "severity": "HIGH", "standard": "CIS 5.2.2", "mitre": "T1611", "remediation": "Set hostPID: false and hostIPC: false"},
    "V05": {"name": "Dangerous Kernel Capabilities (SYS_ADMIN)", "severity": "CRITICAL", "standard": "CIS 5.2.8", "mitre": "T1611", "remediation": "Drop CAP_SYS_ADMIN and drop ALL"},
    "V08": {"name": "Missing Drop ALL Capabilities", "severity": "MEDIUM", "standard": "CIS 5.2.8", "mitre": "T1611", "remediation": "Add securityContext.capabilities.drop: ['ALL']"},
    "V10": {"name": "Allow Privilege Escalation", "severity": "HIGH", "standard": "CIS 5.2.5", "mitre": "T1611", "remediation": "Set securityContext.allowPrivilegeEscalation: false"},
    "V11": {"name": "Writable Root Filesystem", "severity": "LOW", "standard": "CIS 5.2.7", "mitre": "T1611", "remediation": "Set securityContext.readOnlyRootFilesystem: true"},
    "V13": {"name": "Missing CPU Resource Limits", "severity": "LOW", "standard": "C-0009", "mitre": "T1499", "remediation": "Specify resources.limits.cpu"},
    "V14": {"name": "Missing Memory Resource Limits", "severity": "LOW", "standard": "C-0009", "mitre": "T1499", "remediation": "Specify resources.limits.memory"},
    "V18": {"name": "Plaintext Secrets in Environment Variables", "severity": "HIGH", "standard": "CIS 5.4.1", "mitre": "T1552", "remediation": "Use SecretKeyRef instead of plaintext value"}
}

KNOWN_IMAGE_CVES = {
    "debian:9": [
        {"cve_id": "CVE-2016-2779", "severity": "HIGH", "cvss_score": 7.8, "package": "bsdutils", "description": "runuser tty hijack privilege escalation"},
        {"cve_id": "CVE-2020-27350", "severity": "MEDIUM", "cvss_score": 6.7, "package": "apt", "description": "integer overflow in apt package validation"}
    ],
    "node:14": [
        {"cve_id": "CVE-2021-22918", "severity": "HIGH", "cvss_score": 7.5, "package": "node", "description": "buffer overflow in libuv DNS resolver"},
        {"cve_id": "CVE-2021-3918", "severity": "MEDIUM", "cvss_score": 5.3, "package": "json-schema", "description": "prototype pollution vulnerability"}
    ],
    "python:3.8": [
        {"cve_id": "CVE-2021-3177", "severity": "CRITICAL", "cvss_score": 9.8, "package": "python", "description": "buffer overflow in PyCArg_repr"}
    ]
}

def scan_k8s_manifest(manifest: Any) -> List[Dict[str, Any]]:
    """Scan a raw YAML string or Python dictionary manifest for security vulnerabilities."""
    if isinstance(manifest, str):
        try:
            docs = list(yaml.safe_load_all(manifest))
        except Exception as e:
            return [{"id": "ERR", "severity": "CRITICAL", "name": f"YAML Parse Error: {e}"}]
    elif isinstance(manifest, dict):
        docs = [manifest]
    else:
        return []

    findings = []
    for doc in docs:
        if not isinstance(doc, dict):
            continue
        spec = doc.get("spec", {})
        pod_spec = spec.get("template", {}).get("spec", spec)
        pod_sec = pod_spec.get("securityContext", {})
        containers = pod_spec.get("containers", [])

        if pod_spec.get("hostNetwork") is True:
            findings.append({**TAXONOMY_SIGNATURES["V03"], "id": "V03"})
        if pod_spec.get("hostPID") is True or pod_spec.get("hostIPC") is True:
            findings.append({**TAXONOMY_SIGNATURES["V04"], "id": "V04"})

        for c in containers:
            c_sec = c.get("securityContext", {})
            if c_sec.get("privileged") is True:
                findings.append({**TAXONOMY_SIGNATURES["V01"], "id": "V01", "container": c.get("name")})
            if c_sec.get("runAsNonRoot") is not True and pod_sec.get("runAsNonRoot") is not True:
                findings.append({**TAXONOMY_SIGNATURES["V02"], "id": "V02", "container": c.get("name")})
            if c_sec.get("allowPrivilegeEscalation", True) is True and not c_sec.get("privileged"):
                findings.append({**TAXONOMY_SIGNATURES["V10"], "id": "V10", "container": c.get("name")})
            if c_sec.get("readOnlyRootFilesystem") is not True:
                findings.append({**TAXONOMY_SIGNATURES["V11"], "id": "V11", "container": c.get("name")})

            res = c.get("resources", {})
            limits = res.get("limits", {})
            if "cpu" not in limits:
                findings.append({**TAXONOMY_SIGNATURES["V13"], "id": "V13", "container": c.get("name")})
            if "memory" not in limits:
                findings.append({**TAXONOMY_SIGNATURES["V14"], "id": "V14", "container": c.get("name")})

            caps = c_sec.get("capabilities", {})
            drop = [str(x).upper() for x in caps.get("drop", [])]
            add = [str(x).upper() for x in caps.get("add", [])]
            if "ALL" not in drop:
                findings.append({**TAXONOMY_SIGNATURES["V08"], "id": "V08", "container": c.get("name")})
            if "SYS_ADMIN" in add or "CAP_SYS_ADMIN" in add:
                findings.append({**TAXONOMY_SIGNATURES["V05"], "id": "V05", "container": c.get("name")})

            for env_var in c.get("env", []):
                val = str(env_var.get("value", "")).lower()
                name = str(env_var.get("name", "")).lower()
                if any(k in name for k in ["password", "secret", "token", "apikey"]) and val:
                    findings.append({**TAXONOMY_SIGNATURES["V18"], "id": "V18", "container": c.get("name")})

    # Deduplicate findings
    unique = []
    seen = set()
    for f in findings:
        key = (f["id"], f.get("container", ""))
        if key not in seen:
            seen.add(key)
            unique.append(f)
    return unique


def lookup_cve(identifier_or_image: str) -> List[Dict[str, Any]]:
    """Lookup known vulnerabilities for a container image or specific CVE ID."""
    clean = identifier_or_image.strip().lower()
    # Check exact or partial image match
    for img, cves in KNOWN_IMAGE_CVES.items():
        if clean in img or img in clean:
            return cves
    # Check CVE ID match
    clean_cve = identifier_or_image.strip().upper()
    results = []
    for img, cves in KNOWN_IMAGE_CVES.items():
        for c in cves:
            if c["cve_id"] == clean_cve:
                results.append({**c, "base_image": img})
    return results


def evaluate_pr_security_gate(
    manifest_yaml: str,
    max_critical: int = 0,
    max_high: int = 0
) -> Dict[str, Any]:
    """Evaluates PR manifest against gating thresholds and generates Markdown summary."""
    findings = scan_k8s_manifest(manifest_yaml)
    crits = sum(1 for f in findings if f["severity"] == "CRITICAL")
    highs = sum(1 for f in findings if f["severity"] == "HIGH")
    passed = (crits <= max_critical) and (highs <= max_high)

    md_lines = [
        f"### 🛡️ CI Security Gate: {'✅ **PASSED**' if passed else '❌ **FAILED (BLOCKING)**'}",
        f"- Critical Findings: {crits} (max allowed: {max_critical})",
        f"- High Findings: {highs} (max allowed: {max_high})",
        f"- Total Findings: {len(findings)}",
        "",
        "| ID | Severity | Rule | Remediation |",
        "|---|---|---|---|"
    ]
    for f in findings:
        md_lines.append(f"| {f['id']} | **{f['severity']}** | {f['name']} | {f['remediation']} |")
    if not findings:
        md_lines.append("| - | NONE | All checks passed! | - |")

    return {
        "passed": passed,
        "critical_count": crits,
        "high_count": highs,
        "total_findings": len(findings),
        "findings": findings,
        "markdown_summary": "\n".join(md_lines)
    }
