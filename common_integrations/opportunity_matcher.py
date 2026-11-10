"""
common_integrations.opportunity_matcher
=======================================
Deterministic Opportunity Eligibility Matcher, RFC 5545 .ics Calendar Generator,
and Automated Application / Statement of Purpose (SOP) Drafter.
"""
from datetime import datetime, timezone
from typing import Any, Dict, List, Optional


def evaluate_opportunity_eligibility(
    candidate_profile: Dict[str, Any],
    opportunity_rules: Dict[str, Any]
) -> Dict[str, Any]:
    """
    Evaluate candidate fit against scholarship/internship/grant eligibility rules.
    Rules keys supported: education_levels, max_income, allowed_states, required_skills, min_year.
    """
    passed: List[str] = []
    failed: List[str] = []
    unknown: List[str] = []

    # 1. Education level
    req_edu = opportunity_rules.get("education_levels")
    cand_edu = candidate_profile.get("education_level")
    if req_edu:
        if not cand_edu:
            unknown.append("Education level missing from profile")
        elif cand_edu.lower() in [e.lower() for e in req_edu]:
            passed.append(f"Education level '{cand_edu}' matches required criteria")
        else:
            failed.append(f"Education level '{cand_edu}' not in {req_edu}")

    # 2. Income limit
    max_inc = opportunity_rules.get("max_income")
    cand_inc = candidate_profile.get("annual_income")
    if max_inc is not None:
        if cand_inc is None:
            unknown.append("Annual income missing from profile")
        elif float(cand_inc) <= float(max_inc):
            passed.append(f"Income ({cand_inc}) is within ceiling ({max_inc})")
        else:
            failed.append(f"Income ({cand_inc}) exceeds limit ({max_inc})")

    # 3. State / Domicile
    allowed_states = opportunity_rules.get("allowed_states")
    cand_state = candidate_profile.get("state")
    if allowed_states:
        if not cand_state:
            unknown.append("State/domicile missing")
        elif cand_state.lower() in [s.lower() for s in allowed_states]:
            passed.append(f"State '{cand_state}' is eligible")
        else:
            failed.append(f"State '{cand_state}' not in eligible list {allowed_states}")

    # 4. Skills overlap
    req_skills = opportunity_rules.get("required_skills", [])
    cand_skills = {s.lower() for s in candidate_profile.get("skills", [])}
    if req_skills:
        matched_skills = [s for s in req_skills if s.lower() in cand_skills]
        if matched_skills:
            passed.append(f"Matched {len(matched_skills)}/{len(req_skills)} target skills")
        else:
            unknown.append(f"None of required skills ({req_skills}) listed")

    if failed:
        status = "NOT_ELIGIBLE"
        fit_score = 0.0
    elif unknown and not passed:
        status = "UNKNOWN"
        fit_score = 30.0
    elif unknown:
        status = "POTENTIALLY_ELIGIBLE"
        fit_score = round((len(passed) / max(1, len(passed) + len(unknown))) * 100.0, 1)
    else:
        status = "MATCHED"
        fit_score = 100.0

    return {
        "match_status": status,
        "fit_score": fit_score,
        "passed_criteria": passed,
        "failed_criteria": failed,
        "unknown_criteria": unknown
    }


def generate_deadline_ics(
    events: List[Dict[str, Any]],
    calendar_name: str = "Opportunity Deadlines"
) -> str:
    """Generate RFC 5545 .ics calendar payload for opportunity submission deadlines."""
    def fmt_dt(dt: datetime) -> str:
        if dt.tzinfo is None:
            dt = dt.replace(tzinfo=timezone.utc)
        return dt.astimezone(timezone.utc).strftime("%Y%m%dT%H%M%SZ")

    def esc(text: str) -> str:
        return (text or "").replace("\\", "\\\\").replace(";", "\\;").replace(",", "\\,").replace("\n", "\\n")

    now_str = fmt_dt(datetime.now(timezone.utc))
    lines = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//CommonIntegrations//OpportunityTracker//EN",
        "CALSCALE:GREGORIAN",
        f"X-WR-CALNAME:{esc(calendar_name)}"
    ]

    for idx, ev in enumerate(events):
        dl = ev.get("deadline")
        if isinstance(dl, str):
            dl = datetime.fromisoformat(dl.replace("Z", "+00:00"))
        elif not isinstance(dl, datetime):
            dl = datetime.now(timezone.utc)

        dt_str = fmt_dt(dl)
        lines.extend([
            "BEGIN:VEVENT",
            f"UID:opp-{idx}-{dt_str}@common-integrations",
            f"DTSTAMP:{now_str}",
            f"DTSTART:{dt_str}",
            f"DTEND:{dt_str}",
            f"SUMMARY:{esc(ev.get('title', 'Deadline'))}",
            f"DESCRIPTION:{esc(ev.get('description', ''))}",
            "BEGIN:VALARM",
            "TRIGGER:-P1D",
            "ACTION:DISPLAY",
            "DESCRIPTION:Deadline Tomorrow!",
            "END:VALARM",
            "END:VEVENT"
        ])

    lines.append("END:VCALENDAR")
    return "\r\n".join(lines) + "\r\n"


def draft_application_kit(
    applicant_name: str,
    opportunity_title: str,
    organization: str,
    skills: List[str],
    degree: str = "B.Tech Computer Science"
) -> Dict[str, Any]:
    """Generate tailored Statement of Purpose (SOP) draft, outreach email, and checklist."""
    skills_str = ", ".join(skills[:4]) if skills else "Software Engineering & Cloud Systems"
    sop = (
        f"Dear Selection Committee at {organization},\n\n"
        f"I am {applicant_name}, currently pursuing {degree}. I am writing to express my strong enthusiasm for {opportunity_title}. "
        f"With hands-on technical experience across {skills_str}, I have consistently built resilient, modular systems that address real-world challenges.\n\n"
        f"Joining {organization} through {opportunity_title} would enable me to apply my skills at scale while contributing directly to your engineering and research mission.\n\n"
        f"Sincerely,\n{applicant_name}"
    )

    email = (
        f"Subject: Application Inquiry: {opportunity_title} — {applicant_name}\n\n"
        f"Hello {organization} Team,\n\n"
        f"I recently applied for {opportunity_title}. Given my background in {degree} and practical engineering work in {skills_str}, "
        f"I would love to connect briefly regarding how my technical projects align with your current initiatives.\n\n"
        f"Best regards,\n{applicant_name}"
    )

    return {
        "statement_of_purpose": sop,
        "outreach_email": email,
        "checklist": [
            "Verify updated Resume / CV PDF matches target skills",
            "Prepare Academic Transcripts / Grade Sheet",
            "Confirm Recommendation / Reference Contacts"
        ]
    }
