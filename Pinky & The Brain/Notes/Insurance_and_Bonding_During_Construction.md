---
type: resource
area: work
status: active
tags:
  - work
  - resource
  - knowledge-base
  - construction
  - insurance
  - bonding
  - risk
  - construction-kb
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Work Hub|Work Hub]] · [[Construction PM Knowledge Base|Construction KB]]

---

# Insurance & Bonding During Construction

> Cross-cutting reference for [[Construction PM Knowledge Base]]
> Related: [[Contract Types & Structures]], [[05 - Procurement & Bidding]], [[Risk Management Framework]], [[Subcontractor Default & Replacement]], [[08 - Closeout & Turnover]]

---

## Purpose

Insurance and bonding are the financial safety net beneath every construction project. When things go right, nobody thinks about them. When a sub defaults, a worker gets injured, a pipe bursts and floods the building, or a tornado takes the roof off mid-construction — insurance and bonds are the difference between a recoverable setback and a financial catastrophe. This note gives Atlas the practical PM knowledge to specify requirements, review certificates, manage claims, and advise on the insurance and bonding decisions that arise throughout the project lifecycle.

---

## Insurance Types — What Each Policy Covers

### Builder's Risk (Course of Construction Insurance)

| Field | Detail |
|-------|--------|
| **What it covers** | Physical damage to the project under construction — the building itself, materials on site, materials in transit |
| **What it doesn't cover** | Workers' injuries (that's workers' comp); damage to existing structures (unless endorsed); design errors; normal wear |
| **Who carries it** | Typically the owner, but some contracts require the GC to provide. Check the contract. |
| **Policy period** | From construction start (or NTP) through substantial completion. Must be extended if project runs long. |
| **Coverage amount** | Full completed value of the project (including hard and soft costs) |
| **Deductible** | Typically $5,000-$25,000 for standard projects; higher for larger projects or high-risk locations |
| **Key endorsements** | Flood (if in flood zone); earthquake (if in seismic zone); delayed opening / soft costs; existing structures (for renovation); off-site storage; transit |

**PM Actions:**
- Verify builder's risk is in place before the first shovel hits the ground
- Confirm the coverage amount matches the current project budget (including approved change orders — if the project grows, the policy must be updated)
- Confirm flood and wind endorsements are included if the project location requires them
- If the owner carries builder's risk, confirm the GC and all subs are named as additional insureds
- At substantial completion, confirm the owner transitions to permanent property insurance. There is typically a gap period between builder's risk expiration and permanent policy — the PM should flag this.

**Common Builder's Risk Claim Scenarios:**

| Scenario | Covered? | PM Action |
|----------|---------|-----------|
| Storm damages partially completed roof | Yes | Document damage with photos and daily report; file claim; GC coordinates repair |
| Theft of materials from job site | Yes (if not excluded) | Police report + documentation; review site security practices |
| Fire caused by sub's hot work | Yes | Document thoroughly; insurer may subrogate against sub's liability insurance |
| Pipe burst during testing floods completed finishes | Yes | Document; coordinate dry-out and remediation; track schedule impact |
| Existing building damaged during renovation | Only if "existing structures" endorsement is included | Verify endorsement exists before renovation work begins |

### Commercial General Liability (CGL)

| Field | Detail |
|-------|--------|
| **What it covers** | Third-party bodily injury and property damage caused by the insured's operations |
| **Who carries it** | GC (primary); each sub also carries their own CGL |
| **Typical limits** | $1M per occurrence / $2M aggregate (minimum for most commercial projects) |
| **Key requirement** | Owner (and PM/CM) should be named as **Additional Insured** on the GC's and each sub's CGL policy |

**PM Actions:**
- Require CGL certificates from the GC and all subs before they mobilize to site
- Verify Additional Insured endorsement names the owner (and PM/CM firm if applicable)
- Verify limits meet the contract minimum
- Confirm per-project aggregate (not shared across the GC's other projects)

### Workers' Compensation

| Field | Detail |
|-------|--------|
| **What it covers** | Medical expenses and lost wages for workers injured on the job |
| **Who carries it** | Every employer on site — GC and each sub independently |
| **Required by** | State law (every state except Texas, where it's technically optional but practically required) |
| **PM concern** | Uninsured workers on site create massive liability exposure for the owner and GC |

**PM Actions:**
- Require workers' comp certificates from every entity with workers on site
- Verify the policy is from the correct state (workers' comp is state-specific)
- If the GC uses labor staffing agencies, verify those agencies carry workers' comp
- On multi-state rollout programs, verify each sub has coverage in the state where the work is performed

### Professional Liability (Errors & Omissions — E&O)

| Field | Detail |
|-------|--------|
| **What it covers** | Damage caused by design errors or professional negligence |
| **Who carries it** | Architect, engineers, and other design professionals |
| **Typical limits** | $1M-$5M (varies by project size and complexity) |
| **Key distinction** | This is a "claims-made" policy — the policy in effect when the claim is filed must cover it, not the policy in effect when the error was made. The architect must maintain coverage for years after the project completes. |

**PM Actions:**
- Require E&O certificates from the architect and all engineering consultants
- Verify limits are adequate for the project value
- Confirm the policy will be maintained for a minimum period after project completion (typically 3-5 years, per contract)
- If a design error is discovered during construction, document it as a potential E&O claim before the architect corrects it through the RFI process. The correction may be free, but the schedule and cost impact may be recoverable through E&O.

### Umbrella / Excess Liability

| Field | Detail |
|-------|--------|
| **What it covers** | Additional coverage above the limits of underlying policies (CGL, auto, workers' comp employer's liability) |
| **Who carries it** | GC; sometimes required of larger subs |
| **Typical limits** | $5M-$10M for standard commercial projects; higher for large or complex projects |

### Contractor's Pollution Liability (CPL)

| Field | Detail |
|-------|--------|
| **When needed** | Renovation of older buildings (potential asbestos, lead paint); work near contaminated sites; fuel station construction |
| **What it covers** | Cleanup costs and third-party claims from pollution caused by the contractor's operations |

**PM Actions:**
- Required for any project involving hazardous materials or environmental risk
- Especially critical for petroleum / fuel station projects (UST installation — see [[Appendix — Petroleum & Fuel Station Construction]])
- Verify coverage before any demolition or environmental remediation work begins

---

## Insurance Program Structures

### Traditional (Most Common — Retail/Restaurant)

Each party carries their own insurance independently:
- Owner: builder's risk
- GC: CGL, workers' comp, auto, umbrella
- Each sub: CGL, workers' comp, auto
- Architect/engineers: E&O

**Pros:** Simple; each party responsible for their own coverage; standard for projects under $10M.
**Cons:** Coverage gaps between policies; finger-pointing during claims; higher aggregate cost.

### Owner-Controlled Insurance Program (OCIP — "Wrap-Up")

The owner purchases a single insurance program that covers all parties on the project.

| Feature | Detail |
|---------|--------|
| **Who it covers** | Owner, GC, all subs, sometimes design team |
| **What it covers** | CGL, workers' comp, excess liability (builder's risk typically separate) |
| **When it makes sense** | Large projects (>$25M); multiple GCs on site; owner wants consistent coverage and claims control |
| **Cost** | GCs and subs deduct their insurance costs from their bids (because the owner is providing it). Net cost to owner is often lower due to volume purchasing. |

**PM Actions (if OCIP):**
- Ensure all contractors enroll in the OCIP per the contract requirements
- Verify enrollment before any contractor mobilizes to site
- Track OCIP enrollment certificates (not standard COIs)
- Coordinate with the OCIP administrator on claims

### Contractor-Controlled Insurance Program (CCIP)

Same concept as OCIP, but the GC purchases the program. Common on large GC-led projects. PM considerations are similar — verify enrollment, track certificates.

---

## Bonding

### Types of Construction Bonds

| Bond Type | What It Guarantees | Who Is Protected | Who Provides It |
|-----------|--------------------|-----------------|----------------|
| **Bid Bond** | That the bidder will enter into the contract if awarded (typically 5-10% of bid) | Owner | Bidder's surety |
| **Performance Bond** | That the contractor will complete the work per the contract | Owner | Contractor's surety |
| **Payment Bond** | That the contractor will pay all subs and suppliers | Subs, suppliers, laborers | Contractor's surety |
| **Maintenance Bond** | That the contractor will correct defects during the warranty period | Owner | Contractor's surety |

### When to Require Bonds

| Project Characteristic | Bond Recommendation |
|----------------------|---------------------|
| Public projects | **Required by law** (Miller Act for federal; Little Miller Acts for most states) |
| Private projects > $500K | **Strongly recommended** — performance + payment bonds |
| Private projects $100K-$500K | **Recommended** — at minimum, payment bond to protect against mechanic's liens |
| Private projects < $100K | **Optional** — cost of bond may not be justified. Consider sub default risk vs. bond cost. |
| Rollout programs (any size per site) | **Recommended** — even if individual sites are small, portfolio-level sub default risk is real |
| Subcontractor bonds (GC requires of subs) | **Recommended for critical trades** — MEP, fire protection, specialty trades |

### Bond Cost

| Bond Amount | Typical Premium (as % of bond amount) |
|------------|---------------------------------------|
| First $500K | 2.5-3.5% |
| $500K - $2.5M | 1.5-2.5% |
| $2.5M - $5M | 1.0-2.0% |
| $5M+ | 0.75-1.5% |
| Subcontractor bonds (typically smaller) | 2.0-3.5% |

**Example:** A $2M GC contract with 100% performance + payment bonds at 2% premium = $40K per bond = $80K total. This is typically included in the GC's bid.

**PM Rule:** Bond cost is not free money — the GC includes it in their price. But the protection is worth it. A sub default without a bond can cost 15-40% more than the original contract value to remedy (see [[Subcontractor Default & Replacement]]). A $40K bond premium to protect against that exposure is insurance well spent.

### Bond Claim Process

When the bonded contractor defaults, the surety has obligations. The process (covered in more detail in [[Subcontractor Default & Replacement]]):

```
Step 1: Obligee (owner or GC) provides written notice of default to surety
    |
Step 2: Surety investigates (typically 15-30 days)
    |
Step 3: Surety selects response:
        Option A: Finance the original contractor to complete
        Option B: Tender a replacement contractor
        Option C: Pay the penal sum (bond amount) to the obligee
    |
Step 4: Resolution and cost reconciliation
```

**PM Actions on Bond Claims:**
- Maintain a copy of the bond (not just the certificate) in the project file
- Know the surety's name and contact information before you need to make a claim
- Provide notice to the surety as soon as default is identified — don't wait until termination
- Document all excess costs meticulously (the surety will audit)
- Understand that surety resolution takes time (weeks to months) — the project may need to proceed at risk while the claim is processed

### Mechanic's Liens and Payment Bonds

**Mechanic's Lien:** A legal claim against the property by an unpaid contractor, sub, or supplier. Exists in every state, with varying requirements for notice and filing deadlines.

**How Payment Bonds Protect Against Liens:**
- On bonded projects, subs and suppliers make claims against the payment bond instead of filing liens against the property
- This protects the owner's clear title and prevents surprise encumbrances
- The GC's payment bond is the primary defense against liens from lower-tier parties

**PM Actions:**
- Collect **conditional lien waivers** with every progress payment (from GC and all subs)
- Collect **unconditional lien waivers** at final payment
- If a lien is filed, notify the owner, GC, and payment bond surety immediately
- Know your state's lien filing deadlines (Tennessee: 90 days from last day of work for subs; 90 days for material suppliers — T.C.A. § 66-11-145)

---

## Certificate of Insurance (COI) Review

The PM reviews insurance certificates at three points: before contract execution, before mobilization, and at annual renewal.

### COI Review Checklist

| Item | What to Check | Red Flag |
|------|--------------|----------|
| **Named insured** | Matches the contracting entity exactly (legal name, not DBA) | Different entity name = potentially no coverage for the contracted party |
| **Additional insured** | Owner (and PM/CM) listed as additional insured on CGL | Missing additional insured = owner has no direct claim rights under the policy |
| **Policy limits** | Meet or exceed contract requirements | Limits below contract minimum = non-compliant; do not allow mobilization |
| **Policy period** | Covers the entire construction duration | Policy expiring mid-construction = gap in coverage. Calendar renewal for annual policies. |
| **Workers' comp state** | Correct state listed for where work is performed | Wrong state = potentially no coverage for site injuries |
| **Waiver of subrogation** | If required by contract, verify it's endorsed on the policy | Missing waiver = insurer can sue the owner to recover claim payments |
| **Per-project aggregate** | If required, verify the aggregate applies per project, not shared | Shared aggregate = GC's other projects can exhaust the limits before your claim |
| **Cancellation notice** | 30-day written notice to certificate holder prior to cancellation | Less than 30 days = you may not know coverage has lapsed |

### COI Tracking

For rollout programs with multiple GCs and dozens of subs, COI tracking is a significant administrative task. The PM should:

- Maintain a COI tracking log (spreadsheet or within Smartsheet) showing: contractor name, policy type, carrier, policy number, limits, expiration date, additional insured status, compliance status
- Set expiration date alerts 30 days before renewal
- Do not allow any contractor on site without a compliant COI on file
- For program-level efficiency, require the GC to maintain a sub COI file and certify compliance — the PM spot-checks rather than tracking every sub directly

---

## Insurance at Project Milestones

| Milestone | Insurance Action | Responsible |
|-----------|-----------------|-------------|
| **Contract execution** | Verify all required policies are in place; collect COIs | PM |
| **NTP / Mobilization** | Final COI compliance check; verify builder's risk active | PM |
| **Midpoint of construction** | Check for policy renewals; verify limits still adequate if project scope has grown | PM |
| **Substantial completion** | Builder's risk to permanent property insurance transition. Identify gap and bridge it. | Owner (PM flags) |
| **Final completion** | Confirm GC maintains CGL tail coverage for warranty period. Confirm architect maintains E&O for required post-completion period. | PM |
| **Warranty expiration** | Confirm all required post-completion coverage has been maintained. | PM |

---

## Insurance Claims During Construction — PM Role

The PM is not an insurance adjuster, but the PM plays a critical role in claim documentation and coordination:

### When a Claimable Event Occurs

1. **Document immediately.** Photos, daily report entry, written description of what happened, when, and the apparent cause. This is the same documentation discipline used for delay claims (see [[Delay Documentation & Claims]]).
2. **Notify the appropriate parties.** Who to notify depends on the claim type:

| Event | Notify |
|-------|--------|
| Property damage to the project | Builder's risk carrier (or GC if GC carries builder's risk); owner |
| Worker injury | GC (who notifies their workers' comp carrier); OSHA if recordable |
| Third-party injury or property damage | GC's CGL carrier; owner |
| Design error causing rework | Architect; owner; potentially architect's E&O carrier |
| Sub default | GC; surety (if bonded); see [[Subcontractor Default & Replacement]] |
| Environmental contamination | CPL carrier; state environmental agency; owner |

3. **Preserve evidence.** Don't clean up, demolish, or repair until the insurer has had an opportunity to inspect (or has waived the right to inspect). Premature repair can jeopardize the claim.
4. **Track claim progress.** Log the claim in the RAID log as an active issue. Track insurer response times, adjuster visits, and settlement progress.
5. **Coordinate with the GC on repairs.** Once the insurer authorizes repairs, the GC manages the physical work. The PM manages the schedule and cost impact.

---

## Tennessee-Specific Notes

| Topic | Tennessee Requirement |
|-------|----------------------|
| **Workers' comp** | Required for employers with 5+ employees (T.C.A. § 50-6-902). Construction employers with 1+ employees must carry coverage. |
| **Mechanic's lien filing** | 90 days from last day of work (T.C.A. § 66-11-145). Prime contractor must give 10-day notice before filing. Subs must give preliminary notice within 90 days of first furnishing. |
| **Payment bond (public projects)** | Required on all public construction contracts > $100K (T.C.A. § 12-4-201) |
| **Performance bond (public projects)** | Required on all public construction contracts > $100K |
| **Retainage on bonded projects** | Tennessee allows 5% retainage on private projects; 5% on public projects (T.C.A. § 66-34-103) |
| **Builder's risk** | Not state-mandated but standard practice; contract determines who carries it |

---

## Related

- [[Construction PM Knowledge Base]] — Master reference
- [[Contract Types & Structures]] — Insurance and bonding contract provisions
- [[05 - Procurement & Bidding]] — Bonding requirements during procurement
- [[Risk Management Framework]] — Risk transfer strategies
- [[Subcontractor Default & Replacement]] — Bond claims for sub default
- [[08 - Closeout & Turnover]] — Insurance transitions at project closeout
- [[Delay Documentation & Claims]] — Documentation standards applicable to insurance claims
- [[Financial Management & Billing]] — Retainage and lien waiver tracking
- [[ATLAS_MEMORY]] — Carrier and surety contact information; claim experiences

---

*Update with preferred insurance brokers, surety contacts, program-level insurance structures for specific clients, claim experiences and outcomes, and any changes to Tennessee insurance or lien law.*
