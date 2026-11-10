"""
common_integrations.xai_threat_attribution
==========================================
Explainable AI (XAI) & Threat Attribution Engine.
Decomposes continuous security risk scores into feature-level marginal risk drivers.
"""
from typing import Any, Dict, List, Optional


STANDARD_FEATURE_IMPACTS = {
    "privileged_container": {"weight": -25.0, "name": "Privileged Container Execution", "type": "vulnerability"},
    "root_user": {"weight": -15.0, "name": "Running as Root (UID 0)", "type": "vulnerability"},
    "missing_read_only_fs": {"weight": -8.0, "name": "Writable Root Filesystem", "type": "vulnerability"},
    "missing_resource_limits": {"weight": -6.0, "name": "Unbounded CPU/Memory Limits", "type": "vulnerability"},
    "cluster_admin_role": {"weight": -20.0, "name": "Wildcard Cluster-Admin Access", "type": "vulnerability"},
    "host_network": {"weight": -12.0, "name": "Host Network Namespace Access", "type": "vulnerability"},
    "seccomp_runtime_default": {"weight": +8.0, "name": "Seccomp RuntimeDefault Enforced", "type": "protective"},
    "drop_all_capabilities": {"weight": +10.0, "name": "Dropped ALL Kernel Capabilities", "type": "protective"},
    "network_policy_enforced": {"weight": +12.0, "name": "Default-Deny Ingress NetworkPolicy", "type": "protective"}
}


def attribute_risk_score(active_features: List[str], baseline_score: float = 85.0) -> Dict[str, Any]:
    """Decompose security score into positive defensive credits and negative vulnerability penalties."""
    score = baseline_score
    drivers = []

    for feat in active_features:
        feat_clean = feat.lower().strip()
        info = STANDARD_FEATURE_IMPACTS.get(feat_clean, {"weight": -5.0, "name": feat, "type": "vulnerability"})
        impact = info["weight"]
        score += impact
        drivers.append({
            "feature": feat,
            "display_name": info["name"],
            "impact_points": impact,
            "nature": info["type"]
        })

    final_score = max(0.0, min(100.0, round(score, 1)))
    vulnerabilities = [d for d in drivers if d["nature"] == "vulnerability"]
    protective = [d for d in drivers if d["nature"] == "protective"]

    return {
        "baseline_score": baseline_score,
        "final_predicted_score": final_score,
        "total_penalty_points": abs(sum(d["impact_points"] for d in vulnerabilities)),
        "total_protective_credits": sum(d["impact_points"] for d in protective),
        "drivers_breakdown": drivers
    }


def prioritize_remediations(active_vulnerabilities: List[str]) -> List[Dict[str, Any]]:
    """Rank detected security vulnerabilities by maximum potential score recovery."""
    ranked = []
    for v in active_vulnerabilities:
        v_clean = v.lower().strip()
        info = STANDARD_FEATURE_IMPACTS.get(v_clean, {"weight": -5.0, "name": v, "type": "vulnerability"})
        recovery_potential = abs(info["weight"])
        ranked.append({
            "vulnerability": v,
            "name": info["name"],
            "score_recovery_points": recovery_potential,
            "priority": "P1 - CRITICAL" if recovery_potential >= 20.0 else ("P2 - HIGH" if recovery_potential >= 10.0 else "P3 - MEDIUM")
        })

    ranked.sort(key=lambda x: x["score_recovery_points"], reverse=True)
    return ranked
