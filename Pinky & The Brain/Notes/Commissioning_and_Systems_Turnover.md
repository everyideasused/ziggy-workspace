---
type: resource
area: work
status: active
tags:
  - work
  - resource
  - knowledge-base
  - construction
  - commissioning
  - closeout
  - construction-kb
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Work Hub|Work Hub]] · [[Construction PM Knowledge Base|Construction KB]]

---

# Commissioning & Systems Turnover

> Cross-cutting reference for [[Construction PM Knowledge Base]]
> Related: [[08 - Closeout & Turnover]], [[07 - Construction Execution]], [[Trade Dependency Matrix — PM Perspective]]

---

## Purpose

Commissioning is the process of verifying that all building systems perform as designed before the owner takes occupancy. On a simple retail TI, commissioning is a half-day of thermostat checks and light switch testing. On a grocery store with refrigeration, a restaurant with a commercial kitchen, or a medical facility with imaging suites, commissioning can take 2-4 weeks and is frequently the last bottleneck before CO. This note gives Atlas the advisory framework to plan commissioning timing, anticipate common failures, and prevent it from becoming the schedule surprise that delays occupancy.

---

## Why Commissioning Derails Schedules

Commissioning lives in the dangerous gap between "construction is done" and "we can open." PMs and GCs consistently underestimate it for three reasons:

1. **It can't start until everything else is finished.** HVAC commissioning requires permanent power, completed ductwork, functional controls, and a sealed building envelope. If any upstream trade is still finishing, commissioning can't begin.
2. **It requires specialized subcontractors who are in high demand.** Controls technicians, TAB contractors, and fire alarm programmers are limited resources. If you didn't schedule them weeks in advance, you're waiting.
3. **First-pass failures are the norm, not the exception.** Systems rarely work perfectly on the first test. Each failure requires diagnosis, correction, and re-test — and each cycle adds days.

---

## Commissioning Scope by System

### HVAC — Mechanical Systems

| Activity | Who Performs | Duration (Typical Retail/Restaurant) | Prerequisites |
|----------|-------------|-------------------------------------|---------------|
| Equipment start-up (RTUs, split systems, VRF) | Mechanical sub + manufacturer rep | 1-2 days | Permanent power; ductwork complete; refrigerant charged |
| Controls programming and checkout | Controls sub | 1-3 days | Equipment started; sensors installed; network connected |
| Sequence of operations verification | Controls sub + mechanical engineer | 1-2 days | Controls programmed; all zones operational |
| Test and Balance (TAB) | Independent TAB contractor | 2-5 days | All ductwork complete; diffusers installed; system running |
| TAB report review | Mechanical engineer | 2-3 days (review time) | TAB complete |
| Economizer verification | Controls sub | 0.5 day | Part of controls checkout |
| Exhaust system verification (kitchen hoods, restrooms) | Mechanical sub + TAB | 1 day | Hood installed; fire suppression active; make-up air connected |

**Common HVAC Commissioning Failures:**

| Failure | Cause | Fix | Time Impact |
|---------|-------|-----|-------------|
| Airflow imbalance (rooms too hot/cold) | Damper settings incorrect; ductwork leaks; undersized ducts | TAB adjustments; seal ductwork; may require design change | 1-3 days |
| Controls not responding | Wiring errors; sensor miscalibration; programming bugs | Troubleshoot and reprogram | 1-2 days |
| Manufacturer won't start equipment | Electrical supply doesn't match equipment requirements (voltage, phase, breaker size) | Electrical correction | 1-5 days (depends on parts) |
| Refrigerant charge incorrect | Leak in line set; incorrect charge by installer | Leak test, repair, recharge | 1-2 days |
| Economizer not functioning | Actuator failure; sensor placement error | Replace or relocate | 1 day |

### Electrical Systems

| Activity | Who Performs | Duration | Prerequisites |
|----------|-------------|----------|---------------|
| Panel energization and circuit verification | Electrical sub | 1 day | Utility power connected; all circuits terminated |
| Emergency power / generator test | Electrical sub + generator vendor | 0.5-1 day | Generator installed; ATS (automatic transfer switch) wired |
| Emergency lighting and exit sign test | Electrical sub | 0.5 day | Circuits energized; battery backup units installed |
| Lighting controls programming (dimming, scheduling, occupancy sensors) | Electrical sub or controls vendor | 1-2 days | All fixtures installed; control system networked |
| Metering verification | Utility company | 1 day | Meter installed; account established |

**Common Electrical Commissioning Failures:**

| Failure | Cause | Fix | Time Impact |
|---------|-------|-----|-------------|
| Circuits on wrong panels or breakers | Mis-wired during rough-in | Re-terminate; update panel schedule | 1-2 days |
| Emergency lighting doesn't activate on power loss | Battery dead; transfer switch mis-wired | Replace battery; correct wiring | 0.5-1 day |
| Lighting controls don't respond | Programming error; incompatible dimmer/fixture combination | Reprogram; may need equipment swap | 1-3 days |

### Fire Protection & Life Safety

| Activity | Who Performs | Duration | Prerequisites |
|----------|-------------|----------|---------------|
| Sprinkler system hydrostatic test | Fire protection sub | 0.5-1 day | System complete; water supply connected |
| Fire alarm acceptance test | Fire alarm sub + fire marshal | 1-2 days | All devices installed and wired; panel programmed; sprinkler system tested |
| Kitchen fire suppression test (Ansul/hood system) | Fire suppression vendor | 0.5 day | Hood installed; suppression system piped; gas connected |
| Smoke control / stairwell pressurization test (if applicable) | Mechanical sub + fire marshal | 1 day | HVAC and fire alarm integrated |
| Fire pump test (if applicable) | Fire protection sub + fire marshal | 0.5 day | Pump installed; water supply confirmed |

**Critical PM Note:** Fire alarm acceptance testing requires the fire marshal to witness the test. The fire marshal's schedule, not your schedule, determines when this happens. Schedule the fire marshal 2-3 weeks in advance. A missed appointment can delay CO by a week or more.

**Common Fire Protection Commissioning Failures:**

| Failure | Cause | Fix | Time Impact |
|---------|-------|-----|-------------|
| Fire alarm devices don't communicate with panel | Wiring errors; address programming errors | Troubleshoot loop; reprogram | 1-2 days |
| Sprinkler heads in wrong location | Field changes not reflected in shop drawings | Relocate heads; re-test affected zone | 1-3 days |
| Fire marshal rejects alarm test | Horn/strobe coverage insufficient; notification appliance placement doesn't meet code | Add devices; re-test | 3-7 days (re-inspection scheduling) |
| Kitchen suppression won't activate | Fusible link issue; nozzle alignment | Adjust and re-test | 0.5-1 day |

### Plumbing Systems

| Activity | Who Performs | Duration | Prerequisites |
|----------|-------------|----------|---------------|
| Water supply pressure test | Plumbing sub | 0.5 day | Supply piping complete; fixtures connected |
| Drain test (water test or air test) | Plumbing sub | 0.5 day | DWV system complete |
| Backflow preventer testing and certification | Certified backflow tester | 0.5 day | Device installed; water supply on |
| Water heater start-up | Plumbing sub or manufacturer | 0.5 day | Gas/electric connected; water supply on |
| Grease interceptor commissioning (restaurant) | Plumbing sub | 0.5 day | Interceptor installed; connected to waste line |
| Health department fixture verification (restaurant/medical) | Health department inspector | 0.5-1 day | All fixtures installed and operational |

### Low-Voltage & Technology Systems

| Activity | Who Performs | Duration | Prerequisites |
|----------|-------------|----------|---------------|
| Data/telecom testing (cable certification) | Low-voltage sub | 1-2 days | All cabling terminated; patch panels installed |
| Security system commissioning (cameras, access control) | Security vendor | 1-2 days | All devices installed; server/NVR operational; network live |
| POS / point-of-sale setup (retail/restaurant) | Owner's IT vendor or franchisee tech | 1-3 days | Network live; electrical circuits active; counters/millwork installed |
| Audio/visual system commissioning | AV vendor | 1-2 days | Speakers, displays, amplifiers installed; network connectivity |
| Building management system (BMS) integration | Controls vendor | 1-2 days | All controlled systems commissioned individually first |

---

## Sector-Specific Commissioning

### Restaurant

The restaurant commissioning sequence has a specific critical path that the PM must understand:

```
HVAC commissioning (hood exhaust + make-up air + dining HVAC)
    └─► Kitchen equipment set and connected (walk-in, line, smallwares)
         └─► Kitchen fire suppression test (requires hood + equipment in place)
              └─► Fire alarm acceptance test (requires fire suppression active)
                   └─► Health department final inspection (requires all above + plumbing operational)
                        └─► CAN OPEN ★
```

**Key Timing:** Health department inspections are independent of CO. Some jurisdictions require a separate food establishment permit before the restaurant can serve food. The PM should initiate the health department application during construction, not at commissioning.

**Make-Up Air Units (MUA):** Restaurant hoods exhaust large volumes of air. The make-up air unit must be balanced with the hood exhaust to maintain building pressure. If the MUA isn't properly commissioned, the building will have negative pressure, doors will be hard to open, and the HVAC system won't perform correctly. This is one of the most commonly missed commissioning items in restaurant construction.

### Grocery / Supermarket

```
Refrigeration rack system start-up (requires 48-72 hr run test)
    └─► Walk-in cooler/freezer temperature verification
         └─► Case temperature verification (all reach-in and display cases)
              └─► Health department inspection (temperature logs required)
                   └─► Product delivery and stocking
                        └─► GRAND OPENING ★
```

**Key Timing:** The 48-72 hour refrigeration run test is non-negotiable. The system must demonstrate stable temperature maintenance across all zones before the health department will approve and before product can be received. Build this into the schedule as a hard prerequisite — it cannot be compressed.

**Refrigeration Commissioning Specialist:** Most grocery programs use the refrigeration manufacturer's factory-authorized start-up technician. This person is a limited resource — often traveling regionally across multiple store openings. Book the start-up technician 4-6 weeks in advance and confirm the week before.

### Medical / Dental

```
Medical gas system certification (requires third-party testing)
    └─► HVAC commissioning (including pressure relationships between rooms)
         └─► Radiation shielding survey (if imaging suite — state health dept)
              └─► Equipment calibration (dental chairs, imaging units, sterilizers)
                   └─► State health department inspection (if required for facility type)
                        └─► CAN TREAT PATIENTS ★
```

**Key Timing:** Medical gas certification (ASSE 6030 or NFPA 99 compliant) requires a third-party verifier — not the installing contractor. Schedule the verifier during construction so they're available immediately after installation. State health department inspections for medical facilities often have 2-4 week lead times for scheduling. Initiate the application during construction.

**Pressure Relationships:** Medical facilities require specific pressure relationships between rooms (e.g., procedure rooms positive to corridors; isolation rooms negative to corridors). HVAC commissioning must verify these relationships with the doors in both open and closed positions. This is a common failure point that the TAB contractor and controls technician must coordinate on.

### Petroleum / Fuel Station

```
UST leak detection system commissioning
    └─► Dispenser calibration (Weights & Measures)
         └─► POS system integration (dispensers ↔ POS ↔ payment processing)
              └─► Environmental compliance verification (state DEQ/EPA)
                   └─► Weights & Measures inspection and certification
                        └─► CAN SELL FUEL ★
```

**Key Timing:** Weights & Measures inspection must happen after dispenser calibration. This is a state-level inspection with its own scheduling lead time (typically 1-2 weeks). The station cannot legally sell fuel until Weights & Measures certifies the dispensers.

---

## PM Commissioning Management Checklist

### 8 Weeks Before Target CO

- [ ] Confirm all commissioning subcontractors are scheduled (TAB, controls, fire alarm, etc.)
- [ ] Confirm fire marshal inspection date is requested
- [ ] Confirm health department inspection date is requested (restaurant/grocery/medical)
- [ ] Confirm Weights & Measures inspection date is requested (fuel station)
- [ ] Verify all equipment start-up appointments are scheduled with manufacturers
- [ ] Verify sequences of operation document is approved by the mechanical engineer
- [ ] Confirm owner's IT/technology vendors are scheduled for their scope

### 4 Weeks Before Target CO

- [ ] Verify permanent power is on track for the date commissioning needs to begin
- [ ] Confirm all MEP trim is on track to complete before commissioning starts
- [ ] Verify fire alarm contractor has programmed the panel (not just installed devices)
- [ ] Confirm TAB contractor has the approved duct layout and design airflows
- [ ] Check that all deferred submittals (fire alarm, fire protection) have been approved by AHJ

### 2 Weeks Before Target CO

- [ ] Pre-commissioning walk: are all systems actually ready for testing? Don't call the TAB contractor if ceiling tiles aren't in and diffusers aren't installed.
- [ ] Confirm fire marshal date is still holding
- [ ] Confirm health department / Weights & Measures date is still holding
- [ ] Verify punchlist items won't interfere with commissioning activities
- [ ] Ensure owner training sessions are scheduled (post-commissioning)

### During Commissioning

- [ ] Attend fire alarm acceptance test (PM should be present)
- [ ] Review TAB report for any airflow deficiencies that need correction
- [ ] Track all commissioning failures and re-test dates on a commissioning log
- [ ] Coordinate re-tests with the same inspectors to avoid scheduling delays
- [ ] Document everything — commissioning records are part of the closeout package

---

## Commissioning Duration Benchmarks

| Project Type | Commissioning Duration | Key Driver |
|-------------|----------------------|-----------|
| Retail TI (simple HVAC, no kitchen) | 2-3 days | HVAC start-up + fire alarm test |
| Restaurant (with kitchen) | 5-10 days | Hood/MUA balance + health dept + fire alarm |
| Grocery (with refrigeration) | 10-15 days | Refrigeration run test (72 hr) + health dept |
| Medical / Dental office | 5-10 days | Medical gas cert + pressure verification + state health |
| Ground-up commercial (10k-50k SF) | 5-15 days | HVAC TAB + fire alarm + elevator + all system integration |
| Multi-story / complex MEP | 15-30 days | Full building commissioning; phased system testing |

**PM Rule:** Add 50% to these benchmarks for the first project with a new GC or in a new jurisdiction. First-time coordination issues and unfamiliar AHJ processes add time.

---

## Owner Training

Commissioning isn't complete until the owner knows how to operate the building. Training should cover:

| System | Training By | Attendees | Duration |
|--------|------------|-----------|----------|
| HVAC / Thermostat / BMS | Controls sub or mechanical sub | Facility manager, tenant | 1-2 hours |
| Fire alarm (panel operation, reset, silence) | Fire alarm sub | Facility manager, tenant | 1 hour |
| Fire suppression (kitchen hood — pull station location, reset) | Fire suppression vendor | Kitchen manager | 30 min |
| Security (access control, cameras, alarm codes) | Security vendor | Facility manager, tenant | 1-2 hours |
| Plumbing (water shut-off locations, water heater, grease trap maintenance) | Plumbing sub | Facility manager | 30 min |
| Electrical (panel locations, breaker identification, emergency power) | Electrical sub | Facility manager | 30 min |

**PM Rule:** Schedule training AFTER commissioning is complete and BEFORE the GC demobilizes. Once the GC is off site, getting subs back for training is difficult and expensive.

---

## Related

- [[Construction PM Knowledge Base]] — Master reference
- [[08 - Closeout & Turnover]] — Closeout process overview
- [[07 - Construction Execution]] — Construction sequence and final activities
- [[Trade Dependency Matrix — PM Perspective]] — Commissioning as the final trade dependency chain
- [[Schedule Recovery & Acceleration]] — When commissioning delays threaten CO
- [[Appendix — Restaurant Construction]] — Restaurant-specific commissioning
- [[Appendix — Grocery & Supermarket Construction]] — Grocery-specific commissioning
- [[Appendix — Medical, Dental & Veterinary Construction]] — Medical-specific commissioning
- [[Appendix — Petroleum & Fuel Station Construction]] — Fuel station-specific commissioning

---

*Update with project-specific commissioning timelines, local AHJ fire marshal scheduling benchmarks, preferred TAB and controls contractors, and lessons learned from commissioning failures.*
