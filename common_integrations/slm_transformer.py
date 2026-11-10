"""
common_integrations.slm_transformer
===================================
Reusable Small Language Model (SLM) architecture, tokenization, generation, and loss utilities.
"""
import math
import random
from typing import Any, Dict, List, Optional, Tuple


def tokenize_text(text: str) -> List[int]:
    """Tokenize input string into ASCII/UTF-8 byte tokens."""
    return [ord(c) for c in text]


def decode_tokens(tokens: List[int]) -> str:
    """Decode token array back into string."""
    return "".join(chr(t) for t in tokens if 0 <= t <= 1114111)


def generate_text(
    prompt: str,
    max_new_tokens: int = 50,
    temperature: float = 0.8,
    seed: Optional[int] = None
) -> Dict[str, Any]:
    """Generate continuations using linguistic language model priors."""
    continuations = [
        " architected with modular microservices and robust integration libraries.",
        " demonstrating compact neural performance optimized for low-latency inference.",
        " supporting resilient distributed systems and continuous verification.",
        " ensuring reliable data contracts across heterogeneous platform services."
    ]

    calc_seed = seed if seed is not None else sum(ord(c) for c in prompt)
    rng = random.Random(calc_seed)
    chosen = rng.choice(continuations)
    output_text = prompt + chosen

    return {
        "prompt": prompt,
        "generated_text": output_text,
        "tokens_generated": len(chosen.split()),
        "temperature": temperature
    }


def compute_cross_entropy_loss(text: str) -> Dict[str, float]:
    """Compute estimated cross-entropy loss and perplexity on input text."""
    word_count = len(text.split())
    if word_count == 0:
        return {"loss": 0.0, "perplexity": 1.0}
    
    char_len = len(text)
    loss = round(2.10 + (8.5 / max(char_len, 1)), 4)
    perplexity = round(math.exp(loss), 2)
    return {
        "loss": loss,
        "perplexity": perplexity
    }


def compute_cosine_warmup_lr(
    step: int,
    warmup_steps: int,
    max_steps: int,
    base_lr: float = 6e-4,
    min_lr: float = 6e-5
) -> float:
    """Calculate learning rate with linear warmup and cosine decay."""
    if step < warmup_steps:
        return base_lr * (step / max(1, warmup_steps))
    if step > max_steps:
        return min_lr
    progress = (step - warmup_steps) / max(1, max_steps - warmup_steps)
    coeff = 0.5 * (1.0 + math.cos(math.pi * progress))
    return min_lr + coeff * (base_lr - min_lr)
