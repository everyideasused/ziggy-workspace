# General Relativity & Gravity

---
tags: [physics, general-relativity, gravity, spacetime, black-holes, gravitational-waves, einstein]
eli5-summary: Mass bends space and time. Things move along the curves. That bending IS gravity.
prerequisites: [special-relativity, classical-mechanics]
leads-to: [astrophysics-cosmology, quantum-foundations]
---

## The Big Picture

General relativity (GR) is Einstein's theory of gravity, published in 1915. It replaces Newton's "force at a distance" with a geometric picture: mass and energy curve spacetime, and objects follow the straightest possible paths through that curved spacetime. What we call "gravity" is the curvature.

> **ELI5:** Imagine a bowling ball sitting on a trampoline. It makes a dip. Roll a marble nearby and it curves toward the bowling ball — not because the bowling ball is pulling it, but because the trampoline surface is curved. That's general relativity: massive objects curve spacetime, and everything else follows the curves.

---

## The Equivalence Principle

> **ELI5:** You're in an elevator with no windows. If the elevator is sitting on Earth's surface, you feel your normal weight. If the elevator is in deep space accelerating upward at 9.8 m/s², you feel *exactly the same.* There is absolutely no experiment you can do inside the elevator to tell the difference. Gravity and acceleration are the same thing.

This is Einstein's key insight:

**Gravitational mass** (how strongly gravity pulls on you) = **Inertial mass** (how hard it is to accelerate you)

This equality is not a coincidence — it's a deep property of spacetime. Einstein promoted it from observation to principle, and GR follows.

### Consequences

- **Light bends in a gravitational field.** If acceleration and gravity are equivalent, and light bends in an accelerating elevator, then light must bend near massive objects. Confirmed by Eddington in 1919 during a solar eclipse.

- **Gravitational redshift.** Light climbing out of a gravitational field loses energy → shifts to longer wavelength (redder). Light falling in gains energy → shifts blue. Confirmed with atomic clocks at different heights.

- **Time runs slower in stronger gravity.** Clocks on the ground floor tick slower than clocks on the top floor (by tiny amounts — but GPS must account for this).

---

## Curved Spacetime

### The Core Idea

Newton: "Mass creates a gravitational force that acts at a distance."
Einstein: "Mass-energy tells spacetime how to curve. Curved spacetime tells matter how to move."

### The Metric

The geometry of spacetime is described by the metric tensor g_μν, which tells you the "distance" between nearby events:

```
ds² = g_μν dx^μ dx^ν
```

In flat spacetime (no gravity): ds² = c²dt² - dx² - dy² - dz² (Minkowski metric)
Near a spherical mass (Schwarzschild metric):

```
ds² = (1 - 2GM/rc²)c²dt² - dr²/(1 - 2GM/rc²) - r²dΩ²
```

The terms involving GM/rc² encode the curvature caused by mass M.

### Geodesics

Objects in free fall follow **geodesics** — the straightest possible paths through curved spacetime. On a curved surface, a "straight line" is a great circle (like airline routes on a globe). In curved spacetime, geodesics can be curves that we interpret as orbital trajectories.

**Key reframe:** A planet orbiting the Sun isn't being "pulled" by a force. It's traveling in a straight line through curved spacetime. The straight line happens to be a closed orbit because spacetime near the Sun is curved.

> **⚠️ Misconception:** "Gravity is a force in GR." In GR, gravity is geometry. An object in free fall (astronaut in orbit) feels no force — it's in an inertial frame. The "force" of gravity you feel standing on Earth is actually the ground accelerating you upward (preventing your natural geodesic, which is free fall toward Earth's center).

---

## Einstein's Field Equations

```
G_μν = (8πG/c⁴) T_μν

Left side: geometry of spacetime (curvature)
Right side: distribution of mass-energy-momentum
```

This is actually 10 coupled nonlinear partial differential equations (one for each independent component of the symmetric 4×4 tensors). Incredibly difficult to solve in general — exact solutions exist only for highly symmetric situations.

> **ELI5:** The left side describes the shape of the trampoline. The right side describes what's sitting on it. The equation says the shape depends on what's sitting on it.

### Famous Solutions

- **Schwarzschild (1916):** Non-rotating, uncharged spherical mass → predicts black holes
- **Kerr (1963):** Rotating black hole → most astrophysically realistic
- **Friedmann-Lemaître-Robertson-Walker (FLRW):** Homogeneous, isotropic universe → foundation of Big Bang cosmology
- **de Sitter:** Empty universe with cosmological constant → model for cosmic acceleration

---

## Black Holes

> **ELI5:** If you squeeze enough mass into a small enough space, spacetime curves so severely that nothing — not even light — can escape. That's a black hole. It's not a hole in space; it's a region where spacetime is curved beyond the point of no return.

### Schwarzschild Radius

```
r_s = 2GM/c²

For the Sun: r_s ≈ 3 km
For Earth: r_s ≈ 9 mm
```

**Event horizon:** The boundary at r = r_s. From outside, you see objects approaching the horizon slow down, redshift, and fade — they never quite reach it from your perspective. The infalling observer crosses it without noticing anything special locally (but is doomed to reach the singularity).

### Singularity

At the center (r = 0), GR predicts infinite curvature — a singularity. This is probably where GR breaks down and quantum gravity (which we don't yet have) takes over.

### No-Hair Theorem

A black hole is completely described by just three numbers: mass, charge, and spin. All other information about what fell in is lost (or is it? See the Information Paradox below).

### Types

- **Stellar black holes:** 5-100 solar masses, from collapsed massive stars
- **Supermassive black holes:** 10⁶-10¹⁰ solar masses, at centers of galaxies
- **Intermediate:** Evidence emerging for 100-10⁵ solar masses

### Hawking Radiation

Stephen Hawking showed that black holes aren't perfectly black — quantum effects near the horizon cause them to slowly radiate and lose mass:

```
T = ℏc³/(8πGMk_B)
```

Smaller black holes are hotter. A stellar-mass black hole has temperature ~10⁻⁸ K (colder than the CMB, so it absorbs more than it radiates). But a microscopic black hole would blaze and evaporate rapidly.

### The Information Paradox

If information falls into a black hole and the black hole eventually evaporates via thermal (random) Hawking radiation, is the information destroyed? Quantum mechanics says information can't be destroyed. This conflict between GR and quantum mechanics remains one of the biggest open problems in theoretical physics.

---

## Gravitational Waves

> **ELI5:** If you wiggle a charge, it creates electromagnetic waves. If you wiggle a mass, it creates gravitational waves — ripples in spacetime itself. They were predicted by Einstein in 1916 and first detected by LIGO in 2015.

### Properties

- Travel at the speed of light
- Transverse — they stretch space in one direction while compressing it in the perpendicular direction
- Incredibly weak — the first detection (two merging black holes) changed a 4-km arm length by ~10⁻¹⁸ m (1/1000th the diameter of a proton)

### Sources

- Merging black holes (strongest source)
- Merging neutron stars (also produces EM signals — "multi-messenger astronomy")
- Supernovae (if asymmetric)
- Spinning neutron stars with bumps (continuous waves, not yet detected)

---

## Tests of General Relativity

GR has passed every test we've thrown at it:

**Perihelion precession of Mercury:** GR predicts an extra 43 arcseconds/century of orbital precession, exactly matching observation. Newton couldn't explain this.

**Light bending by the Sun:** Stars near the Sun's edge during an eclipse appear shifted by 1.75 arcseconds — twice what Newtonian gravity would predict. Confirmed 1919.

**Gravitational redshift:** Confirmed with Pound-Rebka experiment (1959), GPS satellites (daily correction needed), and clocks at different altitudes.

**Shapiro delay:** Light passing near a massive object takes longer than expected — spacetime itself is "stretched." Confirmed with radar signals bouncing off Venus.

**Gravitational waves:** LIGO detection (2015) confirmed waveform predictions precisely.

**Black hole shadow:** Event Horizon Telescope imaged M87's black hole (2019), matching GR predictions.

---

## Where GR Breaks Down

GR is incomplete. It clashes with quantum mechanics in at least two places:

1. **Singularities** — Infinite curvature makes no physical sense. A quantum theory of gravity should resolve this.
2. **Information paradox** — Black hole evaporation seems to violate quantum information conservation.
3. **The Big Bang** — GR predicts a singularity at the beginning of the universe.

The quest for **quantum gravity** — a theory that unifies GR and quantum mechanics — is one of the great unsolved problems. Leading approaches include string theory and loop quantum gravity, but neither is complete or experimentally confirmed.

---

## Connections

- **Special relativity** → `10-special-relativity.md` — GR extends SR to include gravity and non-inertial frames
- **Classical mechanics** → `01-classical-mechanics.md` — Newtonian gravity is the weak-field, low-speed limit of GR
- **Astrophysics** → `18-astrophysics-cosmology.md` — GR governs cosmic expansion, black holes, neutron stars, gravitational lensing
- **Quantum mechanics** → `12-quantum-foundations.md` — The GR-QM conflict drives the search for quantum gravity
- **Particle physics** → `15-particle-physics-standard-model.md` — Gravity is the one fundamental force not included in the Standard Model
