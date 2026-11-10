# dbt Data Transformation Runner Service

**Port:** `8110`  
**Source Origin:** `my_dbt_project`  
**Tech Stack:** Python 3.11, FastAPI, dbt project models, Jinja2, PyYAML

## Overview
Microservice for automating data pipeline transformations using dbt concepts. Allows inspecting project metadata, listing SQL models, compiling Jinja references (`{{ ref(...) }}`), executing model DAG runs, and retrieving dependency lineage graphs.

## Endpoints
- `GET /health` - Health check and project status
- `GET /dbt/project` - Project name, version, and profile configuration
- `GET /dbt/models` - List all SQL transformation models
- `POST /dbt/compile` - Compile Jinja SQL model into executable SQL
- `POST /dbt/run` - Trigger model execution pipeline
- `GET /dbt/lineage` - Directed acyclic graph (DAG) of model dependencies

## Running
```bash
docker build -t dbt-runner-service .
docker run -p 8110:8110 dbt-runner-service
```
