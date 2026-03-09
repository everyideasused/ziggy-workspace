# Quantum Electrodynamics (QED)

---
tags: [physics, QED, feynman-diagrams, path-integrals, renormalization, fine-structure-constant]
eli5-summary: QED describes how light and matter interact at the quantum level, using Feynman's brilliant picture language of particle diagrams. It's the most precisely tested theory in all of science.
prerequisites: [quantum-foundations, special-relativity, electrostatics, maxwells-equations]
leads-to: [particle-physics]
---

## The Big Picture

QED is the quantum field theory of electromagnetism. It describes every interaction between light (photons) and electrically charged matter (primarily electrons and positrons). Richard Feynman, Julian Schwinger, and Sin-Itiro Tomonaga developed it independently in the late 1940s. Feynman made it accessible through his famous diagrams.

> **ELI5:** QED says that electrically charged particles talk to each other by tossing photons back and forth. Two electrons repel because they throw photons between them (imagine two people on ice throwing basketballs — they push each other apart). QED calculates the probability of every possible way this photon exchange can happen, then adds them all up.

---

## The Path Integral Approach

> **ELI5:** A particle going from A to B doesn't take one path — it takes EVERY possible path simultaneously. Straight paths, zigzag paths, loops around the Moon. Each path has a probability amplitude. Most of the crazy paths cancel each other out. The paths near the classical trajectory reinforce each other. The end result is that particles *mostly* follow classical paths, but not perfectly.

### How It Works

The probability amplitude for a process is the sum over all possible histories (paths):

```
Amplitude = Σ (all paths) e^(iS/ℏ)

S = action = ∫ L dt (integral of Lagrangian)
```

Paths with rapidly varying phase cancel out. Paths near the classical path (where S is stationary) reinforce. This naturally reproduces classical mechanics in the large-scale limit.

**Feynman's profound insight:** Quantum mechanics is about summing over possibilities. Every photon "explores" every path and "chooses" based on interference of amplitudes.

---

## Feynman Diagrams

> **ELI5:** Feynman diagrams are cartoons that represent particle interactions. Each cartoon translates into a precise mathematical calculation. The simpler the cartoon, the more likely that process is.

### The Basic Elements

- **Straight line:** Fermion (electron, positron) propagating
- **Wavy line:** Photon propagating
- **Vertex:** Where lines meet — a charged particle emits or absorbs a photon

### The One Rule at Each Vertex

Every vertex contributes a factor of the **coupling constant** √α (where α ≈ 1/137):

```
α = e²/(4πε₀ℏc) ≈ 1/137.036

(the fine-structure constant)
```

### Perturbation Theory

Calculate by drawing all possible diagrams and adding their contributions:

**First order (simplest diagram):** Two electrons exchange one photon. Contribution ∝ α.

**Second order:** Add diagrams with one extra internal photon loop. Contribution ∝ α².

**Third order:** Two extra loops. Contribution ∝ α³.

Since α ≈ 1/137 is small, each additional order contributes ~100× less. The series converges quickly — you get excellent answers from just the first few terms.

---

## Virtual Particles

Internal lines in Feynman diagrams represent **virtual particles** — they exist only during the interaction and don't obey the usual energy-momentum relation (E² = p²c² + m²c⁴). They're "off-shell."

> **ELI5:** Virtual particles are like IOUs. They borrow energy from nowhere, do their job (transmit force), and pay it back before anyone notices — allowed by the uncertainty principle (ΔE×Δt ≥ ℏ/2). You can never directly detect a virtual particle, but their effects are measurable.

### The Vacuum Isn't Empty

QED predicts that the vacuum seethes with virtual particle-antiparticle pairs constantly popping in and out of existence. This isn't just theoretical:

**Casimir effect:** Two uncharged metal plates placed very close together experience an attractive force because the virtual photon modes between the plates are restricted (fewer fit) compared to outside. Predicted 1948, measured 1997.

**Lamb shift:** The electron in hydrogen has a slightly different energy than the naive Schrödinger equation predicts because it interacts with virtual electron-positron pairs in the vacuum. Measured to parts per trillion.

---

## Renormalization

### The Problem

When you calculate higher-order Feynman diagrams (loops), you get infinities. The electron's self-energy — its interaction with its own electromagnetic field — comes out as infinite.

### The Solution

Feynman, Schwinger, and Tomonaga showed that these infinities can be systematically absorbed into the measured values of charge and mass. The "bare" electron has infinite charge and mass, but the "dressed" electron (with its cloud of virtual particles) has the finite values we measure.

> **ELI5:** It's like calculating the height of a building by stacking blocks. Each block adds a finite amount, but the total keeps growing and seems to diverge. The trick: we don't care about the total from zero — we only care about differences between heights, and those are always finite and well-defined.

**Why it works:** Renormalization works because QED has a special mathematical structure (it's "renormalizable"). Only a finite number of parameters need to be fixed from experiment (electron mass and charge), and then everything else is predicted.

---

## Precision Tests

QED is the most precisely tested theory in science:

### The Anomalous Magnetic Moment of the Electron

The electron's magnetic moment differs from the naive value by a tiny amount (the "g-2" anomaly):

```
Theory:  g/2 = 1.001 159 652 181 643 ± 764
Experiment: g/2 = 1.001 159 652 180 73 ± 28
```

Agreement to **12 significant digits** — like predicting the distance from New York to Los Angeles to within the width of a human hair. This is the most precise prediction-measurement agreement in all of science.

### The Fine-Structure Constant

α ≈ 1/137.035999... This dimensionless number governs the strength of electromagnetic interactions. Its value determines atomic structure, chemistry, and the properties of light. Why it has this particular value is unknown — Feynman called it "one of the greatest damn mysteries of physics."

---

## QED's Legacy

QED served as the template for the entire Standard Model:

- **QCD (Quantum Chromodynamics):** Same framework applied to the strong force, with gluons replacing photons and color charge replacing electric charge
- **Electroweak theory:** Unifies QED with the weak force
- **Renormalization group:** Ideas from QED renormalization became central to condensed matter physics and statistical mechanics

Feynman's diagrams and path integral methods are now used across all of physics, from solid-state physics to gravity.

---

## Connections

- **Maxwell's equations** → `08-maxwells-equations-em-waves.md` — QED is the quantum version of classical electromagnetism
- **Quantum foundations** → `12-quantum-foundations.md` — Superposition, measurement, and probability amplitudes are QED's foundation
- **Special relativity** → `10-special-relativity.md` — QED is inherently relativistic; antiparticles are a relativistic prediction
- **Particle physics** → `15-particle-physics-standard-model.md` — QED is one pillar of the Standard Model
- **Conservation laws** → `02-conservation-laws-symmetry.md` — U(1) gauge symmetry ↔ charge conservation
