"""
common_integrations.cloud_iam_verifier
======================================
Cloud Provider IAM & Kubernetes Workload Identity Trust Relationship Verifier.
Evaluates AWS EKS IRSA, GCP GKE Workload Identity, and Azure AKS Identity annotations.
"""
import re
from typing import Any, Dict, List

AWS_ARN_RE = re.compile(r"^arn:aws:iam::(\d{12}|\*):role/(.+)$")
GCP_SA_RE = re.compile(r"^[a-zA-Z0-9-]+@[a-zA-Z0-9-]+\.iam\.gserviceaccount\.com$")
AZURE_UUID_RE = re.compile(r"^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$", re.IGNORECASE)


def verify_cloud_iam_annotations(
    annotations: Dict[str, str],
    workload_name: str = "service-account"
) -> List[Dict[str, Any]]:
    """Inspect Kubernetes ServiceAccount annotations for multi-cloud IAM misconfigurations."""
    findings: List[Dict[str, Any]] = []
    if not annotations:
        return findings

    # 1. AWS EKS IRSA
    aws_role = annotations.get("eks.amazonaws.com/role-arn")
    if aws_role:
        match = AWS_ARN_RE.match(aws_role.strip())
        if not match:
            findings.append({
                "provider": "AWS",
                "workload": workload_name,
                "risk_level": "HIGH",
                "title": "Malformed AWS IRSA Role ARN",
                "description": f"Invalid ARN format: {aws_role}",
                "remediation": "Use standard arn:aws:iam::<12-digit-account>:role/<role-name>"
            })
        else:
            acct, role_name = match.groups()
            if "*" in acct or "admin" in role_name.lower() or "fullaccess" in role_name.lower():
                findings.append({
                    "provider": "AWS",
                    "workload": workload_name,
                    "risk_level": "CRITICAL",
                    "title": "Over-Privileged AWS IAM Role Binding",
                    "description": f"Role '{role_name}' implies administrative/wildcard cloud privileges",
                    "remediation": "Bind a least-privilege IAM role scoped strictly to required buckets/queues"
                })

    # 2. GCP GKE Workload Identity
    gcp_sa = annotations.get("iam.gke.io/gcp-service-account")
    if gcp_sa:
        if not GCP_SA_RE.match(gcp_sa.strip()):
            findings.append({
                "provider": "GCP",
                "workload": workload_name,
                "risk_level": "HIGH",
                "title": "Invalid GCP Service Account Identifier",
                "description": f"Malformed GCP email: {gcp_sa}",
                "remediation": "Ensure format <sa-name>@<project-id>.iam.gserviceaccount.com"
            })
        elif "editor" in gcp_sa.lower() or "owner" in gcp_sa.lower() or "admin" in gcp_sa.lower():
            findings.append({
                "provider": "GCP",
                "workload": workload_name,
                "risk_level": "CRITICAL",
                "title": "Privileged GCP Service Account Bound to Pod",
                "description": f"Service account '{gcp_sa}' name indicates broad project privileges",
                "remediation": "Use custom least-privilege GCP service accounts"
            })

    # 3. Azure AKS Workload Identity
    azure_client = annotations.get("azure.workload.identity/client-id")
    if azure_client and not AZURE_UUID_RE.match(azure_client.strip()):
        findings.append({
            "provider": "AZURE",
            "workload": workload_name,
            "risk_level": "MEDIUM",
            "title": "Malformed Azure Managed Identity Client ID",
            "description": f"Client ID '{azure_client}' is not a valid UUID",
            "remediation": "Provide valid Azure AD Application / Managed Identity Client UUID"
        })

    return findings
