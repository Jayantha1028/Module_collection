"""
common_integrations.government_transparency_auditor
===================================================
Forensic audit & procurement anomaly module implementing Benford's Law distribution
testing and tender splitting detection for anti-corruption and public finance auditing.
"""
from typing import List, Dict, Any, Optional

BENFORD_DIST = {
    1: 0.301, 2: 0.176, 3: 0.125, 4: 0.097,
    5: 0.079, 6: 0.067, 7: 0.058, 8: 0.051, 9: 0.046
}

def analyze_benford_compliance(amounts: List[float]) -> Dict[str, Any]:
    """Evaluates first-digit conformity to Benford's Law distribution."""
    first_digits = []
    for a in amounts:
        val = abs(a)
        if val >= 1.0:
            first_digits.append(int(str(int(val))[0]))

    n = len(first_digits)
    if n < 5:
        return {"conforms": True, "mad": 0.0, "sample_size": n, "warning": "Sample size too small"}

    counts = {d: first_digits.count(d) for d in range(1, 10)}
    obs_freq = {d: counts[d] / n for d in range(1, 10)}
    mad = sum(abs(obs_freq[d] - BENFORD_DIST[d]) for d in range(1, 10)) / 9.0

    return {
        "conforms": mad <= 0.012,
        "mad_score": round(mad, 5),
        "sample_size": n,
        "risk_level": "CRITICAL" if mad > 0.015 else "ELEVATED" if mad > 0.012 else "NORMAL"
    }

def detect_tender_splitting(tenders: List[Dict[str, Any]], statutory_threshold: float = 5000000.0) -> List[Dict[str, Any]]:
    """Detects artificial contract splitting under competitive bidding thresholds."""
    grouped: Dict[str, List[Dict[str, Any]]] = {}
    for t in tenders:
        key = f"{t.get('contractor')}:{t.get('work_code')}"
        grouped.setdefault(key, []).append(t)

    flagged = []
    margin = statutory_threshold * 0.90
    for key, items in grouped.items():
        sub_thresh = [i for i in items if margin <= i.get("amount", 0) < statutory_threshold]
        total_sum = sum(i.get("amount", 0) for i in items)
        if len(sub_thresh) >= 2 and total_sum >= statutory_threshold:
            flagged.append({
                "group": key,
                "split_count": len(items),
                "total_aggregate": total_sum,
                "threshold_evaded": statutory_threshold
            })
    return flagged
