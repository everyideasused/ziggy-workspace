#!/usr/bin/env node
// Build PARA structure in AFFiNE Life Hub workspace
import { loginWithPassword } from "/opt/homebrew/lib/node_modules/affine-mcp-server/dist/auth.js";
import {
  wsUrlFromGraphQLEndpoint,
  connectWorkspaceSocket,
  joinWorkspace,
  loadDoc,
  pushDocUpdate,
} from "/opt/homebrew/lib/node_modules/affine-mcp-server/dist/ws.js";
import * as Y from "/opt/homebrew/lib/node_modules/affine-mcp-server/node_modules/yjs/dist/yjs.mjs";

const BASE = "https://pkm.mouthygeese.com";
const WS = "2abf1a99-1376-4fec-9620-2f061151e942";

// Get cookie
console.log("Signing in...");
const { cookieHeader } = await loginWithPassword(BASE, "ziggy@mouthygeese.com", "suxvIm-nipnod-sygro0");
console.log("Authenticated!");

const wsUrl = wsUrlFromGraphQLEndpoint(`${BASE}/graphql`);
const socket = await connectWorkspaceSocket(wsUrl, cookieHeader);
await joinWorkspace(socket, WS);
console.log("Connected to workspace via WebSocket!");

const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function genId() {
  let id = "";
  for (let i = 0; i < 10; i++) id += chars[Math.floor(Math.random() * chars.length)];
  return id;
}

function setSys(map, id, flavour) {
  map.set("sys:id", id);
  map.set("sys:flavour", flavour);
  map.set("sys:version", flavour === "affine:page" ? 2 : 1);
}

function createDocYdoc(title, contentBlocks) {
  const docId = genId();
  const ydoc = new Y.Doc();
  const blocks = ydoc.getMap("blocks");

  // Page block
  const pageId = genId();
  const page = new Y.Map();
  setSys(page, pageId, "affine:page");
  const titleText = new Y.Text();
  titleText.insert(0, title);
  page.set("prop:title", titleText);
  const children = new Y.Array();
  page.set("sys:children", children);
  blocks.set(pageId, page);

  // Surface block (required)
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

  // Note block (container for content)
  const noteId = genId();
  const note = new Y.Map();
  setSys(note, noteId, "affine:note");
  note.set("sys:parent", pageId);
  const noteChildren = new Y.Array();
  note.set("sys:children", noteChildren);
  note.set("prop:xywh", "[0,0,800,400]");
  note.set("prop:background", "--affine-note-background-white");
  note.set("prop:index", "a0");
  note.set("prop:hidden", false);
  note.set("prop:displayMode", "both");
  blocks.set(noteId, note);
  children.push([noteId]);

  // Content blocks
  for (const b of contentBlocks) {
    const bId = genId();
    const block = new Y.Map();
    
    if (b.type === "paragraph" || b.type === "text") {
      setSys(block, bId, "affine:paragraph");
      block.set("prop:type", "text");
      const t = new Y.Text();
      t.insert(0, b.text || "");
      block.set("prop:text", t);
    } else if (b.type === "h1" || b.type === "h2" || b.type === "h3" || b.type === "h4" || b.type === "h5" || b.type === "h6") {
      setSys(block, bId, "affine:paragraph");
      block.set("prop:type", b.type);
      const t = new Y.Text();
      t.insert(0, b.text || "");
      block.set("prop:text", t);
    } else if (b.type === "bulleted" || b.type === "numbered" || b.type === "todo") {
      setSys(block, bId, "affine:list");
      block.set("prop:type", b.type);
      const t = new Y.Text();
      t.insert(0, b.text || "");
      block.set("prop:text", t);
      if (b.type === "todo") {
        block.set("prop:checked", b.checked || false);
      }
    } else if (b.type === "divider") {
      setSys(block, bId, "affine:divider");
    } else if (b.type === "quote") {
      setSys(block, bId, "affine:paragraph");
      block.set("prop:type", "quote");
      const t = new Y.Text();
      t.insert(0, b.text || "");
      block.set("prop:text", t);
    }

    block.set("sys:parent", noteId);
    block.set("sys:children", new Y.Array());
    blocks.set(bId, block);
    noteChildren.push([bId]);
  }

  return { docId, ydoc };
}

async function createAndPush(title, contentBlocks) {
  const { docId, ydoc } = createDocYdoc(title, contentBlocks);
  const update = Y.encodeStateAsUpdate(ydoc);
  const b64 = Buffer.from(update).toString("base64");
  await pushDocUpdate(socket, WS, docId, b64);
  console.log(`  ✅ ${title} → ${docId}`);
  return docId;
}

// Helper to build content block arrays more easily
const p = (text) => ({ type: "paragraph", text });
const h2 = (text) => ({ type: "h2", text });
const h3 = (text) => ({ type: "h3", text });
const h4 = (text) => ({ type: "h4", text });
const bullet = (text) => ({ type: "bulleted", text });
const todo = (text, checked = false) => ({ type: "todo", text, checked });
const divider = () => ({ type: "divider" });
const quote = (text) => ({ type: "quote", text });

// ============================================================
// BUILD PARA STRUCTURE
// ============================================================

console.log("\n🏗️  Building PARA Structure...\n");

// 1. HOME PAGE
const homeId = await createAndPush("🧭 Life Hub — Home", [
  p("Your PARA-based personal knowledge management and life operating system."),
  p("Built by Nathan & Ziggy ⚡"),
  divider(),
  h2("📂 PARA Navigation"),
  p(""),
  h3("🎯 Areas of Focus"),
  p("Your six life domains — ongoing responsibilities with standards to maintain."),
  bullet("🧠 Knowledge — Learning, growth, intellectual development"),
  bullet("💝 Relationships — Family, friends, community, social connections"),
  bullet("🏠 Household — Home management, living environment, maintenance"),
  bullet("💪 Health — Physical fitness, mental health, nutrition, wellness"),
  bullet("💰 Finances — Income, investments, budgeting, financial planning"),
  bullet("👔 Professional — Career, skills, business, professional development"),
  p(""),
  h3("📋 Projects"),
  p("Active efforts with defined outcomes and deadlines. Each project supports a goal within an area."),
  p(""),
  h3("📚 Resources"),
  p("Reference materials, templates, guides, and knowledge base entries."),
  p(""),
  h3("📦 Archives"),
  p("Completed projects, inactive areas, and historical reference."),
  p(""),
  h3("🔄 Weekly Review"),
  p("Your weekly review checklist to keep the system running."),
  divider(),
  h2("⚙️ System Info"),
  bullet("Framework: PARA Method (Projects, Areas, Resources, Archives)"),
  bullet("Platform: AFFiNE (self-hosted)"),
  bullet("Managed by: Nathan & Ziggy"),
]);

// 2. AREA DOCS
const areas = [
  {
    emoji: "🧠", name: "Knowledge",
    desc: "Learning, growth, and intellectual development",
    prompts: ["What do I want to learn this quarter?", "What skills am I developing?", "What knowledge gaps do I need to fill?"],
    sections: ["Current Learning", "Skills Development", "Reading List", "Courses & Resources", "Knowledge Map"],
  },
  {
    emoji: "💝", name: "Relationships",
    desc: "Family, friends, community, and social connections",
    prompts: ["How am I investing in my key relationships?", "What social connections need attention?", "How am I building community?"],
    sections: ["Key Relationships", "Social Calendar", "Communication Cadence", "Community Involvement", "Relationship Goals"],
  },
  {
    emoji: "🏠", name: "Household",
    desc: "Home management, living environment, and maintenance",
    prompts: ["What home improvements are needed?", "What maintenance is overdue?", "How can I optimize my living space?"],
    sections: ["Home Projects", "Maintenance Schedule", "Inventory & Supplies", "Improvement Wishlist", "Vendor Contacts"],
  },
  {
    emoji: "💪", name: "Health",
    desc: "Physical fitness, mental health, nutrition, and wellness",
    prompts: ["What are my fitness targets?", "How am I managing stress and mental health?", "What nutritional changes would benefit me?"],
    sections: ["Fitness Plan", "Nutrition & Diet", "Mental Health", "Medical & Appointments", "Habits & Routines"],
  },
  {
    emoji: "💰", name: "Finances",
    desc: "Income, investments, budgeting, and financial planning",
    prompts: ["What are my income targets?", "How am I building wealth?", "Where can I reduce expenses?"],
    sections: ["Budget Overview", "Income Streams", "Investments", "Debt & Obligations", "Financial Goals & Milestones"],
  },
  {
    emoji: "👔", name: "Professional",
    desc: "Career, skills, business, and professional development",
    prompts: ["What career milestones am I targeting?", "What professional skills am I building?", "What business opportunities am I pursuing?"],
    sections: ["Career Roadmap", "Current Role & Responsibilities", "Skill Development", "Professional Network", "Business Opportunities"],
  },
];

for (const a of areas) {
  const blocks = [
    p(a.desc),
    divider(),
    h2("🎯 Goals"),
    p("Define your goals for this area. Each goal should be specific, measurable, and time-bound."),
    quote("Goal-Setting Prompts:"),
    ...a.prompts.map(q => bullet(`❓ ${q}`)),
    p(""),
    h3("Active Goals"),
    todo("Goal 1: [Define your goal] — Target: [date] — Status: 🟡 In Progress"),
    todo("Goal 2: [Define your goal] — Target: [date] — Status: ⚪ Not Started"),
    p(""),
    h2("📋 Supporting Projects"),
    p("Projects actively contributing to goals in this area:"),
    bullet("[Link projects here as they're created]"),
    p(""),
  ];

  for (const s of a.sections) {
    blocks.push(h2(s), p(""));
  }

  blocks.push(
    divider(),
    h2("📊 Weekly Review"),
    p("Use this section during your weekly review to assess progress:"),
    todo("What progress did I make this week?"),
    todo("What obstacles am I facing?"),
    todo("What's my focus for next week?"),
    todo("Do any goals need adjustment?"),
  );

  await createAndPush(`${a.emoji} ${a.name}`, blocks);
}

// 3. PROJECTS DASHBOARD
await createAndPush("📋 Projects Dashboard", [
  p("Active projects organized by life area and goal alignment."),
  divider(),
  h2("How Projects Work"),
  quote("Every project must:\n• Support a specific goal within an area\n• Have a clear definition of done\n• Have a target completion date\n• Be reviewable weekly"),
  p(""),
  h3("Project Status Legend"),
  bullet("🟢 On Track — progressing as planned"),
  bullet("🟡 At Risk — needs attention"),
  bullet("🔴 Blocked — waiting on something"),
  bullet("✅ Complete — ready to archive"),
  bullet("⏸️ Paused — intentionally on hold"),
  p(""),
  ...areas.flatMap(a => [
    h2(`${a.emoji} ${a.name} Projects`),
    p("No active projects yet. Create projects as you define goals."),
    p(""),
  ]),
  divider(),
  h2("📝 New Project Template"),
  quote("Copy this when creating a new project:"),
  bullet("Project Name:"),
  bullet("Area: [Knowledge/Relationships/Household/Health/Finances/Professional]"),
  bullet("Goal it supports:"),
  bullet("Definition of Done:"),
  bullet("Target Date:"),
  bullet("Status: ⚪ Not Started"),
  bullet("Next Actions:"),
]);

// 4. RESOURCES
await createAndPush("📚 Resources", [
  p("Reference materials, templates, guides, and knowledge base."),
  divider(),
  h2("📖 Reference Library"),
  p("Collect reference materials, articles, guides, and anything worth keeping."),
  p(""),
  h2("🔧 Templates"),
  p("Reusable templates for recurring work."),
  bullet("Project Template (see Projects Dashboard)"),
  bullet("Weekly Review Template"),
  bullet("Goal-Setting Template"),
  p(""),
  h2("💡 Knowledge Base"),
  p("Key insights, frameworks, and mental models."),
  p(""),
  h2("🔗 Bookmarks & Links"),
  p("Important URLs and external resources."),
  p(""),
  h2("📊 Checklists & SOPs"),
  p("Standard operating procedures for recurring tasks."),
]);

// 5. ARCHIVES
await createAndPush("📦 Archives", [
  p("Completed projects, inactive areas, and historical reference."),
  divider(),
  h2("How Archiving Works"),
  quote("When a project is complete or an area becomes inactive:\n1. Move the doc reference here\n2. Note the completion date\n3. Capture any lessons learned\n4. Remove from active dashboards"),
  p(""),
  h2("✅ Completed Projects"),
  p("No archived projects yet."),
  p(""),
  h2("📁 Inactive Areas"),
  p("Areas that are no longer active focus areas."),
  p(""),
  h2("📝 Lessons Learned"),
  p("Key takeaways from completed work."),
]);

// 6. WEEKLY REVIEW
await createAndPush("🔄 Weekly Review", [
  p("Your weekly review checklist and reflection space."),
  divider(),
  h2("Weekly Review Process"),
  quote("Schedule 30-60 minutes weekly to review your system. This is the engine that keeps PARA running."),
  p(""),
  h3("Step 1: Capture & Clear"),
  todo("Process inbox (email, notes, messages)"),
  todo("Capture any loose thoughts or ideas"),
  todo("Clear notifications and action items"),
  p(""),
  h3("Step 2: Review Areas"),
  todo("🧠 Knowledge — Am I learning what matters?"),
  todo("💝 Relationships — Am I investing in people?"),
  todo("🏠 Household — Is home running smoothly?"),
  todo("💪 Health — Am I taking care of myself?"),
  todo("💰 Finances — Am I on track financially?"),
  todo("👔 Professional — Am I growing professionally?"),
  p(""),
  h3("Step 3: Review Projects"),
  todo("Update project statuses"),
  todo("Identify blocked or at-risk projects"),
  todo("Archive completed projects"),
  todo("Decide on any new projects to start"),
  p(""),
  h3("Step 4: Plan Next Week"),
  todo("Set top 3 priorities for the week"),
  todo("Schedule key actions and meetings"),
  todo("Identify any decisions needed"),
  p(""),
  h3("Step 5: Reflect"),
  p("What went well this week?"),
  p(""),
  p("What could be better?"),
  p(""),
  p("What am I grateful for?"),
]);

console.log("\n🎉 PARA Structure Complete!");
console.log(`\n🔗 https://pkm.mouthygeese.com/workspace/${WS}`);

socket.disconnect();
process.exit(0);
