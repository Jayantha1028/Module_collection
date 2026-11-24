# Public Governance & Forensic Audit Service

Microservice for public sector procurement auditing, statistical Benford's Law compliance, and anti-tender splitting detection (KTPP Act).

## Capabilities
- **Benford's Law MAD Score**: Detects non-natural financial number distributions indicative of cooked books.
- **Round Number Heuristic**: Flags round multiple invoices in civil engineering measurements.
- **Tender Splitting Engine**: Detects artificial contract fragmentations under statutory thresholds.

## Running
```bash
docker build -t public-gov-audit-service .
docker run -p 8161:8161 public-gov-audit-service
```
