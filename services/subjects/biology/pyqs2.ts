// services/subjects/biology/pyqs2.ts
// Chapters 7 to 13 + Full Revision Solved Board PYQs & Question Bank
// Authentic recent CBSE Board questions with comprehensive notebook-style solutions.

export function getBiologyPart2PYQs(chapterLower: string): string | null {
  // FULL REVISION / MASTER PYQ BANK
  if (
    chapterLower.includes('revision') ||
    chapterLower.includes('full') ||
    chapterLower.includes('master') ||
    chapterLower.includes('summary') ||
    chapterLower === 'b_all'
  ) {
    return `QUESTION: Q1. [5 Marks Master Board Problem, CBSE 2024 (57/1/1)]
(a) Trace the complete replication cycle of HIV in a human host cell with a labeled schematic flowchart.
(b) Explain why an HIV-infected patient suffers from multiple secondary infections like tuberculosis and fungal pneumonia.
SOLUTION:
**(a) Life Cycle & Replication Pathway of HIV:**
1. **Entry:** The virus glycoprotein (gp120) binds to **CD4 receptors** present on macrophages and Helper T-lymphocytes (CD4+ T-cells).
2. **Penetration:** The viral envelope fuses with host cell membrane, releasing the viral RNA core and enzymes into the host cytoplasm.
3. **Reverse Transcription:** The single-stranded viral RNA acts as template for enzyme **Reverse Transcriptase**, synthesizing a complementary double-stranded **viral DNA**.
4. **Integration:** Viral DNA enters host nucleus and incorporates into host chromosome via viral enzyme **Integrase**, forming a provirus.
5. **Transcription & Translation:** Infected host genome is directed to transcribe new viral genomic RNA and synthesize viral structural proteins.
6. **Assembly & Budding:** New viral particles assemble near host plasma membrane and bud off, destroying the host T-cell and infecting new helper T-cells. Macrophages continue to produce virus particles, acting as an **"HIV factory"**.

**(b) Cause of Secondary Opportunistic Infections:**
- HIV specifically attacks, replicates within, and progressively lyses **Helper T-lymphocytes (CD4+ cells)**.
- Normal CD4 count is ~800 to 1200 cells/mm³; in AIDS patients, it plummets below **200 cells/mm³**.
- Helper T-cells are the master coordinators of both **Cell-Mediated Immunity (CMI)** and **Humoral (Antibody-Mediated) Immunity**.
- Their progressive collapse causes severe immunodeficiency, rendering the body completely defenseless against opportunistic pathogens (e.g. *Mycobacterium tuberculosis*, *Pneumocystis carinii*, fungi, and parasites like *Toxoplasma*) that are easily combated by a healthy immune system.
**CBSE Marking Rubric:**
- 3 Marks for stepwise pathway of HIV replication (binding, reverse transcription, integration, transcription, budding).
- 2 Marks for explaining CD4+ depletion and subsequent vulnerability to opportunistic infections.
INSIGHT: Clearly distinguish macrophages (which produce virus without dying, "HIV factory") from T_H cells (which are destroyed, causing immunodeficiency).

QUESTION: Q2. [5 Marks Master Board Problem, CBSE 2023 (Delhi)]
(a) Explain the construction of a recombinant DNA molecule using restriction endonuclease EcoRI and DNA ligase.
(b) Describe the technique of gel electrophoresis used for separating DNA fragments.
SOLUTION:
**(a) Construction of Recombinant DNA:**
1. Both the foreign vector DNA (e.g. plasmid) and the foreign source DNA containing gene of interest are treated with the **SAME restriction endonuclease (e.g. EcoRI)**.
2. *EcoRI* recognizes the specific palindromic sequence:
   5' - G ↓ A A T T C - 3'
   3' - C T T A A ↑ G - 5'
   and cuts both strands between G and A.
3. This creates identical single-stranded overhanging extensions called **Sticky Ends** on both fragments.
4. Because the sticky ends are complementary, their exposed nitrogenous bases spontaneously form hydrogen bonds with each other (A pairing with T).
5. Enzyme **DNA Ligase** acts on the aligned fragments and catalyzes the formation of phosphodiester bonds between adjacent 3'-OH and 5'-phosphate ends, permanently joining them into a **Recombinant DNA molecule**.

**(b) Gel Electrophoresis:**
1. **Principle:** DNA fragments are negatively charged polymers due to phosphate groups; when placed in an electric field in a buffer, they migrate toward the **Positive electrode (Anode)**.
2. **Matrix:** An **Agarose gel** (natural polymer extracted from seaweeds) provides a molecular sieve effect. Smaller fragments pass through pores more easily and travel farther down the gel than larger fragments.
3. **Visualization:** Separated DNA fragments cannot be seen directly. The gel is stained with **Ethidium Bromide (EtBr)** and exposed to **UV light**, revealing sharp **bright orange bands**.
4. **Elution:** The desired separated band is cut from the agarose gel and extracted into a clean buffer.
**CBSE Marking Rubric:**
- 2.5 Marks for construction of rDNA (same restriction enzyme, palindromic sequence, sticky ends, DNA ligase).
- 2.5 Marks for gel electrophoresis (negative charge, anode migration, agarose sieving, EtBr + UV visualization, elution).
INSIGHT: For rDNA, always emphasize that the SAME restriction enzyme must cut both vector and source DNA.`;
  }

  // CHAPTER 7: Human Health and Disease
  if (
    chapterLower.includes('human health') ||
    chapterLower.includes('disease') ||
    chapterLower === 'b7' ||
    chapterLower.includes('chapter 7: human health and disease') ||
    chapterLower.includes('chapter 7 - human health and disease')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (57/1/1)] The toxic substance released upon rupture of infected erythrocytes in malaria patients, causing chills and high recurring fever, is:
(A) Sporozoite
(B) Haemozoin
(C) Toxin
(D) Interferon
SOLUTION:
**Correct Answer:** (B) Haemozoin
**Notebook Explanation:**
When *Plasmodium* merozoites multiply asexually inside human Red Blood Cells (RBCs), the metabolic digestion of host hemoglobin converts toxic free heme into insoluble crystalline **Haemozoin**. The simultaneous rupture of millions of RBCs releases haemozoin and metabolic debris into the bloodstream, triggering chills and high recurring fever every 3 to 4 days.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).
INSIGHT: Sporozoite is the infective stage to humans; Haemozoin is the fever-inducing toxic product.

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] Name the four barrier defenses of innate immunity in humans and give one example of each.
SOLUTION:
1. **Physical Barriers:** Skin (outer stratum corneum prevents entry of microbes) and mucous coating of respiratory, gastrointestinal, and urogenital tracts.
2. **Physiological Barriers:** Hydrochloric acid (HCl) in stomach and Lysozyme in saliva and tears.
3. **Cellular Barriers:** Polymorphonuclear leukocytes (PMNL / neutrophils) and Monocytes in blood; Macrophages in tissues.
4. **Cytokine Barriers:** **Interferons** secreted by virus-infected cells to protect healthy surrounding cells from viral attack.
**CBSE Marking Rubric:**
- 0.5 Mark for each barrier category with a correct example.

QUESTION: Q3. [3 Marks, CBSE 2024 (57/2/2)] Differentiate between active immunity and passive immunity with suitable examples.
SOLUTION:
| Feature | Active Immunity | Passive Immunity |
|---|---|---|
| **Production of Antibodies** | Produced actively by host's own immune system (B-lymphocytes) in response to antigen exposure. | Ready-made, pre-formed antibodies are directly injected or transferred into recipient body. |
| **Onset & Duration** | Takes time to develop (slow onset), but provides **long-lasting protection with immunological memory**. | Provides immediate fast protection, but has **short lifespan with zero immunological memory**. |
| **Examples** | Immunity gained after recovering from chickenpox or after receiving measles vaccine. | **IgA antibodies in mother's Colostrum**; Anti-Tetanus Serum (ATS); Anti-Snake Venom (ASV). |
**CBSE Marking Rubric:**
- 1 Mark for difference in antibody production mechanism.
- 1 Mark for difference in speed, duration, and immunological memory.
- 1 Mark for correct examples of each.

QUESTION: Q4. [5 Marks Core Cancer Problem, CBSE 2023 (All India)]
(a) What is contact inhibition? How do cancer cells differ from normal cells in this property?
(b) Explain the difference between benign and malignant tumors. Why is metastasis called the most feared property of cancer?
SOLUTION:
**(a) Contact Inhibition:**
- **Definition:** Contact inhibition is a biological regulatory mechanism in normal animal cells where physical contact with neighboring cells inhibits further mitotic cell division and movement.
- **In Cancer Cells:** Cancer cells completely lose the property of contact inhibition. As a result, they continue to divide uncontrollably even after forming a continuous layer, piling up over one another to form abnormal masses of cells called **Tumors (Neoplasms)**.

**(b) Benign vs Malignant Tumors:**
| Feature | Benign Tumor | Malignant Tumor |
|---|---|---|
| **Localization** | Remains strictly confined to its original location/organ of origin. | Invades and aggressively infiltrates surrounding normal tissues. |
| **Growth Rate** | Grows slowly, usually encapsulated by fibrous connective tissue. | Grows rapidly, unencapsulated, damaging surrounding cells. |
| **Damage** | Causes little damage; can often be surgically removed safely. | Highly destructive; mass of proliferating neoplastic cells called cancer. |
| **Metastasis** | **Absent**. | **Present**. |

**Why Metastasis is the Most Feared Property:**
- **Metastasis** is the spread of cancer cells from a primary tumor to distant body organs via blood or lymph.
- Migrating cells lodge in distant vital organs (liver, lungs, brain, bones), begin dividing aggressively, and establish **secondary tumors**.
- This widespread secondary colonization makes surgical excision impossible and dramatically reduces patient survival rates, making it the most lethal and feared characteristic of malignant neoplasms.
**CBSE Marking Rubric:**
- 1.5 Marks for defining contact inhibition and its loss in cancer cells.
- 2 Marks for differentiating benign and malignant tumors.
- 1.5 Marks for explaining metastasis and why it is lethal.
INSIGHT: The keyword "loss of contact inhibition" is compulsory for full marks in cancer definition questions.`;
  }

  // CHAPTER 8: Microbes in Human Welfare
  if (
    chapterLower.includes('microbes') ||
    chapterLower === 'b8' ||
    chapterLower.includes('chapter 8: microbes in human welfare') ||
    chapterLower.includes('chapter 8 - microbes in human welfare')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (57/3/1)] The bioactive molecule used as an immunosuppressive agent in organ-transplant patients is:
(A) Streptokinase
(B) Statin
(C) Cyclosporin A
(D) Citric acid
SOLUTION:
**Correct Answer:** (C) Cyclosporin A
**Notebook Explanation:**
Cyclosporin A is produced by the imperfect fungus **Trichoderma polysporum**. It inhibits T-lymphocyte activation, functioning as an essential **immunosuppressive agent** to prevent graft rejection in organ-transplant recipients.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (C).
INSIGHT: Remember the source: *Trichoderma polysporum* (fungus).

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] Name the microbial sources and commercial applications of:
(a) Statins
(b) Streptokinase.
SOLUTION:
**(a) Statins:**
- **Microbial Source:** Produced by yeast **Monascus purpureus**.
- **Commercial Application:** Used as **blood-cholesterol lowering agents**; functions by competitively inhibiting the enzyme HMG-CoA reductase responsible for cholesterol biosynthesis.
**(b) Streptokinase:**
- **Microbial Source:** Produced by the bacterium **Streptococcus** (and modified by genetic engineering).
- **Commercial Application:** Used as a **"clot buster"** to dissolve blood clots from the blood vessels of patients suffering from myocardial infarction (heart attack).
**CBSE Marking Rubric:**
- 1 Mark for Statins (source: *Monascus purpureus*, function: cholesterol reduction).
- 1 Mark for Streptokinase (source: *Streptococcus*, function: clot buster).

QUESTION: Q3. [3 Marks, CBSE 2024 (57/1/2)] What is BOD? Explain how secondary treatment of municipal sewage reduces BOD.
SOLUTION:
**Definition of BOD (Biochemical Oxygen Demand):**
- BOD refers to the amount of dissolved oxygen that would be consumed if all the organic matter in one liter of water were completely oxidized by aerobic bacteria.
- It is a direct measure of the **organic pollution level** of sewage: higher BOD indicates greater pollution.
**Reduction of BOD during Secondary (Biological) Treatment:**
1. The primary effluent is continuously pumped into large **aeration tanks** where it is agitated mechanically and air is continuously pumped into it.
2. This facilitates vigorous growth of aerobic microbes into **flocs** (masses of bacteria associated with fungal filaments to form mesh-like networks).
3. These aerobic microbes consume the major part of the organic matter present in the effluent as their food.
4. As the organic load is oxidized into CO₂ and biomass, the **BOD of the effluent is drastically reduced** (often by 85-90%).
5. The treated effluent is then transferred to settling tanks for sludge sedimentation.
**CBSE Marking Rubric:**
- 1 Mark for precise definition of BOD and relationship to organic pollution.
- 1 Mark for aeration tank and formation of flocs.
- 1 Mark for consumption of organic matter leading to BOD reduction.
INSIGHT: BOD is inversely related to dissolved oxygen: when BOD decreases, water purity increases.`;
  }

  // CHAPTER 9: Biotechnology: Principles and Processes
  if (
    chapterLower.includes('principles and processes') ||
    chapterLower.includes('biotechnology: principles') ||
    chapterLower === 'b9' ||
    chapterLower.includes('chapter 9: biotechnology: principles and processes') ||
    chapterLower.includes('chapter 9 - biotechnology: principles and processes')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (57/1/1)] In pBR322 plasmid, the restriction sites for BamHI and SalI are present in the gene coding for resistance against:
(A) Ampicillin
(B) Tetracycline
(C) Chloramphenicol
(D) Kanamycin
SOLUTION:
**Correct Answer:** (B) Tetracycline (*tetᴿ*)
**Notebook Explanation:**
In cloning vector pBR322:
- The *tetᴿ* gene carries restriction recognition sites for **BamHI and SalI**.
- The *ampᴿ* gene carries restriction recognition sites for **PstI and PvuI**.
- Insertion of foreign DNA at *BamHI* inactivates tetracycline resistance (**Insertional Inactivation**).
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).
INSIGHT: Memory mnemonic: 'B'amHI and 'S'alI = 'B'est 'S'tudent takes 'T'ea (*tetᴿ*).

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] Name the source organism of Taq polymerase. Why is this enzyme preferred in PCR over normal DNA polymerases?
SOLUTION:
- **Source Organism:** Thermophilic bacterium **Thermus aquaticus** (found in hot springs and hydrothermal vents).
- **Reason for Preference:**
  * PCR requires high temperatures (94°C) during the denaturation step to melt double-stranded DNA into single strands.
  * Normal DNA polymerases (e.g. from *E. coli*) denature and permanently lose enzymatic activity at this temperature.
  * **Taq Polymerase is thermostable**: it remains fully functional and stable through repeated high-temperature heating cycles without needing fresh enzyme addition.
**CBSE Marking Rubric:**
- 1 Mark for naming *Thermus aquaticus*.
- 1 Mark for explaining thermostability and survival during 94°C denaturation.

QUESTION: Q3. [5 Marks Core PCR Problem, CBSE 2024 (57/2/1)]
(a) Name the scientist who invented Polymerase Chain Reaction (PCR).
(b) Describe the three sequential steps of a single PCR cycle with specific temperatures and reaction components.
(c) Calculate the number of DNA molecules produced after 30 cycles starting from a single double-stranded DNA molecule.
SOLUTION:
**(a) Inventor:**
- Invented by **Kary Mullis** in 1983 (Nobel Prize in Chemistry, 1993).

**(b) Three Sequential Steps of a PCR Cycle:**
1. **Step 1: Denaturation (94°C to 96°C):**
   * The reaction mixture containing target double-stranded DNA template is heated to ~94°C.
   * High thermal energy disrupts the hydrogen bonds between complementary base pairs, separating the double helix into two single-stranded DNA templates.
2. **Step 2: Annealing (50°C to 60°C):**
   * The temperature is lowered to ~54°C to allow two sets of synthetic oligonucleotide **primers** (forward and reverse primers) to hybridize (bind) to their complementary sequences at the 3'-ends of each single-stranded DNA template.
3. **Step 3: Extension / Polymerization (72°C):**
   * The temperature is raised to 72°C (optimum for thermostable enzyme **Taq DNA Polymerase**).
   * Utilizing deoxynucleoside triphosphates (dATP, dCTP, dGTP, dTTP) and Mg²⁺ cofactors in buffer, Taq polymerase synthesizes new complementary DNA strands in the **5' -> 3' direction** starting from the 3'-OH of the primers.

**(c) Calculation of Amplification Yield:**
- In each cycle, the number of DNA duplexes doubles (exponential amplification 2ⁿ, where n is the number of cycles).
- Starting template = 1 dsDNA molecule.
- Number of cycles n = 30.
- Total DNA molecules produced = 2³⁰
  = 1,073,741,824 molecules (approximately **1.07 × 10⁹ molecules or ~1 billion copies**).
**CBSE Marking Rubric:**
- 0.5 Mark for Kary Mullis.
- 1 Mark for Denaturation (94°C, breaking H-bonds).
- 1 Mark for Annealing (50-60°C, primers binding to 3'-ends).
- 1 Mark for Extension (72°C, Taq polymerase, 5'->3' synthesis).
- 1.5 Marks for 2ⁿ formula and calculating 2³⁰ ≈ 1 billion copies.
INSIGHT: For step 3, always state the optimal temperature (72°C) and the 5'->3' synthesis direction.`;
  }

  // CHAPTER 10: Biotechnology and its Applications
  if (
    chapterLower.includes('applications') ||
    chapterLower.includes('biotechnology and its applications') ||
    chapterLower === 'b10' ||
    chapterLower.includes('chapter 10: biotechnology and its applications') ||
    chapterLower.includes('chapter 10 - biotechnology and its applications')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (57/1/2)] Which of the following genes controls cotton bollworms?
(A) cryIAb
(B) cryIAc and cryIIAb
(C) cryIIAc
(D) ampᴿ
SOLUTION:
**Correct Answer:** (B) cryIAc and cryIIAb
**Notebook Explanation:**
The Bt toxin crystal genes are insect-specific:
- **cryIAc and cryIIAb:** Control **Cotton Bollworms**.
- **cryIAb:** Controls **Corn Borer**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).
INSIGHT: Do not confuse *cryIAb* (corn borer) with *cryIAc* (cotton bollworm).

QUESTION: Q2. [3 Marks, CBSE 2024 (57/1/3)] How did the American company Eli Lilly produce human insulin (Humulin) using recombinant DNA technology in 1983?
SOLUTION:
**Step 1: Problem with Traditional Proinsulin Processing in Bacteria:**
- Human insulin is synthesized as a pre-prohormone containing: Chain A (21 amino acids) + Chain B (30 amino acids) + an extra connecting **C-peptide (33 amino acids)**.
- Bacteria (*E. coli*) lack eukaryotic post-translational splicing machinery to cleave off C-peptide.
**Step 2: Eli Lilly's Innovative Strategy:**
1. Prepared two separate synthetic DNA sequences corresponding to **Chain A** and **Chain B** of human insulin.
2. Introduced each sequence into separate plasmids of *Escherichia coli* adjacent to a β-galactosidase promoter.
3. Cultured the two transgenic *E. coli* strains separately to produce Chain A and Chain B polypeptides.
**Step 3: Extraction and In Vitro Assembly:**
- Extracted and purified Chains A and B separately from bacterial cultures.
- Combined Chains A and B *in vitro* by forming **disulfide bridges** (-S-S-) between specific cysteine residues.
- Result: Fully functional, pure **Human Insulin (Humulin)** with zero risk of animal-protein allergies.
**CBSE Marking Rubric:**
- 1 Mark for explaining structure of proinsulin (A, B, and C-peptide) and need to eliminate C-peptide.
- 1 Mark for synthesizing separate DNA sequences for Chains A and B and expressing in *E. coli*.
- 1 Mark for in vitro extraction and joining via disulfide bonds.
INSIGHT: Mature functional human insulin contains NO C-peptide; it has only Chains A and B held by disulfide bonds.

QUESTION: Q3. [5 Marks Core Gene Therapy Problem, CBSE 2023 (Delhi)]
(a) Explain the gene therapy procedure carried out in 1990 for a 4-year-old girl suffering from SCID caused by ADA deficiency.
(b) Why is this treatment not a permanent cure? What step could provide a permanent cure?
SOLUTION:
**(a) Clinical Gene Therapy for ADA Deficiency:**
- **Disease Cause:** Severe Combined Immunodeficiency (SCID) caused by deletion of the gene for **Adenosine Deaminase (ADA)**, an enzyme essential for purine metabolism and immune T-lymphocyte function.
- **Gene Therapy Procedure Steps:**
  1. **Isolation of Host Cells:** Lymphocytes were extracted from the peripheral blood of the 4-year-old patient and grown in *in vitro* laboratory cell cultures.
  2. **cDNA Preparation:** A functional, normal human ADA-cDNA gene was cloned into a **disarmed retroviral vector**.
  3. **Transduction:** The retroviral vector carrying functional ADA-cDNA was introduced into the cultured lymphocytes.
  4. **Reinfusion:** The genetically engineered lymphocytes successfully expressing active ADA were infused back into the patient's bloodstream.
  5. The infused lymphocytes metabolized toxic adenosine metabolites and restored functional immunity.

**(b) Why Periodic Infusions are Required & How Permanent Cure is Achieved:**
- **Why Not Permanent:**
  * Mature circulating lymphocytes are mortal, differentiated cells with a finite lifespan (few weeks to months).
  * As these engineered cells naturally die out, the patient loses ADA production and therefore requires **periodic repeat infusions** of genetically modified lymphocytes throughout life.
- **Path to a Permanent Cure:**
  * A permanent cure can be achieved if the functional ADA gene is isolated from bone marrow cells and introduced into host cells at **early embryonic stages** (embryo or embryonic stem cells). Because all future body cells derive from this modified embryonic cell, the cure becomes permanent and hereditary.
**CBSE Marking Rubric:**
- 1 Mark for identifying ADA deficiency and role of adenosine deaminase.
- 2 Marks for stepwise procedure (lymphocyte culture, retroviral vector with ADA cDNA, transduction, reinfusion).
- 1 Mark for explaining why periodic infusions are needed (finite lymphocyte lifespan).
- 1 Mark for permanent cure requirement (introduction into cells at early embryonic stage).
INSIGHT: For permanent cure, the exact NCERT phrase is "gene introduced into cells at early embryonic stages".`;
  }

  // CHAPTER 11: Organisms and Populations
  if (
    chapterLower.includes('organisms and populations') ||
    chapterLower === 'b11' ||
    chapterLower.includes('chapter 11: organisms and populations') ||
    chapterLower.includes('chapter 11 - organisms and populations')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (57/2/1)] The interaction between sea anemone having stinging tentacles and clownfish that lives among them is an example of:
(A) Mutualism
(B) Commensalism
(C) Parasitism
(D) Amensalism
SOLUTION:
**Correct Answer:** (B) Commensalism (+, 0)
**Notebook Explanation:**
In this interaction:
- The clownfish derives **benefit (+)**: it gets protection from predators that avoid the stinging tentacles of sea anemone.
- The sea anemone derives **neither benefit nor harm (0)** from the clownfish.
- An interaction where one species benefits while the other remains neutral (+, 0) is **Commensalism**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] In a pond, there were 200 frog tadpoles. During a month, 40 new tadpoles hatched and 10 tadpoles died. Calculate the birth rate and death rate of the tadpole population.
SOLUTION:
**Step 1: Calculate Birth Rate (Natality):**
- Initial population N = 200 tadpoles.
- Number of births ΔN_b = 40.
- Birth rate = ΔN_b / N = 40 / 200 = **0.2 offspring per tadpole per month**.
**Step 2: Calculate Death Rate (Mortality):**
- Number of deaths ΔN_d = 10.
- Death rate = ΔN_d / N = 10 / 200 = **0.05 deaths per tadpole per month**.
**Final Answer:**
- Birth rate = **0.2 tadpoles per tadpole per month**.
- Death rate = **0.05 tadpoles per tadpole per month**.
**CBSE Marking Rubric:**
- 1 Mark for birth rate calculation with units (0.2).
- 1 Mark for death rate calculation with units (0.05).
INSIGHT: Always state units: 'per individual per unit time'.

QUESTION: Q3. [5 Marks Core Population Growth Problem, CBSE 2024 (57/1/1)]
(a) Differentiate between Exponential and Logistic population growth models. Write the differential equation for each.
(b) Which growth model is considered more realistic in nature and why?
SOLUTION:
**(a) Differentiation between Growth Models:**
| Feature | Exponential Growth Model | Logistic Growth Model |
|---|---|---|
| **Resource Availability** | Assumes unlimited food, space, and resources; no competition. | Recognizes that resources (food, space) are strictly finite and limiting in nature. |
| **Growth Curve Shape** | **J-shaped curve**. Continues indefinitely until sudden crash. | **Sigmoid / S-shaped curve**. Reaches an asymptote at Carrying Capacity (K). |
| **Differential Equation** | **dN/dt = r · N** | **dN/dt = r · N · [ (K - N) / K ]** |
| **Key Parameters** | r = intrinsic rate of natural increase; N = population density. | K = Carrying Capacity; [ (K - N) / K ] = Environmental resistance. |
| **Phases** | Lag phase -> Exponential log phase. | Lag phase -> Acceleration -> Deceleration -> Asymptote. |

**(b) Why Logistic Growth is More Realistic:**
- In the real natural world, no habitat possesses unlimited resources to permit indefinite exponential expansion of any species.
- When population density rises, competition between individuals for finite resources intensifies.
- Every natural ecosystem has a definitive upper threshold called **Carrying Capacity (K)**: the maximum population size that the environment's resources can sustainably support indefinitely without habitat degradation.
- Beyond K, mortality increases and reproduction declines until population stabilizes at K.
- Therefore, the **Verhulst-Pearl Logistic Growth Model** is accepted as biologically realistic and ecologically valid.
**CBSE Marking Rubric:**
- 1.5 Marks for Exponential growth features and equation dN/dt = rN.
- 1.5 Marks for Logistic growth features and equation dN/dt = rN[(K-N)/K].
- 2 Marks for explaining why logistic growth is more realistic (finite resources, carrying capacity K, competition).
INSIGHT: For the logistic equation, explicitly identify what [ (K - N) / K ] represents (environmental resistance).`;
  }

  // CHAPTER 12: Ecosystem
  if (
    chapterLower.includes('ecosystem') ||
    chapterLower === 'b12' ||
    chapterLower.includes('chapter 12: ecosystem') ||
    chapterLower.includes('chapter 12 - ecosystem')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (57/2/2)] Which ecological pyramid is always upright and can never be inverted?
(A) Pyramid of biomass in sea
(B) Pyramid of numbers in grassland
(C) Pyramid of energy in all ecosystems
(D) Pyramid of numbers in tree ecosystem
SOLUTION:
**Correct Answer:** (C) Pyramid of energy in all ecosystems
**Notebook Explanation:**
The pyramid of energy represents the rate of energy flow through successive trophic levels. According to Lindeman's 10% law and the Second Law of Thermodynamics, energy is always lost as metabolic heat during transfer from one trophic level to the next higher level. Thus, energy available at each subsequent trophic level is always strictly less than at the preceding level. Therefore, the pyramid of energy is **ALWAYS UPRIGHT**, with zero exceptions in any ecosystem.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (C).

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] Differentiate between Gross Primary Productivity (GPP) and Net Primary Productivity (NPP).
SOLUTION:
| Feature | Gross Primary Productivity (GPP) | Net Primary Productivity (NPP) |
|---|---|---|
| **Definition** | Total rate of production and synthesis of organic biomass by autotrophs (producers) during photosynthesis per unit area per unit time. | The remaining biomass stored in producers available for consumption by heterotrophs after meeting respiratory needs. |
| **Mathematical Relationship** | Total synthesized energy before respiration: GPP. | **NPP = GPP - R**, where R is respiratory loss by producers. |
**CBSE Marking Rubric:**
- 1 Mark for definitions of GPP and NPP.
- 1 Mark for formula NPP = GPP - R.

QUESTION: Q3. [5 Marks Core Decomposition Problem, CBSE 2023 (All India)]
(a) Name and explain the five sequential steps involved in the process of decomposition of detritus.
(b) Mention two environmental factors that regulate the rate of decomposition.
SOLUTION:
**(a) Five Sequential Steps of Decomposition:**
Decomposition is the process by which complex dead organic matter (detritus) is broken down into inorganic nutrients (CO₂, H₂O, mineral ions):
1. **Fragmentation:**
   * Detritivores (e.g. Earthworms) physically break down large pieces of detritus into smaller particles, significantly increasing the surface area for microbial enzymes.
2. **Leaching:**
   * Water-soluble inorganic nutrients dissolve in percolating soil moisture and seep down into the deep soil horizons, precipitating as unavailable mineral salts.
3. **Catabolism:**
   * Extracellular bacterial and fungal enzymes degrade complex organic polymers in detritus into simple inorganic substances and monomers.
4. **Humification:**
   * Leads to accumulation of a dark-colored, amorphous colloidal substance called **Humus**.
   * *Properties of Humus:* Highly resistant to microbial action; decomposes at an extremely slow rate; acts as a rich reservoir of plant nutrients.
5. **Mineralization:**
   * Microorganisms further degrade humus to release inorganic mineral nutrients (phosphates, nitrates, potassium) into the soil solution for root absorption.

**(b) Factors Regulating Decomposition Rate:**
1. **Chemical Composition of Detritus:**
   * Decomposition is **very slow** if detritus is rich in **Lignin, Chitin, and Tannins**.
   * Decomposition is **very fast** if detritus is rich in **Nitrogen and water-soluble substances like sugars**.
2. **Climatic Factors (Temperature and Soil Moisture):**
   * Warm temperature (>25°C) and moist conditions accelerate microbial metabolism, speeding up decomposition.
   * Low temperature and anaerobic conditions inhibit microbial respiration, resulting in slow decomposition and massive accumulation of organic matter (e.g. peat bogs).
**CBSE Marking Rubric:**
- 3 Marks for 5 steps (Fragmentation, Leaching, Catabolism, Humification, Mineralization).
- 2 Marks for regulatory factors (chemical composition: lignin vs sugars; temperature/moisture).
INSIGHT: Note that fragmentation, leaching, and catabolism operate simultaneously on the detritus.`;
  }

  // CHAPTER 13: Biodiversity and Conservation
  if (
    chapterLower.includes('biodiversity') ||
    chapterLower.includes('conservation') ||
    chapterLower === 'b13' ||
    chapterLower.includes('chapter 13: biodiversity and conservation') ||
    chapterLower.includes('chapter 13 - biodiversity and conservation')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (57/1/1)] Alexander von Humboldt described for the first time:
(A) Ecological succession
(B) Laws of limiting factors
(C) Species-Area Relationship
(D) Population growth equation
SOLUTION:
**Correct Answer:** (C) Species-Area Relationship
**Notebook Explanation:**
German naturalist and geographer Alexander von Humboldt observed in South American jungles that within a region, species richness increases with increasing explored area up to a limit. On a logarithmic scale, this relationship is a straight line represented by:
**log S = log C + Z log A**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (C).

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] What are Sacred Groves? Name two regions in India where sacred groves are found.
SOLUTION:
- **Definition:** Sacred Groves are pristine tracts of forest that are set aside and given total protection by indigenous tribal communities due to religious beliefs and cultural veneration; all trees and wildlife within are protected by customary taboos.
- **Two Regions in India:**
  1. **Khasi and Jaintia Hills in Meghalaya** (harbor some of India's rarest threatened plant species).
  2. **Aravalli Hills of Rajasthan**.
  *(Also: Western Ghat regions of Karnataka and Maharashtra; Chanda and Bastar areas of Madhya Pradesh).*
**CBSE Marking Rubric:**
- 1 Mark for definition of Sacred Groves as in-situ traditional conservation.
- 1 Mark for two correct locations.

QUESTION: Q3. [5 Marks Core "Evil Quartet" Problem, CBSE 2024 (57/1/2)]
Explain the "Evil Quartet" responsible for the accelerated rates of biodiversity loss in recent times with a suitable real-world example for each.
SOLUTION:
The "Evil Quartet" is the sobriquet coined by ecologists to describe the four primary human-induced causes of species extinction:

**1. Habitat Loss and Fragmentation (The Most Important Cause):**
- Clearing of vast natural habitats for agricultural expansion, urbanization, and industrialization.
- *Example:* The **Amazon Rainforest** (harboring millions of species) is being cleared and fragmented for soybean cultivation and beef cattle grazing. Tropical rainforests once covered 14% of Earth's land surface, now reduced to less than 6%.
- When large continuous habitats are broken into small fragments by roads and canals, mammals and birds requiring large home ranges suffer population declines.

**2. Over-Exploitation:**
- Excessive harvesting, hunting, and fishing beyond the biological regeneration capacity of a species.
- *Example:* Extinction of **Steller's sea cow** and the **Passenger pigeon** within the last 500 years was purely driven by human greed and over-harvesting.

**3. Alien Species Invasions:**
- When non-native species are introduced intentionally or accidentally into a new geographic area, some turn invasive and outcompete or prey upon indigenous species, driving them toward extinction.
- *Examples:*
  * Introduction of the predatory fish **Nile Perch** into Lake Victoria (East Africa) led to the catastrophic extinction of more than **200 endemic species of cichlid fishes**.
  * Invasive exotic weeds like **Parthenium (Carrot grass), Lantana, and Eichhornia (Water Hyacinth)** causing severe ecological damage to native Indian flora.
  * Illegal introduction of African catfish **Clarias gariepinus** for aquaculture poses a severe threat to native catfishes in Indian rivers.

**4. Co-Extinctions:**
- In obligate ecological associations (such as mutualism or parasitism), when a host species becomes extinct, any other species obligatorily dependent on it inevitably goes extinct as well.
- *Example:* Co-evolved **plant-pollinator mutualism** where extinction of a specific pollinator wasp guarantees the extinction of its obligate host fig tree.
**CBSE Marking Rubric:**
- 1.25 Marks for Habitat Loss & Fragmentation with Amazon rainforest example.
- 1.25 Marks for Over-exploitation with Steller's sea cow/passenger pigeon.
- 1.25 Marks for Alien species invasions with Nile perch/cichlids or Water hyacinth.
- 1.25 Marks for Co-extinctions with plant-pollinator mutualism.
INSIGHT: For Alien species invasion, always mention Nile Perch in Lake Victoria or Clarias gariepinus threatening native catfish.`;
  }

  return null;
}
