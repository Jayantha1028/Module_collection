"""
public-gov-audit-service
========================
FastAPI microservice for public sector procurement auditing, forensic finance analysis,
Benford's Law conformance, and anti-tender-splitting detection.
"""
import math
import datetime
from typing import List, Dict, Any, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI(
    title="Public Governance & Forensic Audit Service",
    version="1.0.0",
    description="Statistical anomaly detection, Benford's Law compliance, and KTPP tender fraud analysis"
)

BENFORD_DIST = {
    1: 0.301, 2: 0.176, 3: 0.125, 4: 0.097,
    5: 0.079, 6: 0.067, 7: 0.058, 8: 0.051, 9: 0.046
}

class AuditBatchRequest(BaseModel):
    department: str = Field(..., example="Public Works Department (PWD)")
    amounts: List[float] = Field(..., example=[498500.0, 499200.0, 497000.0, 1500000.0])
    threshold_limit: Optional[float] = Field(default=500000.0, example=500000.0)

class TenderItem(BaseModel):
    tender_id: str
    contractor: str
    amount: float
    work_code: str
    issued_date: str

class TenderSplitRequest(BaseModel):
    tenders: List[TenderItem]
    statutory_threshold: float = Field(default=5000000.0, description="KTPP statutory threshold in INR (e.g. 50 Lakhs)")

@app.get("/")
def root():
    return {
        "service": "public-gov-audit-service",
        "status": "healthy",
        "port": 8161,
        "version": "1.0.0"
    }

@app.get("/health")
def health():
    return {"status": "ok", "timestamp": datetime.datetime.utcnow().isoformat()}

@app.post("/audit/benford-check")
def benford_check(req: AuditBatchRequest):
    if not req.amounts:
        raise HTTPException(status_code=400, detail="Amounts list cannot be empty")
    
    first_digits = []
    round_number_flags = []
    
    for a in req.amounts:
        val = abs(a)
        if val >= 1.0:
            s = str(int(val))
            first_digits.append(int(s[0]))
        if val > 50000.0 and val % 10000.0 == 0:
            round_number_flags.append({
                "amount": a,
                "reason": "Exact multiple of ₹10,000 indicates lump-sum unmeasured billing"
            })
            
    n = len(first_digits)
    if n < 5:
        return {
            "status": "insufficient_sample_size",
            "count": n,
            "minimum_recommended": 10,
            "round_number_anomalies": round_number_flags
        }

    counts = {d: first_digits.count(d) for d in range(1, 10)}
    obs_freq = {d: counts[d] / n for d in range(1, 10)}
    
    # Calculate Mean Absolute Deviation (MAD)
    mad = sum(abs(obs_freq[d] - BENFORD_DIST[d]) for d in range(1, 10)) / 9.0
    
    # MAD evaluation standard
    if mad <= 0.006:
        conformity = "Close Conformity"
        risk_score = 0.1
    elif mad <= 0.012:
        conformity = "Acceptable Conformity"
        risk_score = 0.3
    elif mad <= 0.015:
        conformity = "Marginal Conformity"
        risk_score = 0.6
    else:
        conformity = "Non-Conformity (Suspicious Distribution)"
        risk_score = 0.9

    return {
        "department": req.department,
        "total_bills_analyzed": n,
        "mad_score": round(mad, 5),
        "conformity_status": conformity,
        "audit_risk_score": risk_score,
        "round_number_anomalies_found": len(round_number_flags),
        "round_number_details": round_number_flags[:10]
    }

@app.post("/audit/tender-splitting-check")
def detect_tender_splitting(req: TenderSplitRequest):
    grouped = {}
    for t in req.tenders:
        key = (t.contractor, t.work_code)
        grouped.setdefault(key, []).append(t)
        
    suspicious_clusters = []
    threshold = req.statutory_threshold
    margin = threshold * 0.90 # Within 10% under threshold

    for (contractor, work_code), items in grouped.items():
        total_contract_sum = sum(i.amount for i in items)
        sub_threshold_count = sum(1 for i in items if margin <= i.amount < threshold)
        
        if sub_threshold_count >= 2 and total_contract_sum >= threshold:
            suspicious_clusters.append({
                "contractor": contractor,
                "work_code": work_code,
                "split_tenders_count": len(items),
                "sub_threshold_bids": sub_threshold_count,
                "total_aggregate_amount": total_contract_sum,
                "threshold_evaded": threshold,
                "risk_rating": "CRITICAL - STATUTORY TENDER SPLITTING EVASION",
                "tender_ids": [i.tender_id for i in items]
            })

    return {
        "statutory_threshold": threshold,
        "evaluated_contracts": len(req.tenders),
        "suspicious_split_clusters_found": len(suspicious_clusters),
        "flagged_clusters": suspicious_clusters
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8161)
