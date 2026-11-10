# E-Commerce Python API Gateway Microservice

**Port:** `8000`  
**Source Origin:** `Ecommerce_Microservices_Kubernetes/services/api-gateway`  
**Tech Stack:** Python 3.11, FastAPI, Uvicorn, Reverse Proxy Routing

## Overview
Central API gateway for the Python E-Commerce Microservices platform. Proxies customer traffic to backend services, handles JWT token authentication verification, serves the customer shopping portal, and exposes observability endpoints.

## Endpoints
- `GET /health` - Health check
- `GET /` - Customer shopping portal UI
- `ALL /api/auth/*` - Reverse proxy to user-auth-service (:8001)
- `ALL /api/products/*` - Reverse proxy to product-service (:8002)
- `ALL /api/cart/*` - Reverse proxy to cart-service (:8003)
- `ALL /api/orders/*` - Reverse proxy to order-service (:8004)
- `ALL /api/payments/*` - Reverse proxy to payment-service (:8005)

## Running
```bash
docker build -t ecommerce-py-api-gateway .
docker run -p 8000:8000 ecommerce-py-api-gateway
```
