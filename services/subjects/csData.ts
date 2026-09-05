// csData.ts - Complete, Rigorous CBSE Class 12 Computer Science (Python & SQL) Knowledge Base (2026-27 Pattern)
// Covers all units + Full Syllabus Revision with Python syntax, Pickle/CSV file handling, Stacks, Network Case Studies, SQL Queries, and 15-year Solved PYQs.
// Modularized into:
// - services/subjects/cs/part1.ts (cs1: Python Revision Tour, cs2: Functions, cs3: File Handling, cs4: Stacks)
// - services/subjects/cs/part2.ts (cs5: Computer Networks, cs6: Database Concepts, cs7: SQL, cs8: Python-SQL Interface, cs_rev: Master Revision)
// - services/subjects/cs/pyqs1.ts (cs1 - cs4 Solved PYQs)
// - services/subjects/cs/pyqs2.ts (cs5 - cs8 & cs_rev Solved PYQs)

import { getCSPart1Notes } from './cs/part1';
import { getCSPart2Notes } from './cs/part2';
import { getCSPart1PYQs } from './cs/pyqs1';
import { getCSPart2PYQs } from './cs/pyqs2';

export function getCSContent(chapter: string, type: 'notes' | 'pyqs', chapterId?: string): string {
  const lower = chapter.toLowerCase().trim();
  const id = (chapterId || '').toLowerCase().trim();

  if (type === 'notes') {
    // Check Part 1 (cs1: Python Revision, cs2: Functions, cs3: File Handling, cs4: Stacks)
    const part1Notes = getCSPart1Notes(lower, id);
    if (part1Notes) return part1Notes;

    // Check Part 2 (cs5: Networks, cs6: Database Concepts, cs7: SQL, cs8: Python-SQL, cs_rev: Revision)
    const part2Notes = getCSPart2Notes(lower, id);
    if (part2Notes) return part2Notes;

    // Default fallback
    return `TOPIC: CBSE Class 12 Computer Science: ${chapter}
Comprehensive, high-yield study material strictly aligned with the latest CBSE 2026-27 Board syllabus.

**1. Python Programming & File I/O Concepts:**
- Detailed explanations, syntax rules, and error handling for ${chapter}.
- Clean, well-commented Python code blocks and algorithms.

**2. 15-Year Question Patterns & High-Frequency Topics:**
- 1-Mark syntax MCQs, 2-Mark output prediction, 3-Mark file handling functions, and 5-Mark network case studies.
INSIGHT: Always mention appropriate file closing f.close() or use the 'with open()' construct.`;
  } else {
    // CS SOLVED PYQS
    // Check Part 1 PYQs (cs1 - cs4)
    const part1PYQs = getCSPart1PYQs(lower, id);
    if (part1PYQs) return part1PYQs;

    // Check Part 2 PYQs (cs5 - cs8 & cs_rev)
    const part2PYQs = getCSPart2PYQs(lower, id);
    if (part2PYQs) return part2PYQs;

    // Default fallback solved PYQs
    return `QUESTION: Q1. [3 Marks, Delhi 2024] Write a function in Python count_words() that reads a text file 'STORY.TXT' and counts the number of words starting with the letter 'M' or 'm'.
SOLUTION:
\`\`\`python
def count_words():
    count = 0
    try:
        with open("STORY.TXT", "r") as f:
            content = f.read()
            words = content.split()
            for w in words:
                if w[0] in ['M', 'm']:
                    count += 1
        print("Total words starting with M/m:", count)
    except FileNotFoundError:
        print("File not found.")
\`\`\`
**CBSE Marking Rubric:**
- 1 Mark for opening file in read mode.
- 1 Mark for word traversal and checking starting letter.
- 1 Mark for count display and closing file.
INSIGHT: Using with open(...) automatically handles file closing.`;
  }
}
