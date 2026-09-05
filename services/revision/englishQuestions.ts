// services/revision/englishQuestions.ts
// CBSE Class 12 English Core Full Subject Revision Question Bank (Complete Syllabus)

import { RevisionQuestion } from './types.ts';

export const englishCategories = [
  'All Questions',
  'Most Repeated Questions',
  'Flamingo Prose & Poetry Long Answers',
  'Vistas Supplementary Questions',
  'Advanced Writing Skills (Notice, Letter, Article)',
  'Extract-Based Literature Questions',
  'Case-Based Reading & Comprehension',
  'Assertion & Reason',
  'High-Yield MCQs',
  '2-Mark & 3-Mark Questions',
  '5-Mark Long Questions'
];

export const englishQuestions: RevisionQuestion[] = [
  // 1. Flamingo Prose: The Last Lesson / 5-Mark Long Answer
  {
    id: 'eng-q1',
    questionNumber: 1,
    subjectId: 'english',
    chapterTitle: 'The Last Lesson (Flamingo)',
    chapterNumber: 1,
    category: 'Flamingo Prose & Poetry Long Answers',
    label: 'Frequently Asked',
    marks: '5 Marks',
    yearTag: 'CBSE 2024 (Delhi), 2023, 2020',
    question: `(a) "When a people are enslaved, as long as they hold fast to their language it is as if they had the key to their prison." Explain this statement in the context of Alphonse Daudet\'s story \'The Last Lesson\'.\n(b) How did Franz\'s feelings about M. Hamel and school undergo a drastic transformation on the day of the last French lesson?`,
    answer: {
      finalAnswer: 'Language is the badge of cultural identity and unity against imperial oppression; Franz moves from dread and indifference to remorse, intense respect, and patriotic awakening.',
      formulaOrConcept: `• Linguistic Imperialism / Chauvinism by Prussian invaders\n• Mother tongue as anchor of heritage, pride, and freedom\n• Franz\'s psychological transformation: procrastination replaced by poignant reverence`,
      solution: `(a) Significance of Language as "The Key to Their Prison":
• Context:
  In Alphonse Daudet's 'The Last Lesson', the Prussian conquerors defeated France in the Franco-Prussian War (1870-71) and issued an order from Berlin mandating that only German be taught in the schools of Alsace and Lorraine, brutally stripping the citizens of their mother tongue.
• Justification of M. Hamel's Words:
  1. Cultural Identity and Dignity: Language is not merely a vehicle of communication; it is the living repository of a nation's history, folklore, collective consciousness, and culture.
  2. Unifying Force: A shared mother tongue unites an enslaved community across social and generational divides.
  3. Mental Emancipation: While an imperial power can seize territory by military force, it cannot conquer minds so long as people preserve and cherish their language. To hold fast to one's mother tongue is to keep the spark of national pride and resistance alive, ensuring the ultimate regaining of sovereignty.

(b) Transformation of Franz\'s Feelings:
• Initial Attitude (Beginning of the Day):
  - Franz was terrified of M. Hamel's reprimand because he had not prepared the rules for participles.
  - He was tempted to skip school to enjoy the warm sunshine, chirping birds, and Prussian soldiers drilling.
  - He regarded books as cumbersome nuisances and viewed M. Hamel as a cranky, strict schoolmaster with an iron ruler.
• Drastic Shift on the Day of the Last Lesson:
  - When M. Hamel solemnly announced that this was their very last French lesson, Franz was overwhelmed by shock and remorse for having neglected his education.
  - His old grammar and history books suddenly felt like cherished friends he could not bear to abandon.
  - Franz forgot all of M. Hamel's crankiness and ruler, replaced by immense sympathy and respect for the dedicated master who had served the village faithfully for forty years.
  - He listened with rapt attention, realizing how beautiful and clear the French language was, and felt deeply ashamed of his past apathy.`,
      examApproach: 'Structure answer with clear thematic headings: Linguistic Chauvinism, Language as Custodian of Identity, and Franz\'s Emotional Metamorphosis.',
      markingPoints: [
        '2.5 Marks: Insightful analysis of linguistic chauvinism and language as the spiritual bastion of freedom.',
        '2.5 Marks: Detailed character contrast of Franz from reluctant truant to respectful, patriotic student.'
      ]
    }
  },

  // 2. Flamingo Poetry: Keeping Quiet (Pablo Neruda) / 5-Mark Long Answer
  {
    id: 'eng-q2',
    questionNumber: 2,
    subjectId: 'english',
    chapterTitle: 'Keeping Quiet (Flamingo Poetry)',
    chapterNumber: 3,
    category: 'Flamingo Prose & Poetry Long Answers',
    label: 'High Priority',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2023, 2019',
    question: `(a) What is the central theme of Pablo Neruda\'s poem \'Keeping Quiet\'?\n(b) Why does the poet advocate "counting to twelve" and keeping still? Clarify why he explicitly warns that his philosophy must NOT be confused with "total inactivity".\n(c) What symbol from nature does Neruda invoke to prove that stillness can nurture life?`,
    answer: {
      finalAnswer: 'Poem advocates mindful introspection, fraternity, and ecological harmony; stillness is NOT death/inactivity but conscious renewal; Earth symbolizes apparent stillness preserving vibrant life.',
      formulaOrConcept: `• Self-Introspection & Universal Brotherhood\n• Distinction: Stillness (conscious reflection) ≠ Total Inactivity (Death)\n• Symbol of Earth: Winter dormancy prepares spring blossoming`,
      solution: `(a) Central Theme of \'Keeping Quiet\':
Pablo Neruda's 'Keeping Quiet' is an eloquent plea for universal brotherhood, ecological mindfulness, and meditative self-introspection. The poet highlights that humanity's ceaseless, frantic haste, blind consumerism, and warmongering have estranged individuals from themselves, fractured communities, and wreaked havoc on nature. An interval of tranquil stillness enables humanity to reassess actions, heal wounds, and live in mutual harmony.

(b) Significance of Counting to Twelve & Stillness vs Total Inactivity:
• Counting to Twelve: Represents the twelve hours on a clock face or the twelve months of the year, symbolizing unity across time and global space. Pausing all speech and physical movement for a single collective moment suspends barriers of language, caste, and nationality, creating an "exotic moment" of spiritual togetherness.
• Distinction from Total Inactivity:
  - Neruda explicitly asserts: "I want no truck with death."
  - Total inactivity implies physical death, decay, and stagnation.
  - Neruda's silence is constructive, purposeful, and life-affirming. It is a mindful pause to reflect on the destructive consequences of human vanity (e.g. green wars, wars with gas, fishermen harming whales, salt gatherers injuring hands) so that humanity can resume living with newfound compassion and awareness.

(c) Symbol from Nature (The Earth):
• Neruda evokes the Earth as the ultimate teacher: "Perhaps the Earth can teach us as when everything seems dead and later proves to be alive."
• In winter, the Earth appears dormant, barren, and motionless, as if lifeless. Yet beneath the frozen soil, seeds quietly prepare for regeneration, erupting into lush vibrancy in spring.
• Thus, stillness is not extinction; it is the silent gestation of renewed vitality and creativity.`,
      examApproach: 'Always cite Neruda\'s famous line: "I want no truck with death" to emphasize that stillness is distinct from lethargy or mortality.',
      markingPoints: [
        '1.5 Marks: Clear explanation of themes of introspection and universal fraternity.',
        '2 Marks: Explicit differentiation between stillness and total inactivity with reference to death.',
        '1.5 Marks: Meaningful analysis of the Earth as a symbol of regenerative dormancy.'
      ]
    }
  },

  // 3. Vistas: The Tiger King / 5-Mark Long Answer
  {
    id: 'eng-q3',
    questionNumber: 3,
    subjectId: 'english',
    chapterTitle: 'The Tiger King (Vistas)',
    chapterNumber: 2,
    category: 'Vistas Supplementary Questions',
    label: 'Must Practice',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2022, 2018',
    question: `(a) How does Kalki use dramatic irony and sharp satire in \'The Tiger King\' to expose the vanity and hubris of arrogant rulers?\n(b) Describe the ultimate climax of the story. How did the hundredth tiger take its revenge upon the Tiger King?`,
    answer: {
      finalAnswer: 'Story satirizes autocratic whims, flattery in royal courts, and ruthless exploitation of wildlife; the Maharaja dies from an infection caused by a tiny wooden splinter from a toy tiger, fulfilling prophecy through cosmic irony.',
      formulaOrConcept: `• Satire on despotic authority and sycophancy of courtiers (Dewan)\n• Irony of fate: Escapes 99 wild tigers, killed by a cheap wooden toy\n• Retribution of nature against human arrogance`,
      solution: `(a) Satire and Dramatic Irony in \'The Tiger King\':
• Satire on Autocratic Power & Bureaucracy:
  - Kalki bitingly satirizes the eccentricities, self-indulgent whims, and ruthless arrogance of feudal monarchs under British rule.
  - The Maharaja of Pratibandapuram bans all tiger hunting in his kingdom for others and declares that anyone who even throws a stone at a tiger will have their property confiscated—all to fulfill his selfish ambition of defying astrology.
  - The sycophantic courtiers, particularly the trembling Dewan, cater blindly to the king\'s reckless obsessions rather than prioritizing the welfare of the subjects, exposing the moral bankruptcy of royal governance.
• Dramatic Irony:
  - The Maharaja boasts that he has slain ninety-nine tigers and celebrated his supposed victory over destiny.
  - In reality, the reader knows that his bullet missed the hundredth tiger (who merely fainted from the sound of the gunshot), and it was the cowardly hunters who secretly shot it to save their jobs. The Maharaja lives in false triumph while his doom remains unresolved.

(b) The Climax and Cosmic Revenge:
• Having celebrated his "hundredth tiger" kill, the Maharaja bought a wooden toy tiger as a birthday gift for his three-year-old son.
• The toy was carved crudely by an unskilled carpenter, with tiny slivers and splinters of wood protruding from its surface like quills.
• While playing with his prince, a sharp wooden splinter pierced the Maharaja\'s right hand.
• He pulled it out, but by the next day, a virulent, suppurating infection developed and spread across his entire right arm.
• Despite three renowned surgeons performing an operation, they stepped out of the theatre and announced: "The operation was successful. The Maharaja is dead."
• In this way, the hundredth tiger—not a ferocious wild beast, but an inanimate wooden carving—took its poetic and fatal revenge, proving that destiny cannot be cheated by human arrogance.`,
      examApproach: 'Contrast the king\'s pride in hunting fierce wild tigers with his pathetic death via a tiny wooden splinter.',
      markingPoints: [
        '2.5 Marks: Detailed examination of political satire, sycophancy of courtiers, and dramatic irony.',
        '2.5 Marks: Dramatic recounting of the wooden tiger incident, infection, and surgeon\'s ironic quote.'
      ]
    }
  },

  // 4. Advanced Writing Skills: Notice Writing (Format & Draft) / 4-Mark
  {
    id: 'eng-q4',
    questionNumber: 4,
    subjectId: 'english',
    chapterTitle: 'Writing Skills - Notice Writing',
    chapterNumber: 0,
    category: 'Advanced Writing Skills (Notice, Letter, Article)',
    label: 'Frequently Asked',
    marks: '4 Marks',
    yearTag: 'CBSE 2024 (Delhi), 2023',
    question: `You are Karan / Kiran, Secretary of the Cultural Club, St. Xavier\'s Senior Secondary School, Delhi. Your school is organizing an Inter-School Debate Competition on the topic "Artificial Intelligence: A Threat to Human Intellect or an Evolutionary Tool?". Draft a notice in not more than 50 words to be put up on the school notice board inviting interested students of Classes XI and XII to register. Include all essential details (date, time, venue, eligibility, and last date for submission of names). Put the notice in a box.`,
    answer: {
      finalAnswer: 'Properly formatted Notice in a closed box following official CBSE format (Name of Institution, NOTICE, Date, Heading, Body with 50 words limit, Signature/Name/Designation).',
      formulaOrConcept: `• CBSE Notice Format: 1 Mark (Box, School Name, NOTICE, Date, Heading, Signatory)\n• Content: 2 Marks (What, When, Where, Who, Last Date)\n• Expression: 1 Mark (Grammar, fluency, 50-word constraint)`,
      solution: `Notice Draft:

┌─────────────────────────────────────────────────────────────┐
│             ST. XAVIER'S SENIOR SECONDARY SCHOOL, DELHI     │
│                                                             │
│                          NOTICE                             │
│                                                             │
│ 15 September 2025                                           │
│                                                             │
│              INTER-SCHOOL DEBATE COMPETITION                │
│                                                             │
│ All students of Classes XI and XII are hereby informed that │
│ our school is organizing an Inter-School Debate Competition │
│ on 5th October 2025 at 10:00 AM in the Main Auditorium.     │
│                                                             │
│ Topic: "Artificial Intelligence: A Threat to Human          │
│ Intellect or an Evolutionary Tool?"                         │
│                                                             │
│ Interested students should submit their names to the        │
│ undersigned latest by 25th September 2025. Auditions will   │
│ be conducted on 28th September 2025 during the zero period.  │
│                                                             │
│ Kiran Sharma                                                │
│ Secretary, Cultural Club                                    │
└─────────────────────────────────────────────────────────────┘`,
      examApproach: 'Always draw a rectangular box around the notice using a pencil/ruler. Ensure word count does not exceed 50 words.',
      markingPoints: [
        '1 Mark: Standard CBSE format with box, issuing authority, NOTICE, date, heading, and designation.',
        '2 Marks: Complete essential details (date, time, venue, topic, target classes, deadline).',
        '1 Mark: Grammatical accuracy, vocabulary, and adherence to 50-word limit.'
      ]
    }
  },

  // 5. Advanced Writing Skills: Letter to the Editor / 5-Mark
  {
    id: 'eng-q5',
    questionNumber: 5,
    subjectId: 'english',
    chapterTitle: 'Writing Skills - Letter to Editor',
    chapterNumber: 0,
    category: 'Advanced Writing Skills (Notice, Letter, Article)',
    label: 'High Priority',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2023, 2019',
    question: `You are Aman / Amrita, residing at 45-B, Sector 14, Rohini, New Delhi. You are deeply concerned about the reckless disposal of electronic waste (e-waste) and single-use plastics in your city, which is choking drains and contaminating groundwater. Write a letter to the Editor of 'The National Herald', New Delhi, in 120-150 words, highlighting the severe environmental and health hazards and suggesting practical community and civic measures to combat this menace.`,
    answer: {
      finalAnswer: 'Formal letter to the Editor adhering to CBSE format with Sender\'s address, Date, Receiver\'s designation/address, Subject, Salutation, 3-paragraph Body, and Complimentary close.',
      formulaOrConcept: `• Paragraph 1: Purpose of writing via esteemed columns\n• Paragraph 2: Problem elaboration, hazards, and real-life impact\n• Paragraph 3: Pragmatic remedial measures and appeal to authorities/citizens`,
      solution: `Letter Draft:

45-B, Sector 14, Rohini
New Delhi - 110085

18 October 2025

The Editor
The National Herald
Bahadur Shah Zafar Marg
New Delhi - 110002

Subject: Urgent Need for Scientific E-Waste and Plastic Waste Management

Sir/Madam,

Through the esteemed columns of your widely circulated daily, I wish to draw the urgent attention of the municipal authorities and the general public towards the rampant and unscientific disposal of electronic waste and single-use plastics in our capital city.

With rapid technological turnover, obsolete mobile phones, lithium batteries, chargers, and plastic packaging are routinely discarded into open municipal vats and roadside gutters. During monsoons, these non-biodegradable toxins clog storm-water drains, resulting in severe waterlogging. Furthermore, toxic heavy metals such as lead, mercury, and cadmium leach into the soil, permanently poisoning our underground aquifers and entering the human food chain, causing neurological and kidney ailments.

To combat this escalating environmental crisis, the civic corporation must enforce strict extended producer responsibility (EPR) norms and establish dedicated e-waste collection hubs in every municipal ward. Citizen engagement through door-to-door waste segregation and hefty fines on plastic littering are imperative.

I earnestly hope that this letter awakens our civic administrators and citizens to take swift remedial action before our environment is irreparably damaged.

Yours sincerely,
Amrita Mehra
(Concerned Citizen)`,
      examApproach: 'Examiner Warning: In letters to the editor, never request the editor to "solve the problem." The editor only publishes your letter to create public awareness and reach authorities.',
      markingPoints: [
        '1 Mark: Standard formal letter layout (addresses, date, subject, salutation, closing).',
        '2 Marks: Well-developed content highlighting health risks, drainage choking, and water contamination.',
        '1 Mark: Pragmatic solutions (EPR norms, ward-level collection centers, strict fines).',
        '1 Mark: Coherent expression, formal tone, and adherence to 120-150 words.'
      ]
    }
  }
];
