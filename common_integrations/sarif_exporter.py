"""
common_integrations.sarif_exporter
==================================
Official OASIS SARIF v2.1.0 (Static Analysis Results Interchange Format) Exporter.
Enables seamless integration into GitHub Advanced Security Code Scanning & GitLab Security.
"""
import json
from typing import Any, Dict, List, Optional

SARIF_SCHEMA = "https://raw.githubusercontent.com/oasis-tcs/sarif-spec/master/Schemata/sarif-schema-2.1.0.json"

SEVERITY_TO_SARIF_LEVEL = {
    "CRITICAL": "error",
    "HIGH": "error",
    "MEDIUM": "warning",
    "LOW": "note",
    "INFORMATIONAL": "note",
}


def export_findings_to_sarif(
    findings: List[Dict[str, Any]],
    tool_name: str = "CommonSecurityScanner",
    tool_version: str = "1.0.0",
    artifact_uri: str = "manifest.yaml"
) -> Dict[str, Any]:
    """Convert security scan findings list into an official SARIF v2.1.0 dictionary."""
    rules_map: Dict[str, Dict[str, Any]] = {}
    results: List[Dict[str, Any]] = []

    for f in findings:
        rule_id = str(f.get("id") or f.get("rule_id") or "SEC-000")
        severity = str(f.get("severity", "MEDIUM")).upper()
        level = SEVERITY_TO_SARIF_LEVEL.get(severity, "warning")
        title = str(f.get("name") or f.get("title") or rule_id)
        description = str(f.get("description") or title)
        remediation = str(f.get("remediation") or "Review security configuration.")
        target_uri = str(f.get("target") or artifact_uri)
        line_num = int(f.get("line_number", 1))

        if rule_id not in rules_map:
            rules_map[rule_id] = {
                "id": rule_id,
                "name": title.replace(" ", ""),
                "shortDescription": {"text": title},
                "fullDescription": {"text": description},
                "help": {
                    "text": f"Remediation: {remediation}",
                    "markdown": f"**{title}** ({severity})\n\n{description}\n\n**Remediation:** `{remediation}`"
                },
                "defaultConfiguration": {"level": level},
                "properties": {
                    "tags": ["security", severity.lower()],
                    "precision": "high"
                }
            }

        results.append({
            "ruleId": rule_id,
            "level": level,
            "message": {"text": f"{title}: {remediation}"},
            "locations": [
                {
                    "physicalLocation": {
                        "artifactLocation": {"uri": target_uri},
                        "region": {"startLine": max(1, line_num)}
                    }
                }
            ]
        })

    return {
        "$schema": SARIF_SCHEMA,
        "version": "2.1.0",
        "runs": [
            {
                "tool": {
                    "driver": {
                        "name": tool_name,
                        "version": tool_version,
                        "rules": list(rules_map.values())
                    }
                },
                "results": results
            }
        ]
    }
