# E-Commerce Python Payment Microservice

**Port:** `8005` (or `8003` in compose)  
**Source Origin:** `Ecommerce_Microservices_Kubernetes/services/payment-service`  
**Tech Stack:** Python 3.11, FastAPI, SQLAlchemy, PostgreSQL, Razorpay SDK

## Overview
Payment gateway integration microservice. Processes credit card transactions, webhooks, and payment authorizations, interacting with Razorpay or local payment simulators.

## Endpoints
- `GET /health` - Health check
- `POST /payments/create-order` - Create payment intent/order
- `POST /payments/verify` - Verify payment signature and mark order paid
- `POST /payments/webhook` - Webhook receiver for payment notifications

## Running
```bash
docker build -t ecommerce-py-payment-service .
docker run -p 8005:8005 ecommerce-py-payment-service
```
