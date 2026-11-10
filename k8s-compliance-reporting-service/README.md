# K8s Compliance & Reporting Microservice

**Port:** `8012`  
**Source Origin:** `K8S-security-assessment-main/src/reporting`  
**Tech Stack:** Python 3.11, FastAPI, Pydantic, Jinja2/HTML

## Overview
Generates executive-level security and compliance audits from Kubernetes scan results. Calculates compliance scores based on CIS Benchmarks, NSA/CISA standards, and MITRE ATT&CK taxonomy, exporting structured JSON evaluations, clean Markdown digests, and styled print-ready HTML audits.

## Endpoints
- `GET /health` - Health check and supported compliance frameworks
- `POST /reports/evaluate` - Calculate compliance posture score and severity distribution
- `POST /reports/generate/markdown` - Generate formatted Markdown audit document
- `POST /reports/generate/html` - Generate interactive, printable HTML audit report

## Running
```bash
docker build -t k8s-compliance-reporting-service .
docker run -p 8012:8012 k8s-compliance-reporting-service
```
