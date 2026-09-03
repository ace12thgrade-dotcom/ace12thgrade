// services/subjects/chemistry/part1.ts
// Chapters 1 to 5: Solutions, Electrochemistry, Chemical Kinetics, d- and f-Block Elements, Coordination Compounds

export function getChemistryPart1Notes(chapterLower: string): string | null {
  // CHAPTER 1: Solutions
  if (
    chapterLower.includes('solution') ||
    chapterLower.includes('solute') ||
    chapterLower.includes('colligative') ||
    chapterLower === 'c1' ||
    chapterLower.includes('chapter 1: solutions') ||
    chapterLower.includes('chapter 1 - solutions')
  ) {
    return `TOPIC: Chapter 1: Solutions
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Types of Solutions & Concentration Expressing Units:**
- **Solution:** A homogeneous mixture of two or more chemically non-reacting substances.
- **Concentration Units:**
  1. **Molarity (M):** Moles of solute dissolved in 1 litre of solution.
  **FORMULA:** M = (w_B × 1000) / (M_B × V_mL)  [Unit: mol·L⁻¹ or M]. Temperature DEPENDENT (changes with temperature as volume expands/contracts).
  2. **Molality (m):** Moles of solute dissolved in 1 kilogram (1000 g) of solvent.
  **FORMULA:** m = (w_B × 1000) / (M_B × w_A_grams)  [Unit: mol·kg⁻¹ or m]. Temperature INDEPENDENT (mass does not change with temperature; preferred in colligative property studies).
  3. **Mole Fraction (x):** Ratio of number of moles of one component to total moles in solution:
  **FORMULA:** x_A = n_A / (n_A + n_B), x_B = n_B / (n_A + n_B). Note: x_A + x_B = 1 (dimensionless, temperature independent).
  4. **Parts Per Million (ppm):** ppm = (Mass of solute / Total mass of solution) × 10⁶. Used for trace concentrations (water pollution, atmospheric pollutants).

**2. Gas Solubility & Henry's Law:**
**LAW:** Henry's Law states that at constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas present above the surface of the liquid or solution.
**FORMULA:** p = K_H · x  (where p = partial pressure of gas, x = mole fraction of gas in solution, K_H = Henry's law constant).
- **Key Characteristics of K_H:**
  * K_H is a function of the nature of the gas.
  * Higher the value of K_H at a given pressure, the lower is the solubility of the gas in the liquid.
  * K_H increases with increasing temperature; therefore, the solubility of gases in liquids decreases with temperature increase (reason why aquatic species are more comfortable in cold water than warm water).
- **Practical Applications in CBSE Exams:**
  1. Carbonated soft drinks and soda water bottles are sealed under high pressure to increase the solubility of CO₂.
  2. Deep-sea scuba divers breathe air diluted with helium (11.7% He, 56.2% N₂, 32.1% O₂) to avoid the painful and lethal medical condition called "the bends" caused by nitrogen bubbles blocking blood capillaries upon rapid ascent.
  3. At high altitudes, partial pressure of oxygen is lower than at ground level, leading to low oxygen concentration in blood and tissues of climbers, causing "Anoxia" (weakness and inability to think clearly).

**3. Vapour Pressure of Liquid Solutions & Raoult's Law:**
**LAW:** Raoult's Law states that for a solution of volatile liquids, the partial vapour pressure of each component of the solution is directly proportional to its mole fraction present in the solution.
**FORMULA:** p_A = p°_A · x_A  and  p_B = p°_B · x_B.
- Total Vapour Pressure: p_total = p_A + p_B = p°_A · x_A + p°_B · x_B = p°_A + (p°_B - p°_A) · x_B.
- **Vapour Phase Composition (Dalton's Law):**
  y_A = p_A / p_total  and  y_B = p_B / p_total.

**4. Ideal vs Non-Ideal Solutions & Deviations:**
- **Ideal Solutions:**
  * Obey Raoult's Law over the entire range of concentrations.
  * Enthalpy of mixing: ΔH_mix = 0; Volume of mixing: ΔV_mix = 0.
  * Intermolecular forces: A-B attractive interactions are identical to A-A and B-B interactions.
  * Examples: n-hexane + n-heptane; Bromoethane + Chloroethane; Benzene + Toluene.
- **Non-Ideal Solutions with Positive Deviation:**
  * p_A > p°_A · x_A, p_B > p°_B · x_B, and p_total > (p°_A x_A + p°_B x_B).
  * ΔH_mix > 0 (Endothermic), ΔV_mix > 0 (Volume expands).
  * A-B attractive forces are WEAKER than A-A and B-B forces (molecules escape more easily into vapour).
  * Examples: Ethanol + Acetone (acetone breaks ethanol intermolecular H-bonds); CS₂ + Acetone.
  * Form **Minimum Boiling Azeotropes** at specific composition (e.g. 95% ethanol + 5% water by volume).
- **Non-Ideal Solutions with Negative Deviation:**
  * p_A < p°_A · x_A, p_B < p°_B · x_B, and p_total < (p°_A x_A + p°_B x_B).
  * ΔH_mix < 0 (Exothermic), ΔV_mix < 0 (Volume contracts).
  * A-B attractive forces are STRONGER than A-A and B-B forces (molecules held tightly, escape less).
  * Examples: Chloroform + Acetone (forms new intermolecular H-bond: Cl₃C-H···O=C(CH₃)₂); Phenol + Aniline; HNO₃ + Water.
  * Form **Maximum Boiling Azeotropes** (e.g. 68% HNO₃ + 32% water by mass, boils at 393.5 K).

**5. Colligative Properties (Strictly Depend on Number of Solute Particles):**
- **1. Relative Lowering of Vapour Pressure (RLVP):**
**DERIVATION:**
  Step 1: Raoult's Law for non-volatile solute (p_B = 0): p_solution = p_A = p°_A · x_A = p°_A · (1 - x_B).
  Step 2: Lowering of vapour pressure: Δp = p°_A - p = p°_A · x_B.
  Step 3: Relative lowering: (p°_A - p) / p°_A = x_B = n_B / (n_A + n_B).
  Step 4: For dilute solution (n_B << n_A): (p°_A - p) / p°_A = n_B / n_A = (w_B / M_B) / (w_A / M_A).
**FORMULA:** (p°_A - p) / p°_A = (w_B · M_A) / (M_B · w_A).

- **2. Elevation of Boiling Point (ΔT_b):**
  - Boiling point is temperature at which vapour pressure of liquid equals external atmospheric pressure (1 atm). Addition of non-volatile solute lowers vapour pressure, requiring higher temperature to boil.
**FORMULA:** ΔT_b = T_b - T°_b = K_b · m.
**FORMULA:** M_B = (1000 · K_b · w_B) / (ΔT_b · w_A).
  - K_b: Molal elevation constant / Ebullioscopic constant (Unit: K·kg·mol⁻¹). Defined as elevation in boiling point produced when 1 mole of non-volatile solute is dissolved in 1 kg of solvent. For water, K_b = 0.52 K·kg·mol⁻¹.

- **3. Depression of Freezing Point (ΔT_f):**
  - Freezing point is temperature at which vapour pressure of liquid solvent equals vapour pressure of its solid form.
**FORMULA:** ΔT_f = T°_f - T_f = K_f · m.
**FORMULA:** M_B = (1000 · K_f · w_B) / (ΔT_f · w_A).
  - K_f: Molal depression constant / Cryoscopic constant (Unit: K·kg·mol⁻¹). For water, K_f = 1.86 K·kg·mol⁻¹.
  - Practical application: Ethylene glycol used as anti-freeze in car radiators in cold climates; NaCl or CaCl₂ used to clear snow from icy roads (depression of freezing point).

- **4. Osmotic Pressure (Π):**
  - Osmosis: Spontaneous flow of solvent molecules from pure solvent into solution through a semipermeable membrane (SPM).
  - Osmotic Pressure: The excess hydrostatic pressure that must be applied to the solution side to prevent the inward osmosis of pure solvent.
**FORMULA:** Π = C · R · T = (n_B / V) · R · T = (w_B · R · T) / (M_B · V).
**FORMULA:** M_B = (w_B · R · T) / (Π · V).
  - **Why Osmotic Pressure is the BEST Method for Determining Molar Mass of Polymers & Proteins:**
    1. Measured at room temperature (proteins denature at high boiling temperatures).
    2. Uses Molarity instead of Molality, and produces significant, easily measurable pressure heights even for extremely dilute solutions of massive biomolecules.
  - **Isotonic Solutions:** Two solutions having identical osmotic pressure at the same temperature (Π₁ = Π₂ => C₁ = C₂). Blood cells are isotonic with 0.9% (m/V) NaCl saline solution.
  - **Hypertonic Solution:** Solution with higher osmotic pressure than cell fluids (>0.9% NaCl); causes water to flow out of blood cells, causing cell shrinkage (**Crenation**).
  - **Hypotonic Solution:** Solution with lower osmotic pressure (<0.9% NaCl); water enters cell, causing swelling and bursting (**Hemolysis**).
  - **Reverse Osmosis (RO):** If external pressure applied to solution is greater than osmotic pressure (P > Π), solvent flows from solution through SPM into pure water side. Used for desalination of seawater using cellulose acetate SPM.

**6. Abnormal Molar Mass & van 't Hoff Factor (i):**
- When solute undergoes dissociation or association in solution, number of particles changes, causing observed colligative property to deviate from theoretical values.
**FORMULA:** i = (Observed Colligative Property) / (Calculated / Normal Colligative Property)
           = (Normal Molar Mass) / (Abnormal / Observed Molar Mass)
           = (Total moles of particles after dissociation or association) / (Initial moles of solute)
- **Modified Colligative Equations:**
  1. (p° - p) / p° = i · x_B
  2. ΔT_b = i · K_b · m
  3. ΔT_f = i · K_f · m
  4. Π = i · C · R · T
- **Relation with Degree of Dissociation (α):**
  - For electrolyte A_x B_y -> x Aʸ⁺ + y Bˣ⁻ producing n total ions (e.g. NaCl: n=2; CaCl₂: n=3):
**FORMULA:** α = (i - 1) / (n - 1)  =>  i = 1 + (n - 1)α. (For 100% complete dissociation, α = 1 => i = n).
- **Relation with Degree of Association (α):**
  - For n molecules associating to form a polymer n A <=> A_n (e.g. Dimerization of Acetic acid or Benzoic acid in benzene through intermolecular H-bonds, n = 2):
**FORMULA:** α = (1 - i) / (1 - 1/n)  =>  i = 1 - α(1 - 1/n). (For complete dimerization n=2, α=1 => i = 0.5).

**COMMON MISTAKE:**
- Confusing T_f (freezing point of solution) with ΔT_f (depression in freezing point). T_f = T°_f - ΔT_f = 0°C - ΔT_f = -ΔT_f °C. Never report negative values for ΔT_f!
- Forgetting the van 't Hoff factor i for ionic electrolytes (NaCl, K₂SO₄, MgCl₂) in colligative numericals.

**KEY POINTS:**
- Colligative properties depend exclusively on the number of solute particles, not their chemical nature.
- Henry's constant K_H has units of pressure (bar, atm) and increases with temperature.
- In reverse osmosis, applied pressure must exceed the solution's osmotic pressure (P > Π).`;
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
    return `TOPIC: Chapter 2: Electrochemistry
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Galvanic Cells & Standard Electrode Potential:**
- **Daniell Cell:** Converts chemical energy of redox reaction Zn(s) + Cu²⁺(aq) -> Zn²⁺(aq) + Cu(s) into electrical energy.
  - **Anode (Negative terminal, Oxidation):** Zn(s) -> Zn²⁺(aq) + 2e⁻  (LOAN: Left, Oxidation, Anode, Negative).
  - **Cathode (Positive terminal, Reduction):** Cu²⁺(aq) + 2e⁻ -> Cu(s).
  - **Cell Representation:** Zn(s) | Zn²⁺(aq, C₁) || Cu²⁺(aq, C₂) | Cu(s).
  - **Salt Bridge:** Inverted U-tube filled with agar-agar gel mixed with inert electrolyte (KCl, KNO₃, NH₄NO₃). Functions:
    1. Completes internal electrical circuit by facilitating migration of ions.
    2. Maintains electrical neutrality in both half-cell solutions without liquid-liquid junction potential.
- **Electromotive Force (EMF / Cell Potential):**
**FORMULA:** E°_cell = E°_cathode - E°_anode = E°_Right - E°_Left (Both potentials taken as standard REDUCTION potentials).
  - For Daniell Cell: E°_cell = E°(Cu²⁺/Cu) - E°(Zn²⁺/Zn) = +0.34 V - (-0.76 V) = **+1.10 V**.
  - **External Voltage (E_ext) Applied to Daniell Cell:**
    * If E_ext < 1.10 V: Electrons flow from Zn to Cu, current flows from Cu to Zn (normal galvanic cell).
    * If E_ext = 1.10 V: No electron flow, current = 0, chemical reaction stops completely (equilibrium).
    * If E_ext > 1.10 V: Direction of electron flow reverses (Cu to Zn), cell acts as an **Electrolytic Cell**.

**2. Nernst Equation & Equilibrium Constant:**
**DERIVATION:**
  Step 1: From thermodynamics: ΔG = ΔG° + 2.303 RT log₁₀ Q.
  Step 2: Since electrical work done is ΔG = -nFE_cell and ΔG° = -nFE°_cell:
  Step 3: -nFE_cell = -nFE°_cell + 2.303 RT log₁₀ Q.
  Step 4: Dividing throughout by -nF gives Nernst Equation: E_cell = E°_cell - (2.303 RT / nF) log₁₀ Q.
  Step 5: Substituting standard values at 298 K (R = 8.314 J·K⁻¹·mol⁻¹, F = 96487 C·mol⁻¹, T = 298 K):
**FORMULA:** E_cell = E°_cell - (0.0591 / n) · log₁₀ [ (Products) / (Reactants) ]
- For general cell aA + bB -> cC + dD:
  **FORMULA:** E_cell = E°_cell - (0.0591 / n) · log₁₀ [ ([C]ᶜ [D]ᵈ) / ([A]ᵃ [B]ᵇ) ].
- **Thermodynamic Linkages:**
  1. Standard Gibbs Energy: **ΔG° = - n · F · E°_cell**. Reaction is spontaneous when E°_cell > 0 and ΔG° < 0.
  2. Equilibrium Constant (K_c): At equilibrium, E_cell = 0 and Q = K_c:
  **FORMULA:** log₁₀ K_c = (n · E°_cell) / 0.0591  at 298 K.

**3. Electrolytic Conductance & Molar Conductivity:**
- **Ohm's Law:** V = I · R => Resistance R = ρ · (l / A), where ρ = resistivity.
- **Conductance (G):** G = 1 / R = (1 / ρ) · (A / l) = κ · (A / l)  [Unit: Siemens, S or Ω⁻¹].
- **Conductivity (Specific Conductance, κ, Kappa):** Conductance of 1 cm³ (or 1 m³) solution:
**FORMULA:** κ = (1 / R) · (l / A) = G · G*  [Unit: S·cm⁻¹ or S·m⁻¹].
- **Cell Constant (G*):** Ratio of distance between electrodes to plate area:
**FORMULA:** G* = l / A = R · κ  [Unit: cm⁻¹ or m⁻¹]. Determined experimentally using standard KCl solution.
- **Molar Conductivity (Λ_m):** Conductance of all ions produced by dissolving 1 mole of electrolyte in V cm³ solution:
**FORMULA:** Λ_m = (κ × 1000) / Molarity  [Unit: S·cm²·mol⁻¹]. (In SI units: Λ_m = κ / (1000 × Molarity) in S·m²·mol⁻¹).
- **Effect of Dilution on Conductance:**
  * **Conductivity (κ) DECREASES with dilution** for both strong and weak electrolytes because the number of current-carrying ions per unit volume decreases upon adding solvent.
  * **Molar Conductivity (Λ_m) INCREASES with dilution** because the decrease in κ is far outweighed by the huge increase in solution volume containing 1 mole of electrolyte.
  * **Strong Electrolytes (Debye-Huckel-Onsager Equation):** Λ_m = Λ°_m - A √C. Λ_m increases moderately due to decrease in inter-ionic attractions. Λ°_m (limiting molar conductivity) can be found by direct linear extrapolation to C = 0.
  * **Weak Electrolytes:** Shows sharp steep rise in Λ_m near infinite dilution due to large increase in degree of dissociation (α). Λ°_m CANNOT be obtained by extrapolation (graph becomes asymptotic to y-axis); determined using Kohlrausch's Law.

**4. Kohlrausch's Law of Independent Migration of Ions:**
**LAW:** Kohlrausch's Law states that the limiting molar conductivity of an electrolyte at infinite dilution can be represented as the sum of the individual contributions of the anion and cation of the electrolyte.
**FORMULA:** Λ°_m(A_x B_y) = x · λ°(Aʸ⁺) + y · λ°(Bˣ⁻).
- **Core Board Applications:**
  1. Calculation of Λ°_m for Weak Electrolytes:
     e.g., Λ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) - Λ°_m(NaCl).
  2. Degree of Dissociation (α) of Weak Electrolyte:
  **FORMULA:** α = Λ_m / Λ°_m.
  3. Dissociation Constant (K_a) of Weak Acid:
  **FORMULA:** K_a = (C · α²) / (1 - α) = [ C · (Λ_m / Λ°_m)² ] / [ 1 - (Λ_m / Λ°_m) ].

**5. Commercial Batteries, Fuel Cells & Corrosion:**
- **Primary Batteries (Non-rechargeable; irreversible cell reaction):**
  1. **Dry Cell (Leclanché Cell):**
     * Anode: Zinc cylinder container: Zn(s) -> Zn²⁺ + 2e⁻.
     * Cathode: Graphite rod surrounded by powdered MnO₂ and carbon black.
     * Electrolyte: Moist paste of NH₄Cl and ZnCl₂.
     * Cathode Reaction: 2 MnO₂ + 2 NH₄⁺ + 2e⁻ -> Mn₂O₃ + 2 NH₃ + H₂O.
     * Complex formation: Zn²⁺ + 4 NH₃ -> [Zn(NH₃)₄]²⁺ (prevents internal gas pressure buildup). Cell potential: 1.5 V.
  2. **Mercury Cell (Used in hearing aids, wristwatches):**
     * Anode: Zn-Hg amalgam: Zn(Hg) + 2 OH⁻ -> ZnO(s) + H₂O + 2e⁻.
     * Cathode: Paste of HgO and C: HgO(s) + H₂O + 2e⁻ -> Hg(l) + 2 OH⁻.
     * Overall Reaction: Zn(Hg) + HgO(s) -> ZnO(s) + Hg(l).
     * **Why Mercury Cell Gives Constant Potential (1.35 V) Throughout Life:** The overall cell reaction does not involve any ions in solution whose concentration could change over time!
- **Secondary Batteries (Rechargeable):**
  1. **Lead-Acid Storage Battery (Car batteries, inverters):**
     * Anode: Spongy Lead (Pb); Cathode: Lead dioxide (PbO₂); Electrolyte: 38% H₂SO₄ solution (density 1.30 g/mL).
     * **Discharge Reactions:**
       Anode: Pb(s) + SO₄²⁻(aq) -> PbSO₄(s) + 2e⁻.
       Cathode: PbO₂(s) + SO₄²⁻(aq) + 4 H⁺(aq) + 2e⁻ -> PbSO₄(s) + 2 H₂O(l).
       Overall: Pb(s) + PbO₂(s) + 2 H₂SO₄(aq) -> 2 PbSO₄(s) + 2 H₂O(l). (H₂SO₄ consumed; density drops below 1.20 g/mL).
     * **Recharge Reactions:** Completely reversed by supplying direct external electrical current:
       2 PbSO₄(s) + 2 H₂O(l) -> Pb(s) + PbO₂(s) + 2 H₂SO₄(aq).
- **H₂-O₂ Fuel Cell:**
  * Converts chemical energy of combustion of fuels (H₂, CH₄, CO) directly into electrical energy.
  * Porous carbon electrodes containing catalysts (Pt/Pd); Electrolyte: Concentrated aqueous KOH solution.
  * Anode: 2 H₂(g) + 4 OH⁻(aq) -> 4 H₂O(l) + 4e⁻.
  * Cathode: O₂(g) + 2 H₂O(l) + 4e⁻ -> 4 OH⁻(aq).
  * Overall: 2 H₂(g) + O₂(g) -> 2 H₂O(l).
  * Advantages: High thermodynamic efficiency (~70% vs 40% for thermal power plants), continuous operation as long as fuel is supplied, zero polluting emissions (water produced was drunk by Apollo astronauts).
- **Corrosion (Rusting of Iron):**
  * Electrochemical phenomenon occurring in presence of moisture and oxygen.
  * Anode (Iron surface): 2 Fe(s) -> 2 Fe²⁺ + 4e⁻ (E° = -0.44 V).
  * Cathode: O₂(g) + 4 H⁺ + 4e⁻ -> 2 H₂O (E° = +1.23 V). (H⁺ supplied by dissolved H₂CO₃ from CO₂ in rain).
  * Overall: 2 Fe(s) + O₂(g) + 4 H⁺ -> 2 Fe²⁺ + 2 H₂O.
  * Rust Formation: 4 Fe²⁺ + O₂(g) + 4 H₂O -> 2 Fe₂O₃ + 8 H⁺; hydrated ferric oxide: Fe₂O₃ · x H₂O (Rust).
  * Prevention: Galvanization (coating with more electropositive Zinc sacrificial anode: E°(Zn²⁺/Zn) = -0.76 V; zinc oxidizes preferentially, protecting iron even if scratched).

**COMMON MISTAKE:**
- In Nernst equation, writing log([Reactants]/[Products]) with a minus sign or forgetting to raise concentrations to their stoichiometric powers (e.g. [Ag⁺]² in Zn + 2Ag⁺ -> Zn²⁺ + 2Ag).
- Forgetting that solids have concentration = 1 in the reaction quotient Q.

**KEY POINTS:**
- Salt bridge maintains electrical neutrality; it does NOT conduct electrons (conducts ions).
- Λ°_m for weak electrolytes is computed using Kohlrausch's law because infinite dilution cannot be reached experimentally.
- Sacrificial zinc protection protects iron even when the zinc coating is scratched.`;
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
    return `TOPIC: Chapter 3: Chemical Kinetics
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Rate of Reaction & Experimental Rate Laws:**
- **Average Rate (r_avg):** r_avg = - Δ[R]/Δt = + Δ[P]/Δt.
- **Instantaneous Rate (r_inst):** Rate at a specific time instant: r_inst = - d[R]/dt = + d[P]/dt (slope of tangent to concentration-time curve).
- For general reaction a A + b B -> c C + d D:
  Rate = - (1/a) d[A]/dt = - (1/b) d[B]/dt = + (1/c) d[C]/dt = + (1/d) d[D]/dt.
- **Rate Law & Order of Reaction:**
**FORMULA:** Rate = k · [A]ˣ · [B]ʸ  (where x and y are experimental orders with respect to A and B; x and y may or may not equal stoichiometric coefficients a and b).
- **Overall Order of Reaction (n):** n = x + y.
  * Order is an EXPERIMENTAL quantity; cannot be deduced from balanced equation.
  * Order can be zero, integer (1, 2, 3), fractional, or even negative.
- **Units of Rate Constant (k):**
**FORMULA:** Unit of k = (mol·L⁻¹)^(1-n) · s⁻¹  (where n is overall order).
  * Zero Order (n = 0): mol·L⁻¹·s⁻¹
  * First Order (n = 1): s⁻¹ (or min⁻¹, hr⁻¹)
  * Second Order (n = 2): L·mol⁻¹·s⁻¹

**2. Order vs Molecularity Comparison (Frequent 3-Mark Question):**
| Feature | Order of Reaction | Molecularity of Reaction |
|---|---|---|
| **Definition** | Sum of powers of concentrations in experimental rate law | Number of reacting particles colliding simultaneously in an elementary step |
| **Determination** | Purely experimental quantity | Theoretical concept derived from reaction mechanism |
| **Values** | Can be 0, fraction, negative, or whole number | Always an integer: 1 (unimolecular), 2 (bimolecular), 3 (trimolecular); NEVER 0 or fraction |
| **Applicability** | Applies to elementary as well as complex reactions | Meaningful ONLY for elementary (single-step) reactions |
| **Maximum Limit** | Can be higher numbers | Never exceeds 3 (probability of >3 molecules colliding simultaneously is negligible) |

**3. Integrated Rate Equations & Half-Life Derivations:**
- **Zero-Order Reaction:**
**DERIVATION:**
  Step 1: - d[R]/dt = k [R]⁰ = k => d[R] = - k dt.
  Step 2: Integrating both sides: [R] = - k t + I.
  Step 3: At t = 0, [R] = [R]₀ => I = [R]₀.
  Step 4: Integrated equation: **[R] = [R]₀ - k · t**  =>  **k = ([R]₀ - [R]) / t**.
  Step 5: Half-life (t_1/2): Time when [R] = [R]₀ / 2:
**FORMULA:** t_1/2 = [R]₀ / (2k). (Directly proportional to initial concentration [R]₀).
  Step 6: Graph: Plot of [R] vs t is a straight line with slope = -k and y-intercept = [R]₀.

- **First-Order Reaction:**
**DERIVATION:**
  Step 1: - d[R]/dt = k [R] => d[R] / [R] = - k dt.
  Step 2: Integrating both sides: ln[R] = - k t + I.
  Step 3: At t = 0, [R] = [R]₀ => I = ln[R]₀.
  Step 4: ln[R] - ln[R]₀ = - k t => ln([R]₀ / [R]) = k t.
  Step 5: Converting to base-10 logarithm:
**FORMULA:** k = (2.303 / t) · log₁₀([R]₀ / [R])
**FORMULA:** [R] = [R]₀ · e^(-kt)  (Exponential decay).
  Step 6: Half-life (t_1/2): At t = t_1/2, [R] = [R]₀ / 2:
  k = (2.303 / t_1/2) · log₁₀([R]₀ / ([R]₀/2)) = (2.303 / t_1/2) · log₁₀ 2 = (2.303 × 0.3010) / t_1/2 = 0.693 / t_1/2.
**FORMULA:** t_1/2 = 0.693 / k.
  * **Critical Insight:** Half-life of a first-order reaction is COMPLETELY INDEPENDENT of initial concentration [R]₀!
  * **Proof: Show that t_99.9% = 10 × t_1/2 for 1st order:**
    t_99.9% = (2.303 / k) log₁₀(100 / (100 - 99.9)) = (2.303 / k) log₁₀(100 / 0.1) = (2.303 / k) log₁₀(1000) = (2.303 × 3) / k = 6.909 / k.
    Since t_1/2 = 0.693 / k => t_99.9% / t_1/2 = (6.909 / k) / (0.693 / k) = 10. (Hence proved).
- **Pseudo First-Order Reactions:**
  - Reactions having molecularity ≥ 2 that exhibit first-order kinetics because one reactant is present in huge excess (its concentration remains virtually constant):
  1. Acid-catalyzed hydrolysis of ethyl acetate: CH₃COOC₂H₅ + H₂O(excess) --[H⁺]--> CH₃COOH + C₂H₅OH. Rate = k' [CH₃COOC₂H₅][H₂O] = k [CH₃COOC₂H₅].
  2. Inversion of cane sugar: C₁₂H₂₂O₁₁ + H₂O(excess) --[H⁺]--> C₆H₁₂O₆ (glucose) + C₆H₁₂O₆ (fructose).

**4. Temperature Dependence & Arrhenius Equation:**
- **Temperature Coefficient:** Rate of reaction roughly doubles or triples for every 10°C rise in temperature.
- **Arrhenius Equation:**
**FORMULA:** k = A · e^(-E_a / RT)
  (where A = Arrhenius pre-exponential factor / frequency factor, E_a = Activation energy in J·mol⁻¹, R = 8.314 J·K⁻¹·mol⁻¹, T = Absolute temperature in K).
- **Logarithmic Form:**
**FORMULA:** ln k = ln A - (E_a / RT)  =>  log₁₀ k = log₁₀ A - (E_a / (2.303 R T)).
  - Plot of log₁₀ k vs 1/T is linear with **slope = - E_a / (2.303 R)** and y-intercept = log₁₀ A.
- **Two-Temperature Equation (Core Board Numerical Form):**
**FORMULA:** log₁₀(k₂ / k₁) = (E_a / 2.303 R) · [ (T₂ - T₁) / (T₁ · T₂) ].
- **Effect of Catalyst:**
  * Increases reaction rate by providing an alternative reaction pathway having LOWER activation energy (E_a).
  * A catalyst speeds up both forward and backward reactions equally, establishing equilibrium faster without altering:
    1. Enthalpy change of reaction (ΔH = unchanged).
    2. Gibbs free energy change (ΔG = unchanged).
    3. Equilibrium constant (K_c = unchanged).

**COMMON MISTAKE:**
- Using Celsius instead of Kelvin in Arrhenius equation. Always convert T(K) = T(°C) + 273.15!
- Forgetting to convert E_a from kJ/mol to J/mol when using R = 8.314 J·K⁻¹·mol⁻¹.

**KEY POINTS:**
- A first order reaction never goes to 100% completion (requires infinite time).
- In first-order gaseous reactions: k = (2.303 / t) · log₁₀[ p_i / (2p_i - p_t) ].`;
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
    return `TOPIC: Chapter 4: d- and f-Block Elements
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. General Characteristics of Transition Elements (3d Series: Sc to Zn):**
- **Definition:** Elements having incompletely filled (partially filled) (n-1)d subshell in their ground state or in any one of their common oxidation states.
  - **Why Zn, Cd, Hg are NOT Considered Typical Transition Elements:** They have completely filled (n-1)d¹⁰ configurations in both ground state and common oxidation state (+2).
- **Electronic Configuration:** (n-1)d¹⁻¹⁰ ns¹⁻². Exceptional stability of half-filled and fully filled subshells:
  * Chromium (Z = 24): [Ar] 3d⁵ 4s¹ (instead of 3d⁴ 4s²).
  * Copper (Z = 29): [Ar] 3d¹⁰ 4s¹ (instead of 3d⁹ 4s²).
- **Atomic & Ionic Radii Trends:**
  * Decreases from Sc to Cr due to increasing effective nuclear charge (Z_eff).
  * Remains almost constant from Fe to Ni because the screening effect of added 3d electrons cancels out the increased nuclear charge.
  * Shows slight increase from Cu to Zn due to increased inter-electronic repulsions among paired 3d¹⁰ electrons.
- **Ionization Enthalpies:**
  * Second IE is exceptionally high for Cr (3d⁵) and Cu (3d¹⁰) because removing 2nd electron breaks stable d⁵/d¹⁰ configurations.
  * Third IE is exceptionally high for Mn (3d⁵) and Zn (3d¹⁰).
- **Variable Oxidation States:**
  * Arises because the energies of (n-1)d and ns subshells are very close, allowing both to participate in bonding.
  * Sc shows only +3 (noble gas [Ar]); Manganese shows maximum number of oxidation states (+2 to +7 in KMnO₄).
  * Highest oxidation states are stabilized in Fluorides and Oxides (e.g. CrF₆, Mn₂O₇) due to high electronegativity and small size of F and O. Oxygen has superior ability to stabilize high oxidation states via multiple bonds (pπ-dπ bonding).
- **Magnetic Properties:**
  * Diamagnetic: All electrons paired (repelled by magnetic field).
  * Paramagnetic: Contains unpaired electrons (attracted by magnetic field).
**FORMULA:** Spin-only Magnetic Moment: μ = √[ n(n + 2) ] Bohr Magnetons (BM)  (where n = number of unpaired electrons).
- **Colour of Transition Metal Ions:**
  * Arises due to absorption of specific wavelengths of visible light for **d-d electronic transitions** between split d-orbitals in presence of ligands. The transmitted complementary color is observed.
  * Ions with d⁰ (Sc³⁺, Ti⁴⁺) or d¹⁰ (Zn²⁺, Cu⁺) are COLOURLESS because d-d transitions are impossible.
- **Catalytic Properties:**
  * Excellent catalysts (V₂O₅ in Contact process, Fe in Haber process, Ni in hydrogenation) due to:
    1. Ability to adopt variable oxidation states and form unstable intermediates.
    2. Large surface area for adsorption of reactants.
- **Interstitial Compounds:**
  * Formed when small non-metal atoms (H, B, C, N) fit into interstitial voids of transition metal crystal lattices.
  * Characteristics: High melting points (higher than pure metals), extremely hard, retain metallic conductivity, chemically inert.
- **Alloy Formation:** Readily form alloys (Brass: Cu-Zn, Bronze: Cu-Sn, Stainless steel) because transition metal atoms have similar atomic radii (within 15% rule), allowing mutual replacement in crystal lattices.

**2. Lanthanoids & Actinoids (f-Block / Inner Transition Elements):**
- **Lanthanoid Contraction (Most Important CBSE Concept):**
  * Definition: The steady and gradual decrease in atomic and ionic radii (M³⁺) from Lanthanum (La) to Lutetium (Lu).
  * **Cause:** Ineffective and diffuse shielding of one 4f electron by another 4f electron from the increasing nuclear charge.
  * **Three Major Consequences:**
    1. Nearly identical atomic radii and close chemical resemblance of 4d and 5d series elements (e.g. **Zr = 160 pm and Hf = 159 pm**; Nb and Ta).
    2. Basic strength of hydroxides decreases systematically from La(OH)₃ to Lu(OH)₃ because smaller ionic size increases covalent character (Fajans' Rule).
    3. Separation of individual lanthanoids from mixtures is extremely difficult.
- **Oxidation States of Lanthanoids:** Common oxidation state is +3.
  * Cerium shows +4 (Ce⁴⁺ is a strong oxidizing agent; stable configuration [Xe]).
  * Europium shows +2 (Eu²⁺ is a strong reducing agent; stable configuration [Xe] 4f⁷).
- **Actinoids:**
  * Show greater range of oxidation states (+3, +4, +5, +6, +7) compared to lanthanoids because 5f, 6d, and 7s energy levels are comparable in energy.
  * Actinoid contraction is greater from element to element than lanthanoid contraction due to poorer shielding by 5f electrons compared to 4f electrons.

**3. Important Transition Metal Compounds:**
- **1. Potassium Dichromate (K₂Cr₂O₇):**
  - **Preparation from Chromite Ore (FeCr₂O₄):**
    Step 1: 4 FeCr₂O₄ + 8 Na₂CO₃ + 7 O₂ -> 8 Na₂CrO₄ (Yellow) + 2 Fe₂O₃ + 8 CO₂.
    Step 2: 2 Na₂CrO₄ + H₂SO₄ -> Na₂Cr₂O₇ (Orange) + Na₂SO₄ + H₂O.
    Step 3: Na₂Cr₂O₇ + 2 KCl -> K₂Cr₂O₇ (Orange crystals) + 2 NaCl.
  - **pH Dependent Equilibrium:**
    * In acidic medium: 2 CrO₄²⁻ (Yellow) + 2 H⁺ -> Cr₂O₇²⁻ (Orange) + H₂O.
    * In basic medium: Cr₂O₇²⁻ (Orange) + 2 OH⁻ -> 2 CrO₄²⁻ (Yellow) + H₂O.
  - **Oxidizing Action in Acidic Medium (Cr₂O₇²⁻ + 14 H⁺ + 6e⁻ -> 2 Cr³⁺ + 7 H₂O):**
    * Fe²⁺ -> Fe³⁺: Cr₂O₇²⁻ + 14 H⁺ + 6 Fe²⁺ -> 2 Cr³⁺ + 6 Fe³⁺ + 7 H₂O.
    * I⁻ -> I₂: Cr₂O₇²⁻ + 14 H⁺ + 6 I⁻ -> 2 Cr³⁺ + 3 I₂ + 7 H₂O.
    * H₂S -> S: Cr₂O₇²⁻ + 8 H⁺ + 3 H₂S -> 2 Cr³⁺ + 3 S + 7 H₂O.
- **2. Potassium Permanganate (KMnO₄):**
  - **Preparation from Pyrolusite Ore (MnO₂):**
    Step 1: 2 MnO₂ + 4 KOH + O₂ -> 2 K₂MnO₄ (Dark Green) + 2 H₂O.
    Step 2: 3 MnO₄²⁻ + 4 H⁺ -> 2 MnO₄⁻ (Purple) + MnO₂ + 2 H₂O (Disproportionation in acidic medium).
  - **Oxidizing Action:**
    * In Acidic Medium: MnO₄⁻ + 8 H⁺ + 5e⁻ -> Mn²⁺ + 4 H₂O. (Oxidizes Fe²⁺ -> Fe³⁺, C₂O₄²⁻ -> 2 CO₂, I⁻ -> I₂).
    * In Neutral / Faintly Alkaline Medium: MnO₄⁻ + 2 H₂O + 3e⁻ -> MnO₂ + 4 OH⁻. (Oxidizes I⁻ -> IO₃⁻ iodate, S₂O₃²⁻ -> SO₄²⁻).

**COMMON MISTAKE:**
- Writing that Ce⁴⁺ is reducing; Ce⁴⁺ has [Xe] and readily accepts an electron to become Ce³⁺, hence it is an OXIDIZING agent! Eu²⁺ loses an electron to become Eu³⁺, hence it is a REDUCING agent.

**KEY POINTS:**
- Cu²⁺(aq) is more stable than Cu⁺(aq) in aqueous solution because the high hydration enthalpy of Cu²⁺ more than compensates for its high second ionization enthalpy.
- Cr²⁺ is reducing while Mn³⁺ is oxidizing though both have d⁴ configuration (Cr³⁺ achieves stable half-filled t_2g³ configuration in water).`;
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
    return `TOPIC: Chapter 5: Coordination Compounds
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Werner's Coordination Theory & Structural Terms:**
- **Werner's Theory (1893):**
  * **Primary Valency:** Ionizable, satisfied only by negative ions (anions), corresponds to the oxidation state of the central metal. Non-directional.
  * **Secondary Valency:** Non-ionizable, satisfied by neutral molecules or anions, corresponds to the Coordination Number (fixed geometry). Directional in space.
  * Example: In [Co(NH₃)₆]Cl₃, primary valency is 3 (3 Cl⁻ ions precipitated by AgNO₃); secondary valency is 6. In [Co(NH₃)₅Cl]Cl₂, only 2 Cl⁻ ions are precipitated by AgNO₃.
- **Classification of Ligands:**
  * **Monodentate:** Cl⁻, H₂O, NH₃, CN⁻.
  * **Bidentate (Didentate):** Oxalate ion (ox²⁻, C₂O₄²⁻), Ethylenediamine (en, H₂NCH₂CH₂NH₂).
  * **Polydentate / Hexadentate:** EDTA⁴⁻ (Ethylenediaminetetraacetate ion; forms highly stable 6-coordinate chelate complexes; used in estimating water hardness).
  * **Ambidentate Ligands:** Unidentate ligands possessing two different donor atoms capable of coordinating through either atom:
    * -NO₂⁻ (nitro, bonded via N) and -ONO⁻ (nitrito, bonded via O).
    * -SCN⁻ (thiocyanato, bonded via S) and -NCS⁻ (isothiocyanato, bonded via N).
    * Result: Gives rise to **Linkage Isomerism**.
  * **Chelate Effect:** When a di- or polydentate ligand binds to a metal ion forming a ring structure (chelate), the complex is thermodynamically far more stable than with monodentate ligands due to positive entropy change (ΔS > 0).

**2. IUPAC Nomenclature Rules:**
1. Cation named first, then anion (in both cationic and anionic complexes).
2. Within coordination sphere: Ligands named in alphabetical order before the central metal atom/ion.
3. Anionic ligands end in '-o' (chlorido, cyanido, oxalato, hydroxido). Neutral ligands: aqua (H₂O), ammine (NH₃), carbonyl (CO), nitrosyl (NO).
4. Prefixes di, tri, tetra; or bis, tris, tetrakis (used for ligands containing numerical prefixes like ethylenediamine).
5. Oxidation state of metal indicated in Roman numerals in parentheses immediately following metal name.
6. If complex entity is an ANION, metal name ends in suffix **'-ate'** (e.g. Ferrate, Cuprate, Cobaltate, Platinate, Argentate).
   - Examples:
     * [Co(NH₃)₆]Cl₃: Hexaamminecobalt(III) chloride
     * K₄[Fe(CN)₆]: Potassium hexacyanoferrate(II)
     * [Pt(NH₃)₂Cl(NO₂)]: Diamminechloridonitrito-N-platinum(II)
     * [Cr(en)₃]Cl₃: Tris(ethane-1,2-diamine)chromium(III) chloride

**3. Isomerism in Coordination Compounds:**
- **1. Structural Isomerism:**
  * **Ionization Isomerism:** Gives different ions in aqueous solution: [Co(NH₃)₅SO₄]Br (red, gives pale yellow AgBr with AgNO₃) and [Co(NH₃)₅Br]SO₄ (gives white BaSO₄ with BaCl₂).
  * **Linkage Isomerism:** Arises with ambidentate ligands: [Co(NH₃)₅(NO₂)]Cl₂ (yellow) and [Co(NH₃)₅(ONO)]Cl₂ (red).
  * **Coordination Isomerism:** Interchange of ligands between cationic and anionic complex entities: [Co(NH₃)₆][Cr(CN)₆] and [Cr(NH₃)₆][Co(CN)₆].
  * **Hydrate / Solvate Isomerism:** Water molecules act as ligand vs water of crystallization: [Cr(H₂O)₆]Cl₃ (violet), [Cr(H₂O)₅Cl]Cl₂·H₂O (grey-green).
- **2. Stereoisomerism:**
  * **Geometrical Isomerism:**
    - Square planar [MA₂B₂]: *cis*-[Pt(NH₃)₂Cl₂] (anticancer drug Cisplatin) and *trans*-[Pt(NH₃)₂Cl₂].
    - Note: Tetrahedral complexes NEVER exhibit geometrical isomerism because all four positions are adjacent/equivalent.
    - Octahedral [MA₄B₂]: *cis* and *trans* isomers.
    - Octahedral [MA₃B₃]: *fac* (facial - three donor atoms on one triangular face) and *mer* (meridional - three donor atoms in one meridian plane) isomers.
  * **Optical Isomerism:** Non-superimposable mirror images (enantiomers: dextro and laevo):
    - Displayed by complexes lacking a plane of symmetry: [Co(en)₃]³⁺ and *cis*-[Co(en)₂Cl₂]⁺.
    - Note: *trans*-[Co(en)₂Cl₂]⁺ has a plane of symmetry, so it is OPTICALLY INACTIVE.

**4. Valence Bond Theory (VBT) vs Crystal Field Theory (CFT):**
- **Valence Bond Theory (Pauling):**
  * Strong field ligands (CN⁻, CO, NH₃) cause pairing of electrons in 3d orbitals => Inner orbital complex (d²sp³, low spin, diamagnetic or low paramagnetism).
  * Weak field ligands (F⁻, Cl⁻, H₂O) cannot force pairing => Outer orbital complex (sp³d², high spin, paramagnetic).
  * Limitations: Cannot explain color/spectra, cannot quantitatively explain magnetic moments or temperature dependence.
- **Crystal Field Theory (CFT):**
  * Assumes metal-ligand bonding is purely electrostatic (ionic).
  * Degenerate d-orbitals of free metal ion split in presence of ligand field:
    1. **Octahedral Field:** Split into lower energy **t_2g** (d_xy, d_yz, d_zx) and higher energy **e_g** (d_x²-y², d_z²). Energy difference is **Δ_o**.
    2. **Tetrahedral Field:** Split into lower energy **e** and higher energy **t_2**. Energy difference is **Δ_t = (4/9) Δ_o**.
  * **Spectrochemical Series:** Arranges ligands in increasing field strength (increasing Δ_o):
    I⁻ < Br⁻ < S²⁻ < Cl⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NCS⁻ < EDTA⁴⁻ < NH₃ < en < CN⁻ < CO.
  * **d⁴ Configuration in Octahedral Complex:**
    * If Δ_o < P (Pairing Energy, Weak field ligand): 4th electron enters e_g orbital => Configuration **t_2g³ e_g¹** (High Spin).
    * If Δ_o > P (Strong field ligand): 4th electron pairs up in t_2g orbital => Configuration **t_2g⁴ e_g⁰** (Low Spin).
- **Synergic Bonding in Metal Carbonyls (e.g. Ni(CO)₄, Fe(CO)₅):**
  * Carbonyl carbon donates lone pair into vacant metal hybrid orbital forming a metal-carbon σ-bond.
  * Filled metal d-orbital donates electron density back into vacant π* antibonding orbital of CO forming a metal-carbon π-bond (**π-backbonding**).
  * This synergic effect strengthens the M-C bond while weakening the C-O bond.

**COMMON MISTAKE:**
- Assuming [Ni(CO)₄] is square planar because CO is strong. It is sp³ hybridized and TETRAHEDRAL (CO pairs 3d⁸ electrons into 3d¹⁰, leaving 4s and 4p for sp³).
- Forgetting that trans-[Co(en)₂Cl₂]⁺ has a plane of symmetry and is optically inactive.

**KEY POINTS:**
- Chelate complexes have higher stability due to positive entropy change (ΔS > 0).
- Anhydrous CuSO₄ is white because absence of ligands means no crystal field splitting, hence no d-d transitions. Hydrated CuSO₄·5H₂O is blue due to d-d absorption.`;
  }

  return null;
}
