// services/revision/content.ts
// Unified provider and accessor for Full Subject Revision Question Banks

import { RevisionQuestion } from './types.ts';
import { physicsQuestions, physicsCategories } from './physicsQuestions.ts';
import { chemistryQuestions, chemistryCategories } from './chemistryQuestions.ts';
import { mathsQuestions, mathsCategories } from './mathsQuestions.ts';
import { biologyQuestions, biologyCategories } from './biologyQuestions.ts';
import { csQuestions, csCategories } from './csQuestions.ts';
import { peQuestions, peCategories } from './peQuestions.ts';
import { englishQuestions, englishCategories } from './englishQuestions.ts';

export interface SubjectRevisionData {
  subjectId: string;
  subjectName: string;
  syllabusCovered: string;
  categories: string[];
  questions: RevisionQuestion[];
}

const revisionDataMap: Record<string, SubjectRevisionData> = {
  physics: {
    subjectId: 'physics',
    subjectName: 'Physics (Class 12)',
    syllabusCovered: 'Full Syllabus (Chapters 1 to 14: Electrostatics to Semiconductors)',
    categories: physicsCategories,
    questions: physicsQuestions
  },
  chemistry: {
    subjectId: 'chemistry',
    subjectName: 'Chemistry (Class 12)',
    syllabusCovered: 'Full Syllabus (Chapters 1 to 10: Physical, Inorganic & Organic)',
    categories: chemistryCategories,
    questions: chemistryQuestions
  },
  maths: {
    subjectId: 'maths',
    subjectName: 'Mathematics (Class 12)',
    syllabusCovered: 'Full Syllabus (Chapters 1 to 13: Relations to Probability)',
    categories: mathsCategories,
    questions: mathsQuestions
  },
  biology: {
    subjectId: 'biology',
    subjectName: 'Biology (Class 12)',
    syllabusCovered: 'Full Syllabus (Chapters 1 to 13: Reproduction, Genetics, Biotech, Ecology)',
    categories: biologyCategories,
    questions: biologyQuestions
  },
  computer_science: {
    subjectId: 'computer_science',
    subjectName: 'Computer Science (Class 12)',
    syllabusCovered: 'Full Syllabus (Python Review, File Handling, Stacks, SQL & Networks)',
    categories: csCategories,
    questions: csQuestions
  },
  physical_education: {
    subjectId: 'physical_education',
    subjectName: 'Physical Education (Class 12)',
    syllabusCovered: 'Full Syllabus (Management, Yoga, CWSN, Nutrition, Biomechanics & Training)',
    categories: peCategories,
    questions: peQuestions
  },
  english: {
    subjectId: 'english',
    subjectName: 'English Core (Class 12)',
    syllabusCovered: 'Full Syllabus (Flamingo Prose & Poetry, Vistas, and Advanced Writing Skills)',
    categories: englishCategories,
    questions: englishQuestions
  }
};

/**
 * Normalizes user subject id (e.g. 'physics', 'chem', 'chemistry', 'math', 'maths', 'cs', 'computer_science', 'pe', 'physical_education')
 */
export function normalizeSubjectId(rawId: string): string {
  const lower = rawId.toLowerCase().trim();
  if (lower.startsWith('phy') || lower === 'p_rev') return 'physics';
  if (lower.startsWith('chem') || lower === 'c_rev') return 'chemistry';
  if (lower.startsWith('math') || lower === 'm_rev') return 'maths';
  if (lower.startsWith('bio') || lower === 'b_rev') return 'biology';
  if (lower.startsWith('cs') || lower.includes('comp') || lower === 'cs_rev') return 'computer_science';
  if (lower.startsWith('pe') || lower.includes('phys_ed') || lower === 'pe_rev') return 'physical_education';
  if (lower.startsWith('eng') || lower === 'e_rev') return 'english';
  return lower;
}

export function getRevisionSubjectData(subjectId: string): SubjectRevisionData | null {
  const normalized = normalizeSubjectId(subjectId);
  return revisionDataMap[normalized] || null;
}

export function getRevisionQuestions(subjectId: string, categoryFilter: string = 'All Questions'): RevisionQuestion[] {
  const data = getRevisionSubjectData(subjectId);
  if (!data) return [];
  if (!categoryFilter || categoryFilter === 'All Questions') {
    return data.questions;
  }
  return data.questions.filter(q => q.category === categoryFilter);
}

export function getAvailableRevisionCategories(subjectId: string): string[] {
  const data = getRevisionSubjectData(subjectId);
  return data ? data.categories : ['All Questions'];
}
