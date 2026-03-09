---
type: knowledge-base
area: knowledge
status: active
tags:
  - physics
  - conservation
  - symmetry
  - noether
  - invariance
kb: prism
module: 02-conservation-laws-symmetry.md
---

# Conservation Laws & Symmetry

## The Big Picture

Conservation laws are the most powerful tools in physics. When something is conserved, you can solve problems without knowing any details about what happened in between — just compare before and after.

> **ELI5:** Imagine you have a jar of cookies. No matter how the kids rearrange, trade, or hide cookies, if no one opens the jar and no one puts new cookies in, the total number stays the same. Conservation laws are nature's cookie-counting rules.

The stunning insight: **every conservation law comes from a symmetry**. This connection, discovered by Emmy Noether in 1918, is arguably the most beautiful theorem in all of physics.

---

## Noether's Theorem

> **ELI5:** If the universe doesn't care about something (like where you are, or what time it is), then something is automatically conserved. The universe's "don't care" list directly creates the "can't change" list.

### The Symmetry → Conservation Map

| Symmetry | Conservation Law | Plain English |
|----------|-----------------|---------------|
| Time translation | Energy | The laws of physics don't change from Tuesday to Wednesday → energy is conserved |
| Space translation | Momentum | The laws of physics don't change from here to there → momentum is conserved |
| Rotational symmetry | Angular momentum | The laws of physics don't care which direction you're facing → angular momentum is conserved |
| Gauge symmetry (U(1)) | Electric charge | A deeper symmetry in quantum field theory → charge is conserved |
| Gauge symmetry (SU(3)) | Color charge | → Color charge is conserved (see particle physics) |

**Why this is profound:** Conservation laws aren't just useful tricks. They're consequences of the universe's deepest geometric structure. If spacetime were lumpy or direction-dependent, these laws would break.

---

## Conservation of Energy

> **ELI5:** Energy is like money — it can change forms (cash to check to crypto) but the total amount never changes. You can't create it or destroy it, only move it around.

### Statement

In an isolated system (no external work, no energy entering or leaving), the total energy remains constant.

```
E_total = KE + PE + thermal + chemical + nuclear + ... = constant
```

### Energy Forms and Conversions

Energy wears many costumes:

**Kinetic energy** → Energy of motion (½mv², ½Iω²)
**Gravitational PE** → Energy of position in a gravitational field (mgh, -GMm/r)
**Elastic PE** → Energy stored in deformation (½kx²)
**Thermal energy** → Random kinetic energy of molecules (related to temperature)
**Chemical energy** → Energy in molecular bonds (food, fuel, batteries)
**Nuclear energy** → Energy binding atomic nuclei (E=mc², fission, fusion)
**Electromagnetic energy** → Energy in electric and magnetic fields (½ε₀E² + B²/2μ₀)
**Mass-energy** → Mass itself is frozen energy (E=mc²)

### When Energy Seems to Disappear

> **⚠️ Misconception:** "Energy is lost to friction." Energy is never lost — it's converted to thermal energy (heat). The total is still conserved. When you slam the brakes, your car's kinetic energy becomes heat in the brake pads. Every "loss" is a conversion.

### Practical Application

Energy conservation is your best friend for problems involving heights, speeds, and springs — anything where forces are hard to track but energy conversions are clear.

**Example:** A roller coaster at height h starts from rest. What's its speed at the bottom?
```
mgh = ½mv²
v = √(2gh)
```
Mass cancels. You don't need to know the shape of the track, the angle, or anything about the path. Energy conservation doesn't care about the journey — only departure and arrival.

---

## Conservation of Momentum

> **ELI5:** If you and your friend are on skateboards and you push each other, you roll apart — but the total "push" of the two of you hasn't changed. What one gains, the other loses.

### Statement

In a system with no net external force, the total momentum is constant.

```
p_total = Σ m_i × v_i = constant
```

### Why It Works

This follows directly from Newton's Third Law. Every internal force has an equal and opposite reaction, so internal forces always cancel in pairs. Only external forces can change total momentum.

### Applications

**Collisions** — In any collision (elastic, inelastic, explosion), total momentum before = total momentum after. This is true even when energy is "lost" to heat and deformation.

**Explosions/Recoil** — A gun and bullet start at rest (total p = 0). After firing, bullet goes forward, gun kicks back. p_bullet + p_gun = 0 still.

**Rocket propulsion** — Rockets work in space because they throw mass (exhaust) backward, gaining forward momentum. No air needed to "push against."

---

## Conservation of Angular Momentum

> **ELI5:** A spinning ice skater who pulls in their arms spins faster. The total amount of "spin" didn't change — it just got concentrated into a smaller space.

### Statement

In a system with no net external torque, total angular momentum is conserved.

```
L = I × ω = constant

If I decreases, ω increases (and vice versa)
```

### Spectacular Examples

**Figure skater:** Arms out → large I, slow ω. Arms in → small I, fast ω. L stays the same.

**Collapsing stars:** A massive star collapses to a neutron star. Radius shrinks by factor of ~100,000. Moment of inertia drops by ~10¹⁰. Rotation rate increases by ~10¹⁰. A star rotating once per month becomes a pulsar spinning hundreds of times per second.

**Planetary orbits:** A planet sweeps equal areas in equal times (Kepler's 2nd law) because angular momentum is conserved. Closer to the sun → smaller r → faster orbital speed.

**Gyroscopes:** Angular momentum gives a spinning gyroscope stability. The angular momentum vector resists changing direction, which is why a spinning top stays upright and why gyroscopes are used in navigation.

---

## Conservation of Charge

> **ELI5:** You can't create or destroy electric charge. You can separate positive from negative (like rubbing a balloon on your hair), but the total always adds up to the same number.

### Statement

The total electric charge in an isolated system is constant. Charge can be transferred between objects but never created or destroyed.

This holds in every known process — chemical reactions, nuclear reactions, particle creation and annihilation. When a neutron decays: n → p + e⁻ + ν̄. Neutron (charge 0) → proton (+1) + electron (-1) + antineutrino (0). Total: 0 = +1 + (-1) + 0. ✓

### Deeper Origin

Charge conservation comes from gauge symmetry in quantum electrodynamics — a mathematical symmetry in how we describe electromagnetic interactions. This connects to `16-quantum-electrodynamics.md`.

---

## Conservation of Baryon Number & Lepton Number

These are approximate conservation laws (violated in extreme conditions) that govern particle physics:

**Baryon number:** Protons and neutrons (baryons) have B=+1. Antibaryons have B=-1. In every observed reaction, total baryon number is conserved. This is why protons don't decay (as far as we've seen).

**Lepton number:** Electrons, muons, taus, and their neutrinos have L=+1. Antileptons have L=-1. Conserved in all observed reactions.

See `15-particle-physics-standard-model.md` for details.

---

## CPT Symmetry

Three fundamental discrete symmetries:

**C (Charge conjugation):** Swap all particles for antiparticles.
**P (Parity):** Mirror-reflect everything (swap left and right).
**T (Time reversal):** Run the movie backward.

### What's Conserved?

Individually, C, P, and T are each violated by the weak nuclear force. Even CP together is violated (which is why there's more matter than antimatter in the universe — one of physics' greatest puzzles).

But **CPT together** — swap particles for antiparticles, mirror-reflect, AND run time backward — appears to be an exact symmetry of nature. No violation has ever been observed. This is required by any quantum field theory that respects special relativity.

> **ELI5:** If you made a mirror-image universe out of antimatter and ran its clock backward, it would follow exactly the same physics as ours.

---

## Symmetry Breaking

> **ELI5:** A pencil balanced on its tip is perfectly symmetric — it could fall in any direction. When it falls, the symmetry breaks. The laws were symmetric, but the outcome picked a direction. That's spontaneous symmetry breaking.

### Why This Matters

Symmetry breaking explains:
- **Why magnets exist** — Atoms in iron can point any direction (symmetric), but below a critical temperature, they spontaneously align (symmetry broken)
- **Why particles have mass** — The Higgs field breaks electroweak symmetry, giving particles mass (see `15-particle-physics-standard-model.md`)
- **Why the universe has structure** — Tiny quantum fluctuations in the early universe broke perfect uniformity, seeding galaxies
- **Phase transitions** — Water freezing picks a crystal orientation, breaking rotational symmetry

---

## The Deep Unity

Here's the Feynman-level insight: conservation laws aren't separate facts to memorize. They're all expressions of the same idea — **symmetry is the engine of physics**.

The standard model of particle physics is entirely built on symmetries. General relativity is built on the symmetry of spacetime. The search for a unified theory is, at its core, a search for the *master symmetry* that encompasses all others.

When you solve a physics problem using conservation of energy, you're exploiting the fact that the universe doesn't care what time it is. When you use conservation of momentum, you're exploiting the fact that the universe doesn't play favorites with locations. These aren't human inventions — they're the universe's own structure, and Noether's theorem is the Rosetta Stone that reads it.

---

## Connections

- **Classical mechanics** → `01-classical-mechanics.md` — Where energy, momentum, and angular momentum are first defined
- **Thermodynamics** → `04-thermodynamics.md` — The second law introduces *directed* change alongside conservation
- **Special relativity** → `10-special-relativity.md` — Energy and momentum merge into a single four-vector
- **Quantum mechanics** → `12-quantum-foundations.md` — Conservation laws become operator eigenvalue constraints
- **Particle physics** → `15-particle-physics-standard-model.md` — Gauge symmetries dictate all fundamental forces
- **Cosmology** → `18-astrophysics-cosmology.md` — Symmetry breaking shaped the universe's evolution
