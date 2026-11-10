# Cloud Welcome Web Microservice

**Port:** `8095`  
**Source Origin:** `docker-sample`  
**Tech Stack:** NGINX Alpine, HTML5

## Overview
Ultra-lightweight static web serving microservice demonstrating containerized HTTP hosting on NGINX Alpine.

## Endpoints
- `GET /` - Welcome to Cloud Computing landing page

## Running
```bash
docker build -t cloud-welcome-service .
docker run -p 8095:80 cloud-welcome-service
```
