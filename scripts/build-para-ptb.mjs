#!/usr/bin/env node
// =============================================================================
// PINKY AND THE BRAIN — Life Operating System Builder
// =============================================================================
// Architecture: Hybrid PPV (Pillars, Pipelines, Vaults) + PARA
// Inspired by: August Bradley, Tiago Forte, best-in-class Life OS systems
//
// STRUCTURE:
// ├── 🧭 Command Center (Home Dashboard)
// ├── 🌟 Vision & North Star (Identity, Values, Life Design)
// ├── 🎯 Goals Hub (Annual/Quarterly goals with OKR structure)
// ├── 📋 Projects Hub (Active projects linked to goals)
// ├── ✅ Action Items (Next actions and task management)
// ├── 📅 Review System
// │   ├── Quarterly Review
// │   ├── Monthly Check-in
// │   └── Weekly Review
// ├── 📓 Journal (Daily reflection + gratitude)
// ├── 🧠 Knowledge (Zettelkasten-inspired knowledge base)
// ├── 💝 Relationships (People, connections, social)
// ├── 🏠 Household (Home management)
// ├── 💪 Health (Fitness, nutrition, mental health, habits)
// ├── 💰 Finances (Budget, income, investments, goals)
// ├── 👔 Professional (Career, skills, network, opportunities)
// ├── 📚 Resources (Reference library, templates, SOPs)
// ├── 📦 Archives (Completed work, lessons learned)
// └── 📥 Inbox (Capture zone)
// =============================================================================

import { loginWithPassword } from "/opt/homebrew/lib/node_modules/affine-mcp-server/dist/auth.js";
import {
  wsUrlFromGraphQLEndpoint, connectWorkspaceSocket, joinWorkspace,
  loadDoc, pushDocUpdate,
} from "/opt/homebrew/lib/node_modules/affine-mcp-server/dist/ws.js";
import * as Y from "/opt/homebrew/lib/node_modules/affine-mcp-server/node_modules/yjs/dist/yjs.mjs";

const BASE = "https://pkm.mouthygeese.com";
const WS = "70aed209-ef2c-4e7c-a163-d6ac79d9a96f";

console.log("🔐 Signing in...");
const { cookieHeader } = await loginWithPassword(BASE, "ziggy@mouthygeese.com", "suxvIm-nipnod-sygro0");
const wsUrl = wsUrlFromGraphQLEndpoint(`${BASE}/graphql`);
const socket = await connectWorkspaceSocket(wsUrl, cookieHeader);
await joinWorkspace(socket, WS);
console.log("✅ Connected!\n");

// === UTILITIES ===
const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function genId() { let s=""; for(let i=0;i<10;i++) s+=chars[Math.floor(Math.random()*chars.length)]; return s; }
function setSys(m,id,f) { m.set("sys:id",id); m.set("sys:flavour",f); m.set("sys:version",f==="affine:page"?2:1); }

// Block helpers
const p = (text) => ({ type: "paragraph", text });
const h1 = (text) => ({ type: "h1", text });
const h2 = (text) => ({ type: "h2", text });
const h3 = (text) => ({ type: "h3", text });
const h4 = (text) => ({ type: "h4", text });
const bullet = (text) => ({ type: "bulleted", text });
const numbered = (text) => ({ type: "numbered", text });
const todo = (text, checked = false) => ({ type: "todo", text, checked });
const divider = () => ({ type: "divider" });
const quote = (text) => ({ type: "quote", text });
const code = (text, lang = "txt") => ({ type: "code", text, lang });
const callout = (text) => ({ type: "callout", text });

function buildDocYdoc(title, contentBlocks) {
  const docId = genId();
  const ydoc = new Y.Doc();
  const blocks = ydoc.getMap("blocks");

  const pageId = genId();
  const page = new Y.Map();
  setSys(page, pageId, "affine:page");
  const titleText = new Y.Text();
  titleText.insert(0, title);
  page.set("prop:title", titleText);
  const children = new Y.Array();
  page.set("sys:children", children);
  blocks.set(pageId, page);

  const surfaceId = genId();
  const surface = new Y.Map();
  setSys(surface, surfaceId, "affine:surface");
  surface.set("sys:parent", pageId);
  surface.set("sys:children", new Y.Array());
  const elements = new Y.Map();
  elements.set("type", "$blocksuite:internal:native$");
  elements.set("value", new Y.Map());
  surface.set("prop:elements", elements);
  blocks.set(surfaceId, surface);
  children.push([surfaceId]);

  const noteId = genId();
  const note = new Y.Map();
  setSys(note, noteId, "affine:note");
  note.set("sys:parent", pageId);
  note.set("prop:displayMode", "both");
  note.set("prop:xywh", "[0,0,800,95]");
  note.set("prop:index", "a0");
  note.set("prop:hidden", false);
  const bg = new Y.Map();
  bg.set("light", "#ffffff"); bg.set("dark", "#252525");
  note.set("prop:background", bg);
  const noteChildren = new Y.Array();
  note.set("sys:children", noteChildren);
  blocks.set(noteId, note);
  children.push([noteId]);

  for (const b of contentBlocks) {
    const bId = genId();
    const block = new Y.Map();

    if (b.type === "paragraph" || b.type === "text") {
      setSys(block, bId, "affine:paragraph");
      block.set("prop:type", "text");
      const t = new Y.Text(); t.insert(0, b.text || ""); block.set("prop:text", t);
    } else if (b.type.startsWith("h") && b.type.length === 2) {
      setSys(block, bId, "affine:paragraph");
      block.set("prop:type", b.type);
      const t = new Y.Text(); t.insert(0, b.text || ""); block.set("prop:text", t);
    } else if (b.type === "bulleted" || b.type === "numbered" || b.type === "todo") {
      setSys(block, bId, "affine:list");
      block.set("prop:type", b.type);
      const t = new Y.Text(); t.insert(0, b.text || ""); block.set("prop:text", t);
      if (b.type === "todo") block.set("prop:checked", b.checked || false);
    } else if (b.type === "divider") {
      setSys(block, bId, "affine:divider");
    } else if (b.type === "quote") {
      setSys(block, bId, "affine:paragraph");
      block.set("prop:type", "quote");
      const t = new Y.Text(); t.insert(0, b.text || ""); block.set("prop:text", t);
    } else if (b.type === "code") {
      setSys(block, bId, "affine:code");
      block.set("prop:language", b.lang || "txt");
      const t = new Y.Text(); t.insert(0, b.text || ""); block.set("prop:text", t);
    } else if (b.type === "callout") {
      setSys(block, bId, "affine:paragraph");
      block.set("prop:type", "quote");
      const t = new Y.Text(); t.insert(0, "💡 " + (b.text || "")); block.set("prop:text", t);
    }

    block.set("sys:parent", noteId);
    block.set("sys:children", new Y.Array());
    blocks.set(bId, block);
    noteChildren.push([bId]);
  }

  const meta = ydoc.getMap("meta");
  meta.set("id", docId);
  meta.set("title", title);
  meta.set("createDate", Date.now());
  meta.set("tags", new Y.Array());

  return { docId, ydoc, title };
}

const createdDocs = {};

async function createAndPush(title, contentBlocks) {
  const { docId, ydoc } = buildDocYdoc(title, contentBlocks);
  const update = Y.encodeStateAsUpdate(ydoc);
  await pushDocUpdate(socket, WS, docId, Buffer.from(update).toString("base64"));

  // Register in workspace
  const wsDoc = new Y.Doc();
  const snapshot = await loadDoc(socket, WS, WS);
  if (snapshot.missing) Y.applyUpdate(wsDoc, Buffer.from(snapshot.missing, "base64"));
  const prevSV = Y.encodeStateVector(wsDoc);
  const wsMeta = wsDoc.getMap("meta");
  let pages = wsMeta.get("pages");
  if (!pages) { pages = new Y.Array(); wsMeta.set("pages", pages); }
  const entry = new Y.Map();
  entry.set("id", docId);
  entry.set("title", title);
  entry.set("createDate", Date.now());
  entry.set("tags", new Y.Array());
  pages.push([entry]);
  const wsDelta = Y.encodeStateAsUpdate(wsDoc, prevSV);
  await pushDocUpdate(socket, WS, WS, Buffer.from(wsDelta).toString("base64"));

  console.log(`  ✅ ${title} → ${docId}`);
  createdDocs[title] = docId;
  return docId;
}

// Append to existing doc
async function appendToDoc(docId, contentBlocks) {
  const snap = await loadDoc(socket, WS, docId);
  const doc = new Y.Doc();
  if (snap.missing) Y.applyUpdate(doc, Buffer.from(snap.missing, "base64"));
  const prevSV = Y.encodeStateVector(doc);
  const blocks = doc.getMap("blocks");

  let noteId = null, noteChildren = null;
  blocks.forEach((v, k) => {
    if (v.get?.("sys:flavour") === "affine:note") {
      noteId = k;
      noteChildren = v.get("sys:children");
    }
  });
  if (!noteId) { console.log(`  ⚠️ No note in ${docId}`); return; }

  for (const b of contentBlocks) {
    const bId = genId();
    const block = new Y.Map();

    if (b.type === "paragraph" || b.type === "text") {
      setSys(block, bId, "affine:paragraph");
      block.set("prop:type", "text");
      const t = new Y.Text(); t.insert(0, b.text || ""); block.set("prop:text", t);
    } else if (b.type.startsWith("h") && b.type.length === 2) {
      setSys(block, bId, "affine:paragraph");
      block.set("prop:type", b.type);
      const t = new Y.Text(); t.insert(0, b.text || ""); block.set("prop:text", t);
    } else if (b.type === "bulleted" || b.type === "numbered" || b.type === "todo") {
      setSys(block, bId, "affine:list");
      block.set("prop:type", b.type);
      const t = new Y.Text(); t.insert(0, b.text || ""); block.set("prop:text", t);
      if (b.type === "todo") block.set("prop:checked", b.checked || false);
    } else if (b.type === "divider") {
      setSys(block, bId, "affine:divider");
    } else if (b.type === "quote") {
      setSys(block, bId, "affine:paragraph");
      block.set("prop:type", "quote");
      const t = new Y.Text(); t.insert(0, b.text || ""); block.set("prop:text", t);
    } else if (b.type === "callout") {
      setSys(block, bId, "affine:paragraph");
      block.set("prop:type", "quote");
      const t = new Y.Text(); t.insert(0, "💡 " + (b.text || "")); block.set("prop:text", t);
    }

    block.set("sys:parent", noteId);
    block.set("sys:children", new Y.Array());
    blocks.set(bId, block);
    noteChildren.push([bId]);
  }

  const delta = Y.encodeStateAsUpdate(doc, prevSV);
  await pushDocUpdate(socket, WS, docId, Buffer.from(delta).toString("base64"));
}

// =============================================================================
// BUILD THE SYSTEM
// =============================================================================

console.log("🏗️  Building Pinky and the Brain Life OS...\n");

// ─────────────────────────────────────────────────────────────────────────────
// 1. COMMAND CENTER (HOME)
// ─────────────────────────────────────────────────────────────────────────────
console.log("📍 Command Center...");
await createAndPush("🧭 Pinky and the Brain — Command Center", [
  p("Your Life Operating System. One place to see everything that matters."),
  p("Built by Nathan & Ziggy ⚡"),
  divider(),

  h2("🌟 Vision & Identity"),
  p("→ See: Vision & North Star"),
  p("Who am I becoming? What does my ideal life look like? Start here."),
  p(""),

  h2("🎯 Current Focus"),
  p("Your top 3 priorities right now:"),
  numbered("1. [Priority 1]"),
  numbered("2. [Priority 2]"),
  numbered("3. [Priority 3]"),
  p(""),

  h2("📊 Life Areas at a Glance"),
  quote("Each area has goals → projects → actions. Everything flows down from your vision."),
  p(""),
  bullet("🧠 Knowledge — Learning & intellectual growth"),
  bullet("💝 Relationships — People & connections"),
  bullet("🏠 Household — Home & environment"),
  bullet("💪 Health — Body, mind & wellness"),
  bullet("💰 Finances — Money & wealth building"),
  bullet("👔 Professional — Career & business"),
  p(""),

  h2("⚡ Quick Navigation"),
  bullet("📥 Inbox — Drop anything here for processing"),
  bullet("🎯 Goals Hub — All goals with OKR tracking"),
  bullet("📋 Projects Hub — Active projects by area"),
  bullet("✅ Action Items — What to do today/this week"),
  bullet("📓 Journal — Daily reflection"),
  bullet("🔄 Weekly Review — Sunday ritual"),
  bullet("📅 Quarterly Review — Deep strategic review"),
  p(""),

  h2("📈 System Health"),
  bullet("Last weekly review: [date]"),
  bullet("Last quarterly review: [date]"),
  bullet("Inbox items pending: [count]"),
  bullet("Active projects: [count]"),
  bullet("Goals on track: [count] / [total]"),
  divider(),

  h2("⚙️ System Info"),
  bullet("Framework: Hybrid PPV + PARA (Pillars, Pipelines, Vaults + Projects, Areas, Resources, Archives)"),
  bullet("Platform: AFFiNE (self-hosted)"),
  bullet("Workspace: Pinky and the Brain"),
  bullet("Managed by: Nathan & Ziggy"),
  bullet("Philosophy: Vision → Goals → Projects → Actions. Everything connects up."),
]);

// ─────────────────────────────────────────────────────────────────────────────
// 2. VISION & NORTH STAR
// ─────────────────────────────────────────────────────────────────────────────
console.log("📍 Vision & North Star...");
await createAndPush("🌟 Vision & North Star", [
  p("This is your compass. Everything in the system flows from here."),
  divider(),

  h2("🔭 Life Vision"),
  p("What does your ideal life look like in 5-10 years? Paint the picture."),
  quote("Write your vision here. Be specific. Be ambitious. This is your North Star."),
  p(""),
  p("[Your vision statement goes here]"),
  p(""),

  h2("💎 Core Values"),
  p("What principles guide your decisions? These are non-negotiable."),
  numbered("1. [Value 1] — Why this matters to you"),
  numbered("2. [Value 2] — Why this matters to you"),
  numbered("3. [Value 3] — Why this matters to you"),
  numbered("4. [Value 4] — Why this matters to you"),
  numbered("5. [Value 5] — Why this matters to you"),
  p(""),

  h2("🪞 Identity Statements"),
  p("Who are you becoming? Write these as present tense \"I am\" statements."),
  bullet("I am [identity statement 1]"),
  bullet("I am [identity statement 2]"),
  bullet("I am [identity statement 3]"),
  bullet("I am [identity statement 4]"),
  bullet("I am [identity statement 5]"),
  p(""),

  h2("🏔️ Life Pillars"),
  p("Your six pillars — the load-bearing walls of your life. Everything you do should strengthen at least one pillar."),
  p(""),
  h3("🧠 Knowledge"),
  p("What I want to become: [ideal state]"),
  p("Current reality: [honest assessment]"),
  p(""),
  h3("💝 Relationships"),
  p("What I want to become: [ideal state]"),
  p("Current reality: [honest assessment]"),
  p(""),
  h3("🏠 Household"),
  p("What I want to become: [ideal state]"),
  p("Current reality: [honest assessment]"),
  p(""),
  h3("💪 Health"),
  p("What I want to become: [ideal state]"),
  p("Current reality: [honest assessment]"),
  p(""),
  h3("💰 Finances"),
  p("What I want to become: [ideal state]"),
  p("Current reality: [honest assessment]"),
  p(""),
  h3("👔 Professional"),
  p("What I want to become: [ideal state]"),
  p("Current reality: [honest assessment]"),
  divider(),

  h2("📅 Annual Theme"),
  p("What's your theme for this year? A word or phrase that captures your focus."),
  quote("2026 Theme: [Your theme]"),
  p(""),
  p("Why this theme? What would make this year a success?"),
  p("[Your answer]"),
]);

// ─────────────────────────────────────────────────────────────────────────────
// 3. GOALS HUB
// ─────────────────────────────────────────────────────────────────────────────
console.log("📍 Goals Hub...");
await createAndPush("🎯 Goals Hub", [
  p("All your goals in one place. Organized by pillar, tracked with OKRs."),
  divider(),

  h2("How Goals Work in This System"),
  quote("Vision → Annual Goals → Quarterly OKRs → Monthly Milestones → Weekly Actions\n\nEvery goal connects UP to your vision and DOWN to concrete actions.\nReview annually. Recalibrate quarterly. Execute weekly."),
  p(""),

  h2("📊 Goal Status Legend"),
  bullet("🟢 On Track — progressing as planned"),
  bullet("🟡 At Risk — behind schedule or needs attention"),
  bullet("🔴 Off Track — significantly behind, needs intervention"),
  bullet("✅ Achieved — goal met!"),
  bullet("⏸️ Paused — intentionally on hold"),
  bullet("❌ Abandoned — no longer relevant (archive with lesson learned)"),
  p(""),

  divider(),
  h2("🧠 Knowledge Goals"),
  h3("Annual Goals"),
  todo("[Goal]: [Measurable outcome] — Due: [date] — Status: 🟡"),
  p(""),
  h3("Q1 2026 OKRs"),
  p("Objective: [What you want to achieve]"),
  todo("KR1: [Key Result 1 — measurable]"),
  todo("KR2: [Key Result 2 — measurable]"),
  todo("KR3: [Key Result 3 — measurable]"),
  p(""),

  divider(),
  h2("💝 Relationships Goals"),
  h3("Annual Goals"),
  todo("[Goal]: [Measurable outcome] — Due: [date] — Status: 🟡"),
  p(""),
  h3("Q1 2026 OKRs"),
  p("Objective: [What you want to achieve]"),
  todo("KR1: [Key Result 1 — measurable]"),
  todo("KR2: [Key Result 2 — measurable]"),
  todo("KR3: [Key Result 3 — measurable]"),
  p(""),

  divider(),
  h2("🏠 Household Goals"),
  h3("Annual Goals"),
  todo("[Goal]: [Measurable outcome] — Due: [date] — Status: 🟡"),
  p(""),
  h3("Q1 2026 OKRs"),
  p("Objective: [What you want to achieve]"),
  todo("KR1: [Key Result 1 — measurable]"),
  todo("KR2: [Key Result 2 — measurable]"),
  todo("KR3: [Key Result 3 — measurable]"),
  p(""),

  divider(),
  h2("💪 Health Goals"),
  h3("Annual Goals"),
  todo("[Goal]: [Measurable outcome] — Due: [date] — Status: 🟡"),
  p(""),
  h3("Q1 2026 OKRs"),
  p("Objective: [What you want to achieve]"),
  todo("KR1: [Key Result 1 — measurable]"),
  todo("KR2: [Key Result 2 — measurable]"),
  todo("KR3: [Key Result 3 — measurable]"),
  p(""),

  divider(),
  h2("💰 Finances Goals"),
  h3("Annual Goals"),
  todo("[Goal]: [Measurable outcome] — Due: [date] — Status: 🟡"),
  p(""),
  h3("Q1 2026 OKRs"),
  p("Objective: [What you want to achieve]"),
  todo("KR1: [Key Result 1 — measurable]"),
  todo("KR2: [Key Result 2 — measurable]"),
  todo("KR3: [Key Result 3 — measurable]"),
  p(""),

  divider(),
  h2("👔 Professional Goals"),
  h3("Annual Goals"),
  todo("[Goal]: [Measurable outcome] — Due: [date] — Status: 🟡"),
  p(""),
  h3("Q1 2026 OKRs"),
  p("Objective: [What you want to achieve]"),
  todo("KR1: [Key Result 1 — measurable]"),
  todo("KR2: [Key Result 2 — measurable]"),
  todo("KR3: [Key Result 3 — measurable]"),
]);

// ─────────────────────────────────────────────────────────────────────────────
// 4. PROJECTS HUB
// ─────────────────────────────────────────────────────────────────────────────
console.log("📍 Projects Hub...");
await createAndPush("📋 Projects Hub", [
  p("Every active project, organized by pillar. Each project supports a goal."),
  divider(),

  h2("The Pipeline: How Projects Flow"),
  quote("Goal identified → Project created → Actions defined → Weekly execution → Review → Complete or iterate\n\nA project without a goal is just busywork. Always ask: \"What goal does this serve?\""),
  p(""),

  h2("📊 Project Status Legend"),
  bullet("🟢 On Track — progressing as planned"),
  bullet("🟡 At Risk — needs attention"),
  bullet("🔴 Blocked — waiting on dependency"),
  bullet("✅ Complete — ready to archive"),
  bullet("⏸️ Paused — intentionally on hold"),
  bullet("🆕 New — not yet started"),
  p(""),

  divider(),
  h2("🧠 Knowledge Projects"),
  p("No active projects. Define goals first, then create projects to achieve them."),
  p(""),

  divider(),
  h2("💝 Relationships Projects"),
  p("No active projects."),
  p(""),

  divider(),
  h2("🏠 Household Projects"),
  p("No active projects."),
  p(""),

  divider(),
  h2("💪 Health Projects"),
  p("No active projects."),
  p(""),

  divider(),
  h2("💰 Finances Projects"),
  p("No active projects."),
  p(""),

  divider(),
  h2("👔 Professional Projects"),
  p("No active projects."),
  p(""),

  divider(),
  h2("📝 Project Template"),
  quote("When creating a new project, include:"),
  bullet("Project Name:"),
  bullet("Pillar: 🧠/💝/🏠/💪/💰/👔"),
  bullet("Goal it supports:"),
  bullet("Definition of Done: [What does \"complete\" look like?]"),
  bullet("Target Date:"),
  bullet("Status: 🆕"),
  bullet("Key Milestones:"),
  bullet("Next Actions:"),
  bullet("Resources Needed:"),
  bullet("Risks/Blockers:"),
]);

// ─────────────────────────────────────────────────────────────────────────────
// 5. ACTION ITEMS
// ─────────────────────────────────────────────────────────────────────────────
console.log("📍 Action Items...");
await createAndPush("✅ Action Items", [
  p("Your tactical execution layer. What to do TODAY and THIS WEEK."),
  divider(),

  h2("🔥 Today's Focus (Top 3)"),
  quote("Pick your 3 most important tasks. Do these before anything else."),
  todo("1. [Most important task]"),
  todo("2. [Second most important]"),
  todo("3. [Third most important]"),
  p(""),

  h2("📋 This Week's Actions"),
  p(""),
  h3("🧠 Knowledge"),
  todo("[Action item] — Project: [name]"),
  p(""),
  h3("💝 Relationships"),
  todo("[Action item] — Project: [name]"),
  p(""),
  h3("🏠 Household"),
  todo("[Action item] — Project: [name]"),
  p(""),
  h3("💪 Health"),
  todo("[Action item] — Project: [name]"),
  p(""),
  h3("💰 Finances"),
  todo("[Action item] — Project: [name]"),
  p(""),
  h3("👔 Professional"),
  todo("[Action item] — Project: [name]"),
  p(""),

  divider(),
  h2("📥 Unprocessed / Quick Capture"),
  p("Dump tasks here fast. Process into the right section later."),
  p(""),

  divider(),
  h2("⏳ Waiting On"),
  p("Things delegated or dependent on others."),
  bullet("[Item] — Waiting on: [person/thing] — Since: [date]"),
  p(""),

  h2("📅 Upcoming Deadlines"),
  bullet("[Deadline] — [Item] — Due: [date]"),
  p(""),

  h2("💡 Someday / Maybe"),
  p("Ideas and tasks that aren't urgent but might become relevant."),
  bullet("[Idea or future task]"),
]);

// ─────────────────────────────────────────────────────────────────────────────
// 6. REVIEW SYSTEM — QUARTERLY
// ─────────────────────────────────────────────────────────────────────────────
console.log("📍 Review System...");
await createAndPush("📅 Quarterly Review", [
  p("Deep strategic review. Do this every 3 months. Block 2-3 hours."),
  divider(),

  h2("Quarterly Review Process"),
  quote("This is where you zoom out. Not tactics — strategy.\nAre you building the life you designed in your Vision?"),
  p(""),

  h3("Phase 1: Celebrate & Reflect (30 min)"),
  todo("List your top 5 wins this quarter"),
  todo("What are you most proud of?"),
  todo("What surprised you?"),
  todo("What was your biggest lesson learned?"),
  p(""),

  h3("Phase 2: Score Your OKRs (30 min)"),
  todo("Review each area's quarterly OKRs"),
  todo("Score each Key Result (0-100%)"),
  todo("Note what worked and what didn't"),
  todo("Identify patterns across areas"),
  p(""),

  h3("Phase 3: Pillar Health Check (30 min)"),
  p("Rate each pillar 1-10 and note why:"),
  bullet("🧠 Knowledge: [ /10] — [notes]"),
  bullet("💝 Relationships: [ /10] — [notes]"),
  bullet("🏠 Household: [ /10] — [notes]"),
  bullet("💪 Health: [ /10] — [notes]"),
  bullet("💰 Finances: [ /10] — [notes]"),
  bullet("👔 Professional: [ /10] — [notes]"),
  p(""),

  h3("Phase 4: Vision Alignment (20 min)"),
  todo("Re-read your Vision & North Star"),
  todo("Is your current trajectory aligned?"),
  todo("What needs to change?"),
  todo("Any new pillars or priorities emerging?"),
  p(""),

  h3("Phase 5: Set Next Quarter OKRs (30 min)"),
  todo("Define 1-3 objectives per pillar"),
  todo("Set 2-3 measurable key results per objective"),
  todo("Identify the projects needed"),
  todo("Update Goals Hub with new OKRs"),
  p(""),

  h3("Phase 6: Archive & Clean Up (20 min)"),
  todo("Archive completed projects"),
  todo("Move abandoned goals with lessons to Archives"),
  todo("Clean up Action Items"),
  todo("Update Command Center dashboard"),
  p(""),

  divider(),
  h2("📋 Past Reviews"),
  p("Link completed quarterly reviews here for reference."),
  p("[No reviews yet — first one coming soon!]"),
]);

// ─────────────────────────────────────────────────────────────────────────────
// 7. MONTHLY CHECK-IN
// ─────────────────────────────────────────────────────────────────────────────
await createAndPush("📆 Monthly Check-in", [
  p("Quick strategic pulse. 30-45 minutes at the start of each month."),
  divider(),

  h2("Monthly Check-in Process"),
  quote("Monthly is for calibration. Are you on the right path this quarter?"),
  p(""),

  h3("Step 1: Score the Month (10 min)"),
  p("How did this month go? Rate each pillar:"),
  bullet("🧠 Knowledge: [ /10]"),
  bullet("💝 Relationships: [ /10]"),
  bullet("🏠 Household: [ /10]"),
  bullet("💪 Health: [ /10]"),
  bullet("💰 Finances: [ /10]"),
  bullet("👔 Professional: [ /10]"),
  p(""),

  h3("Step 2: OKR Progress Check (10 min)"),
  todo("Review quarterly OKR progress"),
  todo("Are key results on track for the quarter?"),
  todo("Any OKRs that need adjusting?"),
  p(""),

  h3("Step 3: Project Status Update (10 min)"),
  todo("Update all project statuses"),
  todo("Any projects to start, pause, or kill?"),
  todo("Any new projects needed?"),
  p(""),

  h3("Step 4: Next Month's Focus (10 min)"),
  p("Top 3 priorities for next month:"),
  numbered("1. [Priority 1]"),
  numbered("2. [Priority 2]"),
  numbered("3. [Priority 3]"),
  p(""),

  h3("Step 5: Lessons & Adjustments"),
  p("What did I learn this month?"),
  p("[Your reflection]"),
  p(""),
  p("What will I do differently?"),
  p("[Your adjustments]"),
]);

// ─────────────────────────────────────────────────────────────────────────────
// 8. WEEKLY REVIEW
// ─────────────────────────────────────────────────────────────────────────────
await createAndPush("🔄 Weekly Review", [
  p("Your most important ritual. 45-60 minutes every Sunday."),
  p("This is the engine that keeps the entire system running."),
  divider(),

  h2("Weekly Review Checklist"),
  p(""),

  h3("🧹 Step 1: Clear the Decks (10 min)"),
  todo("Process Inbox — route all items to proper locations"),
  todo("Process email inbox to zero"),
  todo("Clear phone notifications and captures"),
  todo("Review calendar for upcoming week"),
  p(""),

  h3("📊 Step 2: Review Last Week (10 min)"),
  todo("Check off completed actions"),
  todo("Review what didn't get done — why?"),
  todo("Update project statuses"),
  todo("Note any wins or breakthroughs"),
  p(""),

  h3("🎯 Step 3: Check Goals & Projects (10 min)"),
  todo("🧠 Knowledge — Any progress? Any actions needed?"),
  todo("💝 Relationships — Did I invest in people?"),
  todo("🏠 Household — Home running smoothly?"),
  todo("💪 Health — Did I take care of myself?"),
  todo("💰 Finances — On track financially?"),
  todo("👔 Professional — Growing professionally?"),
  p(""),

  h3("📋 Step 4: Plan Next Week (15 min)"),
  todo("Identify top 3 priorities for the week"),
  todo("Set daily focus tasks (3 per day max)"),
  todo("Schedule key actions and meetings"),
  todo("Identify any decisions needed"),
  todo("Flag any blockers or dependencies"),
  p(""),

  h3("🪞 Step 5: Reflect (10 min)"),
  p("What went well this week?"),
  p(""),
  p("What could be better?"),
  p(""),
  p("What am I grateful for?"),
  p(""),
  p("Energy level check: [1-10]"),
  p(""),

  divider(),
  h2("📋 Past Reviews"),
  p("Keep a running log of weekly insights here."),
  p(""),
]);

// ─────────────────────────────────────────────────────────────────────────────
// 9. JOURNAL
// ─────────────────────────────────────────────────────────────────────────────
console.log("📍 Journal...");
await createAndPush("📓 Journal", [
  p("Daily reflection, gratitude, and thinking space."),
  divider(),

  h2("How to Use This Journal"),
  quote("Write daily if you can. Even 5 minutes of reflection compounds over time.\nDon't aim for perfect — aim for consistent."),
  p(""),

  h2("Daily Template"),
  p("Copy this for each day:"),
  p(""),
  h3("📅 [Date]"),
  p(""),
  h4("🌅 Morning Intentions"),
  p("Today I will focus on:"),
  numbered("1."),
  numbered("2."),
  numbered("3."),
  p("I will feel successful today if:"),
  p(""),
  h4("🌙 Evening Reflection"),
  p("What went well:"),
  p(""),
  p("What I learned:"),
  p(""),
  p("What I'm grateful for:"),
  numbered("1."),
  numbered("2."),
  numbered("3."),
  p(""),
  p("Energy: [ /10] | Mood: [ /10] | Productivity: [ /10]"),
  p(""),
  p("One thing I'd do differently:"),
  p(""),

  divider(),
  h2("📝 Entries"),
  p("Start writing below. Create a new section for each day."),
  p(""),
]);

// ─────────────────────────────────────────────────────────────────────────────
// 10-15. ENHANCED AREA DOCS
// ─────────────────────────────────────────────────────────────────────────────
console.log("📍 Enhancing Area Docs...");

const existingDocs = {
  "Knowledge": "X9mV8TfTtpdj6rx14KYCF",
  "Relationships": "kBLi29-bbHZI59hyMKmRH",
  "Household": "g5N21cpVbnh7VQguwY5l7",
  "Health": "lcigiLoOLe7OoUWXEZGPs",
  "Finances": "5nzIyhSpiF4Krne4b2JmQ",
  "Professional": "9OJknZpxmn5PtAKYko6vj",
};

const areaDetails = {
  Knowledge: {
    emoji: "🧠", vision: "What does mastery look like for you? What do you want to be known for knowing?",
    goalPrompts: ["What skill would 10x my effectiveness?", "What topic am I most curious about right now?", "What knowledge gap is holding me back?"],
    sections: [
      { name: "📖 Current Learning", content: "What I'm actively studying, reading, or practicing." },
      { name: "🛠️ Skills Inventory", content: "Skills I have, skills I'm building, skills I want.\n\nExpert: [list]\nIntermediate: [list]\nBeginner: [list]\nWant to learn: [list]" },
      { name: "📚 Reading List", content: "Books, articles, courses to consume.\n\nCurrently reading: [title]\nUp next: [title]\nCompleted this quarter: [list]" },
      { name: "🧪 Learning Projects", content: "Hands-on projects for skill building." },
      { name: "💡 Key Insights", content: "Important things I've learned. Reference these often." },
    ]
  },
  Relationships: {
    emoji: "💝", vision: "What do your ideal relationships look like? How do you show up for people?",
    goalPrompts: ["Who needs more of my time and attention?", "How can I deepen my most important relationships?", "What new connections would enrich my life?"],
    sections: [
      { name: "👨‍👩‍👦 Inner Circle", content: "The people who matter most.\n\nBibba: [notes]\n[Other key people]" },
      { name: "🤝 Social Connections", content: "Friends, community, professional network." },
      { name: "📅 Connection Cadence", content: "How often to reach out to key people.\n\nWeekly: [list]\nBi-weekly: [list]\nMonthly: [list]\nQuarterly: [list]" },
      { name: "🎁 Thoughtfulness Tracker", content: "Birthdays, anniversaries, gift ideas, things people mentioned wanting." },
      { name: "🏘️ Community", content: "Groups, organizations, communities I'm part of or want to join." },
    ]
  },
  Household: {
    emoji: "🏠", vision: "What does your ideal home environment feel like?",
    goalPrompts: ["What home improvement would have the biggest impact?", "What maintenance am I neglecting?", "How can I make home more functional/peaceful?"],
    sections: [
      { name: "🔨 Home Projects", content: "Improvements, renovations, and upgrades." },
      { name: "🔧 Maintenance Schedule", content: "Recurring maintenance tasks.\n\nWeekly: [list]\nMonthly: [list]\nQuarterly: [list]\nAnnual: [list]" },
      { name: "📦 Inventory", content: "Important items, warranties, manuals, serial numbers." },
      { name: "📞 Vendor Contacts", content: "Plumber, electrician, HVAC, etc. with contact info." },
      { name: "🏡 Wishlist", content: "Things I want for the home eventually." },
    ]
  },
  Health: {
    emoji: "💪", vision: "What does peak health look like for you? How do you want to feel every day?",
    goalPrompts: ["What one health habit would transform my life?", "Am I prioritizing recovery and rest?", "What am I avoiding that I know I should do?"],
    sections: [
      { name: "🏋️ Fitness Plan", content: "Current workout routine, schedule, and progression.\n\nMonday:\nTuesday:\nWednesday:\nThursday:\nFriday:\nSaturday:\nSunday:" },
      { name: "🥗 Nutrition", content: "Dietary goals, meal planning, supplements.\n\nDaily targets:\nCalories:\nProtein:\nHydration:" },
      { name: "🧘 Mental Health", content: "Stress management, meditation, therapy, mental wellness practices." },
      { name: "😴 Sleep & Recovery", content: "Sleep schedule, sleep quality notes, recovery practices.\n\nTarget bedtime:\nTarget wake time:\nTarget hours:" },
      { name: "🔄 Habits", content: "Daily habits I'm building or maintaining.\n\nMorning routine:\nEvening routine:\nDaily non-negotiables:" },
      { name: "🏥 Medical", content: "Doctors, appointments, medications, health records." },
    ]
  },
  Finances: {
    emoji: "💰", vision: "What does financial freedom look like for you? What's your number?",
    goalPrompts: ["What's my #1 income growth opportunity?", "Where am I wasting money?", "Am I investing enough for the future?"],
    sections: [
      { name: "📊 Financial Dashboard", content: "Key numbers at a glance.\n\nMonthly income:\nMonthly expenses:\nSavings rate:\nNet worth:\nDebt total:\nEmergency fund:" },
      { name: "💵 Income Streams", content: "All sources of income, current and potential.\n\nPrimary:\nSide:\nPassive:\nPotential:" },
      { name: "📉 Budget", content: "Monthly budget breakdown.\n\nFixed expenses:\nVariable expenses:\nSubscriptions:\nDiscretionary:" },
      { name: "📈 Investments", content: "Investment accounts, strategy, and performance." },
      { name: "💳 Debt", content: "All debts with balances, rates, and payoff strategy." },
      { name: "🎯 Financial Milestones", content: "Key financial targets and deadlines.\n\nEmergency fund goal:\nDebt-free date:\nInvestment targets:\nIncome targets:" },
    ]
  },
  Professional: {
    emoji: "👔", vision: "Where do you want to be professionally in 5 years? What impact do you want to make?",
    goalPrompts: ["What skill would accelerate my career the most?", "What opportunity am I not pursuing?", "Who should I be connecting with?"],
    sections: [
      { name: "🗺️ Career Roadmap", content: "Where I am, where I'm going, and how I get there.\n\nCurrent role:\n1-year target:\n3-year target:\n5-year target:" },
      { name: "💼 Current Role", content: "Responsibilities, performance metrics, growth opportunities." },
      { name: "🛠️ Professional Skills", content: "Skills I'm developing for career growth.\n\nStrengths:\nDeveloping:\nGaps to fill:" },
      { name: "🤝 Professional Network", content: "Key contacts, mentors, industry connections.\n\nMentors:\nPeers:\nIndustry contacts:" },
      { name: "💡 Business Opportunities", content: "Side projects, business ideas, partnerships." },
      { name: "📜 Certifications & Education", content: "Professional certifications, courses, training." },
    ]
  },
};

for (const [name, docId] of Object.entries(existingDocs)) {
  const a = areaDetails[name];
  console.log(`  📝 Enhancing ${a.emoji} ${name}...`);

  const blocks = [
    divider(),
    h2("🔭 Vision for This Pillar"),
    p(a.vision),
    p("[Write your vision for this area here]"),
    p(""),

    h2("🎯 Goals"),
    quote("Goal-Setting Prompts — ask yourself these:"),
    ...a.goalPrompts.map(q => bullet("❓ " + q)),
    p(""),
    h3("Active Goals"),
    todo("[Goal 1] — KR: [measurable result] — Due: [date] — Status: 🟡"),
    todo("[Goal 2] — KR: [measurable result] — Due: [date] — Status: ⚪"),
    p(""),
    h3("Quarterly OKRs (Current Quarter)"),
    p("Objective: [What you want to achieve this quarter]"),
    todo("KR1: [Key Result — measurable]"),
    todo("KR2: [Key Result — measurable]"),
    todo("KR3: [Key Result — measurable]"),
    p(""),

    h2("📋 Active Projects"),
    p("Projects supporting goals in this area:"),
    bullet("[No active projects yet — create them in Projects Hub]"),
    p(""),
  ];

  for (const s of a.sections) {
    blocks.push(divider(), h2(s.name), p(s.content), p(""));
  }

  blocks.push(
    divider(),
    h2("📊 Weekly Check-in"),
    p("Quick assessment during your weekly review:"),
    todo("How did this area go this week? [ /10]"),
    todo("Any progress on goals?"),
    todo("What needs attention next week?"),
    todo("Any insights or lessons?"),
  );

  await appendToDoc(docId, blocks);
  console.log(`  ✅ ${a.emoji} ${name} enhanced`);
}

// ─────────────────────────────────────────────────────────────────────────────
// 16. RESOURCES
// ─────────────────────────────────────────────────────────────────────────────
console.log("📍 Resources...");
await createAndPush("📚 Resources", [
  p("Your vault — reference materials, templates, mental models, and collected knowledge."),
  divider(),

  h2("📖 Reference Library"),
  p("Articles, guides, and reference materials organized by topic."),
  p(""),

  h2("🧩 Mental Models & Frameworks"),
  p("Decision-making frameworks and thinking tools you use."),
  bullet("PARA — Projects, Areas, Resources, Archives"),
  bullet("PPV — Pillars, Pipelines, Vaults"),
  bullet("OKRs — Objectives and Key Results"),
  bullet("Eisenhower Matrix — Urgent vs Important"),
  bullet("80/20 — Pareto Principle"),
  bullet("[Add your own]"),
  p(""),

  h2("🔧 Templates"),
  p("Reusable templates for recurring work."),
  bullet("📋 Project Template (see Projects Hub)"),
  bullet("🔄 Weekly Review Checklist"),
  bullet("📅 Quarterly Review Process"),
  bullet("📓 Daily Journal Entry"),
  bullet("🎯 Goal-Setting (OKR format)"),
  p(""),

  h2("📊 Checklists & SOPs"),
  p("Standard operating procedures for recurring tasks."),
  p(""),

  h2("🔗 Bookmarks & Links"),
  p("Important URLs and external resources."),
  p(""),

  h2("📝 Notes & Clippings"),
  p("Interesting things captured from reading, listening, conversations."),
  p(""),

  h2("🗃️ Zettelkasten / Permanent Notes"),
  p("Atomic notes — one idea per note, linked to related concepts."),
  quote("The goal: build a web of knowledge over time. Each note should be:\n• Atomic — one idea per note\n• Written in your own words\n• Connected to other notes\n• Useful for future you"),
  p(""),
]);

// ─────────────────────────────────────────────────────────────────────────────
// 17. ARCHIVES
// ─────────────────────────────────────────────────────────────────────────────
console.log("📍 Archives...");
await createAndPush("📦 Archives", [
  p("Completed projects, achieved goals, inactive items, and lessons learned."),
  divider(),

  h2("How Archiving Works"),
  quote("When something is done:\n1. Capture the lesson learned\n2. Move it here with completion date\n3. Remove from active docs\n4. Celebrate the win 🎉"),
  p(""),

  h2("✅ Completed Projects"),
  p("[None yet — your first completions will appear here!]"),
  p(""),

  h2("🎯 Achieved Goals"),
  p("[Track your wins here]"),
  p(""),

  h2("❌ Abandoned (with Lessons)"),
  p("[Not everything works out — capture why, so you learn from it]"),
  p(""),

  h2("📝 Lessons Learned"),
  p("Key takeaways from completed work. Review these periodically."),
  p(""),

  h2("📅 Past Reviews"),
  h3("Quarterly Reviews"),
  p("[Link completed reviews here]"),
  h3("Monthly Check-ins"),
  p("[Link completed check-ins here]"),
]);

// ─────────────────────────────────────────────────────────────────────────────
// 18. INBOX
// ─────────────────────────────────────────────────────────────────────────────
console.log("📍 Inbox...");
await createAndPush("📥 Inbox", [
  p("Your universal capture zone. Dump anything here — Ziggy routes it."),
  divider(),

  h2("How It Works"),
  bullet("Drop anything below — thoughts, ideas, links, tasks, questions"),
  bullet("Tag with a pillar emoji if you know where it goes (🧠💝🏠💪💰👔)"),
  bullet("Tell Ziggy to process, or it gets routed during heartbeats"),
  bullet("Processed items move to the right doc — inbox stays clean"),
  p(""),

  quote("The rule: Your head is for having ideas, not holding them. Capture everything here."),

  divider(),
  h2("⬇️ Drop Items Below This Line ⬇️"),
  p(""),
]);

// ─────────────────────────────────────────────────────────────────────────────
// DONE
// ─────────────────────────────────────────────────────────────────────────────

console.log("\n🎉 ═══════════════════════════════════════════════════════");
console.log("   PINKY AND THE BRAIN — Life OS Complete!");
console.log("   ═══════════════════════════════════════════════════════\n");
console.log("📄 Created docs:");
for (const [title, id] of Object.entries(createdDocs)) {
  console.log(`   ${title} → ${id}`);
}
console.log(`\n🔗 https://pkm.mouthygeese.com/workspace/${WS}`);

socket.disconnect();
process.exit(0);
