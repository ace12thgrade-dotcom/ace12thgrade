// services/revision/chemistryQuestions.ts
// CBSE Class 12 Chemistry Full Subject Revision Question Bank (Complete Syllabus: Chapters 1 to 10)

import { RevisionQuestion } from './types.ts';

export const chemistryCategories = [
  'All Questions',
  'Most Repeated Questions',
  'Important Name Reactions & Mechanisms',
  'Important Numericals',
  'Organic Reasoning & Distinction Tests',
  'Coordination & d-f Block Reasoning',
  'Case-Based Questions',
  'Assertion & Reason',
  'High-Yield MCQs',
  '2-Mark & 3-Mark Questions',
  '5-Mark Long Questions'
];

export const chemistryQuestions: RevisionQuestion[] = [
  // 1. Ch 1: Solutions - Numericals / Colligative Properties / 3-Mark
  {
    id: 'chem-q1',
    questionNumber: 1,
    subjectId: 'chemistry',
    chapterTitle: 'Solutions',
    chapterNumber: 1,
    category: 'Important Numericals',
    label: 'Frequently Asked',
    marks: '3 Marks',
    yearTag: 'CBSE 2024 (Delhi), 2020',
    question: `A 5% solution (by mass) of cane sugar (C₁₂H₂₂O₁₁, molar mass = 342 g/mol) in water has a freezing point of 271 K. Calculate the freezing point of a 5% (by mass) solution of glucose (C₆H₁₂O₆, molar mass = 180 g/mol) in water.\n(Freezing point of pure water = 273.15 K).`,
    answer: {
      finalAnswer: 'Freezing point of 5% glucose solution is 269.07 K.',
      formulaOrConcept: `• Depression in freezing point: ΔT_f = K_f · m\n• Molality: m = (w_B × 1000) / (M_B × w_A)\n• Freezing point: T_f = T_f° - ΔT_f`,
      solution: `Step 1: Calculate molality and ΔT_f for Cane Sugar Solution:
• 5% solution by mass means:
  Mass of cane sugar w_B = 5 g
  Mass of water (solvent) w_A = 100 - 5 = 95 g
  Molar mass of cane sugar M_B = 342 g/mol
• Molality of cane sugar m₁:
  m₁ = (5 × 1000) / (342 × 95) = 5000 / 32490 = 0.1539 mol/kg
• Depression in freezing point ΔT_f(sugar):
  ΔT_f(sugar) = T_f° - T_f = 273.15 K - 271.00 K = 2.15 K.
• Using ΔT_f = K_f · m₁:
  K_f = ΔT_f / m₁ = 2.15 / 0.1539 = 13.97 K·kg/mol.
  (Or keep K_f = 2.15 × 342 × 95 / 5000).

Step 2: Calculate molality and ΔT_f for Glucose Solution:
• 5% solution of glucose means:
  Mass of glucose w_B = 5 g
  Mass of solvent w_A = 95 g
  Molar mass of glucose M_B = 180 g/mol
• Molality of glucose m₂:
  m₂ = (5 × 1000) / (180 × 95) = 5000 / 17100 = 0.2924 mol/kg.

Step 3: Depression in freezing point of Glucose:
  ΔT_f(glucose) = K_f × m₂ = [ (2.15) / (5000 / (342 × 95)) ] × [ 5000 / (180 × 95) ]
  ΔT_f(glucose) = 2.15 × (342 / 180) = 2.15 × 1.9 = 4.085 K ≈ 4.08 K.

Step 4: Calculate Freezing Point of Glucose Solution:
  T_f(glucose) = T_f° - ΔT_f(glucose) = 273.15 K - 4.08 K = 269.07 K.`,
      examApproach: 'Examiner Shortcut: Since mass % and solvent mass are identical in both 5% solutions, ΔT_f(glucose) / ΔT_f(sugar) = M_sugar / M_glucose = 342 / 180. Directly multiplying 2.15 by (342/180) avoids rounding errors.',
      markingPoints: [
        '1 Mark: Setting up molality and ΔT_f for sugar solution to obtain K_f.',
        '1 Mark: Calculating depression for glucose solution ΔT_f = 4.08 K.',
        '1 Mark: Final freezing point subtraction T_f = 273.15 - 4.08 = 269.07 K.'
      ]
    }
  },

  // 2. Ch 2: Electrochemistry - Nernst Equation & Gibbs Energy / 5-Mark
  {
    id: 'chem-q2',
    questionNumber: 2,
    subjectId: 'chemistry',
    chapterTitle: 'Electrochemistry',
    chapterNumber: 2,
    category: 'Important Numericals',
    label: 'High Priority',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2022, 2019',
    question: `(a) State Kohlrausch\'s law of independent migration of ions and write its mathematical formulation.\n(b) Represent the galvanic cell in which the following reaction takes place:\n    Mg(s) + 2 Ag⁺(0.0001 M) -> Mg²⁺(0.130 M) + 2 Ag(s)\nCalculate its emf (E_cell) at 298 K. Also calculate the maximum work (standard Gibbs energy change Δ_rG°) that can be obtained from the cell.\nGiven: E°(Mg²⁺/Mg) = -2.37 V, E°(Ag⁺/Ag) = +0.80 V, 1 F = 96500 C/mol, log 1.3 = 0.1139.`,
    answer: {
      finalAnswer: 'Cell EMF E_cell = 2.96 V; Standard Gibbs Free Energy Δ_rG° = -611.77 kJ/mol.',
      formulaOrConcept: `• Kohlrausch's Law: Λ°_m = ν₊ λ°₊ + ν₋ λ°₋\n• Standard EMF: E°_cell = E°_cathode - E°_anode\n• Nernst Equation: E_cell = E°_cell - (0.0591 / n) log Q = E°_cell - (0.0591 / n) log [Mg²⁺] / [Ag⁺]²\n• Maximum Work: Δ_rG° = - n F E°_cell`,
      solution: `(a) Kohlrausch's Law of Independent Migration of Ions:
• Statement: The limiting molar conductivity of an electrolyte can be represented as the sum of the individual contributions of the anion and cation of the electrolyte.
• Mathematical Formulation:
  Λ°_m = ν₊ λ°₊ + ν₋ λ°₋,
  where λ°₊ and λ°₋ are limiting molar conductivities of cation and anion, and ν₊ and ν₋ are the number of cations and anions produced per formula unit of electrolyte.

(b) Cell Representation & Calculation:
1. Cell Notation:
   Mg(s) | Mg²⁺(0.130 M) || Ag⁺(0.0001 M) | Ag(s)

2. Standard Cell Potential (E°_cell):
   Cathode (Reduction): 2 Ag⁺ + 2e⁻ -> 2 Ag(s) (E° = +0.80 V)
   Anode (Oxidation): Mg(s) -> Mg²⁺ + 2e⁻ (E° = -2.37 V)
   Number of electrons transferred n = 2.
   E°_cell = E°_cathode - E°_anode = +0.80 V - (-2.37 V) = +3.17 V.

3. Calculation of EMF (E_cell) at 298 K using Nernst Equation:
   Reaction quotient Q = [Mg²⁺] / [Ag⁺]²
   [Mg²⁺] = 0.130 M = 1.3 × 10⁻¹ M
   [Ag⁺] = 0.0001 M = 10⁻⁴ M => [Ag⁺]² = (10⁻⁴)² = 10⁻⁸ M²
   Q = (1.3 × 10⁻¹) / 10⁻⁸ = 1.3 × 10⁷.
   log Q = log(1.3 × 10⁷) = log 1.3 + 7 log 10 = 0.1139 + 7 = 7.1139.

   Applying Nernst Equation:
   E_cell = E°_cell - (0.0591 / n) log Q
   E_cell = 3.17 - (0.0591 / 2) × (7.1139)
   E_cell = 3.17 - (0.02955 × 7.1139) = 3.17 - 0.2102 = 2.9598 V ≈ 2.96 V.

4. Standard Gibbs Free Energy Change (Δ_rG°):
   Δ_rG° = - n F E°_cell
   Δ_rG° = - 2 × 96500 C/mol × 3.17 V
   Δ_rG° = - 611,810 J/mol = - 611.81 kJ/mol.`,
      examApproach: 'Crucial Marking Point: In the Nernst equation quotient, students often forget to square the concentration of Ag⁺ ([Ag⁺]²). Since 2 Ag⁺ are involved, forgetting the square loses 1.5 marks.',
      markingPoints: [
        '1 Mark: Stating Kohlrausch\'s Law with mathematical formula.',
        '1 Mark: Correct cell representation and E°_cell = 3.17 V.',
        '2 Marks: Correct setup of Nernst equation with [Ag⁺]² and calculating E_cell = 2.96 V.',
        '1 Mark: Correct calculation of Δ_rG° = -611.81 kJ/mol with negative sign.'
      ]
    }
  },

  // 3. Ch 3: Chemical Kinetics - Integrated Rate Law & Half-Life / 3-Mark
  {
    id: 'chem-q3',
    questionNumber: 3,
    subjectId: 'chemistry',
    chapterTitle: 'Chemical Kinetics',
    chapterNumber: 3,
    category: 'Most Repeated Questions',
    label: 'Frequently Asked',
    marks: '3 Marks',
    yearTag: 'CBSE 2024, 2023, 2018',
    question: `(a) For a first-order reaction, show that the time required for 99% completion of the reaction is twice the time required for 90% completion.\n(b) A first-order reaction has a rate constant k = 1.15 × 10⁻³ s⁻¹. How long will 5.0 g of this reactant take to reduce to 3.0 g? (Given: log 5 = 0.6990, log 3 = 0.4771).`,
    answer: {
      finalAnswer: '(a) t_99% = 2 × t_90% (proved); (b) Time taken t = 443.8 seconds.',
      formulaOrConcept: `• First-order integrated rate law: t = (2.303 / k) log ( [R]₀ / [R] )\n• Percentage decomposition: [R] = [R]₀ - x`,
      solution: `(a) Proof that t_99% = 2 × t_90%:
Step 1: For 90% completion:
  Initial amount [R]₀ = 100
  Amount left [R] = 100 - 90 = 10
  t_90% = (2.303 / k) log(100 / 10) = (2.303 / k) log 10 = (2.303 / k) × 1 = 2.303 / k  --- (Equation 1)

Step 2: For 99% completion:
  Initial amount [R]₀ = 100
  Amount left [R] = 100 - 99 = 1
  t_99% = (2.303 / k) log(100 / 1) = (2.303 / k) log 10² = 2 × (2.303 / k)  --- (Equation 2)

Step 3: Comparing Equation 1 and Equation 2:
  t_99% = 2 × t_90%. (Hence Proved).

(b) Numerical Calculation:
Given:
• Initial mass [R]₀ = 5.0 g
• Final mass [R] = 3.0 g
• Rate constant k = 1.15 × 10⁻³ s⁻¹
Formula:
  t = (2.303 / k) log ( [R]₀ / [R] )
  t = [ 2.303 / (1.15 × 10⁻³ s⁻¹) ] × log(5.0 / 3.0)
  log(5 / 3) = log 5 - log 3 = 0.6990 - 0.4771 = 0.2219
Calculation:
  t = (2.303 / 1.15) × 10³ × 0.2219
  t = 2.0026 × 10³ × 0.2219 = 444.38 s ≈ 444 s.`,
      examApproach: 'State the first-order integrated rate equation at the beginning of both parts.',
      markingPoints: [
        '1.5 Marks: Clear stepwise proof showing t_99% = 2 × (2.303/k) and t_90% = 2.303/k.',
        '1.5 Marks: Correct substitution into rate equation and calculating time t = 444 seconds.'
      ]
    }
  },

  // 4. Ch 4: d & f Block Elements - Reasoning / 3-Mark
  {
    id: 'chem-q4',
    questionNumber: 4,
    subjectId: 'chemistry',
    chapterTitle: 'd & f Block Elements',
    chapterNumber: 4,
    category: 'Coordination & d-f Block Reasoning',
    label: 'Must Practice',
    marks: '3 Marks',
    yearTag: 'CBSE 2024, 2022, 2019',
    question: `Account for the following observations:\n(i) Transition metals and many of their compounds act as good catalysts.\n(ii) Transition elements exhibit variable oxidation states.\n(iii) Zr (Z = 40) and Hf (Z = 72) have almost identical atomic and ionic radii.\n(iv) Transition metals form large numbers of interstitial compounds.`,
    answer: {
      finalAnswer: 'Due to variable valency / vacant d-orbitals; comparable energies of (n-1)d and ns electrons; Lanthanoid Contraction; and entrapment of small non-metal atoms (H, C, N) inside metal lattice voids.',
      formulaOrConcept: `• Lanthanoid Contraction: Poor shielding by diffuse 4f electrons causes continuous decrease in atomic radii.\n• Catalytic property: Ability to adopt multiple oxidation states and provide large surface area.\n• Variable valency: Energy gap between (n-1)d and ns electrons is very small.`,
      solution: `(i) Good Catalysts:
Transition metals act as efficient catalysts because:
  1. They exhibit variable oxidation states, enabling them to form unstable intermediate compounds that provide an alternative reaction pathway with lower activation energy.
  2. They possess vacant d-orbitals and large surface areas, facilitating adsorption of reactant molecules on their surface to weaken chemical bonds.

(ii) Variable Oxidation States:
Transition metals exhibit variable oxidation states because the energy difference between the outer ns electrons and inner (n-1)d electrons is extremely small. Therefore, both ns and (n-1)d electrons can participate in bond formation.

(iii) Identical Radii of Zr and Hf:
Zr (4d series) and Hf (5d series) possess nearly identical atomic radii (Zr: 160 pm, Hf: 159 pm) due to Lanthanoid Contraction. The filling of 4f subshell before the 5d series introduces 14 inner 4f electrons that provide very poor shielding effect against the increasing nuclear charge (+14 units), causing the outermost 5d electrons to be pulled tightly inwards.

(iv) Interstitial Compounds:
Transition metals have open crystal lattice structures with voids/interstices. Small non-metallic atoms like H, B, C, and N get trapped inside these interstitial spaces without altering the crystal structure, forming interstitial compounds that are hard, high-melting, and chemically inert.`,
      examApproach: 'Write precise NCERT keywords: "poor shielding effect of 4f electrons", "comparable energies of (n-1)d and ns electrons", and "adsorption on vacant d-orbitals".',
      markingPoints: [
        '0.75 Mark each (Total 3 Marks): Correct NCERT scientific reason for all 4 parts.'
      ]
    }
  },

  // 5. Ch 5: Coordination Compounds - VBT & IUPAC / 3-Mark
  {
    id: 'chem-q5',
    questionNumber: 5,
    subjectId: 'chemistry',
    chapterTitle: 'Coordination Compounds',
    chapterNumber: 5,
    category: 'Most Repeated Questions',
    label: 'High Priority',
    marks: '3 Marks',
    yearTag: 'CBSE 2024, 2023, 2020',
    question: `For the complex ion [CoF₆]³⁻ and [Co(NH₃)₆]³⁺ (Atomic number of Co = 27):\n(i) Write the IUPAC name of both complexes.\n(ii) Using Valence Bond Theory (VBT), predict the hybridization, geometry, and magnetic nature (paramagnetic or diamagnetic) of each complex.\n(iii) Which one is an inner orbital and which one is an outer orbital complex?`,
    answer: {
      finalAnswer: '[CoF₆]³⁻: sp³d² (outer orbital, paramagnetic, 4 unpaired electrons); [Co(NH₃)₆]³⁺: d²sp³ (inner orbital, diamagnetic, 0 unpaired electrons).',
      formulaOrConcept: `• Co (Z = 27): [Ar] 3d⁷ 4s² => Co³⁺: [Ar] 3d⁶ 4s⁰\n• Strong field ligand (NH₃) causes pairing of 3d electrons => d²sp³ (inner orbital)\n• Weak field ligand (F⁻) does not pair electrons => sp³d² (outer orbital)`,
      solution: `(i) IUPAC Names:
• [CoF₆]³⁻: Hexafluoridocobaltate(III) ion. (Cobaltate because the complex ion carries a net negative charge).
• [Co(NH₃)₆]³⁺: Hexaamminecobalt(III) ion.

(ii) Valence Bond Theory Analysis (Co³⁺ has configuration [Ar] 3d⁶):
1. For [CoF₆]³⁻:
   • F⁻ is a weak field ligand and cannot overcome the pairing energy (Δ₀ < P).
   • The 6 electrons in 3d remain unpaired as: (↑↓) (↑) (↑) (↑) (↑) (4 unpaired electrons).
   • Co³⁺ utilizes one 4s, three 4p, and two outer 4d orbitals: Hybridization = sp³d².
   • Geometry: Octahedral.
   • Magnetic Character: Paramagnetic (due to 4 unpaired electrons; spin-only magnetic moment μ = √(4(4+2)) = √24 ≈ 4.9 BM).
   • Nature: Outer orbital complex (high spin).

2. For [Co(NH₃)₆]³⁺:
   • NH₃ is a strong field ligand (Δ₀ > P). It forces the 3d electrons to pair up against Hund's rule:
     Six 3d electrons pair up into three 3d orbitals: (↑↓) (↑↓) (↑↓).
   • Two empty inner 3d orbitals, one 4s, and three 4p orbitals hybridize: Hybridization = d²sp³.
   • Geometry: Octahedral.
   • Magnetic Character: Diamagnetic (zero unpaired electrons).
   • Nature: Inner orbital complex (low spin).

(iii) Classification:
• [Co(NH₃)₆]³⁺ is an Inner Orbital Complex (d²sp³ using 3d).
• [CoF₆]³⁻ is an Outer Orbital Complex (sp³d² using 4d).`,
      examApproach: 'Note spelling of ammine with double "m" (ammine, not amine) in coordination chemistry IUPAC nomenclature.',
      markingPoints: [
        '1 Mark: Correct IUPAC names of both complexes.',
        '1.5 Marks: Detailed VBT hybridization schemes (sp³d² vs d²sp³) with magnetic behavior.',
        '0.5 Mark: Correct classification of inner vs outer orbital complexes.'
      ]
    }
  },

  // 6. Ch 6: Haloalkanes & Haloarenes - SN1 vs SN2 / 3-Mark
  {
    id: 'chem-q6',
    questionNumber: 6,
    subjectId: 'chemistry',
    chapterTitle: 'Haloalkanes & Haloarenes',
    chapterNumber: 6,
    category: 'Important Name Reactions & Mechanisms',
    label: 'Frequently Asked',
    marks: '3 Marks',
    yearTag: 'CBSE 2024, 2021, 2017',
    question: `(a) Distinguish between S_N1 and S_N2 mechanisms with respect to:\n  (i) Kinetics/Order of reaction.\n  (ii) Stereochemical outcome.\n  (iii) Relative reactivity order of alkyl halides (1°, 2°, 3°).\n(b) Out of (CH₃)₃C-Br and CH₃-CH₂-CH₂-CH₂-Br, which will react faster towards S_N1 mechanism and why?`,
    answer: {
      finalAnswer: 'S_N1: 1st order, racemization, 3° > 2° > 1°; S_N2: 2nd order, Walden inversion, 1° > 2° > 3°. (CH₃)₃C-Br reacts much faster via S_N1 due to tertiary carbocation stability.',
      formulaOrConcept: `• S_N1: Rate = k[R-X] (two steps via carbocation intermediate)\n• S_N2: Rate = k[R-X][Nu⁻] (single concerted step via pentavalent transition state)\n• Carbocation stability: 3° > 2° > 1° > methyl`,
      solution: `(a) Comparison between S_N1 and S_N2:
1. Kinetics / Order:
   • S_N1: Unimolecular, first-order kinetics: Rate = k[R-X].
   • S_N2: Bimolecular, second-order kinetics: Rate = k[R-X][Nu⁻].
2. Stereochemical Outcome:
   • S_N1: Proceeding through a planar carbocation intermediate attacked equally from front and rear sides, an optically active substrate undergoes Racemization (partial inversion + retention).
   • S_N2: Backside attack of nucleophile occurs simultaneously with leaving group departure, causing complete Inversion of Configuration (Walden Inversion).
3. Reactivity Order of Alkyl Halides:
   • S_N1: 3° > 2° > 1° > CH₃X (governed by stability of intermediate carbocation).
   • S_N2: CH₃X > 1° > 2° > 3° (governed by steric hindrance around α-carbon).

(b) S_N1 Reactivity Comparison:
• (CH₃)₃C-Br (tert-butyl bromide, 3° alkyl halide) reacts much faster via S_N1 than CH₃CH₂CH₂CH₂Br (1° alkyl halide).
• Reason: The rate-determining step in S_N1 is carbocation formation. (CH₃)₃C-Br ionizes to form the 3° carbocation (CH₃)₃C⁺, which is highly stabilized by nine hyperconjugative hydrogens and +I inductive effect of three methyl groups. In contrast, 1-bromobutane forms an unstable primary carbocation.`,
      examApproach: 'Always mention "steric hindrance" for S_N2 and "carbocation stability via hyperconjugation/+I effect" for S_N1.',
      markingPoints: [
        '1.5 Marks: Correct comparison of S_N1 and S_N2 across kinetics, stereochemistry, and reactivity order.',
        '1.5 Marks: Choosing (CH₃)₃C-Br and explaining 3° carbocation stability via hyperconjugation.'
      ]
    }
  },

  // 7. Ch 7: Alcohols, Phenols & Ethers - Chemical Tests & Acidity / 3-Mark
  {
    id: 'chem-q7',
    questionNumber: 7,
    subjectId: 'chemistry',
    chapterTitle: 'Alcohols, Phenols & Ethers',
    chapterNumber: 7,
    category: 'Organic Reasoning & Distinction Tests',
    label: 'Repeated Concept',
    marks: '3 Marks',
    yearTag: 'CBSE 2024, 2023, 2018',
    question: `(a) Explain why phenol is more acidic than ethanol.\n(b) Write the chemical equation for Kolbe\'s reaction and Reimer-Tiemann reaction.\n(c) How will you chemically distinguish between Ethanol (CH₃CH₂OH) and Phenol (C₆H₅OH)?`,
    answer: {
      finalAnswer: 'Phenol is more acidic due to resonance stabilization of phenoxide ion; Kolbe yields salicylic acid; Reimer-Tiemann yields salicylaldehyde; distinguish using neutral FeCl₃ test (phenol gives violet coloration).',
      formulaOrConcept: `• Phenoxide ion is resonance stabilized across 5 canonical structures.\n• Ethoxide ion is destabilized by +I electron-donating ethyl group.\n• Phenol + neutral FeCl₃ -> Violet complex [Fe(OC₆H₅)₆]³⁻ (Ethanol gives no reaction).`,
      solution: `(a) Acidity of Phenol vs Ethanol:
1. Phenol loses a proton to form the Phenoxide ion (C₆H₅O⁻). The negative charge on oxygen is delocalized over the aromatic benzene ring across five resonance structures, providing high thermodynamic stability to the conjugate base.
2. In contrast, ethanol loses a proton to form the Ethoxide ion (CH₃CH₂O⁻). The ethyl group has an electron-donating inductive effect (+I), which concentrates negative charge on oxygen, destabilizing the alkoxide ion.
3. Furthermore, in phenol, the -OH is attached to an sp² hybridized carbon (more electronegative), whereas in ethanol it is attached to an sp³ carbon. Hence, phenol dissociates more readily to furnish H⁺ ions.

(b) Important Name Reactions:
1. Kolbe\'s Reaction:
   Phenol is treated with aqueous NaOH to form sodium phenoxide, followed by reaction with CO₂ gas at 400 K and 4-7 atm pressure, followed by acid hydrolysis to produce Salicylic acid (2-hydroxybenzoic acid):
   C₆H₅OH + NaOH -> C₆H₅ONa  --[CO₂, 400K, 4-7 atm]-->  --[H⁺]-->  o-HO-C₆H₄-COOH (Salicylic acid).
2. Reimer-Tiemann Reaction:
   Phenol is treated with chloroform (CHCl₃) in the presence of aqueous NaOH at 340 K, followed by acid hydrolysis, introducing an aldehyde group (-CHO) ortho to the phenolic -OH, yielding Salicylaldehyde (2-hydroxybenzaldehyde):
   C₆H₅OH + CHCl₃ + 3 NaOH  --[340 K]-->  --[H⁺]-->  o-HO-C₆H₄-CHO (Salicylaldehyde) + 3 NaCl + 2 H₂O.

(c) Chemical Distinction Test:
• Neutral Ferric Chloride (FeCl₃) Test:
  - Add 1-2 drops of neutral FeCl₃ solution:
  - Phenol produces a characteristic intense violet/purple colored coordination complex:
    6 C₆H₅OH + FeCl₃ -> [Fe(OC₆H₅)₆]³⁻ (Violet) + 3 H⁺ + 3 HCl.
  - Ethanol gives no characteristic color change with neutral FeCl₃.`,
      examApproach: 'For distinction tests, always state: (1) Reagent added, (2) Observation with compound A, (3) Observation with compound B.',
      markingPoints: [
        '1 Mark: Explanation of resonance stabilization of phenoxide vs +I destabilization of ethoxide.',
        '1 Mark: Balanced equations for Kolbe\'s reaction (salicylic acid) and Reimer-Tiemann (salicylaldehyde).',
        '1 Mark: Neutral FeCl₃ test with clear violet observation for phenol.'
      ]
    }
  },

  // 8. Ch 8: Aldehydes, Ketones & Carboxylic Acids - 5-Mark Long / Aldol & Cannizzaro
  {
    id: 'chem-q8',
    questionNumber: 8,
    subjectId: 'chemistry',
    chapterTitle: 'Aldehydes, Ketones & Carboxylic Acids',
    chapterNumber: 8,
    category: '5-Mark Long Questions',
    label: 'High Priority',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2023 (Delhi), 2019',
    question: `(a) Write chemical equations for the following named reactions:\n  (i) Aldol Condensation\n  (ii) Cannizzaro Reaction\n  (iii) Hell-Volhard-Zelinsky (HVZ) Reaction\n(b) Give chemical tests to distinguish between:\n  (i) Propanal and Propanone\n  (ii) Benzoic acid and Phenol\n(c) Explain why carboxylic acids do not give characteristic reactions of carbonyl group (e.g. they do not form oximes or phenylhydrazones).`,
    answer: {
      finalAnswer: 'Propanal vs Propanone distinguished by Tollens\' / Fehling\'s test; Benzoic acid vs Phenol distinguished by NaHCO₃ effervescence; carboxylic acid carbonyl is unreactive due to resonance delocalization from -OH oxygen.',
      formulaOrConcept: `• Aldol: Aldehydes/ketones with α-hydrogen + dilute alkali -> β-hydroxy aldehyde -> α,β-unsaturated aldehyde.\n• Cannizzaro: Aldehydes lacking α-hydrogen + conc. alkali -> disproportionation to alcohol and carboxylate salt.\n• Carbonyl resonance in -COOH reduces electrophilicity of carbonyl carbon.`,
      solution: `(a) Chemical Equations:
(i) Aldol Condensation:
Two molecules of ethanal (having α-hydrogens) condense in the presence of dilute NaOH to form 3-hydroxybutanal (aldol), which on heating loses water to give but-2-enal:
  2 CH₃CHO  --[dil. NaOH]-->  CH₃-CH(OH)-CH₂-CHO (Aldol)  --[Δ, -H₂O]-->  CH₃-CH=CH-CHO (But-2-enal).

(ii) Cannizzaro Reaction:
Benzaldehyde (lacking α-hydrogens) undergoes self-oxidation and reduction (disproportionation) when heated with concentrated (50%) NaOH, yielding benzyl alcohol and sodium benzoate:
  2 C₆H₅CHO + conc. NaOH  --[Δ]-->  C₆H₅CH₂OH (Benzyl alcohol) + C₆H₅COONa (Sodium benzoate).

(iii) Hell-Volhard-Zelinsky (HVZ) Reaction:
Carboxylic acids having an α-hydrogen react with chlorine or bromine in the presence of a catalytic amount of red phosphorus to form α-halocarboxylic acids:
  CH₃COOH + Cl₂  --[Red P]-->  --[H₂O]-->  Cl-CH₂-COOH (α-chloroacetic acid) + HCl.

(b) Chemical Distinction Tests:
(i) Propanal (CH₃CH₂CHO) vs Propanone (CH₃COCH₃):
  • Tollens' Test:
    - Add Tollens' reagent (ammoniacal silver nitrate) and warm in water bath:
    - Propanal (an aldehyde) reduces Tollens' reagent to give a shining Silver Mirror on the test tube walls:
      CH₃CH₂CHO + 2 [Ag(NH₃)₂]⁺ + 3 OH⁻ -> CH₃CH₂COO⁻ + 2 Ag↓ (Silver Mirror) + 4 NH₃ + 2 H₂O.
    - Propanone (a ketone) does not reduce Tollens' reagent (No silver mirror).
  (Or Fehling's test: Propanal gives red Cu₂O precipitate, propanone does not).

(ii) Benzoic Acid (C₆H₅COOH) vs Phenol (C₆H₅OH):
  • Sodium Bicarbonate (NaHCO₃) Test:
    - Add aqueous 5% NaHCO₃ solution:
    - Benzoic acid (stronger organic acid) reacts with brisk effervescence due to the evolution of CO₂ gas:
      C₆H₅COOH + NaHCO₃ -> C₆H₅COONa + H₂O + CO₂↑ (Brisk effervescence).
    - Phenol is too weakly acidic to decompose NaHCO₃ and shows no effervescence.

(c) Lack of Carbonyl Reactions in Carboxylic Acids:
In carboxylic acids (-COOH), the lone pair of electrons on the hydroxyl (-OH) oxygen atom is in resonance with the adjacent carbonyl pi bond:
  R-C(=O)-OH  <->  R-C(O⁻)=O⁺H.
This resonance delocalization significantly reduces the positive character (electrophilicity) of the carbonyl carbon atom. Consequently, the carbonyl carbon in carboxylic acids is far less susceptible to nucleophilic attack, and hence does not undergo typical nucleophilic addition reactions to form oximes, 2,4-DNP derivatives, or phenylhydrazones.`,
      examApproach: 'Always mention conditions: dilute alkali for Aldol, concentrated alkali (50%) for Cannizzaro, and Red P for HVZ.',
      markingPoints: [
        '1.5 Marks: Balanced chemical equations with correct reagents for Aldol, Cannizzaro, and HVZ.',
        '2 Marks: Complete distinction tests with observable color changes / gas effervescence.',
        '1.5 Marks: Resonance explanation showing why the carbonyl carbon of -COOH lacks electrophilicity.'
      ]
    }
  },

  // 9. Ch 9: Amines - Basic Strength & Hoffmann Bromamide / 3-Mark
  {
    id: 'chem-q9',
    questionNumber: 9,
    subjectId: 'chemistry',
    chapterTitle: 'Amines',
    chapterNumber: 9,
    category: 'Most Repeated Questions',
    label: 'Frequently Asked',
    marks: '3 Marks',
    yearTag: 'CBSE 2024, 2022, 2018',
    question: `(a) Arrange the following in decreasing order of their basic strength in aqueous solution and justify the order:\n    (CH₃)₂NH, CH₃NH₂, (CH₃)₃N, NH₃\n(b) Write the chemical equation for Hoffmann Bromamide Degradation reaction.\n(c) Why cannot aromatic primary amines (like aniline) be prepared by Gabriel Phthalimide synthesis?`,
    answer: {
      finalAnswer: 'Aqueous order: (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃; Hoffmann reaction degrades amides to 1° amines with 1 fewer carbon; Gabriel synthesis fails because aryl halides cannot undergo nucleophilic substitution with phthalimide anion.',
      formulaOrConcept: `• In aqueous medium, basic strength is combined resultant of: (1) +I inductive effect, (2) Solvation effect (hydrogen bonding), and (3) Steric hindrance.\n• For methyl substituted amines: 2° > 1° > 3° > NH₃ (213 order).\n• For ethyl substituted amines: 2° > 3° > 1° > NH₃ (231 order).`,
      solution: `(a) Order of Basic Strength in Aqueous Solution:
• Order: (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ (2° > 1° > 3° > NH₃).
• Justification:
  In aqueous solution, the basicity of amines is governed by three opposing factors:
  1. Inductive Effect (+I): Electron-releasing methyl groups increase electron density on nitrogen, favoring basicity in the order: 3° > 2° > 1° > NH₃.
  2. Solvation Effect (Hydration of Substituted Ammonium Cations): Greater number of hydrogen atoms on the conjugate cation allows greater stabilization via hydrogen bonding with water: 1° > 2° > 3°.
  3. Steric Hindrance: Bulky methyl groups hinder proton approach on nitrogen: 1° > 2° > 3°.
  The combined resultant of all three factors makes the secondary amine (CH₃)₂NH the strongest base in water. In (CH₃)₃N, severe steric hindrance and poor solvation drastically reduce basicity below 1° amine.

(b) Hoffmann Bromamide Degradation Reaction:
An aliphatic or aromatic primary amide is treated with bromine in an aqueous or ethanolic solution of sodium hydroxide to yield a primary amine containing ONE carbon atom LESS than the parent amide:
  R-CONH₂ + Br₂ + 4 NaOH  --[Δ]-->  R-NH₂ + Na₂CO₃ + 2 NaBr + 2 H₂O.
  Example: CH₃CONH₂ (Acetamide) + Br₂ + 4 NaOH -> CH₃NH₂ (Methylamine) + Na₂CO₃ + 2 NaBr + 2 H₂O.

(c) Gabriel Phthalimide Synthesis Limitation for Aniline:
In Gabriel phthalimide synthesis, the potassium salt of phthalimide reacts with an alkyl halide in an S_N2 nucleophilic substitution step.
Aryl halides (like chlorobenzene or bromobenzene) do not undergo nucleophilic substitution with the bulky phthalimide anion under normal conditions because:
  1. The C-X bond possesses partial double-bond character due to resonance with the benzene ring.
  2. The sp² hybridized carbon of the benzene ring is more electronegative and holds halogen tightly.
  3. Steric repulsion between the electron-rich benzene ring and the incoming nucleophile prevents backside attack.
Hence, aniline cannot be prepared by this method.`,
      examApproach: 'Remember rule: For methyl group, order is 213 (2° > 1° > 3°). For ethyl group, order is 231 (2° > 3° > 1°). Don\'t confuse them in exams.',
      markingPoints: [
        '1 Mark: Correct order (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃ with explanation of 3 factors.',
        '1 Mark: Balanced Hoffmann Bromamide equation showing degradation by 1 carbon atom.',
        '1 Mark: Explanation of resonance/partial double bond character preventing S_N2 attack on aryl halides.'
      ]
    }
  },

  // 10. Ch 10: Biomolecules - Carbohydrates, Proteins, Nucleic Acids / 3-Mark
  {
    id: 'chem-q10',
    questionNumber: 10,
    subjectId: 'chemistry',
    chapterTitle: 'Biomolecules',
    chapterNumber: 10,
    category: 'Most Repeated Questions',
    label: 'CBSE Board Pattern',
    marks: '3 Marks',
    yearTag: 'CBSE 2024, 2023, 2020',
    question: `(a) What happens when D-glucose is treated with:\n  (i) Bromine water (Br₂ / H₂O)?\n  (ii) Concentrated Nitric acid (conc. HNO₃)?\n  (iii) Hydroxylamine (NH₂OH)?\n(b) Define the following terms:\n  (i) Peptide linkage\n  (ii) Denaturation of proteins\n(c) Name the deficiency disease caused by lack of Vitamin B₁₂ and Vitamin D.`,
    answer: {
      finalAnswer: 'Br₂ water oxidizes glucose to Gluconic acid; conc. HNO₃ oxidizes glucose to Saccharic acid; NH₂OH forms Glucose oxime; deficiency of B₁₂ causes Pernicious Anemia; Vitamin D causes Rickets.',
      formulaOrConcept: `• Gluconic acid: HOCH₂-(CHOH)₄-COOH (mild oxidation of -CHO only)\n• Saccharic acid: HOOC-(CHOH)₄-COOH (vigorous oxidation of both -CHO and terminal -CH₂OH)\n• Peptide linkage: -CO-NH- formed between -COOH of one amino acid and -NH₂ of another with elimination of water.`,
      solution: `(a) Reactions of D-Glucose:
(i) With Bromine Water (mild oxidizing agent):
  Only the aldehyde group (-CHO) is oxidized to a carboxylic acid (-COOH) without affecting the alcoholic groups, forming Gluconic acid:
  CHO-(CHOH)₄-CH₂OH + [O]  --[Br₂/H₂O]-->  COOH-(CHOH)₄-CH₂OH (Gluconic acid).
(ii) With Concentrated Nitric Acid (strong oxidizing agent):
  Both the terminal aldehyde (-CHO) and primary alcohol (-CH₂OH) groups undergo oxidation to carboxylic acid groups, forming Saccharic acid (glucaric acid):
  CHO-(CHOH)₄-CH₂OH + 3 [O]  --[conc. HNO₃, Δ]-->  COOH-(CHOH)₄-COOH (Saccharic acid) + H₂O.
(iii) With Hydroxylamine (NH₂OH):
  The carbonyl aldehyde group undergoes nucleophilic addition-elimination to yield Glucose oxime:
  CHO-(CHOH)₄-CH₂OH + NH₂OH -> CH=N-OH-(CHOH)₄-CH₂OH + H₂O (Glucose oxime).

(b) Definitions:
(i) Peptide Linkage:
  An amide linkage (-CO-NH-) formed between the carboxyl group (-COOH) of one α-amino acid molecule and the amino group (-NH₂) of another α-amino acid molecule with the elimination of a molecule of water.
(ii) Denaturation of Proteins:
  When a native protein in its biological environment is subjected to physical change (such as change in temperature) or chemical change (such as change in pH), the hydrogen bonds are disturbed. As a result, globules unfold, helices get uncoiled, and the protein loses its biological activity. During denaturation, secondary (2°) and tertiary (3°) structures are destroyed, but primary (1°) structure remains intact.

(c) Deficiency Diseases:
• Vitamin B₁₂: Pernicious Anemia (severe megaloblastic anemia).
• Vitamin D: Rickets (in children, softening of bones) and Osteomalacia (in adults).`,
      examApproach: 'Crucial Marking Point: In denaturation of proteins, always emphasize that the PRIMARY STRUCTURE REMAINS INTACT because covalent peptide bonds are not broken by moderate heating or pH changes.',
      markingPoints: [
        '1 Mark: Correct products of glucose oxidation (Gluconic acid, Saccharic acid, Glucose oxime).',
        '1 Mark: Clear definitions of peptide linkage (-CO-NH-) and denaturation with mention of intact 1° structure.',
        '1 Mark: Correct deficiency diseases: Pernicious Anemia and Rickets.'
      ]
    }
  },

  // 11. Case-Based Question: Chemical Kinetics & Arrhenius Equation
  {
    id: 'chem-q11',
    questionNumber: 11,
    subjectId: 'chemistry',
    chapterTitle: 'Chemical Kinetics',
    chapterNumber: 3,
    category: 'Case-Based Questions',
    label: 'CBSE Board Pattern',
    marks: '4 Marks Case Study',
    yearTag: 'CBSE 2024 (Sample Paper & Board Exam)',
    question: `Read the following passage and answer the questions that follow:\n\nThe rate of a chemical reaction is profoundly influenced by temperature. For most chemical reactions, the rate constant nearly doubles or triples for every 10 °C rise in temperature. Svante Arrhenius proposed a quantitative relationship: k = A e^(-E_a / RT), where k is the rate constant, A is the Arrhenius pre-exponential factor, E_a is the activation energy, R is the universal gas constant, and T is absolute temperature in Kelvin. According to collision theory, activation energy represents the minimum kinetic energy that colliding reactant molecules must possess to overcome the energy barrier and result in effective chemical transformation.\n\nQuestions:\n(i) What is the effect of adding a positive catalyst on the activation energy (E_a) and the enthalpy change (ΔH) of the reaction?\n(ii) In a plot of ln k versus 1/T, what are the slope and the intercept of the straight line?\n(iii) The rate constant of a reaction at 500 K and 700 K are 0.02 s⁻¹ and 0.07 s⁻¹ respectively. Calculate the activation energy (E_a) of the reaction. (R = 8.314 J/K·mol, log 3.5 = 0.5441).`,
    answer: {
      finalAnswer: '(i) Lowers E_a, leaves ΔH unchanged; (ii) Slope = - E_a / R, Intercept = ln A; (iii) Activation energy E_a = 18.23 kJ/mol.',
      formulaOrConcept: `• Arrhenius equation in log form: log(k₂ / k₁) = (E_a / 2.303 R) [ (T₂ - T₁) / (T₁ T₂) ]\n• ln k = ln A - (E_a / R) · (1/T)`,
      solution: `(i) Effect of Catalyst:
• Activation Energy (E_a): A positive catalyst lowers the activation energy by providing an alternative reaction pathway with a lower energy barrier.
• Enthalpy Change (ΔH): The enthalpy change ΔH remains completely unchanged because a catalyst speeds up both forward and backward reactions to the same extent and does not alter the energy levels of reactants or products.

(ii) Graphical Analysis of ln k vs 1/T:
Taking natural logarithm of Arrhenius equation:
  ln k = ln A - (E_a / R) · (1 / T)
Comparing with equation of a straight line y = m x + c (where y = ln k and x = 1/T):
  • Slope (m) = - E_a / R
  • Intercept (c) = ln A.

(iii) Numerical Calculation of E_a:
Given:
• T₁ = 500 K, k₁ = 0.02 s⁻¹
• T₂ = 700 K, k₂ = 0.07 s⁻¹
• k₂ / k₁ = 0.07 / 0.02 = 3.5 => log 3.5 = 0.5441
• R = 8.314 J/K·mol

Formula:
  log(k₂ / k₁) = [ E_a / (2.303 × R) ] × [ (T₂ - T₁) / (T₁ × T₂) ]
Substitution:
  0.5441 = [ E_a / (2.303 × 8.314) ] × [ (700 - 500) / (700 × 500) ]
  0.5441 = [ E_a / 19.147 ] × [ 200 / 350000 ]
  0.5441 = [ E_a / 19.147 ] × (1 / 1750)
Solving for E_a:
  E_a = 0.5441 × 19.147 × 1750
  E_a = 18231.8 J/mol = 18.23 kJ/mol.`,
      examApproach: 'Always express the final activation energy in kJ/mol with proper decimal precision.',
      markingPoints: [
        '1 Mark: Stating E_a decreases while ΔH remains unchanged.',
        '1 Mark: Correct slope (-E_a/R) and intercept (ln A).',
        '2 Marks: Correct substitution into Arrhenius ratio formula yielding E_a = 18.23 kJ/mol.'
      ]
    }
  },

  // 12. Assertion & Reason: Solutions
  {
    id: 'chem-q12',
    questionNumber: 12,
    subjectId: 'chemistry',
    chapterTitle: 'Solutions',
    chapterNumber: 1,
    category: 'Assertion & Reason',
    label: 'CBSE Board Pattern',
    marks: '1 Mark',
    yearTag: 'CBSE 2024, 2023',
    question: `Given below are two statements labeled as Assertion (A) and Reason (R):\nAssertion (A): 0.1 M solution of KCl has a higher osmotic pressure than 0.1 M solution of urea at the same temperature.\nReason (R): Potassium chloride (KCl) dissociates into K⁺ and Cl⁻ ions in aqueous solution, whereas urea is a non-electrolyte and does not dissociate.`,
    options: [
      '(a) Both (A) and (R) are true and (R) is the correct explanation of (A).',
      '(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(c) (A) is true but (R) is false.',
      '(d) (A) is false but (R) is true.'
    ],
    answer: {
      correctOption: '(a) Both (A) and (R) are true and (R) is the correct explanation of (A).',
      finalAnswer: 'Option (a) is correct: Both Assertion and Reason are true, and Reason is the correct explanation.',
      formulaOrConcept: `• Osmotic pressure: Π = i · C R T\n• For KCl: i ≈ 2 (dissociates into K⁺ + Cl⁻)\n• For urea: i = 1 (non-electrolyte)`,
      solution: `1. Osmotic pressure is a colligative property governed by Π = i · C R T.
2. For 0.1 M urea, being a non-electrolyte, van\'t Hoff factor i = 1.
   Π(urea) = 1 × 0.1 × R T = 0.1 R T.
3. For 0.1 M KCl, it undergoes complete dissociation into K⁺ and Cl⁻ ions, giving van\'t Hoff factor i = 2.
   Π(KCl) = 2 × 0.1 × R T = 0.2 R T.
4. Since Π(KCl) is double that of urea at the same molar concentration and temperature, Assertion (A) is true, and Reason (R) provides the exact scientific explanation.`,
      examApproach: 'Write van\'t Hoff equation Π = iCRT and evaluate i for both solutes.',
      markingPoints: [
        '1 Mark: Correct selection of option (a) with van\'t Hoff factor justification.'
      ]
    }
  }
];
