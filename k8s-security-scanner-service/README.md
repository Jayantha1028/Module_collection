# K8s Security Scanner Microservice

**Port:** `8011`  
**Source Origin:** `K8S-security-assessment-main/src/scanners`  
**Tech Stack:** Python 3.11, FastAPI, PyYAML, 56-Point K8s Taxonomy

## Overview
Automated security scanner for Kubernetes workloads, pods, deployments, and manifests. Evaluates resources against 56 codified vulnerability signatures across 7 operational defense planes (Pod Security, Supply Chain, RBAC, Network, Control Plane, Volumes, and Runtime).

## Endpoints
- `GET /health` - Health check and scanner signature counts
- `GET /planes` - List the 7 operational defense planes
- `GET /taxonomy` - List all 56 vulnerability signatures with CIS / MITRE tags
- `GET /taxonomy/{vuln_id}` - Get details and remediation for a specific signature (e.g. `V01`)
- `POST /scan/yaml` - Scan raw multi-document YAML manifests
- `POST /scan/json` - Scan parsed Kubernetes JSON resource objects

## Running
```bash
docker build -t k8s-security-scanner-service .
docker run -p 8011:8011 k8s-security-scanner-service
```
