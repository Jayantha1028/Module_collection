# Snowflake Sync Service

Cost-optimized Snowflake cloud data warehouse synchronization microservice enforcing auto-suspend and zero credit leakage.

## Endpoints
- `GET /` & `GET /health`: Healthcheck & service status.
- `POST /sync/plan`: Generates safe SQL execution statements and auto-suspend plans for table loads.

## Running
```bash
docker build -t snowflake-sync-service .
docker run -p 8154:8154 snowflake-sync-service
```
