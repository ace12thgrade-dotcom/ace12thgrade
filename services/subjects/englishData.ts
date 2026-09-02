// englishData.ts - Complete CBSE Class 12 English Core Knowledge Base

export function getEnglishContent(chapter: string, type: 'notes' | 'pyqs'): string {
  const isRevision = chapter.toUpperCase().includes("REVISION") || chapter.toUpperCase().includes("FULL");
  const lower = chapter.toLowerCase();

  if (type === 'notes') {
    if (isRevision) {
      return `TOPIC: Chapter Formula Master Vault & When-To-Apply Guide
**1. Section B: Writing Skills Standard Format & Marking Blueprints:**
- **Notice Writing (50 Words, 4 Marks):**
  - **Box:** Enclosed in a neat 4-sided rectangular box.
  - **Header:** Name of Issuing Institution/School/Organization (Centered, Bold).
  - **Label:** The word \`NOTICE\` (Centered, Capitalized).
  - **Date:** Formatted as \`29th March 2026\` (Left aligned).
  - **Subject/Heading:** Catchy, concise title (Centered).
  - **Body Content:** What, Where, When, Target Audience, and Whom to contact.
  - **Signatory:** Name & Designation (Left aligned at bottom).
  - **Marking Scheme:** Format: 1 Mark | Content: 2 Marks | Accuracy & Spelling: 1 Mark.
- **Formal Invitations & Replies (50 Words, 4 Marks):**
  - **Card Type (Formal):** 3rd person (\`Mrs. and Mr. X solicit the pleasure of your company...\`), No signature, RSVP with contact number on bottom left.
  - **Letter Type:** Standard formal letter format.
  - **Reply (Acceptance / Refusal):** Express gratitude, state event, confirm date/time or provide polite reason for inability to attend.
- **Job Application with Bio-Data / Curriculum Vitae (120-150 Words, 5 Marks):**
  - **Covering Letter:** Sender's Address => Date => Receiver's Address => Subject => Salutation => Body (Para 1: Reference to advertisement; Para 2: Suitability & experience; Para 3: Enclosure mention) => Complimentary close.
  - **Bio-Data / Resume:** Name, Father's Name, DOB, Address, Educational Qualifications (Tabular column with Exam, Board, Year, %), Work Experience, References (2 names with phone numbers).
  - **Marking Scheme:** Format: 1 Mark | Content: 2 Marks | Expression: 2 Marks.
- **Letter to the Editor (120-150 Words, 5 Marks):**
  - Standard Opening: \`"Through the columns of your esteemed daily, I would like to draw the attention of the concerned authorities and the general public towards the pressing issue of..."\`
  - Body: Cause of problem, practical consequences on public life, and feasible recommendations.

TOPIC: 15-Year CBSE Question Blueprint & Weightage
- **Section A: Reading Skills (22 Marks):** Discursive passage (12 Marks) and Case-based factual passage with chart/data (10 Marks) testing comprehension, inference, and vocabulary in context.
- **Section B: Creative Writing Skills (18 Marks):** Notice (4M), Invitation/Reply (4M), Letter to Editor/Job Application (5M), Article/Report (5M).
- **Section C: Literature Textbooks (40 Marks):**
  - RTC 1: Flamingo Poetry (6 Marks - 1M × 6)
  - RTC 2: Vistas Prose (4 Marks - 1M × 4)
  - RTC 3: Flamingo Prose (6 Marks - 1M × 6)
  - Short Answer Questions: 5 from Flamingo (2M × 5 = 10 Marks), 2 from Vistas (2M × 2 = 4 Marks)
  - Long Answer Thematic Questions: 1 from Flamingo (5 Marks), 1 from Vistas (5 Marks).

TOPIC: Poetic Devices Bank for All Class 12 Poems
- **1. My Mother at Sixty-six (Kamala Das):**
  - **Simile:** \`"face ashen like that of a corpse"\` (highlights pale, lifeless aged complexion); \`"as a late winter's moon"\` (dim, obscured luminosity symbolizing impending demise).
  - **Metaphor / Personification:** \`"Trees sprinting"\` (rapid passage of human youth contrasted with aged mother).
  - **Imagery:** \`"Merry children spilling out of their homes"\` (exuberant vitality of youth vs frailty of senescence).
  - **Tautology / Repetition:** \`"all I did was smile and smile and smile..."\` (desperate effort to mask daughter's poignant anxiety and separation heartache).
- **2. Keeping Quiet (Pablo Neruda):**
  - **Metaphor:** \`"fishermen in the cold sea would not harm whales"\` (cessation of human cruelty against nature); \`"clean clothes"\` (cleansing human mindset of bloodshed and warfare).
  - **Pun / Symbolism:** \`"Earth can teach us as when everything seems dead and later proves to be alive"\` (quiet introspection leads to regeneration).
  - **Alliteration:** \`"sudden strangeness"\`, \`"clean clothes"\`, \`"hurt hands"\`.
- **3. A Thing of Beauty (John Keats):**
  - **Metaphor:** \`"bower quiet for us"\`, \`"wreathing a flowery band"\`, \`"an endless fountain of immortal drink pouring unto us from the heaven's brink"\`.
  - **Alliteration:** \`"noble natures"\`, \`"cooling covert"\`, \`"simple sheep"\`.
  - **Oxymoron / Transferred Epithet:** \`"gloomy days"\`, \`"unhealthy and o'er-darkened ways"\`.
- **4. A Roadside Stand (Robert Frost):**
  - **Personification:** \`"The little old house was out with a little new shed / In front at the edge of the road where the traffic sped, / A roadside stand that too pathetically pled"\`.
  - **Oxymoron:** \`"greedy good-doers"\`, \`"beneficent beasts of prey"\` (sharp critique of self-serving politicians and phony philanthropists exploiting rural folk).
  - **Transferred Epithet:** \`"polished traffic"\`, \`"selfish cars"\`.
- **5. Aunt Jennifer's Tigers (Adrienne Rich):**
  - **Symbolism:**
    * Tigers: Untamed courage, majestic freedom, chivalric spirit, defiance of patriarchal suppression.
    * \`"Massive weight of Uncle's wedding band"\`: Oppressive patriarchal domination and marital shackles.
    * Ringed with ordeals: Double meaning of 'ring' (wedding ring & entrapped/surrounded by hardships).
  - **Irony:** The timid, trembling Aunt Jennifer creates fearless, confident, pacing prancing tigers on the tapestry who will survive long after her death.

TOPIC: Core Prose Master Summaries & Character Profiles
- **1. The Last Lesson (Alphonse Daudet):**
  - **Theme:** Linguistic chauvinism, patriotism, and the realization of mother tongue's supreme value when freedom is stripped away.
  - **M. Hamel:** Dedicated French teacher for 40 years; emotional, dignified; proclaims French as the most beautiful, clearest, and most logical language in the world. Writes \`"Vive La France!"\` on the blackboard.
  - **Franz:** Carefree student who regrets postponing his studies; undergoes immediate emotional maturity.
- **2. Lost Spring (Anees Jung):**
  - **Saheb-e-Alam:** Ragpicker from Seemapuri; name ironically means "Lord of the Universe"; barefoot army searching for gold in garbage dumps; loses childhood freedom when employed at tea stall for Rs. 800.
  - **Mukesh:** Resilient boy from Firozabad bangle-making slums; dreams of becoming a motor mechanic, breaking the generational vicious circle of sahukars, middlemen, policemen, and bureaucrats.
- **3. The Enemy (Pearl S. Buck - Vistas):**
  - **Dr. Sadao Hoki:** Highly skilled Japanese surgeon caught in moral conflict between patriotic national duty and professional medical ethics (Hippocratic oath). Treats the wounded American prisoner of war (Tom) and successfully engineers his safe escape.
INSIGHT: For 5-mark literature answers, introduce the central theme in the first sentence, provide two analytical paragraphs citing textual evidence, and conclude with the universal authorial message.`;
    }

    return `TOPIC: Chapter Formula Master Vault & When-To-Apply Guide: ${chapter}
**1. Core Thematic Principles & Character Motivations:**
- Deep analysis of themes, motifs, symbols, and literary context for **${chapter}**.
- Explicit character arcs and ideological conflicts.

**2. 15-Year CBSE Question Blueprint:**
- 1-Mark RTCs, 2-Mark short analytical questions (40-50 words), 5-Mark long thematic comparisons (120-150 words).
INSIGHT: Always incorporate quotes and exact poetic device terminologies into your literary answers.`;
  } else {
    // ENGLISH SOLVED PYQS
    return `QUESTION: Q1. [5 Marks, Delhi 2024] You are Karan / Kiran, Secretary of the Cultural Club of Springdales Public School, New Delhi. Draft a notice in not more than 50 words informing students of Classes XI and XII about an upcoming Inter-School Debate Competition on the topic "Artificial Intelligence: A Boon or a Bane for Students". Mention date, time, venue, and registration deadline.
SOLUTION:
**Step 1: Complete Draft of Notice (Inside Box):**
\`\`\`
+-----------------------------------------------------------------------+
|                     SPRINGDALES PUBLIC SCHOOL, NEW DELHI              |
|                                                                       |
|                                NOTICE                                 |
|                                                                       |
|  29th March 2026                                                      |
|                                                                       |
|             INTER-SCHOOL DEBATE COMPETITION (CLASSES XI - XII)        |
|                                                                       |
|  This is to inform all students of Classes XI and XII that our        |
|  school is organizing an Inter-School Debate Competition on the       |
|  topic "Artificial Intelligence: A Boon or a Bane for Students".      |
|                                                                       |
|  Event Details:                                                       |
|  * Date  : 15th April 2026                                            |
|  * Time  : 9:30 AM onwards                                            |
|  * Venue : School Multi-Purpose Auditorium                            |
|                                                                       |
|  Interested students should submit their names to the undersigned     |
|  latest by 8th April 2026 for preliminary auditions.                  |
|                                                                       |
|  Kiran / Karan                                                        |
|  Secretary, Cultural Club                                             |
+-----------------------------------------------------------------------+
\`\`\`

**CBSE Marking Rubric:**
- 1 Mark for correct Format (Box, Institution Name, NOTICE, Date, Heading, Designation).
- 2 Marks for Content (All essential 5 W's: What, When, Where, Whom to contact, Deadline).
- 1 Mark for Expression, Grammatical Accuracy, and strictly adhering to the 50-word limit.
INSIGHT: Always enclose the notice in a neat rectangular box using a ruler.

QUESTION: Q2. [5 Marks, All India 2023] Contrast Aunt Jennifer and the tigers created by her in the tapestry. What philosophical message does Adrienne Rich convey through this stark dichotomy?
SOLUTION:
**Step 1: Contrast between Aunt Jennifer and Her Tigers:**
- **Aunt Jennifer's Demeanor:**
  - She is depicted as physically frail, emotionally traumatized, and subjugated by a dominant patriarch.
  - Her fingers are \`"fluttering through her wool"\`, finding even the ivory needle hard to pull because of the \`"massive weight of Uncle's wedding band"\`.
  - Her marriage has been a cage of patriarchal oppression and marital burdens.
- **The Tapestry Tigers' Demeanor:**
  - The tigers are \`"bright topaz denizens of a world of green"\`.
  - They do not fear the men beneath the tree; they pace in \`"sleek chivalric certainty"\`, embodying majestic fearlessness, pride, royal poise, and unbridled freedom.

**Step 2: Underlying Philosophical Message:**
- Adrienne Rich utilizes this vivid juxtaposition to expose the profound crisis of women trapped in orthodox patriarchal institutions.
- While Aunt Jennifer's physical self remains subdued and will eventually succumb (\`"When Aunt is dead, her terrified hands will lie / Still ringed with ordeals she was mastered by"\`), her artistic creation transcends mortality.
- Art serves as a vehicle for the suppressed human spirit to express its innermost craving for autonomy, dignity, and unvanquished freedom.

**CBSE Marking Rubric:**
- 2 Marks for contrasting Aunt Jennifer's subjugation with the tigers' fearless chivalry.
- 2 Marks for analyzing the symbolism (Wedding band, Topaz tigers, Ringed ordeals).
- 1 Mark for articulating the universal feminist and artistic message.
INSIGHT: Highlight the double meaning of the word 'ringed' (marital wedding band vs imprisoned by life's tribulations).`;
  }
}
