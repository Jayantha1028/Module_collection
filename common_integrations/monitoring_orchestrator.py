"""
common_integrations.monitoring_orchestrator
===========================================
Reusable Monitoring-as-a-Service (MaaS) configuration generator for Prometheus and Grafana.
"""
from typing import Any, Dict, List, Optional
import yaml


def generate_prometheus_config(
    tenant_name: str,
    scrape_targets: List[str],
    scrape_interval_seconds: int = 15,
    evaluation_interval_seconds: int = 15
) -> str:
    """Generate valid Prometheus prometheus.yml configuration string."""
    config = {
        "global": {
            "scrape_interval": f"{scrape_interval_seconds}s",
            "evaluation_interval": f"{evaluation_interval_seconds}s"
        },
        "scrape_configs": [
            {
                "job_name": f"{tenant_name}-services",
                "static_configs": [
                    {
                        "targets": scrape_targets
                    }
                ]
            }
        ]
    }
    return yaml.dump(config, sort_keys=False)


def generate_grafana_datasource(
    datasource_name: str,
    prometheus_url: str,
    is_default: bool = True
) -> str:
    """Generate Grafana datasource YAML provisioning configuration."""
    config = {
        "apiVersion": 1,
        "datasources": [
            {
                "name": datasource_name,
                "type": "prometheus",
                "access": "proxy",
                "url": prometheus_url,
                "isDefault": is_default,
                "editable": False
            }
        ]
    }
    return yaml.dump(config, sort_keys=False)


def generate_alert_rule(
    alert_name: str,
    expression: str,
    duration: str = "5m",
    severity: str = "critical",
    summary: str = "High error rate detected"
) -> str:
    """Generate Prometheus alert rule YAML."""
    rule_group = {
        "groups": [
            {
                "name": "service_alerts",
                "rules": [
                    {
                        "alert": alert_name,
                        "expr": expression,
                        "for": duration,
                        "labels": {
                            "severity": severity
                        },
                        "annotations": {
                            "summary": summary
                        }
                    }
                ]
            }
        ]
    }
    return yaml.dump(rule_group, sort_keys=False)
