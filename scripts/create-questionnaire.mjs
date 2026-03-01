#!/usr/bin/env node
// Create the missing questionnaire doc
import { loginWithPassword } from "/opt/homebrew/lib/node_modules/affine-mcp-server/dist/auth.js";
import {
  wsUrlFromGraphQLEndpoint,
  connectWorkspaceSocket,
  joinWorkspace,
  pushDocUpdate,
} from "/opt/homebrew/lib/node_modules/affine-mcp-server/dist/ws.js";
import * as Y from "/opt/homebrew/lib/node_modules/affine-mcp-server/node_modules/yjs/dist/yjs.mjs";

const BASE = "https://pkm.mouthygeese.com";
const WS = "70aed209-ef2c-4e7c-a163-d6ac79d9a96f";

const { cookieHeader } = await loginWithPassword(BASE, "ziggy@mouthygeese.com", "suxvIm-nipnod-sygro0");
const wsUrl = wsUrlFromGraphQLEndpoint(`${BASE}/graphql`);
const socket = await connectWorkspaceSocket(wsUrl, cookieHeader);
await joinWorkspace(socket, WS);

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

const p = (text) => ({ type: "paragraph", text });
const h1 = (text) => ({ type: "h1", text });
const h2 = (text) => ({ type: "h2", text });
const divider = () => ({ type: "divider" });
const bullet = (text) => ({ type: "bulleted", text });

function createDocYdoc(title, contentBlocks) {
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
  const noteChildren = new Y.Array();
  note.set("sys:children", noteChildren);
  note.set("prop:xywh", "[0,0,800,400]");
  note.set("prop:background", "--affine-note-background-white");
  note.set("prop:index", "a0");
  note.set("prop:hidden", false);
  note.set("prop:displayMode", "both");
  blocks.set(noteId, note);
  children.push([noteId]);

  for (const b of contentBlocks) {
    const bId = genId();
    const block = new Y.Map();

    if (b.type === "paragraph" || b.type === "text") {
      setSys(block, bId, "affine:paragraph");
      block.set("prop:type", "text");
      const t = new Y.Text();
      t.insert(0, b.text || "");
      block.set("prop:text", t);
    } else if (b.type.startsWith("h")) {
      setSys(block, bId, "affine:paragraph");
      block.set("prop:type", b.type);
      const t = new Y.Text();
      t.insert(0, b.text || "");
      block.set("prop:text", t);
    } else if (b.type === "bulleted") {
      setSys(block, bId, "affine:list");
      block.set("prop:type", b.type);
      const t = new Y.Text();
      t.insert(0, b.text || "");
      block.set("prop:text", t);
    } else if (b.type === "divider") {
      setSys(block, bId, "affine:divider");
    }

    block.set("sys:parent", noteId);
    block.set("sys:children", new Y.Array());
    blocks.set(bId, block);
    noteChildren.push([bId]);
  }

  return { docId, ydoc };
}

const { docId, ydoc } = createDocYdoc("SS-PMO: Intake Questionnaire", [
  h1("SS-PMO Intake Questionnaire"),
  p(""),
  p("Purpose: Capture your specific requirements, workflows, and preferences to design a custom Smartsheet PMO."),
  divider(),
  h2("SECTION 1: ORGANIZATION & SCOPE"),
  p("Q1: What is your company name/organization type?"),
  p(""),
  p("Q2: How many people will use the PMO system?"),
  p(""),
  divider(),
  p("📋 Full questionnaire (94 questions across 20 sections) at:"),
  p("/Volumes/ziggy/openclaw-workspace/SS-PMO-Content/02 - INTAKE QUESTIONNAIRE.md"),
  p(""),
  p("Status: Ready for completion | Created: Feb 18, 2026"),
]);

const update = Y.encodeStateAsUpdate(ydoc);
await pushDocUpdate(socket, WS, docId, Buffer.from(update).toString("base64"));
console.log(`✅ Created: SS-PMO: Intake Questionnaire → ${docId}`);

socket.disconnect();
process.exit(0);
