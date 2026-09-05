// peData.ts - Complete CBSE Class 12 Physical Education Knowledge Base
import { getPEPart1Notes } from './pe/part1';
import { getPEPart2Notes } from './pe/part2';
import { getPEPart1PYQs } from './pe/pyqs1';
import { getPEPart2PYQs } from './pe/pyqs2';

export function getPEContent(chapter: string, type: 'notes' | 'pyqs', chapterId?: string): string {
  const lower = chapter.toLowerCase().trim();
  const id = (chapterId || '').toLowerCase().trim();

  if (type === 'notes') {
    const part1 = getPEPart1Notes(lower, id);
    if (part1) return part1;

    const part2 = getPEPart2Notes(lower, id);
    if (part2) return part2;

    // Fallback comprehensive revision notes
    return getPEPart2Notes('revision', 'pe_rev') || `TOPIC: Physical Education Master Notes: ${chapter}
Key concepts, physiological mechanisms, biomechanical principles, and board exam blueprints strictly aligned with CBSE Class 12 NCERT curriculum.`;
  } else {
    const pyqs1 = getPEPart1PYQs(lower, id);
    if (pyqs1) return pyqs1;

    const pyqs2 = getPEPart2PYQs(lower, id);
    if (pyqs2) return pyqs2;

    // Fallback comprehensive PYQ set
    return getPEPart2PYQs('revision', 'pe_rev') || `QUESTION: Q1. [3 Marks] Explain the PRICER protocol for soft tissue injuries.
SOLUTION:
- Protect: Immobilize the injured region.
- Rest: Halt activity immediately.
- Ice: Apply cold packs for 15-20 minutes every 2-3 hours to induce vasoconstriction.
- Compression: Apply crepe bandage to limit edema.
- Elevation: Raise injured extremity above heart level.
- Rehabilitation: Supervised progressive exercise.`;
  }
}
