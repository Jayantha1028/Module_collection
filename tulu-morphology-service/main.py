import sys
from pathlib import Path
from typing import Dict, List, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

sys.path.insert(0, str(Path(__file__).parent))

from kannada_tigalari_converter.nlp.tulu_morphology import (
    TuluMorphAnalyzer,
    NounClass,
    Case,
    Tense,
    Person,
    Number,
    Polarity,
)

app = FastAPI(
    title="Tulu Morphological Analyzer & Grammar Engine",
    description="Linguistic microservice for Tulu word lemmatization, 8-case noun declension, verb conjugation, and POS tagging",
    version="1.0.0"
)

analyzer = TuluMorphAnalyzer()

class LemmatizeRequest(BaseModel):
    word: str = Field(..., example="ಇಲ್ಲಡ್")

class NounDeclineRequest(BaseModel):
    noun: str = Field(..., example="ಇಲ್ಲ")
    noun_class: Optional[str] = "inanimate"  # rational_masc, rational_fem, inanimate

class VerbConjugateRequest(BaseModel):
    verb: str = Field(..., example="ಬರ್")
    tense: Optional[str] = "present"  # present, past, future
    polarity: Optional[str] = "affirmative"  # affirmative, negative

class ParseRequest(BaseModel):
    word: str = Field(..., example="ಕುಡ್ಲಗ್")

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "tulu-morphology-service",
        "engine": "Finite-state Rule-based Tulu Morphological Engine"
    }

@app.post("/morphology/lemmatize")
def lemmatize_word(req: LemmatizeRequest):
    lemma = analyzer.lemmatize(req.word)
    return {
        "word": req.word,
        "lemma": lemma,
        "is_inflected": lemma != req.word
    }

@app.post("/morphology/decline-noun")
def decline_noun(req: NounDeclineRequest):
    # Retrieve noun declension table across all 8 cases
    n_class = NounClass.INANIMATE
    if req.noun_class == "rational_masc":
        n_class = NounClass.RATIONAL_MASC
    elif req.noun_class == "rational_fem":
        n_class = NounClass.RATIONAL_FEM

    cases = analyzer.decline_noun(req.noun, n_class)
    return {
        "noun": req.noun,
        "noun_class": req.noun_class,
        "cases": cases
    }

@app.post("/morphology/conjugate-verb")
def conjugate_verb(req: VerbConjugateRequest):
    t = Tense.PRESENT
    if req.tense == "past":
        t = Tense.PAST
    elif req.tense == "future":
        t = Tense.FUTURE

    pol = Polarity.AFFIRMATIVE if req.polarity == "affirmative" else Polarity.NEGATIVE
    conjugations = analyzer.conjugate_verb(req.verb, t, pol)
    return {
        "verb_stem": req.verb,
        "tense": req.tense,
        "polarity": req.polarity,
        "paradigms": conjugations
    }

@app.post("/morphology/parse")
def parse_morphemes(req: ParseRequest):
    parsed = analyzer.parse(req.word)
    pos = analyzer.predict_pos(req.word)
    return {
        "word": req.word,
        "pos": pos,
        "parse_chain": parsed
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8071)
