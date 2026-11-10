"""
common_integrations.pdf_doc_intelligence
========================================
Reusable document parsing, PDF text stream inspection, and tabular data extraction.
"""
from pathlib import Path
from typing import Any, Dict, List, Optional
import re


def extract_raw_pdf_text_streams(pdf_filepath: str) -> List[str]:
    """Extract uncompressed or plaintext ASCII/UTF-8 streams from a PDF file."""
    p = Path(pdf_filepath)
    if not p.exists():
        return []

    streams = []
    with open(p, "rb") as f:
        content = f.read()

    # Search for Text Objects between 'BT' (Begin Text) and 'ET' (End Text)
    # or extract parentheses strings '(string) Tj'
    text_matches = re.findall(rb'\((.*?)\)\s*Tj', content)
    for tm in text_matches:
        try:
            decoded = tm.decode('utf-8', errors='ignore')
            if len(decoded.strip()) > 1:
                streams.append(decoded.strip())
        except Exception:
            pass

    return streams


def parse_roster_table_from_text(lines: List[str]) -> List[Dict[str, str]]:
    """Parse table rows containing name, role/category, and team metadata."""
    records = []
    for line in lines:
        parts = re.split(r'\t|\s{2,}', line.strip())
        if len(parts) >= 2:
            records.append({
                "name": parts[0].strip(),
                "role": parts[1].strip(),
                "team": parts[2].strip() if len(parts) > 2 else "Unassigned"
            })
    return records
