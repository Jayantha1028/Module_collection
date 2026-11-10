# Security Chaos Engineering (SCE) Microservice

**Port:** `8151`  
**Source Origin:** `K8S-security-assessment-main/src/evaluation/security_chaos_testing.py`  
**Tech Stack:** Python 3.11, FastAPI, Chaos Simulation Framework

## Overview
Microservice for running automated Security Chaos Engineering experiments against microservices and Kubernetes clusters. Proactively injects adversarial payloads, telemetry sensor crashes, alert flooding storms, and OOD exploits to measure resilience and recovery latency.

## Endpoints
- `GET /health` - Health check and scenario counts
- `GET /chaos/scenarios` - List all 6 codified Security Chaos Scenarios (SCE-1 to SCE-6)
- `POST /chaos/run` - Execute a scenario (e.g. `SCE-1`, `SCE-2`, or `ALL`) and measure system resilience

## Running
```bash
docker build -t security-chaos-testing-service .
docker run -p 8151:8151 security-chaos-testing-service
```
