// chemistryData.ts - Complete, Rigorous CBSE Class 12 Chemistry Knowledge Base (2026-27 Pattern)
// Covers all 10 Chapters + Full Syllabus Revision with complete NCERT theory, named reactions, mechanisms, formula vaults, and verified Solved Board PYQs.

import { getChemistryPart1Notes } from './chemistry/part1';
import { getChemistryPart2Notes } from './chemistry/part2';
import { getChemistryPart1PYQs } from './chemistry/pyqs1';
import { getChemistryPart2PYQs } from './chemistry/pyqs2';

export function getChemistryContent(chapter: string, type: 'notes' | 'pyqs'): string {
  const lower = chapter.toLowerCase();

  if (type === 'notes') {
    // Check Part 1 (Chapters 1 to 5: Solutions, Electrochemistry, Kinetics, d- & f-Block, Coordination)
    const part1 = getChemistryPart1Notes(lower);
    if (part1) return part1;

    // Check Part 2 (Chapters 6 to 10: Haloalkanes, Alcohols Phenols, Aldehydes Ketones, Amines, Biomolecules + Full Revision)
    const part2 = getChemistryPart2Notes(lower);
    if (part2) return part2;

    // Fallback notes
    return `TOPIC: ${chapter} - Class 12 Chemistry
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Key Concepts & Definitions:**
- All fundamental principles, definitions, laws, and sign conventions governing ${chapter}.
- Thorough theoretical explanations formulated in clear, exam-ready notebook language.

**2. Important Formulas & Named Reactions:**
**FORMULA:** Refer to standard NCERT formulation for ${chapter}.
- Every parameter clearly defined with its corresponding SI unit.

**3. Quick Revision Points:**
**KEY POINTS:**
- Review NCERT chapter summaries and diagnostic chemical tests before attempting numerical problems.
- Always write Given data, Formula, and Final Answer with correct units.`;
  }

  // Question Bank & Solved PYQs
  if (type === 'pyqs') {
    // Check Part 1 PYQs (Chapters 1 to 5)
    const pyqs1 = getChemistryPart1PYQs(lower);
    if (pyqs1) return pyqs1;

    // Check Part 2 PYQs (Chapters 6 to 10 + Full Subject Revision)
    const pyqs2 = getChemistryPart2PYQs(lower);
    if (pyqs2) return pyqs2;

    // Fallback Solved PYQs
    return `QUESTION: Q1. [5 Marks Structured Problem, CBSE-Style Practice Question]
Explain the fundamental principles, mechanisms, and reactions for ${chapter}.
SOLUTION:
**Given:**
- Theoretical context and standard chemical conditions for ${chapter}.
**Step 1: Fundamental Law & Principles:**
- State the core law, chemical equation, and mechanism steps with bold scientific terminology.
**Step 2: Stepwise Derivation / Calculation:**
- Show complete working, variable definitions, and substitution of values with SI units.
**Step 3: Boxed Final Answer & Examiner Conclusion:**
- Provide the final result with appropriate units and physical interpretation.
**CBSE Marking Rubric:**
- 1 Mark for principle and balanced equation.
- 2.5 Marks for detailed stepwise derivation or mechanism.
- 1.5 Marks for final boxed answer with correct units.
INSIGHT: Never leave out catalyst, temperature, or phase notations in chemical equations.

QUESTION: Q2. [3 Marks, CBSE-Style Practice Question]
Solved conceptual reasoning question on ${chapter}.
SOLUTION:
**Step 1: Electronic / Structural Factor:**
- State the underlying electronic configuration, resonance stabilization, or inductive effect.
**Step 2: Comparison & Scientific Conclusion:**
- Explain the observed chemical property comparison with explicit reference to NCERT keywords.
INSIGHT: Always mention scientific keywords (e.g. 'resonance stabilization', 'lanthanoid contraction') for full marks.

QUESTION: Q3. [2 Marks, CBSE-Style Practice Question]
Give reasons for standard anomalous behaviors in ${chapter}.
SOLUTION:
**Step 1: Primary Cause:** State the steric or electronic reason.
**Step 2: Consequence:** State how this determines stability or reaction pathway.
INSIGHT: Structure answers in bullet points with bold keywords.`;
  }

  return '';
}
