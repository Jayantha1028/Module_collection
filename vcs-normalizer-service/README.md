# VCS Author & Commit Normalizer Service

**Port:** `8080`  
**Source Origin:** `VCS` (`rearrange1.py`, `rearrange2.py`)  
**Tech Stack:** Python 3.11, FastAPI, Pydantic, Regular Expressions

## Overview
Microservice for Git commit author name sanitation, log formatting, and git pre-receive / pre-commit hook payload validation. Standardizes inverted names (`"Lovelace, Ada"` $\rightarrow$ `"Ada Lovelace"`) across repository commits.

## Endpoints
- `GET /health` - Health check
- `POST /vcs/rearrange-name` - Normalize single author string
- `POST /vcs/batch-rearrange` - Bulk author name array normalization
- `POST /vcs/validate-commit` - Validate git commit author, email, and message payload

## Running
```bash
docker build -t vcs-normalizer-service .
docker run -p 8080:8080 vcs-normalizer-service
```
