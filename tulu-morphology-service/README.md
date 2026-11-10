# Tulu Morphology & Grammar Microservice

**Port:** `8071`  
**Source Origin:** `Tulu_Model/kannada_tigalari_converter/nlp`  
**Tech Stack:** Python 3.11, FastAPI, Pydantic, Rule-Based Morphology

## Overview
Linguistic processing engine for the Tulu Dravidian language. Provides word lemmatization, 8-case noun declensions (Nominative through Sociative), multi-tense and polarity verb conjugation tables, and morphological parsing / POS tagging.

## Endpoints
- `GET /health` - Health check
- `POST /morphology/lemmatize` - Strip inflectional affixes to extract base lemma
- `POST /morphology/decline-noun` - Generate 8 Dravidian grammatical case declensions
- `POST /morphology/conjugate-verb` - Generate verb conjugation paradigms
- `POST /morphology/parse` - Parse word into grammatical morphemes and predict POS tag

## Running
```bash
docker build -t tulu-morphology-service .
docker run -p 8071:8071 tulu-morphology-service
```
