import re
from typing import List, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI(
    title="VCS Author & Commit Normalizer Service",
    description="Microservice for version control author formatting, commit log sanitation, and git hook payload validation",
    version="1.0.0"
)

class NameRequest(BaseModel):
    name: str = Field(..., example="Hopper, Grace M.")

class BatchNameRequest(BaseModel):
    names: List[str] = Field(..., example=["Turing, Alan", "Lovelace, Ada", "Ritchie, Dennis"])

class CommitValidationRequest(BaseModel):
    author_name: str = Field(..., example="Torvalds, Linus")
    author_email: str = Field(..., example="linus@kernel.org")
    commit_message: str = Field(..., example="feat: add memory barrier check")

def rearrange_name(name: str) -> str:
    """Rearranges 'Lastname, Firstname' into 'Firstname Lastname'."""
    result = re.search(r"^([\w .-]*), ([\w .-]*)$", name.strip())
    if result is None:
        return name.strip()
    return f"{result.group(2).strip()} {result.group(1).strip()}"

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "vcs-normalizer-service"
    }

@app.post("/vcs/rearrange-name")
def rearrange(req: NameRequest):
    normalized = rearrange_name(req.name)
    was_modified = normalized != req.name.strip()
    return {
        "original": req.name,
        "normalized": normalized,
        "rearranged": was_modified
    }

@app.post("/vcs/batch-rearrange")
def batch_rearrange(req: BatchNameRequest):
    results = []
    for n in req.names:
        norm = rearrange_name(n)
        results.append({
            "original": n,
            "normalized": norm,
            "rearranged": norm != n.strip()
        })
    return {
        "total": len(req.names),
        "results": results
    }

@app.post("/vcs/validate-commit")
def validate_commit(req: CommitValidationRequest):
    # Check if author name was in Last, First format and needs normalization
    normalized_name = rearrange_name(req.author_name)
    email_valid = bool(re.match(r"^[^@]+@[^@]+\.[^@]+$", req.author_email))
    message_valid = len(req.commit_message.strip()) > 0

    passed = email_valid and message_valid
    issues = []
    if not email_valid:
        issues.append("Invalid author email format.")
    if not message_valid:
        issues.append("Commit message cannot be empty.")

    return {
        "valid": passed,
        "author_name": normalized_name,
        "original_author_name": req.author_name,
        "author_email": req.author_email,
        "commit_message": req.commit_message,
        "issues": issues,
        "remediation_suggested": f"git commit --amend --author=\"{normalized_name} <{req.author_email}>\"" if normalized_name != req.author_name else None
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8080)
