# E-Commerce Node.js Authentication Microservice

**Port:** `5001`  
**Source Origin:** `ecommerce/services/auth-service`  
**Tech Stack:** Node.js, Express, Bcryptjs, JsonWebToken

## Overview
User authentication microservice built with Node.js and Express. Issues signed JWT bearer tokens upon user sign-in and verifies active credentials for protected endpoints.

## Endpoints
- `GET /health` - Health check
- `POST /register` - Register a user
- `POST /login` - Log in and obtain JWT
- `GET /profile` - Retrieve authenticated user profile

## Running
```bash
docker build -t ecommerce-node-auth-service .
docker run -p 5001:5001 ecommerce-node-auth-service
```
