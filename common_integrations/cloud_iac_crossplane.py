"""
common_integrations.cloud_iac_crossplane
========================================
Reusable Declarative Cloud Infrastructure-as-Code (IaC) generator for Crossplane and LocalStack.
"""
from typing import Any, Dict, List, Optional
import yaml


def generate_crossplane_s3_bucket(
    bucket_name: str,
    region: str = "us-east-1",
    provider_config_ref: str = "default",
    tags: Optional[Dict[str, str]] = None
) -> str:
    """Generate Kubernetes declarative YAML for a Crossplane AWS S3 Bucket resource."""
    manifest = {
        "apiVersion": "s3.aws.upbound.io/v1beta1",
        "kind": "Bucket",
        "metadata": {
            "name": bucket_name
        },
        "spec": {
            "forProvider": {
                "region": region,
                "tags": tags or {"ManagedBy": "Crossplane", "Environment": "Production"}
            },
            "providerConfigRef": {
                "name": provider_config_ref
            }
        }
    }
    return yaml.dump(manifest, sort_keys=False)


def generate_provider_config(
    config_name: str = "localstack-provider",
    secret_name: str = "aws-creds",
    secret_namespace: str = "crossplane-system",
    endpoint: Optional[str] = "http://localstack.default.svc.cluster.local:4566"
) -> str:
    """Generate Crossplane ProviderConfig YAML for AWS or LocalStack."""
    spec: Dict[str, Any] = {
        "credentials": {
            "source": "Secret",
            "secretRef": {
                "namespace": secret_namespace,
                "name": secret_name,
                "key": "creds"
            }
        }
    }
    if endpoint:
        spec["endpoint"] = {
            "url": {
                "type": "Static",
                "static": endpoint
            }
        }

    manifest = {
        "apiVersion": "aws.upbound.io/v1beta1",
        "kind": "ProviderConfig",
        "metadata": {
            "name": config_name
        },
        "spec": spec
    }
    return yaml.dump(manifest, sort_keys=False)


def reconcile_drift_diff(declared_tags: Dict[str, str], live_tags: Dict[str, str]) -> Dict[str, Any]:
    """Calculate drift differential between declared tags and live tags."""
    missing_in_live = {k: v for k, v in declared_tags.items() if k not in live_tags}
    modified_in_live = {k: {"declared": v, "live": live_tags[k]} for k, v in declared_tags.items() if k in live_tags and live_tags[k] != v}
    extra_in_live = {k: v for k, v in live_tags.items() if k not in declared_tags}

    has_drift = bool(missing_in_live or modified_in_live or extra_in_live)
    return {
        "drift_detected": has_drift,
        "missing_in_live": missing_in_live,
        "modified_in_live": modified_in_live,
        "extra_in_live": extra_in_live
    }
