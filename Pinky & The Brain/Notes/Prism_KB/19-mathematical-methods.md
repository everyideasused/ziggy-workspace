---
type: knowledge-base
area: knowledge
status: active
tags:
  - physics
  - math
  - vector-calculus
  - differential-equations
  - linear-algebra
  - fourier
  - complex-analysis
kb: prism
module: 19-mathematical-methods.md
---

# Mathematical Methods for Physics

## The Big Picture

Mathematics is the language of physics. Not an accessory — the language itself. But you don't need ALL of math — you need specific tools, wielded with physical intuition. This file covers the essential mathematical toolkit for physics at increasing depth.

> **ELI5:** Physics is full of patterns. Math is the language for describing patterns precisely. Calculus describes change. Vectors describe direction. Differential equations describe how things evolve. Linear algebra describes quantum states. If physics is the story, math is the alphabet.

---

## Vectors

> **ELI5:** A vector is an arrow — it has a size AND a direction. Temperature is just a number (scalar). But wind is a vector: 20 mph *from the north*. Force, velocity, electric field — all vectors.

### Operations

**Addition:** Tip-to-tail. A + B places B's tail at A's tip.

**Dot product:** A⋅B = |A||B|cos(θ) — gives a scalar. Measures "how much A points along B."

**Cross product:** A×B = |A||B|sin(θ) n̂ — gives a vector perpendicular to both. Direction by right-hand rule. Used for torque, magnetic force, angular momentum.

### Coordinate Systems

- **Cartesian (x, y, z):** Good for boxes and flat surfaces
- **Cylindrical (r, φ, z):** Good for pipes and wires
- **Spherical (r, θ, φ):** Good for orbits and atoms

Choosing the right coordinate system can make a problem trivial or impossible.

---

## Calculus — The Language of Change

### Derivatives

```
f'(x) = df/dx = lim(Δx→0) [f(x+Δx) - f(x)] / Δx
```

**Physical meaning:** Rate of change. Position → velocity (dx/dt). Velocity → acceleration (dv/dt).

**Key derivatives:**
- d/dx (xⁿ) = nxⁿ⁻¹
- d/dx (eˣ) = eˣ
- d/dx (sin x) = cos x
- d/dx (ln x) = 1/x

### Integrals

```
∫f(x)dx = F(x) + C (antiderivative)

∫ₐᵇ f(x)dx = area under f(x) from a to b
```

**Physical meaning:** Accumulation. Velocity → position (∫v dt). Force over distance → work (∫F dx).

### Partial Derivatives

Functions of multiple variables: ∂f/∂x means "how does f change when I wiggle x, keeping everything else fixed?"

Essential for fields (E(x,y,z,t)), thermodynamics (∂U/∂V at constant T), and wave equations.

---

## Vector Calculus

The three operations that power electromagnetism and fluid dynamics:

### Gradient (∇f)

> **ELI5:** The gradient points uphill. It tells you which direction a quantity increases fastest and how steeply.

```
∇f = (∂f/∂x, ∂f/∂y, ∂f/∂z)
```

**Used for:** Electric field from potential (E = -∇V), force from potential energy (F = -∇U).

### Divergence (∇⋅F)

> **ELI5:** Divergence measures whether stuff is spreading out or converging at a point. Positive = source (stuff flows outward). Negative = sink (stuff flows inward). Zero = stuff just passes through.

```
∇⋅F = ∂Fₓ/∂x + ∂Fᵧ/∂y + ∂F_z/∂z
```

**Used for:** Gauss's law (∇⋅E = ρ/ε₀), no magnetic monopoles (∇⋅B = 0).

### Curl (∇×F)

> **ELI5:** Curl measures how much a field swirls or rotates around a point. Like a tiny paddle wheel placed in a river — if the current spins the wheel, there's curl.

```
∇×F = (∂F_z/∂y - ∂Fᵧ/∂z, ∂Fₓ/∂z - ∂F_z/∂x, ∂Fᵧ/∂x - ∂Fₓ/∂y)
```

**Used for:** Faraday's law (∇×E = -∂B/∂t), Ampère's law (∇×B = μ₀J + μ₀ε₀∂E/∂t).

### Fundamental Theorems

**Divergence theorem:** ∮F⋅dA = ∫(∇⋅F)dV — flux through surface = sum of sources inside

**Stokes' theorem:** ∮F⋅dl = ∫(∇×F)⋅dA — circulation around a loop = curl through the loop

These connect local properties (derivatives) to global properties (integrals) — the mathematical backbone of Maxwell's equations.

---

## Differential Equations

### Ordinary Differential Equations (ODEs)

**First-order, separable:** dy/dx = f(x)g(y) → separate and integrate.

**Second-order, constant coefficients (the workhorse):**
```
a(d²y/dx²) + b(dy/dx) + cy = f(x)
```

Solution method: Find the characteristic equation ar² + br + c = 0.
- Two real roots → y = Ae^(r₁x) + Be^(r₂x)
- Repeated root → y = (A + Bx)e^(rx)
- Complex roots (r = α ± βi) → y = e^(αx)[A cos(βx) + B sin(βx)]

**Appears in:** SHM, damped oscillations, RLC circuits, quantum mechanics.

### Partial Differential Equations (PDEs)

**Wave equation:** ∂²u/∂t² = v²∂²u/∂x² → Waves
**Heat equation:** ∂u/∂t = α∂²u/∂x² → Diffusion
**Laplace equation:** ∇²V = 0 → Electrostatics in charge-free regions
**Schrödinger equation:** iℏ∂Ψ/∂t = ĤΨ → Quantum mechanics

**Separation of variables:** The primary technique. Assume u(x,t) = X(x)T(t), substitute, and separate into independent ODEs. This works for most physics PDEs in symmetric geometries.

---

## Linear Algebra (Essential for Quantum Mechanics)

### Vectors in Abstract Spaces

In quantum mechanics, states are vectors in a **Hilbert space** (an infinite-dimensional complex vector space with an inner product). Observables are represented by **operators** (matrices, in finite dimensions).

### Key Concepts

**Eigenvalue equation:** A|v⟩ = λ|v⟩ — the operator A acting on eigenvector |v⟩ gives back the same vector scaled by eigenvalue λ.

In quantum mechanics: Ĥ|ψ⟩ = E|ψ⟩ — energy eigenvalues are the allowed energies.

**Hermitian operators:** A† = A. Eigenvalues are real (observable quantities must be real numbers). Eigenvectors are orthogonal. Every observable in QM is a Hermitian operator.

**Diagonalization:** Finding a basis where the operator/matrix is diagonal. In that basis, the eigenvalues sit on the diagonal and the physics becomes transparent.

**Matrix mechanics:** Heisenberg's formulation of QM represents states as column vectors and observables as matrices. Completely equivalent to Schrödinger's wave mechanics.

### Pauli Matrices (Spin-½)

```
σₓ = |0 1|   σᵧ = |0 -i|   σ_z = |1  0|
     |1 0|        |i  0|         |0 -1|
```

These 2×2 matrices represent spin measurements along x, y, z axes. They're the building blocks of quantum computing (qubit operations).

---

## Fourier Analysis

> **ELI5:** Any shape of wave — no matter how complicated — can be built by adding together simple sine waves of different frequencies. Fourier analysis takes a complicated signal apart into its simple components. It's like hearing a chord and identifying the individual notes.

### Fourier Series (Periodic Functions)

```
f(x) = a₀/2 + Σ[aₙcos(nωx) + bₙsin(nωx)]
```

Any periodic function is a sum of sines and cosines. The coefficients tell you "how much" of each frequency is present.

### Fourier Transform (Non-Periodic Functions)

```
F(ω) = ∫ f(t) e^(-iωt) dt
```

Transforms between time domain and frequency domain. Essential for:
- Signal processing and filtering
- Solving PDEs (transforms them into algebraic equations)
- Quantum mechanics (position ↔ momentum representations: Ψ(x) ↔ Φ(p))
- Optics (diffraction patterns are Fourier transforms of aperture shapes)

### The Uncertainty Principle — Mathematically

A narrow function in time has a broad Fourier transform in frequency (and vice versa). This is purely mathematical — it predates quantum mechanics. The Heisenberg uncertainty principle is a physical consequence: Ψ(x) and Φ(p) are Fourier transform pairs, so Δx × Δp ≥ ℏ/2.

---

## Complex Numbers

> **ELI5:** Imaginary numbers aren't "imaginary" — they're just numbers that live on a perpendicular number line. Together with real numbers, they form a 2D number plane that makes oscillating and rotating things much easier to describe.

```
z = a + bi,  i² = -1

Euler's formula: e^(iθ) = cos(θ) + i sin(θ)
```

**Why physics loves them:**
- Waves: e^(i(kx-ωt)) is cleaner than sin + cos
- Quantum mechanics: the wave function is complex-valued
- AC circuits: impedance is complex (Z = R + iωL + 1/iωC)
- Residue calculus: evaluates hard real integrals by going complex

### Euler's Identity

```
e^(iπ) + 1 = 0
```

Connects the five most important numbers in math (e, i, π, 1, 0) in one equation. Feynman called it "the most remarkable formula in mathematics."

---

## Tensors (Brief)

Scalars are rank-0 tensors (no direction). Vectors are rank-1 tensors (one direction). Matrices can represent rank-2 tensors (two directions).

**In physics:** Stress, strain, moment of inertia, electromagnetic field strength (F_μν), and the metric of spacetime (g_μν) are all tensors. General relativity is written entirely in tensor notation.

> **ELI5:** A tensor is a generalization of a vector. A vector assigns a number to every direction. A tensor assigns a number to every pair of directions (rank 2), or triple (rank 3), etc. They describe how things stretch, compress, and shear in multiple dimensions at once.

---

## Connections

This file supports every other file in the KB. Specific heavy-use areas:
- **Vector calculus** → Electromagnetism (files 06-08), fluid mechanics (05)
- **Differential equations** → Classical mechanics (01), waves (03), quantum mechanics (12)
- **Linear algebra** → Quantum mechanics (12-13), condensed matter (17)
- **Fourier analysis** → Waves (03), optics (09), quantum mechanics (12)
- **Complex numbers** → Throughout all quantum and wave physics
- **Tensors** → General relativity (11), continuum mechanics
