# PySpark & Big Data Analytics Service

**Port:** `8040`  
**Source Origin:** `Python_codes/Pyspark`, `sample.py`, `pyspark.py`  
**Tech Stack:** Python 3.11, FastAPI, Pandas, NumPy, Vectorized Analytics

## Overview
Data processing and distributed aggregation microservice inspired by PySpark workflows. Provides endpoints for tabular dataset summaries, column-level conditional filtering, statistical computations, and map-reduce text transformations.

## Endpoints
- `GET /health` - Health check
- `GET /spark/status` - Cluster status and driver parameters
- `POST /spark/dataframes/summary` - Calculate count, mean, stddev, min, max for input records
- `POST /spark/dataframes/filter` - Filter records based on dynamic column conditions (`gt`, `lt`, `eq`, `contains`)
- `POST /spark/jobs/word-count` - Run map-reduce word frequency analysis

## Running
```bash
docker build -t pyspark-analytics-service .
docker run -p 8040:8040 pyspark-analytics-service
```
