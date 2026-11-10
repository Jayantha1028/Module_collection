"""
common_integrations.rate_limiter
================================
Thread-safe sliding-window API rate limiter & brute-force DDoS shield.
Supports configurable route policies with in-memory sliding-window backend.
"""
import collections
import threading
import time
from typing import Dict, Optional, Tuple


DEFAULT_POLICIES = {
    "auth": (30, 60),       # 30 requests per 60s
    "checkout": (45, 60),   # 45 requests per 60s
    "default": (180, 60),   # 180 requests per 60s
}


class RateLimiter:
    """Thread-safe sliding-window rate limiter protecting endpoints from abuse."""

    def __init__(self, policies: Optional[Dict[str, Tuple[int, int]]] = None):
        self.policies = policies or dict(DEFAULT_POLICIES)
        self._store: collections.defaultdict = collections.defaultdict(collections.deque)
        self._lock = threading.Lock()

    def is_allowed(
        self,
        client_key: str,
        policy_name: str = "default"
    ) -> Tuple[bool, int, int]:
        """
        Check if request is allowed under the specified policy.
        Returns: (allowed, remaining_requests, reset_in_seconds).
        """
        limit, window = self.policies.get(policy_name, self.policies.get("default", (180, 60)))
        bucket_key = f"{policy_name}:{client_key}"
        now = time.time()
        cutoff = now - window

        with self._lock:
            dq = self._store[bucket_key]
            while dq and dq[0] < cutoff:
                dq.popleft()

            current_count = len(dq)
            if current_count >= limit:
                reset_in = max(1, int(dq[0] + window - now)) if dq else window
                return False, 0, reset_in

            dq.append(now)
            remaining = max(0, limit - (current_count + 1))
            return True, remaining, window

    def reset_client(self, client_key: str) -> None:
        """Clear all rate limit tracking for a specific client key."""
        with self._lock:
            keys_to_remove = [k for k in self._store if k.endswith(f":{client_key}")]
            for k in keys_to_remove:
                del self._store[k]
