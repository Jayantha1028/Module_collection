"""
news-intelligence-service
=========================
FastAPI microservice for personalized news intelligence, extractive summarization,
opportunity identification, and technical feed scoring.
"""
import re
import datetime
from typing import List, Dict, Any, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI(
    title="Personalized News Intelligence Service",
    version="1.0.0",
    description="Extractive summarization, tech opportunity detection, and feed clustering service"
)

class SummarizeRequest(BaseModel):
    title: str = Field(..., example="OpenAI Releases Open Weights Model")
    content: str = Field(..., example="OpenAI has announced the open weights release of their new lightweight model. Developers can fine-tune it locally with 8GB VRAM.")
    user_context: Optional[str] = Field(default="Software Engineer focusing on Cloud & AI", example="Software Engineer focusing on Cloud & AI")

class OpportunityRequest(BaseModel):
    headline: str = Field(..., example="Google Cloud Next 2026 Developer Hackathon with $50,000 Prizes")
    description: str = Field(..., example="Registration opens for global developers to build agentic workflows on Vertex AI.")
    deadline: Optional[str] = Field(default=None, example="2026-12-31")

def extractive_summarize(title: str, content: str) -> Dict[str, Any]:
    sentences = [s.strip() for s in re.split(r'[.!?]+', content) if len(s.strip()) > 15]
    if not sentences:
        sentences = [title]
    
    top_bullets = sentences[:min(3, len(sentences))]
    bullets = [f"• {b}" for b in top_bullets]
    
    # Impact determination
    lower = content.lower()
    impact = "General technological update applicable to modern engineering pipelines."
    if "api" in lower or "sdk" in lower or "model" in lower:
        impact = "Direct impact: offers new programmatic abstractions or local deployment options."
    elif "security" in lower or "vulnerability" in lower or "patch" in lower:
        impact = "High priority: audit dependencies and review internal security postures."
    elif "hiring" in lower or "grant" in lower or "hackathon" in lower:
        impact = "Actionable career / funding milestone available for immediate participation."

    actions = [
        "Read official specification / repository documentation.",
        "Assess architectural compatibility with internal services."
    ]
    if "docker" in lower or "deploy" in lower:
        actions.append("Test containerized execution in staging sandbox.")

    return {
        "summary_bullets": bullets,
        "personal_impact": impact,
        "practical_actions": actions,
        "is_llm_generated": False
    }

@app.get("/")
def root():
    return {
        "service": "news-intelligence-service",
        "status": "healthy",
        "port": 8160,
        "version": "1.0.0"
    }

@app.get("/health")
def health():
    return {"status": "ok", "timestamp": datetime.datetime.utcnow().isoformat()}

@app.post("/news/summarize")
def summarize_news(req: SummarizeRequest):
    if not req.title:
        raise HTTPException(status_code=400, detail="Title cannot be empty")
    summary = extractive_summarize(req.title, req.content)
    return {
        "title": req.title,
        "result": summary,
        "processed_at": datetime.datetime.utcnow().isoformat()
    }

@app.post("/news/classify-opportunity")
def classify_opportunity(req: OpportunityRequest):
    combined = f"{req.headline} {req.description}".lower()
    opp_type = "GENERAL_NEWS"
    score = 0.5
    
    if any(k in combined for k in ["hackathon", "competition", "contest", "bounty"]):
        opp_type = "HACKATHON"
        score = 0.95
    elif any(k in combined for k in ["fellowship", "internship", "hiring", "job", "career"]):
        opp_type = "CAREER_OPPORTUNITY"
        score = 0.90
    elif any(k in combined for k in ["grant", "funding", "seed", "award"]):
        opp_type = "GRANT_FUNDING"
        score = 0.88
    elif any(k in combined for k in ["paper", "conference", "call for papers", "cfp"]):
        opp_type = "ACADEMIC_CFP"
        score = 0.85

    return {
        "headline": req.headline,
        "opportunity_type": opp_type,
        "confidence_score": score,
        "is_actionable": score >= 0.80,
        "deadline": req.deadline
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8160)
