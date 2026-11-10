# Crossplane Declarative Cloud Controller Service

**Port:** `8090`  
**Source Origin:** `crossplane-local-demo`  
**Tech Stack:** Python 3.11, FastAPI, PyYAML, Crossplane AWS Provider Specs

## Overview
Microservice for managing declarative cloud infrastructure across LocalStack and AWS. Handles S3 bucket resource generation, configuration drift detection, automated reconciliation loops, and Kubernetes Custom Resource Definition (CRD) manifest serving.

## Endpoints
- `GET /health` - Health check and managed resource count
- `GET /infrastructure/status` - Crossplane provider status and target cloud connection
- `GET /infrastructure/manifests` - Retrieve raw declarative YAML templates (`Bucket`, `ProviderConfig`)
- `POST /infrastructure/s3/buckets` - Declare new cloud storage bucket
- `POST /infrastructure/drift/detect` - Compare declared state with live infrastructure tags/specs
- `POST /infrastructure/drift/reconcile` - Re-converge live resource state to declared spec

## Running
```bash
docker build -t crossplane-cloud-controller-service .
docker run -p 8090:8090 crossplane-cloud-controller-service
```
