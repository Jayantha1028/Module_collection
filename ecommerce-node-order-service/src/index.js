const express = require("express");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");

const PORT = process.env.PORT || 3004;
const SECRET = process.env.JWT_SECRET;
const CART_URL = process.env.CART_SERVICE_URL || "http://cart-service:3003";
const PRODUCT_URL = process.env.PRODUCT_SERVICE_URL || "http://product-service:3002";
if (!SECRET) throw new Error("JWT_SECRET is required");

const pool = new Pool({ connectionString: process.env.DB_URL });
const app = express();
app.use(express.json());

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const httpError = (status, message) => Object.assign(new Error(message), { status });
const wrap = (fn) => (req, res) =>
  fn(req, res).catch((e) => {
    console.error(e);
    res.status(e.status || 502).json({ error: e.status ? e.message : "Upstream or internal error" });
  });

async function initDb() {
  for (let i = 0; i < 30; i++) {
    try {
      await pool.query(`CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        total_cents INTEGER NOT NULL,
        status TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT now()
      )`);
      await pool.query(`CREATE TABLE IF NOT EXISTS order_items (
        id SERIAL PRIMARY KEY,
        order_id INTEGER NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
        product_id INTEGER NOT NULL,
        name TEXT NOT NULL,
        image TEXT NOT NULL,
        price_cents INTEGER NOT NULL,
        qty INTEGER NOT NULL
      )`);
      await pool.query("CREATE INDEX IF NOT EXISTS orders_user_idx ON orders(user_id, created_at DESC)");
      return;
    } catch (e) {
      console.log("order: waiting for database...", e.message);
      await sleep(2000);
    }
  }
  throw new Error("database unavailable");
}

function auth(req, res, next) {
  try {
    req.user = jwt.verify((req.headers.authorization || "").replace(/^Bearer /, ""), SECRET);
    next();
  } catch {
    res.status(401).json({ error: "Unauthorized" });
  }
}

const post = (url, body) =>
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(3000),
  });

async function createOrder(userId, cart) {
  const client = await pool.connect();
  try {
    await client.query("BEGIN");
    const o = await client.query(
      "INSERT INTO orders(user_id, total_cents, status) VALUES($1,$2,'PAID') RETURNING id, created_at",
      [userId, cart.totalCents]
    );
    for (const it of cart.items) {
      await client.query(
        "INSERT INTO order_items(order_id, product_id, name, image, price_cents, qty) VALUES($1,$2,$3,$4,$5,$6)",
        [o.rows[0].id, it.productId, it.name, it.image, it.priceCents, it.qty]
      );
    }
    await client.query("COMMIT");
    return {
      id: o.rows[0].id,
      status: "PAID",
      totalCents: cart.totalCents,
      createdAt: o.rows[0].created_at,
      items: cart.items.map(({ productId, name, image, priceCents, qty }) => ({ productId, name, image, priceCents, qty })),
    };
  } catch (e) {
    await client.query("ROLLBACK");
    throw e;
  } finally {
    client.release();
  }
}

app.get("/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ status: "ok", service: "order" });
  } catch {
    res.status(503).json({ status: "down" });
  }
});

// Checkout saga: read cart -> reserve stock per item -> persist order -> clear cart.
// If any step before the order is saved fails, stock reservations are released
// (compensating transactions), so inventory never leaks.
app.post("/api/orders", auth, wrap(async (req, res) => {
  const authz = req.headers.authorization;
  const cartResp = await fetch(`${CART_URL}/api/cart`, {
    headers: { Authorization: authz },
    signal: AbortSignal.timeout(3000),
  });
  if (!cartResp.ok) throw httpError(502, "Cart unavailable");
  const cart = await cartResp.json();
  if (!cart.items.length) throw httpError(400, "Your cart is empty");

  const reserved = [];
  let order;
  try {
    for (const it of cart.items) {
      const r = await post(`${PRODUCT_URL}/internal/products/${it.productId}/reserve`, { qty: it.qty });
      if (r.status === 409) throw httpError(409, `Not enough stock for ${it.name}`);
      if (!r.ok) throw httpError(502, "Inventory unavailable");
      reserved.push(it);
    }
    order = await createOrder(req.user.sub, cart);
  } catch (e) {
    await Promise.allSettled(
      reserved.map((it) => post(`${PRODUCT_URL}/internal/products/${it.productId}/release`, { qty: it.qty }))
    );
    throw e;
  }

  // Best effort: the order is already saved, so a failure here must not fail checkout.
  fetch(`${CART_URL}/api/cart`, {
    method: "DELETE",
    headers: { Authorization: authz },
    signal: AbortSignal.timeout(3000),
  }).catch((e) => console.error("cart clear failed", e.message));

  res.status(201).json(order);
}));

app.get("/api/orders", auth, wrap(async (req, res) => {
  const { rows } = await pool.query(
    `SELECT o.id, o.total_cents, o.status, o.created_at,
            i.product_id, i.name, i.image, i.price_cents, i.qty
       FROM orders o JOIN order_items i ON i.order_id = o.id
      WHERE o.user_id = $1
      ORDER BY o.created_at DESC, o.id DESC`,
    [req.user.sub]
  );
  const byId = new Map();
  for (const r of rows) {
    if (!byId.has(r.id)) {
      byId.set(r.id, { id: r.id, status: r.status, totalCents: r.total_cents, createdAt: r.created_at, items: [] });
    }
    byId.get(r.id).items.push({ productId: r.product_id, name: r.name, image: r.image, priceCents: r.price_cents, qty: r.qty });
  }
  res.json([...byId.values()]);
}));

initDb()
  .then(() => {
    const server = app.listen(PORT, () => console.log(`order-service listening on ${PORT}`));
    process.on("SIGTERM", () => server.close(() => pool.end().then(() => process.exit(0))));
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
