# Condensed Matter Physics

---
tags: [physics, condensed-matter, solids, semiconductors, superconductivity, band-theory, crystals]
eli5-summary: Quantum mechanics applied to huge numbers of atoms explains why some things conduct electricity, some don't, some are magnetic, and some lose all resistance at low temperatures.
prerequisites: [quantum-foundations, quantum-applications, electrostatics, thermodynamics]
leads-to: []
---

## The Big Picture

Condensed matter physics studies how large collections of atoms behave when packed together. It's where quantum mechanics meets the real world — explaining why metals conduct, why silicon makes computers possible, and why some materials become superconducting.

> **ELI5:** Put a bunch of atoms together and they do things no single atom would do. Metal conducts electricity because electrons form a shared pool. Silicon becomes a computer chip because quantum mechanics creates energy "gaps" that electrons need to jump across. Some materials lose all electrical resistance when cold enough — current flows forever with no battery.

---

## Crystal Structure

### Lattices

Most solids are crystalline — atoms arranged in a repeating 3D pattern (lattice). The fundamental repeating unit is the **unit cell**.

**Common crystal structures:**
- **FCC (face-centered cubic):** Copper, aluminum, gold — close-packed, ductile
- **BCC (body-centered cubic):** Iron, tungsten — strong
- **HCP (hexagonal close-packed):** Zinc, titanium — close-packed but different stacking

### X-Ray Diffraction

X-rays scatter off crystal planes and interfere constructively at specific angles:

```
Bragg's Law: 2d sin(θ) = nλ
```

This is how we determine crystal structures — essentially using X-rays as a microscope for atomic arrangements.

### Amorphous Solids

Glass, polymers, and some metals lack long-range order. They're not crystalline — atoms are arranged more like a frozen liquid. Different mechanical and optical properties.

---

## Band Theory

> **ELI5:** A single atom has discrete energy levels. Pack billions of atoms together in a crystal and those levels smear into continuous "bands." If the band where electrons live (valence band) is full and there's a gap before the next empty band (conduction band), electrons can't move and the material is an insulator. If the gap is small, it's a semiconductor. If the bands overlap, electrons flow freely — it's a metal.

### How Bands Form

A single hydrogen atom has one energy level (1s). Bring two atoms together → the level splits into two. Bring N atoms together → it splits into N closely spaced levels forming a continuous band.

### The Three Types

**Metal (conductor):** Conduction band partially filled OR overlaps with valence band. Electrons are free to move. Resistivity: 10⁻⁸ Ω⋅m.

**Insulator:** Large band gap (> ~3 eV). Electrons can't jump to conduction band at normal temperatures. Resistivity: 10⁸-10¹⁶ Ω⋅m. (Diamond: 5.5 eV gap)

**Semiconductor:** Small band gap (~0.5-2 eV). Some electrons can be thermally excited across the gap. Resistivity: 10⁻⁴-10⁶ Ω⋅m. (Silicon: 1.1 eV, Germanium: 0.67 eV)

---

## Semiconductors

> **ELI5:** Silicon is the Goldilocks material — not too conductive, not too insulating, but juuust right to be controllable. By adding tiny impurities, you can make it conduct more or less on command. That controllability is the foundation of every computer chip.

### Doping

**n-type:** Add atoms with extra electrons (phosphorus, arsenic into silicon). Extra electrons are free to conduct. Majority carriers: electrons.

**p-type:** Add atoms with fewer electrons (boron, gallium). Creates "holes" — missing electrons that act as positive charge carriers. Majority carriers: holes.

### The p-n Junction

The heart of modern electronics. Where n-type meets p-type:

1. Electrons diffuse into p-side, holes into n-side
2. This creates a "depletion zone" with built-in electric field
3. The junction allows current flow in one direction (forward bias) and blocks it in reverse → **diode**

### Transistors

> **ELI5:** A transistor is a tiny switch that electricity controls. A small signal at the "gate" controls a large current between "source" and "drain." Stack billions of these switches together and you can compute anything.

**MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor):** The dominant transistor type. A voltage at the gate creates (or removes) a conductive channel between source and drain. Modern chips have billions of these, each a few nanometers across.

Moore's Law: Transistor density has roughly doubled every 2 years since the 1960s, though this pace is slowing as we approach atomic limits.

---

## Superconductivity

> **ELI5:** Cool some materials to very low temperatures and their electrical resistance drops to exactly zero. Not almost zero — exactly, perfectly, completely zero. Current flows forever without any battery. It's a quantum effect on a macroscopic scale.

### Properties

- Zero electrical resistance (current flows indefinitely)
- Meissner effect: magnetic fields are expelled from the interior (perfect diamagnetism — this makes superconductors levitate over magnets)
- Critical temperature T_c: above this, normal behavior returns

### BCS Theory (Conventional Superconductors)

At low temperatures, electrons form **Cooper pairs** — two electrons with opposite spin and momentum bound together by lattice vibrations (phonons). These pairs are bosons (integer total spin) and can condense into a single quantum state (like a Bose-Einstein condensate). In this state, electron flow encounters no resistance because scattering would require breaking a Cooper pair, which costs more energy than is available at low T.

**Conventional superconductors:** Mercury (T_c = 4.2 K), niobium (9.3 K), NbTi alloys (~10 K). Requires liquid helium cooling.

### High-Temperature Superconductors

Discovered 1986. Copper-oxide ceramics with T_c up to ~133 K (still very cold, but achievable with liquid nitrogen at 77 K, which is cheap and abundant).

**Mystery:** The mechanism isn't fully understood. BCS theory doesn't explain it. This remains one of the biggest open problems in condensed matter physics.

**Applications:** MRI magnets, maglev trains, particle accelerators, power cables, quantum computing (superconducting qubits).

---

## Magnetism in Solids

**Ferromagnetism:** Atomic magnetic moments spontaneously align below the Curie temperature. Domains form. (Iron: T_Curie = 1043 K)

**Antiferromagnetism:** Adjacent moments point in opposite directions. No net magnetization. (Chromium, manganese oxide)

**Ferrimagnetism:** Antiferromagnetic alignment but unequal magnitudes → net magnetization. (Magnetite, Fe₃O₄ — the original "magnet")

---

## Phonons

> **ELI5:** Sound waves in a solid come in discrete energy packets called phonons — just like light comes in photons. Phonons carry heat, mediate Cooper pairing in superconductors, and determine how solids respond to temperature.

```
E = ℏω (energy of one phonon)
```

Phonons explain thermal conductivity, specific heat of solids, and the Debye model that correctly predicts how heat capacity varies with temperature.

---

## Connections

- **Quantum mechanics** → `12-quantum-foundations.md`, `13-quantum-applications.md` — Band theory, superconductivity, and magnetism are all quantum phenomena
- **Electrostatics** → `06-electrostatics.md` — Crystal bonding, dielectrics, capacitors
- **Thermodynamics** → `04-thermodynamics.md` — Phase transitions, specific heat, thermal properties
- **Waves** → `03-oscillations-waves.md` — Phonons are quantized lattice vibrations
- **Particle physics** → `15-particle-physics-standard-model.md` — Symmetry breaking in condensed matter mirrors the Higgs mechanism
