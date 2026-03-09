# Fluid Mechanics

---
tags: [physics, fluids, pressure, buoyancy, bernoulli, viscosity, turbulence]
eli5-summary: Liquids and gases push on things, flow around obstacles, and do surprising stuff when they move fast.
prerequisites: [classical-mechanics, thermodynamics]
leads-to: [astrophysics-cosmology]
---

## The Big Picture

A fluid is anything that flows — liquids and gases. Instead of tracking individual molecules, we treat fluids as continuous "stuff" described by density, pressure, and velocity at every point.

> **ELI5:** Imagine a swimming pool. The water pushes on you from all sides. The deeper you go, the harder it pushes. And when water moves — like through a garden hose — squeezing the hose makes it shoot faster. That's fluid mechanics in two sentences.

---

## Pressure

> **ELI5:** Pressure is how hard a fluid pushes on every little bit of surface it touches. Deeper underwater = more water above you = more weight = more pressure.

```
P = F/A

Pressure (Pascals) = Force / Area
```

**Atmospheric pressure:** ~101,325 Pa (1 atm). That's ~10 tons on every square meter. You don't feel it because the pressure inside your body pushes back.

### Pascal's Principle

> **ELI5:** Squeeze a balloon on one side and it bulges everywhere else equally. Pressure changes transmit uniformly through a confined fluid.

This is why hydraulic systems work. Apply force to a small piston, get amplified force at a large piston:
```
F₂ = F₁ × (A₂/A₁)
```
Hydraulic car jacks, brakes, and excavators all exploit this.

### Hydrostatic Pressure

```
P = P_surface + ρgh

ρ = fluid density, g = gravitational acceleration, h = depth
```

Pressure increases linearly with depth. At 10 m underwater, pressure is ~2 atm (1 from atmosphere + 1 from water). Every additional 10 m adds ~1 atm.

---

## Buoyancy — Archimedes' Principle

> **ELI5:** When you put something in water, the water pushes it up. The push-up force equals the weight of water the object shoved out of the way. If the object is lighter than the water it displaced, it floats.

```
F_buoyant = ρ_fluid × V_displaced × g
```

**Float condition:** Object floats if ρ_object < ρ_fluid.

**Why steel ships float:** The ship's total volume (including air inside) displaces a weight of water greater than the ship's weight. The *average* density (steel + air) is less than water.

> **⚠️ Misconception:** "Heavy things sink." It's not about weight — it's about density. A tiny lead pellet sinks. A massive aircraft carrier floats. What matters is average density vs. fluid density.

---

## Fluid Dynamics

### Continuity Equation

> **ELI5:** If you squeeze a garden hose, the water speeds up. The same amount of water has to get through a narrower space in the same time, so it goes faster.

```
A₁v₁ = A₂v₂

(for incompressible fluid)
```

Cross-sectional area times velocity is constant along a flow tube. Narrow passage → faster flow. Wide passage → slower flow.

### Bernoulli's Equation

> **ELI5:** Fast-moving air pushes sideways with less force than slow-moving air. That's why airplane wings work — air moves faster over the top than the bottom, creating lower pressure on top, which sucks the wing upward.

```
P + ½ρv² + ρgh = constant (along a streamline)
```

Three forms of energy per unit volume: pressure energy + kinetic energy + gravitational potential energy. They trade off: speed up the fluid, and pressure drops.

**Applications:**
- **Airplane lift:** Faster air over curved upper wing → lower pressure → net upward force
- **Venturi effect:** Fluid speeds up through constriction → pressure drops (used in carburetors, aspirators)
- **Shower curtain mystery:** Hot shower creates fast-moving air inside → lower pressure → curtain blows inward (partly, there's also convection)

> **⚠️ Misconception:** "Bernoulli fully explains airplane lift." It's a factor, but the complete explanation requires Newton's third law (wing deflects air downward → reaction force pushes wing up) and circulation theory. Real aerodynamics is more complex than the textbook "longer path over top" story.

---

## Viscosity

> **ELI5:** Viscosity is how thick and syrupy a fluid is. Honey has high viscosity (flows slow). Water has low viscosity (flows easy). Air has very low viscosity.

Viscous forces resist flow. In a pipe, fluid at the walls is stationary (no-slip condition), and velocity increases toward the center.

**Poiseuille's Law** (laminar flow in a pipe):
```
Q = πr⁴ΔP / (8ηL)

Q = flow rate, r = radius, ΔP = pressure difference
η = viscosity, L = pipe length
```

The r⁴ dependence is critical: doubling the pipe radius increases flow by 16×. This is why atherosclerosis (artery narrowing) is so dangerous — small diameter reductions cause huge flow decreases.

**Reynolds Number:**
```
Re = ρvL/η
```
Predicts flow regime. Re < ~2000: laminar (smooth). Re > ~4000: turbulent (chaotic). In between: transitional.

---

## Turbulence

> **ELI5:** Turn a faucet on gently — smooth flow. Turn it on full blast — chaotic, messy splashing. That chaos is turbulence, and it's one of the hardest unsolved problems in physics.

Turbulence involves chaotic, unpredictable fluid motion with eddies at all scales. Despite centuries of effort, we have no complete analytical theory of turbulence. As physicist Werner Heisenberg reportedly quipped when asked what he'd ask God: "Why turbulence?"

**What we know:**
- Energy cascades from large eddies to smaller ones (Kolmogorov cascade)
- At the smallest scales, viscosity converts kinetic energy to heat
- Statistical properties can be predicted even when individual behavior can't

---

## Surface Tension

> **ELI5:** Water molecules at the surface are pulled inward by their neighbors below and to the sides, but there's nothing pulling them up. So the surface acts like a stretched elastic sheet — that's why water droplets are round and small insects can walk on water.

```
γ = F/L (force per unit length along the surface)
```

Surface tension creates the minimum-surface-area shapes (spheres for droplets) and drives capillary action (water climbing up narrow tubes).

---

## Connections

- **Classical mechanics** → `01-classical-mechanics.md` — Fluid mechanics is Newton's laws applied to continuous media
- **Thermodynamics** → `04-thermodynamics.md` — Gas behavior, convection, pressure-volume work
- **Astrophysics** → `18-astrophysics-cosmology.md` — Stellar interiors, accretion disks, galaxy formation all involve fluid dynamics
- **Mathematical methods** → `19-mathematical-methods.md` — Navier-Stokes equations require serious vector calculus and PDE methods
