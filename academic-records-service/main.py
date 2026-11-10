from pathlib import Path
from typing import Dict, List, Optional
from fastapi import FastAPI, HTTPException, Query
import pandas as pd

app = FastAPI(
    title="Academic & Enterprise Records Microservice",
    description="Microservice for student performance management, faculty mentee allocation, and staff directory records",
    version="1.0.0"
)

DATA_DIR = Path(__file__).parent / "data"

def get_students() -> pd.DataFrame:
    p = DATA_DIR / "student_data.csv"
    return pd.read_csv(p) if p.exists() else pd.DataFrame()

def get_teachers() -> pd.DataFrame:
    p = DATA_DIR / "teacher_data.csv"
    return pd.read_csv(p) if p.exists() else pd.DataFrame()

def get_employees() -> pd.DataFrame:
    p = DATA_DIR / "sample_employees.csv"
    return pd.read_csv(p) if p.exists() else pd.DataFrame()

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "academic-records-service",
        "total_students": len(get_students()),
        "total_teachers": len(get_teachers()),
        "total_employees": len(get_employees())
    }

@app.get("/students")
def list_students(
    specialization: Optional[str] = Query(None, description="Filter by specialization (e.g. Civil, Mechanical, CSE)"),
    min_cgpa: Optional[float] = Query(None, ge=0.0, le=10.0),
    limit: int = Query(50, ge=1, le=500),
    offset: int = Query(0, ge=0)
):
    df = get_students()
    if df.empty:
        return {"total": 0, "students": []}

    if specialization:
        df = df[df["specialization"].str.lower() == specialization.lower().strip()]
    if min_cgpa is not None:
        df = df[df["cgpa"] >= min_cgpa]

    total = len(df)
    paginated = df.iloc[offset: offset + limit].to_dict(orient="records")
    return {
        "total_matched": total,
        "offset": offset,
        "limit": limit,
        "students": paginated
    }

@app.get("/students/{student_id}")
def get_student(student_id: int):
    df = get_students()
    match = df[df["id"] == student_id]
    if match.empty:
        raise HTTPException(status_code=404, detail=f"Student ID {student_id} not found")
    return match.iloc[0].to_dict()

@app.get("/students/stats/overview")
def get_student_stats():
    df = get_students()
    if df.empty:
        return {}

    spec_grouped = df.groupby("specialization").agg(
        student_count=("id", "count"),
        avg_cgpa=("cgpa", "mean"),
        avg_attendance=("attendance", "mean")
    ).reset_index()

    return {
        "total_students": len(df),
        "overall_average_cgpa": round(float(df["cgpa"].mean()), 2),
        "overall_average_attendance": round(float(df["attendance"].mean()), 2),
        "specialization_metrics": spec_grouped.to_dict(orient="records")
    }

@app.get("/teachers")
def list_teachers():
    df = get_teachers()
    return {
        "total": len(df),
        "teachers": df.to_dict(orient="records")
    }

@app.get("/teachers/{teacher_id}")
def get_teacher(teacher_id: str):
    df = get_teachers()
    match = df[df["id"].str.upper() == teacher_id.upper().strip()]
    if match.empty:
        raise HTTPException(status_code=404, detail=f"Teacher ID '{teacher_id}' not found")
    return match.iloc[0].to_dict()

@app.get("/employees")
def list_employees():
    df = get_employees()
    return {
        "total": len(df),
        "employees": df.to_dict(orient="records")
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8133)
