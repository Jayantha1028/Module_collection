# E-Commerce Python User Authentication Microservice

**Port:** `8001`  
**Source Origin:** `Ecommerce_Microservices_Kubernetes/services/auth-service`  
**Tech Stack:** Python 3.11, FastAPI, SQLAlchemy, PostgreSQL, Passlib/Bcrypt, PyJWT

## Overview
Authentication and identity management microservice for the Python e-commerce platform. Handles customer registration, password hashing, JWT issue/validation, and user session verification.

## Endpoints
- `GET /health` - Health check
- `POST /register` - Register a new customer account
- `POST /login` - Authenticate customer and issue JWT token
- `GET /me` - Get current authenticated user profile
- `POST /verify` - Token verification endpoint for gateway

## Running
```bash
docker build -t ecommerce-py-auth-service .
docker run -p 8001:8001 ecommerce-py-auth-service
```
