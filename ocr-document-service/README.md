# OCR Document Extraction Service

**Port:** `8030`  
**Source Origin:** `OCR`  
**Tech Stack:** Python 3.11, FastAPI, Tesseract OCR, Pillow, PyTesseract

## Overview
Optical Character Recognition (OCR) microservice for extracting text, character metadata, bounding coordinates, and structured entities (dates, currency amounts, emails, phone numbers) from images and scanned documents.

## Endpoints
- `GET /health` - Health check and OCR engine status
- `GET /ocr/languages` - List supported recognition languages
- `POST /ocr/extract-text` - Upload document/image to extract full text and dimensions
- `POST /ocr/extract-entities` - Extract structured business entities (emails, amounts, dates, phone numbers)

## Running
```bash
docker build -t ocr-document-service .
docker run -p 8030:8030 ocr-document-service
```
