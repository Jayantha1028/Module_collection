# Academic & Enterprise Records Microservice

**Port:** `8133`  
**Source Origin:** `sample_data` (`student_data.csv`, `teacher_data.csv`, `sample_employees.csv`)  
**Tech Stack:** Python 3.11, FastAPI, Pandas

## Overview
Microservice for university and enterprise records management. Supports querying students by specialization and minimum CGPA, analyzing academic performance aggregates, allocating faculty advisors, and browsing staff directories.

## Endpoints
- `GET /health` - Health check and record counts
- `GET /students` - Query students with optional `specialization` and `min_cgpa` filters
- `GET /students/{student_id}` - Lookup student by ID
- `GET /students/stats/overview` - Aggregate CGPA, attendance, and branch breakdowns
- `GET /teachers` - Faculty roster with mentorship and contact details
- `GET /teachers/{teacher_id}` - Lookup faculty advisor by ID
- `GET /employees` - General organizational staff directory

## Running
```bash
docker build -t academic-records-service .
docker run -p 8133:8133 academic-records-service
```
