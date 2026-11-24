# 3D Geo-Mapping Service

Lightweight containerized 3D terrain and geospatial visualization service running on NGINX Alpine.

## Capabilities
- 3D interactive terrain rendering with Three.js / Mapbox projection.
- Static asset serving for spatial point-clouds and GIS layer overlays.

## Running
```bash
docker build -t 3d-geo-mapping-service .
docker run -p 8166:8166 3d-geo-mapping-service
```
