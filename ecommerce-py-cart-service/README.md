# E-Commerce Python Shopping Cart Microservice

**Port:** `8003` (or `8005` in compose)  
**Source Origin:** `Ecommerce_Microservices_Kubernetes/services/cart-service`  
**Tech Stack:** Python 3.11, FastAPI, SQLAlchemy, PostgreSQL, Redis

## Overview
Shopping cart state microservice for active customer sessions. Manages cart line items, quantity adjustments, price calculations, and checkout transitions.

## Endpoints
- `GET /health` - Health check
- `GET /cart` - Retrieve current customer's shopping cart
- `POST /cart/items` - Add product item to cart
- `PUT /cart/items/{item_id}` - Update item quantity
- `DELETE /cart/items/{item_id}` - Remove item from cart
- `POST /cart/checkout` - Convert cart into order draft

## Running
```bash
docker build -t ecommerce-py-cart-service .
docker run -p 8003:8003 ecommerce-py-cart-service
```
