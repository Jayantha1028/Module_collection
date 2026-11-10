"""
common_integrations.ecommerce_core
==================================
Reusable e-commerce business logic: shopping cart pricing, order state machine,
inventory reservations, and payment webhook verification.
"""
import hashlib
import hmac
from typing import Any, Dict, List, Optional, Tuple

VALID_ORDER_TRANSITIONS = {
    "CREATED": ["PENDING", "CANCELLED"],
    "PENDING": ["PAID", "CANCELLED"],
    "PAID": ["SHIPPED", "REFUNDED"],
    "SHIPPED": ["DELIVERED", "RETURNED"],
    "DELIVERED": ["RETURNED"],
    "CANCELLED": [],
    "REFUNDED": [],
    "RETURNED": []
}


def calculate_cart_totals(
    items: List[Dict[str, Any]],
    tax_rate: float = 0.08,
    shipping_flat_fee: float = 10.0,
    free_shipping_threshold: float = 100.0,
    discount_pct: float = 0.0
) -> Dict[str, float]:
    """Calculate subtotal, discount, tax, shipping, and grand total for cart items."""
    subtotal = sum(float(item.get("price", 0.0)) * int(item.get("quantity", 1)) for item in items)
    discount = round(subtotal * (discount_pct / 100.0), 2)
    discounted_subtotal = max(0.0, subtotal - discount)
    tax = round(discounted_subtotal * tax_rate, 2)
    shipping = 0.0 if discounted_subtotal >= free_shipping_threshold or len(items) == 0 else shipping_flat_fee
    grand_total = round(discounted_subtotal + tax + shipping, 2)

    return {
        "item_count": sum(int(item.get("quantity", 1)) for item in items),
        "subtotal": round(subtotal, 2),
        "discount": discount,
        "tax": tax,
        "shipping": shipping,
        "grand_total": grand_total
    }


def transition_order_state(current_state: str, new_state: str) -> Tuple[bool, str]:
    """Validate and transition order lifecycle states."""
    curr = current_state.upper()
    nxt = new_state.upper()
    allowed = VALID_ORDER_TRANSITIONS.get(curr, [])
    if nxt in allowed:
        return True, f"Order transitioned from {curr} to {nxt}"
    return False, f"Illegal transition from {curr} to {nxt}. Allowed: {allowed}"


def verify_razorpay_signature(order_id: str, payment_id: str, signature: str, secret: str) -> bool:
    """Verify Razorpay payment signature HMAC SHA256."""
    try:
        msg = f"{order_id}|{payment_id}".encode('utf-8')
        generated = hmac.new(secret.encode('utf-8'), msg, hashlib.sha256).hexdigest()
        return hmac.compare_digest(generated, signature)
    except Exception:
        return False
