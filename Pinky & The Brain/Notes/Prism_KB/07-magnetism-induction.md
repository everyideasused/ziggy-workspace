---
type: knowledge-base
area: knowledge
status: active
tags:
  - physics
  - magnetism
  - magnetic-field
  - lorentz-force
  - faraday
  - inductance
  - induction
kb: prism
module: 07-magnetism-induction.md
---

# Magnetism & Electromagnetic Induction

## The Big Picture

Electricity and magnetism aren't separate phenomena — they're two aspects of the same force. A stationary charge creates an electric field. A moving charge creates both an electric and a magnetic field. And the real magic: **a changing magnetic field creates an electric field, and vice versa.** This mutual creation is what makes light possible.

> **ELI5:** Magnets push and pull other magnets and also push moving charges sideways. Every magnet is really just electric charges moving in circles (orbiting electrons, spinning electrons). Electricity and magnetism are best friends — you never get one without eventually involving the other.

---

## Magnetic Fields

### What Creates Them

1. **Moving charges** (current)
2. **Changing electric fields** (Maxwell's addition)
3. **Intrinsic magnetic moments** (electron spin — fundamentally quantum)

### The Magnetic Field B

```
Units: Tesla (T) = kg/(A⋅s²)
Earth's surface field: ~50 μT (0.00005 T)
Refrigerator magnet: ~5 mT
MRI machine: 1.5-3 T
Strongest lab magnets: ~45 T
Neutron stars: ~10⁸ T
```

### Key Difference from Electric Fields

Magnetic field lines always form closed loops — they never start or end. There are no magnetic monopoles (as far as we know). Every magnet has both a north and south pole. Cut a magnet in half and you get two smaller magnets, each with both poles.

> **⚠️ Misconception:** "Cut a magnet in half and you separate north from south." Nope. You get two complete magnets. Magnetic monopoles have never been observed, though some theories predict they exist.

---

## Magnetic Force

### On a Moving Charge — The Lorentz Force

> **ELI5:** A magnetic field doesn't push a charge that's sitting still. But the moment a charge starts moving, the field pushes it *sideways* — perpendicular to both its velocity and the field. It's like a cosmic game of right-hand rule.

```
F = qv × B

|F| = qvB sin(θ)
```

**Critical properties:**
- Force is perpendicular to velocity → **magnetic forces do no work** (they change direction, not speed)
- Force is perpendicular to B → charged particle curves, doesn't speed up or slow down
- Stationary charges feel no magnetic force

**Result:** Charged particles spiral in magnetic fields. This is how:
- Particle accelerators steer beams (cyclotrons, synchrotrons)
- The Van Allen belts trap solar wind particles
- CRT televisions and old monitors worked (electron beam steered by magnets)

### On a Current-Carrying Wire

```
F = IL × B

|F| = ILB sin(θ)
```

A current-carrying wire in a magnetic field experiences a force. This is the operating principle of **every electric motor**: current in a coil in a magnetic field → torque → rotation.

---

## Sources of Magnetic Fields

### Biot-Savart Law

The magnetic field produced by a small current element:

```
dB = (μ₀/4π) × (I dl × r̂) / r²

μ₀ = 4π × 10⁻⁷ T⋅m/A (permeability of free space)
```

### Useful Results

**Long straight wire:**
```
B = μ₀I/(2πr)
```
Field wraps in circles around the wire. Strength falls as 1/r.

**Center of a circular loop:**
```
B = μ₀I/(2R)
```

**Inside a solenoid** (long coil):
```
B = μ₀nI
```
n = turns per unit length. Uniform field inside, approximately zero outside. Solenoids are the workhorses of electromagnetism — MRI machines, magnetic locks, relay switches.

### Ampère's Law

> **ELI5:** Walk in a circle around a wire carrying current. Add up the magnetic field along your path. The total equals the current enclosed times a constant. It's the magnetic version of Gauss's law.

```
∮ B⋅dl = μ₀ I_enclosed
```

Like Gauss's law for electricity, Ampère's law is most powerful for high-symmetry situations.

---

## Electromagnetic Induction

> **ELI5:** Wave a magnet near a wire and electricity appears in the wire. Change a magnetic field and you create an electric field. This is how every power plant on Earth works — spin magnets near coils and out comes electricity.

### Faraday's Law

```
ε = -dΦ_B/dt

ε = induced EMF (voltage)
Φ_B = ∫ B⋅dA = magnetic flux through the circuit
```

**Plain English:** A changing magnetic flux through a loop induces a voltage in that loop. The faster the change, the bigger the voltage.

### Lenz's Law

The minus sign in Faraday's law. The induced current flows in the direction that opposes the change that caused it.

> **ELI5:** Nature is lazy and resists change. Push a magnet toward a coil, and the coil creates its own magnetic field that pushes the magnet back. Pull the magnet away, and the coil tries to pull it back. The induced current always fights the change.

**Why this must be true:** If the induced current *helped* the change instead of opposing it, you'd get runaway amplification — free energy. Lenz's law is conservation of energy wearing a magnetic costume.

### Practical Applications

**Electric generators:** Rotate a coil in a magnetic field → flux changes sinusoidally → induced AC voltage. This is how virtually all electricity is produced (coal, gas, nuclear, hydro, wind — they all spin turbines in magnetic fields).

**Transformers:** Change voltage levels using mutual induction between two coils:
```
V_s/V_p = N_s/N_p
```
Step-up transformers increase voltage for long-distance power transmission (higher voltage = less current = less resistive loss). Step-down transformers reduce it for household use.

**Eddy currents:** Changing flux through a conductor induces circulating currents in the conductor itself. Used in induction cooktops (eddy currents heat the pan), electromagnetic braking (eddy currents in a spinning disk create opposing force), and metal detectors.

---

## Inductance

> **ELI5:** An inductor is a coil that resists changes in current, like a heavy flywheel resists changes in rotation. It stores energy in its magnetic field, then releases it. It's the magnetic sibling of the capacitor.

### Self-Inductance

```
ε = -L × dI/dt

L = inductance (Henrys)
```

For a solenoid: L = μ₀n²Al (n = turns/length, A = cross-section area, l = length)

### Energy Stored in Magnetic Field

```
U = ½LI²

Energy density: u = B²/(2μ₀)
```

Compare to capacitor: U = ½CV², energy density u = ε₀E²/2.

### LC Circuits

Connect an inductor and capacitor — energy oscillates between the magnetic field (inductor) and electric field (capacitor), creating electromagnetic oscillations:

```
f = 1/(2π√(LC))
```

This is how radio tuning works: adjust C (or L) to match the desired station's frequency.

---

## Magnetic Materials

### Diamagnetic
Weakly repelled by magnetic fields. All materials are slightly diamagnetic. Effect is tiny. (Water, copper, bismuth)

### Paramagnetic
Weakly attracted to magnetic fields. Atoms have permanent magnetic moments that partially align with external field. (Aluminum, oxygen, platinum)

### Ferromagnetic
Strongly attracted. Atomic magnetic moments spontaneously align in domains. Can be permanently magnetized. (Iron, cobalt, nickel)

> **ELI5:** In a ferromagnet, groups of atoms form little teams (domains) where everyone's tiny magnets point the same way. In an unmagnetized piece of iron, the teams point randomly and cancel out. Apply an external field, and the teams align — the iron becomes a strong magnet. Remove the field, and some alignment persists: you've made a permanent magnet.

---

## Connections

- **Electrostatics** → `06-electrostatics.md` — Static electricity is the starting point; magnetism arises from charge in motion
- **Maxwell's equations** → `08-maxwells-equations-em-waves.md` — Faraday's law + Ampère's law (with Maxwell's correction) complete the picture
- **Special relativity** → `10-special-relativity.md` — Magnetism is what electricity looks like from a moving reference frame
- **Condensed matter** → `17-condensed-matter.md` — Ferromagnetism, superconducting magnets
- **Quantum mechanics** → `12-quantum-foundations.md` — Electron spin is the ultimate origin of magnetism
