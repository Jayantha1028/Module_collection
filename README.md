# Collected Microservices Suite

A master repository of **48 production-ready microservices** extracted and modularized across all folders in the workspace, complete with standalone Dockerfiles, REST APIs, dependency manifests, and comprehensive documentation.

> **Integrity Guarantee:** All original folders in the workspace remain 100% intact and untouched. All microservices are collected independently within `collected_microservices/`.

---

## 📊 Microservices Catalog Overview

| # | Microservice Name | Category | Origin Folder | Port | Stack | Key Capabilities |
|---|---|---|---|---|---|---|
| 1 | `ecommerce-py-api-gateway` | E-Commerce | `Ecommerce_Microservices_Kubernetes` | 8000 | FastAPI / Python | Storefront portal, JWT verification, reverse proxy routing |
| 2 | `ecommerce-py-auth-service` | E-Commerce | `Ecommerce_Microservices_Kubernetes` | 8001 | FastAPI / PostgreSQL / JWT | User registration, password hashing, bearer auth tokens |
| 3 | `ecommerce-py-product-service` | E-Commerce | `Ecommerce_Microservices_Kubernetes` | 8002 | FastAPI / PostgreSQL / Redis | Catalog CRUD, category filtering, Redis cache |
| 4 | `ecommerce-py-cart-service` | E-Commerce | `Ecommerce_Microservices_Kubernetes` | 8003 | FastAPI / PostgreSQL / Redis | Session shopping carts, item management, checkout transitions |
| 5 | `ecommerce-py-order-service` | E-Commerce | `Ecommerce_Microservices_Kubernetes` | 8004 | FastAPI / PostgreSQL | Order lifecycle, payment coordination, inventory decrement |
| 6 | `ecommerce-py-payment-service` | E-Commerce | `Ecommerce_Microservices_Kubernetes` | 8005 | FastAPI / Razorpay | Payment intent generation, signature verification, webhooks |
| 7 | `ecommerce-node-gateway-service` | E-Commerce | `ecommerce` | 5000 | NGINX Alpine / HTML5 | Static web storefront & reverse proxy for Node.js services |
| 8 | `ecommerce-node-auth-service` | E-Commerce | `ecommerce` | 5001 | Node.js / Express / JWT | Express authentication and JWT signing |
| 9 | `ecommerce-node-product-service` | E-Commerce | `ecommerce` | 5002 | Node.js / Express | Express product catalog and listing endpoints |
| 10 | `ecommerce-node-cart-service` | E-Commerce | `ecommerce` | 5003 | Node.js / Express | Express cart state management |
| 11 | `ecommerce-node-order-service` | E-Commerce | `ecommerce` | 5004 | Node.js / Express | Express order placement and order history |
| 12 | `k8s-cve-intelligence-service` | Security & Audit | `K8S-security-assessment-main` | 8010 | FastAPI / Python | Offline container CVE knowledge base, severity lookup, CVSS |
| 13 | `k8s-security-scanner-service` | Security & Audit | `K8S-security-assessment-main` | 8011 | FastAPI / PyYAML | 56-vulnerability K8s manifest scanner across 7 operational planes |
| 14 | `k8s-compliance-reporting-service` | Security & Audit | `K8S-security-assessment-main` | 8012 | FastAPI / HTML / Markdown | CIS Benchmark scoring, executive compliance PDF/HTML reports |
| 15 | `maas-orchestrator-service` | Infrastructure | `MaaS` | 8020 | FastAPI / Terraform | Monitoring-as-a-Service multi-tenant Prometheus/Grafana stack |
| 16 | `ocr-document-service` | AI & Computer Vision | `OCR` | 8030 | FastAPI / Tesseract | Optical character recognition, document layout, entity extraction |
| 17 | `pyspark-analytics-service` | Data & Analytics | `Python_codes` | 8040 | FastAPI / Pandas / PySpark | Tabular summary statistics, dynamic column filters, word-count |
| 18 | `math-computation-service` | Computation | `Python_codes` | 8041 | FastAPI / Python | Validated squares, seeded pseudo-random series, 2D spiral points |
| 19 | `slm-gpt-inference-service` | AI & NLP | `SLM-main` | 8050 | FastAPI / PyTorch | GPT Transformer decoder generation, tokenization, loss/perplexity |
| 20 | `magic-slate-recognition-service` | AI & Vision | `Sketch_sheet` | 8060 | FastAPI / Python | Geometric stroke point-cloud classifier & voice phonics synthesis |
| 21 | `sketch-sheet-web-service` | Web Applications | `Sketch_sheet` | 8061 | NGINX Alpine / React Web | Digital slate interactive drawing chalkboard web app |
| 22 | `tulu-transliteration-service` | AI & NLP | `Tulu_Model` | 8070 | FastAPI / Unicode 16.0 | Bidirectional Latin <-> Kannada <-> Tulu-Tigalari converter |
| 23 | `tulu-morphology-service` | AI & NLP | `Tulu_Model` | 8071 | FastAPI / Python NLP | Tulu lemmatizer, 8 Dravidian case declensions, verb conjugator |
| 24 | `vcs-normalizer-service` | Developer Tools | `VCS` | 8080 | FastAPI / Regex | Git author name normalizer ('Last, First' -> 'First Last'), hook validator |
| 25 | `crossplane-cloud-controller-service` | Cloud & Infra | `crossplane-local-demo` | 8090 | FastAPI / Crossplane | Declarative S3 bucket provisioning, drift detection & reconciliation |
| 26 | `cloud-welcome-service` | Web Applications | `docker-sample` | 8095 | NGINX Alpine / HTML5 | Lightweight containerized cloud welcome web landing |
| 27 | `vibespace-social-service` | Web Applications | `live_page` | 8100 | NGINX Alpine / React / Vite | VibeSpace creative sandbox, custom profiles & club rooms |
| 28 | `devsecops-dashboard-service` | Infrastructure | `live_page` | 8101 | NGINX Alpine / Tailwind | Real-time DevSecOps cluster security telemetry dashboard |
| 29 | `dbt-runner-service` | Data & Analytics | `my_dbt_project` | 8110 | FastAPI / dbt / Jinja2 | dbt model compiler, dependency lineage graph, transformation run |
| 30 | `portfolio-web-service` | Web Applications | `my_portfolio` | 8120 | NGINX Alpine / HTML / CSS | Developer portfolio showcase, personal resume & project gallery |
| 31 | `inventory-warehouse-service` | Supply Chain | `sample_data` | 8130 | FastAPI / Pandas | 7-city global warehouse stock aggregator and out-of-stock alerts |
| 32 | `market-analytics-service` | Financial Data | `sample_data` | 8131 | FastAPI / Pandas | NIFTY 50, Smallcap 250, and Top 20 Gainers market data feeds |
| 33 | `currency-exchange-service` | Financial Data | `sample_data` | 8132 | FastAPI / Pandas | World currency database, country ISO mapping, rate conversion |
| 34 | `academic-records-service` | Institutional Data | `sample_data` | 8133 | FastAPI / Pandas | Student CGPA analysis, faculty mentorship allocation, staff directory |
| 35 | `gitdeck-dashboard-service` | Developer Tools | `gitdeck.html` | 8140 | NGINX Alpine / HTML5 | Pegboard developer dashboard for Git and repo productivity |
| 36 | `ci-security-gate-service` | Security & Audit | `ci_pipeline` | 8150 | FastAPI / Python | Automated PR security gate, CVE thresholds, policy blocker |
| 37 | `security-chaos-testing-service` | Infrastructure | `chaos_mesh` | 8151 | FastAPI / Python | Chaos engineering orchestrator for pod termination & privilege abuse |
| 38 | `telemetry-observability-service` | Infrastructure | `telemetry` | 8152 | FastAPI / Prometheus | Multi-cluster OpenTelemetry exporter & metrics aggregator |
| 39 | `database-backup-restore-service` | Data & Analytics | `db_ops` | 8153 | FastAPI / PostgreSQL | Automated database snapshotting, verify restore, cold-storage sync |
| 40 | `snowflake-sync-service` | Data & Analytics | `common_integrations` | 8154 | FastAPI / Snowflake | Zero credit waste Snowflake ETL sync planner |
| 41 | `news-intelligence-service` | AI & NLP | `news_portal` | 8160 | FastAPI / Python | Extractive 3-bullet summarizer & opportunity detection |
| 42 | `public-gov-audit-service` | Security & Audit | `Public-gov` | 8161 | FastAPI / Python | Benford's Law compliance & KTPP tender splitting detection |
| 43 | `system-optimizer-service` | Infrastructure | `System_optimizer` | 8162 | FastAPI / psutil | Hardware telemetry, memory pressure balancer & cache reclamation |
| 44 | `k8s-native-defense-service` | Security & Audit | `native_K8S_scanner` | 8163 | FastAPI / Cryptography | Sigstore Cosign verification, VEX filter, attack graph analysis |
| 45 | `multiverse-chat-service` | AI & NLP | `chat_app` | 8164 | FastAPI / Python | Non-linear conversational tree node branching engine |
| 46 | `digidocs-verification-service` | Security & Audit | `digidocs` | 8165 | FastAPI / Cryptography | SHA-256 fingerprinting & digital document authenticity ledger |
| 47 | `3d-geo-mapping-service` | Web Applications | `3dmap-main` | 8166 | NGINX Alpine / Three.js | Interactive 3D geospatial terrain viewer & map projection |
| 48 | `multimedia-streaming-service` | Media & Streaming | `MultiMedia` | 8167 | FastAPI / Python | Adaptive bitrate video transcoding & HLS streaming catalog |

---

## 🚀 How to Run the Services

### 1. Run Any Single Microservice Standalone
Navigate to any service directory inside `collected_microservices/`:
```bash
cd collected_microservices/<service-name>
docker build -t <service-name> .
docker run -p <PORT>:<PORT> <service-name>
```

### 2. Run with Docker Compose
To spin up all microservices simultaneously:
```bash
cd collected_microservices
docker compose up -d
```
Or start specific services:
```bash
docker compose up -d k8s-security-scanner-service ocr-document-service market-analytics-service
```

### 3. Machine-Readable Catalog
Inspect [CATALOG.json](file:///Users/jayanthanayak/Side_task/collected_microservices/CATALOG.json) for programmatic enumeration of all service metadata, port mappings, and healthcheck endpoints.
