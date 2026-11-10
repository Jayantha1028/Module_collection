# VibeSpace Social Platform Microservice

**Port:** `8100`  
**Source Origin:** `live_page` (`dist/`, `src/`)  
**Tech Stack:** NGINX Alpine, Vite, React, Tailwind CSS

## Overview
Containerized web frontend microservice for VibeSpace, the funky social sandbox where users customize creative profiles with raw code, retro widgets, 3D canvases, and shared multiplayer club rooms.

## Endpoints
- `GET /` - VibeSpace social platform web application
- `GET /assets/...` - Static JS/CSS assets

## Running
```bash
docker build -t vibespace-social-service .
docker run -p 8100:80 vibespace-social-service
```
