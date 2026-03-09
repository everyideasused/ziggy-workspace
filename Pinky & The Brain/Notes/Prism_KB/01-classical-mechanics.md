# Classical Mechanics

---
tags: [physics, mechanics, newton, forces, energy, momentum]
eli5-summary: Things move when you push them, and they keep moving unless something stops them.
prerequisites: none
leads-to: [conservation-laws, oscillations-waves, fluid-mechanics, special-relativity]
---

## The Big Picture

Classical mechanics is the physics of everyday stuff — balls, cars, planets, bridges. It's the first physics humans figured out rigorously, and it works spectacularly well for anything bigger than an atom and slower than ~10% the speed of light.

> **ELI5:** Classical mechanics is the rulebook for how things move when you push, pull, drop, or throw them.

Everything in this file traces back to one man's insight: Isaac Newton realized that the same rules making an apple fall also keep the Moon in orbit. That's the whole game — **universal laws** that work the same everywhere.

---

## Newton's Three Laws

### First Law — Inertia

> **ELI5:** A ball sitting on the ground stays sitting there forever. A ball rolling on perfectly smooth ice keeps rolling forever. Things don't change what they're doing unless something makes them.

**The law:** An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by a net external force.

**Why this matters:** Before Newton, people assumed things naturally slow down. Aristotle thought you needed a constant force to maintain constant motion. Newton realized **friction** was the hidden force — remove it, and motion continues forever. This was revolutionary.

**Thought experiment (Galileo's ship):** You're in a windowless cabin on a perfectly smooth-sailing ship. You toss a ball straight up — it comes straight back down. You can't tell if the ship is moving or stationary. That's inertia: uniform motion and rest are physically indistinguishable.

> **⚠️ Misconception:** "Objects in motion naturally come to rest." No — they come to rest because of friction and air resistance. In space, a thrown object travels forever.

### Second Law — F = ma

> **ELI5:** The harder you push something, the faster it speeds up. And heavy things are harder to speed up than light things.

**The law:** The net force on an object equals its mass times its acceleration.

```
F_net = m × a

Force (Newtons) = mass (kg) × acceleration (m/s²)
```

**Plain English:** This is a recipe. Want to know how fast something accelerates? Take all the forces pushing and pulling on it, add them up (as vectors), and divide by its mass. Done.

**The deep insight:** Force doesn't cause velocity — it causes *change* in velocity. A car cruising at 60 mph on flat road needs force only to overcome friction, not to "maintain" its speed.

**Key rearrangements:**
- a = F/m → Given force and mass, find acceleration
- F = ma → Given mass and acceleration, find required force
- m = F/a → Given force and acceleration, find mass

### Third Law — Action and Reaction

> **ELI5:** If you push a wall, the wall pushes you back just as hard. Every push has an equal and opposite push-back.

**The law:** For every action, there is an equal and opposite reaction.

**Critical nuance:** The action and reaction forces act on *different objects*. You push the wall (force on wall); the wall pushes you (force on you). These forces never cancel because they're on different things.

**Thought experiment:** You're standing on a frozen lake (frictionless). You throw a heavy ball forward. You slide backward. The force you exerted on the ball forward is exactly matched by the force the ball exerted on you backward. This is how rockets work in space — they throw exhaust backward, getting pushed forward.

> **⚠️ Misconception:** "If forces are equal and opposite, nothing should ever move." Wrong — the forces are on different objects. The ball accelerates because *you* pushed it; *you* accelerate because *it* pushed you.

---

## Forces in Detail

### Weight and Gravity (Near Earth's Surface)

> **ELI5:** Gravity is the Earth pulling everything toward its center, like the whole planet is a giant magnet for mass.

```
W = m × g

Weight (N) = mass (kg) × 9.81 m/s²
```

Weight is a force, not a mass. Your mass is the same on the Moon; your weight is ~1/6th because the Moon's gravitational acceleration is smaller.

### Normal Force

> **ELI5:** When you stand on the floor, the floor pushes you up just enough to keep you from falling through it. That's the normal force — the surface fighting back.

The normal force is perpendicular to the surface. It adjusts automatically to prevent penetration. On a flat floor: N = mg. On an incline: N = mg cos(θ).

### Friction

> **ELI5:** Friction is nature's brake. It's what makes it hard to push a heavy box across the floor — the surfaces grab at each other.

**Static friction** — Holds things in place. Can vary from zero up to a maximum:
```
f_s ≤ μ_s × N
```

**Kinetic friction** — Acts on sliding objects. Roughly constant:
```
f_k = μ_k × N
```

μ_s > μ_k always. It's harder to get something moving than to keep it moving.

> **⚠️ Misconception:** "Friction always opposes motion." Friction opposes *relative sliding*. When you walk, static friction pushes you *forward* — without it, your feet would slide backward and you'd go nowhere (like walking on ice).

### Tension

> **ELI5:** Tension is the pulling force in a rope. If you and a friend hold a rope between you and both pull, the rope is under tension — it's transmitting force from one end to the other.

Ideal ropes are massless and inextensible, so tension is the same throughout. Real ropes have mass and stretch — that matters for long cables and climbing ropes but is negligible for most problems.

### Spring Force (Hooke's Law)

> **ELI5:** Springs push back harder the more you squish or stretch them. Double the squish, double the push-back.

```
F = -k × x

Force = -(spring constant) × (displacement from rest)
```

The minus sign means the force always points back toward the rest position. This is the foundation of oscillations (see `03-oscillations-waves.md`).

---

## Energy

### Kinetic Energy

> **ELI5:** Kinetic energy is the "oomph" of something moving. A fast truck has way more oomph than a slow bicycle.

```
KE = ½mv²
```

Note the v² — double the speed, quadruple the energy. That's why car crashes at 60 mph are four times more destructive than at 30 mph.

### Potential Energy (Gravitational)

> **ELI5:** Lift a bowling ball over your head. You've stored energy in it — the energy of "I could drop this." That's gravitational potential energy.

```
PE = mgh

(near Earth's surface, where g is roughly constant)
```

h is measured from whatever you choose as your reference level. Only *changes* in PE matter — the zero point is arbitrary.

### Potential Energy (Elastic/Spring)

```
PE_spring = ½kx²
```

Compress a spring, and you've stored energy. Release it, and that energy converts to kinetic energy.

### Work

> **ELI5:** Work is what happens when a force moves something. Push a box across the room — you did work. Push a wall and nothing moves — you did no work (physically, even though you're tired).

```
W = F × d × cos(θ)

Work = Force × distance × cos(angle between force and motion)
```

**Key insight:** Only the component of force *along* the direction of motion does work. Carry a box horizontally — gravity does no work because gravity is perpendicular to the motion.

### Work-Energy Theorem

```
W_net = ΔKE = ½mv_f² - ½mv_i²
```

The net work done on an object equals its change in kinetic energy. This is F=ma in disguise — it's the same physics repackaged in terms of energy instead of forces.

### Power

> **ELI5:** Power is how fast you spend energy. A strong engine and a weak engine can both push a car up a hill, but the strong one does it faster.

```
P = W/t = F × v

Power (Watts) = Energy per second = Force × velocity
```

---

## Momentum

> **ELI5:** Momentum is how hard it is to stop something. A slow train has enormous momentum because it's so heavy. A bullet has big momentum because it's so fast. A slow tennis ball? Easy to stop.

```
p = m × v

Momentum = mass × velocity
```

### Impulse

```
J = F × Δt = Δp

Impulse = Force × time = change in momentum
```

**Why airbags work:** They don't reduce the impulse (your momentum change is fixed by the crash). They increase the time, which reduces the force. Same impulse, spread over longer time = smaller peak force = you survive.

### Collisions

**Elastic collision:** Both momentum AND kinetic energy conserved. Billiard balls approximate this.

**Inelastic collision:** Momentum conserved, but kinetic energy is not (some converts to heat, sound, deformation). Car crashes are inelastic.

**Perfectly inelastic:** Objects stick together after collision. Maximum kinetic energy lost (but momentum still conserved).

> **⚠️ Misconception:** "Momentum is the same as kinetic energy." They're different quantities. A 1 kg ball at 10 m/s has momentum p=10 kg⋅m/s and KE=50 J. A 100 kg ball at 0.1 m/s has momentum p=10 kg⋅m/s but KE=0.5 J. Same momentum, vastly different energy.

---

## Rotational Dynamics

> **ELI5:** Everything that's true for straight-line motion has a spinning version. Force becomes torque. Mass becomes moment of inertia. Velocity becomes angular velocity. It's the same movie with different actors.

### The Translation Table

| Linear | Rotational | Relation |
|--------|-----------|----------|
| Position x | Angle θ | x = rθ |
| Velocity v | Angular velocity ω | v = rω |
| Acceleration a | Angular acceleration α | a = rα |
| Mass m | Moment of inertia I | I = Σmr² |
| Force F | Torque τ | τ = rF sin(θ) |
| F = ma | τ = Iα | Same law, rotational version |
| p = mv | L = Iω | Angular momentum |
| KE = ½mv² | KE_rot = ½Iω² | Rotational kinetic energy |

### Torque

> **ELI5:** Torque is the twisting version of force. It's why you use a long wrench to loosen a tight bolt — more distance from the pivot means more twist from the same push.

```
τ = r × F × sin(θ)
```

r is the distance from the pivot. F is the force. θ is the angle between them. Maximum torque when force is perpendicular to the lever arm (sin 90° = 1).

### Moment of Inertia

> **ELI5:** Moment of inertia is how hard it is to spin something. A figure skater with arms out is harder to spin than with arms tucked in — same mass, but the mass is farther from the spin axis.

Common moments of inertia:
- Solid sphere: I = (2/5)MR²
- Hollow sphere: I = (2/3)MR²
- Solid cylinder (about axis): I = (1/2)MR²
- Rod (about center): I = (1/12)ML²
- Rod (about end): I = (1/3)ML²
- Point mass at distance r: I = mr²

### Angular Momentum

```
L = I × ω
```

Conserved when no external torque acts. This is why the figure skater spins faster when pulling arms in: I decreases, so ω must increase to keep L constant.

---

## Gravity (Universal)

> **ELI5:** Every piece of matter in the universe pulls on every other piece of matter. The bigger the pieces and the closer they are, the stronger the pull. That's gravity — the universe's weakest but most far-reaching force.

### Newton's Law of Universal Gravitation

```
F = G × (m₁ × m₂) / r²

G = 6.674 × 10⁻¹¹ N⋅m²/kg²
```

**Why 1/r²?** Imagine gravity spreading out like light from a bulb. The "surface" it covers grows as r² (surface area of a sphere = 4πr²). Same total "gravity" spread over more area = weaker at each point. Inverse-square laws show up everywhere in physics for this geometric reason.

### Orbital Mechanics

**Circular orbit speed:**
```
v = √(GM/r)
```

**Escape velocity:**
```
v_escape = √(2GM/r)
```

For Earth's surface: v_escape ≈ 11.2 km/s (~25,000 mph).

**Kepler's Laws:**
1. Orbits are ellipses with the central body at one focus
2. A line from planet to star sweeps equal areas in equal times (planets move faster when closer)
3. T² ∝ r³ — orbital period squared is proportional to semi-major axis cubed

> **⚠️ Misconception:** "Astronauts in the ISS are in zero gravity." They're in about 90% of Earth's surface gravity. They're weightless because they're in free fall — constantly falling *around* the Earth. Weightlessness ≠ absence of gravity.

---

## Frames of Reference

> **ELI5:** Physics looks different depending on who's watching. A ball you drop on a train falls straight to you, but a person outside sees it move in a curve. Neither is wrong — they're just watching from different places.

### Inertial Frames

An inertial frame is one that's not accelerating. Newton's laws work perfectly in inertial frames. Any frame moving at constant velocity relative to an inertial frame is also inertial.

### Non-Inertial Frames and Pseudo-Forces

In an accelerating frame (car turning, elevator accelerating, rotating merry-go-round), objects seem to experience forces that don't come from any physical interaction. These are **pseudo-forces** or **fictitious forces**:

- **Centrifugal force** — Pushes outward in a rotating frame (why you feel thrown outward on a merry-go-round)
- **Coriolis force** — Deflects moving objects in rotating frames (why hurricanes spin, why toilets don't really flush in different directions by hemisphere — that's a myth)

> **⚠️ Misconception:** "Centrifugal force is fake." It's real *within the rotating reference frame*. It's just not caused by any physical contact or field — it's a consequence of being in a non-inertial frame. The physics works out correctly either way: use the rotating frame with pseudo-forces, or the inertial frame with only real forces.

---

## Lagrangian & Hamiltonian Mechanics (Advanced)

> **ELI5:** Newton says "track all the forces." Lagrange says "track the energy difference instead." Hamilton says "track position and momentum together." They all give the same answers — they're just different languages for the same physics. But some problems are way easier in one language than another.

### Why Bother?

Newton's F=ma is great for simple problems. But try analyzing a double pendulum or a bead sliding on a rotating hoop — the force approach becomes nightmarishly complicated with all the constraints. Lagrangian mechanics bypasses this entirely.

### The Lagrangian

```
L = T - V

(Kinetic energy minus potential energy)
```

**Euler-Lagrange equation:**
```
d/dt (∂L/∂q̇) - ∂L/∂q = 0
```

This single equation, applied to each coordinate q, gives you the equations of motion. No force diagrams needed.

**Why it works:** Nature is lazy. Of all the paths an object could take between two points, it takes the one where the "action" (integral of L over time) is minimized (or more precisely, stationary). This is the **principle of least action** — possibly the most beautiful idea in all of physics.

### The Hamiltonian

```
H = T + V = total energy (in many cases)
```

The Hamiltonian reformulation tracks position and momentum as paired coordinates in "phase space." It's the bridge from classical mechanics to quantum mechanics — the Schrödinger equation is essentially the Hamiltonian wearing a quantum costume.

---

## Practical Estimation Skills

Feynman was legendary at quick estimates. Some useful benchmarks:

| Quantity | Approximate Value |
|----------|------------------|
| g (gravitational acceleration) | 10 m/s² |
| Walking speed | 1.4 m/s (≈ 3 mph) |
| Running speed | 3-4 m/s (≈ 7-9 mph) |
| Speed of sound | 340 m/s (≈ 760 mph) |
| Earth's radius | 6,400 km |
| Earth's mass | 6 × 10²⁴ kg |
| Atmospheric pressure | 10⁵ Pa (100 kPa) |
| Human mass | 70 kg |
| 1 calorie (food) | 4,184 J |
| 1 horsepower | 746 W |

**Fermi estimation tip:** Break unknowns into factors you can estimate. "How many piano tuners in Chicago?" → Population × fraction with pianos × tunings/year ÷ tunings a tuner does/year. You'll be within an order of magnitude. Good enough.

---

## Connections

- **Conservation laws** → `02-conservation-laws-symmetry.md` — Energy, momentum, angular momentum conservation are the deepest results here
- **Oscillations** → `03-oscillations-waves.md` — Springs and pendulums connect directly to wave physics
- **Fluids** → `05-fluid-mechanics.md` — Newton's laws applied to continuous media
- **Electromagnetism** → `06-electrostatics.md` — Same force/field framework, different force law
- **Relativity** → `10-special-relativity.md` — What happens when classical mechanics meets high speeds
- **Quantum** → `12-quantum-foundations.md` — What happens when classical mechanics meets tiny scales
- **Mathematical methods** → `19-mathematical-methods.md` — Vector calculus and differential equations power all of this
