"""
common_integrations.data_analytics
=================================
Reusable data analytics, market quotes, currency conversion, and warehouse queries.
"""
from pathlib import Path
from typing import Any, Dict, List, Optional
import pandas as pd

_DATA_DIR = Path(__file__).resolve().parent / "_data"

RATES_TO_USD = {
    "USD": 1.0,
    "EUR": 0.92,
    "GBP": 0.79,
    "INR": 83.25,
    "AED": 3.67,
    "JPY": 151.2,
    "CAD": 1.36,
    "AUD": 1.52,
    "CHF": 0.91,
    "CNY": 7.24
}


def get_nifty50_stocks(limit: int = 50) -> List[Dict[str, Any]]:
    """Retrieve NIFTY 50 stock quotes, high/low, and LTP."""
    p = _DATA_DIR / "MW-NIFTY-50-30-Oct-2025.csv"
    if not p.exists():
        return []
    df = pd.read_csv(p)
    df.columns = [c.strip().replace('"', '') for c in df.columns]
    return df.head(limit).to_dict(orient="records")


def get_top_gainers() -> List[Dict[str, Any]]:
    """Retrieve top percentage gainers in the equity market."""
    p = _DATA_DIR / "T20-GL-gainers.csv"
    if not p.exists():
        return []
    df = pd.read_csv(p)
    df.columns = [c.strip().replace('"', '') for c in df.columns]
    return df.to_dict(orient="records")


def convert_currency(from_currency: str, to_currency: str, amount: float) -> Dict[str, Any]:
    """Calculate currency conversion amount based on base USD rates."""
    src = from_currency.strip().upper()
    dst = to_currency.strip().upper()

    rate_src = RATES_TO_USD.get(src, 1.0)
    rate_dst = RATES_TO_USD.get(dst, 1.0)
    converted = (amount / rate_src) * rate_dst
    unit_rate = rate_dst / rate_src

    return {
        "from_currency": src,
        "to_currency": dst,
        "input_amount": amount,
        "converted_amount": round(converted, 2),
        "exchange_rate": round(unit_rate, 4)
    }


def lookup_country_currency(country_code: str) -> Optional[Dict[str, Any]]:
    """Map ISO country code to national currency and numeric code."""
    p = _DATA_DIR / "country_mapping.csv"
    if not p.exists():
        return None
    try:
        df = pd.read_csv(p)
        clean = country_code.strip().upper()
        match = df[df["country_Code"].str.upper() == clean]
        if not match.empty:
            return match.iloc[0].to_dict()
    except Exception:
        pass
    return None


def get_warehouse_inventory(store_name: Optional[str] = None) -> List[Dict[str, Any]]:
    """Query multi-city warehouse inventory (Berlin, Calcutta, Tokyo, etc.)."""
    dfs = []
    for csv_file in _DATA_DIR.glob("inventory-*.csv"):
        try:
            dfs.append(pd.read_csv(csv_file))
        except Exception:
            pass
    if not dfs:
        return []
    df = pd.concat(dfs, ignore_index=True)
    if store_name:
        df = df[df["store"].str.title() == store_name.strip().title()]
    return df.to_dict(orient="records")


def query_academic_records(
    specialization: Optional[str] = None,
    min_cgpa: Optional[float] = None
) -> List[Dict[str, Any]]:
    """Query student records with specialization and CGPA filtering."""
    p = _DATA_DIR / "student_data.csv"
    if not p.exists():
        return []
    df = pd.read_csv(p)
    if specialization:
        df = df[df["specialization"].str.lower() == specialization.lower().strip()]
    if min_cgpa is not None:
        df = df[df["cgpa"] >= min_cgpa]
    return df.to_dict(orient="records")
