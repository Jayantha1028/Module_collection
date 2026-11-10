"""
common_integrations.payment_checkout_widget
===========================================
Hosted, responsive checkout page and payment interface generator.
Simulates live Razorpay / credit card payment UI directly from Python parameters.
"""
from typing import Any, Dict, Optional


def render_checkout_page(
    order_id: str,
    amount: float,
    currency: str = "USD",
    product_name: str = "Cloud Microservices Bundle",
    company_name: str = "Acme Cloud Services"
) -> str:
    """Generate self-contained modern HTML payment checkout page."""
    currency_symbol = "$" if currency.upper() == "USD" else ("₹" if currency.upper() == "INR" else "€")
    formatted_amount = f"{currency_symbol}{amount:,.2f}"

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Secure Checkout — {order_id}</title>
  <style>
    body {{ background: #0b1329; color: #f8fafc; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; }}
    .card {{ background: #111c44; border: 1px solid #1e295d; border-radius: 16px; padding: 32px; max-width: 440px; width: 100%; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5); }}
    .badge {{ background: #1e295d; color: #60a5fa; font-size: 0.8em; padding: 4px 10px; border-radius: 20px; font-weight: 600; text-transform: uppercase; }}
    .amount {{ font-size: 2.4em; font-weight: 800; color: #ffffff; margin: 16px 0; }}
    .btn {{ background: #3b82f6; color: white; border: none; border-radius: 8px; width: 100%; padding: 14px; font-size: 1em; font-weight: 600; cursor: pointer; margin-top: 20px; transition: background 0.2s; }}
    .btn:hover {{ background: #2563eb; }}
    .input-field {{ width: 100%; box-sizing: border-box; background: #0b1329; border: 1px solid #1e295d; border-radius: 8px; padding: 12px; color: white; margin-top: 8px; font-size: 0.9em; }}
  </style>
</head>
<body>
  <div class="card">
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <span class="badge">SECURE 256-BIT SSL</span>
      <span style="font-size: 0.85em; color: #94a3b8;">Order: {order_id}</span>
    </div>
    <div style="margin-top: 20px; color: #94a3b8; font-size: 0.9em;">{company_name}</div>
    <div style="font-size: 1.2em; font-weight: 600; margin-top: 4px;">{product_name}</div>
    <div class="amount">{formatted_amount}</div>
    <div>
      <label style="font-size: 0.8em; color: #94a3b8;">CARD NUMBER</label>
      <input type="text" class="input-field" placeholder="•••• •••• •••• 4242" value="•••• •••• •••• 4242" readonly>
    </div>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 12px;">
      <div>
        <label style="font-size: 0.8em; color: #94a3b8;">EXPIRES</label>
        <input type="text" class="input-field" value="12/28" readonly>
      </div>
      <div>
        <label style="font-size: 0.8em; color: #94a3b8;">CVC</label>
        <input type="text" class="input-field" value="•••" readonly>
      </div>
    </div>
    <button class="btn" onclick="alert('Payment Authorized Successfully for {order_id}!')">Pay {formatted_amount}</button>
  </div>
</body>
</html>"""
