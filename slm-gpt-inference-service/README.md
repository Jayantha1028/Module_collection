# SLM GPT Model Inference Microservice

**Port:** `8050`  
**Source Origin:** `SLM-main` (`gpt.py`, `loss_utils.py`, `conf/`)  
**Tech Stack:** Python 3.11, PyTorch, FastAPI, Pydantic

## Overview
Lightweight Small Language Model (SLM) serving microservice based on the GPT Transformer decoder architecture. Provides endpoints for text generation, token encoding/decoding, cross-entropy loss and perplexity evaluation, and distributed training configurations.

## Endpoints
- `GET /health` - Health check and loaded model status
- `GET /slm/model-info` - Model layer, head, embedding dimension, and context length parameters
- `POST /slm/tokenize` - Text tokenization and character-level encoding
- `POST /slm/generate` - Autoregressive text continuation with temperature and top-k controls
- `POST /slm/loss` - Calculate cross-entropy loss and perplexity on input text
- `GET /slm/training-configs` - Composer and PyTorch Lightning training hyperparameter presets

## Running
```bash
docker build -t slm-gpt-inference-service .
docker run -p 8050:8050 slm-gpt-inference-service
```
