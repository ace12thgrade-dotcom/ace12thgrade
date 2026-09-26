
export type SubjectId = 'physics' | 'maths' | 'chemistry' | 'biology' | 'cs' | 'physed' | 'english' | string;

export interface Chapter {
  id: string;
  title: string;
  description: string;
  notes: string;
  importantQuestions: Question[];
  isCustom?: boolean;
}

export interface Question {
  id: string;
  text: string;
  answer: string;
  yearFrequency: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface Subject {
  id: SubjectId;
  name: string;
  icon: string;
  color: string;
  chapters: Chapter[];
  isCustom?: boolean;
}

export interface UploadedBook {
  id: string;
  name: string;
  title: string;
  subjectId: string;
  chapterId?: string;
  size: number;
  type: string;
  uploadDate: string;
  dataUrl?: string;
  description?: string;
  author?: string;
  tags?: string[];
  fileType?: string;
  fileSize?: string | number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface AdminSettings {
  passcodeHash: string;
  ownerEmail: string;
  lastLogin: string;
  theme: 'dark' | 'light' | 'auto';
}

export type StudyTheme = 'paper' | 'oxford' | 'slate';

export type StudyItemType =
  | 'text'
  | 'subtopic'
  | 'code'
  | 'insight'
  | 'solution'
  | 'step'
  | 'formula'
  | 'rubric'
  | 'diagram'
  | 'definition'
  | 'derivation'
  | 'example'
  | 'application'
  | 'keypoints'
  | 'bullet';

export interface StudyItem {
  type: StudyItemType;
  text: string;
  title?: string;
  lang?: string;
  marks?: string;
  year?: string;
  bulletPoints?: string[];
}

export interface StudySection {
  title: string;
  tag?: 'formula' | 'notes' | 'pyq' | 'diagram' | 'general';
  marks?: string;
  year?: string;
  description?: string;
  items: StudyItem[];
}

export interface CanonicalChapterNotes {
  chapterTitle: string;
  chapterDescription?: string;
  subjectId?: string;
  sections: StudySection[];
  version?: number;
  lastUpdated?: string;
}

