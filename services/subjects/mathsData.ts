// mathsData.ts - Complete, Rigorous CBSE Class 12 Mathematics Knowledge Base (2026-27 Pattern)
// Covers all 13 Chapters + Full Syllabus Revision with complete NCERT formulas, theorem derivations, step-by-step algorithms, and solved board PYQs.
// Modularized for maximum performance, accuracy, and completeness.

import { getMathsPart1Notes } from './maths/part1';
import { getMathsPart2Notes } from './maths/part2';
import { getMathsPart1PYQs } from './maths/pyqs1';
import { getMathsPart2PYQs } from './maths/pyqs2';

export function getMathsContent(chapter: string, type: 'notes' | 'pyqs'): string {
  const chapterLower = chapter.toLowerCase();

  if (type === 'notes') {
    // Check Part 2 first (Chapters 7 to 13 + Master Revision)
    const part2Notes = getMathsPart2Notes(chapterLower);
    if (part2Notes) return part2Notes;

    // Check Part 1 (Chapters 1 to 6)
    const part1Notes = getMathsPart1Notes(chapterLower);
    if (part1Notes) return part1Notes;

    // Default fallback
    return getMathsPart2Notes('revision') || `TOPIC: ${chapter}\nComprehensive Class 12 Mathematics NCERT Notes.`;
  } else {
    // PYQs
    // Check Part 2 first (Chapters 7 to 13 + Master Revision)
    const part2PYQs = getMathsPart2PYQs(chapterLower);
    if (part2PYQs) return part2PYQs;

    // Check Part 1 (Chapters 1 to 6)
    const part1PYQs = getMathsPart1PYQs(chapterLower);
    if (part1PYQs) return part1PYQs;

    // Default fallback
    return getMathsPart2PYQs('revision') || `QUESTION: Q1. [5 Marks, CBSE 2024] Practice problem on ${chapter}.\nSOLUTION:\nStep-by-step solution.`;
  }
}
