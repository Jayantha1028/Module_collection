# DigiDocs Cryptographic Verification Service

Microservice providing cryptographic hash registration, tamper verification, and authenticity checks for digital identity and certificate documents.

## Capabilities
- SHA-256 fingerprint registration.
- Instant tamper detection against stored master digests.
- Audit trail count on document verifications.

## Running
```bash
docker build -t digidocs-verification-service .
docker run -p 8165:8165 digidocs-verification-service
```
