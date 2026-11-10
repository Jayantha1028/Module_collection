const express = require("express");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");

const PORT = process.env.PORT || 3003;
const SECRET = process.env.JWT_SECRET;
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

// Cart only stores (user, product, qty). Names and prices always come from
// product-service, so a price change can never leave stale data in a cart.
async function initDb() {
  for (let i = 0; i < 30; i++) {
    try {
      await pool.query(`CREATE TABLE IF NOT EXISTS cart_items (
        user_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        qty INTEGER NOT NULL CHECK (qty > 0),
        added_at TIMESTAMPTZ DEFAULT now(),
        PRIMARY KEY (user_id, product_id)
      )`);
      return;
    } catch (e) {
      console.log("cart: waiting for database...", e.message);
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

async function fetchProducts(path) {
  const resp = await fetch(`${PRODUCT_URL}${path}`, { signal: AbortSignal.timeout(3000) });
  if (resp.status === 404) throw httpError(404, "Product not found");
  if (!resp.ok) throw httpError(502, "Catalog unavailable");
  return resp.json();
}

async function loadCart(userId) {
  const { rows } = await pool.query(
    "SELECT product_id, qty FROM cart_items WHERE user_id=$1 ORDER BY added_at",
    [userId]
  );
  if (!rows.length) return { items: [], count: 0, totalCents: 0 };
  const products = new Map(
    (await fetchProducts(`/api/products?ids=${rows.map((r) => r.product_id).join(",")}`)).map((p) => [p.id, p])
  );
  const items = rows
    .filter((r) => products.has(r.product_id))
    .map((r) => {
      const p = products.get(r.product_id);
      return {
        productId: p.id,
        name: p.name,
        image: p.image,
        priceCents: p.priceCents,
        stock: p.stock,
        qty: r.qty,
        lineCents: p.priceCents * r.qty,
      };
    });
  return {
    items,
    count: items.reduce((n, i) => n + i.qty, 0),
    totalCents: items.reduce((n, i) => n + i.lineCents, 0),
  };
}

app.get("/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ status: "ok", service: "cart" });
  } catch {
    res.status(503).json({ status: "down" });
  }
});

app.get("/api/cart", auth, wrap(async (req, res) => res.json(await loadCart(req.user.sub))));

// Set the absolute quantity of an item (0 removes it). Capped at available stock.
app.put("/api/cart/items", auth, wrap(async (req, res) => {
  const productId = Number(req.body && req.body.productId);
  const qty = Number(req.body && req.body.qty);
  if (!Number.isInteger(productId) || !Number.isInteger(qty) || qty < 0) {
    throw httpError(400, "productId and qty are required");
  }
  if (qty === 0) {
    await pool.query("DELETE FROM cart_items WHERE user_id=$1 AND product_id=$2", [req.user.sub, productId]);
  } else {
    const product = await fetchProducts(`/api/products/${productId}`);
    if (product.stock < 1) throw httpError(409, `${product.name} is out of stock`);
    await pool.query(
      `INSERT INTO cart_items(user_id, product_id, qty) VALUES($1,$2,$3)
       ON CONFLICT (user_id, product_id) DO UPDATE SET qty = EXCLUDED.qty`,
      [req.user.sub, productId, Math.min(qty, product.stock)]
    );
  }
  res.json(await loadCart(req.user.sub));
}));

app.delete("/api/cart", auth, wrap(async (req, res) => {
  await pool.query("DELETE FROM cart_items WHERE user_id=$1", [req.user.sub]);
  res.json({ items: [], count: 0, totalCents: 0 });
}));

initDb()
  .then(() => {
    const server = app.listen(PORT, () => console.log(`cart-service listening on ${PORT}`));
    process.on("SIGTERM", () => server.close(() => pool.end().then(() => process.exit(0))));
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
