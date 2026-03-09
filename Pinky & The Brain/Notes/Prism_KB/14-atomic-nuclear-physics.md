---
type: knowledge-base
area: knowledge
status: active
tags:
  - physics
  - atomic
  - nuclear
  - radioactivity
  - fission
  - fusion
  - spectroscopy
kb: prism
module: 14-atomic-nuclear-physics.md
---

# Atomic & Nuclear Physics

## The Big Picture

Atomic physics deals with electrons in atoms — energy levels, spectra, and the periodic table. Nuclear physics deals with the tiny, dense core — protons and neutrons bound by the strong force, radioactive decay, and the colossal energies of fission and fusion.

> **ELI5:** An atom is like a stadium. The nucleus (protons + neutrons) is a marble sitting at center field. The electrons are bees buzzing around the parking lot. Almost all the atom is empty space. But that marble weighs as much as the whole stadium.

---

## Atomic Structure

### Multi-Electron Atoms

Beyond hydrogen, the Schrödinger equation can't be solved exactly. But the shell model works beautifully: electrons fill quantum states following three rules:

1. **Aufbau principle:** Fill lowest energy states first
2. **Pauli exclusion:** Maximum 2 electrons per orbital (one spin-up, one spin-down)
3. **Hund's rule:** Within a subshell, electrons spread out (one per orbital) before pairing

**Shell capacity:** 2n² electrons per shell (n = 1: 2, n = 2: 8, n = 3: 18, n = 4: 32)

### The Periodic Table

> **ELI5:** The periodic table isn't just a chart to memorize — it's a map of electron configurations. Each row is a new shell filling up. Each column is atoms with the same number of outer electrons, which is why they behave chemically alike.

Chemical properties are determined almost entirely by the outermost (valence) electrons. This is quantum mechanics explaining all of chemistry.

### Spectroscopy

Atoms emit and absorb light only at specific wavelengths — the differences between energy levels:

```
E_photon = hf = E_upper - E_lower
```

**Emission spectrum:** Heat an element → it glows at characteristic wavelengths (like a fingerprint)
**Absorption spectrum:** Shine white light through a gas → dark lines appear at the same wavelengths

This is how we know what stars are made of, what distant galaxies contain, and what's in a forensic sample.

### Fine Structure

Energy levels split into closely spaced sub-levels due to:
- **Spin-orbit coupling:** Electron's spin interacts with the magnetic field from its orbital motion
- **Relativistic corrections:** Electron speeds near the nucleus are significant fractions of c
- **Hyperfine structure:** Electron spin interacts with nuclear spin (defines the 21-cm hydrogen line used in radio astronomy)

---

## The Nucleus

### Composition

```
Atomic number Z = number of protons (defines the element)
Mass number A = protons + neutrons (defines the isotope)
Neutron number N = A - Z
```

Notation: ²³⁸U₉₂ means 92 protons, 146 neutrons, mass number 238.

### Nuclear Size

```
R ≈ r₀ A^(1/3)

r₀ ≈ 1.2 fm = 1.2 × 10⁻¹⁵ m
```

Nuclei are roughly 10⁻¹⁵ m across. Atoms are ~10⁻¹⁰ m. The nucleus is 100,000× smaller than the atom — if the atom were a football field, the nucleus would be a grain of sand at the 50-yard line.

### Nuclear Density

All nuclei have approximately the same density: ~2 × 10¹⁷ kg/m³. A teaspoon of nuclear matter would weigh about a billion tons. Neutron stars are essentially city-sized nuclei.

### The Strong Nuclear Force

> **ELI5:** Protons are all positive and should repel each other violently. The nucleus stays together because there's a force much stronger than electromagnetism — the strong nuclear force — that glues protons and neutrons together. But it only works at very short range (a few femtometers). Beyond that, it drops to zero.

The strong force is about 100× stronger than electromagnetism but operates only at nuclear distances. For large nuclei (Z > 82), the long-range electromagnetic repulsion of many protons eventually overwhelms the short-range strong force — these nuclei are unstable (radioactive).

### Binding Energy

```
Binding energy = [Z×m_p + N×m_n - M_nucleus] × c²

(mass of parts > mass of whole → the "missing" mass is binding energy)
```

**Binding energy per nucleon curve:** Peaks at iron-56 (most tightly bound nucleus). Lighter nuclei gain energy by **fusing** toward iron. Heavier nuclei gain energy by **fissioning** toward iron.

---

## Radioactivity

> **ELI5:** Some atoms have nuclei that are unstable — they've got too many protons, too many neutrons, or too much energy. They fix this by spitting out particles or energy. That's radioactivity.

### Types of Decay

**Alpha decay (α):** Nucleus emits a helium-4 nucleus (2p + 2n). Reduces Z by 2, A by 4. Heavy nuclei (uranium, thorium). Blocked by paper/skin but dangerous if inhaled/ingested.

**Beta decay (β⁻):** A neutron converts to a proton, emitting an electron and antineutrino. Increases Z by 1. Medium penetrating — blocked by aluminum.

**Beta-plus (β⁺):** A proton converts to a neutron, emitting a positron and neutrino. Decreases Z by 1. Used in PET scans.

**Gamma decay (γ):** Nucleus in excited state emits a high-energy photon. No change in Z or A. Highly penetrating — requires lead or concrete shielding.

### Half-Life

```
N(t) = N₀ × (½)^(t/t₁/₂) = N₀ × e^(-λt)

λ = ln(2)/t₁/₂ (decay constant)
```

Half-lives range from fractions of a second (unstable isotopes) to billions of years (uranium-238: 4.5 billion years).

**Carbon dating:** Living things contain carbon-14 (t₁/₂ = 5,730 years). After death, C-14 decays. Measuring the remaining fraction tells you when the organism died. Works up to ~50,000 years.

---

## Nuclear Fission

> **ELI5:** Split a big atom (like uranium) and you get two medium atoms plus a few neutrons plus a LOT of energy. Those extra neutrons can split more uranium atoms, and those split more, and so on — a chain reaction. Control it and you have a nuclear reactor. Don't control it and you have a bomb.

```
²³⁵U + n → ²³⁶U* → fission fragments + 2-3 neutrons + ~200 MeV
```

200 MeV per fission vs. ~4 eV per chemical reaction → nuclear energy is about 50 million times more energy-dense than chemical energy (coal, oil).

### Critical Mass

The minimum amount of fissile material needed to sustain a chain reaction. Below critical mass, too many neutrons escape without causing fission. Above it, the chain reaction grows exponentially.

---

## Nuclear Fusion

> **ELI5:** Smash two tiny atoms (like hydrogen) together hard enough and they stick, forming a bigger atom plus enormous energy. This is what powers every star in the universe, including our Sun.

### In Stars

**Proton-proton chain (Sun):**
```
4 ¹H → ⁴He + 2e⁺ + 2ν + energy (26.7 MeV)
```

**CNO cycle (more massive stars):** Uses carbon, nitrogen, and oxygen as catalysts. Same net reaction, different pathway.

**Why it's hard on Earth:** Protons repel electrically. You need temperatures of ~100 million K to give them enough energy to get close enough for the strong force to take over (or tunneling to help). Containing plasma at that temperature is the engineering challenge.

### Fusion Power

Fusion produces ~4× more energy per kg than fission and uses abundant fuel (deuterium from seawater, lithium for tritium). No long-lived radioactive waste. No meltdown risk. But sustained, controlled fusion has been "20 years away" for 60 years due to extreme engineering challenges.

---

## Connections

- **Quantum mechanics** → `12-quantum-foundations.md`, `13-quantum-applications.md` — Atomic structure is pure QM; tunneling enables fusion and alpha decay
- **Electrostatics** → `06-electrostatics.md` — Coulomb repulsion between protons is what fusion must overcome
- **Particle physics** → `15-particle-physics-standard-model.md` — The strong force is carried by gluons; weak force governs beta decay
- **Astrophysics** → `18-astrophysics-cosmology.md` — Stars are fusion reactors; Big Bang nucleosynthesis
- **Conservation laws** → `02-conservation-laws-symmetry.md` — Charge, baryon number, lepton number all conserved in nuclear reactions
