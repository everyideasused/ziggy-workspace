# Electrostatics

---
tags: [physics, electrostatics, coulomb, electric-field, gauss-law, capacitance, potential]
eli5-summary: Like charges repel, opposites attract, and this simple rule builds lightning, computers, and your entire nervous system.
prerequisites: [classical-mechanics, conservation-laws]
leads-to: [magnetism, maxwells-equations, quantum-foundations]
---

## The Big Picture

Electrostatics is the study of stationary electric charges. It's the starting point for understanding electricity, magnetism, and ultimately all of chemistry and electronics.

> **ELI5:** Rub a balloon on your hair and it sticks to the wall. That's because you transferred tiny invisible things called charges. Like charges push away from each other, opposite charges pull toward each other. Everything electrical starts here.

---

## Electric Charge

### Properties

- **Two types:** Positive (+) and negative (-). Protons carry +, electrons carry -.
- **Quantized:** Charge comes in discrete chunks. The smallest free charge is e = 1.602 × 10⁻¹⁹ C.
- **Conserved:** Total charge in an isolated system never changes. (See `02-conservation-laws-symmetry.md`)

> **⚠️ Misconception:** "Charging an object creates charge." No. Rubbing a balloon on hair *transfers* electrons from hair to balloon. Hair becomes positive (lost electrons), balloon becomes negative (gained electrons). Total charge: still zero.

---

## Coulomb's Law

> **ELI5:** Two charges pull or push each other. The bigger the charges, the stronger the pull/push. The farther apart, the weaker — and it weakens fast (double the distance, quarter the force).

```
F = k × q₁q₂ / r²

k = 8.99 × 10⁹ N⋅m²/C²
k = 1/(4πε₀)
ε₀ = 8.85 × 10⁻¹² C²/(N⋅m²) (permittivity of free space)
```

Same structure as gravity (F = Gm₁m₂/r²), but electrostatic force is **~10³⁶ times stronger** than gravity for elementary particles. The reason gravity dominates at large scales: most matter is electrically neutral (positive and negative cancel), so gravity — always attractive, never screened — wins by accumulation.

---

## Electric Field

> **ELI5:** A charge doesn't reach across space and push another charge. Instead, it creates an invisible "field" everywhere around it — a set of instructions that says "if a charge shows up here, push it this way." The field is real. It exists even when no test charge is present.

```
E = F/q = kQ/r² (for a point charge Q)
```

**Field lines:**
- Point away from positive charges, toward negative
- Density of lines represents field strength
- Lines never cross

**Why fields matter:** Fields let us separate the source from the effect. Define the field once, then predict the force on *any* charge placed in it. Fields also carry energy and can exist independently of charges (electromagnetic waves).

### Superposition

The electric field from multiple charges is the vector sum of the individual fields:
```
E_total = E₁ + E₂ + E₃ + ...
```

---

## Gauss's Law

> **ELI5:** Imagine wrapping an invisible balloon around a charge. The total "push" through the balloon's surface tells you exactly how much charge is inside, no matter what shape the balloon is.

```
∮ E⋅dA = Q_enclosed / ε₀
```

The total electric flux through any closed surface equals the enclosed charge divided by ε₀.

**Power of Gauss's Law:** For symmetric charge distributions, it gives the electric field in one step — no integration needed.

### Common Applications

**Infinite plane of charge:** E = σ/(2ε₀) — uniform field, independent of distance. This is why parallel plate capacitors work so well.

**Infinite line of charge:** E = λ/(2πε₀r) — falls as 1/r.

**Spherical shell:** Outside: same as a point charge at the center. Inside: E = 0. This is why a metal cage shields you from external fields (Faraday cage).

**Solid sphere of uniform charge:** Outside: point charge. Inside: E increases linearly with r.

---

## Electric Potential

> **ELI5:** Electric potential is the "height" in the electrical world. Just like a ball rolls downhill from high to low gravitational potential, a positive charge "rolls" from high to low electric potential. Voltage is the difference in "electrical height" between two points.

```
V = kQ/r (for point charge)

V = -∫ E⋅dr (general definition)
```

**Voltage (potential difference):**
```
ΔV = V_B - V_A = -∫(A→B) E⋅dr
```

**Relationship between field and potential:**
```
E = -dV/dr (in 1D)
E = -∇V (in 3D)
```

The electric field points from high potential to low potential, just as the slope of a hill points downhill.

**Equipotential surfaces:** Surfaces of constant V. Field lines are always perpendicular to equipotential surfaces, just as the steepest slope is perpendicular to contour lines on a topographic map.

### Energy

```
PE = qV (potential energy of charge q at potential V)

PE = kq₁q₂/r (between two point charges)
```

**The electron-volt (eV):** Energy gained by one electron crossing 1 volt of potential difference.
```
1 eV = 1.602 × 10⁻¹⁹ J
```

Used extensively in atomic, nuclear, and particle physics because Joules are absurdly large for individual particles.

---

## Conductors and Insulators

### Conductors

- Free electrons can move throughout the material (metals)
- In static equilibrium: E = 0 inside, all excess charge resides on the surface
- Surface is an equipotential
- Electric field at the surface is perpendicular to the surface

> **ELI5:** A conductor is like a town where people can walk freely. Drop a bunch of extra people (charges) in the middle and they quickly spread to the edges. Inside, everyone's evenly spaced — no net crowding (no electric field).

### Insulators (Dielectrics)

- Charges are bound and can't move freely
- Can be *polarized* — positive and negative charges shift slightly, creating aligned dipoles
- Reduces the effective field inside the material by factor κ (dielectric constant)

---

## Capacitance

> **ELI5:** A capacitor is two metal plates near each other with an insulator between them. Push charge onto one plate, it pulls the opposite charge to the other plate. It stores electrical energy like a compressed spring stores mechanical energy — and can release it instantly.

```
C = Q/V (capacitance = charge stored per volt applied)
```

**Parallel plate capacitor:**
```
C = ε₀A/d (= κε₀A/d with dielectric)
```

**Energy stored:**
```
U = ½CV² = ½QV = Q²/(2C)
```

### Capacitor Combinations

**Parallel:** C_total = C₁ + C₂ + ... (voltages equal, charges add)
**Series:** 1/C_total = 1/C₁ + 1/C₂ + ... (charges equal, voltages add)

---

## Electric Dipoles

Two equal and opposite charges separated by distance d:

```
Dipole moment: p = qd (points from - to +)
```

Dipoles are everywhere in nature — water molecules are permanent dipoles, which is why water is such a good solvent (it can orient to attract both positive and negative ions).

**Field of a dipole:** Falls as 1/r³ (faster than a point charge's 1/r²) because the positive and negative contributions nearly cancel at large distances.

---

## Connections

- **Magnetism** → `07-magnetism-induction.md` — Moving charges create magnetic fields; electricity and magnetism are two sides of one coin
- **Maxwell's equations** → `08-maxwells-equations-em-waves.md` — Gauss's law is one of the four Maxwell equations
- **Quantum mechanics** → `12-quantum-foundations.md` — Atomic structure is governed by the Coulomb potential
- **Condensed matter** → `17-condensed-matter.md` — Band theory, semiconductors, dielectrics all rest on electrostatics
- **Conservation laws** → `02-conservation-laws-symmetry.md` — Charge conservation comes from gauge symmetry
