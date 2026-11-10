import math
import random
from typing import Dict, List, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI(
    title="SLM GPT Model Inference Microservice",
    description="Small Language Model (GPT-2 architecture) text generation, tokenization, and loss evaluation",
    version="1.0.0"
)

class GenerateRequest(BaseModel):
    prompt: str = Field(..., example="The future of artificial intelligence is")
    max_new_tokens: int = Field(50, ge=1, le=500, example=50)
    temperature: float = Field(0.8, ge=0.1, le=2.0, example=0.8)
    top_k: int = Field(40, ge=1, le=100, example=40)

class TokenizeRequest(BaseModel):
    text: str = Field(..., example="Hello world! Welcome to SLM GPT.")

class LossRequest(BaseModel):
    text: str = Field(..., example="The quick brown fox jumps over the lazy dog.")

# Model configuration
DEFAULT_CONFIG = {
    "model_type": "slm-gpt2-small",
    "vocab_size": 50257,
    "context_length": 1024,
    "dim": 768,
    "num_heads": 12,
    "num_layers": 12,
    "dropout": 0.1,
    "bias": False,
    "framework": "PyTorch / Composer"
}

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "slm-gpt-inference-service",
        "model_loaded": True,
        "model_type": DEFAULT_CONFIG["model_type"]
    }

@app.get("/slm/model-info")
def model_info():
    return DEFAULT_CONFIG

@app.post("/slm/tokenize")
def tokenize_text(req: TokenizeRequest):
    # UTF-8 byte-pair / ascii token mapping simulation
    tokens = [ord(c) for c in req.text]
    return {
        "text": req.text,
        "token_count": len(tokens),
        "tokens": tokens,
        "decoded": "".join(chr(t) for t in tokens)
    }

@app.post("/slm/generate")
def generate_text(req: GenerateRequest):
    # Simulated autoregressive generation based on SLM language priors
    continuations = [
        " driven by efficient small language models executing at the edge.",
        " evolving through structured reasoning and specialized domain knowledge.",
        " deeply connected to high-performance microservices and distributed computing.",
        " accelerating breakthroughs across science, medicine, and human collaboration.",
        " demonstrating that compact architectures can deliver remarkable capability."
    ]
    
    seed = sum(ord(c) for c in req.prompt)
    rng = random.Random(seed)
    chosen_continuation = rng.choice(continuations)
    
    generated = req.prompt + chosen_continuation
    
    return {
        "prompt": req.prompt,
        "generated_text": generated,
        "tokens_generated": len(chosen_continuation.split()),
        "temperature": req.temperature,
        "top_k": req.top_k,
        "finish_reason": "length"
    }

@app.post("/slm/loss")
def evaluate_loss(req: LossRequest):
    # Simulated cross-entropy loss and perplexity
    word_count = len(req.text.split())
    if word_count == 0:
        raise HTTPException(status_code=400, detail="Text cannot be empty")
        
    char_len = len(req.text)
    loss = round(2.15 + (10.0 / max(char_len, 1)), 4)
    perplexity = round(math.exp(loss), 2)
    
    return {
        "text_length": char_len,
        "word_count": word_count,
        "cross_entropy_loss": loss,
        "perplexity": perplexity
    }

@app.get("/slm/training-configs")
def training_configs():
    return {
        "composer_gpt2": {
            "optimizer": "DecoupledAdamW",
            "lr": 6e-4,
            "weight_decay": 0.1,
            "schedulers": ["LinearWithWarmup"],
            "batch_size": 32,
            "max_duration": "1000ba"
        },
        "lightning_gpt2": {
            "accelerator": "gpu",
            "precision": "16-mixed",
            "gradient_clip_val": 1.0
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8050)
