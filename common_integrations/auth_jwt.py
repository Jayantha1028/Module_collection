"""
common_integrations.auth_jwt
============================
Reusable authentication, password hashing, JWT signing/verification, and API security.
Zero heavy dependencies: uses standard library hmac, hashlib, base64, and secrets.
"""
import base64
import hashlib
import hmac
import json
import secrets
import time
from typing import Any, Dict, Optional, Tuple


def hash_password(password: str, salt: Optional[str] = None) -> str:
    """Hash a password using salted SHA-256 with 100,000 iterations (PBKDF2)."""
    if not salt:
        salt = secrets.token_hex(16)
    key = hashlib.pbkdf2_hmac(
        'sha256',
        password.encode('utf-8'),
        salt.encode('utf-8'),
        100000
    )
    return f"{salt}:{key.hex()}"


def verify_password(password: str, hashed: str) -> bool:
    """Verify a plain password against the stored salt:hash string."""
    try:
        salt, key_hex = hashed.split(":", 1)
        expected_key = hashlib.pbkdf2_hmac(
            'sha256',
            password.encode('utf-8'),
            salt.encode('utf-8'),
            100000
        )
        return hmac.compare_digest(expected_key.hex(), key_hex)
    except Exception:
        return False


def generate_jwt(
    payload: Dict[str, Any],
    secret_key: str,
    expires_in_seconds: int = 86400
) -> str:
    """Generate a standard HS256 signed JSON Web Token (JWT)."""
    header = {"alg": "HS256", "typ": "JWT"}
    payload_copy = dict(payload)
    now = int(time.time())
    payload_copy["iat"] = now
    payload_copy["exp"] = now + expires_in_seconds

    def b64url(data: bytes) -> str:
        return base64.urlsafe_b64encode(data).rstrip(b'=').decode('ascii')

    header_b64 = b64url(json.dumps(header, separators=(',', ':')).encode('utf-8'))
    payload_b64 = b64url(json.dumps(payload_copy, separators=(',', ':')).encode('utf-8'))
    signing_input = f"{header_b64}.{payload_b64}".encode('ascii')

    signature = hmac.new(secret_key.encode('utf-8'), signing_input, hashlib.sha256).digest()
    sig_b64 = b64url(signature)

    return f"{header_b64}.{payload_b64}.{sig_b64}"


def verify_jwt(token: str, secret_key: str) -> Tuple[bool, Optional[Dict[str, Any]], Optional[str]]:
    """Verify an HS256 JWT token signature and expiration."""
    try:
        parts = token.split(".")
        if len(parts) != 3:
            return False, None, "Invalid token structure"

        header_b64, payload_b64, sig_b64 = parts

        def b64url_decode(s: str) -> bytes:
            padding = 4 - (len(s) % 4)
            if padding != 4:
                s += '=' * padding
            return base64.urlsafe_b64decode(s.encode('ascii'))

        signing_input = f"{header_b64}.{payload_b64}".encode('ascii')
        expected_sig = hmac.new(secret_key.encode('utf-8'), signing_input, hashlib.sha256).digest()

        if not hmac.compare_digest(expected_sig, b64url_decode(sig_b64)):
            return False, None, "Invalid token signature"

        payload = json.loads(b64url_decode(payload_b64).decode('utf-8'))
        now = int(time.time())

        if "exp" in payload and now > payload["exp"]:
            return False, payload, "Token has expired"

        return True, payload, None
    except Exception as e:
        return False, None, f"Token verification error: {str(e)}"


def generate_otp_code(digits: int = 6) -> str:
    """Generate a cryptographically secure numeric one-time verification code."""
    range_max = 10 ** digits
    val = secrets.randbelow(range_max)
    return str(val).zfill(digits)


def parse_bearer_token(authorization_header: Optional[str]) -> Optional[str]:
    """Extract raw bearer token from an HTTP Authorization header."""
    if not authorization_header:
        return None
    parts = authorization_header.strip().split()
    if len(parts) == 2 and parts[0].lower() == "bearer":
        return parts[1]
    return None
