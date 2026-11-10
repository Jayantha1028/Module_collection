"""
common_integrations.attack_graph_engine
=======================================
Cross-Resource Attack Path DAG, Blast Radius Index, and Mermaid threat modeling generator.
"""
from collections import deque
from dataclasses import asdict, dataclass, field
from typing import Any, Dict, List, Optional, Set, Tuple


@dataclass
class AttackNode:
    id: str
    kind: str
    name: str
    namespace: str = "default"
    is_external_entrypoint: bool = False
    is_crown_jewel: bool = False
    risk_score: float = 0.0

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


@dataclass
class AttackEdge:
    source_id: str
    target_id: str
    relationship: str  # routes_to, mounts_secret, assumes_role, breakout_to_node
    weight: float = 1.0

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


class AttackGraph:
    """Directed Acyclic Graph (DAG) for Kubernetes lateral movement and kill-chains."""

    def __init__(self):
        self.nodes: Dict[str, AttackNode] = {}
        self.edges: List[AttackEdge] = []
        self._adj: Dict[str, List[Tuple[str, AttackEdge]]] = {}

    def add_node(self, node: AttackNode) -> None:
        self.nodes[node.id] = node
        if node.id not in self._adj:
            self._adj[node.id] = []

    def add_edge(self, source_id: str, target_id: str, relationship: str, weight: float = 1.0) -> None:
        edge = AttackEdge(source_id=source_id, target_id=target_id, relationship=relationship, weight=weight)
        self.edges.append(edge)
        if source_id not in self._adj:
            self._adj[source_id] = []
        self._adj[source_id].append((target_id, edge))

    def find_kill_chains(self) -> List[Dict[str, Any]]:
        """Trace all paths from external entrypoints to high-value crown jewels."""
        entrypoints = [nid for nid, n in self.nodes.items() if n.is_external_entrypoint]
        crown_jewels = {nid for nid, n in self.nodes.items() if n.is_crown_jewel}
        kill_chains = []

        for start in entrypoints:
            queue = deque([[start]])
            visited_paths = set()

            while queue:
                path = queue.popleft()
                current = path[-1]

                if current in crown_jewels and len(path) > 1:
                    kill_chains.append({
                        "entrypoint": start,
                        "crown_jewel": current,
                        "hop_count": len(path) - 1,
                        "node_path": path,
                        "human_readable": " -> ".join([self.nodes[nid].name for nid in path])
                    })
                    continue

                for neighbor, _ in self._adj.get(current, []):
                    if neighbor not in path:  # avoid cycles
                        new_path = list(path) + [neighbor]
                        path_key = tuple(new_path)
                        if path_key not in visited_paths:
                            visited_paths.add(path_key)
                            queue.append(new_path)

        return kill_chains

    def calculate_blast_radius(self) -> Dict[str, Any]:
        """Compute closed-form blast radius score (0.0 to 100.0) based on reachability and crown jewels."""
        total_nodes = len(self.nodes)
        if total_nodes == 0:
            return {"blast_radius_index": 0.0, "reachability_pct": 0.0, "compromised_jewels_count": 0}

        entrypoints = [nid for nid, n in self.nodes.items() if n.is_external_entrypoint]
        reachable: Set[str] = set()

        for ep in entrypoints:
            visited = set()
            queue = deque([ep])
            while queue:
                curr = queue.popleft()
                if curr not in visited:
                    visited.add(curr)
                    reachable.add(curr)
                    for nxt, _ in self._adj.get(curr, []):
                        queue.append(nxt)

        reach_ratio = len(reachable) / float(total_nodes)
        jewels_hit = sum(1 for nid in reachable if self.nodes[nid].is_crown_jewel)
        crown_total = max(1, sum(1 for n in self.nodes.values() if n.is_crown_jewel))

        blast_index = round(min(100.0, (reach_ratio * 50.0) + ((jewels_hit / crown_total) * 50.0)), 2)

        return {
            "blast_radius_index": blast_index,
            "total_nodes": total_nodes,
            "reachable_nodes_count": len(reachable),
            "reachability_pct": round(reach_ratio * 100.0, 2),
            "crown_jewels_compromised": jewels_hit,
            "risk_rating": "CRITICAL" if blast_index >= 70.0 else ("HIGH" if blast_index >= 40.0 else "MEDIUM")
        }

    def to_mermaid(self) -> str:
        """Synthesize visual Mermaid diagram flowchart syntax for threat modeling."""
        lines = ["flowchart LR"]
        for nid, n in self.nodes.items():
            safe_name = n.name.replace('"', '')
            if n.is_crown_jewel:
                lines.append(f'    {nid}["💎 {safe_name} ({n.kind})"]:::jewel')
            elif n.is_external_entrypoint:
                lines.append(f'    {nid}["🌐 {safe_name} ({n.kind})"]:::entry')
            else:
                lines.append(f'    {nid}["{safe_name} ({n.kind})"]')

        for e in self.edges:
            lines.append(f'    {e.source_id} -->|"{e.relationship}"| {e.target_id}')

        lines.append("    classDef jewel fill:#fee2e2,stroke:#ef4444,stroke-width:2px;")
        lines.append("    classDef entry fill:#e0f2fe,stroke:#0284c7,stroke-width:2px;")
        return "\n".join(lines)
