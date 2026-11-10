"""
common_integrations.cloud_vcs
=============================
Reusable VCS author sanitization, git commit validation, and cloud configuration drift detection.
"""
import re
from typing import Any, Dict, List, Optional


def rearrange_author_name(name: str) -> str:
    """Standardizes inverted 'Lastname, Firstname' into 'Firstname Lastname'."""
    result = re.search(r"^([\w .-]*), ([\w .-]*)$", name.strip())
    if result is None:
        return name.strip()
    return f"{result.group(2).strip()} {result.group(1).strip()}"


def validate_commit_payload(author_name: str, author_email: str, message: str) -> Dict[str, Any]:
    """Validate git commit metadata for pre-commit or pre-receive hooks."""
    normalized_name = rearrange_author_name(author_name)
    email_valid = bool(re.match(r"^[^@]+@[^@]+\.[^@]+$", author_email.strip()))
    message_valid = len(message.strip()) > 0

    return {
        "valid": email_valid and message_valid,
        "author_name": normalized_name,
        "author_email": author_email.strip(),
        "rearranged": normalized_name != author_name.strip(),
        "issues": [
            *(["Invalid email"] if not email_valid else []),
            *(["Empty message"] if not message_valid else [])
        ]
    }


def detect_cloud_drift(declared: Dict[str, Any], live: Dict[str, Any]) -> Dict[str, Any]:
    """Compare declared infrastructure tags/specs with live cloud state."""
    drift_keys = []
    for k, v in declared.items():
        if live.get(k) != v:
            drift_keys.append({"key": k, "declared": v, "live": live.get(k)})

    return {
        "in_sync": len(drift_keys) == 0,
        "drift_count": len(drift_keys),
        "drifts": drift_keys
    }
