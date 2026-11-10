"""
common_integrations.k8s_auto_remediate
======================================
Automated Kubernetes manifest hardening and remediation patch generator.
Applies NSA/CISA and CIS Benchmark v2.0 hardening rules and produces unified diffs.
"""
import copy
import difflib
from typing import Any, Dict, List, Optional, Tuple
import yaml


def _get_pod_spec(workload_dict: Dict[str, Any]) -> Tuple[Optional[Dict[str, Any]], str]:
    """Retrieve the mutable pod spec dictionary based on workload kind."""
    kind = workload_dict.get("kind", "")
    if kind == "Pod":
        return workload_dict.setdefault("spec", {}), "spec"
    elif kind in ("Deployment", "DaemonSet", "StatefulSet", "Job", "ReplicaSet"):
        spec = workload_dict.setdefault("spec", {})
        template = spec.setdefault("template", {})
        return template.setdefault("spec", {}), "spec.template.spec"
    elif kind == "CronJob":
        job_spec = workload_dict.setdefault("spec", {}).setdefault("jobTemplate", {}).setdefault("spec", {})
        return job_spec.setdefault("template", {}).setdefault("spec", {}), "spec.jobTemplate.spec.template.spec"
    return None, ""


def remediate_workload_dict(workload: Dict[str, Any]) -> Tuple[Dict[str, Any], List[str]]:
    """Hardens a parsed Kubernetes workload dictionary in-place, returning applied actions."""
    hardened = copy.deepcopy(workload)
    pod_spec, path_prefix = _get_pod_spec(hardened)
    if pod_spec is None:
        return hardened, []

    actions: List[str] = []

    # 1. Pod-level securityContext
    pod_sec = pod_spec.setdefault("securityContext", {})
    if not pod_sec.get("runAsNonRoot"):
        pod_sec["runAsNonRoot"] = True
        actions.append(f"{path_prefix}.securityContext.runAsNonRoot -> true")
    if "runAsUser" not in pod_sec or pod_sec.get("runAsUser") == 0:
        pod_sec["runAsUser"] = 10001
        actions.append(f"{path_prefix}.securityContext.runAsUser -> 10001")
    if not pod_sec.get("seccompProfile"):
        pod_sec["seccompProfile"] = {"type": "RuntimeDefault"}
        actions.append(f"{path_prefix}.securityContext.seccompProfile -> RuntimeDefault")

    # 2. Host namespaces
    if pod_spec.get("hostNetwork"):
        pod_spec["hostNetwork"] = False
        actions.append(f"{path_prefix}.hostNetwork -> false")
    if pod_spec.get("hostPID"):
        pod_spec["hostPID"] = False
        actions.append(f"{path_prefix}.hostPID -> false")
    if pod_spec.get("hostIPC"):
        pod_spec["hostIPC"] = False
        actions.append(f"{path_prefix}.hostIPC -> false")

    # 3. Hardening each container
    for idx, container in enumerate(pod_spec.get("containers", [])):
        c_name = container.get("name", f"container-{idx}")
        c_sec = container.setdefault("securityContext", {})

        if c_sec.get("privileged"):
            c_sec["privileged"] = False
            actions.append(f"{path_prefix}.containers[{c_name}].privileged -> false")

        if not c_sec.get("readOnlyRootFilesystem"):
            c_sec["readOnlyRootFilesystem"] = True
            actions.append(f"{path_prefix}.containers[{c_name}].readOnlyRootFilesystem -> true")

        if c_sec.get("allowPrivilegeEscalation") is not False:
            c_sec["allowPrivilegeEscalation"] = False
            actions.append(f"{path_prefix}.containers[{c_name}].allowPrivilegeEscalation -> false")

        # Capabilities: Drop ALL
        caps = c_sec.setdefault("capabilities", {})
        drop = caps.setdefault("drop", [])
        if "ALL" not in [str(x).upper() for x in drop]:
            drop.append("ALL")
            actions.append(f"{path_prefix}.containers[{c_name}].capabilities.drop -> added ALL")
        if "add" in caps:
            caps["add"] = [x for x in caps["add"] if str(x).upper() not in ["SYS_ADMIN", "CAP_SYS_ADMIN", "NET_ADMIN"]]

        # Default resource limits if missing
        res = container.setdefault("resources", {})
        limits = res.setdefault("limits", {})
        if "cpu" not in limits:
            limits["cpu"] = "500m"
            actions.append(f"{path_prefix}.containers[{c_name}].resources.limits.cpu -> 500m")
        if "memory" not in limits:
            limits["memory"] = "512Mi"
            actions.append(f"{path_prefix}.containers[{c_name}].resources.limits.memory -> 512Mi")

    return hardened, actions


def remediate_yaml_string(original_yaml: str) -> Dict[str, Any]:
    """Remediates a raw multi-document Kubernetes YAML string and returns hardened YAML with unified diff."""
    docs = list(yaml.safe_load_all(original_yaml))
    hardened_docs = []
    all_actions = []

    for doc in docs:
        if isinstance(doc, dict):
            h_doc, acts = remediate_workload_dict(doc)
            hardened_docs.append(h_doc)
            all_actions.extend(acts)
        else:
            hardened_docs.append(doc)

    hardened_yaml = yaml.dump_all(hardened_docs, sort_keys=False)

    diff = difflib.unified_diff(
        original_yaml.splitlines(keepends=True),
        hardened_yaml.splitlines(keepends=True),
        fromfile="original.yaml",
        tofile="remediated.yaml"
    )
    unified_diff_str = "".join(diff)

    return {
        "hardened_yaml": hardened_yaml,
        "actions_applied": all_actions,
        "actions_count": len(all_actions),
        "unified_diff": unified_diff_str
    }
