"""
common_integrations.math_procedural
==================================
Reusable procedural mathematics, seeded random generation, and spiral coordinate modeling.
"""
import math
import random
from typing import Any, Dict, List, Optional, Tuple


def generate_random_sequence(seed: int, count: int, min_val: int = 1, max_val: int = 100) -> List[int]:
    """Generate reproducible seeded integer sequence."""
    rng = random.Random(seed)
    return [rng.randint(min_val, max_val) for _ in range(count)]


def generate_spiral_coordinates(turns: float = 3.0, points_count: int = 100, step: float = 1.5) -> List[Dict[str, float]]:
    """Generate 2D (x, y) coordinates along an Archimedean spiral."""
    points = []
    max_theta = turns * 2.0 * math.pi
    theta_step = max_theta / max(1, points_count)

    for i in range(points_count):
        theta = i * theta_step
        r = step * theta
        points.append({
            "step": i,
            "theta": round(theta, 4),
            "r": round(r, 4),
            "x": round(r * math.cos(theta), 4),
            "y": round(r * math.sin(theta), 4)
        })
    return points


def safe_arithmetic(op: str, a: float, b: float) -> Tuple[bool, Optional[float], Optional[str]]:
    """Perform basic arithmetic with zero-division safety."""
    clean_op = op.lower().strip()
    if clean_op in ["add", "+"]:
        return True, a + b, None
    elif clean_op in ["subtract", "sub", "-"]:
        return True, a - b, None
    elif clean_op in ["multiply", "mul", "*"]:
        return True, a * b, None
    elif clean_op in ["divide", "div", "/"]:
        if b == 0:
            return False, None, "Division by zero"
        return True, a / b, None
    elif clean_op in ["power", "pow", "**"]:
        return True, a ** b, None
    return False, None, f"Unsupported operation: {op}"
