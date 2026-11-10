# Global Currency & Country Exchange Service

**Port:** `8132`  
**Source Origin:** `sample_data` (`currencies.xls`, `country_code_to_currency_code.xls`)  
**Tech Stack:** Python 3.11, FastAPI, Pandas

## Overview
Microservice providing international ISO currency definitions, unicode currency symbols, digital country codes, and currency conversion computations.

## Endpoints
- `GET /health` - Health check and catalog index statistics
- `GET /currencies` - Catalog of world currencies (Code, Symbol, Digital code, Full Name)
- `GET /currencies/{code}` - Lookup currency by 3-letter ISO code (e.g. `USD`, `EUR`, `INR`)
- `GET /countries` - Complete list of countries mapped to national currency codes
- `GET /countries/{country_code}` - Lookup by 3-letter ISO country code (e.g. `IND`, `AFG`, `USA`)
- `POST /convert` - Compute currency conversion given source, destination, and amount

## Running
```bash
docker build -t currency-exchange-service .
docker run -p 8132:8132 currency-exchange-service
```
