# System Optimizer Service

Microservice providing deep host/container telemetry, real-time memory pressure monitoring, and workload throttling/cache optimization plans.

## Capabilities
- Hardware metrics extraction (CPU, RAM, Disk, Battery).
- Automated memory pressure evaluation and cache reclaim planning.

## Running
```bash
docker build -t system-optimizer-service .
docker run -p 8162:8162 system-optimizer-service
```
