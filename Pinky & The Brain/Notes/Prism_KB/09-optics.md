---
type: knowledge-base
area: knowledge
status: active
tags:
  - physics
  - optics
  - refraction
  - reflection
  - interference
  - polarization
  - lasers
  - lenses
kb: prism
module: 09-optics.md
---

# Optics

## The Big Picture

Optics is what happens when electromagnetic waves interact with matter at scales much larger than atoms. It splits into two regimes: geometric optics (light as rays — works when objects are much bigger than the wavelength) and wave optics (where interference and diffraction matter).

> **ELI5:** Light is a wave, but most of the time it acts like it travels in straight lines (rays). Rays bounce off mirrors, bend through glass, and focus through lenses. When you zoom in to the wave behavior, you get rainbows on soap bubbles, the colors in a CD, and the sharpness limits of any camera.

---

## Geometric Optics

### Reflection

```
θ_incident = θ_reflected (measured from the normal)
```

**Specular reflection:** Smooth surfaces → clear image (mirrors)
**Diffuse reflection:** Rough surfaces → scattered light in all directions (why you can see a white wall from any angle)

### Refraction — Snell's Law

> **ELI5:** Light slows down in glass or water. When it enters at an angle, one side slows down before the other, so the whole beam bends. Like a car driving from pavement onto mud at an angle — the mud side slows first and the car turns.

```
n₁ sin(θ₁) = n₂ sin(θ₂)
```

**Total internal reflection:** When light goes from a denser medium to a less dense medium at a steep enough angle, it can't get out — it all reflects back. This is how fiber optics work: light bounces along inside a glass fiber with no loss at the walls.

```
Critical angle: sin(θ_c) = n₂/n₁ (only for n₁ > n₂)
```

### Dispersion

Different wavelengths refract differently (n depends on λ). Short wavelengths (violet) bend more than long wavelengths (red). This is how prisms split white light into rainbows.

**Rainbow:** Sunlight enters a raindrop, refracts, reflects off the back, and refracts again on exit. Different colors exit at slightly different angles → you see a spectrum.

### Lenses

**Converging (convex) lens:** Bends light inward → focuses parallel rays to a focal point.
**Diverging (concave) lens:** Spreads light outward → parallel rays appear to diverge from a virtual focal point.

**Thin lens equation:**
```
1/f = 1/d_o + 1/d_i

f = focal length
d_o = object distance
d_i = image distance
```

**Magnification:**
```
M = -d_i/d_o = h_i/h_o
```

Positive M → upright image. Negative M → inverted. |M| > 1 → enlarged.

### Mirrors

**Concave mirror:** Focuses light (like a satellite dish)
**Convex mirror:** Spreads light (like a car side mirror — "objects may be closer than they appear")

Same equation as lenses: 1/f = 1/d_o + 1/d_i, with sign conventions for real/virtual images.

---

## Wave Optics

### Young's Double Slit Experiment

> **ELI5:** Shine light through two tiny slits and you get stripes on the wall — bright, dark, bright, dark. The bright stripes are where waves from both slits arrive in sync (constructive interference). The dark stripes are where they cancel (destructive interference). This proved light is a wave.

```
Bright fringes: d sin(θ) = mλ (m = 0, ±1, ±2, ...)
Dark fringes: d sin(θ) = (m + ½)λ

d = slit separation
```

**Historical impact:** Thomas Young's 1801 experiment settled the wave vs. particle debate — until quantum mechanics reopened it in the 20th century (see `12-quantum-foundations.md`).

### Single-Slit Diffraction

```
Dark fringes: a sin(θ) = mλ (m = ±1, ±2, ...)

a = slit width
```

Central maximum is twice as wide as all others. Narrower slit → wider diffraction pattern (more spreading).

### Diffraction Gratings

Many parallel slits produce extremely sharp bright spots:
```
d sin(θ) = mλ
```

Used in spectrometers to measure wavelengths with high precision. The CD/DVD rainbow is diffraction from the regularly spaced tracks.

### Thin Film Interference

> **ELI5:** Soap bubbles and oil slicks show rainbow colors because light reflects off both the top and bottom surfaces of the thin film. The two reflected waves interfere, and which colors survive depends on the film thickness. Different thicknesses → different colors.

Key: there's a phase shift of π (half wavelength) when light reflects off a medium with higher refractive index. Account for this when calculating constructive/destructive conditions.

### Resolution Limit

There's a fundamental limit to how fine a detail any optical instrument can resolve:

```
θ_min ≈ 1.22 λ/D (Rayleigh criterion)

D = aperture diameter
```

Bigger aperture or shorter wavelength → finer resolution. This is why:
- Telescopes need large mirrors
- Electron microscopes use electrons (tiny λ) to see atoms
- Spy satellites have huge lenses

---

## Polarization

> **ELI5:** Light waves normally wiggle in all directions perpendicular to their travel. A polarizer is like a picket fence — it only lets through the wiggles in one direction. That's polarized light.

### Types
- **Linear polarization:** E field oscillates in one direction
- **Circular polarization:** E field rotates as the wave travels (like a corkscrew)
- **Unpolarized:** Random mix of all directions

### Malus's Law
Light through a polarizer followed by an analyzer at angle θ:
```
I = I₀ cos²(θ)
```

At θ = 90°, no light gets through (crossed polarizers). But insert a third polarizer at 45° between them, and some light passes — a classic "quantum-like" surprise that's actually classical wave physics.

### Polarization by Reflection (Brewster's Angle)

When light hits a surface at Brewster's angle, the reflected light is completely polarized:
```
tan(θ_B) = n₂/n₁
```

This is why polarized sunglasses reduce glare — the glare from water/roads is horizontally polarized from reflection, and the glasses block horizontal polarization.

---

## Lasers

> **ELI5:** A laser is a flashlight where all the light waves march perfectly in step — same frequency, same direction, same phase. Normal light is like a crowd all talking at once. A laser is like a crowd all singing the same note in unison.

### Properties of Laser Light
- **Monochromatic:** Single wavelength
- **Coherent:** Waves in phase
- **Collimated:** Narrow, parallel beam
- **Intense:** Energy concentrated in a small area

### How They Work
1. **Population inversion:** More atoms in excited state than ground state (not natural — requires energy input "pumping")
2. **Stimulated emission:** An incoming photon triggers an excited atom to emit an identical photon (same frequency, phase, direction)
3. **Optical cavity:** Mirrors bounce photons back and forth, triggering more stimulated emissions → amplification
4. **Output:** One mirror is partially transparent → coherent beam escapes

LASER = Light Amplification by Stimulated Emission of Radiation

---

## Connections

- **Waves** → `03-oscillations-waves.md` — Interference, diffraction, and superposition are wave phenomena first
- **Maxwell's equations** → `08-maxwells-equations-em-waves.md` — All of optics derives from Maxwell's equations
- **Quantum mechanics** → `12-quantum-foundations.md` — The photoelectric effect and double-slit with single photons reveal light's quantum nature
- **QED** → `16-quantum-electrodynamics.md` — Feynman's path integral approach explains all optical phenomena from first principles
- **Special relativity** → `10-special-relativity.md` — The speed of light is constant in all frames, which changes everything
