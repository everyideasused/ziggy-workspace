#!/usr/bin/env node
// Create SS-PMO docs in Pink and the Brain workspace
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

console.log("🔐 Signing in...");
const { cookieHeader } = await loginWithPassword(BASE, "ziggy@mouthygeese.com", "suxvIm-nipnod-sygro0");
const wsUrl = wsUrlFromGraphQLEndpoint(`${BASE}/graphql`);
const socket = await connectWorkspaceSocket(wsUrl, cookieHeader);
await joinWorkspace(socket, WS);
console.log("✅ Connected!\n");

// Helper functions
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
const h3 = (text) => ({ type: "h3", text });
const bullet = (text) => ({ type: "bulleted", text });
const todo = (text, checked = false) => ({ type: "todo", text, checked });
const divider = () => ({ type: "divider" });
const quote = (text) => ({ type: "quote", text });

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
    } else if (b.type === "bulleted" || b.type === "numbered" || b.type === "todo") {
      setSys(block, bId, "affine:list");
      block.set("prop:type", b.type);
      const t = new Y.Text();
      t.insert(0, b.text || "");
      block.set("prop:text", t);
      if (b.type === "todo") block.set("prop:checked", b.checked || false);
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
  await pushDocUpdate(socket, WS, docId, Buffer.from(update).toString("base64"));
  console.log(`  ✅ ${title} → ${docId}`);
  return docId;
}

// ============================================================
// CREATE SS-PMO DOCS
// ============================================================

console.log("📝 Creating SS-PMO documentation...\n");

// DOC 1: PROJECT OVERVIEW
await createAndPush("SS-PMO: Project Overview", [
  h1("SS-PMO: Smartsheet PMO Build Project"),
  p(""),
  h2("Vision"),
  p("Build a best-in-class, enterprise-level construction PMO in Smartsheet that rivals solutions like Primavera P6, Procore, and Planview while maintaining Smartsheet's flexibility and ease of use."),
  p(""),
  h2("Goals"),
  bullet("Portfolio-level visibility across all programs and sites"),
  bullet("Resource capacity planning and workload management"),
  bullet("Financial tracking at portfolio, program, and project levels"),
  bullet("RFP/pre-construction pipeline management"),
  bullet("Real-time dashboards with actionable KPIs"),
  bullet("Full integration between all components"),
  bullet("Scalability from pilot to enterprise-wide deployment"),
  p(""),
  h2("Key Deliverables"),
  bullet("1. Research document (enterprise PMO capabilities)"),
  bullet("2. Intake questionnaire (capture requirements)"),
  bullet("3. Solution architecture (sheet structure, relationships, automation)"),
  bullet("4. Implementation roadmap (phased approach)"),
  bullet("5. Smartsheet workspace build-out"),
  p(""),
  h2("Timeline"),
  bullet("Phase 1: Research & Requirements (In Progress)"),
  bullet("Phase 2: Architecture Design"),
  bullet("Phase 3: Pilot Build"),
  bullet("Phase 4: Testing & Refinement"),
  bullet("Phase 5: Full Deployment"),
  p(""),
  h2("Notes"),
  bullet("Started: Feb 18, 2026 @ 5:30 PM CST"),
  bullet("Nathan wakes at 4:30 AM CST to provide Smartsheet account access"),
  bullet("Everything must link and integrate seamlessly"),
  p(""),
  divider(),
  h2("Next Actions"),
  todo("Complete research on enterprise PMO capabilities", true),
  todo("Build intake questionnaire", true),
  todo("Nathan completes questionnaire"),
  todo("Design solution architecture"),
]);

// DOC 2: ENTERPRISE PMO RESEARCH (abbreviated - full version would be huge)
await createAndPush("SS-PMO: Enterprise PMO Research", [
  h1("Enterprise PMO Capabilities Research"),
  p(""),
  h2("Executive Summary"),
  p("This research synthesizes best-in-class enterprise PMO capabilities from leading platforms (Primavera P6, Procore, Planview, Microsoft Project, Smartsheet) to inform the design of a construction-focused PMO solution."),
  divider(),
  h2("Platform Analysis"),
  p(""),
  h3("Primavera P6 Enterprise PPM"),
  p("Industry standard for large capital construction projects"),
  bullet("Project Scheduling: CPM scheduling with unlimited activities"),
  bullet("Resource Management: Demand/capacity planning, role-based assignments"),
  bullet("Cost Management: Integrated CBS with WBS"),
  bullet("Portfolio Analysis: Real-time portfolio health"),
  bullet("Risk Management: Built-in risk register"),
  p(""),
  h3("Procore Construction Management"),
  p("Leading cloud-based construction operations platform"),
  bullet("Document Management: Central repository with version control"),
  bullet("Field Collaboration: Mobile-first for field teams"),
  bullet("Financial Tracking: Budget tracking, change orders"),
  bullet("Portfolio Visibility: Aggregate data across projects"),
  bullet("Integration Ecosystem: 300+ integrations"),
  p(""),
  h3("Planview Enterprise One"),
  p("Strategic portfolio management"),
  bullet("Strategic Alignment: Link projects to business objectives"),
  bullet("Demand Management: Intake, scoring, prioritization"),
  bullet("Capacity Planning: Portfolio-level resource capacity vs demand"),
  bullet("What-if Scenarios: Portfolio optimization"),
  bullet("Executive Dashboards: Strategic KPIs"),
  divider(),
  h2("Construction PMO Best Practices"),
  p(""),
  h3("Portfolio Structure (3-Tier Hierarchy)"),
  p("Portfolio (Enterprise) → Programs (Multi-site) → Projects (Individual sites) → Phases → Tasks"),
  p(""),
  h3("Key Management Areas"),
  bullet("Schedule Management: Baseline, variance tracking, critical path, milestones"),
  bullet("Cost/Budget Management: Original vs current vs actual, change orders, forecast at completion"),
  bullet("Resource Management: Capacity planning, role-based planning, multi-project allocation"),
  bullet("Risk & Issue Management: Risk registers, issue logs, escalation workflows"),
  bullet("Quality & Safety: Inspections, punch lists, safety observations, NCR tracking"),
  bullet("Document Management: Central repository, RFIs, submittals, as-builts"),
  divider(),
  h2("PMO Dashboard & KPI Framework"),
  p(""),
  h3("Portfolio Level (Executive View)"),
  bullet("Portfolio Health Score (≥80% green target)"),
  bullet("On-Time Delivery % (≥90%)"),
  bullet("Budget Performance (≥85% within ±5%)"),
  bullet("Resource Utilization (75-90% optimal)"),
  bullet("Pipeline Value (total weighted)"),
  bullet("Active Project Count"),
  p(""),
  h3("Program Level (Multi-Site Rollouts)"),
  bullet("Program % Complete (weighted avg)"),
  bullet("Sites On Schedule (≥85%)"),
  bullet("Cost Variance (±3% target)"),
  bullet("Milestone Adherence (≥90%)"),
  bullet("Change Order Impact (<10% budget)"),
  p(""),
  h3("Project Level (Individual Sites)"),
  bullet("Schedule Variance (±7 days)"),
  bullet("Cost Variance (±5%)"),
  bullet("Safety Incidents (0 target)"),
  bullet("Quality Score (≥95% pass rate)"),
  bullet("Open Items (<10)"),
  divider(),
  h2("Smartsheet Implementation"),
  p(""),
  h3("Phased Rollout Approach"),
  bullet("Phase 1 (Weeks 1-4): Foundation - portfolio structure, templates, core dashboards, pilot"),
  bullet("Phase 2 (Weeks 5-8): Expansion - RFP pipeline, risk/issue tracking, budget tracking"),
  bullet("Phase 3 (Weeks 9-12): Automation - workflows, alerts, reporting refinement"),
  bullet("Phase 4 (Weeks 13-16): Integration - ERP integration, CRM connection, resource management"),
  bullet("Phase 5 (Ongoing): Optimization - continuous improvement"),
  p(""),
  h3("Success Criteria"),
  bullet("90% of PMs updating weekly"),
  bullet("<5% missing data in critical fields"),
  bullet("20% reduction in project delays"),
  bullet("15% improvement in resource utilization"),
  bullet("50% faster reporting cycles"),
  divider(),
  p("Full research details in /Volumes/ziggy/openclaw-workspace/SS-PMO-Content/"),
  p("Document Status: Complete - Ready for Questionnaire Phase"),
  p("Last Updated: Feb 18, 2026 | Author: Ziggy"),
]);

// DOC 3: INTAKE QUESTIONNAIRE (abbreviated structure)
await createAndPush("SS-PMO: Intake Questionnaire", [
  h1("SS-PMO Intake Questionnaire"),
  p(""),
  p("Purpose: Capture your specific requirements, workflows, and preferences to design a custom Smartsheet PMO that fits your exact needs."),
  p(""),
  p("Instructions: Answer every question thoroughly. Use N/A if not applicable. Add notes/examples to clarify. The more detail, the better the solution."),
  divider(),
  h2("SECTION 1: ORGANIZATION & SCOPE"),
  p(""),
  h3("1.1 Organization Profile"),
  p("Q1: What is your company name/organization type?"),
  p(""),
  p("Q2: How many people will use the PMO system?"),
  bullet("1-5 (small team)"),
  bullet("6-15 (small PMO)"),
  bullet("16-50 (medium PMO)"),
  bullet("50+ (enterprise PMO)"),
  p(""),
  p("Q3: What industries/sectors do you operate in?"),
  p(""),
  p("Q4: What is your role in the organization?"),
  p(""),
  h3("1.2 Portfolio Scope"),
  p("Q5: How many active projects do you currently manage?"),
  p(""),
  p("Q6: What is the typical project duration?"),
  p(""),
  p("Q7: What is the typical project value range?"),
  p(""),
  p("Q8: Do you manage programs (multi-site rollouts)?"),
  p(""),
  divider(),
  h2("SECTION 2: CURRENT STATE & PAIN POINTS"),
  p(""),
  p("Q10: What tools do you currently use for project management?"),
  p(""),
  p("Q11: What works well with your current setup?"),
  p(""),
  p("Q12: What are your biggest frustrations?"),
  p(""),
  p("Q13: Rank your top 3 pain points (1 = most critical)"),
  p(""),
  p("Q14: What does success look like 6 months after implementation?"),
  divider(),
  p("📋 Full questionnaire (94 questions across 20 sections) available at:"),
  p("/Volumes/ziggy/openclaw-workspace/SS-PMO-Content/02 - INTAKE QUESTIONNAIRE.md"),
  p(""),
  p("Sections include: Project Structure, Schedule Management, Budget & Cost Management, Resource Management, Risk & Issue Management, Quality & Safety, Document Management, RFP/Pipeline Management, Reporting & Dashboards, Automation & Workflows, Integrations, Templates & Standardization, Access & Permissions, Data Migration, Training & Adoption, Success Metrics, Custom Requirements, and Final Thoughts."),
  p(""),
  divider(),
  p("Status: Ready for completion"),
  p("Created: Feb 18, 2026"),
]);

console.log("\n🎉 SS-PMO docs created successfully!");
console.log(`\n🔗 View at: https://pkm.mouthygeese.com/workspace/${WS}`);
console.log(`\nFull content available in: /Volumes/ziggy/openclaw-workspace/SS-PMO-Content/`);

socket.disconnect();
process.exit(0);
