// services/subjects/biology/part1.ts
// Chapters 1 to 6: Flowering Plants, Human Reproduction, Reproductive Health, Principles of Inheritance, Molecular Basis of Inheritance, Evolution
// Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

export function getBiologyPart1Notes(chapterLower: string): string | null {
  // CHAPTER 1: Sexual Reproduction in Flowering Plants
  if (
    chapterLower.includes('flowering') ||
    chapterLower.includes('sexual reproduction in flowering') ||
    chapterLower === 'b1' ||
    chapterLower.includes('chapter 1: sexual reproduction in flowering plants') ||
    chapterLower.includes('chapter 1 - sexual reproduction in flowering plants')
  ) {
    return `TOPIC: Chapter 1: Sexual Reproduction in Flowering Plants
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Microsporogenesis & Male Gametophyte (Pollen Grain):**
- **Structure of Anther:** Typically bilobed and dithecous (each lobe has 2 thecae separated by a longitudinal groove), tetrasporangiate.
- **Anther Wall Layers (Outer to Inner):**
  1. **Epidermis:** Single outer protective layer.
  2. **Endothecium:** Radially elongated cells with α-cellulosic fibrous bands; hygroscopic; helps in anther dehiscence.
  3. **Middle Layers:** 1 to 3 layers of short-lived cells that degenerate before dehiscence.
  4. **Tapetum:** Innermost nutritive layer; cells possess dense cytoplasm and generally become multinucleated/polyploid; nourishes developing microspores. Produces pollenkitt and enzyme callase.
- **Microsporogenesis:** Inside each microsporangium, diploid sporogenous tissue cells act as **Microspore Mother Cells (MMC or PMC, 2n)** and undergo meiosis to form haploid **microspore tetrads (n)**. On maturity, anthers dehydrate and microspores separate into **pollen grains**.
- **Pollen Grain Structure:**
  * **Exine:** Hard outer layer composed of **Sporopollenin** (most resistant biological polymer known; withstands high temperatures, strong acids, alkalis, and is resistant to all known enzymatic degradation). Fossils of pollen grains are preserved due to sporopollenin.
  * **Germ Pores:** Prominent apertures in exine where sporopollenin is absent; pollen tube emerges through a germ pore.
  * **Intine:** Thin, continuous inner pectocellulosic wall.
  * **2-Celled Stage (Shed in >60% angiosperms):**
    - **Vegetative Cell:** Large, abundant food reserves, large irregularly shaped nucleus.
    - **Generative Cell:** Small, spindle-shaped with dense cytoplasm and nucleus; floats in vegetative cell cytoplasm. Divides mitotically into 2 male gametes.
    - In remaining ~40% angiosperms, generative cell divides before shedding, pollen shed at 3-celled stage.

**2. Megasporogenesis & Female Gametophyte (Embryo Sac):**
- **Structure of Typical Anatropous Ovule (Megasporangium):**
  * Stalk (**Funicle**) attached to placenta; point of attachment to ovule body is **Hilum**.
  * Protective envelopes (**Integuments**) encircle the parenchymatous nutritive tissue (**Nucellus**), leaving a small pore at the tip called **Micropyle**.
  * Opposite micropyle is basal region called **Chalaza**.
- **Megasporogenesis & Monosporic Development:**
  * Single MMC (2n) in micropylar nucellus undergoes meiosis to form a linear tetrad of 4 haploid megaspores (n).
  * 3 megaspores at micropylar end degenerate; **1 functional megaspore (n)** at chalazal end undergoes 3 sequential free-nuclear mitotic divisions producing an **8-nucleate, 7-celled mature embryo sac**:
    - **Micropylar End (Egg Apparatus, 3 cells):** 1 central **Egg cell (n)** + 2 flanking **Synergids (n)** bearing cellular finger-like **Filiform Apparatus** (guides pollen tube entry).
    - **Chalazal End (3 cells):** 3 **Antipodal cells (n)** (nutritive/absorptive).
    - **Center (1 cell):** Large **Central cell** containing **2 Polar nuclei (n + n)**.

**3. Pollination & Outbreeding Devices:**
- **Types of Pollination:**
  * **Autogamy:** Transfer of pollen from anther to stigma of same flower.
    - **Cleistogamous flowers:** Never open (e.g. *Viola, Oxalis, Commelina*); guarantee 100% seed-set even without pollinators; strictly autogamous; causes inbreeding depression.
    - **Chasmogamous flowers:** Open flowers with exposed anthers and stigma.
  * **Geitonogamy:** Pollen transferred from anther of one flower to stigma of another flower on same plant. Genetically self-pollination (zygote from same plant genome), ecologically cross-pollination.
  * **Xenogamy (Allogamy):** Pollen transferred to flower of a genetically different plant. Sole type bringing genetic variation.
- **Outbreeding Devices (Adaptations to prevent self-pollination):**
  1. **Dichogamy:** Pollen release and stigma receptivity not synchronized (Protandry: anthers mature first; Protogyny: stigma matures first).
  2. **Herkogamy:** Spatial barrier between anther and stigma.
  3. **Self-incompatibility:** Genetic mechanism preventing self-pollen germination or tube growth in pistil (inhibited by S-alleles).
  4. **Dicliny / Dioecy:** Production of unisexual flowers. (Papaya is dioecious, prevents both autogamy and geitonogamy; Castor and Maize are monoecious, prevent autogamy but not geitonogamy).

**4. Double Fertilization & Post-Fertilization Embryogeny:**
- **Double Fertilization (Discovered by S.G. Nawaschin):**
  1. **Syngamy (True Fertilization):** 1st Male gamete (n) + Egg cell (n) => **Diploid Zygote (2n)** (develops into Embryo).
  2. **Triple Fusion:** 2nd Male gamete (n) + 2 Polar nuclei (2n) => **Triploid Primary Endosperm Nucleus (PEN, 3n)** inside central cell (develops into Endosperm).
- **Endosperm Types:** Free-nuclear (e.g. Tender coconut water) and Cellular (white coconut meat). Endosperm provides nutrition to developing embryo.
- **Seed Types:**
  * **Non-albuminous (Exalbuminous):** Endosperm completely consumed (Pea, Groundnut, Bean).
  * **Albuminous:** Endosperm retained (Wheat, Maize, Barley, Castor, Coconut).
  * **Perisperm:** Persistent residual nucellus (Black pepper, Beet).
- **Apomixis & Polyembryony:**
  * **Apomixis:** Asexual reproduction mimicking sexual reproduction, forming seeds without fertilization (e.g. *Asteraceae*, grasses; diploid maternal nucellar cells form embryos).
  * **Polyembryony:** Presence of multiple embryos in a single seed (Citrus, Mango).

**COMMON MISTAKE:**
- Confusing coconut water with fruit juice: coconut water is free-nuclear endosperm containing thousands of free nuclei, whereas white kernel is cellular endosperm.
- Forgetting that geitonogamy is genetically identical to autogamy because pollen comes from the same individual plant.`;
  }

  // CHAPTER 2: Human Reproduction
  if (
    chapterLower.includes('human reproduction') ||
    chapterLower === 'b2' ||
    chapterLower.includes('chapter 2: human reproduction') ||
    chapterLower.includes('chapter 2 - human reproduction')
  ) {
    return `TOPIC: Chapter 2: Human Reproduction
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Male Reproductive System:**
- **Scrotum:** Extra-abdominal cutaneous pouch housing testes, maintaining testicular temperature at **2 to 2.5°C below core body temperature**, required for optimal spermatogenesis.
- **Testes Anatomy:**
  * ~250 Testicular Lobules per testis; each lobule contains 1 to 3 highly coiled **Seminiferous Tubules**.
  * Tubule Lining (Germinal Epithelium):
    1. **Spermatogonia (Male Germ Cells, 2n):** Undergo meiosis to produce haploid spermatozoa.
    2. **Sertoli Cells (Sustentacular / Nurse Cells):** Provide metabolic support, nourishment to spermatids, and secrete **Androgen Binding Protein (ABP)** and **Inhibin** (suppresses FSH).
  * Interstitial Spaces (outside tubules): Contain capillaries and **Leydig Cells (Interstitial Cells)**, which secrete **Androgens (mainly Testosterone)** under LH stimulation.
- **Duct System:** Seminiferous tubules -> Rete testis -> Vasa efferentia (10-12 fine ducts) -> Epididymis (stores & matures sperms) -> Vas deferens (ascends into pelvis, loops over bladder) -> joins seminal vesicle duct to form **Ejaculatory Duct** -> Urethra.
- **Accessory Glands:**
  1. **Seminal Vesicles (Paired):** Contribute ~60% semen volume; alkaline fluid rich in **Fructose** (energy source for sperms), prostaglandins, and clotting proteins.
  2. **Prostate Gland (Single):** Milkey, slightly alkaline fluid with citrate, calcium, and proteolytic enzymes; activates sperms.
  3. **Bulbourethral (Cowper's) Glands (Paired):** Secrete clear alkaline mucus for urethral lubrication and neutralization of residual urine acidity before ejaculation.

**2. Female Reproductive System:**
- **Ovaries:** Primary female sex organs producing ovum and steroid hormones (Estrogen and Progesterone).
- **Fallopian Tubes (Oviducts, 10-12 cm):**
  * **Infundibulum:** Funnel-shaped terminal part with finger-like **Fimbriae** that sweep ovulated secondary oocyte from peritoneal cavity.
  * **Ampulla:** Wide, curved middle segment; **SITE OF FERTILIZATION**.
  * **Isthmus:** Narrow lumen connecting to uterus.
- **Uterus (Womb):** Three wall layers:
  1. **Perimetrium:** Outer thin serous membrane.
  2. **Myometrium:** Thick middle smooth muscle layer; exhibits forceful contractions during parturition under **Oxytocin**.
  3. **Endometrium:** Inner vascular glandular layer; undergoes cyclical breakdown during menstruation and forms maternal placenta.

**3. Gametogenesis:**
- **Spermatogenesis:**
  * Spermatogonia (2n, 46 chr) -> Mitosis -> Primary Spermatocytes (2n, 46 chr) -> Meiosis I -> 2 Secondary Spermatocytes (n, 23 chr) -> Meiosis II -> 4 Spermatids (n, 23 chr) -> **Spermiogenesis** (differentiation into flagellated Spermatozoa) -> **Spermiation** (release from Sertoli cells into tubule lumen).
  * Hormonal Control: GnRH (Hypothalamus) -> Anterior Pituitary -> **LH** acts on Leydig cells to stimulate testosterone; **FSH** acts on Sertoli cells to induce spermiogenesis factors.
  * Sperm Anatomy: Head (contains haploid nucleus + anterior cap-like **Acrosome** filled with hyaluronidase/corona penetrating enzymes), Neck (proximal & distal centrioles), Middle Piece (numerous **mitochondria** arranged spirally around axial filament, "powerhouse" providing ATP for motility), Tail.
- **Oogenesis (Discontinuous Process):**
  * Initiated during embryonic development; ~2 million oogonia per fetal ovary; no oogonia formed after birth.
  * Primary oocytes enter Prophase-I of meiosis-I and remain **arrested at Diplotene stage** until puberty.
  * Primary oocyte surrounded by granulosa cells forms **Primary Follicle** -> Secondary -> Tertiary Follicle (characterized by fluid-filled cavity called **Antrum**).
  * First meiotic division completes just before ovulation inside tertiary follicle, producing a large haploid **Secondary Oocyte (n)** and a tiny **First Polar Body (n)**.
  * Secondary oocyte begins Meiosis-II but is **arrested at Metaphase-II** until sperm penetration.

**4. Menstrual Cycle (28-Day Cycle):**
1. **Menstrual Phase (Days 1-5):** Breakdown of endometrial lining and blood vessels due to sharp withdrawal of Progesterone and Estrogen.
2. **Follicular / Proliferative Phase (Days 6-13):** Pituitary FSH stimulates follicular growth. Maturing Graafian follicle secretes **Estrogen**, stimulating endometrial regeneration (proliferation).
3. **Ovulatory Phase (Day 14):** Rapid surge in LH (**LH Surge**) induces rupture of mature Graafian follicle and release of secondary oocyte into pelvic cavity.
4. **Luteal / Secretory Phase (Days 15-28):** Ruptured follicle transforms into endocrine structure **Corpus Luteum**, which secretes large amounts of **Progesterone** (maintains secretory endometrium for implantation). If fertilization does not occur, corpus luteum degenerates into **Corpus Albicans**, progesterone drops, triggering next cycle.

**5. Fertilization, Cleavage, Implantation & Parturition:**
- **Cortical & Zona Reaction:** Sperm binding to ZP3 receptor induces acrosomal reaction; entry of 1st sperm triggers exocytosis of cortical granules, hardening **Zona Pellucida** to prevent **polyspermy**.
- Sperm entry stimulates completion of Meiosis-II in secondary oocyte, releasing **Second Polar Body** and haploid female pronucleus. Syngamy forms **Zygote (2n)**.
- Cleavage: Zygote -> Morula (8-16 blastomeres) -> **Blastocyst** (Outer **Trophoblast** layer + Inner Cell Mass). Trophoblast embeds into endometrium (**Implantation**, ~Day 7 post-fertilization).
- Placental Hormones: **hCG (human Chorionic Gonadotropin)**, **hPL (human Placental Lactogen)**, and **Relaxin** are produced in women ONLY during pregnancy.
- **Parturition (Neuroendocrine Reflex / Foetal Ejection Reflex):**
  * Fully developed fetus and placenta induce mild uterine contractions (foetal ejection reflex), triggering maternal posterior pituitary to release **Oxytocin**. Oxytocin causes stronger myometrial contractions, stimulating more oxytocin in positive feedback until delivery.

**COMMON MISTAKE:**
- Stating fertilization site as "ampullary-isthmic junction". NCERT now strictly defines the site as the **Ampulla**.
- Confusing spermiogenesis (spermatid -> spermatozoon) with spermiation (release of mature sperm from Sertoli cells).`;
  }

  // CHAPTER 3: Reproductive Health
  if (
    chapterLower.includes('reproductive health') ||
    chapterLower === 'b3' ||
    chapterLower.includes('chapter 3: reproductive health') ||
    chapterLower.includes('chapter 3 - reproductive health')
  ) {
    return `TOPIC: Chapter 3: Reproductive Health
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Contraceptive Methods:**
- **Natural / Traditional Methods:**
  * **Periodic Abstinence:** Couples avoid coitus from Day 10 to 17 of menstrual cycle (fertile window around ovulation).
  * **Coitus Interruptus (Withdrawal):** Withdrawal of penis from vagina just before ejaculation.
  * **Lactational Amenorrhoea:** Absence of menstruation during intense breastfeeding due to high prolactin inhibiting gonadotropins; effective only up to maximum **6 months postpartum**.
- **Barrier Methods:**
  * **Condoms:** Prevent sperm deposition in female tract; protect against **STIs (STDs) and AIDS** (e.g. 'Nirodh').
  * **Diaphragms, Cervical Caps, Vaults:** Rubber barriers inserted into female tract to cover cervix; reusable; spermicidal creams/jellies used alongside to increase efficiency.
- **Intrauterine Devices (IUDs - Most Widely Accepted Contraceptive in India):**
  * **Non-Medicated IUDs:** Lippes loop (promotes phagocytosis of sperms within uterus).
  * **Copper-Releasing IUDs:** CuT, Cu7, Multiload 375. Release Cu²⁺ ions which **suppress sperm motility and fertilizing capacity**.
  * **Hormone-Releasing IUDs:** Progestasert, LNG-20. Make uterus unsuitable for implantation and cervix hostile to sperms.
- **Oral Contraceptives (Pills):**
  * Combined estrogen-progesterone pills taken daily for 21 days starting within first 5 days of cycle. Inhibit ovulation and alter cervical mucus.
  * **Saheli:** Once-a-week non-steroidal oral pill developed by **CDRI, Lucknow**; active ingredient Centchroman (selective estrogen receptor modulator); very high contraceptive value with minimal side effects.
- **Injectables & Implants:** Norplant (subdermal progestogen implants under arm skin; effective for 3-5 years).
- **Surgical / Permanent Methods (Sterilization):**
  * **Vasectomy:** Minor incision in scrotum; small segment of each vas deferens is cut and tied off. Prevents sperms from entering ejaculate (semen has seminal fluids but zero sperms).
  * **Tubectomy:** Small incision in abdomen or vagina; fallopian tubes cut and tied off. Prevents ovum from reaching ampulla.

**2. Medical Termination of Pregnancy (MTP / Induced Abortion):**
- Legalized in India in **1971** with strict conditions to avoid misuse (e.g., female foeticide).
- Amended in **MTP Amendment Act 2017**:
  * Safe up to **12 weeks (first trimester)** of pregnancy on opinion of 1 registered medical practitioner.
  * Second trimester (up to 20-24 weeks) requires opinion of 2 registered practitioners, permitted only for severe fetal abnormalities, risk to mother's life, or rape survivors.
- Amniocentesis: Prenatal diagnostic test based on chromosomal analysis of amniotic fluid cells. Legally banned for sex determination to curb female foeticide.

**3. Sexually Transmitted Infections (STIs):**
- Common STIs: Gonorrhoea, Syphilis, Genital herpes, Chlamydiasis, Genital warts, Trichomoniasis, Hepatitis-B, and HIV/AIDS.
- Incurable STIs: **Hepatitis-B, Genital Herpes, and HIV infection**.
- Complications of untreated STIs: Pelvic Inflammatory Diseases (PID), stillbirths, ectopic pregnancies, infertility, or reproductive tract cancers.

**4. Infertility & Assisted Reproductive Technologies (ART):**
- **In Vitro Fertilization (IVF - "Test Tube Baby"):** Fertilization outside the body in simulated laboratory conditions, followed by Embryo Transfer (ET):
  * **ZIFT (Zygote Intra-Fallopian Transfer):** Zygote or early embryo up to **8 blastomeres** transferred into the Fallopian tube.
  * **IUT (Intra-Uterine Transfer):** Embryo with **more than 8 blastomeres** transferred directly into the Uterus.
- **GIFT (Gamete Intra-Fallopian Transfer):** Transfer of an unfertilized ovum collected from a donor into the fallopian tube of a female who cannot produce ova but provides suitable environment for fertilization and development.
- **ICSI (Intra-Cytoplasmic Sperm Injection):** Specialized lab procedure where a single sperm is directly injected into the cytoplasm of an ovum.
- **IUI (Intra-Uterine Insemination):** Semen collected from husband or donor is artificially introduced into female uterus (used when male partner has low sperm count / oligospermia).

**COMMON MISTAKE:**
- Writing ZIFT for embryos > 8 blastomeres. Remember: ≤ 8 blastomeres goes to Fallopian tube (ZIFT); > 8 blastomeres goes to Uterus (IUT).
- Assuming vasectomy stops ejaculation: erection, orgasm, and semen ejaculation still occur normally; only sperms are absent in the ejaculate.`;
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
    return `TOPIC: Chapter 4: Principles of Inheritance and Variation
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Mendel's Laws of Inheritance:**
- Gregor Johann Mendel conducted hybridization experiments on garden peas (*Pisum sativum*) for 7 years (1856-1863). Selected 7 pairs of contrasting traits (Stem height, Flower color, Flower position, Pod shape, Pod color, Seed shape, Seed color).
- **Law of Dominance:** Characters are controlled by discrete units called factors (genes) occurring in pairs. In a dissimilar pair, one factor dominates (dominant allele) and the other is masked (recessive allele).
  * Monohybrid Cross (Tt × Tt): Phenotypic Ratio = **3 : 1**; Genotypic Ratio = **1 : 2 : 1** (1 TT : 2 Tt : 1 tt).
  * **Test Cross:** Crossing an individual showing dominant phenotype (genotype unknown: TT or Tt) with homozygous recessive parent (tt). If progeny is 100% dominant => parent was TT; if 1 : 1 dominant : recessive => parent was Tt.
- **Law of Segregation (Purity of Gametes):** Alleles of a pair segregate during gamete formation such that each gamete receives only one allele. Universal law without any exceptions.
- **Law of Independent Assortment:** In a dihybrid cross, segregation of one pair of traits is independent of the other pair.
  * Dihybrid Phenotypic Ratio (RrYy × RrYy) = **9 : 3 : 3 : 1** (9 Round Yellow : 3 Round Green : 3 Wrinkled Yellow : 1 Wrinkled Green).

**2. Non-Mendelian Inheritance Patterns:**
- **Incomplete Dominance:** Heterozygote exhibits intermediate phenotype between two homozygous parents.
  * Example: Flower color in *Mirabilis jalapa* (4 o'clock plant) and *Antirrhinum majus* (Snapdragon/Dog flower).
  * Red (RR) × White (rr) => F₁ Pink (Rr).
  * F₂ Phenotypic Ratio = Genotypic Ratio = **1 Red : 2 Pink : 1 White (1 : 2 : 1)**.
- **Codominance:** Both alleles express themselves fully and simultaneously in heterozygote.
  * Example: **ABO Blood Groups in Humans** controlled by gene *I* with 3 alleles: *Iᴬ*, *Iᴮ*, and *i*.
  * *Iᴬ* and *Iᴮ* produce different surface sugar polymers; *i* produces none.
  * *Iᴬ* and *Iᴮ* are completely dominant over *i*, but when present together (*Iᴬ Iᴮ*), both express producing blood group **AB** (Codominance).
  * Total number of genotypes = n(n+1)/2 = 3(4)/2 = **6 genotypes**; Total phenotypes = **4 blood groups (A, B, AB, O)**.
- **Pleiotropy:** A single gene influences multiple phenotypic traits (e.g. Phenylketonuria gene causes mental retardation, reduced hair, and skin pigmentation; starch synthesis gene in pea seeds affects starch grain size and seed shape).

**3. Chromosomal Theory of Inheritance & Linkage:**
- **Chromosomal Theory (Sutton and Boveri, 1902):** Chromosomes as well as genes occur in pairs; homologous chromosomes segregate during meiosis; behavior of chromosomes parallels behavior of genes.
- **Thomas Hunt Morgan's Experiments on *Drosophila melanogaster* (Fruit Fly):**
  * Why *Drosophila*? Simple synthetic medium culture, short 2-week life cycle, single mating produces hundreds of progeny, clear morphological sex dimorphism, easily visible variations under low-power microscope.
  * **Linkage:** Physical association of two genes located on the same chromosome. Linked genes do not show independent assortment.
  * Morgan crossed yellow-bodied, white-eyed females with brown-bodied, red-eyed males: F₂ showed 98.7% parental types and only **1.3% recombinants** (tightly linked). In white-eye and miniature-wing cross, recombinants were **37.2%** (loosely linked).
  * **Alfred Sturtevant:** Used recombination frequency as a measure of distance between genes to construct **Genetic Maps** (1% recombination = 1 map unit / centimorgan).

**4. Sex Determination:**
- **XX-XY Type:** Humans, *Drosophila* (Male heterogametic: XY sperms; Female homogametic: XX ova).
- **XX-XO Type:** Grasshopper (Male heterogametic: X and O sperms; Female: XX).
- **ZZ-ZW Type:** Birds (Female heterogametic: ZW; Male homogametic: ZZ).
- **Haplodiploidy in Honeybees:** Males (Drones, n = 16) develop parthenogenetically from unfertilized eggs; Females (Queen/Workers, 2n = 32) develop from fertilized eggs. Males produce sperms by mitosis; have no father and cannot have sons, but have a grandfather and can have grandsons!

**5. Genetic Disorders:**
- **Mendelian Disorders (Gene Mutations):**
  * **Haemophilia:** X-linked recessive bleeding disorder; defect in clotting cascade (Factor VIII or IX). Queen Victoria was a carrier.
  * **Sickle-Cell Anaemia:** Autosomal recessive. Point mutation in β-globin gene: GAG codon transversion to GUG at position 6, substituting **Glutamic acid by Valine**. Mutant HbS polymerizes under low O₂ tension, distorting RBCs into rigid sickle shape. Heterozygotes (HbA/HbS) show resistance to malaria.
  * **Phenylketonuria (PKU):** Inborn error of metabolism; autosomal recessive deficiency of hepatic enzyme **phenylalanine hydroxylase**; phenylalanine accumulates and converts into phenylpyruvic acid, causing mental retardation.
  * **Thalassemia:** Autosomal recessive quantitative defect in globin chain synthesis (α-thalassemia on chr 16; β-thalassemia on chr 11).
- **Chromosomal Disorders (Aneuploidy - Non-disjunction):**
  * **Down's Syndrome:** Trisomy of chromosome 21 (47, XX/XY + 21). Short stature, small round head, furrowed tongue, broad palm with simian crease, physical and mental retardation.
  * **Klinefelter's Syndrome:** Karyotype 47, XXY. Overall masculine development with feminine features (Gynaecomastia - breast development); sterile.
  * **Turner's Syndrome:** Monosomy of X chromosome: 45, X0. Sterile females, rudimentary ovaries, short stature, webbed neck, lack of secondary sexual characteristics.

**COMMON MISTAKE:**
- Confusing Thalassemia with Sickle-cell anaemia: Thalassemia is a **quantitative** problem (too few globin chains synthesized), whereas Sickle-cell anaemia is a **qualitative** problem (synthesis of an incorrectly functioning mutant globin chain).
- Writing 3 : 1 for F₂ in snapdragon: incomplete dominance gives **1 : 2 : 1** for BOTH phenotypic and genotypic ratios!`;
  }

  // CHAPTER 5: Molecular Basis of Inheritance
  if (
    chapterLower.includes('molecular basis') ||
    chapterLower.includes('dna') ||
    chapterLower === 'b5' ||
    chapterLower.includes('chapter 5: molecular basis of inheritance') ||
    chapterLower.includes('chapter 5 - molecular basis of inheritance')
  ) {
    return `TOPIC: Chapter 5: Molecular Basis of Inheritance
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Structure of DNA & Packaging of Chromatin:**
- **Watson-Crick Double Helix Model of B-DNA:**
  * Two polynucleotide chains coiled in a right-handed helix with **anti-parallel polarity** (5'->3' and 3'->5').
  * Backbone made of sugar-phosphate; nitrogenous bases project inward.
  * Complementary Base Pairing via Hydrogen Bonds: Adenine pairs with Thymine via **2 H-bonds** (A = T); Guanine pairs with Cytosine via **3 H-bonds** (G ≡ C).
  * **Chargaff's Rule:** In dsDNA, [A] = [T] and [G] = [C]; hence [A + G] = [T + C] (Purines = Pyrimidines), but (A+T)/(G+C) varies by species.
  * Pitch of helix = **3.4 nm** (contains 10 base pairs per turn); distance between adjacent base pairs = **0.34 nm** (0.34 × 10⁻⁹ m).
- **Packaging of DNA in Eukaryotes:**
  * Human diploid genome has 6.6 × 10⁹ bp => Total length of DNA = 6.6 × 10⁹ × 0.34 × 10⁻⁹ m ≈ **2.2 meters**.
  * **Histone Octamer:** Basic, positively charged proteins rich in **Lysine and Arginine**; 2 copies each of H2A, H2B, H3, H4 form an octamer core.
  * **Nucleosome:** ~200 bp of negatively charged DNA wrapped around histone octamer in 1.75 turns; sealed by H1 histone. Appears as "beads-on-a-string" under electron microscopy.
  * **Euchromatin:** Loosely packed, lightly stained, transcriptionally **active**.
  * **Heterochromatin:** Densely packed, darkly stained, transcriptionally **inactive**.

**2. The Search for Genetic Material:**
- **Griffith's Transforming Principle (1928, *Streptococcus pneumoniae*):**
  * S-strain (smooth, virulent with polysaccharide capsule) kills mice; R-strain (rough, non-virulent) does not kill mice.
  * Heat-killed S-strain + Live R-strain injected into mice => Mice died; recovered living S-strain bacteria. Concluded that some "transforming principle" transferred from heat-killed S to live R.
- **Avery, MacLeod, and McCarty (1944):** Purified biochemicals (proteins, RNA, DNA). Proteases and RNases did not affect transformation; only **DNase inhibited transformation**, proving **DNA is the transforming substance**.
- **Hershey-Chase Experiment (1952 - Unequivocal Proof using Bacteriophage T2):**
  * Labeled phage protein with radioactive Sulfur-35 (³⁵S) and phage DNA with radioactive Phosphorus-32 (³²P).
  * Infected *E. coli* -> Blending (agitation in blender to detach viral coats) -> Centrifugation (spinning to separate bacterial pellet from viral supernatant).
  * Result: Radioactive ³²P was found in bacterial pellet (cells); radioactive ³⁵S remained in supernatant (ghost coats). Proved definitively that **DNA is the genetic material**.

**3. DNA Replication:**
- **Meselson and Stahl Experiment (1958 - Semiconservative Replication):**
  * Grew *E. coli* in medium containing heavy isotope ¹⁵NH₄Cl for many generations until DNA was fully labeled with ¹⁵N.
  * Transferred to normal ¹⁴NH₄Cl medium:
    - Generation 1 (20 min): Extracted DNA showed a single **hybrid density (¹⁵N-¹⁴N)** upon CsCl density gradient centrifugation.
    - Generation 2 (40 min): Equal amounts of **hybrid DNA (¹⁵N-¹⁴N)** and **light DNA (¹⁴N-¹⁴N)** (1:1 ratio). Proved semiconservative replication.
- **Enzymology of Replication:**
  * **Helicase:** Unwinds double helix at Origin of Replication (Ori) forming **Replication Fork**.
  * **DNA-dependent DNA Polymerase:** Synthesizes DNA exclusively in **5' -> 3' direction** with high fidelity and proofreading activity.
  * **Continuous / Leading Strand:** Synthesized continuously on 3' -> 5' template strand.
  * **Discontinuous / Lagging Strand:** Synthesized discontinuously as short **Okazaki Fragments** on 5' -> 3' template strand, joined by **DNA Ligase**.
  * RNA Primer (synthesized by Primase) provides free 3'-OH end for polymerase initiation.

**4. Transcription:**
- **Transcription Unit:** Promoter, Structural gene, Terminator.
- Template Strand: 3' -> 5' polarity; Coding Strand: 5' -> 3' polarity (RNA sequence is identical to coding strand, with U replacing T).
- **In Prokaryotes:** Single RNA polymerase assisted by **Sigma (σ) factor** (initiation) and **Rho (ρ) factor** (termination).
- **In Eukaryotes:** 3 distinct RNA Polymerases:
  * RNA Pol I: Transcribes rRNAs (28S, 18S, 5.8S).
  * RNA Pol II: Transcribes heterogeneous nuclear RNA (**hnRNA**, precursor of mRNA).
  * RNA Pol III: Transcribes tRNA, 5S rRNA, and snRNAs.
- **Post-Transcriptional Processing of hnRNA:**
  1. **Splicing:** Removal of non-coding **introns** and joining of coding **exons** in a defined order by spliceosomes.
  2. **Capping:** Addition of unusual nucleotide **7-methylguanosine triphosphate** to the 5'-end of hnRNA.
  3. **Tailing:** Addition of 200-300 adenylate residues (**Poly-A tail**) to 3'-end in a template-independent manner.

**5. Genetic Code & Translation:**
- **Properties of Genetic Code (Nirenberg, Khorana, Holley):**
  1. **Triplet Code:** 61 codons code for 20 amino acids; 3 **Stop codons** (UAA, UAG, UGA - nonsense codons).
  2. **Degeneracy:** Most amino acids are specified by more than one codon (wobble hypothesis).
  3. **Unambiguous & Specific:** One particular codon codes for only one amino acid.
  4. **Comma-less & Non-overlapping:** Read continuously without punctuation.
  5. **Universal:** UUU codes for Phenylalanine from bacteria to human.
  6. **Dual Function of AUG:** Codes for **Methionine** AND acts as the universal **Initiator codon**.
- **tRNA (Adapter Molecule):** Clover-leaf 2D secondary structure; inverted L-shaped 3D structure. Has an **Anticodon Loop** complementary to mRNA codon and an **Amino Acid Acceptor End** (at 3'-CCA terminal).
- **Translation Stages:** Charging of tRNA (aminoacylation using ATP) -> Initiation (ribosome binds mRNA at AUG) -> Elongation (peptide bond formation catalyzed by 23S rRNA peptidyl transferase in prokaryotes) -> Termination (release factor binds stop codon).

**6. Regulation of Gene Expression (The Lac Operon):**
- Elucidated by François Jacob and Jacques Monod.
- **Components:**
  * Regulator gene (*i* gene): Synthesizes active **Lac Repressor protein** constitutively.
  * Promoter (*P*) and Operator (*O*) sites.
  * Structural Genes:
    - **z gene:** Codes for **β-galactosidase** (hydrolyzes lactose into glucose and galactose).
    - **y gene:** Codes for **Permease** (increases cell membrane permeability to β-galactosides).
    - **a gene:** Codes for **Transacetylase** (transfers acetyl group to β-galactosides).
- **Mechanism:**
  * **In Absence of Inducer (Lactose):** Repressor protein binds to operator gene, blocking RNA polymerase from transcribing structural genes (**Negative Regulation, Operon OFF**).
  * **In Presence of Inducer (Allolactose/Lactose):** Inducer binds to repressor, inducing conformational change that inactivates it. Inactive repressor cannot bind operator; RNA polymerase binds promoter and transcribes z, y, a genes (**Operon ON**).

**COMMON MISTAKE:**
- Confusing template strand with coding strand: mRNA has the EXACT sequence of the coding strand (5' -> 3'), except Thymine is replaced by Uracil.
- Forgetting that the *i* gene in lac operon stands for **inhibitor**, NOT inducer.`;
  }

  // CHAPTER 6: Evolution
  if (
    chapterLower.includes('evolution') ||
    chapterLower === 'b6' ||
    chapterLower.includes('chapter 6: evolution') ||
    chapterLower.includes('chapter 6 - evolution')
  ) {
    return `TOPIC: Chapter 6: Evolution
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Origin of Life & Miller-Urey Experiment:**
- Big Bang Theory (~20 billion years ago); Earth formed ~4.5 billion years ago. Primitive reducing atmosphere contained methane, ammonia, hydrogen, and water vapor (no free O₂).
- **Oparin-Haldane Hypothesis:** Life originated abiogenetically from pre-existing non-living organic molecules ("chemical evolution").
- **Miller-Urey Experiment (1953):**
  * Simulated primitive Earth conditions in a closed spark-discharge flask: electric discharge of 75,000 volts at **800°C** in gas mixture of **CH₄, NH₃, H₂, and H₂O** (in ratio 2:1:2).
  * Condensation of circulating liquid yielded organic compounds: **amino acids** (glycine, alanine, aspartic acid), sugars, purines, pyrimidines, and organic acids. Confirmed chemical evolution.

**2. Evidences for Evolution:**
- **Paleontological Evidences:** Fossils in sedimentary rock strata show morphological transitions over geological time.
- **Homologous Structures (Divergent Evolution):**
  * Same basic anatomical structure and embryonic origin, adapted to perform different functions.
  * Examples: Forelimbs of **Whale, Bat, Cheetah, and Human** (all have humerus, radius, ulna, carpals, metacarpals, phalanges); Thorns of *Bougainvillea* and Tendrils of *Cucurbita* (both modified axillary buds).
- **Analogous Structures (Convergent Evolution):**
  * Different anatomical structure and origin, performing similar functions due to similar selective pressures.
  * Examples: Wings of **Butterfly and Birds**; Eyes of **Octopus and Mammals**; Flippers of **Penguins and Dolphins**; Sweet potato (root modification) and Potato (stem modification).
- **Adaptive Radiation:**
  * Evolution of different species in a given geographical area starting from a common point and radiating to different ecological niches.
  * Examples: **Darwin's Finches** on Galapagos Islands (ancestral seed-eating finches radiated into insectivorous, vegetarian, and cactus-feeding beaks); **Australian Marsupials** (Tasmanian wolf, sugar glider, wombat radiating from single ancestor).
- **Industrial Melanism in England (*Biston betularia*):**
  * Before industrialization (1850s): White-winged moths predominated because tree trunks were covered with white lichens (camouflaged from predators).
  * After industrialization (1920s): Soot and smoke blackened tree trunks and killed lichens; melanic dark-winged moths (*Biston carbonaria*) survived better (**Natural Selection in Action**).

**3. Theories of Evolution:**
- **Lamarckism:** Inheritance of acquired characters via use and disuse of organs (disproved by Weismann's germplasm theory).
- **Darwinism (Theory of Natural Selection):** Based on high reproductive rate, limited resources, struggle for existence, survival of the fittest, and variation. Darwin viewed evolution as a gradual, continuous process.
- **Mutation Theory of Hugo de Vries (Evening Primrose - *Oenothera lamarckiana*):**
  * Mutations are large, sudden, discontinuous, random, and directionless genetic changes.
  * Coined term **Saltation** (single-step large mutation) to explain speciation, contrasting with Darwin's slow, directional variations.

**4. Hardy-Weinberg Principle & Population Genetics:**
- Allele frequencies in a large, randomly mating population remain constant from generation to generation in the absence of evolutionary influences.
- **Equations:**
  * Allele frequencies: **p + q = 1** (p = frequency of dominant allele A; q = frequency of recessive allele a).
  * Genotypic frequencies: **(p + q)² = p² + 2pq + q² = 1**
    - **p²:** Frequency of homozygous dominant individuals (AA).
    - **2pq:** Frequency of heterozygous individuals (Aa).
    - **q²:** Frequency of homozygous recessive individuals (aa).
- **Factors Disrupting Hardy-Weinberg Equilibrium:**
  1. Gene flow / Gene migration.
  2. Genetic drift (accidental change in allele frequencies in small populations; includes **Founder Effect** and **Bottleneck Effect**).
  3. Mutation.
  4. Genetic recombination (crossing over during meiosis).
  5. Natural selection (Stabilizing, Directional, or Disruptive selection).

**5. Human Evolution Sequence (Must Memorize Order & Brain Capacities):**
1. **Dryopithecus & Ramapithecus** (~15 mya): Hairy, walked like gorillas/chimpanzees; *Ramapithecus* more man-like, *Dryopithecus* more ape-like.
2. **Australopithecines** (~2 mya, East African grasslands): Hunted with stone weapons, essentially ate fruit; brain capacity ~450-600 cc.
3. **Homo habilis** ("Handy man", first human-like hominid): Cranial capacity **650 - 800 cc**; did not eat meat.
4. **Homo erectus** (~1.5 mya, Java man fossils): Cranial capacity **900 cc**; ate meat.
5. **Neanderthal Man** (100,000 to 40,000 years ago, Central Asia): Cranial capacity **1400 cc**; used hides to protect body and buried their dead.
6. **Homo sapiens** (modern man, arose in Africa 75,000-10,000 years ago during Ice Age): Pre-historic cave art developed ~18,000 years ago; agriculture began ~10,000 years ago.

**COMMON MISTAKE:**
- Confusing cranial capacities: *Homo habilis* is 650-800 cc, *Homo erectus* is 900 cc, and Neanderthal man is 1400 cc.
- Confusing homologous with analogous organs: Homology = divergent evolution (common ancestor, different functions); Analogy = convergent evolution (different ancestors, same function).`;
  }

  return null;
}
