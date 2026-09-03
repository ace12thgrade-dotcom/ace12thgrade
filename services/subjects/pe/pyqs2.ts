// services/subjects/pe/pyqs2.ts
// Chapters 6-10: Test & Measurement, Physiology & Injuries, Biomechanics, Psychology, Training in Sports
// Master Revision Bank & Authentic CBSE Board Solved PYQs (2020-2024).

export function getPEPart2PYQs(chapterLower: string): string | null {
  // FULL REVISION PYQS / COMPREHENSIVE MOCK SET
  if (
    chapterLower.includes('revision') ||
    chapterLower.includes('full') ||
    chapterLower.includes('master') ||
    chapterLower.includes('summary') ||
    chapterLower === 'pe_all'
  ) {
    return `QUESTION: Q1. [3 Marks Formula & Calculation, CBSE 2024 (75)]
An athlete completes the Harvard Step Test for 300 seconds. The post-exercise pulse counts recorded are:
- 1 to 1.5 min: 80 beats
- 2 to 2.5 min: 65 beats
- 3 to 3.5 min: 55 beats
Calculate the Fitness Index Score using the Long Form formula and evaluate the cardiovascular rating of the athlete.
SOLUTION:
**Step 1: Formula for Fitness Index (Long Form):**
\`\`\`
Fitness Index = (100 × Test duration in seconds) / [2 × (Sum of 3 recovery pulse counts)]
\`\`\`
**Step 2: Substitution of Given Values:**
- Duration of exercise = 300 seconds
- Sum of recovery pulses = 80 + 65 + 55 = **200 beats**
\`\`\`
Fitness Index = (100 × 300) / [2 × 200]
              = 30,000 / 400
              = 75.0
\`\`\`
**Step 3: Evaluation according to Brouha Fitness Index Norms:**
- Score Range: 65 – 79 = **Average / High Average Cardiovascular Fitness**.
**CBSE Marking Rubric:**
- 1 Mark for writing correct formula.
- 1 Mark for accurate numerical substitution and result (75).
- 1 Mark for correctly stating the fitness rating ('Average').

QUESTION: Q2. [5 Marks Long Answer, CBSE 2023 (Delhi)]
Describe the PRICER protocol for the acute management of soft tissue sports injuries. Explain the physiological importance of 'Ice' application.
SOLUTION:
**PRICER Protocol for Soft Tissue Sports Injuries:**
PRICER is the standardized acute first-aid protocol applied within the first 24 to 72 hours following acute soft tissue trauma (sprains, strains, contusions):
1. **P - Protection:** Immobilize and shield the injured body part using splints, braces, or slings to prevent aggravating trauma.
2. **R - Rest:** Halt physical and athletic activity immediately to minimize cellular damage and metabolic demand.
3. **I - Ice (Cryotherapy):** Apply cold packs or crushed ice wrapped in a damp towel for **15 to 20 minutes** every 2 to 3 hours.
4. **C - Compression:** Apply an elastic crepe bandage firmly around the injured area to exert counter-pressure against interstitial fluid accumulation.
5. **E - Elevation:** Elevate the injured limb above heart level to harness gravity in assisting venous and lymphatic return.
6. **R - Rehabilitation:** Supervised progressive rehabilitation to restore proprioception and joint mobility.

**Physiological Importance of Ice (Cryotherapy):**
- **Vasoconstriction:** Cold induces immediate constriction of local arterioles and capillaries, significantly reducing hemorrhage and internal hematoma formation.
- **Reduction of Secondary Hypoxia:** Decreases the metabolic rate of surrounding uninjured cells, preserving them from secondary hypoxic necrosis.
- **Analgesia:** Slows nerve conduction velocity of pain nociceptors, acting as a natural local anesthetic.
**CBSE Marking Rubric:**
- 2.5 Marks for listing and explaining all 6 components of PRICER.
- 2.5 Marks for explaining vasoconstriction, reduced metabolic rate, and analgesia for ice.`;
  }

  // CHAPTER 6: Test and Measurement in Sports
  if (
    chapterLower.includes('test') ||
    chapterLower.includes('measurement') ||
    chapterLower.includes('harvard') ||
    chapterLower.includes('rikli') ||
    chapterLower.includes('fitness test') ||
    chapterLower === 'pe6'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (75)] Which test item of the Senior Citizen Fitness Test (Rikli and Jones) assesses lower body muscular strength?
(A) Arm Curl Test
(B) Chair Stand Test
(C) Chair Sit and Reach Test
(D) Eight Foot Up and Go Test
SOLUTION:
**Correct Answer:** (B) Chair Stand Test
**Notebook Explanation:**
- **Chair Stand Test:** Evaluates lower body strength (quadriceps and gluteals) by counting full stands in 30 seconds.
- **Arm Curl Test:** Upper body strength.
- **Chair Sit and Reach Test:** Lower body flexibility.
- **Eight Foot Up and Go:** Agility and dynamic balance.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).

QUESTION: Q2. [3 Marks, CBSE 2023 (Delhi)]
Explain the purpose and procedure of the 'Eight-Foot Up-and-Go Test' for senior citizens.
SOLUTION:
**Eight-Foot Up-and-Go Test (Rikli and Jones):**
1. **Purpose:**
   - To assess speed, agility, and dynamic balance of older adults while moving, which are vital for daily functional independence (such as getting out of a bus or catching a phone).
2. **Equipment Required:**
   - A standard chair (height ~17 inches) placed against a wall, a stopwatch, a marker cone placed exactly **8 feet (2.44 m)** directly in front of the chair.
3. **Procedure:**
   - Participant starts seated fully upright with hands resting on thighs and feet flat on the floor.
   - On the command *"Go"*, the participant stands up, walks as quickly as possible (without running) around the cone, returns to the chair, and sits down.
   - The stopwatch records the exact elapsed time from the signal *"Go"* until the participant is fully reseated. Two trials are administered and the better time is recorded.
**CBSE Marking Rubric:**
- 1 Mark for stating purpose (agility, speed, and dynamic balance).
- 0.5 Mark for equipment specifications (17-inch chair, 8-foot distance).
- 1.5 Marks for complete step-by-step procedure.`;
  }

  // CHAPTER 7: Physiology and Injuries in Sports
  if (
    chapterLower.includes('physiology') ||
    chapterLower.includes('injur') ||
    chapterLower.includes('pricer') ||
    chapterLower.includes('sprain') ||
    chapterLower.includes('strain') ||
    chapterLower === 'pe7'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (75)] A severe stretch or tear in a ligament that connects bone to bone at a joint is called:
(A) Strain
(B) Sprain
(C) Contusion
(D) Abrasion
SOLUTION:
**Correct Answer:** (B) Sprain
**Notebook Explanation:**
- **Sprain:** Injury to a **ligament** (bone-to-bone connector).
- **Strain:** Injury to a **muscle or tendon** (muscle-to-bone connector).
- **Contusion:** Subcutaneous bruise from blunt impact.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).

QUESTION: Q2. [5 Marks Long Answer, CBSE 2023 (Delhi)]
Explain the long-term physiological adaptations of regular aerobic exercise on the cardiovascular and respiratory systems of an athlete.
SOLUTION:
**Cardiovascular System Adaptations:**
1. **Cardiac Hypertrophy (Athlete's Heart):** Endurance training produces enlargement of the left ventricular internal chamber diameter and myocardial thickening, increasing blood holding capacity.
2. **Increase in Stroke Volume:** Due to stronger myocardial contractions, resting stroke volume increases from ~70 ml to 100-110 ml, and can exceed 150-180 ml during maximal exercise.
3. **Athletic Bradycardia (Decreased Resting Heart Rate):** The resting pulse drops significantly (often between 40-55 bpm in elite runners) because the heart pumps higher volume per stroke.
4. **Increased Capillarization:** Capillary density around skeletal muscle fibers expands, enhancing oxygen exchange.

**Respiratory System Adaptations:**
1. **Increase in Tidal Volume & Vital Capacity:** Lung vital capacity expands from 3.5-4.5 liters up to 5.5-6.0 liters in trained swimmers and rowers.
2. **Decreased Resting Breathing Rate:** Respiratory rate decreases from 16-20 breaths/min down to 10-12 breaths/min with deeper, more efficient ventilation.
3. **Enhanced Diffusion Capacity of Gases:** Alveolar surface area and pulmonary capillary blood flow increase, maximizing \`O₂\` uptake and \`CO₂\` release.
4. **Elevation in \`VO₂ max\`:** The maximal oxygen uptake capacity increases by 15-25%, delaying lactic acid accumulation and fatigue onset.
**CBSE Marking Rubric:**
- 2.5 Marks for cardiovascular adaptations (Stroke volume, hypertrophy, bradycardia).
- 2.5 Marks for respiratory adaptations (Vital capacity, diffusion rate, \`VO₂ max\`).`;
  }

  // CHAPTER 8: Biomechanics and Sports
  if (
    chapterLower.includes('biomechanic') ||
    chapterLower.includes('lever') ||
    chapterLower.includes('equilibrium') ||
    chapterLower.includes('gravity') ||
    chapterLower.includes('friction') ||
    chapterLower.includes('projectile') ||
    chapterLower === 'pe8'
  ) {
    return `QUESTION: Q1. [3 Marks, CBSE 2024 (75)] Identify the class of lever operating during a bicep curl in human movement. Draw a neat diagram labeling Fulcrum, Effort, and Load, and explain why this lever provides high speed of movement.
SOLUTION:
**Class of Lever in Bicep Curl:**
- The bicep curl operates as a **Class 3 Lever (FEL - Effort in the Middle)**.
  * **Fulcrum (F):** The elbow joint.
  * **Effort (E):** The insertion of the biceps brachii tendon onto the radial tuberosity of the forearm.
  * **Load (L):** The weight of the forearm plus the dumbbell held in the hand.

**Diagrammatic Layout:**
\`\`\`
       Fulcrum (F)               Effort (E)               Load (L)
      [Elbow Joint] -------- [Biceps Insertion] -------- [Dumbbell in Hand]
            ^                         ^                         |
         Pivot Point             Upward Force            Downward Weight
\`\`\`

**Why Class 3 Levers Favor Speed & Range of Motion:**
- In a Class 3 lever, the effort arm is shorter than the load arm (Mechanical Advantage < 1).
- While this requires a larger muscular force to lift a given resistance, a very small contraction of the biceps muscle translates into a large and rapid excursion of the hand, favoring **high velocity and expansive range of motion** essential for throwing, swinging, and hitting in sports.
**CBSE Marking Rubric:**
- 1 Mark for correctly identifying Class 3 lever.
- 1 Mark for correct identification and diagram of Fulcrum, Effort, and Load.
- 1 Mark for explaining the mechanical trade-off (shorter effort arm producing high speed and range).

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)]
State Newton's Second Law of Motion. Illustrate its practical application in baseball catching or cricket fielding.
SOLUTION:
**Newton's Second Law of Motion (Law of Acceleration / \`F = ma\`):**
- The rate of change of momentum of a body is directly proportional to the applied external force and takes place in the direction of the force (\`F = Δp / Δt = m × a\`).
**Practical Sports Application:**
- When catching a fast-flying cricket or baseball, the fielder pulls their hands backward along the trajectory of the ball.
- By increasing the contact time (\`Δt\`) over which the ball's momentum is brought to zero, the impact acceleration is minimized, dramatically decreasing the peak impact force (\`F\`) exerted on the palms and preventing injury.
**CBSE Marking Rubric:**
- 1 Mark for definition of Newton's 2nd Law.
- 1 Mark for explaining how pulling hands back increases time (\`Δt\`) to reduce impact force (\`F\`).`;
  }

  // CHAPTER 9: Psychology and Sports
  if (
    chapterLower.includes('psychology') ||
    chapterLower.includes('personality') ||
    chapterLower.includes('motivation') ||
    chapterLower.includes('aggression') ||
    chapterLower === 'pe9'
  ) {
    return `QUESTION: Q1. [3 Marks, CBSE 2024 (75)] Differentiate between Hostile Aggression, Instrumental Aggression, and Assertive Behavior in sports with one example for each.
SOLUTION:
| Category | Primary Intent / Goal | Anger Present? | Sports Example |
|---|---|---|---|
| **Hostile Aggression** | To inflict physical injury or psychological pain on opponent. | **Yes** (driven by emotional anger/frustration). | A batsman deliberately striking a bowler with a bat after getting out. |
| **Instrumental Aggression** | To gain a tactical sports objective or victory; injury is an incidental byproduct. | **No / Low** (goal-oriented, calculated). | A defender hard-fouling an attacker heading towards an open goal to stop a score. |
| **Assertive Behavior** | High energy, vigorous physical play strictly within the rules; **zero intent to harm**. | **No** (pure athletic effort). | Cleanly sliding to block a soccer shot or jumping vigorously for a basketball rebound. |
**CBSE Marking Rubric:**
- 1 Mark for each clearly differentiated category with valid sports example.

QUESTION: Q2. [2 Marks Short Answer, CBSE 2023 (Delhi)]
Differentiate between Intrinsic and Extrinsic Motivation in sports.
SOLUTION:
- **Intrinsic Motivation:** Internal motivation arising from personal satisfaction, self-determination, passion for the game, and the joy of mastering new athletic skills. It provides sustainable, lifelong athletic engagement.
- **Extrinsic Motivation:** External drive governed by tangible incentives such as trophies, medals, prize money, job security, or social prestige and applause. While effective for short-term boosts, it can diminish if external rewards are withdrawn.
**CBSE Marking Rubric:**
- 1 Mark for intrinsic motivation with examples.
- 1 Mark for extrinsic motivation with examples.`;
  }

  // CHAPTER 10: Training in Sports
  if (
    chapterLower.includes('training') ||
    chapterLower.includes('strength') ||
    chapterLower.includes('endurance') ||
    chapterLower.includes('speed') ||
    chapterLower.includes('flexibility') ||
    chapterLower.includes('circuit') ||
    chapterLower === 'pe10'
  ) {
    return `QUESTION: Q1. [3 Marks, CBSE 2024 (75)] Differentiate between Isometric, Isotonic, and Isokinetic strength development methods.
SOLUTION:
| Feature | Isometric Exercises | Isotonic Exercises | Isokinetic Exercises |
|---|---|---|---|
| **Muscle Length** | Remains constant. | Changes (shortens concentrically, lengthens eccentrically). | Muscle changes length throughout movement. |
| **Visible Movement** | **No movement** (\`Work = 0\`). | **Visible movement** occurs. | Continuous movement. |
| **Speed / Velocity** | Zero velocity. | Variable speed. | **Pre-set constant velocity** through full range. |
| **Equipment** | Fixed wall, static beam. | Free weights, barbells, dumbbells. | Specialized dynamometers (Cybex, Biodex). |
**CBSE Marking Rubric:**
- 1 Mark each for clear distinction across Isometric, Isotonic, and Isokinetic methods.

QUESTION: Q2. [3 Marks, CBSE 2023 (Delhi)]
What is Fartlek Training? Explain its characteristics and advantages for developing aerobic endurance.
SOLUTION:
**Fartlek Training Method (Swedish for "Speed Play"):**
1. **Origin & Concept:**
   - Developed by Swedish coach **Gösta Holmér** in 1937. It combines continuous aerobic running with spontaneous bursts of speed across unstructured natural terrain.
2. **Key Characteristics:**
   - Conducted in open natural environments (forest trails, undulating hills, sand tracks, cross-country fields).
   - **Self-Regulated Pace:** The athlete determines speed variations and intensity based on personal feelings and landscape topography rather than a rigid whistle or stopwatch.
   - Heart rate fluctuates continuously between **140 and 180 bpm**.
3. **Advantages:**
   - Simultaneously develops both **aerobic and anaerobic capacity**.
   - Highly versatile; requires no expensive athletic track or specialized equipment.
   - Keeps athletes mentally refreshed, eliminating the monotony of repetitive track laps.
**CBSE Marking Rubric:**
- 1 Mark for meaning, founder (Gösta Holmér), and natural terrain setting.
- 1 Mark for pacing characteristics and heart rate variation.
- 1 Mark for benefits (aerobic + anaerobic endurance, mental variety).`;
  }

  return null;
}
