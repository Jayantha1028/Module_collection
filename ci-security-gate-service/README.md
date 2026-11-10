# CI/CD DevSecOps Security Gate Microservice

**Port:** `8150`  
**Source Origin:** `K8S-security-assessment-main/src/evaluation/ci_security_gate.py`  
**Tech Stack:** Python 3.11, FastAPI, PyYAML, Pydantic

## Overview
Shift-left automated pull request linter and CI security gate. Analyzes Kubernetes manifest changes against security baselines, prevents non-compliant deployments from merging, and generates markdown PR step summaries.

## Endpoints
- `GET /health` - Health check
- `POST /gate/evaluate` - Evaluate PR manifest payload against policy thresholds

## Running
```bash
docker build -t ci-security-gate-service .
docker run -p 8150:8150 ci-security-gate-service
```
