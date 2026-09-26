// services/testYourselfService.ts
// Handcrafted CBSE Class 12 3-Question Practice Quizzes
// 100% offline, local JavaScript, zero AI API dependency.

export interface QuizQuestion {
  id: string;
  topic: string;
  question: string;
  options: string[];
  correctIndex: number; // 0 to 3
  explanation: string;
  marks: string;
  rememberThis?: string;
  commonMistake?: string;
  boardAnswerTip?: string;
}

export interface ChapterQuiz {
  chapterId: string;
  chapterTitle: string;
  questions: QuizQuestion[];
}

export const CHAPTER_QUIZZES: Record<string, QuizQuestion[]> = {
  // --- PHYSICS P1: Electric Charges and Fields ---
  p1: [
    {
      id: 'p1_q1',
      topic: "Coulomb's Law & Dielectrics",
      question: "Two point charges q₁ and q₂ placed at distance r in vacuum experience a force F. If a glass slab of dielectric constant K = 4 is inserted between them covering the entire space, what is the new electrostatic force?",
      options: [
        "A) 4F",
        "B) F / 4",
        "C) 16F",
        "D) F / 16"
      ],
      correctIndex: 1,
      explanation: "In a medium of dielectric constant K, the electrostatic force between point charges is reduced by a factor of K: F_med = F_vac / K. With K = 4, F' = F / 4.",
      marks: "1 Mark (CBSE 2023/2020 Pattern)",
      rememberThis: "Dielectrics always weaken electrostatic force between charges by factor K (F = F₀/K).",
      commonMistake: "Multiplying by K instead of dividing (e.g. choosing 4F). Remember ε = K·ε₀ is in the denominator!",
      boardAnswerTip: "Always write the formula F_med = F_0 / K before substituting numeric values."
    },
    {
      id: 'p1_q2',
      topic: "Electric Dipole in Uniform Field",
      question: "An electric dipole of moment p placed in a uniform electric field E experiences maximum torque when the angle between p and E is:",
      options: [
        "A) 0° (parallel)",
        "B) 45°",
        "C) 90° (perpendicular)",
        "D) 180° (anti-parallel)"
      ],
      correctIndex: 2,
      explanation: "Torque on a dipole is given by τ = p × E = p·E·sinθ. Since sinθ reaches its maximum value of 1 at θ = 90°, the torque is maximum when p is perpendicular to E.",
      marks: "1 Mark (CBSE 2024 MCQ)",
      rememberThis: "τ_max = p·E at θ = 90°. At θ = 0° (stable) and θ = 180° (unstable), τ = 0.",
      commonMistake: "Confusing potential energy with torque. Potential energy is minimum (-p·E) at θ = 0°, but torque is maximum at θ = 90°.",
      boardAnswerTip: "State the cross product relation τ = p × E first in 1-mark theoretical questions."
    },
    {
      id: 'p1_q3',
      topic: "Gauss's Law & Electric Flux",
      question: "A closed cubical surface of side 'a' encloses a point charge q at its center. What is the electric flux passing through one face of the cube?",
      options: [
        "A) q / ε₀",
        "B) q / (6 ε₀)",
        "C) q / (4 ε₀)",
        "D) Zero"
      ],
      correctIndex: 1,
      explanation: "By Gauss's Law, the total flux through the entire closed cube is Φ_total = q / ε₀. By symmetry, since the charge is at the center, the flux is equally distributed across all 6 identical faces. Thus, flux through one face = (1/6) · (q / ε₀).",
      marks: "1 Mark (CBSE 2022/2019 Pattern)",
      rememberThis: "Symmetry distributes total enclosed flux (q/ε₀) equally among identical boundary faces.",
      commonMistake: "Giving total flux q/ε₀ instead of dividing by 6 for ONE face.",
      boardAnswerTip: "Always state 'By symmetry, flux through each of the 6 faces is identical: Φ_face = Φ_total / 6'."
    }
  ],

  // --- PHYSICS P2: Electrostatic Potential and Capacitance ---
  p2: [
    {
      id: 'p2_q1',
      topic: "Equipotential Surfaces",
      question: "How much work is done in moving a test charge q₀ from point A to point B on the same equipotential surface?",
      options: [
        "A) W = q₀ · (V_B - V_A)",
        "B) Zero",
        "C) W = q₀ · E · d",
        "D) Infinite"
      ],
      correctIndex: 1,
      explanation: "By definition, on an equipotential surface V_A = V_B, so the potential difference ΔV = 0. Since Work W = q₀ · ΔV, the work done is exactly zero. Additionally, electric field E is perpendicular to the displacement dr, so E · dr = 0.",
      marks: "1 Mark (CBSE 2024)",
      rememberThis: "Work done moving any charge along an equipotential surface is ALWAYS zero because E ⊥ surface.",
      commonMistake: "Assuming work is needed because a force exists. Electric field is perpendicular to displacement, so cos 90° = 0.",
      boardAnswerTip: "State both: ΔV = 0 and E ⊥ dl so W = ∫ q₀ (E · dl) = 0."
    },
    {
      id: 'p2_q2',
      topic: "Parallel Plate Capacitor with Dielectric",
      question: "A parallel plate capacitor is charged by a battery and then disconnected. A dielectric slab of constant K is now inserted between the plates. What happens to its stored energy U?",
      options: [
        "A) Increases by factor K",
        "B) Decreases by factor K (U' = U / K)",
        "C) Remains constant",
        "D) Increases by factor K²"
      ],
      correctIndex: 1,
      explanation: "When disconnected, the charge Q remains constant. Capacitance increases: C' = K·C. The stored energy is U = Q² / (2C). With C' = K·C, U' = Q² / (2·K·C) = U / K. Energy decreases.",
      marks: "2 Marks (CBSE 2023 Delhi)",
      rememberThis: "Battery disconnected => Q is constant => U = Q²/(2C) => U decreases by K.",
      commonMistake: "Using U = 1/2 C V² without realizing V decreases when battery is disconnected. Use U = Q²/(2C) for constant Q!",
      boardAnswerTip: "Clearly state: 'Since the battery is disconnected, charge Q remains constant while capacitance C increases by K'."
    },
    {
      id: 'p2_q3',
      topic: "Electric Potential of a Dipole",
      question: "What is the electric potential at any point on the equatorial plane of an electric dipole?",
      options: [
        "A) Zero",
        "B) (1 / 4πε₀) · (p / r²)",
        "C) (1 / 4πε₀) · (2p / r)",
        "D) Infinite"
      ],
      correctIndex: 0,
      explanation: "Every point on the equatorial plane is equidistant from both +q and -q charges (r₊ = r₋). The potentials cancel: V = (1 / 4πε₀) · [q/r - q/r] = 0.",
      marks: "1 Mark (CBSE 2020)",
      rememberThis: "Electric field on equatorial line is NON-ZERO (E ∝ p/r³), but electric potential is ZERO everywhere on equatorial plane.",
      commonMistake: "Confusing electric field (which is non-zero) with electric potential (which is zero).",
      boardAnswerTip: "Draw a small schematic showing equal distance from +q and -q to observation point."
    }
  ],

  // --- PHYSICS P3: Current Electricity ---
  p3: [
    {
      id: 'p3_q1',
      topic: "Drift Velocity & Electric Field",
      question: "If the potential difference V across a metallic wire of length L is doubled while keeping its temperature constant, what happens to the drift velocity v_d of electrons?",
      options: [
        "A) Halved",
        "B) Doubled",
        "C) Quadrupled",
        "D) Unchanged"
      ],
      correctIndex: 1,
      explanation: "Drift velocity is given by v_d = (e · E · τ) / m. Since electric field E = V / L, v_d = (e · V · τ) / (m · L). Hence, v_d is directly proportional to V. Doubling V doubles the drift velocity.",
      marks: "1 Mark (CBSE 2024)",
      rememberThis: "v_d = e·E·τ/m = e·V·τ/(m·L). Drift speed is directly proportional to applied voltage V.",
      commonMistake: "Thinking drift velocity is fixed for a conductor. It depends directly on electric field E = V/L.",
      boardAnswerTip: "Write the relation v_d = eEτ/m = eVτ/(mL) and show v_d ∝ V."
    },
    {
      id: 'p3_q2',
      topic: "Kirchhoff's Laws Conservation Principles",
      question: "Kirchhoff's Junction Rule (Current Law) and Loop Rule (Voltage Law) are respective consequences of conservation of:",
      options: [
        "A) Energy and Charge",
        "B) Charge and Energy",
        "C) Momentum and Energy",
        "D) Charge and Momentum"
      ],
      correctIndex: 1,
      explanation: "Kirchhoff's First Law (Junction Rule: ΣI = 0) is based on Conservation of Charge (no accumulation of charge at junction). Kirchhoff's Second Law (Loop Rule: ΣΔV = 0) is based on Conservation of Energy.",
      marks: "1 Mark (CBSE 2023)",
      rememberThis: "Junction Rule => Conservation of CHARGE. Loop Rule => Conservation of ENERGY.",
      commonMistake: "Inverting the order (choosing Energy and Charge instead of Charge and Energy).",
      boardAnswerTip: "In CBSE board papers, always pair Junction=Charge and Loop=Energy."
    },
    {
      id: 'p3_q3',
      topic: "Cell Internal Resistance & Terminal Voltage",
      question: "A cell of EMF E and internal resistance r is connected across an external resistor R. The terminal potential difference V across the cell is equal to:",
      options: [
        "A) E",
        "B) E - I·r",
        "C) E + I·r",
        "D) I · r"
      ],
      correctIndex: 1,
      explanation: "During discharging of a cell into an external circuit, terminal voltage is less than EMF due to internal potential drop: V = E - I·r.",
      marks: "1 Mark (CBSE 2022)",
      rememberThis: "Discharging: V = E - Ir. Open circuit (I=0): V = E. Charging from external source: V = E + Ir.",
      commonMistake: "Assuming V = E + Ir during normal circuit use (that is only when charging the cell).",
      boardAnswerTip: "Mention that the internal drop I·r reduces the terminal voltage below EMF."
    }
  ],

  // --- CHEMISTRY C1: Solutions ---
  c1: [
    {
      id: 'c1_q1',
      topic: "Colligative Properties & Van 't Hoff Factor",
      question: "Which of the following 0.1 M aqueous solutions will exhibit the highest boiling point?",
      options: [
        "A) 0.1 M Glucose (C₆H₁₂O₆)",
        "B) 0.1 M NaCl",
        "C) 0.1 M BaCl₂",
        "D) 0.1 M Al₂(SO₄)₃"
      ],
      correctIndex: 3,
      explanation: "Elevation in boiling point is a colligative property: ΔT_b = i · K_b · m. The solution with highest Van 't Hoff factor 'i' will have highest ΔT_b and highest boiling point. For Al₂(SO₄)₃, i = 2 + 3 = 5 ions, higher than BaCl₂ (i=3), NaCl (i=2), and Glucose (i=1).",
      marks: "1 Mark (CBSE 2024 MCQ)",
      rememberThis: "ΔT_b = i·K_b·m. For ionic compounds, i = number of ions formed per formula unit on complete dissociation.",
      commonMistake: "Ignoring the Van 't Hoff factor i and assuming all 0.1 M solutions have the same boiling point.",
      boardAnswerTip: "Calculate i for each compound: Glucose=1, NaCl=2, BaCl₂=3, Al₂(SO₄)₃=5."
    },
    {
      id: 'c1_q2',
      topic: "Raoult's Law Deviations",
      question: "A mixture of ethanol and acetone shows positive deviation from Raoult's Law because:",
      options: [
        "A) Solute-solvent interactions are stronger than pure component interactions",
        "B) Acetone molecules get between ethanol molecules and break existing hydrogen bonds",
        "C) ΔH_mixing is negative",
        "D) ΔV_mixing is negative"
      ],
      correctIndex: 1,
      explanation: "In pure ethanol, molecules are held by strong intermolecular hydrogen bonding. On adding acetone, acetone molecules get between ethanol molecules and disrupt these hydrogen bonds. This weakens the A-B interactions compared to A-A and B-B, increasing vapor pressure (Positive Deviation, ΔH > 0, ΔV > 0).",
      marks: "1 Mark (CBSE 2023)",
      rememberThis: "Positive deviation: A-B interactions are WEAKER than A-A/B-B (ΔH > 0, ΔV > 0). Negative deviation: A-B interactions are STRONGER (ΔH < 0, ΔV < 0).",
      commonMistake: "Thinking hydrogen bonds are formed between acetone and ethanol. Actually, ethanol's own H-bonds are disrupted!",
      boardAnswerTip: "Write: 'A-B interactions < A-A and B-B interactions due to breaking of ethanol hydrogen bonds'."
    },
    {
      id: 'c1_q3',
      topic: "Henry's Law Constant K_H",
      question: "As temperature increases, the solubility of gases in liquids decreases because Henry's law constant K_H:",
      options: [
        "A) Decreases",
        "B) Increases",
        "C) Remains constant",
        "D) Becomes zero"
      ],
      correctIndex: 1,
      explanation: "By Henry's Law, p = K_H · x, so solubility x = p / K_H. As temperature rises, K_H increases, which causes gas solubility x to decrease at constant pressure.",
      marks: "1 Mark (CBSE 2020)",
      rememberThis: "Higher temperature => Higher K_H => Lower gas solubility. This is why aquatic life is more comfortable in cold water!",
      commonMistake: "Thinking K_H decreases with temperature. K_H increases with temperature!",
      boardAnswerTip: "Relate formula x = p/K_H directly to explain the inverse relationship between K_H and gas solubility."
    }
  ],

  // --- CHEMISTRY C2: Electrochemistry ---
  c2: [
    {
      id: 'c2_q1',
      topic: "Kohlrausch's Law & Molar Conductivity",
      question: "On infinite dilution, the molar conductivity of a weak electrolyte (like CH₃COOH) can be accurately determined by:",
      options: [
        "A) Direct extrapolation of Λ_m vs √c plot",
        "B) Kohlrausch's Law of Independent Migration of Ions",
        "C) Faraday's First Law",
        "D) Nernst Equation directly"
      ],
      correctIndex: 1,
      explanation: "For weak electrolytes, the plot of Λ_m vs √c is steep at low concentrations and does not intersect the y-axis (infinite dilution). Hence, Λ°_m cannot be obtained by extrapolation and is calculated indirectly using Kohlrausch's Law: Λ°(CH₃COOH) = Λ°(CH₃COONa) + Λ°(HCl) - Λ°(NaCl).",
      marks: "1 Mark (CBSE 2024)",
      rememberThis: "Strong electrolytes: Λ°_m found by extrapolation. Weak electrolytes: Λ°_m found ONLY via Kohlrausch's Law.",
      commonMistake: "Thinking weak electrolytes can be extrapolated like strong electrolytes (Debye-Huckel-Onsager).",
      boardAnswerTip: "Write the ionic addition formula: Λ°_m(CH₃COOH) = λ°(CH₃COO⁻) + λ°(H⁺)."
    },
    {
      id: 'c2_q2',
      topic: "Nernst Equation",
      question: "For the cell reaction Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s), if the concentration of Zn²⁺ is increased 10 times at 298 K, the cell EMF (E_cell) will:",
      options: [
        "A) Increase by 0.0591 V",
        "B) Decrease by 0.0295 V",
        "C) Increase by 0.0295 V",
        "D) Decrease by 0.0591 V"
      ],
      correctIndex: 1,
      explanation: "By Nernst Equation: E_cell = E°_cell - (0.0591 / 2) · log([Zn²⁺] / [Cu²⁺]). When [Zn²⁺] increases by a factor of 10, log(10) = 1, so E_cell decreases by 0.0591 / 2 = 0.0295 V.",
      marks: "2 Marks (CBSE 2023)",
      rememberThis: "Increasing product ion concentration [Zn²⁺] decreases cell EMF. Increasing reactant [Cu²⁺] increases EMF.",
      commonMistake: "Forgetting to divide 0.0591 by n = 2 for Zn²⁺/Cu²⁺ system!",
      boardAnswerTip: "Always identify n = 2 electrons transferred before applying the Nernst formula."
    },
    {
      id: 'c2_q3',
      topic: "Faraday's Laws & Charge",
      question: "How many Faradays of electricity are required to reduce 1 mole of MnO₄⁻ ions to Mn²⁺?",
      options: [
        "A) 1 F",
        "B) 3 F",
        "C) 5 F",
        "D) 7 F"
      ],
      correctIndex: 2,
      explanation: "In MnO₄⁻, manganese is in +7 oxidation state. In Mn²⁺, manganese is in +2 oxidation state. Change in oxidation state = 7 - 2 = 5 electrons. Reduction half-reaction: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O. 1 mole of MnO₄⁻ requires 5 moles of electrons = 5 Faradays (5F).",
      marks: "1 Mark (CBSE 2022)",
      rememberThis: "Number of Faradays needed = change in oxidation state × number of atoms being reduced.",
      commonMistake: "Choosing 7 F by only looking at the +7 state of Mn in permanganate without subtracting the +2 final state.",
      boardAnswerTip: "Write the balanced ionic reduction half-equation clearly showing 5e⁻."
    }
  ],

  // --- MATHEMATICS M7: Integrals ---
  m7: [
    {
      id: 'm7_q1',
      topic: "Definite Integral Property (King's Rule)",
      question: "Evaluate ∫[0 to π/2] (sin x) / (sin x + cos x) dx:",
      options: [
        "A) π",
        "B) π / 2",
        "C) π / 4",
        "D) 0"
      ],
      correctIndex: 2,
      explanation: "Using property ∫[0 to a] f(x)dx = ∫[0 to a] f(a - x)dx: I = ∫[0 to π/2] sin(π/2 - x) / (sin(π/2 - x) + cos(π/2 - x)) dx = ∫[0 to π/2] cos x / (cos x + sin x) dx. Adding both equations: 2I = ∫[0 to π/2] 1 dx = π/2. Therefore, I = π / 4.",
      marks: "2 Marks (CBSE 2024/2023 Classic)",
      rememberThis: "Standard symmetric quotient over [0, π/2] evaluates to (Upper Limit - Lower Limit) / 2 = π/4.",
      commonMistake: "Forgetting to divide by 2 after adding 2I = π/2, leaving the answer as π/2.",
      boardAnswerTip: "Quote the property used: 'Using ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a - x)dx' explicitly."
    },
    {
      id: 'm7_q2',
      topic: "Integration by Parts",
      question: "Evaluate ∫ eˣ · (sin x + cos x) dx:",
      options: [
        "A) eˣ · cos x + C",
        "B) eˣ · sin x + C",
        "C) -eˣ · sin x + C",
        "D) eˣ · (sin x - cos x) + C"
      ],
      correctIndex: 1,
      explanation: "By the standard CBSE theorem ∫ eˣ [f(x) + f'(x)] dx = eˣ · f(x) + C. Here, f(x) = sin x and f'(x) = cos x. Therefore, the integral is eˣ · sin x + C.",
      marks: "1 Mark (CBSE 2023 MCQ)",
      rememberThis: "∫ eˣ [f(x) + f'(x)] dx = eˣ · f(x) + C. Identify f(x) and its exact derivative f'(x).",
      commonMistake: "Choosing eˣ cos x by taking cos x as the main function instead of the derivative of sin x.",
      boardAnswerTip: "Write 'Form is ∫ eˣ [f(x) + f'(x)] dx where f(x) = sin x and f'(x) = cos x'."
    },
    {
      id: 'm7_q3',
      topic: "Properties of Odd/Even Functions",
      question: "What is the value of ∫[-π/2 to π/2] sin⁷(x) dx?",
      options: [
        "A) 2/7",
        "B) π / 7",
        "C) Zero",
        "D) 1"
      ],
      correctIndex: 2,
      explanation: "Let f(x) = sin⁷(x). Then f(-x) = sin⁷(-x) = (-sin x)⁷ = -sin⁷(x) = -f(x). Hence f(x) is an odd function. For any odd function integrated over symmetric limits [-a, a], ∫[-a to a] f(x) dx = 0.",
      marks: "1 Mark (CBSE 2022 MCQ)",
      rememberThis: "If f(-x) = -f(x) (odd function), then ∫[-a, a] f(x) dx = 0. Odd powers of sine and tangent are odd functions.",
      commonMistake: "Attempting to integrate sin⁷(x) with reduction formulas instead of checking odd symmetry.",
      boardAnswerTip: "State: 'Since f(-x) = -f(x), f(x) is an odd function, hence by property the integral is 0'."
    }
  ]
};

// Generic Fallback 3-Question Generator for any chapter not explicitly in CHAPTER_QUIZZES
export const getQuizForChapter = (chapterId: string, chapterTitle: string, subjectName: string): QuizQuestion[] => {
  if (CHAPTER_QUIZZES[chapterId]) {
    return CHAPTER_QUIZZES[chapterId];
  }

  // Generate 3 contextual practice questions based on chapter title and CBSE syllabus
  return [
    {
      id: `${chapterId}_gen_1`,
      topic: `${chapterTitle} Fundamental Principle`,
      question: `Which statement best describes the fundamental principle governing "${chapterTitle}" according to the NCERT CBSE Class 12 syllabus?`,
      options: [
        `A) It strictly adheres to standard conservation laws and boundary conditions governing ${subjectName}.`,
        `B) It operates independently of temperature, pressure, or physical medium.`,
        `C) It applies only to microscopic subatomic particles under zero potential.`,
        `D) It violates classical physical principles in all macroscopic measurements.`
      ],
      correctIndex: 0,
      explanation: `According to CBSE Class 12 syllabus standards, the core concepts of ${chapterTitle} are derived from foundational conservation principles and precise experimental conditions.`,
      marks: "1 Mark (NCERT Conceptual)",
      rememberThis: `Always verify boundary conditions and units when analyzing ${chapterTitle}.`,
      commonMistake: `Applying formulas outside their specified domain of validity.`,
      boardAnswerTip: `State definitions verbatim using NCERT keywords to guarantee full marks.`
    },
    {
      id: `${chapterId}_gen_2`,
      topic: `${chapterTitle} When-To-Apply Criteria`,
      question: `In numerical and conceptual problems of "${chapterTitle}", which of the following is essential before applying standard formulas?`,
      options: [
        `A) Neglect SI units until the final step.`,
        `B) Ensure all parameters are converted to standard SI units and verify sign conventions.`,
        `C) Assume all intermediate variables are constant regardless of field conditions.`,
        `D) Substitute values directly in CGS units.`
      ],
      correctIndex: 1,
      explanation: `In CBSE Class 12 board examinations, step marking strictly checks parameter unit conversions (SI units) and sign conventions.`,
      marks: "1 Mark (CBSE Examiner Rubric)",
      rememberThis: `Convert cm to m (10⁻²), μC to C (10⁻⁶), and mA to A (10⁻³) at the very beginning of the solution.`,
      commonMistake: `Leaving numbers in centimeter or gram units during substitution.`,
      boardAnswerTip: `Write Given Data -> Formula -> Substitution -> Final Answer with SI Units.`
    },
    {
      id: `${chapterId}_gen_3`,
      topic: `${chapterTitle} Board Presentation & Step Marking`,
      question: `What is the most effective approach to score maximum step-marking in a 3-mark or 5-mark question from "${chapterTitle}"?`,
      options: [
        `A) Write only the final numerical number without derivation or intermediate steps.`,
        `B) Draw a neat labeled diagram/schematic, state the governing equation, and show algebraic progression step by step.`,
        `C) Skip stating assumptions and directly write calculations.`,
        `D) Provide long unstructured paragraphs without headings or bullet points.`
      ],
      correctIndex: 1,
      explanation: `CBSE marking rubrics award 1 mark for correct diagram and principle, 1-2 marks for step-by-step substitution, and 1 mark for final result with units.`,
      marks: "1 Mark (CBSE Official Marking Scheme)",
      rememberThis: `A labeled diagram or formula statement earns marks even if numerical arithmetic has an error.`,
      commonMistake: `Skipping diagrams in derivations and long-answer questions.`,
      boardAnswerTip: `Highlight the final numerical answer in a neat box with its standard unit.`
    }
  ];
};
