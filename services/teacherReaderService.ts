// services/teacherReaderService.ts
// Intelligent Teacher Mode Audio Engine for CBSE Class 12
// Transforms study notes and PYQs into a prioritized 10-minute exam masterclass.
// Filters out boilerplate, UI text, and repeated paragraphs.
// Speaks with pedagogical clarity like a senior CBSE Teacher.

export type TeacherPriority = 'must_know' | 'important' | 'quick_mention';

export type TeacherCategory =
  | 'concept'
  | 'definition'
  | 'formula'
  | 'law'
  | 'derivation'
  | 'reaction'
  | 'diagram'
  | 'mistake'
  | 'trend'
  | 'pyq'
  | 'exam_tip';

export interface TeacherPoint {
  id: string;
  priority: TeacherPriority; // 🔴 must_know | 🟡 important | 🟢 quick_mention
  category: TeacherCategory;
  title: string;
  subtitle?: string;
  spokenText: string; // Natural teacher voice script
  displayText: string; // High-yield readable summary
  bulletPoints?: string[];
  examContext?: string; // e.g. "Frequent 3-Mark Question • CBSE 2024"
  numericalApproach?: string[]; // Step-by-step strategy for numericals
}

export interface TeacherLecture {
  chapterTitle: string;
  subjectName: string;
  introSpoken: string;
  outroSpoken: string;
  points: TeacherPoint[];
  stats: {
    mustKnowCount: number;
    importantCount: number;
    quickMentionCount: number;
    totalSpokenWords: number;
    estimatedMinutes: number;
  };
}

export type PriorityFilterMode = 'high_yield' | 'must_know_only' | 'all';

/**
 * Converts mathematical equations, chemical formulas, and technical abbreviations
 * into smooth, natural spoken educational English.
 */
export function convertMathToSpokenSpeech(text: string): string {
  if (!text) return '';

  return text
    // Strip markdown formatting & symbols
    .replace(/[*#`_~]/g, '')
    .replace(/\[\s*boxed\s*\]/gi, '')
    .replace(/TOPIC:|QUESTION:|SOLUTION:|INSIGHT:|CBSE MARKING RUBRIC:/gi, '')
    // Math Greek symbols
    .replace(/\\varepsilon_0|ε₀/g, ' epsilon naught ')
    .replace(/\\mu_0|μ₀/g, ' mu naught ')
    .replace(/\\lambda|λ/g, ' lambda ')
    .replace(/\\sigma|σ/g, ' sigma ')
    .replace(/\\rho|ρ/g, ' rho ')
    .replace(/\\theta|θ/g, ' theta ')
    .replace(/\\omega|ω/g, ' omega ')
    .replace(/\\Omega|Ω/g, ' ohms ')
    .replace(/\\pi|π/g, ' pi ')
    .replace(/\\Delta|Δ/g, ' delta ')
    .replace(/\\alpha|α/g, ' alpha ')
    .replace(/\\beta|β/g, ' beta ')
    .replace(/\\gamma|γ/g, ' gamma ')
    .replace(/\\infty|∞/g, ' infinity ')
    .replace(/\\approx|≈/g, ' approximately equals ')
    .replace(/\\pm|±/g, ' plus or minus ')
    .replace(/\\neq|≠/g, ' is not equal to ')
    .replace(/<=|≤/g, ' less than or equal to ')
    .replace(/>=|≥/g, ' greater than or equal to ')
    .replace(/->|→/g, ' yields ')
    .replace(/<=>|⇌/g, ' in equilibrium with ')
    // Common equations & powers
    .replace(/\^2|²/g, ' squared ')
    .replace(/\^3|³/g, ' cubed ')
    .replace(/\^n|ⁿ/g, ' to the power n ')
    .replace(/\\sqrt\{([^}]+)\}|√\(([^)]+)\)|√([a-zA-Z0-9]+)/g, ' square root of $1$2$3 ')
    .replace(/1\s*\/\s*\(?\s*4\s*pi\s*epsilon\s*naught\s*\)?/gi, ' 1 over 4 pi epsilon naught ')
    .replace(/d([xyzvt])\/d([xyzvt])/g, ' d $1 by d $2 ')
    .replace(/VO₂\s*max|VO2\s*max/gi, ' V-O-2 max ')
    .replace(/BMI/g, ' B-M-I ')
    .replace(/CWSN/g, ' C-W-S-N, that is Children with Special Needs ')
    .replace(/PRICER/g, ' P-R-I-C-E-R protocol ')
    .replace(/NB\s*=\s*2\^n\s*-\s*N/gi, ' Number of byes equals next power of 2 minus N ')
    .replace(/N\s*\(\s*N\s*-\s*1\s*\)\s*\/\s*2/g, ' N into N minus 1, all divided by 2 ')
    .replace(/kg\/m²|kg\/m\^2/gi, ' kilograms per meter squared ')
    .replace(/mmHg/gi, ' millimeters of mercury ')
    .replace(/P\(A\|B\)/g, ' probability of A given B ')
    .replace(/P\(A\s*∩\s*B\)/g, ' probability of A intersection B ')
    .replace(/P\(A\s*∪\s*B\)/g, ' probability of A union B ')
    .replace(/e\^x/g, ' e to the power x ')
    // Tidy whitespace
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/**
 * Extracts and synthesizes a high-yield 10-minute Teacher Lecture
 * from any chapter's text notes and PYQs.
 */
export function synthesizeTeacherLecture(
  chapterTitle: string,
  subjectName: string,
  notesText: string,
  pyqText?: string
): TeacherLecture {
  const points: TeacherPoint[] = [];
  const subjectLower = subjectName.toLowerCase();
  const titleLower = chapterTitle.toLowerCase();

  // Helper to push with deduplication
  const addedTitles = new Set<string>();
  const addPoint = (pt: Omit<TeacherPoint, 'id'>) => {
    const key = pt.title.toLowerCase().trim();
    if (addedTitles.has(key)) return;
    addedTitles.add(key);
    points.push({
      ...pt,
      id: `pt_${points.length + 1}_${Math.random().toString(36).substring(2, 6)}`
    });
  };

  const fullText = `${notesText || ''}\n${pyqText || ''}`;
  const lines = fullText.split('\n').map(l => l.trim()).filter(Boolean);

  // 1. EXTRACT COMMON MISTAKES & EXAMINER ALERTS (🔴 Must Know)
  const mistakeLines: string[] = [];
  lines.forEach(l => {
    if (
      l.toUpperCase().includes('INSIGHT:') ||
      l.toUpperCase().includes('COMMON MISTAKE') ||
      l.toUpperCase().includes('EXAMINER') ||
      l.toUpperCase().includes('WARNING:') ||
      l.toUpperCase().includes('TRAP')
    ) {
      const clean = l.replace(/^[-*•\d.]*\s*(INSIGHT:|COMMON MISTAKE:|WARNING:|EXAMINER TRAP:|TRAP:)?\s*/i, '').trim();
      if (clean.length > 20 && !mistakeLines.includes(clean)) {
        mistakeLines.push(clean);
      }
    }
  });

  if (mistakeLines.length > 0) {
    mistakeLines.slice(0, 2).forEach((mistake, idx) => {
      const spoken = `Common mistake alert number ${idx + 1}: In the board exam, students frequently lose marks here. ${convertMathToSpokenSpeech(mistake)}. Remember this trap so you never make this mistake!`;
      addPoint({
        priority: 'must_know',
        category: 'mistake',
        title: `Examiner Alert & Common Mistake: ${mistake.slice(0, 45)}...`,
        subtitle: 'Critical marking trap that costs marks in CBSE evaluations',
        spokenText: spoken,
        displayText: mistake,
        examContext: 'High-Risk Examiner Trap • 1 to 3 Marks'
      });
    });
  } else {
    // Default high-yield mistake reminder
    addPoint({
      priority: 'must_know',
      category: 'mistake',
      title: 'Examiner Trap: Unit Conversions & Final Sign Conventions',
      subtitle: 'Avoid careless deductions in calculations',
      spokenText: `Teacher's alert: Always watch your units and sign conventions. In CBSE marking schemes, examiners deduct half a mark if the final answer misses the proper SI unit or has the wrong algebraic sign. Always box your final result with its unit clearly!`,
      displayText: 'Always include SI units and box final answers. Examiners deduct 0.5 marks per numerical for missing units.',
      examContext: 'Standard CBSE Marking Scheme Rule'
    });
  }

  // 2. EXTRACT FORMULAS (🔴 Must Know)
  const formulaLines: { name: string; eq: string; desc?: string }[] = [];
  lines.forEach((l, i) => {
    if (
      l.includes('=') &&
      (l.includes('Formula:') ||
        l.includes('`') ||
        l.startsWith('- **') ||
        l.includes('Index =') ||
        l.includes('BMI =') ||
        l.includes('NB =') ||
        l.includes('F =') ||
        l.includes('E =') ||
        l.includes('V =') ||
        l.includes('k =') ||
        l.includes('P(') ||
        l.includes('cos') ||
        l.includes('sin') ||
        l.includes('λ'))
    ) {
      if (l.length > 10 && l.length < 180 && !l.includes('QUESTION:') && !l.includes('SOLUTION:')) {
        const parts = l.replace(/^[-*•\d.]*\s*/, '').split(':');
        const name = parts[0]?.replace(/[*`]/g, '').trim() || 'Core Formula';
        const eq = parts[1]?.replace(/[*`]/g, '').trim() || l.replace(/[*`]/g, '').trim();
        formulaLines.push({ name, eq, desc: lines[i + 1]?.startsWith('-') ? lines[i + 1] : undefined });
      }
    }
  });

  if (formulaLines.length > 0) {
    // Pick up to 3 major formulas
    formulaLines.slice(0, 3).forEach(f => {
      const spokenEq = convertMathToSpokenSpeech(f.eq);
      const spoken = `Must-know formula: ${f.name}. The equation is: ${spokenEq}. In exam numericals, your first step should be writing this exact equation down to secure step marks immediately before plugging in numerical values.`;
      addPoint({
        priority: 'must_know',
        category: 'formula',
        title: f.name,
        subtitle: `Formula: ${f.eq}`,
        spokenText: spoken,
        displayText: `${f.name}: ${f.eq}`,
        bulletPoints: [
          `Equation: ${f.eq}`,
          'CBSE Step Mark: 1 mark awarded simply for stating the correct formula',
          'Check SI units before substituting given values'
        ],
        examContext: 'Core Formula • Step-Marking Guaranteed'
      });
    });
  }

  // 3. EXTRACT LAWS / PRINCIPLES / NAMED REACTIONS / DERIVATIONS (🔴 Must Know)
  const lawOrReactionRegex = /(law|principle|reaction|rule|theorem|reduct|oxidat|derivat|cycle|process)/i;
  const lawLines = lines.filter(
    l =>
      lawOrReactionRegex.test(l) &&
      (l.includes('**') || l.startsWith('1.') || l.startsWith('2.') || l.startsWith('3.') || l.startsWith('-')) &&
      l.length > 25 &&
      l.length < 240
  );

  if (lawLines.length > 0) {
    lawLines.slice(0, 3).forEach(law => {
      const clean = law.replace(/^[-*•\d.]*\s*/, '').replace(/[*`]/g, '').trim();
      const colonIdx = clean.indexOf(':');
      const title = colonIdx !== -1 ? clean.substring(0, colonIdx) : clean.slice(0, 50);
      const body = colonIdx !== -1 ? clean.substring(colonIdx + 1).trim() : clean;

      let category: TeacherCategory = 'law';
      if (title.toLowerCase().includes('reaction')) category = 'reaction';
      else if (title.toLowerCase().includes('derivat')) category = 'derivation';
      else if (title.toLowerCase().includes('theorem') || title.toLowerCase().includes('principle')) category = 'concept';

      const spoken = `Let's focus on: ${title}. ${convertMathToSpokenSpeech(body)}. When writing this in your answer sheet, emphasize key scientific terms, specify reaction conditions, and write the governing mathematical relation if applicable.`;

      addPoint({
        priority: 'must_know',
        category,
        title,
        subtitle: body.slice(0, 70) + '...',
        spokenText: spoken,
        displayText: body,
        examContext: 'High Probability Long Answer or Definition'
      });
    });
  }

  // 4. NUMERICAL APPROACH & PYQ STRATEGY (🟡 Important)
  const pyqQuestions = lines.filter(l => l.toUpperCase().includes('QUESTION:'));
  if (pyqQuestions.length > 0) {
    const q1 = pyqQuestions[0].replace(/^QUESTION:\s*/i, '').replace(/[*`]/g, '').trim();
    const spokenPYQ = `Now, let's understand the exam numerical strategy for this chapter. Rather than memorizing numbers, remember the three-step solving approach: First, write down the given parameters with their proper SI units. Second, write down the formula clearly. Third, carry out the algebraic substitution step-by-step. Even if your final calculation contains an arithmetic slip, CBSE step-marking will award you 80 to 90 percent of the marks!`;

    addPoint({
      priority: 'important',
      category: 'pyq',
      title: 'PYQ & Numerical Solving Strategy',
      subtitle: `Master standard question patterns like: ${q1.slice(0, 60)}...`,
      spokenText: spokenPYQ,
      displayText: 'Step-by-step numerical methodology to guarantee 100% step marks in 3-mark and 5-mark problems.',
      numericalApproach: [
        'Step 1: Write Given data with SI units (e.g. convert cm to m, min to s).',
        'Step 2: State the standard formula explicitly (guarantees 1 full mark).',
        'Step 3: Show direct variable substitution before solving.',
        'Step 4: Box final answer and verify units (prevents 0.5 mark deduction).'
      ],
      examContext: 'CBSE 3-Mark & 5-Mark Numerical Blueprint'
    });
  }

  // 5. DIAGRAMS & SCHEMATICS (🟡 Important)
  const diagramLines = lines.filter(l => 
    (l.toLowerCase().includes('diagram') || 
     l.toLowerCase().includes('circuit') || 
     l.toLowerCase().includes('graph') || 
     l.toLowerCase().includes('ray') || 
     l.toLowerCase().includes('fixture') ||
     l.toLowerCase().includes('schematic')) && 
    l.length > 20
  );

  if (diagramLines.length > 0) {
    const dLine = diagramLines[0].replace(/^[-*•\d.]*\s*/, '').replace(/[*`]/g, '').trim();
    addPoint({
      priority: 'important',
      category: 'diagram',
      title: 'Essential Board Diagrams & Schematics',
      subtitle: dLine.slice(0, 60),
      spokenText: `Important diagram tip: In this chapter, diagrams carry direct marks. ${convertMathToSpokenSpeech(dLine)}. The board examiner looks for neat, labeled diagrams. In optics, always draw arrows indicating the direction of rays. In circuits, clearly label positive and negative polarities. In graphs, label both axes with units!`,
      displayText: dLine,
      bulletPoints: [
        'Neat pencil diagram with clear labels',
        'Indicate directions (ray arrows, current flow, axis units)',
        'Diagrams carry 1 to 2 marks directly in long questions'
      ],
      examContext: 'Board Exam Diagram Checklist'
    });
  }

  // 6. KEY DEFINITIONS & HIGH-YIELD DISTINCTIONS (🟡 Important)
  const definitionLines = lines.filter(l => 
    (l.toLowerCase().includes('defined as') || 
     l.toLowerCase().includes('refers to') || 
     l.toLowerCase().includes('vs') || 
     l.toLowerCase().includes('difference between') ||
     l.toLowerCase().includes('distinguish between')) && 
    l.length > 25 && 
    l.length < 220
  );

  if (definitionLines.length > 0) {
    const def = definitionLines[0].replace(/^[-*•\d.]*\s*/, '').replace(/[*`]/g, '').trim();
    addPoint({
      priority: 'important',
      category: 'definition',
      title: 'Key Definition & Contrast Test',
      subtitle: def.slice(0, 60),
      spokenText: `Here is a key definition that frequently appears in 1-mark or 2-mark questions: ${convertMathToSpokenSpeech(def)}. Be precise with scientific keywords and state at least two points of distinction when asked to differentiate.`,
      displayText: def,
      examContext: 'Frequently Asked in 1-Mark MCQs and 2-Mark Shorts'
    });
  }

  // 7. CBSE QUESTION TRENDS & EXAM TIPS (🟡 Important)
  addPoint({
    priority: 'important',
    category: 'trend',
    title: 'Recent CBSE Question Trends (2020-2024)',
    subtitle: 'High-frequency patterns observed across recent question papers',
    spokenText: `Exam trend insight: Recent CBSE papers emphasize conceptual application over rote learning. For this chapter, expect at least one assertion-reason question testing your conceptual depth, and one multi-part question linking theory with a numerical or case study. Always answer to the point using NCERT keywords.`,
    displayText: 'CBSE 2024-2027 emphasizes Assertion-Reason conceptual questions, Case-based studies, and step-by-step mathematical reasoning.',
    bulletPoints: [
      'Assertion-Reason questions test the exact scientific "Why"',
      'Case study questions test real-world application of formulas',
      'Underline NCERT keywords in definitions to catch examiner attention'
    ],
    examContext: 'Examiner Blueprint & Weightage Analysis'
  });

  // 8. QUICK MENTION / RECAP (🟢 Quick Mention)
  addPoint({
    priority: 'quick_mention',
    category: 'exam_tip',
    title: 'Final 60-Second Sanity Check',
    subtitle: 'Rapid checklist before submission in the exam hall',
    spokenText: `Quick 60-second tip: During the reading time of 15 minutes, mark the questions from this chapter you are most confident in. When writing your answers, leave two blank lines between questions, write the question number boldly, and keep your handwriting clean and legible.`,
    displayText: 'Keep answer formatting structured: bold question numbers, clear equations, boxed answers with SI units.',
    examContext: 'Presentation & Time-Management Drill'
  });

  // Calculate statistics
  const mustKnowCount = points.filter(p => p.priority === 'must_know').length;
  const importantCount = points.filter(p => p.priority === 'important').length;
  const quickMentionCount = points.filter(p => p.priority === 'quick_mention').length;

  const totalWords = points.reduce((acc, p) => acc + p.spokenText.split(' ').length, 0);
  // Average reading speed ~130 words per minute
  const estimatedMinutes = Math.max(5, Math.round(totalWords / 125));

  const introSpoken = `Hello students! I am your AI Teacher. Let's do a high-yield, 10-minute exam revision of ${chapterTitle} for CBSE Class 12 ${subjectName}. I have filtered out all the non-essential text so we focus strictly on the must-know formulas, fundamental laws, common mistakes, and high-frequency exam patterns. Let's get you ready for top marks!`;

  const outroSpoken = `Outstanding work! You have covered all the high-yield Must Know and Important points for ${chapterTitle}. Review the formula vault and common mistakes one more time, and you will ace this chapter with full marks. Best of luck!`;

  return {
    chapterTitle,
    subjectName,
    introSpoken,
    outroSpoken,
    points,
    stats: {
      mustKnowCount,
      importantCount,
      quickMentionCount,
      totalSpokenWords: totalWords,
      estimatedMinutes
    }
  };
}

/**
 * Audio Engine Class managing speech synthesis, priority filtering, and playback state.
 */
export class TeacherAudioEngine {
  private lecture: TeacherLecture | null = null;
  private activeFilter: PriorityFilterMode = 'high_yield';
  private filteredPoints: TeacherPoint[] = [];
  private currentIndex: number = -1;
  private isSpeaking: boolean = false;
  private isPaused: boolean = false;
  private rate: number = 1.0;
  private pitch: number = 1.0;
  private utterance: SpeechSynthesisUtterance | null = null;
  private preferredVoice: SpeechSynthesisVoice | null = null;

  // Callbacks
  public onPointChange?: (point: TeacherPoint | null, index: number, total: number) => void;
  public onStateChange?: (isSpeaking: boolean, isPaused: boolean) => void;
  public onComplete?: () => void;

  constructor() {
    this.initVoices();
  }

  private initVoices() {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const findVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices || voices.length === 0) return;

      // Prefer warm, natural English voices (Indian English / UK / US Google/Natural voices)
      const indianVoice = voices.find(v => v.lang === 'en-IN' || v.name.includes('India'));
      const naturalVoice = voices.find(v => v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel'));
      const englishVoice = voices.find(v => v.lang.startsWith('en'));

      this.preferredVoice = indianVoice || naturalVoice || englishVoice || voices[0];
    };

    findVoice();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = findVoice;
    }
  }

  public setLecture(lecture: TeacherLecture, filter: PriorityFilterMode = 'high_yield') {
    this.stop();
    this.lecture = lecture;
    this.setFilter(filter);
  }

  public setFilter(filter: PriorityFilterMode) {
    this.activeFilter = filter;
    if (!this.lecture) {
      this.filteredPoints = [];
      return;
    }

    if (filter === 'must_know_only') {
      this.filteredPoints = this.lecture.points.filter(p => p.priority === 'must_know');
    } else if (filter === 'high_yield') {
      // 🔴 Must Know + 🟡 Important (Default requirement!)
      this.filteredPoints = this.lecture.points.filter(p => p.priority === 'must_know' || p.priority === 'important');
    } else {
      this.filteredPoints = [...this.lecture.points];
    }

    if (this.currentIndex >= this.filteredPoints.length) {
      this.currentIndex = 0;
    }
  }

  public getFilteredPoints(): TeacherPoint[] {
    return this.filteredPoints;
  }

  public getCurrentPoint(): TeacherPoint | null {
    if (this.currentIndex >= 0 && this.currentIndex < this.filteredPoints.length) {
      return this.filteredPoints[this.currentIndex];
    }
    return null;
  }

  public getCurrentIndex(): number {
    return this.currentIndex;
  }

  public getPlaybackState() {
    return {
      isSpeaking: this.isSpeaking,
      isPaused: this.isPaused,
      currentIndex: this.currentIndex,
      totalPoints: this.filteredPoints.length,
      currentPoint: this.getCurrentPoint(),
      activeFilter: this.activeFilter,
      rate: this.rate
    };
  }

  public setRate(rate: number) {
    this.rate = Math.max(0.7, Math.min(2.0, rate));
    // If currently speaking, restart current point with new rate
    if (this.isSpeaking && !this.isPaused && this.currentIndex >= 0) {
      this.playPoint(this.currentIndex);
    }
  }

  public play() {
    if (typeof window === 'undefined' || !window.speechSynthesis) {
      alert('Audio speech synthesis is not supported on this browser.');
      return;
    }

    if (this.isPaused) {
      window.speechSynthesis.resume();
      this.isPaused = false;
      this.isSpeaking = true;
      this.emitState();
      return;
    }

    if (this.filteredPoints.length === 0) return;

    if (this.currentIndex < 0 || this.currentIndex >= this.filteredPoints.length) {
      this.currentIndex = 0;
    }

    this.playPoint(this.currentIndex);
  }

  public playPoint(index: number) {
    if (index < 0 || index >= this.filteredPoints.length) {
      this.finish();
      return;
    }

    this.stopInternal();

    this.currentIndex = index;
    const point = this.filteredPoints[index];

    let spoken = point.spokenText;
    // Prefix with teacher's priority callout
    if (point.priority === 'must_know') {
      spoken = `Must Know point: ${spoken}`;
    } else if (point.priority === 'important') {
      spoken = `Important concept: ${spoken}`;
    }

    this.utterance = new SpeechSynthesisUtterance(spoken);
    this.utterance.rate = this.rate;
    this.utterance.pitch = this.pitch;
    if (this.preferredVoice) {
      this.utterance.voice = this.preferredVoice;
    }

    this.utterance.onstart = () => {
      this.isSpeaking = true;
      this.isPaused = false;
      this.emitState();
      if (this.onPointChange) {
        this.onPointChange(point, this.currentIndex, this.filteredPoints.length);
      }
    };

    this.utterance.onend = () => {
      // Advance to next point after a short teacher breath pause
      if (this.currentIndex + 1 < this.filteredPoints.length) {
        setTimeout(() => {
          if (this.isSpeaking) {
            this.playPoint(this.currentIndex + 1);
          }
        }, 600);
      } else {
        this.finish();
      }
    };

    this.utterance.onerror = (e) => {
      console.warn('SpeechSynthesis error or cancel:', e);
      this.isSpeaking = false;
      this.isPaused = false;
      this.emitState();
    };

    this.isSpeaking = true;
    this.isPaused = false;
    window.speechSynthesis.speak(this.utterance);
    this.emitState();
  }

  public pause() {
    if (typeof window !== 'undefined' && window.speechSynthesis && this.isSpeaking) {
      window.speechSynthesis.pause();
      this.isPaused = true;
      this.emitState();
    }
  }

  public resume() {
    if (typeof window !== 'undefined' && window.speechSynthesis && this.isPaused) {
      window.speechSynthesis.resume();
      this.isPaused = false;
      this.emitState();
    }
  }

  public next() {
    if (this.currentIndex + 1 < this.filteredPoints.length) {
      this.playPoint(this.currentIndex + 1);
    } else {
      this.finish();
    }
  }

  public prev() {
    if (this.currentIndex > 0) {
      this.playPoint(this.currentIndex - 1);
    } else {
      this.playPoint(0);
    }
  }

  public jumpTo(index: number) {
    if (index >= 0 && index < this.filteredPoints.length) {
      this.playPoint(index);
    }
  }

  public stop() {
    this.stopInternal();
    this.currentIndex = -1;
    this.isSpeaking = false;
    this.isPaused = false;
    this.emitState();
    if (this.onPointChange) {
      this.onPointChange(null, -1, this.filteredPoints.length);
    }
  }

  private stopInternal() {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
  }

  private finish() {
    this.stopInternal();
    this.isSpeaking = false;
    this.isPaused = false;
    this.emitState();
    if (this.onComplete) {
      this.onComplete();
    }
  }

  private emitState() {
    if (this.onStateChange) {
      this.onStateChange(this.isSpeaking, this.isPaused);
    }
  }
}
