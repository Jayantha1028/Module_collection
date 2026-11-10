const express = require("express");
const { Pool } = require("pg");

const PORT = process.env.PORT || 3002;
const pool = new Pool({ connectionString: process.env.DB_URL });
const app = express();
app.use(express.json());

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// Express 4 does not catch rejected promises: without this a DB error would crash the process.
const wrap = (fn) => (req, res) =>
  fn(req, res).catch((e) => {
    console.error(e);
    res.status(500).json({ error: "Internal error" });
  });

// name, description, price (cents), stock, emoji image, category
const SEED = [
  ["Aurora Wireless Headphones", "Active noise cancelling with 40 hour battery life.", 12900, 40, "🎧", "Audio"],
  ["Pebble Bluetooth Speaker", "Pocket sized, waterproof, surprisingly loud.", 5900, 60, "🔊", "Audio"],
  ["Studio Condenser Mic", "USB microphone for podcasts and streaming.", 8900, 25, "🎙️", "Audio"],
  ["Pulse Smart Watch", "Heart rate, sleep tracking and 7 day battery.", 17900, 35, "⌚", "Wearables"],
  ["Halo Fitness Band", "Slim tracker with built in GPS.", 6900, 80, "📿", "Wearables"],
  ["Lumen Desk Lamp", "Dimmable LED lamp with wireless charging base.", 4900, 50, "💡", "Home"],
  ["Brew Master Kettle", "Variable temperature gooseneck electric kettle.", 5400, 45, "🫖", "Home"],
  ["Cloud Pillow Set", "Memory foam pillows, set of two.", 3900, 70, "🛏️", "Home"],
  ["Nomad Backpack", "Water resistant 24L pack with laptop sleeve.", 7900, 55, "🎒", "Accessories"],
  ["Slate Leather Wallet", "Slim RFID blocking wallet.", 3400, 90, "👛", "Accessories"],
  ["Vortex Gaming Mouse", "16000 DPI optical sensor, 8 buttons.", 4500, 65, "🖱️", "Gaming"],
  ["Titan Mechanical Keyboard", "Hot swappable switches with RGB lighting.", 9900, 30, "⌨️", "Gaming"],
];

async function initDb() {
  for (let i = 0; i < 30; i++) {
    try {
      await pool.query(`CREATE TABLE IF NOT EXISTS products (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        price_cents INTEGER NOT NULL CHECK (price_cents >= 0),
        stock INTEGER NOT NULL CHECK (stock >= 0),
        image TEXT NOT NULL,
        category TEXT NOT NULL
      )`);
      const { rows } = await pool.query("SELECT count(*)::int AS n FROM products");
      if (rows[0].n === 0) {
        for (const p of SEED) {
          await pool.query(
            "INSERT INTO products(name, description, price_cents, stock, image, category) VALUES($1,$2,$3,$4,$5,$6)",
            p
          );
        }
        console.log(`product: seeded ${SEED.length} products`);
      }
      return;
    } catch (e) {
      console.log("product: waiting for database...", e.message);
      await sleep(2000);
    }
  }
  throw new Error("database unavailable");
}

const toDto = (r) => ({
  id: r.id,
  name: r.name,
  description: r.description,
  priceCents: r.price_cents,
  stock: r.stock,
  image: r.image,
  category: r.category,
});

app.get("/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ status: "ok", service: "product" });
  } catch {
    res.status(503).json({ status: "down" });
  }
});

// Public catalog. Supports ?q=, ?category=, ?ids=1,2,3
app.get("/api/products", async (req, res) => {
  const { q, category, ids } = req.query;
  const where = [];
  const params = [];
  if (q) {
    params.push(`%${q}%`);
    where.push(`(name ILIKE $${params.length} OR description ILIKE $${params.length})`);
  }
  if (category) {
    params.push(category);
    where.push(`category = $${params.length}`);
  }
  if (ids) {
    params.push(String(ids).split(",").map(Number).filter(Number.isInteger));
    where.push(`id = ANY($${params.length})`);
  }
  try {
    const sql = `SELECT * FROM products ${where.length ? "WHERE " + where.join(" AND ") : ""} ORDER BY id`;
    const { rows } = await pool.query(sql, params);
    res.json(rows.map(toDto));
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal error" });
  }
});

app.get("/api/products/categories", wrap(async (_req, res) => {
  const { rows } = await pool.query("SELECT DISTINCT category FROM products ORDER BY category");
  res.json(rows.map((r) => r.category));
}));

app.get("/api/products/:id", wrap(async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) return res.status(400).json({ error: "Invalid id" });
  const { rows } = await pool.query("SELECT * FROM products WHERE id=$1", [id]);
  if (!rows[0]) return res.status(404).json({ error: "Product not found" });
  res.json(toDto(rows[0]));
}));

// ---- Internal API: used by order-service only, never routed by the gateway/ingress ----

// Atomic stock reservation: the WHERE clause prevents overselling under concurrency.
app.post("/internal/products/:id/reserve", wrap(async (req, res) => {
  const id = Number(req.params.id);
  const qty = Number(req.body && req.body.qty);
  if (!Number.isInteger(id) || !Number.isInteger(qty) || qty < 1) return res.status(400).json({ error: "Invalid id or qty" });
  const { rowCount } = await pool.query(
    "UPDATE products SET stock = stock - $2 WHERE id = $1 AND stock >= $2",
    [id, qty]
  );
  if (!rowCount) return res.status(409).json({ error: "Insufficient stock" });
  res.json({ reserved: qty });
}));

// Compensating action for the checkout saga.
app.post("/internal/products/:id/release", wrap(async (req, res) => {
  const id = Number(req.params.id);
  const qty = Number(req.body && req.body.qty);
  if (!Number.isInteger(id) || !Number.isInteger(qty) || qty < 1) return res.status(400).json({ error: "Invalid id or qty" });
  await pool.query("UPDATE products SET stock = stock + $2 WHERE id = $1", [id, qty]);
  res.json({ released: qty });
}));

initDb()
  .then(() => {
    const server = app.listen(PORT, () => console.log(`product-service listening on ${PORT}`));
    process.on("SIGTERM", () => server.close(() => pool.end().then(() => process.exit(0))));
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
