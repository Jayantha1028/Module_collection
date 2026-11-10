# Math & Procedural Computation Microservice

**Port:** `8041`  
**Source Origin:** `Python_codes` (`Example.py`, `random_num.py`, `spiral.py`, `try1.py`, `try2.py`)  
**Tech Stack:** Python 3.11, FastAPI, Pydantic

## Overview
Microservice for mathematical evaluations, reproducible pseudorandom sequence generation, parametric geometric coordinate modeling (spirals), and arithmetic validation.

## Endpoints
- `GET /health` - Health check
- `POST /math/square` - Validated square computation
- `POST /math/random-sequence` - Seeded pseudo-random integer sequence generator
- `POST /math/spiral-coordinates` - Archimedean spiral 2D coordinate stream generator
- `POST /math/arithmetic` - Add, subtract, multiply, divide, power with zero-division validation

## Running
```bash
docker build -t math-computation-service .
docker run -p 8041:8041 math-computation-service
```
