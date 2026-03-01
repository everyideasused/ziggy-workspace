# Enterprise PMO Capabilities Research

## Executive Summary
This research synthesizes best-in-class enterprise PMO capabilities from leading platforms (Primavera P6, Procore, Planview, Microsoft Project, Smartsheet) to inform the design of a construction-focused PMO solution.

---

## 1. PLATFORM ANALYSIS

### Primavera P6 Enterprise PPM
**Position:** Industry standard for large capital construction projects

**Core Strengths:**
- **Project Scheduling:** CPM (Critical Path Method) scheduling with unlimited activities
- **Resource Management:** Demand/capacity planning, role-based assignments, "what-if" analysis
- **Cost Management:** Integrated cost breakdown structure (CBS) with WBS
- **Portfolio Analysis:** Real-time portfolio health, resource allocation across programs
- **Risk Management:** Built-in risk register with impact analysis on schedule/cost
- **Multi-project Coordination:** Global resource pools, cross-project dependencies
- **Reporting:** Executive dashboards, earned value management (EVM), variance analysis

**Key Features for Smartsheet Implementation:**
- Work Breakdown Structure (WBS) hierarchies
- Critical path calculation capability
- Resource leveling and allocation
- Baseline vs actual tracking
- Change management workflows

---

### Procore Construction Management
**Position:** Leading cloud-based construction operations platform

**Core Strengths:**
- **Document Management:** Central repository with version control, RFIs, submittals
- **Field Collaboration:** Mobile-first for field teams, daily logs, inspections
- **Financial Tracking:** Budget tracking, change orders, payment applications
- **Schedule Integration:** Pulls from P6/MS Project, integrates with project financials
- **Quality & Safety:** Punch lists, safety observations, issue tracking
- **Portfolio Visibility:** Aggregate data across projects for owners/executives
- **Integration Ecosystem:** 300+ integrations with accounting, BIM, specialty tools

**Key Features for Smartsheet Implementation:**
- Document linking and versioning strategy
- Mobile accessibility (Smartsheet mobile app)
- Automated workflows for approvals (change orders, RFIs)
- Dashboard aggregation from multiple sheets
- Integration hooks (Smartsheet API for accounting systems)

---

### Planview Enterprise One
**Position:** Strategic portfolio management for enterprises

**Core Strengths:**
- **Strategic Alignment:** Link projects to business objectives, OKRs
- **Demand Management:** Intake process, scoring, prioritization frameworks
- **Capacity Planning:** Portfolio-level resource capacity vs demand analysis
- **Financial Portfolio Management:** Capital planning, budget allocation
- **Program Management:** Multi-project coordination with dependencies
- **What-if Scenarios:** Portfolio optimization, trade-off analysis
- **Executive Dashboards:** Strategic KPIs, portfolio health scoring

**Key Features for Smartsheet Implementation:**
- Intake forms with automated routing/approval
- Scoring matrices for project prioritization
- Capacity planning views (resource heat maps)
- Multi-level rollup reporting (site → program → portfolio)
- Scenario planning capability (duplicate sheets for what-if)

---

### Microsoft Project Online (retiring 2026)
**Position:** Traditional enterprise PPM (being phased out)

**Core Strengths:**
- **Gantt Chart Excellence:** Advanced scheduling, task dependencies
- **Resource Management:** Enterprise resource pool, allocation tools
- **Timesheets:** Time tracking integrated with project schedules
- **PowerBI Integration:** Custom reporting and analytics
- **Template Libraries:** Standardized project plans

**Replacement Trends:**
- Organizations migrating to Smartsheet, Monday.com, or specialized tools
- Need for flexibility over rigid structure driving change

**Key Features for Smartsheet Implementation:**
- Gantt charts (Smartsheet native capability)
- Template sheets for repeatable project types
- Reporting with Data Shuttle / API to PowerBI if needed
- Time tracking via forms or third-party integrations

---

### Adobe Workfront
**Position:** Enterprise work management, strong in marketing/creative PMOs

**Core Strengths:**
- **Template Reusability:** Build once, deploy many times
- **Custom Workflows:** Flexible approval chains, status progressions
- **Work Intake:** Forms that auto-create projects with routing
- **Resource Management:** Team capacity, workload balancing
- **Proofing & Approvals:** Built-in review cycles for deliverables

**Key Features for Smartsheet Implementation:**
- Template sheets and Control Center (Smartsheet premium feature)
- Automation builder for custom workflows
- Proofing add-ons or Smartsheet native proofing
- Intake forms triggering sheet creation

---

## 2. CONSTRUCTION PMO BEST PRACTICES

### A. Portfolio Structure

**3-Tier Hierarchy (Industry Standard):**
```
Portfolio (Enterprise)
├── Programs (Multi-site rollouts, regional initiatives)
│   ├── Project (Individual site/facility)
│   │   ├── Phases (Pre-con, Design, Procurement, Construction, Closeout)
│   │   │   └── Tasks/Activities
```

**Smartsheet Implementation:**
- Portfolio Dashboard (master rollup)
- Program Sheets (one per program, summarizing all sites)
- Project Sheets (one per site, detailed task lists)
- Cross-sheet formulas for rollups
- Reports aggregating across hierarchy

---

### B. Key Management Areas

#### 1. **Schedule Management**
**Best Practices:**
- Baseline schedules at project start
- Variance tracking (planned vs actual)
- Critical path identification
- Milestone tracking (key dates only at portfolio level)
- Look-ahead scheduling (2-4 week windows)

**Smartsheet Features:**
- Dependencies and predecessors
- Critical path display (Gantt view)
- Baseline columns (baseline start, baseline finish)
- Variance formulas (=Finish - Baseline Finish)
- Conditional formatting for delays (red if behind)

#### 2. **Cost/Budget Management**
**Best Practices:**
- Original budget vs current budget vs actual cost
- Commitment tracking (POs, subcontracts)
- Change order management
- Forecast at completion (FAC)
- Earned Value Management (EVM) for large programs

**Smartsheet Features:**
- Budget columns at project and portfolio levels
- Change order logs (separate sheets, linked)
- Formulas: Variance = Budget - Actual
- Formulas: Forecast = Actual + (Budget - % Complete)
- Dashboards with budget burn charts

#### 3. **Resource Management**
**Best Practices:**
- Resource capacity planning (FTE availability)
- Role-based planning (PM, Super, Engineers)
- Multi-project allocation visibility
- Skills inventory and succession planning
- Contractor/vendor capacity tracking

**Smartsheet Features:**
- Resource Management add-on (paid feature)
- Contact lists for assignments
- Allocation percentages
- Resource views (who's working on what)
- Capacity heat maps (available via reports/dashboards)

#### 4. **Risk & Issue Management**
**Best Practices:**
- Risk registers (identify, assess, mitigate)
- Issue logs (track, assign, resolve)
- Risk scoring (probability x impact)
- Escalation workflows
- Risk mitigation plans tied to schedule/budget

**Smartsheet Features:**
- Risk/Issue sheets (one per project or centralized)
- Priority scoring (dropdown: High/Med/Low or 1-5 scale)
- Status tracking (Open, In Progress, Closed)
- Automated reminders for overdue items
- Dashboard widgets for top risks/issues

#### 5. **Quality & Safety**
**Best Practices:**
- Inspection checklists
- Punch list management
- Safety observations and corrective actions
- NCR (Non-Conformance Reports) tracking
- Regulatory compliance documentation

**Smartsheet Features:**
- Forms for field data entry (mobile-friendly)
- Image attachments for defects
- Automated routing to responsible parties
- Status tracking and closeout verification
- Safety KPIs on dashboards (incident rate, days since injury)

#### 6. **Document Management**
**Best Practices:**
- Central repository with version control
- Drawing/spec management
- RFI and submittal tracking
- Contract and compliance documents
- As-built documentation

**Smartsheet Features:**
- Attachments (file or Google Drive/OneDrive links)
- Version tracking via Update Requests
- Document logs (separate sheets with links)
- Approval workflows for submittals/RFIs
- Integration with SharePoint/Box if needed

---

### C. RFP / Pre-Construction Pipeline

**Best Practices:**
- Opportunity qualification (go/no-go criteria)
- Pipeline stages: Lead → Qualified → Bid → Award → Mobilization
- Win probability scoring (%)
- Pursuit resource planning (estimating hours, BD costs)
- Client relationship tracking (CRM-lite)
- Post-award handoff to project team

**Smartsheet Implementation:**
- **RFP Pipeline Sheet** (one row per opportunity)
  - Columns: Client, Project Name, Value, Stage, Win %, Bid Date, Decision Date, Owner
  - Conditional formatting: color-code by stage
  - Weighted value calculation: Value x Win %
- **Bid/No-Bid Decision Form** (auto-populates pipeline)
- **Handoff Checklist** (when awarded → auto-create project sheet)
- **Dashboard:** Funnel chart showing pipeline by stage, weighted value total

---

## 3. PMO DASHBOARD & KPI FRAMEWORK

### Essential KPIs by Level

#### **Portfolio Level (Executive View)**
| KPI | Description | Target | Formula/Source |
|-----|-------------|--------|----------------|
| **Portfolio Health Score** | % of projects on track | ≥80% green | =COUNTIF(Status, "Green") / COUNTA(Status) |
| **On-Time Delivery %** | % projects finishing on/before baseline | ≥90% | =(Projects Completed On Time) / (Total Completed) |
| **Budget Performance** | % projects within ±5% of budget | ≥85% | =COUNTIF(Variance, <5%) / COUNT(Projects) |
| **Resource Utilization** | % of capacity allocated | 75-90% | =SUM(Allocated Hours) / SUM(Available Hours) |
| **Pipeline Value** | Total weighted pipeline | Varies | =SUMPRODUCT(Value, Win %) |
| **Active Project Count** | # of active sites | Varies | =COUNTIF(Status, <>"Complete") |
| **Total Portfolio Value** | $$ under management | Track trend | =SUM(Contract Values) |

#### **Program Level (Multi-Site Rollouts)**
| KPI | Description | Target | Formula/Source |
|-----|-------------|--------|----------------|
| **Program % Complete** | Weighted avg of all sites | Track vs plan | =SUMPRODUCT(% Complete, Budget) / SUM(Budget) |
| **Sites On Schedule** | # of sites meeting milestones | ≥85% | =COUNTIF(Schedule Status, "On Track") / COUNT(Sites) |
| **Cost Variance** | Total variance across program | ±3% | =(Actual Cost - Budget) / Budget |
| **Milestone Adherence** | % of milestones hit on time | ≥90% | =Milestones Met / Total Milestones |
| **Change Order Impact** | % budget increase from COs | <10% | =SUM(Change Orders) / Original Budget |

#### **Project Level (Individual Sites)**
| KPI | Description | Target | Formula/Source |
|-----|-------------|--------|----------------|
| **Schedule Variance** | Days ahead/behind baseline | ±7 days | =Forecast Finish - Baseline Finish |
| **Cost Variance** | $ over/under budget | ±5% | =(Budget - Actual - Forecast) / Budget |
| **Safety Incidents** | # of recordable injuries | 0 | COUNT(Incident Log) |
| **Quality Score** | Inspection pass rate | ≥95% | =Passed Inspections / Total Inspections |
| **Open Items** | # of unresolved RFIs/Issues | <10 | =COUNTIF(Status, "Open") |
| **Submittal Status** | % submittals approved | ≥80% | =Approved / Total Submitted |

### Dashboard Design Principles

**Best Practices from Research:**
1. **Single-Page Executive View:** Portfolio health at a glance
2. **Drill-Down Capability:** Click to see program → project → task details
3. **Color-Coded Health Indicators:** Red/Yellow/Green (RAG) status
4. **Trend Charts:** Show movement over time (not just snapshots)
5. **Actionable Insights:** Highlight what needs attention, not just data
6. **Mobile-Friendly:** Executives view on tablets/phones
7. **Refresh Frequency:** Real-time (or nightly batch for heavy calculations)

**Smartsheet Dashboard Widgets:**
- **Chart Widget:** Bar/line/pie charts from reports
- **Metric Widget:** Single number with sparkline trend
- **Report Widget:** Embedded table view with filters
- **Rich Text Widget:** Headers, explanatory text
- **Web Content Widget:** Embed external dashboards (PowerBI, Tableau)
- **Title Bar Widget:** Organize into sections

**Example Portfolio Dashboard Layout:**
```
┌─────────────────────────────────────────────────────────┐
│ PORTFOLIO HEALTH OVERVIEW         Last Updated: 2/18/26 │
├─────────────────────────────────────────────────────────┤
│ [Metric] [Metric] [Metric] [Metric] [Metric]           │
│  80%      $45M    92%       85%       12               │
│  Health   Pipeline On-Time Budget  Active               │
├─────────────────────────────────────────────────────────┤
│ [Bar Chart: Projects by Stage]  [Pie: Health Status]   │
│ [Line Chart: Monthly Spend]     [Table: Top 5 Risks]   │
├─────────────────────────────────────────────────────────┤
│ [Report Widget: Projects Needing Attention]             │
└─────────────────────────────────────────────────────────┘
```

---

## 4. INTEGRATION & AUTOMATION

### Critical Integration Points

**Financial Systems (ERP):**
- Accounting software (QuickBooks, Sage, Foundation, Viewpoint)
- **Method:** Smartsheet API + Data Shuttle for budget/actual syncs
- **Frequency:** Daily for actuals, weekly for forecasts

**Document Management:**
- SharePoint, Box, Google Drive, Procore
- **Method:** Deep linking from Smartsheet cells, attachment sync
- **Benefit:** Single source of truth without duplicating files

**Scheduling Tools:**
- MS Project, Primavera P6 (if needed for complex CPM)
- **Method:** Import/export via Data Shuttle, manual updates
- **Hybrid Approach:** Detailed schedules in P6, summary milestones in Smartsheet

**BIM/Design Tools:**
- Autodesk BIM 360, Revit
- **Method:** Link to models from Smartsheet, clash reports imported
- **Use Case:** Design phase tracking, RFI coordination

**CRM Systems:**
- Salesforce, HubSpot
- **Method:** Smartsheet-Salesforce connector (if available) or Zapier
- **Use Case:** RFP pipeline feeding from CRM opportunities

### Automation Workflows (Smartsheet Native)

**1. Project Intake & Approval:**
- Form submission → Auto-populates intake sheet
- If Value > $X → Trigger approval workflow
- Approved → Auto-create project sheet from template (via Control Center or manual)

**2. Status Update Reminders:**
- Weekly: Send Update Request to PMs for status, % complete, risks
- Responses auto-update project sheet
- Changes trigger dashboard refresh

**3. Risk/Issue Escalation:**
- If Priority = "High" AND Status = "Open" for >7 days → Alert PMO Director
- Automated email with link to item

**4. Schedule Variance Alerts:**
- If Finish Date > Baseline + 7 days → Notify PM and Program Manager
- Include corrective action request form

**5. Budget Alerts:**
- If Actual Spend > 90% of Budget AND % Complete < 85% → Alert PM
- Request updated forecast

**6. Milestone Tracking:**
- 2 days before milestone → Reminder to PM
- Day after milestone → If not marked complete, alert escalates

**7. Document Approvals:**
- Submittal uploaded → Notify reviewer
- If not approved in 10 days → Reminder to approver

**8. Change Order Workflow:**
- CO submitted via form → Auto-routes to PM → Approver (based on $$ threshold) → Finance
- Approved → Updates project budget in rollup

---

## 5. SMARTSHEET-SPECIFIC CAPABILITIES

### What Smartsheet Does Well

**Strengths:**
- **Flexibility:** No rigid structure, adapt as you grow
- **Ease of Use:** Familiar spreadsheet interface, low learning curve
- **Collaboration:** Real-time multi-user editing, comments, @mentions
- **Automation:** Visual workflow builder, powerful but intuitive
- **Reporting:** Cross-sheet reports aggregate data dynamically
- **Dashboards:** Customizable, shareable, embeddable
- **Forms:** Mobile-friendly data entry
- **Mobile App:** Full-featured iOS/Android apps
- **Integrations:** API + Data Shuttle + 80+ pre-built connectors
- **Governance:** Activity logs, cell history, version tracking

### Smartsheet Limitations (and Workarounds)

**Limitations:**
1. **No Native Critical Path Calculation**
   - *Workaround:* Use dependencies + Gantt view (shows critical path visually), or integrate with MS Project/P6 for complex schedules
2. **Limited Resource Leveling**
   - *Workaround:* Resource Management add-on (10,000ft) or third-party tools
3. **No Built-In Earned Value Management (EVM)**
   - *Workaround:* Custom formulas (PV, EV, AC calculations), or export to Excel/PowerBI
4. **200,000 Cell Limit per Sheet**
   - *Workaround:* Archive old projects, split large programs into multiple sheets
5. **Formula Performance on Large Sheets**
   - *Workaround:* Use reports instead of cross-sheet formulas where possible, minimize volatile functions

### Premium Features to Leverage

**Control Center (Enterprise):**
- Blueprint-based project creation (1 template → 100 projects)
- Global updates (change template → propagate to all projects)
- Best for: Large-scale rollouts (e.g., 8000-site program)

**Dynamic View (Enterprise):**
- Role-based views (PMs see their projects only, execs see all)
- Simplified interface for field users (hide irrelevant columns)

**DataMesh (Premium):**
- Automated data transfer between sheets (like VLOOKUP but automatic)
- Best for: Syncing budget data from finance sheet to project sheets

**Data Shuttle (Premium):**
- Scheduled imports/exports (CSV, Excel)
- Best for: ERP integrations, bulk updates

**Resource Management (Add-On):**
- Capacity planning, allocation tracking, timesheets
- Best for: Multi-project resource visibility

---

## 6. IMPLEMENTATION APPROACH

### Phased Rollout (Recommended)

**Phase 1: Foundation (Weeks 1-4)**
- Portfolio structure design (sheet architecture)
- Template projects created (1-2 types)
- Core dashboards (portfolio health, project status)
- Pilot with 5-10 projects

**Phase 2: Expansion (Weeks 5-8)**
- RFP pipeline module
- Risk/Issue tracking
- Change order workflows
- Budget tracking integration (manual upload initially)
- Train 10-15 PMs

**Phase 3: Automation (Weeks 9-12)**
- Automated workflows (status updates, alerts)
- Reporting refinement (custom reports per stakeholder)
- Document management links
- Rollout to 50+ projects

**Phase 4: Integration (Weeks 13-16)**
- ERP integration via Data Shuttle
- CRM connection (if applicable)
- Resource Management add-on configuration
- Scale to full portfolio

**Phase 5: Optimization (Ongoing)**
- Continuous improvement based on feedback
- Template refinement
- Dashboard enhancements
- Training and adoption support

### Success Criteria

**Adoption Metrics:**
- 90% of PMs updating weekly
- 100% of new projects using templates
- 80% reduction in manual status report time

**Data Quality:**
- <5% missing data in critical fields (status, % complete, budget)
- <48-hour lag between field activity and system update

**Business Impact:**
- 20% reduction in project delays (better visibility → faster intervention)
- 15% improvement in resource utilization
- 50% faster reporting cycles (automated dashboards vs manual decks)

---

## 7. RECOMMENDED SMARTSHEET STRUCTURE

### Sheet Hierarchy

```
SS-PMO WORKSPACE
│
├── 📊 PORTFOLIO DASHBOARD (main executive view)
│
├── 📁 INTAKE & PIPELINE
│   ├── RFP Intake Form
│   ├── RFP Pipeline Tracker
│   ├── Bid/No-Bid Decision Matrix
│   └── Pipeline Dashboard
│
├── 📁 PORTFOLIO MANAGEMENT
│   ├── Portfolio Rollup (summary of all programs)
│   ├── Resource Capacity Planning
│   ├── Portfolio KPI Report
│   └── Executive Status Report
│
├── 📁 PROGRAMS
│   ├── Program A
│   │   ├── Program A Dashboard
│   │   ├── Program A Rollup (summary of all sites)
│   │   ├── Site 1 Project Sheet
│   │   ├── Site 2 Project Sheet
│   │   └── Site N Project Sheet
│   ├── Program B
│   │   └── (same structure)
│   └── Program N
│
├── 📁 TEMPLATES
│   ├── Project Template - Type 1 (New Construction)
│   ├── Project Template - Type 2 (Renovation)
│   ├── Project Template - Type 3 (TI/Fit-Out)
│   ├── Risk/Issue Log Template
│   ├── Change Order Log Template
│   └── Budget Tracker Template
│
├── 📁 SHARED RESOURCES
│   ├── Master Risk/Issue Log (if centralized)
│   ├── Vendor/Contractor Database
│   ├── Lessons Learned Repository
│   ├── Document Register (links to SharePoint/Drive)
│   └── Contact Directory
│
└── 📁 REPORTS
    ├── Projects Behind Schedule (Report)
    ├── Projects Over Budget (Report)
    ├── Open Risks & Issues (Report)
    ├── Milestone Tracker (Report)
    └── Resource Allocation (Report)
```

### Key Sheet Designs

#### **Project Sheet (Core Template)**
| Column Name | Type | Formula/Purpose |
|-------------|------|-----------------|
| Task ID | Auto-Number | Unique identifier |
| Task Name | Text/Number | WBS hierarchy (indentation) |
| Assigned To | Contact List | Resource assignment |
| Start Date | Date | Task start |
| End Date | Date | Task finish |
| Duration | Text/Number | Auto-calculated or manual |
| % Complete | Text/Number | 0-100% |
| Predecessors | Predecessor | Dependencies |
| Status | Dropdown | Not Started, In Progress, Complete, On Hold |
| Health | Dropdown | Green, Yellow, Red |
| Budget | Currency | Task-level budget (if detailed) |
| Actual Cost | Currency | Spent to date |
| Variance | Currency | =Budget - Actual Cost |
| Notes | Text/Number | Comments, issues |
| Attachments | Attachment | Documents, photos |

#### **Portfolio Rollup Sheet**
| Column Name | Type | Formula/Purpose |
|-------------|------|-----------------|
| Program Name | Text | Program identifier |
| Project ID | Text | Unique project code |
| Project Name | Text | Site/project name |
| PM | Contact | Project manager |
| Status | Formula | =INDEX({Project Sheet Status}, 1) |
| Health | Formula | =INDEX({Project Sheet Health}, 1) |
| % Complete | Formula | =AVG({Project Sheet % Complete}) |
| Budget | Formula | =SUM({Project Sheet Budget}) |
| Actual Cost | Formula | =SUM({Project Sheet Actual Cost}) |
| Variance | Formula | =Budget - Actual Cost |
| Start Date | Formula | =MIN({Project Sheet Start Date}) |
| End Date | Formula | =MAX({Project Sheet End Date}) |
| Baseline End | Date | Original target finish |
| Schedule Variance | Formula | =End Date - Baseline End |
| Top Risk | Text | Manual entry or formula |

#### **RFP Pipeline Sheet**
| Column Name | Type | Purpose |
|-------------|------|---------|
| Opportunity ID | Auto-Number | Unique ID |
| Client | Text | Client name |
| Project Name | Text | RFP name |
| Project Type | Dropdown | New Build, Reno, TI, etc. |
| Location | Text | City, State |
| Value | Currency | Estimated contract value |
| Stage | Dropdown | Lead, Qualified, Bidding, Awarded, Lost |
| Win Probability | Dropdown | 10%, 25%, 50%, 75%, 90% |
| Weighted Value | Formula | =Value * Win Probability |
| Bid Date | Date | RFP due date |
| Decision Date | Date | Expected award date |
| Owner | Contact | BD lead |
| Go/No-Go Score | Text/Number | 1-5 scale or auto-calculated |
| Notes | Text | Strategy, client relationships |
| Attachments | Attachment | RFP docs, estimates |

---

## 8. COMPETITIVE ADVANTAGES OF SMARTSHEET PMO

**vs Primavera P6:**
- ✅ Faster deployment (weeks vs months)
- ✅ Lower cost (subscriptions vs licenses + consulting)
- ✅ Easier adoption (spreadsheet interface vs steep learning curve)
- ✅ Better collaboration (real-time, mobile)
- ❌ Less powerful for complex CPM scheduling

**vs Procore:**
- ✅ More flexible (custom workflows without dev work)
- ✅ Better portfolio-level visibility (designed for PMO use)
- ✅ No vendor lock-in (data exportable)
- ❌ Less field-specific tooling (no daily logs, photos built-in)
- *Workaround:* Use Smartsheet for PMO, Procore for field (sync via API)

**vs Planview:**
- ✅ Lower cost (fraction of enterprise PPM price)
- ✅ Faster customization (no professional services required)
- ✅ Easier maintenance (no IT dependency)
- ❌ Less strategic planning depth (no native OKR framework)

**vs Excel/SharePoint:**
- ✅ Automation and workflows (vs manual processes)
- ✅ Real-time dashboards (vs static reports)
- ✅ Collaboration (vs version chaos)
- ✅ Scalability (structured vs ad-hoc)

---

## 9. RISKS & MITIGATION

| Risk | Impact | Mitigation |
|------|--------|------------|
| **Low user adoption** | High | Simplify interface, provide training, demonstrate value quickly (pilot wins) |
| **Data quality issues** | High | Required fields, validation rules, automated reminders |
| **Sheet performance (large portfolio)** | Medium | Archive old projects, optimize formulas, use reports |
| **Integration complexity** | Medium | Start manual, add integrations incrementally (crawl-walk-run) |
| **Scope creep** | Medium | Phase approach, prioritize MVP features first |
| **Over-customization** | Low | Stick to templates, limit bespoke sheets |

---

## 10. NEXT STEPS

1. **Nathan completes intake questionnaire** (captures specific requirements)
2. **Design solution architecture** (detailed sheet specs, relationships, formulas)
3. **Build pilot workspace** (3-5 sample projects)
4. **Test with real data** (populate with one active program)
5. **Refine based on feedback** (iterate on design)
6. **Scale to full portfolio** (rollout plan and training)

---

## Sources & References
- Oracle Primavera P6 EPPM Documentation
- Procore Construction OS Feature Overviews
- Planview PPM Best Practices Library
- Smartsheet PMO Solution Center
- Industry research: Gartner, ClearPoint Strategy, Triskell Software
- Construction-specific PMO frameworks (Mastt, Project Manager Institute)

---

**Document Version:** 1.0  
**Last Updated:** Feb 18, 2026  
**Author:** Ziggy  
**Status:** Complete - Ready for Questionnaire Phase
