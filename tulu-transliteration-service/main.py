import sys
from pathlib import Path
from typing import Dict, List, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

# Ensure package is accessible
sys.path.insert(0, str(Path(__file__).parent))

from kannada_tigalari_converter.core.transliterator import (
    detect_script,
    latin_to_kannada,
    kannada_to_latin,
    kannada_to_tigalari,
    tigalari_to_kannada,
    latin_to_tigalari,
    tigalari_to_latin,
    inspect_codepoints,
)

app = FastAPI(
    title="Tulu-Tigalari & Kannada Transliteration Microservice",
    description="Multi-way transliteration engine supporting Latin, Kannada, and Tulu-Tigalari Unicode 16.0",
    version="1.0.0"
)

class TransliterateRequest(BaseModel):
    text: str = Field(..., example="namaskara")
    source_script: Optional[str] = Field("auto", example="auto")  # auto, latin, kannada, tigalari
    target_script: str = Field("tigalari", example="tigalari")  # latin, kannada, tigalari

class AutoTransliterateRequest(BaseModel):
    text: str = Field(..., example="solmelu")

class InspectRequest(BaseModel):
    text: str = Field(..., example="ತುಳು")

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "tulu-transliteration-service",
        "supported_scripts": ["latin", "kannada", "tigalari (Unicode 16.0)"]
    }

@app.post("/script/detect")
def detect_input_script(req: AutoTransliterateRequest):
    detected = detect_script(req.text)
    return {"text": req.text, "detected_script": detected}

@app.post("/transliterate")
def transliterate(req: TransliterateRequest):
    src = req.source_script.lower().strip()
    if src == "auto":
        src = detect_script(req.text)
    tgt = req.target_script.lower().strip()

    if src == tgt:
        return {"input_text": req.text, "source_script": src, "target_script": tgt, "result": req.text}

    res = req.text
    if src == "latin" and tgt == "kannada":
        res = latin_to_kannada(req.text)
    elif src == "latin" and tgt == "tigalari":
        res = latin_to_tigalari(req.text)
    elif src == "kannada" and tgt == "latin":
        res = kannada_to_latin(req.text)
    elif src == "kannada" and tgt == "tigalari":
        res = kannada_to_tigalari(req.text)
    elif src == "tigalari" and tgt == "kannada":
        res = tigalari_to_kannada(req.text)
    elif src == "tigalari" and tgt == "latin":
        res = tigalari_to_latin(req.text)
    else:
        raise HTTPException(status_code=400, detail=f"Unsupported conversion from '{src}' to '{tgt}'")

    return {
        "input_text": req.text,
        "source_script": src,
        "target_script": tgt,
        "result": res
    }

@app.post("/transliterate/auto")
def auto_transliterate(req: AutoTransliterateRequest):
    src = detect_script(req.text)
    output = {"original": req.text, "detected_source": src}

    if src == "latin":
        kan = latin_to_kannada(req.text)
        output["kannada"] = kan
        output["tigalari"] = kannada_to_tigalari(kan)
    elif src == "kannada":
        output["latin"] = kannada_to_latin(req.text)
        output["tigalari"] = kannada_to_tigalari(req.text)
    elif src == "tigalari":
        kan = tigalari_to_kannada(req.text)
        output["kannada"] = kan
        output["latin"] = kannada_to_latin(kan)

    return output

@app.post("/unicode/inspect")
def inspect_text(req: InspectRequest):
    inspection = inspect_codepoints(req.text)
    return {
        "text": req.text,
        "codepoint_count": len(req.text),
        "details": inspection
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8070)
