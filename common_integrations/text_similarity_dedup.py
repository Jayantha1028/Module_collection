"""
common_integrations.text_similarity_dedup
=========================================
Headline & document similarity matcher using tokenization, stopword filtering,
and Jaccard overlap index for deduplication and story clustering.
"""
import re
from typing import Dict, List, Optional, Set

STOPWORDS = {
    "the", "and", "for", "with", "from", "that", "this", "are", "was", "will",
    "has", "have", "its", "new", "about", "into", "over", "after", "how", "why"
}


def tokenize_for_similarity(text: str) -> Set[str]:
    """Extract normalized alphanumeric tokens stripping stopwords and simple plurals."""
    words = re.findall(r"\b[a-zA-Z0-9]{3,}\b", text.lower())
    tokens = set()
    for w in words:
        if w not in STOPWORDS:
            stemmed = w[:-1] if w.endswith("s") and len(w) > 4 else w
            tokens.add(stemmed)
    return tokens


def calculate_jaccard_similarity(text1: str, text2: str) -> float:
    """Compute Jaccard similarity index (0.0 to 1.0) between two strings."""
    t1 = tokenize_for_similarity(text1)
    t2 = tokenize_for_similarity(text2)
    if not t1 or not t2:
        return 0.0
    return round(len(t1.intersection(t2)) / float(len(t1.union(t2))), 4)


def find_matching_cluster(
    candidate_title: str,
    existing_clusters: List[Dict[str, str]],
    threshold: float = 0.65
) -> Optional[Dict[str, str]]:
    """Find best matching story cluster exceeding the Jaccard threshold."""
    best_match = None
    best_score = 0.0
    for cluster in existing_clusters:
        score = calculate_jaccard_similarity(candidate_title, cluster.get("title", ""))
        if score >= threshold and score > best_score:
            best_score = score
            best_match = {**cluster, "similarity_score": score}
    return best_match
