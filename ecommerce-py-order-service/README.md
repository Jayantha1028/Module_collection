# E-Commerce Python Order Management Microservice

**Port:** `8004`  
**Source Origin:** `Ecommerce_Microservices_Kubernetes/services/order-service`  
**Tech Stack:** Python 3.11, FastAPI, SQLAlchemy, PostgreSQL, HTTP client

## Overview
Order processing and lifecycle management microservice. Orchestrates order placements, validates item stock with Product Service, initiates payments with Payment Service, and tracks order statuses (PENDING, PAID, SHIPPED, CANCELLED).

## Endpoints
- `GET /health` - Health check
- `GET /orders` - List customer's orders
- `GET /orders/{order_id}` - Get order status and line items
- `POST /orders` - Create new customer order
- `POST /orders/{order_id}/cancel` - Cancel unfulfilled order

## Running
```bash
docker build -t ecommerce-py-order-service .
docker run -p 8004:8004 ecommerce-py-order-service
```
