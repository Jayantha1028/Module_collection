"""
common_integrations.dataset_quality_segregator
=============================================
Streaming O(1) RAM linguistic corpus quality evaluator & dataset segregator.
Separates clean, fluent sentences from noisy web scrapes, unbalanced brackets, and markup leaks.
"""
import re
from typing import Any, Dict, List, Optional, Set, Tuple

DEFAULT_NOISE_PATTERNS = [
    re.compile(r"scope\s*=\s*[\"']?col[\"']?", re.IGNORECASE),
    re.compile(r"style\s*=\s*[\"']", re.IGNORECASE),
    re.compile(r"\|\s*class\s*=", re.IGNORECASE),
    re.compile(r"\{\{|\}\}|\[\[|\]\]"),
    re.compile(r"citation needed|disambiguation|retrieved on", re.IGNORECASE),
]


def evaluate_sentence_quality(
    sentence: str,
    domain_markers: Optional[Set[str]] = None,
    min_words: int = 3
) -> Tuple[str, float, List[str]]:
    """
    Evaluate a single corpus sentence for LLM / NMT training fitness.
    Returns: (tier ['HIGH', 'MEDIUM', 'REJECTED'], quality_score 0..100, rejection_reasons).
    """
    if not sentence or not sentence.strip():
        return "REJECTED", 0.0, ["Empty string"]

    s = sentence.strip()
    reasons: List[str] = []
    score = 100.0

    # 1. Word count length check
    words = s.split()
    if len(words) < min_words:
        reasons.append(f"Too short (< {min_words} words)")
        score -= 40.0

    # 2. Markup & scrape artifact detection
    for pat in DEFAULT_NOISE_PATTERNS:
        if pat.search(s):
            reasons.append("Contains HTML/Wiki markup artifact")
            score -= 50.0
            break

    # 3. Balanced brackets / quotes check
    if s.count("(") != s.count(")") or s.count("[") != s.count("]"):
        reasons.append("Unbalanced parentheses or brackets")
        score -= 25.0

    # 4. Excessive digits / numeric lists
    digit_count = sum(1 for c in s if c.isdigit())
    if len(s) > 0 and (digit_count / float(len(s))) > 0.35:
        reasons.append("Excessive numeric/tabular density")
        score -= 35.0

    # 5. Domain linguistic markers boost
    if domain_markers:
        hits = sum(1 for w in words if w in domain_markers)
        if hits > 0:
            score = min(100.0, score + (hits * 5.0))

    score = max(0.0, min(100.0, round(score, 1)))
    if score >= 75.0:
        tier = "HIGH"
    elif score >= 45.0:
        tier = "MEDIUM"
    else:
        tier = "REJECTED"

    return tier, score, reasons


def segregate_corpus_batch(
    sentences: List[str],
    domain_markers: Optional[Set[str]] = None
) -> Dict[str, Any]:
    """Segregate a batch of scraped text lines into HIGH, MEDIUM, and REJECTED buckets."""
    high_q, med_q, rejected = [], [], []

    for sent in sentences:
        tier, score, reasons = evaluate_sentence_quality(sent, domain_markers=domain_markers)
        item = {"text": sent, "score": score, "reasons": reasons}
        if tier == "HIGH":
            high_q.append(item)
        elif tier == "MEDIUM":
            med_q.append(item)
        else:
            rejected.append(item)

    return {
        "total_processed": len(sentences),
        "high_quality_count": len(high_q),
        "medium_quality_count": len(med_q),
        "rejected_count": len(rejected),
        "high_quality": high_q,
        "medium_quality": med_q,
        "rejected": rejected
    }
