"""
common_integrations.multiverse_chat_tree
=========================================
Branching/Forking Multiverse Conversation Tree and Intelligent Branch Merge Synthesizer.
Enables forking chat timelines at any message and merging parallel discussions with decision takeaways.
"""
from dataclasses import asdict, dataclass, field
import re
import time
from typing import Any, Dict, List, Optional

DECISION_SIGNAL_RE = re.compile(
    r"\b(decid(?:e|ed)|agree(?:d)?|consensus|approv(?:e|ed)|recommend|should|let'?s|plan|next step|conclud(?:e|ed)|viable|commit|ship|use)\b",
    re.IGNORECASE
)


@dataclass
class ChatTimeline:
    id: str
    name: str
    parent_timeline_id: Optional[str] = None
    fork_message_id: Optional[str] = None
    created_at: float = field(default_factory=time.time)
    messages: List[Dict[str, Any]] = field(default_factory=list)

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


class MultiverseTree:
    """Manages branching conversation timelines and hierarchical parent-child lineage."""

    def __init__(self, root_name: str = "Prime Timeline"):
        self.timelines: Dict[str, ChatTimeline] = {
            "prime": ChatTimeline(id="prime", name=root_name)
        }

    def add_message(self, timeline_id: str, sender: str, content: str, msg_id: str, reactions: int = 0) -> None:
        if timeline_id not in self.timelines:
            raise ValueError(f"Timeline '{timeline_id}' does not exist")
        self.timelines[timeline_id].messages.append({
            "id": msg_id,
            "sender": sender,
            "content": content,
            "reactions": reactions,
            "timestamp": time.time()
        })

    def fork_timeline(self, parent_id: str, new_id: str, new_name: str, fork_message_id: Optional[str] = None) -> ChatTimeline:
        """Create a branched child timeline inheriting history up to the fork point."""
        if parent_id not in self.timelines:
            raise ValueError(f"Parent timeline '{parent_id}' not found")
        child = ChatTimeline(
            id=new_id,
            name=new_name,
            parent_timeline_id=parent_id,
            fork_message_id=fork_message_id
        )
        self.timelines[new_id] = child
        return child

    def get_lineage(self, timeline_id: str) -> List[ChatTimeline]:
        """Return full lineage chain from root -> ... -> target timeline."""
        chain: List[ChatTimeline] = []
        visited = set()
        curr_id: Optional[str] = timeline_id
        while curr_id and curr_id in self.timelines and curr_id not in visited:
            visited.add(curr_id)
            tl = self.timelines[curr_id]
            chain.insert(0, tl)
            curr_id = tl.parent_timeline_id
        return chain


def synthesize_branch_merge(
    source_timeline_name: str,
    target_timeline_name: str,
    branch_messages: List[Dict[str, Any]],
    max_takeaways: int = 4
) -> Dict[str, Any]:
    """Synthesize parallel chat branch discussions into concise merge takeaways using decision signal ranking."""
    if not branch_messages:
        return {
            "source": source_timeline_name,
            "target": target_timeline_name,
            "summary": f"Branch '{source_timeline_name}' closed and merged cleanly into '{target_timeline_name}'.",
            "takeaways": ["No divergent messages recorded."]
        }

    participants = sorted({m.get("sender", "User") for m in branch_messages})
    scored = []
    for idx, m in enumerate(branch_messages):
        content = str(m.get("content", "")).strip()
        reactions = int(m.get("reactions", 0))
        has_signal = bool(DECISION_SIGNAL_RE.search(content))
        score = (3.0 if has_signal else 0.0) + (reactions * 1.5) + (idx * 0.1)
        scored.append((score, content, m.get("sender", "User")))

    scored.sort(key=lambda x: x[0], reverse=True)
    takeaways = [f"[{item[2]}]: {item[1][:120]}" for item in scored[:max_takeaways]]

    return {
        "source": source_timeline_name,
        "target": target_timeline_name,
        "participants": participants,
        "message_count": len(branch_messages),
        "summary": f"Merged {len(branch_messages)} messages from '{source_timeline_name}' into '{target_timeline_name}' across {', '.join(participants)}.",
        "takeaways": takeaways
    }
