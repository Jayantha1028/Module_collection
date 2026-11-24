# Multimedia Streaming Service

Microservice providing adaptive bitrate video transcoding job specifications, HLS/DASH manifest generation, and streaming asset catalogs.

## Capabilities
- Video asset catalog and playback resolution metadata.
- Automated multi-rendition HLS transcoding pipeline configuration.

## Running
```bash
docker build -t multimedia-streaming-service .
docker run -p 8167:8167 multimedia-streaming-service
```
