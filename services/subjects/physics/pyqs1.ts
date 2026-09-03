// services/subjects/physics/pyqs1.ts
// Chapters 1 to 7 Solved Board PYQs & Comprehensive Question Bank

export function getPhysicsPart1PYQs(chapterLower: string): string | null {
  // CHAPTER 1: Electric Charges and Fields
  if (
    (chapterLower.includes('charge') && !chapterLower.includes('moving')) ||
    (chapterLower.includes('field') && !chapterLower.includes('magnetic') && !chapterLower.includes('potential')) ||
    chapterLower.includes('coulomb') ||
    chapterLower === 'p1' ||
    chapterLower.includes('electric charges and fields')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (55/1/1)] An electric dipole of moment p is placed in a uniform electric field E. The torque experienced by the dipole is maximum when the angle between p and E is:
(A) 0°
(B) 45°
(C) 90°
(D) 180°
SOLUTION:
**Correct Answer:** (C) 90°
**Notebook Explanation:**
Torque on an electric dipole placed in a uniform electric field is given by:
τ = p × E = p · E · sinθ.
For torque to be maximum, sinθ must be maximum, i.e., sinθ = 1 => θ = 90° (dipole perpendicular to the field lines).
**CBSE Marking Rubric:**
- 1 Mark for selecting option (C) with justification.
INSIGHT: When θ = 0° or 180°, torque is zero (equilibrium positions).

QUESTION: Q2. [Assertion-Reason, CBSE-Style Practice Question, 1 Mark]
Assertion (A): Electric field lines never cross each other.
Reason (R): At the point of intersection, there would be two tangents, indicating two different directions of the electric field at a single point.
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is true but (R) is false.
(D) (A) is false but (R) is true.
SOLUTION:
**Correct Answer:** (A)
**Notebook Explanation:**
Electric field lines represent the trajectory of a positive test charge. The tangent drawn at any point gives the unique direction of the electric field vector E at that point. If two field lines crossed, two tangents could be drawn at the single intersection point, which implies two simultaneous directions of net electric field at that point—a physical impossibility. Thus, both A and R are true, and R correctly explains A.
**CBSE Marking Rubric:**
- 1 Mark for option (A).

QUESTION: Q3. [2 Marks, CBSE 2023 (Delhi)] An electric dipole of length 4 cm, when placed with its axis at 30° to a uniform electric field of 4 × 10⁵ N/C, experiences a torque of 4√3 N·m. Calculate the magnitude of the charge on the dipole.
SOLUTION:
**Given:**
- Length of dipole (2a) = 4 cm = 4 × 10⁻² m
- Angle with field θ = 30°
- Electric field E = 4 × 10⁵ N/C
- Torque τ = 4√3 N·m
**To Find:**
- Magnitude of charge on dipole q
**Formula:**
- Torque τ = p · E · sinθ
- Dipole moment p = q · (2a)
- Therefore, τ = q · (2a) · E · sinθ
**Substitution & Step-by-step Calculation:**
- 4√3 = q × (4 × 10⁻² m) × (4 × 10⁵ N/C) × sin 30°
- 4√3 = q × (16 × 10³) × (1/2)
- 4√3 = q × (8 × 10³)
- q = (4√3) / (8 × 10³) = (√3 / 2) × 10⁻³ C = 0.866 × 10⁻³ C = 8.66 × 10⁻⁴ C (or 866 μC).
**Final Answer:**
The magnitude of the charge on the dipole is **8.66 × 10⁻⁴ C** (or **866 μC**).
**CBSE Marking Rubric:**
- 1/2 Mark for stating torque formula τ = p E sinθ.
- 1/2 Mark for substitution of given SI values.
- 1 Mark for correct arithmetic calculation and final boxed answer with unit (C).

QUESTION: Q4. [3 Marks Derivation, CBSE 2023 (All India)] State Gauss's law in electrostatics. Using it, derive an expression for the electric field intensity at a point due to an infinitely long straight uniformly charged wire of linear charge density λ.
SOLUTION:
**Step 1: Statement of Gauss's Law:**
The total electric flux Φ through any closed Gaussian surface in vacuum is equal to 1/ε₀ times the total net electric charge enclosed by that surface:
**Φ = ∮ E · dA = Q_enclosed / ε₀**.
**Step 2: Choice of Gaussian Surface:**
1. Consider an infinitely long, thin straight wire with uniform positive linear charge density λ (C/m).
2. By cylindrical symmetry, the electric field E is directed radially outward everywhere perpendicular to the wire.
3. Draw a coaxial cylindrical Gaussian surface of radius r and length l with the wire along its central axis.
**Step 3: Flux Evaluation:**
- The surface has three distinct parts:
  - Top flat circular end (S₁): E ⟂ dA₁ (angle 90°) => Φ₁ = ∮ E · dA₁ cos 90° = 0.
  - Bottom flat circular end (S₂): E ⟂ dA₂ (angle 90°) => Φ₂ = ∮ E · dA₂ cos 90° = 0.
  - Curved cylindrical wall (S₃): E is parallel to dA₃ (angle 0°) and has constant magnitude at all points on the curved surface:
    Φ₃ = ∮ E · dA₃ cos 0° = E ∮ dA₃ = E · (2π r l).
- Total flux: Φ = Φ₁ + Φ₂ + Φ₃ = E · (2π r l).
**Step 4: Enclosed Charge & Final Formula:**
- Total charge enclosed within the cylinder of length l is Q_enclosed = λ · l.
- Applying Gauss's Law:
  E · (2π r l) = (λ · l) / ε₀
  => **E = λ / (2πε₀ r)**.
- In vector form: **E = [ λ / (2πε₀ r) ] r̂**, directed radially outward for λ > 0.
**CBSE Marking Rubric:**
- 1 Mark for precise statement of Gauss's Law with mathematical form.
- 1 Mark for identifying zero flux through end caps and evaluating curved surface flux E(2πrl).
- 1 Mark for equating to (λl)/ε₀ and deriving E = λ/(2πε₀r) with vector direction.

QUESTION: Q5. [4 Marks Case-Based Question, CBSE 2024 (55/2/1)]
Case Study: Electric Field and Shielding inside Conductors.
Electrostatic shielding is the phenomenon of protecting a certain region of space from the influence of external electric fields. Inside a hollow charged conductor, the electric field is strictly zero because mobile charge carriers redistribute themselves entirely onto the outer surface until the net internal electric field vanishes. Sensitive electronic instruments and coaxial transmission cables utilize this property by enclosing vulnerable components within grounded metal shells (Faraday cages).
(i) What is the value of electric field intensity inside a hollow conducting sphere of radius 10 cm carrying a surface charge of 25 μC? (1 Mark)
(ii) Why are passengers advised to remain inside a car during a severe lightning thunderstorm? (1 Mark)
(iii) A point charge +q is placed at the center of a spherical conducting shell of inner radius R₁ and outer radius R₂. What are the induced surface charge densities on the inner and outer surfaces of the shell? (2 Marks)
SOLUTION:
**(i) Calculation of Electric Field:**
Inside any charged conducting sphere, the net enclosed charge is zero. By Gauss's Law:
∮ E · dA = Q_enclosed / ε₀ = 0 => **E = 0 N/C** at all internal points.
**(ii) Car as a Faraday Cage:**
The metallic metallic body of the car forms a closed conducting shell (Faraday cage). When lightning strikes, the huge electrical discharge flows over the outer metallic body harmlessly into the ground, ensuring the electric field inside the car remains zero.
**(iii) Induced Charge Densities:**
- By electrostatic induction, a charge of **-q** is induced uniformly on the inner surface of radius R₁.
  Inner surface charge density: **σ_inner = - q / (4π R₁²)**.
- By conservation of charge on the uncharged shell, an equal charge **+q** appears on the outer surface of radius R₂.
  Outer surface charge density: **σ_outer = + q / (4π R₂²)**.
**CBSE Marking Rubric:**
- 1 Mark for E = 0.
- 1 Mark for Faraday cage / electrostatic shielding explanation.
- 1 Mark for inner charge density -q/(4πR₁²); 1 Mark for outer charge density +q/(4πR₂²).

QUESTION: Q6. [5 Marks Structured Problem, CBSE 2024 (Delhi)]
(a) Define electric dipole moment. Derive an expression for the electric field at an equatorial point of an electric dipole of length 2a.
(b) Two point charges q₁ = +5 μC and q₂ = -5 μC are located 20 cm apart in vacuum. (i) What is the electric field at the midpoint O of the line AB joining the two charges? (ii) If a negative test charge of magnitude 1.5 × 10⁻⁹ C is placed at this midpoint, what is the force experienced by the test charge?
SOLUTION:
**(a) Definition & Equatorial Derivation:**
1. **Definition:** The electric dipole moment p of an electric dipole is defined as the product of the magnitude of either charge (q) and the vector distance (2a) separating them: p = q · (2a). It is a vector directed along the dipole axis from the negative charge -q to the positive charge +q. SI Unit: C·m.
DIAGRAM: electric_dipole | Electric Field of an Electric Dipole on Axial and Equatorial Points (NCERT Fig 1.15)
2. **Derivation for Equatorial Point:**
   - Consider a dipole consisting of charges -q at A and +q at B separated by 2a.
   - Let P be a point on the perpendicular bisector at distance r from the midpoint O.
   - Distance from A to P: AP = √(r² + a²); Distance from B to P: BP = √(r² + a²).
   - Magnitude of field due to +q: E₊ = (1/4πε₀) · q / (r² + a²).
   - Magnitude of field due to -q: E₋ = (1/4πε₀) · q / (r² + a²).
   - Magnitudes are equal: |E₊| = |E₋|.
   - Resolve E₊ and E₋ into components parallel and perpendicular to dipole axis:
     - Vertical components E₊ sinθ and E₋ sinθ are equal in magnitude and opposite in direction, so they cancel out completely.
     - Horizontal components E₊ cosθ and E₋ cosθ point in the same direction, opposite to dipole moment vector p̂.
   - Total electric field: E_eq = - (E₊ cosθ + E₋ cosθ) p̂ = - 2 E₊ cosθ p̂.
   - From geometry, cosθ = a / √(r² + a²).
   - E_eq = - 2 [ (1/4πε₀) · q / (r² + a²) ] · [ a / (r² + a²)^(1/2) ] p̂ = - (1/4πε₀) · [ (2qa) / (r² + a²)^(3/2) ] p̂.
   - Using p = 2qa: **E_eq = - (1/4πε₀) · [ p / (r² + a²)^(3/2) ] p̂**.
   - For a short dipole (r >> a): **E_eq = - (1/4πε₀) · (p / r³) p̂**.

**(b) Numerical Notebook Solution:**
**(i) Electric Field at Midpoint O:**
- **Given:**
  - q₁ = +5 × 10⁻⁶ C at A
  - q₂ = -5 × 10⁻⁶ C at B
  - Distance AB = 20 cm = 0.20 m
  - Midpoint distance from each charge: r = 10 cm = 0.10 m
- **To Find:** Net electric field E_O at midpoint O
- **Formula:** E = (1/4πε₀) · q / r²
- **Direction:**
  - Due to positive charge q₁, field E₁ points AWAY from A (towards B).
  - Due to negative charge q₂, field E₂ points TOWARDS B.
  - Since both fields point in the same direction (from A to B), net field is: E_net = E₁ + E₂ = 2 · E₁.
- **Substitution & Calculation:**
  - E_net = 2 × [ (9 × 10⁹ N·m²/C²) × (5 × 10⁻⁶ C) / (0.10 m)² ]
  - E_net = 2 × [ 45 × 10³ / 0.01 ] = 2 × [ 4.5 × 10⁶ ] = **9.0 × 10⁶ N/C** along the direction from A to B.
**(ii) Force on Negative Test Charge:**
- **Given:** Test charge q₀ = - 1.5 × 10⁻⁹ C
- **To Find:** Force F on test charge
- **Formula:** F = q₀ · E
- **Substitution & Calculation:**
  - F = (1.5 × 10⁻⁹ C) × (9.0 × 10⁶ N/C) = **1.35 × 10⁻² N**.
  - Since the test charge is negative, the force is directed OPPOSITE to the electric field, i.e., from B to A (towards charge q₁).
**Final Answer:**
(i) Electric field at midpoint is **9.0 × 10⁶ N/C directed from A to B**.
(ii) Force on the test charge is **1.35 × 10⁻² N directed from B to A**.
**CBSE Marking Rubric:**
- 1 Mark for definition of dipole moment with units.
- 2 Marks for equatorial field diagram, component resolution, and derivation of E_eq = kp/r³.
- 1 Mark for part (b)(i) field calculation with direction.
- 1 Mark for part (b)(ii) force magnitude and direction.`;
  }

  // CHAPTER 2: Electrostatic Potential and Capacitance
  if (
    chapterLower.includes('potential') ||
    chapterLower.includes('capacitance') ||
    chapterLower.includes('capacitor') ||
    chapterLower === 'p2'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (55/3/1)] The work done in moving a test charge of 2 μC from point A to point B on an equipotential surface of potential 50 V is:
(A) 100 μJ
(B) 50 μJ
(C) Zero
(D) 25 μJ
SOLUTION:
**Correct Answer:** (C) Zero
**Notebook Explanation:**
Work done in moving a charge q between two points on an equipotential surface is:
W = q · ΔV = q · (V_B - V_A).
Since the surface is equipotential, V_A = V_B = 50 V => ΔV = 0 V.
Therefore, W = (2 × 10⁻⁶ C) × (0 V) = 0 J.
**CBSE Marking Rubric:**
- 1 Mark for option (C) with W = qΔV justification.

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] A 600 pF capacitor is charged by a 200 V supply. It is then disconnected from the supply and connected to another uncharged 600 pF capacitor. How much electrostatic energy is lost in the process?
SOLUTION:
**Given:**
- Capacitance C₁ = 600 pF = 600 × 10⁻¹² F
- Initial voltage V₁ = 200 V
- Second capacitor C₂ = 600 pF = 600 × 10⁻¹² F
- Initial voltage V₂ = 0 V (uncharged)
**To Find:** Loss in electrostatic energy (ΔU)
**Formula:**
Energy lost on sharing charges:
**ΔU = [ C₁ · C₂ · (V₁ - V₂)² ] / [ 2 · (C₁ + C₂) ]**
**Substitution & Step-by-step Calculation:**
- ΔU = [ (600 × 10⁻¹²) × (600 × 10⁻¹²) × (200 - 0)² ] / [ 2 × (600 × 10⁻¹² + 600 × 10⁻¹²) ]
- ΔU = [ (36 × 10⁻¹⁶) × (40000) ] / [ 2 × (1200 × 10⁻¹²) ]
- ΔU = [ 144 × 10⁻¹¹ ] / [ 24 × 10⁻¹⁰ ] = (144 / 240) × 10⁻¹ J = 0.6 × 10⁻² J = **6.0 × 10⁻⁶ J** (or 6 μJ).
**Final Answer:**
The electrostatic energy lost in the process is **6.0 × 10⁻⁶ J** (dissipated as heat and electromagnetic radiation in the connecting wire).
**CBSE Marking Rubric:**
- 1/2 Mark for stating the energy loss formula.
- 1/2 Mark for correct substitution of values.
- 1 Mark for calculating 6.0 × 10⁻⁶ J with correct unit.

QUESTION: Q3. [3 Marks Derivation, CBSE 2023 (Foreign)] Derive the expression for the capacitance of a parallel plate capacitor having plate area A and separation d, filled with a dielectric slab of thickness t (t < d) and dielectric constant K.
SOLUTION:
**Step 1: Physical Setup:**
- Consider a parallel plate capacitor with plates of area A separated by distance d with air/vacuum between them.
- Surface charge densities on plates are +σ and -σ where σ = Q / A.
- A dielectric slab of dielectric constant K and thickness t (t < d) is inserted parallel to the plates.
**Step 2: Electric Fields:**
- Electric field in the air gap of thickness (d - t):
  E₀ = σ / ε₀ = Q / (A ε₀).
- Electric field inside the dielectric slab of thickness t is reduced by polarization:
  E = E₀ / K = Q / (K A ε₀).
**Step 3: Total Potential Difference V:**
- The total potential difference between the plates is the sum of potential differences across the air gap and dielectric slab:
  V = E₀ · (d - t) + E · t
  V = E₀ · (d - t) + (E₀ / K) · t
  V = E₀ · [ (d - t) + (t / K) ].
- Substitute E₀ = Q / (A ε₀):
  V = [ Q / (A ε₀) ] · [ d - t + (t / K) ].
**Step 4: Formula for Capacitance C:**
- Capacitance C = Q / V:
  C = Q / [ { Q / (A ε₀) } · { d - t + (t / K) } ]
  => **C = ε₀ A / [ d - t + (t / K) ]**.
**CBSE Marking Rubric:**
- 1 Mark for defining fields in air gap E₀ and inside dielectric E₀/K.
- 1 Mark for potential difference expression V = E₀(d - t) + (E₀/K)t.
- 1 Mark for final algebraic formula C = ε₀A / [d - t + (t/K)].

QUESTION: Q4. [5 Marks Structured Problem, CBSE 2024 (55/1/2)]
(a) Derive an expression for the energy stored in a parallel plate capacitor of capacitance C charged to a potential difference V. Hence obtain the expression for energy density.
(b) A parallel plate capacitor of plate area 90 cm² and plate separation 2.5 mm is charged to 400 V using a battery. (i) Calculate the electrostatic energy stored in the capacitor. (ii) If the battery is disconnected and a dielectric slab of K = 5 is inserted filling the entire space between the plates, find the new values of capacitance, potential difference, and energy stored.
SOLUTION:
**(a) Derivation for Energy Stored & Energy Density:**
1. **Work Done in Charging:**
   - Consider a capacitor of capacitance C. Suppose at some intermediate instant during charging, the charge on plates is q and potential difference is v = q / C.
   - Small work done dW in transferring additional charge dq:
     dW = v · dq = (q / C) dq.
   - Total work done in charging the capacitor from 0 to final charge Q:
     W = ∫₀^Q (q / C) dq = (1 / C) [ q² / 2 ]₀^Q = Q² / (2C).
   - This work is stored as electrostatic potential energy U in the electric field:
     **U = Q² / (2C) = 1/2 C V² = 1/2 Q V** (using Q = CV).
2. **Energy Density (u):**
   - Substitute C = ε₀ A / d and V = E · d into U = 1/2 C V²:
     U = 1/2 [ (ε₀ A / d) · (E · d)² ] = 1/2 ε₀ E² · (A · d).
   - Since volume between plates = A · d:
     **Energy Density u = U / (A · d) = 1/2 ε₀ E² J/m³**.

**(b) Numerical Notebook Solution:**
- **Given:**
  - Area A = 90 cm² = 90 × 10⁻⁴ m² = 9.0 × 10⁻³ m²
  - Separation d = 2.5 mm = 2.5 × 10⁻³ m
  - Voltage V₀ = 400 V
  - Dielectric constant K = 5
**(i) Initial Capacitance and Stored Energy:**
- Initial capacitance C₀ = ε₀ A / d
  C₀ = (8.854 × 10⁻¹² × 9.0 × 10⁻³) / (2.5 × 10⁻³) = 3.187 × 10⁻¹¹ F = **31.87 pF**.
- Initial stored energy U₀ = 1/2 C₀ V₀²
  U₀ = 1/2 × (3.187 × 10⁻¹¹ F) × (400 V)² = 1/2 × 3.187 × 10⁻¹¹ × 160000
  **U₀ = 2.55 × 10⁻⁶ J** (or 2.55 μJ).
**(ii) After Battery Disconnection & Slab Insertion (K = 5):**
- Since the battery is disconnected, the charge Q₀ remains strictly constant!
- **New Capacitance:**
  C' = K · C₀ = 5 × 31.87 pF = **159.35 pF** (or 1.59 × 10⁻¹⁰ F).
- **New Potential Difference:**
  V' = V₀ / K = 400 V / 5 = **80 V**.
- **New Energy Stored:**
  U' = U₀ / K = (2.55 × 10⁻⁶ J) / 5 = **5.1 × 10⁻⁷ J** (or 0.51 μJ).
**Final Answer:**
(i) Initial energy stored is **2.55 × 10⁻⁶ J**.
(ii) With dielectric slab: Capacitance increases to **159.35 pF**, potential drops to **80 V**, and stored energy drops to **5.1 × 10⁻⁷ J**.
**CBSE Marking Rubric:**
- 2 Marks for derivation of U = 1/2 CV² and energy density u = 1/2 ε₀ E².
- 1 Mark for initial energy calculation U₀ = 2.55 × 10⁻⁶ J.
- 2 Marks for C', V', and U' calculations with battery disconnected rules.`;
  }

  // CHAPTER 3: Current Electricity
  if (
    chapterLower.includes('current') ||
    chapterLower.includes('electricity') ||
    chapterLower.includes('drift') ||
    chapterLower.includes('kirchhoff') ||
    chapterLower === 'p3'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (55/2/2)] When a potential difference V is applied across a copper wire of length l and diameter d, the drift velocity of electrons is v_d. If the diameter of the wire is halved while keeping V and l unchanged, the new drift velocity will be:
(A) v_d / 4
(B) v_d / 2
(C) v_d
(D) 2 v_d
SOLUTION:
**Correct Answer:** (C) v_d
**Notebook Explanation:**
Drift velocity is given by:
v_d = (e · E · τ) / m = (e · V · τ) / (m · l).
Notice that v_d depends on potential difference V, length l, relaxation time τ, and charge/mass of electron. It is completely independent of the wire's cross-sectional area and diameter d. Since V and l are unchanged, drift velocity remains unchanged at v_d.
**CBSE Marking Rubric:**
- 1 Mark for option (C) with formula v_d = eVτ/(ml).

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] A wire of resistance 16 Ω is melted and drawn into a new wire of half its original length. What will be the new resistance of the wire?
SOLUTION:
**Given:**
- Original resistance R₁ = 16 Ω
- Original length = l₁
- New length l₂ = l₁ / 2
**To Find:** New resistance R₂
**Formula:**
- R = ρ · (l / A)
- Since the wire is melted and redrawn, its volume V = A · l remains strictly constant:
  A₁ · l₁ = A₂ · l₂ => A₂ / A₁ = l₁ / l₂ = l₁ / (l₁ / 2) = 2 => A₂ = 2 A₁.
- Resistance ratio: R₂ / R₁ = (l₂ / l₁) × (A₁ / A₂) = (1/2) × (1/2) = 1/4.
**Substitution & Calculation:**
- R₂ = R₁ / 4 = 16 Ω / 4 = **4 Ω**.
**Final Answer:**
The new resistance of the wire is **4 Ω**.
**CBSE Marking Rubric:**
- 1 Mark for using volume conservation to show A₂ = 2A₁ and R ∝ l².
- 1 Mark for final calculation R₂ = 4 Ω.

QUESTION: Q3. [3 Marks, CBSE 2023 (All India)] State Kirchhoff's rules. Using these rules, find the currents I₁, I₂, and I₃ in the branches of the network shown below:
Loop 1: Battery E₁ = 6V, internal resistance 1Ω, resistor 2Ω.
Loop 2: Battery E₂ = 4V, internal resistance 2Ω, common branch resistor 3Ω.
SOLUTION:
**Step 1: Statement of Kirchhoff's Rules:**
1. **Junction Rule:** At any electrical junction, the algebraic sum of currents is zero: Σ I_in = Σ I_out (Conservation of Charge).
2. **Loop Rule:** Around any closed loop, the algebraic sum of changes in electric potential is zero: Σ ΔV = 0 (Conservation of Energy).
**Step 2: Circuit Equations Setup:**
- Let junction A have currents satisfying: I₃ = I₁ + I₂.
- **Loop 1 (Top closed loop):**
  6 - 1 · I₁ - 2 · I₁ - 3 · I₃ = 0
  => 6 - 3 I₁ - 3 (I₁ + I₂) = 0
  => 6 I₁ + 3 I₂ = 6 => **2 I₁ + I₂ = 2**  --- (Eq. 1)
- **Loop 2 (Bottom closed loop):**
  4 - 2 · I₂ - 3 · I₃ = 0
  => 4 - 2 I₂ - 3 (I₁ + I₂) = 0
  => 3 I₁ + 5 I₂ = 4  --- (Eq. 2)
**Step 3: Solving Simultaneous Equations:**
- Multiply Eq. 1 by 5: 10 I₁ + 5 I₂ = 10.
- Subtract Eq. 2: (10 I₁ + 5 I₂) - (3 I₁ + 5 I₂) = 10 - 4
  => 7 I₁ = 6 => **I₁ = 6/7 A ≈ 0.857 A**.
- Substitute I₁ into Eq. 1: 2(6/7) + I₂ = 2 => 12/7 + I₂ = 2
  => I₂ = 2 - 12/7 = (14 - 12)/7 => **I₂ = 2/7 A ≈ 0.286 A**.
- Common branch current: I₃ = I₁ + I₂ = 6/7 + 2/7 = **8/7 A ≈ 1.143 A**.
**Final Answer:**
The branch currents are **I₁ = 6/7 A**, **I₂ = 2/7 A**, and **I₃ = 8/7 A**.
**CBSE Marking Rubric:**
- 1 Mark for correct statements of Junction Rule and Loop Rule.
- 1 Mark for writing correct loop equations.
- 1 Mark for solving and obtaining I₁ = 6/7 A, I₂ = 2/7 A, and I₃ = 8/7 A.

QUESTION: Q4. [5 Marks Structured Problem, CBSE 2024 (55/1/1)]
(a) Define drift velocity. Derive the microscopic relation between electric current I and drift velocity v_d. Hence deduce Ohm's law and obtain the expression for electrical resistivity.
(b) A storage battery of EMF 8.0 V and internal resistance 0.5 Ω is being charged by a 120 V DC supply using a series resistor of 15.5 Ω. (i) What is the terminal potential difference of the battery during charging? (ii) What is the purpose of having a series resistor in the charging circuit?
SOLUTION:
**(a) Derivation of Ohm's Law:**
1. **Definition:** Drift velocity is the average velocity acquired by free electrons in a conductor opposite to the direction of an applied electric field.
2. **Relation between I and v_d:**
   - Conductor of length l, area of cross-section A, free electron density n.
   - Total number of electrons in volume Al: N = n · A · l.
   - Total mobile charge: Q = n · A · l · e.
   - Time taken to cross length l: t = l / v_d.
   - Electric current: I = Q / t = (n A l e) / (l / v_d) => **I = n e A v_d**.
3. **Deduction of Ohm's Law:**
   - Drift velocity under electric field E = V / l:
     v_d = (e E τ) / m = (e V τ) / (m l).
   - Substitute into current equation:
     I = n e A [ (e V τ) / (m l) ] = [ (n e² τ A) / (m l) ] · V.
   - Rearranging for V / I:
     V / I = [ m / (n e² τ) ] · (l / A).
   - At constant temperature, m, n, e, τ are constant for a given material, so:
     V / I = R = constant (Ohm's Law).
   - **Resistivity:** **ρ = m / (n e² τ)**.

**(b) Numerical Notebook Solution:**
- **Given:**
  - Battery EMF E = 8.0 V
  - Battery internal resistance r = 0.5 Ω
  - External charging DC supply V_supply = 120 V
  - Series resistor R = 15.5 Ω
- **Step 1: Net EMF of Circuit:**
  Since the charging supply opposes the battery EMF:
  E_net = V_supply - E = 120 V - 8.0 V = 112 V.
- **Step 2: Total Circuit Resistance:**
  R_total = R + r = 15.5 Ω + 0.5 Ω = 16.0 Ω.
- **Step 3: Charging Current I:**
  I = E_net / R_total = 112 V / 16.0 Ω = **7.0 A**.
- **Step 4: Terminal Potential Difference V during Charging:**
  When a battery is being charged:
  V = E + I · r
  V = 8.0 V + (7.0 A × 0.5 Ω) = 8.0 V + 3.5 V = **11.5 V**.
- **Step 5: Purpose of Series Resistor:**
  The series resistor limits the high charging current. Without it, the circuit current would be I = 112 V / 0.5 Ω = 224 A, which would immediately destroy the battery due to excessive Joule heating.
**Final Answer:**
(i) Terminal potential difference of the battery during charging is **11.5 V**.
(ii) The series resistor prevents dangerously large charging currents that would damage the battery.
**CBSE Marking Rubric:**
- 2 Marks for derivation of I = neAv_d and ρ = m/(ne²τ).
- 1 Mark for calculating charging current I = 7 A.
- 1 Mark for terminal voltage V = E + Ir = 11.5 V.
- 1 Mark for stating the current-limiting protection role of series resistor.`;
  }

  // CHAPTER 4: Moving Charges and Magnetism
  if (
    chapterLower.includes('moving charges') ||
    chapterLower.includes('biot') ||
    chapterLower.includes('ampere') ||
    chapterLower.includes('lorentz') ||
    chapterLower.includes('galvanometer') ||
    chapterLower === 'p4'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (55/1/3)] A circular coil of radius R carrying current I produces a magnetic field B at its center. If the radius of the coil is doubled and current is halved, the new magnetic field at the center will be:
(A) B / 4
(B) B / 2
(C) 2 B
(D) 4 B
SOLUTION:
**Correct Answer:** (A) B / 4
**Notebook Explanation:**
Magnetic field at the center of a circular current coil of radius R is:
B = (μ₀ · I) / (2 R).
With new radius R' = 2R and new current I' = I / 2:
B' = [ μ₀ · (I / 2) ] / [ 2 · (2 R) ] = 1/4 · [ (μ₀ I) / (2 R) ] = B / 4.
**CBSE Marking Rubric:**
- 1 Mark for option (A) with formula B = μ₀I / 2R.

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] A galvanometer of coil resistance 50 Ω gives full-scale deflection for a current of 2 mA. How will you convert it into an ammeter of range 0 to 5 A?
SOLUTION:
**Given:**
- Galvanometer coil resistance G = 50 Ω
- Full-scale deflection current I_g = 2 mA = 2 × 10⁻³ A = 0.002 A
- Ammeter desired range I = 5 A
**To Find:** Value of shunt resistance S and connection method
**Formula:**
To convert galvanometer into an ammeter, a low resistance (Shunt S) is connected in parallel with the coil:
**S = (I_g · G) / (I - I_g)**
**Substitution & Calculation:**
- S = (0.002 A × 50 Ω) / (5 A - 0.002 A)
- S = 0.1 / 4.998 ≈ **0.0200 Ω** (or 0.02 Ω).
**Final Answer:**
By connecting a shunt resistance of **0.02 Ω in parallel** with the galvanometer coil.
**CBSE Marking Rubric:**
- 1 Mark for stating shunt formula and parallel connection requirement.
- 1 Mark for correct substitution and final value 0.02 Ω.

QUESTION: Q3. [3 Marks Derivation, CBSE 2023 (Foreign)] Using Biot-Savart law, derive the expression for the magnetic field on the axis of a circular current loop of radius R at a distance x from its center.
SOLUTION:
**Step 1: Biot-Savart Law Statement:**
The magnetic field dB produced by a current element I dl at distance r is:
dB = (μ₀ / 4π) · (I dl sinθ) / r².
**Step 2: Geometry & Component Resolution:**
- Consider a circular loop of radius R in the y-z plane with current I. Let point P lie on the x-axis at distance x from the center O.
- Distance from any element dl on the loop to P is r = √(R² + x²).
- Since dl is perpendicular to position vector r (θ = 90°):
  dB = (μ₀ / 4π) · (I dl) / (R² + x²).
- Resolve dB into axial component dB_x = dB sinα and radial component dB_⟂ = dB cosα, where sinα = R / r = R / √(R² + x²).
- Due to circular symmetry, radial components from diametrically opposite elements cancel out in pairs: ∮ dB_⟂ = 0.
**Step 3: Axial Integration:**
- Net field B = ∮ dB sinα = (μ₀ / 4π) · [ I / (R² + x²) ] · [ R / √(R² + x²) ] · ∮ dl.
- For a coil of N turns, ∮ dl = 2π N R:
- B = (μ₀ / 4π) · [ (N I R) / (R² + x²)^(3/2) ] · (2π R)
- **B = [ μ₀ N I R² ] / [ 2 (R² + x²)^(3/2) ]**.
**CBSE Marking Rubric:**
- 1 Mark for diagram and setting up Biot-Savart expression dB.
- 1 Mark for resolving components and showing cancellation of perpendicular components.
- 1 Mark for integrating axial component and obtaining B = μ₀NIR² / [2(R²+x²)^(3/2)].

QUESTION: Q4. [5 Marks Structured Problem, CBSE 2024 (55/3/1)]
(a) Derive an expression for the force per unit length between two infinitely long straight parallel conductors carrying currents I₁ and I₂ separated by distance d in vacuum. Hence define the SI unit of current (1 Ampere).
(b) An electron is moving with a velocity of 2.0 × 10⁷ m/s in a uniform magnetic field of 0.5 T at an angle of 30° with the direction of the field. Calculate: (i) the radius of the helical path, and (ii) the pitch of the helix. (Take mass of electron = 9.1 × 10⁻³¹ kg).
SOLUTION:
**(a) Force Between Parallel Wires Derivation:**
1. Consider two long parallel wires 1 and 2 separated by distance d in vacuum carrying steady currents I₁ and I₂.
2. Magnetic field produced by Wire 1 at any point on Wire 2:
   B₁ = (μ₀ I₁) / (2π d) (Directed into the plane of the page by right-hand thumb rule).
3. Force experienced by length L of Wire 2 placed in field B₁:
   F₂₁ = I₂ · L · B₁ · sin 90° = I₂ · L · [ (μ₀ I₁) / (2π d) ].
4. Force per unit length:
   **F / L = (μ₀ · I₁ · I₂) / (2π · d) N/m**.
5. Wires carrying currents in the same direction attract each other; in opposite directions, they repel.
6. **Definition of 1 Ampere:** One Ampere is that steady current which, when maintained in each of two infinitely long straight parallel conductors of negligible cross-section placed 1 meter apart in vacuum, produces between them a force of 2 × 10⁻⁷ Newtons per meter of length.

**(b) Numerical Notebook Solution:**
- **Given:**
  - Velocity v = 2.0 × 10⁷ m/s
  - Magnetic field B = 0.5 T
  - Angle θ = 30°
  - Mass of electron m = 9.1 × 10⁻³¹ kg
  - Charge of electron e = 1.6 × 10⁻¹⁹ C
- **Velocity Components:**
  - Parallel component: v_|| = v cos 30° = (2.0 × 10⁷) × (√3 / 2) = 1.732 × 10⁷ m/s.
  - Perpendicular component: v_⟂ = v sin 30° = (2.0 × 10⁷) × (1/2) = 1.0 × 10⁷ m/s.
**(i) Radius of Helical Path (r):**
- Formula: r = (m · v_⟂) / (q · B)
- Substitution:
  r = (9.1 × 10⁻³¹ kg × 1.0 × 10⁷ m/s) / (1.6 × 10⁻¹⁹ C × 0.5 T)
  r = (9.1 × 10⁻²⁴) / (8.0 × 10⁻²⁰) = 1.1375 × 10⁻⁴ m = **1.14 × 10⁻⁴ m** (or 0.114 mm).
**(ii) Pitch of the Helix (p):**
- Time period T = (2π m) / (q B)
  T = (2 × 3.1416 × 9.1 × 10⁻³¹) / (1.6 × 10⁻¹⁹ × 0.5) = (5.718 × 10⁻³⁰) / (8.0 × 10⁻²⁰) = 7.147 × 10⁻¹¹ s.
- Pitch p = v_|| · T:
  p = (1.732 × 10⁷ m/s) × (7.147 × 10⁻¹¹ s) = **1.24 × 10⁻³ m = 1.24 mm**.
**Final Answer:**
(i) Radius of helical path is **1.14 × 10⁻⁴ m** (0.114 mm).
(ii) Pitch of the helix is **1.24 × 10⁻³ m** (1.24 mm).
**CBSE Marking Rubric:**
- 2 Marks for force per unit length derivation and definition of 1 Ampere.
- 1.5 Marks for radius calculation r = 1.14 × 10⁻⁴ m.
- 1.5 Marks for time period and pitch calculation p = 1.24 mm.`;
  }

  // CHAPTER 5: Magnetism and Matter
  if (
    chapterLower.includes('magnetism and matter') ||
    chapterLower.includes('bar magnet') ||
    chapterLower.includes('earth magnetism') ||
    chapterLower === 'p5'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (55/2/1)] The magnetic susceptibility χ of a diamagnetic substance is:
(A) Large and positive
(B) Small and positive
(C) Small and negative
(D) Dependent on absolute temperature
SOLUTION:
**Correct Answer:** (C) Small and negative
**Notebook Explanation:**
Diamagnetic materials have magnetic susceptibility χ that is small, negative (typically around -10⁻⁵), and strictly independent of temperature.
**CBSE Marking Rubric:**
- 1 Mark for option (C).

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] The horizontal component of Earth's magnetic field at a certain place is 0.3 Gauss and the angle of dip is 60°. Calculate the total magnetic field of the Earth at that place.
SOLUTION:
**Given:**
- Horizontal component B_H = 0.3 Gauss = 0.3 × 10⁻⁴ T
- Angle of dip δ = 60°
**To Find:** Total magnetic field B_E
**Formula:**
B_H = B_E · cosδ => **B_E = B_H / cosδ**
**Substitution & Calculation:**
- B_E = (0.3 Gauss) / (cos 60°) = 0.3 / 0.5 = **0.6 Gauss** (or 0.6 × 10⁻⁴ T = 6.0 × 10⁻⁵ T).
**Final Answer:**
The total magnetic field of the Earth at that place is **0.6 Gauss** (or **6.0 × 10⁻⁵ T**).
**CBSE Marking Rubric:**
- 1 Mark for stating formula B_E = B_H / cosδ.
- 1 Mark for calculation and final answer with unit.

QUESTION: Q3. [3 Marks, CBSE 2023 (All India)] State three differences between diamagnetic, paramagnetic, and ferromagnetic substances on the basis of: (i) effect of external magnetic field, (ii) magnetic susceptibility, and (iii) temperature dependence.
SOLUTION:
**Step 1: Effect of External Magnetic Field:**
- Diamagnetic: Weakly repelled by magnetic field; tend to move from stronger to weaker field regions.
- Paramagnetic: Weakly attracted by magnetic field; tend to move from weaker to stronger field regions.
- Ferromagnetic: Strongly attracted by magnetic field; move vigorously towards strong field regions.
**Step 2: Magnetic Susceptibility (χ):**
- Diamagnetic: Small and negative (-10⁻⁵).
- Paramagnetic: Small and positive (+10⁻³).
- Ferromagnetic: Very large and positive (+10³ to 10⁵).
**Step 3: Temperature Dependence:**
- Diamagnetic: Susceptibility is strictly independent of temperature.
- Paramagnetic: Inversely proportional to absolute temperature (Curie's Law: χ = C / T).
- Ferromagnetic: Decreases with temperature; above Curie temperature T_c it transitions into a paramagnetic material according to Curie-Weiss law: χ = C / (T - T_c).
**CBSE Marking Rubric:**
- 1 Mark for field behavior comparison.
- 1 Mark for susceptibility comparison.
- 1 Mark for temperature dependence comparison.`;
  }

  // CHAPTER 6: Electromagnetic Induction
  if (
    chapterLower.includes('electromagnetic induction') ||
    chapterLower.includes('faraday') ||
    chapterLower.includes('lenz') ||
    chapterLower.includes('inductance') ||
    chapterLower === 'p6'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (55/1/1)] The direction of induced current in a circuit is determined by:
(A) Faraday's First Law
(B) Lenz's Law
(C) Ampere's Law
(D) Fleming's Left-Hand Rule
SOLUTION:
**Correct Answer:** (B) Lenz's Law
**Notebook Explanation:**
Lenz's law provides the direction and polarity of induced EMF/current (which opposes the change in magnetic flux that causes it), consistent with the Law of Conservation of Energy.
**CBSE Marking Rubric:**
- 1 Mark for option (B).

QUESTION: Q2. [2 Marks, CBSE 2023 (All India)] A metallic rod of length 1.0 m is rotated with a frequency of 50 rev/s about an axis passing through one of its ends in a uniform magnetic field of 0.5 T perpendicular to the plane of rotation. Calculate the EMF induced across the ends of the rod.
SOLUTION:
**Given:**
- Length of rod l = 1.0 m
- Frequency of rotation ν = 50 rev/s
- Angular frequency ω = 2π ν = 2 × 3.1416 × 50 = 100π rad/s ≈ 314.16 rad/s
- Magnetic field B = 0.5 T
**To Find:** Induced EMF e
**Formula:**
**e = 1/2 · B · ω · l² = B · π · ν · l²**
**Substitution & Calculation:**
- e = 1/2 × (0.5 T) × (100π rad/s) × (1.0 m)²
- e = 25π V = 25 × 3.1416 = **78.54 V**.
**Final Answer:**
The induced EMF across the ends of the rod is **78.54 V**.
**CBSE Marking Rubric:**
- 1 Mark for formula e = 1/2 B ω l².
- 1 Mark for substitution and calculation of 78.54 V.

QUESTION: Q3. [3 Marks Derivation, CBSE 2023 (Delhi)] Define self-inductance of a coil. Derive an expression for the self-inductance of a long solenoid of length l, cross-sectional area A, and having N turns.
SOLUTION:
**Step 1: Definition of Self-Inductance:**
Self-inductance (L) of a coil is defined as the total magnetic flux linked with the coil when unit electric current flows through it: Φ = L · I, or as the opposing EMF induced in the coil per unit rate of change of current: e = - L · (dI / dt). SI Unit: Henry (H).
**Step 2: Derivation for Solenoid:**
1. Consider a long solenoid of length l, cross-sectional area A, having N turns (number of turns per unit length n = N / l).
2. When current I flows through the solenoid, the uniform magnetic field inside is:
   B = μ₀ · n · I = μ₀ · (N / l) · I.
3. Magnetic flux linked through each turn of the solenoid:
   Φ_turn = B · A = [ μ₀ · (N / l) · I ] · A.
4. Total magnetic flux linkage for all N turns:
   N · Φ = N · [ μ₀ · (N / l) · I · A ] = [ (μ₀ N² A) / l ] · I.
5. By definition of self-inductance, N Φ = L · I:
   L · I = [ (μ₀ N² A) / l ] · I
   => **L = (μ₀ N² A) / l = μ₀ n² A l**.
**CBSE Marking Rubric:**
- 1 Mark for definition of self-inductance with unit Henry.
- 1 Mark for writing B = μ₀(N/l)I and total flux NΦ = (μ₀N²A/l)I.
- 1 Mark for concluding L = μ₀N²A/l.

QUESTION: Q4. [5 Marks Structured Problem, CBSE 2024 (55/1/2)]
(a) What are eddy currents? How are they produced? Give two applications where eddy currents are beneficially used, and state one method to minimize undesirable eddy current losses in transformers.
(b) A rectangular wire loop of sides 8 cm and 2 cm with a small cut is moving out of a region of uniform magnetic field of magnitude 0.3 T directed normal to the loop with a constant velocity of 1.0 cm/s. What is the EMF developed across the cut if the motion is normal to the (i) longer side, (ii) shorter side of the loop? For how long does the induced voltage last in each case?
SOLUTION:
**(a) Eddy Currents Theory:**
1. **Definition & Production:** Eddy currents are circulating loops of electrical current induced in the bulk body of metallic conductors whenever the conductor is subjected to a changing magnetic flux, in accordance with Lenz's law.
2. **Two Beneficial Applications:**
   - **Magnetic Braking in Electric Trains:** Electromagnets placed above rails induce strong opposing eddy currents in the rotating metallic wheels, smoothly halting the train without mechanical brake-shoe wear.
   - **Induction Furnace:** High-frequency alternating magnetic fields induce massive eddy currents in metals, generating immense Joule heat to melt scrap alloys rapidly.
3. **Minimization in Transformers:** Transformer cores are constructed using thin, laminated sheets of soft iron insulated from one another by a lacquer or varnish coating, which breaks the large circulating eddy current paths.

**(b) Numerical Notebook Solution:**
- **Given:**
  - Dimensions: Length l = 8 cm = 0.08 m; Width w = 2 cm = 0.02 m
  - Magnetic field B = 0.3 T
  - Velocity v = 1.0 cm/s = 0.01 m/s = 10⁻² m/s
**(i) Case 1: Motion Normal to Longer Side (l = 8 cm):**
- The side cutting across the magnetic field lines is the longer side (l = 0.08 m).
- Induced EMF:
  e₁ = B · l · v = 0.3 T × 0.08 m × 0.01 m/s = **2.4 × 10⁻⁴ V = 0.24 mV**.
- Distance moved to completely exit the field is width w = 2 cm = 0.02 m:
  Time t₁ = distance / velocity = (0.02 m) / (0.01 m/s) = **2.0 seconds**.
**(ii) Case 2: Motion Normal to Shorter Side (w = 2 cm):**
- The side cutting across the magnetic field lines is the shorter side (w = 0.02 m).
- Induced EMF:
  e₂ = B · w · v = 0.3 T × 0.02 m × 0.01 m/s = **6.0 × 10⁻⁵ V = 0.06 mV**.
- Distance moved to exit field is length l = 8 cm = 0.08 m:
  Time t₂ = (0.08 m) / (0.01 m/s) = **8.0 seconds**.
**Final Answer:**
(i) Normal to longer side: EMF is **2.4 × 10⁻⁴ V**, lasting for **2.0 s**.
(ii) Normal to shorter side: EMF is **6.0 × 10⁻⁵ V**, lasting for **8.0 s**.
**CBSE Marking Rubric:**
- 2 Marks for eddy currents explanation, two applications, and laminated core mitigation.
- 1.5 Marks for Case (i) EMF (2.4 × 10⁻⁴ V) and time (2.0 s).
- 1.5 Marks for Case (ii) EMF (6.0 × 10⁻⁵ V) and time (8.0 s).`;
  }

  // CHAPTER 7: Alternating Current
  if (
    chapterLower.includes('alternating current') ||
    chapterLower.includes('lcr') ||
    chapterLower.includes('transformer') ||
    chapterLower === 'p7'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (55/1/1)] In a series LCR circuit at electrical resonance, the impedance of the circuit is:
(A) Zero
(B) Equal to inductive reactance X_L
(C) Equal to capacitive reactance X_C
(D) Purely resistive and equal to R
SOLUTION:
**Correct Answer:** (D) Purely resistive and equal to R
**Notebook Explanation:**
At resonance, inductive reactance equals capacitive reactance: X_L = X_C.
Therefore, total impedance Z = √[ R² + (X_L - X_C)² ] = √[ R² + 0 ] = R (minimum and purely resistive).
**CBSE Marking Rubric:**
- 1 Mark for option (D).

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] The primary coil of an ideal step-up transformer has 100 turns and the transformation ratio is 10. If the input power and voltage are 1100 W and 220 V respectively, calculate: (i) number of turns in the secondary coil, and (ii) current in the secondary coil.
SOLUTION:
**Given:**
- Primary turns N_p = 100
- Transformation ratio k = N_s / N_p = 10
- Input power P_in = 1100 W
- Primary voltage V_p = 220 V
**To Find:** (i) Secondary turns N_s, (ii) Secondary current I_s
**Formula:**
- N_s = k · N_p
- For an ideal transformer, Output Power = Input Power: P_out = V_s · I_s = P_in
- Secondary voltage: V_s = k · V_p
**Substitution & Calculation:**
(i) Secondary turns:
N_s = 10 × 100 = **1000 turns**.
(ii) Secondary voltage:
V_s = 10 × 220 V = 2200 V.
Secondary current:
I_s = P_out / V_s = 1100 W / 2200 V = **0.5 A**.
**Final Answer:**
(i) Secondary coil has **1000 turns**.
(ii) Secondary current is **0.5 A**.
**CBSE Marking Rubric:**
- 1 Mark for N_s = 1000 turns.
- 1 Mark for V_s = 2200 V and I_s = 0.5 A.

QUESTION: Q3. [3 Marks Derivation, CBSE 2023 (Foreign)] A series LCR circuit is connected to an alternating voltage source V = V₀ sin(ωt). Using phasor diagram, derive the expression for the impedance of the circuit and phase angle between voltage and current.
SOLUTION:
**Step 1: Phasor Setup:**
- Let current in the series circuit be I = I₀ sin(ωt).
- Voltage across resistor: V_R = I₀ R, in phase with current I.
- Voltage across inductor: V_L = I₀ X_L, leads current by π/2 (90°).
- Voltage across capacitor: V_C = I₀ X_C, lags current by π/2 (90°).
**Step 2: Resultant Phasor Voltage:**
- Phasors V_L and V_C lie along the same line in opposite directions.
- Their net reactive phasor is (V_L - V_C) pointing along +y direction (assuming V_L > V_C).
- The net source voltage V is the vector sum of V_R and (V_L - V_C) at right angles:
  V₀² = V_R² + (V_L - V_C)²
  V₀² = (I₀ R)² + (I₀ X_L - I₀ X_C)²
  V₀² = I₀² [ R² + (X_L - X_C)² ].
**Step 3: Impedance Z:**
- V₀ = I₀ · √[ R² + (X_L - X_C)² ].
- **Impedance Z = V₀ / I₀ = √[ R² + (X_L - X_C)² ]**.
**Step 4: Phase Angle Φ:**
- From the right-angled impedance triangle:
  **tanΦ = (V_L - V_C) / V_R = (X_L - X_C) / R**.
- The applied voltage leads current by phase angle Φ = tan⁻¹[ (X_L - X_C) / R ].
**CBSE Marking Rubric:**
- 1 Mark for clear phasor diagram with labeled V_R, V_L, V_C, and resultant V₀.
- 1 Mark for algebraic steps to get Z = √[R² + (X_L - X_C)²].
- 1 Mark for tanΦ = (X_L - X_C)/R.

QUESTION: Q4. [5 Marks Structured Problem, CBSE 2024 (55/2/1)]
(a) Define power factor in an AC circuit. What is the value of power factor for: (i) a purely resistive circuit, and (ii) a purely inductive circuit? What is meant by wattless current?
(b) A series LCR circuit has R = 20 Ω, L = 1.5 H, and C = 35 μF connected to a variable frequency 220 V AC supply. Calculate: (i) the resonant angular frequency, (ii) the impedance and current at resonance, and (iii) the Quality factor (Q) of the circuit.
SOLUTION:
**(a) Power Factor & Wattless Current:**
1. **Power Factor (cosΦ):** Power factor is defined as the ratio of true average power dissipated in an AC circuit to the apparent power: cosΦ = P_true / P_apparent = R / Z.
   - (i) Purely Resistive Circuit: Φ = 0° => **cosΦ = 1** (Maximum power loss).
   - (ii) Purely Inductive Circuit: Φ = 90° => **cosΦ = 0** (Zero power loss).
2. **Wattless Current:** The reactive component of alternating current (I_rms sinΦ) that is at 90° phase with voltage consumes zero net power over a complete cycle (P = V_rms I_rms sinΦ cos 90° = 0). It is called wattless current.

**(b) Numerical Notebook Solution:**
- **Given:**
  - Resistance R = 20 Ω
  - Inductance L = 1.5 H
  - Capacitance C = 35 μF = 35 × 10⁻⁶ F
  - Supply voltage V_rms = 220 V
**(i) Resonant Angular Frequency (ω_r):**
- Formula: ω_r = 1 / √(L · C)
- Substitution:
  ω_r = 1 / √[ 1.5 × (35 × 10⁻⁶) ] = 1 / √[ 52.5 × 10⁻⁶ ] = 1 / [ 7.245 × 10⁻³ ]
  **ω_r = 138.0 rad/s**.
**(ii) Impedance and Current at Resonance:**
- At resonance, X_L = X_C:
  **Impedance Z = R = 20 Ω**.
- RMS Current at resonance:
  **I_rms = V_rms / Z = 220 V / 20 Ω = 11.0 A**.
**(iii) Quality Factor (Q):**
- Formula: Q = (ω_r · L) / R
- Substitution:
  Q = (138.0 rad/s × 1.5 H) / (20 Ω) = 207 / 20 = **10.35**.
**Final Answer:**
(i) Resonant angular frequency is **138.0 rad/s**.
(ii) Impedance is **20 Ω** and current is **11.0 A**.
(iii) Quality factor Q is **10.35** (dimensionless).
**CBSE Marking Rubric:**
- 2 Marks for power factor definitions and wattless current explanation.
- 1 Mark for resonant frequency ω_r = 138.0 rad/s.
- 1 Mark for Z = 20 Ω and I = 11 A.
- 1 Mark for Q = 10.35.`;
  }

  return null;
}
