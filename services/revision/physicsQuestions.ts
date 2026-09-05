// services/revision/physicsQuestions.ts
// CBSE Class 12 Physics Full Subject Revision Question Bank (Complete Syllabus: Chapters 1 to 14)

import { RevisionQuestion } from './types.ts';

export const physicsCategories = [
  'All Questions',
  'Most Repeated Questions',
  'Important Derivations',
  'Important Numericals',
  'Important Conceptual Questions',
  'Case-Based Questions',
  'Assertion & Reason',
  'High-Yield MCQs',
  '2-Mark & 3-Mark Questions',
  '5-Mark Long Questions'
];

export const physicsQuestions: RevisionQuestion[] = [
  // 1. Ch 1: Electric Charges & Fields - Derivation / 5-Mark / Most Repeated
  {
    id: 'phy-q1',
    questionNumber: 1,
    subjectId: 'physics',
    chapterTitle: 'Electric Charges & Fields',
    chapterNumber: 1,
    category: 'Important Derivations',
    label: 'Frequently Asked',
    marks: '5 Marks',
    yearTag: 'CBSE 2024 (Delhi), 2020, 2018',
    question: `(a) State Gauss\'s law in electrostatics.\n(b) Use Gauss\'s law to derive an expression for the electric field due to an infinitely long straight uniformly charged wire of linear charge density λ at a perpendicular distance r from it.\n(c) An electron is revolving in a circular path of radius 0.1 m around an infinitely long wire of linear charge density λ = 2 × 10⁻⁸ C/m. Calculate the kinetic energy of the electron. (Mass of electron = 9.1 × 10⁻³¹ kg, charge e = 1.6 × 10⁻¹⁹ C)`,
    answer: {
      finalAnswer: 'Kinetic energy of revolving electron KE = 2.88 × 10⁻¹⁷ J (or 180 eV).',
      formulaOrConcept: `• Gauss's Law: ∮ E · dA = q_enclosed / ε₀\n• Electric field due to long line charge: E = λ / (2πε₀r)\n• Centripetal force balance: m v² / r = e E  =>  KE = (1/2) m v² = (1/2) e E r = (e λ) / (4πε₀)`,
      solution: `(a) Gauss's Law Statement:\nThe total electric flux through any closed hypothetical Gaussian surface in free space is equal to 1/ε₀ times the net total charge enclosed within that surface:\n∮ E · dA = q_enclosed / ε₀.

(b) Derivation for Infinitely Long Straight Wire:
Step 1: Choose a cylindrical Gaussian surface of radius r and length L coaxial with the uniformly charged line wire.
Step 2: The surface consists of three parts:
  • Curved cylindrical surface S₁
  • Flat circular top end cap S₂
  • Flat circular bottom end cap S₃
Step 3: Flux evaluation:
  • On circular end caps S₂ and S₃, the area vectors dA are perpendicular to E (E ⊥ dA => E · dA = E dA cos 90° = 0). Thus, flux through both flat end caps is zero: Φ₂ = Φ₃ = 0.
  • On the curved surface S₁, by cylindrical symmetry, E is directed radially outwards everywhere and has uniform magnitude. Here, E is parallel to dA (cos 0° = 1):
    Φ₁ = ∮ E dA cos 0° = E ∮ dA = E · (2π r L).
Step 4: Total enclosed charge within length L: q_enclosed = λ · L.
Step 5: Applying Gauss's Law:
  E · (2π r L) = (λ L) / ε₀
  => E = λ / (2π ε₀ r) = (2 k λ) / r, where k = 1 / (4π ε₀).

(c) Numerical Calculation:
• The required centripetal force for circular revolution is provided by the inward electrostatic attraction:
  m v² / r = e E
  m v² = e E r = e · [λ / (2π ε₀ r)] · r = (e λ) / (2π ε₀)
• Therefore, Kinetic Energy KE = (1/2) m v²:
  KE = (e λ) / (4π ε₀) = (1 / 4πε₀) · e · λ
• Substituting the values:
  KE = (9 × 10⁹ N·m²/C²) × (1.6 × 10⁻¹⁹ C) × (2 × 10⁻⁸ C/m)
  KE = 9 × 1.6 × 2 × 10⁻¹⁸ = 28.8 × 10⁻¹⁸ J = 2.88 × 10⁻¹⁷ J.
• In electron-volts: KE = (2.88 × 10⁻¹⁷) / (1.6 × 10⁻¹⁹) = 180 eV.`,
      examApproach: 'Examiner Warning: Always draw the cylindrical Gaussian surface with labeled area vectors dA on curved and flat faces. Notice in part (c) that KE is independent of the orbital radius r!',
      markingPoints: [
        '1 Mark: Correct statement of Gauss\'s law with mathematical formulation.',
        '2 Marks: Complete derivation showing zero flux through flat end faces and evaluating curved surface flux to get E = λ / (2πε₀r).',
        '2 Marks: Correct centripetal force balance, substitution, and final KE = 2.88 × 10⁻¹⁷ J with proper SI units.'
      ]
    }
  },

  // 2. Ch 2: Electrostatic Potential & Capacitance - Important Numericals / 3-Mark
  {
    id: 'phy-q2',
    questionNumber: 2,
    subjectId: 'physics',
    chapterTitle: 'Electrostatic Potential & Capacitance',
    chapterNumber: 2,
    category: 'Important Numericals',
    label: 'High Priority',
    marks: '3 Marks',
    yearTag: 'CBSE 2023, 2019 (All India)',
    question: `A parallel plate capacitor of capacitance C₀ = 8 pF with air between the plates is connected across a V₀ = 100 V battery. After being fully charged, the battery is disconnected. A dielectric slab of dielectric constant K = 6 is then introduced between the plates to completely fill the space.\nCalculate:\n(i) The new capacitance C.\n(ii) The new potential difference V across the plates.\n(iii) The change in electrostatic potential energy stored in the capacitor (ΔU = U - U₀). Explain why the stored energy changes.`,
    answer: {
      finalAnswer: '(i) C = 48 pF; (ii) V = 16.67 V; (iii) ΔU = -3.33 × 10⁻⁸ J (decreases by 3.33 × 10⁻⁸ J).',
      formulaOrConcept: `• Charge remains constant when battery is disconnected: Q = Q₀ = C₀ V₀\n• New Capacitance: C = K · C₀\n• New Potential Difference: V = V₀ / K\n• Initial Energy: U₀ = (1/2) C₀ V₀² = Q₀² / (2 C₀)\n• Final Energy: U = Q₀² / (2 C) = U₀ / K`,
      solution: `Step 1: Calculate initial charge and energy:
• Q₀ = C₀ V₀ = (8 × 10⁻¹² F) × (100 V) = 800 × 10⁻¹² C = 8 × 10⁻¹⁰ C.
• Initial stored energy:
  U₀ = (1/2) C₀ V₀² = (1/2) × (8 × 10⁻¹² F) × (100 V)² = 4 × 10⁻⁸ J.

Step 2: Evaluation after battery disconnection & slab insertion:
(i) New Capacitance C:
  C = K · C₀ = 6 × 8 pF = 48 pF = 48 × 10⁻¹² F.

(ii) New Potential Difference V:
  Since the battery is disconnected, the charge Q remains trapped and constant (Q = Q₀):
  V = Q / C = Q₀ / (K C₀) = V₀ / K = 100 V / 6 = 16.67 V.

(iii) Change in Stored Electrostatic Energy (ΔU):
  Final energy U = Q₀² / (2 C) = U₀ / K = (4 × 10⁻⁸ J) / 6 = 0.67 × 10⁻⁸ J.
  ΔU = U - U₀ = (4/6 × 10⁻⁸) - (4 × 10⁻⁸) = - (4 × 5 / 6) × 10⁻⁸ J = -3.33 × 10⁻⁸ J.
• Physical Explanation: The energy decreases because the electric field of the polarized dielectric slab exerts an attractive pulling force on the dielectric as it enters the plates. The mechanical work is done by the electrostatic field, leading to a decrease in stored potential energy.`,
      examApproach: 'Key Distinction: If battery remains connected, V is constant and energy increases by K. If battery is disconnected, Q is constant and energy decreases by factor of K!',
      markingPoints: [
        '1 Mark: Correct calculation of new capacitance C = 48 pF.',
        '1 Mark: Correct reasoning of constant charge and V = 100/6 = 16.67 V.',
        '1 Mark: Calculation of ΔU = -3.33 × 10⁻⁸ J with conceptual reason of work done by electric field.'
      ]
    }
  },

  // 3. Ch 3: Current Electricity - Most Repeated / Kirchhoff's Law / 3-Mark
  {
    id: 'phy-q3',
    questionNumber: 3,
    subjectId: 'physics',
    chapterTitle: 'Current Electricity',
    chapterNumber: 3,
    category: 'Most Repeated Questions',
    label: 'Must Practice',
    marks: '3 Marks',
    yearTag: 'CBSE 2024, 2022, 2017',
    question: `(a) State Kirchhoff\'s Junction Rule and Loop Rule. Name the conservation principles on which they are based.\n(b) In a given circuit, two cells of emf E₁ = 6 V, internal resistance r₁ = 1 Ω and E₂ = 4 V, internal resistance r₂ = 2 Ω are connected in parallel across an external resistor R = 5 Ω such that their positive terminals are connected together. Determine the current flowing through external resistance R.`,
    answer: {
      finalAnswer: 'Current through external resistance R is I = 0.824 A (or 14/17 A).',
      formulaOrConcept: `• Kirchhoff's Junction Rule: Σ I = 0 (Conservation of Electric Charge)\n• Kirchhoff's Loop Rule: Σ ΔV = 0 (Conservation of Energy)\n• Equivalent EMF in parallel: E_eq = (E₁/r₁ + E₂/r₂) / (1/r₁ + 1/r₂)\n• Equivalent internal resistance: 1/r_eq = 1/r₁ + 1/r₂`,
      solution: `(a) Kirchhoff's Rules:
1. Junction Rule: At any circuit junction, the algebraic sum of all currents entering and leaving the junction is zero: Σ I = 0. It is based on the Law of Conservation of Electric Charge.
2. Loop Rule: The algebraic sum of changes in electric potential around any closed loop is zero: Σ ΔV = 0. It is based on the Law of Conservation of Energy.

(b) Circuit Solution:
Method 1 (Equivalent Cell Formula):
• r_eq = (r₁ · r₂) / (r₁ + r₂) = (1 × 2) / (1 + 2) = 2/3 Ω.
• E_eq = [ (E₁ / r₁) + (E₂ / r₂) ] · r_eq
  E_eq = [ (6 / 1) + (4 / 2) ] × (2/3) = [ 6 + 2 ] × (2/3) = 16/3 V.
• Total resistance of circuit R_total = R + r_eq = 5 + (2/3) = 17/3 Ω.
• Current through R:
  I = E_eq / R_total = (16/3 V) / (17/3 Ω) = 16 / 17 A ≈ 0.941 A.

Method 2 (Kirchhoff's Loop Analysis):
Let current from E₁ be I₁ and from E₂ be I₂.
Total current through 5 Ω resistor is I = I₁ + I₂.
• Loop 1 (containing E₁ and R):
  6 - 1·I₁ - 5·(I₁ + I₂) = 0  =>  6 I₁ + 5 I₂ = 6  --- (Eq. 1)
• Loop 2 (containing E₂ and R):
  4 - 2·I₂ - 5·(I₁ + I₂) = 0  =>  5 I₁ + 7 I₂ = 4  --- (Eq. 2)
Solving equations:
Multiply Eq. 1 by 7 and Eq. 2 by 5:
  42 I₁ + 35 I₂ = 42
  25 I₁ + 35 I₂ = 20
Subtracting gives: 17 I₁ = 22  =>  I₁ = 22/17 A.
Substituting into Eq. 1: 5 I₂ = 6 - 6(22/17) = (102 - 132)/17 = -30/17  =>  I₂ = -6/17 A.
Total current through R = I₁ + I₂ = (22 - 6) / 17 = 16 / 17 A ≈ 0.941 A.`,
      examApproach: 'Examiner Tip: State the conservation law explicitly for both rules. A negative current for cell 2 simply indicates that cell 2 is being charged by cell 1.',
      markingPoints: [
        '1 Mark: Stating both rules with respective conservation laws (charge and energy).',
        '1 Mark: Setting up correct simultaneous loop equations or equivalent cell equations.',
        '1 Mark: Solving correctly to obtain I = 16/17 A (0.941 A) through external resistance R.'
      ]
    }
  },

  // 4. Ch 4: Moving Charges & Magnetism - Derivation / 5-Mark
  {
    id: 'phy-q4',
    questionNumber: 4,
    subjectId: 'physics',
    chapterTitle: 'Moving Charges & Magnetism',
    chapterNumber: 4,
    category: 'Important Derivations',
    label: 'Important PYQ Pattern',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2023 (Delhi), 2019',
    question: `(a) Using Biot-Savart law, derive the expression for the magnetic field at a point on the axis of a circular current-carrying loop of radius R having N turns at a distance x from its center.\n(b) From this expression, deduce the magnetic field at the center of the coil.\n(c) Two identical circular loops of radius R carrying equal currents I are placed coaxially separated by a distance R. Find the magnitude and direction of the net magnetic field at the midpoint on the line joining their centers when currents flow in the same direction.`,
    answer: {
      finalAnswer: 'Field at midpoint is B_net = (8 / 5√5) · (μ₀ N I / R).',
      formulaOrConcept: `• Biot-Savart Law: dB = (μ₀ / 4π) · (I dl sin 90°) / r²\n• Axial magnetic field: B_axis = (μ₀ N I R²) / [2 (R² + x²)^(3/2)]\n• Field at center (x = 0): B_center = (μ₀ N I) / (2 R)`,
      solution: `(a) Derivation of Axial Magnetic Field:
Step 1: Consider a circular coil of radius R carrying current I. Let P be a point on its axis at distance x from center O.
Step 2: Distance from current element dl at circumference to point P: r = √(R² + x²).
The angle between current element dl and position vector r is 90°.
By Biot-Savart Law:
  dB = (μ₀ / 4π) · (I dl sin 90°) / r² = (μ₀ I dl) / [4π (R² + x²)].

Step 3: Resolving dB into components:
  • Perpendicular to axis: dB cos θ (where cos θ = x / r)
  • Parallel along axis: dB sin θ (where sin θ = R / r = R / √(R² + x²))
Due to symmetry, for every diametrically opposite current element dl, the perpendicular components dB cos θ are equal in magnitude and opposite in direction, canceling out completely (∫ dB cos θ = 0).
The parallel components along the axis add up:
  B = ∫ dB sin θ = ∫ (μ₀ I dl / [4π (R² + x²)]) · [R / √(R² + x²)]
  B = [μ₀ I R / (4π (R² + x²)^(3/2))] ∮ dl
Since ∮ dl = 2π R (circumference of loop):
  B = [μ₀ I R / (4π (R² + x²)^(3/2))] · (2π R) = (μ₀ I R²) / [2 (R² + x²)^(3/2)].
For a coil having N turns:
  B_axis = (μ₀ N I R²) / [2 (R² + x²)^(3/2)].

(b) Magnetic field at center:
Substitute x = 0 into axial formula:
  B_center = (μ₀ N I R²) / [2 (R³)] = (μ₀ N I) / (2 R).

(c) Field at midpoint between two coaxial identical loops:
• Midpoint is at distance x = R / 2 from both coils.
• Distance term: R² + x² = R² + (R/2)² = R² + R²/4 = (5/4) R².
• (R² + x²)^(3/2) = [(5/4) R²]^(3/2) = (5√5 / 8) R³.
• Field produced by one coil:
  B₁ = (μ₀ N I R²) / [2 · (5√5 / 8) R³] = (4 / 5√5) · (μ₀ N I / R).
• Since currents are in the same direction, both fields B₁ and B₂ point in the identical axial direction (by Right-Hand Thumb Rule):
  B_net = B₁ + B₂ = 2 · B₁ = (8 / 5√5) · (μ₀ N I / R).`,
      examApproach: 'CBSE Scoring Tip: Show explicitly how dB cos θ cancels for diametrically opposite elements dl. Without mentioning symmetry cancellation, 1 mark is deducted.',
      markingPoints: [
        '1 Mark: Biot-Savart law statement and formula for dB element.',
        '2 Marks: Correct resolution into dB cos θ and dB sin θ with symmetry cancellation statement.',
        '1 Mark: Integration to obtain B = (μ₀ N I R²) / [2 (R² + x²)^(3/2)] and deduction at x = 0.',
        '1 Mark: Correct midpoint calculation showing B_net = (8 / 5√5) · (μ₀ N I / R).'
      ]
    }
  },

  // 5. Ch 5: Magnetism & Matter - Conceptual / 2-Mark
  {
    id: 'phy-q5',
    questionNumber: 5,
    subjectId: 'physics',
    chapterTitle: 'Magnetism & Matter',
    chapterNumber: 5,
    category: 'Important Conceptual Questions',
    label: 'Repeated Concept',
    marks: '2 Marks',
    yearTag: 'CBSE 2023, 2020 (Compartment)',
    question: `Compare Diamagnetic, Paramagnetic, and Ferromagnetic substances on the basis of:\n(i) Magnetic susceptibility (χ_m) and its temperature dependence.\n(ii) Behavior when placed in an external non-uniform magnetic field.`,
    answer: {
      finalAnswer: 'Diamagnetic: small negative χ (temp-independent), repelled to weaker field. Paramagnetic: small positive χ (χ ∝ 1/T), attracted to stronger field. Ferromagnetic: very large positive χ (Curie-Weiss law), strongly pulled to stronger field.',
      formulaOrConcept: `• Relative permeability: μ_r = 1 + χ_m\n• Curie Law for paramagnets: χ = C / T\n• Curie-Weiss Law for ferromagnets: χ = C / (T - T_c) for T > T_c`,
      solution: `1. Magnetic Susceptibility (χ_m) and Temperature Dependence:
• Diamagnetic: Small and negative (-1 ≤ χ < 0). It is independent of temperature.
• Paramagnetic: Small and positive (0 < χ < 10⁻³). Susceptibility is inversely proportional to absolute temperature T according to Curie\'s Law: χ = C / T.
• Ferromagnetic: Extremely large and positive (χ >> 1000). At temperatures above the Curie temperature T_c, ferromagnetic substances become paramagnetic following the Curie-Weiss Law: χ = C / (T - T_c).

2. Behavior in Non-Uniform Magnetic Field:
• Diamagnetic: Tends to move slowly from regions of stronger magnetic field to regions of weaker magnetic field (feebly repelled).
• Paramagnetic: Tends to move from regions of weaker magnetic field to regions of stronger magnetic field (feebly attracted).
• Ferromagnetic: Strongly and quickly pulled from regions of weaker magnetic field to regions of stronger magnetic field (strongly attracted).`,
      examApproach: 'Always write comparison questions in a tabular or neatly bulleted 2-column format for guaranteed full marks.',
      markingPoints: [
        '1 Mark: Correct values and temperature dependencies of magnetic susceptibility for all 3 materials.',
        '1 Mark: Correct movement direction in non-uniform field for all 3 classes.'
      ]
    }
  },

  // 6. Ch 6: Electromagnetic Induction - Derivation & Law / 3-Mark
  {
    id: 'phy-q6',
    questionNumber: 6,
    subjectId: 'physics',
    chapterTitle: 'Electromagnetic Induction',
    chapterNumber: 6,
    category: 'Most Repeated Questions',
    label: 'Frequently Asked',
    marks: '3 Marks',
    yearTag: 'CBSE 2024, 2021, 2018',
    question: `(a) State Lenz\'s Law and justify that it is an immediate consequence of the Law of Conservation of Energy.\n(b) A metallic rod of length L is rotated with angular velocity ω in a uniform magnetic field B perpendicular to the plane of rotation about one of its ends. Derive an expression for the induced emf across its ends.`,
    answer: {
      finalAnswer: 'Induced EMF across rotating rod: ε = (1/2) B ω L².',
      formulaOrConcept: `• Lenz's Law: ε = - dΦ_B / dt\n• Motional EMF element: dε = B v dr = B (ω r) dr\n• Total EMF: ε = ∫₀ᴸ B ω r dr = (1/2) B ω L²`,
      solution: `(a) Lenz's Law & Conservation of Energy:
• Statement: The polarity of the induced emf is always such that it tends to produce a current which opposes the change in magnetic flux that produced it (ε = - dΦ/dt).
• Energy Conservation Justification:
  - Suppose the induced current favored or aided the motion of the magnet instead of opposing it. Then, even a slight push to the magnet towards the coil would generate an attractive induced pole, accelerating the magnet indefinitely without any external mechanical work.
  - This would result in continuous generation of kinetic and electrical energy out of nothing, violating the Law of Conservation of Energy.
  - Therefore, the induced current must oppose the motion. Mechanical work must be done by the external agent against this opposing magnetic force, and it is this mechanical work that gets transformed into electrical/thermal energy.

(b) Derivation for Rotating Rod:
Step 1: Consider a metallic rod OA of length L rotating about end O with uniform angular speed ω in a uniform magnetic field B perpendicular to the plane of rotation.
Step 2: Take a small radial element of length dr at a distance r from the pivot O.
Step 3: Linear velocity of this element is v = r · ω.
Step 4: The motional emf developed across this elemental length dr is:
  dε = B · v · dr = B · (ω r) · dr
Step 5: Integrating from r = 0 (pivot) to r = L (tip of rod):
  ε = ∫₀ᴸ B ω r dr = B ω ∫₀ᴸ r dr
  ε = B ω · [r² / 2]₀ᴸ
  ε = (1/2) B ω L².`,
      examApproach: 'Alternative method using area swept: in one full revolution (time T = 2π/ω), area swept is ΔA = π L². Induced EMF ε = B · (ΔA / T) = B · (π L²) / (2π/ω) = (1/2) B ω L². Both methods are awarded full marks by CBSE.',
      markingPoints: [
        '1.5 Marks: Clear statement of Lenz\'s law with energy conservation argument.',
        '1.5 Marks: Logical calculus or area-swept derivation arriving at ε = (1/2) B ω L².'
      ]
    }
  },

  // 7. Ch 7: Alternating Current - 5-Mark Long / Derivation + Numerical
  {
    id: 'phy-q7',
    questionNumber: 7,
    subjectId: 'physics',
    chapterTitle: 'Alternating Current',
    chapterNumber: 7,
    category: '5-Mark Long Questions',
    label: 'High Priority',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2023 (Delhi), 2019',
    question: `(a) A series LCR circuit is connected to an ac voltage source V = V₀ sin(ωt). Using phasor diagram, derive expressions for the impedance (Z) of the circuit and the phase angle (ϕ) between voltage and current.\n(b) Define electrical resonance and state the condition for resonance in a series LCR circuit.\n(c) In a series LCR circuit, L = 2.0 H, C = 32 μF, and R = 10 Ω. Calculate:\n  (i) The resonant angular frequency ω_r.\n  (ii) The Q-factor of the circuit.`,
    answer: {
      finalAnswer: '(i) ω_r = 125 rad/s; (ii) Q-factor = 25.',
      formulaOrConcept: `• Impedance: Z = √[R² + (X_L - X_C)²], where X_L = ωL and X_C = 1 / (ωC)\n• Phase angle: tan ϕ = (X_L - X_C) / R\n• Resonant frequency: ω_r = 1 / √(LC)\n• Quality factor: Q = (ω_r L) / R = (1 / R) · √(L / C)`,
      solution: `(a) Derivation of Impedance & Phase Angle using Phasor Diagram:
Step 1: Let the alternating current in the series circuit be I = I₀ sin(ωt).
Step 2: Potential differences across individual components:
  • Resistor: V_R = I₀ R (in phase with current I).
  • Inductor: V_L = I₀ X_L (leads current I by π/2 radians).
  • Capacitor: V_C = I₀ X_C (lags current I by π/2 radians).
Step 3: Since V_L and V_C are in opposite directions along the vertical axis, their resultant phasor magnitude is (V_L - V_C) (assuming X_L > X_C).
Step 4: The total applied voltage phasor V₀ is the vector sum of V_R and (V_L - V_C):
  V₀² = V_R² + (V_L - V_C)²
  V₀² = (I₀ R)² + (I₀ X_L - I₀ X_C)² = I₀² [R² + (X_L - X_C)²]
  V₀ = I₀ √[R² + (X_L - X_C)²].
Step 5: The total effective opposition is called Impedance (Z):
  Z = V₀ / I₀ = √[R² + (X_L - X_C)²] = √[R² + (ωL - 1/ωC)²].
Step 6: Phase Angle ϕ between voltage and current:
  tan ϕ = (V_L - V_C) / V_R = (I₀ X_L - I₀ X_C) / (I₀ R) = (X_L - X_C) / R.

(b) Electrical Resonance:
• Definition: A series LCR circuit is said to be in electrical resonance when the current amplitude reaches its maximum value for a particular frequency of the applied alternating voltage.
• Condition: Inductive reactance equals capacitive reactance:
  X_L = X_C  =>  ω L = 1 / (ω C)  =>  ω_r = 1 / √(L C).
At resonance, impedance is minimum: Z_min = R, and current is in phase with voltage (cos ϕ = 1).

(c) Numerical Calculations:
Given: L = 2.0 H, C = 32 × 10⁻⁶ F, R = 10 Ω.
(i) Resonant angular frequency:
  ω_r = 1 / √(L C) = 1 / √[2.0 × (32 × 10⁻⁶)] = 1 / √(64 × 10⁻⁶) = 1 / (8 × 10⁻³)
  ω_r = 1000 / 8 = 125 rad/s.
(ii) Q-factor of the circuit:
  Q = (ω_r L) / R = (125 × 2.0) / 10 = 250 / 10 = 25.
  (Or using Q = (1/R) √(L/C) = (1/10) × √(2 / 32×10⁻⁶) = (1/10) × √(62500) = 250 / 10 = 25).`,
      examApproach: 'Examiner Requirement: Phasor diagram showing V_R on X-axis, V_L along +Y, V_C along -Y, and net phasor V₀ at angle ϕ is mandatory for full marks.',
      markingPoints: [
        '2 Marks: Phasor diagram and derivation of Z = √[R² + (X_L - X_C)²] and tan ϕ.',
        '1 Mark: Definition and condition for resonance (X_L = X_C).',
        '2 Marks: Correct numerical values of ω_r = 125 rad/s and Q = 25.'
      ]
    }
  },

  // 8. Ch 8: Electromagnetic Waves - Conceptual & MCQ / 2-Mark
  {
    id: 'phy-q8',
    questionNumber: 8,
    subjectId: 'physics',
    chapterTitle: 'Electromagnetic Waves',
    chapterNumber: 8,
    category: 'Important Conceptual Questions',
    label: 'CBSE Board Pattern',
    marks: '2 Marks',
    yearTag: 'CBSE 2023, 2020',
    question: `(a) Write the generalized Ampere-Maxwell circuital law and explain the term 'displacement current'.\n(b) Identify the electromagnetic waves used in:\n  (i) Radar system for aircraft navigation.\n  (ii) Treatment of muscular strain.\n  (iii) Water purification system to kill germs.\n  (iv) Cellular phone communications.`,
    answer: {
      finalAnswer: '(i) Microwaves; (ii) Infrared waves; (iii) Ultraviolet rays; (iv) Radio waves.',
      formulaOrConcept: `• Displacement current: I_D = ε₀ (dΦ_E / dt)\n• Ampere-Maxwell Law: ∮ B · dl = μ₀ (I_C + I_D) = μ₀ I_C + μ₀ ε₀ (dΦ_E / dt)`,
      solution: `(a) Ampere-Maxwell Circuital Law & Displacement Current:
• Generalized Equation: ∮ B · dl = μ₀ (I_C + I_D) = μ₀ I_C + μ₀ ε₀ (dΦ_E / dt),
  where I_C is conduction current and I_D is displacement current.
• Displacement Current (I_D): It is the current that arises in a region of space where the electric field and electric flux change with time. Between the plates of a charging capacitor, conduction current I_C = 0, but changing electric flux produces displacement current I_D = ε₀ (dΦ_E / dt), preserving the continuity of current.

(b) Identification of EM Waves:
(i) Radar system for aircraft navigation: Microwaves (due to short wavelength, they travel in sharp beams without significant diffraction).
(ii) Treatment of muscular strain: Infrared waves (heat waves producing thermal warmth in muscles).
(iii) Water purification to kill germs: Ultraviolet rays (UV rays disrupt microbial DNA/cell walls).
(iv) Cellular phone communication: Radio waves (specifically Ultra High Frequency UHF band, ~800 to 2500 MHz).`,
      examApproach: 'Always memorize the EM spectrum order: Gamma > X-rays > UV > Visible > Infrared > Microwaves > Radio waves with their standard technological applications.',
      markingPoints: [
        '1 Mark: Mathematical expression for Ampere-Maxwell law with definition of displacement current.',
        '1 Mark: Correct identification of all 4 EM radiations (0.25 mark each).'
      ]
    }
  },

  // 9. Ch 9: Ray Optics & Optical Instruments - Derivation & Prism / 5-Mark
  {
    id: 'phy-q9',
    questionNumber: 9,
    subjectId: 'physics',
    chapterTitle: 'Ray Optics & Optical Instruments',
    chapterNumber: 9,
    category: 'Important Derivations',
    label: 'Frequently Asked',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2023, 2018',
    question: `(a) Derive the Lens Maker\'s Formula 1/f = (μ - 1) [ (1/R₁) - (1/R₂) ] for a thin convex lens of refractive index μ placed in air.\n(b) Draw a ray diagram showing the formation of an image by a compound microscope at the near point (least distance of distinct vision D). State the formula for its magnifying power.`,
    answer: {
      finalAnswer: 'Lens Maker Formula: 1/f = (μ - 1) [ (1/R₁) - (1/R₂) ]; Magnifying power m = - (v₀ / u₀) · (1 + D / f_e).',
      formulaOrConcept: `• Refraction at single spherical surface: (μ₂ / v) - (μ₁ / u) = (μ₂ - μ₁) / R\n• Thin Lens Formula: (1 / v) - (1 / u) = 1 / f\n• Microscope Magnification: m = m₀ · m_e = (- v₀ / u₀) · (1 + D / f_e)`,
      solution: `(a) Lens Maker's Formula Derivation:
Step 1: Consider a thin convex lens of refractive index μ₂ placed in a medium of refractive index μ₁ (for air, μ₁ = 1, μ₂ = μ).
Let R₁ and R₂ be the radii of curvature of surfaces ABC and ADC.
Step 2: Refraction at first refracting surface ABC:
A point object O is placed on the principal axis at distance u. Its real image I₁ is formed at distance v₁:
  (μ₂ / v₁) - (μ₁ / u) = (μ₂ - μ₁) / R₁  --- (Equation 1)
Step 3: Refraction at second refracting surface ADC:
Image I₁ acts as a virtual object for the second surface, forming final image I at distance v:
  (μ₁ / v) - (μ₂ / v₁) = (μ₁ - μ₂) / R₂ = - (μ₂ - μ₁) / R₂  --- (Equation 2)
Step 4: Adding Equation 1 and Equation 2:
  [(μ₂ / v₁) - (μ₁ / u)] + [(μ₁ / v) - (μ₂ / v₁)] = (μ₂ - μ₁) [ (1/R₁) - (1/R₂) ]
  μ₁ [ (1/v) - (1/u) ] = (μ₂ - μ₁) [ (1/R₁) - (1/R₂) ]
  (1/v) - (1/u) = [ (μ₂ / μ₁) - 1 ] [ (1/R₁) - (1/R₂) ].
Step 5: When the object is at infinity (u = ∞), image forms at focal point (v = f):
  (1/f) - (1/∞) = 1/f
  => 1/f = (μ - 1) [ (1/R₁) - (1/R₂) ].

(b) Compound Microscope:
• The objective forms a real, inverted, and magnified image A'B' of the tiny object AB just inside the focal length of the eyepiece.
• The eyepiece acts as a simple magnifier, producing a virtual, inverted, and highly magnified final image A''B'' at the near point D = 25 cm.
• Total Magnifying Power:
  m = m₀ · m_e
  m = - (v₀ / u₀) · (1 + D / f_e) ≈ - (L / f₀) · (1 + D / f_e),
  where L is the tube length of the microscope.`,
      examApproach: 'Crucial Diagram Rule: In ray optics, every single light ray must have arrowheads showing the direction of propagation. Unlabeled rays lose 1 mark automatically.',
      markingPoints: [
        '2.5 Marks: Logical derivation applying spherical refraction formula across both interfaces to yield 1/f = (μ - 1)[(1/R₁) - (1/R₂)].',
        '1.5 Marks: Accurate ray diagram of compound microscope with labeled object AB, intermediate real image A\'B\', and final virtual image A"B" with directional arrows.',
        '1 Mark: Correct formula for total magnification at near point D.'
      ]
    }
  },

  // 10. Ch 10: Wave Optics - Derivation / 3-Mark
  {
    id: 'phy-q10',
    questionNumber: 10,
    subjectId: 'physics',
    chapterTitle: 'Wave Optics',
    chapterNumber: 10,
    category: 'Important Derivations',
    label: 'Frequently Asked',
    marks: '3 Marks',
    yearTag: 'CBSE 2024, 2022 (Term 2), 2017',
    question: `(a) State Huygens\' principle of secondary wavelets.\n(b) Using Huygens\' construction, verify Snell\'s law of refraction of a plane wavefront incident on a plane surface separating two media of refractive indices μ₁ and μ₂ (μ₂ > μ₁).`,
    answer: {
      finalAnswer: 'Verified Snell\'s Law: sin i / sin r = v₁ / v₂ = μ₂ / μ₁ = constant.',
      formulaOrConcept: `• Speed of light in media: v₁ = c / μ₁ and v₂ = c / μ₂\n• Snell's Law: sin i / sin r = v₁ / v₂ = μ₂ / μ₁`,
      solution: `(a) Huygens' Principle:
1. Every point on a given primary wavefront acts as a fresh source of new disturbance, called secondary wavelets, which spread out in all directions with the speed of light in that medium.
2. A surface touching these secondary spherical wavelets tangentially in the forward direction at any later instant gives the new position of the wavefront at that instant.

(b) Verification of Snell's Law using Wavefront Construction:
Step 1: Consider a plane wavefront AB incident at angle i on a plane refracting surface XY separating medium 1 (speed v₁) and medium 2 (speed v₂, where v₂ < v₁).
Step 2: Let the time taken by the incident disturbance to travel from point B to C on the surface be τ.
Then: BC = v₁ · τ.
Step 3: During this same time τ, the secondary wavelet from point A will travel a distance in medium 2 equal to:
  AD = v₂ · τ.
Step 4: Draw a tangent plane CD touching the secondary wavelet centered at A. CD represents the refracted plane wavefront traveling in medium 2 at angle of refraction r.
Step 5: From right-angled triangle ΔABC:
  sin i = BC / AC = (v₁ · τ) / AC
Step 6: From right-angled triangle ΔADC:
  sin r = AD / AC = (v₂ · τ) / AC
Step 7: Dividing sin i by sin r:
  sin i / sin r = [ (v₁ · τ) / AC ] / [ (v₂ · τ) / AC ] = v₁ / v₂.
Since refractive index μ = c / v:
  sin i / sin r = (c / μ₁) / (c / μ₂) = μ₂ / μ₁ = ¹μ₂ (Constant).
This is Snell\'s Law of Refraction.`,
      examApproach: 'Draw both right-angled triangles ΔABC and ΔADC clearly with hypotenuse AC common. Write sin i = BC/AC and sin r = AD/AC.',
      markingPoints: [
        '1 Mark: Stating both postulates of Huygens\' principle.',
        '1 Mark: Neat diagram showing incident plane wavefront AB, surface XY, and refracted wavefront CD with common hypotenuse AC.',
        '1 Mark: Mathematical ratio proving sin i / sin r = v₁ / v₂ = μ₂ / μ₁.'
      ]
    }
  },

  // 11. Ch 11: Dual Nature of Radiation & Matter - Photoelectric Effect / 3-Mark
  {
    id: 'phy-q11',
    questionNumber: 11,
    subjectId: 'physics',
    chapterTitle: 'Dual Nature of Radiation & Matter',
    chapterNumber: 11,
    category: 'Most Repeated Questions',
    label: 'High Priority',
    marks: '3 Marks',
    yearTag: 'CBSE 2024, 2020, 2019',
    question: `(a) Write Einstein\'s photoelectric equation: K_max = h ν - Φ₀. Explain using this equation:\n  (i) Why does photoelectric emission not occur below a threshold frequency ν₀?\n  (ii) Why is the maximum kinetic energy of emitted photoelectrons independent of incident light intensity?\n(b) Monochromatic light of frequency 6.0 × 10¹⁴ Hz is produced by a laser. The power emitted is 2.0 × 10⁻³ W. Estimate the number of photons emitted on the average per second by the source. (h = 6.63 × 10⁻³⁴ J·s)`,
    answer: {
      finalAnswer: '(b) Number of photons emitted per second n = 5.03 × 10¹⁵ photons/s.',
      formulaOrConcept: `• Einstein\'s Photoelectric equation: K_max = e V₀ = h(ν - ν₀)\n• Energy of single photon: E = h ν\n• Number of photons per second: n = Power / E = P / (h ν)`,
      solution: `(a) Explanations from Einstein's Equation K_max = h ν - Φ₀ = h(ν - ν₀):
(i) Threshold Frequency:
  • Since kinetic energy cannot be negative (K_max ≥ 0), photoemission is possible only if h ν ≥ Φ₀ = h ν₀, which means ν ≥ ν₀.
  • If incident frequency ν < ν₀, photon energy is insufficient to liberate the electron against the surface work function Φ₀, so no emission occurs regardless of intensity or duration.
(ii) Independence of K_max from Intensity:
  • According to the photon picture, photoelectric emission is an instantaneous one-photon to one-electron collision.
  • Increasing the intensity of light merely increases the number of photons incident per second, which increases the number of emitted photoelectrons (saturation current).
  • However, the energy of each individual photon remains h ν. Consequently, K_max = h ν - Φ₀ depends strictly on incident frequency ν and work function Φ₀, completely independent of intensity.

(b) Numerical Solution:
• Energy of one photon:
  E = h · ν = (6.63 × 10⁻³⁴ J·s) × (6.0 × 10¹⁴ s⁻¹) = 3.978 × 10⁻¹⁹ J.
• Total power P = 2.0 × 10⁻³ W = 2.0 × 10⁻³ J/s.
• Number of photons emitted per second (n):
  n = P / E = (2.0 × 10⁻³ J/s) / (3.978 × 10⁻¹⁹ J/photon)
  n = (2.0 / 3.978) × 10¹⁶ = 0.5028 × 10¹⁶ = 5.03 × 10¹⁵ photons/s.`,
      examApproach: 'Examiner Warning: Clearly distinguish between photon energy (depends on frequency) and photon flux (depends on intensity).',
      markingPoints: [
        '1 Mark: Explaining threshold frequency condition (K_max ≥ 0 => ν ≥ ν₀).',
        '1 Mark: Explaining 1-photon 1-electron collision justifying independence of K_max from intensity.',
        '1 Mark: Correct calculation of photon count n = 5.03 × 10¹⁵ photons/sec.'
      ]
    }
  },

  // 12. Ch 12: Atoms - Derivation / 3-Mark
  {
    id: 'phy-q12',
    questionNumber: 12,
    subjectId: 'physics',
    chapterTitle: 'Atoms',
    chapterNumber: 12,
    category: 'Important Derivations',
    label: 'Repeated Concept',
    marks: '3 Marks',
    yearTag: 'CBSE 2023, 2019',
    question: `(a) State Bohr\'s two fundamental quantization postulates for the hydrogen atom.\n(b) Using these postulates, derive an expression for the radius of the n-th stationary orbit (r_n) of hydrogen atom.\n(c) What is the ratio of the radius of the first orbit (n = 1) to the fourth orbit (n = 4)?`,
    answer: {
      finalAnswer: 'r_n = (n² h² ε₀) / (π m e²); Ratio r₁ : r₄ = 1 : 16.',
      formulaOrConcept: `• Bohr Angular Momentum Quantization: m v r = (n h) / (2π)\n• Centripetal Force Balance: m v² / r = (1 / 4πε₀) · (e² / r²)\n• Orbital Radius: r_n ∝ n²`,
      solution: `(a) Bohr's Postulates:
1. Stable Stationary Orbits: Electrons in an atom revolve around the nucleus only in certain non-radiating permitted orbits. In these orbits, the orbital angular momentum L is an integral multiple of h / (2π):
   m v r = (n h) / (2π), where n = 1, 2, 3... (Principal quantum number).
2. Frequency Condition: An electron emits or absorbs a discrete packet of radiant electromagnetic energy (photon) only when transitioning from one non-radiating orbit to another:
   h ν = E_initial - E_final.

(b) Derivation of Orbit Radius (r_n):
Step 1: The electrostatic Coulomb force provides the necessary centripetal force:
  m v² / r = (1 / 4π ε₀) · (e² / r²)
  m v² = e² / (4π ε₀ r)  --- (Equation 1)
Step 2: From Bohr's angular momentum postulate:
  v = (n h) / (2π m r)
Step 3: Squaring v and substituting into Equation 1:
  m · [ (n² h²) / (4π² m² r²) ] = e² / (4π ε₀ r)
  (n² h²) / (π m r) = e² / ε₀
Step 4: Solving for r_n:
  r_n = (ε₀ h² n²) / (π m e²) = n² · a₀,
  where a₀ = 0.529 Å (Bohr radius for n = 1).

(c) Radius Ratio:
Since r_n ∝ n²:
  r₁ / r₄ = (1)² / (4)² = 1 / 16.
  Ratio is 1 : 16.`,
      examApproach: 'Directly show eliminating velocity v by substituting v = nh / (2πmr).',
      markingPoints: [
        '1 Mark: Stating Bohr\'s angular momentum quantization and frequency condition.',
        '1.5 Marks: Clean step-by-step derivation yielding r_n = (ε₀ h² n²) / (π m e²).',
        '0.5 Mark: Correct ratio r₁ : r₄ = 1 : 16.'
      ]
    }
  },

  // 13. Ch 13: Nuclei - Binding Energy & Mass Defect / 2-Mark
  {
    id: 'phy-q13',
    questionNumber: 13,
    subjectId: 'physics',
    chapterTitle: 'Nuclei',
    chapterNumber: 13,
    category: 'Important Numericals',
    label: 'Must Practice',
    marks: '3 Marks',
    yearTag: 'CBSE 2024, 2022',
    question: `(a) Define mass defect and binding energy of a nucleus.\n(b) Calculate the binding energy per nucleon of an alpha particle ₂⁴He in MeV.\nGiven data:\n• Mass of proton m_p = 1.007276 u\n• Mass of neutron m_n = 1.008665 u\n• Mass of ₂⁴He nucleus m_α = 4.001506 u\n• 1 u = 931.5 MeV/c²`,
    answer: {
      finalAnswer: 'Binding energy per nucleon = 7.074 MeV/nucleon.',
      formulaOrConcept: `• Mass defect: Δm = [Z m_p + (A - Z) m_n] - M_nucleus\n• Total Binding Energy: E_b = Δm × 931.5 MeV\n• Binding Energy per Nucleon: E_bn = E_b / A`,
      solution: `(a) Definitions:
• Mass Defect (Δm): The difference between the total rest mass of the individual constituent nucleons (protons and neutrons) in free state and the actual rest mass of the bound nucleus:
  Δm = [Z m_p + (A - Z) m_n] - M_nucleus.
• Nuclear Binding Energy (E_b): The minimum energy required to break up a nucleus into its constituent individual protons and neutrons and separate them to infinity. It represents the energy equivalent of mass defect (E_b = Δm · c²).

(b) Calculation for Alpha Particle (₂⁴He):
• Helium nucleus has Z = 2 protons and (A - Z) = 2 neutrons. Total nucleons A = 4.
Step 1: Calculate mass of individual constituent nucleons:
  Mass of 2 protons = 2 × 1.007276 u = 2.014552 u
  Mass of 2 neutrons = 2 × 1.008665 u = 2.017330 u
  Total mass of constituents = 2.014552 + 2.017330 = 4.031882 u.
Step 2: Calculate mass defect (Δm):
  Δm = 4.031882 u - 4.001506 u = 0.030376 u.
Step 3: Total Binding Energy (E_b):
  E_b = 0.030376 × 931.5 MeV = 28.295 MeV.
Step 4: Binding Energy per nucleon (E_bn):
  E_bn = E_b / A = 28.295 MeV / 4 = 7.074 MeV/nucleon.`,
      examApproach: 'Always carry out arithmetic calculations to at least 4 decimal places in atomic mass unit problems.',
      markingPoints: [
        '1 Mark: Correct definitions of mass defect and nuclear binding energy.',
        '1 Mark: Precise calculation of mass defect Δm = 0.030376 u.',
        '1 Mark: Correct total binding energy (28.295 MeV) and per-nucleon value (7.074 MeV/nucleon).'
      ]
    }
  },

  // 14. Ch 14: Semiconductor Electronics - Rectifier / 5-Mark
  {
    id: 'phy-q14',
    questionNumber: 14,
    subjectId: 'physics',
    chapterTitle: 'Semiconductor Electronics',
    chapterNumber: 14,
    category: 'Most Repeated Questions',
    label: 'Frequently Asked',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2023, 2020',
    question: `(a) With the help of a neat circuit diagram, explain the working principle of a Full-Wave Rectifier using two P-N junction diodes.\n(b) Draw the input and output voltage waveforms.\n(c) If the input AC frequency is 50 Hz, what is the output ripple frequency in:\n  (i) a half-wave rectifier?\n  (ii) a full-wave rectifier?`,
    answer: {
      finalAnswer: '(c) (i) Half-wave output frequency = 50 Hz; (ii) Full-wave output frequency = 100 Hz.',
      formulaOrConcept: `• Rectification: Process of converting alternating voltage/current into unidirectional pulsating direct voltage/current.\n• Diode operation: Forward bias = Conducts (low resistance); Reverse bias = Blocks (high resistance).\n• Output frequency: f_out(HWR) = f_in; f_out(FWR) = 2 · f_in`,
      solution: `(a) Full-Wave Rectifier Circuit & Working Principle:
• Construction:
  - An AC input is supplied across the primary of a step-down center-tapped transformer.
  - Two junction diodes D₁ and D₂ are connected to the opposite ends A and B of the secondary coil.
  - The load resistance R_L is connected between the common cathode junction of the diodes and the central tap C of the transformer.
• Working Principle:
  1. During Positive Half-Cycle of AC Input:
     - End A becomes positive with respect to center-tap C, and end B becomes negative with respect to C.
     - Diode D₁ is Forward Biased and conducts current. Diode D₂ is Reverse Biased and does not conduct.
     - Current flows through load R_L from top to bottom (X to Y).
  2. During Negative Half-Cycle of AC Input:
     - End A becomes negative with respect to C, and end B becomes positive with respect to C.
     - Diode D₁ is Reverse Biased and ceases conduction. Diode D₂ is Forward Biased and conducts current.
     - Current again flows through load R_L in the EXACT same direction (from top to bottom X to Y).
  - Since current passes through R_L in the same direction during both half-cycles, a continuous unidirectional pulsating DC output is obtained.

(b) Input and Output Waveforms:
• Input Waveform: Continuous sinusoidal alternating wave oscillating between +V_m and -V_m with period T = 1/50 s.
• Output Waveform: Series of consecutive positive DC voltage pulses appearing across both half-cycles with period T' = T/2.

(c) Output Frequency:
(i) Half-wave rectifier: Only one half-cycle conducts per input cycle. Hence, output frequency = f_in = 50 Hz.
(ii) Full-wave rectifier: Output repeats every half-cycle (twice per input cycle). Hence, output frequency = 2 × f_in = 2 × 50 Hz = 100 Hz.`,
      examApproach: 'Examiner Check: The center-tap connection to load R_L must be clearly indicated in the circuit diagram. Emphasize that current flows through R_L in the SAME direction during both half-cycles.',
      markingPoints: [
        '2 Marks: Neat labeled circuit diagram with center-tapped transformer, diodes D₁, D₂, and load R_L.',
        '1.5 Marks: Detailed explanation of positive and negative half-cycles showing unidirectional load current.',
        '1 Mark: Neat labeled input and output voltage waveforms.',
        '0.5 Mark: Correct ripple frequencies: 50 Hz for HWR and 100 Hz for FWR.'
      ]
    }
  },

  // 15. Case-Based Question: Current Electricity & Temperature Dependence of Resistance
  {
    id: 'phy-q15',
    questionNumber: 15,
    subjectId: 'physics',
    chapterTitle: 'Current Electricity',
    chapterNumber: 3,
    category: 'Case-Based Questions',
    label: 'CBSE Board Pattern',
    marks: '4 Marks Case Study',
    yearTag: 'CBSE 2024 (Sample Paper & Board Exam)',
    question: `Read the following passage and answer the questions that follow:\n\nResistance of a metallic conductor depends on temperature. Over a moderate range of temperatures, the resistivity of metallic conductors increases approximately linearly with temperature according to ρ_T = ρ₀ [1 + α (T - T₀)], where α is the temperature coefficient of resistivity. For metals, α is positive, meaning resistance increases with temperature due to increased amplitude of thermal vibrations of lattice ions which decreases the relaxation time τ. For semiconductors and insulators, resistivity decreases exponentially with temperature (negative α) as more valence electrons jump across the energy band gap into the conduction band.\n\nQuestions:\n(i) Why does the resistivity of a metallic wire increase with an increase in temperature?\n(ii) Nichrome wire is widely used in standard heating elements and standard resistance coils. Give two reasons.\n(iii) A platinum resistance thermometer has a resistance of 5.0 Ω at the ice point (0 °C) and 5.23 Ω at the steam point (100 °C). When inserted in a hot bath, its resistance is 5.795 Ω. Calculate the temperature of the bath.`,
    answer: {
      finalAnswer: '(i) Decrease in electron relaxation time τ; (ii) High resistivity & negligible temperature coefficient α; (iii) Temperature of bath = 345.65 °C.',
      formulaOrConcept: `• Resistance vs Temperature: R_T = R₀ [1 + α (T - T₀)]\n• Temperature calculation: T = [ (R_T - R₀) / (R₁₀₀ - R₀) ] × 100 °C`,
      solution: `(i) Physical Reason for Metal Resistance Increase:
Resistivity is given by ρ = m / (n e² τ).
In metals, free electron density n is practically independent of temperature. With increasing temperature, lattice metal ions vibrate more vigorously with larger amplitudes. Consequently, colliding frequency of conduction electrons with ions increases, which significantly decreases the mean relaxation time τ. Since ρ ∝ 1/τ, the resistivity and resistance increase.

(ii) Reasons for Using Nichrome:
1. High Resistivity: Allows high heat dissipation (H = I² R t) or high resistance with compact dimensions.
2. Low Temperature Coefficient of Resistance (α) & Resistance to High-Temperature Oxidation: Resistance remains virtually unchanged over wide temperature fluctuations, and it does not oxidize/burn even at red-hot temperatures.

(iii) Numerical Calculation of Bath Temperature:
Given:
• R₀ = 5.00 Ω (at T₀ = 0 °C)
• R₁₀₀ = 5.23 Ω (at T = 100 °C)
• R_T = 5.795 Ω
Formula:
  T = [ (R_T - R₀) / (R₁₀₀ - R₀) ] × 100 °C
Calculation:
  R_T - R₀ = 5.795 - 5.00 = 0.795 Ω
  R₁₀₀ - R₀ = 5.23 - 5.00 = 0.23 Ω
  T = (0.795 / 0.23) × 100 °C = 3.4565 × 100 °C = 345.65 °C.`,
      examApproach: 'In Case-based questions, write direct, formula-backed, concise answers to all subparts to secure all 4 marks.',
      markingPoints: [
        '1 Mark: Stating ρ = m/(ne²τ) and explaining decrease in relaxation time τ.',
        '1 Mark: Stating high resistivity and low temperature coefficient α / non-oxidizing nature.',
        '2 Marks: Correct calculation showing T = (0.795 / 0.23) × 100 = 345.65 °C.'
      ]
    }
  },

  // 16. Assertion & Reason: Ray Optics
  {
    id: 'phy-q16',
    questionNumber: 16,
    subjectId: 'physics',
    chapterTitle: 'Ray Optics & Optical Instruments',
    chapterNumber: 9,
    category: 'Assertion & Reason',
    label: 'CBSE Board Pattern',
    marks: '1 Mark',
    yearTag: 'CBSE 2024, 2023',
    question: `Given below are two statements labeled as Assertion (A) and Reason (R):\nAssertion (A): The focal length of an equiconvex glass lens decreases when it is completely immersed in water.\nReason (R): The refractive index of glass with respect to water is less than the refractive index of glass with respect to air.`,
    options: [
      '(a) Both (A) and (R) are true and (R) is the correct explanation of (A).',
      '(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(c) (A) is true but (R) is false.',
      '(d) (A) is false but (R) is true.'
    ],
    answer: {
      correctOption: '(d) (A) is false but (R) is true.',
      finalAnswer: 'Option (d) is correct: Assertion (A) is false, but Reason (R) is true.',
      formulaOrConcept: `• Lens Maker\'s formula in medium: 1 / f_m = (ᵐμ_g - 1) [ (1/R₁) - (1/R₂) ]\n• Relative refractive index: ʷμ_g = μ_g / μ_w = 1.5 / 1.33 = 1.125 < ᵃμ_g = 1.5\n• Since (ʷμ_g - 1) < (ᵃμ_g - 1), 1/f_w < 1/f_a => f_w ≈ 4 · f_a (Focal length INCREASES, not decreases!)`,
      solution: `1. Evaluation of Assertion (A):
From Lens Maker's formula: 1 / f = (μ_relative - 1) [ (1/R₁) - (1/R₂) ].
When immersed in water:
  ʷμ_g = μ_glass / μ_water = 1.5 / 1.33 ≈ 1.125.
In air:
  ᵃμ_g = 1.5.
Since (ʷμ_g - 1) = 0.125 is much smaller than (ᵃμ_g - 1) = 0.5, the converging power of the lens decreases drastically, meaning the focal length increases by a factor of 4 (f_w = 4 f_a).
Hence, Assertion (A) is FALSE.

2. Evaluation of Reason (R):
Refractive index of glass w.r.t water is ʷμ_g = 1.125, whereas w.r.t air it is ᵃμ_g = 1.5. Thus, ʷμ_g < ᵃμ_g is mathematically true.
Hence, Reason (R) is TRUE.

Conclusion:
Assertion (A) is false but Reason (R) is true. Correct option is (d).`,
      examApproach: 'High-Frequency Examiner Trap: Many students confuse converging power with focal length. Power decreases upon water immersion, hence focal length increases!',
      markingPoints: [
        '1 Mark: Correct identification of option (d) with mathematical justification f_w = 4 f_a.'
      ]
    }
  },

  // 17. High-Yield MCQ: Wave Optics
  {
    id: 'phy-q17',
    questionNumber: 17,
    subjectId: 'physics',
    chapterTitle: 'Wave Optics',
    chapterNumber: 10,
    category: 'High-Yield MCQs',
    label: 'CBSE Board Pattern',
    marks: '1 Mark',
    yearTag: 'CBSE 2024, 2023',
    question: `In Young\'s double slit experiment, if the separation between the two slits is doubled and the distance between the screen and the slits is halved, the fringe width β becomes:`,
    options: [
      '(a) Doubled',
      '(b) Halved',
      '(c) One-fourth',
      '(d) Four times'
    ],
    answer: {
      correctOption: '(c) One-fourth',
      finalAnswer: 'Option (c) is correct: Fringe width becomes one-fourth (β\' = β / 4).',
      formulaOrConcept: `• Fringe width formula: β = (λ D) / d\n• Here, new slit separation d\' = 2d, new screen distance D\' = D / 2`,
      solution: `Original fringe width:
  β = (λ · D) / d.
Given new parameters:
  d' = 2d (slit separation doubled)
  D' = D / 2 (distance to screen halved)
New fringe width β':
  β' = (λ · D') / d' = [ λ · (D / 2) ] / (2d) = (1 / 4) · [ (λ · D) / d ] = β / 4.
Therefore, the fringe width becomes one-fourth of its initial value.`,
      examApproach: 'Write formula β = λD/d, substitute primed variables d\'=2d and D\'=D/2, and simplify.',
      markingPoints: [
        '1 Mark: Stating β = λD/d and concluding β\' = β/4 with correct option (c).'
      ]
    }
  }
];
