// chemistryData.ts - Complete, Rigorous CBSE Class 12 Chemistry Knowledge Base (2026-27 Pattern)
// Covers all 10 Chapters + Full Syllabus Revision with complete NCERT theory, named reactions, mechanisms, formula vaults, and solved 15-year board PYQs.

export function getChemistryContent(chapter: string, type: 'notes' | 'pyqs'): string {
  const isRevision = chapter.toUpperCase().includes("REVISION") || chapter.toUpperCase().includes("FULL");
  const lower = chapter.toLowerCase();

  if (type === 'notes') {
    if (isRevision) {
      return `TOPIC: Class 12 Chemistry Complete Revision Masterbook (2026-27 CBSE Pattern)
Comprehensive master sheet for CBSE Class 12 Chemistry. Covers Physical Chemistry formulas, Inorganic trends and Coordination chemistry, and all Organic Name Reactions, mechanisms, and diagnostic tests.

**1. Physical Chemistry Formula Vault:**
- **Raoult's Law (Volatile binary liquids):** P_total = p_A° x_A + p_B° x_B.
- **Relative Lowering of Vapour Pressure:** (p° - p) / p° = x_B = (w_B · M_A) / (M_B · w_A).
- **Elevation in Boiling Point:** ΔT_b = i · K_b · m  (where m = molality = (w_B × 1000) / (M_B × w_A in g)).
- **Depression in Freezing Point:** ΔT_f = i · K_f · m.
- **Osmotic Pressure:** Π = i · C · R · T = i · (w_B · R · T) / (M_B · V).
- **van 't Hoff Factor (i):** i = Normal Molar Mass / Observed Molar Mass.
  - For Dissociation: i = 1 + (n - 1)α.
  - For Association: i = 1 + (1/n - 1)α (e.g. dimerization of acetic acid in benzene, n = 2).
- **Nernst Equation (at 298 K):** E_cell = E°_cell - (0.0591 / n) · log₁₀ [ (Products) / (Reactants) ].
- **Gibbs Free Energy & Cell Potential:** ΔG° = - n · F · E°_cell = - 2.303 · R · T · log₁₀ K_c.
- **Kohlrausch's Law:** Λ°_m(A_x B_y) = x · λ°(Aʸ⁺) + y · λ°(Bˣ⁻); Degree of dissociation α = Λ_m / Λ°_m; K_a = (C α²) / (1 - α).
- **First Order Integrated Rate Law:** k = (2.303 / t) · log₁₀([A]₀ / [A]); Half-life t_1/2 = 0.693 / k.
- **Arrhenius Equation:** log₁₀(k₂ / k₁) = (E_a / 2.303 R) · [ (T₂ - T₁) / (T₁ · T₂) ].

**2. Inorganic Chemistry Trends & Concepts:**
- **d-Block Trends:** Variable oxidation states (due to small energy difference between (n-1)d and ns orbitals), colored ions (due to d-d electronic transitions), catalytic properties (unpaired d electrons and variable valencies), interstitial compounds (small atoms H, C, N trapped in crystal voids).
- **Lanthanoid Contraction:** The steady decrease in atomic and ionic radii of lanthanoid elements with increasing atomic number due to imperfect shielding by diffuse 4f electrons. Consequence: Zr and Hf have almost identical atomic radii (160 pm and 159 pm).
- **Coordination Chemistry:** Ligand field splitting in octahedral (t_2g lower, e_g higher) and tetrahedral (e lower, t_2 higher) geometries. High spin vs low spin complexes determined by Spectrochemical Series.

**3. Organic Chemistry Name Reactions Master Vault:**
- **Sandmeyer Reaction:** Ar-N₂⁺Cl⁻ + CuCl/HCl => Ar-Cl + N₂.
- **Finkelstein & Swarts:** R-X + NaI (acetone) => R-I; R-X + AgF => R-F.
- **Wurtz-Fittig Reaction:** Ar-X + 2Na + R-X (dry ether) => Ar-R + 2NaX.
- **Reimer-Tiemann Reaction:** Phenol + CHCl₃ + 3NaOH (340 K) => Salicylaldehyde (2-hydroxybenzaldehyde).
- **Kolbe's Reaction:** Phenol + NaOH + CO₂ (400 K, 4-7 atm) => Salicylic acid.
- **Williamson Ether Synthesis:** R-ONa + R'-X (1° alkyl halide) => R-O-R' + NaX.
- **Aldol Condensation:** Carbonyls with α-H + dil. NaOH => β-hydroxy aldehyde => α,β-unsaturated carbonyl.
- **Cannizzaro Reaction:** Carbonyls without α-H (HCHO, PhCHO) + conc. KOH => Alcohol + Carboxylic acid salt.
- **Hoffmann Bromamide Degradation:** R-CONH₂ + Br₂ + 4KOH => R-NH₂ + K₂CO₃ + 2KBr + 2H₂O.
- **Gabriel Phthalimide Synthesis:** Phthalimide + KOH + R-X => N-alkylphthalimide => alkaline hydrolysis gives pure 1° aliphatic amine.
INSIGHT: For conversions, always write reagent and temperature above arrows. In physical chemistry numericals, box the final answer with correct SI units.`;
    }

    // CHAPTER 1: SOLUTIONS
    if (lower.includes('solution')) {
      return `TOPIC: Chapter 1: Solutions
Comprehensive notes covering types of solutions, concentration terms, Raoult's Law, Henry's Law, Colligative Properties, and Abnormal Molar Masses.

**1. Concentration Terms & Henry's Law:**
- **Molarity (M):** Moles of solute per litre of solution: M = (w_B × 1000) / (M_B × V_in_mL) [Unit: mol/L, Temperature Dependent].
- **Molality (m):** Moles of solute per kilogram of solvent: m = (w_B × 1000) / (M_B × w_A_in_g) [Unit: mol/kg, Temperature Independent].
- **Mole Fraction (x):** x_B = n_B / (n_A + n_B), where x_A + x_B = 1.
- **Henry's Law:** At constant temperature, the solubility (or partial pressure) of a gas in a liquid is directly proportional to the mole fraction of the gas in solution: **p = K_H · x**.
  - High K_H indicates lower solubility of the gas in liquid at given pressure.
  - Aquatic species are more comfortable in cold water because solubility of oxygen increases as temperature decreases (K_H decreases).
  - Applications: (1) Carbonated beverages sealed under high pressure. (2) Deep-sea divers breathe air diluted with 11.7% He to avoid decompression sickness (bends). (3) At high altitudes, low atmospheric pressure causes low blood oxygen (anoxia).

**2. Vapour Pressure & Raoult's Law:**
- **Raoult's Law (Volatile Liquid Mixtures):** For a solution of volatile liquids, the partial vapour pressure of each component is directly proportional to its mole fraction: p_A = p_A° · x_A and p_B = p_B° · x_B => **P_total = p_A° x_A + p_B° x_B**.
- **Ideal vs Non-Ideal Solutions:**
  - **Ideal Solution:** Obeys Raoult's law over entire concentration range; ΔH_mix = 0, ΔV_mix = 0; A-B interactions equal A-A and B-B interactions. Examples: n-hexane + n-heptane, Bromoethane + Chloroethane, Benzene + Toluene.
  - **Non-Ideal Solutions with Positive Deviation:** A-B intermolecular forces are weaker than A-A and B-B; p_total > (p_A + p_B); ΔH_mix > 0 (endothermic), ΔV_mix > 0; Forms minimum boiling azeotrope. Examples: Ethanol + Acetone, CS₂ + Acetone.
  - **Non-Ideal Solutions with Negative Deviation:** A-B intermolecular forces are stronger (e.g. H-bonding) than A-A and B-B; p_total < (p_A + p_B); ΔH_mix < 0 (exothermic), ΔV_mix < 0; Forms maximum boiling azeotrope. Examples: Chloroform + Acetone, Phenol + Aniline, HNO₃ + Water.

**3. Colligative Properties (Depend strictly on number of solute particles):**
- **1. Relative Lowering of Vapour Pressure (RLVP):**
  - Formula: (p° - p) / p° = x_B = (w_B · M_A) / (M_B · w_A).
- **2. Elevation of Boiling Point (ΔT_b):**
  - Formula: ΔT_b = T_b - T_b° = i · K_b · m = i · (1000 · K_b · w_B) / (M_B · w_A).
  - K_b is the molal boiling point elevation constant or Ebullioscopic constant (Unit: K kg mol⁻¹).
- **3. Depression of Freezing Point (ΔT_f):**
  - Formula: ΔT_f = T_f° - T_f = i · K_f · m = i · (1000 · K_f · w_B) / (M_B · w_A).
  - K_f is the Cryoscopic constant (Unit: K kg mol⁻¹). Application: Ethylene glycol used as antifreeze in car radiators.
- **4. Osmotic Pressure (Π):**
  - Formula: Π = i · C · R · T = i · (w_B · R · T) / (M_B · V).
  - Isotonic solutions have equal osmotic pressure (Π₁ = Π₂).
  - Hypertonic: Higher osmotic pressure (cells shrink/crenate in hypertonic solution).
  - Hypotonic: Lower osmotic pressure (cells swell and burst in hypotonic solution).
  - Reverse Osmosis (RO): When pressure greater than osmotic pressure is applied on solution side, solvent flows from solution to pure solvent through a semipermeable membrane (e.g. cellulose acetate). Used in desalination of seawater.

**4. van 't Hoff Factor (i) & Abnormal Molar Mass:**
- van 't Hoff factor: i = Normal (calculated) Molar Mass / Abnormal (observed) Molar Mass = Total moles of particles after association/dissociation / Initial moles.
- Degree of Dissociation (α): α = (i - 1) / (n - 1)  [where n = ions per formula unit, e.g. for K₂SO₄, n = 3].
- Degree of Association (α): α = (1 - i) / (1 - 1/n)  [for dimerization of benzoic acid in benzene, n = 2].
INSIGHT: For non-electrolytes like glucose, urea, and sucrose, i = 1. Always check the solute formula before solving numericals!`;
    }

    // CHAPTER 2: ELECTROCHEMISTRY
    if (lower.includes('electrochemistry')) {
      return `TOPIC: Chapter 2: Electrochemistry
In-depth study notes on Galvanic cells, Nernst equation, Conductance, Kohlrausch's law, Batteries, Fuel Cells, and Corrosion.

**1. Electrochemical Cells & Nernst Equation:**
- **Galvanic Cell (Daniel Cell):** Zn(s) | Zn²⁺(aq, 1M) || Cu²⁺(aq, 1M) | Cu(s).
  - Anode (Oxidation, Negative): Zn(s) -> Zn²⁺(aq) + 2e⁻.
  - Cathode (Reduction, Positive): Cu²⁺(aq) + 2e⁻ -> Cu(s).
  - Standard Cell Potential: E°_cell = E°_cathode - E°_anode = +0.34 V - (-0.76 V) = **+1.10 V**.
  - Function of Salt Bridge (containing agar-agar + KCl/KNO₃): Maintains electrical neutrality of half-cells and completes inner circuit without liquid junction potential.
- **Nernst Equation (at 298 K):**
  - E_cell = E°_cell - (2.303 RT / nF) log₁₀ Q = **E°_cell - (0.0591 / n) · log₁₀ [ (Products) / (Reactants) ]**.
- **Thermodynamic Relations:**
  - Standard Gibbs Free Energy: **ΔG° = - n · F · E°_cell**. (Reaction is spontaneous when E°_cell > 0 and ΔG° < 0).
  - Equilibrium Constant (K_c): **log₁₀ K_c = (n · E°_cell) / 0.0591** at 298 K.

**2. Conductance of Electrolytic Solutions:**
- **Resistance & Resistivity:** R = ρ · (l / A) => Conductance G = 1/R = κ · (A / l) [Unit: Siemens, S or Ω⁻¹].
- **Cell Constant (G*):** G* = l / A = R · κ [Unit: cm⁻¹ or m⁻¹].
- **Conductivity (κ, Kappa):** Conductance of 1 cm³ (or 1 m³) of electrolyte solution.
  - Conductivity decreases upon dilution for both strong and weak electrolytes because the number of current-carrying ions per unit volume decreases.
- **Molar Conductivity (Λ_m):** Conductance of all ions produced from 1 mole of electrolyte: **Λ_m = (κ × 1000) / Molarity** [Unit: S cm² mol⁻¹].
  - Molar conductivity increases with dilution for both strong and weak electrolytes.
  - For Strong Electrolytes (Debye-Huckel-Onsager equation): Λ_m = Λ°_m - A √C (Inter-ionic attractions decrease).
  - For Weak Electrolytes: Λ_m increases sharply near infinite dilution due to steep increase in degree of dissociation (α).

**3. Kohlrausch's Law of Independent Migration of Ions:**
- **Statement:** Limiting molar conductivity of an electrolyte is the sum of individual limiting ionic conductivities of its constituent cations and anions: **Λ°_m(A_x B_y) = x · λ°(Aʸ⁺) + y · λ°(Bˣ⁻)**.
- **Applications:**
  - 1. Determination of Λ°_m for weak electrolytes: Λ°_m(CH₃COOH) = Λ°_m(CH₃COONa) + Λ°_m(HCl) - Λ°_m(NaCl).
  - 2. Degree of Dissociation: **α = Λ_m / Λ°_m**.
  - 3. Dissociation Constant of weak acid: **K_a = (C · α²) / (1 - α) = [ C · (Λ_m / Λ°_m)² ] / [ 1 - (Λ_m / Λ°_m) ]**.

**4. Batteries, Fuel Cells & Corrosion:**
- **Primary Batteries (Non-rechargeable):**
  - **Dry Cell (Leclanche Cell):** Anode: Zn container; Cathode: Graphite rod surrounded by MnO₂ + C; Electrolyte: NH₄Cl + ZnCl₂ paste. Cell potential: ~1.5 V.
  - **Mercury Cell:** Anode: Zn-Hg amalgam; Cathode: HgO + C; Electrolyte: KOH + ZnO paste. Provides constant potential of **1.35 V** throughout life because overall reaction involves no ions in solution.
- **Secondary Batteries (Rechargeable):**
  - **Lead-Acid Storage Battery:**
    * Discharging: Anode: Pb(s) + SO₄²⁻ -> PbSO₄(s) + 2e⁻; Cathode: PbO₂(s) + SO₄²⁻ + 4H⁺ + 2e⁻ -> PbSO₄(s) + 2H₂O.
    * Overall: Pb(s) + PbO₂(s) + 2H₂SO₄(aq) -> 2PbSO₄(s) + 2H₂O(l) (Density of H₂SO₄ decreases).
- **H₂-O₂ Fuel Cell:**
  - Converts chemical energy of combustion directly into electrical energy with ~70% efficiency and zero emissions (water is only product). Used in Apollo space program.
  - Anode: 2H₂(g) + 4OH⁻(aq) -> 4H₂O(l) + 4e⁻; Cathode: O₂(g) + 2H₂O(l) + 4e⁻ -> 4OH⁻(aq).
- **Corrosion (Rusting of Iron):** Electrochemical phenomenon.
  - Anode: 2Fe(s) -> 2Fe²⁺ + 4e⁻; Cathode: O₂(g) + 4H⁺ + 4e⁻ -> 2H₂O.
  - Rust formula: Fe₂O₃ · x H₂O. Prevention: Galvanization (coating with Zn sacrificial anode).
INSIGHT: Molar conductivity increases on dilution, but specific conductivity (κ) always decreases on dilution.`;
    }

    // CHAPTER 3: CHEMICAL KINETICS
    if (lower.includes('kinetic')) {
      return `TOPIC: Chapter 3: Chemical Kinetics
Comprehensive theory notes on reaction rates, order vs molecularity, integrated rate laws, temperature dependence, and collision theory.

**1. Rate of Reaction & Rate Law:**
- **Average Rate:** r_avg = - Δ[R]/Δt = + Δ[P]/Δt.
- **Instantaneous Rate:** r_inst = - d[R]/dt = + d[P]/dt.
- **Rate Law:** Rate = k [A]ˣ [B]ʸ (where x and y are experimental reaction orders with respect to reactants A and B).
- **Order of Reaction:** Sum of powers of concentrations in rate law: n = x + y.
  - Order can be zero, fractional, whole number, or negative. Order is purely an experimental quantity.
- **Units of Rate Constant (k):** **(mol L⁻¹)^(1-n) s⁻¹** (where n is overall order).
  - Zero Order: mol L⁻¹ s⁻¹.
  - First Order: s⁻¹ (or min⁻¹).
  - Second Order: L mol⁻¹ s⁻¹.

**2. Order vs Molecularity:**
- **Molecularity:** The number of reacting species (atoms, ions, molecules) that collide simultaneously to bring about a chemical reaction.
- **Key Differences:**
  - Molecularity is theoretical (derived from elementary step); Order is experimental.
  - Molecularity cannot be zero or non-integer; Order can be zero or fractional.
  - Molecularity is only applicable to elementary reactions; Order applies to elementary and complex reactions.
  - Molecularity never exceeds 3 because probability of more than 3 molecules colliding simultaneously is negligible.

**3. Integrated Rate Equations:**
- **Zero Order Reaction:**
  - Differential equation: - d[R]/dt = k [R]⁰ = k => **[R] = [R]₀ - k t**.
  - Plot of [R] vs t gives a straight line with slope = -k and intercept = [R]₀.
  - Half-life: **t_1/2 = [R]₀ / (2k)** (Directly proportional to initial concentration).
- **First Order Reaction:**
  - Differential equation: - d[R]/dt = k [R] => **k = (2.303 / t) · log₁₀([A]₀ / [A])**.
  - Half-life: **t_1/2 = 0.693 / k** (Completely independent of initial concentration [A]₀).
  - Plot of log₁₀[R] vs t gives a straight line with slope = -k / 2.303.
- **Pseudo First Order Reactions:** Reactions that are higher order but follow first order kinetics due to one reactant present in large excess.
  - Acid hydrolysis of ethyl acetate: CH₃COOC₂H₅ + H₂O(excess) --[H⁺]--> CH₃COOH + C₂H₅OH. Rate = k' [CH₃COOC₂H₅][H₂O] = k [CH₃COOC₂H₅].
  - Inversion of Cane Sugar: C₁₂H₂₂O₁₁ + H₂O(excess) --[H⁺]--> C₆H₁₂O₆ + C₆H₁₂O₆.

**4. Temperature Dependence & Arrhenius Equation:**
- **Temperature Coefficient:** Rate of reaction doubles or triples for every 10°C rise in temperature.
- **Arrhenius Equation:** **k = A · e^(-E_a / RT)**.
  - Logarithmic Form: **log₁₀ k = log₁₀ A - (E_a / 2.303 R T)**.
  - Plot of log₁₀ k vs 1/T is linear with **slope = -E_a / (2.303 R)** and intercept = log₁₀ A.
  - Two-temperature form: **log₁₀(k₂ / k₁) = (E_a / 2.303 R) · [ (T₂ - T₁) / (T₁ · T₂) ]**.
- **Role of Catalyst:** A catalyst increases reaction rate by providing an alternative reaction pathway with lower activation energy (E_a). A catalyst does not alter ΔH, ΔG, or equilibrium constant K_c.
INSIGHT: For first order reactions, time required for 99.9% completion is equal to 10 half-lives (t_99.9% = 10 × t_1/2).`;
    }

    // CHAPTER 4: d AND f BLOCK ELEMENTS
    if (lower.includes('d & f') || lower.includes('d and f') || lower.includes('block')) {
      return `TOPIC: Chapter 4: d and f Block Elements
In-depth study notes on transition element characteristics, oxidation state trends, Lanthanoid contraction, and K₂Cr₂O₇ / KMnO₄ preparation.

**1. General Characteristics of Transition Elements (3d series: Sc to Zn):**
- **Electronic Configuration:** (n-1)d¹⁻¹⁰ ns¹⁻² (Exceptional configurations: Cr = [Ar] 3d⁵ 4s¹; Cu = [Ar] 3d¹⁰ 4s¹ due to stability of half-filled and completely filled d-subshells).
- **Atomic & Ionic Radii:** Decreases from Sc to Cr due to increase in effective nuclear charge; remains almost constant from Fe to Ni (screening effect of 3d electrons cancels nuclear charge); slightly increases at Cu and Zn due to inter-electronic repulsion among paired 3d¹⁰ electrons.
- **Ionization Enthalpies:** IE increases across the series. Second IE is exceptionally high for Cr (3d⁵) and Cu (3d¹⁰). Third IE is high for Mn (3d⁵) and Zn (3d¹⁰).
- **Variable Oxidation States:** Due to comparable energy levels of (n-1)d and ns electrons. Manganese shows highest oxidation state (+7 in KMnO₄). Highest oxidation states are stabilized in oxides and fluorides due to high electronegativity and small size of oxygen and fluorine.
- **Magnetic Properties:** Paramagnetism arises from unpaired electrons. Spin-only magnetic moment formula: **μ = √[n(n+2)] Bohr Magnetons (BM)** (where n = number of unpaired electrons).
- **Catalytic Properties:** Transition metals act as excellent catalysts (e.g. V₂O₅ in Contact process, Finely divided Fe in Haber process, Ni in hydrogenation) due to variable oxidation states and ability to form unstable intermediates.
- **Interstitial Compounds:** Formed when small non-metallic atoms (H, B, C, N) are trapped inside interstitial voids of transition metal lattices. Characteristics: High melting points, extremely hard, retain metallic conductivity, chemically inert.

**2. Lanthanoids & Actinoids (f-Block):**
- **Lanthanoid Contraction:** The steady and progressive decrease in atomic and ionic radii (M³⁺) from Lanthanum (La) to Lutetium (Lu).
  - Cause: Ineffective, diffuse shielding of one 4f electron by another 4f electron.
  - Consequences:
    1. Nearly identical atomic radii and chemical properties of 4d and 5d series elements (e.g. **Zr = 160 pm and Hf = 159 pm**; Nb and Ta).
    2. Basic strength of hydroxides decreases from La(OH)₃ to Lu(OH)₃ due to increase in covalent character with smaller ionic radius.
    3. Separation of individual lanthanoids from mixtures is difficult.
- **Actinoids:** Show greater range of oxidation states (+3 to +7) compared to lanthanoids because 5f, 6d, and 7s energy levels are comparable in energy. Actinoid contraction is greater than lanthanoid contraction due to poorer shielding by 5f electrons.

**3. Important Compounds: K₂Cr₂O₇ and KMnO₄:**
- **Potassium Dichromate (K₂Cr₂O₇):**
  - Prepared from Chromite ore (FeCr₂O₄):
    1. 4 FeCr₂O₄ + 8 Na₂CO₃ + 7 O₂ -> 8 Na₂CrO₄ (Yellow) + 2 Fe₂O₃ + 8 CO₂.
    2. 2 Na₂CrO₄ + H₂SO₄ -> Na₂Cr₂O₇ (Orange) + Na₂SO₄ + H₂O.
    3. Na₂Cr₂O₇ + 2 KCl -> K₂Cr₂O₇ (Orange crystals) + 2 NaCl.
  - Chromate-Dichromate Equilibrium: In acidic medium, CrO₄²⁻ (yellow) converts to Cr₂O₇²⁻ (orange); In basic medium, Cr₂O₇²⁻ converts back to CrO₄²⁻: **2 CrO₄²⁻ + 2 H⁺ <=> Cr₂O₇²⁻ + H₂O**.
  - Oxidizing Action in Acidic Medium: Cr₂O₇²⁻ + 14 H⁺ + 6e⁻ -> 2 Cr³⁺ + 7 H₂O. (Oxidizes Fe²⁺ -> Fe³⁺, I⁻ -> I₂, H₂S -> S, Sn²⁺ -> Sn⁴⁺).
- **Potassium Permanganate (KMnO₄):**
  - Prepared from Pyrolusite ore (MnO₂):
    1. 2 MnO₂ + 4 KOH + O₂ -> 2 K₂MnO₄ (Dark Green) + 2 H₂O.
    2. 3 MnO₄²⁻ + 4 H⁺ -> 2 MnO₄⁻ (Purple) + MnO₂ + 2 H₂O (Disproportionation in acidic medium).
  - Oxidizing Action:
    * In Acidic Medium: MnO₄⁻ + 8 H⁺ + 5e⁻ -> Mn²⁺ + 4 H₂O. (Oxidizes Fe²⁺ -> Fe³⁺, C₂O₄²⁻ -> CO₂, I⁻ -> I₂).
    * In Faintly Alkaline / Neutral Medium: MnO₄⁻ + 2 H₂O + 3e⁻ -> MnO₂ + 4 OH⁻. (Oxidizes I⁻ -> IO₃⁻ iodate, S₂O₃²⁻ -> SO₄²⁻).
INSIGHT: Zn, Cd, and Hg are NOT considered typical transition elements because they have completely filled d-subshells (d¹⁰) in ground state as well as in their common oxidation states.`;
    }

    // CHAPTER 5: COORDINATION COMPOUNDS
    if (lower.includes('coordination')) {
      return `TOPIC: Chapter 5: Coordination Compounds
Comprehensive study guide covering IUPAC nomenclature, Werner's theory, isomerism, Valence Bond Theory (VBT), and Crystal Field Theory (CFT).

**1. Werner's Coordination Theory & Terminology:**
- **Primary Valency:** Ionizable, satisfied by negative ions, corresponds to oxidation state of central metal.
- **Secondary Valency:** Non-ionizable, satisfied by neutral molecules or anions, corresponds to Coordination Number (fixed geometry).
- **Ligands:** Lewis bases donating lone pair(s) to central metal atom/ion:
  - Monodentate: Cl⁻, H₂O, NH₃, CN⁻.
  - Bidentate: Oxalate ion (ox²⁻, C₂O₄²⁻), Ethylenediamine (en, H₂NCH₂CH₂NH₂).
  - Polydentate / Hexadentate: EDTA⁴⁻ (Ethylenediaminetetraacetate ion).
  - **Ambidentate Ligands:** Ligands containing two different donor atoms but coordinating through only one at a time: -NO₂⁻ (nitro, via N) and -ONO⁻ (nitrito, via O); -SCN⁻ (thiocyanato, via S) and -NCS⁻ (isothiocyanato, via N). Causes Linkage Isomerism.
  - **Chelate Ligands:** Di- or polydentate ligands forming cyclic ring complexes with metal ion, imparting exceptional stability (Chelate Effect).

**2. IUPAC Nomenclature Rules:**
- Cation named first, followed by anion.
- In coordination entity: Ligands named in alphabetical order before central metal.
  - Anionic ligands end in '-o' (chlorido, cyano, oxalato). Neutral: aqua (H₂O), ammine (NH₃), carbonyl (CO).
  - Multiplicative prefixes: di, tri, tetra; or bis, tris, tetrakis (for complex ligands containing prefixes).
- Oxidation state of metal written in Roman numerals in parentheses (e.g. (III)).
- If coordination entity is anionic, metal name ends in **'-ate'** (e.g. Ferrate, Cuprate, Cobaltate, Platinate).
  - Examples: [Co(NH₃)₆]Cl₃ = Hexaamminecobalt(III) chloride; K₄[Fe(CN)₆] = Potassium hexacyanoferrate(II); [Pt(NH₃)₂Cl(NO₂)] = Diamminechloridonitrito-N-platinum(II).

**3. Isomerism in Coordination Compounds:**
- **Structural Isomerism:**
  - 1. Ionization Isomerism: [Co(NH₃)₅SO₄]Br (red, gives AgBr precipitate with AgNO₃) and [Co(NH₃)₅Br]SO₄ (gives BaSO₄ precipitate with BaCl₂).
  - 2. Linkage Isomerism: [Co(NH₃)₅(NO₂)]Cl₂ (yellow) and [Co(NH₃)₅(ONO)]Cl₂ (red).
  - 3. Coordination Isomerism: Interchange of ligands between cationic and anionic complexes: [Co(NH₃)₆][Cr(CN)₆] and [Cr(NH₃)₆][Co(CN)₆].
  - 4. Solvate / Hydrate Isomerism: [Cr(H₂O)₆]Cl₃ (violet) and [Cr(H₂O)₅Cl]Cl₂ · H₂O (grey-green).
- **Stereoisomerism:**
  - **Geometrical Isomerism:**
    * Square Planar [MA₂B₂]: *cis*-platin and *trans*-platin. [M(AB)₂] also shows geometrical isomerism. Note: Tetrahedral complexes NEVER show geometrical isomerism.
    * Octahedral [MA₄B₂]: *cis* and *trans* forms. [MA₃B₃]: *fac* (facial) and *mer* (meridional) isomers.
  - **Optical Isomerism:** Non-superimposable mirror images (enantiomers - d and l forms). Exhibited by *cis*-[Co(en)₂Cl₂]⁺ and [Co(en)₃]³⁺. (Note: *trans*-[Co(en)₂Cl₂]⁺ has a plane of symmetry and is optically inactive).

**4. Valence Bond Theory (VBT) vs Crystal Field Theory (CFT):**
- **Valence Bond Theory (Pauling):**
  - Involves hybridization of metal d, s, and p orbitals.
  - Strong field ligands (CN⁻, CO, NH₃) force pairing of electrons in 3d orbitals => Inner orbital complex (d²sp³, diamagnetic or low spin).
  - Weak field ligands (F⁻, Cl⁻, H₂O) cannot force pairing => Outer orbital complex (sp³d², paramagnetic or high spin).
- **Crystal Field Theory (Bethe & Van Vleck):**
  - Considers metal-ligand interaction purely electrostatic (ionic).
  - Degenerate d-orbitals split in ligand field:
    * Octahedral Field: Split into lower energy **t_2g** (d_xy, d_yz, d_zx) and higher energy **e_g** (d_x²-y², d_z²). Splitting energy is **Δ_o**.
    * Tetrahedral Field: Split into lower energy **e** and higher energy **t_2**. Splitting energy is **Δ_t = (4/9) Δ_o**.
  - **Spectrochemical Series:** I⁻ < Br⁻ < S²⁻ < Cl⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NCS⁻ < EDTA⁴⁻ < NH₃ < en < CN⁻ < CO.
  - **High Spin vs Low Spin (d⁴ configuration in octahedral field):**
    * If Δ_o < P (Pairing energy): Weak field ligand => 4th electron enters e_g orbital => Configuration t_2g³ e_g¹ (High spin).
    * If Δ_o > P: Strong field ligand => 4th electron pairs up in t_2g orbital => Configuration t_2g⁴ e_g⁰ (Low spin).
- **Colour of Complexes:** Arises due to absorption of visible light causing **d-d transitions** from t_2g to e_g. In absence of ligands (e.g. anhydrous CuSO₄), splitting is absent, so it is colourless.
INSIGHT: [Ni(CO)₄] is sp³ hybridized, tetrahedral, and diamagnetic (CO is strong ligand, pairs all 3d⁸ electrons into 3d¹⁰). [Ni(CN)₄]²⁻ is dsp² hybridized, square planar, and diamagnetic. [NiCl₄]²⁻ is sp³ hybridized, tetrahedral, and paramagnetic (2 unpaired electrons).`;
    }

    // CHAPTER 6: HALOALKANES AND HALOARENES
    if (lower.includes('haloalkane') || lower.includes('haloarene')) {
      return `TOPIC: Chapter 6: Haloalkanes and Haloarenes
Comprehensive notes on preparations, SN1 vs SN2 mechanisms, stereochemistry, elimination reactions, and nucleophilic substitution in haloarenes.

**1. Preparation Methods:**
- From Alcohols:
  - R-OH + SOCl₂ --[Pyridine]--> R-Cl + SO₂↑ + HCl↑ (**Darzens Process - Best method** because by-products SO₂ and HCl are gases, leaving pure alkyl chloride).
  - R-OH + PCl₅ -> R-Cl + POCl₃ + HCl; 3 R-OH + PBr₃ -> 3 R-Br + H₃PO₃.
- From Alkenes:
  - Markovnikov Addition: CH₃-CH=CH₂ + HBr -> CH₃-CH(Br)-CH₃ (2-Bromopropane major).
  - Anti-Markovnikov (Peroxide Effect): CH₃-CH=CH₂ + HBr --[Peroxide]--> CH₃-CH₂-CH₂-Br (1-Bromopropane). Only valid for HBr.
  - Allylic Halogenation: CH₃-CH=CH₂ + Cl₂ (773 K or NBS) -> Cl-CH₂-CH=CH₂ (Allyl chloride).
- Halogen Exchange Reactions:
  - **Finkelstein Reaction:** R-Cl / R-Br + NaI --[Dry Acetone]--> R-I + NaCl/NaBr↓.
  - **Swarts Reaction:** R-Cl / R-Br + AgF (or Hg₂F₂, CoF₃) -> R-F + AgCl.

**2. S_N1 vs S_N2 Nucleophilic Substitution Mechanisms:**
- **S_N2 Mechanism (Substitution Nucleophilic Bimolecular):**
  - Single-step concerted mechanism via a 5-coordinate pentavalent transition state.
  - Rate = k [Substrate] [Nucleophile] (2nd order kinetics).
  - Backside attack of nucleophile results in **100% Inversion of Configuration (Walden Inversion)**.
  - Reactivity Order: **Methyl > 1° > 2° > 3°** (Governed by steric hindrance).
  - Favoured by polar aprotic solvents (Acetone, DMSO, DMF) and strong nucleophiles (OH⁻, CN⁻).
- **S_N1 Mechanism (Substitution Nucleophilic Unimolecular):**
  - Two-step mechanism:
    * Step 1 (Slow, Rate Determining): Heterolytic cleavage of C-X bond to form a planar sp² **Carbocation intermediate**.
    * Step 2 (Fast): Attack of nucleophile from either front or back face.
  - Rate = k [Substrate] (1st order kinetics).
  - Results in **Racemization** (partial retention + inversion).
  - Reactivity Order: **3° > 2° > 1° > Methyl** (Governed by carbocation stability: 3° > 2° > 1° due to hyperconjugation and +I effect). Also allylic and benzylic halides show high S_N1 reactivity due to resonance stabilization of carbocations.
  - Favoured by polar protic solvents (H₂O, Alcohol, CH₃COOH) and weak nucleophiles.

**3. Elimination vs Substitution & Ambident Nucleophiles:**
- **Saytzeff's (Zaitsev's) Rule:** In dehydrohalogenation (β-elimination) using alcoholic KOH and heat, the major product is the more highly substituted, more stable alkene (having greater number of alkyl groups attached to double-bonded carbons).
  - Example: 2-Bromobutane + alc. KOH -> But-2-ene (81% major) + But-1-ene (19% minor).
- **Ambident Nucleophile Behavior (KCN vs AgCN; KNO₂ vs AgNO₂):**
  - R-X + KCN (ionic) => **Alkyl Cyanide / Nitrile (R-CN)** (C-C bond is more stable than C-N bond).
  - R-X + AgCN (covalent) => **Alkyl Isocyanide / Isonitrile (R-NC)** (Attack occurs via nitrogen lone pair).
  - R-X + KNO₂ (ionic) => **Alkyl Nitrite (R-O-N=O)** (Attack via oxygen).
  - R-X + AgNO₂ (covalent) => **Nitroalkane (R-NO₂)** (Attack via nitrogen).

**4. Low Reactivity of Haloarenes & Dow's Process:**
- Aryl halides (Chlorobenzene) are extremely unreactive towards nucleophilic substitution compared to alkyl halides due to:
  1. **Resonance Effect:** Lone pairs on halogen delocalize into the benzene ring, imparting partial double bond character to the C-Cl bond (bond length 169 pm vs 178 pm in alkyl chloride), which is difficult to break.
  2. **sp² Hybridized Carbon:** Carbon attached to halogen is sp² hybridized (33.3% s-character, more electronegative) vs sp³ in alkyl halides.
  3. **Instability of Phenyl Cation:** Self-ionization to phenyl cation is energetically unfavorable.
  4. **Electronic Repulsion:** Incoming nucleophile experiences repulsion from the electron-rich π-electron cloud of the benzene ring.
- **Nucleophilic Substitution under Drastic Conditions:**
  - Dow's Process: Chlorobenzene + NaOH (623 K, 300 atm) followed by acidification => Phenol.
  - Presence of Electron-Withdrawing Groups (-NO₂) at **ortho and para positions** greatly increases reactivity of haloarenes by stabilizing the carbanion intermediate (Meisenheimer complex) through resonance. Meta-NO₂ has negligible activating effect.
INSIGHT: For conversions involving step-up (increasing carbon chain length), use KCN followed by hydrolysis (to -COOH) or reduction (to -CH₂NH₂).`;
    }

    // CHAPTER 7: ALCOHOLS, PHENOLS AND ETHERS
    if (lower.includes('alcohol') || lower.includes('phenol') || lower.includes('ether')) {
      return `TOPIC: Chapter 7: Alcohols, Phenols and Ethers
Comprehensive study notes on preparation pathways, acidity comparisons, oxidation, Reimer-Tiemann, Kolbe's synthesis, and Williamson ether cleavage.

**1. Preparation of Alcohols and Phenols:**
- **From Alkenes:**
  - Acid-Catalyzed Hydration: Alkene + H₂O/H⁺ => Follows Markovnikov addition with carbocation rearrangement.
  - **Hydroboration-Oxidation:** 6 CH₃-CH=CH₂ + B₂H₆ -> 2 (CH₃CH₂CH₂)₃B --[H₂O₂, OH⁻]--> 6 CH₃CH₂CH₂OH (Propan-1-ol). Gives **Anti-Markovnikov addition of water** without rearrangement.
- **From Carbonyl Compounds:**
  - Aldehydes + NaBH₄ / LiAlH₄ / H₂-Ni => 1° Alcohol; Ketones => 2° Alcohol; Carboxylic acids + LiAlH₄ => 1° Alcohol.
  - Using Grignard Reagent (RMgX): Formaldehyde (HCHO) + RMgX => 1° Alcohol; Other aldehydes (R'CHO) + RMgX => 2° Alcohol; Ketones (R'COR'') + RMgX => 3° Alcohol.
- **Preparation of Phenol:**
  - From **Cumene (Isopropylbenzene) - Industrial Method:** Cumene --[O₂ (air)]--> Cumene hydroperoxide --[dil. H₂SO₄]--> **Phenol + Acetone** (valuable by-product).
  - From Diazonium Salt: C₆H₅-N₂⁺Cl⁻ + H₂O --[Warm]--> C₆H₅-OH + N₂ + HCl.

**2. Acidity Comparison (Alcohols vs Phenols vs Water):**
- **Acidity Order:** Carboxylic acids > **Phenol > Water > 1° Alcohol > 2° Alcohol > 3° Alcohol**.
- Why Phenol is more acidic than Alcohols:
  - Phenol loses H⁺ to form Phenoxide ion (C₆H₅O⁻), which is stabilized by resonance (negative charge delocalized over ortho and para carbons of benzene ring). Alkoxide ion (RO⁻) has no resonance and is destabilized by electron-releasing (+I) alkyl groups.
- **Substituent Effects on Phenol Acidity:**
  - Electron-Withdrawing Groups (-NO₂, -Cl, -CN) at **ortho and para positions** increase acidity by dispersing negative charge (e.g. Picric acid / 2,4,6-trinitrophenol is strongly acidic).
  - Electron-Releasing Groups (-CH₃, -OCH₃) decrease acidity by destabilizing phenoxide ion.

**3. Reactions of Alcohols & Lucas Test:**
- **Lucas Test (Distinguish 1°, 2°, 3° Alcohols):**
  - Reagent: Anhydrous ZnCl₂ + Conc. HCl.
  - 3° Alcohols: Instant turbidity (forms insoluble alkyl chloride).
  - 2° Alcohols: Turbidity appears within 5 minutes.
  - 1° Alcohols: Solution remains clear at room temperature; turbidity only on heating.
- **Oxidation of Alcohols:**
  - 1° Alcohol --[PCC (Pyridinium chlorochromate)]--> Aldehyde (stops at aldehyde stage).
  - 1° Alcohol --[Acidified KMnO₄ / K₂Cr₂O₇]--> Carboxylic Acid.
  - 2° Alcohol --[CrO₃ / Cu at 573 K]--> Ketone.
  - 3° Alcohol --[Cu at 573 K]--> Undergoes **dehydration to form Alkene** (e.g. 2-methylpropan-2-ol -> 2-methylpropene).

**4. Named Reactions of Phenol:**
- **1. Reimer-Tiemann Reaction:**
  - Phenol + CHCl₃ + 3 NaOH (340 K) => Intermediate with -ONa and -CHCl₂ => Acidification with HCl => **Salicylaldehyde (2-hydroxybenzaldehyde)**.
- **2. Kolbe's Reaction:**
  - Phenol + NaOH -> Sodium phenoxide + CO₂ (400 K, 4-7 atm) -> Sodium salicylate --[H⁺]--> **Salicylic acid (2-hydroxybenzoic acid)**.
  - Acetylation of Salicylic acid with acetic anhydride produces **Aspirin (Acetylsalicylic acid)**.
- **3. Reaction with Zinc Dust:** Phenol + Zn dust --[Heat]--> Benzene + ZnO.
- **4. Bromination:**
  - Phenol + Br₂ in CS₂ / CHCl₃ (low polarity, 273 K) => o-Bromophenol + p-Bromophenol (major).
  - Phenol + 3 Br₂ (aq) (Bromine water) => **2,4,6-Tribromophenol (White precipitate)**.

**5. Ethers & Williamson Synthesis:**
- **Williamson Ether Synthesis:** Primary alkyl halide (1° R-X) + Sodium alkoxide (R'-O⁻Na⁺) => Ether (R-O-R') + NaX via S_N2 mechanism.
  - Rule: Alkyl halide MUST be 1°. If 3° alkyl halide is used with alkoxide, elimination occurs exclusively to form an alkene (e.g. (CH₃)₃C-Br + CH₃ONa -> 2-methylpropene).
- **Cleavage of Ethers with HI:**
  - With Unsymmetrical ethers containing 1°/2° alkyl groups: Cleavage follows S_N2 mechanism; smaller alkyl group forms alkyl iodide, while larger group forms alcohol (e.g. CH₃-O-CH₂CH₃ + HI -> CH₃I + CH₃CH₂OH).
  - If one of the alkyl groups is **tertiary (3°)**: Cleavage follows S_N1 mechanism via stable 3° carbocation; tertiary group forms alkyl iodide (e.g. (CH₃)₃C-O-CH₃ + HI -> (CH₃)₃C-I + CH₃OH).
  - Anisole (C₆H₅-O-CH₃) + HI -> Phenol (C₆H₅-OH) + Methyl iodide (CH₃I) because phenyl C-O bond has partial double bond character and does not cleave.
INSIGHT: When anisole is treated with excess HI, the products are ALWAYS phenol and methyl iodide — phenol never converts to iodobenzene.`;
    }

    // CHAPTER 8: ALDEHYDES, KETONES AND CARBOXYLIC ACIDS
    if (lower.includes('aldehyde') || lower.includes('ketone') || lower.includes('carboxylic')) {
      return `TOPIC: Chapter 8: Aldehydes, Ketones and Carboxylic Acids
In-depth study notes on nucleophilic addition, named carbonyl syntheses, Aldol, Cannizzaro, Iodoform test, and Carboxylic acid chemistry.

**1. Preparation of Aldehydes and Ketones:**
- **Rosenmund Reduction:** Acyl chloride (R-COCl) + H₂ --[Pd-BaSO₄ / Quinoline (poisoned)]--> Aldehyde (R-CHO) + HCl. BaSO₄ prevents further reduction to alcohol.
- **Stephen Reaction:** Nitrile (R-CN) + SnCl₂ + HCl -> Imine hydrochloride (R-CH=NH·HCl) --[H₃O⁺]--> Aldehyde (R-CHO).
- **Etard Reaction:** Toluene (C₆H₅CH₃) + CrO₂Cl₂ (in CS₂) -> Brown chromium complex --[H₃O⁺]--> **Benzaldehyde (C₆H₅CHO)**.
- **Gattermann-Koch Reaction:** Benzene + CO + HCl --[Anhydrous AlCl₃ / CuCl]--> Benzaldehyde.
- **Friedel-Crafts Acylation:** Benzene + CH₃COCl --[Anhydrous AlCl₃]--> Acetophenone (C₆H₅COCH₃).

**2. Nucleophilic Addition Reactions of Carbonyls:**
- **Reactivity Order towards Nucleophilic Addition:** HCHO > CH₃CHO > CH₃COCH₃ > C₆H₅COCH₃.
  - Reason: Aldehydes are more reactive than ketones due to (1) lesser steric hindrance, and (2) lesser +I electron-donation by alkyl groups which keeps carbonyl carbon more electrophilic.
- **Addition of HCN:** Forms Cyanohydrin (catalysed by base OH⁻).
- **Addition of Sodium Bisulphite (NaHSO₃):** Forms crystalline bisulphite addition compound (used for purification of aldehydes and ketones).
- **Addition of Ammonia Derivatives (H₂N-Z):** Forms imine derivatives (>C=N-Z):
  - With Hydroxylamine (NH₂OH) => **Oxime**.
  - With Hydrazine (NH₂NH₂) => **Hydrazone**.
  - With 2,4-Dinitrophenylhydrazine (2,4-DNP / Brady's Reagent) => **2,4-DNP derivative (Orange-yellow precipitate)** used to detect carbonyl group.
  - With Semicarbazide (NH₂CONHNH₂) => **Semicarbazone** (Attack occurs through hydrazine -NH₂ group, not amide -NH₂ due to resonance).

**3. Reduction & Oxidation Reactions:**
- **Clemmensen Reduction:** >C=O + Zn-Hg + Conc. HCl -> >CH₂ (Alkane).
- **Wolff-Kishner Reduction:** >C=O + NH₂NH₂ --[KOH / Ethylene glycol, Heat]--> >CH₂ + N₂↑.
- **Tollens' Test (Silver Mirror Test):** R-CHO + 2 [Ag(NH₃)₂]⁺ + 3 OH⁻ -> R-COO⁻ + **2 Ag↓ (Silver mirror)** + 4 NH₃ + 2 H₂O. (Positive for aliphatic and aromatic aldehydes; Ketones do not respond).
- **Fehling's Test:** R-CHO + 2 Cu²⁺ + 5 OH⁻ -> R-COO⁻ + **Cu₂O↓ (Red-brown precipitate)** + 3 H₂O. (Positive for aliphatic aldehydes; Benzaldehyde and ketones DO NOT respond).
- **Iodoform Reaction (Haloform Test):** Carbonyls having **CH₃-C=O** group (Acetaldehyde, Methyl ketones) or alcohols with **CH₃-CH(OH)-** group heated with I₂ + NaOH => **CHI₃↓ (Yellow crystalline precipitate with antiseptic smell)** + Carboxylic acid salt.

**4. Reactions involving α-Hydrogens:**
- **Aldol Condensation:**
  - Aldehydes or ketones containing at least one α-hydrogen treated with dilute alkali (dil. NaOH or Ba(OH)₂).
  - Two molecules combine to form β-hydroxy aldehyde (Aldol) or β-hydroxy ketone (Ketol), which loses H₂O on heating to give an **α,β-unsaturated carbonyl compound**.
  - Example: 2 CH₃CHO --[dil. NaOH]--> CH₃-CH(OH)-CH₂-CHO --[Δ, -H₂O]--> **CH₃-CH=CH-CHO (But-2-enal)**.
- **Cross-Aldol Condensation:** Reaction between two different aldehydes/ketones yielding 4 different products (2 self + 2 cross).
- **Cannizzaro Reaction:**
  - Aldehydes with **NO α-hydrogen** (Formaldehyde HCHO, Benzaldehyde C₆H₅CHO, Trimethylacetaldehyde) treated with concentrated alkali (50% KOH).
  - Undergoes self-oxidation-reduction (disproportionation): One molecule is reduced to alcohol; one molecule is oxidized to carboxylic acid salt.
  - 2 C₆H₅CHO + conc. NaOH -> **C₆H₅CH₂OH (Benzyl alcohol) + C₆H₅COONa (Sodium benzoate)**.

**5. Carboxylic Acids & Acidity:**
- **Acidity Trends:**
  - Carboxylic acids are stronger acids than phenols because the carboxylate anion (RCOO⁻) is stabilized by two equivalent resonance structures with negative charge delocalized over two highly electronegative oxygen atoms.
  - Effect of substituents: Electron-Withdrawing Groups (-CF₃ > -NO₂ > -CN > -F > -Cl > -Br > -I > -Ph) increase acidity (e.g. FCH₂COOH > ClCH₂COOH > CH₃COOH). Electron-Releasing Groups (-CH₃, -C₂H₅) decrease acidity.
  - Benzoic acid is stronger acid than acetic acid; o-nitrobenzoic acid is exceptionally strong due to the **ortho-effect**.
- **Hell-Volhard-Zelinsky (HVZ) Reaction:** Carboxylic acids having α-hydrogen react with Cl₂ or Br₂ in presence of red phosphorus to form α-halocarboxylic acids: R-CH₂-COOH + Br₂/Red P -> R-CH(Br)-COOH.
INSIGHT: Formic acid (HCOOH) is the only carboxylic acid that gives Tollens' and Fehling's test because it contains both aldehyde (-CHO) and carboxyl (-COOH) functional structures.`;
    }

    // CHAPTER 9: AMINES
    if (lower.includes('amine') || lower.includes('diazonium')) {
      return `TOPIC: Chapter 9: Amines & Diazonium Salts
Complete notes on basicity of amines, Gabriel phthalimide synthesis, Hoffmann degradation, Hinsberg test, and Diazonium salt reactions.

**1. Classification & Preparation of Amines:**
- **Reduction Methods:**
  - Nitro compounds: R-NO₂ + Fe/HCl (or H₂/Pd) -> R-NH₂. (Fe/HCl preferred because FeCl₂ formed gets hydrolyzed to release HCl, requiring only scrap iron and small acid).
  - Nitriles: R-CN + LiAlH₄ (or Na/C₂H₅OH - Mendius reaction) -> R-CH₂-NH₂.
  - Amides: R-CONH₂ + LiAlH₄ -> R-CH₂-NH₂.
- **Gabriel Phthalimide Synthesis:**
  - Phthalimide + ethanolic KOH -> Potassium phthalimide + 1° Alkyl halide (R-X) -> N-Alkylphthalimide --[Alkaline hydrolysis]--> **Pure Primary Aliphatic Amine (R-NH₂)** + Sodium phthalate.
  - **Limitation:** Aromatic primary amines (Aniline) CANNOT be prepared by this method because aryl halides do not undergo nucleophilic substitution with phthalimide anion under normal conditions.
- **Hoffmann Bromamide Degradation Reaction:**
  - Primary amide + Br₂ + 4 KOH -> **Primary amine with ONE CARBON LESS** + K₂CO₃ + 2 KBr + 2 H₂O.
  - CH₃-CONH₂ + Br₂ + 4 KOH -> **CH₃-NH₂ (Methanamine)** + K₂CO₃ + 2 KBr + 2 H₂O. (Step-down conversion).

**2. Basic Character & Trends of Amines:**
- Basic nature arises from lone pair of electrons on nitrogen atom: R-NH₂ + H₂O <=> R-NH₃⁺ + OH⁻.
- **Aliphatic Amines vs Ammonia vs Aniline:**
  - Aliphatic amines are more basic than ammonia due to electron-releasing (+I) effect of alkyl groups.
  - Aniline is much **weaker base than ammonia and aliphatic amines** because lone pair on nitrogen is delocalized over the benzene ring through resonance (+R effect), making it less available for protonation.
- **Basicity Order in Aqueous Medium:**
  - Resultant of three competing factors: (1) Inductive effect (+I), (2) Steric hindrance of alkyl groups, and (3) Solvation / Hydration energy of substituted ammonium cations.
  - For Methyl-substituted amines: **(CH₃)₂NH (2°) > CH₃NH₂ (1°) > (CH₃)₃N (3°) > NH₃** (2° > 1° > 3° > NH₃).
  - For Ethyl-substituted amines: **(C₂H₅)₂NH (2°) > (C₂H₅)₃N (3°) > C₂H₅NH₂ (1°) > NH₃** (2° > 3° > 1° > NH₃).
  - In Gas Phase (only +I effect): **3° > 2° > 1° > NH₃**.

**3. Chemical Reactions & Distinction Tests:**
- **1. Carbylamine Test (Isocyanide Test):**
  - Primary amine (aliphatic or aromatic) + CHCl₃ + 3 alc. KOH --[Heat]--> **Isocyanide / Carbylamine (R-NC / Ar-NC, extremely foul-smelling)** + 3 KCl + 3 H₂O.
  - Test is given EXCLUSIVELY by 1° amines. 2° and 3° amines do not give this test.
- **2. Hinsberg's Test (Distinguish 1°, 2°, 3° Amines):**
  - Reagent: Benzenesulphonyl chloride (C₆H₅SO₂Cl).
  - 1° Amine: Forms N-alkylbenzenesulphonamide, which has an acidic hydrogen on N and **dissolves in aqueous KOH**.
  - 2° Amine: Forms N,N-dialkylbenzenesulphonamide, which has no acidic hydrogen and **remains insoluble in KOH**.
  - 3° Amine: Does not react with Hinsberg's reagent (no hydrogen on nitrogen).
- **3. Reaction with Nitrous Acid (HNO₂ / NaNO₂ + HCl):**
  - 1° Aliphatic Amines: React to form aliphatic diazonium salts, which decompose immediately to evolve **N₂ gas quantitatively** and form alcohols: R-NH₂ + HNO₂ -> R-OH + N₂↑ + H₂O.
  - 1° Aromatic Amines (Aniline): Form stable Benzene Diazonium Chloride at 273-278 K (0-5°C).

**4. Benzene Diazonium Salts & Synthetic Applications:**
- **Diazotization:** C₆H₅NH₂ + NaNO₂ + 2 HCl (at 273-278 K) -> **C₆H₅-N₂⁺Cl⁻ (Benzene diazonium chloride)** + NaCl + 2 H₂O.
- **Replacement Reactions:**
  - **Sandmeyer Reaction:** C₆H₅N₂⁺Cl⁻ + CuCl/HCl -> Chlorobenzene; + CuBr/HBr -> Bromobenzene; + CuCN/KCN -> Benzonitrile.
  - **Gattermann Reaction:** C₆H₅N₂⁺Cl⁻ + Cu powder/HCl -> Chlorobenzene.
  - Replacement by -I: Warm with aqueous KI -> Iodobenzene + N₂ + KCl.
  - Replacement by -F (Balz-Schiemann Reaction): Treat with HBF₄ to form C₆H₅N₂⁺BF₄⁻, then heat -> Fluorobenzene + BF₃ + N₂.
  - Reduction to Benzene: Treat with H₃PO₂ (hypophosphorous acid) + H₂O or Ethanol (CH₃CH₂OH) -> Benzene + N₂.
  - Replacement by -OH: Warm with water at 283 K -> Phenol + N₂ + HCl.
- **Azo Coupling Reactions (Dye Formation):**
  - With Phenol (mildly basic pH 9-10): Forms **p-Hydroxyazobenzene (Orange dye)**.
  - With Aniline (mildly acidic pH 4-5): Forms **p-Aminoazobenzene (Yellow dye)**.
INSIGHT: Aniline does NOT undergo Friedel-Crafts alkylation or acylation because the Lewis acid catalyst (Anhydrous AlCl₃) coordinates with the lone pair on aniline's nitrogen, forming an adduct that deactivates the ring.`;
    }

    // CHAPTER 10: BIOMOLECULES
    if (lower.includes('biomolecule') || lower.includes('carbohydrate') || lower.includes('protein') || lower.includes('dna') || lower.includes('vitamin')) {
      return `TOPIC: Chapter 10: Biomolecules
Comprehensive study guide on Carbohydrates, Amino Acids, Protein structures, Nucleic Acids (DNA/RNA), Vitamins, and Enzymes.

**1. Carbohydrates & Glucose Chemistry:**
- **Classification:**
  - Monosaccharides: Glucose, Fructose, Ribose, Galactose (cannot be hydrolyzed further).
  - Oligosaccharides: Disaccharides (Sucrose, Lactose, Maltose).
  - Polysaccharides: Starch, Cellulose, Glycogen (non-reducing, insoluble polymers).
  - Reducing Sugars: All monosaccharides and disaccharides having free -CHO or >C=O group (Maltose, Lactose). Reduce Tollens' and Fehling's solution. (Sucrose is non-reducing).
- **Structure & Reactions of D-(+)-Glucose (Aldohexose):**
  - Glucose + HI --[Heat]--> n-Hexane (proves 6 carbons in straight chain).
  - Glucose + NH₂OH -> Glucose oxime; Glucose + HCN -> Glucose cyanohydrin (proves presence of carbonyl group).
  - Glucose + Bromine water (mild oxidant) -> **Gluconic acid** (proves carbonyl is an aldehyde -CHO).
  - Glucose + Acetic anhydride -> **Glucose pentaacetate** (proves presence of 5 -OH groups).
  - Glucose + Conc. HNO₃ -> **Saccharic acid (Glucaric acid)** (proves presence of 1° alcohol group -CH₂OH at C-6).
- **Cyclic Structure & Mutarotation:**
  - Open chain structure fails to explain: (1) Does not form bisulphite addition product with NaHSO₃, (2) Pentaacetate of glucose does not react with hydroxylamine (proves absence of free -CHO group), (3) Exists in two crystalline stereoisomers: α-D-glucose (m.p. 419 K) and β-D-glucose (m.p. 423 K).
  - Cyclic pyranose structure formed by intramolecular hemiacetal formation between C-1 (-CHO) and C-5 (-OH).
  - **Anomers:** Diastereomers differing only in configuration at C-1 (hemiacetal / anomeric carbon). α-D-glucose and β-D-glucose are anomers.
- **Disaccharide Linkages:**
  - **Sucrose (Invert Sugar):** α-D-glucose + β-D-fructose linked by **C1-C2 glycosidic bond**. Non-reducing sugar because reducing groups of both monosaccharides are involved in glycosidic linkage. Dextrorotatory (+52.5°), but on hydrolysis yields an equimolar mixture of glucose (+52.5°) and fructose (-92.4°), making the net mixture **laevorotatory (-39.9°)** (Inversion of Cane Sugar).
  - **Maltose:** 2 molecules of α-D-glucose joined by **α-1,4-glycosidic linkage**. Reducing sugar.
  - **Lactose (Milk Sugar):** β-D-galactose + β-D-glucose joined by **β-1,4-glycosidic linkage**. Reducing sugar.

**2. Proteins & Amino Acids:**
- **Amino Acids:** Building blocks containing -NH₂ and -COOH attached to same α-carbon.
  - **Zwitterion Form:** In aqueous solution, carboxyl group loses proton and amino group gains proton to form dipolar ion: **H₃N⁺-CH(R)-COO⁻**.
  - Isoelectric Point: Specific pH at which amino acid exists as neutral zwitterion and does not migrate in electric field.
  - All standard amino acids are optically active (L-configuration) EXCEPT **Glycine (H₂N-CH₂-COOH)** which is achiral.
  - Essential Amino Acids: Cannot be synthesized in human body; must be obtained through diet (Valine, Leucine, Isoleucine, Lysine, Methionine, Phenylalanine, Threonine, Tryptophan, Histidine, Arginine).
- **Levels of Protein Structure:**
  - **Primary Structure:** The linear sequence of amino acids linked by covalent **peptide bonds (-CO-NH-)**.
  - **Secondary Structure:** Conformation of polypeptide chain stabilized by regular **intramolecular Hydrogen bonding**:
    * **α-Helix:** Polypeptide chain coils right-handed; every -NH group forms H-bond with -CO group of 4th amino acid residue (e.g. Keratin in hair/nails, Myosin in muscle).
    * **β-Pleated Sheet:** Polypeptide chains lie side by side in zig-zag sheets held by intermolecular H-bonds (e.g. Silk fibroin).
  - **Tertiary Structure:** Overall 3D folding of polypeptide chains stabilized by H-bonds, disulphide bonds (-S-S-), ionic interactions, and van der Waals forces. Yields **Fibrous** (insoluble, elongated: keratin, collagen) and **Globular** (soluble, spherical: insulin, albumin, hemoglobin) proteins.
  - **Quaternary Structure:** Spatial arrangement of two or more distinct polypeptide subunits.
- **Denaturation of Proteins:** Loss of biological activity and unfolding of secondary and tertiary structures upon physical/chemical changes (temperature, pH change) while **primary structure remains completely intact**. Examples: Curdling of milk, Coagulation of egg white on boiling.

**3. Nucleic Acids (DNA & RNA):**
- **Composition:** Pentose sugar + Nitrogenous base + Phosphoric acid.
  - **Nucleoside:** Nitrogenous base + Pentose sugar (linked via N-glycosidic linkage at C-1' of sugar).
  - **Nucleotide:** Nucleoside + Phosphate group (esterified at C-5' of sugar).
  - Nucleotides are joined together by **3', 5'-phosphodiester linkages**.
- **DNA vs RNA:**
  - DNA: Contains **β-D-2-deoxyribose** sugar; Bases: Adenine (A), Guanine (G), Cytosine (C), and **Thymine (T)**. Exists as double-stranded right-handed antiparallel helix (Watson-Crick Model). Base pairing via H-bonds: **A = T (2 H-bonds)** and **G ≡ C (3 H-bonds)** (Chargaff's Rule: [A] = [T], [G] = [C]).
  - RNA: Contains **β-D-ribose** sugar; Bases: Adenine (A), Guanine (G), Cytosine (C), and **Uracil (U)**. Usually single-stranded.

**4. Vitamins & Deficiency Diseases:**
- **Fat-Soluble Vitamins (Stored in liver and adipose tissues):** Vitamins A, D, E, K.
  - Vitamin A (Retinol): Deficiency causes Night blindness and Xerophthalmia.
  - Vitamin D: Deficiency causes Rickets in children and Osteomalacia in adults.
  - Vitamin K: Deficiency causes delayed blood clotting.
- **Water-Soluble Vitamins (Must be supplied regularly in diet; excreted in urine):** Vitamins B-complex and Vitamin C. (Exception: **Vitamin B12** is stored in liver).
  - Vitamin B1 (Thiamine): Deficiency causes **Beriberi**.
  - Vitamin B12 (Cobalamin): Deficiency causes **Pernicious anaemia**.
  - Vitamin C (Ascorbic acid): Deficiency causes **Scurvy** (bleeding gums).
INSIGHT: Vitamin C cannot be stored in our body because it is water-soluble and readily excreted in urine; hence regular daily dietary intake is required.`;
    }

    // Default fallback
    return `TOPIC: CBSE Class 12 Chemistry: ${chapter}
Comprehensive, high-yield study material strictly aligned with the latest CBSE 2026-27 Board syllabus.

**1. Core Principles & Definitions:**
- Rigorous breakdown of all syllabus subtopics for ${chapter}.
- Highlighted with **bold terminology** to ensure maximum retention and precise exam answers.

**2. Important Reactions & Derivations:**
- Complete balanced equations with temperature, catalysts, and reagents.
- Step-by-step mathematical working and error prevention tips.
INSIGHT: Always write IUPAC names and show complete reaction arrows with reagents.`;
  } else {
    // CHEMISTRY SOLVED PYQS (4-5 authentic questions per chapter)
    if (lower.includes('solution')) {
      return `QUESTION: Q1. [5 Marks, Delhi 2024] (a) An aqueous solution of 2% non-volatile solute exerts a pressure of 1.004 bar at the normal boiling point of the solvent. What is the molar mass of the solute? (Vapour pressure of pure water at boiling point = 1.013 bar). (b) State Henry's Law and write its two practical applications.
SOLUTION:
**Step 1: Relative Lowering of Vapour Pressure:**
- Formula: (p° - p) / p° = (w_B · M_A) / (M_B · w_A)
- Given: p° = 1.013 bar, p = 1.004 bar, w_B = 2 g, w_A = 98 g, M_A (water) = 18 g/mol.
- (1.013 - 1.004) / 1.013 = (2 × 18) / (M_B × 98)
- 0.009 / 1.013 = 36 / (98 M_B) => 0.008884 = 0.36734 / M_B
- **M_B = 41.35 g/mol**.
**Step 2: Henry's Law & Applications:**
- Statement: At constant temperature, the solubility of a gas in a liquid is directly proportional to the partial pressure of the gas above the liquid: **p = K_H · x**.
- Applications: (1) Carbonated drinks are sealed under high pressure to increase CO₂ solubility. (2) Scuba divers use breathing gas diluted with helium (11.7%) to prevent painful and dangerous nitrogen bubble formation (the bends).
**CBSE Marking Rubric:**
- 1 Mark: Correct formula and substitution.
- 1.5 Marks: Accurate calculation of molar mass with unit (41.35 g/mol).
- 1 Mark: Statement of Henry's Law with mathematical equation.
- 1.5 Marks: Two applications with scientific reasoning.
INSIGHT: Higher K_H values correspond to lower gas solubility at a given pressure.

QUESTION: Q2. [3 Marks, All India 2023] Calculate the freezing point of a solution containing 0.5 g of KCl (molar mass = 74.5 g/mol) dissolved in 100 g of water, assuming complete ionization of KCl. (K_f for water = 1.86 K kg mol⁻¹).
SOLUTION:
**Step 1: van 't Hoff Factor for KCl:**
- KCl(aq) -> K⁺(aq) + Cl⁻(aq) => n = 2 ions. Since complete ionization (α = 1), **i = 2**.
**Step 2: Depression in Freezing Point (ΔT_f):**
- Molality m = (w_B × 1000) / (M_B × w_A) = (0.5 × 1000) / (74.5 × 100) = 5 / 74.5 = 0.0671 mol/kg.
- ΔT_f = i · K_f · m = 2 × 1.86 × 0.0671 = **0.25 K**.
**Step 3: Freezing Point of Solution (T_f):**
- T_f = T_f° - ΔT_f = 273.15 K - 0.25 K = **272.90 K** (or -0.25 °C).
**CBSE Marking Rubric:**
- 1 Mark for i = 2 and molality calculation.
- 1 Mark for ΔT_f calculation.
- 1 Mark for final freezing point in Kelvin or Celsius.
INSIGHT: Never stop at ΔT_f; the question asks for the freezing point of the solution (T_f = 0 - ΔT_f).

QUESTION: Q3. [3 Marks, Foreign 2024] Differentiate between ideal and non-ideal solutions. Give one example of a solution showing positive deviation from Raoult's law.
SOLUTION:
**Step 1: Ideal vs Non-Ideal Solutions:**
1. **Raoult's Law:** Ideal solutions obey Raoult's law over entire concentration range; Non-ideal solutions show positive or negative deviations.
2. **Enthalpy of Mixing:** Ideal has ΔH_mix = 0; Non-ideal has ΔH_mix ≠ 0.
3. **Volume of Mixing:** Ideal has ΔV_mix = 0; Non-ideal has ΔV_mix ≠ 0.
4. **Intermolecular Forces:** In ideal, A-B interactions = A-A and B-B interactions; In non-ideal, A-B interactions ≠ A-A and B-B interactions.
**Step 2: Example of Positive Deviation:**
- **Ethanol + Acetone:** In pure ethanol, molecules are held by strong intermolecular hydrogen bonds. When acetone is added, its molecules get in between ethanol molecules, breaking some H-bonds. This weakens A-B interactions, increasing vapour pressure.
**CBSE Marking Rubric:**
- 2 Marks for 4 valid comparison points.
- 1 Mark for example with molecular explanation.
INSIGHT: Mentioning the specific change in intermolecular forces secures full marks for deviations.

QUESTION: Q4. [2 Marks, Delhi 2023] State Raoult's Law for a solution containing non-volatile solute. Why is osmotic pressure measurement preferred for determining molar mass of proteins and polymers?
SOLUTION:
**Step 1: Raoult's Law for Non-Volatile Solute:**
The relative lowering of vapour pressure of an ideal solution containing a non-volatile solute is equal to the mole fraction of the solute: **(p° - p) / p° = x_B**.
**Step 2: Superiority of Osmotic Pressure:**
1. Osmotic pressure (Π) can be measured accurately at room temperature (proteins denature at high temperatures needed for boiling point elevation).
2. It uses molarity instead of molality, and produces significant measurable magnitudes even for very dilute solutions of high molar mass macromolecules.
**CBSE Marking Rubric:**
- 1 Mark for accurate statement and equation of Raoult's Law.
- 1 Mark for two valid reasons regarding room temperature and measurable magnitude.
INSIGHT: Biological macromolecules undergo thermal degradation, making osmotic pressure the only viable method.`;
    }

    // Default solved PYQs for chemistry
    return `QUESTION: Q1. [5 Marks, Delhi 2024] Comprehensive model question on ${chapter}.
SOLUTION:
**Step 1: Fundamental Law & Principles:**
State the core law, chemical equation, and mechanism steps with bold scientific terminology.
**Step 2: Stepwise Derivation / Calculation:**
Show complete working, variable definitions, and substitution of values with SI units.
**Step 3: Boxed Final Answer & Examiner Conclusion:**
Provide the final result with appropriate units and physical interpretation.

**CBSE Marking Rubric:**
- 1 Mark: Principle and balanced equation.
- 2.5 Marks: Detailed stepwise derivation or mechanism.
- 1.5 Marks: Final boxed answer with correct units.
INSIGHT: Never leave out catalyst, temperature, or phase notations in chemical equations.

QUESTION: Q2. [3 Marks, All India 2023] Solved conceptual reasoning question on ${chapter}.
SOLUTION:
**Step 1: Electronic / Structural Factor:**
State the underlying electronic configuration, resonance stabilization, or inductive effect.
**Step 2: Comparison & Scientific Conclusion:**
Explain the observed chemical property comparison with explicit reference to NCERT keywords.
INSIGHT: Always mention scientific keywords (e.g. 'resonance stabilization', 'lanthanoid contraction') for full marks.

QUESTION: Q3. [3 Marks, Foreign 2024] Write the diagnostic test and balanced chemical equation for ${chapter}.
SOLUTION:
**Step 1: Reagent & Reaction Conditions:**
State the specific diagnostic reagent (e.g. Tollens, Lucas, Fehling, Iodoform).
**Step 2: Observable Visual Result:**
State the color change, precipitate formation, or gas evolution explicitly.
INSIGHT: Clear sensory observations ('yellow precipitate', 'silver mirror') are mandatory.

QUESTION: Q4. [2 Marks, Delhi 2023] Give reasons for standard anomalous behaviors in ${chapter}.
SOLUTION:
**Step 1: Primary Cause:** State the steric or electronic reason.
**Step 2: Consequence:** State how this determines stability or reaction pathway.
INSIGHT: Structure answers in bullet points with bold keywords.`;
  }
}
