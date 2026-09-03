// services/subjects/english/part1.ts
// Section B: Creative Writing Skills (Notice, Invitation/Reply, Letter to Editor, Job Application, Article/Report)
// Flamingo Prose Chapters (The Last Lesson, Lost Spring, Deep Water, The Rattrap, Indigo, Poets and Pancakes, The Interview, Going Places)
// Master Notebook Notes - Strictly aligned with CBSE Class 12 English Core (301) NCERT Syllabus (2026-27).

export function getEnglishPart1Notes(chapterLower: string): string | null {
  // WRITING SKILLS / SECTION B
  if (
    chapterLower.includes('writing') ||
    chapterLower.includes('notice') ||
    chapterLower.includes('invitation') ||
    chapterLower.includes('letter') ||
    chapterLower.includes('job application') ||
    chapterLower.includes('article') ||
    chapterLower.includes('report') ||
    chapterLower === 'eng_writing'
  ) {
    return `TOPIC: Section B: Creative Writing Skills Master Notes & Formatting Blueprints
Master Notebook Notes - Strictly aligned with CBSE Class 12 English Core (301) NCERT Syllabus (2026-27).

**1. Notice Writing (50 Words, 4 Marks):**
- **Format:**
  * Must be drawn inside a **4-sided rectangular box**.
  * Line 1: Name of the Issuing School / Organization (Centered, Bold, UPPERCASE).
  * Line 2: The word \`NOTICE\` (Centered, UPPERCASE, bold).
  * Line 3: Date of issue in expanded alphanumeric format (Left-aligned, e.g., \`15th April 2026\`).
  * Line 4: Catchy, informative heading/subject (Centered, Title Case).
  * Line 5+: Body of the notice answering the 5 W's: **What, When, Where, Who can participate, Whom to contact** and registration deadline.
  * Bottom: Signatory's Name and Official Designation (Left-aligned).
- **Marking Scheme:** Format: 1 Mark | Content: 2 Marks | Accuracy & Spelling: 1 Mark.
- **Golden Rule:** Adhere strictly to the 50-word limit; penalty for exceeding 55 words.

**2. Formal & Informal Invitations and Replies (50 Words, 4 Marks):**
- **Formal Invitation (Printed Card Format):**
  * Written in **Third Person** (e.g., *"The Principal, Staff, and Students of XYZ School solicit the benign presence of..."*).
  * No subject, no salutation, no signature at bottom.
  * Date, Time, Venue clearly highlighted.
  * Bottom Left: **RSVP** (French for *'Répondez s'il vous plaît'*, meaning 'Please respond') followed by Contact Name & Mobile Number.
- **Formal Reply (Acceptance / Refusal):**
  * Written in Third Person (e.g., *"Mr. and Mrs. Sharma thank Mrs. and Mr. Gupta for their kind invitation to attend the wedding reception on 25th May 2026 at Hotel Grand..."*).
  * State clearly whether accepting or expressing inability to attend due to prior engagement.
  * Offer warm congratulations/best wishes.
- **Informal Invitation / Reply:**
  * Written in **First/Second Person** (\`I / We / You\`) as a warm personal letter.

**3. Letter to the Editor (120-150 Words, 5 Marks):**
- **Format:** Sender's Address -> Date -> Receiver's Address (The Editor, Name of Newspaper, City) -> Subject (concise & underlined) -> Salutation (\`Sir/Madam\`) -> 3-Paragraph Body -> Complimentary Close (\`Yours truly\`) -> Name.
- **Body Structure:**
  * **Paragraph 1 (Opening):** *"Through the esteemed columns of your widely circulated daily, I would like to draw the attention of the concerned authorities and the general public towards the pressing issue of..."*
  * **Paragraph 2 (Elaboration & Impact):** Explain root causes, real-world hazards, impact on students/citizens/environment.
  * **Paragraph 3 (Recommendations & Concluding appeal):** Propose practical remedial measures; request authorities to take prompt action. (Never ask the Editor to solve the problem; ask the Editor to *publish* the concerns).

**4. Job Application with Bio-Data / CV (120-150 Words, 5 Marks):**
- **Part A: Covering Letter:**
  * Reference to advertisement: *"In response to your advertisement published in 'The Times of India' dated 10th April 2026 for the post of Senior Post Graduate Teacher (English)..."*
  * Statement of candidature, qualifications, and suitability.
  * Enclosure statement: *"Enclosed herewith is my detailed Bio-Data and testimonials for your kind perusal."*
- **Part B: Detailed Bio-Data / Curriculum Vitae:**
  * Personal Details: Name, Father's Name, Date of Birth, Gender, Marital Status, Permanent Address, Phone/Email.
  * **Academic Qualifications (Tabular Format):**
    | S.No. | Examination Passed | Board / University | Year | Percentage / CGPA |
    |---|---|---|---|---|
    | 1 | Class X (AISSE) | CBSE | 2016 | 94% |
    | 2 | Class XII (AISSCE) | CBSE | 2018 | 95% |
    | 3 | B.A. (Hons) English | Delhi University | 2021 | 82% |
    | 4 | B.Ed. / M.A. | CIE, Delhi University | 2023 | 80% |
  * Work Experience: e.g. 3 years as PGT English at Modern School, Delhi.
  * References: Names and contact details of two respectable professionals.

**COMMON MISTAKE:**
- Exceeding the 50-word limit in Notice/Invitations.
- Asking the newspaper editor to "repair the potholes" instead of asking the municipal authorities.`;
  }

  // FLAMINGO PROSE CHAPTERS
  if (
    chapterLower.includes('last lesson') ||
    chapterLower.includes('lost spring') ||
    chapterLower.includes('deep water') ||
    chapterLower.includes('rattrap') ||
    chapterLower.includes('indigo') ||
    chapterLower.includes('poets and pancakes') ||
    chapterLower.includes('interview') ||
    chapterLower.includes('going places') ||
    chapterLower === 'eng_prose'
  ) {
    return `TOPIC: Flamingo Prose Master Notes & Character Profiles
Master Notebook Notes - Strictly aligned with CBSE Class 12 English Core (301) NCERT Syllabus (2026-27).

**1. The Last Lesson (Alphonse Daudet):**
- **Historical Background:** Franco-Prussian War (1870-1871); France was defeated by Prussia led by Bismarck; French districts of **Alsace and Lorraine** passed into Prussian hands.
- **Core Themes:** Linguistic chauvinism, patriotic identity, procrastination in learning, value of mother tongue.
- **Key Characters:**
  * **Franz:** A young schoolboy who hated grammar rules of participles; wanted to spend the day outdoors enjoying warm weather and chirping birds; experiences sudden regret and guilt upon learning it is their last French lesson.
  * **M. Hamel:** Dedicated French teacher serving for 40 years; dressed in his Sunday best (green coat, frilled shirt, black silk cap); delivers an impassioned farewell lecture proclaiming French as the **most beautiful, clearest, and most logical language**; writes \`"Vive La France!"\` (Long Live France) on the chalkboard.
  * **Old Hauser & Villagers:** Sit silently at the back benches with spelling primers to pay homage to their teacher and country.

**2. Lost Spring: Stories of Stolen Childhood (Anees Jung):**
- **Theme:** Grinding poverty, child labor, systemic social apathy, and loss of innocent childhood.
- **Part I: "Sometimes I find a rupee in the garbage" (Seemapuri, Delhi):**
  * **Saheb-e-Alam:** Name ironically translates to *"Lord of the Universe"*, yet he roams barefoot scavenging garbage heaps for survival.
  * Dhaka refugees settled in Seemapuri since 1971; lack basic amenities (water, drainage), but possess ration cards for food and votes.
  * To elders, garbage is daily bread; to children, it is wrapped in wonder.
  * Saheb eventually gets a job at a tea stall earning Rs. 800 and all meals, but forfeits his freedom (*"the steel canister seemed heavier than the plastic bag"*).
- **Part II: "I want to drive a car" (Firozabad, UP):**
  * **Mukesh:** Born into a family of bangle makers; aspires to be a motor mechanic.
  * Bangle industry: Children working around hot glass furnaces with high temperatures in dingy cells lose their eyesight before adulthood.
  * Entrapped in a vicious cycle created by: *Sahukars (moneylenders), middlemen, policemen, bureaucrats, and politicians*.

**3. Deep Water (William Douglas):**
- **Theme:** Overcoming deep-seated phobia through perseverance, professional guidance, and sheer willpower.
- **Incidents:**
  * Childhood trauma at California beach (age 3-4): knocked down and swept by giant waves.
  * YMCA Swimming Pool incident (age 10-11): A big bruiser of a boy threw Douglas into the 9-foot deep end; Douglas experienced near-drowning, suffocation, and blacking out (*"terror seized me that knows no understanding"*).
- **Conquest of Fear:** Engaged a swimming instructor who built a swimmer out of him bit by bit (harness, breathing, kicking); swam across Lake Wentworth and Warm Lake to verify complete mastery (*"All we have to fear is fear itself" - Roosevelt*).

**4. The Rattrap (Selma Lagerlöf):**
- **Theme:** The essential goodness in a human being can be awakened through unconditional love, trust, empathy, and understanding.
- **Metaphor:** The whole world is nothing but a giant **rattrap**, offering riches, food, and shelter as bait (cheese and pork).
- **Key Plot Points:**
  * Vagabond peddler steals 30 kronor from a lonely old crofter who gave him shelter.
  * Trapped in maze of dark forest; sheltered at Ramsjo Ironworks.
  * Mistaken for Captain Nils Olof by Ironmaster; invites him home.
  * **Edla Willmansson:** Ironmaster's compassionate daughter; discovers truth but insists he stay for Christmas dinner; treats him with dignity and respect.
  * Peddler is reformed; leaves the stolen 30 kronor to be returned to the crofter with a thank-you letter signed as **Captain von Stahle**.

**5. Indigo (Louis Fischer):**
- **Theme:** Leadership, non-violent civil disobedience, self-reliance, and defending human rights.
- **Champaran Sharecroppers (1916-1917):**
  * British landlords forced Indian peasants to plant **15% of their land with Indigo** and surrender entire harvest as rent.
  * When Germany developed synthetic indigo, landlords demanded compensation to release tenants from the contract.
  * **Rajkumar Shukla:** Resolute, illiterate peasant from Champaran who persistently pursued Mahatma Gandhi to visit Champaran.
- **Significance:** First successful demonstration of non-violent civil disobedience in modern India; taught peasants freedom from fear of the British.

**6. Poets and Pancakes (Asokamitran):**
- **Setting:** Gemini Studios, Madras (founded by S.S. Vasan in 1940); national integration in the make-up department (*Pancake* brand make-up).
- **Kothamangalam Subbu:** Number 2 at Gemini Studios; multifaceted poet, actor, loyal troubleshooter.
- **Stephen Spender's Visit:** English poet visiting Gemini Studios; his anti-communist essay in *The God That Failed* later clarifies his visit.

**7. The Interview (Christopher Silvester):**
- **Part I:** Critical opinions on interviews; seen as intrusion on privacy (V.S. Naipaul, Lewis Carroll, Rudyard Kipling).
- **Part II:** Mukund Padmanabhan's interview of **Umberto Eco**; Eco reveals how he utilizes "interstices" (empty spaces of time) and discusses the global success of *The Name of the Rose*.

**8. Going Places (A.R. Barton):**
- **Theme:** Adolescent fantasizing, hero-worship, and socioeconomic realities.
- **Sophie:** Daydreamer living in lower-middle-class family; invents romantic encounter with Irish footballer **Danny Casey**.
- **Jansie:** Sophie's practical, sensible friend who urges her to accept realistic constraints (destined for biscuit factory).`;
  }

  return null;
}
