"""
common_integrations.iframe_sandbox_engine
=========================================
Secure iframe sandboxing and HTML embedding generator.
Enforces strict cookie, credential, and localStorage isolation while allowing interactive scripts.
"""
import html
import re
from typing import Optional


def generate_sandboxed_iframe_html(
    content_html: str,
    title: str = "Preview",
    width: str = "100%",
    height: str = "500px",
    allow_scripts: bool = True,
    allow_forms: bool = True
) -> str:
    """Generate secure <iframe> HTML tag strictly omitting allow-same-origin to prevent cookie theft."""
    sandbox_flags = []
    if allow_scripts:
        sandbox_flags.append("allow-scripts")
    if allow_forms:
        sandbox_flags.append("allow-forms")
    sandbox_flags.append("allow-modals")

    sandbox_attr = " ".join(sandbox_flags)
    escaped_srcdoc = html.escape(content_html, quote=True)

    return f"""<iframe
  title="{html.escape(title)}"
  srcdoc="{escaped_srcdoc}"
  sandbox="{sandbox_attr}"
  style="width:{width}; height:{height}; border:none; border-radius:12px; overflow:hidden;"
  loading="lazy">
</iframe>"""


def sanitize_untrusted_html(raw_html: str) -> str:
    """Strip dangerous elements like inline script tags and onload handlers."""
    # Remove <script>...</script>
    sanitized = re.sub(r'<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>', '', raw_html, flags=re.IGNORECASE)
    # Remove javascript: protocol in href or src
    sanitized = re.sub(r'(href|src)\s*=\s*["\']javascript:[^"\']*["\']', '', sanitized, flags=re.IGNORECASE)
    # Remove inline on* handlers (e.g. onerror, onclick)
    sanitized = re.sub(r'\bon\w+\s*=\s*["\'][^"\']*["\']', '', sanitized, flags=re.IGNORECASE)
    return sanitized.strip()
