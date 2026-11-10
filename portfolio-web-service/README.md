# Portfolio Web Microservice

**Port:** `8120`  
**Source Origin:** `my_portfolio`  
**Tech Stack:** NGINX Alpine, HTML5, CSS3

## Overview
Web hosting microservice serving personal developer portfolio pages, interactive resumes, project showcases, and career journeys.

## Endpoints
- `GET /` - Personal portfolio landing page
- `GET /personal_portfolio_template.html` - Full responsive portfolio template

## Running
```bash
docker build -t portfolio-web-service .
docker run -p 8120:80 portfolio-web-service
```
