"""
common_integrations.database_ops
================================
Reusable database backup, CSV snapshotting, disaster recovery, and schema verification.
"""
from datetime import datetime, timezone
from pathlib import Path
from typing import Any, Dict, List, Optional
import csv
import json


def export_records_to_csv(records: List[Dict[str, Any]], output_filepath: str) -> int:
    """Export list of dictionaries to a CSV file."""
    if not records:
        return 0
    p = Path(output_filepath)
    p.parent.mkdir(parents=True, exist_ok=True)
    fieldnames = list(records[0].keys())
    with open(p, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(records)
    return len(records)


def import_records_from_csv(input_filepath: str) -> List[Dict[str, Any]]:
    """Import CSV file into a list of dictionaries."""
    p = Path(input_filepath)
    if not p.exists():
        return []
    with open(p, "r", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        return list(reader)


def create_database_snapshot(
    database_name: str,
    tables_data: Dict[str, List[Dict[str, Any]]],
    backup_dir: str
) -> Dict[str, Any]:
    """Create a point-in-time snapshot with JSON metadata and CSV table files."""
    now_str = datetime.now(timezone.utc).strftime("%Y%m%d_%H%M%S")
    snap_id = f"snap_{database_name}_{now_str}"
    target_dir = Path(backup_dir) / snap_id
    target_dir.mkdir(parents=True, exist_ok=True)

    summary = []
    total_rows = 0
    for table_name, rows in tables_data.items():
        csv_file = target_dir / f"{table_name}.csv"
        count = export_records_to_csv(rows, str(csv_file))
        total_rows += count
        summary.append({"table": table_name, "row_count": count, "file": csv_file.name})

    meta = {
        "snapshot_id": snap_id,
        "database": database_name,
        "created_at": datetime.now(timezone.utc).isoformat(),
        "total_tables": len(tables_data),
        "total_rows": total_rows,
        "tables": summary
    }

    with open(target_dir / "snapshot_manifest.json", "w", encoding="utf-8") as f:
        json.dump(meta, f, indent=2)

    return meta
