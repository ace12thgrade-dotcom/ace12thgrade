// services/subjects/chemistry/pyqs2.ts
// Chapters 6 to 10 + Full Revision Question Bank & Solved Board PYQs
// Authentic recent CBSE Board questions with complete notebook-style solutions.

export function getChemistryPart2PYQs(chapterLower: string): string | null {
  // FULL REVISION / MASTER PYQ BANK
  if (
    chapterLower.includes('revision') ||
    chapterLower.includes('full') ||
    chapterLower.includes('master') ||
    chapterLower.includes('summary') ||
    chapterLower === 'c_all'
  ) {
    return `QUESTION: Q1. [5 Marks, CBSE 2024 Board Composite Master Question]
(a) An organic compound (A) with molecular formula C₈H₈O forms an orange-red precipitate with 2,4-DNP reagent and gives a yellow precipitate on heating with I₂ in the presence of NaOH. It neither reduces Tollens' or Fehling's reagent, nor does it decolourise bromine water or Baeyer's reagent. On drastic oxidation with chromic acid, it gives a carboxylic acid (B) having molecular formula C₇H₆O₂. Identify compounds (A) and (B) and write all chemical equations involved.
(b) Account for the following:
    (i) Electrophilic substitution in benzoic acid takes place at meta-position.
    (ii) Chloroacetic acid is a stronger acid than acetic acid.
SOLUTION:
**(a) Deduction of Compounds (A) and (B):**
**Step 1: Analyzing Chemical Tests for Compound (A):**
1. Molecular formula C₈H₈O with high C:H ratio indicates an aromatic ring.
2. Forms orange-red precipitate with 2,4-DNP => Contains a **Carbonyl group (>C=O)**.
3. Does NOT reduce Tollens' or Fehling's reagent => It is a **Ketone**, not an aldehyde.
4. Gives yellow precipitate on heating with I₂ and NaOH (Iodoform Test) => Contains a **Methyl Ketone group (-COCH₃)** attached to a benzene ring.
5. Does not decolourise bromine water or Baeyer's reagent => No aliphatic C=C double bond present.
6. Therefore, Compound (A) is **Acetophenone (C₆H₅COCH₃)**.
**Step 2: Analyzing Oxidation to Compound (B):**
- Oxidation of acetophenone with chromic acid (H₂CrO₄ or KMnO₄) oxidizes the methyl group to carboxylic acid, giving **Benzoic Acid (C₆H₅COOH)** (Molecular formula C₇H₆O₂).
- Therefore, Compound (B) is **Benzoic Acid**.
**Step 3: Balanced Chemical Equations:**
1. **Reaction with 2,4-DNP:**
   C₆H₅-C(CH₃)=O + H₂N-NH-C₆H₃(NO₂)₂ -> C₆H₅-C(CH₃)=N-NH-C₆H₃(NO₂)₂ (Acetophenone 2,4-dinitrophenylhydrazone, orange-red ppt) + H₂O.
2. **Iodoform Reaction:**
   C₆H₅COCH₃ + 3 I₂ + 4 NaOH -> **CHI₃↓ (Iodoform, Yellow ppt)** + C₆H₅COONa (Sodium benzoate) + 3 NaI + 3 H₂O.
3. **Oxidation to (B):**
   C₆H₅COCH₃ --[KMnO₄ / KOH, Δ followed by H₃O⁺]--> **C₆H₅COOH (Benzoic acid)**.

**(b) Scientific Reasoning:**
(i) **Meta-Directing Nature of -COOH in Benzoic Acid:**
The carboxylic group (-COOH) is a strong electron-withdrawing group due to resonance (-R / -M effect). It withdraws electron density from the benzene ring, creating positive fractional charges specifically at the *ortho* and *para* positions. Consequently, the *meta* position has comparatively higher electron density than ortho and para positions. Hence, incoming electrophiles (E⁺) attack preferentially at the **meta-position**.
(ii) **Chloroacetic Acid vs Acetic Acid Acidity:**
In chloroacetic acid (Cl-CH₂-COOH), the chlorine atom exerts a strong electron-withdrawing inductive effect (-I effect). This disperses the negative charge on the carboxylate anion (Cl-CH₂-COO⁻), stabilizing it. In acetic acid (CH₃-COOH), the methyl group is electron-donating (+I effect), which intensifies the negative charge on the acetate ion (CH₃-COO⁻), destabilizing it. Hence, chloroacetic acid releases H⁺ more readily and is a stronger acid.
**CBSE Marking Rubric:**
- 2 Marks for identifying (A) as Acetophenone and (B) as Benzoic acid.
- 1 Mark for writing correct balanced equations.
- 1 Mark for resonance explanation of meta-substitution in benzoic acid.
- 1 Mark for -I inductive stabilization in chloroacetic acid.
INSIGHT: For 'Identify A, B, C' problems, write test observations clearly in bullet steps before concluding structure.

QUESTION: Q2. [3 Marks, CBSE 2023 (Delhi)] Carry out the following organic conversions in not more than two steps:
(a) Bromobenzene to 1-Phenylethanol
(b) Aniline to Chlorobenzene
(c) Ethanol to But-1-yne
SOLUTION:
**(a) Bromobenzene to 1-Phenylethanol:**
- Step 1: Bromobenzene + Mg --[Dry Ether]--> Phenylmagnesium bromide (C₆H₅MgBr, Grignard reagent).
- Step 2: C₆H₅MgBr + CH₃CHO (Ethanal) --[H₃O⁺]--> **C₆H₅-CH(OH)-CH₃ (1-Phenylethanol)**.
**(b) Aniline to Chlorobenzene:**
- Step 1 (Diazotization): C₆H₅NH₂ + NaNO₂ + 2 HCl (273-278 K) -> C₆H₅N₂⁺Cl⁻ (Benzene diazonium chloride).
- Step 2 (Sandmeyer Reaction): C₆H₅N₂⁺Cl⁻ --[CuCl / HCl]--> **C₆H₅Cl (Chlorobenzene)** + N₂↑.
**(c) Ethanol to But-1-yne:**
- Step 1: CH₃CH₂OH + SOCl₂ --[Pyridine]--> CH₃CH₂Cl (Chloroethane) + SO₂↑ + HCl↑.
- Step 2: CH₃CH₂Cl + HC≡C⁻Na⁺ (Sodium acetylide in liquid NH₃) -> **CH₃-CH₂-C≡CH (But-1-yne)** + NaCl.
**CBSE Marking Rubric:**
- 1 Mark for each conversion with correct reagents and intermediates.
INSIGHT: Always specify temperature (0-5°C or 273-278 K) for diazotization steps.`;
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
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (56/1/3)] Which of the following alkyl halides undergoes S_N1 reaction fastest?
(A) (CH₃)₃C-Br
(B) (CH₃)₂CH-Br
(C) CH₃-CH₂-Br
(D) CH₃-Br
SOLUTION:
**Correct Answer:** (A) (CH₃)₃C-Br (tert-Butyl bromide)
**Notebook Explanation:**
The rate-determining step in an S_N1 mechanism is the heterolytic cleavage of the C-X bond to form a carbocation intermediate. Therefore, S_N1 reactivity depends directly on carbocation stability:
3° Carbocation > 2° Carbocation > 1° Carbocation > Methyl carbocation.
(CH₃)₃C-Br forms a 3° carbocation (CH₃)₃C⁺, which is highly stabilized by the +I inductive effect of three methyl groups and 9 hyperconjugative structures. Hence, it undergoes S_N1 reaction fastest.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).
INSIGHT: For S_N2, the reactivity order is reversed: Methyl > 1° > 2° > 3° due to steric hindrance.

QUESTION: Q2. [Assertion-Reason, CBSE 2023 (Delhi), 1 Mark]
Assertion (A): Chlorobenzene is less reactive than chloroethane towards nucleophilic substitution reactions.
Reason (R): In chlorobenzene, the C-Cl bond acquires partial double bond character due to resonance.
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is true but (R) is false.
(D) (A) is false but (R) is true.
SOLUTION:
**Correct Answer:** (A)
**Notebook Explanation:**
In chlorobenzene, the lone pair of electrons on the chlorine atom is delocalized over the conjugated π-system of the benzene ring through resonance. This imparts partial double bond character to the C-Cl bond (bond length is shortened to 169 pm compared to 178 pm in chloroethane), making it much stronger and more difficult to break. In chloroethane, the C-Cl bond is a pure single bond. Thus, both A and R are true, and R correctly explains A.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).

QUESTION: Q3. [2 Marks, CBSE 2023 (All India)] Explain why:
(a) Alkyl halides react with KCN to give alkyl cyanides as major product, while with AgCN they give alkyl isocyanides.
(b) Racemic mixture is optically inactive.
SOLUTION:
**(a) KCN vs AgCN Reaction:**
- **With KCN:** KCN is predominantly an **ionic compound**; in solution it dissociates to give cyanide ions [⁻:C≡N: <-> :C=N:⁻]. Cyanide is an ambident nucleophile and can attack through either carbon or nitrogen. Since C-C bond energy (347 kJ/mol) is higher than C-N bond energy (305 kJ/mol), attack occurs predominantly through the carbon atom, yielding **Alkyl Cyanide (R-CN)**.
- **With AgCN:** AgCN is predominantly a **covalent compound**. The carbon atom is covalently bonded to silver (Ag-C≡N), so only the unshared lone pair of electrons on nitrogen is available for nucleophilic attack. Hence, attack occurs via nitrogen, yielding **Alkyl Isocyanide (R-NC)** as major product.
**(b) Optical Inactivity of Racemic Mixture:**
A racemic mixture contains equimolar (50:50) amounts of two enantiomers (dextrorotatory and laevorotatory). The optical rotation caused by molecules of one enantiomer is exactly canceled out by the equal and opposite rotation caused by molecules of the other enantiomer (**External Compensation**). Hence, the net optical rotation is zero.
**CBSE Marking Rubric:**
- 1 Mark for ionic nature and C-C bond stability in KCN vs covalent nature in AgCN.
- 1 Mark for equimolar mixture and external compensation for racemic mixture.
INSIGHT: Remember: external compensation for racemic mixtures, internal compensation for meso compounds.

QUESTION: Q4. [3 Marks, CBSE 2024 (56/2/1)] An alkyl halide C₄H₉Br (A) reacts with alcoholic KOH to give an alkene (B), which on ozonolysis gives two molecules of acetaldehyde.
(a) Identify (A) and (B).
(b) Write the chemical equation for the conversion of (A) to (B) and state the rule governing this elimination.
SOLUTION:
**Step 1: Deduction of Alkene (B):**
- Alkene (B) on ozonolysis followed by Zn/H₂O reduction gives two molecules of acetaldehyde (CH₃CHO):
  CH₃-CHO + OCH-CH₃ <=(Ozonolysis)= CH₃-CH=CH-CH₃.
- Therefore, Alkene (B) is **But-2-ene**.
**Step 2: Deduction of Alkyl Halide (A):**
- Dehydrohalogenation of (A) with alcoholic KOH produces But-2-ene.
- Formula C₄H₉Br giving But-2-ene as major product is **2-Bromobutane (CH₃-CH(Br)-CH₂-CH₃)**.
**Step 3: Chemical Equation & Governing Rule:**
- Equation:
  CH₃-CH(Br)-CH₂-CH₃ + alc. KOH --[Heat]--> CH₃-CH=CH-CH₃ (But-2-ene, 81% major) + CH₃-CH₂-CH=CH₂ (But-1-ene, 19% minor) + KBr + H₂O.
- **Governing Rule (Saytzeff's / Zaitsev's Rule):**
  In dehydrohalogenation reactions, the preferred alkene is that which has the greater number of alkyl groups attached to the doubly bonded carbon atoms (the more highly substituted, thermodynamically more stable alkene).
**Final Answer:**
- (A) is **2-Bromobutane**.
- (B) is **But-2-ene**.
**CBSE Marking Rubric:**
- 1 Mark for identifying (A) and (B).
- 1 Mark for balanced chemical equation with major/minor products.
- 1 Mark for statement of Saytzeff's Rule.
INSIGHT: Ozonolysis cleavage is solved backwards: remove the two =O atoms and join the two carbons with a double bond.

QUESTION: Q5. [5 Marks Structured Problem, CBSE 2023 (Delhi)]
(a) Explain the mechanism of S_N2 reaction with suitable example and energy profile description. Why does it result in inversion of configuration?
(b) Predict the order of reactivity of the following compounds towards S_N2 displacement:
    1-Bromobutane, 2-Bromobutane, 1-Bromo-2-methylpropane, 2-Bromo-2-methylpropane.
(c) How will you convert chlorobenzene to biphenyl? Name the reaction.
SOLUTION:
**(a) Mechanism of S_N2 Reaction (e.g. Hydrolysis of Methyl Bromide):**
- **Reaction:** CH₃Br + OH⁻ -> CH₃OH + Br⁻.
- **Kinetics:** Second order: Rate = k [CH₃Br] [OH⁻].
- **Mechanism Steps:**
  1. The nucleophile (OH⁻) approaches the substrate carbon from the **backside**, exactly 180° opposite to the leaving bromine atom, to minimize electrostatic repulsion.
  2. A single, unstable **Pentavalent Transition State** is formed where the C-OH bond is partially formed and the C-Br bond is partially broken: [HO···CH₃···Br]⁻. The three C-H bonds lie in a flat plane.
  3. The leaving group (Br⁻) departs from the front face, completing the displacement.
- **Inversion of Configuration (Walden Inversion):**
  Because the nucleophile attacks exclusively from the backside, the spatial arrangement of the remaining three substituents flips to the opposite side, similar to an umbrella being blown inside out by a strong wind. If the starting alkyl halide is optically active, 100% inversion of optical configuration occurs.

**(b) Reactivity Order towards S_N2:**
- S_N2 reactivity is governed strictly by **steric hindrance** around the reaction center:
  **1-Bromobutane > 1-Bromo-2-methylpropane > 2-Bromobutane > 2-Bromo-2-methylpropane**.
  *Reason:* 1-Bromobutane is an unhindered primary halide (1°). 1-Bromo-2-methylpropane is 1° with a β-methyl branch. 2-Bromobutane is secondary (2°). 2-Bromo-2-methylpropane is tertiary (3°), where three bulky methyl groups completely block backside nucleophilic attack.

**(c) Conversion of Chlorobenzene to Biphenyl:**
- Reagents: Two molecules of chlorobenzene heated with metallic sodium in dry ether:
  2 C₆H₅Cl + 2 Na --[Dry Ether]--> **C₆H₅-C₆H₅ (Biphenyl / Diphenyl)** + 2 NaCl.
- **Name of Reaction:** **Fittig Reaction**.
**CBSE Marking Rubric:**
- 2 Marks for S_N2 mechanism with transition state and Walden inversion explanation.
- 1.5 Marks for correct S_N2 reactivity order with steric reasoning.
- 1.5 Marks for Fittig reaction equation and naming.
INSIGHT: Wurtz is for alkyl halides, Fittig for aryl halides, Wurtz-Fittig for a mixture of alkyl and aryl halides.`;
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
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (56/2/2)] An organic compound with molecular formula C₄H₁₀O gives instant turbidity with Lucas reagent at room temperature. The compound is:
(A) Butan-1-ol
(B) Butan-2-ol
(C) 2-Methylpropan-2-ol
(D) 2-Methylpropan-1-ol
SOLUTION:
**Correct Answer:** (C) 2-Methylpropan-2-ol (tert-Butyl alcohol)
**Notebook Explanation:**
Lucas reagent is a solution of concentrated HCl and anhydrous ZnCl₂.
- 3° Alcohols react immediately to give insoluble alkyl chloride causing instant turbidity.
- 2° Alcohols produce turbidity in about 5 minutes.
- 1° Alcohols do not produce turbidity at room temperature.
Among the options, 2-Methylpropan-2-ol, (CH₃)₃C-OH, is a tertiary (3°) alcohol. Hence, it gives instant turbidity.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (C).
INSIGHT: Lucas test is based on carbocation stability (3° > 2° > 1°).

QUESTION: Q2. [Assertion-Reason, CBSE 2023 (Delhi), 1 Mark]
Assertion (A): Phenol is more acidic than ethanol.
Reason (R): Phenoxide ion is stabilized by resonance, whereas ethoxide ion is not stabilized by resonance.
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is true but (R) is false.
(D) (A) is false but (R) is true.
SOLUTION:
**Correct Answer:** (A)
**Notebook Explanation:**
When phenol loses a proton (H⁺), it forms a phenoxide ion (C₆H₅O⁻). The negative charge on the oxygen atom is delocalized over the ortho and para positions of the aromatic ring through five resonance structures, stabilizing the phenoxide ion.
In ethanol (C₂H₅OH), the ethoxide ion (C₂H₅O⁻) formed has no resonance stabilization; furthermore, the ethyl group exerts an electron-releasing (+I) inductive effect that intensifies the negative charge on oxygen, destabilizing it. Hence, phenol releases H⁺ much more readily than ethanol. Thus, both A and R are true, and R correctly explains A.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).

QUESTION: Q3. [2 Marks, CBSE 2024 (56/1/3)] Write the mechanism of acid-catalyzed dehydration of ethanol to yield ethene at 443 K.
SOLUTION:
**Step 1: Protonation of Alcohol to Form Oxonium Ion (Fast step):**
CH₃-CH₂-OH + H⁺ <=> CH₃-CH₂-O⁺H₂  (Protonated ethanol / Ethyloxonium ion).
**Step 2: Formation of Carbocation (Slow, Rate-Determining Step):**
CH₃-CH₂-O⁺H₂ --[Slow, -H₂O]--> CH₃-CH₂⁺ (Ethyl carbocation).
**Step 3: Elimination of a Proton to Form Alkene (Fast step):**
CH₃-CH₂⁺ --[-H⁺]--> CH₂=CH₂ (Ethene). The regenerated H⁺ acts as a catalyst.
**CBSE Marking Rubric:**
- 0.5 Mark for protonation step.
- 1 Mark for formation of carbocation (slow step).
- 0.5 Mark for deprotonation to alkene.
INSIGHT: At 413 K with excess ethanol, the reaction forms diethyl ether (C₂H₅-O-C₂H₅) via S_N2 mechanism.

QUESTION: Q4. [3 Marks, CBSE 2023 (All India)] Write equations and conditions for the following named reactions:
(a) Reimer-Tiemann Reaction
(b) Kolbe's Reaction
(c) Williamson Ether Synthesis
SOLUTION:
**(a) Reimer-Tiemann Reaction:**
Phenol heated with chloroform (CHCl₃) in aqueous NaOH at 340 K, followed by acid hydrolysis, yields **Salicylaldehyde (2-hydroxybenzaldehyde)**:
C₆H₅OH + CHCl₃ + 3 NaOH (340 K) -> Intermediate [-ONa, -CHCl₂] --[H⁺]--> **o-HOC₆H₄CHO (Salicylaldehyde)** + 3 NaCl + 2 H₂O.
(The active electrophile is Dichlorocarbene, :CCl₂).
**(b) Kolbe's Reaction:**
Phenol treated with sodium hydroxide forms sodium phenoxide, which reacts with carbon dioxide (CO₂) at 400 K under 4-7 atm pressure, followed by acidification to produce **Salicylic Acid (2-hydroxybenzoic acid)**:
C₆H₅OH + NaOH -> C₆H₅ONa + CO₂ (400 K, 4-7 atm) -> o-HOC₆H₄COONa --[H⁺]--> **o-HOC₆H₄COOH (Salicylic acid)**.
**(c) Williamson Ether Synthesis:**
An alkyl halide reacts with sodium alkoxide to form an ether:
CH₃CH₂-Br + CH₃CH₂-O⁻Na⁺ -> **CH₃CH₂-O-CH₂CH₃ (Diethyl ether)** + NaBr.
(Follows S_N2 mechanism; alkyl halide must be 1°).
**CBSE Marking Rubric:**
- 1 Mark for each named reaction with balanced equation and reagents.
INSIGHT: Salicylic acid on acetylation with acetic anhydride forms Aspirin (acetylsalicylic acid).

QUESTION: Q5. [5 Marks Structured Problem, CBSE 2024 (56/3/2)]
(a) Explain the reaction mechanism when anisole (methoxybenzene) is heated with concentrated HI. Name the products.
(b) Predict the products when the following ether is cleaved with one equivalent of HI:
    (CH₃)₃C-O-CH₃ + HI ->
(c) How will you convert:
    (i) Propene to Propan-1-ol
    (ii) Cumene to Phenol?
SOLUTION:
**(a) Cleavage of Anisole with HI:**
- **Reaction:** C₆H₅-O-CH₃ + HI --[Heat]--> **Phenol (C₆H₅OH) + Methyl Iodide (CH₃I)**.
- **Mechanism:**
  1. Protonation of ether: The ether oxygen is protonated by H⁺ from HI to form an oxonium ion: C₆H₅-O⁺(H)-CH₃.
  2. Nucleophilic attack by I⁻: In this protonated species, the phenyl C-O bond possesses partial double bond character due to resonance with the benzene ring, making it extremely strong. In contrast, the methyl C-O bond is a weaker single bond. Therefore, iodide ion (I⁻) attacks the less hindered methyl carbon via an S_N2 displacement, cleaving the methyl C-O bond.
  3. Products formed: **Phenol** and **Methyl Iodide (Iodomethane)**. Phenol does not react further with HI because the sp² C-OH bond cannot be nucleophilically substituted.

**(b) Cleavage of tert-Butyl Methyl Ether with HI:**
- (CH₃)₃C-O-CH₃ + HI -> **(CH₃)₃C-I (tert-Butyl iodide) + CH₃OH (Methanol)**.
- *Reason:* When one of the alkyl groups is tertiary (3°), the reaction proceeds via an **S_N1 mechanism**. The protonated ether dissociates to form a highly stable 3° carbocation (CH₃)₃C⁺, which then combines with I⁻ to give tert-butyl iodide.

**(c) Conversions:**
(i) **Propene to Propan-1-ol (Anti-Markovnikov hydration):**
    Use **Hydroboration-Oxidation**:
    6 CH₃-CH=CH₂ + B₂H₆ -> 2 (CH₃CH₂CH₂)₃B --[H₂O₂ / OH⁻]--> **6 CH₃-CH₂-CH₂-OH (Propan-1-ol)** + 2 H₃BO₃.
(ii) **Cumene to Phenol (Industrial process):**
    Step 1: Cumene (Isopropylbenzene) is oxidized with atmospheric O₂ to form Cumene Hydroperoxide:
    C₆H₅-CH(CH₃)₂ + O₂ -> C₆H₅-C(CH₃)₂-O-O-H.
    Step 2: Cumene hydroperoxide is treated with dilute H₂SO₄ to yield **Phenol + Acetone**:
    C₆H₅-C(CH₃)₂-O-O-H --[dil. H₂SO₄]--> **C₆H₅OH (Phenol) + CH₃COCH₃ (Acetone)**.
**CBSE Marking Rubric:**
- 2 Marks for anisole mechanism with partial double bond justification.
- 1 Mark for tert-butyl iodide product with S_N1 carbocation reasoning.
- 1 Mark for hydroboration-oxidation of propene.
- 1 Mark for cumene process equations.
INSIGHT: For ethers, if a 3° alkyl group is present, the 3° group forms the halide (S_N1). If only 1° and 2° groups are present, the smaller alkyl group forms the halide (S_N2).`;
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
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (56/1/1)] Which of the following compounds will undergo Cannizzaro reaction?
(A) CH₃CHO
(B) CH₃CH₂CHO
(C) (CH₃)₃C-CHO
(D) CH₃COCH₃
SOLUTION:
**Correct Answer:** (C) (CH₃)₃C-CHO (2,2-Dimethylpropanal / Pivalaldehyde)
**Notebook Explanation:**
The Cannizzaro reaction is given exclusively by aldehydes that contain **NO α-hydrogen atoms** when heated with concentrated alkali (50% NaOH/KOH).
- In CH₃CHO, there are 3 α-hydrogens (undergoes Aldol).
- In CH₃CH₂CHO, there are 2 α-hydrogens (undergoes Aldol).
- In CH₃COCH₃, there are 6 α-hydrogens (undergoes Aldol).
- In (CH₃)₃C-CHO, the carbon adjacent to the -CHO group is bonded to three methyl groups and has zero hydrogen atoms (no α-hydrogen). Hence, it undergoes the Cannizzaro reaction (disproportionation into (CH₃)₃C-CH₂OH and (CH₃)₃C-COONa).
**CBSE Marking Rubric:**
- 1 Mark for selecting option (C).
INSIGHT: Benzaldehyde (C₆H₅CHO) and Formaldehyde (HCHO) also undergo Cannizzaro reaction.

QUESTION: Q2. [Assertion-Reason, CBSE 2023 (Delhi), 1 Mark]
Assertion (A): Aldehydes are generally more reactive than ketones towards nucleophilic addition reactions.
Reason (R): Ketones have two electron-releasing alkyl groups that reduce the electrophilicity of the carbonyl carbon and cause steric hindrance.
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is true but (R) is false.
(D) (A) is false but (R) is true.
SOLUTION:
**Correct Answer:** (A)
**Notebook Explanation:**
In aldehydes, there is only one alkyl group (or none in formaldehyde) attached to the carbonyl carbon, whereas ketones have two alkyl groups.
1. **Electronic Factor:** Alkyl groups exert an electron-donating (+I) inductive effect. Two alkyl groups in ketones neutralize the positive charge on the carbonyl carbon to a greater extent than in aldehydes, making the carbonyl carbon in ketones less electrophilic.
2. **Steric Factor:** Two bulky alkyl groups in ketones crowd the carbonyl carbon, hindering the approach of the incoming nucleophile.
Thus, both A and R are true, and R correctly explains A.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).

QUESTION: Q3. [2 Marks, CBSE 2023 (All India)] How will you distinguish chemically between the following pairs of compounds? Give one diagnostic test and observable observation:
(a) Acetaldehyde (Ethanal) and Benzaldehyde
(b) Pentan-2-one and Pentan-3-one
SOLUTION:
**(a) Ethanal and Benzaldehyde:**
- **Fehling's Test:** Warm each compound with Fehling's solution (Fehling A + B).
  - Ethanal (an aliphatic aldehyde) gives a **red-brown precipitate of Cu₂O**:
    CH₃CHO + 2 Cu²⁺ + 5 OH⁻ -> CH₃COO⁻ + Cu₂O↓ (Red) + 3 H₂O.
  - Benzaldehyde (an aromatic aldehyde) does NOT reduce Fehling's solution (no red precipitate).
  *(Alternative: Iodoform test; Ethanal gives yellow ppt of CHI₃, Benzaldehyde does not).*
**(b) Pentan-2-one and Pentan-3-one:**
- **Iodoform Test:** Warm each compound with iodine and aqueous sodium hydroxide (I₂ + NaOH).
  - Pentan-2-one contains a methyl ketone group (**CH₃-C=O**), so it gives a **yellow crystalline precipitate of Iodoform (CHI₃)** with a characteristic antiseptic smell:
    CH₃COCH₂CH₂CH₃ + 3 I₂ + 4 NaOH -> **CHI₃↓ (Yellow)** + CH₃CH₂CH₂COONa + 3 NaI + 3 H₂O.
  - Pentan-3-one (CH₃CH₂COCH₂CH₃) does not contain a methyl ketone group and gives NO yellow precipitate.
**CBSE Marking Rubric:**
- 1 Mark for Ethanal vs Benzaldehyde test with observation.
- 1 Mark for Pentan-2-one vs Pentan-3-one test with observation.
INSIGHT: Both aldehydes give Tollens' test, so Tollens' cannot distinguish Ethanal from Benzaldehyde.

QUESTION: Q4. [3 Marks, CBSE 2024 (56/1/2)] Write the chemical equations and reaction conditions for:
(a) Clemmensen Reduction
(b) Wolff-Kishner Reduction
(c) Hell-Volhard-Zelinsky (HVZ) Reaction
SOLUTION:
**(a) Clemmensen Reduction:**
The carbonyl group of aldehydes and ketones is reduced to a methylene (-CH₂-) group by heating with **Zinc amalgam (Zn-Hg) and concentrated hydrochloric acid (HCl)**:
CH₃-CO-CH₃ + Zn(Hg) + 4 HCl -> **CH₃-CH₂-CH₃ (Propane)** + ZnCl₂ + Hg + H₂O.
**(b) Wolff-Kishner Reduction:**
The carbonyl group is reduced to a methylene group by reacting with **Hydrazine (NH₂NH₂)** followed by heating with **KOH in high-boiling ethylene glycol**:
CH₃-CHO + NH₂NH₂ -> CH₃-CH=N-NH₂ --[KOH / Ethylene glycol, Δ]--> **CH₃-CH₃ (Ethane)** + N₂↑.
**(c) Hell-Volhard-Zelinsky (HVZ) Reaction:**
Carboxylic acids having an α-hydrogen react with chlorine or bromine in the presence of a small amount of **red phosphorus** to give α-halocarboxylic acids:
CH₃-CH₂-COOH + Br₂ / Red P --[H₂O]--> **CH₃-CH(Br)-COOH (2-Bromopropanoic acid)** + HBr.
**CBSE Marking Rubric:**
- 1 Mark for each reaction with correct reagents and balanced equation.
INSIGHT: Clemmensen is for acid-stable molecules; Wolff-Kishner is for base-stable molecules.

QUESTION: Q5. [5 Marks Structured Problem, CBSE 2024 (56/2/3)]
(a) Write the step-by-step mechanism of Aldol Condensation between two molecules of ethanal in presence of dilute NaOH.
(b) Arrange the following compounds in increasing order of their acidic strength:
    Benzoic acid, 4-Nitrobenzoic acid, 4-Methoxybenzoic acid, 4-Methylbenzoic acid.
(c) Complete the following reactions:
    (i) C₆H₅CHO + H₂N-NH-C₆H₅ ->
    (ii) CH₃-COCl + H₂ --[Pd-BaSO₄ / Quinoline]-->
SOLUTION:
**(a) Mechanism of Aldol Condensation:**
- Overall Reaction: 2 CH₃CHO --[dil. NaOH]--> CH₃-CH(OH)-CH₂-CHO --[Δ, -H₂O]--> **CH₃-CH=CH-CHO (But-2-enal)**.
- **Step 1: Generation of Enolate Ion (Nucleophile):**
  The hydroxide ion (OH⁻) abstracts an acidic α-hydrogen from one ethanal molecule to generate a resonance-stabilized enolate carbanion:
  OH⁻ + H-CH₂-CHO <=> H₂O + [⁻:CH₂-CHO <-> CH₂=CH-O⁻].
- **Step 2: Nucleophilic Addition:**
  The enolate carbanion attacks the electrophilic carbonyl carbon of a second ethanal molecule:
  CH₃-C(=O)H + ⁻:CH₂-CHO -> CH₃-CH(O⁻)-CH₂-CHO (Alkoxide intermediate).
- **Step 3: Proton Transfer:**
  The alkoxide intermediate abstracts a proton from water to form **3-Hydroxybutanal (Aldol)**:
  CH₃-CH(O⁻)-CH₂-CHO + H₂O -> **CH₃-CH(OH)-CH₂-CHO** + OH⁻.
- **Step 4: Dehydration (on heating):**
  Heating removes a molecule of water to produce conjugated **But-2-enal (Crotonaldehyde)**:
  CH₃-CH(OH)-CH₂-CHO --[Δ, -H₂O]--> **CH₃-CH=CH-CHO**.

**(b) Acidic Strength Order:**
**4-Methoxybenzoic acid < 4-Methylbenzoic acid < Benzoic acid < 4-Nitrobenzoic acid**.
*Scientific Reasoning:*
- The -NO₂ group is a strong electron-withdrawing group (-M and -I effect), which disperses the negative charge of the carboxylate ion, stabilizing it and greatly increasing acidity.
- The -OCH₃ group is an electron-donating group (+M effect dominates over -I effect at para position), which destabilizes the carboxylate ion and reduces acidity.
- The -CH₃ group donates electron density (+I and hyperconjugation), decreasing acidity relative to unsubstituted benzoic acid.

**(c) Completed Reactions:**
(i) C₆H₅CHO + H₂N-NH-C₆H₅ -> **C₆H₅-CH=N-NH-C₆H₅ (Benzaldehyde phenylhydrazone)** + H₂O.
(ii) CH₃-COCl + H₂ --[Pd-BaSO₄ / Quinoline]--> **CH₃-CHO (Ethanal / Acetaldehyde)** + HCl. (Rosenmund Reduction).
**CBSE Marking Rubric:**
- 2 Marks for step-by-step aldol mechanism with enolate carbanion.
- 1.5 Marks for acidic strength order with resonance/inductive reasoning.
- 1.5 Marks for correct reaction products (phenylhydrazone and ethanal).
INSIGHT: In Rosenmund reduction, poisoned Pd-BaSO₄ prevents further reduction of aldehyde to alcohol.`;
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
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (56/3/1)] The correct order of basic strength of methyl-substituted amines in aqueous solution is:
(A) (CH₃)₃N > (CH₃)₂NH > CH₃NH₂ > NH₃
(B) (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃
(C) CH₃NH₂ > (CH₃)₂NH > (CH₃)₃N > NH₃
(D) (CH₃)₃N > CH₃NH₂ > (CH₃)₂NH > NH₃
SOLUTION:
**Correct Answer:** (B) (CH₃)₂NH > CH₃NH₂ > (CH₃)₃N > NH₃  (Order: 2° > 1° > 3° > NH₃)
**Notebook Explanation:**
In aqueous solution, the basicity of aliphatic amines is determined by the combined interplay of three distinct factors:
1. **+I Inductive Effect:** Increases basicity with more alkyl groups: 3° > 2° > 1°.
2. **Solvation Effect (Hydration of substituted ammonium cation by H-bonding):** Greater number of hydrogens allows better hydration, stabilizing the cation: 1° > 2° > 3°.
3. **Steric Hindrance:** Crowding by bulky alkyl groups opposes protonation: 1° > 2° > 3°.
For small methyl groups, the delicate balance of these three forces results in the order: **(CH₃)₂NH (2°) > CH₃NH₂ (1°) > (CH₃)₃N (3°) > NH₃**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).
INSIGHT: For ethyl-substituted amines, the order is 2° > 3° > 1°: (C₂H₅)₂NH > (C₂H₅)₃N > C₂H₅NH₂ > NH₃.

QUESTION: Q2. [Assertion-Reason, CBSE 2023 (All India), 1 Mark]
Assertion (A): Gabriel Phthalimide synthesis cannot be used for the preparation of aromatic primary amines like aniline.
Reason (R): Aryl halides do not undergo nucleophilic substitution with the phthalimide anion under normal conditions.
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is true but (R) is false.
(D) (A) is false but (R) is true.
SOLUTION:
**Correct Answer:** (A)
**Notebook Explanation:**
In Gabriel Phthalimide synthesis, potassium phthalimide reacts with an alkyl halide (R-X) via an S_N2 nucleophilic substitution to form N-alkylphthalimide. However, when an aryl halide (such as chlorobenzene) is used, nucleophilic substitution does not occur because the C-X bond possesses partial double bond character due to resonance with the benzene ring and steric/electronic repulsion prevents attack by the bulky phthalimide anion. Hence, aromatic primary amines cannot be prepared. Thus, both A and R are true, and R correctly explains A.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).

QUESTION: Q3. [2 Marks, CBSE 2024 (56/1/2)] How will you distinguish between the following pairs of amines using Hinsberg's reagent (Benzenesulphonyl chloride, C₆H₅SO₂Cl)?
(a) Ethylamine (1°) and Diethylamine (2°)
(b) Diethylamine (2°) and Triethylamine (3°)
SOLUTION:
**(a) Ethylamine (1°) vs Diethylamine (2°):**
- **Ethylamine (CH₃CH₂NH₂):** Reacts with C₆H₅SO₂Cl to form N-ethylbenzenesulphonamide (C₆H₅SO₂NHCH₂CH₃). Because it still possesses an acidic hydrogen on the nitrogen atom, this product is **SOLUBLE in aqueous potassium hydroxide (KOH)**.
- **Diethylamine ((CH₃CH₂)$_2$NH):** Reacts to form N,N-diethylbenzenesulphonamide (C₆H₅SO₂N(CH₂CH₃)₂). Because it has NO acidic hydrogen attached to nitrogen, it is **INSOLUBLE in aqueous KOH**.
**(b) Diethylamine (2°) vs Triethylamine (3°):**
- **Diethylamine (2°):** Reacts with Hinsberg's reagent to form a clear precipitate (insoluble in KOH).
- **Triethylamine ((CH₃CH₂)$_3$N, 3°):** Has no replaceable hydrogen on nitrogen, so it **DOES NOT REACT** with benzenesulphonyl chloride at all.
**CBSE Marking Rubric:**
- 1 Mark for 1° (soluble in KOH) vs 2° (insoluble in KOH).
- 1 Mark for 2° (reacts) vs 3° (no reaction).
INSIGHT: Modern Hinsberg test also uses p-toluenesulphonyl chloride.

QUESTION: Q4. [3 Marks, CBSE 2023 (Delhi)] Account for the following observations:
(a) Aniline does not undergo Friedel-Crafts reaction.
(b) Although -NH₂ group is ortho/para-directing in aromatic electrophilic substitution, direct nitration of aniline yields 47% meta-nitroaniline.
(c) Primary aliphatic amines have higher boiling points than tertiary amines of comparable molecular mass.
SOLUTION:
**(a) Aniline and Friedel-Crafts Reaction:**
Friedel-Crafts alkylation or acylation requires a Lewis acid catalyst (anhydrous AlCl₃). Aniline is a Lewis base containing a lone pair of electrons on nitrogen. Instead of catalyzing the reaction with alkyl/acyl halide, anhydrous AlCl₃ reacts directly with the basic -NH₂ group of aniline to form an insoluble coordinate complex: C₆H₅NH₂···AlCl₃. This complex introduces a strong positive charge on nitrogen, strongly deactivating the benzene ring towards electrophilic attack.
**(b) Formation of 47% meta-Nitroaniline:**
Nitration is carried out in a strongly acidic mixture of concentrated HNO₃ and concentrated H₂SO₄. In this strongly acidic medium, aniline undergoes protonation to form the **Anilinium ion (C₆H₅NH₃⁺)**:
C₆H₅NH₂ + H⁺ <=> C₆H₅NH₃⁺.
The -NH₃⁺ group is a very strong electron-withdrawing and **meta-directing group**. Therefore, electrophilic nitration of the anilinium ion occurs predominantly at the meta position, resulting in 47% meta-nitroaniline (along with 51% p-nitroaniline and 2% o-nitroaniline).
**(c) Boiling Points of 1° vs 3° Amines:**
Primary amines (R-NH₂) have two hydrogen atoms bonded to nitrogen, allowing extensive intermolecular hydrogen bonding between molecules. Tertiary amines (R₃N) have no hydrogen atom attached to nitrogen, so they cannot form intermolecular hydrogen bonds with each other. Hence, 1° amines have significantly higher boiling points.
**CBSE Marking Rubric:**
- 1 Mark for AlCl₃ complex formation explanation.
- 1 Mark for anilinium ion formation and meta-direction.
- 1 Mark for presence of intermolecular H-bonds in 1° vs absence in 3°.
INSIGHT: To obtain p-nitroaniline exclusively, protect the -NH₂ group first by acetylation with acetic anhydride.

QUESTION: Q5. [5 Marks Structured Problem, CBSE 2024 (56/3/1)]
(a) Write the chemical equations for the preparation of pure 1° amine by Hoffmann Bromamide Degradation reaction. Explain why it is called a 'degradation' reaction.
(b) An organic compound (A) on treatment with aqueous ammonia and heating forms compound (B). Compound (B) on heating with Br₂ and KOH forms compound (C) with molecular formula C₆H₇N. Identify (A), (B), and (C) and write all reactions involved.
(c) How will you convert Aniline to Phenol via diazonium salt?
SOLUTION:
**(a) Hoffmann Bromamide Degradation:**
- **Equation:**
  R-CONH₂ + Br₂ + 4 KOH -> **R-NH₂ + K₂CO₃ + 2 KBr + 2 H₂O**.
  Example: CH₃-CONH₂ (Ethanamide) + Br₂ + 4 KOH -> **CH₃-NH₂ (Methanamine)** + K₂CO₃ + 2 KBr + 2 H₂O.
- **Why Called 'Degradation':**
  The primary amine formed contains **ONE CARBON ATOM LESS** than the parent acid amide (the carbonyl carbon is eliminated as carbonate, K₂CO₃). Hence, the carbon chain is degraded/stepped down.

**(b) Identification of (A), (B), and (C):**
**Step 1: Identifying Compound (C):**
- Molecular formula C₆H₇N corresponds to **Aniline (C₆H₅NH₂)**.
**Step 2: Identifying Compound (B):**
- Compound (B) undergoes Hoffmann Bromamide degradation (Br₂ + KOH) to yield Aniline (C₆H₅NH₂).
- Since Hoffmann degradation removes one carbonyl carbon, Compound (B) must be **Benzamide (C₆H₅CONH₂)**.
**Step 3: Identifying Compound (A):**
- Compound (A) on heating with aqueous ammonia gives Benzamide (B).
- Therefore, Compound (A) is **Benzoic Acid (C₆H₅COOH)**.
**Step 4: Balanced Chemical Reactions:**
1. C₆H₅COOH (A) + NH₃ <=> C₆H₅COONH₄ --[Heat, -H₂O]--> **C₆H₅CONH₂ (B, Benzamide)**.
2. C₆H₅CONH₂ (B) + Br₂ + 4 KOH --[Heat]--> **C₆H₅NH₂ (C, Aniline)** + K₂CO₃ + 2 KBr + 2 H₂O.
**Final Identification:**
- (A) = **Benzoic Acid**
- (B) = **Benzamide**
- (C) = **Aniline**.

**(c) Conversion of Aniline to Phenol:**
- Step 1 (Diazotization): Aniline dissolved in cold dil. HCl is treated with NaNO₂ at 273-278 K (0-5 °C):
  C₆H₅NH₂ + NaNO₂ + 2 HCl (273-278 K) -> **C₆H₅N₂⁺Cl⁻ (Benzene diazonium chloride)** + NaCl + 2 H₂O.
- Step 2 (Hydrolysis): The diazonium salt solution is warmed with water:
  C₆H₅N₂⁺Cl⁻ + H₂O --[Warm / dil. H₂SO₄]--> **C₆H₅OH (Phenol)** + N₂↑ + HCl.
**CBSE Marking Rubric:**
- 1.5 Marks for Hoffmann degradation equation and step-down explanation.
- 2 Marks for identifying A, B, C with balanced equations.
- 1.5 Marks for diazotization and warm hydrolysis to phenol.
INSIGHT: Hoffmann bromamide is the most versatile step-down conversion reagent in Class 12 organic chemistry.`;
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
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (56/1/3)] Which of the following standard α-amino acids is optically inactive?
(A) Alanine
(B) Valine
(C) Glycine
(D) Leucine
SOLUTION:
**Correct Answer:** (C) Glycine
**Notebook Explanation:**
An organic molecule is optically active if it contains at least one asymmetric (chiral) carbon atom bonded to four distinctly different atoms or groups.
The structure of Glycine is H₂N-CH₂-COOH. The α-carbon is bonded to two identical hydrogen atoms (-H and -H), an amino group (-NH₂), and a carboxyl group (-COOH). Because it lacks an asymmetric carbon, glycine possesses a plane of symmetry and is optically inactive. All other 19 standard amino acids have a chiral α-carbon and are optically active.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (C).
INSIGHT: All other naturally occurring amino acids have the L-configuration.

QUESTION: Q2. [Assertion-Reason, CBSE 2023 (Delhi), 1 Mark]
Assertion (A): During the denaturation of proteins, the primary structure remains completely intact.
Reason (R): Denaturation disrupts hydrogen bonds and hydrophobic interactions without breaking the covalent peptide bonds.
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is true but (R) is false.
(D) (A) is false but (R) is true.
SOLUTION:
**Correct Answer:** (A)
**Notebook Explanation:**
Denaturation of a protein is caused by physical factors (heat) or chemical changes (pH alteration). These changes rupture the relatively weak non-covalent interactions (hydrogen bonds, ionic bonds, and van der Waals forces) that stabilize the secondary, tertiary, and quaternary structures, causing the protein globule to unfold. However, the strong covalent peptide bonds (-CO-NH-) linking amino acids together in the primary sequence require enzymatic cleavage or strong acid hydrolysis to break. Therefore, the primary structure remains completely intact. Thus, both A and R are true, and R correctly explains A.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).

QUESTION: Q3. [2 Marks, CBSE 2024 (56/2/1)] Write the chemical reactions of D-glucose with:
(a) Bromine water (Br₂ / H₂O)
(b) Concentrated Nitric Acid (Conc. HNO₃)
What do these reactions prove about the structure of glucose?
SOLUTION:
**(a) Reaction with Bromine Water (Mild Oxidizing Agent):**
- Reaction:
  CHO-(CHOH)₄-CH₂OH + [O] --[Br₂ / H₂O]--> **COOH-(CHOH)₄-CH₂OH (Gluconic Acid)**.
- **Structural Proof:** Bromine water is a mild oxidant that oxidizes aldehydes but does not oxidize ketones or alcohols. The formation of gluconic acid (having the same number of 6 carbons) proves that the carbonyl group in glucose is an **Aldehyde group (-CHO)**.
**(b) Reaction with Concentrated Nitric Acid (Strong Oxidizing Agent):**
- Reaction:
  CHO-(CHOH)₄-CH₂OH + 3 [O] --[Conc. HNO₃]--> **COOH-(CHOH)₄-COOH (Saccharic Acid / Glucaric Acid)**.
- **Structural Proof:** Nitric acid oxidizes both the terminal aldehyde group (-CHO) and the terminal primary alcohol group (-CH₂OH) to carboxylic acid (-COOH). The formation of a dicarboxylic acid (saccharic acid) proves the presence of **one Primary Alcohol group (-CH₂OH)** at C-6.
**CBSE Marking Rubric:**
- 1 Mark for Bromine water equation and proof of aldehyde (-CHO).
- 1 Mark for Conc. HNO₃ equation and proof of primary alcohol (-CH₂OH).
INSIGHT: Glucose + HI on heating gives n-hexane, proving 6 carbons in a straight chain.

QUESTION: Q4. [3 Marks, CBSE 2023 (All India)] Differentiate between the following:
(a) Globular proteins and Fibrous proteins (two points)
(b) DNA and RNA (two points)
(c) Reducing and Non-reducing sugars (with examples)
SOLUTION:
**(a) Globular Proteins vs Fibrous Proteins:**
1. **Shape:** Fibrous proteins consist of parallel, elongated polypeptide chains running like fibers (e.g. Keratin in hair, Myosin in muscle). Globular proteins have polypeptide chains folded into a compact spherical shape (e.g. Insulin, Hemoglobin).
2. **Solubility:** Fibrous proteins are insoluble in water; Globular proteins are soluble in water.
**(b) DNA vs RNA:**
1. **Sugar:** DNA contains **β-D-2-deoxyribose** sugar; RNA contains **β-D-ribose** sugar.
2. **Nitrogenous Base:** DNA contains **Thymine (T)** (along with A, G, C); RNA contains **Uracil (U)** (along with A, G, C).
3. **Strandedness:** DNA is double-stranded; RNA is single-stranded.
**(c) Reducing vs Non-Reducing Sugars:**
- **Reducing Sugars:** Carbohydrates that contain free hemiacetal/aldehyde or hemiketal/ketone groups capable of reducing Tollens' reagent and Fehling's solution. Examples: Glucose, Fructose, Maltose, Lactose.
- **Non-Reducing Sugars:** Carbohydrates in which the reducing functional groups (anomeric carbons) are engaged in glycosidic bond formation, so they cannot reduce Tollens' or Fehling's solution. Example: **Sucrose**.
**CBSE Marking Rubric:**
- 1 Mark for globular vs fibrous.
- 1 Mark for DNA vs RNA.
- 1 Mark for reducing vs non-reducing.
INSIGHT: Maltose is a reducing disaccharide, while sucrose is non-reducing.

QUESTION: Q5. [5 Marks Structured Problem, CBSE 2024 (56/3/2)]
(a) What is meant by:
    (i) Peptide linkage
    (ii) Zwitterion
    (iii) Inversion of cane sugar?
(b) Name the deficiency diseases caused by lack of:
    (i) Vitamin A
    (ii) Vitamin B1
    (iii) Vitamin C
    (iv) Vitamin D
(c) Why cannot Vitamin C be stored in the human body?
SOLUTION:
**(a) Fundamental Definitions:**
(i) **Peptide Linkage:**
An amide covalent bond (-CO-NH-) formed between the carboxyl group (-COOH) of one α-amino acid and the amino group (-NH₂) of another α-amino acid with the elimination of a molecule of water.
(ii) **Zwitterion (Dipolar Ion):**
In aqueous solution, the carboxyl group (-COOH) of an amino acid loses a proton (acting as acid) and the amino group (-NH₂) captures that proton (acting as base). This produces an internal dipolar ion bearing both positive and negative formal charges: **H₃N⁺-CH(R)-COO⁻**. Although charged, the zwitterion is electrically neutral overall.
(iii) **Inversion of Cane Sugar:**
Sucrose is naturally dextrorotatory (+66.5°). On hydrolysis with dilute acid or invertase enzyme, it breaks down into an equimolar mixture of D-(+)-glucose (+52.5°) and D-(-)-fructose (-92.4°). Because the laevorotation of fructose (-92.4°) is greater than the dextrorotation of glucose (+52.5°), the overall sign of optical rotation changes from dextro (+) to laevo (-). Hence, this process is called the **Inversion of Cane Sugar**, and the resulting equimolar mixture is known as **Invert Sugar**.

**(b) Vitamins & Deficiency Diseases:**
(i) **Vitamin A (Retinol):** Causes **Night Blindness** and **Xerophthalmia** (hardening of cornea).
(ii) **Vitamin B1 (Thiamine):** Causes **Beriberi** (loss of appetite, muscular weakness).
(iii) **Vitamin C (Ascorbic Acid):** Causes **Scurvy** (bleeding gums, skin spots).
(iv) **Vitamin D (Calciferol):** Causes **Rickets** in children (bone deformities) and **Osteomalacia** in adults.

**(c) Why Vitamin C Cannot Be Stored:**
Vitamin C (ascorbic acid) is a **water-soluble vitamin**. Unlike fat-soluble vitamins (A, D, E, K) which dissolve in lipids and are stored in the liver and adipose tissues, water-soluble vitamins dissolve readily in body fluids and are continually excreted in urine. Because the human body cannot synthesize or store it, vitamin C must be replenished regularly through daily dietary intake (citrus fruits, amla, tomatoes).
**CBSE Marking Rubric:**
- 2 Marks for peptide linkage, zwitterion, and inversion of cane sugar.
- 2 Marks for the four vitamin deficiency diseases.
- 1 Mark for water solubility and excretion in urine explanation of Vitamin C.
INSIGHT: Vitamin B12 is the only water-soluble vitamin that is stored in the liver for several months.`;
  }

  return null;
}
