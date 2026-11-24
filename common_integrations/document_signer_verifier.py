"""
common_integrations.document_signer_verifier
============================================
Cryptographic verification, SHA-256 fingerprint generation, and document integrity
tamper analysis module for digital KYC, credentials, and government certificates.
"""
import hashlib
from typing import Dict, Any, Optional

def compute_doc_fingerprint(data: bytes) -> str:
    """Computes SHA-256 hex digest for document payload."""
    return hashlib.sha256(data).hexdigest()

def verify_document_integrity(original_hash: str, payload_to_test: bytes) -> Dict[str, Any]:
    """Verifies document authenticity against master registry hash."""
    test_hash = compute_doc_fingerprint(payload_to_test)
    is_valid = (original_hash.lower() == test_hash.lower())
    return {
        "is_valid": is_valid,
        "status": "VALID_DOCUMENT" if is_valid else "TAMPER_DETECTED",
        "expected_hash": original_hash,
        "computed_hash": test_hash
    }
