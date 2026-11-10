# E-Commerce Node.js Order Microservice

**Port:** `5004`  
**Source Origin:** `ecommerce/services/order-service`  
**Tech Stack:** Node.js, Express, Axios

## Overview
Order processing and checkout microservice built with Express.js. Handles order creation, cart item transition, and order history retrieval.

## Endpoints
- `GET /health` - Health check
- `GET /orders` - List user orders
- `POST /orders` - Place new order from cart
- `GET /orders/:id` - Get order status

## Running
```bash
docker build -t ecommerce-node-order-service .
docker run -p 5004:5004 ecommerce-node-order-service
```
