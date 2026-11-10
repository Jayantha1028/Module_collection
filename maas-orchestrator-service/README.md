# Monitoring-as-a-Service (MaaS) Orchestrator

**Port:** `8020`  
**Source Origin:** `MaaS`  
**Tech Stack:** Python 3.11, FastAPI, Terraform modules, Jinja2

## Overview
Self-service, multi-tenant monitoring platform orchestrator. Generates isolated tenant configurations, dedicated Prometheus scrape plans, and Grafana datasources with isolated network mappings and secure admin credentials.

## Endpoints
- `GET /health` - Health check and count of active tenant stacks
- `GET /tenants` - List all active monitoring tenants
- `GET /tenants/{tenant_id}` - Get individual tenant ports, endpoints, and credentials
- `POST /tenants` - Provision a new tenant stack
- `POST /tenants/{tenant_id}/render-prometheus` - Dynamically compile Prometheus YAML config
- `POST /tenants/{tenant_id}/render-datasource` - Dynamically compile Grafana datasource YAML
- `DELETE /tenants/{tenant_id}` - Deprovision a tenant stack

## Running
```bash
docker build -t maas-orchestrator-service .
docker run -p 8020:8020 maas-orchestrator-service
```
