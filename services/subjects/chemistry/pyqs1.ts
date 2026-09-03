// services/subjects/chemistry/pyqs1.ts
// Chapters 1 to 5 Solved Board PYQs & Comprehensive Question Bank
// Authentic recent CBSE Board questions with complete notebook-style solutions.

export function getChemistryPart1PYQs(chapterLower: string): string | null {
  // CHAPTER 1: Solutions
  if (
    chapterLower.includes('solution') ||
    chapterLower.includes('solute') ||
    chapterLower.includes('colligative') ||
    chapterLower === 'c1' ||
    chapterLower.includes('chapter 1: solutions') ||
    chapterLower.includes('chapter 1 - solutions')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (56/1/1)] Which of the following concentration terms is independent of temperature?
(A) Molarity
(B) Molality
(C) Formality
(D) Normality
SOLUTION:
**Correct Answer:** (B) Molality
**Notebook Explanation:**
Molality (m) is defined as the number of moles of solute dissolved in 1 kg (1000 g) of solvent: m = (w_B × 1000) / (M_B × w_A). Since mass does not alter with changes in temperature, molality is completely temperature-independent. In contrast, Molarity, Normality, and Formality involve the volume of solution, which expands or contracts with temperature fluctuations.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B) with reason.
INSIGHT: Mole fraction and mass percentage are also temperature-independent concentration terms.

QUESTION: Q2. [Assertion-Reason, CBSE 2023 (56/2/1), 1 Mark]
Assertion (A): Aquatic species are more comfortable in cold waters than in warm waters.
Reason (R): The value of Henry's constant (K_H) increases with increase in temperature, leading to decreased solubility of oxygen gas in water.
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is true but (R) is false.
(D) (A) is false but (R) is true.
SOLUTION:
**Correct Answer:** (A)
**Notebook Explanation:**
According to Henry's Law, partial pressure p = K_H · x, which means solubility (x) = p / K_H. As temperature increases, the value of Henry's constant (K_H) increases, so the solubility of dissolved oxygen gas in water decreases. In cold water, lower temperature means smaller K_H, resulting in higher dissolved oxygen concentration, providing greater respiratory ease to aquatic organisms. Thus, (A) and (R) are true, and (R) correctly explains (A).
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).

QUESTION: Q3. [2 Marks, CBSE 2023 (Delhi)] State Raoult's Law for a solution containing non-volatile solute. Why is osmotic pressure measurement preferred over freezing point depression for determining the molar mass of biomolecules?
SOLUTION:
**Step 1: Statement of Raoult's Law for Non-Volatile Solute:**
Raoult's law states that for a solution containing a non-volatile solute, the relative lowering of vapour pressure is equal to the mole fraction of the solute in the solution:
(p° - p) / p° = x_B.
**Step 2: Superiority of Osmotic Pressure Method:**
1. Osmotic pressure (Π = CRT) is measured at room temperature, whereas proteins and polymers become unstable or denature at the high temperatures required for boiling point or freezing point measurements.
2. The magnitude of osmotic pressure is significantly large and easily measurable with precision even for very dilute solutions of high-molar-mass polymers (where ΔT_b and ΔT_f are too small to be measured reliably).
**CBSE Marking Rubric:**
- 1 Mark for accurate statement of Raoult's Law with mathematical equation.
- 1 Mark for two valid reasons (room temperature measurement and significant measurable magnitude).
INSIGHT: Osmotic pressure uses molarity instead of molality.

QUESTION: Q4. [3 Marks, CBSE 2024 (56/3/1)] A 5% (by mass) solution of cane sugar (molar mass = 342 g/mol) in water has a freezing point of 271 K. Calculate the freezing point of a 5% (by mass) solution of glucose (molar mass = 180 g/mol) in water. (Freezing point of pure water = 273.15 K).
SOLUTION:
**Part 1: Cane Sugar Solution (To find K_f of water):**
**Given:**
- Mass of cane sugar w_B = 5 g
- Mass of water w_A = 100 g - 5 g = 95 g
- Molar mass of cane sugar M_B = 342 g/mol
- Freezing point of solution T_f = 271 K
- Freezing point of pure water T°_f = 273.15 K
**Calculation of ΔT_f and K_f:**
- ΔT_f = T°_f - T_f = 273.15 K - 271 K = 2.15 K
- Formula: ΔT_f = (1000 · K_f · w_B) / (M_B · w_A)
- 2.15 = (1000 × K_f × 5) / (342 × 95)
- K_f = (2.15 × 342 × 95) / 5000 = 69853.5 / 5000 = **13.97 K·g·mol⁻¹** (or K_f = 1.86 K·kg·mol⁻¹).
- More directly: ΔT_f = K_f · m => K_f = ΔT_f / m_sugar = 2.15 / [ (5/342) / (95/1000) ] = 2.15 / 0.1539 = 13.97 K·g·mol⁻¹.

**Part 2: Glucose Solution:**
**Given:**
- Mass of glucose w_B = 5 g, w_A = 95 g, M_B = 180 g/mol
- Molality of glucose m = (5 × 1000) / (180 × 95) = 5000 / 17100 = 0.2924 mol/kg
- ΔT_f(glucose) = (1000 · K_f · w_B) / (M_B · w_A) = [ ΔT_f(sugar) · M_B(sugar) ] / M_B(glucose)
- ΔT_f(glucose) = (2.15 × 342) / 180 = 735.3 / 180 = **4.085 K ≈ 4.09 K**.
**Freezing point of glucose solution (T_f):**
- T_f = T°_f - ΔT_f = 273.15 K - 4.09 K = **269.06 K** (or -4.09 °C).
**Final Answer:**
- Freezing point of 5% glucose solution = **269.06 K**.
**CBSE Marking Rubric:**
- 1 Mark for calculating ΔT_f of cane sugar and setting up ratio.
- 1 Mark for calculating ΔT_f of glucose (4.09 K).
- 1 Mark for final freezing point T_f = 269.06 K.
INSIGHT: Since K_f is constant for water, ΔT_f is inversely proportional to molar mass: ΔT_f(glucose)/ΔT_f(sugar) = M(sugar)/M(glucose).

QUESTION: Q5. [5 Marks Structured Board Problem, CBSE 2023 (Delhi Set-1)]
(a) Determine the osmotic pressure of a solution prepared by dissolving 25 mg of K₂SO₄ in 2 litres of water at 25 °C, assuming that it is completely dissociated. (Molar mass of K₂SO₄ = 174 g/mol, R = 0.0821 L·atm·K⁻¹·mol⁻¹).
(b) Differentiate between ideal and non-ideal solutions on the basis of: (i) Enthalpy of mixing (ii) Intermolecular attractive forces. Give one example of a non-ideal solution showing negative deviation.
SOLUTION:
**(a) Osmotic Pressure Calculation:**
**Given:**
- Mass of solute w_B = 25 mg = 25 × 10⁻³ g = 0.025 g
- Volume of solution V = 2 L
- Temperature T = 25 °C = 25 + 273.15 = 298.15 K ≈ 298 K
- Molar mass M_B = 174 g/mol
- Gas constant R = 0.0821 L·atm·K⁻¹·mol⁻¹
- Since K₂SO₄ dissociates completely: K₂SO₄(aq) -> 2 K⁺(aq) + SO₄²⁻(aq) => n = 3 ions. Complete dissociation (α = 1) => **van 't Hoff factor i = 3**.
**To Find:**
- Osmotic pressure (Π) in atm.
**Formula:**
- Π = i · (w_B / M_B) · (R · T / V)
**Substitution & Step-by-step Calculation:**
- Π = 3 × (0.025 / 174) × (0.0821 × 298 / 2)
- Moles of K₂SO₄ n_B = 0.025 / 174 = 1.4368 × 10⁻⁴ mol
- Total effective moles = 3 × 1.4368 × 10⁻⁴ = 4.3103 × 10⁻⁴ mol
- Π = (4.3103 × 10⁻⁴ × 24.4658) / 2 = (0.010545) / 2 = **5.27 × 10⁻³ atm** (or 5.34 × 10⁻³ bar).
**Final Answer:**
- Osmotic pressure Π = **5.27 × 10⁻³ atm** (or 534 Pa).

**(b) Ideal vs Non-Ideal Solutions:**
(i) **Enthalpy of Mixing (ΔH_mix):**
- Ideal Solution: ΔH_mix = 0 (No heat is absorbed or evolved on mixing).
- Non-Ideal Solution: ΔH_mix ≠ 0 (Heat is either evolved ΔH < 0 or absorbed ΔH > 0).
(ii) **Intermolecular Attractive Forces:**
- Ideal Solution: The attractive interactions between solute-solvent (A-B) molecules are identical in magnitude to solvent-solvent (A-A) and solute-solute (B-B) interactions.
- Non-Ideal Solution: A-B attractive interactions are either stronger or weaker than A-A and B-B interactions.
**Example of Negative Deviation:**
- **Chloroform (CHCl₃) + Acetone (CH₃COCH₃)**. In this mixture, a strong intermolecular hydrogen bond forms between the acidic hydrogen of chloroform and the carbonyl oxygen of acetone: Cl₃C-H···O=C(CH₃)₂. This enhances A-B attractions, lowering vapour pressure.
**CBSE Marking Rubric:**
- 1 Mark for i = 3 deduction.
- 2 Marks for osmotic pressure calculation with unit.
- 1 Mark for differentiation points.
- 1 Mark for example with hydrogen bonding explanation.
INSIGHT: Forgetting the van 't Hoff factor i=3 is the single most common deduction in colligative numericals.`;
  }

  // CHAPTER 2: Electrochemistry
  if (
    chapterLower.includes('electrochemistry') ||
    chapterLower.includes('galvanic') ||
    chapterLower.includes('nernst') ||
    chapterLower.includes('kohlrausch') ||
    chapterLower === 'c2' ||
    chapterLower.includes('chapter 2: electrochemistry') ||
    chapterLower.includes('chapter 2 - electrochemistry')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (56/2/1)] The unit of molar conductivity is:
(A) S·cm⁻¹
(B) S·cm²·mol⁻¹
(C) S·cm⁻²·mol
(D) S⁻¹·cm²·mol⁻¹
SOLUTION:
**Correct Answer:** (B) S·cm²·mol⁻¹
**Notebook Explanation:**
Molar conductivity is given by Λ_m = (κ × 1000) / Molarity. The unit of conductivity κ is S·cm⁻¹ and molarity is mol·L⁻¹ (or mol·cm⁻³ where 1 L = 1000 cm³).
Unit of Λ_m = (S·cm⁻¹) / (mol·cm⁻³) = S·cm²·mol⁻¹.
In SI units, it is expressed as S·m²·mol⁻¹.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).
INSIGHT: Conductivity κ has units of S·cm⁻¹; cell constant G* has units of cm⁻¹.

QUESTION: Q2. [Assertion-Reason, CBSE-Style Practice Question, 1 Mark]
Assertion (A): For a weak electrolyte like acetic acid, molar conductivity increases steeply with dilution near infinite dilution.
Reason (R): On dilution, the degree of dissociation (α) of a weak electrolyte increases sharply according to Ostwald's Dilution Law.
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is true but (R) is false.
(D) (A) is false but (R) is true.
SOLUTION:
**Correct Answer:** (A)
**Notebook Explanation:**
For a weak electrolyte like CH₃COOH, the degree of dissociation (α) at moderate concentrations is very low (< 5%). Upon large dilution, Ostwald's Dilution Law dictates that α increases steeply towards 1, drastically increasing the number of free ions in solution. Hence, molar conductivity Λ_m increases sharply near infinite dilution. Thus, both A and R are true, and R correctly explains A.
**CBSE Marking Rubric:**
- 1 Mark for option (A).

QUESTION: Q3. [2 Marks, CBSE 2023 (All India)] Why does the conductivity (κ) of an electrolytic solution decrease with dilution, while its molar conductivity (Λ_m) increases with dilution?
SOLUTION:
**Step 1: Reason for Decrease in Conductivity (κ):**
Conductivity (κ) is defined as the conductance of unit volume (1 cm³ or 1 m³) of the electrolytic solution. On dilution, the total volume increases, but the number of current-carrying ions present per unit volume decreases. Hence, conductivity (κ) always decreases with dilution for both strong and weak electrolytes.
**Step 2: Reason for Increase in Molar Conductivity (Λ_m):**
Molar conductivity is given by Λ_m = κ × V (where V is the volume of solution containing 1 mole of electrolyte). On dilution, although κ decreases, the volume V increases to a much greater extent. Therefore, the product (κ × V) increases.
For strong electrolytes, inter-ionic attractions weaken; for weak electrolytes, the degree of dissociation (α) increases significantly.
**CBSE Marking Rubric:**
- 1 Mark for explanation of decrease in ions per unit volume for κ.
- 1 Mark for explanation of product κ × V and increased mobility/dissociation for Λ_m.
INSIGHT: Never say conductivity increases; specific conductivity always decreases on dilution.

QUESTION: Q4. [3 Marks, CBSE 2024 (56/1/2)] The electrical resistance of a column of 0.05 mol/L NaOH solution of diameter 1 cm and length 50 cm is 5.55 × 10³ ohm. Calculate its resistivity, conductivity, and molar conductivity.
SOLUTION:
**Given:**
- Diameter d = 1 cm => Radius r = 0.5 cm
- Area of cross-section A = π r² = 3.1416 × (0.5)² = 0.7854 cm²
- Length of column l = 50 cm
- Resistance R = 5.55 × 10³ Ω
- Concentration C = 0.05 mol/L
**To Find:**
1. Resistivity (ρ)
2. Conductivity (κ)
3. Molar Conductivity (Λ_m)

**Step 1: Calculate Resistivity (ρ):**
- Formula: R = ρ · (l / A) => ρ = (R · A) / l
- ρ = (5.55 × 10³ × 0.7854) / 50 = 4358.97 / 50 = **87.18 Ω·cm**.

**Step 2: Calculate Conductivity (κ):**
- Formula: κ = 1 / ρ = 1 / 87.18 = **0.01147 S·cm⁻¹** (or 1.147 × 10⁻² S·cm⁻¹).

**Step 3: Calculate Molar Conductivity (Λ_m):**
- Formula: Λ_m = (κ × 1000) / C
- Λ_m = (0.01147 × 1000) / 0.05 = 11.47 / 0.05 = **229.4 S·cm²·mol⁻¹**.

**Final Answer:**
- Resistivity ρ = **87.18 Ω·cm**
- Conductivity κ = **0.01147 S·cm⁻¹**
- Molar Conductivity Λ_m = **229.4 S·cm²·mol⁻¹**.
**CBSE Marking Rubric:**
- 1 Mark for resistivity with correct unit (87.18 Ω·cm).
- 1 Mark for conductivity with correct unit (0.01147 S·cm⁻¹).
- 1 Mark for molar conductivity with correct unit (229.4 S·cm²·mol⁻¹).
INSIGHT: Remember area A = π r², not π d². Using diameter directly gives a 4x error!

QUESTION: Q5. [5 Marks Structured Problem, CBSE 2023 (Delhi)]
(a) Calculate the EMF of the following cell at 298 K:
Cr(s) | Cr³⁺(0.1 M) || Fe²⁺(0.01 M) | Fe(s)
Given: E°(Cr³⁺/Cr) = -0.74 V, E°(Fe²⁺/Fe) = -0.44 V.
(b) Write the chemical reactions occurring at anode and cathode during the discharging of a lead-acid storage battery.
SOLUTION:
**(a) Cell EMF Calculation:**
**Step 1: Cell Reactions & Number of Electrons (n):**
- Anode (Oxidation): 2 Cr(s) -> 2 Cr³⁺(aq) + 6e⁻
- Cathode (Reduction): 3 Fe²⁺(aq) + 6e⁻ -> 3 Fe(s)
- Overall Cell Reaction: 2 Cr(s) + 3 Fe²⁺(aq) -> 2 Cr³⁺(aq) + 3 Fe(s)
- Total electrons exchanged: **n = 6**.
**Step 2: Standard Cell Potential (E°_cell):**
- E°_cell = E°_cathode - E°_anode = E°(Fe²⁺/Fe) - E°(Cr³⁺/Cr)
- E°_cell = -0.44 V - (-0.74 V) = -0.44 + 0.74 = **+0.30 V**.
**Step 3: Nernst Equation Substitution:**
- E_cell = E°_cell - (0.0591 / n) · log₁₀ [ [Cr³⁺]² / [Fe²⁺]³ ]
- [Cr³⁺]² / [Fe²⁺]³ = (0.1)² / (0.01)³ = (10⁻¹)² / (10⁻²)³ = 10⁻² / 10⁻⁶ = 10⁴
- log₁₀(10⁴) = 4
- E_cell = 0.30 - (0.0591 / 6) × 4
- E_cell = 0.30 - (0.0591 × 2 / 3) = 0.30 - (0.1182 / 3) = 0.30 - 0.0394 = **+0.2606 V ≈ +0.261 V**.
**Final Answer:**
- Cell EMF E_cell = **+0.261 V**.

**(b) Discharging Reactions of Lead-Acid Storage Battery:**
1. **At Anode (Oxidation of Spongy Lead):**
   Pb(s) + SO₄²⁻(aq) -> PbSO₄(s) + 2e⁻
2. **At Cathode (Reduction of Lead Dioxide):**
   PbO₂(s) + SO₄²⁻(aq) + 4 H⁺(aq) + 2e⁻ -> PbSO₄(s) + 2 H₂O(l)
3. **Overall Cell Reaction during Discharge:**
   Pb(s) + PbO₂(s) + 2 H₂SO₄(aq) -> 2 PbSO₄(s) + 2 H₂O(l).
   (Sulfuric acid is consumed; electrolyte density drops below 1.20 g/mL).
**CBSE Marking Rubric:**
- 1 Mark for n = 6 and balanced redox equation.
- 1 Mark for E°_cell = +0.30 V.
- 1 Mark for Nernst equation calculation (E_cell = +0.261 V).
- 2 Marks for exact anode and cathode reactions of lead-acid battery.
INSIGHT: Forgetting to raise concentrations to their stoichiometric powers ([Cr³⁺]² and [Fe²⁺]³) is a major source of error.`;
  }

  // CHAPTER 3: Chemical Kinetics
  if (
    chapterLower.includes('kinetic') ||
    chapterLower.includes('rate law') ||
    chapterLower.includes('arrhenius') ||
    chapterLower === 'c3' ||
    chapterLower.includes('chapter 3: chemical kinetics') ||
    chapterLower.includes('chapter 3 - chemical kinetics')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (56/3/1)] The rate constant of a reaction is k = 3.2 × 10⁻⁴ L·mol⁻¹·s⁻¹. The overall order of the reaction is:
(A) Zero
(B) First
(C) Second
(D) Third
SOLUTION:
**Correct Answer:** (C) Second
**Notebook Explanation:**
The general formula for the unit of rate constant is (mol·L⁻¹)^(1-n) · s⁻¹ = L^(n-1) · mol^(1-n) · s⁻¹, where n is the overall order of the reaction.
Given unit: L·mol⁻¹·s⁻¹.
Comparing powers of L: n - 1 = 1 => n = 2.
Hence, the reaction is of Second Order.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (C).
INSIGHT: Unit of k tells the order immediately without knowing the reaction.

QUESTION: Q2. [Assertion-Reason, CBSE 2023 (Delhi), 1 Mark]
Assertion (A): For a first-order reaction, the time required for 99.9% completion is approximately 10 times the half-life period.
Reason (R): The half-life of a first-order reaction is independent of the initial concentration of the reactant.
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is true but (R) is false.
(D) (A) is false but (R) is true.
SOLUTION:
**Correct Answer:** (B)
**Notebook Explanation:**
For a first-order reaction:
t_99.9% = (2.303 / k) log₁₀(100 / (100 - 99.9)) = (2.303 / k) log₁₀(1000) = (2.303 × 3) / k = 6.909 / k.
Half-life t_1/2 = 0.693 / k.
Therefore, t_99.9% / t_1/2 = (6.909 / k) / (0.693 / k) = 9.97 ≈ 10. Thus, Assertion (A) is true.
Reason (R) states that t_1/2 = 0.693 / k is independent of [A]₀, which is also a true fact. However, (R) is not the direct mathematical explanation of the 10-fold ratio in (A); rather, the ratio comes from the logarithm of [A]₀/[A]. Hence, option (B) is correct.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).

QUESTION: Q3. [2 Marks, CBSE 2024 (56/2/2)] Differentiate between order of a reaction and molecularity of a reaction (any two distinct points).
SOLUTION:
| Feature | Order of Reaction | Molecularity of Reaction |
|---|---|---|
| **1. Nature** | It is an experimental quantity determined from the rate law equation. | It is a theoretical quantity deduced from the proposed reaction mechanism. |
| **2. Possible Values** | Can be zero, fractional, integer, or even negative. | Always an integer: 1, 2, or 3. It can NEVER be zero or a fraction. |
| **3. Applicability** | Applicable to both elementary and complex reactions. | Meaningful ONLY for elementary (single-step) reactions. |
**CBSE Marking Rubric:**
- 1 Mark for each correct comparison point (total 2 marks).
INSIGHT: Molecularity never exceeds 3 because simultaneous collision of >3 particles is statistically improbable.

QUESTION: Q4. [3 Marks, CBSE 2023 (All India)] A first order reaction takes 30 minutes for 50% completion. Calculate the time required for 90% completion of this reaction. (Given: log 10 = 1, log 2 = 0.3010).
SOLUTION:
**Step 1: Calculate Rate Constant (k):**
- Given: t_1/2 = 30 min.
- For first order reaction: k = 0.693 / t_1/2
- k = 0.693 / 30 = **0.0231 min⁻¹** (or k = 2.303 log 2 / 30 = (2.303 × 0.301) / 30).
**Step 2: Calculate Time for 90% Completion (t_90%):**
- Let initial concentration [R]₀ = 100
- For 90% completion, amount reacted = 90 => Remaining concentration [R] = 100 - 90 = 10.
- First order integrated equation:
  t = (2.303 / k) · log₁₀([R]₀ / [R])
- t_90% = (2.303 / 0.0231) · log₁₀(100 / 10)
- Since log₁₀(10) = 1:
- t_90% = 2.303 / 0.0231 = **99.69 minutes ≈ 99.7 min**.
- Alternatively: t_90% = [ 30 × log₁₀(10) ] / log₁₀(2) = 30 / 0.3010 = **99.67 minutes**.
**Final Answer:**
- Time required for 90% completion = **99.7 minutes** (or 1 hour 39.7 minutes).
**CBSE Marking Rubric:**
- 1 Mark for calculating rate constant k.
- 1 Mark for substitution in integrated first order equation.
- 1 Mark for final answer with unit (99.7 minutes).
INSIGHT: You can use the ratio method t_90% / t_50% = log(100/10) / log(100/50) = 1 / 0.3010 = 3.322 => t = 3.322 × 30 = 99.66 min.

QUESTION: Q5. [5 Marks Structured Problem, CBSE 2024 (56/1/1)]
(a) The rate constant of a chemical reaction at 500 K and 700 K are 0.02 s⁻¹ and 0.07 s⁻¹ respectively. Calculate the activation energy (E_a) of the reaction. (R = 8.314 J·K⁻¹·mol⁻¹, log 3.5 = 0.544).
(b) What is a pseudo first-order reaction? Give one suitable example with its chemical equation.
SOLUTION:
**(a) Activation Energy Calculation:**
**Given:**
- T₁ = 500 K, k₁ = 0.02 s⁻¹
- T₂ = 700 K, k₂ = 0.07 s⁻¹
- Gas constant R = 8.314 J·K⁻¹·mol⁻¹
- log₁₀(k₂ / k₁) = log₁₀(0.07 / 0.02) = log₁₀(3.5) = 0.544
**To Find:**
- Activation energy E_a
**Formula (Arrhenius Two-Temperature Equation):**
- log₁₀(k₂ / k₁) = (E_a / (2.303 R)) · [ (T₂ - T₁) / (T₁ · T₂) ]
**Substitution & Step-by-step Calculation:**
- 0.544 = [ E_a / (2.303 × 8.314) ] · [ (700 - 500) / (500 × 700) ]
- 0.544 = [ E_a / 19.147 ] · [ 200 / 350000 ]
- 0.544 = [ E_a / 19.147 ] · [ 2 / 3500 ]
- 0.544 = E_a × (2 / 67014.5)
- E_a = (0.544 × 67014.5) / 2 = 36455.89 / 2 = **18227.9 J/mol = 18.23 kJ/mol**.
**Final Answer:**
- Activation energy E_a = **18.23 kJ/mol** (or 18,228 J/mol).

**(b) Pseudo First-Order Reaction:**
- **Definition:** A reaction that has a molecularity of two or more (higher order), but behaves kinetically as a first-order reaction because one of the reactants is present in large excess such that its concentration remains practically unchanged throughout the reaction.
- **Example:** Acid-catalyzed hydrolysis of ethyl acetate:
  CH₃COOC₂H₅ + H₂O(excess) --[H⁺]--> CH₃COOH + C₂H₅OH
  Rate = k' [CH₃COOC₂H₅][H₂O].
  Since [H₂O] is constant: Rate = k [CH₃COOC₂H₅], where k = k' [H₂O].
**CBSE Marking Rubric:**
- 1 Mark for Arrhenius formula and substitution.
- 2 Marks for calculation of E_a with correct unit (18.23 kJ/mol).
- 1 Mark for definition of pseudo first-order reaction.
- 1 Mark for balanced chemical equation with rate law.
INSIGHT: Forgetting to multiply 2.303 with R (19.147) leads to significant calculation errors.`;
  }

  // CHAPTER 4: d- and f-Block Elements
  if (
    chapterLower.includes('d and f') ||
    chapterLower.includes('d & f') ||
    chapterLower.includes('transition') ||
    chapterLower.includes('lanthanoid') ||
    chapterLower.includes('actinoid') ||
    chapterLower === 'c4' ||
    chapterLower.includes('chapter 4: d and f block elements') ||
    chapterLower.includes('chapter 4 - d and f block elements')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (56/2/3)] Which of the following ions is diamagnetic and colourless in aqueous solution?
(A) Ti³⁺
(B) Cu²⁺
(C) Sc³⁺
(D) Cr³⁺
SOLUTION:
**Correct Answer:** (C) Sc³⁺
**Notebook Explanation:**
- Scandium (Z = 21) ground state: [Ar] 3d¹ 4s².
- For Sc³⁺: [Ar] 3d⁰ 4s⁰.
Since there are zero 3d electrons (empty d-subshell), all electrons are paired in noble gas core [Ar], making Sc³⁺ diamagnetic (μ = 0). Furthermore, d-d electronic transitions are impossible in d⁰ configuration, making Sc³⁺ completely colourless.
In contrast, Ti³⁺ (3d¹), Cu²⁺ (3d⁹), and Cr³⁺ (3d³) contain unpaired electrons and are paramagnetic and coloured.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (C).
INSIGHT: Ions with d⁰ (Sc³⁺, Ti⁴⁺) or d¹⁰ (Zn²⁺, Cu⁺) are always colourless in aqueous solution.

QUESTION: Q2. [Assertion-Reason, CBSE 2023 (Delhi), 1 Mark]
Assertion (A): Zirconium (Zr) and Hafnium (Hf) exhibit almost identical physical and chemical properties and have nearly the same atomic radii.
Reason (R): This is due to Lanthanoid Contraction, which results from the poor shielding effect of 4f electrons.
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is true but (R) is false.
(D) (A) is false but (R) is true.
SOLUTION:
**Correct Answer:** (A)
**Notebook Explanation:**
Zirconium belongs to the 4d series (atomic radius = 160 pm) and Hafnium belongs to the 5d series (atomic radius = 159 pm). Normally, moving down a group increases atomic radius due to the addition of an extra electron shell. However, intervening between La and Hf are the 14 lanthanoid elements, in which the 4f subshell is progressively filled. Due to the diffuse shape of 4f orbitals, the shielding effect of 4f electrons is very poor, causing the effective nuclear charge to pull the outer electrons inward. This shrinkage is called Lanthanoid Contraction, canceling the expected size increase and making Zr and Hf virtually identical in size and chemical behavior.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).

QUESTION: Q3. [2 Marks, CBSE 2024 (56/1/1)] Account for the following:
(a) Cu⁺ ion is not stable in aqueous solution and undergoes disproportionation.
(b) Transition metals and their compounds act as good catalysts.
SOLUTION:
**(a) Disproportionation of Cu⁺ in Aqueous Solution:**
In aqueous medium, Cu⁺(aq) undergoes spontaneous disproportionation into Cu²⁺(aq) and Cu(s):
2 Cu⁺(aq) -> Cu²⁺(aq) + Cu(s).
*Reason:* Although second ionization enthalpy of Cu is high, the hydration enthalpy of Cu²⁺ (due to its smaller size and higher charge density: Δ_hyd H = -2121 kJ/mol) is much more negative than that of Cu⁺ (-593 kJ/mol). This enormous release of hydration enthalpy more than compensates for the energy required to remove the second electron, making Cu²⁺(aq) far more stable than Cu⁺(aq).
**(b) Catalytic Activity of Transition Metals:**
Transition metals act as effective catalysts due to:
1. **Variable Oxidation States:** They can easily change oxidation states and form unstable reactive intermediate complexes with reactants, lowering activation energy.
2. **Large Surface Area & Unpaired d-Electrons:** Their vacant d-orbitals can adsorb reactant molecules onto the metal surface, increasing local reactant concentration and weakening bonds.
**CBSE Marking Rubric:**
- 1 Mark for hydration enthalpy explanation of Cu²⁺.
- 1 Mark for variable oxidation states and intermediate formation for catalysts.
INSIGHT: Always mention 'hydration enthalpy compensates for second ionization enthalpy' for the copper question.

QUESTION: Q4. [3 Marks, CBSE 2023 (All India)] Calculate the spin-only magnetic moment of M²⁺(aq) ion (Z = 27). What is the geometry and magnetic nature?
SOLUTION:
**Step 1: Electronic Configuration:**
- Atomic number Z = 27 corresponds to Cobalt (Co).
- Ground state of Co: [Ar] 3d⁷ 4s².
- For Co²⁺ ion: Electrons are removed first from outer 4s subshell: Co²⁺ = [Ar] 3d⁷ 4s⁰.
**Step 2: Number of Unpaired Electrons (n):**
- In 3d⁷ subshell: Five 3d orbitals filled according to Hund's rule:
  ↑↓ | ↑↓ | ↑ | ↑ | ↑
- Number of unpaired electrons **n = 3**.
**Step 3: Spin-Only Magnetic Moment (μ):**
- Formula: μ = √[ n(n + 2) ] Bohr Magnetons (BM)
- μ = √[ 3(3 + 2) ] = √[ 3 × 5 ] = √15 BM.
- √15 ≈ **3.87 BM**.
**Step 4: Magnetic Nature:**
- Since it contains 3 unpaired electrons (n = 3), the ion is strongly **Paramagnetic**.
**Final Answer:**
- Number of unpaired electrons n = 3.
- Spin-only magnetic moment μ = **3.87 BM**.
- Magnetic nature = **Paramagnetic**.
**CBSE Marking Rubric:**
- 1 Mark for correct configuration of Co²⁺ (3d⁷) and n = 3.
- 1 Mark for formula μ = √[n(n+2)].
- 1 Mark for final calculation (3.87 BM) and paramagnetic conclusion.
INSIGHT: For Z = 25 (Mn²⁺, 3d⁵), n = 5 => μ = √35 = 5.92 BM. For Z = 26 (Fe²⁺, 3d⁶), n = 4 => μ = √24 = 4.90 BM.

QUESTION: Q5. [5 Marks Structured Problem, CBSE 2024 (56/3/2)]
(a) How is potassium dichromate (K₂Cr₂O₇) prepared from chromite ore? Write all balanced chemical equations involved.
(b) What is the effect of increasing pH on a solution of potassium dichromate?
(c) Complete and balance the following ionic equation:
Cr₂O₇²⁻ + 14 H⁺ + 6 Fe²⁺ ->
SOLUTION:
**(a) Preparation of K₂Cr₂O₇ from Chromite Ore (FeCr₂O₄):**
The preparation involves three sequential steps:
- **Step 1: Fusion of Chromite ore with Sodium Carbonate in presence of air:**
  4 FeCr₂O₄ + 8 Na₂CO₃ + 7 O₂ -> **8 Na₂CrO₄ (Sodium Chromate, Yellow)** + 2 Fe₂O₃ + 8 CO₂↑.
- **Step 2: Acidification of Sodium Chromate solution with Sulfuric Acid:**
  The yellow solution of sodium chromate is filtered and acidified with concentrated H₂SO₄ to give orange sodium dichromate:
  2 Na₂CrO₄ + H₂SO₄ -> **Na₂Cr₂O₇ (Sodium Dichromate, Orange)** + Na₂SO₄ + H₂O.
- **Step 3: Conversion of Sodium Dichromate to Potassium Dichromate:**
  Sodium dichromate is treated with potassium chloride (KCl). Because K₂Cr₂O₇ is less soluble than Na₂Cr₂O₇, it crystallizes out as bright orange crystals:
  Na₂Cr₂O₇ + 2 KCl -> **K₂Cr₂O₇ (Orange crystals)** + 2 NaCl.

**(b) Effect of Increasing pH (Adding Alkali):**
- Potassium dichromate solution is orange in acidic medium due to Cr₂O₇²⁻ ions.
- When pH is increased (alkali OH⁻ added), the orange dichromate ion is converted into yellow chromate ion (CrO₄²⁻):
  **Cr₂O₇²⁻ (Orange) + 2 OH⁻ -> 2 CrO₄²⁻ (Yellow) + H₂O**.
- When acidified again (pH decreased), yellow chromate reverts back to orange dichromate:
  2 CrO₄²⁻ (Yellow) + 2 H⁺ -> Cr₂O₇²⁻ (Orange) + H₂O.

**(c) Balanced Ionic Equation:**
Cr₂O₇²⁻ + 14 H⁺ + 6 Fe²⁺ -> **2 Cr³⁺ + 6 Fe³⁺ + 7 H₂O**.
**CBSE Marking Rubric:**
- 1 Mark each for the three preparation equations (total 3 marks).
- 1 Mark for pH effect with balanced equilibrium reaction.
- 1 Mark for balanced redox equation with correct products.
INSIGHT: Sodium dichromate is more soluble than potassium dichromate, which is why K₂Cr₂O₇ is used as a primary standard in volumetric titrations.`;
  }

  // CHAPTER 5: Coordination Compounds
  if (
    chapterLower.includes('coordination') ||
    chapterLower.includes('complex') ||
    chapterLower.includes('ligand') ||
    chapterLower === 'c5' ||
    chapterLower.includes('chapter 5: coordination compounds') ||
    chapterLower.includes('chapter 5 - coordination compounds')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (56/1/2)] The correct IUPAC name of the complex [Pt(NH₃)₂Cl(NO₂)] is:
(A) Diamminechloridonitroplatinum(II)
(B) Diamminechloridonitrito-N-platinum(II)
(C) Diamminechloronitritoplatinum(II)
(D) Diamminechloronitroplatinum(IV)
SOLUTION:
**Correct Answer:** (B) Diamminechloridonitrito-N-platinum(II)
**Notebook Explanation:**
1. Oxidation state of Pt: x + 2(0) + (-1) + (-1) = 0 => x = +2, written as (II).
2. Ligands listed in alphabetical order: 'ammine' (NH₃) comes before 'chlorido' (Cl⁻), which comes before 'nitrito-N' (NO₂⁻ coordinated through nitrogen).
3. Complex is neutral, so platinum retains its standard name without '-ate'.
Hence, the correct IUPAC name is Diamminechloridonitrito-N-platinum(II).
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).
INSIGHT: Anionic ligands end in '-ido' (chlorido, nitrito-N) according to modern IUPAC recommendations.

QUESTION: Q2. [Assertion-Reason, CBSE 2023 (Delhi), 1 Mark]
Assertion (A): Tetrahedral complexes of the type [MA₂B₂] do not show geometrical isomerism.
Reason (R): In a regular tetrahedron, all four positions are adjacent and equidistant to one another.
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is true but (R) is false.
(D) (A) is false but (R) is true.
SOLUTION:
**Correct Answer:** (A)
**Notebook Explanation:**
In a tetrahedral geometry with sp³ hybridization, all four bond angles are 109.5°, meaning every ligand position is adjacent to every other position. There are no 'cis' (90°) or 'trans' (180°) spatial relationships possible. Therefore, tetrahedral complexes cannot exhibit cis-trans geometrical isomerism. In contrast, square planar [MA₂B₂] complexes (dsp²) exhibit cis (adjacent 90°) and trans (opposite 180°) isomers. Thus, both A and R are true, and R is the correct explanation.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).

QUESTION: Q3. [2 Marks, CBSE 2024 (56/3/1)] Give IUPAC names and types of isomerism shown by the following pairs of coordination compounds:
(a) [Co(NH₃)₅(SO₄)]Br and [Co(NH₃)₅Br]SO₄
(b) [Co(NH₃)₅(NO₂)]Cl₂ and [Co(NH₃)₅(ONO)]Cl₂
SOLUTION:
**(a) Pair 1:**
- [Co(NH₃)₅(SO₄)]Br: Pentaamminesulphatocobalt(III) bromide.
- [Co(NH₃)₅Br]SO₄: Pentaamminebromidocobalt(III) sulphate.
- **Type of Isomerism:** **Ionization Isomerism** (they give different ions in aqueous solution; the first gives pale yellow precipitate of AgBr with AgNO₃, the second gives white precipitate of BaSO₄ with BaCl₂).
**(b) Pair 2:**
- [Co(NH₃)₅(NO₂)]Cl₂: Pentaamminenitrito-N-cobalt(III) chloride.
- [Co(NH₃)₅(ONO)]Cl₂: Pentaamminenitrito-O-cobalt(III) chloride.
- **Type of Isomerism:** **Linkage Isomerism** (arises due to ambidentate ligand NO₂⁻ coordinating either via nitrogen or oxygen).
**CBSE Marking Rubric:**
- 1 Mark for Pair (a) identification and name.
- 1 Mark for Pair (b) identification and name.
INSIGHT: Ambidentate ligands always give rise to Linkage Isomerism.

QUESTION: Q4. [3 Marks, CBSE 2023 (All India)] Using Valence Bond Theory (VBT), predict the hybridization, geometry, and magnetic nature of [CoF₆]³⁻. (Atomic number of Co = 27).
SOLUTION:
**Step 1: Oxidation State & Electronic Configuration:**
- Oxidation state of Co: x + 6(-1) = -3 => x = +3.
- Cobalt ground state: Co = [Ar] 3d⁷ 4s².
- Co³⁺ ion configuration: Co³⁺ = [Ar] 3d⁶ 4s⁰ 4p⁰ 4d⁰.
- 3d⁶ electrons: ↑↓ | ↑ | ↑ | ↑ | ↑ (4 unpaired electrons).
**Step 2: Nature of Ligand & Orbital Hybridization:**
- Fluoride ion (F⁻) is a **weak field ligand** (Δ_o < P).
- Because it is a weak ligand, it CANNOT force pairing of the 3d⁶ electrons.
- The 3d subshell remains unhybridized with its 4 unpaired electrons intact.
- Six vacant orbitals are obtained by hybridizing one 4s, three 4p, and two outer 4d orbitals:
  **Hybridization = sp³d²**.
**Step 3: Geometry & Spin Nature:**
- Geometry = **Octahedral**.
- Since outer 4d orbitals are used, it is an **Outer Orbital Complex** (High Spin complex).
**Step 4: Magnetic Nature & Moment:**
- Since it has n = 4 unpaired electrons, it is strongly **Paramagnetic**.
- Spin-only magnetic moment: μ = √[4(4 + 2)] = √24 ≈ **4.90 BM**.
**CBSE Marking Rubric:**
- 1 Mark for electronic configuration of Co³⁺ (3d⁶) and noting F⁻ as weak ligand.
- 1 Mark for sp³d² hybridization and octahedral geometry.
- 1 Mark for outer orbital, paramagnetic, and μ = 4.90 BM.
INSIGHT: In contrast, [Co(NH₃)₆]³⁺ has NH₃ as strong field ligand, forcing pairing of 3d⁶ electrons to give d²sp³ (inner orbital, diamagnetic).

QUESTION: Q5. [5 Marks Structured Problem, CBSE 2024 (56/1/1)]
(a) What is Crystal Field Splitting Energy (CFSE)? Draw the crystal field d-orbital splitting diagram for an octahedral complex.
(b) Write the electronic configuration of a d⁴ metal ion in an octahedral crystal field when:
    (i) Δ_o > P (Strong field ligand)
    (ii) Δ_o < P (Weak field ligand)
(c) Why is [NiCl₄]²⁻ paramagnetic while [Ni(CN)₄]²⁻ is diamagnetic? (Atomic number of Ni = 28).
SOLUTION:
**(a) Crystal Field Splitting Energy (CFSE) & Octahedral Diagram:**
- **Definition:** The energy difference between the two split sets of d-orbitals (t_2g and e_g) generated by the electrostatic repulsion of approaching ligands is called Crystal Field Splitting Energy, denoted by **Δ_o** (for octahedral field).

DIAGRAM: cfse_octahedral | Crystal Field d-Orbital Splitting Diagram in Octahedral Complex (NCERT Fig 9.3)

- **Splitting Diagram Geometry:**
  - The three orbitals pointing between axes (d_xy, d_yz, d_zx) experience less repulsion and are lowered in energy by **- 0.4 Δ_o** (or - 2/5 Δ_o) to form the triply degenerate **t_2g set**.
  - The two orbitals pointing along Cartesian axes (d_x²-y², d_z²) experience greater direct repulsion from ligands and are raised in energy by **+ 0.6 Δ_o** (or + 3/5 Δ_o) to form the doubly degenerate **e_g set**.
  - Total splitting separation = **Δ_o**.

**(b) Electronic Configuration of d⁴ in Octahedral Field:**
| Ligand Field Type | Condition | Electronic Configuration | Unpaired Electrons | Spin State |
| :--- | :--- | :--- | :--- | :--- |
| **Strong Field Ligand** | Δ_o > P (Pairing Energy) | **t_2g⁴ e_g⁰** | 2 unpaired e⁻ | **Low Spin** Complex |
| **Weak Field Ligand** | Δ_o < P (Pairing Energy) | **t_2g³ e_g¹** | 4 unpaired e⁻ | **High Spin** Complex |

**(c) [NiCl₄]²⁻ vs [Ni(CN)₄]²⁻ Comparison Table:**
| Parameter | [NiCl₄]²⁻ | [Ni(CN)₄]²⁻ |
| :--- | :--- | :--- |
| **Oxidation State & Config** | Ni²⁺ = [Ar] 3d⁸ 4s⁰ | Ni²⁺ = [Ar] 3d⁸ 4s⁰ |
| **Ligand Type** | Cl⁻ is a **Weak Field Ligand** (cannot force pairing) | CN⁻ is a **Strong Field Ligand** (forces pairing of 3d e⁻) |
| **Hybridization** | **sp³** (using outer 4s and 4p orbitals) | **dsp²** (using one inner 3d, 4s, and two 4p orbitals) |
| **Geometry** | **Tetrahedral** | **Square Planar** |
| **Unpaired Electrons** | **2 unpaired electrons** in 3d | **0 unpaired electrons** (all paired up) |
| **Magnetic Property** | **Paramagnetic** (μ ≈ 2.83 BM) | **Diamagnetic** (μ = 0) |
**CBSE Marking Rubric:**
- 1.5 Marks for CFSE definition and labeled octahedral splitting diagram.
- 1.5 Marks for d⁴ configurations: t_2g⁴ e_g⁰ and t_2g³ e_g¹.
- 2 Marks for Ni²⁺ comparison with VBT hybridization (sp³ paramagnetic vs dsp² diamagnetic).
INSIGHT: High-field ligands cause large Δ_o and low spin; weak-field ligands cause small Δ_o and high spin.`;
  }

  return null;
}
