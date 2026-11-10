from pathlib import Path
from typing import Dict, List, Optional
from fastapi import FastAPI, HTTPException, Query
import pandas as pd

app = FastAPI(
    title="Stock Market & Financial Analytics Service",
    description="Microservice providing market feeds, index snapshots, NIFTY 50 / Smallcap 250 data, and top market gainers",
    version="1.0.0"
)

DATA_DIR = Path(__file__).parent / "data"

def clean_cols(df: pd.DataFrame) -> pd.DataFrame:
    df.columns = [str(c).strip().replace("\n", "").replace('"', '') for c in df.columns]
    return df

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "market-analytics-service",
        "indices_supported": ["NIFTY 50", "NIFTY SMALLCAP 250", "TOP 20 GAINERS"]
    }

@app.get("/market/nifty50")
def get_nifty50(limit: int = Query(50, ge=1, le=100)):
    p = DATA_DIR / "MW-NIFTY-50-30-Oct-2025.csv"
    if not p.exists():
        raise HTTPException(status_code=404, detail="NIFTY 50 dataset missing")
    df = clean_cols(pd.read_csv(p))
    records = df.head(limit).to_dict(orient="records")
    return {
        "index": "NIFTY 50",
        "as_of_date": "2025-10-30",
        "total_returned": len(records),
        "stocks": records
    }

@app.get("/market/smallcap250")
def get_smallcap250(limit: int = Query(50, ge=1, le=250), offset: int = Query(0, ge=0)):
    p = DATA_DIR / "MW-NIFTY-SMALLCAP-250-13-Mar-2026.csv"
    if not p.exists():
        raise HTTPException(status_code=404, detail="NIFTY Smallcap 250 dataset missing")
    df = clean_cols(pd.read_csv(p))
    paginated = df.iloc[offset: offset + limit].to_dict(orient="records")
    return {
        "index": "NIFTY SMALLCAP 250",
        "as_of_date": "2026-03-13",
        "total_constituents": len(df),
        "offset": offset,
        "limit": limit,
        "stocks": paginated
    }

@app.get("/market/gainers")
def get_gainers():
    p = DATA_DIR / "T20-GL-gainers.csv"
    if not p.exists():
        raise HTTPException(status_code=404, detail="Gainers dataset missing")
    df = clean_cols(pd.read_csv(p))
    return {
        "category": "Top Market Gainers",
        "total": len(df),
        "gainers": df.to_dict(orient="records")
    }

@app.get("/market/quote/{symbol}")
def get_quote(symbol: str):
    sym = symbol.strip().upper()
    
    # Check gainers
    p_gainers = DATA_DIR / "T20-GL-gainers.csv"
    if p_gainers.exists():
        df_g = clean_cols(pd.read_csv(p_gainers))
        sym_col = next((c for c in df_g.columns if "symbol" in c.lower()), None)
        if sym_col:
            match = df_g[df_g[sym_col].astype(str).str.upper() == sym]
            if not match.empty:
                res = match.iloc[0].to_dict()
                res["source"] = "Top Gainers"
                return res

    # Check Nifty 50
    p_nifty = DATA_DIR / "MW-NIFTY-50-30-Oct-2025.csv"
    if p_nifty.exists():
        df_n = clean_cols(pd.read_csv(p_nifty))
        sym_col = next((c for c in df_n.columns if "symbol" in c.lower()), None)
        if sym_col:
            match = df_n[df_n[sym_col].astype(str).str.upper() == sym]
            if not match.empty:
                res = match.iloc[0].to_dict()
                res["source"] = "NIFTY 50"
                return res

    raise HTTPException(status_code=404, detail=f"Symbol '{symbol}' not found in active tickers")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8131)
