// services/subjects/pe/part2.ts
// Chapters 6-10: Test & Measurement, Physiology & Injuries, Biomechanics, Psychology, Training in Sports
// Master Revision Notes & Formula Blueprint
// Strictly aligned with CBSE Class 12 Physical Education (048) NCERT Syllabus (2026-27).

export function getPEPart2Notes(chapterLower: string): string | null {
  // FULL REVISION / MASTER PHYSICAL EDUCATION REVISION BOOK
  if (
    chapterLower.includes('revision') ||
    chapterLower.includes('full') ||
    chapterLower.includes('master') ||
    chapterLower.includes('summary') ||
    chapterLower === 'pe_all'
  ) {
    return `TOPIC: CBSE Class 12 Physical Education Complete Master Revision Capsule (2026-27 Pattern)
Master Notebook Revision Book - Comprehensive high-yield synthesis covering tournament fixtures, postural corrections, yogic asanas, fitness testing formulas, physiological adaptations, biomechanical principles, and sports training methods.

**1. Fixture & Mathematical Calculations Master Cheat Sheet:**
- **Knock-Out Fixture:**
  * Total Matches: \`N - 1\`
  * Upper Half Teams: \`(N + 1) / 2\` (N is odd)
  * Lower Half Teams: \`(N - 1) / 2\` (N is odd)
  * Byes: \`NB = 2ⁿ - N\` (2ⁿ is next higher power of 2)
  * Upper Half Byes: \`(NB - 1) / 2\` | Lower Half Byes: \`(NB + 1) / 2\`
  * Bye order: 1st => Last of Lower, 2nd => First of Upper, 3rd => First of Lower, 4th => Last of Upper.
- **League Fixture:**
  * Matches: \`N(N - 1) / 2\` (single league)
  * Rounds: \`N - 1\` (N is even), \`N\` (N is odd).
- **Harvard Step Test Fitness Index:**
  * Long Form: \`Fitness Index = (100 × Test duration in seconds) / (2 × Sum of 3 recovery heart pulse counts)\`
  * Short Form: \`Fitness Index = (100 × Test duration in seconds) / (5.5 × Pulse count between 1 and 1.5 min)\`
- **BMI (Quetelet Index):** \`BMI = Weight in kg / (Height in meters)²\`

**2. Senior Citizen Fitness Test (Rikli & Jones - 6 Test Items):**
1. **Chair Stand Test:** Lower body strength (number of stands in 30 seconds).
2. **Arm Curl Test:** Upper body strength (number of curls in 30 seconds; 5 lbs for women, 8 lbs for men).
3. **Chair Sit and Reach Test:** Lower body (hamstring) flexibility (distance in inches from fingertips to toes).
4. **Back Scratch Test:** Upper body (shoulder) flexibility (overlap or gap between middle fingers).
5. **Eight Foot Up and Go Test:** Agility, speed, and dynamic balance (seconds to stand, walk 8 feet, turn, and sit).
6. **Six-Minute Walk Test:** Aerobic endurance (total distance walked in yards/meters in 6 minutes).

**3. Sports Injuries Classification & PRICER Protocol:**
- **Soft Tissue:**
  * Contusion (bruise / bleeding beneath intact skin)
  * Strain (tear or overstretch of muscle or tendon)
  * Sprain (tear or stretch of ligament at joint, e.g. ankle)
  * Abrasion, Laceration, Incision.
- **PRICER Protocol:** **P**rotect, **R**est, **I**ce (15-20 min, causes vasoconstriction), **C**ompress (crepe bandage), **E**levate (above heart), **R**ehabilitate.

**4. Biomechanics & Training Principles:**
- Newton's 1st Law (Inertia - sprinting start off blocks), 2nd Law (Acceleration - force = mass × acceleration, follow-through in cricket/golf), 3rd Law (Action-Reaction - swimming push-off, high jump takeoff).
- Strength Methods: Isometric (static tension, no movement), Isotonic (concentric/eccentric contraction with movement), Isokinetic (constant speed through Cybex dynamometer).
- Endurance Methods: Continuous method, Interval method (work-rest ratio), Fartlek method (Swedish speed play with varied natural terrain).`;
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
    return `TOPIC: Chapter 6: Test and Measurement in Sports
Master Notebook Notes - Strictly aligned with CBSE Class 12 Physical Education (048) NCERT Syllabus (2026-27).

**1. SAI Khelo India Fitness Assessment in Schools:**
- **Age Category 5 to 8 Years (Classes 1 to 3):**
  1. *Body Mass Index (BMI):* Height and weight.
  2. *Flamingo Balance Test:* Static balance on one foot on a wooden beam (number of falls in 60 seconds).
  3. *Plate Tapping Test:* Speed and limb coordination of upper body (time taken to complete 25 cycles between two discs).
- **Age Category 9 to 18 Years (Classes 4 to 12):**
  1. *BMI:* Body composition.
  2. *50m Standing Start / Dash:* Acceleration speed.
  3. *600m Run / Walk:* Cardiorespiratory and aerobic endurance.
  4. *Sit and Reach Test:* Hamstring and lower back flexibility.
  5. *Partial Curl-Up:* Abdominal muscular strength and endurance (max repetitions up to 30 seconds).
  6. *Push-Ups (Boys) / Modified Push-Ups (Girls):* Upper body muscular strength.

**2. Measurement of Cardio-Vascular Fitness:**
- **Harvard Step Test (Brouha et al., 1943):**
  * Equipment: Gym bench / box (20 inches high for men, 16 inches for women), stopwatch, metronome set at 120 bpm (30 steps/min).
  * Procedure: Stepping up and down for **5 minutes (300 seconds)** or until exhaustion.
  * Recovery Pulse Counting:
    - Count 1: 1 min to 1.5 min after test
    - Count 2: 2 min to 2.5 min after test
    - Count 3: 3 min to 3.5 min after test
  * **Fitness Index (Long Form):**
    \`Fitness Index = (100 × Duration in seconds) / [2 × (Pulse 1 + Pulse 2 + Pulse 3)]\`
  * Rating Scale: > 90 = Excellent; 80 - 89 = Good; 65 - 79 = Average; 55 - 64 = Below Average; < 55 = Poor.

**3. Senior Citizen Fitness Test (Rikli and Jones):**
- Developed by Dr. Roberta Rikli and Dr. C. Jessie Jones to evaluate functional fitness in older adults (60+ years):
  1. **Chair Stand Test:** Evaluates lower body muscular strength (number of full stands from a 17-inch chair in 30 seconds).
  2. **Arm Curl Test:** Evaluates upper body muscular strength (bicep curls in 30 seconds holding 5 lb dumbbell for females, 8 lb for males).
  3. **Chair Sit-and-Reach Test:** Evaluates lower body flexibility (hamstring tightness). Sitting on front edge of chair with one leg straight, reaching towards toes. Score is distance in inches (+ if fingers reach past toes, - if short).
  4. **Back Scratch Test:** Evaluates shoulder flexibility. Reaching one hand over shoulder and other up middle of back; distance between fingertips measured.
  5. **Eight-Foot Up-and-Go Test:** Evaluates speed, agility, and dynamic balance (seconds to rise from chair, walk 8 feet around a cone, and sit back down).
  6. **Six-Minute Walk Test:** Evaluates aerobic cardiovascular endurance (distance in yards/meters walked along a 50-yard rectangular track in 6 minutes).`;
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
    return `TOPIC: Chapter 7: Physiology and Injuries in Sports
Master Notebook Notes - Strictly aligned with CBSE Class 12 Physical Education (048) NCERT Syllabus (2026-27).

**1. Physiological Factors Determining Physical Fitness Components:**
- **Strength:** Muscle cross-sectional area, percentage of fast-twitch (white) muscle fibers, nervous coordination, body weight.
- **Speed:** Fast-twitch fiber ratio, nervous system mobility (reaction time), biochemical reserves (ATP-CP), muscle flexibility.
- **Endurance:** Aerobic capacity (\`VO₂ max\`), lung vital capacity, cardiac output, high percentage of slow-twitch (red) fibers, muscle glycogen stores.
- **Flexibility:** Anatomical structure of joints, elasticity of ligaments and tendons, muscle temperature, age and gender.

**2. Effects of Exercise on Bodily Systems:**
- **Cardiorespiratory System:**
  * Cardiac Hypertrophy (Athlete's heart - enlargement of left ventricular chamber and thickened myocardium).
  * Increased Stroke Volume (from ~70 ml at rest up to 120-160 ml during heavy exercise).
  * Decreased Resting Heart Rate (**Athletic Bradycardia** - resting pulse drops to 45-55 bpm).
  * Increased \`VO₂ max\` and vital capacity; faster recovery heart rate.
- **Muscular System:**
  * Hypertrophy of muscle fibers (increase in diameter and contractile proteins actin & myosin).
  * Increased capillary density around muscle fibers.
  * Increased myoglobin content and mitochondrial density for aerobic metabolism.
  * Enhanced lactic acid tolerance.

**3. Sports Injuries Classification & Modern Management:**
- **Soft Tissue Injuries:**
  * *Abrasion:* Superficial scraping of epidermis; friction burn from turf/court.
  * *Contusion (Bruise):* Subcutaneous bleeding caused by direct blunt trauma without skin breakage.
  * *Laceration:* Irregular, jagged tearing of skin and tissue.
  * *Incision:* Clean, sharp cut caused by sharp edges.
  * *Sprain:* Overstretching or tearing of **LIGAMENTS** (tough fibrous tissue connecting bone to bone at a joint; e.g. lateral ankle sprain).
  * *Strain:* Overstretching or tearing of **MUSCLE FIBERS or TENDONS** (tissue connecting muscle to bone; e.g. hamstring strain).
- **Bone and Joint Injuries:**
  * *Dislocations:* Separation of bone ends from their normal joint sockets (Shoulder dislocation, Patellar dislocation).
  * *Fractures:* Simple (closed, skin intact), Compound (open, bone pierces skin), Greenstick (bending and partial crack, common in children), Comminuted (bone broken into multiple small fragments).
- **Management of Soft Tissue Injuries (PRICER Protocol):**
  * **P - Protect:** Immobilize and shield the injured region from further trauma.
  * **R - Rest:** Terminate athletic activity immediately.
  * **I - Ice:** Apply crushed ice wrapped in towel for 15-20 min every 2-3 hours for the first 48 hours to induce **vasoconstriction**, controlling internal bleeding and edema.
  * **C - Compression:** Apply an elastic crepe bandage firmly to curb swelling.
  * **E - Elevation:** Elevate injured extremity above heart level to facilitate gravity-assisted venous and lymphatic drainage.
  * **R - Rehabilitation:** Supervised progressive rehabilitation to restore neuromuscular control and range of motion.`;
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
    return `TOPIC: Chapter 8: Biomechanics and Sports
Master Notebook Notes - Strictly aligned with CBSE Class 12 Physical Education (048) NCERT Syllabus (2026-27).

**1. Newton's Laws of Motion & Sports Applications:**
- **First Law (Law of Inertia):** An object remains at rest or in uniform motion along a straight line unless acted upon by an external net force.
  * *Sports Example:* A sprinter stays poised in the starting blocks until the external drive force of leg muscles overcomes inertia; a soccer ball remains motionless until kicked.
- **Second Law (Law of Acceleration / \`F = ma\`):** The acceleration of an object is directly proportional to the net force applied and inversely proportional to its mass.
  * *Sports Example:* A shot put thrower exerts maximum explosive muscular force to achieve maximum release acceleration; a baseball catcher pulls hands backward to prolong impact time, reducing impact force.
- **Third Law (Law of Action and Reaction):** To every action, there is an equal and opposite reaction.
  * *Sports Example:* Swimmer pushes water backward, water pushes swimmer forward; high jumper pushes forcefully down against the ground to be propelled upward into the air.

**2. Levers in Human Movement & Sports:**
- A rigid bar turning about a fixed point called **Fulcrum (F)**, with an applied **Effort (E)** to overcome a **Load/Resistance (L)**.
- **Class 1 Lever (F in the middle - EFL):**
  * Human Body: Nodding motion of head (Atlanto-occipital joint is Fulcrum, neck extensor muscles provide Effort, weight of head is Load).
  * Sports: Triceps extension overhead, rowing oars.
- **Class 2 Lever (L in the middle - FLE):**
  * Provides high mechanical advantage (Effort arm > Load arm).
  * Human Body: Standing on tiptoes (ball of foot is Fulcrum, body weight acting through ankle is Load, calf gastrocnemius muscle provides Effort).
  * Sports: Take-off in long jump, sprint push-off.
- **Class 3 Lever (E in the middle - FEL):**
  * Most common lever in the human body; designed for speed and range of motion (Mechanical advantage < 1).
  * Human Body: Bicep curl at elbow (Elbow joint is Fulcrum, Bicep insertion is Effort, weight held in palm is Load).
  * Sports: Batting in cricket, swinging a tennis racquet, kicking a football.

**3. Equilibrium & Centre of Gravity (CG):**
- **Static Equilibrium:** Body at complete rest (e.g. gymnast holding an iron cross or handstand).
- **Dynamic Equilibrium:** Body in balanced state while moving at constant velocity (e.g. skier descending a slope, gymnast executing cartwheels).
- **Principles of Increasing Stability in Sports:**
  1. Lower the Centre of Gravity (bend knees in wrestling/defensive basketball stance).
  2. Widen the Base of Support (spread feet shoulder-width apart).
  3. Ensure line of gravity falls within the base of support.

**4. Friction & Projectile Motion:**
- **Friction:** Dynamic (sliding/rolling) vs Static friction. Friction is essential in sports (spikes on sprinting shoes, chalk powder on gymnast's palms, studs on football boots).
- **Projectile Motion:** Parabolic trajectory of an object launched into air under gravity. Factors affecting flight distance: Release angle (optimal = **45 degrees** in absence of air resistance), Initial velocity, Release height, Air resistance, Spin (Magnus effect).`;
  }

  // CHAPTER 9: Psychology and Sports
  if (
    chapterLower.includes('psychology') ||
    chapterLower.includes('personality') ||
    chapterLower.includes('motivation') ||
    chapterLower.includes('aggression') ||
    chapterLower === 'pe9'
  ) {
    return `TOPIC: Chapter 9: Psychology and Sports
Master Notebook Notes - Strictly aligned with CBSE Class 12 Physical Education (048) NCERT Syllabus (2026-27).

**1. Personality Classifications in Sports:**
- **Carl Jung's Classification:**
  * *Introverts:* Reserved, quiet, introspective, prefer solitary sports (archery, shooting, long-distance running).
  * *Extroverts:* Outgoing, sociable, enthusiastic, thrive in team sports (football, basketball, hockey).
  * *Ambiverts:* Possess a balanced blend of both traits depending on circumstances.
- **Sheldon's Somatotypes:**
  * *Endomorph:* Round, soft body, high body fat, relaxed, sociable (wrestling, shot put).
  * *Mesomorph:* Muscular, broad shoulders, athletic, competitive, assertive (sprinting, gymnastics, rugby).
  * *Ectomorph:* Lean, fragile, long limbs, intellectual, anxious (high jump, marathon).
- **Big Five Personality Traits (OCEAN Model):**
  1. **Openness:** Creative, curious, receptive to new tactical ideas.
  2. **Conscientiousness:** Disciplined, goal-oriented, punctual for training.
  3. **Extraversion:** Energetic, talkative, leads team morale.
  4. **Agreeableness:** Cooperative, empathetic, respectful of teammates and referees.
  5. **Neuroticism:** Emotional instability, anxiety-prone under high-pressure competitive scenarios.

**2. Motivation in Sports:**
- **Intrinsic Motivation:** Internal drive driven by personal satisfaction, mastery of skills, self-actualization, and joy of playing. (Perennial, long-lasting).
- **Extrinsic Motivation:** External drive derived from tangible rewards, medals, prize money, public acclaim, trophies, and praise.
- **Techniques to Enhance Motivation:** Goal setting (SMART goals), positive self-talk, rewards, verbal encouragement, spectator support, visual feedback.

**3. Aggression in Sports:**
- Any physical or verbal behavior intended to harm or injure another living being who is motivated to avoid such treatment.
- **Types of Aggression:**
  1. **Hostile Aggression:** Primary goal is to inflict bodily pain or injury upon opponent; driven by anger (e.g. punching an opponent after a foul).
  2. **Instrumental Aggression:** Primary goal is to achieve an athletic objective or victory (e.g. tackling aggressively in rugby to regain possession), with injury being an incidental byproduct rather than primary aim.
  3. **Assertive Behavior:** Playing with intense vigor, determination, and high energy within the legal rules of the sport without intent to cause injury.`;
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
    return `TOPIC: Chapter 10: Training in Sports
Master Notebook Notes - Strictly aligned with CBSE Class 12 Physical Education (048) NCERT Syllabus (2026-27).

**1. Sports Training Cycles:**
- **Micro-Cycle:** Shortest training duration, typically lasting **3 to 7 days** (weekly plan).
- **Meso-Cycle:** Medium-duration training phase, lasting **3 to 6 weeks** (targeted at developing a specific physical quality).
- **Macro-Cycle:** Longest training cycle, lasting from **several months to 1 year** (leads to peak performance for major championships).

**2. Strength Development Methods:**
- **Isometric Exercises (Hettinger & Müller, 1953):**
  * Muscle tension increases, but muscle length remains unchanged; **no visible movement** occurs (\`Work = Force × 0 = 0\`).
  * Examples: Pushing against a solid wall, holding a plank, static yoga postures.
- **Isotonic Exercises (De Lorme, 1945):**
  * Muscle changes length during contraction; **visible movement** occurs.
  * *Concentric:* Muscle shortens while generating tension (lifting a dumbbell).
  * *Eccentric:* Muscle lengthens while controlling tension (lowering a dumbbell).
- **Isokinetic Exercises (J.J. Perrine, 1968):**
  * Movement performed at a **constant, pre-set velocity** against variable accommodating resistance throughout the full range of motion.
  * Performed on specialized dynamometers (e.g. Cybex, Biodex machines); widely used in athletic rehabilitation.

**3. Endurance Development Methods:**
- **Continuous Training Method:** Exercise performed without rest intervals for a prolonged duration (>= 30-120 min) at heart rate 140-160 bpm.
- **Interval Training Method (Bikila & Reindell):** Based on the principle of *"effort and incomplete recovery"*. High-intensity bouts followed by controlled rest intervals until heart rate drops to 120-130 bpm.
- **Fartlek Training Method (Gösta Holmér, 1937):**
  * Swedish word meaning **"Speed Play"**.
  * Combines continuous running with spontaneous bursts of speed across varied natural terrain (forests, sand dunes, hills, muddy tracks).
  * Athlete dictates the pace according to feeling, using natural obstacles to elevate heart rate between 140-180 bpm.

**4. Flexibility & Speed Training:**
- **Flexibility Methods:**
  * *Ballistic Method:* Rhythmic bobbing and bouncing; high risk of injury.
  * *Static Stretching:* Holding stretch position for 15-30 seconds.
  * *PNF (Proprioceptive Neuromuscular Facilitation):* Isometric contraction followed by assisted passive stretch; highest gains.
- **Speed Methods:** Acceleration runs (reaching top speed from standstill) and Pace runs (running full distance at uniform speed).
- **Circuit Training (Morgan & Adamson, 1953):** Consecutive exercises arranged in stations (typically 6 to 10 stations) completed in a loop with minimal rest between stations. Develops muscular endurance and strength simultaneously.`;
  }

  return null;
}
