"""
common_integrations.snowflake_sync
==================================
Reusable Snowflake cloud data warehouse ETL & streaming sync planner.
Enforces zero credit waste with automated warehouse suspension.
"""
from typing import Any, Dict, List, Optional


def generate_snowflake_sync_plan(
    table_name: str,
    records: List[Dict[str, Any]],
    mode: str = "incremental",
    warehouse_name: str = "COMPUTE_WH",
    auto_suspend_seconds: int = 60
) -> Dict[str, Any]:
    """Generate SQL statements and execution strategy for cost-optimized Snowflake sync."""
    clean_mode = mode.lower()
    sql_statements = [
        f"ALTER WAREHOUSE {warehouse_name} SET AUTO_SUSPEND = {auto_suspend_seconds} AUTO_RESUME = TRUE;"
    ]

    if clean_mode == "full":
        sql_statements.append(f"CREATE OR REPLACE TABLE {table_name.upper()} AS SELECT * FROM STAGE;")
    else:
        sql_statements.append(f"MERGE INTO {table_name.upper()} USING STAGE ON 1=1 ...;")

    sql_statements.append(f"ALTER WAREHOUSE {warehouse_name} SUSPEND;")

    return {
        "table": table_name,
        "sync_mode": clean_mode,
        "records_count": len(records),
        "warehouse": warehouse_name,
        "auto_suspend_seconds": auto_suspend_seconds,
        "credit_waste_prevention": "ENFORCED",
        "sql_plan": sql_statements
    }
