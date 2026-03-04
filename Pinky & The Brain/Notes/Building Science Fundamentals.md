---
type: resource
area: work
status: active
tags:
  - work
  - household
  - resource
  - carpenter-kb
---

> [[🏠base|🏠]] · [📅 Today](obsidian://daily) · [[Work Hub|💼 Work]]

---

# Building Science Fundamentals

> **Purpose:** The physics of why buildings work — structural loads, moisture management, thermal performance, and air control. This is the foundation everything else rests on. A builder who understands building science makes better decisions about materials, details, and sequencing. A PM who understands it can evaluate design intent and spot when execution compromises performance.

---

## The Four Control Layers

Every building envelope must manage four things. When any one fails, the building fails — sometimes slowly (mold, rot, energy loss), sometimes catastrophically (structural failure). The order of priority:

1. **Water control** — Keep bulk water out (rain, groundwater, plumbing leaks)
2. **Air control** — Manage airflow through the envelope (infiltration, exfiltration)
3. **Vapor control** — Manage moisture vapor diffusion through materials
4. **Thermal control** — Manage heat flow (insulation)

These layers interact. A wall can have excellent insulation but fail completely if the air barrier has gaps, because air leakage carries 100x more moisture than vapor diffusion. This is why air sealing matters more than insulation upgrades in most retrofits.

---

## Structural Systems — How Loads Move

### Load Types

**Gravity loads** (vertical — always present):
- **Dead load** — weight of the structure itself (framing, roofing, drywall, finishes). Fixed and predictable.
- **Live load** — occupant weight, furniture, stored items. Code-defined minimums by use: residential floors typically 40 psf, decks 40-60 psf, attics (uninhabitable) 20 psf.
- **Snow load** — varies by geography and roof slope. Nashville area: ~10-15 psf ground snow load. Matters for roof framing.

**Lateral loads** (horizontal — intermittent):
- **Wind load** — pressure and suction on the building envelope. Critical for wall bracing, roof connections, and foundation anchoring. Nashville is not a high-wind zone but still requires positive connections.
- **Seismic load** — inertial forces from ground movement. Nashville is in Seismic Design Category B-C (moderate). Affects foundation-to-frame connections and shear wall requirements.

### The Load Path

Every load must travel from its point of application to the ground through a continuous path. The load path concept is the single most important structural principle:

```
Roof load (snow, dead, wind uplift)
  → Rafters / trusses
    → Top plates / ridge beam
      → Wall studs / posts
        → Bottom plates
          → Floor joists / beams
            → Foundation walls / piers
              → Footings
                → Soil
```

**When the load path breaks** — a missing connection, an undersized member, a notch in the wrong place — loads find alternative paths. Those alternative paths weren't designed for the load, and that's how failures start. Every structural detail exists to maintain the load path.

### Key Structural Concepts

**Headers** span openings (doors, windows) and transfer the load above the opening to the jack studs on each side. Header sizing depends on span, load above, and material. Common error: undersized headers in load-bearing walls, or missing headers entirely in "convenience" openings cut after framing.

**Point loads vs. distributed loads** — A beam carrying a roof concentrates its load at the bearing points (posts or studs below). A wall sitting on a floor distributes load along its length. Point loads require direct support below — you can't drop a point load onto an unsupported span of floor joists without adding a beam below.

**Shear walls** resist lateral (wind/seismic) forces. They're not just walls — they're specifically braced wall segments with proper sheathing nailing patterns, hold-down connections at the base, and tie straps at the top. A wall with drywall on both sides is not a shear wall unless it was engineered as one.

**Bearing vs. non-bearing walls** — Bearing walls carry loads from above (roof, upper floors). Non-bearing walls (partitions) only support their own weight. Removing a bearing wall without installing a beam to replace its function is one of the most dangerous DIY mistakes. When in doubt: if it runs perpendicular to the floor/ceiling joists above and carries any of their span, assume it's bearing until proven otherwise.

---

## Moisture Management

Moisture is the number one cause of building failure, ahead of structural issues, fire, and all other causes combined. It causes wood rot, mold growth, fastener corrosion, insulation degradation, paint failure, and indoor air quality problems.

### The Three Sources of Moisture

**Bulk water** (rain, groundwater, plumbing) — The largest source. Managed by:
- Roof system (shingles, underlayment, flashing, gutters, kickouts)
- Wall cladding system (siding, housewrap/WRB, flashing, weep details)
- Foundation waterproofing (damp-proofing, drainage board, drain tile, grading)
- Plumbing integrity (proper joints, accessible shutoffs, leak detection)

**Air-transported moisture** — Warm humid air moves through gaps in the building envelope and deposits moisture on cold surfaces (condensation). This is the sneaky one. A 1/4" gap in the air barrier can deposit more moisture in a wall cavity in one season than vapor diffusion moves in a year. Managed by continuous air barriers (sealed sheathing, caulked plates, taped seams).

**Vapor diffusion** — Moisture moves through solid materials from high-concentration areas to low-concentration areas. Much slower than air transport but matters in wall assembly design. Managed by vapor retarders (paint, poly, kraft facing) placed on the warm side of the assembly in heating-dominant climates. Nashville (Zone 4A mixed-humid) is a tricky climate — vapor drive reverses seasonally. Best practice: avoid interior polyethylene, use "smart" vapor retarders or latex paint as the vapor retarder, and ensure the wall can dry in at least one direction.

### The Drainage Plane Principle

The fundamental principle of moisture management in walls is: **water will get behind the cladding.** Accept this. Design for it. The system must include:

1. A **water-resistive barrier (WRB)** behind the cladding (housewrap, building paper, fluid-applied membrane)
2. **Flashings** at every penetration, transition, and material change (windows, doors, deck ledgers, roof-to-wall, utility penetrations)
3. A **drainage path** for water to exit at the bottom (weep screeds, flashing kick-outs, starter strips)
4. Ideally, a **drainage gap** (rainscreen) between cladding and WRB to allow drainage and drying

The most common moisture failures happen at flashings — missing, improperly lapped, or sealed at the bottom (trapping water instead of shedding it).

---

## Thermal Performance

### How Heat Moves

**Conduction** — Heat flows through solid materials. Wood is a moderate conductor (R-1.25 per inch). Steel is a terrible insulator (thermal bridging). Insulation works by slowing conduction through low-density materials with trapped air or gas pockets.

**Convection** — Heat moves via air circulation. In wall cavities, air currents can carry heat around insulation if the cavity is not properly air-sealed. This is why fiberglass batts in a leaky wall cavity perform far below their rated R-value — the air moves around them.

**Radiation** — Heat transfers between surfaces via infrared energy. Relevant for radiant barriers in attics (reflect roof heat), low-E window coatings (reflect interior heat back in), and radiant floor heating. Not a primary concern for wall assemblies in most climates.

### R-Value vs. Real-World Performance

R-value measures a material's resistance to conductive heat flow under laboratory conditions. Real-world performance depends on:

- **Installation quality** — A poorly installed R-19 batt (gaps, compression, voids) performs worse than a well-installed R-13. Insulation must fill the entire cavity with full contact on all six sides.
- **Thermal bridging** — Studs at 16" OC represent about 25% of a wall's area, and wood is only R-1.25/inch. A 2x6 wall with R-19 batts has a whole-wall R-value closer to R-15 because heat flows through the studs. Continuous exterior insulation eliminates thermal bridging.
- **Air leakage** — Renders insulation partially ineffective. Air seal first, then insulate. Not the other way around.
- **Moisture** — Wet insulation loses much of its R-value. Fiberglass performs poorly when wet. Closed-cell spray foam and rigid foam are moisture-resistant.

### Climate Zone Context

Nashville sits in **IECC Climate Zone 4A (mixed-humid)**. This means:
- Significant heating AND cooling loads (hot summers, cold-ish winters)
- High humidity year-round, with vapor drive reversing seasonally
- Code minimums (2021 IECC residential): R-49 attic, R-20 or R-13+5ci walls, R-10 foundation
- Air sealing is critical — blower door testing increasingly required
- Vapor retarder strategy must allow drying in both directions (no interior polyethylene)

---

## Air Barriers

The air barrier is arguably the most important single system in the building envelope, because air leakage affects thermal performance, moisture transport, indoor air quality, comfort, and energy costs simultaneously.

### Air Barrier Principles

The air barrier must be:
1. **Continuous** — No gaps at any transition (wall-to-roof, wall-to-foundation, around penetrations)
2. **Durable** — Must last the life of the building (not tape that fails in 5 years)
3. **Strong enough** to resist wind pressure without displacement
4. **Vapor-appropriate** — The air barrier material should also serve as the vapor control layer, or be compatible with it

### Common Air Barrier Strategies

**Exterior sheathing as air barrier** (most common for new residential):
- Tape all sheathing seams (ZIP system, or OSB/plywood with appropriate tape)
- Seal bottom plate to foundation
- Seal top plate to sheathing at ceiling plane
- Seal all penetrations (wiring, plumbing, ducts)

**Spray foam as air barrier** (retrofit and complex geometries):
- Closed-cell spray foam is both air barrier and vapor retarder
- Open-cell spray foam is air barrier but vapor-permeable (may need a vapor retarder depending on climate)
- Excellent for sealing complex framing intersections

**Drywall as air barrier** (airtight drywall approach — less common):
- All drywall seams sealed with gaskets or caulk
- Electrical boxes sealed
- Works but requires meticulous execution

### Where Air Leaks Happen

The biggest air leaks in residential construction, in order of impact:
1. Attic bypasses — gaps around chimneys, plumbing stacks, recessed lights, duct chases, balloon-framed walls
2. Rim joist / band joist area — where floor framing meets exterior wall
3. Windows and doors — not the units themselves, but the rough opening gaps
4. Electrical penetrations — outlet boxes on exterior walls, wire runs through plates
5. Recessed lights — even "IC-rated" cans leak air unless they're AT (airtight) rated
6. Duct leakage — supply and return ducts outside the conditioned envelope

---

## Soil & Foundation Basics

### Soil Bearing Capacity

The building sits on soil, and soil has limits. Bearing capacity varies enormously:

| Soil Type | Presumptive Bearing (psf) | Notes |
|-----------|--------------------------|-------|
| Bedrock | 12,000+ | Best case |
| Gravel / sand-gravel mix | 3,000-4,000 | Good, well-draining |
| Compacted sand | 2,000-3,000 | Good if well-compacted |
| Clay (hard) | 2,000-4,000 | Stiff but moisture-sensitive |
| Clay (soft/expansive) | 1,000-2,000 | Problematic — swells and shrinks with moisture |
| Fill (uncontrolled) | 0 — not acceptable | Must be removed or engineered |

Nashville sits on limestone bedrock overlaid with clay soils. Expansive clay is common and causes foundation movement (heaving when wet, shrinking when dry). Proper drainage away from foundations is critical.

### Foundation Types

**Slab-on-grade** — Concrete slab poured directly on compacted fill/gravel. Simple, cost-effective, common in Nashville for residential. Requires proper sub-slab vapor barrier, edge insulation in cold climates, and good site drainage. No crawlspace maintenance. Plumbing is buried under the slab (repairs are expensive).

**Crawlspace** — Short foundation walls with a floor structure above. Very common in Nashville and the Southeast. Must be either vented (with vapor barrier on ground) or sealed/conditioned (encapsulated — increasingly preferred). Unencapsulated crawlspaces with poor drainage are the number one source of moisture problems in Nashville residential construction.

**Full basement** — Deep foundation walls creating habitable below-grade space. Less common in Nashville than in northern climates. Requires exterior waterproofing, interior drainage (French drain to sump), and dehumidification. Water management is the primary challenge.

**Pier and beam** — Isolated piers supporting beams and floor joists. Common for additions, hillside construction, and flood-zone building. Good air circulation underneath but requires proper bracing and connection hardware.

---

## Related

- [[Carpenter and General Contractor - Master Reference]]
- [[Framing & Structural Carpentry]]
- [[Materials & Fasteners Reference]]
- [[Building Codes & Inspection Readiness]]
- [[Construction Safety & OSHA Residential]]
- [[Common Defects & Quality Control]]

---

*Update as building science knowledge deepens through project experience.*
