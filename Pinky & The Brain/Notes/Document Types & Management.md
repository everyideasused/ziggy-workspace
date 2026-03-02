---
type: resource
area: work
status: active
tags:
  - work
  - resource
  - knowledge-base
  - construction
  - documents
  - construction-kb
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Work Hub|Work Hub]]

---

# Document Types & Management

> Cross-cutting reference for [[Construction PM Knowledge Base]]

---

## Document Categories by Phase

### Pre-Construction Documents
| Document | Purpose | Creator |
|----------|---------|---------|
| LOI / Purchase Agreement | Secure site control | Attorney/Broker |
| Phase I/II ESA | Environmental due diligence | Environmental Consultant |
| Geotech Report | Soil/foundation recommendations | Geotech Engineer |
| ALTA Survey | Site boundary and conditions | Licensed Surveyor |
| Zoning Analysis | Confirm permitted use | Zoning Attorney |
| Proforma | Financial viability | Developer/Analyst |
| Lease / Work Letter | Tenant-landlord terms | Attorney |
| Owner's Program | Space requirements | Owner |

### Design Documents
| Document | Purpose | Creator |
|----------|---------|---------|
| SD Drawings | Conceptual design | Architect |
| DD Drawings | Detailed design | Architect + Engineers |
| CD Drawings | Construction-ready documents | Architect + Engineers |
| Specifications (Project Manual) | Written construction requirements | Architect |
| Cost Estimates | Budget projection at each phase | Cost Estimator |

### Construction Administration Documents
| Document | Purpose | Creator |
|----------|---------|---------|
| RFI (Request for Information) | Clarify design intent or conflict | GC to Architect |
| Submittal | Product data, shop drawings for approval | Sub to GC to Architect |
| ASI (Architect's Supplemental Instruction) | Design clarification or minor change | Architect |
| CCD (Construction Change Directive) | Owner-directed change before price agreed | Owner/Architect |
| Change Order | Formal scope/cost/time modification | GC to Owner |
| Daily Report | Site conditions and progress | GC Superintendent |
| Meeting Minutes | Decisions and action items | CM/PM |
| Progress Photos | Visual documentation | GC/CM |
| Inspection Reports | AHJ and third-party testing results | Inspectors |

### Financial Documents
| Document | Purpose | Creator |
|----------|---------|---------|
| Schedule of Values (SOV) | Billing framework (AIA G703) | GC |
| Pay Application (AIA G702) | Monthly payment request | GC |
| Lien Waivers (Conditional) | Release rights for current payment | GC + Subs |
| Lien Waivers (Unconditional) | Release rights for received payment | GC + Subs |
| Change Order Log | Track all scope changes | CM/PM |
| Cost-to-Complete Forecast | Project final cost projection | CM/PM |
| TIA Draw Request | Request TIA reimbursement | Tenant/PM |

### Closeout Documents
| Document | Purpose | Creator |
|----------|---------|---------|
| As-Built Drawings | Actual constructed conditions | GC (marked up) |
| O&M Manuals | Equipment operation instructions | Subs/Manufacturers |
| Warranty Letters | Warranty terms and contacts | GC + Subs |
| Test and Balance Report | HVAC system performance verification | TAB Contractor |
| Fire Alarm Acceptance Test | Fire system certification | Fire Alarm Sub |
| Final Lien Waivers | All parties release payment rights | GC + All Subs |
| Certificate of Substantial Completion | Formal milestone (AIA G704) | Architect |
| Certificate of Occupancy | Legal authorization to occupy | AHJ |
| Punch List | Deficient items requiring correction | Owner/Architect/GC |
| Lessons Learned | Post-project review | PM/CM |

---

## Document Control Best Practices

### Naming Convention
Use a consistent format across all projects:
```
[ProjectCode]-[Phase]-[DocType]-[Seq#]-[Rev]
Example: PRJ101-CON-RFI-045-R0
```

### Version Control
- Never overwrite originals — always create new versions
- Mark superseded documents clearly
- Date-stamp all revisions
- Track who issued each revision and why

### Storage and Access
- Centralized project management platform (Procore, Smartsheet, SharePoint)
- Folder structure mirrors project phases
- Role-based access (not everyone needs everything)
- Regular backups

### Retention
- Construction documents: minimum 7-10 years post-completion
- Contracts: life of building + applicable statute of limitations
- Permits and CO: permanent (tied to the property)
- Financial records: per tax and corporate requirements (typically 7 years)
- Safety records: per OSHA requirements (5 years minimum)

---

## Log Templates

### RFI Log Fields
| Field | Description |
|-------|------------|
| RFI # | Sequential number |
| Date Submitted | When GC sent to architect |
| Date Required | When response is needed |
| Subject | Brief description |
| Specification Section | Related spec division |
| Drawing Reference | Related drawing sheet(s) |
| From | Originator |
| To | Reviewer |
| Date Responded | When response was issued |
| Days Open | Elapsed time |
| Cost Impact | Yes/No/TBD |
| Schedule Impact | Yes/No/TBD |

### Submittal Log Fields
| Field | Description |
|-------|------------|
| Submittal # | Sequential number |
| Spec Section | Related specification |
| Description | Item being submitted |
| Subcontractor | Responsible trade |
| Date Submitted | To architect for review |
| Date Required | For procurement timeline |
| Date Returned | From architect |
| Action | Approved / Approved as Noted / Revise & Resubmit / Rejected |
| Resubmittal Date | If revision required |

### Change Order Log Fields
| Field | Description |
|-------|------------|
| PCO/CO # | Sequential number |
| Description | Scope of change |
| Initiated By | Owner / Architect / GC / Field Condition |
| Date Identified | When the issue arose |
| Cost Impact | Dollar amount (+ or -) |
| Time Impact | Days added or saved |
| Status | Pending / Pricing / Under Review / Approved / Denied |
| Date Approved | When formally executed |
| Reference | RFI, ASI, or directive that triggered it |
