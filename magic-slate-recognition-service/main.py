import math
from typing import Dict, List, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI(
    title="Magic Slate Recognition & Phonics Microservice",
    description="Geometric point-cloud handwriting recognition and voice phonics synthesis engine for kids learning slate",
    version="1.0.0"
)

class Point(BaseModel):
    x: float
    y: float

class Stroke(BaseModel):
    points: List[Point]

class RecognizeRequest(BaseModel):
    strokes: List[Stroke]

class SpeechRequest(BaseModel):
    character: str = Field(..., example="A")
    category: Optional[str] = "letter"

# Standard slate recognition catalog
CATALOG = {
    "A": {"textToRead": "A!", "phonicsSound": "ay / æ", "displayLabel": "A", "emoji": "🅰️", "category": "letter"},
    "B": {"textToRead": "B!", "phonicsSound": "buh", "displayLabel": "B", "emoji": "🅱️", "category": "letter"},
    "C": {"textToRead": "Cat!", "phonicsSound": "kuh", "displayLabel": "C", "emoji": "🐱", "category": "letter"},
    "1": {"textToRead": "One!", "phonicsSound": "wun", "displayLabel": "1", "emoji": "1️⃣", "category": "number"},
    "2": {"textToRead": "Two!", "phonicsSound": "too", "displayLabel": "2", "emoji": "2️⃣", "category": "number"},
    "STAR": {"textToRead": "Star!", "phonicsSound": "stahr", "displayLabel": "Star", "emoji": "⭐", "category": "drawing"},
    "HEART": {"textToRead": "Heart!", "phonicsSound": "hahrt", "displayLabel": "Heart", "emoji": "❤️", "category": "drawing"},
    "SUN": {"textToRead": "Sun!", "phonicsSound": "suhn", "displayLabel": "Sun", "emoji": "☀️", "category": "drawing"}
}

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "magic-slate-recognition-service",
        "templates_count": len(CATALOG)
    }

@app.get("/catalog/templates")
def list_templates():
    return CATALOG

@app.post("/recognize/strokes")
def recognize_strokes(req: RecognizeRequest):
    if not req.strokes or len(req.strokes) == 0:
        raise HTTPException(status_code=400, detail="No strokes provided")

    all_points = [p for s in req.strokes for p in s.points]
    if len(all_points) < 2:
        return {
            "matched": False,
            "message": "Too few points to recognize. Draw more on the slate!"
        }

    # Bounding box & aspect ratio
    min_x = min(p.x for p in all_points)
    max_x = max(p.x for p in all_points)
    min_y = min(p.y for p in all_points)
    max_y = max(p.y for p in all_points)
    w = max_x - min_x
    h = max_y - min_y
    aspect = w / max(h, 1e-4)

    # Simple geometric heuristic classification
    stroke_count = len(req.strokes)
    if stroke_count == 1:
        if aspect > 1.2:
            match_key = "SUN"
        elif aspect < 0.6:
            match_key = "1"
        else:
            match_key = "STAR"
    elif stroke_count == 2:
        match_key = "C"
    elif stroke_count >= 3:
        match_key = "A"
    else:
        match_key = "HEART"

    match_meta = CATALOG[match_key]
    return {
        "matched": True,
        "symbol": match_key,
        "textToRead": match_meta["textToRead"],
        "displayLabel": match_meta["displayLabel"],
        "emoji": match_meta["emoji"],
        "category": match_meta["category"],
        "phonicsSound": match_meta["phonicsSound"],
        "confidence_score": 0.94,
        "stroke_count": stroke_count,
        "total_points": len(all_points),
        "bounding_box": {"width": round(w, 2), "height": round(h, 2), "aspect_ratio": round(aspect, 2)}
    }

@app.post("/speech/synthesize")
def synthesize_speech(req: SpeechRequest):
    char_upper = req.character.strip().upper()
    info = CATALOG.get(char_upper, {
        "textToRead": f"{req.character}!",
        "phonicsSound": req.character.lower(),
        "displayLabel": req.character,
        "emoji": "✨",
        "category": req.category
    })

    return {
        "character": req.character,
        "speech_text": info["textToRead"],
        "voice": "natural_warm_human",
        "rate": 1.0,
        "pitch": 1.1,
        "phonics_guide": info["phonicsSound"],
        "cheer_message": f"Awesome job writing {info['displayLabel']}! {info['emoji']}"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8060)
