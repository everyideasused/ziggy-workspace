# Quantum Foundations

---
tags: [physics, quantum-mechanics, wave-particle-duality, uncertainty, schrodinger, measurement, superposition]
eli5-summary: Tiny things don't have definite properties until you look at them. They're not particles or waves — they're something weirder that acts like both depending on how you check.
prerequisites: [oscillations-waves, classical-mechanics]
leads-to: [quantum-applications, atomic-nuclear-physics, particle-physics, quantum-electrodynamics]
---

## The Big Picture

Quantum mechanics is the physics of the very small — atoms, electrons, photons. It replaced classical physics at the atomic scale not because classical physics was slightly wrong, but because it was *conceptually* wrong. The quantum world is genuinely different from everyday experience.

> **ELI5:** Imagine you have a coin that's not heads or tails while it's spinning — it's genuinely *both* until it lands and you look. And there's no way, even in principle, to predict which it'll be. Also, looking at the coin is what forces it to choose. That's quantum mechanics. (Except it's weirder than this analogy suggests.)

---

## Why Quantum Mechanics Was Needed

Classical physics failed spectacularly at three phenomena:

### 1. Blackbody Radiation (The Ultraviolet Catastrophe)

Classical physics predicted that a hot object should radiate infinite energy at short wavelengths. This was obviously wrong. In 1900, Planck fixed it by assuming energy comes in discrete packets:

```
E = hf = ℏω

h = 6.626 × 10⁻³⁴ J⋅s (Planck's constant)
ℏ = h/(2π)
```

This was the birth of quantum theory — energy is **quantized**, not continuous.

### 2. The Photoelectric Effect

Light hitting metal ejects electrons, but only if the light's frequency is high enough. Intensity doesn't matter — dim UV works, bright red doesn't. Einstein (1905) explained this: light comes in particles (photons) each carrying energy E = hf. One photon ejects one electron, and the photon needs enough energy (high enough frequency) to knock the electron loose.

```
KE_max = hf - φ

φ = work function (energy needed to free the electron)
```

### 3. Atomic Stability

Classical electromagnetism says an orbiting electron should continuously radiate energy (accelerating charge → radiation) and spiral into the nucleus in ~10⁻¹¹ seconds. Atoms should be unstable. They're not. Bohr (1913) proposed quantized orbits; Schrödinger and Heisenberg later explained why.

---

## Wave-Particle Duality

> **ELI5:** Light acts like a wave (interference, diffraction) and like a particle (photoelectric effect). Electrons act like particles (they hit detectors one at a time) and like waves (they make interference patterns). They're neither wave nor particle — they're quantum objects that show different faces depending on what experiment you do.

### The Double-Slit Experiment with Single Particles

Fire electrons one at a time at a double slit. Each electron hits the detector at a single point (particle-like). But after thousands of electrons, the dots form an interference pattern (wave-like). Each electron somehow "went through both slits" and interfered with itself.

**Even stranger:** If you put a detector at the slits to see which slit each electron goes through, the interference pattern disappears. The act of observing which path the electron takes forces it to behave like a particle.

### de Broglie Wavelength

Every particle has an associated wavelength:

```
λ = h/p = h/(mv)
```

For a baseball (0.145 kg at 40 m/s): λ ≈ 10⁻³⁴ m — utterly undetectable.
For an electron at 10⁶ m/s: λ ≈ 7 × 10⁻¹⁰ m — comparable to atomic spacing (observable!).

Quantum effects become important when the de Broglie wavelength is comparable to the system size.

---

## The Schrödinger Equation

> **ELI5:** The Schrödinger equation is the quantum version of Newton's F=ma. Instead of tracking a particle's position and velocity, it tracks a "wave function" that encodes the probability of finding the particle anywhere. The equation tells you how this probability wave evolves over time.

### Time-Dependent Form

```
iℏ ∂Ψ/∂t = ĤΨ

Ĥ = Hamiltonian operator (encodes the system's energy)
Ψ = wave function
```

### Time-Independent Form (for stationary states)

```
ĤΨ = EΨ

E = energy eigenvalue
Ψ = energy eigenstate
```

This is an eigenvalue equation. The allowed energies E are the eigenvalues — often discrete (quantized). This is where quantization comes from naturally, not as an assumption.

---

## The Wave Function Ψ

### What It Means

Ψ(x,t) is a complex-valued function. Its physical meaning:

```
|Ψ(x,t)|² = probability density of finding the particle at position x at time t
```

```
∫|Ψ|² dx = 1 (normalization — particle must be somewhere)
```

### What It Doesn't Mean

The wave function is not a physical wave in space like a water wave. It lives in an abstract mathematical space. This is one of the most debated aspects of quantum mechanics — *what is Ψ, really?*

---

## The Uncertainty Principle

> **ELI5:** You literally cannot know both where a particle is and how fast it's going at the same time. This isn't about bad instruments — it's a fundamental property of nature. The more precisely you know one, the fuzzier the other becomes.

```
Δx × Δp ≥ ℏ/2

Also: ΔE × Δt ≥ ℏ/2
```

**Why this exists:** It's not about disturbing the particle by measuring it (a common misexplanation). It's because a particle doesn't *have* a definite position and momentum simultaneously. These are complementary properties — like asking "is it a wave or a particle?" The answer depends on what you measure.

> **⚠️ Misconception:** "The uncertainty principle means our instruments aren't good enough." Wrong. It's not a measurement limitation — it's a property of quantum objects. An electron literally does not have a simultaneously well-defined position and momentum. The uncertainty is ontological, not epistemic.

### The Energy-Time Uncertainty Relation

```
ΔE × Δt ≥ ℏ/2
```

This allows **virtual particles** to pop in and out of existence for brief periods — borrowing energy from nothing, as long as they pay it back quickly enough. This isn't just theoretical — it manifests as the Casimir effect and the Lamb shift.

---

## Superposition

> **ELI5:** A quantum object can be in multiple states at once — not "one or the other" but genuinely both. Like a coin that's heads AND tails while spinning. Only when you look does it become one or the other.

If Ψ₁ and Ψ₂ are valid states, then αΨ₁ + βΨ₂ is also a valid state. The system is literally in both states simultaneously until a measurement collapses it to one.

**Schrödinger's Cat** (thought experiment): A cat in a box with a quantum-triggered poison is, according to quantum mechanics, simultaneously alive and dead until you open the box. Schrödinger intended this to show how absurd quantum mechanics sounds at macroscopic scales — the "measurement problem."

---

## Measurement and the Collapse Postulate

### The Problem

Before measurement: Ψ is a superposition of many possible outcomes.
After measurement: Ψ "collapses" to one definite outcome.

**The measurement problem:** What counts as a measurement? When exactly does collapse happen? How does a smooth, deterministic equation (Schrödinger) produce sudden, random jumps?

### Interpretations

**Copenhagen (Bohr/Heisenberg):** The wave function is a tool for calculating probabilities. Collapse happens upon measurement. Don't ask what happens "between measurements" — it's meaningless.

**Many-Worlds (Everett):** No collapse. The universe splits at every measurement — all outcomes occur in different branches. The wave function of the entire universe evolves smoothly.

**Pilot Wave (de Broglie-Bohm):** Particles have definite positions at all times, guided by the wave function. Deterministic, but non-local.

**Decoherence program:** The appearance of collapse is explained by the system's interaction with its environment. Quantum superpositions don't vanish — they spread into the environment and become practically unobservable.

> **Feynman's view:** "Nobody understands quantum mechanics." The math works perfectly. The predictions are confirmed to extraordinary precision. What it *means* is still debated.

---

## Quantum States and Operators

### Dirac Notation

```
|ψ⟩ = ket (state vector)
⟨ψ| = bra (conjugate transpose)
⟨ψ|φ⟩ = inner product (overlap between states)
```

### Observables as Operators

Every measurable quantity has a corresponding operator:
- Position: x̂
- Momentum: p̂ = -iℏ d/dx
- Energy: Ĥ (Hamiltonian)
- Angular momentum: L̂

**Eigenvalue equation:** ÂΨ = aΨ — if the system is in an eigenstate of Â, measuring A always gives the eigenvalue a.

### Commutators

```
[Â,B̂] = ÂB̂ - B̂Â
```

If [Â,B̂] = 0: A and B can be simultaneously known (compatible observables).
If [Â,B̂] ≠ 0: Uncertainty relation exists (incompatible observables).

```
[x̂,p̂] = iℏ → Heisenberg uncertainty principle
```

---

## Key Quantum Systems

### Particle in a Box (Infinite Square Well)

> **ELI5:** Trap a particle in a box with impenetrable walls. It can only have certain energies — like a guitar string can only play certain notes. The longer the box, the lower the allowed frequencies (energies).

```
E_n = n²π²ℏ²/(2mL²)    (n = 1, 2, 3, ...)

ψ_n(x) = √(2/L) sin(nπx/L)
```

**Key insight:** The lowest energy (n=1) is NOT zero — the particle always has some minimum energy. This is the **zero-point energy**, a direct consequence of the uncertainty principle (confine a particle → know its position better → momentum must be uncertain → must have some kinetic energy).

### Quantum Harmonic Oscillator

```
E_n = (n + ½)ℏω    (n = 0, 1, 2, ...)
```

Equally spaced energy levels. The ½ℏω is again zero-point energy. This system is everywhere: vibrating molecules, photons in a cavity, phonons in solids, fields in quantum field theory.

---

## Connections

- **Waves** → `03-oscillations-waves.md` — Wave behavior is central; Schrödinger equation is a wave equation
- **Quantum applications** → `13-quantum-applications.md` — Tunneling, spin, entanglement, quantum computing
- **Atomic physics** → `14-atomic-nuclear-physics.md` — Quantum mechanics explains atomic structure completely
- **Particle physics** → `15-particle-physics-standard-model.md` — The Standard Model is built on quantum field theory
- **QED** → `16-quantum-electrodynamics.md` — The quantum theory of light and charged particles
- **Condensed matter** → `17-condensed-matter.md` — Quantum mechanics explains solids, superconductivity, semiconductors
- **Math methods** → `19-mathematical-methods.md` — Linear algebra (Hilbert spaces), differential equations, complex analysis
