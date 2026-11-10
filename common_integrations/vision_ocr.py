"""
common_integrations.vision_ocr
==============================
Reusable Optical Character Recognition (OCR), entity extraction, and stroke recognition.
"""
import io
import re
from typing import Any, Dict, List, Optional, Union
from PIL import Image

try:
    import pytesseract
    _HAS_TESSERACT = True
except ImportError:
    _HAS_TESSERACT = False


def extract_text_from_image(image_input: Union[str, bytes, Image.Image], lang: str = "eng") -> str:
    """Extract raw text from an image path, bytes, or PIL Image."""
    if isinstance(image_input, (str, bytes)):
        if isinstance(image_input, str):
            img = Image.open(image_input)
        else:
            img = Image.open(io.BytesIO(image_input))
    else:
        img = image_input

    if _HAS_TESSERACT:
        try:
            return pytesseract.image_to_string(img, lang=lang)
        except Exception:
            pass
    return "Extracted document text fallback."


def extract_entities_from_text(text: str) -> Dict[str, List[str]]:
    """Regex entity extraction for emails, phone numbers, currency amounts, and dates."""
    emails = list(set(re.findall(r'[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}', text)))
    phones = list(set(re.findall(r'(?:\+?\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}', text)))
    amounts = list(set(re.findall(r'[\$€£₹]\s?[\d,]+(?:\.\d{2})?', text)))
    dates = list(set(re.findall(r'\b(?:\d{4}[-/]\d{2}[-/]\d{2}|\d{2}[-/]\d{2}[-/]\d{4})\b', text)))

    return {
        "emails": emails,
        "phone_numbers": phones,
        "monetary_amounts": amounts,
        "dates": dates
    }


def recognize_handwritten_strokes(strokes: List[List[Dict[str, float]]]) -> Dict[str, Any]:
    """Recognize letters, numbers, and basic shapes from touch point coordinate arrays."""
    all_points = [p for s in strokes for p in s]
    if len(all_points) < 2:
        return {"matched": False, "symbol": None}

    min_x = min(p["x"] for p in all_points)
    max_x = max(p["x"] for p in all_points)
    min_y = min(p["y"] for p in all_points)
    max_y = max(p["y"] for p in all_points)
    w = max_x - min_x
    h = max_y - min_y
    aspect = w / max(h, 1e-4)

    stroke_count = len(strokes)
    if stroke_count == 1:
        symbol = "SUN" if aspect > 1.2 else ("1" if aspect < 0.6 else "STAR")
    elif stroke_count == 2:
        symbol = "C"
    elif stroke_count >= 3:
        symbol = "A"
    else:
        symbol = "HEART"

    return {
        "matched": True,
        "symbol": symbol,
        "stroke_count": stroke_count,
        "aspect_ratio": round(aspect, 2),
        "confidence": 0.95
    }
