// services/subjects/english/pyqs2.ts
// Flamingo Poetry (RTCs, Poetic Devices) & Vistas Prose Solved Board PYQs
// Authentic recent CBSE Board questions with comprehensive notebook-style solutions.

export function getEnglishPart2PYQs(chapterLower: string): string | null {
  // FLAMINGO POETRY SOLVED PYQS
  if (
    chapterLower.includes('poem') ||
    chapterLower.includes('poetry') ||
    chapterLower.includes('mother at sixty') ||
    chapterLower.includes('keeping quiet') ||
    chapterLower.includes('thing of beauty') ||
    chapterLower.includes('roadside stand') ||
    chapterLower.includes('aunt jennifer') ||
    chapterLower === 'eng_poetry'
  ) {
    return `QUESTION: Q1. [6 Marks RTC Extract, CBSE 2024 (Delhi)]
Read the following extract and answer the questions that follow:
*"...and felt that old
familiar ache, my childhood's fear,
but all I said was, see you soon, Amma,
all I did was smile and smile and
smile......"*

(i) What is the "familiar ache" mentioned by the poet Kamala Das?
(ii) What was the poet's "childhood's fear"?
(iii) Identify the poetic device used in the last two lines: *"smile and smile and smile......"*.
(iv) Why does the poet make a deliberate effort to smile repeatedly?
(v) Which word in the extract means "pain or distress"?
(vi) Explain the emotional contrast between the poet's internal feelings and external behavior.
SOLUTION:
**(i) The Familiar Ache:**
The "familiar ache" refers to the poignant agony of emotional insecurity and heart-wrenching pain experienced by the poet upon realizing her mother's rapid physical deterioration, frailty, and approaching mortality.

**(ii) Childhood's Fear:**
Her childhood's fear was the perpetual, primal terror of being separated from her mother or losing her mother to the inevitable clutches of death.

**(iii) Poetic Device:**
**Repetition** (or Tautology). The poet repeats the word *"smile"* three times to underscore the agonizing, prolonged effort required to maintain composure.

**(iv) Purpose of Deliberate Smile:**
The repetitive smile is a protective facade. It serves two functions: (a) To reassure her aged mother that they will meet again (*"see you soon, Amma"*), and (b) To mask her own overwhelming grief, anxiety, and helplessness from bursting into tears at the airport.

**(v) Word Meaning:**
The word is **"ache"**.

**(vi) Emotional Contrast:**
There is a profound, tragic dissonance between her internal state and outward demeanour. Internally, her heart is gripped by acute distress and premonitions of death; externally, she puts on an optimistic, smiling facade to bestow warmth and hope to her mother.
**CBSE Marking Rubric:**
- 1 Mark for each sub-question answered accurately with reference to the extract.
INSIGHT: Clearly distinguish between the familiar ache (adult realization of aging) and childhood's fear (early separation anxiety).

QUESTION: Q2. [2 Marks Short Answer, CBSE 2023 (Delhi)]
According to Pablo Neruda in 'Keeping Quiet', what can the Earth teach human beings?
SOLUTION:
**What the Earth Can Teach Us:**
- In 'Keeping Quiet', Pablo Neruda observes that the **Earth can be humanity's greatest teacher** because when everything appears inert and lifeless in winter, life quietly germinates beneath the surface, later proving to be dynamically alive in spring.
- Earth teaches us that **stillness is not death or inertia**; rather, periods of calm introspection, silence, and dormancy are indispensable prerequisites for spiritual rebirth, rejuvenation, and productive renewal.
**CBSE Marking Rubric:**
- 1 Mark for explaining the metaphor of seasonal dormancy (apparent death yielding rebirth).
- 1 Mark for connecting it to human quiet introspection.`;
  }

  // VISTAS SUPPLEMENTARY READER SOLVED PYQS
  if (
    chapterLower.includes('vistas') ||
    chapterLower.includes('third level') ||
    chapterLower.includes('tiger king') ||
    chapterLower.includes('journey to the end') ||
    chapterLower.includes('enemy') ||
    chapterLower.includes('face of it') ||
    chapterLower.includes('memories of childhood') ||
    chapterLower === 'eng_vistas'
  ) {
    return `QUESTION: Q1. [5 Marks Long Answer, CBSE 2024 (Delhi)]
"Dr. Sadao was compelled by his duty as a doctor to help the enemy soldier. What made Hana, his wife, support him in this perilous endeavor despite her profound dread and the servants' revolt?" Analyze Hana's character and ethical stature in 'The Enemy'.
SOLUTION:
**Hana's Role and Moral Stature in 'The Enemy':**
1. **Initial Conflict and Natural Dread:**
   - When the battered American prisoner of war washes ashore, Hana is gripped by immense fear. She understands the deadly consequence: harboring an enemy during wartime amounts to treason, punishable by execution for their entire household.
   - Her dread is amplified when she smells the stench of the filthy, bleeding soldier and recoils at the white man's presence.

2. **Compassion Overcoming Prejudice:**
   - Despite her revulsion and terror, Hana's innate humanitarian instinct overrides narrow national chauvinism.
   - When the maid Yumi obstinately refuses to wash the filthy white soldier, Hana does not lose her composure. Instead, she washes the wounded American herself with hot water, displaying profound dignity and moral leadership.

3. **Active Surgical Assistance:**
   - During the operation, when Sadao urgently requires assistance, Hana overcomes nausea and retching to administer the anesthetic (ether) to the patient.
   - She stands unwaveringly by her husband, even as the servants (the cook, gardener, and Yumi) pack their belongings and abandon the household in protest.

4. **Conclusion & Thematic Significance:**
   - Hana exemplifies emotional resilience and empathetic humanity. She proves that genuine compassion recognizes no borders or nationalities, demonstrating that humanity transcends all wartime hostilities.
**CBSE Marking Rubric:**
- 2 Marks for analyzing Hana's internal conflict and terror vs moral resolve.
- 2 Marks for detailing her concrete actions (washing the POW, administering anesthesia, managing servants).
- 1 Mark for thematic synthesis on universal compassion over wartime enmity.

QUESTION: Q2. [2 Marks Short Answer, CBSE 2023 (All India)]
How does Mr. Lamb try to overcome his physical disability and loneliness in 'On the Face of It'?
SOLUTION:
**Mr. Lamb's Strategy to Overcome Loneliness:**
- Despite having a tin leg (lost in a bomb blast during the war), Mr. Lamb embraces a deeply positive, philosophical attitude towards life.
- He keeps his house doors and windows wide open with no curtains, inviting everyone into his garden.
- He spends his days plucking crab apples, preparing jelly, reading books, listening to bees singing, and engaging passers-by in uplifting conversations, refusing to harbor bitterness or self-pity.
**CBSE Marking Rubric:**
- 1 Mark for mentioning open garden gates, jelly making, and reading.
- 1 Mark for highlighting his positive mindset and refusal of bitterness.`;
  }

  // DEFAULT / MASTER QUESTION BANK
  return `QUESTION: Q1. [5 Marks Long Answer, CBSE 2024]
How does the metaphor of the rattrap serve as a psychological mirror for the human predicament in Selma Lagerlöf's 'The Rattrap'? How does Edla Willmansson succeed where the ironmaster failed?
SOLUTION:
**1. The World as a Rattrap:**
- The peddler visualizes the whole world as a giant rattrap existing for the sole purpose of setting baits for human beings.
- Just as cheese and pork tempt rats into the trap, wealth, comforts, shelter, food, and joy lure humans into spiritual entrapment. Once a person succumbs to temptation (as the peddler did by stealing the crofter's thirty kronor), the trap snaps shut, plunging him into a dark labyrinth of guilt and fear.

**2. Ironmaster's Mistake vs. Edla's Compassionate Triumph:**
- The ironmaster invited the peddler home only because he mistakenly believed him to be his old regiment comrade, Captain Nils Olof. Upon discovering the peddler's true indigent identity under daylight, the ironmaster reacted with outrage and threatened to summon the sheriff.
- In stark contrast, Edla Willmansson intervened on the peddler's behalf even after knowing he was a nameless vagabond. She recognized his tragic loneliness, hunted existence, and perpetual fear of arrest.
- She treated him with unconditional dignity, respect, and warmth, serving him Christmas dinner and gifting him her father's suit.
- Her pure, selfless love awakened the dormant nobility in the peddler. He resolved not to embarrass her, returned the stolen 30 kronor for the crofter, and signed his farewell note as **Captain von Stahle**, showing that true compassion can elevate a thief into a gentleman.
**CBSE Marking Rubric:**
- 2 Marks for analyzing the rattrap metaphor and thirty kronor temptation.
- 2 Marks for contrasting the ironmaster's conditional hospitality with Edla's unconditional empathy.
- 1 Mark for peddler's transformation and symbolic signing as Captain von Stahle.
INSIGHT: Mentioning the peddler's signature as 'Captain von Stahle' is a key requirement in CBSE marking guidelines.`;
}
