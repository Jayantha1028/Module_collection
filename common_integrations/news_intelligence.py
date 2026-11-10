"""
common_integrations.news_intelligence
=====================================
Extractive text summarizer, personalized NewsScore relevance engine, and XML RSS/Atom parser.
Zero external heavy dependencies: uses Python standard library xml.etree.ElementTree and math.
"""
from datetime import datetime, timezone
import math
import re
from typing import Any, Dict, List, Optional
import xml.etree.ElementTree as ET


def extractive_summarize(title: str, content: str, max_bullets: int = 3) -> Dict[str, Any]:
    """Zero-GPU local extractive summarization returning crisp bullet highlights."""
    if not content or len(content.strip()) < 60:
        return {
            "summary_bullets": [title.strip()],
            "word_count": len(content.split()) if content else 0
        }

    # Split into sentences
    sentences = [s.strip() for s in re.split(r'(?<=[.!?])\s+', content.strip()) if len(s.strip()) > 25]
    if not sentences:
        return {"summary_bullets": [title.strip()], "word_count": len(content.split())}

    # Score sentences based on title keyword overlap and position
    title_words = {w.lower() for w in re.findall(r'\w+', title) if len(w) > 3}
    scored = []
    for idx, sent in enumerate(sentences):
        sent_words = {w.lower() for w in re.findall(r'\w+', sent)}
        overlap = len(title_words.intersection(sent_words))
        pos_weight = 1.5 if idx == 0 else (1.1 if idx == 1 else 1.0)
        has_numbers = 0.5 if any(c.isdigit() for c in sent) else 0.0
        score = (overlap * 1.2 + has_numbers) * pos_weight
        scored.append((score, idx, sent))

    scored.sort(key=lambda x: x[0], reverse=True)
    top_selected = sorted(scored[:max_bullets], key=lambda x: x[1])

    return {
        "summary_bullets": [item[2] for item in top_selected],
        "word_count": len(content.split()),
        "compression_ratio": round(sum(len(i[2]) for i in top_selected) / float(max(1, len(content))), 2)
    }


def calculate_news_relevance(
    title: str,
    content: str,
    user_interests: List[str],
    user_skills: List[str],
    age_hours: float = 2.0,
    source_trust_score: float = 0.9
) -> float:
    """Compute personalized NewsScore (0.0 to 1.0) incorporating topic overlap, quality, clickbait penalty, and recency decay."""
    corpus = f"{title} {content}".lower()

    # 1. Interest & Skill hits (R)
    hits = 0.0
    for topic in user_interests:
        if topic.lower() in corpus:
            hits += 0.25
    for skill in user_skills:
        if skill.lower() in corpus:
            hits += 0.15
    R = min(1.0, max(0.1, hits))

    # 2. Quality & Anti-Clickbait (Q)
    clickbait = ["you won't believe", "shocking", "mind-blowing", "secret trick", "miracle"]
    has_cb = any(c in corpus for c in clickbait)
    Q = 0.8 + (0.1 if len(content) > 500 else 0.0) + (0.1 if any(c.isdigit() for c in title) else 0.0) - (0.3 if has_cb else 0.0)
    Q = max(0.0, min(1.0, Q))

    # 3. Freshness exponential decay (F)
    F = math.exp(-0.02 * max(0.0, age_hours))

    score = (0.40 * R) + (0.25 * Q) + (0.20 * F) + (0.15 * source_trust_score)
    return round(min(1.0, max(0.0, score)), 4)


def parse_rss_xml(xml_string: str) -> List[Dict[str, Any]]:
    """Parse standard RSS 2.0 or Atom XML feed string into structured article dictionaries."""
    items: List[Dict[str, Any]] = []
    try:
        root = ET.fromstring(xml_string.strip())
    except Exception:
        return items

    # RSS 2.0 <channel><item>
    for item_el in root.findall(".//item"):
        title = item_el.findtext("title", "").strip()
        link = item_el.findtext("link", "").strip()
        desc = item_el.findtext("description", "").strip()
        pub_date = item_el.findtext("pubDate", "").strip()
        if title and link:
            items.append({
                "title": title,
                "link": link,
                "summary": re.sub(r"<[^>]+>", "", desc)[:300],
                "published_at": pub_date
            })

    # Atom <entry> fallback
    if not items:
        ns = {"atom": "http://www.w3.org/2005/Atom"}
        for entry_el in root.findall(".//atom:entry", ns) + root.findall(".//entry"):
            title = entry_el.findtext("atom:title", None, ns) or entry_el.findtext("title", "")
            link_el = entry_el.find("atom:link", ns) if entry_el.find("atom:link", ns) is not None else entry_el.find("link")
            link = link_el.attrib.get("href", "") if link_el is not None else ""
            summary = entry_el.findtext("atom:summary", None, ns) or entry_el.findtext("summary", "")
            updated = entry_el.findtext("atom:updated", None, ns) or entry_el.findtext("updated", "")
            if title and link:
                items.append({
                    "title": title.strip(),
                    "link": link.strip(),
                    "summary": re.sub(r"<[^>]+>", "", summary).strip()[:300],
                    "published_at": updated.strip()
                })

    return items
