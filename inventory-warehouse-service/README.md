# Global Warehouse Inventory Microservice

**Port:** `8130`  
**Source Origin:** `sample_data` (`inventory-berlin.csv`, `inventory-calcutta.csv`, `inventory-karachi.csv`, `inventory-pusan.csv`, `inventory-shanghai.csv`, `inventory-springfield.csv`, `inventory-tokyo.csv`)  
**Tech Stack:** Python 3.11, FastAPI, Pandas

## Overview
Multi-warehouse inventory tracking and aggregation microservice across 7 global cities (Berlin, Calcutta, Karachi, Pusan, Shanghai, Springfield, Tokyo). Provides store-level stock checks, global item availability matrices, and real-time out-of-stock supply chain alerts.

## Endpoints
- `GET /health` - Health check and total catalog records
- `GET /inventory/warehouses` - Aggregate stock counts across all 7 regional warehouses
- `GET /inventory/store/{store_name}` - Itemized inventory for a specific regional hub
- `GET /inventory/item/{item_name}` - Global distribution and total quantities for a specific product
- `GET /inventory/aggregate` - Complete product-by-warehouse pivot matrix
- `GET /inventory/out-of-stock` - Depleted inventory warnings

## Running
```bash
docker build -t inventory-warehouse-service .
docker run -p 8130:8130 inventory-warehouse-service
```
