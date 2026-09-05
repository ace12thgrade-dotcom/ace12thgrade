// services/revision/biologyQuestions.ts
// CBSE Class 12 Biology Full Subject Revision Question Bank (Complete Syllabus: Chapters 1 to 13)

import { RevisionQuestion } from './types.ts';

export const biologyCategories = [
  'All Questions',
  'Most Repeated Questions',
  'Important Process & Diagram Questions',
  'Genetics & Pedigree Problems',
  'Important Conceptual Questions',
  'Case-Based Questions',
  'Assertion & Reason',
  'High-Yield MCQs',
  '2-Mark & 3-Mark Questions',
  '5-Mark Long Questions'
];

export const biologyQuestions: RevisionQuestion[] = [
  // 1. Ch 1: Sexual Reproduction in Flowering Plants - Megasporogenesis & Embryo Sac / 5-Mark
  {
    id: 'bio-q1',
    questionNumber: 1,
    subjectId: 'biology',
    chapterTitle: 'Sexual Reproduction in Flowering Plants',
    chapterNumber: 1,
    category: 'Important Process & Diagram Questions',
    label: 'Frequently Asked',
    marks: '5 Marks',
    yearTag: 'CBSE 2024 (Delhi), 2023, 2019',
    question: `(a) Describe the process of megasporogenesis that leads to the development of a typical 7-celled, 8-nucleate female gametophyte (embryo sac) in angiosperms.\n(b) Draw a neat, labeled diagram of a mature angiospermic embryo sac.\n(c) What is meant by Double Fertilization? Explain its significance.`,
    answer: {
      finalAnswer: 'Development occurs via monosporic development from functional chalazal megaspore through 3 successive mitotic divisions; Double fertilization = Syngamy + Triple Fusion producing zygote (2n) and PEN (3n).',
      formulaOrConcept: `• Megasporocyte (MMC, 2n) --[Meiosis]--> 4 Megaspores (linear tetrad, n)\n• 3 Micropylar megaspores degenerate; 1 Functional Chalazal megaspore survives\n• 3 Mitotic nuclear divisions -> 8 nuclei -> 7-celled, 8-nucleate embryo sac\n• Double Fertilization: Syngamy (Egg + Sperm = 2n Zygote) & Triple Fusion (2 Polar Nuclei + Sperm = 3n PEN)`,
      solution: `(a) Process of Megasporogenesis and Embryo Sac Formation:
1. Megasporogenesis:
   • The process of formation of haploid megaspores from the diploid Megaspore Mother Cell (MMC) in the micropylar region of the ovule nucellus.
   • A single diploid MMC undergoes a single meiotic division to produce a linear tetrad of four haploid megaspores.
   • In most angiosperms (Polygonum type), the three megaspores located towards the micropylar end degenerate. Only one functional megaspore at the chalazal end survives.

2. Development of Female Gametophyte (Monosporic Development):
   • The functional chalazal megaspore enlarges. Its haploid nucleus undergoes three successive free-nuclear mitotic divisions:
     - 1st mitosis produces 2 nuclei (one moves to micropylar pole, one to chalazal pole).
     - 2nd mitosis produces 4 nuclei (2 at each pole).
     - 3rd mitosis produces 8 nuclei (4 at micropylar pole, 4 at chalazal pole).
   • Cell Wall Formation and Organization:
     - At the micropylar end, 3 cells organize into the Egg Apparatus (one central Egg cell flanked by two Synergids having filiform apparatus).
     - At the chalazal end, 3 cells organize into Antipodal cells.
     - The remaining 2 nuclei (polar nuclei) migrate to the center and reside in a large Central Cell.
   • The mature embryo sac is therefore 7-celled and 8-nucleate.

(b) Structure & Labeling of Embryo Sac:
• Micropylar end: Egg Apparatus (1 Egg cell + 2 Synergids with cellular finger-like Filiform Apparatus).
• Central Cell: Large vacuolated cell containing two polar nuclei.
• Chalazal end: 3 Antipodal cells.

(c) Double Fertilization & Significance:
• Syngamy: One haploid male gamete fuses with the haploid egg nucleus to form a diploid Zygote (2n), which develops into the embryo.
• Triple Fusion: The second haploid male gamete fuses with the two haploid polar nuclei (or diploid secondary nucleus) in the central cell to form a triploid Primary Endosperm Nucleus (PEN, 3n), which develops into nutrient-rich Endosperm.
• Significance:
  1. Ensures that nutritive endosperm tissue is produced ONLY when fertilization has successfully occurred, preventing waste of maternal plant energy.
  2. The triploid endosperm provides nourishment to the developing embryo until germination.`,
      examApproach: 'Always mention "monosporic development" and specify that the CHALAZAL megaspore remains functional while the three MICROPYLAR megaspores degenerate.',
      markingPoints: [
        '2 Marks: Stepwise description of meiotic megasporogenesis and 3 free mitotic divisions.',
        '1.5 Marks: Neat labeled diagram of mature 7-celled, 8-nucleate embryo sac with filiform apparatus.',
        '1.5 Marks: Clear explanation of Syngamy + Triple Fusion and its biological significance.'
      ]
    }
  },

  // 2. Ch 2: Human Reproduction - Spermatogenesis vs Oogenesis & Hormones / 5-Mark
  {
    id: 'bio-q2',
    questionNumber: 2,
    subjectId: 'biology',
    chapterTitle: 'Human Reproduction',
    chapterNumber: 2,
    category: 'Most Repeated Questions',
    label: 'High Priority',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2023, 2018',
    question: `(a) Give a schematic representation of Oogenesis in human females. Mention at which stages meiotic arrest occurs.\n(b) Differentiate between Spermatogenesis and Oogenesis on the basis of:\n  (i) Time of initiation\n  (ii) Number of functional gametes produced per primary cell\n  (iii) Cytokinesis (equal vs unequal)\n(c) Explain the role of LH (Luteinizing Hormone) in triggering ovulation during the menstrual cycle.`,
    answer: {
      finalAnswer: 'Oogenesis initiates embryonically with meiotic arrests at Prophase I (Diplotene) and Metaphase II; LH surge induces rupture of Graafian follicle and release of secondary oocyte.',
      formulaOrConcept: `• Oogonia (2n) -> Primary Oocyte (2n) arrested in Prophase I -> Meiosis I completed at puberty -> Secondary Oocyte (n) + 1st Polar Body\n• Meiosis II arrested at Metaphase II; completed ONLY upon sperm entry -> Ovum (n) + 2nd Polar Body\n• LH Surge (Day 14): Rapid LH peak stimulates ovulation`,
      solution: `(a) Schematic Representation & Arrest Stages of Oogenesis:
1. Prenatal / Embryonic Stage:
   • Oogonia (2n) multiply by mitosis in the fetal ovary.
   • They differentiate into Primary Oocytes (2n) and initiate Meiosis I.
   • First Arrest: Meiosis I gets arrested at the Diplotene stage of Prophase I and remains suspended until puberty.
2. At Puberty (Monthly Menstrual Cycle):
   • Prior to ovulation, under FSH/LH surge, the primary oocyte completes Meiosis I with unequal cytokinesis, yielding:
     - A large haploid Secondary Oocyte (n) retaining most nutrient-rich cytoplasm.
     - A tiny first Polar Body (n).
   • The secondary oocyte begins Meiosis II and undergoes Second Arrest at Metaphase II.
3. Post-Ovulation & Fertilization:
   • The secondary oocyte is released at Metaphase II during ovulation.
   • Meiosis II is completed ONLY if a sperm penetrates the zona pellucida, causing unequal division into a large haploid Ovum (Ootid, n) and a second Polar Body (n).

(b) Differences between Spermatogenesis and Oogenesis:
1. Time of Initiation:
   • Spermatogenesis: Initiates only at puberty under the influence of GnRH.
   • Oogenesis: Initiates during early fetal development before birth (no new oogonia are formed after birth).
2. Number of Functional Gametes:
   • Spermatogenesis: One primary spermatocyte (2n) yields 4 functional haploid spermatozoa (sperms).
   • Oogenesis: One primary oocyte (2n) yields only 1 functional haploid ovum (plus 2-3 degenerate polar bodies).
3. Cytokinesis:
   • Spermatogenesis: Equal cytoplasmic division producing 4 equal-sized spermatids.
   • Oogenesis: Highly unequal cytoplasmic divisions ensuring the ovum retains maximum cytoplasm and stored nutrients for the early embryo.

(c) Role of LH in Ovulation:
• Around the 14th day of the menstrual cycle, both LH and FSH attain a peak level.
• Rapid secretion of LH leading to its maximum level mid-cycle is called the "LH Surge".
• The LH surge induces:
  1. Resumption and completion of Meiosis I in the pre-ovulatory Graafian follicle.
  2. Rupture of the mature Graafian follicle, thereby releasing the secondary oocyte into the peritoneal cavity / fallopian tube (Ovulation).
  3. Transformation of the remaining follicular remnants into the endocrine Corpus Luteum, which secretes progesterone.`,
      examApproach: 'Examiner Requirement: The two arrest phases (Diplotene of Prophase I and Metaphase of Meiosis II) must be explicitly mentioned for full marks.',
      markingPoints: [
        '2 Marks: Complete schematic flow of oogenesis with both meiotic arrest stages highlighted.',
        '1.5 Marks: Three distinct tabular differences between spermatogenesis and oogenesis.',
        '1.5 Marks: Detailed explanation of LH Surge and Graafian follicle rupture.'
      ]
    }
  },

  // 3. Ch 4: Molecular Basis of Inheritance - DNA Replication / 5-Mark
  {
    id: 'bio-q3',
    questionNumber: 3,
    subjectId: 'biology',
    chapterTitle: 'Molecular Basis of Inheritance',
    chapterNumber: 5,
    category: 'Most Repeated Questions',
    label: 'High Priority',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2022, 2019',
    question: `(a) Describe the Meselson and Stahl experiment that proved DNA replication is semi-conservative. Include diagrammatic representation showing density gradient centrifugation bands in CsCl.\n(b) Explain the role of the following enzymes during DNA replication in E. coli:\n  (i) DNA Helicase\n  (ii) RNA Primase\n  (iii) DNA Polymerase III\n  (iv) DNA Ligase`,
    answer: {
      finalAnswer: 'Meselson-Stahl used ¹⁵N and ¹⁴N isotopes in E. coli with CsCl equilibrium density centrifugation to prove semi-conservative replication; Generation I had intermediate hybrid density; Generation II had equal light and hybrid bands.',
      formulaOrConcept: `• Semi-conservative replication: Each daughter DNA duplex contains one conserved parental strand and one newly synthesized strand.\n• Heavy nitrogen: ¹⁵N; Normal light nitrogen: ¹⁴N\n• CsCl centrifugation separates molecules based on buoyant density.`,
      solution: `(a) Meselson and Stahl Experiment:
1. Experimental Procedure:
   • Matthew Meselson and Franklin Stahl (1958) grew E. coli cells in a culture medium containing heavy isotope of nitrogen (¹⁵NH₄Cl) as the sole nitrogen source for many generations.
   • As a result, ¹⁵N was incorporated into newly synthesized DNA, making it "heavy" DNA. Heavy DNA can be distinguished from normal light DNA (¹⁴N) by centrifugation in a cesium chloride (CsCl) density gradient.
   • They then transferred these cells into a medium containing normal light nitrogen (¹⁴NH₄Cl) and took cell samples at definite time intervals (E. coli divides every 20 minutes).
   • DNA was extracted from the cells and analyzed on CsCl density gradients.

2. Observations and Deductions:
   • Sample at 0 minutes (Parental): Showed a single band at the heavy density position (¹⁵N-¹⁵N).
   • Generation I (after 20 minutes / 1 generation): Showed a single band at an intermediate / hybrid density position (¹⁴N-¹⁵N). This ruled out conservative replication.
   • Generation II (after 40 minutes / 2 generations): Showed two distinct bands of equal intensity: one intermediate hybrid band (¹⁴N-¹⁵N) and one light band (¹⁴N-¹⁴N) in equal 1:1 proportion.
3. Conclusion:
   This conclusively proved that DNA replication is semi-conservative: each newly formed DNA double helix consists of one intact parental strand and one newly synthesized daughter strand.

(b) Roles of Enzymes in DNA Replication:
(i) DNA Helicase: Unwinds the parental DNA double helix by breaking hydrogen bonds between complementary base pairs, creating the replication fork.
(ii) RNA Primase: Synthesizes a short complementary RNA primer (5' to 3') providing a free 3'-OH end, which is essential for DNA polymerase to initiate chain elongation.
(iii) DNA Polymerase III: The principal replicating enzyme in E. coli; adds deoxynucleotide triphosphates (dNTPs) to the 3'-OH end of primer with high speed (2000 bp/s) and high proofreading fidelity in the 5' -> 3' direction.
(iv) DNA Ligase: Catalyzes the formation of phosphodiester bonds to seal nicks and join Okazaki fragments on the lagging strand into a continuous DNA strand.`,
      examApproach: 'Examiner Alert: Emphasize that ¹⁵N is a heavy STABLE isotope, NOT a radioactive isotope! Calling ¹⁵N radioactive is an instant point deduction.',
      markingPoints: [
        '2.5 Marks: Detailed explanation of Meselson & Stahl experiment with Generation 0, 1, and 2 observations.',
        '1 Mark: Diagram showing CsCl centrifuge test tubes with Heavy, Hybrid, and Light bands.',
        '1.5 Marks: Precise biological functions of all 4 replication enzymes.'
      ]
    }
  },

  // 4. Ch 5: Principles of Inheritance & Variation - Dihybrid Cross & Incomplete Dominance / 3-Mark
  {
    id: 'bio-q4',
    questionNumber: 4,
    subjectId: 'biology',
    chapterTitle: 'Principles of Inheritance & Variation',
    chapterNumber: 4,
    category: 'Genetics & Pedigree Problems',
    label: 'Must Practice',
    marks: '3 Marks',
    yearTag: 'CBSE 2024, 2020',
    question: `(a) Explain the phenomenon of Incomplete Dominance with the help of a cross in Snapdragon (Antirrhinum majus) flower color.\n(b) Write both the phenotypic and genotypic ratios obtained in the F₂ generation. How does this ratio differ from Mendel\'s monohybrid ratio?`,
    answer: {
      finalAnswer: 'Cross RR (Red) × rr (White) gives F₁ Rr (Pink); F₂ phenotypic ratio is 1 Red : 2 Pink : 1 White (1:2:1), and genotypic ratio is 1 RR : 2 Rr : 1 rr (1:2:1).',
      formulaOrConcept: `• Incomplete Dominance: Neither allele is completely dominant over the other; heterozygote exhibits an intermediate blend.\n• F₂ Phenotypic ratio = Genotypic ratio = 1 : 2 : 1.`,
      solution: `(a) Incomplete Dominance in Snapdragon (Antirrhinum majus):
• In Snapdragon, flower color is controlled by two alleles: R for red flowers and r for white flowers.
• When a true-breeding red-flowered plant (RR) is crossed with a true-breeding white-flowered plant (rr):
  Parents:  RR (Red)  ×  rr (White)
  Gametes:  R         ×  r
  F₁ Generation:  Rr (All Pink flowers).
• Explanation: The allele R is not completely dominant over the allele r. In the heterozygous condition (Rr), the amount of red pigment produced is only half of that produced in the homozygous dominant (RR), resulting in an intermediate pink phenotype.

(b) Selfing of F₁ to Produce F₂ Generation:
  Parents:  Rr (Pink)  ×  Rr (Pink)
  Gametes:  R, r       ×  R, r
  Punnett Square:
    - RR (Red): 1/4 (25%)
    - Rr (Pink): 2/4 (50%)
    - rr (White): 1/4 (25%)

Ratios:
• F₂ Phenotypic Ratio: 1 Red : 2 Pink : 1 White (1 : 2 : 1).
• F₂ Genotypic Ratio: 1 RR : 2 Rr : 1 rr (1 : 2 : 1).

Difference from Mendel\'s Classical Monohybrid Cross:
In Mendel\'s classical monohybrid cross with complete dominance (e.g. Tall vs Dwarf pea plants):
• Phenotypic Ratio is 3 Dominant : 1 Recessive (3 : 1).
• Genotypic Ratio is 1 : 2 : 1.
In Incomplete Dominance, because the heterozygotes (Rr) express a distinct intermediate pink phenotype, the phenotypic ratio becomes identical to the genotypic ratio (1 : 2 : 1).`,
      examApproach: 'Always draw the 4-box Punnett square showing RR, Rr, Rr, and rr.',
      markingPoints: [
        '1 Mark: Explanation of incomplete dominance with Snapdragon parental cross RR × rr -> Rr (pink).',
        '1 Mark: Punnett square of F₂ generation showing 1 RR : 2 Rr : 1 rr.',
        '1 Mark: Explicitly stating that phenotypic ratio (1:2:1) equals genotypic ratio (1:2:1), unlike Mendel\'s 3:1.'
      ]
    }
  },

  // 5. Ch 7: Human Health & Disease - Immunity & AIDS / 3-Mark
  {
    id: 'bio-q5',
    questionNumber: 5,
    subjectId: 'biology',
    chapterTitle: 'Human Health & Disease',
    chapterNumber: 7,
    category: 'Most Repeated Questions',
    label: 'Frequently Asked',
    marks: '3 Marks',
    yearTag: 'CBSE 2024, 2023, 2019',
    question: `(a) Draw a neat labeled diagram of an antibody molecule.\n(b) Why is an antibody molecule represented as H₂L₂?\n(c) Name the specific host cells targeted and destroyed by the Human Immunodeficiency Virus (HIV) in the human body, leading to immunocompromise.`,
    answer: {
      finalAnswer: 'Antibody is H₂L₂ because it consists of 2 heavy and 2 light polypeptide chains joined by disulfide bonds; HIV infects and destroys Helper T-lymphocytes (CD4⁺ T cells) and macrophages.',
      formulaOrConcept: `• Antibody structure: Y-shaped immunoglobulin molecule consisting of 4 polypeptide chains (2 Heavy H chains and 2 Light L chains) connected by interchain disulfide bonds (-S-S-).\n• Antigen-binding site: Paratope located at N-terminal variable region of each arm.\n• HIV pathogenesis: Targets Macrophages (HIV factory) and Helper T-cells (T_H / CD4⁺).`,
      solution: `(a) Diagram & Structural Organization of Antibody Molecule:
• Shape: Y-shaped immunoglobulin structure.
• Four Polypeptide Chains:
  - Two identical long Heavy (H) chains.
  - Two identical short Light (L) chains.
• Disulfide Bridges: Chains are linked together by interchain covalent disulfide bonds (-S-S-).
• Antigen-Binding Sites: Each arm of the Y has an antigen-binding site (paratope) at the variable N-terminal region formed by hypervariable loops of both heavy and light chains.
• Constant Region: Forms the stem (Fc region) mediating effector functions.

(b) Representation as H₂L₂:
Each antibody molecule is composed of four polypeptide chains: two identical Heavy (H) chains of higher molecular weight and two identical Light (L) chains of lower molecular weight. Because there are 2 Heavy and 2 Light chains, it is represented as H₂L₂.

(c) Target Cells of HIV:
1. Macrophages: HIV enters macrophages where viral RNA is reverse-transcribed into viral DNA, which incorporates into the host genome to produce more virus particles (macrophages act as an "HIV factory").
2. Helper T-Lymphocytes (CD4⁺ T cells): HIV attacks and replicates within Helper T-lymphocytes, destroying them progressively. As the CD4⁺ T-cell count plummets severely, the patient becomes immunocompromised and succumbs to opportunistic infections (e.g., Mycobacterium, Toxoplasma, fungi).`,
      examApproach: 'Label: Antigen-binding site, Variable region, Constant region, Light chain, Heavy chain, and Disulfide bridges.',
      markingPoints: [
        '1.5 Marks: Accurate Y-shaped antibody diagram with all 5 mandatory labels.',
        '0.5 Mark: Explaining H₂L₂ designation (2 heavy + 2 light chains).',
        '1 Mark: Naming Helper T-lymphocytes (CD4⁺) and macrophages as HIV target cells.'
      ]
    }
  },

  // 6. Ch 9: Biotechnology: Principles & Processes - rDNA Technology / 5-Mark
  {
    id: 'bio-q6',
    questionNumber: 6,
    subjectId: 'biology',
    chapterTitle: 'Biotechnology: Principles & Processes',
    chapterNumber: 9,
    category: 'Important Process & Diagram Questions',
    label: 'High Priority',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2023, 2020',
    question: `(a) What are restriction endonucleases? Explain why they are called 'molecular scissors'.\n(b) Illustrate the recognition sequence and action of EcoRI in producing sticky ends on DNA.\n(c) What are the three essential features required to facilitate cloning into a vector (e.g. pBR322)?`,
    answer: {
      finalAnswer: 'EcoRI cleaves 5\'-GAATTC-3\' between G and A generating sticky ends; Essential vector features are Origin of Replication (ori), Selectable Marker, and Unique Cloning Sites.',
      formulaOrConcept: `• Restriction endonuclease recognizes palindromic nucleotide sequences and cuts specific phosphodiester bonds on both strands.\n• EcoRI sequence: 5\'-G↓AATTC-3\' and 3\'-CTTAA↑G-5\'\n• Vector requirements: ori, selectable marker (amp^R, tet^R), and unique restriction sites.`,
      solution: `(a) Restriction Endonucleases & Molecular Scissors:
• Definition: Bacterial enzymes that recognize specific short palindromic base sequences within a double-stranded DNA molecule and cleave the phosphodiester backbone at specific points on both strands.
• Why Called Molecular Scissors: Because they cut double-stranded DNA molecules at precise, predictable internal sites with surgical precision, allowing scientists to excise specific genes of interest for genetic engineering.

(b) Recognition Sequence and Action of EcoRI:
• EcoRI was isolated from Escherichia coli RY13.
• It recognizes the 6 base-pair palindromic nucleotide sequence:
  5' - G ↓ A  A  T  T  C - 3'
  3' - C  T  T  A  A ↑ G - 5'
• Mechanism of Cleavage:
  - EcoRI cuts both DNA strands between the bases G and A, a little away from the center of the palindrome.
  - This staggered cut leaves single-stranded overhanging stretches at the ends, known as "sticky ends":
    5' - G                   AATTC - 3'
    3' - CTTAA                   G - 5'
  - These sticky ends can readily form hydrogen bonds with their complementary sticky ends cut by the same enzyme, facilitating ligation by DNA Ligase.

(c) Essential Features of a Cloning Vector:
1. Origin of Replication (ori):
   A specific DNA sequence where replication initiates. Any foreign DNA linked to this sequence is replicated inside host cells. It also controls the copy number of the linked foreign DNA.
2. Selectable Marker:
   Genes encoding resistance to antibiotics (e.g., ampicillin resistance amp^R, tetracycline resistance tet^R) that allow discrimination and selective survival of transformants over non-transformants.
3. Cloning / Recognition Sites:
   A vector must possess unique, preferably single recognition sites for commonly used restriction endonucleases within its marker genes to allow insertional inactivation without destroying the vector.`,
      examApproach: 'Always write the 5\' to 3\' polarity and arrows indicating where EcoRI cuts (between G and A).',
      markingPoints: [
        '1 Mark: Definition and "molecular scissors" explanation.',
        '2 Marks: Recognition sequence 5\'-GAATTC-3\' and diagram of EcoRI creating sticky ends.',
        '2 Marks: Explanation of ori, selectable markers, and unique cloning sites.'
      ]
    }
  },

  // 7. Ch 11: Organisms & Populations - Population Interactions / 3-Mark
  {
    id: 'bio-q7',
    questionNumber: 7,
    subjectId: 'biology',
    chapterTitle: 'Organisms & Populations',
    chapterNumber: 11,
    category: 'Most Repeated Questions',
    label: 'CBSE Board Pattern',
    marks: '3 Marks',
    yearTag: 'CBSE 2024, 2022',
    question: `Define and provide one natural biological example for each of the following interspecific interactions:\n(i) Mutualism\n(ii) Commensalism\n(iii) Brood Parasitism\n(iv) Amensalism`,
    answer: {
      finalAnswer: '(i) Mutualism (+/+): Lichens or Fig-Wasp; (ii) Commensalism (+/0): Orchid on mango or Barnacles on whale; (iii) Brood parasitism (+/-): Cuckoo laying eggs in Crow\'s nest; (iv) Amensalism (-/0): Penicillium inhibiting bacterial growth.',
      formulaOrConcept: `• Mutualism (+/+): Both species benefit\n• Commensalism (+/0): One benefits, other unaffected\n• Parasitism (+/-): Parasite benefits, host harmed\n• Amensalism (-/0): One harmed, other unaffected`,
      solution: `(i) Mutualism (+ / +):
• Definition: An obligate positive biological interaction where both interacting species derive mutual benefit from each other.
• Example: Fig tree and Wasp species. The wasp pollinates the fig inflorescence while ovipositing (laying eggs) inside the fruit; the fig provides developing larvae with seeds for nourishment. (Another example: Lichens - association between fungi and algae).

(ii) Commensalism (+ / 0):
• Definition: An interaction in which one species benefits while the other species is neither benefited nor harmed.
• Example: An epiphyte orchid growing on the branch of a mango tree. The orchid gains structural support and sunlight (+), while the mango tree derives neither harm nor benefit (0). (Or cattle egret and grazing cattle).

(iii) Brood Parasitism (+ / -):
• Definition: A specialized form of parasitism in birds where the parasitic bird lays its eggs in the nest of its host bird and lets the host incubate and rear the parasitic chicks.
• Example: The Koel (cuckoo) lays its eggs in the nest of the Crow. The eggs have evolved to resemble the crow's eggs in size and color to minimize the detection and ejection by the host crow.

(iv) Amensalism (- / 0):
• Definition: An interaction between two species where one species is harmed or inhibited while the other species remains completely unaffected.
• Example: Penicillium fungus secretes the antibiotic penicillin which inhibits the growth of Staphylococcus bacteria (-), while Penicillium is unaffected (0).`,
      examApproach: 'Always write the signs (+/+, +/0, +/-, -/0) alongside definitions to display clear conceptual understanding.',
      markingPoints: [
        '0.75 Mark each (Total 3 Marks): Clear definition with signs (+/-, +/0, etc.) and authentic biological example for each.'
      ]
    }
  },

  // 8. Case-Based Question: Biotechnology & Bt Cotton
  {
    id: 'bio-q8',
    questionNumber: 8,
    subjectId: 'biology',
    chapterTitle: 'Biotechnology & its Applications',
    chapterNumber: 10,
    category: 'Case-Based Questions',
    label: 'CBSE Board Pattern',
    marks: '4 Marks Case Study',
    yearTag: 'CBSE 2024 (Sample Paper & Board Exam)',
    question: `Read the following passage and answer the questions that follow:\n\nBt cotton is a genetically modified pest-resistant plant variety widely cultivated to reduce reliance on chemical insecticides. The soil bacterium Bacillus thuringiensis produces crystalline proteinaceous inclusions during sporulation known as Bt toxin. This toxin is encoded by cry genes. The toxin is synthesized as an inactive prototoxin in the bacterium and does not harm the bacterial cell. When an insect pest (like bollworm) ingests the transgenic plant tissue, the inactive crystal protein is solubilized in the insect midgut and activated due to the alkaline pH of the gut, causing midgut epithelial cell lysis and eventual death of the insect.\n\nQuestions:\n(i) Why does the Bt toxin not kill the Bacillus bacterium itself?\n(ii) What physiological condition in the insect gut converts the inactive protoxin into an active toxin?\n(iii) Name the specific cry genes that control:\n  (a) Cotton bollworms\n  (b) Corn borer`,
    answer: {
      finalAnswer: '(i) Exists as inactive protoxin; (ii) Alkaline pH of insect midgut; (iii) (a) cryIAc and cryIIAb control cotton bollworms; (b) cryIAb controls corn borer.',
      formulaOrConcept: `• Inactive protoxin --[Alkaline pH of midgut]--> Solubilized Active Toxin\n• Active toxin binds to surface of epithelial cells -> creates pores -> cell swelling -> lysis -> death\n• cryIAc and cryIIAb -> Cotton bollworms; cryIAb -> Corn borer`,
      solution: `(i) Why Bt Toxin Does Not Kill the Bacterium:
Bacillus thuringiensis produces the Bt toxin in the form of inactive crystalline protoxins. Because it exists in an inactive state within the bacterium, it lacks enzymatic toxicity and does not harm the bacterial cell.

(ii) Activation in the Insect Midgut:
When the insect ingests the plant tissue containing inactive protoxin:
  • The alkaline pH of the insect midgut solubilizes the crystalline protein.
  • Gut proteases cleave the protoxin into the active toxin form.
  • The activated toxin binds to the surface receptors on midgut epithelial cells, creating pores that cause osmotic water entry, cell swelling, and lysis, ultimately leading to insect death.

(iii) Specific cry Genes:
(a) Cotton bollworms: Controlled by proteins encoded by cryIAc and cryIIAb genes.
(b) Corn borer: Controlled by the protein encoded by cryIAb gene.`,
      examApproach: 'CBSE Trap: Be very careful with Roman numerals and capital/lowercase letters: cryIAc and cryIIAb (Cotton bollworm) vs cryIAb (Corn borer).',
      markingPoints: [
        '1 Mark: Inactive protoxin explanation for bacterium survival.',
        '1 Mark: Alkaline pH solubilization and epithelial pore formation.',
        '2 Marks: Correct gene names: cryIAc & cryIIAb for bollworms, cryIAb for corn borer.'
      ]
    }
  },

  // 9. Assertion & Reason: Genetics
  {
    id: 'bio-q9',
    questionNumber: 9,
    subjectId: 'biology',
    chapterTitle: 'Principles of Inheritance & Variation',
    chapterNumber: 4,
    category: 'Assertion & Reason',
    label: 'CBSE Board Pattern',
    marks: '1 Mark',
    yearTag: 'CBSE 2024, 2023',
    question: `Given below are two statements labeled as Assertion (A) and Reason (R):\nAssertion (A): Haemophilia is a sex-linked recessive disorder that affects human males much more frequently than females.\nReason (R): Human males possess only one X chromosome (hemizygous condition), so a single defective allele on the X chromosome results in the disease.`,
    options: [
      '(a) Both (A) and (R) are true and (R) is the correct explanation of (A).',
      '(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(c) (A) is true but (R) is false.',
      '(d) (A) is false but (R) is true.'
    ],
    answer: {
      correctOption: '(a) Both (A) and (R) are true and (R) is the correct explanation of (A).',
      finalAnswer: 'Option (a) is correct: Both Assertion and Reason are true and Reason explains Assertion.',
      formulaOrConcept: `• Haemophilia: X-linked recessive genetic disorder.\n• Males (XY): Single mutant allele (X^h Y) manifests as disease.\n• Females (XX): Requires two mutant alleles (X^h X^h) to manifest; heterozygous (X^H X^h) are unaffected carriers.`,
      solution: `1. Haemophilia is an X-linked recessive disorder where a single protein involved in blood clotting is defective.
2. In males (XY), since there is only one X chromosome, possessing a single defective allele (X^h Y) results in clinical manifestation of the disease.
3. In females (XX), a female manifests haemophilia only if both X chromosomes carry the defective allele (X^h X^h), which is extremely rare because the mother must be at least a carrier and the father must be haemophilic (often non-viable).
4. Therefore, males are far more susceptible, and Reason (R) correctly explains Assertion (A).`,
      examApproach: 'Identify sex linkage (X-chromosome hemizygosity in males) to justify option (a).',
      markingPoints: [
        '1 Mark: Correct selection of option (a) with explanation of male hemizygosity.'
      ]
    }
  }
];
