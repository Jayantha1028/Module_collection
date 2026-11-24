"""
multiverse-chat-service
=======================
FastAPI microservice for non-linear, branching conversational tree data structures.
Enables forking conversations, parallel speculative thought chains, and timeline management.
"""
import uuid
import datetime
from typing import Dict, Any, List, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI(
    title="Multiverse Branching Chat Service",
    version="1.0.0",
    description="Branching conversational tree node engine for speculative and alternate dialogue timelines"
)

# In-memory tree repository
CHATS: Dict[str, Dict[str, Any]] = {}

class CreateChatRequest(BaseModel):
    title: str = Field(..., example="System Architecture Discussion")
    initial_message: str = Field(..., example="Should we adopt Event-Driven architecture?")

class ForkMessageRequest(BaseModel):
    parent_node_id: str
    content: str
    role: str = Field(default="user", example="user")

@app.get("/")
def root():
    return {
        "service": "multiverse-chat-service",
        "status": "healthy",
        "port": 8164,
        "version": "1.0.0"
    }

@app.get("/health")
def health():
    return {"status": "ok", "timestamp": datetime.datetime.utcnow().isoformat()}

@app.post("/chat/new")
def create_tree(req: CreateChatRequest):
    chat_id = str(uuid.uuid4())
    root_node_id = str(uuid.uuid4())
    
    root_node = {
        "id": root_node_id,
        "parent_id": None,
        "children": [],
        "role": "user",
        "content": req.initial_message,
        "created_at": datetime.datetime.utcnow().isoformat()
    }
    
    CHATS[chat_id] = {
        "id": chat_id,
        "title": req.title,
        "root_node_id": root_node_id,
        "nodes": {root_node_id: root_node},
        "created_at": datetime.datetime.utcnow().isoformat()
    }
    
    return {
        "chat_id": chat_id,
        "root_node_id": root_node_id,
        "tree": CHATS[chat_id]
    }

@app.post("/chat/{chat_id}/fork")
def fork_node(chat_id: str, req: ForkMessageRequest):
    if chat_id not in CHATS:
        raise HTTPException(status_code=404, detail="Chat not found")
        
    chat = CHATS[chat_id]
    if req.parent_node_id not in chat["nodes"]:
        raise HTTPException(status_code=400, detail="Parent node not found in chat")

    new_node_id = str(uuid.uuid4())
    new_node = {
        "id": new_node_id,
        "parent_id": req.parent_node_id,
        "children": [],
        "role": req.role,
        "content": req.content,
        "created_at": datetime.datetime.utcnow().isoformat()
    }
    
    chat["nodes"][req.parent_node_id]["children"].append(new_node_id)
    chat["nodes"][new_node_id] = new_node
    
    return {
        "chat_id": chat_id,
        "new_node_id": new_node_id,
        "parent_id": req.parent_node_id,
        "total_nodes": len(chat["nodes"])
    }

@app.get("/chat/{chat_id}/timeline/{leaf_node_id}")
def get_timeline(chat_id: str, leaf_node_id: str):
    if chat_id not in CHATS:
        raise HTTPException(status_code=404, detail="Chat not found")
    chat = CHATS[chat_id]
    if leaf_node_id not in chat["nodes"]:
        raise HTTPException(status_code=404, detail="Leaf node not found")
        
    timeline = []
    curr = leaf_node_id
    while curr:
        node = chat["nodes"][curr]
        timeline.append(node)
        curr = node["parent_id"]
        
    timeline.reverse()
    return {
        "chat_id": chat_id,
        "leaf_node_id": leaf_node_id,
        "history_length": len(timeline),
        "messages": timeline
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8164)
