"""
common_integrations.language_nlp
===============================
Reusable Tulu-Tigalari, Kannada, and Latin transliterator, Dravidian morphology, and lexicon lookup.
"""
from typing import Any, Dict, List, Optional
import sys
from pathlib import Path

# Use bundled self-contained kannada_tigalari_converter directory
_TULU_DIR = Path(__file__).resolve().parent
if str(_TULU_DIR) not in sys.path:
    sys.path.insert(0, str(_TULU_DIR))

try:
    from kannada_tigalari_converter.core.transliterator import (
        detect_script,
        latin_to_kannada,
        kannada_to_latin,
        kannada_to_tigalari,
        tigalari_to_kannada,
        latin_to_tigalari,
        tigalari_to_latin,
        inspect_codepoints
    )
    from kannada_tigalari_converter.nlp.tulu_morphology import TuluMorphAnalyzer
    from kannada_tigalari_converter.lexicon.tulu_dictionary import TULU_DICTIONARY, lookup_tulu
    _HAS_TULU_PKG = True
except Exception:
    _HAS_TULU_PKG = False


def transliterate(text: str, source: str = "auto", target: str = "tigalari") -> str:
    """Convert text between Latin phonetic, Kannada, and Tulu-Tigalari (Unicode 16.0)."""
    if not _HAS_TULU_PKG:
        return text

    src = source.lower()
    if src == "auto":
        src = detect_script(text)
    tgt = target.lower()

    if src == tgt:
        return text

    if src == "latin" and tgt == "kannada":
        return latin_to_kannada(text)
    elif src == "latin" and tgt == "tigalari":
        return latin_to_tigalari(text)
    elif src == "kannada" and tgt == "latin":
        return kannada_to_latin(text)
    elif src == "kannada" and tgt == "tigalari":
        return kannada_to_tigalari(text)
    elif src == "tigalari" and tgt == "kannada":
        return tigalari_to_kannada(text)
    elif src == "tigalari" and tgt == "latin":
        return tigalari_to_latin(text)
    return text


def inspect_unicode_points(text: str) -> List[Dict[str, Any]]:
    """Inspect Unicode codepoints and names for research and font debugging."""
    if _HAS_TULU_PKG:
        return inspect_codepoints(text)
    return [{"char": ch, "codepoint": f"U+{ord(ch):04X}"} for ch in text]


def analyze_morphology(word: str) -> Dict[str, Any]:
    """Lemmatize word, parse morphemes, and predict Part-of-Speech."""
    if not _HAS_TULU_PKG:
        return {"word": word, "lemma": word, "is_inflected": False}
    analyzer = TuluMorphAnalyzer()
    lemma = analyzer.lemmatize(word)
    pos = analyzer.predict_pos(word)
    chain = analyzer.parse(word)
    return {
        "word": word,
        "lemma": lemma,
        "pos": pos,
        "is_inflected": lemma != word,
        "morphemes": chain
    }


def lookup_lexicon(word: str) -> Optional[Dict[str, Any]]:
    """Lookup definition in the standard Tulu dictionary."""
    if not _HAS_TULU_PKG:
        return None
    return lookup_tulu(word)
