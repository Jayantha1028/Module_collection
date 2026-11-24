# News Intelligence Service

FastAPI microservice for real-time news extraction, concise deterministic summarization, and opportunity classification (grants, hackathons, job roles).

## Features
- Extractive 3-bullet summarization with personal impact analysis.
- Machine learning/heuristic opportunity classification for tech events.
- Healthcheck and status diagnostics.

## Running
```bash
docker build -t news-intelligence-service .
docker run -p 8160:8160 news-intelligence-service
```
