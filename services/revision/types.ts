// services/revision/types.ts
// Data structures for the Full Subject Revision Question Bank

export type QuestionLabel = 
  | 'Frequently Asked' 
  | 'High Priority' 
  | 'Repeated Concept' 
  | 'Important PYQ Pattern' 
  | 'CBSE Board Pattern' 
  | 'Must Practice';

export interface RevisionAnswer {
  correctOption?: string; // For MCQs e.g. '(b) 2.5 A'
  finalAnswer?: string;   // Concise final result or conclusion
  solution: string;       // Complete step-by-step solution, derivation, or explanation
  formulaOrConcept?: string; // Key formulas, theorems, or NCERT concepts applied
  examApproach?: string;  // Exam-writing approach, examiner warning, or presentation advice
  markingPoints?: string[]; // Official CBSE stepwise marking criteria
}

export interface RevisionQuestion {
  id: string;
  questionNumber: number;
  subjectId: string;
  chapterTitle: string;
  chapterNumber?: number | string;
  category: string; // e.g. 'Most Repeated', 'Important Derivations', 'Important Numericals', etc.
  label: QuestionLabel;
  marks: string; // e.g. '5 Marks', '3 Marks', '2 Marks', '1 Mark', '4 Marks Case Study'
  yearTag: string; // e.g. 'CBSE 2024 Delhi', 'CBSE 2023 All India'
  question: string;
  options?: string[]; // For MCQs
  assertion?: string; // For Assertion-Reason questions
  reason?: string;    // For Assertion-Reason questions
  casePassage?: string; // For Case-Based Questions
  answer: RevisionAnswer;
}

export interface SubjectRevisionConfig {
  subjectId: string;
  subjectName: string;
  categories: string[];
}
