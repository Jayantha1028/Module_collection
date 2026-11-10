"""
common_integrations.dbt_orchestrator
====================================
Reusable dbt SQL model compiler, ref() resolver, and DAG dependency lineage builder.
"""
import re
from typing import Any, Dict, List, Set, Tuple


def compile_dbt_sql(raw_sql: str) -> str:
    """Compile dbt Jinja SQL: strips config() calls and replaces {{ ref('x') }} with 'x'."""
    # Strip config
    cleaned = re.sub(r"\{\{\s*config\([^)]*\)\s*\}\}", "-- [dbt config compiled]", raw_sql)
    # Replace ref
    compiled = re.sub(r"\{\{\s*ref\(['\"](.*?)['\"]\)\s*\}\}", r"\1", cleaned)
    # Replace source
    compiled = re.sub(r"\{\{\s*source\(['\"][^'\"]*['\"],\s*['\"]([^'\"]*)['\"]\)\s*\}\}", r"\1", compiled)
    return compiled.strip()


def extract_model_dependencies(raw_sql: str) -> List[str]:
    """Extract list of referenced upstream models from ref() calls."""
    matches = re.findall(r"\{\{\s*ref\(['\"](.*?)['\"]\)\s*\}\}", raw_sql)
    return list(dict.fromkeys(matches))


def build_lineage_graph(models: Dict[str, str]) -> Dict[str, Any]:
    """Build a node/edge DAG dependency lineage graph from a dictionary of model_name -> raw_sql."""
    nodes = []
    edges = []
    all_refs = set()

    for name, sql in models.items():
        refs = extract_model_dependencies(sql)
        nodes.append({"id": name, "type": "model", "upstream_count": len(refs)})
        for r in refs:
            all_refs.add(r)
            edges.append({"from": r, "to": name})

    # Add source nodes if they aren't declared models
    for r in all_refs:
        if r not in models:
            nodes.append({"id": r, "type": "source", "upstream_count": 0})

    return {
        "total_nodes": len(nodes),
        "total_edges": len(edges),
        "nodes": nodes,
        "edges": edges
    }
