---
type: resource
area: work
status: active
tags:
  - tally
  - estimating
  - construction
  - knowledge-base
  - agent
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Work Hub|Work Hub]]

---

# 🧮 Tally — Construction Estimator Knowledge Base

**Agent:** Tally  
**Role:** Construction estimator and cost analyst  
**Specialty:** ROM through GMP estimates, bid analysis, TIA validation, scope gap analysis, value engineering  
**KB Size:** 268 KB, 24 modules  
**Version:** 1.0  
**Created:** 2026-03-05

---

## Overview

Tally is Nathan's construction estimating agent with 25+ years of equivalent experience across commercial construction, tenant improvements, ground-up development, and multi-site retail/restaurant programs. This knowledge base provides the depth and structure for world-class estimating work from conceptual ROM through detailed GMP review.

**Primary capabilities:**
- ROM estimates (±25%) for site selection and feasibility
- Division-level estimates (±15%) for DD-phase validation
- Detailed CD estimates (±8%) for bid leveling
- GMP review and GC bid analysis
- TIA validation and landlord allowance analysis
- Scope gap identification and mitigation
- Value engineering and cost reduction strategies
- Change order evaluation and negotiation support

---

## Knowledge Base Structure

### Foundation (Core Methodology)

| Module | Purpose | Size |
|--------|---------|------|
| [[01-Estimating-Philosophy]] | Core principles, reasoning process, quality standards | 7.5 KB |
| [[02-Labor-Burden-and-Rates]] | Labor cost calculation, burden factors, regional rates | 8.6 KB |
| [[CSI-MasterFormat-Index]] | Complete CSI division reference with scope checklists | 13 KB |
| [[ESTIMATOR-MOC]] | Method of construction reference by building type | 5.9 KB |
| [[AGENT-System-Prompt]] | Agent communication configuration and reasoning protocol | 9.4 KB |

**Total Foundation:** 44.4 KB

---

### Project Type Benchmarks (PT-)

Parametric cost models by project type with SF breakdowns, typical scope, and cost drivers:

| Module | Project Type | Coverage |
|--------|--------------|----------|
| [[PT-Ground-Up-Commercial]] | New construction, shell buildings | 9.7 KB |
| [[PT-Medical-Healthcare]] | Medical, dental, vet clinics, imaging centers | 10 KB |
| [[PT-Merchandising-Services]] | Retail with service components (banks, auto service) | 11 KB |
| [[PT-Restaurant-TI]] | QSR, FSR, drive-thru formats | 9.3 KB |
| [[PT-Retail-TI]] | Big-box, specialty retail, department stores | 7.4 KB |
| [[PT-Shell-and-Core]] | Cold dark shell to warm lit shell upgrades | 8 KB |

**Total Project Types:** 55.4 KB

---

### Benchmarks & Regional Data (BM-)

Cost databases and regional multipliers for accurate pricing:

| Module | Purpose | Coverage |
|--------|---------|----------|
| [[BM-Medical-and-Merchandising]] | Unit costs for medical and service retail | 6.2 KB |
| [[BM-Regional-Cost-Index]] | City-by-city cost multipliers (200+ markets) | 6.4 KB |
| [[BM-Restaurant-and-Retail-Benchmarks]] | Unit costs by restaurant and retail format | 10 KB |

**Total Benchmarks:** 22.6 KB

---

### Risk Assessment (RISK-)

Risk identification, quantification, and contingency frameworks:

| Module | Purpose | Coverage |
|--------|---------|----------|
| [[RISK-Market-Conditions]] | Escalation rates, supply chain, labor availability | 7.4 KB |
| [[RISK-Red-Flags-and-Matrix]] | Red flag triggers, contingency matrix, risk scoring | 6.4 KB |

**Total Risk:** 13.8 KB

---

### Templates (TPL-)

Structured deliverables for common estimate types:

| Module | Purpose | Coverage |
|--------|---------|----------|
| [[TPL-Bid-Leveling-and-GMP-and-Narrative]] | GMP review format, bid comparison, narrative report | 16 KB |
| [[TPL-Merchandising-and-VE]] | Value engineering templates for retail/restaurant | 12 KB |
| [[TPL-ROM-and-Division-Estimate]] | ROM and division-level estimate templates | 11 KB |

**Total Templates:** 39 KB

---

### Workflows (WF-)

Step-by-step processes for common estimating tasks:

| Module | Workflow | Coverage |
|--------|----------|----------|
| [[WF-Bid-Leveling]] | Compare multiple GC bids, identify scope gaps, recommend award | 8.2 KB |
| [[WF-Change-Order-Review]] | Evaluate change order requests, validate pricing | 9 KB |
| [[WF-Conceptual-ROM-Budget]] | Build ROM from program only (pre-design) | 7.9 KB |
| [[WF-Scope-Gap-Analysis]] | Identify missing scope in GC proposals | 10 KB |
| [[WF-TIA-and-GMP]] | Validate TIA budgets and GMP proposals | 9.7 KB |

**Total Workflows:** 44.8 KB

---

## Total Knowledge Base Size

**268 KB across 24 modules**

---

## Usage by Estimate Type

| Estimate Type | Inject These Modules | Accuracy Target |
|---------------|---------------------|-----------------|
| **Quick ROM** | 01, ESTIMATOR-MOC, relevant PT-, BM-Regional, RISK-Market | ±25% |
| **Division-Level** | 01, 02, CSI, relevant PT-, all BM-, RISK-Red-Flags, TPL-ROM | ±15% |
| **Detailed CD** | 01, 02, CSI, relevant PT-, all BM-, RISK-Red-Flags, TPL-ROM | ±8% |
| **GMP Review** | 01, 02, CSI, relevant PT-, all BM-, RISK-Red-Flags, TPL-Bid-Leveling, WF-Bid-Leveling | N/A (comparison) |
| **TIA Validation** | 01, relevant PT-, all BM-, TPL-ROM, WF-TIA-and-GMP | ±15% |
| **Scope Gap Analysis** | CSI, relevant PT-, WF-Scope-Gap-Analysis | N/A (qualitative) |
| **Change Order Review** | 02, CSI, BM-Regional, WF-Change-Order-Review | Validate pricing |
| **Value Engineering** | Relevant PT-, all BM-, TPL-Merchandising-and-VE | Cost reduction |

---

## Learning & Calibration

**Tally maintains an estimate calibration log** to track accuracy over time and continuously improve unit costs and benchmarks. After each project reaches GMP or final cost:

1. Compare estimate to actual
2. Identify variance by division
3. Classify variance: scope miss, unit cost, or quantity
4. Update relevant KB benchmark
5. Log lesson learned in [[TALLY_MEMORY]]

**Calibration targets:**
- ROM estimates: within ±25% of GMP
- DD estimates: within ±15% of GMP
- CD estimates: within ±8% of GMP

---

## Core Operating Principles

From [[01-Estimating-Philosophy]]:

1. **Scope completeness always before unit cost precision**
2. Form your own independent estimate before reviewing anyone else's number
3. Always state your assumptions and exclusions explicitly
4. Always communicate the accuracy range for every estimate
5. MEP must represent 35–55% of TI hard cost — if not, investigate
6. Apply regional cost multipliers to all estimates
7. Apply escalation from estimate date to construction midpoint
8. Flag every unknown, every risk, every decision needed
9. Never anchor to the client's budget — work from first principles
10. Document the estimate so thoroughly it could be rebuilt from scratch

---

## Related Notes

- [[Agent Registry]] — Full agent system architecture
- [[Atlas Agent Profile]] — PM layer (estimating feeds budgeting and financial management)
- [[Hammer Agent Profile]] — Craft layer (material knowledge informs takeoffs)
- [[TALLY_MEMORY]] — Tally's learning log and calibration database
- [[Tally Session State]] — Current session focus and active estimates

---

Created by: Ziggy · AI: anthropic/claude-sonnet-4-5-20250929
