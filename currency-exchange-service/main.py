from pathlib import Path
from typing import Dict, List, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field
import pandas as pd

app = FastAPI(
    title="Global Currency & Country Exchange Service",
    description="Microservice providing ISO currency catalog, country code mapping, and currency conversion",
    version="1.0.0"
)

DATA_DIR = Path(__file__).parent / "data"

class ConvertRequest(BaseModel):
    from_currency: str = Field(..., example="USD")
    to_currency: str = Field(..., example="INR")
    amount: float = Field(..., gt=0, example=100.0)

# Mock baseline exchange rates relative to USD
BASE_RATES_TO_USD = {
    "USD": 1.0,
    "EUR": 0.92,
    "GBP": 0.79,
    "INR": 83.25,
    "AED": 3.67,
    "JPY": 151.2,
    "CAD": 1.36,
    "AUD": 1.52,
    "CHF": 0.91,
    "CNY": 7.24,
    "AFN": 70.8
}

def get_currencies_df() -> pd.DataFrame:
    p = DATA_DIR / "currencies.csv"
    if not p.exists():
        return pd.DataFrame()
    return pd.read_csv(p)

def get_country_mapping_df() -> pd.DataFrame:
    p = DATA_DIR / "country_mapping.csv"
    if not p.exists():
        return pd.DataFrame()
    return pd.read_csv(p)

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "currency-exchange-service",
        "currencies_indexed": len(get_currencies_df()),
        "countries_mapped": len(get_country_mapping_df())
    }

@app.get("/currencies")
def list_currencies():
    df = get_currencies_df()
    return {
        "total": len(df),
        "currencies": df.to_dict(orient="records")
    }

@app.get("/currencies/{code}")
def get_currency_by_code(code: str):
    df = get_currencies_df()
    c_clean = code.strip().upper()
    match = df[df["Currency"].str.upper() == c_clean]
    if match.empty:
        raise HTTPException(status_code=404, detail=f"Currency '{code}' not found")
    return match.iloc[0].to_dict()

@app.get("/countries")
def list_countries():
    df = get_country_mapping_df()
    return {
        "total": len(df),
        "countries": df.to_dict(orient="records")
    }

@app.get("/countries/{country_code}")
def get_country_by_code(country_code: str):
    df = get_country_mapping_df()
    c_clean = country_code.strip().upper()
    match = df[df["country_Code"].str.upper() == c_clean]
    if match.empty:
        raise HTTPException(status_code=404, detail=f"Country code '{country_code}' not found")
    return match.iloc[0].to_dict()

@app.post("/convert")
def convert_currency(req: ConvertRequest):
    src = req.from_currency.strip().upper()
    dst = req.to_currency.strip().upper()

    rate_src = BASE_RATES_TO_USD.get(src, 1.0)
    rate_dst = BASE_RATES_TO_USD.get(dst, 1.0)

    # Conversion via USD base
    # (amount / rate_src) * rate_dst
    converted = (req.amount / rate_src) * rate_dst
    unit_rate = rate_dst / rate_src

    return {
        "from_currency": src,
        "to_currency": dst,
        "input_amount": req.amount,
        "converted_amount": round(converted, 2),
        "exchange_rate": round(unit_rate, 4)
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8132)
