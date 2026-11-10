"""
common_integrations.web_dashboard_generator
===========================================
Reusable single-file responsive HTML dashboard generator.
Produces self-contained, styled dark/light telemetry dashboards directly from Python dictionaries.
"""
from typing import Any, Dict, List, Optional


def generate_html_dashboard(
    title: str,
    metric_cards: List[Dict[str, Any]],
    table_headers: Optional[List[str]] = None,
    table_rows: Optional[List[List[Any]]] = None,
    dark_theme: bool = True
) -> str:
    """Generate self-contained HTML dashboard with responsive grid cards and data tables."""
    bg = "#0f172a" if dark_theme else "#f8fafc"
    card_bg = "#1e293b" if dark_theme else "#ffffff"
    text_color = "#f8fafc" if dark_theme else "#0f172a"
    sub_color = "#94a3b8" if dark_theme else "#64748b"
    border_color = "rgba(255,255,255,0.1)" if dark_theme else "#e2e8f0"

    cards_html = ""
    for card in metric_cards:
        cards_html += f"""
        <div style="background:{card_bg}; border:1px solid {border_color}; border-radius:10px; padding:20px; box-shadow:0 4px 6px -1px rgba(0,0,0,0.1);">
            <div style="font-size:0.85em; color:{sub_color}; text-transform:uppercase; letter-spacing:0.05em;">{card.get('label', '')}</div>
            <div style="font-size:2em; font-weight:700; color:{card.get('color', text_color)}; margin-top:8px;">{card.get('value', '')}</div>
            <div style="font-size:0.8em; color:{sub_color}; margin-top:4px;">{card.get('subtitle', '')}</div>
        </div>
        """

    table_html = ""
    if table_headers and table_rows:
        th_cells = "".join(f"<th style='text-align:left; padding:12px; border-bottom:2px solid {border_color}; color:{sub_color}; font-size:0.85em;'>{h}</th>" for h in table_headers)
        tr_rows = ""
        for row in table_rows:
            td_cells = "".join(f"<td style='padding:12px; border-bottom:1px solid {border_color};'>{c}</td>" for c in row)
            tr_rows += f"<tr>{td_cells}</tr>"

        table_html = f"""
        <div style="background:{card_bg}; border:1px solid {border_color}; border-radius:10px; padding:24px; margin-top:32px;">
            <table style="width:100%; border-collapse:collapse;">
                <thead><tr>{th_cells}</tr></thead>
                <tbody>{tr_rows}</tbody>
            </table>
        </div>
        """

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<style>
body {{ margin:0; padding:40px; background:{bg}; color:{text_color}; font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; }}
.container {{ max-width:1200px; margin:0 auto; }}
.grid {{ display:grid; grid-template-columns:repeat(auto-fit, minmax(240px, 1fr)); gap:20px; margin-top:24px; }}
</style>
</head>
<body>
<div class="container">
    <h1 style="margin:0 0 4px 0; font-size:1.8em;">{title}</h1>
    <div style="color:{sub_color}; font-size:0.95em;">Automated Telemetry Dashboard</div>
    <div class="grid">{cards_html}</div>
    {table_html}
</div>
</body>
</html>"""
