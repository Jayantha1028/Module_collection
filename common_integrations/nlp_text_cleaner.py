"""
common_integrations.nlp_text_cleaner
====================================
Standardized text cleansing, Unicode normalization, script-density filtering, and MD5 deduplication.
"""
import hashlib
import re
import unicodedata
from typing import Any, Dict, List, Optional, Tuple

HTML_TAG_RE = re.compile(r"<[^>]+>", re.DOTALL)
WIKI_TEMPLATE_RE = re.compile(r"\{\{[^}]*\}\}")
WIKI_LINK_RE = re.compile(r"\[\[(?:[^|\]]*\|)?([^\]]+)\]\]")
WIKI_REF_RE = re.compile(r"<ref[^>]*>.*?</ref>", re.DOTALL | re.IGNORECASE)
CITATION_RE = re.compile(r"\[\d+\]|\[citation needed\]|\[edit\]", re.IGNORECASE)
URL_RE = re.compile(r"https?://\S+|www\.\S+", re.IGNORECASE)
CONTROL_CHARS_RE = re.compile(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f-\x9f\ufeff\u200b-\u200f\u202a-\u202e]")
MULTISPACE_RE = re.compile(r"[ \t\u00a0]+")


def clean_text_corpus(raw_text: str) -> str:
    """Normalize Unicode, strip HTML/Wiki markup, citations, URLs, and non-printable control characters."""
    if not raw_text:
        return ""

    # 1. Unicode NFC normalization
    text = unicodedata.normalize("NFC", raw_text)

    # 2. Strip markup and boilerplate
    text = WIKI_REF_RE.sub(" ", text)
    text = WIKI_TEMPLATE_RE.sub(" ", text)
    text = WIKI_LINK_RE.sub(r"\1", text)
    text = HTML_TAG_RE.sub(" ", text)
    text = CITATION_RE.sub(" ", text)
    text = URL_RE.sub(" ", text)

    # 3. Strip control characters
    text = CONTROL_CHARS_RE.sub("", text)

    # 4. Collapse extra whitespace
    text = MULTISPACE_RE.sub(" ", text)
    return text.strip()


def calculate_script_density(text: str, script_range: Tuple[int, int] = (0x0C80, 0x0CFF)) -> float:
    """Calculate the ratio of characters in the specified Unicode codepoint block (e.g. Kannada / Indic)."""
    if not text:
        return 0.0
    valid_chars = [ch for ch in text if not ch.isspace() and not unicodedata.category(ch).startswith('P')]
    if not valid_chars:
        return 0.0

    target_count = sum(1 for ch in valid_chars if script_range[0] <= ord(ch) <= script_range[1])
    return round(target_count / float(len(valid_chars)), 4)


def compute_canonical_fingerprint(text: str) -> str:
    """Generate MD5 hash of lowercase alphanumeric string for O(1) deduplication."""
    canonical = re.sub(r'[\W_]+', '', text.lower())
    return hashlib.md5(canonical.encode('utf-8')).hexdigest()
