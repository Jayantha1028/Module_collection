# Gitdeck Developer Dashboard Microservice

**Port:** `8140`  
**Source Origin:** `gitdeck.html`  
**Tech Stack:** NGINX Alpine, HTML5, Custom Widgets

## Overview
Pegboard developer dashboard microservice for tracking Git repositories, branch activity, commit streams, and dev productivity widgets in a customizable 3-column pegboard layout.

## Endpoints
- `GET /` - Gitdeck interactive pegboard dashboard

## Running
```bash
docker build -t gitdeck-dashboard-service .
docker run -p 8140:80 gitdeck-dashboard-service
```
