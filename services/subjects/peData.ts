// peData.ts - Complete CBSE Class 12 Physical Education Knowledge Base

export function getPEContent(chapter: string, type: 'notes' | 'pyqs'): string {
  const isRevision = chapter.toUpperCase().includes("REVISION") || chapter.toUpperCase().includes("FULL");
  const lower = chapter.toLowerCase();

  if (type === 'notes') {
    if (isRevision) {
      return `TOPIC: Chapter Formula Master Vault & When-To-Apply Guide
**1. Tournament Fixture Mathematical Formulas:**
- **Knockout Tournament Formulas:**
  - **Total Number of Matches:** N - 1 (where N = Total number of participating teams).
  - **Teams in Upper Half (N is odd):** (N + 1) / 2.
  - **Teams in Lower Half (N is odd):** (N - 1) / 2.
  - **Total Number of Byes (NB):** NB = 2ⁿ - N (where 2ⁿ is the next higher power of 2 greater than or equal to N).
  - **Byes in Upper Half:** (NB - 1) / 2.
  - **Byes in Lower Half:** (NB + 1) / 2.
  - **Sequential Order of Assigning Byes:**
    * 1st Bye => Last team of Lower Half.
    * 2nd Bye => 1st team of Upper Half.
    * 3rd Bye => 1st team of Lower Half.
    * 4th Bye => Last team of Upper Half. (Repeat sequence for remaining byes).
- **League / Round Robin Tournament Formulas:**
  - **Single League Matches:** N(N - 1) / 2.
  - **Double League Matches:** N(N - 1).
  - **Number of Rounds (Single League):**
    * If N is EVEN => Number of Rounds = N - 1.
    * If N is ODD => Number of Rounds = N.

**2. Physical Fitness & Health Indexes:**
- **Body Mass Index (BMI / Quetelet Index):**
  - **Formula:** BMI = Weight in kg / (Height in meters)²
  - **WHO Categories:**
    * Underweight: < 18.5
    * Normal weight: 18.5 – 24.9
    * Overweight: 25.0 – 29.9
    * Obesity Class I: 30.0 – 34.9
    * Obesity Class II: 35.0 – 39.9
    * Obesity Class III (Severe): ≥ 40.0

TOPIC: 15-Year CBSE Question Blueprint & Weightage
- **Section A (1-Mark MCQs):** Fixture calculations (Matches for 11 teams, Byes for 19 teams), Rikli & Jones test items, identifying yoga asanas from visual pictures, Newton's laws applied to sports.
- **Section B (2-Mark Short Questions):** Define Balance Diet, Macro vs Micro nutrients, Dynamic vs Static friction in sports, Female Athlete Triad (Osteoporosis, Amenorrhea, Eating disorders).
- **Section C (3-Mark Questions):** Draw a knockout fixture for N=11 or 13 teams, Explain PRICER protocol for soft-tissue injuries, Rikli & Jones senior citizen fitness tests (Arm Curl, Chair Sit and Reach).
- **Section D (5-Mark Comprehensive Questions):** Complete description of Yoga asanas for preventing and managing Obesity, Diabetes, Asthma, or Hypertension with procedure, benefits, and contraindications.

TOPIC: Yoga Asanas for Lifestyle Diseases (Procedures & Contraindications)
- **1. Obesity Management:**
  - **Asanas:** **Tadasana, Katichakrasana, Pavanmuktasana, Matsyasana, Halasana, Paschimottanasana**.
  - **Paschimottanasana (Seated Forward Bend):**
    * **Procedure:** Sit with legs extended straight, inhale and raise arms, exhale and bend forward from hips to hold toes, touching forehead to knees.
    * **Benefits:** Burns abdominal fat, stimulates abdominal organs, tones hamstring muscles.
    * **Contraindications:** People with severe spinal issues, slipped disc, or sciatica must avoid.
- **2. Diabetes Management:**
  - **Asanas:** **Bhujangasana, Paschimottanasana, Pavanamuktasana, Ardha Matsyendrasana, Dhanurasana**.
  - **Ardha Matsyendrasana (Half Lord of the Fishes Pose):**
    * **Procedure:** Sit cross-legged, place right foot outside left knee, twist torso to right and hold right foot with left arm.
    * **Mechanism:** Massages and stimulates the pancreas to secrete adequate **Insulin**, regulating blood glucose.
    * **Contraindications:** Avoid during pregnancy, menstruation, or recent abdominal surgery.
- **3. Asthma Management:**
  - **Asanas:** **Sukhasana, Chakrasana, Gomukhasana, Parvatasana, Bhujangasana, Matsyasana**.
  - **Matsyasana (Fish Pose):**
    * **Benefits:** Expands chest cage, increases lung vital capacity, alleviates bronchial spasms and respiratory congestion.
    * **Contraindications:** Sufferers of cervical spondylitis and high blood pressure should avoid.
- **4. Hypertension (High Blood Pressure) Management:**
  - **Asanas:** **Tadasana, Katichakrasana, Uttanpadasana, Ardha Halasana, Sarvangasana, Shavasana**.
  - **Shavasana (Corpse Pose):**
    * **Benefits:** Calms sympathetic nervous system, relieves mental tension and somatic stress, lowers heart rate and systolic/diastolic blood pressure.

TOPIC: Sports Injuries & Modern PRICER Management Protocol
- **Classification of Sports Injuries:**
  - **Soft Tissue Injuries:**
    * Skin: Abrasion, Laceration, Incision, Puncture.
    * Muscle/Tendon: **Strain** (Tear or stretch of muscle fibers).
    * Ligament: **Sprain** (Tear or stretch of ligament at joint, e.g. Ankle sprain).
  - **Bone & Joint Injuries:** Fractures (Simple, Compound, Greenstick, Comminuted) and Dislocations (Shoulder, Finger).
- **PRICER Protocol Steps:**
  - **P (Protect):** Shield the injured joint/muscle from further harm or weight-bearing.
  - **R (Rest):** Stop playing immediately to prevent aggravating the microtrauma.
  - **I (Ice):** Apply cold packs for 15-20 minutes every 2-3 hours to cause vasoconstriction, reducing internal bleeding and swelling.
  - **C (Compress):** Wrap with elastic crepe bandage to limit inflammatory edema.
  - **E (Elevate):** Raise injured limb above heart level to assist venous drainage.
  - **R (Rehabilitate):** Gradual supervised physiotherapeutic exercises to restore full range of motion.
INSIGHT: For fixture questions, always write the step-by-step formula and clearly draw the pairing lines with Upper Half and Lower Half divisions.`;
    }

    return `TOPIC: Chapter Formula Master Vault & When-To-Apply Guide: ${chapter}
**1. Fundamental Principles & Rules:**
- Comprehensive guidelines, physiological factors, and biomechanical laws for **${chapter}**.
- Specific testing protocols and standardized norms.

**2. 15-Year CBSE Question Blueprint:**
- 1-Mark MCQs, 2-Mark short definitions, 3-Mark fixtures / test items, 5-Mark detailed physiological & yogic management.
INSIGHT: Always mention specific contraindications when explaining yogic asanas to secure full 5 marks.`;
  } else {
    // PHYSICAL EDUCATION SOLVED PYQS
    return `QUESTION: Q1. [5 Marks, Delhi 2024] (a) Draw a neat and complete fixture of 11 teams on a Knockout basis showing all calculations for number of matches, teams in upper/lower half, and assignment of byes.
(b) Explain the procedure and benefits of Ardha Matsyendrasana for diabetes control.
SOLUTION:
**Step 1: Knockout Fixture Calculations for 11 Teams:**
- Total number of teams (N) = 11
- Total number of matches = N - 1 = 11 - 1 = **10 Matches**
- Teams in Upper Half = (N + 1) / 2 = (11 + 1) / 2 = **6 Teams** (Teams 1 to 6)
- Teams in Lower Half = (N - 1) / 2 = (11 - 1) / 2 = **5 Teams** (Teams 7 to 11)
- Next higher power of 2 = 16 (since 2⁴ = 16 > 11)
- Total Number of Byes (NB) = 16 - 11 = **5 Byes**
- Byes in Upper Half = (NB - 1) / 2 = (5 - 1) / 2 = **2 Byes**
- Byes in Lower Half = (NB + 1) / 2 = (5 + 1) / 2 = **3 Byes**

**Step 2: Assignment of 5 Byes:**
- 1st Bye => Team 11 (Last team of Lower Half)
- 2nd Bye => Team 1 (1st team of Upper Half)
- 3rd Bye => Team 7 (1st team of Lower Half)
- 4th Bye => Team 6 (Last team of Upper Half)
- 5th Bye => Team 10 (Second to last team of Lower Half)

**Step 3: Round-Wise Pairing:**
- **Round 1:**
  - Team 1 (Bye)
  - Team 2 vs Team 3 => Winner A
  - Team 4 vs Team 5 => Winner B
  - Team 6 (Bye)
  - Team 7 (Bye)
  - Team 8 vs Team 9 => Winner C
  - Team 10 (Bye)
  - Team 11 (Bye)
- **Round 2 (Quarter-Finals):** 4 matches (Team 1 vs Winner A, Winner B vs Team 6, Team 7 vs Winner C, Team 10 vs Team 11).
- **Round 3 (Semi-Finals):** 2 matches.
- **Round 4 (Final):** 1 match to determine tournament champion.

**Step 4: Ardha Matsyendrasana for Diabetes:**
- **Procedure:** Sit erect, bend left leg and place left foot flat on floor outside right hip. Place right foot outside left knee. Twist torso to right and hold right ankle with left hand.
- **Physiological Action:** Twisting movement compresses and gently stimulates the beta-cells of the islets of Langerhans in the **Pancreas**, enhancing insulin secretion to control blood sugar.

**CBSE Marking Rubric:**
- 1.5 Marks for mathematical calculations (Matches, Halves, Byes).
- 1.5 Marks for correct placement of byes and tournament fixture tree.
- 2 Marks for procedure, physiological mechanism, and benefits of Ardha Matsyendrasana.
INSIGHT: Number the teams 1 to 11 vertically in a single neat column before drawing pairing brackets.`;
  }
}
