// services/subjects/biology/pyqs1.ts
// Chapters 1 to 6 Solved Board PYQs & Question Bank
// Authentic recent CBSE Board questions with comprehensive notebook-style solutions.

export function getBiologyPart1PYQs(chapterLower: string): string | null {
  // CHAPTER 1: Sexual Reproduction in Flowering Plants
  if (
    chapterLower.includes('flowering') ||
    chapterLower.includes('sexual reproduction in flowering') ||
    chapterLower === 'b1' ||
    chapterLower.includes('chapter 1: sexual reproduction in flowering plants') ||
    chapterLower.includes('chapter 1 - sexual reproduction in flowering plants')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (57/1/1)] In an angiosperm, if the haploid number of chromosomes is 12, then the number of chromosomes present in the endosperm, synergid, and antipodal cell respectively are:
(A) 36, 12, 12
(B) 24, 12, 12
(C) 36, 24, 12
(D) 12, 24, 36
SOLUTION:
**Correct Answer:** (A) 36, 12, 12
**Notebook Explanation:**
1. Given haploid chromosome number n = 12.
2. Endosperm is formed by triple fusion (fusion of 1 haploid male gamete (n) + 2 haploid polar nuclei (2n)), making it **triploid (3n)**:
   Number of chromosomes = 3n = 3 × 12 = **36**.
3. Synergids and antipodals are constituent cells of the female gametophyte (embryo sac), which develops monosporically from a haploid functional megaspore via mitosis. Thus, both are **haploid (n)**:
   Number of chromosomes in synergid = n = **12**.
   Number of chromosomes in antipodal cell = n = **12**.
4. Therefore, the respective chromosome numbers are **36, 12, 12**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).
INSIGHT: If aleurone layer is asked, it is part of endosperm and is 3n (36).

QUESTION: Q2. [Assertion-Reason, CBSE 2023 (Delhi), 1 Mark]
Assertion (A): Cleistogamous flowers invariably produce assured seed-set even in the absence of pollinators.
Reason (R): Cleistogamous flowers never open and anthers and stigma lie close to each other, ensuring strictly autogamous self-pollination.
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is true but (R) is false.
(D) (A) is false but (R) is true.
SOLUTION:
**Correct Answer:** (A)
**Notebook Explanation:**
Cleistogamous flowers (found in plants like *Viola, Oxalis*, and *Commelina*) remain closed permanently throughout their lifecycle. When anthers dehisce in flower buds, pollen grains fall directly onto the receptive stigma enclosed within the closed bud. This complete absence of cross-pollination ensures 100% autogamy and guaranteed seed set without relying on external pollinating vectors. Hence, both A and R are true, and R correctly explains A.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).

QUESTION: Q3. [2 Marks, CBSE 2024 (57/2/2)] Differentiate between albuminous and non-albuminous seeds with one example of each.
SOLUTION:
| Feature | Albuminous (Endospermic) Seeds | Non-albuminous (Exalbuminous) Seeds |
|---|---|---|
| **Endosperm Retention** | Retain a portion of endosperm as it is not completely consumed during embryo development. | Endosperm is completely consumed by developing embryo before seed maturation. |
| **Nutrient Storage** | Food is stored primarily in the persistent endosperm. | Food is stored in enlarged cotyledons. |
| **Examples** | Wheat, Maize, Barley, Castor, Coconut. | Pea, Groundnut, Gram, Beans. |
**CBSE Marking Rubric:**
- 1 Mark for differentiation on basis of endosperm consumption.
- 1 Mark for one correct example of each seed type.

QUESTION: Q4. [3 Marks, CBSE 2023 (All India)] Trace the development of a 7-celled, 8-nucleate embryo sac from a functional megaspore in angiosperms.
SOLUTION:
**Step 1: Free Nuclear Mitotic Divisions:**
- The functional megaspore (haploid, n) situated at the chalazal end is the first cell of the female gametophyte.
- Its nucleus undergoes **first mitotic division** to form two nuclei that move to opposite poles (1 micropylar, 1 chalazal).
- Two further sequential mitotic divisions result in **4 nuclei at each pole** (total 8 nuclei). These divisions are strictly free-nuclear (no immediate cell wall formation).
**Step 2: Cellular Organization:**
- After 8-nucleate stage, cell walls are laid down:
  * 3 nuclei at micropylar end organize into **Egg Apparatus** consisting of 2 Synergids (with filiform apparatus) + 1 Egg cell.
  * 3 nuclei at chalazal end organize into 3 **Antipodal cells**.
  * Remaining 2 nuclei (**Polar nuclei**) migrate to large central cell and lie just below the egg apparatus.
- Resulting structure is **8-nucleate and 7-celled** (3 antipodals + 3 in egg apparatus + 1 large binucleate central cell).
**CBSE Marking Rubric:**
- 1 Mark for free nuclear mitotic division steps (2 -> 4 -> 8 nuclei).
- 1 Mark for describing 3 cells at micropylar end and 3 at chalazal end.
- 1 Mark for central cell with 2 polar nuclei and stating 7-celled, 8-nucleate condition.
INSIGHT: Mention that this is termed 'monosporic development' because it originates from a single functional megaspore.

QUESTION: Q5. [5 Marks Core Board Problem, CBSE 2024 (57/1/1)]
(a) What is double fertilization? Describe the two events in detail along with their end products.
(b) Why does endosperm development precede embryo development?
SOLUTION:
**(a) Double Fertilization in Angiosperms:**
- Double fertilization is a unique phenomenon in angiosperms involving two independent fusion events inside the embryo sac:
**Event 1: Syngamy (True Fertilization / Generative Fertilization):**
- One of the two haploid male gametes (n) released by the pollen tube moves toward the egg cell and fuses with its nucleus.
- Result: Formation of a **Diploid Zygote (2n)**.
- Future fate: The zygote develops into the **Embryo** (plumule, radicle, and cotyledon/s).
**Event 2: Triple Fusion (Vegetative Fertilization):**
- The second haploid male gamete (n) moves towards the central cell and fuses with the two haploid polar nuclei (2n) located in the center.
- Result: Formation of a **Triploid Primary Endosperm Nucleus (PEN, 3n)**.
- The central cell after triple fusion becomes the **Primary Endosperm Cell (PEC)**, which divides to form the **Endosperm (3n)**.
- End products: **Diploid Zygote (2n)** and **Triploid Endosperm (3n)**.

**(b) Why Endosperm Development Precedes Embryo Development:**
- The zygote remains quiescent or divides only after a certain amount of endosperm is formed.
- **Biological Reason:** The developing embryo requires continuous nutrition for cell division, morphogenesis, and organ differentiation.
- The primary endosperm cell undergoes rapid divisions to form a nutritive endosperm tissue loaded with starch, proteins, and fats, providing an **assured supply of nourishment** to the newly forming delicate embryo.
**CBSE Marking Rubric:**
- 1.5 Marks for Syngamy (definition, fusion, diploid zygote product).
- 1.5 Marks for Triple Fusion (definition, fusion, triploid PEN product).
- 1 Mark for naming both products clearly.
- 1 Mark for explaining why endosperm precedes embryo development (assured nutrition).
INSIGHT: Always write ploidy levels: Zygote (2n) and Endosperm (3n).`;
  }

  // CHAPTER 2: Human Reproduction
  if (
    chapterLower.includes('human reproduction') ||
    chapterLower === 'b2' ||
    chapterLower.includes('chapter 2: human reproduction') ||
    chapterLower.includes('chapter 2 - human reproduction')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (57/2/1)] The hormone responsible for triggering ovulation and development of corpus luteum is:
(A) FSH
(B) LH
(C) Progesterone
(D) Estrogen
SOLUTION:
**Correct Answer:** (B) LH (Luteinizing Hormone)
**Notebook Explanation:**
Around Day 14 of a standard 28-day menstrual cycle, both LH and FSH attain peak levels. A rapid secretion of LH leading to its maximum level during the mid-cycle is called **LH Surge**. This LH surge induces:
1. Rupture of the mature Graafian follicle, releasing the secondary oocyte (**Ovulation**).
2. Transformation of the remaining empty follicular cells into the endocrine **Corpus Luteum**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).

QUESTION: Q2. [Assertion-Reason, CBSE 2023 (Delhi), 1 Mark]
Assertion (A): Only one sperm can fertilize an ovum during human fertilization.
Reason (R): As soon as a sperm contacts the zona pellucida of the secondary oocyte, it induces depolarization and changes in the membrane that block the entry of additional sperms.
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is true but (R) is false.
(D) (A) is false but (R) is true.
SOLUTION:
**Correct Answer:** (A)
**Notebook Explanation:**
Sperm binding to ZP3 receptors on the zona pellucida triggers the **cortical reaction**: exocytosis of cortical granules hardens the zona pellucida and destroys sperm-binding sites. This electrical and biochemical reaction prevents polyspermy and ensures that strictly monospermy occurs. Hence, both A and R are true, and R correctly explains A.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).

QUESTION: Q3. [3 Marks, CBSE 2024 (57/1/3)] Describe the hormonal control of spermatogenesis in human males.
SOLUTION:
**Step 1: Hypothalamic Stimulation:**
- At puberty, spermatogenesis begins due to a significant increase in the secretion of **GnRH (Gonadotropin Releasing Hormone)** from the hypothalamus.
**Step 2: Anterior Pituitary Action:**
- High GnRH levels stimulate the anterior pituitary gland to secrete two gonadotropins:
  1. **LH (Luteinizing Hormone / ICSH):**
     * Acts on **Leydig cells** in the interstitial spaces of the testes.
     * Stimulates Leydig cells to synthesize and secrete **Androgens (primarily Testosterone)**.
     * Androgens stimulate and maintain spermatogenesis in seminiferous tubules.
  2. **FSH (Follicle Stimulating Hormone):**
     * Acts on **Sertoli cells** in the seminiferous tubules.
     * Stimulates Sertoli cells to secrete factors (such as ABP and nutrients) essential for the process of **Spermiogenesis**.
**Step 3: Negative Feedback Loop:**
- High testosterone exerts negative feedback on hypothalamus and pituitary to inhibit GnRH and LH.
- Sertoli cells secrete **Inhibin**, which selectively suppresses FSH secretion.
**CBSE Marking Rubric:**
- 1 Mark for GnRH and anterior pituitary stimulation.
- 1 Mark for LH acting on Leydig cells to produce testosterone.
- 1 Mark for FSH acting on Sertoli cells and negative feedback by inhibin/testosterone.
INSIGHT: Draw a small flowchart: Hypothalamus -> GnRH -> Pituitary -> LH/FSH -> Leydig/Sertoli cells.

QUESTION: Q4. [5 Marks Core Menstrual Cycle Problem, CBSE 2023 (All India)]
Explain the events of the menstrual cycle in human females with respect to:
(a) Changes occurring in the ovary.
(b) Changes occurring in the uterine endometrium.
(c) Pituitary and ovarian hormone levels.
SOLUTION:
The 28-day human menstrual cycle consists of four distinct phases:

**Phase 1: Menstrual Phase (Days 1 to 5):**
- **Ovary:** Corpus luteum from previous cycle degenerates into corpus albicans.
- **Uterus:** Endometrial lining sloughs off along with blood vessels and unfertilized ovum, producing menstrual flow (menses) lasting 3 to 5 days.
- **Hormones:** Sharp withdrawal of **Progesterone and Estrogen** due to luteal regression triggers the breakdown of endometrium. FSH levels begin a slow rise at the end of this phase.

**Phase 2: Follicular / Proliferative Phase (Days 6 to 13):**
- **Ovary:** Pituitary **FSH** stimulates primary follicles to grow into a fully mature **Graafian Follicle**.
- **Uterus:** The developing follicular cells secrete rising levels of **Estrogen**. Estrogen stimulates rapid cellular mitosis in the uterine endometrium, causing it to regenerate, thicken, and become vascular (**Proliferation**).
- **Hormones:** Estrogen rises progressively, exerting positive feedback on anterior pituitary.

**Phase 3: Ovulatory Phase (Day 14 - Mid-Cycle):**
- **Ovary & Hormones:** Rapid secretion of pituitary LH reaches its peak (**LH Surge**).
- **Event:** LH surge induces the rupture of the mature Graafian follicle and release of the secondary oocyte into the pelvic cavity (**Ovulation**).

**Phase 4: Luteal / Secretory Phase (Days 15 to 28):**
- **Ovary:** The remnants of the ruptured Graafian follicle transform into a yellow endocrine body called the **Corpus Luteum**.
- **Hormones:** The corpus luteum secretes large amounts of **Progesterone** (and moderate estrogen).
- **Uterus:** Progesterone maintains and enriches the endometrium, stimulating endometrial glands to secrete glycogen-rich mucus (**Secretory Endometrium**), making it receptive for blastocyst implantation.
- **Outcome:**
  * If fertilization occurs: hCG produced by trophoblast maintains corpus luteum; progesterone remains elevated; no menstruation occurs.
  * If fertilization does not occur: Corpus luteum degenerates, progesterone plummets, and a new cycle begins with menstruation.
**CBSE Marking Rubric:**
- 1 Mark for Menstrual phase (endometrial shedding, low progesterone).
- 1.5 Marks for Follicular phase (FSH, follicular growth, estrogen rise, proliferation).
- 1 Mark for Ovulatory phase (LH surge, rupture of Graafian follicle).
- 1.5 Marks for Luteal phase (Corpus luteum, progesterone secretion, glandular endometrium).
INSIGHT: For Day 14, always use the specific technical phrase "LH Surge".`;
  }

  // CHAPTER 3: Reproductive Health
  if (
    chapterLower.includes('reproductive health') ||
    chapterLower === 'b3' ||
    chapterLower.includes('chapter 3: reproductive health') ||
    chapterLower.includes('chapter 3 - reproductive health')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (57/1/2)] The function of copper ions (Cu²⁺) released from Copper-T (CuT) is to:
(A) Inhibit ovulation
(B) Suppress sperm motility and fertilizing capacity of sperms
(C) Prevent implantation by making uterus hostile
(D) Inhibit gametogenesis
SOLUTION:
**Correct Answer:** (B) Suppress sperm motility and fertilizing capacity of sperms
**Notebook Explanation:**
Copper-releasing IUDs (CuT, Cu7, Multiload 375) slowly release Cu²⁺ ions into the uterine lumen. These copper ions:
1. Increase phagocytosis of spermatozoa within the uterus.
2. Specifically suppress sperm motility and reduce their metabolic viability and fertilizing capacity.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).
INSIGHT: Hormone-releasing IUDs (LNG-20) make the uterus unsuitable for implantation; Cu-IUDs suppress sperm motility.

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] Name an oral contraceptive pill developed in India. Mention two reasons why it is considered better than traditional pills.
SOLUTION:
**Name of Pill:** **Saheli** (developed by Central Drug Research Institute - **CDRI, Lucknow**).
**Two Distinct Advantages:**
1. **Non-Steroidal Formulation:** It contains Centchroman (a non-steroidal selective estrogen receptor modulator), resulting in minimal hormonal side effects compared to daily steroidal pills.
2. **Convenient Dosage Schedule:** It is a **"once-a-week"** pill (taken twice weekly for first 3 months, then once weekly), which significantly improves user compliance and has very high contraceptive efficiency.
**CBSE Marking Rubric:**
- 1 Mark for naming Saheli and CDRI Lucknow.
- 1 Mark for two advantages (non-steroidal and once-a-week schedule).

QUESTION: Q3. [3 Marks, CBSE 2024 (57/3/1)] Differentiate between GIFT and ZIFT. Under what conditions is each technique recommended?
SOLUTION:
| Feature | GIFT (Gamete Intra-Fallopian Transfer) | ZIFT (Zygote Intra-Fallopian Transfer) |
|---|---|---|
| **Nature of Transfer** | Unfertilized ovum collected from a donor is transferred into the fallopian tube along with sperms. | In vitro fertilized zygote or early embryo (up to 8 blastomeres) is transferred into the fallopian tube. |
| **Site of Fertilization** | **In Vivo** (fertilization takes place naturally inside the female's fallopian tube). | **In Vitro** (fertilization is performed outside the body in the laboratory). |
| **Clinical Indication** | Recommended for females who cannot produce viable ova but have normal fallopian tubes and a suitable uterus for pregnancy. | Recommended for couples with tubal blockage or where in vitro fertilization is necessary due to oligospermia or fertilization failure. |
**CBSE Marking Rubric:**
- 1.5 Marks for distinguishing features (in vivo vs in vitro fertilization).
- 1.5 Marks for recommended clinical conditions for each technique.
INSIGHT: For ZIFT, the embryo MUST have ≤ 8 blastomeres. If > 8 blastomeres, the technique is IUT (Intra-Uterine Transfer).`;
  }

  // CHAPTER 4: Principles of Inheritance and Variation
  if (
    chapterLower.includes('inheritance') ||
    chapterLower.includes('variation') ||
    chapterLower.includes('genetics') ||
    chapterLower === 'b4' ||
    chapterLower.includes('chapter 4: principles of inheritance and variation') ||
    chapterLower.includes('chapter 4 - principles of inheritance and variation')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (57/1/1)] In a dihybrid cross between two heterozygotes (RrYy × RrYy), the proportion of offspring that are homozygous for both dominant traits (RRYY) is:
(A) 9/16
(B) 1/16
(C) 3/16
(D) 4/16
SOLUTION:
**Correct Answer:** (B) 1/16
**Notebook Explanation:**
In a standard Mendelian dihybrid cross:
Probability of RR from Rr × Rr = 1/4.
Probability of YY from Yy × Yy = 1/4.
Since the two gene pairs assort independently:
Probability of RRYY = (1/4) × (1/4) = **1/16**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).
INSIGHT: Notice the question asked for genotype RRYY (1/16), NOT the dominant phenotype Round Yellow (9/16).

QUESTION: Q2. [Assertion-Reason, CBSE 2023 (Delhi), 1 Mark]
Assertion (A): Sickle-cell anaemia is an example of point mutation.
Reason (R): It is caused by the substitution of Glutamic acid by Valine at the 6th position of the β-globin chain due to a single base transversion from GAG to GUG.
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is true but (R) is false.
(D) (A) is false but (R) is true.
SOLUTION:
**Correct Answer:** (A)
**Notebook Explanation:**
Sickle-cell anaemia occurs due to a single nucleotide substitution: Adenine is replaced by Uracil (GAG transversion to GUG) in the 6th codon of the β-globin mRNA. This leads to insertion of non-polar amino acid Valine in place of polar Glutamic acid, causing hemoglobin polymerization under low oxygen tension. Since this mutation involves alteration of a single base pair, it is a classic point mutation. Hence, both A and R are true, and R correctly explains A.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).

QUESTION: Q3. [3 Marks, CBSE 2024 (57/2/3)] A man with blood group A marries a woman with blood group B. They have a child with blood group O.
(a) What are the genotypes of the parents?
(b) Show the genetic cross and find the possible blood groups and genotypes of their other children.
SOLUTION:
**(a) Genotypes of Parents:**
- Blood group O child has genotype **ii**.
- For a child to have genotype *ii*, each parent must contribute one recessive *i* allele.
- Therefore:
  * Father (Blood group A) must be heterozygous: **Iᴬ i**.
  * Mother (Blood group B) must be heterozygous: **Iᴮ i**.
**(b) Genetic Cross (Punnett Square):**
Parents: Iᴬ i (Male) × Iᴮ i (Female)
Gametes: (Iᴬ, i) × (Iᴮ, i)
| Gametes | Iᴮ | i |
|---|---|---|
| **Iᴬ** | **Iᴬ Iᴮ** (Blood Group AB) | **Iᴬ i** (Blood Group A) |
| **i** | **Iᴮ i** (Blood Group B) | **ii** (Blood Group O) |

**Possible Phenotypes and Ratios of Children:**
1. **Blood Group AB** (Genotype: Iᴬ Iᴮ) - 25% (1/4)
2. **Blood Group A** (Genotype: Iᴬ i) - 25% (1/4)
3. **Blood Group B** (Genotype: Iᴮ i) - 25% (1/4)
4. **Blood Group O** (Genotype: ii) - 25% (1/4).
All four ABO blood groups are possible among their children in equal 1:1:1:1 proportions.
**CBSE Marking Rubric:**
- 1 Mark for identifying parental genotypes Iᴬi and Iᴮi.
- 1 Mark for Punnett square showing all 4 gametic combinations.
- 1 Mark for listing all 4 possible blood groups with percentages.

QUESTION: Q4. [5 Marks Core Genetics Problem, CBSE 2023 (All India)]
(a) What is Down's syndrome? Write its cause, karyotype, and four physical characteristics.
(b) How is sex determined in honeybees? Explain the mechanism of haplodiploidy.
SOLUTION:
**(a) Down's Syndrome:**
- **Cause:** Non-disjunction (failure of paired chromosomes to separate during anaphase-I of oogenesis), leading to **Trisomy of chromosome 21**.
- **Karyotype:** 47 chromosomes (45 + XX in females, 45 + XY in males; **Trisomy 21**).
- **Physical Characteristics:**
  1. Short stature with small, round head.
  2. Furrowed tongue and partially open mouth.
  3. Broad palm with characteristic single transverse palmar crease (**simian crease**).
  4. Retarded physical, psychomotor, and mental development.

**(b) Haplodiploid Sex Determination in Honeybees:**
- **Mechanism:** Sex is determined by the number of chromosome sets received by an individual.
- **Females (Queen and Worker Bees, 2n = 32):**
  * Develop from **fertilized eggs** (fusion of haploid sperm from drone and haploid egg from queen).
  * Receive 2 sets of chromosomes (Diploid, 2n = 32).
  * If female larva is fed royal jelly, it develops into a fertile Queen; if fed worker jelly, into a sterile Worker.
- **Males (Drones, n = 16):**
  * Develop **parthenogenetically from unfertilized eggs** laid by the queen.
  * Receive 1 set of chromosomes (Haploid, n = 16).
- **Unique Consequence:**
  * Drones produce sperms by **mitosis** (not meiosis).
  * Therefore, a male honeybee has no father and cannot have sons, but has a grandfather and can have grandsons!
**CBSE Marking Rubric:**
- 1 Mark for cause (Trisomy 21 due to non-disjunction) and karyotype (47).
- 1.5 Marks for 4 physical symptoms.
- 1.5 Marks for female (fertilized egg, 2n=32) vs male (parthenogenesis, n=16).
- 1 Mark for explaining that drones produce sperm by mitosis and have no father.
INSIGHT: In honeybees, drones are haploid (16) and produce sperms by MITOSIS, which is a frequent MCQ question.`;
  }

  // CHAPTER 5: Molecular Basis of Inheritance
  if (
    chapterLower.includes('molecular basis') ||
    chapterLower.includes('dna') ||
    chapterLower === 'b5' ||
    chapterLower.includes('chapter 5: molecular basis of inheritance') ||
    chapterLower.includes('chapter 5 - molecular basis of inheritance')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (57/1/1)] If a double-stranded DNA has 20% of cytosine, the percentage of adenine in the DNA is:
(A) 20%
(B) 30%
(C) 40%
(D) 60%
SOLUTION:
**Correct Answer:** (B) 30%
**Notebook Explanation:**
According to Chargaff's Equivalence Rule:
1. Amount of Guanine = Amount of Cytosine: %G = %C = 20%.
2. Total G + C = 20% + 20% = 40%.
3. Remaining percentage consists of Adenine and Thymine:
   %A + %T = 100% - 40% = 60%.
4. Since %A = %T:
   %A = 60% / 2 = **30%**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).

QUESTION: Q2. [3 Marks, CBSE 2024 (57/2/1)] Describe the Hershey-Chase experiment that unequivocally proved DNA is the genetic material.
SOLUTION:
**Step 1: Experimental Setup:**
- Alfred Hershey and Martha Chase (1952) worked with **Bacteriophage T2** infecting bacterium *Escherichia coli*.
- Cultured one batch of bacteriophages in medium containing radioactive Phosphorus (**³²P**) to label viral DNA (phosphorus is present in DNA, absent in protein).
- Cultured another batch in medium containing radioactive Sulfur (**³⁵S**) to label viral protein coat (sulfur is present in cysteine/methionine amino acids of protein, absent in DNA).
**Step 2: Three Experimental Steps:**
1. **Infection:** Both radioactive phage batches were allowed to attach and infect separate cultures of *E. coli*.
2. **Blending:** Culture agitated in a high-speed blender to strip off empty viral coats ("ghosts") from bacterial cell surfaces.
3. **Centrifugation:** Spun in a centrifuge to separate heavy bacterial cells (settling as **pellet** at bottom) from lighter viral coats (floating in **supernatant**).
**Step 3: Observations & Unequivocal Conclusion:**
- In ³²P batch: Radioactivity was detected in the **bacterial pellet**; supernatant had negligible radioactivity.
- In ³⁵S batch: Radioactivity was detected in the **supernatant**; pellet showed zero radioactivity.
- **Conclusion:** Viral DNA entered bacterial cells to direct viral replication, while viral protein coats remained outside. This provided **unequivocal proof that DNA is the genetic material**.
**CBSE Marking Rubric:**
- 1 Mark for ³²P (DNA) and ³⁵S (protein) labeling rationale.
- 1 Mark for Infection -> Blending -> Centrifugation steps.
- 1 Mark for observation (pellet vs supernatant) and final conclusion.
INSIGHT: Mention clearly that ³²P was in the pellet and ³⁵S was in the supernatant.

QUESTION: Q3. [5 Marks Core Lac Operon Problem, CBSE 2023 (Delhi)]
(a) Explain the functioning of the Lac Operon in *E. coli* in the presence and absence of an inducer.
(b) Why is the Lac operon regulation considered a negative regulation?
SOLUTION:
**(a) Functioning of the Lac Operon:**
The Lac Operon consists of:
- Regulatory gene (*i* gene), Promoter (*P*), Operator (*O*), and three structural genes (*z, y, a*).

**Case 1: In the Absence of Inducer (Lactose is absent - Operon OFF):**
1. The regulatory *i* gene is transcribed and translated constitutively to produce active **Lac Repressor protein**.
2. The active repressor protein specifically binds to the **Operator region (*O*)** of the operon.
3. This steric binding physically blocks **RNA Polymerase** from transcribing the downstream structural genes.
4. Consequently, no mRNA is formed, and synthesis of enzymes β-galactosidase, permease, and transacetylase is shut down (**Operon is Switched OFF**).

**Case 2: In the Presence of Inducer (Lactose / Allolactose is present - Operon ON):**
1. A few molecules of lactose enter the bacterial cell through basal levels of permease enzyme.
2. Lactose is converted into allolactose, which acts as the **Inducer**.
3. The inducer binds to the repressor protein, causing a conformational change that **inactivates the repressor**.
4. The inactivated repressor fails to bind the operator.
5. Operator site becomes free; RNA polymerase binds the promoter (*P*) and transcribes the polycistronic structural genes:
   * **z gene:** Transcribes **β-galactosidase** (hydrolyzes lactose into glucose and galactose).
   * **y gene:** Transcribes **Permease** (increases cell membrane permeability to lactose).
   * **a gene:** Transcribes **Transacetylase** (transfers acetyl group to β-galactosides).
6. Enzymes are synthesized, and lactose metabolism proceeds (**Operon is Switched ON**).

**(b) Why Lac Operon Regulation is Called Negative Regulation:**
- The operon is regulated by a repressor protein whose binding to the operator **prevents transcription**.
- Because the default regulatory protein acts as an "off-switch" (inhibiting gene expression), the control mechanism is termed **Negative Regulation**.
**CBSE Marking Rubric:**
- 2 Marks for Operon OFF state (active repressor binds operator, blocks RNA polymerase).
- 2 Marks for Operon ON state (inducer inactivates repressor, RNA polymerase transcribes z, y, a).
- 1 Mark for explaining why it is negative regulation.
INSIGHT: For negative regulation, explicitly mention that the repressor inhibits transcription.`;
  }

  // CHAPTER 6: Evolution
  if (
    chapterLower.includes('evolution') ||
    chapterLower === 'b6' ||
    chapterLower.includes('chapter 6: evolution') ||
    chapterLower.includes('chapter 6 - evolution')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (57/3/1)] The cranial capacity of Neanderthal man was approximately:
(A) 650 - 800 cc
(B) 900 cc
(C) 1400 cc
(D) 1600 cc
SOLUTION:
**Correct Answer:** (C) 1400 cc
**Notebook Explanation:**
Comparison of hominid cranial capacities in human evolution:
- *Homo habilis*: 650 - 800 cc (did not eat meat).
- *Homo erectus*: ~900 cc (ate meat).
- **Neanderthal man**: **1400 cc** (lived in Central Asia, buried their dead, used hides).
- Modern *Homo sapiens*: ~1400 - 1450 cc.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (C).

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] Differentiate between homologous and analogous organs with one example of each in plants.
SOLUTION:
| Feature | Homologous Organs | Analogous Organs |
|---|---|---|
| **Origin & Anatomy** | Same fundamental anatomical structure and embryonic origin. | Different anatomical structures and embryonic origins. |
| **Function & Evolution** | Perform different functions; represents **Divergent Evolution**. | Perform similar functions; represents **Convergent Evolution**. |
| **Plant Example** | **Thorns of *Bougainvillea* and Tendrils of *Cucurbita*** (both are modified axillary buds). | **Sweet potato** (root modification) and **Potato** (stem modification), both adapted for food storage. |
**CBSE Marking Rubric:**
- 1 Mark for differentiation based on origin and evolutionary pattern.
- 1 Mark for correct plant examples.

QUESTION: Q3. [5 Marks Core Evolution Problem, CBSE 2024 (57/1/2)]
(a) State Hardy-Weinberg Principle. Write the algebraic equation representing it.
(b) In a population of 1000 individuals, 360 belong to genotype AA, 480 to Aa, and 160 to aa. Calculate the frequencies of alleles A and a. Show whether the population is in Hardy-Weinberg equilibrium.
SOLUTION:
**(a) Hardy-Weinberg Principle:**
- **Statement:** The allele frequencies in a large, randomly mating diploid population remain constant and stable from generation to generation in the absence of evolutionary forces such as mutation, natural selection, gene flow, and genetic drift.
- **Algebraic Equations:**
  1. Allele frequencies: **p + q = 1** (where p = frequency of dominant allele A, q = frequency of recessive allele a).
  2. Genotypic frequencies: **p² + 2pq + q² = 1**
     * **p²:** Frequency of homozygous dominant individuals (AA).
     * **2pq:** Frequency of heterozygous individuals (Aa).
     * **q²:** Frequency of homozygous recessive individuals (aa).

**(b) Numerical Calculation:**
**Step 1: Given Data:**
Total population N = 1000 individuals.
- Number of AA individuals = 360
- Number of Aa individuals = 480
- Number of aa individuals = 160.

**Step 2: Calculate Genotypic Frequencies in Observed Population:**
- Frequency of AA (p²) = 360 / 1000 = **0.36**.
- Frequency of Aa (2pq) = 480 / 1000 = **0.48**.
- Frequency of aa (q²) = 160 / 1000 = **0.16**.

**Step 3: Calculate Allele Frequencies (p and q):**
- Frequency of allele A (p) = p² + (1/2)(2pq) = 0.36 + (1/2)(0.48) = 0.36 + 0.24 = **0.60**.
- Frequency of allele a (q) = q² + (1/2)(2pq) = 0.16 + (1/2)(0.48) = 0.16 + 0.24 = **0.40**.
*(Check: p + q = 0.60 + 0.40 = 1.0. Verified!)*

**Step 4: Test for Hardy-Weinberg Equilibrium:**
Using calculated p = 0.60 and q = 0.40:
- Expected frequency of AA = p² = (0.60)² = **0.36** (Observed: 360/1000 = 0.36).
- Expected frequency of Aa = 2pq = 2(0.60)(0.40) = **0.48** (Observed: 480/1000 = 0.48).
- Expected frequency of aa = q² = (0.40)² = **0.16** (Observed: 160/1000 = 0.16).

**Conclusion:**
Since the observed genotypic frequencies exactly match the expected Hardy-Weinberg frequencies (p² + 2pq + q² = 0.36 + 0.48 + 0.16 = 1.0), the given population is **strictly in Hardy-Weinberg equilibrium**.
**CBSE Marking Rubric:**
- 1 Mark for statement of Hardy-Weinberg principle and equations.
- 1 Mark for calculating observed genotypic frequencies (0.36, 0.48, 0.16).
- 1.5 Marks for calculating allele frequencies p = 0.60 and q = 0.40.
- 1.5 Marks for comparing expected vs observed and concluding that population is in equilibrium.
INSIGHT: For allele frequency of A, always use p = (2 × AA + Aa) / (2 × Total individuals) = (720 + 480)/2000 = 0.60.`;
  }

  return null;
}
