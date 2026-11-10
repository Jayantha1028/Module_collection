# Stock Market & Financial Analytics Service

**Port:** `8131`  
**Source Origin:** `sample_data` (`MW-NIFTY-50-30-Oct-2025.csv`, `MW-NIFTY-SMALLCAP-250-13-Mar-2026.csv`, `T20-GL-gainers.csv`)  
**Tech Stack:** Python 3.11, FastAPI, Pandas

## Overview
Financial market data microservice providing equity valuations, index feeds for NIFTY 50 and NIFTY Smallcap 250, top market gainers, volume analysis, and individual ticker lookup.

## Endpoints
- `GET /health` - Health check and supported indices
- `GET /market/nifty50` - NIFTY 50 constituents, open, high, low, LTP
- `GET /market/smallcap250` - NIFTY Smallcap 250 constituent dataset with pagination
- `GET /market/gainers` - Real-time market top 20 percentage gainers
- `GET /market/quote/{symbol}` - Look up quote by symbol ticker (e.g. `COHANCE`, `RELIANCE`)

## Running
```bash
docker build -t market-analytics-service .
docker run -p 8131:8131 market-analytics-service
```
