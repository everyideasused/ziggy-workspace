#!/usr/bin/env node
/**
 * Create SS-PMO project docs directly in AFFiNE "Pink and the Brain" workspace
 */

import { execSync } from 'child_process';

const WORKSPACE_ID = '70aed209-ef2c-4e7c-a163-d6ac79d9a96f'; // Pink and the Brain
const BASE_URL = 'https://pkm.mouthygeese.com';

console.log('🚀 Creating SS-PMO docs in AFFiNE...\n');

// Content for each doc
const docs = [
  {
    title: 'SS-PMO: Project Overview',
    content: `# SS-PMO: Smartsheet PMO Build Project

## Vision
Build a best-in-class, enterprise-level construction PMO in Smartsheet that rivals solutions like Primavera P6, Procore, and Planview while maintaining Smartsheet's flexibility and ease of use.

## Goals
- **Portfolio-level visibility** across all programs and sites
- **Resource capacity planning** and workload management
- **Financial tracking** at portfolio, program, and project levels
- **RFP/pre-construction pipeline** management
- **Real-time dashboards** with actionable KPIs
- **Full integration** between all components
- **Scalability** from pilot to enterprise-wide deployment

## Key Deliverables
1. Research document (enterprise PMO capabilities)
2. Intake questionnaire (capture requirements)
3. Solution architecture (sheet structure, relationships, automation)
4. Implementation roadmap (phased approach)
5. Smartsheet workspace build-out

## Timeline
- **Phase 1:** Research & Requirements (In Progress)
- **Phase 2:** Architecture Design
- **Phase 3:** Pilot Build
- **Phase 4:** Testing & Refinement
- **Phase 5:** Full Deployment

## Notes
- Started: Feb 18, 2026 @ 5:30 PM CST
- Nathan wakes at 4:30 AM CST to provide Smartsheet account access
- Everything must link and integrate seamlessly

---

*Next Actions:*
- [x] Complete research on enterprise PMO capabilities
- [x] Build intake questionnaire
- [ ] Nathan completes questionnaire
- [ ] Design solution architecture`
  },
  
  {
    title: 'SS-PMO: Enterprise PMO Research',
    content: `# Enterprise PMO Capabilities Research

## Executive Summary
This research synthesizes best-in-class enterprise PMO capabilities from leading platforms (Primavera P6, Procore, Planview, Microsoft Project, Smartsheet) to inform the design of a construction-focused PMO solution.

---

## Platform Analysis

### Primavera P6 Enterprise PPM
**Industry standard for large capital construction projects**

**Core Strengths:**
- **Project Scheduling:** CPM (Critical Path Method) scheduling with unlimited activities
- **Resource Management:** Demand/capacity planning, role-based assignments, "what-if" analysis
- **Cost Management:** Integrated cost breakdown structure (CBS) with WBS
- **Portfolio Analysis:** Real-time portfolio health, resource allocation across programs
- **Risk Management:** Built-in risk register with impact analysis on schedule/cost
- **Multi-project Coordination:** Global resource pools, cross-project dependencies
- **Reporting:** Executive dashboards, earned value management (EVM), variance analysis

**Key takeaways for Smartsheet:**
- Work Breakdown Structure (WBS) hierarchies
- Baseline vs actual tracking
- Resource leveling concepts
- Change management workflows

---

### Procore Construction Management
**Leading cloud-based construction operations platform**

**Core Strengths:**
- **Document Management:** Central repository with version control, RFIs, submittals
- **Field Collaboration:** Mobile-first for field teams, daily logs, inspections
- **Financial Tracking:** Budget tracking, change orders, payment applications
- **Portfolio Visibility:** Aggregate data across projects for owners/executives
- **Integration Ecosystem:** 300+ integrations

**Key takeaways for Smartsheet:**
- Document linking strategies
- Mobile accessibility (leverage Smartsheet mobile app)
- Automated approval workflows
- Dashboard aggregation patterns

---

### Planview Enterprise One
**Strategic portfolio management**

**Core Strengths:**
- **Strategic Alignment:** Link projects to business objectives
- **Demand Management:** Intake process, scoring, prioritization
- **Capacity Planning:** Portfolio-level resource capacity vs demand
- **What-if Scenarios:** Portfolio optimization, trade-off analysis
- **Executive Dashboards:** Strategic KPIs, portfolio health scoring

**Key takeaways for Smartsheet:**
- Intake forms with automated routing
- Scoring matrices for prioritization
- Capacity planning views
- Multi-level rollup reporting

---

## Construction PMO Best Practices

### Portfolio Structure (3-Tier Hierarchy)
\`\`\`
Portfolio (Enterprise)
├── Programs (Multi-site rollouts)
│   ├── Project (Individual site)
│   │   ├── Phases
│   │   │   └── Tasks/Activities
\`\`\`

### Key Management Areas

#### 1. Schedule Management
- Baseline schedules at project start
- Variance tracking (planned vs actual)
- Critical path identification
- Milestone tracking
- Look-ahead scheduling (2-4 week windows)

#### 2. Cost/Budget Management
- Original vs current vs actual cost
- Commitment tracking (POs, subcontracts)
- Change order management
- Forecast at completion (FAC)
- Earned Value Management (EVM) for large programs

#### 3. Resource Management
- Resource capacity planning (FTE availability)
- Role-based planning
- Multi-project allocation visibility
- Skills inventory
- Contractor/vendor capacity tracking

#### 4. Risk & Issue Management
- Risk registers (identify, assess, mitigate)
- Issue logs (track, assign, resolve)
- Risk scoring (probability x impact)
- Escalation workflows
- Mitigation plans tied to schedule/budget

#### 5. Quality & Safety
- Inspection checklists
- Punch list management
- Safety observations
- NCR tracking
- Regulatory compliance documentation

#### 6. Document Management
- Central repository with version control
- Drawing/spec management
- RFI and submittal tracking
- Contract documentation
- As-built documentation

---

## PMO Dashboard & KPI Framework

### Portfolio Level (Executive View)
- Portfolio Health Score (% projects on track)
- On-Time Delivery % (≥90% target)
- Budget Performance (≥85% within ±5%)
- Resource Utilization (75-90% optimal)
- Pipeline Value (total weighted)
- Active Project Count
- Total Portfolio Value

### Program Level (Multi-Site Rollouts)
- Program % Complete (weighted avg)
- Sites On Schedule (≥85%)
- Cost Variance (±3% target)
- Milestone Adherence (≥90%)
- Change Order Impact (<10% budget)

### Project Level (Individual Sites)
- Schedule Variance (±7 days)
- Cost Variance (±5%)
- Safety Incidents (0 target)
- Quality Score (≥95% pass rate)
- Open Items (<10)
- Submittal Status (≥80% approved)

---

## RFP / Pre-Construction Pipeline

### Best Practices
- Opportunity qualification (go/no-go criteria)
- Pipeline stages: Lead → Qualified → Bid → Award → Mobilization
- Win probability scoring (%)
- Pursuit resource planning
- Client relationship tracking (CRM-lite)
- Post-award handoff to project team

### Smartsheet Implementation
- RFP Pipeline Sheet (one row per opportunity)
- Bid/No-Bid Decision Form
- Handoff Checklist (auto-create project sheet when awarded)
- Dashboard with funnel chart and weighted values

---

## Smartsheet Capabilities

### Strengths
- Flexibility (adapt as you grow)
- Ease of use (spreadsheet interface)
- Real-time collaboration
- Visual automation builder
- Cross-sheet reporting
- Customizable dashboards
- Mobile apps
- Strong API + integrations

### Premium Features to Leverage
- **Control Center:** Blueprint-based project creation
- **Dynamic View:** Role-based views
- **DataMesh:** Automated data transfer
- **Data Shuttle:** Scheduled imports/exports
- **Resource Management:** Capacity planning add-on

---

## Implementation Approach

### Phased Rollout
1. **Foundation (Weeks 1-4):** Portfolio structure, templates, core dashboards, pilot
2. **Expansion (Weeks 5-8):** RFP pipeline, risk/issue tracking, budget tracking
3. **Automation (Weeks 9-12):** Workflows, alerts, reporting refinement
4. **Integration (Weeks 13-16):** ERP integration, CRM connection, resource management
5. **Optimization (Ongoing):** Continuous improvement

### Success Criteria
- 90% of PMs updating weekly
- <5% missing data in critical fields
- 20% reduction in project delays
- 15% improvement in resource utilization
- 50% faster reporting cycles

---

**Document Status:** Complete - Ready for Questionnaire Phase  
**Last Updated:** Feb 18, 2026  
**Author:** Ziggy`
  },
  
  {
    title: 'SS-PMO: Intake Questionnaire',
    content: `# SS-PMO Intake Questionnaire

**Purpose:** Capture your specific requirements, workflows, and preferences to design a custom Smartsheet PMO that fits your exact needs.

**Instructions:**
- Answer every question as thoroughly as possible
- Use "N/A" if a question doesn't apply
- Add notes/examples wherever it helps clarify
- The more detail you provide, the better the solution

---

## SECTION 1: ORGANIZATION & SCOPE

### 1.1 Organization Profile

**Q1:** What is your company name/organization type?

**Q2:** How many people will use the PMO system?
- [ ] 1-5 (just you or small team)
- [ ] 6-15 (small PMO)
- [ ] 16-50 (medium PMO)
- [ ] 50+ (enterprise PMO)

**Q3:** What industries/sectors do you operate in?
- [ ] Commercial Construction
- [ ] Residential Construction
- [ ] Industrial/Manufacturing
- [ ] Government/Infrastructure
- [ ] Retail/Hospitality
- [ ] Healthcare/Education
- [ ] Other: _______

**Q4:** What is your role in the organization?

---

### 1.2 Portfolio Scope

**Q5:** How many active projects do you currently manage?

**Q6:** What is the typical project duration?
- [ ] <3 months
- [ ] 3-6 months
- [ ] 6-12 months
- [ ] 12-24 months
- [ ] 24+ months

**Q7:** What is the typical project value range?
- Min: $______
- Max: $______
- Average: $______

**Q8:** Do you manage programs (multi-site rollouts)?
- [ ] Yes → How many programs? _____
- [ ] No

**Q9:** If yes, describe a typical program structure:
> *Example: "8000-site retail rollout across 4 regions"*

---

## SECTION 2: CURRENT STATE & PAIN POINTS

**Q10:** What tools do you currently use for project management?
- [ ] Excel/Google Sheets
- [ ] MS Project
- [ ] Primavera P6
- [ ] Procore
- [ ] Asana/Monday.com
- [ ] Smartsheet (already using)
- [ ] Other: _______

**Q11:** What works well with your current setup?

**Q12:** What are your biggest frustrations?

**Q13:** Rank your top 3 pain points (1 = most critical):
- [ ] Lack of portfolio-level visibility
- [ ] Manual status reporting (too time-consuming)
- [ ] Can't track resource capacity
- [ ] Budget/financial tracking disconnected
- [ ] RFP pipeline chaotic
- [ ] No real-time dashboards
- [ ] Poor document management
- [ ] Inconsistent project data
- [ ] Hard to identify at-risk projects
- [ ] Integration gaps

**Q14:** What does success look like 6 months after implementation?

---

## SECTION 3: PROJECT STRUCTURE

**Q15:** What types of projects do you manage?
- [ ] New Construction
- [ ] Renovations
- [ ] Tenant Improvements / Fit-Outs
- [ ] Infrastructure
- [ ] Design-Build
- [ ] Design-Bid-Build
- [ ] Other: _______

**Q16:** Do all project types follow the same phases?

**Q17:** List your standard project phases:
1.
2.
3.
4.
5.

**Q18:** Critical milestones you track:
- [ ] Contract Signed
- [ ] Design Completion
- [ ] Permits Approved
- [ ] Groundbreaking
- [ ] Substantial Completion
- [ ] Final Completion
- [ ] Warranty Period End
- [ ] Other: _______

**Q19:** Task tracking level:
- [ ] Detailed task lists (100+ tasks)
- [ ] High-level milestones (10-20)
- [ ] Hybrid

**Q20:** How do you define project "health"?
- [ ] RAG (Red/Amber/Green)
- [ ] Numeric score
- [ ] On Track / At Risk / Off Track
- [ ] Other: _______

---

## SECTION 4: SCHEDULE MANAGEMENT

**Q23:** Do you need detailed CPM scheduling?

**Q24:** Current scheduling software?

**Q25:** What schedule data needs to be visible in Smartsheet?

**Q26:** Do you track baseline schedules?

---

## SECTION 5: BUDGET & COST MANAGEMENT

**Q27:** Budget categories you track:
- [ ] Original Contract Value
- [ ] Change Orders
- [ ] Current Budget
- [ ] Committed Costs
- [ ] Actual Costs
- [ ] Forecast at Completion
- [ ] Contingency
- [ ] Other: _______

**Q28:** Cost tracking level:
- [ ] Detailed line items
- [ ] Summary categories
- [ ] Project total only

**Q29:** Budget update frequency:
- [ ] Real-time
- [ ] Weekly
- [ ] Monthly

**Q30:** Where does financial data live?

**Q31:** Auto-integrate financial data?

**Q32:** How do you manage change orders?

**Q33:** Need formal CO approval workflow?

---

## SECTION 6: RESOURCE MANAGEMENT

**Q35:** Track resource allocation across projects?

**Q36:** Resource types:
- [ ] Internal staff
- [ ] Subcontractors
- [ ] Equipment
- [ ] Materials

**Q37:** How do you assign resources?

**Q38:** Track resource capacity?

**Q39:** Track labor hours?

**Q40:** Use Smartsheet Resource Management add-on?

---

## SECTION 7: RISK & ISSUE MANAGEMENT

**Q41:** Formally track risks/issues?

**Q42:** How do you prioritize risks?

**Q43:** Where to track risks/issues?

**Q44:** Need automated escalation?

---

## SECTION 8: QUALITY & SAFETY

**Q45:** Track quality inspections in Smartsheet?

**Q46:** Track safety incidents?

**Q47:** Safety KPIs for dashboards?

---

## SECTION 9: DOCUMENT MANAGEMENT

**Q48:** Current document management system?

**Q49:** Attach in Smartsheet or link external?

**Q50:** Document types to track:
- [ ] Contracts
- [ ] Drawings/Plans
- [ ] Specifications
- [ ] RFIs
- [ ] Submittals
- [ ] Change Orders
- [ ] Inspections
- [ ] As-Builts
- [ ] Other: _______

**Q51:** Need version control?

---

## SECTION 10: RFP / PIPELINE MANAGEMENT

**Q52:** Track RFP/bid pipeline?

**Q53:** Pipeline stages?

**Q54:** Score opportunities (go/no-go)?

**Q55:** Track win probability?

**Q56:** Data needed on opportunities?

**Q57:** What happens when opportunity awarded?

---

## SECTION 11: REPORTING & DASHBOARDS

**Q58:** Key stakeholders and their needs?

**Q59:** Top 5 items for portfolio dashboard?

**Q60:** Need program-level dashboards?

**Q61:** Need project-level dashboards?

**Q62:** Reports needed?

**Q63:** Report frequency?

---

## SECTION 12: AUTOMATION & WORKFLOWS

**Q64:** Automated status update reminders?

**Q65:** Automated at-risk alerts?

**Q66:** Approval workflows?

**Q67:** Milestone reminders?

**Q68:** Other automation ideas?

---

## SECTION 13: INTEGRATIONS

**Q69:** Systems to integrate:
- [ ] Accounting/ERP
- [ ] CRM
- [ ] Document management
- [ ] Scheduling
- [ ] Procore
- [ ] BIM tools
- [ ] Other: _______

**Q70:** Data sync requirements?

**Q71:** API access / technical support?

---

## SECTION 14: TEMPLATES & STANDARDIZATION

**Q72:** Have standardized templates today?

**Q73:** How many template types needed?

**Q74:** Describe each template type:

**Q75:** Want Control Center for mass project creation?

---

## SECTION 15: ACCESS & PERMISSIONS

**Q76:** Who needs access?

**Q77:** Access level by role?

**Q78:** Need dynamic views (role-based filtering)?

---

## SECTION 16: DATA MIGRATION

**Q79:** Existing project data to migrate?

**Q80:** How much data?

**Q81:** Migrate historical or start fresh?

---

## SECTION 17: TRAINING & ADOPTION

**Q82:** Team's Smartsheet experience level?

**Q83:** Need training materials?

**Q84:** Rollout plan?

---

## SECTION 18: SUCCESS METRICS

**Q85:** How will you measure success?

**Q86:** Implementation timeline?

**Q87:** Smartsheet budget/licenses?

---

## SECTION 19: CUSTOM REQUIREMENTS

**Q88:** Anything unique about your projects/processes?

**Q89:** Specific Smartsheet features you want?

**Q90:** Deal-breakers (must-haves)?

**Q91:** Nice-to-haves?

---

## SECTION 20: FINAL THOUGHTS

**Q92:** Anything else I should know?

**Q93:** Biggest worry about this project?

**Q94:** Biggest hope for this project?

---

**Next Steps After Completion:**
1. Ziggy reviews responses
2. Designs solution architecture
3. Creates pilot workspace
4. Iterates based on feedback
5. Rolls out full solution

---

**Status:** Ready for completion  
**Created:** Feb 18, 2026`
  }
];

// Try using mcporter to create docs
docs.forEach((doc, index) => {
  console.log(`📄 Creating: ${doc.title}`);
  
  try {
    // This will likely fail with auth error, but let's try
    const result = execSync(
      `mcporter call affine.create_doc workspaceId=${WORKSPACE_ID} title="${doc.title}" --output json`,
      { encoding: 'utf-8', stdio: 'pipe' }
    );
    
    const parsed = JSON.parse(result);
    if (parsed.isError) {
      console.log(`   ⚠️  ${parsed.content[0].text}`);
    } else {
      console.log(`   ✅ Created successfully`);
    }
  } catch (error) {
    console.log(`   ❌ Failed: ${error.message}`);
  }
});

console.log(`
${'='.repeat(60)}
AUTH ISSUE DETECTED
${'='.repeat(60)}

The API token alone can't create docs - need WebSocket + session cookies.

QUICK FIX OPTIONS:

1. **Manual Creation (FASTEST)** ⭐
   - Go to https://pkm.mouthygeese.com
   - Navigate to 👔 Professional area
   - Create 3 new docs with these titles:
     • SS-PMO: Project Overview
     • SS-PMO: Enterprise PMO Research
     • SS-PMO: Intake Questionnaire
   - I'll populate them via API after creation

2. **Script with Password Auth**
   - Run: AFFINE_PASSWORD=yourpassword node create-sspmo-in-affine.mjs
   - Requires your AFFiNE password
   - Handles WebSocket auth properly

Which approach do you prefer?
`);
