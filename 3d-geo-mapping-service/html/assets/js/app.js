// Karnataka in 3D — Google Maps 3D (Map3DElement) + Places API (New).
// Supports all 31 districts of Karnataka.

const DISTRICTS = window.KARNATAKA_DISTRICTS || [];
const CATS = { ...(window.KARNATAKA_CATEGORIES || {}), ...(window.UDUPI_CATEGORIES || {}) };

const DETAIL_FIELDS = [
  "displayName", "formattedAddress", "location", "rating", "userRatingCount",
  "regularOpeningHours", "nationalPhoneNumber", "websiteURI", "googleMapsURI",
  "editorialSummary", "photos", "types", "businessStatus", "primaryType",
];
const BASIC_FIELDS = ["displayName", "formattedAddress", "location", "googleMapsURI", "types"];

const EXPLORE = [
  { label: "Restaurants", types: ["restaurant"] },
  { label: "Cafés", types: ["cafe", "bakery"] },
  { label: "Shops", types: ["store", "supermarket", "shopping_mall", "clothing_store"] },
  { label: "Hotels", types: ["lodging"] },
  { label: "Temples", types: ["hindu_temple"] },
  { label: "Churches & mosques", types: ["church", "mosque"] },
  { label: "Hospitals", types: ["hospital", "pharmacy"] },
  { label: "Banks & ATMs", types: ["bank", "atm"] },
  { label: "Schools & colleges", types: ["school", "university"] },
  { label: "Sights", types: ["tourist_attraction", "museum", "park"] },
  { label: "Fuel", types: ["gas_station"] },
];

// ---------- small helpers ----------
const $ = (s, el = document) => el.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch {} },
  del(k) { try { localStorage.removeItem(k); } catch {} },
  json(k, fallback) { try { return JSON.parse(localStorage.getItem(k)) ?? fallback; } catch { return fallback; } },
};
const KEY_STORE = "karnataka3d.apiKey";
const PLACE_CACHE = "karnataka3d.placeCache.v6";
const placeCache = store.json(PLACE_CACHE, {});
const saveCache = () => store.set(PLACE_CACHE, JSON.stringify(placeCache));

// ---------- district state ----------
const DISTRICT_ALIASES = {
  "bengaluru": "bengaluru-urban",
  "bangalore": "bengaluru-urban",
  "bangalore-urban": "bengaluru-urban",
  "bangalore-rural": "bengaluru-rural",
  "blr": "bengaluru-urban",
  "mysore": "mysuru",
  "coorg": "kodagu",
  "mangaluru": "dakshina-kannada",
  "mangalore": "dakshina-kannada",
  "dk": "dakshina-kannada",
  "hampi": "vijayanagara",
  "bellary": "ballari",
  "belgaum": "belagavi",
  "bijapur": "vijayapura",
  "gulbarga": "kalaburagi",
  "shimoga": "shivamogga",
  "tumkur": "tumakuru",
};

const districtMap = new Map();
function getDistrictMap() {
  if (districtMap.size === 0 && Array.isArray(window.KARNATAKA_DISTRICTS)) {
    for (const d of window.KARNATAKA_DISTRICTS) districtMap.set(d.id, d);
  }
  return districtMap;
}

function resolveDistrictId(id) {
  if (!id) return "udupi";
  const clean = String(id).trim().toLowerCase();
  return DISTRICT_ALIASES[clean] || clean;
}

function getInitialDistrictId() {
  const map = getDistrictMap();
  const rawParam = new URLSearchParams(window.location.search).get("district");
  if (rawParam) {
    const resolved = resolveDistrictId(rawParam);
    if (map.has(resolved) || DISTRICTS.some((d) => d.id === resolved)) {
      return resolved;
    }
  }
  const saved = store.get("karnataka3d.activeDistrict");
  if (saved) {
    const resolved = resolveDistrictId(saved);
    if (map.has(resolved) || DISTRICTS.some((d) => d.id === resolved)) {
      return resolved;
    }
  }
  return "udupi";
}

function getDistrict(id) {
  const map = getDistrictMap();
  const canonId = resolveDistrictId(id);
  return (
    map.get(canonId) ||
    DISTRICTS.find((d) => d.id === canonId) ||
    map.get("udupi") ||
    window.KARNATAKA_DISTRICTS?.[0] || {
      id: "udupi",
      name: "Udupi",
      bounds: { north: 13.98, south: 13.05, east: 75.25, west: 74.55 },
      home: { center: { lat: 13.3445, lng: 74.7655, altitude: 0 }, range: 5200, tilt: 58, heading: 20 },
      landmarks: window.UDUPI_LANDMARKS || [],
    }
  );
}

let activeDistrictId = getInitialDistrictId();
let currentDistrict = getDistrict(activeDistrictId);

function toast(msg, ms = 3500) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.remove("hidden");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.add("hidden"), ms);
}
function distM(a, b) {
  const R = 6371000, r = Math.PI / 180;
  const dLat = (b.lat - a.lat) * r, dLng = (b.lng - a.lng) * r;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * r) * Math.cos(b.lat * r) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}
const fmtDist = (m) => (m < 1000 ? `${Math.round(m)} m` : `${(m / 1000).toFixed(1)} km`);
const ll = (p) => (p ? { lat: typeof p.lat === "function" ? p.lat() : p.lat, lng: typeof p.lng === "function" ? p.lng() : p.lng } : null);

const STOP = new Set(["sri", "shri", "the", "of", "and", "temple", "temples", "monument", "monuments", "site", "complex", "karnataka", "district", "road", "group", "unesco", "world", "heritage", "&"]);
const stem = (w) => (w.endsWith("s") && w.length > 3 && !w.endsWith("ss") ? w.slice(0, -1) : w);
const nameTokens = (s) => String(s || "").toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter((w) => w.length > 2 && !STOP.has(w)).map(stem);
function namesMatch(a, b) {
  const ta = nameTokens(String(a || "").split("(")[0].split(",")[0]);
  const tb = new Set(nameTokens(String(b || "").split("(")[0].split(",")[0]));
  if (!ta.length || !tb.size) return false;
  const hits = ta.filter((w) => tb.has(w));
  if (hits.some((w) => w.length >= 4)) return true;
  return hits.length >= Math.min(ta.length, tb.size, 2);
}
const prettyType = (t) => (t ? t.replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase()) : "");

// ---------- API key ----------
function getKey() {
  return (
    (window.UDUPI_CONFIG?.apiKey || window.CONFIG?.apiKey || "").trim() ||
    (store.get(KEY_STORE) || "").trim() ||
    (store.get("udupi3d.apiKey") || "").trim()
  );
}
function showSetup(errorMsg = "") {
  $("#setup").classList.remove("hidden");
  $("#setup-error").textContent = errorMsg;
  $("#setup-key").focus();
}
$("#setup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const k = $("#setup-key").value.trim();
  if (!/^AIza[0-9A-Za-z_\-]{30,}$/.test(k)) {
    $("#setup-error").textContent = "That doesn't look like a Google Maps API key (they start with “AIza”).";
    return;
  }
  store.set(KEY_STORE, k);
  location.reload();
});
$("#key-btn").addEventListener("click", () => {
  if (window.UDUPI_CONFIG?.apiKey || window.CONFIG?.apiKey) {
    toast("The key is set in config.js. Edit that file to change it.");
    return;
  }
  store.del(KEY_STORE);
  store.del("udupi3d.apiKey");
  location.reload();
});

window.gm_authFailure = () => {
  if (!window.UDUPI_CONFIG?.apiKey && !window.CONFIG?.apiKey) {
    store.del(KEY_STORE);
    store.del("udupi3d.apiKey");
  }
  showSetup("Google rejected that key. Check that Maps JavaScript API and Places API (New) are enabled for it, and that http://localhost is an allowed referrer.");
};

// Google's official dynamic library loader (inline bootstrap).
function loadGoogleMaps(key) {
  ((g) => { var h, a, k, p = "The Google Maps JavaScript API", c = "google", l = "importLibrary", q = "__ib__", m = document, b = window; b = b[c] || (b[c] = {}); var d = b.maps || (b.maps = {}), r = new Set(), e = new URLSearchParams(), u = () => h || (h = new Promise(async (f, n) => { await (a = m.createElement("script")); e.set("libraries", [...r] + ""); for (k in g) e.set(k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()), g[k]); e.set("callback", c + ".maps." + q); a.src = `https://maps.${c}apis.com/maps/api/js?` + e; d[q] = f; a.onerror = () => (h = n(Error(p + " could not load."))); a.nonce = m.querySelector("script[nonce]")?.nonce || ""; m.head.append(a); })); d[l] ? console.warn(p + " only loads once. Ignoring:", g) : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n))); })({ key, v: "weekly", language: "en", region: "IN" });
}

// ---------- state ----------
let map, Place, Marker3D, PinElement;
const landmarkMarkers = new Map(); // id -> marker
let exploreMarkers = [];
let activeExplore = null;
let touring = false;

// ---------- district dropdown & switching ----------
function buildDistrictSelect() {
  const select = $("#district-select");
  if (!select) return;
  select.innerHTML = "";

  const groups = {};
  for (const d of DISTRICTS) {
    const div = d.division || "Karnataka";
    (groups[div] ||= []).push(d);
  }

  for (const [div, dists] of Object.entries(groups)) {
    const optgroup = document.createElement("optgroup");
    optgroup.label = div;
    for (const d of dists) {
      const opt = document.createElement("option");
      opt.value = d.id;
      opt.textContent = d.name;
      if (d.id === activeDistrictId) opt.selected = true;
      optgroup.append(opt);
    }
    select.append(optgroup);
  }

  select.addEventListener("change", (e) => {
    setDistrict(e.target.value, { fly: true });
  });
}

async function setDistrict(id, { fly = true } = {}) {
  const dist = getDistrict(id);
  if (!dist) return;
  activeDistrictId = dist.id;
  currentDistrict = dist;
  store.set("karnataka3d.activeDistrict", dist.id);

  // Update URL search query
  try {
    const url = new URL(window.location.href);
    url.searchParams.set("district", dist.id);
    window.history.replaceState({}, "", url);
  } catch {}

  // Update title & labels
  const select = $("#district-select");
  if (select && select.value !== dist.id) select.value = dist.id;

  const titleEl = $("#district-title");
  if (titleEl) titleEl.textContent = dist.name;
  document.title = `${dist.name} in 3D — Karnataka`;

  const homeBtn = $("#home-btn");
  if (homeBtn) {
    const shortName = dist.name.split(" ")[0].replace(/[^a-zA-Z]/g, "");
    homeBtn.textContent = `⌂ ${shortName}`;
    homeBtn.title = `Back to ${dist.name}`;
  }

  // Update autocomplete
  updateSearchForDistrict(dist);

  // Clear explore & details
  clearExplore();
  $("#details")?.classList.add("hidden");
  setActiveListItem(null);

  // Rebuild landmark list
  buildLandmarkList();

  // Update markers and fly
  if (map) {
    addLandmarkMarkers();
    correctApproxLandmarks();
    if (fly) {
      await flyTo(dist.home.center, {
        range: dist.home.range,
        tilt: dist.home.tilt,
        heading: dist.home.heading,
      });
    }
  }
}

// ---------- boot ----------
buildDistrictSelect();
setDistrict(activeDistrictId, { fly: false });
buildLandmarkList();

const key = getKey();
if (!key) showSetup();
else start(key).catch((err) => {
  console.error(err);
  showSetup("Couldn't start the 3D map: " + (err?.message || err));
});

async function start(key) {
  loadGoogleMaps(key);
  const maps3d = await google.maps.importLibrary("maps3d");
  const places = await google.maps.importLibrary("places");
  const marker = await google.maps.importLibrary("marker");

  Place = places.Place;
  PinElement = marker.PinElement;
  Marker3D = maps3d.Marker3DInteractiveElement || maps3d.Marker3DElement;

  map = new maps3d.Map3DElement({
    ...currentDistrict.home,
    mode: "HYBRID",
    gestureHandling: "GREEDY",
    language: "en",
  });
  $("#map-host").append(map);
  map.addEventListener("gmp-error", (e) => console.warn("Map3D error", e));

  let loadTimer;
  map.addEventListener("gmp-steadychange", (e) => {
    clearTimeout(loadTimer);
    if (e.isSteady) $("#loading").classList.add("hidden");
    else loadTimer = setTimeout(() => $("#loading").classList.remove("hidden"), 1200);
  });
  map.addEventListener("gmp-click", onMapClick);
  map.addEventListener("pointerdown", () => { lastTarget = null; if (touring) stopTour(); });

  addLandmarkMarkers();
  buildExploreChips();
  buildSearch(places);
  wireControls();
  wireKeyboard();
  correctApproxLandmarks();
}

// ---------- camera ----------
function camNow() {
  const home = currentDistrict.home;
  const tilt = map.tilt ?? home.tilt, heading = map.heading ?? 0;
  const c = map.center;
  if (c && c.altitude > -300 && c.altitude < 9000) {
    return { lat: c.lat, lng: c.lng, range: map.range ?? home.range, tilt, heading };
  }
  const cp = map.cameraPosition;
  if (!cp) return { ...home.center, range: home.range, tilt, heading };
  const alt = Math.max(cp.altitude, 30);
  const t = (Math.min(tilt, 80) * Math.PI) / 180, h = (heading * Math.PI) / 180;
  const d = alt * Math.tan(t);
  const lat = cp.lat + (d * Math.cos(h)) / 111320;
  const lng = cp.lng + (d * Math.sin(h)) / (111320 * Math.cos((cp.lat * Math.PI) / 180));
  if (lastTarget && distM(lastTarget, { lat, lng }) < 1500) return { ...lastTarget, range: lastTarget.range, tilt, heading };
  return { lat, lng, range: alt / Math.cos(t), tilt, heading };
}
let lastTarget = null;

function calcSmoothDuration(fromPos, toPos, explicitDuration) {
  if (typeof explicitDuration === "number" && explicitDuration > 0) return explicitDuration;
  if (!fromPos?.lat || !toPos?.lat) return 4200;
  const d = distM(fromPos, toPos); // distance in meters
  if (d < 500) return 2600;       // within same block / neighborhood
  if (d < 2500) return 3400;      // across town / city quarter
  if (d < 12000) return 4200;     // across metro area
  if (d < 60000) return 5000;     // within district / neighboring towns
  if (d < 200000) return 5800;    // regional flight across multiple taluks
  return 6600;                    // state-wide flight (e.g. coastal to Bengaluru / Deccan)
}

function flyTo(pos, { range = 900, tilt = 52, heading, duration, altitude = 35 } = {}) {
  if (!map) return Promise.resolve();
  map.stopCameraAnimation?.();

  const c = camNow();
  const effectiveDuration = calcSmoothDuration(c, pos, duration);
  const safeAlt = typeof pos.altitude === "number" && pos.altitude < 100 ? Math.max(pos.altitude, 15) : altitude;
  lastTarget = { lat: pos.lat, lng: pos.lng, range, altitude: safeAlt };

  return new Promise((resolve) => {
    let finished = false;
    const done = () => {
      if (finished) return;
      finished = true;
      map.removeEventListener("gmp-animationend", done);
      resolve();
    };
    map.addEventListener("gmp-animationend", done);

    const endCamera = {
      center: { lat: pos.lat, lng: pos.lng, altitude: safeAlt },
      range,
      tilt,
      heading: heading ?? camNow().heading,
      altitudeMode: "RELATIVE_TO_GROUND",
    };

    try {
      map.flyCameraTo({
        endCamera,
        durationMillis: effectiveDuration,
      });
    } catch (err) {
      console.warn("flyCameraTo failed with altitudeMode, retrying standard:", err);
      try {
        const { altitudeMode: _, ...plainEndCamera } = endCamera;
        map.flyCameraTo({
          endCamera: plainEndCamera,
          durationMillis: effectiveDuration,
        });
      } catch (err2) {
        console.warn("flyCameraTo direct fallback:", err2);
        map.center = { lat: pos.lat, lng: pos.lng, altitude: safeAlt };
        map.range = range;
        map.tilt = tilt;
        done();
        return;
      }
    }
    setTimeout(done, effectiveDuration + 1200);
  });
}

function orbit(pos, { range, tilt, seconds = 30, altitude = 35 } = {}) {
  if (!map) return Promise.resolve();
  const c = camNow();
  const p = pos || c;
  const safeAlt = typeof p.altitude === "number" && p.altitude < 100 ? Math.max(p.altitude, 15) : altitude;

  return new Promise((resolve) => {
    let finished = false;
    const done = () => {
      if (finished) return;
      finished = true;
      map.removeEventListener("gmp-animationend", done);
      resolve();
    };
    map.addEventListener("gmp-animationend", done);

    const camera = {
      center: { lat: p.lat, lng: p.lng, altitude: safeAlt },
      range: range ?? Math.max(c.range, 900),
      tilt: tilt ?? Math.min(Math.max(c.tilt, 45), 56),
      heading: c.heading,
      altitudeMode: "RELATIVE_TO_GROUND",
    };

    try {
      map.flyCameraAround({
        camera,
        durationMillis: seconds * 1000,
        repeatCount: 1,
      });
    } catch (err) {
      console.warn("flyCameraAround failed, retrying standard:", err);
      try {
        const { altitudeMode: _, ...plainCamera } = camera;
        map.flyCameraAround({
          camera: plainCamera,
          durationMillis: seconds * 1000,
          repeatCount: 1,
        });
      } catch (err2) {
        console.warn("flyCameraAround direct fallback:", err2);
        done();
        return;
      }
    }
    setTimeout(done, seconds * 1000 + 1200);
  });
}

// ---------- landmarks ----------
function landmarkPos(lm) {
  const cached = placeCache[lm.id];
  if (cached?.lat && cached?.lng) {
    return { lat: cached.lat, lng: cached.lng };
  }
  return { lat: lm.lat, lng: lm.lng };
}

function buildLandmarkList(filter = "") {
  const list = $("#landmark-list");
  if (!list) return;
  const f = filter.trim().toLowerCase();
  list.innerHTML = "";
  const lms = currentDistrict.landmarks || [];

  for (const [catId, cat] of Object.entries(CATS)) {
    const items = lms.filter((l) => l.cat === catId && (!f || (l.name + " " + (l.blurb || "")).toLowerCase().includes(f)));
    if (!items.length) continue;
    const g = document.createElement("div");
    g.className = "lm-group";
    g.innerHTML = `<h3><span class="dot" style="background:${cat.color}"></span>${esc(cat.label)}</h3>`;
    for (const lm of items) {
      const b = document.createElement("button");
      b.className = "lm-item";
      b.dataset.id = lm.id;
      b.innerHTML = `<b>${esc(lm.name)}</b><small>${esc(lm.blurb || "")}</small>`;
      b.addEventListener("click", () => {
        if (!map) { showSetup(); return; }
        stopTour(); openLandmark(lm); closeSidebarMobile();
      });
      g.append(b);
    }
    list.append(g);
  }
  if (!list.children.length) {
    list.innerHTML = `<p class="hint">No landmark matches “${esc(filter)}”. Try the search box above to find any place in ${esc(currentDistrict.name)}.</p>`;
  }
}

function makePin(color, scale = 1) {
  if (!PinElement) return null;
  try { return new PinElement({ background: color, borderColor: "#ffffff", glyphColor: "#ffffff", scale }); } catch { return null; }
}

function clearLandmarkMarkers() {
  for (const [, mk] of landmarkMarkers.entries()) {
    try { mk.remove?.(); } catch {}
  }
  landmarkMarkers.clear();
}

function addLandmarkMarkers() {
  if (!map) return;
  clearLandmarkMarkers();
  const lms = currentDistrict.landmarks || [];
  for (const lm of lms) {
    const pos = landmarkPos(lm);
    const catColor = CATS[lm.cat]?.color || "#E8833A";
    const mk = new Marker3D({
      position: { lat: pos.lat, lng: pos.lng, altitude: lm.featured ? 70 : 45 },
      altitudeMode: "RELATIVE_TO_GROUND",
      extruded: true,
      label: lm.name,
    });
    const pin = makePin(catColor, lm.featured ? 1.25 : 1);
    if (pin) mk.append(pin);
    mk.addEventListener("gmp-click", (e) => { e.stopPropagation?.(); stopTour(); openLandmark(lm); });
    map.append(mk);
    landmarkMarkers.set(lm.id, mk);
  }
}

function setActiveListItem(id) {
  document.querySelectorAll(".lm-item").forEach((b) => b.classList.toggle("active", b.dataset.id === id));
}

const pendingLookups = {};
function resolveLandmark(lm) {
  if (placeCache[lm.id]?.id) return Promise.resolve(placeCache[lm.id]);
  return (pendingLookups[lm.id] ||= lookupLandmark(lm).finally(() => delete pendingLookups[lm.id]));
}
async function lookupLandmark(lm) {
  try {
    const isNature = lm.cat === "coast" || lm.cat === "nature";
    const isSprawling = isNature || /\b(reservoir|lake|dam|sanctuary|betta|hill|gudda|peak|forest|falls)\b/i.test(lm.name);
    const searchRadius = isSprawling ? 5000 : 3000;
    const maxDist = isSprawling ? 6000 : 3500;

    const { places } = await Place.searchByText({
      textQuery: lm.query || `${lm.name} ${currentDistrict.name}`,
      fields: ["id", "displayName", "location", "types"],
      locationBias: { center: { lat: lm.lat, lng: lm.lng }, radius: searchRadius },
      maxResultCount: 5,
      region: "in",
    });
    if (!places?.length) return null;

    // Filter to candidates within acceptable proximity of the curated site
    const candidates = [];
    for (const p of places) {
      const loc = ll(p.location);
      if (!loc) continue;
      const d = distM(loc, lm);
      if (d > maxDist) continue;

      // Reject commercial lodging / eateries unless the landmark itself is in that category
      const pName = (p.displayName || "").toLowerCase();
      const pTypes = p.types || [];
      const isFoodOrStay = /\b(hotel|restaurant|resort|lodge|residency|dhaba|boarding|rooms|inn|homestay|bar|bhojanalaya)\b/i.test(pName) ||
        pTypes.some((t) => ["lodging", "restaurant", "food", "cafe", "bar"].includes(t));
      if (isFoodOrStay && lm.cat !== "city") continue;

      candidates.push({ place: p, loc, dist: d });
    }
    if (!candidates.length) return null;

    // Rank candidates by name similarity and proximity
    let best = null;
    let bestScore = -1;
    for (const cand of candidates) {
      const nameMatch = namesMatch(lm.name, cand.place.displayName) ? 3 : 0;
      const queryMatch = namesMatch(lm.query || "", cand.place.displayName) ? 2 : 0;
      const distScore = Math.max(0, 1 - cand.dist / maxDist);
      const score = nameMatch + queryMatch + distScore;
      if (score > bestScore) {
        bestScore = score;
        best = cand;
      }
    }

    // Only accept if there is reasonable name alignment
    if (!best || bestScore < 1.0) {
      console.warn("No confident Places match for", lm.name);
      return null;
    }

    // Cache verified Google Place ID and pinpoint coordinates
    placeCache[lm.id] = { id: best.place.id, lat: best.loc.lat, lng: best.loc.lng };
    saveCache();
    return placeCache[lm.id];
  } catch (err) {
    console.warn("Places lookup failed for", lm.name, err);
    return null;
  }
}

async function correctApproxLandmarks() {
  const lms = currentDistrict.landmarks || [];
  for (const lm of lms) {
    const r = placeCache[lm.id];
    if (r?.lat && r?.lng) {
      const mk = landmarkMarkers.get(lm.id);
      if (mk) mk.position = { lat: r.lat, lng: r.lng, altitude: lm.featured ? 70 : 45 };
    }
  }
}

async function openLandmark(lm, { fly = true } = {}) {
  setActiveListItem(lm.id);
  renderDetails({ landmark: lm, loading: true });

  const isNature = lm.cat === "coast" || lm.cat === "nature";
  const isHillOrFort = isNature ||
    /\b(fort|betta|hill|gudda|peak|parvatha|valley|canyon|reservoir|dam|falls|sanctuary)\b/i.test(lm.name);
  const targetRange = isHillOrFort ? 1400 : (lm.featured ? 1050 : 850);
  const targetTilt = isHillOrFort ? 48 : 52;

  let targetPos = landmarkPos(lm);
  if (fly) flyTo(targetPos, { range: targetRange, tilt: targetTilt, altitude: 35 });

  const r = await resolveLandmark(lm);
  if (r?.lat && r?.lng) {
    const newPos = { lat: r.lat, lng: r.lng };
    const mk = landmarkMarkers.get(lm.id);
    if (mk) {
      mk.position = { lat: newPos.lat, lng: newPos.lng, altitude: lm.featured ? 70 : 45 };
    }
    // If the precise Google Place pin differs by more than 15 meters, center camera directly on it
    if (fly && distM(targetPos, newPos) > 15) {
      flyTo(newPos, { range: targetRange, tilt: targetTilt, altitude: 35, duration: 1000 });
    }
  }

  let place = null;
  if (r?.id) place = await fetchDetails(new Place({ id: r.id }));
  renderDetails({ landmark: lm, place });
}

// ---------- place details ----------
async function fetchDetails(place) {
  try {
    await place.fetchFields({ fields: DETAIL_FIELDS });
  } catch (err) {
    console.warn("Full details failed, retrying basic fields", err);
    try { await place.fetchFields({ fields: BASIC_FIELDS }); } catch (e2) { console.warn(e2); return null; }
  }
  return place;
}

async function openPlace(place, { fly = true } = {}) {
  setActiveListItem(null);
  renderDetails({ loading: true, title: place.displayName || "Loading…" });
  const p = await fetchDetails(place);
  if (!p) { renderDetails({ error: "Couldn't load details for this place." }); return; }
  const loc = ll(p.location);
  const lms = currentDistrict.landmarks || [];
  const lm = lms.find((l) => placeCache[l.id]?.id === p.id)
    || (loc && lms.find((l) => distM(loc, landmarkPos(l)) < 40))
    || (loc && lms.find((l) => distM(loc, landmarkPos(l)) < 800 && namesMatch(l.name, p.displayName)));
  if (fly && loc) {
    const c = camNow();
    flyTo(loc, { range: Math.min(Math.max(c.range, 650), 1050), tilt: 52, duration: 1800, altitude: 30 });
  }
  renderDetails({ landmark: lm, place: p });
}

function renderDetails({ landmark: lm, place: p, loading, error, title, html }) {
  const panel = $("#details");
  const body = $("#details-body");
  panel.classList.remove("hidden");
  panel.scrollTop = 0;
  if (error) { body.innerHTML = `<div class="d-main"><p class="error">${esc(error)}</p></div>`; return; }
  if (html) { body.innerHTML = html; return; }

  const cat = lm ? CATS[lm.cat] : null;
  const name = lm?.name || p?.displayName || title || "";
  const photos = (p?.photos || []).slice(0, 8);
  const loc = (lm ? landmarkPos(lm) : null) || ll(p?.location);

  let out = "";
  if (photos.length) {
    out += `<img class="d-photo" id="d-photo" alt="${esc(name)}" src="${esc(photos[0].getURI({ maxWidth: 800, maxHeight: 500 }))}">`;
    out += `<div class="d-attr" id="d-attr">${photoAttr(photos[0])}</div>`;
    if (photos.length > 1) {
      out += `<div class="d-strip">${photos.map((ph, i) => `<img data-i="${i}" class="${i ? "" : "on"}" alt="Photo ${i + 1} of ${esc(name)}" src="${esc(ph.getURI({ maxWidth: 200, maxHeight: 140 }))}">`).join("")}</div>`;
    }
  }
  out += `<div class="d-main">`;
  if (cat) out += `<div class="d-cat"><span class="dot" style="background:${cat.color}"></span>${esc(cat.label)}</div>`;
  else if (p?.primaryType || p?.types?.length) out += `<div class="d-cat">${esc(prettyType(p.primaryType || p.types[0]))}</div>`;
  out += `<h2 class="d-title">${esc(name)}</h2>`;
  if (p?.rating) out += `<div class="d-rating">★ ${p.rating.toFixed(1)} <span>(${(p.userRatingCount || 0).toLocaleString("en-IN")} Google reviews)</span></div>`;
  if (p?.businessStatus && p.businessStatus !== "OPERATIONAL") out += `<p class="error">${esc(prettyType(p.businessStatus.toLowerCase()))}</p>`;

  if (lm) {
    out += `<p class="d-blurb">${esc(lm.blurb)}</p>`;
    if (lm.details?.length) out += `<div class="d-text">${lm.details.map((d) => `<p>${esc(d)}</p>`).join("")}</div>`;
    if (lm.owner) out += ownerBlock(lm.owner);
  }
  const summary = p?.editorialSummary;
  if (summary && (!lm || !lm.blurb.toLowerCase().includes(summary.toLowerCase().slice(0, 20)))) {
    out += `<p class="d-blurb">${esc(summary)}</p>`;
  }

  if (loading) out += `<p class="d-loading">Loading Google photos and details…</p>`;

  const rows = [];
  if (p?.formattedAddress) rows.push(["Address", esc(p.formattedAddress)]);
  const hours = p?.regularOpeningHours?.weekdayDescriptions;
  if (hours?.length) rows.push(["Hours", `<ul class="d-hours">${hours.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>`]);
  if (p?.nationalPhoneNumber) rows.push(["Phone", `<a href="tel:${esc(p.nationalPhoneNumber.replace(/\s/g, ""))}">${esc(p.nationalPhoneNumber)}</a>`]);
  if (p?.websiteURI) rows.push(["Website", `<a href="${esc(p.websiteURI)}" target="_blank" rel="noopener">${esc(p.websiteURI.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""))}</a>`]);
  if (loc) rows.push(["Location", `${loc.lat.toFixed(5)}, ${loc.lng.toFixed(5)}`]);
  if (rows.length) out += `<div class="d-rows">${rows.map(([k, v]) => `<div class="d-row"><div class="k">${k}</div><div class="v">${v}</div></div>`).join("")}</div>`;

  if (loc) {
    const gmaps = p?.googleMapsURI || `https://www.google.com/maps/search/?api=1&query=${loc.lat},${loc.lng}`;
    out += `<div class="d-actions">
      <button class="btn primary" id="d-orbit">⟳ Orbit in 3D</button>
      <button class="btn" id="d-street">Street View ↗</button>
      <a class="btn" href="${esc(gmaps)}" target="_blank" rel="noopener">Open in Google Maps</a>
      <a class="btn" href="https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}" target="_blank" rel="noopener">Directions</a>
    </div>`;
  }
  if (loc) out += landRecordsBlock(loc);
  if (p) out += `<p class="d-src">Photos, ratings and hours from Google Maps.${lm ? " History and notes curated for this site." : ""}</p>`;
  out += `</div>`;
  body.innerHTML = out;

  // photo strip
  body.querySelectorAll(".d-strip img").forEach((img) => img.addEventListener("click", () => {
    const ph = photos[+img.dataset.i];
    $("#d-photo").src = ph.getURI({ maxWidth: 800, maxHeight: 500 });
    $("#d-attr").innerHTML = photoAttr(ph);
    body.querySelectorAll(".d-strip img").forEach((x) => x.classList.toggle("on", x === img));
  }));
  $("#d-orbit")?.addEventListener("click", () => {
    const isNature = lm?.cat === "coast" || lm?.cat === "nature";
    const range = isNature ? 1400 : 900;
    flyTo(loc, { range, tilt: 52, duration: 1500, altitude: 35 }).then(() => orbit(loc, { range, tilt: 52, altitude: 35 }));
  });
  $("#d-street")?.addEventListener("click", () => showStreetView(loc));
}

function ownerBlock(o) {
  const src = (o.src || []).map((x) => `<a href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.label)}</a>`).join(" · ");
  return `<div class="d-owner">
    <div class="d-owner-k">Owned / run by</div>
    <div class="d-owner-v"><b>${esc(o.by)}</b>${o.weak ? ` <span class="tag">unconfirmed</span>` : ""}</div>
    ${o.note ? `<p>${esc(o.note)}</p>` : ""}
    ${src ? `<p class="d-owner-src">Source: ${src}</p>` : ""}
  </div>`;
}

function landRecordsBlock(loc) {
  const link = (href, label) => `<a class="btn" href="${href}" target="_blank" rel="noopener">${label} ↗</a>`;
  const distName = currentDistrict?.name || "Karnataka";
  return `<details class="d-land">
    <summary>Land records (Government of Karnataka)</summary>
    <p>Spot: <b>${loc.lat.toFixed(5)}, ${loc.lng.toFixed(5)}</b>. To look up this property's official record:</p>
    <ol>
      <li>Open the <b>Dishaank</b> app at this spot to get its survey number.</li>
      <li>Enter it on <b>Bhoomi</b> (View RTC: ${esc(distName)} district, then taluk, hobli, village) to see the record of rights.</li>
      <li>For registered sales and mortgages, use <b>Kaveri 2.0</b>. Town properties are recorded with the local municipal council (<b>e-Aasthi</b>).</li>
    </ol>
    <div class="d-actions">
      ${link("https://mapps.mgov.gov.in/details?appid=2100", "Dishaank app")}
      ${link("https://landrecords.karnataka.gov.in/", "Bhoomi RTC")}
      ${link("https://kaveri.karnataka.gov.in/", "Kaveri 2.0")}
      ${link("https://eaasthi.karnataka.gov.in/", "e-Aasthi")}
    </div>
    <p class="d-owner-src">Records can be out of date, and temples, campuses and government sites are usually held by the institution itself.</p>
  </details>`;
}

function photoAttr(ph) {
  const a = ph?.authorAttributions?.[0];
  if (!a) return "";
  const n = esc(a.displayName || "Google user");
  return a.uri ? `Photo: <a href="${esc(a.uri)}" target="_blank" rel="noopener">${n}</a>` : `Photo: ${n}`;
}

function showStreetView(loc) {
  window.open(`https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=${loc.lat},${loc.lng}`, "_blank", "noopener");
}

// ---------- clicking the map ----------
async function onMapClick(e) {
  if (touring) stopTour();
  if (e.placeId) {
    e.preventDefault();
    try {
      const place = await e.fetchPlace();
      openPlace(place, { fly: false });
    } catch (err) {
      console.warn(err);
      renderDetails({ error: "Couldn't load that place." });
    }
    return;
  }
  if (e.position) whatsHere(ll(e.position));
}

async function whatsHere(pos) {
  setActiveListItem(null);
  renderDetails({ html: `<div class="d-main"><div class="d-cat">This spot</div><h2 class="d-title">${pos.lat.toFixed(5)}, ${pos.lng.toFixed(5)}</h2><p class="d-loading">Finding nearby buildings and businesses…</p></div>` });
  let places = [];
  const radius = 250;
  try {
    const res = await Place.searchNearby({
      fields: ["id", "displayName", "location", "primaryType", "types", "formattedAddress"],
      locationRestriction: { center: pos, radius },
      maxResultCount: 20,
      rankPreference: google.maps.places.SearchNearbyRankPreference?.DISTANCE ?? "DISTANCE",
    });
    places = res.places || [];
  } catch (err) { console.warn(err); }

  const gmaps = `https://www.google.com/maps/search/?api=1&query=${pos.lat},${pos.lng}`;
  let html = `<div class="d-main"><div class="d-cat">This spot</div><h2 class="d-title">${pos.lat.toFixed(5)}, ${pos.lng.toFixed(5)}</h2>`;
  html += places.length
    ? `<p class="d-blurb">${places.length} place${places.length > 1 ? "s" : ""} on Google Maps within ${radius} m:</p><div class="near-list">${places.map((p, i) => `
        <button class="near-item" data-i="${i}"><span><b>${esc(p.displayName)}</b><small>${esc(prettyType(p.primaryType || p.types?.[0]))}</small></span><span class="dist">${fmtDist(distM(pos, ll(p.location)))}</span></button>`).join("")}</div>`
    : `<p class="d-blurb">Google Maps lists no businesses or landmarks within ${radius} m of this spot.</p>`;
  html += `<div class="d-actions"><button class="btn" id="d-street">Street View ↗</button><a class="btn" href="${gmaps}" target="_blank" rel="noopener">Open in Google Maps</a></div></div>`;
  renderDetails({ html });
  $("#details-body").querySelectorAll(".near-item").forEach((b) => b.addEventListener("click", () => openPlace(places[+b.dataset.i])));
  $("#d-street")?.addEventListener("click", () => showStreetView(pos));
}

// ---------- explore nearby (shops, restaurants, …) ----------
function buildExploreChips() {
  const wrap = $("#explore-chips");
  wrap.innerHTML = "";
  for (const ex of EXPLORE) {
    const b = document.createElement("button");
    b.className = "chip";
    b.textContent = ex.label;
    b.addEventListener("click", () => toggleExplore(ex, b));
    wrap.append(b);
  }
}

function clearExplore() {
  exploreMarkers.forEach((m) => m.remove());
  exploreMarkers = [];
  document.querySelectorAll(".chip").forEach((c) => c.classList.remove("on"));
  $("#explore-status").textContent = "";
  activeExplore = null;
}

async function toggleExplore(ex, chip) {
  if (activeExplore === ex) { clearExplore(); return; }
  clearExplore();
  activeExplore = ex;
  chip.classList.add("on");
  const c = camNow();
  const radius = Math.round(Math.min(Math.max(c.range * 0.8, 500), 8000));
  $("#explore-status").textContent = `Searching ${ex.label.toLowerCase()} within ${fmtDist(radius)} of the view centre…`;
  try {
    // If the category has multiple types, split into two queries to fetch up to 35-40 locations
    const typeBatches = ex.types.length > 2
      ? [ex.types.slice(0, 2), ex.types.slice(2)]
      : [ex.types];

    const results = await Promise.all(typeBatches.map((types) =>
      Place.searchNearby({
        fields: ["id", "displayName", "location", "primaryType", "types", "rating"],
        locationRestriction: { center: { lat: c.lat, lng: c.lng }, radius },
        includedTypes: types,
        maxResultCount: 20,
      }).then((r) => r.places || []).catch(() => [])
    ));

    if (activeExplore !== ex) return;

    // Deduplicate by place ID
    const seen = new Set();
    const places = [];
    for (const batch of results) {
      for (const p of batch) {
        if (p.id && !seen.has(p.id)) {
          seen.add(p.id);
          places.push(p);
        }
      }
    }

    for (const p of places) {
      const loc = ll(p.location);
      if (!loc) continue;
      const mk = new Marker3D({ position: { lat: loc.lat, lng: loc.lng, altitude: 25 }, altitudeMode: "RELATIVE_TO_GROUND", extruded: true, label: p.displayName });
      const pin = makePin("#E0457B", 0.8);
      if (pin) mk.append(pin);
      mk.addEventListener("gmp-click", (e) => { e.stopPropagation?.(); openPlace(p, { fly: false }); });
      map.append(mk);
      exploreMarkers.push(mk);
    }
    const n = places.length;
    $("#explore-status").textContent = n
      ? `${n} ${ex.label.toLowerCase()} located. Click any pin for 3D view and details.`
      : `No ${ex.label.toLowerCase()} found here. Move the map and try again.`;
  } catch (err) {
    console.warn(err);
    $("#explore-status").textContent = "Search failed. Check that Places API (New) is enabled for your key.";
  }
}

// ---------- search ----------
function buildSearch(places) {
  updateSearchForDistrict(currentDistrict, places);
}

function updateSearchForDistrict(dist, placesLib) {
  const slot = $("#search-slot");
  if (!slot) return;
  const places = placesLib || window.google?.maps?.places;
  const Ctor = places?.PlaceAutocompleteElement;
  if (!Ctor) return;

  slot.innerHTML = "";
  let ac;
  try {
    ac = new Ctor({ locationRestriction: dist.bounds, includedRegionCodes: ["in"] });
  } catch {
    ac = new Ctor({});
  }
  ac.setAttribute("placeholder", `Search any place, shop or building in ${dist.name}`);
  slot.append(ac);

  ac.addEventListener("gmp-select", async (ev) => {
    const place = ev.placePrediction?.toPlace ? ev.placePrediction.toPlace() : ev.place;
    if (place) { stopTour(); openPlace(place); closeSidebarMobile(); }
  });
  ac.addEventListener("gmp-placeselect", (ev) => { if (ev.place) { stopTour(); openPlace(ev.place); closeSidebarMobile(); } });
}

// ---------- controls ----------
function wireControls() {
  document.querySelectorAll(".seg button").forEach((b) => b.addEventListener("click", () => {
    map.mode = b.dataset.mode;
    document.querySelectorAll(".seg button").forEach((x) => x.classList.toggle("on", x === b));
  }));
  $("#home-btn").addEventListener("click", () => {
    stopTour();
    flyTo(currentDistrict.home.center, {
      range: currentDistrict.home.range,
      tilt: currentDistrict.home.tilt,
      heading: currentDistrict.home.heading,
    });
  });
  $("#orbit-btn").addEventListener("click", () => { stopTour(); orbit(); });
  $("#topdown-btn").addEventListener("click", () => {
    stopTour();
    const c = camNow();
    flyTo(c, { range: c.range, tilt: c.tilt > 20 ? 0 : 52, heading: c.heading, duration: 1600 });
  });
  $("#details-close").addEventListener("click", () => { $("#details").classList.add("hidden"); setActiveListItem(null); });
  $("#lm-filter").addEventListener("input", (e) => buildLandmarkList(e.target.value));
  $("#tour-btn").addEventListener("click", () => (touring ? stopTour() : startTour()));
  $("#help-btn").addEventListener("click", () => $("#help").classList.remove("hidden"));
  document.querySelectorAll(".modal [data-close]").forEach((b) => b.addEventListener("click", () => b.closest(".modal").classList.add("hidden")));
  $("#help").addEventListener("click", (e) => { if (e.target.id === "help") e.target.classList.add("hidden"); });
  if (store.get("udupi3d.noteSeen") || store.get("karnataka3d.noteSeen")) $("#note").classList.add("hidden");
  $("#note-close").addEventListener("click", () => {
    $("#note").classList.add("hidden");
    store.set("karnataka3d.noteSeen", "1");
  });
  $("#sidebar-open").addEventListener("click", () => $("#sidebar").classList.add("open"));
  $("#sidebar-close").addEventListener("click", closeSidebarMobile);
}
function closeSidebarMobile() { $("#sidebar").classList.remove("open"); }

// ---------- keyboard flying ----------
function wireKeyboard() {
  const held = new Set();
  const tapped = new Set();
  const KEYS = new Set(["w", "a", "s", "d", "q", "e", "r", "f", "z", "x", "arrowup", "arrowdown", "arrowleft", "arrowright"]);
  const typing = (el) => el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable || el.tagName?.startsWith("GMP-PLACE"));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { document.querySelectorAll(".modal").forEach((m) => { if (m.id !== "setup") m.classList.add("hidden"); }); return; }
    if (typing(document.activeElement) || e.metaKey || e.ctrlKey || e.altKey) return;
    const k = e.key.toLowerCase();
    if (!KEYS.has(k)) return;
    e.preventDefault();
    if (touring) stopTour();
    if (!held.size && !tapped.size) { map.stopCameraAnimation?.(); last = performance.now(); requestAnimationFrame(step); }
    held.add(k);
    tapped.add(k);
  });
  document.addEventListener("keyup", (e) => held.delete(e.key.toLowerCase()));
  window.addEventListener("blur", () => held.clear());

  let last = 0;
  function step(t) {
    const active = new Set([...held, ...tapped]);
    if (!active.size) return;
    const tapOnly = [...tapped].some((k) => !held.has(k));
    tapped.clear();
    const dt = Math.max(Math.min((t - last) / 1000, 0.1), tapOnly ? 0.12 : 0);
    last = t;
    const c = camNow();
    const speed = c.range * 0.9 * dt;
    let fwd = 0, side = 0;
    if (active.has("w") || active.has("arrowup")) fwd += 1;
    if (active.has("s") || active.has("arrowdown")) fwd -= 1;
    if (active.has("d") || active.has("arrowright")) side += 1;
    if (active.has("a") || active.has("arrowleft")) side -= 1;
    let { heading, tilt, range } = c;
    if (active.has("q")) heading -= 60 * dt;
    if (active.has("e")) heading += 60 * dt;
    if (active.has("r")) tilt = Math.min(tilt + 40 * dt, 85);
    if (active.has("f")) tilt = Math.max(tilt - 40 * dt, 0);
    if (active.has("z")) range = Math.max(range * (1 - 1.2 * dt), 60);
    if (active.has("x")) range = Math.min(range * (1 + 1.2 * dt), 200000);
    const h = (heading * Math.PI) / 180;
    const north = (fwd * Math.cos(h) - side * Math.sin(h)) * speed;
    const east = (fwd * Math.sin(h) + side * Math.cos(h)) * speed;
    const lat = c.lat + north / 111320;
    const lng = c.lng + east / (111320 * Math.cos((c.lat * Math.PI) / 180));
    map.center = { lat, lng, altitude: 0 };
    lastTarget = { lat, lng, range };
    map.heading = (heading + 360) % 360;
    map.tilt = tilt;
    map.range = range;
    requestAnimationFrame(step);
  }
}

// ---------- guided tour ----------
let tourId = 0;
async function startTour() {
  const me = ++tourId;
  touring = true;
  $("#tour-btn").textContent = "■ Stop tour";
  const stops = (currentDistrict.landmarks || []).filter((l) => l.featured);
  const tourList = stops.length ? stops : (currentDistrict.landmarks || []).slice(0, 5);
  for (const lm of tourList) {
    if (me !== tourId) return;
    openLandmark(lm, { fly: false });
    const pos = landmarkPos(lm);
    const isNature = lm.cat === "coast" || lm.cat === "nature";
    const isHillOrFort = isNature ||
      /\b(fort|betta|hill|gudda|peak|parvatha|valley|canyon|reservoir|dam|falls|sanctuary)\b/i.test(lm.name);
    const range = isHillOrFort ? 1400 : (lm.featured ? 1050 : 900);
    const tilt = isHillOrFort ? 48 : 52;
    await flyTo(pos, { range, tilt, duration: 3500, altitude: 35 });
    if (me !== tourId) return;
    await orbit(pos, { range, tilt, seconds: 14, altitude: 35 });
  }
  if (me === tourId) stopTour();
}
function stopTour() {
  if (!touring) return;
  touring = false;
  tourId++;
  map?.stopCameraAnimation?.();
  $("#tour-btn").textContent = "▶ Start tour";
}
