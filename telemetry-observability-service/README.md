# Centralized Telemetry & Observability Microservice

**Port:** `8152`  
**Source Origin:** `Ecommerce_Microservices_Kubernetes/services/api-gateway/observability_engine.py`  
**Tech Stack:** Python 3.11, FastAPI, In-Memory Sliding Window, Ring Buffer

## Overview
Cross-service telemetry and structured log collector. Provides thread-safe circular ring buffer storage for structured logs, real-time rate tracking (RPS/RPM), 4xx/5xx failure rates, P95/P99 latency calculations, and automated anomaly alarms.

## Endpoints
- `GET /health` - Health check and buffered log counts
- `POST /logs/ingest` - Ingest structured log entry from any microservice
- `GET /logs` - Query recent logs filtered by service, level, or time
- `POST /telemetry/record` - Record request execution time and HTTP response status
- `GET /telemetry/metrics` - Real-time throughput, error rates, and percentile latencies
- `GET /alarms` - Active anomaly alarms and historical alerts
- `POST /alarms/simulate` - Trigger synthetic alarm condition for testing

## Running
```bash
docker build -t telemetry-observability-service .
docker run -p 8152:8152 telemetry-observability-service
```
