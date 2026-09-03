// services/subjects/pe/pyqs1.ts
// Chapters 1-5: Management of Sporting Events, Children and Women in Sports, Yoga, CWSN, Sports & Nutrition Solved Board PYQs
// Authentic recent CBSE Board questions with comprehensive notebook-style solutions.

export function getPEPart1PYQs(chapterLower: string): string | null {
  // CHAPTER 1: Management of Sporting Events
  if (
    chapterLower.includes('management') ||
    chapterLower.includes('event') ||
    chapterLower.includes('fixture') ||
    chapterLower.includes('tournament') ||
    chapterLower === 'pe1'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (75)] If 13 teams are participating in a knock-out tournament, what is the total number of byes to be allotted?
(A) 2
(B) 3
(C) 4
(D) 5
SOLUTION:
**Correct Answer:** (B) 3
**Calculation:**
- Total number of teams (\`N\`) = 13
- Next higher power of 2 greater than or equal to N = 2⁴ = 16
- Number of Byes (\`NB\`) = 2ⁿ - N = 16 - 13 = **3 byes**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B) or calculating 3.

QUESTION: Q2. [3 Marks Fixture Drawing, CBSE 2023 (Delhi)]
Draw a knock-out fixture for 11 teams mentioning the number of matches, byes, and allocation of teams in upper and lower halves.
SOLUTION:
**Step 1: Essential Mathematical Calculations:**
1. Total Teams (\`N\`) = 11
2. Total Matches (\`M\`) = N - 1 = 11 - 1 = **10 matches**
3. Teams in Upper Half = \`(N + 1) / 2 = (11 + 1) / 2\` = **6 teams** (Teams 1 to 6)
4. Teams in Lower Half = \`(N - 1) / 2 = (11 - 1) / 2\` = **5 teams** (Teams 7 to 11)
5. Next power of 2 = 16. Total Byes (\`NB\`) = 16 - 11 = **5 byes**
6. Byes in Upper Half = \`(NB - 1) / 2 = (5 - 1) / 2\` = **2 byes**
7. Byes in Lower Half = \`(NB + 1) / 2 = (5 + 1) / 2\` = **3 byes**

**Step 2: Systematic Allotment of Byes:**
- 1st Bye => Team 11 (Last team of Lower Half)
- 2nd Bye => Team 1 (First team of Upper Half)
- 3rd Bye => Team 7 (First team of Lower Half)
- 4th Bye => Team 6 (Last team of Upper Half)
- 5th Bye => Team 10 (Second last team of Lower Half)

**Step 3: Official Tournament Fixture Chart (Standard Book Layout):**
DIAGRAM: knockout_fixture_11 | Official CBSE Class 12 Standard Knock-Out Fixture for 11 Teams (10 Matches, 5 Byes)

**Step 4: Match Schedule & Round Progression Table:**
| Round | Match No. | Competing Teams | Winner Proceeds To |
| :--- | :--- | :--- | :--- |
| **Round 1** | Match 1 | Team 2 vs Team 3 | Round 2 (vs Team 1 [Bye 2]) |
| **Round 1** | Match 2 | Team 4 vs Team 5 | Round 2 (vs Team 6 [Bye 4]) |
| **Round 1** | Match 3 | Team 8 vs Team 9 | Round 2 (vs Team 7 [Bye 3]) |
| **Round 2 (Quarters)** | Match 4 | Team 1 (Bye 2) vs Winner M1 | Semifinal 1 (Upper Half) |
| **Round 2 (Quarters)** | Match 5 | Winner M2 vs Team 6 (Bye 4) | Semifinal 1 (Upper Half) |
| **Round 2 (Quarters)** | Match 6 | Team 7 (Bye 3) vs Winner M3 | Semifinal 2 (Lower Half) |
| **Round 2 (Quarters)** | Match 7 | Team 10 (Bye 5) vs Team 11 (Bye 1) | Semifinal 2 (Lower Half) |
| **Round 3 (Semis)** | Match 8 | Winner M4 vs Winner M5 | Final (Finalist 1) |
| **Round 3 (Semis)** | Match 9 | Winner M6 vs Winner M7 | Final (Finalist 2) |
| **Round 4 (Final)** | Match 10 | Finalist 1 vs Finalist 2 | **TOURNAMENT WINNER** |

**CBSE Marking Rubric:**
- 1 Mark for calculations (Upper/Lower division, Byes calculation).
- 1 Mark for sequential placement of all 5 byes.
- 1 Mark for correct pairings across Round 1, 2, 3 and Final.
INSIGHT: Always write down the step-by-step bye allocation rule (Last of Lower, First of Upper, etc.) before drawing lines.`;
  }

  // CHAPTER 2: Children and Women in Sports
  if (
    chapterLower.includes('women') ||
    chapterLower.includes('posture') ||
    chapterLower.includes('deformit') ||
    chapterLower.includes('female athlete triad') ||
    chapterLower === 'pe2'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (75)] An abnormal lateral sideways curvature of the spine is known as:
(A) Kyphosis
(B) Lordosis
(C) Scoliosis
(D) Knock Knees
SOLUTION:
**Correct Answer:** (C) Scoliosis
**Notebook Explanation:**
- **Scoliosis:** Sideways or lateral 'C' or 'S' shaped curvature of the spine.
- **Kyphosis:** Outward curvature (hump) of thoracic spine.
- **Lordosis:** Inward curvature of lumbar spine.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (C).

QUESTION: Q2. [5 Marks Long Answer, CBSE 2024 (75)]
What is the Female Athlete Triad? Detail its three interrelated components and explain preventive strategies.
SOLUTION:
**Female Athlete Triad & Its Three Components:**
The **Female Athlete Triad** is an interrelated clinical syndrome observed in active female athletes characterized by three conditions:

1. **Osteoporosis (Low Bone Mineral Density):**
   - Premature loss of bone density causing porous, fragile, and brittle bones highly susceptible to stress fractures.
   - Low estrogen levels (due to amenorrhea) impair calcium absorption and bone remodeling.

2. **Amenorrhea (Menstrual Dysfunction):**
   - The cessation of normal menstrual cycles for **3 or more consecutive months** (Secondary Amenorrhea).
   - In intense training with low caloric availability, the hypothalamus downregulates gonadotropin-releasing hormone (GnRH), suppressing estrogen and progesterone.

3. **Low Energy Availability (with or without Disordered Eating):**
   - Occurs when dietary caloric energy intake is insufficient to support the metabolic energy expenditure required for athletic training and basic physiological bodily functions.
   - Often associated with eating disorders like **Anorexia Nervosa** (self-starvation) or **Bulimia Nervosa** (binging and purging).

**Preventive & Corrective Strategies:**
- Nutritional education: Ensuring energy intake matches athletic expenditure (caloric balance).
- Periodic bone mineral density (DEXA) scans and menstrual cycle monitoring.
- De-emphasizing unrealistic aesthetic weight ideals in gymnastics, figure skating, and distance running.
- Multidisciplinary support team (sports nutritionist, physician, psychologist).
**CBSE Marking Rubric:**
- 1 Mark for defining Female Athlete Triad.
- 3 Marks for explaining Osteoporosis, Amenorrhea, and Low Energy Availability (1 Mark each).
- 1 Mark for preventive strategies.
INSIGHT: Mentioning that low estrogen links amenorrhea directly to osteoporosis is a key physiological insight.`;
  }

  // CHAPTER 3: Yoga for Lifestyle Diseases
  if (
    chapterLower.includes('yoga') ||
    chapterLower.includes('asana') ||
    chapterLower.includes('obesity') ||
    chapterLower.includes('diabetes') ||
    chapterLower.includes('asthma') ||
    chapterLower.includes('hypertension') ||
    chapterLower === 'pe3'
  ) {
    return `QUESTION: Q1. [3 Marks, CBSE 2024 (75)] Explain the procedure, benefits, and two contraindications of 'Ardha Matsyendrasana' for the management of Diabetes Mellitus.
SOLUTION:
**Ardha Matsyendrasana (Half Lord of the Fishes Pose):**
1. **Procedure:**
   - Sit on a yoga mat with legs extended straight forward.
   - Bend the left leg, bringing the left heel under or beside the right buttock.
   - Cross the right leg over the left knee, planting the right foot flat on the floor outside the left knee.
   - Inhale and twist the torso towards the right. Pass the left arm around the outside of the right knee and grasp the right ankle or toe with the left hand.
   - Place the right arm behind the back along the spine, turning the head over the right shoulder. Hold for 30 seconds with calm breathing; repeat on opposite side.

2. **Benefits for Diabetes:**
   - The deep abdominal twisting mechanically squeezes and massages the **pancreas**, stimulating the beta cells in the islets of Langerhans to enhance **insulin secretion**, improving cellular glucose uptake.
   - Tones abdominal muscles and relieves constipation.

3. **Contraindications:**
   - Individuals suffering from acute spinal hernia, slipped disc, or severe back pain should avoid this pose.
   - Women during pregnancy and individuals with recent abdominal surgery must not practice it.
**CBSE Marking Rubric:**
- 1 Mark for correct step-by-step procedure.
- 1 Mark for physiological benefit related to insulin and pancreas.
- 1 Mark for two valid contraindications (0.5 Mark each).

QUESTION: Q2. [2 Marks Short Answer, CBSE 2023 (Delhi)]
Why is 'Shavasana' considered one of the most effective yogic asanas for controlling Hypertension?
SOLUTION:
**Physiological Role of Shavasana in Hypertension:**
- In Shavasana, conscious conscious neuromuscular relaxation and rhythmic diaphragmatic breathing activate the **Parasympathetic Nervous System** while downregulating sympathetic overdrive.
- This dramatically reduces plasma catecholamines (adrenaline and noradrenaline), dilates peripheral blood vessels, lowers systemic vascular resistance, and normalizes systolic and diastolic blood pressure.
**CBSE Marking Rubric:**
- 1 Mark for mentioning parasympathetic nervous system activation.
- 1 Mark for explaining peripheral vasodilation and reduction in stress hormones.`;
  }

  // CHAPTER 4: CWSN (Children with Special Needs - Divyang)
  if (
    chapterLower.includes('cwsn') ||
    chapterLower.includes('special needs') ||
    chapterLower.includes('divyang') ||
    chapterLower.includes('paralympic') ||
    chapterLower === 'pe4'
  ) {
    return `QUESTION: Q1. [3 Marks, CBSE 2024 (75)] Differentiate between Special Olympics Bharat and Paralympics on the basis of eligibility, governing body, and motto.
SOLUTION:
| Basis | Special Olympics Bharat | Paralympics (IPC) |
|---|---|---|
| **Eligibility / Impairment** | Athletes with **Intellectual Disabilities** (IQ < 70, cognitive limitations). | Athletes with **Physical / Locomotor & Visual Impairments** (amputees, cerebral palsy, visual impairment). |
| **Governing Body** | Special Olympics Bharat (accredited by Special Olympics International). | International Paralympic Committee (IPC). |
| **Motto / Oath** | *"Let me win. But if I cannot win, let me be brave in the attempt."* | *"Spirit in Motion"*. |
**CBSE Marking Rubric:**
- 1 Mark each for clear distinction across eligibility, governing body, and motto.

QUESTION: Q2. [3 Marks, CBSE 2023 (Delhi)]
Suggest three effective strategies to make physical activities and sports accessible for Children with Special Needs (CWSN).
SOLUTION:
**Strategies for CWSN Inclusion:**
1. **Equipment Adaptations:** Modify athletic gear to accommodate sensory and motor constraints (e.g. use audible/beeping balls for visually impaired students in Goalball, lower the basketball hoops, provide lighter racquets with enlarged hitting surfaces).
2. **Environment & Architectural Modifications:** Ensure accessible facilities with ramps, handrails, tactile paving, wheelchair-friendly surfaces, and sound-dampened gymnasiums for children with sensory sensitivity.
3. **Instructional & Rule Adaptations:** Use multimodal teaching (visual cards, physical demonstrations, sign language), task analysis (breaking complex sports skills into simpler components), and grant extra bounces or wider service areas in racquet sports.
**CBSE Marking Rubric:**
- 1 Mark for equipment modifications with concrete example.
- 1 Mark for environment/infrastructure adaptations.
- 1 Mark for instructional strategies and rule modifications.`;
  }

  // CHAPTER 5: Sports and Nutrition
  if (
    chapterLower.includes('nutrition') ||
    chapterLower.includes('diet') ||
    chapterLower.includes('macro') ||
    chapterLower.includes('micro') ||
    chapterLower === 'pe5'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (75)] Which of the following vitamins is a water-soluble vitamin?
(A) Vitamin A
(B) Vitamin D
(C) Vitamin C
(D) Vitamin K
SOLUTION:
**Correct Answer:** (C) Vitamin C
**Notebook Explanation:**
- Fat-Soluble Vitamins: A, D, E, K.
- Water-Soluble Vitamins: B-Complex and Vitamin C (Ascorbic Acid).
**CBSE Marking Rubric:**
- 1 Mark for selecting option (C).

QUESTION: Q2. [3 Marks, CBSE 2023 (Delhi)]
Explain any three major pitfalls of dieting for weight control.
SOLUTION:
**Three Major Pitfalls of Dieting:**
1. **Loss of Lean Muscle Mass:** Severe calorie restriction forces the body into catabolic starvation mode, breaking down functional muscle protein for glucose synthesis rather than burning stored adipose fat.
2. **Depression of Basal Metabolic Rate (BMR):** Skipping meals and consuming very low-calorie diets signal the body to conserve energy, drastically slowing down the metabolic rate and leading to the **Yo-Yo Effect** (rapid rebound weight gain once normal eating resumes).
3. **Nutritional Micronutrient Deficiencies:** Eliminating whole food groups (e.g. zero-carb or zero-fat diets) deprives the body of essential fat-soluble vitamins (A, D, E, K), calcium, and iron, leading to anemia, fatigue, and impaired immune function.
**CBSE Marking Rubric:**
- 1 Mark for each clearly explained pitfall with physiological reasoning.`;
  }

  return null;
}
