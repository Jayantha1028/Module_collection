# Multiverse Chat Service

Non-linear conversational branching microservice that manages tree-structured dialogue nodes, speculative timeline branches, and thread tracking.

## Capabilities
- Create conversational root trees.
- Fork branches at any node ID in the conversation.
- Reconstruct linear conversation paths from any leaf node.

## Running
```bash
docker build -t multiverse-chat-service .
docker run -p 8164:8164 multiverse-chat-service
```
