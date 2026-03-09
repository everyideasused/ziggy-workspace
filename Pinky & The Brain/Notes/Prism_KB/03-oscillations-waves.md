---
type: knowledge-base
area: knowledge
status: active
tags:
  - physics
  - oscillations
  - waves
  - SHM
  - interference
  - diffraction
  - sound
kb: prism
module: 03-oscillations-waves.md
---

# Oscillations & Waves

## The Big Picture

Almost everything in physics oscillates. Atoms vibrate. Electromagnetic fields oscillate. Quantum wavefunctions oscillate. Understanding oscillations and waves is understanding the language that nature speaks.

> **ELI5:** Push a kid on a swing and they go back and forth, back and forth. That back-and-forth is an oscillation. Now imagine a whole row of swings, each one starting to swing right after the one before it — that ripple spreading down the row is a wave.

---

## Simple Harmonic Motion (SHM)

> **ELI5:** A spring bounces. The farther you pull it, the harder it pulls back. This creates a perfect back-and-forth motion — the simplest kind of wiggle in the universe.

### The Setup

Any time a restoring force is proportional to displacement, you get SHM:

```
F = -kx        (Hooke's law)
ma = -kx
a = -(k/m)x
```

### The Solution

```
x(t) = A cos(ωt + φ)

A = amplitude (maximum displacement)
ω = angular frequency = √(k/m) = 2π/T = 2πf
T = period (time for one complete cycle)
f = frequency (cycles per second, in Hertz)
φ = phase (where in the cycle you start)
```

**Velocity:** v(t) = -Aω sin(ωt + φ) → Maximum at equilibrium (x=0)
**Acceleration:** a(t) = -Aω² cos(ωt + φ) → Maximum at endpoints (x=±A)

### Energy in SHM

```
E_total = ½kA² = constant

At any instant: E = ½kx² + ½mv²
```

Energy sloshes back and forth between potential (spring) and kinetic (motion), but the total is constant. At the endpoints, all energy is potential. At the center, all energy is kinetic.

### The Pendulum

> **ELI5:** A pendulum is just a swing. For small swings, it behaves almost exactly like a spring.

For small angles (θ < ~15°):
```
T = 2π√(L/g)
```

The period depends only on length and gravity — not on mass or amplitude. Galileo noticed this watching a chandelier swing in church. This property made pendulums the basis of accurate clocks for centuries.

> **⚠️ Misconception:** "Heavier pendulums swing slower." Nope. Mass doesn't affect the period (for small oscillations). A lead ball and a tennis ball on the same string swing at the same rate.

### Damped Oscillations

Real oscillators lose energy to friction/air resistance. The amplitude decays exponentially:

```
x(t) = A₀ e^(-γt) cos(ω't + φ)

γ = damping coefficient
ω' = √(ω₀² - γ²) (slightly lower frequency than undamped)
```

Three regimes: **underdamped** (oscillates while decaying), **critically damped** (fastest return to rest without oscillating), **overdamped** (sluggish return, no oscillation).

Car suspension is tuned for near-critical damping — you want the bounce to die quickly without oscillating.

### Driven Oscillations & Resonance

> **ELI5:** Push a swing at just the right rhythm, and it goes higher and higher. Push at the wrong rhythm, and it fights you. The "just right" rhythm is called resonance.

When you drive an oscillator at its natural frequency, the amplitude grows dramatically. This is **resonance**.

```
Resonance condition: f_drive = f_natural
```

**Famous resonance examples:** Shattering a wine glass with the right pitch. The Tacoma Narrows Bridge collapse (wind-driven resonance). Pushing a child on a swing. Tuning a radio (selecting a specific resonant frequency).

> **⚠️ Misconception:** "Resonance always means disaster." Resonance is used constructively in MRI machines, musical instruments, microwave ovens, lasers, and electrical circuits. It's a tool — dangerous when uncontrolled, useful when designed.

---

## Waves — The Basics

> **ELI5:** Drop a pebble in a pond. Ripples spread out. The water itself doesn't travel across the pond — it just bobs up and down. But the *pattern* travels. That's a wave: energy traveling through stuff without the stuff itself going anywhere.

### What Is a Wave?

A wave is a disturbance that propagates through space, carrying energy but not matter.

### Transverse vs. Longitudinal

**Transverse:** Displacement perpendicular to wave direction. Light, guitar strings, water surface waves.

**Longitudinal:** Displacement parallel to wave direction. Sound, compression waves in springs, seismic P-waves.

### Wave Parameters

```
v = fλ = λ/T

v = wave speed (determined by the medium)
f = frequency (determined by the source)
λ = wavelength (determined by v and f)
T = period = 1/f
```

> **⚠️ Misconception:** "Louder sound = faster sound." No. Amplitude affects loudness; speed depends on the medium. Sound travels at ~340 m/s in air regardless of volume.

### The Wave Equation

```
∂²y/∂t² = v² × ∂²y/∂x²
```

This is the master equation for waves. Any solution to it is a wave traveling at speed v. The most basic solutions are sinusoidal:

```
y(x,t) = A sin(kx - ωt)

k = 2π/λ (wave number)
ω = 2πf (angular frequency)
v = ω/k = fλ
```

---

## Wave Phenomena

### Superposition

> **ELI5:** When two ripples cross, they just add up wherever they meet. After crossing, they continue as if nothing happened. Waves are polite — they pass through each other.

```
y_total = y₁ + y₂
```

This is the **principle of superposition** — valid for linear waves (most waves at normal amplitudes).

### Interference

When waves overlap, they can reinforce or cancel:

**Constructive interference:** Waves in phase (crest meets crest) → larger amplitude
```
Path difference = nλ (n = 0, 1, 2, ...)
```

**Destructive interference:** Waves out of phase (crest meets trough) → smaller/zero amplitude
```
Path difference = (n + ½)λ
```

**Noise-canceling headphones** work by generating a sound wave that's exactly out of phase with incoming noise — destructive interference zeroes out the sound.

### Standing Waves

> **ELI5:** Pluck a guitar string. It vibrates, but the wave doesn't travel — it's trapped between the two ends. Some spots (nodes) don't move at all; other spots (antinodes) vibrate like crazy. That's a standing wave.

Standing waves form when two identical waves travel in opposite directions (like wave + reflection):

```
y(x,t) = 2A sin(kx) cos(ωt)
```

**Harmonics on a string fixed at both ends:**
```
λ_n = 2L/n       (n = 1, 2, 3, ...)
f_n = nv/(2L) = n × f₁
```

This is why musical instruments have overtones. The fundamental (n=1) plus harmonics (n=2,3,...) create the timbre that distinguishes a violin from a flute playing the same note.

### Beats

Two waves with slightly different frequencies produce beats — periodic loudness variation:

```
f_beat = |f₁ - f₂|
```

Piano tuners use beats: play two strings for the same note, adjust until beats disappear (frequencies match).

### Diffraction

> **ELI5:** Waves can bend around corners. Drop a pebble near a wall with a gap in a pond — ripples spread out on the other side of the gap, not just in a straight line. The narrower the gap compared to the wavelength, the more the wave spreads.

Diffraction is most noticeable when the opening/obstacle size is comparable to the wavelength. This is why:
- Sound bends around doorways (λ ~ 1 m, door ~ 1 m)
- Light doesn't noticeably bend around doors (λ ~ 500 nm, door ~ 1 m)
- But light DOES diffract through tiny slits (λ ~ slit width)

### Doppler Effect

> **ELI5:** An ambulance siren sounds higher-pitched when coming toward you and lower when moving away. The sound waves get compressed in front and stretched behind, like an accordion being squeezed from one side.

```
f_observed = f_source × (v ± v_observer) / (v ∓ v_source)

(upper signs: approaching; lower signs: receding)
```

**Applications:** Police radar, weather Doppler radar, measuring star velocities (redshift/blueshift), medical ultrasound blood flow measurement.

---

## Sound

> **ELI5:** Sound is air molecules bumping into each other in a chain reaction. One pushes the next, which pushes the next — like a very fast game of dominoes. What reaches your ear is a pressure wave, not traveling air.

### Sound Properties

**Speed of sound:**
- Air (20°C): ~343 m/s
- Water: ~1,480 m/s
- Steel: ~5,960 m/s

Sound is faster in denser/stiffer media. "Put your ear to the railroad track to hear an approaching train" — sound in steel reaches you much sooner than sound in air.

**Intensity and decibels:**
```
β = 10 log₁₀(I/I₀) dB

I₀ = 10⁻¹² W/m² (threshold of hearing)
```

Scale is logarithmic: +10 dB = 10× intensity. +20 dB = 100× intensity. This matches human perception, which is roughly logarithmic.

| Sound | Level |
|-------|-------|
| Threshold of hearing | 0 dB |
| Whisper | 20 dB |
| Normal conversation | 60 dB |
| Busy traffic | 80 dB |
| Rock concert | 110 dB |
| Pain threshold | 130 dB |

### Sonic Boom

When an object moves faster than sound, it outruns its own pressure waves. These pile up into a shock wave — a cone-shaped wall of compressed air that you hear as a boom. The boom isn't a one-time event at the moment of breaking the barrier; it follows the object continuously.

---

## Connections

- **Classical mechanics** → `01-classical-mechanics.md` — SHM is F=ma with a linear restoring force
- **Electromagnetism** → `08-maxwells-equations-em-waves.md` — Light is an electromagnetic wave; Maxwell's equations predict wave behavior
- **Optics** → `09-optics.md` — Interference, diffraction, and polarization of light waves
- **Quantum mechanics** → `12-quantum-foundations.md` — Particles are waves; wave-particle duality begins here
- **Condensed matter** → `17-condensed-matter.md` — Phonons (quantized sound waves) in solids
- **Mathematical methods** → `19-mathematical-methods.md` — Fourier analysis decomposes any wave into sinusoids
