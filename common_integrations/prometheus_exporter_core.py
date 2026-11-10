"""
common_integrations.prometheus_exporter_core
============================================
Reusable Prometheus & OpenMetrics exposition format text generator.
Directly format metrics to serve on any /metrics HTTP endpoint.
"""
from typing import Any, Dict, List, Optional, Union


def format_prometheus_metric(
    metric_name: str,
    metric_type: str,
    value: Union[int, float],
    help_text: str = "",
    labels: Optional[Dict[str, str]] = None
) -> str:
    """Format a single metric into valid Prometheus text exposition lines."""
    lines = []
    if help_text:
        lines.append(f"# HELP {metric_name} {help_text}")
    lines.append(f"# TYPE {metric_name} {metric_type}")

    label_str = ""
    if labels:
        pairs = [f'{k}="{v}"' for k, v in labels.items()]
        label_str = "{" + ",".join(pairs) + "}"

    lines.append(f"{metric_name}{label_str} {value}")
    return "\n".join(lines)


def format_metrics_bundle(metrics: List[Dict[str, Any]]) -> str:
    """Format a bundle of metrics into a complete OpenMetrics text exposition payload."""
    blocks = []
    for m in metrics:
        blocks.append(
            format_prometheus_metric(
                metric_name=m["name"],
                metric_type=m.get("type", "gauge"),
                value=m["value"],
                help_text=m.get("help", ""),
                labels=m.get("labels", {})
            )
        )
    return "\n\n".join(blocks) + "\n"
