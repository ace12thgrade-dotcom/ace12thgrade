// services/subjects/pe/part1.ts
// Chapters 1-5: Management of Sporting Events, Children and Women in Sports, Yoga for Lifestyle Diseases, CWSN, Sports and Nutrition
// Master Notebook Notes - Strictly aligned with CBSE Class 12 Physical Education (048) NCERT Syllabus (2026-27).

export function getPEPart1Notes(chapterLower: string, chapterId?: string): string | null {
  const id = (chapterId || '').toLowerCase().trim();

  // CHAPTER 1: Management of Sporting Events
  if (
    id === 'pe1' ||
    (!id && (
      chapterLower === 'management of events' ||
      chapterLower.includes('management of events') ||
      chapterLower.includes('sporting events') ||
      chapterLower.includes('fixture') ||
      chapterLower === 'pe1'
    ))
  ) {
    return `TOPIC: Chapter 1: Management of Sporting Events
Master Notebook Notes - Strictly aligned with CBSE Class 12 Physical Education (048) NCERT Syllabus (2026-27).

**1. Functions of Sports Event Management:**
- **Planning:** Defining objectives, determining policies, scheduling programmes, and pre-determining lines of action.
- **Organizing:** Assigning duties, grouping activities, establishing authority, and allocating resources among committees.
- **Staffing:** Recruiting, selecting, and placing qualified officials, judges, referees, and volunteers.
- **Directing:** Guiding, supervising, motivating, and leading personnel to achieve tournament goals.
- **Controlling:** Establishing standards of performance, measuring actual performance, and taking corrective action.

**2. Various Committees & Their Responsibilities:**
- **Pre-Tournament Committees:**
  * *Organizing Committee:* Overall planning and coordination.
  * *Finance / Budget Committee:* Allocates funds and prepares accounts.
  * *Publicity Committee:* Advertises dates, venues, and events through media.
  * *Boarding & Lodging Committee:* Arranges accommodation and meals for teams and officials.
- **During-Tournament Committees:**
  * *Reception Committee:* Welcomes chief guests, teams, and dignitaries.
  * *Ground & Equipment Committee:* Prepares courts, pitches, athletic tracks, and standard sports apparatus.
  * *Technical Committee / Officials:* Appoints referees, umpires, timekeepers, and scorers.
  * *First Aid Committee:* Treats immediate athletic injuries with medical supplies.
- **Post-Tournament Committees:**
  * *Prize Distribution Committee:* Arranges trophies, medals, and certificates.
  * *Record & Accounts Committee:* Prepares final expenditure reports and event press releases.

**3. Tournament Types & Knock-Out Fixture Mathematics:**
- **Knock-Out (Single Elimination) Tournament:**
  * A tournament in which a team once defeated gets eliminated immediately.
  * Total number of matches: \`M = N - 1\` (where N = total teams).
  * Dividing teams into Upper and Lower Halves (when N is odd):
    - Upper Half: \`(N + 1) / 2\`
    - Lower Half: \`(N - 1) / 2\`
  * Total Number of Byes (NB): \`NB = 2ⁿ - N\` (where 2ⁿ is the next higher power of 2 >= N).
  * Byes in Upper Half: \`(NB - 1) / 2\`
  * Byes in Lower Half: \`(NB + 1) / 2\`
  * **Rule of Allotting Byes (Strict Sequential Order):**
    - 1st Bye => Last team of Lower Half.
    - 2nd Bye => First team of Upper Half.
    - 3rd Bye => First team of Lower Half.
    - 4th Bye => Last team of Upper Half.
    - Subsequent byes follow this exact sequence in cycles.
- **League / Round Robin Tournament:**
  * Every team plays with every other team irrespective of victory or defeat.
  * Single League matches: \`N(N - 1) / 2\`
  * Double League matches: \`N(N - 1)\`
  * Cyclic Method / Staircase Method for drawing league fixtures.
- **Intramural vs Extramural:**
  * *Intramural:* Competitions held strictly within the walls/campus of the same school (fosters maximum mass participation).
  * *Extramural:* Competitions conducted between two or more different schools/institutions (develops high sports standards and inter-school fellowship).

**COMMON MISTAKE:**
- Calculating byes using 2ⁿ without choosing the immediate higher power of 2. For N=13, next power of 2 is 16, so NB = 16 - 13 = 3 byes.`;
  }

  // CHAPTER 2: Children and Women in Sports
  if (
    id === 'pe2' ||
    (!id && (
      chapterLower === 'children & women in sports' ||
      chapterLower.includes('children & women') ||
      chapterLower.includes('children and women') ||
      chapterLower.includes('posture') ||
      chapterLower.includes('deformit') ||
      chapterLower === 'pe2'
    ))
  ) {
    return `TOPIC: Chapter 2: Children and Women in Sports
Master Notebook Notes - Strictly aligned with CBSE Class 12 Physical Education (048) NCERT Syllabus (2026-27).

**1. WHO Physical Activity Guidelines for Children (5–17 years):**
- At least **60 minutes of moderate-to-vigorous physical activity (MVPA)** daily, mostly aerobic.
- Vigorous-intensity activities and muscle/bone-strengthening activities should be incorporated at least **3 days per week**.

**2. Common Postural Deformities & Corrective Exercises:**
- **Kyphosis (Round Back / Hunchback):**
  * Excessive outward curvature of the thoracic spine.
  * Causes: Malnutrition, carrying heavy schoolbags, weak back muscles.
  * Corrective Measures: Bhujangasana, Dhanurasana, Chakrasana, swimming, backward bending.
- **Lordosis (Hollow Back / Swayback):**
  * Inward curvature of the lumbar spine.
  * Causes: Obesity, weak abdominal muscles, sedentary lifestyle.
  * Corrective Measures: Paschimottanasana, Halasana, toe touching without bending knees, sit-ups.
- **Scoliosis:**
  * Sideways / lateral curvature of the spine (forming 'C' or 'S' shape).
  * Corrective Measures: Trikonasana, Ardha Chakrasana, hanging from horizontal bars, swimming with breaststroke.
- **Knock Knees (Genu Valgum):**
  * Both knees touch or knock against each other while standing normally with feet apart.
  * Corrective Measures: Padmasana, Gomukhasana, placing a pillow between knees while sleeping, horse riding.
- **Bow Legs (Genu Varum):**
  * Knees curve outward creating a wide gap between them when standing with feet together.
  * Corrective Measures: Walking on inner edges of feet, Garudasana, Ardha Matsyendrasana.
- **Flat Foot (Pes Planus):**
  * Absence or collapse of the natural longitudinal medial arch of the foot.
  * Corrective Measures: Walking on toes and heels, Vajrasana, jumping on ropes, picking up marbles with toes.
- **Round Shoulders:**
  * Shoulders stoop and bend forward.
  * Corrective Measures: Chakrasana, Dhanurasana, holding hands backward and stretching chest.

**3. Special Considerations for Female Athletes:**
- **Menarche:** First occurrence of menstruation in young females (typically between 11-15 years).
- **Menstrual Dysfunction:** Irregularities or absence of normal menstrual cycles (Oligomenorrhea, Amenorrhea).
- **Female Athlete Triad:** A serious syndrome interrelated by three spectrum components:
  1. **Osteoporosis:** Low bone mineral density leading to fragile, brittle bones prone to stress fractures (aggravated by low estrogen).
  2. **Amenorrhea:** Absence of menstrual periods for 3 or more consecutive months (caused by severe hormonal imbalance).
  3. **Low Energy Availability / Eating Disorders:** Disordered eating (Anorexia Nervosa, Bulimia Nervosa) where caloric intake is insufficient to support athletic energy expenditure.

**COMMON MISTAKE:**
- Confusing Kyphosis (thoracic outward hump) with Lordosis (lumbar inward curvature).`;
  }

  // CHAPTER 3: Yoga as Preventive Measure for Lifestyle Diseases
  if (
    id === 'pe3' ||
    (!id && (
      chapterLower === 'yoga as preventive measure' ||
      chapterLower.includes('yoga as preventive') ||
      chapterLower.includes('preventive measure') ||
      chapterLower.includes('lifestyle diseases') ||
      chapterLower === 'pe3'
    ))
  ) {
    return `TOPIC: Chapter 3: Yoga as Preventive Measure for Lifestyle Diseases
Master Notebook Notes - Strictly aligned with CBSE Class 12 Physical Education (048) NCERT Syllabus (2026-27).

**1. Obesity Prevention & Management:**
- Obesity: Excessive accumulation of body fat where BMI is >= 30 kg/m².
- **Prescribed Asanas:**
  * **Tadasana, Katichakrasana, Pavanmuktasana, Matsyasana, Halasana, Paschimottanasana, Dhanurasana, Ushtrasana, Mandukasana**.
  * **Halasana (Plow Pose):**
    - *Procedure:* Lie supine, inhale and lift legs to 90 degrees, gently press palms down and swing legs backward over head until toes touch floor behind.
    - *Benefits:* Stimulates thyroid and abdominal organs, reduces waistline fat, increases spinal flexibility.
    - *Contraindications:* Severe cervical spondylitis, slipped disc, hernia, high blood pressure.

**2. Diabetes Mellitus Prevention & Management:**
- Metabolic disorder marked by high blood glucose due to insufficient insulin secretion or insulin resistance.
- **Prescribed Asanas:**
  * **Katichakrasana, Pavanmuktasana, Bhujangasana, Shalabhasana, Dhanurasana, Supta Vajrasana, Paschimottanasana, Ardha Matsyendrasana, Mandukasana, Gomukhasana**.
  * **Ardha Matsyendrasana (Half Spinal Twist):**
    - *Procedure:* Sit with legs stretched. Bend left knee, place left heel beside right hip. Place right foot flat on floor outside left knee. Twist torso to the right, hold right foot with left hand.
    - *Physiological Action:* Twisting squeezes the pancreas, rejuvenating the beta cells of islets of Langerhans to secrete **insulin**.
    - *Contraindications:* Pregnancy, acute peptic ulcers, hernia, recent spinal surgery.
  * **Mandukasana (Frog Pose):**
    - *Procedure:* Sit in Vajrasana. Make fists with thumbs inside, press fists against navel area, exhale and bend forward touching chest to thighs.
    - *Benefits:* Direct compression of pancreas, stimulating endocrine enzymes.

**3. Asthma Prevention & Management:**
- Chronic inflammatory disease of the airways causing bronchial spasms, wheezing, breathlessness, and coughing.
- **Prescribed Asanas:**
  * **Tadasana, Urdhwahastottanasana, Uttan Mandukasana, Bhujangasana, Dhanurasana, Ushtrasana, Vakrasana, Kapalabhati, Gomukhasana, Matsyasana, Anulom-Vilom**.
  * **Matsyasana (Fish Pose):**
    - *Procedure:* Lie supine in Padmasana or straight legs. Arch back, lifting chest and resting crown of head lightly on floor. Hold big toes.
    - *Benefits:* Expands thoracic cage, maximizes tidal volume and vital capacity of lungs, relieves bronchial spasms.
    - *Contraindications:* Cervical issues, vertigo, migraine, cardiac ailments.

**4. Hypertension (High Blood Pressure) Management:**
- Persistent elevation of resting systolic blood pressure >= 140 mmHg or diastolic blood pressure >= 90 mmHg.
- **Prescribed Asanas:**
  * **Tadasana, Katichakrasana, Uttanpadasana, Ardha Halasana, Sarvangasana, Gomukhasana, Vakrasana, Bhujangasana, Makarasana, Shavasana, Nadi Shodhana / Sheetali Pranayama**.
  * **Shavasana (Corpse Pose):**
    - *Procedure:* Lie flat on back with legs apart, arms relaxed alongside body with palms facing upward. Close eyes and practice conscious rhythmic diaphragmatic breathing, relaxing each muscle group.
    - *Mechanism:* Downregulates sympathetic nervous overdrive, lowers adrenaline and cortisol, dilates peripheral blood vessels, reducing blood pressure.

**COMMON MISTAKE:**
- Failing to mention contraindications in 5-mark asana questions. Board rubrics deduct 1 full mark if contraindications are omitted.`;
  }

  // CHAPTER 4: Physical Ed & Sports for CWSN (Children with Special Needs - Divyang)
  if (
    id === 'pe4' ||
    (!id && (
      chapterLower === 'physical ed & sports for cwsn' ||
      chapterLower.includes('sports for cwsn') ||
      chapterLower.includes('cwsn') ||
      chapterLower.includes('special needs') ||
      chapterLower.includes('divyang') ||
      chapterLower === 'pe4'
    ))
  ) {
    return `TOPIC: Chapter 4: Physical Education & Sports for CWSN (Divyang)
Master Notebook Notes - Strictly aligned with CBSE Class 12 Physical Education (048) NCERT Syllabus (2026-27).

**1. Major Organizations Promoting Adaptive Sports:**
- **Special Olympics Bharat:**
  * Movement for individuals with **Intellectual Disabilities** (IQ < 70).
  * Founded internationally by Eunice Kennedy Shriver in 1968; Special Olympics Bharat accredited by Special Olympics International in 2001.
  * Oath: *"Let me win. But if I cannot win, let me be brave in the attempt."*
  * Uses the **Divisioning** system (grouping athletes of similar ability levels based on age, gender, and previous scores).
- **Paralympics (International Paralympic Committee - IPC):**
  * For athletes with **Physical Impairments** (amputees, spinal cord injury, cerebral palsy, visual impairment).
  * Originated from the Stoke Mandeville Games organized by Dr. Ludwig Guttmann in 1948 for WWII veterans.
  * Motto: *"Spirit in Motion"*.
  * Symbol: Three agitos (red, blue, green) encircling a central point.
- **Deaflympics (International Committee of Sports for the Deaf - ICSD):**
  * Elite competitions for athletes who are **Deaf / hard of hearing** (hearing loss of at least 55 dB in the better ear).
  * First held in Paris in 1924 (Silent Games).
  * Visual cues (flags, lights, visual flashes) replace starter pistols, acoustic whistles, and sirens.

**2. Concept of Classification and Divisioning:**
- **Classification (Paralympics):** Assigns athletes into distinct sport classes according to how much their impairment impacts athletic performance, ensuring fair competition.
- **Divisioning (Special Olympics):** Ensures athletes compete against others with similar athletic capability (variance within a division does not exceed 10-15%).

**3. Inclusion in Sports:**
- **Inclusion:** Educating and engaging children with special needs in the same physical education environment and sports activities alongside typically developing peers.
- **Strategies to Make Physical Activities Accessible:**
  * **Modified Equipment:** Brighter or sound-emitting balls (bell balls in goalball), larger targets, lighter racquets.
  * **Modified Environment & Rules:** Ramps, wider doorways, tactile floor markers, reducing court dimensions, granting extra bounces in tennis.
  * **Instructional Adaptations:** Visual cues, sign language, peer buddies, task analysis (breaking skills into smaller digestible steps).`;
  }

  // CHAPTER 5: Sports and Nutrition
  if (
    id === 'pe5' ||
    (!id && (
      chapterLower === 'sports & nutrition' ||
      chapterLower.includes('sports & nutrition') ||
      chapterLower.includes('sports and nutrition') ||
      chapterLower.includes('nutrition') ||
      chapterLower === 'pe5'
    ))
  ) {
    return `TOPIC: Chapter 5: Sports and Nutrition
Master Notebook Notes - Strictly aligned with CBSE Class 12 Physical Education (048) NCERT Syllabus (2026-27).

**1. Balanced Diet & Nutritive Components:**
- **Balanced Diet:** A diet containing all essential nutrients (carbohydrates, fats, proteins, vitamins, minerals, water, and roughage) in correct proportions necessary for growth, maintenance, and repair of the body.
- **Macro Nutrients (Required in large daily quantities):**
  1. **Carbohydrates:** Primary energy fuel. 1g = **4 kcal**. Simple (glucose, fructose) vs Complex (starch, glycogen). 60–65% of daily caloric intake.
  2. **Proteins:** Body-building and tissue repair blocks composed of amino acids. 1g = **4 kcal**. 10–15% of daily diet.
  3. **Fats:** Concentrated energy reserve, thermoregulation, and cushioning of vital organs. 1g = **9 kcal**. Saturated (animal fats) vs Unsaturated (plant oils, omega-3). 20–25% of daily diet.
  4. **Water:** 65-70% of human body weight. Transports nutrients, removes wastes, lubricates joints, and regulates body temperature.
- **Micro Nutrients (Required in minute quantities for physiological regulation):**
  * **Minerals:**
    - *Macro-minerals:* Calcium (bones/teeth, muscle contraction), Phosphorus, Potassium, Sodium (fluid balance, nerve conduction), Magnesium.
    - *Micro/Trace minerals:* Iron (hemoglobin synthesis; deficiency causes anemia), Iodine (thyroxine; deficiency causes goitre), Zinc, Copper.
  * **Vitamins:**
    - *Fat-Soluble:* Vitamin A (vision), Vitamin D (calcium absorption, rickets), Vitamin E (antioxidant), Vitamin K (blood clotting).
    - *Water-Soluble:* Vitamin B-Complex (metabolism, beri-beri, pellagra), Vitamin C (ascorbic acid, immunity, scurvy).

**2. Non-Nutritive Components of Diet:**
- Fiber / Roughage (prevents constipation), Water, Color compounds, Flavor compounds, Plant compounds (phytochemicals).

**3. Eating for Weight Control & Pitfalls of Dieting:**
- **BMI (Quetelet Index):** \`BMI = Weight (kg) / [Height (m)]²\`
  * Underweight: < 18.5 | Normal: 18.5–24.9 | Overweight: 25.0–29.9 | Obese: >= 30.0
- **Pitfalls of Dieting:**
  * Extreme calorie restriction leads to loss of lean muscle mass rather than fat.
  * Skipping meals slows down basal metabolic rate (BMR).
  * Nutritional deficiencies (lack of essential micronutrients).
  * Rebound weight gain (Yo-Yo effect).
- **Food Intolerance vs Food Allergy:**
  * *Food Intolerance:* Inability to digest certain foods due to enzyme absence (e.g. Lactose intolerance); gradual onset, limited to digestive system.
  * *Food Allergy:* Immune system reaction treating food protein as pathogen (e.g. Peanut allergy); immediate, potentially life-threatening anaphylaxis.
- **Food Myths:**
  * Myth: Eggs increase blood cholesterol dangerously (Fact: Dietary cholesterol has minimal impact on serum cholesterol for healthy individuals).
  * Myth: Drinking water during meals causes obesity (Fact: Water contains zero calories and aids digestion).
  * Myth: Skipping breakfast makes you slim (Fact: Leads to overeating later in the day).`;
  }

  return null;
}
