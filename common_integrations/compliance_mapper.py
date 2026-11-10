"""
common_integrations.compliance_mapper
====================================
Regulatory Compliance Framework Mapper for PCI-DSS v4.0, SOC 2, HIPAA, ISO 27001, and NIST 800-190.
Translates low-level technical vulnerabilities into executive compliance control statuses.
"""
from typing import Any, Dict, List

FRAMEWORK_CONTROLS = {
    "PCI-DSS-v4.0": {
        "name": "Payment Card Industry Data Security Standard v4.0",
        "controls": {
            "Req-2.2": {"name": "System Hardening & Least Functionality", "vuln_ids": ["V01", "V02", "V03", "V04", "V08", "V12"]},
            "Req-6.4": {"name": "Public Web Workload Protection", "vuln_ids": ["V10", "V11"]},
            "Req-8.2": {"name": "Secret & Credential Protection", "vuln_ids": ["V18", "V23"]}
        }
    },
    "SOC2-Type-II": {
        "name": "AICPA SOC 2 Type II Trust Services Criteria",
        "controls": {
            "CC6.1": {"name": "Logical Access Security", "vuln_ids": ["V02", "V18"]},
            "CC6.6": {"name": "System Boundaries & Network Controls", "vuln_ids": ["V03", "V04"]},
            "CC7.1": {"name": "System Configuration & Vulnerability Defense", "vuln_ids": ["V01", "V05", "V10", "V11"]}
        }
    },
    "HIPAA": {
        "name": "HIPAA Security Rule (45 CFR 164.312)",
        "controls": {
            "164.312(a)": {"name": "Access Control & Unique User ID", "vuln_ids": ["V02", "V18"]},
            "164.312(e)": {"name": "Transmission Security", "vuln_ids": ["V03", "V10"]}
        }
    },
    "ISO-27001": {
        "name": "ISO/IEC 27001:2022 Annex A.8",
        "controls": {
            "A.8.9": {"name": "Configuration Management", "vuln_ids": ["V01", "V08", "V11", "V13", "V14"]},
            "A.8.24": {"name": "Use of Cryptography & Secrets", "vuln_ids": ["V18"]}
        }
    },
    "NIST-800-190": {
        "name": "NIST SP 800-190 Container Security Guide",
        "controls": {
            "4.2.1": {"name": "Container Runtime Hardening", "vuln_ids": ["V01", "V02", "V05", "V10", "V11"]},
            "4.4.1": {"name": "Host OS Isolation", "vuln_ids": ["V03", "V04"]}
        }
    }
}


def map_findings_to_compliance(detected_vuln_ids: List[str]) -> Dict[str, Any]:
    """Evaluate compliance posture across 5 major industry regulatory frameworks."""
    detected_set = {str(v).upper() for v in detected_vuln_ids}
    report: Dict[str, Any] = {}

    for fw_id, fw_meta in FRAMEWORK_CONTROLS.items():
        controls_status = []
        passed_controls = 0
        total_controls = len(fw_meta["controls"])

        for ctrl_id, ctrl_meta in fw_meta["controls"].items():
            violated = [v for v in ctrl_meta["vuln_ids"] if v in detected_set]
            status = "PASS" if len(violated) == 0 else "FAIL"
            if status == "PASS":
                passed_controls += 1

            controls_status.append({
                "control_id": ctrl_id,
                "control_name": ctrl_meta["name"],
                "status": status,
                "violating_vulnerabilities": violated
            })

        readiness_pct = round((passed_controls / max(1, total_controls)) * 100.0, 1)
        report[fw_id] = {
            "framework_name": fw_meta["name"],
            "readiness_pct": readiness_pct,
            "passed_controls": passed_controls,
            "total_controls": total_controls,
            "overall_status": "COMPLIANT" if passed_controls == total_controls else "NON_COMPLIANT",
            "controls": controls_status
        }

    return report
