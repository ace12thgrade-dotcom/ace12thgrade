// services/subjects/physics/part1.ts
// Chapters 1 to 7: Electrostatics, Potential & Capacitance, Current Electricity, Moving Charges, Magnetism, EMI, AC

export function getPhysicsPart1Notes(chapterLower: string): string | null {
  // CHAPTER 1: Electric Charges and Fields
  if (
    (chapterLower.includes('charge') && !chapterLower.includes('moving')) ||
    (chapterLower.includes('field') && !chapterLower.includes('magnetic') && !chapterLower.includes('potential')) ||
    chapterLower.includes('coulomb') ||
    chapterLower === 'p1' ||
    chapterLower.includes('electric charges and fields')
  ) {
    return `TOPIC: Chapter 1: Electric Charges and Fields
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Electric Charge and Fundamental Properties:**
**DEFINITION:** Electric charge is an intrinsic scalar property of elementary particles (electrons and protons) of matter which gives rise to electrostatic forces between them. SI Unit: Coulomb (C). Dimensional formula: [A·T].

**PRINCIPLE:** Quantization of Charge states that electric charge always exists in discrete integral multiples of the elementary electronic charge e (1.602176 × 10⁻¹⁹ C): q = ± n · e.
**FORMULA:** Quantization of Charge: q = ± n · e
- q = Total net electric charge (C)
- n = Integer number of electrons gained or lost (n = 1, 2, 3...)
- e = Elementary electronic charge = 1.602 × 10⁻¹⁹ C
When to apply: Applies to all microscopic and macroscopic electron transfer operations.
Examiner Trap: At macroscopic scales (microcoulombs), quantization can be ignored and treated as continuous charge distribution because e is so small.

**PRINCIPLE:** Conservation of Charge states that in any isolated physical or chemical system, the algebraic sum of all electric charges remains strictly constant over time. Charge can neither be created nor destroyed; it can only be transferred from one body to another (e.g., pair production, nuclear fission, radioactive decay).

**PRINCIPLE:** Additivity of Charge states that the total electric charge of an extended system containing point charges q₁, q₂, ..., qₙ is the direct algebraic sum of the individual charges, taking their respective positive and negative signs into account: Q_total = Σ qᵢ.

**Table: Comparison of Electrical Classification of Materials:**
| Material Type | Free Electron Density | Charge Mobility | Behavior in External Field | Examples |
| :--- | :--- | :--- | :--- | :--- |
| **Conductors** | Very High (~10²⁹ m⁻³) | Mobile charges move freely across entire volume | Internal field becomes zero (E_in = 0); all charge stays on outer surface | Copper, Aluminium, Iron, Human Body |
| **Insulators** | Negligible (~0) | Electrons tightly bound to atomic nuclei | Charges cannot migrate; remain localized where created | Glass, Rubber, Dry Wood, Mica, Porcelain |
| **Dielectrics** | Insulators that polarize | Bound dipole charges shift slightly | Develops internal induced polarization field opposing external field | Water, Wax, Transformer Oil, Paper |

- **Methods of Charging Bodies:**
  - **Charging by Friction:** Transfer of valence electrons from the body with lower work function to the body with higher work function when rubbed together (e.g., glass rod rubbed with silk becomes positive; plastic rod rubbed with fur becomes negative).
  - **Charging by Conduction:** Direct physical contact between a charged body and an uncharged conducting body. Both share the total charge according to their capacitances.
  - **Charging by Induction:** Electrification of a conductor by bringing a charged object nearby without physical contact. The opposite charge is attracted to the near end, while the like charge is repelled to the far end (and can be neutralized by grounding).

**2. Coulomb's Law, Vector Formulation & Dielectric Medium:**
**LAW:** Coulomb's Law states that the electrostatic force of attraction or repulsion between two stationary point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them, acting strictly along the line joining the centers of the two charges.

**FORMULA:** Coulomb's Law (Electrostatic Force): F = (1 / 4πε₀) · (|q₁ · q₂| / r²)
- F = Magnitude of electrostatic force (N)
- q₁, q₂ = Magnitudes of the two point charges (C)
- r = Distance between the centers of the charges (m)
- ε₀ = Permittivity of free space = 8.854 × 10⁻¹² C²/(N·m²)
- 1/(4πε₀) = Coulomb constant k ≈ 9.0 × 10⁹ N·m²/C²
When to apply: Strictly valid for stationary point charges at rest.
Examiner Trap: Convert all distances from centimeters (10⁻² m) or millimeters (10⁻³ m) and charges from μC (10⁻⁶ C) or nC (10⁻⁹ C) to SI base units before squaring!

- **Coulomb's Law in Vector Form:**
  - Let r₁₂ be the vector pointing from charge q₁ to charge q₂, and r̂₁₂ be the unit vector along that line.
  - The force F₂₁ exerted on charge q₂ by charge q₁ is: **F₂₁ = [ 1 / (4πε₀) ] · [ (q₁ q₂) / r² ] · r̂₁₂**
  - Similarly, the force F₁₂ exerted on charge q₁ by charge q₂ is: **F₁₂ = [ 1 / (4πε₀) ] · [ (q₁ q₂) / r² ] · r̂₂₁**
  - Since r̂₂₁ = - r̂₁₂: **F₁₂ = - F₂₁**.
  - **Significance:** Coulomb's law rigorously obeys Newton's Third Law of Motion. Electrostatic forces between two point charges are equal in magnitude, opposite in direction, and act along the central line (central conservative forces).

- **Effect of Dielectric Medium (Relative Permittivity or Dielectric Constant K):**
  - In an insulating medium of permittivity ε, Coulomb's force between the same charges at the same distance is reduced: **F_med = (1 / 4πε) · (|q₁ q₂| / r²) = F_vac / K**
  - Dielectric constant K (or relative permittivity ε_r) is defined as: **K = ε_r = ε / ε₀ = F_vacuum / F_medium ≥ 1**.
  - Reference values: For vacuum K = 1.0; For dry air K ≈ 1.00054 ≈ 1; For pure water K ≈ 81; For metals/conductors K = ∞.

- **Principle of Superposition for Multiple Charges:**
  - Electrostatic force on any test charge q₀ due to a group of stationary charges q₁, q₂, ..., qₙ is the vector sum of the individual Coulomb forces exerted on it by each charge independently: **F_net = F₀₁ + F₀₂ + F₀₃ + ... + F₀ₙ = Σ [ 1/(4πε₀) ] · [ (q₀ qᵢ) / r₀ᵢ² ] · r̂ᵢ₀**.
  - The presence of neighboring charges does NOT alter the pairwise force between any two charges.

**3. Electric Field Intensity & Field Lines:**
**DEFINITION:** Electric field intensity E at any point in space is defined as the electrostatic force experienced per unit positive test charge q₀ placed at that point, in the limit that the test charge is vanishingly small so as not to disturb the source charge distribution: E = lim_(q₀ → 0) [ F / q₀ ]. SI Unit: Newton per Coulomb (N/C) or Volt per meter (V/m). Dimensional formula: [M L T⁻³ A⁻¹].

- **Electric Field of an Isolated Point Charge Q:**
  **E = (1 / 4πε₀) · (Q / r²) · r̂** (Directed radially outward away from +Q; radially inward toward -Q).

- **Five Fundamental Properties of Electric Field Lines (NCERT Standards):**
  - **Origin and Termination:** Field lines emerge smoothly from positive charges and terminate on negative charges. For an isolated single charge, they start or end at infinity.
  - **Tangential Direction:** The tangent drawn to an electric field line at any point gives the unique direction of the electric field vector E at that point.
  - **No Intersection Rule:** Two electric field lines can NEVER cross each other. If they crossed, two tangents could be drawn at the intersection point, representing two simultaneous directions of electric field at that single point, which is physically impossible.
  - **No Closed Loops:** Electric field lines never form closed loops. This reflects the conservative nature of electrostatic fields (∮ E · dl = 0).
  - **Normal to Conductor Surface:** Electric field lines are always strictly perpendicular (normal) to the surface of a charged conductor in electrostatic equilibrium (no tangential component).

**4. Electric Dipole, Field Derivations & Dynamics in Uniform Field:**
**DEFINITION:** An electric dipole is a system of two equal and opposite point charges (+q and -q) separated by a small distance 2a.
**FORMULA:** Electric Dipole Moment: p = q · (2a)
- p = Electric dipole moment vector (C·m)
- q = Magnitude of either charge (C)
- 2a = Vector distance separating the two opposite charges (m)
When to apply: Dipole moment vector p is strictly directed along the dipole axis from the negative charge (-q) to the positive charge (+q).
Examiner Trap: In Chemistry, dipole arrows point from electropositive to electronegative atom (opposite of Physics convention)! In Physics, p ALWAYS points from -q to +q. Also remember 2a is the total separation, do not multiply by 2 again.

DIAGRAM: electric_dipole | Electric Field of an Electric Dipole on Axial and Equatorial Points (NCERT Fig 1.15)

**DERIVATION:** Electric Field at Axial Point P of an Electric Dipole (End-on position, distance r from midpoint O, r > a):
Step 1: Distance of P from +q is (r - a); Distance of P from -q is (r + a).
Step 2: Magnitude of field due to +q: E₊ = (1 / 4πε₀) · q / (r - a)² (directed away from +q, along p̂).
Step 3: Magnitude of field due to -q: E₋ = (1 / 4πε₀) · q / (r + a)² (directed toward -q, opposite to p̂).
Step 4: Resultant axial electric field:
E_axial = E₊ - E₋ = (q / 4πε₀) · [ 1/(r - a)² - 1/(r + a)² ]
E_axial = (q / 4πε₀) · [ (r + a)² - (r - a)² ] / [ (r² - a²)² ]
E_axial = (q / 4πε₀) · [ 4ar ] / [ (r² - a²)² ]
Step 5: Substitute dipole moment p = q · (2a):
**E_axial = (1 / 4πε₀) · [ 2pr / (r² - a²)² ] · p̂**
Step 6: For a short dipole (r >> a), a² can be neglected compared to r²:
**E_axial = (1 / 4πε₀) · (2p / r³) · p̂** (Parallel to dipole moment vector p).

**DERIVATION:** Electric Field at Equatorial Point Q of an Electric Dipole (Broadside-on position, distance r on perpendicular bisector):
Step 1: Distance of point Q from each charge is identical: d = √(r² + a²).
Step 2: Magnitudes of fields due to +q and -q are equal: E₊ = E₋ = (1 / 4πε₀) · q / (r² + a²).
Step 3: Resolve E₊ and E₋ into rectangular components:
- Perpendicular components: E₊ sinθ and E₋ sinθ are equal in magnitude and opposite in direction, so they cancel out completely: E_y = E₊ sinθ - E₋ sinθ = 0.
- Parallel components: E₊ cosθ and E₋ cosθ point in the same direction, antiparallel to dipole moment vector p̂.
Step 4: Net equatorial electric field:
E_eq = - [ E₊ cosθ + E₋ cosθ ] · p̂ = - 2 E₊ cosθ · p̂
Step 5: From right triangle, cosθ = a / √(r² + a²).
E_eq = - 2 · [ (1 / 4πε₀) · q / (r² + a²) ] · [ a / (r² + a²)^(1/2) ] · p̂
E_eq = - (1 / 4πε₀) · [ (2qa) / (r² + a²)^(3/2) ] · p̂
Step 6: Substitute p = 2qa:
**E_eq = - (1 / 4πε₀) · [ p / (r² + a²)^(3/2) ] · p̂**
Step 7: For a short dipole (r >> a):
**E_eq = - (1 / 4πε₀) · (p / r³) · p̂** (Antiparallel to dipole moment vector p).

**Table: Comparison of Axial vs Equatorial Electric Field of Dipole:**
| Parameter | Axial Field (E_axial) | Equatorial Field (E_equatorial) | Key Ratio / Significance |
| :--- | :--- | :--- | :--- |
| **Magnitude (Short Dipole)** | (1/4πε₀) · (2p / r³) | (1/4πε₀) · (p / r³) | **E_axial = 2 · E_equatorial** |
| **Vector Direction** | Parallel to dipole moment p (along +p̂) | Antiparallel to dipole moment p (along -p̂) | Angle between E_axial and E_eq is 180° |
| **Distance Dependency** | Inversely proportional to r³ (1/r³) | Inversely proportional to r³ (1/r³) | Drops much faster than point charge (1/r²) |
| **Electrostatic Potential V** | V = (1/4πε₀) · (p / r²) | V = 0 at all equatorial points | No work done moving charge along bisector |

**DERIVATION:** Torque on Electric Dipole in Uniform Electric Field:
Step 1: Consider dipole of charges ±q separated by 2a placed at angle θ to uniform electric field E.
Step 2: Force on charge +q is F₊ = + qE along E; Force on charge -q is F₋ = - qE opposite to E.
Step 3: Net translational force: F_net = F₊ + F₋ = +qE - qE = **0 N** (No translational acceleration in uniform field).
Step 4: Since forces are equal, opposite, and have non-collinear lines of action, they form a couple that exerts a restoring torque:
τ = Force × Perpendicular distance between lines of action = (qE) · (2a sinθ) = (q · 2a) · E sinθ.
Step 5: In vector cross product notation:
**τ = p × E = p · E · sinθ**
- Maximum torque occurs at θ = 90°: τ_max = pE.
- Minimum torque occurs at θ = 0° and θ = 180°: τ = 0.

**DERIVATION:** Work Done and Potential Energy of Dipole in Uniform Electric Field:
Step 1: Small work done against electrostatic torque in rotating dipole by small angle dθ: dW = τ_ext · dθ = (pE sinθ) dθ.
Step 2: Total work done in rotating dipole from angle θ₁ to θ₂:
W = ∫_(θ₁)^(θ₂) pE sinθ dθ = pE [ - cosθ ]_(θ₁)^(θ₂) = **pE (cosθ₁ - cosθ₂)**.
Step 3: Electrostatic Potential Energy U (taking reference zero energy at θ₁ = 90°):
**U = - p · E = - p · E · cosθ**
- **Stable Equilibrium (θ = 0°):** Dipole aligns with E. Torque τ = 0, Potential Energy U_min = - pE (Minimum).
- **Unstable Equilibrium (θ = 180°):** Dipole opposite to E. Torque τ = 0, Potential Energy U_max = + pE (Maximum).

**5. Electric Flux & Gauss's Theorem:**
**DEFINITION:** Electric flux Φ_E through an elemental area dA is defined as the scalar dot product of the electric field vector E and the outward area vector dA: dΦ_E = E · dA = E · dA · cosθ. Total electric flux over any surface S: **Φ_E = ∫_S E · dA**. SI Unit: N·m²/C or Volt·meter (V·m). Dimensional Formula: [M L³ T⁻³ A⁻¹].
- **Physical Meaning:** Proportional to the net number of electric field lines passing perpendicularly through the given surface.

**LAW:** Gauss's Theorem states that the total outward electric flux through any closed Gaussian surface enclosing a volume V in vacuum is equal to 1/ε₀ times the total net electric charge enclosed inside the surface: Φ_E = ∮ E · dA = Q_enclosed / ε₀.

- **Crucial NCERT Invariants of Gauss's Law:**
  - **Surface Independence:** Gauss's Law is valid for any closed surface, regardless of its shape or size.
  - **Enclosed Charges Only:** The term Q_enclosed includes the net algebraic sum of all charges enclosed within the surface.
  - **Outside Charges:** Charges located OUTSIDE the Gaussian surface contribute to the local electric field E at any point on the surface, but contribute NET ZERO to the total closed surface integral ∮ E · dA.
  - **Discrete Charge Boundary:** The Gaussian surface must not pass directly through any discrete point charge (field undefined at point charge location).

**6. Gauss's Law: Three Core NCERT Symmetrical Derivations:**

**DERIVATION:** Electric Field due to an Infinitely Long Straight Uniformly Charged Wire:
Step 1: Consider an infinitely long, thin straight wire carrying uniform linear charge density λ = q / L (C/m).
Step 2: By cylindrical symmetry, electric field E is directed radially outward everywhere perpendicular to the wire axis.
Step 3: Choose a coaxial cylindrical Gaussian surface of radius r and length l with the wire along its axis.
Step 4: The Gaussian surface comprises three parts:
- Planar top circular face (S₁): E ⟂ dA₁ (θ = 90°) => Φ₁ = ∮ E · dA₁ cos 90° = 0.
- Planar bottom circular face (S₂): E ⟂ dA₂ (θ = 90°) => Φ₂ = ∮ E · dA₂ cos 90° = 0.
- Curved cylindrical face (S₃): E is parallel to dA₃ (θ = 0°) at every point, and magnitude |E| is constant:
  Φ₃ = ∮ E · dA₃ cos 0° = E ∮ dA₃ = E · (2π r l).
Step 5: Total flux through closed cylinder: Φ = Φ₁ + Φ₂ + Φ₃ = E · (2π r l).
Step 6: Total charge enclosed by length l: Q_enclosed = λ · l.
Step 7: Applying Gauss's Theorem:
E · (2π r l) = (λ · l) / ε₀
**E = λ / (2πε₀ · r) · r̂**
- Dependency: Field falls off as 1/r (E ∝ 1/r). Graph of E versus r is a rectangular hyperbola.

**DERIVATION:** Electric Field due to Uniformly Charged Infinite Plane Sheet:
Step 1: Consider an infinite, thin, non-conducting plane sheet with uniform surface charge density σ = q / A (C/m²).
Step 2: By planar symmetry, the electric field E is directed perpendicularly away from the sheet on both sides (normal to the sheet).
Step 3: Construct a Gaussian cylindrical pillbox of cross-sectional area A cutting perpendicularly through the sheet.
Step 4: The curved cylindrical surface has dA perpendicular to E, so flux through the curved surface is zero (Φ_curved = 0).
Step 5: The two circular planar end-caps are parallel to field E (angle 0° between E and dA):
Total Flux Φ = E · A + E · A = 2 E A.
Step 6: Enclosed charge within cylinder: Q_enclosed = σ · A.
Step 7: Applying Gauss's Theorem:
2 E A = (σ · A) / ε₀
**E = σ / (2ε₀) · n̂**
- Remarkable Property: Field is completely INDEPENDENT of the distance r from the sheet!
- **Special Case - Oppositely Charged Parallel Metal Plates:**
  - Between the plates: E_in = σ/(2ε₀) + σ/(2ε₀) = **σ / ε₀**.
  - Outside the plates: E_out = σ/(2ε₀) - σ/(2ε₀) = **0 N/C**. (Basis of parallel-plate capacitors).

**DERIVATION:** Electric Field due to Uniformly Charged Thin Spherical Shell (Radius R, Total Charge Q):
Step 1: Consider a thin spherical shell of radius R carrying total charge Q with surface density σ = Q / (4π R²).
Step 2: **Case (i) - At Outside Point P (r ≥ R):**
- Draw concentric spherical Gaussian surface of radius r (r ≥ R).
- By spherical symmetry, E is radial and constant in magnitude everywhere on the sphere:
- Flux Φ = ∮ E · dA = E · (4π r²).
- Enclosed charge Q_enclosed = Q.
- Applying Gauss's Law: E · (4π r²) = Q / ε₀ => **E_out = (1 / 4πε₀) · (Q / r²) = (σ / ε₀) · (R² / r²)**.
- Significance: For points outside, the shell behaves as if its entire charge Q were concentrated at its geometric center.
Step 3: **Case (ii) - At Surface Point (r = R):**
- **E_surface = (1 / 4πε₀) · (Q / R²) = σ / ε₀**. (Maximum value).
- Discontinuity in electric field across the charged surface is ΔE = σ / ε₀.
Step 4: **Case (iii) - At Inside Point P (r < R):**
- Draw concentric spherical Gaussian surface of radius r (r < R).
- Since all charge resides strictly on the outer shell, enclosed charge Q_enclosed = 0.
- Applying Gauss's Law: E · (4π r²) = 0 / ε₀ => **E_in = 0 N/C**.

**Table: Comparative Summary of the Three Gaussian Applications:**
| Charge Distribution | Symmetry & Gaussian Surface | Enclosed Charge (Q_enc) | Governing Electric Field (E) | Radial Dependence |
| :--- | :--- | :--- | :--- | :--- |
| **Infinite Straight Wire** | Coaxial cylinder of radius r, length l | Q_enc = λ · l | **E = λ / (2πε₀ r)** | E ∝ 1/r |
| **Infinite Plane Sheet** | Cylindrical pillbox with cross-section A | Q_enc = σ · A | **E = σ / (2ε₀)** | E is independent of r |
| **Spherical Shell (Outside r ≥ R)** | Concentric sphere of radius r | Q_enc = Q | **E = (1/4πε₀) · (Q / r²)** | E ∝ 1/r² |
| **Spherical Shell (Inside r < R)** | Concentric sphere of radius r | Q_enc = 0 | **E = 0** | Field strictly zero |

**7. Electrostatic Shielding & Practical Applications:**
**DEFINITION:** Electrostatic shielding is the phenomenon of protecting a delicate region of space from the influence of external electric fields by enclosing it within a conducting cavity.
- **Physical Mechanism:** When an external electric field is applied, mobile free electrons in the conductor redistribute instantly along the outer boundary until the internal induced field precisely cancels the external field, making E = 0 everywhere inside the cavity.

**APPLICATION:** Practical Applications & Board Case Studies of Electrostatic Shielding:
- **Lightning Protection:** Staying inside a car or metallic bus during a thunderstorm is far safer than standing under a tree because the metal frame behaves as a Faraday cage, channeling lightning current harmlessly over the outer shell into the ground.
- **Coaxial Cables:** Sensitive audio and radio frequency transmission cables use an outer grounded metallic braid to prevent high-frequency electromagnetic noise from corrupting the internal signal wire.
- **Delicate Laboratory Instruments:** Sensitive meters (e.g., gold-leaf electroscope, quadrant electrometer) are enclosed within grounded metallic cages.

**8. High-Yield Examiner Traps & Common Mistakes:**
**INSIGHT:** EXAMINER TRAP 1 (Dipole Distance Separation): When a board question states "a dipole consisting of charges ±2 μC separated by 5 cm", the separation 2a = 5 cm = 0.05 m. Never make the mistake of setting a = 5 cm and calculating 2a = 10 cm!

**INSIGHT:** EXAMINER TRAP 2 (Gaussian Flux Independence): If the radius of a Gaussian spherical surface enclosing charge Q is doubled or tripled, the net electric flux Φ_E = Q / ε₀ remains COMPLETELY UNCHANGED because flux depends only on enclosed charge! (However, the electric field intensity E at the surface drops to 1/4th!).

**INSIGHT:** EXAMINER TRAP 3 (Dipole in Uniform vs Non-Uniform Field): In a UNIFORM electric field, net translational force F_net = 0, but torque τ = pE sinθ can be non-zero. In a NON-UNIFORM electric field, the dipole experiences BOTH a net translational force (F_net ≠ 0) and a rotational torque (τ ≠ 0).

**INSIGHT:** EXAMINER TRAP 4 (Field Line Tangents vs Path of Charge): An electric field line represents the actual trajectory of a free positive test charge ONLY if the field line is a straight line. If the field line is curved, the particle's velocity is tangent to the line, but inertia causes it to deviate from the curved trajectory!

**INSIGHT:** EXAMINER TRAP 5 (Non-conducting Sheet vs Metal Plate): For an infinitely thin non-conducting plane sheet with charge on one surface, E = σ / (2ε₀). For a thick conducting metal plate where charge distributes on both faces, E = σ / ε₀ (twice as large).

**9. Quick Revision Points (2026 Boards):**
**KEY POINTS:**
- Quantization of charge: q = ± n e (n = integer, e = 1.602 × 10⁻¹⁹ C).
- Coulomb's Law: F = (1/4πε₀) · (|q₁ q₂| / r²); In medium of dielectric constant K: F_med = F_vac / K.
- Electric field of point charge: E = (1/4πε₀) · (Q / r²) (SI unit: N/C or V/m).
- Electric dipole moment: p = q · (2a) directed from -q to +q (SI unit: C·m).
- Short dipole field on axial line: E_axial = (1/4πε₀) · (2p / r³) along p̂.
- Short dipole field on equatorial line: E_eq = - (1/4πε₀) · (p / r³) along -p̂.
- Ratio of short dipole fields: E_axial / E_equatorial = 2 : 1 (at same distance r).
- Torque on dipole in uniform field: τ = p × E = p E sinθ (Max at 90°, Zero at 0° and 180°).
- Potential energy of dipole: U = - p · E = - p E cosθ (Stable: θ = 0°, U = -pE; Unstable: θ = 180°, U = +pE).
- Gauss's Law: Φ_E = ∮ E · dA = Q_enclosed / ε₀.
- Electric field of infinite straight wire: E = λ / (2πε₀ r) (falls as 1/r).
- Electric field of infinite plane sheet: E = σ / (2ε₀) (independent of r).
- Electric field of thin spherical shell: E_out = (1/4πε₀) · (Q / r²) for r ≥ R; E_in = 0 for r < R.
- Inside any charged conductor cavity, E = 0 (Electrostatic shielding / Faraday cage).`;
  }

  // CHAPTER 2: Electrostatic Potential and Capacitance
  if (
    chapterLower.includes('potential') ||
    chapterLower.includes('capacitance') ||
    chapterLower.includes('capacitor') ||
    chapterLower === 'p2'
  ) {
    return `TOPIC: Chapter 2: Electrostatic Potential and Capacitance
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Electric Potential, Potential Difference & Work:**
**DEFINITION:** Electrostatic potential V at any point in an electric field is the amount of work done per unit positive test charge in bringing it from infinity to that point against the electrostatic force without acceleration: V = W_ext / q₀. SI Unit: Volt (V) = J/C.
- **Potential due to Point Charge Q:** V = (1 / 4πε₀) · (Q / r).
- **Potential due to Electric Dipole:** V(r, θ) = (1 / 4πε₀) · (p cosθ / r²).
  - Axial line (θ = 0°): V = kp / r².
  - Equatorial line (θ = 90°): V = 0 (No work done in moving charge along equatorial plane).
- **Relation between Electric Field and Potential:** E = - dV / dr (Electric field points in direction of steepest decrease of potential).

**2. Equipotential Surfaces:**
**DEFINITION:** An equipotential surface is any surface over which the electric potential has a constant value at every point (V = constant).
- **Core Properties:**
  1. No work is done in moving a test charge over an equipotential surface: W = q · ΔV = 0.
  2. Electric field lines are always perpendicular (normal) to the equipotential surface at every point (since dW = F · dl = q E · dl = 0 => E ⟂ dl).
  3. Two equipotential surfaces can never intersect each other.
  4. Equipotential surfaces are crowded closer in regions of strong electric field and widely spaced in regions of weak field (dr = - dV / E).

**3. Capacitance & Parallel Plate Capacitor Derivations:**
**DEFINITION:** Capacitance C of a conductor is the ratio of electric charge Q on it to its electric potential V: C = Q / V. SI Unit: Farad (F) = C/V. (1 μF = 10⁻⁶ F, 1 pF = 10⁻¹² F).
- **DERIVATION:** Capacitance of Parallel Plate Capacitor with Air:
  Step 1: Two parallel conducting plates of cross-sectional area A separated by distance d with charges +Q and -Q (surface charge densities ±σ = ±Q/A).
  Step 2: Field outside the plates: E_out = σ/(2ε₀) - σ/(2ε₀) = 0.
  Step 3: Field between the plates: E = σ/(2ε₀) + σ/(2ε₀) = σ / ε₀ = Q / (A ε₀).
  Step 4: Potential difference between plates: V = E · d = (Q · d) / (A ε₀).
  Step 5: Capacitance C₀ = Q / V = ε₀ A / d.
- **DERIVATION:** Parallel Plate Capacitor with Dielectric Slab of Thickness t (t < d, Dielectric constant K):
  Step 1: External field in air space of thickness (d - t): E₀ = σ / ε₀.
  Step 2: Reduced field inside dielectric slab of thickness t: E_med = E₀ / K.
  Step 3: Total potential difference V = E₀ (d - t) + E_med · t = E₀ [ (d - t) + t / K ] = [ Q / (A ε₀) ] · [ d - t + t / K ].
  Step 4: Capacitance: C = Q / V = ε₀ A / [ d - t + (t / K) ].
  Step 5: For conducting (metallic) slab (K = ∞): C = ε₀ A / (d - t). If slab fills entire space (t = d): C = K · C₀.
- **Combinations of Capacitors:**
  - **Series:** 1/C_s = 1/C₁ + 1/C₂ + ... + 1/Cₙ. (Charge Q is identical on each capacitor; voltages add: V = V₁ + V₂).
  - **Parallel:** C_p = C₁ + C₂ + ... + Cₙ. (Voltage V is identical across each capacitor; charges add: Q = Q₁ + Q₂).

**4. Energy Stored in Capacitor & Energy Density Derivation:**
- **DERIVATION:** Electrostatic Energy Stored in Capacitor:
  Step 1: At intermediate state of charging, potential across plates is v = q / C.
  Step 2: Small work done in transferring additional charge dq: dW = v · dq = (q / C) dq.
  Step 3: Total work in charging from 0 to Q: W = ∫₀^Q (q / C) dq = (1/C) [ q² / 2 ]₀^Q = Q² / (2C).
  Step 4: Using Q = CV: U = 1/2 C V² = Q² / (2C) = 1/2 Q V.
- **DERIVATION:** Electrostatic Energy Density (u = Energy per unit volume):
  Step 1: Volume between plates = Area × Separation = A · d.
  Step 2: Substitute C = ε₀ A / d and V = E · d into U: U = 1/2 (ε₀ A / d) (E d)² = 1/2 ε₀ E² (A d).
  Step 3: Energy density u = U / (A d) = 1/2 ε₀ E² J/m³.

**5. Common Mistakes & Dielectric Insertion Rules:**
**INSIGHT:** Dielectric slab inserted with BATTERY CONNECTED:
- Potential V remains CONSTANT (= battery EMF).
- Capacitance C increases K times (C' = K C₀).
- Charge Q increases K times (Q' = K Q₀).
- Electric Field E remains CONSTANT (E = V/d).
- Energy U increases K times (U' = 1/2 C' V² = K U₀).
**INSIGHT:** Dielectric slab inserted with BATTERY DISCONNECTED:
- Charge Q remains strictly CONSTANT (isolated plates).
- Capacitance C increases K times (C' = K C₀).
- Potential V decreases K times (V' = V₀ / K).
- Electric Field E decreases K times (E' = E₀ / K).
- Energy U decreases K times (U' = Q² / (2C') = U₀ / K).

**6. Quick Revision Points:**
**KEY POINTS:**
- Point charge potential: V = kq / r; Dipole potential: V = kp cosθ / r².
- Work on equipotential surface is zero; E lines always ⟂ equipotential surface.
- Air capacitor: C₀ = ε₀ A / d; With dielectric: C = K ε₀ A / d.
- Energy: U = 1/2 CV² = Q²/(2C); Energy density: u = 1/2 ε₀ E².
- Loss of energy on sharing charges between C₁ and C₂: ΔU = [ C₁C₂ (V₁ - V₂)² ] / [ 2(C₁ + C₂) ].`;
  }

  // CHAPTER 3: Current Electricity
  if (
    chapterLower.includes('current') ||
    chapterLower.includes('electricity') ||
    chapterLower.includes('drift') ||
    chapterLower.includes('kirchhoff') ||
    chapterLower === 'p3'
  ) {
    return `TOPIC: Chapter 3: Current Electricity
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Electric Current, Drift Velocity & Microscopic Ohm's Law:**
**DEFINITION:** Electric current I is the rate of flow of electric charge across a cross-section of a conductor: I = dq / dt. SI Unit: Ampere (A). Current density j = I / A (vector quantity in direction of positive charge flow; SI Unit: A/m²).
- **Drift Velocity (v_d):** The average velocity with which free electrons in a conductor get drifted towards the positive terminal under the influence of an external electric field.
- **DERIVATION:** Drift Velocity Formula:
  Step 1: Force on an electron in electric field E: F = - e E.
  Step 2: Acceleration a = F / m = - (e E) / m (m = electron mass).
  Step 3: If τ is the average relaxation time (average time between two successive collisions):
  Step 4: v_d = a · τ = - (e E τ) / m. In magnitude: v_d = (e E τ) / m = (e V τ) / (m l).
- **DERIVATION:** Relation between Electric Current and Drift Velocity:
  Step 1: Consider conductor of length l, cross-sectional area A, and free electron number density n.
  Step 2: Total number of free electrons in volume A·l: N = n · A · l.
  Step 3: Total mobile charge Q = N · e = n A l e.
  Step 4: Time taken by electrons to traverse length l: t = l / v_d.
  Step 5: Current I = Q / t = (n A l e) / (l / v_d) => I = n e A v_d.
- **Deduction of Ohm's Law (Microscopic to Macroscopic):**
  Step 1: Substitute v_d = (e V τ) / (m l) into I = n e A v_d:
  Step 2: I = n e A [ (e V τ) / (m l) ] = [ (n e² τ A) / (m l) ] · V.
  Step 3: V / I = [ m / (n e² τ) ] · (l / A) = R (Ohm's Law V = I R).
  Step 4: Electrical Resistivity ρ = m / (n e² τ). Electrical Conductivity σ = 1 / ρ = (n e² τ) / m.
  Step 5: Vector Ohm's Law: j = σ E.

**2. Temperature Dependence of Resistance & Resistivity:**
- For metallic conductors (metals): Resistivity increases with temperature because thermal vibrations of lattice ions increase, decreasing relaxation time τ: ρ_T = ρ₀ (1 + α ΔT), where α is temperature coefficient of resistance (α > 0 for metals).
- For semiconductors (Si, Ge): Resistivity decreases exponentially with temperature (α < 0) because charge carrier density n increases exponentially: n ∝ e^(-E_g / k_B T).
- For alloys (Nichrome, Manganin, Constantan): Very high resistivity and nearly negligible temperature coefficient α ≈ 0. (Hence used to manufacture standard resistance coils).

**3. Cell EMF, Internal Resistance & Combinations:**
**DEFINITION:** Electromotive Force (EMF, E) of a cell is the maximum potential difference between its electrodes when no current is drawn from it (open circuit).
**DEFINITION:** Internal Resistance (r) is the opposition offered by the electrolyte and electrodes of the cell to the internal flow of current.
- **Terminal Potential Difference (V):**
  - While Discharging (delivering current I): V = E - I r  (V < E).
  - While Charging (external source driving current into cell): V = E + I r  (V > E).
  - Formula for internal resistance: r = R · [ (E / V) - 1 ].
- **Cells in Series:** E_eq = E₁ + E₂; r_eq = r₁ + r₂. (If one cell reversed: E_eq = E₁ - E₂).
- **Cells in Parallel:** E_eq / r_eq = E₁ / r₁ + E₂ / r₂ => E_eq = (E₁ r₂ + E₂ r₁) / (r₁ + r₂); r_eq = (r₁ r₂) / (r₁ + r₂).

**4. Kirchhoff's Laws & Wheatstone Bridge:**
**LAW:** Kirchhoff's First Law (Junction Rule): The algebraic sum of all currents meeting at any electrical junction in a network is strictly zero: Σ I = 0 (Based on the Principle of Conservation of Charge).
**LAW:** Kirchhoff's Second Law (Loop Rule): In any closed loop of an electrical network, the algebraic sum of changes in potential is zero: Σ ΔV = 0, or Σ E = Σ (I · R) (Based on the Principle of Conservation of Energy).
- **Sign Conventions:**
  - Traversing loop in direction of current: ΔV = - I R (potential drop).
  - Traversing against current: ΔV = + I R.
  - Traversing cell from negative to positive terminal: ΔV = + E.
  - Traversing cell from positive to negative terminal: ΔV = - E.
- **DERIVATION:** Wheatstone Bridge Balance Condition:
  Step 1: Four resistors P, Q, R, S connected in closed quadrilateral with galvanometer G across BD and cell across AC.
  Step 2: Under balanced condition, no current flows through galvanometer (I_g = 0 => V_B = V_D).
  Step 3: In loop ABDA: - I₁ P + I₂ R = 0 => I₁ P = I₂ R.
  Step 4: In loop BCDB: - I₁ Q + I₂ S = 0 => I₁ Q = I₂ S.
  Step 5: Dividing Eq (1) by Eq (2): (I₁ P) / (I₁ Q) = (I₂ R) / (I₂ S) => P / Q = R / S.

**5. Common Mistakes & Quick Revision:**
**COMMON MISTAKE:** Using V = E - Ir when cell is being charged. When a battery is plugged into a charger, current flows into the positive terminal, so V = E + Ir.
**KEY POINTS:**
- Drift velocity: v_d = eEτ/m = eVτ/(ml); Current: I = neAv_d; Current density: j = ne v_d = σE.
- Resistivity: ρ = m / (n e² τ); Metals: α > 0; Semiconductors: α < 0.
- Cell: V = E - Ir; Internal resistance: r = R(E/V - 1).
- Series cells: E_eq = ΣE, r_eq = Σr; Parallel: E_eq/r_eq = Σ(E/r).
- Balanced Wheatstone Bridge: P / Q = R / S.`;
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
    return `TOPIC: Chapter 4: Moving Charges and Magnetism
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Biot-Savart Law & Circular Loop Derivation:**
**LAW:** Biot-Savart Law states that the magnetic field dB produced at point P by a small current-carrying element I dl is directly proportional to current I, length dl, sine of angle θ between dl and position vector r, and inversely proportional to r²:
**FORMULA:** dB = (μ₀ / 4π) · [ (I dl × r̂) / r² ] = (μ₀ / 4π) · [ (I dl sinθ) / r² ].
- In SI units: μ₀ / 4π = 10⁻⁷ T·m/A (or Wb/(A·m)). Permeability of free space μ₀ = 4π × 10⁻⁷ T·m/A.
- **DERIVATION:** Magnetic Field on the Axis of a Circular Current-Carrying Loop of Radius R at distance x from center:
  Step 1: Consider circular loop of radius R carrying current I. Let P be on axis at distance x from center. Distance from element dl on circumference to P is r = √(R² + x²).
  Step 2: Vector dl is perpendicular to position vector r (θ = 90°): dB = (μ₀/4π) · (I dl) / (R² + x²).
  Step 3: Resolve dB into perpendicular component (dB cosα) and axial component (dB sinα), where sinα = R / r = R / √(R² + x²).
  Step 4: Symmetrical diametrically opposite element produces equal and opposite perpendicular components that cancel: ∮ dB cosα = 0.
  Step 5: Net field is sum of axial components: B = ∮ dB sinα = (μ₀/4π) · [ (I sinα) / (R² + x²) ] · ∮ dl.
  Step 6: Since ∮ dl = 2π R (for single turn) or 2π N R (for N turns):
  Step 7: B_axis = [ μ₀ N I R² ] / [ 2 (R² + x²)^(3/2) ].
  Step 8: Field at Center of Coil (x = 0): B_center = (μ₀ N I) / (2 R).

**2. Ampere's Circuital Law & Solenoid Derivation:**
**LAW:** Ampere's Circuital Law states that the line integral of magnetic field B around any closed loop is equal to μ₀ times the total current enclosed by the loop: ∮ B · dl = μ₀ I_enclosed.
- **Field of Infinitely Long Straight Wire (Radius a, r ≥ a):**
  - Choose circular Amperian loop of radius r: ∮ B · dl = B (2π r) = μ₀ I => B = (μ₀ I) / (2π r).
- **DERIVATION:** Magnetic Field inside Ideal Long Solenoid (n = N/L turns per unit length):
  Step 1: Consider rectangular Amperian loop abcd of length L partly inside and partly outside solenoid.
  Step 2: ∮ B · dl = ∫_a^b B · dl + ∫_b^c B · dl + ∫_c^d B · dl + ∫_d^a B · dl.
  Step 3: Outside solenoid (cd): B ≈ 0. Across sides bc and da: B is perpendicular to dl (B · dl = 0).
  Step 4: Inside solenoid along ab: B is parallel to dl: ∫_a^b B dl = B · L.
  Step 5: Enclosed current = n · L · I.
  Step 6: By Ampere's Law: B · L = μ₀ (n L I) => B = μ₀ n I.

**3. Lorentz Force & Motion in Magnetic Field:**
**FORMULA:** Lorentz Force: F = q (E + v × B).
- Magnetic Force: F_m = q (v × B) = q v B sinθ (acts perpendicular to both v and B => No work is done by magnetic force, speed and kinetic energy remain constant).
- **Case 1 (θ = 90°): Uniform Circular Motion:**
  - Magnetic force provides centripetal force: q v B = m v² / r => Radius r = (m v) / (q B) = p / (q B).
  - Time Period T = 2πr / v = (2π m) / (q B) (Independent of velocity and radius!).
  - Cyclotron frequency: ν = 1 / T = (q B) / (2π m).
- **Case 2 (θ ≠ 0°, 90°): Helical Motion:**
  - Parallel component v_|| = v cosθ remains constant; perpendicular component v_⟂ = v sinθ causes circular motion.
  - Pitch of helix: p = v_|| · T = (2π m v cosθ) / (q B).

**4. Force on Current Conductor & Between Parallel Wires:**
**FORMULA:** Magnetic force on current wire: F = I (L × B) = I L B sinθ.
- **DERIVATION:** Force Between Two Infinitely Long Parallel Current-Carrying Wires:
  Step 1: Wire 1 carries current I₁, Wire 2 carries current I₂ separated by distance d in vacuum.
  Step 2: Field produced by Wire 1 at Wire 2: B₁ = (μ₀ I₁) / (2π d) (Directed into the plane by right-hand rule).
  Step 3: Force on length L of Wire 2: F₂₁ = I₂ L B₁ sin 90° = I₂ L [ (μ₀ I₁) / (2π d) ].
  Step 4: Force per unit length: F / L = (μ₀ I₁ I₂) / (2π d) N/m.
  Step 5: Direction: Currents in SAME direction ATTRACT; currents in OPPOSITE directions REPEL.
- **Definition of 1 Ampere (SI Base Unit):** One Ampere is that steady current which, when flowing through each of two infinitely long straight parallel conductors of negligible cross-section placed 1 meter apart in vacuum, produces between them a force of 2 × 10⁻⁷ Newtons per meter of length.

**5. Moving Coil Galvanometer (MCG):**
**PRINCIPLE:** A current-carrying coil placed in an external magnetic field experiences a deflecting torque τ = N I A B sinθ.
- **Radial Magnetic Field:** Achieved using cylindrical concave magnetic poles and a soft iron core. This ensures the magnetic field lines are always parallel to the plane of the coil (θ = 90° at all positions), making deflecting torque constant: τ_def = N I A B.
- **Restoring Torque:** In phosphor-bronze suspension fiber with torsion constant k: τ_rest = k · θ.
- **At Equilibrium:** N I A B = k θ => Current I = [ k / (N A B) ] · θ = G · θ (Directly linear scale).
- **Sensitivities:**
  - Current Sensitivity: I_s = θ / I = (N A B) / k (rad/A).
  - Voltage Sensitivity: V_s = θ / V = (N A B) / (k · R) (rad/V).
- **Conversion of Galvanometer (Resistance G):**
  - **To Ammeter (Range 0 to I):** Connect small parallel resistance (**Shunt S**): S = (I_g · G) / (I - I_g).
  - **To Voltmeter (Range 0 to V):** Connect high resistance **R in series**: R = (V / I_g) - G.

**6. Quick Revision Points:**
**KEY POINTS:**
- Biot-Savart: dB = (μ₀/4π) (I dl sinθ)/r²; Coil center: B = μ₀NI / 2R.
- Ampere's Law: ∮ B · dl = μ₀ I_enclosed; Solenoid: B = μ₀ n I.
- Force on wire: F = I L B sinθ; Force between wires: F/L = (μ₀ I₁ I₂) / (2π d).
- Circular motion radius: r = mv / qB; Time period: T = 2πm / qB.
- Galvanometer: I = (k / NAB) θ; Ammeter shunt: S = I_g G / (I - I_g); Voltmeter: R = V/I_g - G.`;
  }

  // CHAPTER 5: Magnetism and Matter
  if (
    chapterLower.includes('magnetism and matter') ||
    chapterLower.includes('bar magnet') ||
    chapterLower.includes('earth magnetism') ||
    chapterLower === 'p5'
  ) {
    return `TOPIC: Chapter 5: Magnetism and Matter
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Bar Magnet as an Equivalent Solenoid & Dipole:**
- Magnetic dipole moment of bar magnet: M = m · (2l) (where m is pole strength, SI unit: A·m; M unit: A·m² or J/T).
- For a current-carrying loop: M = N I A (directed normal to plane by right-hand thumb rule).
- **Magnetic Field of Short Bar Magnet:**
  - Axial Line: B_axial = (μ₀ / 4π) · (2M / r³)  (along M).
  - Equatorial Line: B_equatorial = - (μ₀ / 4π) · (M / r³)  (opposite to M).
  - B_axial = 2 B_equatorial.
- **Torque and Potential Energy in Uniform Magnetic Field:**
**FORMULA:** Torque τ = M × B = M B sinθ.
**FORMULA:** Potential Energy U = - M · B = - M B cosθ. (Stable equilibrium at θ = 0°; Unstable at θ = 180°).

**2. Gauss's Law in Magnetism:**
**LAW:** The net magnetic flux through any closed Gaussian surface is always identically zero: ∮ B · dA = 0.
- Physical Significance: Isolated magnetic poles (magnetic monopoles) do NOT exist in nature. Magnetic field lines are continuous closed loops with no beginning or end.

**3. Earth's Magnetic Field & Elements:**
- **Elements of Earth's Magnetic Field:**
  1. **Magnetic Declination (θ):** The angle between geographic meridian and magnetic meridian at a place.
  2. **Magnetic Dip or Inclination (δ):** The angle made by the total magnetic field of Earth B_E with the horizontal direction in the magnetic meridian.
     - At Magnetic Equator: δ = 0° (needle rests perfectly horizontal).
     - At Magnetic Poles: δ = 90° (needle points vertically downwards at North pole).
  3. **Horizontal Component (B_H):**
     - B_H = B_E · cosδ. Vertical component: B_V = B_E · sinδ.
     - tanδ = B_V / B_H; Total field B_E = √(B_H² + B_V²).

**4. Classification of Magnetic Materials:**
- **Diamagnetic Materials (e.g. Bi, Cu, Pb, H₂O, NaCl):**
  - Weakly repelled by magnets; move from stronger to weaker field regions.
  - Relative permeability μ_r < 1 (slightly less than 1); Susceptibility χ is small and negative (-10⁻⁵).
  - Susceptibility is **independent of temperature** (No dipoles).
- **Paramagnetic Materials (e.g. Al, Na, Ca, O₂, Pt):**
  - Weakly attracted by magnets; move from weaker to stronger field regions.
  - Relative permeability μ_r > 1 (slightly greater than 1); Susceptibility χ is small and positive (+10⁻³).
  - Obey Curie's Law: χ = C / T (Susceptibility inversely proportional to absolute temperature).
- **Ferromagnetic Materials (e.g. Fe, Co, Ni, Alnico):**
  - Strongly attracted by magnets; move strongly from weaker to stronger field regions.
  - Retain magnetization; consist of atomic magnetic domains.
  - Relative permeability μ_r >> 1 (thousands); Susceptibility χ is very large and positive (+10³ to 10⁵).
  - Above **Curie Temperature (T_c)**, ferromagnetic material transitions to a paramagnetic material: χ = C / (T - T_c) (Curie-Weiss Law). For Iron, T_c = 1043 K (770 °C).

**5. Quick Revision Points:**
**KEY POINTS:**
- Bar magnet: B_axial = 2km/r³; B_eq = km/r³; Torque: τ = M × B.
- Gauss's Law in magnetism: ∮ B · dA = 0 (No magnetic monopoles).
- Earth magnetism: B_H = B_E cosδ, B_V = B_E sinδ => tanδ = B_V / B_H. At equator δ = 0°, at poles δ = 90°.
- Diamagnetic: χ < 0, temp independent; Paramagnetic: χ > 0, χ ∝ 1/T; Ferromagnetic: χ >> 1, loses ferromagnetism above Curie temp.`;
  }

  // CHAPTER 6: Electromagnetic Induction
  if (
    chapterLower.includes('electromagnetic induction') ||
    chapterLower.includes('faraday') ||
    chapterLower.includes('lenz') ||
    chapterLower.includes('inductance') ||
    chapterLower === 'p6'
  ) {
    return `TOPIC: Chapter 6: Electromagnetic Induction
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Magnetic Flux, Faraday's Laws & Lenz's Law:**
**DEFINITION:** Magnetic flux Φ through a surface of area A placed in magnetic field B is: Φ = B · A = B A cosθ. SI Unit: Weber (Wb) = T·m². (1 Wb = 10⁸ Maxwell).
**LAW:** Faraday's First Law: Whenever the magnetic flux linked with an electric circuit changes, an EMF is induced in the circuit, which lasts as long as the change in flux continues.
**LAW:** Faraday's Second Law: The magnitude of the induced EMF is directly proportional to the time rate of change of magnetic flux linked with the circuit.
**LAW:** Lenz's Law: The polarity of induced EMF is such that it produces a current that opposes the very change in magnetic flux that produced it:
**FORMULA:** e = - dΦ / dt = - N · (dΦ / dt)  (The negative sign represents Lenz's Law).
- **Lenz's Law and Conservation of Energy:** If the induced current aided the flux change, mechanical work would not be required to move a magnet, resulting in creation of electrical energy from nothing, violating the Law of Conservation of Energy. Mechanical work done against the opposing magnetic force is converted into electrical energy.

**2. Motional EMF Derivations:**
- **DERIVATION:** Motional EMF of a Straight Conducting Rod (Length l moving with velocity v perpendicular to B):
  Step 1: Consider conductor rod of length l moving with speed v on U-shaped rails in uniform inward magnetic field B.
  Step 2: Area enclosed by loop of width l and position x: A = l · x.
  Step 3: Magnetic flux linked: Φ = B · A = B · l · x.
  Step 4: Induced EMF e = - dΦ / dt = - d(B l x) / dt = - B l (dx / dt).
  Step 5: Since dx/dt = - v: e = B v l.
  Step 6: If loop has resistance R: Induced current I = e / R = (B v l) / R.
  Step 7: Retarding magnetic force F = I l B = (B² l² v) / R.
  Step 8: Mechanical power applied P = F · v = (B² l² v²) / R = Joule heating power I² R.
- **DERIVATION:** Rotational Motional EMF of a Rod Rotating in Magnetic Field:
  Step 1: Rod of length l rotating with angular frequency ω about one end in perpendicular B.
  Step 2: Linear speed of small element dr at distance r is v = r · ω.
  Step 3: Induced EMF in element: de = B v dr = B (r ω) dr.
  Step 4: Total induced EMF: e = ∫₀^l B ω r dr = B ω [ r² / 2 ]₀^l = 1/2 B ω l².

**3. Eddy Currents:**
**DEFINITION:** Eddy currents (Foucault currents) are circulating loops of electrical current induced within bulk conductors by a changing magnetic field, according to Lenz's law.
- **Undesirable Effect:** Substantial energy dissipation as heat in transformer cores and motor armatures (minimized by using laminated iron cores insulated with varnish).
- **Useful Applications:**
  1. **Magnetic Braking in Trains:** Strong electromagnets induce eddy currents in steel rails, producing smooth opposing braking force without mechanical friction.
  2. **Induction Furnace:** High frequency alternating magnetic field induces large eddy currents in metal to melt it rapidly.
  3. **Electromagnetic Damping:** Galvanometer coil wound on non-magnetic metallic frame stops oscillating quickly due to opposing eddy currents.

**4. Self-Induction & Mutual Induction Derivations:**
**DEFINITION:** Self-Induction is the phenomenon of induction of opposing EMF in a coil when the electric current passing through the same coil changes: Φ = L · I => e = - L (dI / dt). SI Unit: Henry (H) = V·s/A = Wb/A.
- **DERIVATION:** Self-Inductance of a Long Solenoid (Length l, radius r, area A, n turns/m):
  Step 1: Magnetic field inside solenoid carrying current I: B = μ₀ n I.
  Step 2: Flux linked with each turn: Φ_turn = B · A = μ₀ n I A.
  Step 3: Total flux linkage for N = n · l turns: N Φ = N (μ₀ n I A) = (n l) (μ₀ n I A) = μ₀ n² A l I.
  Step 4: Since N Φ = L I: L = μ₀ n² A l = μ₀ (N² / l) A. (With iron core of permeability μ_r: L = μ_r μ₀ n² A l).
- **Energy Stored in an Inductor:**
  - Work done against back EMF in building current from 0 to I: dW = P dt = e i dt = (L di/dt) i dt = L i di.
  - Total magnetic energy stored: U = ∫₀^I L i di = 1/2 L I².
  - Magnetic Energy Density: u_B = U / Volume = B² / (2μ₀) J/m³.
- **DERIVATION:** Mutual Inductance of Two Long Coaxial Solenoids (S₁ inner radius r₁, S₂ outer radius r₂):
  Step 1: Current I₂ in outer solenoid S₂ produces field B₂ = μ₀ n₂ I₂.
  Step 2: Flux linked with inner solenoid S₁ (area A₁ = π r₁²): Φ₁ = B₂ · A₁ = μ₀ n₂ I₂ A₁.
  Step 3: Total flux linked with N₁ = n₁ l turns of S₁: N₁ Φ₁ = (n₁ l) (μ₀ n₂ I₂ A₁) = μ₀ n₁ n₂ A₁ l I₂.
  Step 4: Since N₁ Φ₁ = M₁₂ I₂: M₁₂ = μ₀ n₁ n₂ A₁ l = M₂₁ = M.
  Step 5: Coupling Coefficient: k = M / √(L₁ L₂)  (0 ≤ k ≤ 1).

**5. Quick Revision Points:**
**KEY POINTS:**
- Magnetic flux: Φ = B A cosθ; Induced EMF: e = - dΦ/dt (Faraday & Lenz).
- Straight rod motional EMF: e = Bvl; Rotating rod: e = 1/2 B ω l².
- Self-inductance: e = - L dI/dt; Solenoid: L = μ₀ n² A l; Energy: U = 1/2 L I².
- Mutual inductance: e₂ = - M dI₁/dt; Coaxial solenoids: M = μ₀ n₁ n₂ A₁ l.
- Eddy currents minimized by laminated insulated cores; used in induction furnaces and magnetic brakes.`;
  }

  // CHAPTER 7: Alternating Current
  if (
    chapterLower.includes('alternating current') ||
    chapterLower.includes('lcr') ||
    chapterLower.includes('transformer') ||
    chapterLower === 'p7'
  ) {
    return `TOPIC: Chapter 7: Alternating Current
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Peak, Mean & RMS Values of AC:**
- Alternating Voltage: V = V₀ sin(ωt); Current: I = I₀ sin(ωt).
- **Mean / Average Value over Half Cycle:**
  - I_avg = (2 / π) · I₀ ≈ 0.637 I₀. (Over a full complete cycle, I_avg = 0).
- **DERIVATION:** Root Mean Square (RMS) / Effective Value (I_rms):
  Step 1: Heat produced by AC current i = I₀ sin(ωt) in resistance R in time dt: dH = i² R dt = I₀² sin²(ωt) R dt.
  Step 2: Total heat in one period T: H = ∫₀^T I₀² R sin²(ωt) dt = I₀² R ∫₀^T [ (1 - cos 2ωt) / 2 ] dt = 1/2 I₀² R T.
  Step 3: If steady DC current I_rms produces same heat: H = I_rms² R T.
  Step 4: Equating: I_rms² R T = 1/2 I₀² R T => I_rms = I₀ / √2 ≈ 0.707 I₀.
  Step 5: Similarly, RMS Voltage V_rms = V₀ / √2 ≈ 0.707 V₀.
  - Domestic AC in India: V_rms = 220 V => Peak value V₀ = 220 × √2 ≈ 311.1 V. (220 V AC is more dangerous than 220 V DC because peak reaches 311 V).

**2. AC Circuits (Pure R, Pure L, Pure C):**
- **Pure Resistor R:** Current and voltage are IN PHASE: V = V₀ sin(ωt), I = I₀ sin(ωt). Phase angle Φ = 0.
- **Pure Inductor L:** Current **LAGS** voltage by π/2 (90°): V = V₀ sin(ωt), I = I₀ sin(ωt - π/2).
  - Inductive Reactance: **X_L = ω L = 2π f L** (SI Unit: Ohm Ω). For DC (f = 0), X_L = 0 (inductor acts as short-circuit).
- **Pure Capacitor C:** Current **LEADS** voltage by π/2 (90°): V = V₀ sin(ωt), I = I₀ sin(ωt + π/2).
  - Capacitive Reactance: **X_C = 1 / (ω C) = 1 / (2π f C)** (SI Unit: Ohm Ω). For DC (f = 0), X_C = ∞ (capacitor blocks DC).

**3. Series LCR Circuit Phasor Analysis & Resonance Derivation:**
- In Series LCR with applied voltage V = V₀ sin(ωt):
  Step 1: Current I is common to all components. V_R = I R (in phase with I).
  Step 2: V_L = I X_L (leads I by 90°). V_C = I X_C (lags I by 90°).
  Step 3: Resultant reactive voltage V_reactive = V_L - V_C = I (X_L - X_C).
  Step 4: Net voltage: V² = V_R² + (V_L - V_C)² = I² [ R² + (X_L - X_C)² ].
  Step 5: **Impedance (Z):** Z = √[ R² + (X_L - X_C)² ] (SI Unit: Ω).
  Step 6: Phase angle: tanΦ = (X_L - X_C) / R. (If X_L > X_C circuit is inductive; if X_C > X_L capacitive).
- **DERIVATION:** Electrical Resonance in Series LCR Circuit:
  Step 1: Resonance occurs when current amplitude is maximum, which requires impedance Z to be minimum.
  Step 2: Z is minimum when reactive term vanishes: X_L - X_C = 0 => X_L = X_C.
  Step 3: ω_r L = 1 / (ω_r C) => ω_r² = 1 / (L C) => Resonant angular frequency: ω_r = 1 / √(L C).
  Step 4: Resonant Frequency: f_r = 1 / (2π √(L C)).
  Step 5: At resonance: Z_min = R (purely resistive), current I_max = V / R, Phase angle Φ = 0 (V and I in phase).
- **Quality Factor (Q-Factor / Sharpness of Resonance):**
  - Q = (Resonant frequency) / (Bandwidth 2Δω) = (ω_r L) / R = 1 / (ω_r C R) = **(1 / R) · √(L / C)**.
  - High Q implies high selectivity and sharp frequency tuning in radio receivers.

**4. Power in AC Circuit & Wattless Current:**
**FORMULA:** True Average Power: P_avg = V_rms · I_rms · cosΦ.
- **Power Factor:** cosΦ = R / Z = (True Power) / (Apparent Power).
  - For Pure Resistor: Φ = 0° => cosΦ = 1 (Maximum power dissipation: P = V_rms I_rms).
  - For Pure Inductor or Capacitor: Φ = 90° => cosΦ = 0 (P_avg = 0).
- **Wattless Current:** The component of alternating current which consumes zero net power over a complete cycle: I_wattless = I_rms · sinΦ (since power = V_rms · (I_rms sinΦ) · cos 90° = 0). Used in choke coils to control AC without power loss.

**5. AC Generator & Transformer:**
- **AC Generator (Alternator):**
  - Principle: Electromagnetic induction. A coil rotated in uniform magnetic field at constant angular speed ω generates sinusoidal EMF: e = N B A ω sin(ωt) = e₀ sin(ωt).
- **Transformer:**
  - Principle: Mutual Induction between two inductive coils wound on laminated soft iron core.
  - Transformation Ratio: V_s / V_p = N_s / N_p = I_p / I_s = k.
  - **Step-Up Transformer:** N_s > N_p => V_s > V_p and I_s < I_p. (Used at power generation stations to transmit at high voltage, drastically reducing I²R transmission loss).
  - **Step-Down Transformer:** N_s < N_p => V_s < V_p and I_s > I_p.
  - **Energy Losses in Transformer:**
    1. Copper loss (Joule heating in windings: minimized using thick copper wire).
    2. Iron / Eddy current loss in core (minimized using laminated core).
    3. Hysteresis loss (minimized using soft iron core having narrow hysteresis loop).
    4. Flux leakage (minimized by winding primary and secondary coils coaxially).

**6. Quick Revision Points:**
**KEY POINTS:**
- RMS values: I_rms = I₀/√2 ≈ 0.707 I₀; V_rms = V₀/√2 ≈ 0.707 V₀.
- Inductive reactance: X_L = 2π f L; Capacitive reactance: X_C = 1 / (2π f C).
- Impedance: Z = √[ R² + (X_L - X_C)² ]; Phase: tanΦ = (X_L - X_C) / R.
- Resonance: f_r = 1 / (2π √LC), Z = R, I = V/R, Q = (1/R) √(L/C).
- Power: P = V_rms I_rms cosΦ; Power factor: cosΦ = R/Z.
- Transformer: V_s / V_p = N_s / N_p = I_p / I_s.`;
  }

  return null;
}
