# DevSecOps Telemetry & Security Dashboard Microservice

**Port:** `8101`  
**Source Origin:** `live_page` (`devsecops_dashboard.html`, `evolving_site.html`)  
**Tech Stack:** NGINX Alpine, Tailwind CSS, Phosphor Icons, Web Canvas

## Overview
Interactive telemetry dashboard microservice visualizing Kubernetes cluster health, real-time DevSecOps security metrics, vulnerability trends, and compliance posture.

## Endpoints
- `GET /` - DevSecOps interactive dashboard
- `GET /evolving_site.html` - Evolving multi-theme site showcase

## Running
```bash
docker build -t devsecops-dashboard-service .
docker run -p 8101:80 devsecops-dashboard-service
```
