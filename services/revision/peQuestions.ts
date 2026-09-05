// services/revision/peQuestions.ts
// CBSE Class 12 Physical Education Full Subject Revision Question Bank (Complete Syllabus)

import { RevisionQuestion } from './types.ts';

export const peCategories = [
  'All Questions',
  'Most Repeated Questions',
  'Tournament Fixtures & Formulas',
  'Yoga & Postural Deformities',
  'Test & Measurement in Sports',
  'Physiology, Biomechanics & Injuries',
  'Case-Based Questions',
  'Assertion & Reason',
  'High-Yield MCQs',
  '2-Mark & 3-Mark Questions',
  '5-Mark Long Questions'
];

export const peQuestions: RevisionQuestion[] = [
  // 1. Ch 1: Management of Sporting Events - Knockout Fixture / 5-Mark
  {
    id: 'pe-q1',
    questionNumber: 1,
    subjectId: 'physical_education',
    chapterTitle: 'Management of Sporting Events',
    chapterNumber: 1,
    category: 'Tournament Fixtures & Formulas',
    label: 'Frequently Asked',
    marks: '5 Marks',
    yearTag: 'CBSE 2024 (Delhi), 2023, 2020',
    question: `(a) Draw a knockout fixture for 11 teams mentioning all calculation steps:\n  (i) Total number of matches\n  (ii) Number of teams in Upper Half and Lower Half\n  (iii) Total number of Byes\n  (iv) Number of Byes in Upper Half and Lower Half\n  (v) Total number of rounds\n(b) Explain the procedure for assigning Byes to teams.`,
    answer: {
      finalAnswer: 'Total matches = 10; Upper half = 6 teams, Lower half = 5 teams; Total Byes = 5 (Upper half = 2 byes, Lower half = 3 byes); Total rounds = 4.',
      formulaOrConcept: `• Total matches N_matches = N - 1 = 11 - 1 = 10\n• Upper Half teams = (N + 1) / 2; Lower Half teams = (N - 1) / 2\n• Next higher power of 2 = 16; Total Byes NB = 16 - 11 = 5\n• Byes in Upper Half = (NB - 1) / 2; Byes in Lower Half = (NB + 1) / 2\n• Total rounds = 4 (since 2⁴ = 16)`,
      solution: `(a) Calculation Steps for 11 Teams Knockout Fixture:
Given: Total number of teams N = 11.
1. Total Number of Matches:
   N_matches = N - 1 = 11 - 1 = 10 matches.

2. Division of Teams into Halves:
   Since N = 11 is an odd number:
   • Teams in Upper Half = (N + 1) / 2 = (11 + 1) / 2 = 6 teams (Teams 1 to 6).
   • Teams in Lower Half = (N - 1) / 2 = (11 - 1) / 2 = 5 teams (Teams 7 to 11).

3. Total Number of Byes:
   Next highest power of 2 greater than 11 is 16 (2⁴ = 16).
   Total Byes (NB) = 16 - 11 = 5 Byes.

4. Division of Byes into Halves:
   • Byes in Upper Half = (NB - 1) / 2 = (5 - 1) / 2 = 2 Byes.
   • Byes in Lower Half = (NB + 1) / 2 = (5 + 1) / 2 = 3 Byes.

5. Total Number of Rounds:
   Since 16 = 2⁴, the total number of rounds = 4 rounds (Round 1, Round 2 / Quarterfinals, Round 3 / Semifinals, Round 4 / Final).

(b) Method / Sequence of Allocating Byes:
• 1st Bye: Allotted to the LAST team of the Lower Half (Team 11).
• 2nd Bye: Allotted to the FIRST team of the Upper Half (Team 1).
• 3rd Bye: Allotted to the FIRST team of the Lower Half (Team 7).
• 4th Bye: Allotted to the LAST team of the Upper Half (Team 6).
• 5th Bye: Allotted to the SECOND-TO-LAST team of the Lower Half (Team 10).

(c) Fixture Table:
Round 1:
• Match 1: Team 2 vs Team 3 (Winner plays Team 1 in R2)
• Match 2: Team 4 vs Team 5 (Winner plays Team 6 in R2)
• Match 3: Team 8 vs Team 9 (Winner plays Team 7 in R2)
(Teams 1, 6, 7, 10, 11 receive Byes in Round 1 and advance directly to Round 2).

Round 2 (Quarterfinals): 4 Matches.
Round 3 (Semifinals): 2 Matches.
Round 4 (Final): 1 Match -> Winner!`,
      examApproach: 'Always write down the formulas clearly before drawing the bracket fixture. Label Round 1, Round 2, Round 3, and Round 4.',
      markingPoints: [
        '2.5 Marks: Accurate numerical formulas and calculations for matches, halves, byes, and rounds.',
        '1 Mark: Step-by-step procedure for distributing byes.',
        '1.5 Marks: Clean, labeled graphical tournament fixture bracket.'
      ]
    }
  },

  // 2. Ch 3: Yoga as Preventive Measure for Lifestyle Diseases / 5-Mark
  {
    id: 'pe-q2',
    questionNumber: 2,
    subjectId: 'physical_education',
    chapterTitle: 'Yoga as Preventive Measure',
    chapterNumber: 3,
    category: 'Yoga & Postural Deformities',
    label: 'High Priority',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2023, 2019',
    question: `(a) Name any two asanas recommended for the prevention and management of Diabetes Mellitus.\n(b) Explain the procedure, benefits, and contraindications of Bhujangasana (Cobra Pose) or Mandukasana (Frog Pose).\n(c) How does regular practice of Yoga help in preventing Hypertension?`,
    answer: {
      finalAnswer: 'Recommended asanas: Mandukasana & Bhujangasana; Mandukasana stimulates pancreatic beta cells for insulin secretion; Yoga lowers sympathetic activity and cortisol, reducing blood pressure.',
      formulaOrConcept: `• Diabetes asanas: Katichakrasana, Pavanmuktasana, Bhujangasana, Mandukasana\n• Mandukasana exerts intra-abdominal pressure stimulating insulin production in pancreas.\n• Hypertension relief: Yogic breathing (Pranayama) activates parasympathetic nervous system.`,
      solution: `(a) Recommended Asanas for Diabetes:
1. Mandukasana (Frog Pose)
2. Bhujangasana (Cobra Pose)
(Other effective asanas: Paschimottanasana, Ardha Matsyendrasana).

(b) Mandukasana (Frog Pose):
1. Procedure:
   • Sit comfortably in Vajrasana (kneeling posture).
   • Make fists with both hands with thumbs tucked inside fingers.
   • Place the fists on the abdomen on both sides of the navel.
   • Inhale deeply, then exhale completely while bending forward from the waist, pressing fists firmly into the lower abdomen.
   • Keep the chest resting on the thighs and look straight ahead with chin up.
   • Hold the posture for 30 to 60 seconds while breathing normally, then slowly return to Vajrasana.
2. Benefits:
   • Direct pressure on the pancreas stimulates Langerhans beta-cells to secrete insulin, aiding blood glucose regulation.
   • Massages abdominal organs, curing constipation, indigestion, and bloating.
   • Reduces excess abdominal adipose tissue (belly fat).
3. Contraindications:
   • Individuals suffering from severe peptic ulcers, abdominal hernia, or recent abdominal surgery should strictly avoid it.
   • Pregnant women must not practice this asana.

(c) How Yoga Prevents Hypertension (High Blood Pressure):
1. Downregulation of Sympathetic Nervous System: Regular practice of Shavasana, Nadi Shodhan, and Bhramari Pranayama reduces sympathetic overdrive and activates the parasympathetic "rest and digest" pathway.
2. Reduction in Stress Hormones: Yoga significantly lowers circulating cortisol and adrenaline levels, reducing arterial vasoconstriction.
3. Vasodilation and Improved Elasticity: Yogic stretching enhances arterial compliance and endothelial nitric oxide release, lowering peripheral vascular resistance and restoring resting blood pressure.`,
      examApproach: 'Examiner Requirement: Must write (1) Procedure, (2) Benefits (at least 2), and (3) Contraindications (who should avoid it).',
      markingPoints: [
        '1 Mark: Naming 2 valid asanas for diabetes.',
        '2.5 Marks: Detailed procedure, 2 benefits, and 2 contraindications of Mandukasana.',
        '1.5 Marks: Physiological explanation of yoga\'s effect on hypertension.'
      ]
    }
  },

  // 3. Ch 7: Physiology & Injuries in Sports - Soft Tissue Injuries & PRICE / 3-Mark
  {
    id: 'pe-q3',
    questionNumber: 3,
    subjectId: 'physical_education',
    chapterTitle: 'Physiology & Injuries in Sports',
    chapterNumber: 7,
    category: 'Physiology, Biomechanics & Injuries',
    label: 'Must Practice',
    marks: '3 Marks',
    yearTag: 'CBSE 2024, 2022',
    question: `(a) Differentiate between a Sprain and a Strain.\n(b) Explain the PRICE principle used for immediate first-aid management of soft tissue sports injuries.`,
    answer: {
      finalAnswer: 'Sprain is ligament injury; Strain is muscle or tendon injury; PRICE stands for Protect, Rest, Ice, Compress, and Elevate.',
      formulaOrConcept: `• Sprain: Ligament (connects bone to bone) injury\n• Strain: Muscle / Tendon (connects muscle to bone) injury\n• PRICE: P = Protect, R = Rest, I = Ice, C = Compression, E = Elevation`,
      solution: `(a) Difference between Sprain and Strain:
1. Sprain:
   • Definition: An injury caused by excessive stretching or tearing of a Ligament (the tough band of fibrous connective tissue connecting bone to bone).
   • Common Site: Ankle joint (inversion sprain), wrist, or knee (ACL sprain).
   • Symptoms: Severe acute joint pain, rapid swelling, localized tenderness, and bruising.
2. Strain:
   • Definition: An injury caused by overstretching or tearing of a Muscle or a Tendon (fibrous tissue connecting muscle to bone).
   • Common Site: Hamstring muscles, groin, or calf muscles.
   • Symptoms: Muscle spasm, localized cramping, muscle weakness, and pain during muscle contraction.

(b) The PRICE First-Aid Principle:
• P - Protect: Protect the injured limb or joint from further damage using splints, braces, or crutches.
• R - Rest: Cease all athletic activity immediately and keep the injured part completely rested to prevent exacerbation of internal hemorrhage.
• I - Ice: Apply an ice pack wrapped in a cloth to the injured area for 15-20 minutes every 2-3 hours for the first 48 hours. Cold causes vasoconstriction, minimizing internal bleeding and swelling.
• C - Compression: Wrap an elastic crepe bandage firmly around the injured area to mechanically restrict fluid extravasation and edema. Ensure it is not too tight to impede arterial circulation.
• E - Elevation: Keep the injured limb elevated above the level of the heart to facilitate venous and lymphatic drainage, reducing gravitational pooling of fluids.`,
      examApproach: 'Remember mnemonic: PRICE (Protect, Rest, Ice, Compress, Elevate). Clearly distinguish ligament (sprain) vs muscle/tendon (strain).',
      markingPoints: [
        '1.5 Marks: Clear distinction between sprain (ligament) and strain (muscle/tendon).',
        '1.5 Marks: Detailed explanation of all 5 letters in the PRICE protocol.'
      ]
    }
  },

  // 4. Ch 6: Test & Measurement in Sports - Rikli & Jones Senior Citizen Fitness Test / 5-Mark
  {
    id: 'pe-q4',
    questionNumber: 4,
    subjectId: 'physical_education',
    chapterTitle: 'Test & Measurement in Sports',
    chapterNumber: 6,
    category: 'Test & Measurement in Sports',
    label: 'High Priority',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2023, 2018',
    question: `Explain the Rikli and Jones Senior Citizen Fitness Test. Describe any four items of this test along with their purpose, equipment required, and scoring procedure.`,
    answer: {
      finalAnswer: 'Rikli & Jones test assesses functional fitness in older adults; includes Chair Stand Test, Arm Curl Test, Chair Sit & Reach Test, Back Scratch Test, 8-Foot Up and Go, and 6-Minute Walk Test.',
      formulaOrConcept: `• Chair Stand: Lower body strength\n• Arm Curl: Upper body strength\n• Chair Sit & Reach: Lower body flexibility\n• Back Scratch: Upper body flexibility\n• 8-Foot Up & Go: Agility & dynamic balance`,
      solution: `Overview:
The Rikli and Jones Senior Citizen Fitness Test (Fullerton Functional Test) evaluates the functional fitness performance of older adults (aged 60+), helping identify mobility risks and fall vulnerability.

Four Test Items:

1. Chair Stand Test (Assessment of Lower Body Strength):
   • Purpose: Measures lower body strength, essential for climbing stairs, standing up from chairs, and walking.
   • Equipment: Straight-backed folding chair (height 44 cm / 17 inches) placed against a wall, stopwatch.
   • Procedure: The participant sits upright in the middle of the chair with arms crossed against the chest and feet flat on the floor. On the signal "Go", the participant stands up completely and sits down repeatedly as fast as possible for 30 seconds.
   • Scoring: Total number of complete stands executed in 30 seconds.

2. Arm Curl Test (Assessment of Upper Body Strength):
   • Purpose: Measures upper body strength and endurance, vital for carrying groceries and lifting objects.
   • Equipment: Chair without arms, dumbbells (5 lbs / 2.27 kg for women; 8 lbs / 3.63 kg for men), stopwatch.
   • Procedure: Participant sits on the chair holding the dumbbell in the dominant hand. On "Go", curls the arm through full range of flexion and extension for 30 seconds.
   • Scoring: Total number of correctly completed repetitions within 30 seconds.

3. Chair Sit and Reach Test (Assessment of Lower Body / Hamstring Flexibility):
   • Purpose: Evaluates hamstring and lower back flexibility to prevent low back pain and postural decline.
   • Equipment: Chair (44 cm high), 18-inch ruler.
   • Procedure: The participant sits at the edge of the chair with one leg bent (foot flat) and the other leg extended straight with heel on the floor and ankle dorsiflexed at 90°. Reaching forward with hands overlapping towards the toes.
   • Scoring: Distance in inches between fingertips and toes. Touching toes is scored as 0; falling short is scored as negative (-); reaching past toes is scored as positive (+).

4. Eight-Foot Up-and-Go Test (Assessment of Agility and Dynamic Balance):
   • Purpose: Measures speed, agility, and motor coordination while moving, crucial for preventing falls.
   • Equipment: Chair, stopwatch, measuring tape, cone marker placed 8 feet (2.44 m) directly in front of the chair.
   • Procedure: Participant sits on the chair. On "Go", stands up, walks as quickly as possible around the cone 8 feet away, returns, and sits back down.
   • Scoring: Elapsed time in seconds to the nearest tenth of a second (shorter time indicates superior agility).`,
      examApproach: 'Write for each test item: Purpose, Equipment, Procedure, and Scoring.',
      markingPoints: [
        '1 Mark: Introduction to Rikli & Jones senior citizen fitness battery.',
        '1 Mark each (4 Marks): Precise description of any 4 test items covering Purpose, Equipment, Procedure, and Scoring.'
      ]
    }
  }
];
