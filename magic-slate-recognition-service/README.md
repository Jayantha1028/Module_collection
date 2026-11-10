# Magic Slate Recognition & Phonics Microservice

**Port:** `8060`  
**Source Origin:** `Sketch_sheet/src/services` (`pointCloudRecognizer.ts`, `speechService.ts`)  
**Tech Stack:** Python 3.11, FastAPI, Pydantic, Geometric Point Cloud Analysis

## Overview
Geometric stroke recognition and phonics synthesis microservice designed for handwriting and drawing interaction on children's digital chalkboards. Classifies letters, numerals, and doodles from touch coordinates and generates audio pronunciation metadata.

## Endpoints
- `GET /health` - Health check and recognition catalog size
- `GET /catalog/templates` - Catalog of recognized characters, shapes, emojis, and sounds
- `POST /recognize/strokes` - Classify multi-stroke touch coordinate paths
- `POST /speech/synthesize` - Generate natural voice text-to-speech parameters and phonics guide

## Running
```bash
docker build -t magic-slate-recognition-service .
docker run -p 8060:8060 magic-slate-recognition-service
```
