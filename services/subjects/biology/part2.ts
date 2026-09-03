// services/subjects/biology/part2.ts
// Chapters 7 to 13 + Full Revision: Human Health, Microbes, Biotech Principles, Biotech Applications, Organisms & Populations, Ecosystem, Biodiversity, Master Revision
// Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

export function getBiologyPart2Notes(chapterLower: string): string | null {
  // FULL REVISION / MASTER REVISION BOOK
  if (
    chapterLower.includes('revision') ||
    chapterLower.includes('full') ||
    chapterLower.includes('master') ||
    chapterLower.includes('summary') ||
    chapterLower === 'b_all'
  ) {
    return `TOPIC: CBSE Class 12 Biology Complete Master Revision Capsule (2026-27 Pattern)
Master Notebook Revision Book - Comprehensive high-yield synthesis covering all 13 NCERT chapters, key physiological cycles, genetics formulas, microbial tables, and ecological laws.

**1. Genetics & Molecular Biology Quick Review:**
- Monohybrid phenotypic ratio = 3:1, genotypic ratio = 1:2:1.
- Dihybrid phenotypic ratio = 9:3:3:1.
- Incomplete dominance & Codominance phenotypic & genotypic ratio = 1:2:1.
- DNA Double Helix: Pitch = 3.4 nm (10 bp/turn), base distance = 0.34 nm.
- Histone Octamer: Positively charged basic proteins rich in **Lysine and Arginine**; Nucleosome wraps ~200 bp DNA.
- Transcription: Template strand 3'->5'; Coding strand 5'->3'. RNA has U instead of T.
- Lac Operon: *i* gene (repressor), *z* (β-galactosidase), *y* (permease), *a* (transacetylase). Inducer = Lactose/Allolactose.
- Hardy-Weinberg Equations: **p + q = 1** and **p² + 2pq + q² = 1**.

**2. Human Physiology & Health Summary:**
- Menstrual Cycle: Days 1-5 Menses; Days 6-13 Proliferative (Estrogen); Day 14 Ovulation (**LH Surge**); Days 15-28 Secretory (Corpus luteum -> **Progesterone**).
- Implantation stage: **Blastocyst** with outer trophoblast and inner cell mass.
- Contraceptives:
  * Non-medicated: Lippes loop.
  * Cu-releasing: CuT, Cu7, Multiload 375 (suppress sperm motility).
  * Hormone-releasing: Progestasert, LNG-20 (make uterus hostile).
  * Non-steroidal pill: **Saheli** (CDRI Lucknow, once-a-week).
- Infectious Diseases:
  * Typhoid (*Salmonella typhi*, Widal test).
  * Pneumonia (*Streptococcus pneumoniae*, *Haemophilus influenzae*).
  * Malaria (*Plasmodium vivax/falciparum*, vector female *Anopheles* mosquito; infective stage to humans is **sporozoite**).
  * AIDS (HIV retrovirus, attacks **Helper T-cells / CD4+ lymphocytes**; diagnostic test **ELISA**, confirmed by Western Blot).
- Immunity:
  * Innate: Physical, Physiological, Cellular (PMNL, monocytes), Cytokine (**Interferons** protect non-infected cells from viral attack).
  * Acquired: B-cells (Antibody-Mediated / Humoral Immunity: IgG, IgA in colostrum, IgM, IgE in allergy, IgD); T-cells (Cell-Mediated Immunity: graft rejection).

**3. Biotechnology & Microbes Master Tables:**
- Microbes in Household & Industry:
  * *Lactobacillus* (LAB): Converts milk to curd, increases Vitamin B12.
  * *Saccharomyces cerevisiae* (Brewer's/Baker's yeast): Fermentation (CO₂).
  * *Aspergillus niger* (fungus): Citric acid.
  * *Acetobacter aceti* (bacterium): Acetic acid.
  * *Clostridium butylicum* (bacterium): Butyric acid.
  * *Lactobacillus* (bacterium): Lactic acid.
  * *Streptococcus*: Produces **Streptokinase** ("clot buster" for myocardial infarction).
  * *Trichoderma polysporum* (fungus): Produces **Cyclosporin A** (immunosuppressive agent in organ transplants).
  * *Monascus purpureus* (yeast): Produces **Statins** (blood-cholesterol lowering agent; competitively inhibits HMG-CoA reductase).
- Recombinant DNA Technology:
  * Restriction Endonuclease: *EcoRI* cuts 5'-G↓AATTC-3' producing sticky ends.
  * Gel Electrophoresis: DNA fragments migrate toward anode (+); visualized with **Ethidium Bromide** under UV light as bright orange bands; extraction from gel is **Elution**.
  * Cloning Vector pBR322: Contains selectable markers *ampᴿ* and *tetᴿ*. Insertional inactivation of *tetᴿ* identifies recombinants.
  * PCR: Denaturation (94°C) -> Annealing (50-60°C) -> Extension (72°C using **Taq polymerase** from *Thermus aquaticus*).
- Applications:
  * Bt Cotton: *cryIAc* and *cryIIAb* control cotton bollworms; *cryIAb* controls corn borer.
  * RNA Interference (RNAi): Cellular defense in eukaryotes; silencing specific mRNA using double-stranded RNA (dsRNA). Controlled nematode *Meloidogyne incognita* in tobacco roots.
  * Genetically Engineered Insulin (Humulin, Eli Lilly 1983): Synthesized A and B chains separately in *E. coli*, joined by disulfide bridges (eliminates C-peptide).
  * First Gene Therapy (1990): 4-year-old girl with **Adenosine Deaminase (ADA) deficiency** using retroviral vector.

**4. Ecology & Environment Formulas & Laws:**
- Species-Area Relationship: **log S = log C + Z log A**. (Z = 0.1 to 0.2 generally; Z = 1.15 for frugivorous birds in tropical forests).
- Population Growth:
  * Exponential: **dN/dt = r N** => **N_t = N₀ e^(rt)** (J-shaped).
  * Logistic: **dN/dt = r N [ (K - N) / K ]** (Sigmoid/S-shaped, K = Carrying capacity).
- Productivity: **NPP = GPP - R**.
- 10% Energy Law (Lindeman): Only 10% energy transfers between trophic levels; ecological pyramids of energy are **ALWAYS UPRIGHT**.
- Evil Quartet (Biodiversity Loss): Habitat loss and fragmentation (most important), Over-exploitation, Alien species invasions (*Parthenium*, *Lantana*, *Eichhornia*, *Clarias gariepinus*), Co-extinctions.

**KEY POINTS:**
- Always label diagrams with correct terminology.
- Distinguish between infectious stage (sporozoite) and toxic release (haemozoin causing chills).`;
  }

  // CHAPTER 7: Human Health and Disease
  if (
    chapterLower.includes('human health') ||
    chapterLower.includes('disease') ||
    chapterLower === 'b7' ||
    chapterLower.includes('chapter 7: human health and disease') ||
    chapterLower.includes('chapter 7 - human health and disease')
  ) {
    return `TOPIC: Chapter 7: Human Health and Disease
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Common Infectious Diseases in Humans:**
- **Typhoid:**
  * Pathogen: *Salmonella typhi* (Gram-negative bacterium).
  * Transmission: Contaminated food and water; enters small intestine and migrates to other organs via blood.
  * Symptoms: Sustained high fever (39° to 40°C), stomach pain, constipation, headache, loss of appetite. Severe cases: intestinal perforation and death.
  * Diagnostic Test: **Widal Test**. Classic case: Mary Mallon ("Typhoid Mary").
- **Pneumonia:**
  * Pathogens: *Streptococcus pneumoniae* and *Haemophilus influenzae*.
  * Pathology: Infects alveoli of lungs; alveoli fill with fluid leading to severe respiratory difficulty.
  * Symptoms: Fever, chills, cough, headache. In severe cases, fingernails and lips turn gray to bluish. Transmitted via aerosols/droplets.
- **Common Cold:**
  * Pathogen: **Rhino viruses**.
  * Infects nose and respiratory passage, but **NOT the lungs** (crucial difference from pneumonia). Lasts 3-7 days.
- **Malaria:**
  * Pathogen: Protozoan *Plasmodium* (*P. vivax, P. malariae, P. falciparum* - most severe/malignant).
  * Vector: Female *Anopheles* mosquito.
  * **Life Cycle of Plasmodium:**
    1. Mosquito bites human and injects **Sporozoites** (infective stage) into bloodstream.
    2. Parasites reach liver cells and multiply asexually, bursting liver cells.
    3. Parasites attack Red Blood Cells (RBCs), multiplying asexually and rupturing them.
    4. Rupture of RBCs releases toxic substance **Haemozoin**, which causes the recurring **chills and high fever every 3 to 4 days**.
    5. Sexual stages (**Gametocytes**) develop in human RBCs.
    6. Female *Anopheles* sucks blood containing gametocytes; fertilization and development occur in **mosquito's gut**.
    7. Mature infective sporozoites escape gut and migrate to **mosquito salivary glands**, ready to infect a new host.
- **Amoebiasis (Amoebic Dysentery):**
  * Pathogen: *Entamoeba histolytica* (protozoan parasite in large intestine).
  * Vector: Housefly; symptoms include stools with excess mucus and blood clots.
- **Helminthic Diseases:**
  * **Ascariasis:** *Ascaris lumbricoides* (intestinal roundworm). Internal bleeding, muscular pain, blockage of intestinal passage. Eggs excreted with feces.
  * **Elephantiasis / Filariasis:** *Wuchereria bancrofti* and *W. malayi* (filarial worms transmitted by female *Culex* mosquito). Chronic inflammation and swelling of lymphatic vessels of lower limbs and genital organs.
- **Ringworm (Fungal):**
  * Pathogens: Fungi belonging to genera *Microsporum, Trichophyton*, and *Epidermophyton*. Dry, scaly, itchy lesions on skin, nails, and scalp.

**2. Immunity & Immune System:**
- **Innate Immunity (Non-Specific, Present from Birth):**
  1. **Physical Barriers:** Skin (prevents entry of microbes), Mucous coating of respiratory, gastrointestinal, and urogenital tracts.
  2. **Physiological Barriers:** Acid in stomach, Lysozyme in saliva and tears (hydrolyzes bacterial cell walls).
  3. **Cellular Barriers:** Phagocytic WBCs (Polymorphonuclear leukocytes - PMNL/neutrophils, Monocytes), Natural Killer (NK) cells, Macrophages.
  4. **Cytokine Barriers:** Virus-infected cells secrete glycoproteins called **Interferons**, which protect non-infected surrounding cells from viral infection.
- **Acquired Immunity (Pathogen-Specific, Characterized by Memory):**
  * **Primary Response:** Low intensity on first encounter with pathogen.
  * **Secondary / Anamnestic Response:** Highly intensified, rapid response on second encounter due to immunological memory.
  * **Humoral / Antibody-Mediated Immunity (AMI):** Mediated by **B-lymphocytes** which produce antibodies in blood/lymph.
    - Structure of Antibody Molecule (H₂L₂): Y-shaped molecule consisting of 2 identical heavy chains and 2 identical light chains held by disulfide bonds.
    - Ig Classes: **IgG** (most abundant, crosses placenta), **IgA** (present in **Colostrum** - mother's first milk, confers passive immunity to newborn), **IgM** (largest pentamer, produced first in primary response), **IgE** (mediates allergic reactions by binding mast cells), **IgD**.
  * **Cell-Mediated Immunity (CMI):** Mediated by **T-lymphocytes** (Cytotoxic T-cells, Helper T-cells).
    - Responsible for **Graft Rejection** following organ transplants. Body differentiates 'self' and 'non-self'. Immunosuppressants like **Cyclosporin A** are administered to prevent rejection.
- **Active vs Passive Immunity:**
  * **Active Immunity:** Host's own immune system produces antibodies upon exposure to living or dead microbes (e.g. natural infection or vaccines); slow, long-lasting.
  * **Passive Immunity:** Ready-made pre-formed antibodies directly administered to recipient (e.g. Colostrum with IgA; anti-tetanus serum ATS; anti-snake venom); rapid, short-term.
- **Autoimmunity:** Body's immune system fails to recognize self-antigens and attacks its own body tissues (e.g. **Rheumatoid Arthritis**).

**3. AIDS (Acquired Immuno Deficiency Syndrome):**
- Causative Agent: **HIV (Human Immunodeficiency Virus)**, a **Retrovirus** with an RNA genome enclosed in a protein coat and enzyme **Reverse Transcriptase**.
- **Replication of HIV in Human Body:**
  1. HIV enters macrophages and helper T-lymphocytes (CD4+ T-cells).
  2. Viral RNA converts into viral DNA via enzyme **Reverse Transcriptase**.
  3. Viral DNA incorporates into host genome, directing infected host cell to produce new viral particles. Macrophages act as a "HIV factory".
  4. HIV enters **Helper T-lymphocytes (T_H cells)**, replicates, and destroys them.
  5. Progressive depletion of T_H cells causes severe immunodeficiency: patient becomes vulnerable to opportunistic infections by *Mycobacterium*, viruses, fungi, and parasites like *Toxoplasma*.
- **Diagnosis & Treatment:** Diagnostic test is **ELISA (Enzyme-Linked Immunosorbent Assay)**; confirmed by Western Blot. Treated with anti-retroviral drugs (only prolongs life, cannot cure).

**4. Cancer:**
- Loss of **Contact Inhibition** (normal cells stop dividing upon contact with neighboring cells; cancer cells lose this, forming tumors).
- **Types of Tumors:**
  * **Benign:** Confined to original location, do not spread.
  * **Malignant:** Masses of proliferating neoplastic cells that invade and destroy surrounding tissues; show **Metastasis** (cells slough off into blood/lymph to seed secondary tumors elsewhere - most feared property).
- **Carcinogens:** Physical (X-rays, gamma rays, UV rays), Chemical (tobacco smoke), Biological (**Oncogenic viruses** carrying viral oncogenes; cellular oncogenes/c-onc present in normal cells get activated).
- **Detection & Treatment:** Biopsy, histopathology, CT scans, MRI, antibodies against cancer-specific antigens. Treatment: Surgery, Radiation therapy, Chemotherapy, and **Immunotherapy (α-interferon)** which activates patient's immune system to destroy tumors.

**COMMON MISTAKE:**
- Confusing Humoral Immunity (B-cells) with Cell-Mediated Immunity (T-cells). Graft rejection is strictly mediated by **T-cells (Cell-Mediated Immunity)**.
- Writing that HIV attacks RBCs: HIV attacks **Helper T-lymphocytes (CD4+) and Macrophages**, never RBCs.`;
  }

  // CHAPTER 8: Microbes in Human Welfare
  if (
    chapterLower.includes('microbes') ||
    chapterLower === 'b8' ||
    chapterLower.includes('chapter 8: microbes in human welfare') ||
    chapterLower.includes('chapter 8 - microbes in human welfare')
  ) {
    return `TOPIC: Chapter 8: Microbes in Human Welfare
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Microbes in Household Products:**
- **Lactic Acid Bacteria (LAB / *Lactobacillus*):** Converts milk to curd by producing acids that coagulate and partially digest milk proteins (casein). Increases nutritional quality by substantially enhancing **Vitamin B₁₂** content; also checks growth of disease-causing microbes in gut.
- **Dough for Dosa and Idli:** Fermented by bacteria; puffed-up appearance is due to production of **CO₂ gas**.
- **Bread Dough:** Fermented using Baker's Yeast (**Saccharomyces cerevisiae**).
- **Toddy:** Traditional drink of Southern India made by fermenting sap from palms.
- **Cheese Varieties:**
  * **Swiss Cheese:** Large holes caused by production of large amount of CO₂ by bacterium **Propionibacterium sharmanii**.
  * **Roquefort Cheese:** Ripened by growing a specific fungus (*Penicillium roqueforti*) on it, giving unique flavor.

**2. Microbes in Industrial Products:**
- **Fermented Beverages:** Brewer's Yeast (*Saccharomyces cerevisiae*) ferments malted cereals and fruit juices to produce ethanol.
  * Produced without distillation (lower alcohol content): **Wine and Beer**.
  * Produced with distillation of fermented broth (higher alcohol content): **Whisky, Brandy, and Rum**.
- **Antibiotics:**
  * Discovered accidentally by **Alexander Fleming** while working on *Staphylococcus*; observed mold **Penicillium notatum** inhibiting bacterial growth.
  * Full therapeutic potential as an effective antibiotic was established by **Ernest Chain and Howard Florey** (awarded Nobel Prize in 1945).
- **Chemicals, Enzymes and other Bioactive Molecules (Compulsory Match-the-Following Questions):**
  * **Organic Acids:**
    - Citric Acid: *Aspergillus niger* (fungus)
    - Acetic Acid: *Acetobacter aceti* (bacterium)
    - Butyric Acid: *Clostridium butylicum* (bacterium)
    - Lactic Acid: *Lactobacillus* (bacterium).
  * **Enzymes:**
    - **Lipases:** Used in detergent formulations to remove oily stains from laundry.
    - **Pectinases and Proteases:** Used for clarifying bottled commercial fruit juices.
    - **Streptokinase:** Produced by bacterium *Streptococcus* (genetically modified); used as a **"clot buster"** to dissolve blood clots from blood vessels of patients suffering from myocardial infarction.
  * **Bioactive Molecules:**
    - **Cyclosporin A:** Produced by fungus **Trichoderma polysporum**; used as an **immunosuppressive agent** in organ-transplant patients.
    - **Statins:** Produced by yeast **Monascus purpureus**; used as **blood-cholesterol lowering agents**; acts by competitively inhibiting the enzyme HMG-CoA reductase responsible for cholesterol synthesis.

**3. Microbes in Sewage Treatment:**
- **Primary Treatment (Physical):** Sequential filtration (removes floating debris) and sedimentation (removes grit, soil, pebbles). Settled solids form **primary sludge**, supernatant forms **primary effluent**.
- **Secondary / Biological Treatment:**
  1. Primary effluent is pumped into large **aeration tanks** with mechanical agitation and air pumping.
  2. Vigorous growth of useful aerobic microbes into **flocs** (masses of bacteria associated with fungal filaments forming mesh-like networks).
  3. Microbes consume organic matter, drastically reducing **Biochemical Oxygen Demand (BOD)** of effluent.
     * **BOD Definition:** Amount of oxygen consumed if all organic matter in one liter of water were oxidized by bacteria. High BOD indicates high pollution level.
  4. Once BOD is significantly reduced, effluent passes into **settling tank** where flocs sediment to form **activated sludge**.
  5. A small part of activated sludge is pumped back into aeration tank as **inoculum**.
  6. Remaining major part is pumped into large **anaerobic sludge digesters**, where anaerobic bacteria digest bacteria and fungi, producing **Biogas (mixture of CH₄, H₂S, and CO₂)**.

**4. Microbes as Biocontrol Agents & Biofertilizers:**
- **Biocontrol of Pests:**
  * Ladybird beetle controls aphids; Dragonflies control mosquitoes.
  * **Bacillus thuringiensis (Bt):** Spores dried and mixed with water to spray on crops (brassicas, fruit trees); insect larvae eat spores, toxin is released in alkaline gut, killing larvae.
  * Fungus **Trichoderma** (free-living in root ecosystems): Effective against several plant soil-borne pathogens.
  * **Baculoviruses (Genus *Nucleopolyhedrovirus*):** Pathogens that attack insects and other arthropods; species-specific, narrow-spectrum insecticides with zero negative impacts on plants, mammals, birds, or non-target beneficial insects (ideal for IPM programs).
- **Biofertilizers:**
  * **Bacteria:** *Rhizobium* (symbiotic in legume nodules, fixes atmospheric N₂); *Azotobacter* and *Azospirillum* (free-living nitrogen-fixers in soil).
  * **Fungi (Mycorrhiza):** Symbiotic association of fungi (genus **Glomus**) with plant roots. Fungus absorbs **phosphorus** from soil and passes it to plant; provides resistance to root-borne pathogens, tolerance to salinity and drought.
  * **Cyanobacteria (Blue-Green Algae):** *Anabaena, Nostoc, Oscillatoria* fix atmospheric nitrogen; serve as important biofertilizer in paddy fields; add organic matter.

**COMMON MISTAKE:**
- Confusing *Trichoderma* (fungus producing Cyclosporin A and acting as biocontrol) with *Trichophyton* (fungus causing ringworm disease).
- Forgetting that BOD is inversely related to dissolved oxygen: higher BOD means MORE polluted water, not cleaner water.`;
  }

  // CHAPTER 9: Biotechnology: Principles and Processes
  if (
    chapterLower.includes('principles and processes') ||
    chapterLower.includes('biotechnology: principles') ||
    chapterLower === 'b9' ||
    chapterLower.includes('chapter 9: biotechnology: principles and processes') ||
    chapterLower.includes('chapter 9 - biotechnology: principles and processes')
  ) {
    return `TOPIC: Chapter 9: Biotechnology: Principles and Processes
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Core Principles of Biotechnology:**
- **Genetic Engineering:** Techniques to alter the chemistry of genetic material (DNA/RNA) to introduce into host organisms and change the host phenotype.
- **Bioprocess Engineering:** Maintenance of sterile (microbial contamination-free) ambient conditions in chemical engineering processes to enable growth of desired microorganism/eukaryotic cells in large quantities for manufacture of biotechnological products (antibiotics, vaccines, enzymes).
- **Three Core Steps in Creating a Genetically Modified Organism (GMO):**
  1. Identification of DNA with desirable genes.
  2. Introduction of the identified DNA into the host.
  3. Maintenance of introduced DNA in host and transfer of DNA to its progeny.

**2. Tools of Recombinant DNA Technology:**
- **Restriction Endonucleases ("Molecular Scissors"):**
  * Discovered in 1963 in *E. coli*: one enzyme added methyl groups to DNA, the other cut DNA (restriction enzyme).
  * First discovered restriction endonuclease: **Hind II** (isolated by Smith, Nathans, Arber; cuts DNA at a specific 6-bp recognition sequence).
  * Over 900 restriction enzymes isolated from over 230 strains of bacteria.
  * **Nomenclature (e.g. *EcoRI*):**
    - 'E' from genus *Escherichia*.
    - 'co' from species *coli*.
    - 'R' from strain RY13.
    - 'I' indicates Roman numeral order of isolation.
  * **Mode of Action:**
    - Recognizes specific **Palindromic Nucleotide Sequences** (reads same in 5'->3' direction on both complementary strands).
    - *EcoRI* recognition site:
      5' - G ↓ A A T T C - 3'
      3' - C T T A A ↑ G - 5'
    - Cuts each of the two strands at specific points between same two bases (G and A), leaving single-stranded overhanging stretches called **Sticky Ends**. Sticky ends facilitate hydrogen bonding with complementary cut ends by **DNA Ligase**.
- **Gel Electrophoresis (Separation and Isolation of DNA Fragments):**
  * DNA fragments are **negatively charged** (due to phosphate groups) and migrate towards the **Anode (+)** through an **Agarose gel matrix** under an electric field.
  * Sieve Effect: Smaller fragments move farther/faster than larger fragments.
  * **Visualization:** DNA cannot be seen in visible light. Gel must be stained with **Ethidium Bromide (EtBr)** and exposed to **UV light**, appearing as **bright orange colored bands**.
  * **Elution:** The process of cutting out the separated DNA band from the agarose gel and extracting it from the gel slice.
- **Cloning Vectors:**
  * Must possess:
    1. **Origin of Replication (Ori):** DNA sequence where replication initiates. Controls the copy number of linked foreign DNA.
    2. **Selectable Marker:** Identifies and selects transformants while eliminating non-transformants. Antibiotic resistance genes like *ampᴿ* (ampicillin) and *tetᴿ* (tetracycline) in *E. coli*.
    3. **Cloning Sites (Recognition Sites):** Single unique recognition site for restriction enzyme preferred.
  * **Plasmid pBR322:**
    - Carries *ori*, *rop* (codes for proteins involved in replication of plasmid), and two selectable markers: *ampᴿ* and *tetᴿ*.
    - *BamHI* and *SalI* restriction sites are located inside the *tetᴿ* gene; *PstI* and *PvuI* are inside the *ampᴿ* gene.
  * **Insertional Inactivation:**
    - Insertion of foreign DNA into *BamHI* site of *tetᴿ* gene disrupts and inactivates tetracycline resistance.
    - Recombinants grow on ampicillin plates but **fail to grow on tetracycline plates**, allowing direct selection.
    - **Alternative Blue-White Screening:** Insertional inactivation of **β-galactosidase (*lacZ*) gene**. Non-recombinants produce active enzyme and form **blue colonies** with chromogenic substrate X-gal; recombinants with inserted DNA have inactivated enzyme and form **white colonies**.
  * **Vectors for Cloning in Plants & Animals:**
    - Plants: **Agrobacterium tumefaciens** (soil bacterium with tumor-inducing **Ti-plasmid** modified into non-pathogenic cloning vector).
    - Animals: **Disarmed Retroviruses** used to deliver desirable genes into mammalian cells.
- **Competent Host Preparation (Methods of Gene Transfer):**
  1. Chemical Method: Divalent cations (e.g. Ca²⁺) increase cell wall permeability; heat shock (42°C followed by ice incubation) forces plasmid into bacterium.
  2. **Micro-injection:** Recombinant DNA directly injected into nucleus of an animal cell using micro-needle.
  3. **Biolistics / Gene Gun:** Plant cells bombarded with high-velocity micro-particles of **Gold or Tungsten** coated with DNA.

**3. Processes of Recombinant DNA Technology:**
- **Step 1: Isolation of Genetic Material (DNA):**
  Lysis of cell wall using enzymes (**Lysozyme** for bacteria, **Cellulase** for plant cells, **Chitinase** for fungi). RNA removed by RNase, proteins by Proteases. Pure DNA precipitated by adding **chilled ethanol** (spooling).
- **Step 2: Amplification of Gene of Interest using PCR (Polymerase Chain Reaction - Kary Mullis 1983):**
  Each cycle has 3 sequential steps:
  1. **Denaturation (94°C):** dsDNA separates into single strands by breaking H-bonds.
  2. **Annealing (50 - 60°C):** Two sets of synthetic oligonucleotide **primers** bind to complementary 3'-ends of single-stranded DNA templates.
  3. **Extension (72°C):** Thermostable **Taq DNA Polymerase** (isolated from thermophilic bacterium *Thermus aquaticus*, retains activity at high temperatures) synthesizes new DNA strands using deoxynucleotides (dNTPs).
  * After 30 cycles, 2³⁰ (~1 billion) copies are generated!
- **Step 3: Bioreactors (Large-Scale Production, 100-1000 Liters):**
  * Vessels providing optimal growth conditions (temperature, pH, substrate, oxygen, minerals, vitamins).
  * **Simple Stirred-Tank Bioreactor:** Cylindrical with curved base; motor-driven impeller ensures uniform mixing and oxygen availability.
  * **Sparged Stirred-Tank Bioreactor:** Sterile air bubbles sparged through medium, dramatically increasing oxygen transfer surface area.
- **Step 4: Downstream Processing:**
  Separation, purification, formulation with preservatives, and clinical trials/quality testing before product marketing.

**COMMON MISTAKE:**
- Forgetting that DNA moves toward the **Anode (+)** in gel electrophoresis because the phosphate backbone is negatively charged.
- Writing that *Thermus aquaticus* provides primers: *Thermus aquaticus* provides the **thermostable Taq DNA Polymerase**, NOT primers.`;
  }

  // CHAPTER 10: Biotechnology and its Applications
  if (
    chapterLower.includes('applications') ||
    chapterLower.includes('biotechnology and its applications') ||
    chapterLower === 'b10' ||
    chapterLower.includes('chapter 10: biotechnology and its applications') ||
    chapterLower.includes('chapter 10 - biotechnology and its applications')
  ) {
    return `TOPIC: Chapter 10: Biotechnology and its Applications
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Biotechnological Applications in Agriculture:**
- **Bt Cotton:**
  * Soil bacterium *Bacillus thuringiensis* produces crystalline insecticidal proteins (**Bt endotoxins / Cry proteins**).
  * Cry protein exists as an **inactive protoxin** inside bacterium.
  * When ingested by target insect (e.g. lepidopterans, coleopterans, dipterans), alkaline pH of the insect midgut solubilizes crystals, converting protoxin into **active toxin**.
  * Activated toxin binds to surface of midgut epithelial cells, creates pores that cause cell swelling and lysis, killing the insect.
  * Specific *cry* Genes:
    - **cryIAc and cryIIAb:** Control **Cotton Bollworms**.
    - **cryIAb:** Controls **Corn Borer**.
- **Pest Resistant Plants via RNA Interference (RNAi):**
  * Nematode *Meloidogyne incognita* infects roots of tobacco plants, causing severe root galls and yield reduction.
  * **RNAi Mechanism (Universal Cellular Defense in Eukaryotes):**
    1. Using *Agrobacterium* vectors, nematode-specific genes are introduced into tobacco plant such that host produces both **sense and anti-sense RNA**.
    2. Two complementary RNAs hybridize to form **double-stranded RNA (dsRNA)**.
    3. dsRNA initiates RNAi pathway: enzyme Dicer cuts dsRNA into small interfering RNAs (siRNAs), which guide RISC complex to bind and **cleave/silence the specific nematode mRNA**.
    4. Nematode cannot express essential survival proteins and fails to survive in transgenic host.

**2. Biotechnological Applications in Medicine:**
- **Genetically Engineered Insulin (Humulin):**
  * Natural human proinsulin contains: **Chain A (21 amino acids) + Chain B (30 amino acids) + connecting C-peptide (33 amino acids)**.
  * C-peptide is removed during processing; mature functional insulin has only chains A and B linked by **disulfide bonds**.
  * In 1983, American company **Eli Lilly** prepared two separate DNA sequences corresponding to chains A and B of human insulin and introduced them into plasmids of *E. coli* to produce chains A and B separately.
  * Chains A and B were extracted and combined by creating **disulfide bonds** to produce active mature human insulin without any animal contamination/allergy.
- **Gene Therapy (First Clinical Case in 1990):**
  * Performed on a 4-year-old girl with **Adenosine Deaminase (ADA) Deficiency** (leads to Severe Combined Immunodeficiency, SCID).
  * Cause: Deletion of gene for adenosine deaminase, an enzyme critical for immune T-cell maturation.
  * Procedure:
    1. Lymphocytes extracted from patient's blood and cultured *in vitro*.
    2. Functional ADA cDNA introduced into cultured lymphocytes using a **disarmed retroviral vector**.
    3. Genetically engineered lymphocytes infused back into patient.
    4. Since lymphocytes are not immortal, patient requires periodic repeat infusions.
    5. **Permanent Cure:** Introducing functional ADA gene into cells at **early embryonic stages**.
- **Molecular Diagnosis:**
  * Traditional methods (serum/urine analysis) detect infection only when pathogen count is high.
  * Modern techniques: **PCR** (detects trace amounts of pathogen DNA, e.g. HIV detection before symptoms or cancer mutations) and **ELISA** (based on antigen-antibody interactions).

**3. Transgenic Animals & Ethical Issues:**
- Transgenic animals have foreign genes intentionally inserted into their genome (95% of existing transgenic animals are mice).
- **Utility:**
  1. Study of normal physiology and development (e.g. insulin-like growth factors).
  2. Study of diseases (transgenic models for cancer, cystic fibrosis, rheumatoid arthritis, Alzheimer's).
  3. Biological Products: Transgenic cow **Rosie (1997)** produced human protein-enriched milk (2.4 grams/liter) containing **human α-lactalbumin**, nutritionally far more balanced for human infants than cow milk. Production of **α-1-antitrypsin** to treat emphysema.
  4. Vaccine safety testing (transgenic mice used to test polio vaccine safety before humans).
  5. Chemical safety testing (toxicity testing).
- **Ethical Issues & Biopiracy:**
  * **GEAC (Genetic Engineering Appraisal Committee):** Indian regulatory body responsible for approving validity of GM research and ensuring safety of introducing GM organisms for public services.
  * **Biopiracy:** The unauthorized exploitation of bioresources and indigenous traditional knowledge by multinational corporations without proper authorization or compensatory payment to nations concerned (e.g. Patenting of Basmati rice by an American company in 1997, Neem, and Turmeric).

**COMMON MISTAKE:**
- Confusing *cryIAc* with *cryIAb*: *cryIAc* and *cryIIAb* control cotton bollworms, while *cryIAb* controls corn borer.
- Writing that C-peptide is present in mature human insulin: C-peptide is present ONLY in proinsulin and is excised during maturation.`;
  }

  // CHAPTER 11: Organisms and Populations
  if (
    chapterLower.includes('organisms and populations') ||
    chapterLower === 'b11' ||
    chapterLower.includes('chapter 11: organisms and populations') ||
    chapterLower.includes('chapter 11 - organisms and populations')
  ) {
    return `TOPIC: Chapter 11: Organisms and Populations
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Population Attributes:**
- **Birth Rate (Natality):** Number of births per unit population per unit time. Expressed as change in numbers with respect to members of population.
  * Example: In a lotus pond, there were 20 lotus plants last year; 8 new plants were added via reproduction. Birth rate = 8 / 20 = **0.4 offspring per lotus per year**.
- **Death Rate (Mortality):** Number of deaths per unit population per unit time.
  * Example: If 4 fruit flies in a lab population of 40 died in a week, Death rate = 4 / 40 = **0.1 individuals per fruit fly per week**.
- **Sex Ratio:** Ratio of males to females per 1000 individuals in a population.
- **Age Pyramids:** Graphical representation of proportions of various age groups (Pre-reproductive, Reproductive, Post-reproductive):
  1. **Expanding Population:** Triangular pyramid (broad base, high proportion of pre-reproductive individuals).
  2. **Stable Population:** Bell-shaped pyramid (pre-reproductive and reproductive individuals almost equal).
  3. **Declining Population:** Urn-shaped pyramid (narrow base, lower proportion of pre-reproductive individuals).

**2. Population Growth Models:**
- Population Density (N) changes due to four basic processes:
  * Natality (B) [+], Immigration (I) [+], Mortality (D) [-], Emigration (E) [-].
  * **N_(t+1) = N_t + [ (B + I) - (D + E) ]**.
- **Exponential Growth (J-Shaped Curve - Unlimited Resources):**
  * Differential equation: **dN/dt = (b - d) N = r N**, where **r** is the **Intrinsic Rate of Natural Increase** (measure of biotic potential).
    - Human population in India (1981): r = 0.0205; Flour beetle: r = 0.12; Norway rat: r = 0.015.
  * Integral form: **N_t = N₀ e^(rt)**.
- **Logistic Growth (Sigmoid / S-Shaped Curve - Verhulst-Pearl Logistic Growth):**
  * Resources are finite and limiting; population exhibits carrying capacity (**K**), the maximum population size an environment can sustainably support.
  * Phases: Lag phase -> Acceleration & Deceleration phases -> Asymptote (reaches K).
  * Differential equation: **dN/dt = r N [ (K - N) / K ]**, where [ (K - N) / K ] represents **environmental resistance**.
  * More realistic model of population growth in nature.

**3. Population Interactions:**
| Type of Interaction | Species A | Species B | Ecological Examples |
|---|---|---|---|
| **Mutualism** | **+** | **+** | Lichen (alga + fungus); Mycorrhizae (fungus + higher plant roots); Fig and Fig Wasp (obligate pollination); Ophrys (Mediterranean orchid) and male bee *Colpa* (**sexual deceit**). |
| **Competition** | **-** | **-** | Abingdon tortoise in Galapagos became extinct within a decade after goats were introduced (greater browsing efficiency of goats); Connell's field experiments on Scottish coast: dominant barnacle *Balanus* excluded smaller *Chthamalus*. |
| **Predation** | **+** | **-** | Herbivores feeding on plants; Tiger eating deer; Prickly pear cactus introduced in Australia (1920) brought under control by introducing cactus-feeding moth *Cactoblastis*. |
| **Parasitism** | **+** | **-** | Ectoparasites: Ticks on dogs, lice on humans, *Cuscuta* on hedge plants, copepods on marine fish. Endoparasites: Liver fluke, tapeworm. **Brood Parasitism:** Koel (Cuckoo) lays eggs in Crow's nest. |
| **Commensalism** | **+** | **0** | Orchid growing as epiphyte on mango branch; Barnacles attached to back of whale; Cattle egret foraging close to grazing cattle; Sea anemone with stinging tentacles and clownfish. |
| **Amensalism** | **-** | **0** | *Penicillium* mold secreting penicillin that kills bacteria without being affected. |

- **Gause's Competitive Exclusion Principle:** Two closely related species competing for the same limiting resources cannot coexist indefinitely; the competitively inferior will be eliminated eventually.
- **Resource Partitioning (MacArthur's Warblers):** Five species of warblers coexisted on the same spruce tree by foraging at different times of day and in different regions of the tree canopy, avoiding competition.

**COMMON MISTAKE:**
- Confusing Commensalism (+, 0) with Amensalism (-, 0): In Commensalism, one species benefits (+); in Amensalism, one species is harmed (-), and the other is neutral (0).
- Confusing ectoparasitism with brood parasitism: Brood parasitism involves egg rearing behavior, not nutrient extraction directly from host body.`;
  }

  // CHAPTER 12: Ecosystem
  if (
    chapterLower.includes('ecosystem') ||
    chapterLower === 'b12' ||
    chapterLower.includes('chapter 12: ecosystem') ||
    chapterLower.includes('chapter 12 - ecosystem')
  ) {
    return `TOPIC: Chapter 12: Ecosystem
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Ecosystem Structure & Function:**
- Interaction of biotic and abiotic components results in a physical structure characteristic for each ecosystem type.
- **Stratification:** Vertical distribution of different species occupying different levels in an ecosystem (e.g. in a forest, trees occupy top vertical strata, shrubs middle layer, and herbs/grasses bottom layer).

**2. Productivity:**
- **Primary Production:** Amount of biomass or organic matter produced per unit area over a time period by plants during photosynthesis. Expressed in g/m² or kcal/m².
- **Gross Primary Productivity (GPP):** Total rate of production of organic matter during photosynthesis.
- **Net Primary Productivity (NPP):** Biomass available for consumption by heterotrophs (herbivores and decomposers):
  **NPP = GPP - R**, where **R** is respiratory loss.
- Total annual net primary productivity of the whole biosphere is approximately **170 billion tons** (dry weight) of organic matter. Oceans occupy ~70% of Earth's surface but contribute only **55 billion tons**, whereas terrestrial ecosystems produce **115 billion tons**.

**3. Decomposition:**
- Breakdown of complex organic matter (detritus: dead leaves, bark, flowers, animal remains) into inorganic substances (CO₂, H₂O, nutrients).
- **Five Key Steps of Decomposition:**
  1. **Fragmentation:** Detritivores (e.g. Earthworm) break down detritus into smaller particles.
  2. **Leaching:** Water-soluble inorganic nutrients percolate into soil horizon and precipitate as unavailable salts.
  3. **Catabolism:** Bacterial and fungal enzymes degrade detritus into simpler inorganic substances.
  4. **Humification:** Formation of **Humus** (dark-colored, amorphous substance extremely resistant to microbial action, undergoes decomposition at an extremely slow rate, acts as nutrient reservoir).
  5. **Mineralization:** Humus is degraded by specific microbes to release inorganic nutrients.
- **Factors Regulating Decomposition:**
  * Faster decomposition: Warm, moist climate; detritus rich in **nitrogen and water-soluble sugars**.
  * Slower decomposition: Low temperature, anaerobiosis; detritus rich in **lignin and chitin**.

**4. Energy Flow:**
- Solar Radiation: <50% is Photosynthetically Active Radiation (**PAR**); plants capture only **2 - 10%** of PAR (1 - 5% of total incident solar radiation).
- **Lindeman's 10% Law of Energy Transfer:** Only **10% of energy** is transferred from one trophic level to the next higher trophic level; remaining 90% is lost as metabolic heat during respiration.
- Food Chains:
  * **Grazing Food Chain (GFC):** Producers (Grass) -> Primary Consumer (Goat) -> Secondary Consumer (Man). Major conduit of energy flow in aquatic ecosystems.
  * **Detritus Food Chain (DFC):** Begins with dead organic matter -> Decomposers (Fungi, Bacteria). Major conduit of energy flow in terrestrial ecosystems.

**5. Ecological Pyramids:**
- Graphical representation of trophic levels (Producers at base, top carnivores at apex):
  1. **Pyramid of Energy:** **ALWAYS UPRIGHT** in all ecosystems without exception, because energy is invariably lost as heat at each transfer according to 2nd Law of Thermodynamics.
  2. **Pyramid of Numbers:**
     * Usually upright (Grassland ecosystem: thousands of grasses -> hundreds of rabbits -> few hawks).
     * **Inverted:** Tree ecosystem (Single large oak tree -> thousands of fruit-eating birds -> millions of parasites/hyperparasites).
  3. **Pyramid of Biomass:**
     * Usually upright in terrestrial ecosystems (Forest/Grassland).
     * **Inverted in Aquatic Ecosystems (Pond/Sea):** Biomass of primary producers (phytoplankton) is smaller than that of zooplankton and fishes because of rapid turnover and short lifespan of phytoplankton.

**COMMON MISTAKE:**
- Drawing the pyramid of energy inverted: the pyramid of energy is **ALWAYS UPRIGHT**, never inverted!
- Stating oceans produce most of Earth's biomass: oceans produce only 55 billion tons out of 170 billion tons (~32%) despite covering 70% of Earth's surface, due to light limitation and nutrient deficiency.`;
  }

  // CHAPTER 13: Biodiversity and Conservation
  if (
    chapterLower.includes('biodiversity') ||
    chapterLower.includes('conservation') ||
    chapterLower === 'b13' ||
    chapterLower.includes('chapter 13: biodiversity and conservation') ||
    chapterLower.includes('chapter 13 - biodiversity and conservation')
  ) {
    return `TOPIC: Chapter 13: Biodiversity and Conservation
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Levels of Biodiversity (Edward Wilson):**
1. **Genetic Diversity:** Variation within a single species over its geographical distribution.
   * Example: *Rauwolfia vomitoria* growing in Himalayan ranges shows genetic variation in potency and concentration of the active alkaloid **reserpine**; India has >50,000 genetically different strains of rice and >1,000 varieties of mango.
2. **Species Diversity:** Variety of species within a region.
   * Example: Western Ghats have a greater amphibian species diversity than Eastern Ghats.
3. **Ecological Diversity:** Diversity at ecosystem level.
   * Example: India with deserts, rainforests, mangroves, coral reefs, wetlands has greater ecosystem diversity than a Scandinavian country like Norway.

**2. Global & Indian Biodiversity Estimates:**
- Robert May's global estimate: Approximately **7 million species** exist globally.
- Only ~1.5 million species documented so far (IUCN 2004). More than 70% of all recorded species are animals; plants (algae, fungi, bryophytes, gymnosperms, angiosperms) comprise ~22%.
- Among animals, **Insects** are the most species-rich taxonomic group, making up >70% of total animals (7 out of 10 animals on Earth are insects).
- India has only **2.4% of world's land area**, but shares an impressive **8.1% of global species diversity** (one of the 12 mega-diversity countries of the world).

**3. Patterns of Biodiversity:**
- **Latitudinal Gradients:**
  * Species diversity decreases as we move from equator towards poles.
  * Tropics (latitudinal range 23.5° N to 23.5° S) harbor far more species than temperate or polar zones.
  * **Why Tropics have higher biodiversity?**
    1. Tropical latitudes have remained relatively undisturbed for millions of years (unlike temperate regions subjected to frequent glaciations in the past), allowing prolonged evolutionary time for species diversification.
    2. Tropical environments are less seasonal, more constant, and predictable.
    3. Greater availability of solar energy contributes to higher productivity.
  * **Amazonian Rainforest in South America:** Greatest biodiversity on Earth ("Lungs of the Planet"); contains >40,000 plant species, 3,000 fishes, 1,300 birds, 427 mammals, 427 amphibians, 378 reptiles, and >125,000 invertebrates.
- **Species-Area Relationship (Alexander von Humboldt):**
  * Observed in South American jungles that within a region, species richness increases with increasing explored area, but only up to a limit.
  * On a log scale, relationship is a straight line:
    **log S = log C + Z log A**
    (Rectangular hyperbola equation: **S = C Aᶻ**).
  * **Z is the slope of the line (regression coefficient):**
    - For small normal regions: Z = **0.1 to 0.2**.
    - For very large areas like entire continents: Z = **0.6 to 1.2**.
    - For frugivorous (fruit-eating) birds and mammals in tropical forests of different continents: Z = **1.15**.

**4. Biodiversity Loss - The "Evil Quartet":**
1. **Habitat Loss and Fragmentation (Most Important Cause):** Tropical rainforests once covering 14% of Earth's land surface now cover less than 6%. Amazon rainforest is being cleared for soybean cultivation or converted to grasslands for beef cattle. Fragmentation forces animals requiring large territories into small isolated pockets.
2. **Over-Exploitation:** Human greed causes extinction of species (e.g. Steller's sea cow, Passenger pigeon).
3. **Alien Species Invasions:** Non-native species introduced intentionally or accidentally turn invasive, causing decline or extinction of indigenous species:
   * **Nile Perch** introduced into Lake Victoria (East Africa) caused extinction of >200 endemic cichlid fish species.
   * Invasive weeds: **Parthenium (Carrot grass), Lantana, and Eichhornia (Water Hyacinth - "Terror of Bengal")**.
   * Illegal introduction of African catfish **Clarias gariepinus** for aquaculture poses threat to native catfishes in Indian rivers.
4. **Co-Extinctions:** Obligate mutualistic associations: when one host species goes extinct, its uniquely associated parasite/pollinator species inevitably goes extinct (e.g. co-evolved plant-pollinator mutualism).

**5. Conservation Strategies:**
- **In-Situ Conservation (On-Site Protection in Natural Habitat):**
  * **Biodiversity Hotspots:** Regions with extraordinarily high levels of species richness and high degree of **endemism** (species confined to that region and not found anywhere else), under severe threat.
    - 34 Hotspots globally; 3 cover India: **Western Ghats and Sri Lanka, Indo-Burma, and Himalaya**. Hotspots cover <2% of Earth's land area but protecting them reduces mass extinction by ~30%.
  * Protected Areas: In India: 14 Biosphere Reserves, 106 National Parks, 567 Wildlife Sanctuaries.
  * **Sacred Groves:** Forest tracts set aside where all trees and wildlife are venerated and given total protection (e.g. Khasi and Jaintia Hills in Meghalaya, Aravalli Hills in Rajasthan, Western Ghat regions of Karnataka and Maharashtra, Chanda and Bastar areas of Madhya Pradesh).
- **Ex-Situ Conservation (Off-Site Protection in Human-Controlled Settings):**
  * Threatened animals and plants taken out of natural habitats and placed in special settings with protection and specialized care:
    - **Zoological Parks, Botanical Gardens, and Wildlife Safari Parks**.
    - Advanced techniques: **Cryopreservation** of gametes at -196°C in liquid nitrogen; *in vitro* tissue culture fertilization; **Seed banks** storing viable seeds for long durations.

**COMMON MISTAKE:**
- Confusing in-situ with ex-situ methods: Botanical gardens, zoological parks, and seed banks are **EX-SITU**, while National parks, Sanctuaries, and Sacred groves are **IN-SITU**.
- Forgetting the value of Z for frugivorous birds in tropical forests: Z = **1.15**.`;
  }

  return null;
}
