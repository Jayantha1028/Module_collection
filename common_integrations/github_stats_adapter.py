"""
common_integrations.github_stats_adapter
========================================
GitHub developer profile metrics, language breakdown colors, and streak calculations.
"""
from typing import Any, Dict, List, Optional

GITHUB_LANG_COLORS = {
    "Python": "#3572A5",
    "JavaScript": "#f1e05a",
    "TypeScript": "#3178c6",
    "Go": "#00ADD8",
    "Rust": "#dea584",
    "C++": "#f34b7d",
    "Java": "#b07219",
    "HTML": "#e34c26",
    "CSS": "#563d7c",
    "Shell": "#89e051"
}


def calculate_language_percentages(byte_counts: Dict[str, int]) -> List[Dict[str, Any]]:
    """Compute normalized language percentages and brand colors from repo byte counts."""
    total_bytes = sum(byte_counts.values())
    if total_bytes == 0:
        return []

    breakdown = []
    for lang, count in sorted(byte_counts.items(), key=lambda x: x[1], reverse=True):
        pct = round((count / float(total_bytes)) * 100.0, 1)
        breakdown.append({
            "language": lang,
            "bytes": count,
            "percentage": pct,
            "color": GITHUB_LANG_COLORS.get(lang, "#8b949e")
        })
    return breakdown


def calculate_contribution_streak(daily_contributions: List[int]) -> Dict[str, int]:
    """Calculate current streak and longest streak from ordered daily contribution counts."""
    current_streak = 0
    longest_streak = 0
    temp_streak = 0

    # Assume daily_contributions ordered from past to today
    for count in daily_contributions:
        if count > 0:
            temp_streak += 1
            longest_streak = max(longest_streak, temp_streak)
        else:
            temp_streak = 0

    # Current streak looking back from today
    for count in reversed(daily_contributions):
        if count > 0:
            current_streak += 1
        else:
            break

    return {
        "current_streak_days": current_streak,
        "longest_streak_days": longest_streak,
        "total_days_evaluated": len(daily_contributions)
    }


def generate_stats_badge_html(username: str, stats: Dict[str, Any]) -> str:
    """Generate responsive dark-mode HTML stats badge for portfolio embedding."""
    return f"""
    <div style="background:#0d1117; border:1px solid #30363d; border-radius:12px; padding:20px; font-family:-apple-system, sans-serif; color:#c9d1d9; max-width:400px;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #21262d; padding-bottom:12px;">
            <span style="font-weight:700; color:#58a6ff;">@{username}</span>
            <span style="background:#238636; color:#ffffff; font-size:0.75em; padding:2px 8px; border-radius:20px;">Active Dev</span>
        </div>
        <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-top:16px;">
            <div>
                <div style="color:#8b949e; font-size:0.8em;">CURRENT STREAK</div>
                <div style="font-size:1.6em; font-weight:800; color:#f0883e;">{stats.get('current_streak', 0)} days 🔥</div>
            </div>
            <div>
                <div style="color:#8b949e; font-size:0.8em;">TOP LANGUAGE</div>
                <div style="font-size:1.6em; font-weight:800; color:#58a6ff;">{stats.get('top_language', 'Python')}</div>
            </div>
        </div>
    </div>
    """
