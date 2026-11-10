# Database Backup & Disaster Recovery Microservice

**Port:** `8153`  
**Source Origin:** `Ecommerce_Microservices_Kubernetes/scripts` (`export_csv_backup.py`, `restore_csv_backup.py`)  
**Tech Stack:** Python 3.11, FastAPI, Pydantic, JSON Snapshots

## Overview
Disaster recovery and database state management microservice. Exports persistent CSV table backups, manages versioned snapshots across service databases (auth, products, orders, cart, payments), and orchestrates restoration.

## Endpoints
- `GET /health` - Health check and snapshot inventory
- `GET /backups/tables` - Registered tables and target database connections
- `GET /backups` - List existing backup snapshots with row counts
- `POST /backups/export` - Trigger a new multi-database snapshot
- `POST /backups/restore` - Restore databases from a specified snapshot ID

## Running
```bash
docker build -t database-backup-restore-service .
docker run -p 8153:8153 database-backup-restore-service
```
