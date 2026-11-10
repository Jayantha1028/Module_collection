# E-Commerce Node.js Cart Microservice

**Port:** `5003`  
**Source Origin:** `ecommerce/services/cart-service`  
**Tech Stack:** Node.js, Express, Session State

## Overview
Shopping cart management microservice implemented in Express.js. Tracks session items, quantities, and totals for active shopper baskets.

## Endpoints
- `GET /health` - Health check
- `GET /cart` - Retrieve shopping cart items
- `POST /cart` - Add item to cart
- `DELETE /cart/:itemId` - Remove item from cart

## Running
```bash
docker build -t ecommerce-node-cart-service .
docker run -p 5003:5003 ecommerce-node-cart-service
```
