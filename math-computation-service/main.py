import math
import random
from typing import List, Optional
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel, Field

app = FastAPI(
    title="Math & Procedural Computation Microservice",
    description="Mathematical algorithms, seeded random generation, and geometry coordinate modeling",
    version="1.0.0"
)

class SquareRequest(BaseModel):
    number: int = Field(..., example=12)

class RandomSequenceRequest(BaseModel):
    seed: int = Field(42, example=42)
    count: int = Field(5, ge=1, le=1000, example=5)
    min_val: int = Field(1, example=1)
    max_val: int = Field(100, example=100)

class SpiralRequest(BaseModel):
    turns: float = Field(3.0, ge=0.5, le=50.0, example=3.0)
    points_count: int = Field(200, ge=10, le=5000, example=200)
    step: float = Field(1.5, example=1.5)

class ArithmeticRequest(BaseModel):
    operation: str = Field(..., example="add")  # add, subtract, multiply, divide, power
    a: float = Field(..., example=15.0)
    b: float = Field(..., example=3.0)

@app.get("/health")
def health():
    return {
        "status": "healthy",
        "service": "math-computation-service"
    }

@app.post("/math/square")
def compute_square(req: SquareRequest):
    if req.number < 0:
        raise HTTPException(status_code=400, detail="Negative numbers not permitted for square check")
    return {
        "input": req.number,
        "square": req.number ** 2,
        "message": f"The square of {req.number} is {req.number ** 2}"
    }

@app.post("/math/random-sequence")
def generate_random_sequence(req: RandomSequenceRequest):
    if req.min_val > req.max_val:
        raise HTTPException(status_code=400, detail="min_val cannot exceed max_val")
    
    rng = random.Random(req.seed)
    seq = [rng.randint(req.min_val, req.max_val) for _ in range(req.count)]
    return {
        "seed": req.seed,
        "count": req.count,
        "range": [req.min_val, req.max_val],
        "sequence": seq
    }

@app.post("/math/spiral-coordinates")
def generate_spiral_coordinates(req: SpiralRequest):
    points = []
    max_theta = req.turns * 2 * math.pi
    theta_step = max_theta / req.points_count

    for i in range(req.points_count):
        theta = i * theta_step
        r = req.step * theta
        x = round(r * math.cos(theta), 4)
        y = round(r * math.sin(theta), 4)
        points.append({"step": i, "theta": round(theta, 4), "r": round(r, 4), "x": x, "y": y})

    return {
        "turns": req.turns,
        "total_points": len(points),
        "coordinates": points
    }

@app.post("/math/arithmetic")
def compute_arithmetic(req: ArithmeticRequest):
    op = req.operation.lower().strip()
    if op == "add":
        res = req.a + req.b
    elif op == "subtract":
        res = req.a - req.b
    elif op == "multiply":
        res = req.a * req.b
    elif op == "divide":
        if req.b == 0:
            raise HTTPException(status_code=400, detail="Division by zero is undefined")
        res = req.a / req.b
    elif op == "power":
        res = req.a ** req.b
    else:
        raise HTTPException(status_code=400, detail=f"Unsupported operation '{req.operation}'")

    return {
        "operation": op,
        "operand_a": req.a,
        "operand_b": req.b,
        "result": res
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8041)
