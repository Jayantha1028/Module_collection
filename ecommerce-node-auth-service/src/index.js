const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");

const PORT = process.env.PORT || 3001;
const SECRET = process.env.JWT_SECRET;
if (!SECRET) throw new Error("JWT_SECRET is required");

const pool = new Pool({ connectionString: process.env.DB_URL });
const app = express();
app.use(express.json());

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function initDb() {
  for (let i = 0; i < 30; i++) {
    try {
      await pool.query(`CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email TEXT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        password_hash TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT now()
      )`);
      return;
    } catch (e) {
      console.log("auth: waiting for database...", e.message);
      await sleep(2000);
    }
  }
  throw new Error("database unavailable");
}

const sign = (u) =>
  jwt.sign({ sub: u.id, email: u.email, name: u.name }, SECRET, { expiresIn: "2h" });

const publicUser = (u) => ({ id: u.id, email: u.email, name: u.name });

app.get("/health", async (_req, res) => {
  try {
    await pool.query("SELECT 1");
    res.json({ status: "ok", service: "auth" });
  } catch {
    res.status(503).json({ status: "down" });
  }
});

app.post("/api/auth/register", async (req, res) => {
  const { email, name, password } = req.body || {};
  if (!email || !name || !password || password.length < 6) {
    return res.status(400).json({ error: "Name, email and a password of at least 6 characters are required" });
  }
  try {
    const hash = await bcrypt.hash(password, 10);
    const { rows } = await pool.query(
      "INSERT INTO users(email, name, password_hash) VALUES($1,$2,$3) RETURNING id, email, name",
      [String(email).toLowerCase().trim(), String(name).trim(), hash]
    );
    res.status(201).json({ user: publicUser(rows[0]), token: sign(rows[0]) });
  } catch (e) {
    if (e.code === "23505") return res.status(409).json({ error: "Email is already registered" });
    console.error(e);
    res.status(500).json({ error: "Internal error" });
  }
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) return res.status(400).json({ error: "Email and password are required" });
  try {
    const { rows } = await pool.query("SELECT * FROM users WHERE email=$1", [String(email).toLowerCase().trim()]);
    const user = rows[0];
    // Same message for unknown email and wrong password (no account enumeration).
    if (!user || !(await bcrypt.compare(password, user.password_hash))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    res.json({ user: publicUser(user), token: sign(user) });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal error" });
  }
});

app.get("/api/auth/me", (req, res) => {
  try {
    const p = jwt.verify((req.headers.authorization || "").replace(/^Bearer /, ""), SECRET);
    res.json({ user: { id: p.sub, email: p.email, name: p.name } });
  } catch {
    res.status(401).json({ error: "Unauthorized" });
  }
});

initDb()
  .then(() => {
    const server = app.listen(PORT, () => console.log(`auth-service listening on ${PORT}`));
    process.on("SIGTERM", () => server.close(() => pool.end().then(() => process.exit(0))));
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
