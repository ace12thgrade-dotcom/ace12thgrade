// services/subjects/chemistry/part2.ts
// Chapters 6 to 10 + Full Revision: Haloalkanes, Alcohols Phenols & Ethers, Aldehydes Ketones & Carboxylic Acids, Amines, Biomolecules, Master Revision

export function getChemistryPart2Notes(chapterLower: string): string | null {
  // FULL REVISION / MASTER SHEET
  if (
    chapterLower.includes('revision') ||
    chapterLower.includes('full') ||
    chapterLower.includes('master') ||
    chapterLower.includes('summary') ||
    chapterLower === 'c_all'
  ) {
    return `TOPIC: CBSE Class 12 Chemistry Complete Master Formula & Reaction Guide (2026-27 Pattern)
Master Notebook Revision Book - Covering all 10 NCERT Chapters with complete formulas, named reactions, distinguishing tests, and electronic mechanisms.

**1. Physical Chemistry Master Formula Sheet:**
- **Solutions:**
  * Relative Lowering of Vapour Pressure: (p° - p) / p° = i · (w_B · M_A) / (M_B · w_A)
  * Boiling Point Elevation: ΔT_b = i · K_b · m => M_B = (1000 · K_b · w_B) / (ΔT_b · w_A)
  * Freezing Point Depression: ΔT_f = i · K_f · m => M_B = (1000 · K_f · w_B) / (ΔT_f · w_A)
  * Osmotic Pressure: Π = i · C · R · T = i · (w_B · R · T) / (M_B · V)
  * van 't Hoff Factor: i = 1 + (n - 1)α (Dissociation); i = 1 - α(1 - 1/n) (Association).
- **Electrochemistry:**
  * Nernst Equation (298 K): E_cell = E°_cell - (0.0591 / n) · log₁₀ Q
  * Gibbs Energy & Equilibrium: ΔG° = -n F E°_cell; log₁₀ K_c = (n E°_cell) / 0.0591
  * Molar Conductivity: Λ_m = (κ × 1000) / Molarity  [S·cm²·mol⁻¹]
  * Kohlrausch's Law: Λ°_m(A_x B_y) = x λ°(Aʸ⁺) + y λ°(Bˣ⁻); α = Λ_m / Λ°_m; K_a = C α² / (1 - α)
- **Chemical Kinetics:**
  * Zero Order: k = ([R]₀ - [R]) / t; t_1/2 = [R]₀ / (2k); Unit of k: mol·L⁻¹·s⁻¹
  * First Order: k = (2.303 / t) log₁₀([R]₀ / [R]); t_1/2 = 0.693 / k; Unit of k: s⁻¹
  * Arrhenius Equation: log₁₀(k₂ / k₁) = (E_a / 2.303 R) · [ (T₂ - T₁) / (T₁ · T₂) ]

**2. Inorganic Chemistry High-Yield Concepts:**
- **3d Series Properties:** Spin-only magnetic moment: μ = √[n(n+2)] BM.
- **Lanthanoid Contraction:** Ineffective shielding by 4f electrons causes identical size of Zr (160 pm) & Hf (159 pm), decreasing basicity La(OH)₃ to Lu(OH)₃.
- **K₂Cr₂O₇ & KMnO₄:**
  * 2 CrO₄²⁻ (Yellow) + 2 H⁺ <=> Cr₂O₇²⁻ (Orange) + H₂O
  * Cr₂O₇²⁻ + 14 H⁺ + 6e⁻ -> 2 Cr³⁺ + 7 H₂O; MnO₄⁻ + 8 H⁺ + 5e⁻ -> Mn²⁺ + 4 H₂O
- **Coordination Compounds:**
  * Octahedral splitting: t_2g (lower) and e_g (higher), Δ_o. Tetrahedral: Δ_t = (4/9) Δ_o.
  * Spectrochemical series: I⁻ < Br⁻ < Cl⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NH₃ < en < CN⁻ < CO.

**3. Organic Chemistry Master Distinguishing Chemical Tests:**
1. **Lucas Test (Conc. HCl + Anhydrous ZnCl₂):**
   - 3° Alcohol -> Instant turbidity
   - 2° Alcohol -> Turbidity in 5 minutes
   - 1° Alcohol -> No turbidity at room temperature (only on heating).
2. **Iodoform Test (I₂ + NaOH / NaOI, Heat):**
   - Positive for compounds containing **CH₃-C=O** or **CH₃-CH(OH)-** group (e.g. Acetaldehyde, Acetone, Ethanol, Propan-2-ol, Acetophenone).
   - Gives yellow crystalline precipitate of **CHI₃** with characteristic antiseptic smell.
3. **Tollens' Test (Ammoniacal AgNO₃):**
   - Positive for all aldehydes (aliphatic and aromatic) -> Gives **Silver mirror (Ag)**.
   - Ketones DO NOT respond.
4. **Fehling's Test (Fehling A + B):**
   - Positive for aliphatic aldehydes -> Gives red-brown precipitate of **Cu₂O**.
   - Benzaldehyde and ketones DO NOT respond.
5. **Carbylamine Test (CHCl₃ + alc. KOH, Heat):**
   - Positive ONLY for primary (1°) aliphatic and aromatic amines.
   - Forms foul-smelling **Isocyanide (Carbylamine, R-NC)**.
6. **Hinsberg Test (Benzenesulphonyl chloride, C₆H₅SO₂Cl):**
   - 1° Amine -> Precipitate soluble in alkali (has acidic H on nitrogen).
   - 2° Amine -> Precipitate insoluble in alkali.
   - 3° Amine -> No reaction.
7. **Neutral FeCl₃ Test:**
   - Phenol gives violet coloration; Alcohols give no reaction.
8. **Azo Dye Test:**
   - Aniline + NaNO₂ + HCl (0-5°C) followed by β-naphthol in NaOH -> **Scarlet red / orange dye**.

**4. 20 Crucial Named Organic Reactions Quick Reference:**
1. Finkelstein (NaI / Acetone) & Swarts (AgF / Hg₂F₂)
2. Wurtz, Wurtz-Fittig, and Fittig reactions
3. Reimer-Tiemann (Phenol -> Salicylaldehyde via CHCl₃/NaOH)
4. Kolbe's Reaction (Phenol -> Salicylic acid via CO₂/NaOH)
5. Williamson Ether Synthesis (1° R-X + R'-ONa -> R-O-R')
6. Rosenmund Reduction (R-COCl + H₂ --[Pd-BaSO₄]--> R-CHO)
7. Stephen Reaction (R-CN + SnCl₂/HCl -> R-CHO)
8. Etard Reaction (Toluene + CrO₂Cl₂ -> Benzaldehyde)
9. Gattermann-Koch (Benzene + CO + HCl --[AlCl₃/CuCl]--> Benzaldehyde)
10. Clemmensen Reduction (>C=O + Zn-Hg/conc. HCl -> >CH₂)
11. Wolff-Kishner Reduction (>C=O + NH₂NH₂/KOH/glycol -> >CH₂)
12. Aldol & Cross-Aldol Condensation (dil. NaOH, requires α-H)
13. Cannizzaro Reaction (50% KOH, NO α-H: disproportionation)
14. Hell-Volhard-Zelinsky (HVZ: R-CH₂-COOH + Br₂/Red P -> α-bromo acid)
15. Gabriel Phthalimide Synthesis (Pure 1° aliphatic amines only)
16. Hoffmann Bromamide Degradation (R-CONH₂ + Br₂/4 KOH -> R-NH₂ + K₂CO₃, 1 less carbon)
17. Sandmeyer & Gattermann Reactions (Diazonium salt conversions)
18. Coupling Reactions (Diazonium salt + Phenol / Aniline -> p-hydroxy / p-amino azobenzene).

**KEY POINTS:**
- Always write balanced equations with reagents and conditions above reaction arrows.
- For conversions, use step-up (KCN) or step-down (Hoffmann bromamide) routes systematically.`;
  }

  // CHAPTER 6: Haloalkanes and Haloarenes
  if (
    chapterLower.includes('haloalkane') ||
    chapterLower.includes('haloarene') ||
    chapterLower.includes('alkyl halide') ||
    chapterLower === 'c6' ||
    chapterLower.includes('chapter 6: haloalkanes and haloarenes') ||
    chapterLower.includes('chapter 6 - haloalkanes and haloarenes')
  ) {
    return `TOPIC: Chapter 6: Haloalkanes and Haloarenes
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Methods of Preparation:**
- **From Alcohols:**
  1. **Darzens Process (Best Laboratory Method):**
     R-OH + SOCl₂ --[Pyridine]--> R-Cl + SO₂↑ + HCl↑.
     *Why best:* Both by-products (SO₂ and HCl) are volatile gases that escape, yielding pure alkyl chloride directly.
  2. With Phosphorus Halides:
     R-OH + PCl₅ -> R-Cl + POCl₃ + HCl
     3 R-OH + PBr₃ -> 3 R-Br + H₃PO₃ (PBr₃ prepared in situ: Red P + Br₂).
  3. With Lucas Reagent (Conc. HCl + Anhydrous ZnCl₂):
     R-OH + HCl --[ZnCl₂]--> R-Cl + H₂O.
- **From Hydrocarbons:**
  1. Free Radical Halogenation: CH₃CH₂CH₂CH₃ + Cl₂ --[hν]--> 1-chlorobutane (minor) + 2-chlorobutane (major).
  2. Electrophilic Addition to Alkenes:
     * **Markovnikov's Rule:** In addition of unsymmetrical HX to unsymmetrical alkene, negative part of reagent adds to double-bonded carbon with fewer hydrogen atoms:
       CH₃-CH=CH₂ + HBr -> CH₃-CH(Br)-CH₃ (2-Bromopropane major).
     * **Peroxide Effect (Kharasch / Anti-Markovnikov):**
       CH₃-CH=CH₂ + HBr --[Benzoyl Peroxide]--> CH₃-CH₂-CH₂-Br (1-Bromopropane). Operates ONLY for HBr via free-radical mechanism.
  3. Allylic Halogenation: CH₃-CH=CH₂ + Cl₂ (773 K or NBS) -> Cl-CH₂-CH=CH₂ (Allyl chloride).
- **Halogen Exchange Reactions:**
  1. **Finkelstein Reaction:** Alkyl chloride/bromide + NaI --[Dry Acetone]--> Alkyl Iodide (R-I) + NaCl/NaBr↓. (Driven forward by Le Chatelier's principle because NaCl/NaBr precipitate in dry acetone).
  2. **Swarts Reaction:** Alkyl chloride/bromide + AgF (or Hg₂F₂, CoF₃, SbF₃) -> Alkyl Fluoride (R-F) + AgCl/AgBr.

**2. S_N1 vs S_N2 Nucleophilic Substitution Mechanisms (5-Star CBSE Topic):**
- **S_N2 (Substitution Nucleophilic Bimolecular):**
  * **Kinetics:** Second order: Rate = k · [Substrate] · [Nucleophile].
  * **Mechanism:** Single-step concerted mechanism without intermediate. Nucleophile attacks from backside 180° opposite to leaving group, passing through a pentavalent transition state.
  * **Stereochemistry:** 100% **Inversion of Configuration (Walden Inversion)** like an umbrella turning inside out in a storm.
  * **Reactivity Order:** **Methyl > 1° > 2° > 3°** (Governed strictly by steric hindrance; bulky alkyl groups hinder backside attack).
  * **Solvent & Nucleophile:** Favoured by polar aprotic solvents (Acetone, DMSO, DMF) and strong nucleophiles (OH⁻, CN⁻).
- **S_N1 (Substitution Nucleophilic Unimolecular):**
  * **Kinetics:** First order: Rate = k · [Substrate].
  * **Mechanism:** Two-step mechanism:
    - Step 1 (Slow, Rate-Determining Step): Heterolytic cleavage of C-X bond to form a planar sp² **Carbocation intermediate**.
    - Step 2 (Fast): Attack of nucleophile from either front face or back face of planar carbocation with equal probability.
  * **Stereochemistry:** Results in **Racemization** (formation of equimolar mixture of d- and l-enantiomers; optically inactive).
  * **Reactivity Order:** **3° > 2° > 1° > Methyl** (Governed strictly by carbocation stability: 3° > 2° > 1° due to hyperconjugation and +I effect).
  * **Allylic and Benzylic Halides:** Show exceptionally high reactivity towards S_N1 because the formed allylic (CH₂=CH-CH₂⁺) and benzylic (C₆H₅CH₂⁺) carbocations are stabilized by extensive resonance delocalization!
  * **Solvent & Nucleophile:** Favoured by polar protic solvents (H₂O, Alcohol, CH₃COOH) which solvate carbocations and leaving anions.

**3. Elimination Reactions & Ambident Nucleophiles:**
- **β-Elimination (Dehydrohalogenation):** Alkyl halide heated with **alcoholic KOH** eliminates HX to form an alkene.
  * **Saytzeff's (Zaitsev's) Rule:** When two alkenes are possible, the major product is the more highly substituted, more stable alkene having a greater number of alkyl groups attached to double-bonded carbons.
  * Example: CH₃-CH₂-CH(Br)-CH₃ + alc. KOH --[Heat]--> CH₃-CH=CH-CH₃ (But-2-ene, 81% major) + CH₃-CH₂-CH=CH₂ (But-1-ene, 19% minor).
- **Ambident Nucleophiles (Crucial 2-Mark Board Question):**
  - **KCN vs AgCN:**
    * R-X + KCN (predominantly ionic) => **Alkyl Cyanide / Nitrile (R-CN)** as major product because C-C bond is thermodynamically more stable than C-N bond.
    * R-X + AgCN (predominantly covalent) => **Alkyl Isocyanide / Isonitrile (R-NC)** as major product because carbon is bonded to silver, leaving only the nitrogen lone pair free to attack.
  - **KNO₂ vs AgNO₂:**
    * R-X + KNO₂ (ionic) => **Alkyl Nitrite (R-O-N=O)** (attack via oxygen).
    * R-X + AgNO₂ (covalent) => **Nitroalkane (R-NO₂)** (attack via nitrogen).

**4. Low Reactivity of Haloarenes towards Nucleophilic Substitution:**
- Aryl halides (e.g. Chlorobenzene) are extremely resistant to nucleophilic attack compared to alkyl halides due to 4 fundamental reasons:
  1. **Resonance Effect:** Lone pair on chlorine delocalizes into benzene ring, imparting partial double bond character to C-Cl bond (bond length 169 pm vs 178 pm in alkyl chloride), making it much stronger and harder to break.
  2. **sp² Hybridization of Ring Carbon:** The carbon attached to halogen is sp² hybridized (33.3% s-character, more electronegative, holds C-Cl pair tighter) compared to sp³ (25% s-character) in alkyl halides.
  3. **Instability of Phenyl Cation:** Self-ionization to phenyl cation (C₆H₅⁺) is impossible because sp² hybridized vacant orbital cannot be stabilized by resonance.
  4. **Electronic Repulsion:** Incoming nucleophile experiences repulsion from the electron-rich π-cloud of the aromatic ring.
- **Substitution Under Drastic Conditions (Dow's Process):**
  Chlorobenzene + NaOH (623 K, 300 atm) followed by acidification => Phenol.
- **Effect of Electron-Withdrawing Groups (-NO₂):**
  * Introducing -NO₂ groups at **ortho and para positions** dramatically enhances reactivity because the negative charge in the carbanion intermediate (Meisenheimer complex) is delocalized onto the electronegative oxygen atoms of -NO₂.
  * Meta-NO₂ has negligible activating effect because negative charge does NOT fall on the meta carbon during resonance.
  * 2,4,6-Trinitrochlorobenzene (Picric acid precursor) hydrolyzes to 2,4,6-trinitrophenol simply by warming with warm water!

**5. Organometallic Compounds & Coupling Reactions:**
- **Grignard Reagent:** R-X + Mg --[Dry Ether]--> R-Mg-X (Alkyl magnesium halide). Must be prepared in strictly anhydrous dry ether because Grignard reagents react violently with traces of moisture to form alkanes: R-MgX + H₂O -> R-H + Mg(OH)X.
- **Wurtz Reaction:** 2 R-X + 2 Na --[Dry Ether]--> R-R + 2 NaX (Symmetrical alkanes).
- **Wurtz-Fittig Reaction:** Ar-X + R-X + 2 Na --[Dry Ether]--> Ar-R (Alkylarene) + 2 NaX.
- **Fittig Reaction:** 2 Ar-X + 2 Na --[Dry Ether]--> Ar-Ar (Diphenyl / Biphenyl) + 2 NaX.

**COMMON MISTAKE:**
- Using alcoholic KOH for substitution (it causes elimination to alkene!). For substitution, use aqueous KOH (forms alcohol).
- Storing Grignard reagent in presence of moisture (it instantly converts into alkane).

**KEY POINTS:**
- Boiling points order: R-I > R-Br > R-Cl > R-F (increasing molecular mass and van der Waals forces).
- For isomeric alkyl halides, boiling point decreases with branching due to decreased surface area.`;
  }

  // CHAPTER 7: Alcohols, Phenols and Ethers
  if (
    chapterLower.includes('alcohol') ||
    chapterLower.includes('phenol') ||
    chapterLower.includes('ether') ||
    chapterLower === 'c7' ||
    chapterLower.includes('chapter 7: alcohols, phenols and ethers') ||
    chapterLower.includes('chapter 7 - alcohols, phenols and ethers')
  ) {
    return `TOPIC: Chapter 7: Alcohols, Phenols and Ethers
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Preparation Methods:**
- **Preparation of Alcohols:**
  1. From Alkenes:
     * Acid-Catalyzed Hydration: Alkene + H₂O/H⁺ => Follows Markovnikov's rule with carbocation rearrangement.
     * **Hydroboration-Oxidation:** 6 CH₃-CH=CH₂ + B₂H₆ -> 2 (CH₃CH₂CH₂)₃B --[H₂O₂, OH⁻]--> 6 CH₃CH₂CH₂OH (Propan-1-ol). Yields **Anti-Markovnikov addition of water** without any carbocation rearrangement.
  2. From Carbonyl Compounds:
     * Aldehydes + NaBH₄ / LiAlH₄ => 1° Alcohol; Ketones => 2° Alcohol; Carboxylic acids + LiAlH₄ => 1° Alcohol.
     * **Grignard Reactions (High-Yield Syntheses):**
       - Formaldehyde (HCHO) + RMgX --[H₃O⁺]--> 1° Alcohol (R-CH₂OH)
       - Any other Aldehyde (R'CHO) + RMgX --[H₃O⁺]--> 2° Alcohol (R'-CH(OH)-R)
       - Ketones (R'COR'') + RMgX --[H₃O⁺]--> 3° Alcohol (R'R''C(OH)-R).
- **Preparation of Phenols:**
  1. **From Cumene (Industrial Method):**
     Cumene (Isopropylbenzene) --[O₂ (air)]--> Cumene Hydroperoxide --[dil. H₂SO₄]--> **Phenol + Acetone** (valuable by-product).
  2. From Benzene Diazonium Chloride: C₆H₅N₂⁺Cl⁻ + H₂O --[Warm]--> C₆H₅OH + N₂↑ + HCl.

**2. Physical Properties & Acidity Comparison:**
- **Boiling Points:** Alcohols have significantly higher boiling points than isomeric ethers and haloalkanes due to extensive intermolecular Hydrogen bonding. Boiling points decrease with branching.
- **Acidity Comparison (Core CBSE 3-Marker):**
  * Order of Acidic Strength: **Carboxylic Acids > Phenol > Water > 1° Alcohol > 2° Alcohol > 3° Alcohol**.
  * **Why Phenol is more acidic than Alcohols:**
    1. In phenol, the -OH group is attached to an sp² carbon (more electronegative), polarizing the O-H bond and releasing H⁺ easily.
    2. The resulting **Phenoxide ion (C₆H₅O⁻)** is resonance-stabilized (negative charge delocalized over ortho and para positions of benzene ring). Alkoxide ion (RO⁻) has no resonance and is destabilized by electron-donating (+I) alkyl group.
  * **Substituent Effects on Phenol Acidity:**
    - Electron-Withdrawing Groups (-NO₂, -Cl, -CN) at **ortho and para positions** stabilize phenoxide ion by dispersing negative charge, increasing acidity (e.g. Picric acid / 2,4,6-trinitrophenol is strongly acidic).
    - Electron-Releasing Groups (-CH₃, -OCH₃) destabilize phenoxide ion, decreasing acidity (o-cresol < phenol).

**3. Reactions of Alcohols & Lucas Distinguishing Test:**
- **Lucas Test (Distinguish 1°, 2°, 3° Alcohols):**
  * Reagent: Concentrated HCl + Anhydrous ZnCl₂ (Lucas Reagent).
  * 3° Alcohol -> Instant cloudiness/turbidity (forms insoluble 3° alkyl chloride via stable 3° carbocation).
  * 2° Alcohol -> Turbidity appears within 5 minutes.
  * 1° Alcohol -> Solution remains clear at room temperature; turbidity only on heating.
- **Oxidation Reactions:**
  * 1° Alcohol --[PCC (Pyridinium Chlorochromate)]--> Aldehyde (stops at aldehyde stage without over-oxidation).
  * 1° Alcohol --[Acidified KMnO₄ / K₂Cr₂O₇]--> Carboxylic Acid.
  * 2° Alcohol --[CrO₃ or Cu at 573 K]--> Ketone.
  * 3° Alcohol --[Cu at 573 K]--> Undergoes **Dehydration to Alkene** (e.g. 2-methylpropan-2-ol -> 2-methylpropene).

**4. Named Reactions of Phenols (Must-Learn for CBSE):**
1. **Reimer-Tiemann Reaction:**
   Phenol + CHCl₃ + 3 NaOH (340 K) -> Intermediate with -ONa and -CHCl₂ --[H⁺]--> **Salicylaldehyde (2-hydroxybenzaldehyde)**. (Electrophile is Dichlorocarbene, :CCl₂).
2. **Kolbe's Reaction:**
   Phenol + NaOH -> Sodium phenoxide + CO₂ (400 K, 4-7 atm) -> Sodium salicylate --[H⁺]--> **Salicylic acid (2-hydroxybenzoic acid)**.
   * **Aspirin Synthesis:** Salicylic acid + (CH₃CO)₂O --[H⁺]--> **Acetylsalicylic acid (Aspirin)** + CH₃COOH.
3. **Reaction with Zinc Dust:** Phenol + Zn dust --[Heat]--> Benzene + ZnO.
4. **Bromination of Phenol:**
   * In non-polar solvent (Br₂ in CS₂ or CHCl₃ at 273 K) -> o-bromophenol + **p-bromophenol (major)**.
   * With Bromine Water (3 Br₂ in H₂O) -> **2,4,6-Tribromophenol (White precipitate)**.

**5. Ethers & Williamson Synthesis:**
- **Williamson Ether Synthesis:**
  R-X (Primary 1° Alkyl Halide) + R'-O⁻Na⁺ (Sodium Alkoxide) -> Ether (R-O-R') + NaX.
  * **CRITICAL RULE:** Alkyl halide MUST be PRIMARY (1°). If a tertiary (3°) alkyl halide is used with alkoxide, elimination occurs exclusively to form an ALKENE because alkoxide is also a strong base:
    (CH₃)₃C-Br + CH₃ONa -> CH₃-C(CH₃)=CH₂ (2-methylpropene) + CH₃OH + NaBr.
- **Cleavage of Ethers with HI (High-Frequency Board Question):**
  * With unsymmetrical ethers containing 1° or 2° alkyl groups: Follows S_N2 mechanism; smaller alkyl group forms alkyl iodide, while larger group forms alcohol:
    CH₃-O-CH₂CH₃ + HI -> CH₃I + CH₃CH₂OH.
  * If one of the alkyl groups is **Tertiary (3°)**: Follows S_N1 mechanism via stable 3° carbocation; tertiary group forms alkyl iodide:
    (CH₃)₃C-O-CH₃ + HI -> (CH₃)₃C-I + CH₃OH.
  * **Anisole (C₆H₅-O-CH₃) + HI:** Cleaves exclusively to form **Phenol (C₆H₅OH) + Methyl Iodide (CH₃I)**. Phenyl C-O bond has partial double bond character due to resonance and cannot be cleaved.

**COMMON MISTAKE:**
- Writing that anisole with HI gives iodobenzene. The sp² C-O bond of phenol has resonance double bond character and NEVER breaks; the products are ALWAYS phenol and methyl iodide.

**KEY POINTS:**
- Phenol turns blue litmus red, whereas aliphatic alcohols do not affect litmus (neutral to litmus).
- PCC oxidizes primary alcohols to aldehydes only, whereas Jones reagent (CrO₃/H₂SO₄) oxidizes to carboxylic acids.`;
  }

  // CHAPTER 8: Aldehydes, Ketones and Carboxylic Acids
  if (
    chapterLower.includes('aldehyde') ||
    chapterLower.includes('ketone') ||
    chapterLower.includes('carboxylic') ||
    chapterLower === 'c8' ||
    chapterLower.includes('chapter 8: aldehydes, ketones and carboxylic acids') ||
    chapterLower.includes('chapter 8 - aldehydes, ketones and carboxylic acids')
  ) {
    return `TOPIC: Chapter 8: Aldehydes, Ketones and Carboxylic Acids
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Preparation of Aldehydes and Ketones:**
1. **Rosenmund Reduction:**
   Acyl chloride (R-COCl) + H₂ --[Pd-BaSO₄ / Quinoline]--> Aldehyde (R-CHO) + HCl. (BaSO₄ acts as a poison to prevent further reduction of aldehyde to alcohol).
2. **Stephen Reaction:**
   Nitrile (R-CN) + SnCl₂ + HCl -> Imine hydrochloride (R-CH=NH·HCl) --[H₃O⁺]--> Aldehyde (R-CHO).
3. **Etard Reaction:**
   Toluene (C₆H₅CH₃) + CrO₂Cl₂ (in CS₂) -> Brown chromium complex --[H₃O⁺]--> **Benzaldehyde (C₆H₅CHO)**.
4. **Gattermann-Koch Reaction:**
   Benzene + CO + HCl --[Anhydrous AlCl₃ / CuCl]--> Benzaldehyde + HCl.
5. **Friedel-Crafts Acylation:**
   Benzene + CH₃COCl --[Anhydrous AlCl₃]--> Acetophenone (C₆H₅COCH₃) + HCl.

**2. Nucleophilic Addition Reactions of Carbonyls:**
- **Reactivity Order towards Nucleophilic Addition:**
  **HCHO > CH₃CHO > CH₃COCH₃ > C₆H₅COCH₃**.
  *Reasons:*
  1. Steric Hindrance: Aldehydes have only one alkyl group (or none in HCHO) opposing nucleophilic attack compared to two alkyl groups in ketones.
  2. Electronic (+I) Effect: Alkyl groups donate electrons towards carbonyl carbon, reducing its positive electrophilic character. Ketones have two +I groups, making the carbon less positive.
- **Key Nucleophilic Addition Reactions:**
  1. Addition of HCN -> **Cyanohydrin** (catalysed by base OH⁻).
  2. Addition of NaHSO₃ -> Crystalline bisulphite addition product (water-soluble; used to separate and purify aldehydes and methyl ketones).
  3. Addition of Grignard Reagent -> Alcohols (1°, 2°, 3°).
  4. Addition of Alcohols -> Hemiacetal -> **Acetal** (or Ketal).
  5. **Addition of Ammonia Derivatives (H₂N-Z -> >C=N-Z):**
     * With Hydroxylamine (NH₂OH) => **Oxime** (>C=N-OH).
     * With Hydrazine (NH₂NH₂) => **Hydrazone** (>C=N-NH₂).
     * With 2,4-Dinitrophenylhydrazine (2,4-DNP / Brady's Reagent) => **2,4-DNP derivative (Orange-yellow precipitate)** (universal test for carbonyls).
     * With Semicarbazide (NH₂CONHNH₂) => **Semicarbazone**. (Note: Attack occurs only through hydrazine -NH₂; amide -NH₂ is deactivated by resonance with C=O).

**3. Reductions & Distinguishing Oxidation Tests:**
- **Reductions to Hydrocarbons:**
  1. **Clemmensen Reduction:** >C=O + Zn-Hg + Conc. HCl -> >CH₂ + H₂O. (Used for acid-stable compounds).
  2. **Wolff-Kishner Reduction:** >C=O + NH₂NH₂ --[KOH / Ethylene glycol, Heat]--> >CH₂ + N₂↑. (Used for base-stable compounds).
- **Distinguishing Chemical Tests:**
  1. **Tollens' Test (Silver Mirror Test):**
     R-CHO + 2 [Ag(NH₃)₂]⁺ + 3 OH⁻ -> R-COO⁻ + **2 Ag↓ (Silver Mirror)** + 4 NH₃ + 2 H₂O.
     (Positive for aliphatic AND aromatic aldehydes; Ketones do not respond).
  2. **Fehling's Test:**
     R-CHO + 2 Cu²⁺ + 5 OH⁻ -> R-COO⁻ + **Cu₂O↓ (Red-brown precipitate)** + 3 H₂O.
     (Positive ONLY for ALIPHATIC aldehydes; Benzaldehyde and ketones DO NOT give Fehling's test).
  3. **Iodoform Test (Haloform Reaction):**
     Compound containing **CH₃-C=O** group + 3 I₂ + 4 NaOH -> **CHI₃↓ (Yellow crystalline precipitate with antiseptic smell)** + RCOONa + 3 NaI + 3 H₂O.
     *Positive examples:* Ethanal, Propanone, Butan-2-one, Acetophenone, Ethanol, Propan-2-ol.
     *Negative examples:* Methanal, Propanal, Benzophenone, 3-pentanone.

**4. Reactions Involving α-Hydrogens:**
- **1. Aldol Condensation:**
  * Requires: Aldehydes or ketones having **at least ONE α-hydrogen**.
  * Reagent: Dilute alkali (dil. NaOH or Ba(OH)₂).
  * Product: Two molecules combine to form β-hydroxy aldehyde (aldol) or β-hydroxy ketone (ketol), which on heating loses H₂O to yield **α,β-unsaturated carbonyl compound**.
  * Example: 2 CH₃CHO --[dil. NaOH]--> CH₃-CH(OH)-CH₂-CHO --[Δ, -H₂O]--> **CH₃-CH=CH-CHO (But-2-enal)**.
- **2. Cross-Aldol Condensation:** Reaction between two different carbonyl compounds; if both have α-H, yields 4 distinct products (2 self + 2 cross).
- **3. Cannizzaro Reaction:**
  * Requires: Aldehydes having **NO α-hydrogen** (Formaldehyde HCHO, Benzaldehyde C₆H₅CHO, Trimethylacetaldehyde (CH₃)₃C-CHO).
  * Reagent: Concentrated alkali (**50% KOH / NaOH**).
  * Undergoes disproportionation (self-oxidation and reduction): One molecule reduced to alcohol, one oxidized to carboxylic acid salt:
    2 C₆H₅CHO + conc. NaOH -> **C₆H₅CH₂OH (Benzyl alcohol) + C₆H₅COONa (Sodium benzoate)**.

**5. Carboxylic Acids & Acidity Trends:**
- **Acidity of Carboxylic Acids:**
  * Carboxylic acids are stronger acids than phenols and alcohols because the carboxylate ion (RCOO⁻) is stabilized by **two equivalent resonance structures** where the negative charge is delocalized over two highly electronegative oxygen atoms.
  * **Substituent Effects on Acidity:**
    - Electron-Withdrawing Groups (-CF₃ > -NO₂ > -CN > -F > -Cl > -Br > -I > -Ph) increase acidity by dispersing negative charge of carboxylate ion (e.g. F-CH₂-COOH > Cl-CH₂-COOH > CH₃COOH).
    - Electron-Releasing Groups (-CH₃, -C₂H₅) decrease acidity.
    - **Ortho-Effect in Benzoic Acids:** Any substituent at the ortho position (whether EWG or ERG like -NO₂, -CH₃, -OCH₃) increases acidity of benzoic acid due to steric hindrance to coplanarity.
- **Hell-Volhard-Zelinsky (HVZ) Reaction:**
  Carboxylic acids having α-hydrogen react with Cl₂ or Br₂ in presence of red phosphorus to form α-halocarboxylic acids:
  R-CH₂-COOH + Br₂ / Red P --[H₂O]--> R-CH(Br)-COOH (α-Bromocarboxylic acid).

**COMMON MISTAKE:**
- In semicarbazide (NH₂-CO-NH-NH₂), using the -NH₂ attached to C=O in carbonyl condensation. That nitrogen lone pair is delocalized by resonance with C=O; only the terminal hydrazine -NH-NH₂ nitrogen acts as nucleophile!

**KEY POINTS:**
- Benzaldehyde gives Tollens' test but does NOT reduce Fehling's solution.
- Formic acid (HCOOH) is the only carboxylic acid that gives Tollens' and Fehling's tests because it contains both aldehyde and carboxylic acid functionalities.`;
  }

  // CHAPTER 9: Amines
  if (
    chapterLower.includes('amine') ||
    chapterLower.includes('diazonium') ||
    chapterLower.includes('aniline') ||
    chapterLower === 'c9' ||
    chapterLower.includes('chapter 9: amines') ||
    chapterLower.includes('chapter 9 - amines')
  ) {
    return `TOPIC: Chapter 9: Amines & Diazonium Salts
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Preparation of Amines:**
1. **Reduction of Nitro Compounds:**
   R-NO₂ + H₂/Pd (or Fe + HCl, or Sn + HCl) -> R-NH₂ + 2 H₂O.
   *Why Fe + HCl is preferred commercially:* FeCl₂ formed gets hydrolyzed to release HCl, so only a small amount of hydrochloric acid is required to initiate the reaction.
2. **Reduction of Nitriles:**
   R-C≡N + H₂/Ni (or LiAlH₄, or Na(Hg) + C₂H₅OH) -> R-CH₂-NH₂ (Prepares 1° amine with one additional carbon).
3. **Hoffmann Bromamide Degradation (Step-down reaction):**
   Primary acid amide heated with bromine in aqueous or ethanolic NaOH:
   R-CONH₂ + Br₂ + 4 KOH -> **R-NH₂ + K₂CO₃ + 2 KBr + 2 H₂O**.
   *Speciality:* Amine formed has **ONE CARBON LESS** than starting amide. Excellent for step-down conversions!
4. **Gabriel Phthalimide Synthesis:**
   Phthalimide + ethanolic KOH -> Potassium phthalimide + R-X -> N-alkylphthalimide --[NaOH(aq)]--> **Pure 1° Aliphatic Amine (R-NH₂)** + Sodium phthalate.
   *Important Limitation:* **Aromatic primary amines (Aniline) CANNOT be prepared** by this method because aryl halides do not undergo nucleophilic substitution with phthalimide anion due to resonance partial double bond character of C-X bond.

**2. Basicity Trends of Amines (High-Yield CBSE Question):**
- Amines are Lewis bases due to the presence of an unshared lone pair of electrons on the nitrogen atom.
- **In Gaseous Phase:** Basicity order strictly follows +I inductive effect:
  **3° Amine > 2° Amine > 1° Amine > NH₃**.
- **In Aqueous Solution (Interplay of +I effect, Solvation effect, and Steric hindrance):**
  * **For Methyl-substituted amines:** **(CH₃)₂NH (2°) > CH₃NH₂ (1°) > (CH₃)₃N (3°) > NH₃** (Order: 2° > 1° > 3°).
  * **For Ethyl-substituted amines:** **(C₂H₅)₂NH (2°) > (C₂H₅)₃N (3°) > C₂H₅NH₂ (1°) > NH₃** (Order: 2° > 3° > 1°).
  * In both series, the **2° amine is always the most basic**!
- **Aliphatic Amines vs Ammonia vs Aniline:**
  * **Basicity Order:** **Aliphatic amines (R-NH₂) > Ammonia (NH₃) > Aniline (C₆H₅NH₂)**.
  * **Why Aniline is a very weak base:**
    1. The lone pair of electrons on nitrogen in aniline is delocalized over the benzene ring through resonance, making it less available for protonation.
    2. Anilinium ion (C₆H₅NH₃⁺) has only 2 resonance structures, whereas aniline has 5 resonance structures; hence aniline is more stable than anilinium ion.
  * **Substituent Effects on Aniline Basicity:**
    - Electron-Releasing Groups (-CH₃, -OCH₃, -NH₂) at ortho/para increase basicity.
    - Electron-Withdrawing Groups (-NO₂, -CN, -Cl) decrease basicity (p-nitroaniline is much less basic than aniline).

**3. Chemical Reactions & Distinguishing Tests:**
1. **Carbylamine Test (Isocyanide Test):**
   1° Amine (aliphatic or aromatic) + CHCl₃ + 3 alc. KOH --[Heat]--> **Alkyl / Aryl Isocyanide (Carbylamine, R-NC) [Extremely foul smelling]** + 3 KCl + 3 H₂O.
   *Used to detect 1° amines exclusively; 2° and 3° amines do not give this test.*
2. **Hinsberg Test (Distinguish 1°, 2°, 3° Amines):**
   * Reagent: Benzenesulphonyl chloride (C₆H₅SO₂Cl - Hinsberg's reagent).
   * **1° Amine:** Forms N-alkylbenzenesulphonamide, which contains an acidic hydrogen on nitrogen, hence **SOLUBLE in aqueous KOH**.
   * **2° Amine:** Forms N,N-dialkylbenzenesulphonamide, which has NO acidic hydrogen on nitrogen, hence **INSOLUBLE in aqueous KOH**.
   * **3° Amine:** Has no hydrogen on nitrogen, so it does NOT react with Hinsberg's reagent.
3. **Reaction with Nitrous Acid (HNO₂ / NaNO₂ + HCl):**
   * 1° Aliphatic Amine + HNO₂ (0-5°C) -> Highly unstable aliphatic diazonium salt which decomposes quantitatively releasing **N₂ gas bubbles** + Alcohol.
   * 1° Aromatic Amine (Aniline) + HNO₂ (273-278 K) -> Forms stable **Benzene Diazonium Chloride (C₆H₅N₂⁺Cl⁻)** (Diazotization).
4. **Electrophilic Substitution of Aniline:**
   * Bromination: Aniline + 3 Br₂(aq) -> **2,4,6-Tribromoaniline (White precipitate)**. To get monobromo (p-bromoaniline), the -NH₂ group must first be protected by acetylation with (CH₃CO)₂O.
   * Nitration: Direct nitration yields a mixture of ortho (2%), para (51%), and unexpectedly high **meta-nitroaniline (47%)** because in strongly acidic nitrating mixture, aniline gets protonated to anilinium ion (-NH₃⁺), which is a strong meta-directing group!
   * Friedel-Crafts Reaction: Aniline **DOES NOT undergo Friedel-Crafts alkylation or acylation** because the Lewis acid catalyst (anhydrous AlCl₃) acts as an electron acceptor and forms an insoluble coordinate complex with the basic -NH₂ group of aniline!

**4. Diazonium Salts & Synthetic Applications:**
- Prepared by **Diazotization**: C₆H₅NH₂ + NaNO₂ + 2 HCl (273-278 K / 0-5°C) -> C₆H₅N₂⁺Cl⁻ + NaCl + 2 H₂O.
- **Key Synthetic Transformations:**
  1. **Sandmeyer Reaction:** C₆H₅N₂⁺Cl⁻ + CuCl/HCl -> Chlorobenzene; + CuBr/HBr -> Bromobenzene; + CuCN/KCN -> Benzonitrile.
  2. **Gattermann Reaction:** C₆H₅N₂⁺Cl⁻ + Cu powder/HCl -> Chlorobenzene; + Cu powder/HBr -> Bromobenzene.
  3. With KI (Warm) -> Iodobenzene (C₆H₅I) + N₂ + KCl.
  4. **Balz-Schiemann Reaction:** C₆H₅N₂⁺Cl⁻ + HBF₄ -> C₆H₅N₂⁺BF₄⁻ --[Heat]--> Fluorobenzene (C₆H₅F) + BF₃ + N₂.
  5. Reduction to Benzene: C₆H₅N₂⁺Cl⁻ + H₃PO₂ (Hypophosphorous acid) + H₂O -> Benzene (C₆H₆) + H₃PO₃ + HCl + N₂. (or using CH₃CH₂OH).
  6. Hydrolysis to Phenol: C₆H₅N₂⁺Cl⁻ + H₂O --[Warm]--> Phenol (C₆H₅OH) + N₂ + HCl.
  7. **Azo Coupling Reactions (pH Sensitive):**
     * With Phenol (mildly alkaline pH 9-10): Forms **p-hydroxyazobenzene (Orange dye)**.
     * With Aniline (mildly acidic pH 4-5): Forms **p-aminoazobenzene (Yellow dye)**.

**COMMON MISTAKE:**
- Forgetting why direct nitration of aniline gives 47% meta product (protonation to anilinium ion).
- Saying aniline undergoes Friedel-Crafts reaction (it does NOT; Lewis acid AlCl₃ forms complex with lone pair of -NH₂).

**KEY POINTS:**
- In Gabriel phthalimide synthesis, aromatic amines cannot be prepared.
- Diazonium salts must be used fresh at 0-5°C; they explode upon drying at higher temperatures.`;
  }

  // CHAPTER 10: Biomolecules
  if (
    chapterLower.includes('biomolecule') ||
    chapterLower.includes('carbohydrate') ||
    chapterLower.includes('protein') ||
    chapterLower.includes('nucleic') ||
    chapterLower.includes('dna') ||
    chapterLower.includes('rna') ||
    chapterLower.includes('vitamin') ||
    chapterLower === 'c10' ||
    chapterLower.includes('chapter 10: biomolecules') ||
    chapterLower.includes('chapter 10 - biomolecules')
  ) {
    return `TOPIC: Chapter 10: Biomolecules
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Carbohydrates & Glucose Chemistry:**
- **Classification:**
  * Monosaccharides: Glucose, Fructose, Ribose, Galactose (cannot be hydrolyzed further).
  * Disaccharides: Sucrose, Maltose, Lactose.
  * Polysaccharides: Starch, Cellulose, Glycogen.
  * **Reducing Sugars:** Carbohydrates that reduce Tollens' reagent and Fehling's solution (all monosaccharides, and disaccharides having free hemiacetal/hemiketal -OH at anomeric carbon, like Maltose and Lactose). Sucrose is NON-REDUCING.
- **Structure & Elucidation of D-(+)-Glucose (Aldohexose):**
  1. Glucose + HI --[Heat]--> n-Hexane (Confirms 6 carbons in a straight, unbranched chain).
  2. Glucose + NH₂OH -> Glucose Oxime; Glucose + HCN -> Glucose Cyanohydrin (Confirms presence of a carbonyl >C=O group).
  3. Glucose + Bromine Water (mild oxidizing agent) -> **Gluconic Acid** (Confirms carbonyl is an **Aldehyde (-CHO)** group).
  4. Glucose + Acetic Anhydride -> **Glucose Pentaacetate** (Confirms presence of **5 -OH groups** on different carbons).
  5. Glucose + Conc. HNO₃ -> **Saccharic Acid (Glucaric acid)** (Confirms presence of a **Primary alcohol (-CH₂OH)** group at C-6).
- **Limitations of Open Chain Structure of Glucose:**
  1. Does not form bisulphite addition product with NaHSO₃.
  2. Glucose pentaacetate does not react with hydroxylamine (proves absence of free -CHO group).
  3. Exists in two distinct crystalline anomers: α-D-glucose (m.p. 419 K) and β-D-glucose (m.p. 423 K).
  * **Anomers:** Diastereomers differing only in the spatial configuration at C-1 (the anomeric / hemiacetal carbon).
- **Disaccharide Linkages & Inversion of Cane Sugar:**
  * **Sucrose (Table Sugar):** α-D-glucose + β-D-fructose linked by **α-1, β-2-glycosidic bond**. Non-reducing sugar because the reducing groups of both monosaccharides (C-1 of glucose and C-2 of fructose) are involved in glycosidic bond formation.
  * **Inversion of Cane Sugar:** Sucrose is dextrorotatory (+66.5°). On hydrolysis with dilute acid, it yields an equimolar mixture of D-(+)-glucose (+52.5°) and D-(-)-fructose (-92.4°). Because the laevorotation of fructose is greater than the dextrorotation of glucose, the overall mixture becomes **LAEVOROTATORY (-39.9°)**. The hydrolyzed mixture is called **Invert Sugar**.
  * **Maltose:** 2 molecules of α-D-glucose joined by **α-1,4-glycosidic linkage**. Reducing sugar.
  * **Lactose (Milk Sugar):** β-D-galactose + β-D-glucose joined by **β-1,4-glycosidic linkage**. Reducing sugar.
- **Polysaccharides:**
  * **Starch:** Polymer of α-D-glucose consisting of Amylose (15-20%, water-soluble straight chain, α-1,4-linkage) and Amylopectin (80-85%, water-insoluble branched polymer, α-1,4-chain + α-1,6-branches every 24-30 residues).
  * **Cellulose:** Linear polymer of β-D-glucose joined by **β-1,4-glycosidic linkages**. Humans cannot digest cellulose due to absence of cellulase enzyme.
  * **Glycogen (Animal Starch):** Stored in liver and muscles; structure similar to amylopectin but much more highly branched.

**2. Proteins & Amino Acids:**
- **Amino Acids:** Contain both an amino (-NH₂) and a carboxyl (-COOH) group attached to the same α-carbon: R-CH(NH₂)-COOH.
  * **Zwitterion (Dipolar Ion):** In aqueous solution, the carboxyl group loses a proton and the amino group accepts a proton: **H₃N⁺-CH(R)-COO⁻**. Possesses both positive and negative charges; neutral overall.
  * **Isoelectric Point (pI):** The specific pH at which an amino acid exists predominantly as a neutral zwitterion and does not migrate towards either cathode or anode in an electric field.
  * **Chirality:** All standard amino acids are optically active and possess L-configuration EXCEPT **Glycine (H₂N-CH₂-COOH)** which is achiral (no asymmetric carbon).
  * **Essential vs Non-Essential Amino Acids:**
    - Essential (10): Cannot be synthesized by the human body; must be supplied through diet (Valine, Leucine, Isoleucine, Lysine, Methionine, Phenylalanine, Threonine, Tryptophan, Histidine, Arginine).
    - Non-Essential: Can be synthesized in the body from metabolic intermediates.
- **Structural Organization of Proteins:**
  1. **Primary Structure:** The linear sequence of amino acids joined by covalent **Peptide Bonds (-CO-NH-)**. Determines biological function.
  2. **Secondary Structure:** Conformation assumed by polypeptide backbone stabilized by regular **intramolecular Hydrogen bonding**:
     * **α-Helix:** Polypeptide chain coils in a right-handed spiral; every -NH group forms an H-bond with the -CO group of the 4th amino acid residue ahead (e.g. Keratin in hair, nails; Myosin in muscles).
     * **β-Pleated Sheet:** Polypeptide chains lie side by side in zig-zag pleated ribbons held together by intermolecular H-bonds (e.g. Silk fibroin).
  3. **Tertiary Structure:** Overall three-dimensional folding of polypeptide chains stabilized by H-bonds, disulphide linkages (-S-S-), ionic interactions, and van der Waals forces. Yields **Fibrous** (insoluble, elongated: keratin, collagen) and **Globular** (soluble, spherical: insulin, hemoglobin, albumin) proteins.
  4. **Quaternary Structure:** Spatial arrangement of two or more independent polypeptide subunits.
- **Denaturation of Proteins:**
  * When a protein in its native state is subjected to physical change (heat) or chemical change (pH shift), hydrogen bonds are broken, globule unfolds, and helix gets uncoiled, resulting in the **loss of biological activity**.
  * **CRITICAL POINT:** During denaturation, secondary and tertiary structures are completely destroyed, but the **PRIMARY STRUCTURE (peptide bonds) REMAINS COMPLETELY INTACT**.
  * Examples: Coagulation of egg white upon boiling (ovalbumin denaturation), curdling of milk caused by lactic acid.

**3. Nucleic Acids (DNA & RNA):**
- **Chemical Composition:** Pentose Sugar + Heterocyclic Nitrogenous Base + Phosphoric Acid.
  * **Nucleoside:** Nitrogenous Base + Pentose Sugar (linked by N-glycosidic linkage at C-1' of sugar).
  * **Nucleotide:** Nucleoside + Phosphate group (esterified at C-5' of sugar).
  * **Polynucleotide Chain:** Nucleotides linked together by **3', 5'-phosphodiester linkages**.
- **DNA vs RNA Comparison (High-Yield 3-Marker):**
| Property | DNA (Deoxyribonucleic Acid) | RNA (Ribonucleic Acid) |
|---|---|---|
| **Sugar** | β-D-2-deoxyribose | β-D-ribose |
| **Nitrogenous Bases** | Adenine (A), Guanine (G), Cytosine (C), **Thymine (T)** | Adenine (A), Guanine (G), Cytosine (C), **Uracil (U)** |
| **Structure** | Double-stranded antiparallel right-handed helix (Watson-Crick Model) | Single-stranded |
| **Base Pairing** | **A = T** (2 H-bonds) and **G ≡ C** (3 H-bonds) (Chargaff's Rule: [A]=[T], [G]=[C]) | Does not obey Chargaff's rule |
| **Function** | Permanent genetic material; self-replicating | Protein biosynthesis (mRNA, tRNA, rRNA) |

**4. Vitamins & Deficiency Diseases:**
- **Fat-Soluble Vitamins (Stored in liver and adipose tissue; excess can cause hypervitaminosis):**
  * **Vitamin A (Retinol):** Deficiency causes **Night blindness** and **Xerophthalmia** (hardening of cornea).
  * **Vitamin D (Calciferol):** Deficiency causes **Rickets** in children (soft bones) and **Osteomalacia** in adults.
  * **Vitamin E (Tocopherol):** Deficiency causes increased fragility of RBCs and muscular weakness.
  * **Vitamin K (Phylloquinone):** Deficiency causes **delayed blood clotting** / excessive bleeding.
- **Water-Soluble Vitamins (Excreted in urine; must be supplied regularly in diet):**
  * **Vitamin B1 (Thiamine):** Deficiency causes **Beriberi** (loss of appetite, retarded growth).
  * **Vitamin B2 (Riboflavin):** Deficiency causes **Cheilosis** (cracking at mouth corners) and digestive disorders.
  * **Vitamin B12 (Cobalamin):** Contains Cobalt; stored in liver; deficiency causes **Pernicious anaemia**.
  * **Vitamin C (Ascorbic Acid):** Deficiency causes **Scurvy** (bleeding gums, delayed wound healing). Cannot be stored in the body because it is water-soluble and excreted in urine.

**COMMON MISTAKE:**
- Saying that primary structure breaks during protein denaturation. The primary covalent peptide bonds (-CO-NH-) NEVER break during denaturation; only secondary, tertiary, and quaternary hydrogen and ionic bonds unfold!
- Forgetting that Glycine is the only achiral amino acid.

**KEY POINTS:**
- Sucrose is non-reducing because both anomeric carbons are engaged in glycosidic linkage.
- Vitamin C cannot be stored in the body and must be replenished daily in diet.`;
  }

  return null;
}
