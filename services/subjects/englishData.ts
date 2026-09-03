// englishData.ts - Complete CBSE Class 12 English Core Knowledge Base (2026-27 Pattern)
// Modularized into:
// - services/subjects/english/part1.ts (Section B Writing Skills & Flamingo Prose)
// - services/subjects/english/part2.ts (Flamingo Poetry, Vistas Prose + Master Revision)
// - services/subjects/english/pyqs1.ts (Writing Skills & Flamingo Prose Solved PYQs)
// - services/subjects/english/pyqs2.ts (Flamingo Poetry & Vistas Solved PYQs + Master Bank)

import { getEnglishPart1Notes } from './english/part1';
import { getEnglishPart2Notes } from './english/part2';
import { getEnglishPart1PYQs } from './english/pyqs1';
import { getEnglishPart2PYQs } from './english/pyqs2';

export function getEnglishContent(chapter: string, type: 'notes' | 'pyqs'): string {
  const lower = chapter.toLowerCase().trim();

  if (type === 'notes') {
    // Check Part 1 (Writing skills & Flamingo prose)
    const part1Notes = getEnglishPart1Notes(lower);
    if (part1Notes) return part1Notes;

    // Check Part 2 (Poetry, Vistas prose & full revision)
    const part2Notes = getEnglishPart2Notes(lower);
    if (part2Notes) return part2Notes;

    // Default fallback
    return `TOPIC: Chapter Formula Master Vault & When-To-Apply Guide: ${chapter}
**1. Core Thematic Principles & Character Motivations:**
- Deep analysis of themes, motifs, symbols, and literary context for **${chapter}**.
- Explicit character arcs and ideological conflicts.

**2. 15-Year CBSE Question Blueprint:**
- 1-Mark RTCs, 2-Mark short analytical questions (40-50 words), 5-Mark long thematic comparisons (120-150 words).
INSIGHT: Always incorporate quotes and exact poetic device terminologies into your literary answers.`;
  } else {
    // ENGLISH SOLVED PYQS
    // Check Part 1 PYQs
    const part1PYQs = getEnglishPart1PYQs(lower);
    if (part1PYQs) return part1PYQs;

    // Check Part 2 PYQs
    const part2PYQs = getEnglishPart2PYQs(lower);
    if (part2PYQs) return part2PYQs;

    // Default fallback solved PYQs
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
INSIGHT: Always enclose the notice in a neat rectangular box using a ruler.`;
  }
}

