"""
common_integrations.k8s_admission_patch
=======================================
Pure-Python Kubernetes Validating & Mutating AdmissionReview Evaluator.
Generates official RFC 6902 JSONPatch payloads for zero-trust workload hardening.
"""
import base64
import json
from typing import Any, Dict, List


def evaluate_admission_review(
    admission_review: Dict[str, Any],
    mode: str = "enforce"  # enforce, warn, audit
) -> Dict[str, Any]:
    """Evaluate Kubernetes AdmissionReview request and construct AdmissionResponse."""
    req = admission_review.get("request", {})
    uid = req.get("uid", "unknown-uid")
    obj = req.get("object", {})
    spec = obj.get("spec", {})
    pod_spec = spec.get("template", {}).get("spec", spec)
    containers = pod_spec.get("containers", [])

    warnings: List[str] = []
    block_reasons: List[str] = []

    for c in containers:
        cname = c.get("name", "unknown")
        c_sec = c.get("securityContext", {})
        if c_sec.get("privileged") is True:
            msg = f"Container '{cname}' requests privileged: true (CIS 5.2.1 violation)"
            block_reasons.append(msg)
            warnings.append(msg)
        if not c_sec.get("runAsNonRoot") and not pod_spec.get("securityContext", {}).get("runAsNonRoot"):
            warnings.append(f"Container '{cname}' does not enforce runAsNonRoot: true")

    allowed = True
    status_code = 200
    status_msg = "Admission permitted"

    if block_reasons and mode == "enforce":
        allowed = False
        status_code = 403
        status_msg = "; ".join(block_reasons)

    return {
        "apiVersion": "admission.k8s.io/v1",
        "kind": "AdmissionReview",
        "response": {
            "uid": uid,
            "allowed": allowed,
            "warnings": warnings,
            "status": {
                "code": status_code,
                "message": status_msg
            }
        }
    }


def mutate_admission_review(admission_review: Dict[str, Any]) -> Dict[str, Any]:
    """Generate RFC 6902 JSONPatch base64 response enforcing non-root defaults on Pod admission."""
    req = admission_review.get("request", {})
    uid = req.get("uid", "unknown-uid")
    obj = req.get("object", {})
    spec = obj.get("spec", {})

    patches: List[Dict[str, Any]] = []
    if obj.get("kind") == "Pod":
        if "securityContext" not in spec:
            patches.append({
                "op": "add",
                "path": "/spec/securityContext",
                "value": {"runAsNonRoot": True, "runAsUser": 10001}
            })
        for idx, c in enumerate(spec.get("containers", [])):
            if "securityContext" not in c:
                patches.append({
                    "op": "add",
                    "path": f"/spec/containers/{idx}/securityContext",
                    "value": {"allowPrivilegeEscalation": False, "readOnlyRootFilesystem": True}
                })

    resp: Dict[str, Any] = {
        "uid": uid,
        "allowed": True
    }
    if patches:
        patch_b64 = base64.b64encode(json.dumps(patches).encode("utf-8")).decode("ascii")
        resp["patchType"] = "JSONPatch"
        resp["patch"] = patch_b64

    return {
        "apiVersion": "admission.k8s.io/v1",
        "kind": "AdmissionReview",
        "response": resp,
        "decoded_patches": patches
    }
