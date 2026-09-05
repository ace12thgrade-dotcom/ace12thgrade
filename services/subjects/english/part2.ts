// services/subjects/english/part2.ts
// Flamingo Poetry (efp1 to efp5) & Vistas Supplementary Reader (ev1 to ev6) & Full Revision (e_rev)
// Dedicated chapter notes strictly aligned with CBSE Class 12 English Core (301) NCERT Syllabus (2026-27).

export function getEnglishPart2Notes(chapterLower: string, chapterId?: string): string | null {
  const id = (chapterId || '').toLowerCase().trim();

  // FULL REVISION / MASTER REVISION
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
    return `TOPIC: CBSE Class 12 English Core Complete Master Revision Capsule (2026-27 Pattern)
Master Notebook Revision Book - Comprehensive high-yield synthesis covering Section A Reading strategies, Section B Writing blueprints, Flamingo Prose & Poetry devices, and Vistas thematic motifs.

**1. CBSE Question Paper Blueprint & Marking Weightage:**
- **Section A: Reading Skills (22 Marks):**
  * Q1: Discursive passage (12 Marks - 12 MCQs/Objective questions)
  * Q2: Case-based factual passage with graphical/tabular data (10 Marks - 10 MCQs/Objective questions)
- **Section B: Creative Writing Skills (18 Marks):**
  * Q3: Notice Writing (4 Marks, 50 words)
  * Q4: Formal / Informal Invitation or Reply (4 Marks, 50 words)
  * Q5: Letter to the Editor OR Job Application with Bio-Data (5 Marks, 120-150 words)
  * Q6: Article Writing OR Report Writing (5 Marks, 120-150 words)
- **Section C: Literature Textbooks & Supplementary Reading (40 Marks):**
  * Q7: RTC from Flamingo Poetry (6 × 1M = 6 Marks)
  * Q8: RTC from Vistas Prose (4 × 1M = 4 Marks)
  * Q9: RTC from Flamingo Prose (6 × 1M = 6 Marks)
  * Q10: 5 Short Answer Questions from Flamingo Prose & Poetry (5 × 2M = 10 Marks, 40-50 words)
  * Q11: 2 Short Answer Questions from Vistas (2 × 2M = 4 Marks, 40-50 words)
  * Q12: 1 Long Answer Thematic Question from Flamingo (5 Marks, 120-150 words)
  * Q13: 1 Long Answer Thematic Question from Vistas (5 Marks, 120-150 words)

**2. Complete Poetic Devices Bank for All Class 12 Poems:**
- **My Mother at Sixty-six (Kamala Das):**
  * *Simile:* \`"face ashen like that of a corpse"\`, \`"as a late winter's moon"\`.
  * *Personification / Metaphor:* \`"Trees sprinting"\`.
  * *Imagery:* \`"Merry children spilling out of their homes"\`.
  * *Repetition:* \`"smile and smile and smile..."\`.
- **Keeping Quiet (Pablo Neruda):**
  * *Metaphor:* \`"clean clothes"\` (adopting peaceful thoughts), \`"in the shade"\` (brotherhood).
  * *Alliteration:* \`"sudden strangeness"\`, \`"clean clothes"\`, \`"hurt hands"\`.
  * *Symbolism:* \`"Earth can teach us"\` (quiet introspection nurtures life).
- **A Thing of Beauty (John Keats):**
  * *Metaphor:* \`"bower quiet for us"\`, \`"flowery band"\`, \`"endless fountain of immortal drink"\`.
  * *Alliteration:* \`"noble natures"\`, \`"cooling covert"\`, \`"band to bind"\`.
  * *Oxymoron / Imagery:* \`"mighty dead"\`, \`"unhealthy and o'er-darkened ways"\`.
- **A Roadside Stand (Robert Frost):**
  * *Personification:* \`"a roadside stand that too pathetically pled"\`.
  * *Oxymoron:* \`"greedy good-doers"\`, \`"beneficent beasts of prey"\`.
  * *Transferred Epithet:* \`"polished traffic"\`, \`"selfish cars"\`.
- **Aunt Jennifer's Tigers (Adrienne Rich):**
  * *Metaphor:* \`"bright topaz denizens of a world of green"\`.
  * *Alliteration:* \`"fingers fluttering"\`, \`"prancing, proud"\`.
  * *Symbolism:* \`"Uncle's wedding band"\` (oppressive marriage); Tigers (fearless freedom); \`"Ringed with ordeals"\` (double meaning: encircled by hardships & wedding ring).

**3. Writing Formats Golden Checklist:**
- Notice: Must have 4-sided box, Organization name, NOTICE, Date, Title, 50-word body, Signatory.
- Job Application: Cover letter (3 paragraphs) + Detailed tabular Bio-Data with qualifications & 2 references.
- Letter to Editor: 3 paragraphs (Introduction -> Elaboration of public nuisance -> Remedial suggestions).`;
  }

  // POEM 1: My Mother at Sixty-six (Kamala Das)
  if (
    id === 'efp1' ||
    (!id && (
      chapterLower === 'my mother at sixty-six' ||
      chapterLower.includes('mother at sixty') ||
      chapterLower.includes('kamala das') ||
      chapterLower === 'efp1'
    ))
  ) {
    return `TOPIC: Flamingo Poem 1: My Mother at Sixty-six (Kamala Das)
Master Notebook Notes - Strictly aligned with CBSE Class 12 English Core (301) NCERT Syllabus (2026-27).

**1. Central Theme & Emotional Core:**
- Fear of loss, separation anxiety, the agony of parental aging, and the complex psychological bond between an adult daughter and her aging mother.
- Written in a single unbroken sentence punctuated by commas, reflecting the continuous flow of thought and anxiety.

**2. Narrative Arc & Juxtaposition:**
- **The Drive to Cochin:** The poet is driving from her ancestral home to the Cochin airport on Friday morning with her mother sitting beside her.
- **The Initial Shock:** Looking at her mother, who is dozing with her mouth open, her face pale and drained of color: *"face ashen like that of a corpse"*.
- **The Psychological Escape (Contrast):** To banish the terrifying realization of her mother's mortality, the poet looks outside the car window:
  * *"Young Trees sprinting"*: Symbol of youth, rapid passage of time, dynamic vigor.
  * *"Merry children spilling out of their homes"*: Symbol of exuberance, vitality, beginning of life.
  * Dramatic contrast: Vibrant life outside vs decay and approaching death inside the car.

**3. The Airport Scene & The Late Winter's Moon:**
- At the airport security check, standing a few yards away, the poet gazes at her mother once again:
  * Compared to a *"late winter's moon"*: Dim, pale, shrouded in mist, lacking warmth and luster.
- Awakens that *"old familiar ache, my childhood's fear"* (the primal terror of losing her mother).

**4. The Facade of Hope (Resolution):**
- Parting words: *"See you soon, Amma"* - a verbal effort to give optimism to both mother and daughter.
- Physical reaction: *"All I did was smile and smile and smile..."* - a mask of composure to hide tears and emotional devastation.

**5. Comprehensive Poetic Devices & Examination Bank:**
- **Simile:**
  * *"face ashen like that of a corpse"* (comparison of mother's pallor to a dead body).
  * *"wan, pale as a late winter's moon"* (comparison of faded vitality to the dim moon).
- **Personification / Metaphor:** *"Trees sprinting"* (youthful energy rushing past).
- **Imagery:** *"Merry children spilling out of their homes"* (effervescence of youth).
- **Repetition:** *"smile and smile and smile..."* (underscores prolonged psychological effort to maintain composure).
- **Tone:** Melancholic, nostalgic, poignant, restrained grief.`;
  }

  // POEM 2: Keeping Quiet (Pablo Neruda)
  if (
    id === 'efp2' ||
    (!id && (
      chapterLower === 'keeping quiet' ||
      chapterLower.includes('keeping quiet') ||
      chapterLower.includes('pablo neruda') ||
      chapterLower === 'efp2'
    ))
  ) {
    return `TOPIC: Flamingo Poem 2: Keeping Quiet (Pablo Neruda)
Master Notebook Notes - Strictly aligned with CBSE Class 12 English Core (301) NCERT Syllabus (2026-27).

**1. Central Theme & Global Message:**
- Universal brotherhood, peace, self-introspection, cessation of war and ecological destruction, and spiritual rejuvenation through silence.
- Originally written in Spanish by Nobel laureate Pablo Neruda.

**2. The Call for Twelve Seconds of Stillness:**
- Counting to twelve (representing 12 hours on a clock face or 12 months of the year; a symbol of completeness).
- Cessation of speech in all languages: Language barriers create conflict, misunderstanding, and division.
- Stop moving arms: Arm has a double meaning (physical limbs and military weapons/armaments).

**3. The "Exotic Moment":**
- A rare moment *"without rush, without engines"*: Humanity steps off the endless wheel of frantic materialism.
- Everyone united in a *"sudden strangeness"*, rediscovering mutual empathy and kinship.

**4. Ecological & Humanitarian Respite:**
- **Fishermen in the cold sea:** Would stop hunting whales (end of environmental exploitation).
- **Man gathering salt:** Would pause and look at his *"hurt hands"* (realizing how cut-throat labor inflicts personal self-harm).
- **End to Wars:** Wars of all kinds—green wars against nature, chemical gas wars, wars with fire.
  * *"Victory with no survivors"*: Military victory is futile if no human beings remain alive to enjoy it.
  * Soldiers would put on *"clean clothes"* (shed bloodstained uniforms and hostility) and walk with their brothers *"in the shade, doing nothing"*.

**5. Clarification: Stillness is Not Death:**
- Neruda explicitly clarifies: *"What I want should not be confused with total inactivity. Life is what it is about; I want no truck with death."*
- Life is dynamic; quiet introspection is not lazy paralysis or suicide.
- **The Earth as Supreme Teacher:**
  * Nature demonstrates that in winter, seeds appear dormant and dead under snow, but secretly nurture life, blooming in spring.
  * Stillness is the essential soil for creative rejuvenation and peace.

**6. Poetic Devices & Keywords:**
- **Metaphor:** *"clean clothes"* (adopting a peaceful outlook), *"in the shade"* (brotherhood).
- **Alliteration:** *"sudden strangeness"*, *"clean clothes"*, *"hurt hands"*, *"wars with"*.
- **Symbolism:** *"Earth can teach us"*, *"count to twelve"*.
- **Pun:** *"arms"* (body parts / weapons).`;
  }

  // POEM 3: A Thing of Beauty (John Keats)
  if (
    id === 'efp3' ||
    (!id && (
      chapterLower === 'a thing of beauty' ||
      chapterLower.includes('thing of beauty') ||
      chapterLower.includes('john keats') ||
      chapterLower.includes('endymion') ||
      chapterLower === 'efp3'
    ))
  ) {
    return `TOPIC: Flamingo Poem 3: A Thing of Beauty (John Keats)
Master Notebook Notes - Strictly aligned with CBSE Class 12 English Core (301) NCERT Syllabus (2026-27).

**1. Romantic Philosophy & Literary Context:**
- Opening excerpt from Keats's epic poem *Endymion: A Poetic Romance* (1818).
- Central Tenet: True beauty possesses transcendent, eternal power that permanently uplifts human consciousness and heals psychic despair (*"Beauty is truth, truth beauty"*).

**2. The Immortality of Beauty:**
- *"A thing of beauty is a joy forever / Its loveliness increases; it will never / Pass into nothingness."*
- Unlike physical objects that decay, a genuine experience of beauty leaves an indelible imprint on the human soul that compounds joy over time.
- Serves as a *"bower quiet for us"*—a tranquil sanctuary granting peaceful sleep filled with sweet dreams, health, and quiet breathing.

**3. Human Despair vs. Spiritual Healing:**
- The human condition is plagued by:
  * Despondence, noble natures in short supply, dark days, unhealthy and over-darkened ways.
- Despite this pervasive darkness, *"some shape of beauty moves away the pall / From our dark spirits"*.

**4. Catalog of Beautiful Objects (Keats's Romantic Tapestry):**
- **Cosmic:** The Sun, the Moon.
- **Vegetal:** Trees old and young, sprouting a shady boon for simple sheep (symbol of innocent life/Christ).
- **Floral & Aquatic:** Daffodils blooming amidst the green world; clear rills (crystal-clear streams) cooling the hot season.
- **Forest Blooms:** Mid-forest brake rich with the sprinkling of fair musk-rose blooms.
- **Artistic & Historical:**
  * The grandeur of the dooms imagined for the **"mighty dead"** (sublime heroic legends).
  * All lovely tales that we have read or heard.
- **The Ultimate Metaphor:**
  * Beauty is an *"endless fountain of immortal drink, / Pouring unto us from the heaven's brink"*, a divine elixir granted to mortals.

**5. Poetic Devices:**
- **Metaphor:** *"bower quiet"*, *"flowery band to bind us"*, *"endless fountain of immortal drink"*.
- **Alliteration:** *"noble natures"*, *"cooling covert"*, *"band to bind"*.
- **Imagery:** *"musk-rose blooms"*, *"clear rills"*, *"daffodils with the green world"*.
- **Oxymoron:** *"mighty dead"* (glory associated with departed ancestors).`;
  }

  // POEM 4: A Roadside Stand (Robert Frost)
  if (
    id === 'efp4' ||
    (!id && (
      chapterLower === 'a roadside stand' ||
      chapterLower.includes('roadside stand') ||
      chapterLower.includes('robert frost') ||
      chapterLower === 'efp4'
    ))
  ) {
    return `TOPIC: Flamingo Poem 4: A Roadside Stand (Robert Frost)
Master Notebook Notes - Strictly aligned with CBSE Class 12 English Core (301) NCERT Syllabus (2026-27).

**1. Socioeconomic Context & Central Theme:**
- Contrast between affluent urban elites and struggling rural peasants; callous commercialism vs human survival.
- Robert Frost critiques the hollow promises of politicians and philanthropic agencies that exploit rural vulnerability.

**2. The Stand and its Piteous Plea:**
- A small new shed built beside the highway by a poor farmer's cottage.
- Pleading not for a dole of bread or charity, but for a share of **city money**—the currency that sustains city economies.
- Offering wild berries in wooden quarts and crook-necked golden squash with silver warts.

**3. The Callous Urban Travelers ("Polished Traffic"):**
- Sleek cars speed past with eyes fixed straight ahead.
- If they ever stop, it is only to express annoyance:
  * Complaining that the crude paint of the signs marred the scenic mountain landscape.
  * Irritated that N turned wrong and S turned wrong.
  * Stopping to ask directions, make a U-turn (tearing up the grass), or ask for a gallon of gas (which the shed obviously doesn't sell).

**4. The Exploitation of "Greedy Good-Doers":**
- News reports announce that these poor folk will be bought out and relocated to villages next to the theater and store, where they won't have to think for themselves.
- Frost exposes these benefactors as **"greedy good-doers, beneficent beasts of prey"**:
  * Calculating politicians and pseudo-social workers who swarm over their lives to enforce benefits that lull the villagers into passive dependence, destroying their ancient habits of hard work and self-reliance.

**5. Frost's Personal Anguish & Resolution:**
- Frost confesses he can hardly bear the sorrow: the *"childish longing in vain"* of the poor farmers sitting by the open window all day, praying for the squeal of brakes.
- In a moment of acute pain, Frost imagines putting these suffering people out of their misery at one stroke, but promptly recants, realizing the cruelty of such an impulse.

**6. Poetic Devices:**
- **Personification:** *"a roadside stand that too pathetically pled"*.
- **Oxymoron:** *"greedy good-doers"*, *"beneficent beasts of prey"*.
- **Transferred Epithet:** *"polished traffic"* (the people inside the cars are polished), *"selfish cars"*.
- **Alliteration:** *"gallon of gas"*, *"greedy good-doers"*.`;
  }

  // POEM 5: Aunt Jennifer's Tigers (Adrienne Rich)
  if (
    id === 'efp5' ||
    (!id && (
      chapterLower === "aunt jennifer's tigers" ||
      chapterLower.includes('aunt jennifer') ||
      chapterLower.includes('adrienne rich') ||
      chapterLower === 'efp5'
    ))
  ) {
    return `TOPIC: Flamingo Poem 5: Aunt Jennifer's Tigers (Adrienne Rich)
Master Notebook Notes - Strictly aligned with CBSE Class 12 English Core (301) NCERT Syllabus (2026-27).

**1. Feminist Subtext & Thematic Tenets:**
- Patriarchal oppression, loss of female autonomy in orthodox marriage, and art as an enduring instrument of defiance and immortality.
- Contrast between the terrified, subjugated creator and the fearless, magnificent creatures she creates on tapestry.

**2. Stanza-by-Stanza Master Breakdown:**
- **Stanza 1: The Magnificent Tigers:**
  * *"Aunt Jennifer's tigers prance across a screen / Bright topaz denizens of a world of green."*
  * Tigers represent absolute fearlessness, majestic grace, chivalry, and regal pride.
  * They do not fear the men beneath the tree; they pace in *"sleek chivalric certainty"*.
- **Stanza 2: The Crushed Creator:**
  * *"Aunt Jennifer's fingers fluttering through her wool / Find even the ivory needle hard to pull."*
  * Her trembling fingers reveal physical frailty and deep-rooted psychological trauma.
  * *"The massive weight of Uncle's wedding band / Sits heavily upon Aunt Jennifer's hand."*
  * The wedding band (circle of gold) symbolizes patriarchal dominance, marital subjugation, and domestic entrapment that crushed her spirit.
- **Stanza 3: Death and Artistic Immortality:**
  * *"When Aunt is dead, her terrified hands will lie / Still ringed with ordeals she was mastered by."*
  * Even in death, she will not be truly free; the physical mark of her servitude endures.
  * Yet her art survives: *"The tigers in the panel that she made / Will go on prancing, proud and unafraid."*
  * Her suppressed longing for liberty outlives mortal oppression through the immortal permanence of art.

**3. Poetic Devices & Symbolism Bank:**
- **Symbolism:**
  * *Tigers:* Freedom, courage, wild power, fearless spirit.
  * *Topaz:* Rich golden-yellow brilliance against the emerald jungle.
  * *Wedding Band:* Matrimonial bondage, patriarchal subjugation.
  * *Ringed:* Encircled by hardships and literally wearing the wedding ring.
- **Alliteration:** *"fingers fluttering"*, *"prancing, proud"*.
- **Contrast / Juxtaposition:** Fluttering terrified hands vs fearless prancing tigers.`;
  }

  // VISTAS 1: The Third Level (Jack Finney)
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
    return `TOPIC: Vistas Chapter 1: The Third Level (Jack Finney)
Master Notebook Notes - Strictly aligned with CBSE Class 12 English Core (301) NCERT Syllabus (2026-27).

**1. Genre, Context & Central Theme:**
- Science fiction and psychological mystery exploring **escapism** from the anxieties, wars, insecurities, and stress of modern life.
- Explores the intersection of time travel, psychological wish-fulfillment, and nostalgic romanticism for the 1890s.

**2. Charley's Experience at Grand Central Station:**
- **Charley:** 31-year-old ordinary New York commuter wearing a tan gabardine suit and straw hat.
- Grand Central Station has only **two levels** (Level 1 for regular trains, Level 2 for suburban trains).
- Charley compares Grand Central to a growing tree, constantly pushing out new tunnels and corridors like roots.
- Taking an angled tunnel, Charley stumbles upon the non-existent **Third Level**.

**3. Atmosphere of the Year 1894:**
- Smaller room with fewer ticket windows, open-flame flickering gas lights, brass spittoons on the floor.
- People dressed in 1890s fashion: Derby hats, black four-button suits with tiny lapels, elaborate handlebar moustaches, pocket watches pulled from vest pockets.
- Locomotive: Currier & Ives miniature locomotive with a funnel-shaped stack.
- The Newspaper: A copy of *The World*, a paper discontinued years ago, with the lead story about President Cleveland, bearing date **June 11, 1894**.

**4. The Failed Ticket Purchase & The Psychiatric Diagnosis:**
- Charley attempts to buy two tickets to **Galesburg, Illinois** (idyllic town with big old frame houses, huge lawns, peaceful pre-World War I summer evenings).
- Clerk notices modern currency notes, accuses Charley of attempting fraud (*"That ain't money, mister"*), threatening arrest. Charley flees.
- **Sam Weiner (The Psychiatrist):**
  * Diagnoses Charley's experience as a *"waking-wish fulfillment"*.
  * Attributes it to modern anxiety and insecurity; equates Charley's stamp collection (philately) to a temporary refuge from reality.

**5. The Ironical Twist (Sam's Disappearance):**
- Sam Weiner mysteriously disappears.
- While examining his grandfather's first-day stamp covers, Charley discovers a letter postmarked **July 18, 1894**, mailed to his grandfather's address in Galesburg.
- The letter is from **Sam Weiner himself**, confirming the Third Level exists, describing Galesburg's peaceful music and lemonade parties, and urging Charley and Louisa to keep looking until they find it!
- Charley discovers Sam had bought eight hundred dollars' worth of old-style currency to set up a hay, feed, and grain business in 1894.

**6. High-Yield CBSE Pointers:**
- What did Charley's psychiatrist friend say about the Third Level?
- Describe the visual differences between the Second and Third Levels of Grand Central.
- Explain the significance of the first-day cover sent by Sam.`;
  }

  // VISTAS 2: The Tiger King (Kalki)
  if (
    id === 'ev2' ||
    (!id && (
      chapterLower === 'the tiger king' ||
      chapterLower.includes('tiger king') ||
      chapterLower.includes('kalki') ||
      chapterLower.includes('jilani jung jung bahadur') ||
      chapterLower === 'ev2'
    ))
  ) {
    return `TOPIC: Vistas Chapter 2: The Tiger King (Kalki)
Master Notebook Notes - Strictly aligned with CBSE Class 12 English Core (301) NCERT Syllabus (2026-27).

**1. Literary Style & Satirical Premise:**
- Political and social satire exposing the vanity, ruthlessness, and sheer folly of autocratic rulers during the British colonial era in India.
- Dramatic irony: Human attempts to alter predetermined destiny only seal the fate they strive to escape.

**2. The Infant Prince & The Prophecy:**
- Crown Prince of Pratibandapuram: **Maharaja Jilani Jung Jung Bahadur**.
- At just **10 days old**, the prince miraculously speaks, questioning the Royal Astrologer.
- Astrologer predicts: Born under the hour of the Bull, the Bull and Tiger are enemies, hence his death will come from a **tiger**.
- The infant prince issues an ominous growl: *"Let tigers beware!"*

**3. The Royal Upbringing & The Tiger Hunt:**
- Brought up like British-educated princes: Drank milk of English cows, tutored by Englishmen, watched English films.
- Crowned king at age 20; promptly bans tiger hunting across the kingdom for everyone except himself.
- Astrologer warns: He may kill 99 tigers safely, but must be exceedingly wary of the **hundredth tiger**.

**4. The Quest for 100 Tigers:**
- Kills 70 tigers in Pratibandapuram until the tiger population goes extinct.
- Marries a princess from a neighboring princely state with the highest tiger forest population, killing 5-6 tigers on every visit to reach **99 tigers**.
- **The Missing Hundredth Tiger:**
  * Only one tiger remaining, but none can be found. Maharaja becomes frantic, doubles land taxes, and threatens to dismiss the Dewan.
  * Desperate Dewan secretly transports an old, frail circus tiger from Madras People's Park and releases it in the forest.
  * Maharaja shoots the beast, which collapses; the king departs in triumph.
  * **The Twist:** The Maharaja's bullet had missed; the ancient beast had merely fainted from the shock of the gunshot! The forest guards secretly shoot it dead to protect their jobs.

**5. The Dramatic Irony of Death:**
- On his son's 3rd birthday, the Maharaja buys a crudely carved **wooden toy tiger** from a local shop.
- Playing with his son, a sharp wooden sliver pierces the Maharaja's right hand.
- The puncture turns into a suppurating sore; infection spreads through the entire arm.
- Three renowned surgeons operate, but emerge announcing: *"The operation was successful. The Maharaja is dead."*
- In this grotesque and ironic fashion, the **hundredth tiger took its ultimate revenge** upon the Tiger King.

**6. High-Yield CBSE Pointers:**
- Analyze the dramatic irony in the story's climax.
- How does Kalki satirize the relationship between British officers and Indian Maharajas (the British officer who wanted to be photographed with a dead tiger)?
- How did the Maharaja manage to keep his throne after refusing the British officer?`;
  }

  // VISTAS 3: Journey to the end of the Earth (Tishani Doshi)
  if (
    id === 'ev3' ||
    (!id && (
      chapterLower === 'journey to the end of the earth' ||
      chapterLower.includes('journey to the end') ||
      chapterLower.includes('tishani doshi') ||
      chapterLower.includes('antarctica') ||
      chapterLower === 'ev3'
    ))
  ) {
    return `TOPIC: Vistas Chapter 3: Journey to the end of the Earth (Tishani Doshi)
Master Notebook Notes - Strictly aligned with CBSE Class 12 English Core (301) NCERT Syllabus (2026-27).

**1. Geographical Setting & Travelogue Nature:**
- Author: Tishani Doshi, journeying aboard the Russian research vessel *Akademik Shokalskiy*.
- Destination: **Antarctica**, the coldest, driest, and windiest continent on Earth.
- Journey covered 9 time zones, 6 checkpoints, 3 bodies of water, and at least as many ecospheres.

**2. Geological History - The Supercontinent Gondwana:**
- **650 million years ago:** A giant, amalgamated southern supercontinent called **Gondwana** existed, centered roughly around present-day Antarctica.
- Climate was warm, supporting a vast flora and fauna before mammals existed.
- When dinosaurs were wiped out and the age of mammals began, the landmass fractured into separate landmasses, shaping the globe as we know it today (India crashed northward into Asia to buckle its crust and form the Himalayas; South America drifted off to join North America, opening the Drake Passage to create a cold circumpolar current).

**3. Ecological Significance of Antarctica:**
- Holds **90 percent of the Earth's total ice volumes**.
- Pristine environment devoid of human trees, billboards, buildings, or urban interference; a surreal expanse of 24-hour austral summer light.
- Microcosm of climatic history: Deep ice-core records contain **half-million-year-old carbon records** trapped in its layers.

**4. "Students on Ice" Educational Program:**
- Founded and led by Canadian **Geoff Green**.
- Takes high school students to Antarctica to foster environmental stewardship and respect for the planet.
- **Why Students?** Teenagers are the future policy-makers and absorb, learn, and act upon empirical evidence far more proactively than jaded, retired celebrities.

**5. Microscopic Phytoplankton & Global Warming Warning:**
- Microscopic single-celled grasses of the Southern Ocean that utilize solar energy to assimilate carbon and synthesize organic compounds through photosynthesis.
- Phytoplankton form the foundational basis of the entire Southern Ocean marine food chain.
- Depletion of the atmospheric ozone layer threatens phytoplankton activity, risking catastrophic disruption to all marine life and the global carbon cycle.
- **Epigrammatic Parable:** *"Take care of the small things and the big things will fall into place."*

**6. High-Yield CBSE Pointers:**
- Why is Antarctica the best place to study the Earth's past, present, and future?
- What is the philosophy behind Geoff Green's "Students on Ice" program?
- Explain the significance of phytoplankton in the context of global warming.`;
  }

  // VISTAS 4: The Enemy (Pearl S. Buck)
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
    return `TOPIC: Vistas Chapter 4: The Enemy (Pearl S. Buck)
Master Notebook Notes - Strictly aligned with CBSE Class 12 English Core (301) NCERT Syllabus (2026-27).

**1. Historical Setting & Ethical Conflict:**
- Setting: Coastal Japan during the height of **World War II**.
- Central Dilemma: Professional medical ethics and universal humanitarian compassion vs national loyalty and wartime patriotism.

**2. Key Characters & Domestic Sphere:**
- **Dr. Sadao Hoki:** Renowned Japanese surgeon and scientist working on a discovery to render wounds entirely clean. Kept in Japan because the ailing General Takima might require an emergency operation.
- **Hana:** Sadao's wife, whom he met in America but married only after confirming she was pure Japanese, respecting his traditional father.
- **The Household Servants (Yumi, Gardener, Cook):** Superstitious, fiercely loyal to ancestral nationalism; consider harboring a white man a grave sin. Yumi flatly refuses to wash the American soldier.

**3. The Discovery & Ethical Choice:**
- A battered, bleeding white man washes ashore on the rocks near Sadao's seaside house.
- Discovered to be an escaped American Navy POW, **Tom** (shot in the back, tortured).
- Sadao and Hana recognize that returning him to the sea or turning him over means certain execution.
- Driven by the **Hippocratic oath**, Sadao brings him into the house. Hana washes the filthy soldier herself and assists during the surgery by administering ether.
- Sadao skillfully extracts the bullet lodged near the kidney, nursing the soldier back to life.

**4. The Servants' Revolt & General Takima's Self-Absorption:**
- On the seventh day, the servants pack their belongings and leave in protest.
- Sadao reports the presence of the American prisoner to **General Takima**:
  * The General promises to send his private assassins to quietly kill the prisoner and dispose of his body.
  * For three sleepless nights, Sadao waits in terror, but no assassins arrive. The General, consumed by his own health crisis, had forgotten his promise!

**5. The Escape & The Humanist Epiphany:**
- Realizing the perpetual danger, Sadao equips Tom with a sturdy boat, food, water, quilts, and a flashlight.
- Instructs him to row to an uninhabited island nearby and signal two flashes at sunset if he runs out of food, waiting for a Korean fishing boat.
- Tom escapes safely.
- Looking out across the sea at twilight, Sadao contemplates his experiences in America: prejudice he faced as an Asian student, and wonders:
  *"I wonder why I could not kill him."*
- Proves that universal human empathy transcends geopolitical enmity.

**6. High-Yield CBSE Pointers:**
- Analyze Dr. Sadao's internal conflict between duty as a doctor and duty as a Japanese citizen.
- How does Hana's character shine during the crisis?
- Why did the General not take action against Dr. Sadao?`;
  }

  // VISTAS 5: On the Face of It (Susan Hill)
  if (
    id === 'ev5' ||
    (!id && (
      chapterLower === 'on the face of it' ||
      chapterLower.includes('face of it') ||
      chapterLower.includes('susan hill') ||
      chapterLower.includes('mr. lamb') ||
      chapterLower.includes('derry') ||
      chapterLower === 'ev5'
    ))
  ) {
    return `TOPIC: Vistas Chapter 5: On the Face of It (Susan Hill)
Master Notebook Notes - Strictly aligned with CBSE Class 12 English Core (301) NCERT Syllabus (2026-27).

**1. Dramatic Premise & Psychological Core:**
- One-act play exploring the devastating psychological isolation, inferiority complex, and societal alienation experienced by physically disabled individuals.
- Themes: The contrast between physical impairment and emotional impairment; the power of empathetic mentorship to dismantle bitterness.

**2. The Contrasting Protagonists:**
- **Derry (Derek, 14 years old):**
  * One side of his face was destroyed by **acid**.
  * Deeply withdrawn, suspicious, hypersensitive to public stares and callous remarks (*"A face only a mother could love"*).
  * Believes the world hates him; climbs into Mr. Lamb's garden not to steal apples, but to find an empty sanctuary.
- **Mr. Lamb (Elderly Gentleman):**
  * Has a **tin leg**; real leg blown off in the war years ago.
  * Neighborhood children mock him as *"Lamey-Lamb"*, but he refuses to be hurt.
  * Keeps the garden gate unlocked and windows uncurtained, welcoming all visitors.
  * Spends his time plucking crab apples, boiling jelly, reading books in the sunlight, and listening to the wind and bees.

**3. Mr. Lamb's Philosophies & Transformative Dialogue:**
- **Weeds vs. Flowers:** Lamb points out: *"A weed is green, growing life, just like a flower. Why call one a weed and another a flower? It's all life."*
- **Beauty and the Beast Parable:** Discusses the classic tale; Derry bitterly retorts that the beast didn't change into a prince because no handsome princess would ever kiss him, only his mother on the unburned side of his face.
- **The Timid Man Parable:** Tells Derry about a man who locked himself in a room for fear of fatal accidents (being hit by a bus, slipping on a banana peel), only to have a picture fall off the wall and kill him!
- **Selective Perception:** *"You have two arms, two legs, eyes, ears, a tongue, and a brain. You'll get on the way you want, like the rest."*

**4. The Climax & Tragic Irony:**
- Derry is deeply inspired and promises to return after informing his mother.
- Despite his mother's harsh objections, Derry asserts his agency and runs back to Lamb's garden.
- He arrives only to discover Mr. Lamb has fallen from his ladder while plucking apples; Mr. Lamb lies motionless on the grass.
- Derry weeps over his dead mentor, but Derry's spirit is permanently healed and freed from bitterness.

**5. High-Yield CBSE Pointers:**
- How does Mr. Lamb's attitude towards his disability differ from Derry's?
- What arguments does Derry make about people's fake sympathy?
- Why did Derry insist on going back to Mr. Lamb's garden despite his mother's warning?`;
  }

  // VISTAS 6: Memories of Childhood (Zitkala-Sa & Bama)
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
    return `TOPIC: Vistas Chapter 6: Memories of Childhood (Zitkala-Sa & Bama)
Master Notebook Notes - Strictly aligned with CBSE Class 12 English Core (301) NCERT Syllabus (2026-27).

**1. Autobiographical Context & Unifying Theme:**
- Two autobiographical episodes by two marginalized women from opposite sides of the globe:
  * **Part I:** Zitkala-Sa (Gertrude Simmons Bonnin), a Native American writer resisting racial and cultural assimilation.
  * **Part II:** Bama (Faustina Mary Fatima Rani), a Tamil Dalit writer combating caste discrimination and untouchability.
- Common Theme: Rebellion against oppression, preservation of dignity, and the power of knowledge/education as an instrument of liberation.

**2. Part I: "The Cutting of My Long Hair" (Zitkala-Sa):**
- **Setting:** Carlisle Indian Industrial School, Pennsylvania.
- **Cultural Shock:**
  * Harsh clangor of breakfast bells, rigid military regimentation, tight-fitting uncomfortable clothes, squeaking shoes, loss of native blanket.
  * Eating by formula: Two bell rings to pull chairs, sit, pray, and finally eat.
- **The Traumatic Hair Cutting:**
  * Friend Judewin warns her: The authorities plan to cut their long, thick hair.
  * Cultural Meaning: In Native American tradition, shingled hair was worn only by **cowards** captured in war, and short hair by mourners. Skilled warriors wore long hair.
  * Zitkala-Sa rebels: Hides in a dark, cold corner under a bed in an upstairs room.
  * Dragged out, tied fast in a chair; she cried out, shaking her head until she felt the cold scissors gnaw off her thick braids.
  * Lost her spirit: *"Now I was only one of many little animals driven by a herder."*

**3. Part II: "We Too Are Human Beings" (Bama):**
- **Setting:** A rural Tamil village; Bama is in the third grade.
- **The Innocence of Childhood:**
  * Takes 30 to 45 minutes to walk a 10-minute distance home from school because she stops to watch street performances, monkey shows, snake charmers, coffee shops, and temple festivals.
- **The Incident of Untouchability:**
  * Sees an elderly, respected man from her community walking with a small parcel containing green banana vadai.
  * The elder holds the packet by its string without touching the parcel, bowed subserviently before the upper-caste Naicker landlord.
  * Bama laughs at the comic sight, but brother Annan explains the bitter reality: The landlord is upper-caste; if the packet is touched by a Dalit, it will be polluted.
- **Annan's Advice on Education as Liberation:**
  * Annan tells her: Because we are born into this community, we are denied dignity and respect.
  * *"If we study hard, make academic progress, and rank first in our classes, people will attach themselves to us of their own accord. Throw yourself into your studies."*
  * Bama takes the advice deeply to heart, studies with fiery determination, and stands first in her class.

**4. High-Yield CBSE Pointers:**
- Compare how Zitkala-Sa and Bama react to discrimination (physical resistance vs intellectual excellence).
- What cultural significance did long hair hold for Zitkala-Sa?
- Explain Annan's philosophy on overcoming social stigma.`;
  }

  return null;
}
