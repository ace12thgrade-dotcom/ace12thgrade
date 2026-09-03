// notesParser.ts
// Single Canonical Parsing and Normalization Engine for CBSE Class 12 Study Notes & PYQs
// Handles AI-generated content, ChatGPT markdown, structured JSON, and raw uploaded text.

export type { StudyTheme } from '../types.ts';

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
  | 'bullet'
  | 'table';

export interface StudyItem {
  type: StudyItemType;
  text: string;
  title?: string;
  lang?: string;
  marks?: string;
  year?: string;
  bulletPoints?: string[];
  tableHeaders?: string[];
  tableRows?: string[][];
  diagramType?: string;
  diagramCaption?: string;
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

/**
 * Clean scientific/math text and replace common raw LaTeX expressions with clean, readable Unicode math symbols
 */
export const cleanMathAndSymbols = (text: string): string => {
  if (!text) return '';
  return text
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)')
    .replace(/\\text\{([^}]+)\}/g, '$1')
    .replace(/\\varepsilon_0/g, 'ε₀')
    .replace(/\\mu_0/g, 'μ₀')
    .replace(/\\lambda/g, 'λ')
    .replace(/\\sigma/g, 'σ')
    .replace(/\\rho/g, 'ρ')
    .replace(/\\theta/g, 'θ')
    .replace(/\\omega/g, 'ω')
    .replace(/\\Omega/g, 'Ω')
    .replace(/\\pi/g, 'π')
    .replace(/\\Delta/g, 'Δ')
    .replace(/\\delta/g, 'δ')
    .replace(/\\alpha/g, 'α')
    .replace(/\\beta/g, 'β')
    .replace(/\\gamma/g, 'γ')
    .replace(/\\infty/g, '∞')
    .replace(/\\approx/g, '≈')
    .replace(/\\pm/g, '±')
    .replace(/\\times/g, '×')
    .replace(/\\cdot/g, '·')
    .replace(/\\sqrt\{([^}]+)\}/g, '√($1)')
    .replace(/\\rightarrow/g, '→')
    .replace(/\\left/g, '')
    .replace(/\\right/g, '')
    .replace(/\$\$/g, '')
    .replace(/\$/g, '');
};

/**
 * Normalizes any note input (JSON string, raw markdown, ChatGPT export, plain text)
 * into the CanonicalChapterNotes data structure.
 */
export const normalizeToCanonicalNotes = (
  rawInput: string | CanonicalChapterNotes | any,
  options?: {
    chapterTitle?: string;
    chapterDescription?: string;
    subjectId?: string;
    isPyq?: boolean;
    isRevision?: boolean;
  }
): CanonicalChapterNotes => {
  const defaultTitle = options?.chapterTitle || 'Chapter Study Notes';

  // 1. If already a structured object
  if (typeof rawInput === 'object' && rawInput !== null) {
    if (Array.isArray(rawInput.sections)) {
      return {
        chapterTitle: rawInput.chapterTitle || defaultTitle,
        chapterDescription: rawInput.chapterDescription || options?.chapterDescription || '',
        subjectId: rawInput.subjectId || options?.subjectId || '',
        sections: validateAndCleanSections(rawInput.sections, options?.isPyq, options?.isRevision),
        version: 1,
        lastUpdated: rawInput.lastUpdated || new Date().toISOString()
      };
    }
  }

  // 2. If it's a string, check if it's stringified JSON
  if (typeof rawInput === 'string') {
    const trimmed = rawInput.trim();
    if ((trimmed.startsWith('{') && trimmed.endsWith('}')) || (trimmed.startsWith('[') && trimmed.endsWith(']'))) {
      try {
        const parsed = JSON.parse(trimmed);
        if (parsed && typeof parsed === 'object') {
          if (Array.isArray(parsed.sections)) {
            return {
              chapterTitle: parsed.chapterTitle || defaultTitle,
              chapterDescription: parsed.chapterDescription || options?.chapterDescription || '',
              subjectId: parsed.subjectId || options?.subjectId || '',
              sections: validateAndCleanSections(parsed.sections, options?.isPyq, options?.isRevision),
              version: 1,
              lastUpdated: parsed.lastUpdated || new Date().toISOString()
            };
          } else if (Array.isArray(parsed)) {
            return {
              chapterTitle: defaultTitle,
              chapterDescription: options?.chapterDescription || '',
              subjectId: options?.subjectId || '',
              sections: validateAndCleanSections(parsed, options?.isPyq, options?.isRevision),
              version: 1,
              lastUpdated: new Date().toISOString()
            };
          }
        }
      } catch {
        // Not valid JSON, continue with Markdown parsing
      }
    }

    // 3. Parse Markdown / Text to Canonical Structure
    const sections = parseMarkdownToSections(trimmed, options?.isPyq, options?.isRevision);
    return {
      chapterTitle: defaultTitle,
      chapterDescription: options?.chapterDescription || '',
      subjectId: options?.subjectId || '',
      sections,
      version: 1,
      lastUpdated: new Date().toISOString()
    };
  }

  // Fallback default
  return {
    chapterTitle: defaultTitle,
    chapterDescription: '',
    sections: [
      {
        title: 'Core Concepts',
        tag: 'notes',
        items: [{ type: 'text', text: 'No notes available yet.' }]
      }
    ],
    version: 1,
    lastUpdated: new Date().toISOString()
  };
};

/**
 * Validates and cleans pre-parsed sections to ensure strict type compliance
 */
const validateAndCleanSections = (
  rawSections: any[],
  isPyq?: boolean,
  isRevision?: boolean
): StudySection[] => {
  if (!Array.isArray(rawSections) || rawSections.length === 0) {
    return [];
  }

  return rawSections.map((sec, idx) => {
    const title = typeof sec.title === 'string' ? sec.title.trim() : `Section ${idx + 1}`;
    let tag = sec.tag;
    if (!tag) {
      const upper = title.toUpperCase();
      if (upper.includes('FORMULA') || upper.includes('BLUEPRINT')) tag = 'formula';
      else if (upper.includes('QUESTION') || upper.includes('MARKS') || upper.startsWith('Q') || isPyq) tag = 'pyq';
      else if (upper.includes('DIAGRAM') || upper.includes('SCHEMATIC') || upper.includes('FIGURE')) tag = 'diagram';
      else tag = 'notes';
    }

    const cleanItems: StudyItem[] = [];

    if (Array.isArray(sec.items)) {
      sec.items.forEach((item: any) => {
        if (!item || typeof item !== 'object') return;
        const rawText = typeof item.text === 'string' ? item.text.trim() : '';
        if (!rawText) return;

        cleanItems.push({
          type: item.type || 'text',
          text: rawText,
          title: item.title,
          lang: item.lang,
          marks: item.marks,
          year: item.year,
          bulletPoints: Array.isArray(item.bulletPoints) ? item.bulletPoints : undefined,
          tableHeaders: Array.isArray(item.tableHeaders) ? item.tableHeaders : undefined,
          tableRows: Array.isArray(item.tableRows) ? item.tableRows : undefined,
          diagramType: item.diagramType,
          diagramCaption: item.diagramCaption
        });
      });
    }

    // If section had subsections or formulas arrays directly
    if (Array.isArray(sec.subsections)) {
      sec.subsections.forEach((sub: any) => {
        if (sub.title) {
          cleanItems.push({ type: 'subtopic', text: `**${sub.title}**` });
        }
        if (sub.content) {
          cleanItems.push({ type: 'text', text: sub.content });
        }
        if (Array.isArray(sub.bulletPoints)) {
          sub.bulletPoints.forEach((b: string) => cleanItems.push({ type: 'bullet', text: `• ${b}` }));
        }
        if (Array.isArray(sub.formulas)) {
          sub.formulas.forEach((f: string) => cleanItems.push({ type: 'formula', text: f }));
        }
      });
    }

    return {
      title,
      tag,
      marks: sec.marks,
      year: sec.year,
      description: sec.description,
      items: cleanItems.length > 0 ? cleanItems : [{ type: 'text', text: title }]
    };
  });
};

/**
 * Intelligent Markdown & Text Parser that accurately extracts:
 * - Major Sections (H1, H2, TOPIC:, QUESTION:, numbered topics)
 * - Subtopics (H3, H4, bold items)
 * - Formula Blocks ($$...$$, Formula:, When to Apply:)
 * - Derivations (Step-by-step proofs)
 * - Definitions & Laws
 * - Solved Examples & PYQs
 * - Stepwise solutions & CBSE Rubrics
 * - Code & Diagram blocks
 * - Bullet lists & Key takeaways
 */
export const parseMarkdownToSections = (
  rawContent: string,
  isPyq?: boolean,
  isRevision?: boolean
): StudySection[] => {
  if (!rawContent || !rawContent.trim()) return [];

  const lines = rawContent.split(/\r?\n/);
  const parsedSections: StudySection[] = [];
  let currentSection: StudySection | null = null;

  let inCodeBlock = false;
  let codeLines: string[] = [];
  let codeLang = '';

  let inFormulaBlock = false;
  let formulaLines: string[] = [];

  let inDerivationBlock = false;
  let derivationLines: string[] = [];

  const flushFormulaBlock = () => {
    if (formulaLines.length > 0 && currentSection) {
      currentSection.items.push({
        type: 'formula',
        text: cleanMathAndSymbols(formulaLines.join('\n'))
      });
      formulaLines = [];
    }
    inFormulaBlock = false;
  };

  const flushDerivationBlock = () => {
    if (derivationLines.length > 0 && currentSection) {
      currentSection.items.push({
        type: 'derivation',
        text: derivationLines.join('\n')
      });
      derivationLines = [];
    }
    inDerivationBlock = false;
  };

  const ensureCurrentSection = () => {
    if (!currentSection) {
      currentSection = {
        title: isRevision
          ? 'Master Syllabus Overview'
          : isPyq
          ? 'CBSE Solved Past Year Questions'
          : 'Chapter Concept Master Vault',
        tag: isPyq ? 'pyq' : 'notes',
        items: []
      };
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const trimmed = rawLine.trim();

    // 1. Code Block Handling
    if (trimmed.startsWith('```')) {
      flushFormulaBlock();
      flushDerivationBlock();
      if (inCodeBlock) {
        ensureCurrentSection();
        currentSection!.items.push({
          type: 'code',
          text: codeLines.join('\n'),
          lang: codeLang || 'code'
        });
        inCodeBlock = false;
        codeLines = [];
        codeLang = '';
      } else {
        inCodeBlock = true;
        codeLang = trimmed.substring(3).trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeLines.push(rawLine);
      continue;
    }

    // 2. Math Formula Block ($$ ... $$)
    if (trimmed.startsWith('$$')) {
      flushDerivationBlock();
      if (trimmed.length > 2 && trimmed.endsWith('$$') && trimmed !== '$$') {
        // Single line $$ equation $$
        const equation = trimmed.slice(2, -2).trim();
        ensureCurrentSection();
        currentSection!.items.push({
          type: 'formula',
          text: cleanMathAndSymbols(equation)
        });
        continue;
      }

      if (inFormulaBlock) {
        flushFormulaBlock();
      } else {
        inFormulaBlock = true;
      }
      continue;
    }

    if (inFormulaBlock) {
      if (trimmed.endsWith('$$')) {
        formulaLines.push(trimmed.slice(0, -2));
        flushFormulaBlock();
      } else {
        formulaLines.push(rawLine);
      }
      continue;
    }

    // Skip empty lines (unless inside code/formula)
    if (!trimmed) {
      flushDerivationBlock();
      continue;
    }

    // 2.5 DIAGRAM DIRECTIVE: e.g. DIAGRAM: prism_refraction | Caption
    if (trimmed.toUpperCase().startsWith('DIAGRAM:') || trimmed.toUpperCase().startsWith('[DIAGRAM:')) {
      flushFormulaBlock();
      flushDerivationBlock();
      const rawDiag = trimmed
        .replace(/^\[?DIAGRAM:?\s*/i, '')
        .replace(/\]$/, '')
        .trim();
      const [dtypeRaw, ...captionParts] = rawDiag.split('|');
      const diagType = dtypeRaw.trim().toLowerCase();
      const diagCaption = captionParts.join('|').trim();

      ensureCurrentSection();
      currentSection!.items.push({
        type: 'diagram',
        text: rawDiag,
        diagramType: diagType,
        diagramCaption: diagCaption || undefined
      });
      continue;
    }

    // 2.6 MARKDOWN TABLE PARSING: e.g. | Round | Match | Teams | ...
    if (trimmed.startsWith('|') && trimmed.endsWith('|') && trimmed.length > 2) {
      flushFormulaBlock();
      flushDerivationBlock();
      const tableLines: string[] = [];
      let tempIndex = i;

      while (tempIndex < lines.length) {
        const row = lines[tempIndex].trim();
        if (row.startsWith('|') && row.endsWith('|')) {
          tableLines.push(row);
          tempIndex++;
        } else {
          break;
        }
      }

      if (tableLines.length >= 2) {
        i = tempIndex - 1; // Advance loop
        const headers = tableLines[0]
          .split('|')
          .slice(1, -1)
          .map(cell => cell.trim());

        let dataStartIndex = 1;
        // Check if second line is separator like |:---|:---| or |---|---|
        if (tableLines.length > 1 && /^\|[\s\-:|]+\|$/.test(tableLines[1])) {
          dataStartIndex = 2;
        }

        const rows = tableLines.slice(dataStartIndex).map(r => 
          r.split('|').slice(1, -1).map(cell => cell.trim())
        );

        ensureCurrentSection();
        currentSection!.items.push({
          type: 'table',
          text: tableLines.join('\n'),
          tableHeaders: headers,
          tableRows: rows
        });
        continue;
      }
    }

    // Skip decorative dividers like --- or === or |---|
    if (/^[\|=_\-\s*●·○#~]+$/.test(trimmed) && trimmed.length > 3 && !trimmed.startsWith('#')) {
      continue;
    }

    // Strip outer markdown table pipes if any
    let scrubbed = trimmed.replace(/^(\|)+|(\|)+$/g, '').trim();
    if (!scrubbed) continue;

    const upper = scrubbed.toUpperCase();

    // 3. MAJOR SECTION HEADER DETECTION
    // Handles:
    // - # Heading 1 (e.g. # Chapter 1: Electric Charges)
    // - ## Heading 2 (e.g. ## 1. Electric Charge, ## Formula Vault)
    // - TOPIC: ...
    // - QUESTION: ... / Q1. [5 Marks, Delhi 2024] ...
    // - **1. Topic Name:** / 1. Topic Name:
    // - Section 1: / Topic 1:
    const isH1 = trimmed.startsWith('# ') && !trimmed.startsWith('## ');
    const isH2 = trimmed.startsWith('## ') && !trimmed.startsWith('### ');
    const isTopicPrefix = upper.startsWith('TOPIC:');
    const isQuestionPrefix =
      upper.startsWith('QUESTION:') ||
      upper.startsWith('Q:') ||
      /^Q\d+[\.:\s]/i.test(scrubbed) ||
      /^Question\s*\d+[\.:\s]/i.test(scrubbed);
    const isBoldNumberedSection =
      /^\*\*\d+[\.\)]\s+[^:]+(?::\*\*)?$/i.test(trimmed) ||
      /^\*\*\d+[\.\)]\s+[^*]+:\*\*$/i.test(trimmed);
    const isNumberedMajorSection =
      /^(?:Section|Topic|Chapter|Module)\s*\d+[\.:\-]\s*/i.test(scrubbed) ||
      (/^\d+[\.\)]\s+[A-Z][A-Za-z0-9\s\-–—,&/()]{2,70}:?$/i.test(scrubbed) &&
        !scrubbed.includes('=') &&
        !scrubbed.includes('+') &&
        !scrubbed.includes('->'));

    const isMajorSection =
      isH1 ||
      isH2 ||
      isTopicPrefix ||
      isQuestionPrefix ||
      isBoldNumberedSection ||
      isNumberedMajorSection;

    if (isMajorSection) {
      flushFormulaBlock();
      flushDerivationBlock();

      if (currentSection && currentSection.items.length > 0) {
        parsedSections.push(currentSection);
      }

      // Clean the title
      let cleanTitle = scrubbed
        .replace(/^#+\s*/, '')
        .replace(/^TOPIC:\s*/i, '')
        .replace(/^QUESTION:\s*/i, '')
        .replace(/^Q:\s*/i, '')
        .replace(/^Q\d+[\.:\s]*/i, '')
        .replace(/^Question\s*\d+[\.:\s]*/i, '')
        .replace(/^\*\*/, '')
        .replace(/\*\*$/, '')
        .replace(/\*\*/g, '')
        .replace(/:$/, '')
        .trim();

      // Determine Tag
      let sectionTag: StudySection['tag'] = 'notes';
      const titleUpper = cleanTitle.toUpperCase();
      if (titleUpper.includes('FORMULA') || titleUpper.includes('BLUEPRINT') || titleUpper.includes('WHEN-TO-APPLY')) {
        sectionTag = 'formula';
      } else if (
        titleUpper.includes('QUESTION') ||
        titleUpper.includes('MARKS') ||
        titleUpper.includes('PYQ') ||
        isQuestionPrefix ||
        isPyq
      ) {
        sectionTag = 'pyq';
      } else if (
        titleUpper.includes('DIAGRAM') ||
        titleUpper.includes('SCHEMATIC') ||
        titleUpper.includes('CIRCUIT') ||
        titleUpper.includes('RAY DIAGRAM')
      ) {
        sectionTag = 'diagram';
      }

      // Extract marks badge e.g. [5 Marks, Delhi 2024] or (3 Marks)
      const marksMatch = scrubbed.match(/[\[\(]([0-9]+\s*Marks?[^\]\)]*)[\]\)]/i);
      const marks = marksMatch ? marksMatch[1].trim() : undefined;

      currentSection = {
        title: cleanTitle || 'Core Topic',
        tag: sectionTag,
        marks,
        items: []
      };
      continue;
    }

    ensureCurrentSection();

    // 3.5 Check if line is a special directive before checking subtopics
    const isSpecialDirective =
      upper.startsWith('DEFINITION:') ||
      upper.startsWith('**DEFINITION') ||
      upper.startsWith('- **DEFINITION') ||
      upper.startsWith('LAW:') ||
      upper.startsWith('**LAW') ||
      upper.startsWith('- **LAW') ||
      upper.startsWith('STATEMENT:') ||
      upper.startsWith('**STATEMENT') ||
      upper.startsWith('PRINCIPLE:') ||
      upper.startsWith('**PRINCIPLE') ||
      upper.startsWith('THEOREM:') ||
      upper.startsWith('**THEOREM') ||
      upper.startsWith('DERIVATION:') ||
      upper.startsWith('**DERIVATION') ||
      upper.startsWith('- **DERIVATION') ||
      upper.startsWith('PROOF:') ||
      upper.startsWith('**PROOF') ||
      upper.startsWith('MATHEMATICAL PROOF:') ||
      upper.startsWith('**MATHEMATICAL DERIVATION') ||
      upper.startsWith('INSIGHT:') ||
      upper.startsWith('**INSIGHT') ||
      upper.startsWith('- **INSIGHT') ||
      upper.startsWith('EXAMINER TIP:') ||
      upper.startsWith('**EXAMINER TIP') ||
      upper.startsWith('- **EXAMINER TIP') ||
      upper.startsWith('EXAMINER TRAP:') ||
      upper.startsWith('**EXAMINER TRAP') ||
      upper.startsWith('- **EXAMINER TRAP') ||
      upper.startsWith('EXAMINER INSIGHT:') ||
      upper.startsWith('**EXAMINER INSIGHT') ||
      upper.startsWith('EXAMINER NOTE:') ||
      upper.startsWith('**EXAMINER NOTE') ||
      upper.startsWith('TIP:') ||
      upper.startsWith('**TIP') ||
      upper.startsWith('NOTE:') ||
      upper.startsWith('**NOTE') ||
      upper.startsWith('IMPORTANT NOTE:') ||
      upper.startsWith('**IMPORTANT NOTE') ||
      upper.startsWith('COMMON MISTAKE:') ||
      upper.startsWith('**COMMON MISTAKE') ||
      upper.startsWith('FORMULA:') ||
      upper.startsWith('**FORMULA') ||
      upper.startsWith('EQUATION:') ||
      upper.startsWith('**EQUATION') ||
      upper.startsWith('APPLICATION:') ||
      upper.startsWith('**APPLICATION') ||
      upper.startsWith('KEY POINTS:') ||
      upper.startsWith('**KEY POINTS') ||
      upper.startsWith('CBSE MARKING RUBRIC:') ||
      upper.startsWith('**CBSE MARKING') ||
      upper.startsWith('SOLUTION:') ||
      upper.startsWith('**SOLUTION') ||
      upper.startsWith('ANSWER:') ||
      upper.startsWith('**ANSWER');

    // 4. SUBTOPIC / CONCEPT HEADER (H3, H4, bold items)
    const isH3OrH4 = trimmed.startsWith('### ') || trimmed.startsWith('#### ');
    const isBoldSubtopic =
      !isSpecialDirective &&
      ((trimmed.startsWith('**') && trimmed.includes(':**')) ||
      (trimmed.startsWith('**') && trimmed.endsWith('**') && trimmed.length < 100 && !trimmed.includes('. ')));
    const isNumberedSubtopic = !isSpecialDirective && /^\d+\.\d+\s+[A-Za-z]/.test(trimmed);

    if (isH3OrH4 || isBoldSubtopic || isNumberedSubtopic) {
      flushDerivationBlock();
      let subtopicText = scrubbed.replace(/^#+\s*/, '').trim();
      currentSection!.items.push({
        type: 'subtopic',
        text: subtopicText
      });
      continue;
    }

    // 5. DEFINITION & LAW CALLOUTS
    if (
      upper.startsWith('DEFINITION:') ||
      upper.startsWith('**DEFINITION:') ||
      upper.startsWith('- **DEFINITION') ||
      upper.startsWith('LAW:') ||
      upper.startsWith('**LAW:') ||
      upper.startsWith('- **LAW') ||
      upper.startsWith('STATEMENT:') ||
      upper.startsWith('**STATEMENT:') ||
      upper.startsWith('- **STATEMENT') ||
      upper.startsWith('PRINCIPLE:') ||
      upper.startsWith('**PRINCIPLE:') ||
      upper.startsWith('- **PRINCIPLE') ||
      upper.startsWith('THEOREM:') ||
      upper.startsWith('**THEOREM:') ||
      upper.startsWith('- **THEOREM')
    ) {
      flushDerivationBlock();
      const defContent = scrubbed
        .replace(/^[-*•]\s+/, '')
        .replace(/^\*\*(DEFINITION|LAW|STATEMENT|PRINCIPLE|THEOREM)[^:*]*:\*\*/i, '')
        .replace(/^(DEFINITION|LAW|STATEMENT|PRINCIPLE|THEOREM)[^:*]*:\s*/i, '')
        .trim();
      currentSection!.items.push({
        type: 'definition',
        text: defContent || scrubbed
      });
      continue;
    }

    // 6. DERIVATION & PROOF SECTIONS
    if (
      upper.startsWith('DERIVATION:') ||
      upper.startsWith('**DERIVATION') ||
      upper.startsWith('- **DERIVATION') ||
      upper.startsWith('PROOF:') ||
      upper.startsWith('**PROOF') ||
      upper.startsWith('MATHEMATICAL PROOF:') ||
      upper.startsWith('**MATHEMATICAL DERIVATION')
    ) {
      flushDerivationBlock();
      const derivTitle = scrubbed
        .replace(/^[-*•]\s+/, '')
        .replace(/^\*\*(DERIVATION|PROOF|MATHEMATICAL PROOF|MATHEMATICAL DERIVATION)[^:*]*:\*\*/i, '')
        .replace(/^(DERIVATION|PROOF|MATHEMATICAL PROOF|MATHEMATICAL DERIVATION)[^:*]*:\s*/i, '')
        .trim();
      inDerivationBlock = true;
      derivationLines = [derivTitle ? `**${derivTitle}**` : scrubbed];
      continue;
    }

    // If inside derivation block, accumulate steps, equations, and explanatory lines
    if (inDerivationBlock) {
      const isStepLine =
        /^(\*\*)?Step\s*\d+[\.:\-]/i.test(scrubbed) ||
        /^(\*\*)?Stepwise/i.test(scrubbed) ||
        /^[-*•]\s+Step\s*\d+[\.:\-]/i.test(scrubbed);
      const isDerivEquation =
        scrubbed.startsWith('E_') ||
        scrubbed.startsWith('**E_') ||
        scrubbed.startsWith('W =') ||
        scrubbed.startsWith('U =') ||
        scrubbed.startsWith('τ =') ||
        scrubbed.startsWith('Φ') ||
        scrubbed.startsWith('2 E A') ||
        scrubbed.startsWith('E ·') ||
        scrubbed.startsWith('E =') ||
        scrubbed.startsWith('Total Flux') ||
        scrubbed.startsWith('Enclosed charge') ||
        scrubbed.startsWith('Applying Gauss') ||
        scrubbed.startsWith('Substitute') ||
        scrubbed.startsWith('Magnitude') ||
        scrubbed.startsWith('Resultant') ||
        scrubbed.startsWith('Distance') ||
        scrubbed.startsWith('Resolve') ||
        scrubbed.startsWith('Net ') ||
        scrubbed.startsWith('From right') ||
        scrubbed.startsWith('For a short') ||
        scrubbed.startsWith('Consider') ||
        scrubbed.startsWith('Force on') ||
        scrubbed.startsWith('Since forces') ||
        scrubbed.startsWith('In vector') ||
        scrubbed.startsWith('Maximum') ||
        scrubbed.startsWith('Minimum') ||
        scrubbed.startsWith('Small work') ||
        scrubbed.startsWith('Total work') ||
        scrubbed.startsWith('Electrostatic') ||
        scrubbed.startsWith('By cylindrical') ||
        scrubbed.startsWith('Choose a') ||
        scrubbed.startsWith('The Gaussian') ||
        scrubbed.startsWith('Dependency:') ||
        scrubbed.startsWith('By planar') ||
        scrubbed.startsWith('Construct') ||
        scrubbed.startsWith('The curved') ||
        scrubbed.startsWith('The two') ||
        scrubbed.startsWith('Remarkable') ||
        scrubbed.startsWith('Special Case') ||
        scrubbed.startsWith('Between') ||
        scrubbed.startsWith('Outside') ||
        scrubbed.startsWith('Case (i)') ||
        scrubbed.startsWith('Case (ii)') ||
        scrubbed.startsWith('Case (iii)') ||
        scrubbed.startsWith('Draw concentric') ||
        scrubbed.startsWith('By spherical') ||
        scrubbed.startsWith('Significance:') ||
        scrubbed.startsWith('Discontinuity');

      if (isStepLine || isDerivEquation) {
        derivationLines.push(scrubbed);
        continue;
      }

      // If it doesn't match derivation continuation, close derivation
      flushDerivationBlock();
    }

    // 7. EXAMINER INSIGHTS, TIPS, TRAPS & NOTES
    if (
      upper.startsWith('INSIGHT:') ||
      upper.startsWith('**INSIGHT') ||
      upper.startsWith('- **INSIGHT') ||
      upper.startsWith('EXAMINER TIP:') ||
      upper.startsWith('**EXAMINER TIP') ||
      upper.startsWith('- **EXAMINER TIP') ||
      upper.startsWith('EXAMINER TRAP:') ||
      upper.startsWith('**EXAMINER TRAP') ||
      upper.startsWith('- **EXAMINER TRAP') ||
      upper.startsWith('EXAMINER INSIGHT:') ||
      upper.startsWith('**EXAMINER INSIGHT') ||
      upper.startsWith('EXAMINER NOTE:') ||
      upper.startsWith('**EXAMINER NOTE') ||
      upper.startsWith('TIP:') ||
      upper.startsWith('**TIP') ||
      upper.startsWith('NOTE:') ||
      upper.startsWith('**NOTE') ||
      upper.startsWith('IMPORTANT NOTE:') ||
      upper.startsWith('**IMPORTANT NOTE') ||
      upper.startsWith('COMMON MISTAKE:') ||
      upper.startsWith('**COMMON MISTAKE') ||
      upper.startsWith('- **COMMON MISTAKE') ||
      trimmed.startsWith('> ')
    ) {
      flushDerivationBlock();
      const insightContent = scrubbed
        .replace(/^>\s*/, '')
        .replace(/^[-*•]\s+/, '')
        .replace(/^\*\*(INSIGHT|EXAMINER TIP|EXAMINER TRAP|EXAMINER INSIGHT|EXAMINER NOTE|TIP|NOTE|IMPORTANT NOTE|COMMON MISTAKE)[^:*]*:\*\*/i, '')
        .replace(/^(INSIGHT|EXAMINER TIP|EXAMINER TRAP|EXAMINER INSIGHT|EXAMINER NOTE|TIP|NOTE|IMPORTANT NOTE|COMMON MISTAKE)[^:*]*:\s*/i, '')
        .trim();
      currentSection!.items.push({
        type: 'insight',
        text: insightContent || scrubbed
      });
      continue;
    }

    // 8. FORMULA BLOCKS & WHEN-TO-APPLY
    if (
      upper.startsWith('FORMULA:') ||
      upper.startsWith('**FORMULA:**') ||
      upper.startsWith('EQUATION:') ||
      upper.startsWith('**EQUATION:**') ||
      upper.includes('WHEN & WHY TO APPLY:') ||
      upper.includes('WHEN TO APPLY:') ||
      (trimmed.startsWith('- **') && (trimmed.includes('Formula:') || trimmed.includes('Equation:')))
    ) {
      flushDerivationBlock();
      currentSection!.items.push({
        type: 'formula',
        text: cleanMathAndSymbols(scrubbed)
      });
      continue;
    }

    // 9. CBSE MARKING RUBRIC
    if (
      upper.startsWith('CBSE MARKING RUBRIC:') ||
      upper.startsWith('**CBSE MARKING RUBRIC:**') ||
      upper.startsWith('MARKING RUBRIC:') ||
      upper.startsWith('**MARKING RUBRIC:**') ||
      upper.startsWith('MARKING SCHEME:') ||
      upper.startsWith('**MARKING SCHEME:**')
    ) {
      flushDerivationBlock();
      const rubricContent = scrubbed
        .replace(/^\*\*(CBSE MARKING RUBRIC|MARKING RUBRIC|MARKING SCHEME):\*\*/i, '')
        .replace(/^(CBSE MARKING RUBRIC|MARKING RUBRIC|MARKING SCHEME):\s*/i, '')
        .trim();
      currentSection!.items.push({
        type: 'rubric',
        text: rubricContent || scrubbed
      });
      continue;
    }

    // 10. SOLUTION BLOCKS
    if (
      upper.startsWith('SOLUTION:') ||
      upper.startsWith('**SOLUTION:**') ||
      upper.startsWith('ANSWER:') ||
      upper.startsWith('**ANSWER:**')
    ) {
      flushDerivationBlock();
      const solContent = scrubbed
        .replace(/^\*\*(SOLUTION|ANSWER):\*\*/i, '')
        .replace(/^(SOLUTION|ANSWER):\s*/i, '')
        .trim();
      currentSection!.items.push({
        type: 'solution',
        text: solContent || scrubbed
      });
      continue;
    }

    // 11. STEP ITEMS (Step 1, Step 2, etc.)
    if (
      /^(\*\*)?Step\s*\d+[\.:\-]/i.test(scrubbed) ||
      /^(\*\*)?Stepwise Procedure[\.:\-]/i.test(scrubbed)
    ) {
      currentSection!.items.push({
        type: 'step',
        text: scrubbed
      });
      continue;
    }

    // 12. EXAMPLES & MODEL QUESTIONS
    if (
      upper.startsWith('EXAMPLE:') ||
      upper.startsWith('**EXAMPLE:**') ||
      upper.startsWith('SOLVED EXAMPLE:') ||
      upper.startsWith('**SOLVED EXAMPLE:**') ||
      /^(\*\*)?Example\s*\d+[\.:\-]/i.test(scrubbed) ||
      /^(\*\*)?Numerical\s*\d+[\.:\-]/i.test(scrubbed)
    ) {
      flushDerivationBlock();
      currentSection!.items.push({
        type: 'example',
        text: scrubbed
      });
      continue;
    }

    // 13. APPLICATIONS & BOARD CASES
    if (
      upper.startsWith('APPLICATION:') ||
      upper.startsWith('**APPLICATION') ||
      upper.startsWith('APPLICATIONS:') ||
      upper.startsWith('**APPLICATIONS') ||
      upper.startsWith('REAL-WORLD APPLICATIONS:') ||
      upper.startsWith('**REAL-WORLD APPLICATIONS')
    ) {
      flushDerivationBlock();
      const appContent = scrubbed
        .replace(/^[-*•]\s+/, '')
        .replace(/^\*\*(APPLICATION|APPLICATIONS|REAL-WORLD APPLICATIONS)[^:*]*:\*\*/i, '')
        .replace(/^(APPLICATION|APPLICATIONS|REAL-WORLD APPLICATIONS)[^:*]*:\s*/i, '')
        .trim();
      currentSection!.items.push({
        type: 'application',
        text: appContent || scrubbed
      });
      continue;
    }

    // 14. KEY POINTS & SUMMARY
    if (
      upper.startsWith('KEY POINTS:') ||
      upper.startsWith('**KEY POINTS') ||
      upper.startsWith('KEY TAKEAWAYS:') ||
      upper.startsWith('**KEY TAKEAWAYS') ||
      upper.startsWith('SUMMARY POINTS:') ||
      upper.startsWith('**SUMMARY POINTS')
    ) {
      flushDerivationBlock();
      const kpContent = scrubbed
        .replace(/^[-*•]\s+/, '')
        .replace(/^\*\*(KEY POINTS|KEY TAKEAWAYS|SUMMARY POINTS)[^:*]*:\*\*/i, '')
        .replace(/^(KEY POINTS|KEY TAKEAWAYS|SUMMARY POINTS)[^:*]*:\s*/i, '')
        .trim();
      currentSection!.items.push({
        type: 'keypoints',
        text: kpContent || scrubbed
      });
      continue;
    }

    // 15. DIAGRAM / SCHEMATICS
    if (
      upper.startsWith('DIAGRAM:') ||
      upper.startsWith('**DIAGRAM:**') ||
      upper.startsWith('SCHEMATIC:') ||
      upper.startsWith('**SCHEMATIC:**') ||
      upper.startsWith('RAY DIAGRAM:') ||
      upper.startsWith('**RAY DIAGRAM:**') ||
      upper.startsWith('CIRCUIT DIAGRAM:') ||
      upper.startsWith('**CIRCUIT DIAGRAM:**')
    ) {
      flushDerivationBlock();
      currentSection!.items.push({
        type: 'diagram',
        text: scrubbed
      });
      continue;
    }

    // 16. BULLET POINTS
    if (
      trimmed.startsWith('- ') ||
      trimmed.startsWith('* ') ||
      trimmed.startsWith('+ ') ||
      trimmed.startsWith('• ') ||
      /^\([a-z0-9ivx]+\)\s+/i.test(trimmed)
    ) {
      flushDerivationBlock();
      currentSection!.items.push({
        type: 'bullet',
        text: scrubbed
      });
      continue;
    }

    // 17. STANDARD TEXT PARAGRAPH
    flushDerivationBlock();
    currentSection!.items.push({
      type: 'text',
      text: scrubbed
    });
  }

  flushFormulaBlock();
  flushDerivationBlock();

  if (currentSection && currentSection.items.length > 0) {
    parsedSections.push(currentSection);
  }

  return parsedSections;
};

/**
 * Serializes canonical structured notes into clean, well-formatted JSON
 */
export const serializeCanonicalNotes = (notes: CanonicalChapterNotes): string => {
  return JSON.stringify(notes, null, 2);
};

/**
 * Checks if a string is already structured Canonical Notes JSON
 */
export const isCanonicalJSON = (content: string): boolean => {
  if (!content || typeof content !== 'string') return false;
  const trimmed = content.trim();
  if (!trimmed.startsWith('{') || !trimmed.endsWith('}')) return false;
  try {
    const parsed = JSON.parse(trimmed);
    return Boolean(parsed && Array.isArray(parsed.sections));
  } catch {
    return false;
  }
};
