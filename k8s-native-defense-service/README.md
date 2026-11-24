# K8s Native Defense Service

Next-generation Kubernetes supply chain security service verifying Sigstore Cosign signatures, SLSA Level 3 provenance, VEX advisory filters, and attack graph blast-radius analysis.

## Capabilities
- Sigstore Cosign OCI envelope validator.
- VEX vulnerability suppress/exploitability evaluation.
- Multi-hop cluster attack graph path analysis.

## Running
```bash
docker build -t k8s-native-defense-service .
docker run -p 8163:8163 k8s-native-defense-service
```
