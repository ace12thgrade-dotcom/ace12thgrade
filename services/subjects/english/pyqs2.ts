// services/subjects/english/pyqs2.ts
// Flamingo Poetry (efp1-efp5) & Vistas Supplementary Reader (ev1-ev6) Solved Board PYQs
// Full Revision (e_rev)
// Authentic recent CBSE Board questions with comprehensive notebook-style solutions.

export function getEnglishPart2PYQs(chapterLower: string, chapterId?: string): string | null {
  const id = (chapterId || '').toLowerCase().trim();

  // FULL REVISION PYQS / MASTER MOCK BANK
  if (
    id === 'e_rev' ||
    id === 'eng_all' ||
    (!id && (
      chapterLower === 'full subject revision' ||
      chapterLower.includes('full subject revision') ||
      chapterLower.includes('master revision') ||
      chapterLower === 'e_rev'
    ))
  ) {
    return `QUESTION: Q1. [5 Marks Long Answer, CBSE 2024 (Delhi)]
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

QUESTION: Q2. [6 Marks RTC Extract, CBSE 2023 (All India)]
Read the following extract and answer the questions:
*"Aunt Jennifer's fingers fluttering through her wool
Find even the ivory needle hard to pull.
The massive weight of Uncle's wedding band
Sits heavily upon Aunt Jennifer's hand."*
(i) Why are Aunt Jennifer's fingers fluttering?
(ii) What does "the massive weight of Uncle's wedding band" symbolize?
(iii) Name the poetic device in "fingers fluttering".
(iv) What is the state of Aunt Jennifer's mental and physical health as suggested here?
SOLUTION:
**(i) Why Fingers Flutter:**
Aunt Jennifer's fingers are fluttering due to physical weakness and profound nervous trauma caused by years of patriarchal oppression and domestic subjugation in an unhappy marriage.
**(ii) Symbolism of Uncle's Wedding Band:**
The wedding band symbolizes the oppressive marital bondage and male domination that stripped Aunt Jennifer of her personal freedom, artistic autonomy, and individuality.
**(iii) Poetic Device:**
**Alliteration** (repetition of the initial consonant sound /f/).
**(iv) Mental and Physical State:**
She is frail, nervous, physically exhausted, and psychologically terrified, finding even a lightweight ivory needle difficult to pull.
**CBSE Marking Rubric:**
- 1.5 Marks each for (i) and (ii).
- 1.5 Marks each for (iii) and (iv).`;
  }

  // POEM 1: My Mother at Sixty-six (efp1)
  if (
    id === 'efp1' ||
    (!id && (
      chapterLower === 'my mother at sixty-six' ||
      chapterLower.includes('mother at sixty') ||
      chapterLower.includes('kamala das') ||
      chapterLower === 'efp1'
    ))
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
INSIGHT: Clearly distinguish between the familiar ache (adult realization of aging) and childhood's fear (early separation anxiety).`;
  }

  // POEM 2: Keeping Quiet (efp2)
  if (
    id === 'efp2' ||
    (!id && (
      chapterLower === 'keeping quiet' ||
      chapterLower.includes('keeping quiet') ||
      chapterLower.includes('pablo neruda') ||
      chapterLower === 'efp2'
    ))
  ) {
    return `QUESTION: Q1. [2 Marks Short Answer, CBSE 2024 (Delhi)]
According to Pablo Neruda in 'Keeping Quiet', what can the Earth teach human beings?
SOLUTION:
**What the Earth Can Teach Us:**
- In 'Keeping Quiet', Pablo Neruda observes that the **Earth can be humanity's greatest teacher** because when everything appears inert and lifeless in winter, life quietly germinates beneath the surface, later proving to be dynamically alive in spring.
- Earth teaches us that **stillness is not death or inertia**; rather, periods of calm introspection, silence, and dormancy are indispensable prerequisites for spiritual rebirth, rejuvenation, and productive renewal.
**CBSE Marking Rubric:**
- 1 Mark for explaining the metaphor of seasonal dormancy (apparent death yielding rebirth).
- 1 Mark for connecting it to human quiet introspection.

QUESTION: Q2. [2 Marks Short Answer, CBSE 2023 (All India)]
What is the "sadness" that Pablo Neruda refers to in 'Keeping Quiet'?
SOLUTION:
**The Sadness of Humanity:**
- The "sadness" stems from humanity's frantic, unthinking rush that leaves no time for self-understanding or spiritual reflection.
- People are trapped in a perpetual cycle of materialistic greed and self-destruction, constantly threatening themselves with death through war and ecological devastation because they fail to understand the true meaning of life.
**CBSE Marking Rubric:**
- 1 Mark for never understanding ourselves.
- 1 Mark for threatening ourselves with death and destruction through relentless haste.`;
  }

  // POEM 3: A Thing of Beauty (efp3)
  if (
    id === 'efp3' ||
    (!id && (
      chapterLower === 'a thing of beauty' ||
      chapterLower.includes('thing of beauty') ||
      chapterLower.includes('john keats') ||
      chapterLower === 'efp3'
    ))
  ) {
    return `QUESTION: Q1. [6 Marks RTC Extract, CBSE 2024 (Delhi)]
Read the following extract and answer the questions that follow:
*"A thing of beauty is a joy forever
Its loveliness increases, it will never
Pass into nothingness; but will keep
A bower quiet for us, and a sleep
Full of sweet dreams, and health, and quiet breathing."*

(i) How does a thing of beauty remain a joy forever?
(ii) Explain the phrase "pass into nothingness".
(iii) What is a "bower"? What does it provide for us?
(iv) Identify the rhyme scheme of the given lines.
(v) Which poetic device is used in "bower quiet for us"?
(vi) How does beauty affect our physical and mental health according to Keats?
SOLUTION:
**(i) Permanence of Beauty:**
A thing of beauty is an eternal source of joy because its loveliness is immortal; its uplifting impact multiplies and deepens in human memory over time, never losing its therapeutic power.
**(ii) Meaning of "Pass into Nothingness":**
It means to fade away, perish, or lose significance. Unlike mortal physical objects, true beauty leaves an imperishable spiritual imprint.
**(iii) Meaning of "Bower":**
A bower is a pleasant, shady shelter under trees. Metaphorically, beauty acts as a calm, safe sanctuary protecting us from life's scorching tribulations.
**(iv) Rhyme Scheme:**
**aabbc** (forever/never - a, keep/sleep - b, breathing - c).
**(v) Poetic Device:**
**Metaphor** (comparing a tranquil state of mind inspired by beauty to a shady bower).
**(vi) Health Impact:**
It grants restful sleep filled with sweet dreams, robust mental and physical health, and serene, tranquil breathing free of anxiety.
**CBSE Marking Rubric:**
- 1 Mark for each correct sub-part.`;
  }

  // POEM 4: A Roadside Stand (efp4)
  if (
    id === 'efp4' ||
    (!id && (
      chapterLower === 'a roadside stand' ||
      chapterLower.includes('roadside stand') ||
      chapterLower.includes('robert frost') ||
      chapterLower === 'efp4'
    ))
  ) {
    return `QUESTION: Q1. [2 Marks Short Answer, CBSE 2024 (Delhi)]
Why do the roadside stand owners plead so pathetically? What are they asking for?
SOLUTION:
**The Plea of the Roadside Stand Owners:**
- The rural roadside stand owners plead not for a humiliating handout of bread or charity.
- They are pleading for a small share of **city cash**—the currency that sustains city economies and enables businesses to flourish.
- They desire to earn a decent livelihood by selling their native produce (wild berries, squash) to improve their standard of living.
**CBSE Marking Rubric:**
- 1 Mark for rejecting charity/bread.
- 1 Mark for asking for a share of city cash to support their livelihood.

QUESTION: Q2. [2 Marks Short Answer, CBSE 2023 (Delhi)]
Why does Robert Frost refer to the so-called benefactors as "greedy good-doers, beneficent beasts of prey"?
SOLUTION:
**Oxymoron: "Greedy Good-Doers":**
- Frost uses these biting oxymorons to expose the calculating hypocrisy of corrupt politicians and commercial developers.
- Although they present themselves as benevolent social reformers offering village relocations, their real motive is selfish greed—to acquire peasant lands cheaply.
- Like beasts of prey, they strip the villagers of their ancient self-reliance, lulling them into helpless dependency.
**CBSE Marking Rubric:**
- 1 Mark for explaining the hypocritical facade of benevolence masking selfish greed.
- 1 Mark for explaining how they strip villagers of self-reliance.`;
  }

  // POEM 5: Aunt Jennifer's Tigers (efp5)
  if (
    id === 'efp5' ||
    (!id && (
      chapterLower === "aunt jennifer's tigers" ||
      chapterLower.includes('aunt jennifer') ||
      chapterLower.includes('adrienne rich') ||
      chapterLower === 'efp5'
    ))
  ) {
    return `QUESTION: Q1. [6 Marks RTC Extract, CBSE 2024 (Delhi)]
Read the following extract and answer the questions that follow:
*"When Aunt is dead, her terrified hands will lie
Still ringed with ordeals she was mastered by.
The tigers in the panel that she made
Will go on prancing, proud and unafraid."*

(i) Why are Aunt Jennifer's hands described as "terrified"?
(ii) Explain the double meaning of the word "ringed".
(iii) Who has "mastered" Aunt Jennifer?
(iv) How do the tigers contrast with Aunt Jennifer?
(v) Identify the poetic device in "prancing, proud".
(vi) What is the central message of these lines regarding art?
SOLUTION:
**(i) Why Hands Are Terrified:**
Her hands are described as "terrified" because of the lingering, traumatic memory of a lifetime of matrimonial subjugation, patriarchal tyranny, and fear.
**(ii) Double Meaning of "Ringed":**
First, literally wearing Uncle's wedding ring. Second, metaphorically surrounded and encircled by the agonizing hardships, restrictions, and marital ordeals that dominated her existence.
**(iii) Who Mastered Her:**
Her husband (patriarchal society represented by Uncle).
**(iv) Contrast with Tigers:**
While Aunt Jennifer lived a frail, terrified, and subdued life, her embroidered tigers are immortal, chivalric, fearless, and proud.
**(v) Poetic Device:**
**Alliteration** (repetition of the sound /p/).
**(vi) Message on Art:**
Art possesses the power of immortal defiance; although the mortal artist is crushed and dies in servitude, her creative spirit of freedom lives on forever in her art.
**CBSE Marking Rubric:**
- 1 Mark for each sub-question answered accurately.`;
  }

  // VISTAS 1: The Third Level (ev1)
  if (
    id === 'ev1' ||
    (!id && (
      chapterLower === 'the third level' ||
      chapterLower.includes('third level') ||
      chapterLower.includes('jack finney') ||
      chapterLower.includes('charley') ||
      chapterLower === 'ev1'
    ))
  ) {
    return `QUESTION: Q1. [2 Marks Short Answer, CBSE 2024 (Delhi)]
What did Charley's psychiatrist friend Sam Weiner say about Charley's claim of having found the Third Level of Grand Central Station?
SOLUTION:
**Sam Weiner's Psychiatric Diagnosis:**
- Sam diagnosed Charley's experience as a **"waking-wish fulfillment"**.
- He explained that the modern world is rife with insecurity, fear, war, worry, and stress, and Charley's claim of discovering a 19th-century railway level was merely an escapist psychological refuge from harsh reality.
**CBSE Marking Rubric:**
- 1 Mark for "waking-wish fulfillment".
- 1 Mark for linking it to modern insecurity, fear, war, and stress.

QUESTION: Q2. [5 Marks Long Answer, CBSE 2023 (All India)]
How does the discovery of Sam's letter in the first-day cover change the narrative of 'The Third Level'? Does it validate Charley's experience or deepen the mystery?
SOLUTION:
**1. The Mysterious First-Day Cover:**
- A first-day cover is an envelope mailed by stamp collectors to themselves on the first day of a stamp's issue with blank paper inside to preserve the postmark.
- Among his grandfather's collection, Charley discovers an unfamiliar first-day cover mailed to Galesburg, postmarked **July 18, 1894**, with a six-cent dull brown stamp featuring President Garfield.
- Inside the envelope was not a blank paper, but a handwritten letter signed by **Sam Weiner**.
**2. Contents and Confirmation:**
- In the letter, Sam confesses that he has been in Galesburg for two weeks, where people are singing on front porches and having lemonade.
- He urges Charley and Louisa to keep hunting for the Third Level because it is real and worthwhile.
**3. Narrative Shift and Epiphany:**
- This discovery dramatically shifts the narrative from a psychological delusion into a reality or shared escapist vision.
- Investigating at the coin shop, Charley learns Sam had bought eight hundred dollars' worth of old-style currency to set up a hay, feed, and grain business in 1894.
**CBSE Marking Rubric:**
- 2 Marks for describing the discovery of Sam's letter and 1894 postmark.
- 2 Marks for Sam's confirmation of Galesburg and old-currency purchase.
- 1 Mark for concluding on whether it deepens mystery or confirms time travel.`;
  }

  // VISTAS 2: The Tiger King (ev2)
  if (
    id === 'ev2' ||
    (!id && (
      chapterLower === 'the tiger king' ||
      chapterLower.includes('tiger king') ||
      chapterLower.includes('kalki') ||
      chapterLower === 'ev2'
    ))
  ) {
    return `QUESTION: Q1. [2 Marks Short Answer, CBSE 2024 (Delhi)]
How did the Maharaja manage to retain his kingdom after refusing permission to a British officer to hunt tigers in Pratibandapuram?
SOLUTION:
**Retaining the Kingdom:**
- To avert the wrath of the British officer whom he denied a tiger hunt, the Maharaja dispatched a telegram to a famous British jewelry firm in Calcutta.
- The jeweler sent 50 diamond rings of different designs. The Maharaja sent all 50 rings to the officer's wife (*duraisani*), expecting her to pick one or two.
- The greedy lady kept all fifty rings and sent a note of thanks.
- The gift cost the Maharaja **three lakh rupees**, but he successfully saved his kingdom from British confiscation.
**CBSE Marking Rubric:**
- 1 Mark for sending 50 diamond rings to the British officer's wife.
- 1 Mark for the cost of 3 lakh rupees and saving the throne.

QUESTION: Q2. [5 Marks Long Answer, CBSE 2023 (Delhi)]
Analyze the dramatic irony surrounding the death of the Tiger King. How does the hundredth tiger take its ultimate revenge?
SOLUTION:
**1. The Frantic Search and Illusion of the 100th Tiger:**
- After hunting 99 tigers, the Maharaja was desperate for the hundredth.
- The Dewan secretly planted an ancient, emaciated circus tiger in the jungle.
- The Maharaja fired; the beast collapsed. Believing he had triumphed over destiny, the king departed in grandeur.
- In reality, the king's bullet had missed; the ancient tiger had merely fainted from the sound of the gunshot! The forest guards secretly shot it dead to preserve their jobs.
**2. The Irony of the Wooden Tiger:**
- On his son's third birthday, the Maharaja gifted him a crudely carved wooden toy tiger.
- While playing together, a tiny uncarved wooden sliver pierced the Maharaja's right hand.
- The minor puncture developed into a suppurating sore, and within four days, a lethal infection spread throughout his right arm.
**3. The Astrological Climax:**
- Three eminent British surgeons performed an operation. Coming out of the theatre, they proclaimed: *"The operation was successful. The Maharaja is dead."*
- Thus, the hundredth tiger—not a ferocious living beast, but an inanimate, cheap toy tiger—took its fatal revenge upon the conceited monarch.
**CBSE Marking Rubric:**
- 2 Marks for explaining how the bullet missed the 100th live tiger.
- 2 Marks for detailing the wooden sliver and fatal infection.
- 1 Mark for analyzing the dramatic irony and surgeons' paradoxical announcement.`;
  }

  // VISTAS 3: Journey to the end of the Earth (ev3)
  if (
    id === 'ev3' ||
    (!id && (
      chapterLower === 'journey to the end of the earth' ||
      chapterLower.includes('journey to the end') ||
      chapterLower.includes('tishani doshi') ||
      chapterLower === 'ev3'
    ))
  ) {
    return `QUESTION: Q1. [2 Marks Short Answer, CBSE 2024 (Delhi)]
Why is Antarctica the perfect place to study the Earth's past, present, and future?
SOLUTION:
**Why Antarctica is Unique for Earth Study:**
- **Past:** Antarctica holds half-million-year-old carbon records trapped deep within its ancient ice layers, revealing the geological history of the supercontinent Gondwana.
- **Present:** Its pristine environment, devoid of human settlements, trees, or cities, allows scientists to observe climate change and ice-shelf collapses in real time.
- **Future:** Tracking the melting of Antarctic ice sheets provides direct evidence of global warming and rising sea levels that could flood coastlines worldwide.
**CBSE Marking Rubric:**
- 1 Mark for past carbon records and Gondwana history.
- 1 Mark for present pristine observation and future global warming impact.

QUESTION: Q2. [2 Marks Short Answer, CBSE 2023 (All India)]
What is the rationale behind Geoff Green including high school students in the "Students on Ice" program?
SOLUTION:
**Why Students on Ice Targets Youth:**
- High school students represent the future policymakers, scientists, and global citizens.
- At their age, they are receptive, eager to absorb, ready to learn, and most importantly, ready to **act** on climate emergencies.
- Providing them with first-hand experiential learning at Antarctica fosters lifelong environmental respect far more effectively than lecturing elderly, retired celebrities.
**CBSE Marking Rubric:**
- 1 Mark for students being the future policymakers ready to act.
- 1 Mark for experiential learning fostering genuine planetary stewardship.`;
  }

  // VISTAS 4: The Enemy (ev4)
  if (
    id === 'ev4' ||
    (!id && (
      chapterLower === 'the enemy' ||
      chapterLower.includes('the enemy') ||
      chapterLower.includes('pearl s. buck') ||
      chapterLower.includes('dr. sadao') ||
      chapterLower === 'ev4'
    ))
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

QUESTION: Q2. [2 Marks Short Answer, CBSE 2023 (Delhi)]
Why did General Takima not take punitive action against Dr. Sadao for harboring an American prisoner of war?
SOLUTION:
**General Takima's Selfish Inaction:**
- General Takima was in delicate health, suffering from a chronic cardiac ailment that might require emergency surgery at any moment.
- He trusted no other surgeon in Japan besides Dr. Sadao.
- If Sadao were arrested and executed for treason, the General's own life would be placed in mortal jeopardy. Hence, he protected Sadao out of selfish self-preservation.
**CBSE Marking Rubric:**
- 1 Mark for the General's poor health and need for Sadao's surgical expertise.
- 1 Mark for self-preservation trumping patriotic duty.`;
  }

  // VISTAS 5: On the Face of It (ev5)
  if (
    id === 'ev5' ||
    (!id && (
      chapterLower === 'on the face of it' ||
      chapterLower.includes('face of it') ||
      chapterLower.includes('susan hill') ||
      chapterLower.includes('mr. lamb') ||
      chapterLower === 'ev5'
    ))
  ) {
    return `QUESTION: Q1. [2 Marks Short Answer, CBSE 2024 (Delhi)]
How does Mr. Lamb try to overcome his physical disability and loneliness in 'On the Face of It'?
SOLUTION:
**Mr. Lamb's Strategy to Overcome Loneliness:**
- Despite having a tin leg (lost in a bomb blast during the war), Mr. Lamb embraces a deeply positive, philosophical attitude towards life.
- He keeps his house doors and windows wide open with no curtains, inviting everyone into his garden.
- He spends his days plucking crab apples, preparing jelly, reading books, listening to bees singing, and engaging passers-by in uplifting conversations, refusing to harbor bitterness or self-pity.
**CBSE Marking Rubric:**
- 1 Mark for mentioning open garden gates, jelly making, and reading.
- 1 Mark for highlighting his positive mindset and refusal of bitterness.

QUESTION: Q2. [5 Marks Long Answer, CBSE 2023 (All India)]
Compare and contrast Derry and Mr. Lamb with respect to their physical infirmities, attitudes towards life, and reactions to people's comments.
SOLUTION:
**1. Physical Disabilities:**
- Derry has one side of his face severely disfigured by acid; Mr. Lamb has a tin leg, his real leg having been blown off during the war.
**2. Contrasting Attitudes Towards Life:**
- **Derry (Bitter & Isolated):**
  * Derry suffers from an intense inferiority complex, self-hatred, and resentment.
  * He avoids society, believing people are terrified of his hideous face (*"a face only a mother could love"*).
  * He views the world with suspicion, withdrawing into defensive loneliness.
- **Mr. Lamb (Optimistic & Expansive):**
  * Lamb harbors zero bitterness. He celebrates life in all forms, finding beauty in weeds just as in flowers.
  * Although children taunt him as *"Lamey-Lamb"*, he laughs it off, saying it suits him.
  * He leaves his garden gates unlocked and welcomes all visitors.
**3. The Transformation:**
- Mr. Lamb teaches Derry that physical impairment does not define a person's worth. With two arms, two legs, eyes, ears, and a brain, Derry can achieve anything he sets his mind to.
- Derry's encounter with Lamb permanently dismantles his psychological isolation.
**CBSE Marking Rubric:**
- 2 Marks for comparing their physical infirmities (acid burn vs tin leg).
- 2 Marks for contrasting Derry's bitter isolation with Lamb's cheerful acceptance.
- 1 Mark for explaining how Lamb's philosophy transforms Derry.`;
  }

  // VISTAS 6: Memories of Childhood (ev6)
  if (
    id === 'ev6' ||
    (!id && (
      chapterLower === 'memories of childhood' ||
      chapterLower.includes('memories of childhood') ||
      chapterLower.includes('zitkala') ||
      chapterLower.includes('bama') ||
      chapterLower === 'ev6'
    ))
  ) {
    return `QUESTION: Q1. [2 Marks Short Answer, CBSE 2024 (Delhi)]
Why did Zitkala-Sa feel that she had lost her freedom and dignity after her hair was cut?
SOLUTION:
**Zitkala-Sa's Loss of Dignity:**
- In Zitkala-Sa's Native American culture, long hair was a mark of pride, honor, and bravery. Short, shingled hair was worn only by cowards captured in battle, and shorn hair by mourners.
- Having her long braids forcibly cut off represented cultural violation, forced subjugation, and humiliation, reducing her to *"one of many little animals driven by a herder"*.
**CBSE Marking Rubric:**
- 1 Mark for explaining cultural significance (short hair = cowards and mourners).
- 1 Mark for feeling stripped of identity and treated like an animal.

QUESTION: Q2. [5 Marks Long Answer, CBSE 2023 (All India)]
Analyze how Zitkala-Sa and Bama react to the social indignities and discrimination they experience in childhood. How does Bama's brother Annan show her the path to emancipation?
SOLUTION:
**1. Zitkala-Sa's Physical Rebellion Against Cultural Assimilation:**
- When told her long hair would be shingled at Carlisle Indian School, Zitkala-Sa refused to submit quietly.
- She hid under a bed in a dark upstairs room and fought violently, kicking and crying, when discovered.
- Although physically overpowered, her fierce defiance demonstrated an unbroken instinct for personal autonomy and indigenous cultural pride.
**2. Bama's Awakening to Caste Untouchability:**
- In the third grade, Bama saw an elderly village man carrying a packet of snacks by a string to prevent polluting the upper-caste landlord.
- Her initial amusement turned to indignation and fury when her brother Annan explained that caste discrimination denied them basic human dignity solely based on their birth.
**3. Annan's Path of Emancipation Through Education:**
- Annan offered visionary advice: *"Because we are born into this community, we are never given any honor or dignity. But if we study and make progress, we can throw away these indignities. Study with care, learn all you can, stand first in your class, and people will attach themselves to you."*
- Bama channeled her anger into relentless academic discipline, topped her class, and used writing to fight systemic caste oppression.
**CBSE Marking Rubric:**
- 2 Marks for analyzing Zitkala-Sa's physical resistance against cultural erasure.
- 2 Marks for Bama's discovery of untouchability and Annan's counsel on education.
- 1 Mark for synthesizing education as the universal antidote to discrimination.`;
  }

  return null;
}
