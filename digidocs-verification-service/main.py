"""
digidocs-verification-service
=============================
FastAPI microservice for document authenticity verification, cryptographic SHA-256
hash matching, tamper detection, and audit trail ledger generation.
"""
import hashlib
import datetime
from typing import Dict, Any, List, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI(
    title="DigiDocs Cryptographic Verification Service",
    version="1.0.0",
    description="Digital document integrity, cryptographic tamper detection, and verification audit logs"
)

# In-memory document registry
DOC_REGISTRY: Dict[str, Dict[str, Any]] = {}

class RegisterDocRequest(BaseModel):
    document_id: str = Field(..., example="DOC-2026-9921")
    title: str = Field(..., example="Aadhaar KYC Card")
    content_raw: str = Field(..., example="Base64 or UTF-8 document content payload string")
    issuer: str = Field(default="Govt of India / UIDAI", example="Govt of India / UIDAI")

class VerifyDocRequest(BaseModel):
    document_id: str = Field(..., example="DOC-2026-9921")
    test_content: str = Field(..., example="Base64 or UTF-8 document content payload string to test")

@app.get("/")
def root():
    return {
        "service": "digidocs-verification-service",
        "status": "healthy",
        "port": 8165,
        "version": "1.0.0"
    }

@app.get("/health")
def health():
    return {"status": "ok", "timestamp": datetime.datetime.utcnow().isoformat()}

@app.post("/docs/register")
def register_document(req: RegisterDocRequest):
    content_bytes = req.content_raw.encode("utf-8")
    sha256_hash = hashlib.sha256(content_bytes).hexdigest()
    
    doc_meta = {
        "document_id": req.document_id,
        "title": req.title,
        "issuer": req.issuer,
        "sha256": sha256_hash,
        "byte_size": len(content_bytes),
        "registered_at": datetime.datetime.utcnow().isoformat(),
        "verification_count": 0
    }
    
    DOC_REGISTRY[req.document_id] = doc_meta
    return {
        "status": "registered",
        "document": doc_meta
    }

@app.post("/docs/verify")
def verify_document(req: VerifyDocRequest):
    if req.document_id not in DOC_REGISTRY:
        raise HTTPException(status_code=404, detail="Document ID not found in registry")
        
    doc = DOC_REGISTRY[req.document_id]
    test_hash = hashlib.sha256(req.test_content.encode("utf-8")).hexdigest()
    
    doc["verification_count"] += 1
    is_authentic = (test_hash == doc["sha256"])
    
    return {
        "document_id": req.document_id,
        "title": doc["title"],
        "issuer": doc["issuer"],
        "is_authentic": is_authentic,
        "tamper_status": "INTEGRITY_VERIFIED" if is_authentic else "TAMPER_DETECTED",
        "expected_hash": doc["sha256"],
        "received_hash": test_hash,
        "verified_at": datetime.datetime.utcnow().isoformat()
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8165)
