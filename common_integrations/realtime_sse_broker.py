"""
common_integrations.realtime_sse_broker
=======================================
Zero-dependency Server-Sent Events (SSE) live push broker and presence tracker.
Easily dropped into FastAPI StreamingResponse, Flask, or ASGI applications.
"""
from datetime import datetime, timezone
import json
import threading
from typing import Any, Dict, List, Optional, Set


def format_sse_event(event_type: str, data: Any, event_id: Optional[str] = None) -> str:
    """Format a structured event payload according to the W3C Server-Sent Events specification."""
    payload = {
        "type": event_type,
        "data": data,
        "timestamp": datetime.now(timezone.utc).isoformat()
    }
    lines = []
    if event_id:
        lines.append(f"id: {event_id}")
    lines.append(f"event: {event_type}")
    lines.append(f"data: {json.dumps(payload)}")
    return "\n".join(lines) + "\n\n"


class SSEBroker:
    """Thread-safe in-memory real-time connection registry, room tracker, and broadcast queue."""

    def __init__(self):
        self._clients: Dict[str, Dict[str, Any]] = {}
        self._lock = threading.Lock()

    def register_client(self, client_id: str, username: Optional[str] = None, room_id: Optional[str] = None) -> None:
        with self._lock:
            self._clients[client_id] = {
                "username": username.lower() if username else None,
                "room_id": room_id,
                "queue": []
            }

    def unregister_client(self, client_id: str) -> None:
        with self._lock:
            self._clients.pop(client_id, None)

    def broadcast(self, event_type: str, data: Any, target_room_id: Optional[str] = None) -> int:
        """Queue SSE formatted event to all clients or clients in a specific room."""
        formatted = format_sse_event(event_type, data)
        delivered = 0
        with self._lock:
            for _, client in self._clients.items():
                if target_room_id is None or client["room_id"] == target_room_id:
                    client["queue"].append(formatted)
                    delivered += 1
        return delivered

    def pop_client_events(self, client_id: str) -> List[str]:
        """Drain pending SSE event payloads for a client stream."""
        with self._lock:
            client = self._clients.get(client_id)
            if not client:
                return []
            events = list(client["queue"])
            client["queue"].clear()
            return events

    def get_online_presence(self) -> Dict[str, Any]:
        """Return total connected streams and unique active usernames."""
        with self._lock:
            usernames: Set[str] = {c["username"] for c in self._clients.values() if c["username"]}
            return {
                "total_connections": len(self._clients),
                "online_users": sorted(usernames)
            }
