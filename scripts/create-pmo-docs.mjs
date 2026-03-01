#!/usr/bin/env node

import { loginWithPassword } from 'affine-mcp-server/dist/auth.js';
import { wsUrlFromGraphQLEndpoint, connectWorkspaceSocket, joinWorkspace, loadDoc, pushDocUpdate } from 'affine-mcp-server/dist/ws.js';
import * as Y from 'yjs';

const GRAPHQL_ENDPOINT = 'https://pkm.mouthygeese.com/graphql';
const WORKSPACE_ID = '70aed209-ef2c-4e7c-a163-d6ac79d9a96f';
const EMAIL = 'ziggy@mouthygeese.com';
const PASSWORD = 'suxvIm-nipnod-sygro0';

async function createPMODocs() {
  try {
    console.log('🔐 Logging in...');
    const { cookies } = await loginWithPassword(GRAPHQL_ENDPOINT, EMAIL, PASSWORD);
    
    console.log('🌐 Connecting to workspace...');
    const wsUrl = wsUrlFromGraphQLEndpoint(GRAPHQL_ENDPOINT);
    const ws = await connectWorkspaceSocket(wsUrl, WORKSPACE_ID, cookies);
    await joinWorkspace(ws, WORKSPACE_ID);
    
    // Doc 1: Enterprise PMO Research
    console.log('📄 Creating Enterprise PMO doc...');
    const researchDoc = new Y.Doc();
    const researchDocId = `research-pmo-${Date.now()}`;
    
    const researchContent = `# Enterprise PMO Capabilities → Smartsheet Framework

## Overview
This document outlines best-in-class enterprise PMO capabilities from leading platforms (Planview, Clarity PPM, ServiceNow PPM, Workfront) and maps them to Smartsheet implementation strategies for a consultant-grade construction PMO.

---

## 1. Strategic Alignment & Portfolio Prioritization

### Best-in-Class Capabilities
- **Strategic alignment framework**: Projects tied to organizational objectives
- **Portfolio prioritization scoring**: Multi-criteria decision analysis (value, risk, strategic fit, ROI)
- **Portfolio optimization**: Balance risk/reward, align to capacity constraints
- **Strategic roadmaps**: Visual timeline of initiatives aligned to strategy
- **Business capability planning**: Link projects to capability development

### Smartsheet Implementation
- **Scoring matrix**: Custom forms with weighted criteria (strategic value, ROI, risk, urgency)
- **Portfolio dashboard**: Risk-value bubble charts, priority grids
- **Roadmap views**: Timeline/Gantt views with strategic themes/lanes
- **Linking**: Projects → Strategic Objectives → Programs
- **Formulas**: Auto-calculated priority scores, capacity vs demand

---

## 2. Intake & Demand Management

### Best-in-Class Capabilities
- **Centralized intake forms**: Standardized project requests with business case
- **Stage-gate workflow**: Concept → Business Case → Scoring → Approval → Funding
- **Automated routing**: Requests flow to appropriate reviewers
- **Intake pipeline visibility**: Track all proposals from idea to execution
- **Shadow IT capture**: Include all work (even unsanctioned projects)

### Smartsheet Implementation
- **Intake form**: Published form with business case template
- **Workflow automation**: Auto-notify stakeholders at each gate
- **Request pipeline sheet**: Status tracking (Submitted → Under Review → Approved/Rejected → Funded)
- **Governance board view**: Dashboard for leadership to review/approve
- **Integration**: Intake → Project creation automation

---

## 3. Resource Capacity Planning & Allocation

### Best-in-Class Capabilities
- **Resource pool management**: Skills, roles, availability tracking
- **Capacity planning**: Aggregate demand vs available capacity (3-6 month rolling view)
- **Intelligent resource matching**: Skill-based allocation
- **Utilization tracking**: Actual vs planned, billable vs non-billable
- **Scenario planning**: What-if analysis for resource allocation
- **Bottleneck identification**: Flag over-allocated resources

### Smartsheet Implementation
- **Resource Management** (Smartsheet add-on): People, availability, skills
- **Capacity dashboards**: Utilization charts, over-allocation alerts
- **Project resource plans**: Assign by role/person with effort estimates
- **Roll-up views**: Portfolio-level resource heat maps
- **Allocation formulas**: Track planned vs actual hours
- **Reports**: Resource utilization by person/department

---

## 4. Financial Management

### Best-in-Class Capabilities
- **Budget planning**: Top-down and bottom-up budget creation
- **Cost tracking**: Budgets, forecasts, actuals (time-phased)
- **Earned value management**: CPI, SPI, EAC calculations
- **Portfolio financial rollup**: Aggregate spend across programs
- **Financial forecasting**: Runway analysis, burn rate projections
- **Cost allocation**: Track costs by project, program, department

### Smartsheet Implementation
- **Budget sheets**: Project-level budget line items
- **Forecast vs Actual**: Monthly/quarterly tracking
- **Formula-driven EVM**: Auto-calculate EV, CV, SV, CPI, SPI
- **Portfolio financial dashboard**: Total budget, spend, variance
- **Linked sheets**: Projects roll up to Programs → Portfolio
- **Alerts**: Budget variance triggers (>10% over)

---

## 5. Risk & Issue Management

### Best-in-Class Capabilities
- **Risk register**: Centralized risk tracking across portfolio
- **Risk scoring**: Probability × Impact = Exposure
- **Risk heat maps**: Visual portfolio risk view
- **Issue tracking**: Open issues, escalations, resolution tracking
- **Dependency management**: Cross-project dependencies and blockers
- **Proactive alerts**: Risks approaching trigger thresholds

### Smartsheet Implementation
- **Risk register sheet**: Per project + portfolio rollup
- **Risk scoring formulas**: Auto-calculate risk exposure
- **Heat map dashboard**: Color-coded risk visualization
- **Issue tracker**: Status, owner, priority, aging metrics
- **Dependency tracking**: Predecessor/successor linking across sheets
- **Automated alerts**: High-priority risks trigger notifications

---

## 6. Program & Multi-Site Rollout Management

### Best-in-Class Capabilities (Construction-Specific)
- **Program hierarchy**: Program → Sites → Phases
- **Multi-site visibility**: Unified dashboard across all locations
- **Site status tracking**: Progress, schedule, budget by site
- **Early warning systems**: Flag delays, cost overruns, safety issues
- **Field data capture**: Mobile forms, photos, inspections
- **Vendor/subcontractor management**: Prequalification, compliance, performance
- **GPS tracking**: Team/equipment location visibility

### Smartsheet Implementation
- **Hierarchy structure**: Program master sheet → Site sheets (roll-up)
- **Site dashboard**: Status grid (Red/Yellow/Green) for all sites
- **Progress tracking**: % complete, milestones, critical path
- **Mobile forms**: Field inspection checklists, photo uploads
- **Vendor database**: Compliance tracking (insurance, licenses, certifications)
- **Alerts**: Auto-escalate critical issues
- **Reports**: Program-level rollup (schedule, budget, quality, safety)

---

## 7. Reporting & Dashboards

### Best-in-Class Capabilities
- **Executive dashboards**: Portfolio health at a glance
- **Real-time data**: Live updates, no manual refresh
- **Custom KPIs**: Flexible metrics (on-time %, budget variance, resource utilization)
- **Drill-down capability**: Executive view → Program → Project → Task
- **Visual analytics**: Charts, heat maps, Gantt timelines
- **Automated distribution**: Scheduled reports to stakeholders

### Smartsheet Implementation
- **Portfolio dashboard**: Health, financials, resource utilization, risks
- **Program dashboards**: Site rollup metrics
- **Project scorecards**: Red/yellow/green status indicators
- **Chart widgets**: Budget burn, schedule progress, resource allocation
- **Conditional formatting**: Auto-highlight issues
- **Report distribution**: Automated PDF emails (weekly/monthly)

---

## 8. Governance & Standardization

### Best-in-Class Capabilities
- **PMO methodology**: Standardized processes, templates, best practices
- **Project lifecycle**: Initiation → Planning → Execution → Closeout
- **Quality gates**: Required deliverables at each stage
- **Audit trail**: Change history, approvals, compliance tracking
- **Template library**: Reusable project templates
- **Training & onboarding**: Resources for PMs and stakeholders

### Smartsheet Implementation
- **Control Center** (if budget allows): Blueprint-driven project creation
- **Template sets**: Project plans, RAID logs, status reports
- **Workflows**: Approval routing, stage-gate enforcement
- **Update requests**: Automated status collection
- **Activity log**: Built-in change tracking
- **Workspace organization**: Folders by program/department

---

## 9. Integration & Linking Architecture

### Best-in-Class Capabilities
- **System of record**: Single source of truth for all project data
- **API integrations**: Connect to ERP, CRM, ITSM, BI tools
- **Automated data sync**: Real-time updates across systems
- **Document management**: Link to SharePoint, Google Drive, Box
- **BI/analytics tools**: Power BI, Tableau integration for advanced reporting

### Smartsheet Implementation
- **Cell linking**: Data flows between sheets (Project → Program → Portfolio)
- **Data Shuttle**: Automated imports/exports (e.g., from QuickBooks, Excel)
- **API/Webhooks**: Connect to other tools (Jira, Salesforce, etc.)
- **Document attachments**: Link to cloud storage
- **Power BI connector**: Pull Smartsheet data into advanced analytics

---

## 10. Continuous Improvement

### Best-in-Class Capabilities
- **Lessons learned repository**: Capture post-project insights
- **Performance metrics**: Track PMO effectiveness over time
- **Process optimization**: Refine workflows based on data
- **Stakeholder feedback**: Regular surveys, retrospectives
- **Benchmarking**: Compare performance to industry standards

### Smartsheet Implementation
- **Lessons learned sheet**: Capture what worked/didn't work
- **PMO metrics dashboard**: Track portfolio performance trends
- **Retrospective forms**: Post-project feedback collection
- **KPI tracking**: Month-over-month improvement metrics
- **Process documentation**: Wiki/folder for SOPs and best practices

---

## Summary: Smartsheet as Enterprise PMO Platform

Smartsheet can replicate 80-90% of enterprise PMO capabilities with:
- **Native features**: Sheets, reports, dashboards, Gantt, forms, automation
- **Add-ons**: Resource Management, Control Center, Dynamic View
- **Integrations**: Data Shuttle, API, Power BI connector
- **Best practices**: Linking architecture, governance frameworks, template libraries

**Key advantages for consultants:**
- Flexible/configurable (not rigid like some enterprise tools)
- Visual and accessible to non-technical stakeholders
- Strong mobile experience for field teams
- Scales from single project to 1000+ site programs
- Lower cost than Planview/Clarity but enterprise-grade functionality

**Next step:** Fill out the PMO Build Questionnaire to configure this framework for your specific needs.
`;

    const researchBlocks = researchDoc.getMap('blocks');
    const researchPageId = `research-page-${Date.now()}`;
    researchBlocks.set(researchPageId, {
      'sys:id': researchPageId,
      'sys:flavour': 'affine:page',
      'sys:children': [],
      'prop:title': 'Enterprise PMO Capabilities → Smartsheet Framework'
    });
    
    // Doc 2: Questionnaire
    console.log('📋 Creating Questionnaire doc...');
    const questionnaireDoc = new Y.Doc();
    const questionnaireDocId = `questionnaire-pmo-${Date.now()}`;
    
    const questionnaireContent = `# PMO Build Questionnaire

Fill this out completely - the more detail you provide, the better the PMO system I can build for you in Smartsheet.

---

## Section 1: Business Context

### 1.1 Company Profile
- **Company name**:
- **Industry/sector**:
- **Primary service offering** (e.g., retail rollouts, healthcare construction, infrastructure):
- **Company size** (employees):
- **Annual revenue range** (optional):

### 1.2 Project Portfolio Overview
- **How many projects do you manage simultaneously**?
- **Typical project duration** (e.g., 3 months, 1 year):
- **Typical project budget range** (e.g., $50K-$500K, $1M-$10M):
- **Geographic scope** (single region, national, international):
- **Are you managing programs with multiple sites/locations**? If yes, typical program size (number of sites):

### 1.3 Current State
- **How do you currently manage projects**? (Excel, email, other software):
- **What's working well**?
- **What's broken/frustrating**?
- **Why are you moving to Smartsheet now**?

---

## Section 2: Organizational Structure

### 2.1 Teams & Roles
- **How many people will use Smartsheet**?
- **List the key roles** (e.g., PMO Director, Program Managers, Project Managers, Site Managers, Executives):
  - Role:
  - Count:
  - Primary responsibilities:
  
### 2.2 Reporting Structure
- **Who reports to whom** (brief org chart):
- **Who are the key decision-makers** (approval authority):
- **Who needs visibility but not editing access** (executives, clients, stakeholders):

### 2.3 External Stakeholders
- **Do you work with external partners** (GCs, subcontractors, vendors, clients)?
- **Will they need access to Smartsheet**? (View-only, limited editing):
- **How do you currently share project info with them**?

---

## Section 3: Project Lifecycle & Processes

### 3.1 How Projects Start
- **How do new projects enter your pipeline**? (RFPs, client requests, internal initiatives):
- **Is there a formal intake process**? (forms, business case, approval workflow):
- **Who approves new projects**?
- **What information is collected upfront** (scope, budget, timeline, risks):

### 3.2 Project Phases
- **What are your standard project phases**? (e.g., Initiation, Planning, Execution, Closeout):
  - Phase 1:
  - Phase 2:
  - Phase 3:
  - Phase 4:
- **Are there stage gates / approval checkpoints**? Describe:

### 3.3 Deliverables & Milestones
- **What are typical project milestones**? (e.g., permits approved, groundbreaking, substantial completion):
- **What deliverables are required at each phase**? (plans, submittals, reports):

### 3.4 Change Management
- **How do you handle scope changes**?
- **Is there a formal change order process**?
- **Who approves changes**?

---

## Section 4: Resource Management

### 4.1 Resource Types
- **List your resource categories** (e.g., Project Managers, Site Supervisors, Engineers, Designers, Field Crews):
  - Category:
  - Count:
  - Skills/specialties:

### 4.2 Resource Allocation
- **How do you assign people to projects today**?
- **Do you track availability/capacity**?
- **Do you have challenges with over-allocation / resource conflicts**?
- **Do you need to match specific skills to projects** (e.g., MEP expertise, retail experience)?

### 4.3 Time Tracking
- **Do you track time on projects**?
- **How** (timesheets, honor system, field logs):
- **What do you use time data for** (billing, utilization, actuals vs estimates):

---

## Section 5: Financial Management

### 5.1 Budgeting
- **Who creates project budgets**?
- **What cost categories do you track** (labor, materials, subcontractors, equipment, overhead):
- **Do you use detailed line-item budgets or high-level estimates**?

### 5.2 Cost Tracking
- **How do you track actual costs today** (accounting system, manual updates):
- **Do you need Smartsheet to integrate with your accounting system** (QuickBooks, NetSuite, etc.)?
- **How often do you update costs** (daily, weekly, monthly):

### 5.3 Financial Reporting
- **What financial metrics do you need to track**?
  - Budget vs Actual
  - Burn rate / Runway
  - Profit margin
  - Earned Value (EVM)
  - Other:
- **Who needs to see financial data**?
- **How often** (real-time, weekly, monthly):

---

## Section 6: Risk & Issue Management

### 6.1 Risk Management
- **Do you actively manage project risks**?
- **How do you identify and track risks today**?
- **Do you use a risk scoring method** (probability × impact):
- **Who owns risk management** (PM, PMO, leadership):

### 6.2 Issue Tracking
- **How do you currently track issues/problems**?
- **What issue categories are common** (schedule delays, budget overruns, safety, quality, permitting):
- **How are issues escalated**?

### 6.3 Dependencies
- **Do you track cross-project dependencies** (one project blocking another)?
- **How do you manage them today**?

---

## Section 7: Program & Multi-Site Management

### 7.1 Program Structure (if applicable)
- **Do you run multi-site programs**? If no, skip to Section 8.
- **Typical program size** (number of sites):
- **Are sites executed in parallel or sequentially**?
- **Do you have a standard site rollout process**?

### 7.2 Site Tracking
- **What data do you track per site**?
  - Schedule (start, milestones, finish)
  - Budget (total, spent, variance)
  - Status (on track, at risk, delayed)
  - Quality/safety metrics
  - Vendor/subcontractor performance
  - Other:

### 7.3 Field Operations
- **Do field teams report data back to the PMO**?
- **How** (emails, phone, forms, photos):
- **What mobile capabilities do you need** (inspection forms, daily logs, photo uploads):
- **Do you need GPS/location tracking**?

---

## Section 8: Vendor & Subcontractor Management

### 8.1 Vendor Database
- **Do you work with subcontractors/vendors**?
- **How many** (approximate):
- **Do you need a vendor database in Smartsheet**?
- **What vendor info do you need to track**?
  - Contact details
  - Insurance/licensing/certifications
  - Performance ratings
  - Contract terms
  - Other:

### 8.2 Prequalification & Compliance
- **Do you prequalify vendors**?
- **What compliance requirements do you track** (insurance, licenses, safety training):
- **How often do you verify compliance**?

---

## Section 9: Reporting & Dashboards

### 9.1 Stakeholder Reporting Needs

**For Executives/Leadership:**
- What do they need to see? (portfolio health, financials, top risks)
- How often?
- Preferred format (dashboard, PDF report, slideshow):

**For Program Managers:**
- What do they need to see? (program rollup, site status, resource allocation)
- How often?
- Preferred format:

**For Project Managers:**
- What do they need to see? (project details, tasks, budget, issues)
- How often?
- Preferred format:

**For Clients/External Stakeholders:**
- What can they see? (limited to specific projects, no financials)
- How will they access? (view-only link, Dynamic View, automated reports):

### 9.2 Key Performance Indicators (KPIs)
List the top 10 metrics you need to track:
1.
2.
3.
4.
5.
6.
7.
8.
9.
10.

### 9.3 Report Frequency & Distribution
- **Daily**: What needs to be reported daily?
- **Weekly**: Weekly status reports? To whom?
- **Monthly**: Monthly executive summaries? Board reports?
- **Automated**: Do you want automated report distribution (scheduled emails)?

---

## Section 10: Integrations & Systems

### 10.1 Current Tools
List the tools you currently use:
- **Accounting/ERP** (QuickBooks, NetSuite, etc.):
- **CRM** (Salesforce, HubSpot, etc.):
- **Document storage** (Google Drive, SharePoint, Box, Dropbox):
- **Communication** (Slack, Teams, email):
- **Other project/construction software** (Procore, PlanGrid, Bluebeam):

### 10.2 Integration Needs
- **Which tools need to integrate with Smartsheet**?
- **What data should sync** (e.g., costs from QuickBooks, documents from SharePoint):
- **How often** (real-time, daily, manual):

---

## Section 11: Governance & Standards

### 11.1 Templates & Standardization
- **Do you want standardized project templates**? (yes/no):
- **What should be in the standard template**?
  - Task list / WBS
  - Schedule / Gantt
  - Budget tracker
  - Risk log
  - Issue tracker
  - Status report
  - Other:

### 11.2 Approval Workflows
- **What requires approval**? (new projects, budget changes, scope changes):
- **Who approves**?
- **How many approval steps**?

### 11.3 Naming Conventions
- **Do you have naming standards for projects**? (e.g., CLIENT-SITE-YEAR):
- **Folder structure preferences**? (by program, by client, by year):

---

## Section 12: Success Criteria & Priorities

### 12.1 What Does Success Look Like?
Describe what a successful PMO implementation means to you:
- (e.g., "Real-time visibility into all projects", "No more Excel hell", "Executives get what they need without asking")

### 12.2 Top 3 Priorities
What are the most important things to get right?
1.
2.
3.

### 12.3 Must-Have vs Nice-to-Have
- **Must-have features** (deal-breakers):
- **Nice-to-have features** (if time/budget allows):

### 12.4 Timeline
- **When do you need this live**?
- **Are there any critical deadlines** (upcoming programs, fiscal year start):

---

## Section 13: Open Questions / Additional Context

Anything else I should know?
- Special requirements?
- Unique challenges?
- Past experiences (good or bad) with PMO tools?
- Concerns about Smartsheet?

---

## Next Steps

Once you fill this out:
1. I'll review and may ask clarifying questions
2. I'll design the Smartsheet PMO architecture (sheet structure, linking, dashboards, workflows)
3. We'll build it out together in Smartsheet
4. Test, refine, train your team, go live

Let's build something great. ⚡
`;

    const questionnaireBlocks = questionnaireDoc.getMap('blocks');
    const questionnairePageId = `questionnaire-page-${Date.now()}`;
    questionnaireBlocks.set(questionnairePageId, {
      'sys:id': questionnairePageId,
      'sys:flavour': 'affine:page',
      'sys:children': [],
      'prop:title': 'PMO Build Questionnaire'
    });
    
    // For now, just create empty docs and we'll add content via append_paragraph
    console.log('✅ Docs structure created');
    console.log(`Research doc ID: ${researchDocId}`);
    console.log(`Questionnaire doc ID: ${questionnaireDocId}`);
    
    // Store IDs for later use
    console.log('\n📝 Doc IDs to use with append_paragraph:');
    console.log(`Research: ${researchDocId}`);
    console.log(`Questionnaire: ${questionnaireDocId}`);
    
    ws.close();
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

createPMODocs();
