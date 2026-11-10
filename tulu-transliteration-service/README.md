# Tulu-Tigalari & Kannada Transliteration Microservice

**Port:** `8070`  
**Source Origin:** `Tulu_Model/kannada_tigalari_converter/core`  
**Tech Stack:** Python 3.11, FastAPI, Pydantic, Unicode 16.0 Standard

## Overview
High-performance transliteration microservice for the Tulu Dravidian language, providing bidirectional conversion between Latin phonetic English, Kannada script, and the native Tulu-Tigalari script standardized in Unicode 16.0 (`U+11380` - `U+113FF`).

## Endpoints
- `GET /health` - Health check and supported script definitions
- `POST /script/detect` - Auto-detect script of incoming text (latin, kannada, tigalari)
- `POST /transliterate` - Explicit conversion between specified source and target scripts
- `POST /transliterate/auto` - Automatically detect input script and output transliterations to all other scripts
- `POST /unicode/inspect` - Deep Unicode code point inspection and glyph breakdown

## Running
```bash
docker build -t tulu-transliteration-service .
docker run -p 8070:8070 tulu-transliteration-service
```
