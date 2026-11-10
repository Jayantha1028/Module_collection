# E-Commerce Python Product Catalog Microservice

**Port:** `8002`  
**Source Origin:** `Ecommerce_Microservices_Kubernetes/services/product-service`  
**Tech Stack:** Python 3.11, FastAPI, SQLAlchemy, PostgreSQL, Redis Caching

## Overview
Product catalog management microservice. Handles inventory lookups, product search, categories, pricing, and Redis caching for sub-millisecond catalog reads.

## Endpoints
- `GET /health` - Health check
- `GET /products` - List products with category/query filtering
- `GET /products/{id}` - Get individual product details (cached in Redis)
- `POST /products` - Create new product (admin)
- `PUT /products/{id}` - Update product attributes and price

## Running
```bash
docker build -t ecommerce-py-product-service .
docker run -p 8002:8002 ecommerce-py-product-service
```
