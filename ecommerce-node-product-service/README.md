# E-Commerce Node.js Product Catalog Microservice

**Port:** `5002`  
**Source Origin:** `ecommerce/services/product-service`  
**Tech Stack:** Node.js, Express, MongoDB / In-memory data store

## Overview
Product catalog management microservice implemented in Express.js. Serves catalog listings, categories, product searches, and pricing details.

## Endpoints
- `GET /health` - Health check
- `GET /products` - List products with category/query parameters
- `GET /products/:id` - Product details
- `POST /products` - Add product (admin)

## Running
```bash
docker build -t ecommerce-node-product-service .
docker run -p 5002:5002 ecommerce-node-product-service
```
