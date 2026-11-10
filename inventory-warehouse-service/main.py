from pathlib import Path
from typing import Dict, List, Optional
from fastapi import FastAPI, HTTPException
import pandas as pd

app = FastAPI(
    title="Global Warehouse Inventory Microservice",
    description="Multi-region warehouse inventory aggregation and supply-chain stock tracking across 7 global distribution centers",
    version="1.0.0"
)

DATA_DIR = Path(__file__).parent / "data"

def load_all_inventory() -> pd.DataFrame:
    dfs = []
    for csv_file in DATA_DIR.glob("inventory-*.csv"):
        try:
            df = pd.read_csv(csv_file)
            dfs.append(df)
        except Exception:
            pass
    if dfs:
        return pd.concat(dfs, ignore_index=True)
    return pd.DataFrame(columns=["store", "item", "count"])

@app.get("/health")
def health():
    df = load_all_inventory()
    return {
        "status": "healthy",
        "service": "inventory-warehouse-service",
        "total_records": len(df),
        "stores_count": int(df["store"].nunique()) if not df.empty else 0
    }

@app.get("/inventory/warehouses")
def list_warehouses():
    df = load_all_inventory()
    if df.empty:
        return {"warehouses": []}
    grouped = df.groupby("store")["count"].sum().reset_index()
    return {
        "total_warehouses": len(grouped),
        "warehouses": grouped.to_dict(orient="records")
    }

@app.get("/inventory/store/{store_name}")
def get_store_inventory(store_name: str):
    df = load_all_inventory()
    s_clean = store_name.strip().title()
    store_df = df[df["store"].str.title() == s_clean]
    if store_df.empty:
        raise HTTPException(status_code=404, detail=f"Warehouse store '{store_name}' not found")
    return {
        "store": s_clean,
        "total_items": int(store_df["count"].sum()),
        "inventory": store_df[["item", "count"]].to_dict(orient="records")
    }

@app.get("/inventory/item/{item_name}")
def get_item_inventory(item_name: str):
    df = load_all_inventory()
    item_df = df[df["item"].str.lower() == item_name.lower().strip()]
    if item_df.empty:
        raise HTTPException(status_code=404, detail=f"Item '{item_name}' not found")
    return {
        "item": item_name,
        "total_global_stock": int(item_df["count"].sum()),
        "breakdown_by_store": item_df[["store", "count"]].to_dict(orient="records")
    }

@app.get("/inventory/aggregate")
def get_aggregate():
    df = load_all_inventory()
    if df.empty:
        return {"matrix": []}
    pivot = df.pivot_table(index="item", columns="store", values="count", fill_value=0).reset_index()
    return {
        "inventory_matrix": pivot.to_dict(orient="records")
    }

@app.get("/inventory/out-of-stock")
def get_out_of_stock():
    df = load_all_inventory()
    oos = df[df["count"] == 0]
    return {
        "total_out_of_stock_instances": len(oos),
        "alerts": oos.to_dict(orient="records")
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8130)
