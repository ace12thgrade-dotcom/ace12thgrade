// services/chapterMetadata.ts
// Official CBSE Class 12 Chapter Metadata
// Provides verified priority, topics count, derivations count, and formula counts.

export interface ChapterMeta {
  priority: 'High' | 'Medium' | 'Normal';
  topicsCount: number;
  derivationsCount: number;
  coreThemes: string[];
}

export const CHAPTER_METADATA: Record<string, ChapterMeta> = {
  // --- PHYSICS ---
  p1: { priority: 'High', topicsCount: 8, derivationsCount: 4, coreThemes: ["Coulomb's Law", 'Gauss Theorem', 'Dipole Field'] },
  p2: { priority: 'High', topicsCount: 7, derivationsCount: 3, coreThemes: ['Capacitance with Dielectric', 'Potential Energy', 'Equipotential Surfaces'] },
  p3: { priority: 'High', topicsCount: 8, derivationsCount: 3, coreThemes: ["Kirchhoff's Laws", 'Drift Velocity', 'Cell Combinations'] },
  p4: { priority: 'High', topicsCount: 7, derivationsCount: 4, coreThemes: ['Biot-Savart Law', 'Ampere Circuital Law', 'Torque on Loop'] },
  p5: { priority: 'Medium', topicsCount: 5, derivationsCount: 1, coreThemes: ['Magnetic Properties', 'B-H Curve', 'Dipole in Uniform B'] },
  p6: { priority: 'High', topicsCount: 6, derivationsCount: 3, coreThemes: ["Faraday's Laws", "Lenz's Law", 'Motional EMF', 'Self & Mutual Inductance'] },
  p7: { priority: 'High', topicsCount: 7, derivationsCount: 4, coreThemes: ['Series LCR Circuit', 'Power Factor & Wattless Current', 'AC Generator & Transformer'] },
  p8: { priority: 'Normal', topicsCount: 4, derivationsCount: 1, coreThemes: ['Displacement Current', 'EM Spectrum Properties', 'Wavelength Ranges'] },
  p9: { priority: 'High', topicsCount: 9, derivationsCount: 5, coreThemes: ['Lens Maker Formula', 'Prism Refraction', 'Astronomical Telescope', 'Compound Microscope'] },
  p10: { priority: 'High', topicsCount: 6, derivationsCount: 3, coreThemes: ["Huygens Wave Theory", "Young's Double Slit", 'Single Slit Diffraction'] },
  p11: { priority: 'Medium', topicsCount: 5, derivationsCount: 2, coreThemes: ['Photoelectric Equation', 'de Broglie Wavelength', 'Work Function'] },
  p12: { priority: 'Medium', topicsCount: 5, derivationsCount: 3, coreThemes: ['Bohr Postulates', 'Radius & Energy Derivation', 'Rydberg Formula'] },
  p13: { priority: 'Medium', topicsCount: 5, derivationsCount: 2, coreThemes: ['Mass Defect & Binding Energy', 'Nuclear Forces', 'Fission & Fusion'] },
  p14: { priority: 'High', topicsCount: 6, derivationsCount: 1, coreThemes: ['Energy Bands', 'P-N Junction Diode', 'Half & Full Wave Rectifiers'] },
  p_rev: { priority: 'High', topicsCount: 14, derivationsCount: 15, coreThemes: ['15-Year Solved PYQs', 'Full Formula Bank', 'All High-Yield Derivations'] },

  // --- MATHEMATICS ---
  m1: { priority: 'Medium', topicsCount: 5, derivationsCount: 2, coreThemes: ['Equivalence Relations', 'One-One & Onto Functions'] },
  m2: { priority: 'Medium', topicsCount: 4, derivationsCount: 1, coreThemes: ['Principal Value Branches', 'Inverse Trigonometric Properties'] },
  m3: { priority: 'High', topicsCount: 6, derivationsCount: 1, coreThemes: ['Matrix Multiplication', 'Transpose Properties', 'Symmetric & Skew Matrices'] },
  m4: { priority: 'High', topicsCount: 6, derivationsCount: 2, coreThemes: ['Adjoint & Inverse', 'Solving Linear Systems by Matrix Method'] },
  m5: { priority: 'High', topicsCount: 8, derivationsCount: 3, coreThemes: ['Continuity at a Point', 'Chain Rule & Logarithmic Diff', 'Parametric Forms'] },
  m6: { priority: 'High', topicsCount: 7, derivationsCount: 2, coreThemes: ['Strictly Increasing/Decreasing', 'Maxima & Minima Word Problems'] },
  m7: { priority: 'High', topicsCount: 9, derivationsCount: 4, coreThemes: ['Integration by Parts', 'Partial Fractions', 'Definite Integral Properties'] },
  m8: { priority: 'Medium', topicsCount: 4, derivationsCount: 1, coreThemes: ['Area Enclosed by Standard Parabolas, Circles & Lines'] },
  m9: { priority: 'High', topicsCount: 6, derivationsCount: 2, coreThemes: ['Variable Separable', 'Homogeneous Equations', 'Linear Differential Equations'] },
  m10: { priority: 'Medium', topicsCount: 5, derivationsCount: 2, coreThemes: ['Scalar Dot Product', 'Vector Cross Product', 'Unit Normal Vectors'] },
  m11: { priority: 'High', topicsCount: 7, derivationsCount: 3, coreThemes: ['Direction Cosines', 'Shortest Distance between Skew Lines', 'Line Equations'] },
  m12: { priority: 'Medium', topicsCount: 4, derivationsCount: 1, coreThemes: ['Corner Point Method', 'Bounded Feasible Region Optimization'] },
  m13: { priority: 'High', topicsCount: 6, derivationsCount: 2, coreThemes: ['Conditional Probability', 'Multiplication Theorem', "Bayes' Theorem"] },
  m_rev: { priority: 'High', topicsCount: 13, derivationsCount: 12, coreThemes: ['Calculus Master Book', 'Matrix & Determinants Fast Formula', 'Bayes Theorem Bank'] },

  // --- CHEMISTRY ---
  c1: { priority: 'High', topicsCount: 7, derivationsCount: 2, coreThemes: ["Raoult's Law", 'Colligative Properties', "Van't Hoff Factor", 'Elevation in Boiling Point'] },
  c2: { priority: 'High', topicsCount: 7, derivationsCount: 3, coreThemes: ['Nernst Equation', 'Molar Conductivity', "Kohlrausch's Law", 'Lead Storage Battery'] },
  c3: { priority: 'High', topicsCount: 6, derivationsCount: 2, coreThemes: ['Rate Law & Order', 'Integrated Rate Equations (Zero & First)', 'Arrhenius Equation'] },
  c4: { priority: 'High', topicsCount: 7, derivationsCount: 1, coreThemes: ['Transition Metal Trends', 'Lanthanoid Contraction', 'KMnO₄ & K₂Cr₂O₇ Reactions'] },
  c5: { priority: 'High', topicsCount: 6, derivationsCount: 2, coreThemes: ["Werner's Theory", 'IUPAC Nomenclature', 'Valence Bond Theory', 'Crystal Field Theory'] },
  c6: { priority: 'High', topicsCount: 7, derivationsCount: 1, coreThemes: ['SN1 vs SN2 Mechanisms', 'Chirality & Optical Inversion', 'Elimination vs Substitution'] },
  c7: { priority: 'High', topicsCount: 7, derivationsCount: 2, coreThemes: ['Acidic Nature of Phenol', "Kolbe's & Reimer-Tiemann Reactions", 'Williamson Ether Synthesis'] },
  c8: { priority: 'High', topicsCount: 8, derivationsCount: 2, coreThemes: ['Nucleophilic Addition', 'Aldol & Cannizzaro Reactions', 'Tollens & Fehling Tests'] },
  c9: { priority: 'High', topicsCount: 6, derivationsCount: 1, coreThemes: ['Basicity Order in Aqueous Phase', 'Gabriel Phthalimide', "Hoffmann's Bromamide", 'Diazonium Salts'] },
  c10: { priority: 'Medium', topicsCount: 6, derivationsCount: 1, coreThemes: ['Glucose Structure', 'Peptide Bond & Protein Denaturation', 'DNA vs RNA', 'Vitamins'] },
  c_rev: { priority: 'High', topicsCount: 10, derivationsCount: 8, coreThemes: ['All Named Reactions', 'Reagent Conversions Roadmap', 'Physical Chemistry Formula Master'] },

  // --- BIOLOGY ---
  b1: { priority: 'High', topicsCount: 6, derivationsCount: 0, coreThemes: ['Microsporogenesis', 'Megasporogenesis', 'Double Fertilization', 'Apomixis'] },
  b2: { priority: 'High', topicsCount: 7, derivationsCount: 0, coreThemes: ['Spermatogenesis & Oogenesis', 'Menstrual Cycle Hormones', 'Fertilization & Implantation'] },
  b3: { priority: 'Medium', topicsCount: 5, derivationsCount: 0, coreThemes: ['Contraceptive Methods', 'MTP Regulations', 'IVF & Assisted Reproductive Tech'] },
  b4: { priority: 'High', topicsCount: 7, derivationsCount: 0, coreThemes: ["Mendel's Laws", 'Incomplete Dominance', 'Linkage & Crossing Over', 'Pedigree Analysis'] },
  b5: { priority: 'High', topicsCount: 8, derivationsCount: 0, coreThemes: ['DNA Structure & Replication', 'Transcription', 'Genetic Code', 'Lac Operon'] },
  b6: { priority: 'Medium', topicsCount: 6, derivationsCount: 0, coreThemes: ['Origin of Life', 'Homology vs Analogy', 'Hardy-Weinberg Principle', 'Human Evolution'] },
  b7: { priority: 'High', topicsCount: 6, derivationsCount: 0, coreThemes: ['Life Cycle of Plasmodium', 'Immunity Types & Antibodies', 'AIDS & Cancer'] },
  b8: { priority: 'Normal', topicsCount: 4, derivationsCount: 0, coreThemes: ['Sewage Treatment', 'Biogas Plant', 'Biofertilizers & Biocontrol Agents'] },
  b9: { priority: 'High', topicsCount: 6, derivationsCount: 0, coreThemes: ['Restriction Enzymes', 'Cloning Vectors (pBR322)', 'PCR Steps', 'Bioreactors'] },
  b10: { priority: 'High', topicsCount: 5, derivationsCount: 0, coreThemes: ['Bt Cotton', 'RNA Interference', 'Genetically Engineered Insulin', 'Gene Therapy'] },
  b11: { priority: 'Medium', topicsCount: 5, derivationsCount: 0, coreThemes: ['Abiotic Adaptations', 'Population Attributes', 'Growth Models', 'Species Interactions'] },
  b12: { priority: 'Medium', topicsCount: 5, derivationsCount: 0, coreThemes: ['Productivity & Decomposition', 'Energy Flow (10% Law)', 'Ecological Pyramids'] },
  b13: { priority: 'Medium', topicsCount: 5, derivationsCount: 0, coreThemes: ['Levels of Biodiversity', 'Species-Area Relationship', 'In-situ vs Ex-situ Conservation'] },
  b_rev: { priority: 'High', topicsCount: 13, derivationsCount: 0, coreThemes: ['NCERT Diagram Master Book', 'Genetic Crosses & Operon Blueprints', '15-Year Solved PYQs'] },

  // --- COMPUTER SCIENCE ---
  cs1: { priority: 'High', topicsCount: 6, derivationsCount: 0, coreThemes: ['Data Types', 'Mutable vs Immutable', 'Slicing', 'Functions & Scope'] },
  cs2: { priority: 'High', topicsCount: 6, derivationsCount: 0, coreThemes: ['Text Files', 'Binary Files (pickle module)', 'CSV Files (csv module)'] },
  cs3: { priority: 'High', topicsCount: 5, derivationsCount: 0, coreThemes: ['LIFO Principle', 'Push Operation', 'Pop Operation', 'Displaying Elements'] },
  cs4: { priority: 'High', topicsCount: 7, derivationsCount: 0, coreThemes: ['Network Topologies', 'Transmission Media', 'Protocols (HTTP, FTP, TCP/IP)', 'Network Devices'] },
  cs5: { priority: 'High', topicsCount: 7, derivationsCount: 0, coreThemes: ['DDL vs DML', 'Aggregate Functions', 'GROUP BY & HAVING', 'Table Joins'] },
  cs6: { priority: 'High', topicsCount: 5, derivationsCount: 0, coreThemes: ['Connecting Python to MySQL', 'Cursor Object', 'execute() & fetchall()', 'Commit'] },
  cs_rev: { priority: 'High', topicsCount: 6, derivationsCount: 0, coreThemes: ['Output Prediction Rules', 'SQL Query Bank', 'Stack Implementation Templates'] },

  // --- PHYSICAL EDUCATION ---
  pe1: { priority: 'Medium', topicsCount: 5, derivationsCount: 0, coreThemes: ['Knock-out & League Fixtures', 'Committees and Responsibilities', 'Intramural & Extramural'] },
  pe2: { priority: 'Medium', topicsCount: 5, derivationsCount: 0, coreThemes: ['Children and Women in Sports', 'Exercise Guidelines', 'Female Athlete Triad'] },
  pe3: { priority: 'High', topicsCount: 5, derivationsCount: 0, coreThemes: ['Asanas for Lifestyle Diseases (Diabetes, Asthma, Hypertension, Obesity)'] },
  pe4: { priority: 'Medium', topicsCount: 4, derivationsCount: 0, coreThemes: ['CWSN Concept', 'Adaptive Physical Education', 'Special Olympics & Paralympics'] },
  pe5: { priority: 'Medium', topicsCount: 5, derivationsCount: 0, coreThemes: ['Macro & Micronutrients', 'Nutritive & Non-Nutritive Components', 'Food Myths'] },
  pe6: { priority: 'High', topicsCount: 5, derivationsCount: 0, coreThemes: ['Motor Fitness Tests', 'SAI Khelo India Fitness Assessment', 'Senior Citizen Fitness Test'] },
  pe7: { priority: 'High', topicsCount: 5, derivationsCount: 0, coreThemes: ['Physiological Factors Determining Fitness', 'Effects of Exercise', 'Sports Injuries & First Aid'] },
  pe8: { priority: 'High', topicsCount: 5, derivationsCount: 0, coreThemes: ["Newton's Laws in Sports", 'Equilibrium & Center of Gravity', 'Friction & Projectile Motion'] },
  pe9: { priority: 'Medium', topicsCount: 5, derivationsCount: 0, coreThemes: ['Personality Types (Big 5)', 'Motivation in Sports', 'Aggression & Anxiety Management'] },
  pe10: { priority: 'High', topicsCount: 5, derivationsCount: 0, coreThemes: ['Strength, Endurance, Speed, Flexibility & Coordinative Abilities Training'] },
  pe_rev: { priority: 'High', topicsCount: 10, derivationsCount: 0, coreThemes: ['Fixtures Master Chart', 'Asanas Identification Guide', 'Case-Based Question Bank'] },

  // --- ENGLISH CORE ---
  e1: { priority: 'High', topicsCount: 5, derivationsCount: 0, coreThemes: ['Notice Writing', 'Formal & Informal Invitations', 'Replies Format'] },
  e2: { priority: 'High', topicsCount: 5, derivationsCount: 0, coreThemes: ['Letter to Editor', 'Job Application with Resume', 'Official Complaint Letters'] },
  e3: { priority: 'High', topicsCount: 5, derivationsCount: 0, coreThemes: ['Article Writing', 'Report Writing for Newspaper/Magazine'] },
  e4: { priority: 'High', topicsCount: 8, derivationsCount: 0, coreThemes: ['The Last Lesson', 'Lost Spring', 'Deep Water', 'The Rattrap', 'Indigo'] },
  e5: { priority: 'High', topicsCount: 6, derivationsCount: 0, coreThemes: ['My Mother at Sixty-Six', 'Keeping Quiet', 'A Thing of Beauty', 'A Roadside Stand', "Aunt Jennifer's Tigers"] },
  e6: { priority: 'High', topicsCount: 6, derivationsCount: 0, coreThemes: ['The Third Level', 'The Tiger King', 'Journey to the End of the Earth', 'The Enemy', 'On the Face of It', 'Memories of Childhood'] },
  e_rev: { priority: 'High', topicsCount: 6, derivationsCount: 0, coreThemes: ['Writing Skills Formats & Value Points', 'Poetic Devices Master Bank', 'Character Sketches & RTCs'] }
};

export const getChapterMeta = (chapterId: string, chapterTitle?: string): ChapterMeta => {
  if (CHAPTER_METADATA[chapterId]) {
    return CHAPTER_METADATA[chapterId];
  }
  // Fallback defaults for custom or new chapters
  const isRev = chapterId.includes('rev') || (chapterTitle && chapterTitle.toLowerCase().includes('revision'));
  return {
    priority: isRev ? 'High' : 'Normal',
    topicsCount: isRev ? 12 : 6,
    derivationsCount: isRev ? 5 : 2,
    coreThemes: ['NCERT Concept Mastery', 'Board Exam High-Yield Points']
  };
};
