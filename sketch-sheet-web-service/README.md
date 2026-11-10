# Sketch Sheet Web Microservice

**Port:** `8061`  
**Source Origin:** `Sketch_sheet` (`dist/`, `App.tsx`)  
**Tech Stack:** NGINX Alpine, React Native Web, HTML5 Canvas

## Overview
Containerized web frontend microservice for the Magic Slate interactive chalkboard application. Children and learners can write, sketch, select chalk colors, erase, and interact with the slate through web browsers.

## Endpoints
- `GET /` - Magic Slate interactive web application
- `GET /_expo/...` - Bundled assets and JavaScript runtime

## Running
```bash
docker build -t sketch-sheet-web-service .
docker run -p 8061:8061 sketch-sheet-web-service
```
