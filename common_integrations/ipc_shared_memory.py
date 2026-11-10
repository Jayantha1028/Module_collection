"""
common_integrations.ipc_shared_memory
====================================
Cross-platform shared memory cleaner & IPC resource manager.
Prevents orphaned multiprocessing shared memory leaks when worker processes terminate unexpectedly.
"""
import glob
import os
import sys
from typing import Any, Dict, List, Optional


def find_stale_posix_shm_segments(prefix: str = "psm_") -> List[str]:
    """Find dangling POSIX shared memory files on Unix/Linux/macOS (/dev/shm or /tmp)."""
    locations = ["/dev/shm", "/tmp"]
    stale_files = []

    for loc in locations:
        if os.path.exists(loc):
            matches = glob.glob(os.path.join(loc, f"{prefix}*"))
            stale_files.extend(matches)

    return stale_files


def cleanup_stale_shared_memory(prefix: str = "psm_", dry_run: bool = False) -> Dict[str, Any]:
    """Safely unlink leaked shared memory segments from previous killed runs."""
    targets = find_stale_posix_shm_segments(prefix)
    removed = []
    errors = []

    for fpath in targets:
        if dry_run:
            removed.append(fpath)
            continue
        try:
            os.unlink(fpath)
            removed.append(fpath)
        except Exception as e:
            errors.append(f"{fpath}: {str(e)}")

    return {
        "found_count": len(targets),
        "cleaned_count": len(removed),
        "dry_run": dry_run,
        "cleaned_files": removed,
        "errors": errors
    }
