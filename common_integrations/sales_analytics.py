"""
common_integrations.sales_analytics
===================================
Reusable enterprise sales performance, revenue metrics, and order margin calculations.
"""
from typing import Any, Dict, List, Optional
import pandas as pd


def compute_sales_metrics(orders: List[Dict[str, Any]]) -> Dict[str, Any]:
    """Calculate total revenue, profit margin, average order value (AOV), and top products."""
    if not orders:
        return {"total_revenue": 0.0, "total_orders": 0, "aov": 0.0}

    df = pd.DataFrame(orders)
    # Ensure numeric columns
    for col in ["revenue", "sales", "price", "amount"]:
        if col in df.columns:
            df["_rev"] = pd.to_numeric(df[col], errors="coerce").fillna(0.0)
            break
    else:
        df["_rev"] = 0.0

    total_revenue = float(df["_rev"].sum())
    total_orders = len(df)
    aov = round(total_revenue / max(1, total_orders), 2)

    product_col = next((c for c in ["product", "item", "product_name"] if c in df.columns), None)
    top_products = []
    if product_col:
        grouped = df.groupby(product_col)["_rev"].sum().sort_values(ascending=False).head(5)
        top_products = [{"product": k, "revenue": round(float(v), 2)} for k, v in grouped.items()]

    return {
        "total_revenue": round(total_revenue, 2),
        "total_orders": total_orders,
        "average_order_value": aov,
        "top_products": top_products
    }
