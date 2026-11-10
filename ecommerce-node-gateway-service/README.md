# E-Commerce Node.js NGINX Gateway Microservice

**Port:** `5000`  
**Source Origin:** `ecommerce/gateway`  
**Tech Stack:** NGINX Alpine, HTML5 Frontend Portal

## Overview
NGINX reverse proxy and frontend gateway microservice for the Node.js/Express e-commerce stack. Routes `/api/auth`, `/api/products`, `/api/cart`, and `/api/orders` to their designated Express microservice containers and serves the browser storefront.

## Endpoints
- `GET /` - Node.js E-Commerce Storefront UI
- `ALL /api/auth/*` - Reverse proxy to auth-service (:5001)
- `ALL /api/products/*` - Reverse proxy to product-service (:5002)
- `ALL /api/cart/*` - Reverse proxy to cart-service (:5003)
- `ALL /api/orders/*` - Reverse proxy to order-service (:5004)

## Running
```bash
docker build -t ecommerce-node-gateway-service .
docker run -p 5000:80 ecommerce-node-gateway-service
```
