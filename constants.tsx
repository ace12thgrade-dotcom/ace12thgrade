
import { Subject } from './types';

export const SUBJECTS: Subject[] = [
  {
    id: 'physics',
    name: 'Physics',
    icon: '⚡',
    color: 'blue',
    chapters: [
      { id: 'p1', title: 'Electric Charges and Fields', description: 'Coulomb\'s Law, Gauss Law, and Electric Dipoles.', notes: '', importantQuestions: [] },
      { id: 'p2', title: 'Electrostatic Potential and Capacitance', description: 'Capacitors, Dielectrics, and Potential Energy.', notes: '', importantQuestions: [] },
      { id: 'p3', title: 'Current Electricity', description: 'Ohm\'s Law, Kirchhoff\'s Laws, and Cells.', notes: '', importantQuestions: [] },
      { id: 'p4', title: 'Moving Charges & Magnetism', description: 'Biot-Savart Law and Ampere\'s Circuital Law.', notes: '', importantQuestions: [] },
      { id: 'p5', title: 'Magnetism & Matter', description: 'Earth magnetism and properties of magnetic materials.', notes: '', importantQuestions: [] },
      { id: 'p6', title: 'Electromagnetic Induction', description: 'Faraday\'s Laws and Lenz\'s Law.', notes: '', importantQuestions: [] },
      { id: 'p7', title: 'Alternating Current', description: 'LCR circuits, Power factor, and Transformers.', notes: '', importantQuestions: [] },
      { id: 'p8', title: 'Electromagnetic Waves', description: 'EM Spectrum and Maxwell\'s Equations.', notes: '', importantQuestions: [] },
      { id: 'p9', title: 'Ray Optics & Optical Instruments', description: 'Reflection, Refraction, Lenses, and Telescopes.', notes: '', importantQuestions: [] },
      { id: 'p10', title: 'Wave Optics', description: 'Interference, Huygens Principle, and Diffraction.', notes: '', importantQuestions: [] },
      { id: 'p11', title: 'Dual Nature of Radiation & Matter', description: 'Photoelectric effect and De-Broglie waves.', notes: '', importantQuestions: [] },
      { id: 'p12', title: 'Atoms', description: 'Bohr model and Atomic Spectra.', notes: '', importantQuestions: [] },
      { id: 'p13', title: 'Nuclei', description: 'Nuclear Forces, Radioactivity, and Binding Energy.', notes: '', importantQuestions: [] },
      { id: 'p14', title: 'Semiconductor Electronics', description: 'P-N junction, Diodes, and Logic Gates.', notes: '', importantQuestions: [] },
      { id: 'p_rev', title: 'FULL SUBJECT REVISION', description: 'Master Formulas, Laws, and High-Yield Revision Points for 2026 Boards.', notes: '', importantQuestions: [] }
    ]
  },
  {
    id: 'maths',
    name: 'Mathematics',
    icon: '➗',
    color: 'red',
    chapters: [
      { id: 'm1', title: 'Relations & Functions', description: 'Equivalence relations and composite functions.', notes: '', importantQuestions: [] },
      { id: 'm2', title: 'Inverse Trigonometry', description: 'Principal values and properties.', notes: '', importantQuestions: [] },
      { id: 'm3', title: 'Matrices', description: 'Operations, Transpose, Inverse.', notes: '', importantQuestions: [] },
      { id: 'm4', title: 'Determinants', description: 'Properties and solving equations using Cramer\'s rule.', notes: '', importantQuestions: [] },
      { id: 'm5', title: 'Continuity & Differentiability', description: 'Chain rule, Implicit differentiation.', notes: '', importantQuestions: [] },
      { id: 'm6', title: 'Applications of Derivatives', description: 'Rates, Maxima/Minima, Tangents.', notes: '', importantQuestions: [] },
      { id: 'm7', title: 'Integrals', description: 'Indefinite and Definite integration.', notes: '', importantQuestions: [] },
      { id: 'm8', title: 'Applications of Integrals', description: 'Area under curves.', notes: '', importantQuestions: [] },
      { id: 'm9', title: 'Differential Equations', description: 'Order, Degree, Solution methods.', notes: '', importantQuestions: [] },
      { id: 'm10', title: 'Vector Algebra', description: 'Dot and Cross products.', notes: '', importantQuestions: [] },
      { id: 'm11', title: '3D Geometry', description: 'Lines and Planes in space.', notes: '', importantQuestions: [] },
      { id: 'm12', title: 'Linear Programming', description: 'Optimization under constraints.', notes: '', importantQuestions: [] },
      { id: 'm13', title: 'Probability', description: 'Bayes theorem, Distributions.', notes: '', importantQuestions: [] },
      { id: 'm_rev', title: 'FULL SUBJECT REVISION', description: 'Formula Book, Shortcuts, and Important Theorem List for 2026 Boards.', notes: '', importantQuestions: [] }
    ]
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    icon: '🧪',
    color: 'purple',
    chapters: [
      { id: 'c1', title: 'Solutions', description: 'Colligative properties and solubility.', notes: '', importantQuestions: [] },
      { id: 'c2', title: 'Electrochemistry', description: 'Nernst equation, Conductance and Cells.', notes: '', importantQuestions: [] },
      { id: 'c3', title: 'Chemical Kinetics', description: 'Rate of reaction, Order and Arrhenius Eq.', notes: '', importantQuestions: [] },
      { id: 'c4', title: 'd & f Block Elements', description: 'Transition metals and Lanthanoids.', notes: '', importantQuestions: [] },
      { id: 'c5', title: 'Coordination Compounds', description: 'Ligands, IUPAC, VBT and CFT.', notes: '', importantQuestions: [] },
      { id: 'c6', title: 'Haloalkanes & Haloarenes', description: 'SN1/SN2 mechanisms and Nucleophilic substitution.', notes: '', importantQuestions: [] },
      { id: 'c7', title: 'Alcohols, Phenols & Ethers', description: 'Syntheses and major chemical reactions.', notes: '', importantQuestions: [] },
      { id: 'c8', title: 'Aldehydes, Ketones & Carboxylic Acids', description: 'Nucleophilic addition and Name reactions.', notes: '', importantQuestions: [] },
      { id: 'c9', title: 'Amines', description: 'Basic strength, Diazonium salts and Hoffmann Bromamide.', notes: '', importantQuestions: [] },
      { id: 'c10', title: 'Biomolecules', description: 'Carbohydrates, Proteins, DNA and Vitamins.', notes: '', importantQuestions: [] },
      { id: 'c_rev', title: 'FULL SUBJECT REVISION', description: 'All Name Reactions, Mechanisms, and Formula Sheet for 2026 Boards.', notes: '', importantQuestions: [] }
    ]
  },
  {
    id: 'biology',
    name: 'Biology',
    icon: '🧬',
    color: 'green',
    chapters: [
      { id: 'b1', title: 'Sexual Reproduction in Flowering Plants', description: 'Pollination and double fertilization.', notes: '', importantQuestions: [] },
      { id: 'b2', title: 'Human Reproduction', description: 'Male/Female systems, Embryogenesis.', notes: '', importantQuestions: [] },
      { id: 'b3', title: 'Reproductive Health', description: 'Birth control, STDs, Infertility.', notes: '', importantQuestions: [] },
      { id: 'b4', title: 'Principles of Inheritance & Variation', description: 'Mendelian and molecular genetics.', notes: '', importantQuestions: [] },
      { id: 'b5', title: 'Molecular Basis of Inheritance', description: 'DNA, RNA, Replication, Translation.', notes: '', importantQuestions: [] },
      { id: 'b6', title: 'Evolution', description: 'Origins and natural selection.', notes: '', importantQuestions: [] },
      { id: 'b7', title: 'Human Health & Disease', description: 'Immunity, HIV, Cancer.', notes: '', importantQuestions: [] },
      { id: 'b8', title: 'Microbes in Human Welfare', description: 'Sewage, Biogas, Antibiotics.', notes: '', importantQuestions: [] },
      { id: 'b9', title: 'Biotechnology: Principles & Processes', description: 'rDNA technology and PCR.', notes: '', importantQuestions: [] },
      { id: 'b10', title: 'Biotechnology: Applications', description: 'Medicine, Agriculture and Transgenics.', notes: '', importantQuestions: [] },
      { id: 'b11', title: 'Organisms & Populations', description: 'Interactions and adaptations.', notes: '', importantQuestions: [] },
      { id: 'b12', title: 'Ecosystem', description: 'Energy flow, Ecological Pyramids and cycles.', notes: '', importantQuestions: [] },
      { id: 'b13', title: 'Biodiversity & Conservation', description: 'Threats and strategies.', notes: '', importantQuestions: [] },
      { id: 'b_rev', title: 'FULL SUBJECT REVISION', description: 'Important Diagrams List, Differences, and Glossary for 2026 Boards.', notes: '', importantQuestions: [] }
    ]
  },
  {
    id: 'cs',
    name: 'Computer Science',
    icon: '💻',
    color: 'indigo',
    chapters: [
      { id: 'cs1', title: 'Python Revision Tour', description: 'Review of Class 11 concepts.', notes: '', importantQuestions: [] },
      { id: 'cs2', title: 'Functions', description: 'Types, scope, and parameters.', notes: '', importantQuestions: [] },
      { id: 'cs3', title: 'File Handling', description: 'Text, Binary, CSV files.', notes: '', importantQuestions: [] },
      { id: 'cs4', title: 'Data Structures (Stack)', description: 'Implementation using lists.', notes: '', importantQuestions: [] },
      { id: 'cs5', title: 'Computer Networks', description: 'Topology, protocols, internet.', notes: '', importantQuestions: [] },
      { id: 'cs6', title: 'Database Concepts', description: 'Relational model, keys.', notes: '', importantQuestions: [] },
      { id: 'cs7', title: 'Structured Query Language', description: 'DDL, DML commands.', notes: '', importantQuestions: [] },
      { id: 'cs8', title: 'Python-SQL Interface', description: 'Connecting Python to MySQL.', notes: '', importantQuestions: [] },
      { id: 'cs_rev', title: 'FULL SUBJECT REVISION', description: 'Python Code Snippets, SQL Query List, and Network Topology Revision.', notes: '', importantQuestions: [] }
    ]
  },
  {
    id: 'english',
    name: 'English',
    icon: '📖',
    color: 'pink',
    chapters: [
      { id: 'ef1', title: 'Flamingo: The Last Lesson', description: 'Prose - Alphonse Daudet.', notes: '', importantQuestions: [] },
      { id: 'ef2', title: 'Flamingo: Lost Spring', description: 'Prose - Anees Jung.', notes: '', importantQuestions: [] },
      { id: 'ef3', title: 'Flamingo: Deep Water', description: 'Prose - William Douglas.', notes: '', importantQuestions: [] },
      { id: 'ef4', title: 'Flamingo: The Rattrap', description: 'Prose - Selma Lagerlöf.', notes: '', importantQuestions: [] },
      { id: 'ef5', title: 'Flamingo: Indigo', description: 'Prose - Louis Fischer.', notes: '', importantQuestions: [] },
      { id: 'ef6', title: 'Flamingo: Poets and Pancakes', description: 'Prose - Asokamitran.', notes: '', importantQuestions: [] },
      { id: 'ef7', title: 'Flamingo: The Interview', description: 'Prose - Christopher Silvester.', notes: '', importantQuestions: [] },
      { id: 'ef8', title: 'Flamingo: Going Places', description: 'Prose - A. R. Barton.', notes: '', importantQuestions: [] },
      { id: 'efp1', title: 'Poem: My Mother at Sixty-six', description: 'Poetry - Kamala Das.', notes: '', importantQuestions: [] },
      { id: 'efp2', title: 'Poem: Keeping Quiet', description: 'Poetry - Pablo Neruda.', notes: '', importantQuestions: [] },
      { id: 'efp3', title: 'Poem: A Thing of Beauty', description: 'Poetry - John Keats.', notes: '', importantQuestions: [] },
      { id: 'efp4', title: 'Poem: A Roadside Stand', description: 'Poetry - Robert Frost.', notes: '', importantQuestions: [] },
      { id: 'efp5', title: 'Poem: Aunt Jennifer\'s Tigers', description: 'Poetry - Adrienne Rich.', notes: '', importantQuestions: [] },
      { id: 'ev1', title: 'Vistas: The Third Level', description: 'Supplementary - Jack Finney.', notes: '', importantQuestions: [] },
      { id: 'ev2', title: 'Vistas: The Tiger King', description: 'Supplementary - Kalki.', notes: '', importantQuestions: [] },
      { id: 'ev3', title: 'Vistas: Journey to the end of the Earth', description: 'Supplementary - Tishani Doshi.', notes: '', importantQuestions: [] },
      { id: 'ev4', title: 'Vistas: The Enemy', description: 'Supplementary - Pearl S. Buck.', notes: '', importantQuestions: [] },
      { id: 'ev5', title: 'Vistas: On the Face of It', description: 'Supplementary - Susan Hill.', notes: '', importantQuestions: [] },
      { id: 'ev6', title: 'Vistas: Memories of Childhood', description: 'Supplementary - Zitkala-Sa & Bama.', notes: '', importantQuestions: [] },
      { id: 'e_rev', title: 'FULL SUBJECT REVISION', description: 'Summaries, Poetic Devices, and Character Sketches Master List.', notes: '', importantQuestions: [] }
    ]
  },
  {
    id: 'physed',
    name: 'Physical Education',
    icon: '⚽',
    color: 'orange',
    chapters: [
      { id: 'pe1', title: 'Management of Events', description: 'Tournaments and committees.', notes: '', importantQuestions: [] },
      { id: 'pe2', title: 'Children & Women in Sports', description: 'Motor development and issues.', notes: '', importantQuestions: [] },
      { id: 'pe3', title: 'Yoga as Preventive Measure', description: 'Asanas for lifestyle diseases.', notes: '', importantQuestions: [] },
      { id: 'pe4', title: 'Physical Ed & Sports for CWSN', description: 'Adaptive education.', notes: '', importantQuestions: [] },
      { id: 'pe5', title: 'Sports & Nutrition', description: 'Macro/Micro nutrients, Diet.', notes: '', importantQuestions: [] },
      { id: 'pe6', title: 'Test & Measurement', description: 'Fitness tests and SAI tests.', notes: '', importantQuestions: [] },
      { id: 'pe7', title: 'Physiology & Injuries', description: 'Impact of exercise and recovery.', notes: '', importantQuestions: [] },
      { id: 'pe8', title: 'Biomechanics & Sports', description: 'Laws of motion, Equilibrium.', notes: '', importantQuestions: [] },
      { id: 'pe9', title: 'Psychology & Sports', description: 'Personality and motivation.', notes: '', importantQuestions: [] },
      { id: 'pe10', title: 'Training in Sports', description: 'Strength, Endurance, Speed.', notes: '', importantQuestions: [] },
      { id: 'pe_rev', title: 'FULL SUBJECT REVISION', description: 'All Fixtures, Asanas list, and Sports Injuries Revision Chart.', notes: '', importantQuestions: [] }
    ]
  }
];
