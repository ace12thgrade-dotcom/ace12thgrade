// csData.ts - Complete, Rigorous CBSE Class 12 Computer Science (Python & SQL) Knowledge Base (2026-27 Pattern)
// Covers all units + Full Syllabus Revision with Python syntax, Pickle/CSV file handling, Stacks, Network Case Studies, SQL Queries, and 15-year Solved PYQs.
// Modularized into:
// - services/subjects/cs/part1.ts (Unit 1: Python Review, Functions, File Handling, Stacks)
// - services/subjects/cs/part2.ts (Unit 2: Computer Networks, Unit 3: SQL & Python-MySQL Connectivity + Master Revision)
// - services/subjects/cs/pyqs1.ts (Unit 1 Solved PYQs)
// - services/subjects/cs/pyqs2.ts (Unit 2 & 3 Solved PYQs + Master Question Bank)

import { getCSPart1Notes } from './cs/part1';
import { getCSPart2Notes } from './cs/part2';
import { getCSPart1PYQs } from './cs/pyqs1';
import { getCSPart2PYQs } from './cs/pyqs2';

export function getCSContent(chapter: string, type: 'notes' | 'pyqs'): string {
  const lower = chapter.toLowerCase().trim();

  if (type === 'notes') {
    // Check Part 1 (Unit 1: Python, Files, Stacks)
    const part1Notes = getCSPart1Notes(lower);
    if (part1Notes) return part1Notes;

    // Check Part 2 (Unit 2: Networks, Unit 3: Database & SQL + Master Revision)
    const part2Notes = getCSPart2Notes(lower);
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
    // Check Part 1 PYQs
    const part1PYQs = getCSPart1PYQs(lower);
    if (part1PYQs) return part1PYQs;

    // Check Part 2 PYQs
    const part2PYQs = getCSPart2PYQs(lower);
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
        print("Error: STORY.TXT file does not exist.")
\`\`\`
**CBSE Marking Rubric:**
- 1 Mark for opening file correctly in read mode ('r' or with open).
- 1 Mark for splitting text into words and iterating through list.
- 1 Mark for checking first character (w[0] in ['M', 'm'] or w.startswith(('M', 'm'))) and updating count.
INSIGHT: Using split() handles all whitespace, tabs, and newline characters automatically.

QUESTION: Q2. [3 Marks, All India 2023] Write functions in Python: (i) Push_Element(stk, book) to insert book details [BookNo, BookName] into a stack 'stk' if the BookNo is greater than 100. (ii) Pop_Element(stk) to pop and display the top element from the stack, printing 'Underflow' if empty.
SOLUTION:
\`\`\`python
def Push_Element(stk, book):
    if book[0] > 100:
        stk.append(book)
        print("Book successfully pushed:", book)

def Pop_Element(stk):
    if len(stk) == 0:
        print("Underflow: Stack is empty.")
        return None
    else:
        popped = stk.pop()
        print("Popped Book:", popped)
        return popped
\`\`\`
INSIGHT: Stacks follow LIFO (Last In First Out); always use append() for push and pop() without arguments for pop.

QUESTION: Q3. [5 Marks, Delhi 2024] Network Architecture Case Study:
A university campus has 4 blocks: Admin Block (120 PCs), Science Block (80 PCs), Arts Block (30 PCs), Library Block (40 PCs).
Distances: Admin to Science = 80m, Admin to Arts = 150m, Admin to Library = 60m, Science to Arts = 90m, Arts to Library = 120m, Science to Library = 110m.
(a) Suggest the most suitable block to install the server and justify.
(b) Suggest the placement of repeaters and switches/hubs with justification.
(c) Suggest the best topology for connecting all blocks.
(d) Which wired transmission medium provides the highest data transfer speed between blocks?
SOLUTION:
(a) **Server Placement:** **Admin Block** (maximum number of computers: 120 PCs, 80-20 rule).
(b) **Repeaters & Switches:** Repeater between Admin and Arts (150m > 70-100m). Switches in every block.
(c) **Topology:** **Star Topology** (Admin block as center) or **Tree Topology**.
(d) **Wired Medium:** **Optical Fiber Cable (OFC)** provides the highest bandwidth and immunity to EMI.
INSIGHT: In network case study questions, always provide concise 1-line justifications referring to distance and PC count.`;
  }
}

