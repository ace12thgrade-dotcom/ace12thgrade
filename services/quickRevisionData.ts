// services/quickRevisionData.ts
// Aggregates real, existing content for Quick Revision:
// - Important Formulas (from formulaVaultService)
// - Important Derivations
// - High-Frequency Board PYQs (from revision question banks)
// - Common Mistakes & Examiner Traps

import { CHAPTER_FORMULA_VAULT } from './formulaVaultService.ts';
import { FormulaData } from '../components/FormulaCard.tsx';
import { getRevisionSubjectData } from './revision/content.ts';
import { RevisionQuestion } from './revision/types.ts';

export interface QuickDerivationItem {
  id: string;
  subjectId: string;
  subjectName: string;
  chapterTitle: string;
  title: string;
  derivationSummary: string[];
  finalFormula: string;
  boardMarks: string;
  frequency: string;
  examinerTip: string;
}

export interface CommonMistakeItem {
  id: string;
  subjectId: string;
  chapterTitle: string;
  topic: string;
  whatStudentsDoWrong: string;
  correctApproach: string;
  boardPenalty: string;
}

// Verified CBSE High-Yield Derivations from Existing Class 12 Syllabus
export const CORE_DERIVATIONS: QuickDerivationItem[] = [
  {
    id: 'd_p1_gauss_wire',
    subjectId: 'physics',
    subjectName: 'Physics',
    chapterTitle: 'Electric Charges and Fields',
    title: 'Electric Field due to Infinitely Long Straight Uniformly Charged Wire',
    derivationSummary: [
      '1. Consider an infinitely long wire with uniform linear charge density λ = q/L.',
      '2. Construct a coaxial Gaussian cylinder of radius r and length L around the wire.',
      '3. Electric flux through flat circular end caps is zero because E is perpendicular to area vector (cos 90° = 0).',
      '4. Total flux through curved surface = E · (2πrL) · cos 0° = E · 2πrL.',
      '5. By Gauss Law: Φ = q_enclosed / ε₀ = (λ · L) / ε₀.',
      '6. Equating: E · 2πrL = (λ · L) / ε₀  =>  E = λ / (2πε₀r).'
    ],
    finalFormula: 'E = λ / (2πε₀r)   [directed radially outward if λ > 0]',
    boardMarks: '3 Marks (CBSE 2024, 2022, 2019)',
    frequency: 'Asked 6+ times in past 10 years',
    examinerTip: 'Must mention why flux through circular end caps is zero (E ⊥ n̂) to get the first 1 mark.'
  },
  {
    id: 'd_p1_gauss_sheet',
    subjectId: 'physics',
    subjectName: 'Physics',
    chapterTitle: 'Electric Charges and Fields',
    title: 'Electric Field due to Uniformly Charged Infinite Plane Sheet',
    derivationSummary: [
      '1. Let surface charge density be σ. Construct a Gaussian pillbox (cylinder) of cross-sectional area A perpendicular to sheet.',
      '2. Flux through curved cylindrical surface is zero as E is parallel to curved surface.',
      '3. Flux through both flat end caps = 2 · (E · A).',
      '4. Enclosed charge q_in = σ · A.',
      '5. By Gauss Law: 2 · E · A = (σ · A) / ε₀  =>  E = σ / (2ε₀).'
    ],
    finalFormula: 'E = σ / (2ε₀)   [independent of distance r from sheet]',
    boardMarks: '3 Marks (CBSE 2023, 2020)',
    frequency: 'Repeated high-priority board derivation',
    examinerTip: 'Conclude explicitly that E is independent of distance r from the infinite plane sheet.'
  },
  {
    id: 'd_p9_lens_maker',
    subjectId: 'physics',
    subjectName: 'Physics',
    chapterTitle: 'Ray Optics & Optical Instruments',
    title: "Lens Maker's Formula for a Thin Convex Lens",
    derivationSummary: [
      '1. Refraction at first surface (radius R₁): (n₂ / v₁) - (n₁ / u) = (n₂ - n₁) / R₁.',
      '2. Refraction at second surface (radius R₂): (n₁ / v) - (n₂ / v₁) = (n₁ - n₂) / R₂ = - (n₂ - n₁) / R₂.',
      '3. Adding both surface equations: (n₁ / v) - (n₁ / u) = (n₂ - n₁) · [1/R₁ - 1/R₂].',
      '4. Dividing through by n₁: (1/v) - (1/u) = (n₂/n₁ - 1) · [1/R₁ - 1/R₂].',
      '5. When u = ∞, v = f. Therefore: 1/f = (n - 1) · [1/R₁ - 1/R₂].'
    ],
    finalFormula: '1/f = (n₂/n₁ - 1) · (1/R₁ - 1/R₂)',
    boardMarks: '5 Marks (CBSE 2024, 2023, 2018)',
    frequency: 'Highest weightage derivation in Ray Optics',
    examinerTip: 'Draw both refracting surfaces with centers of curvature C₁ and C₂ and virtual object position.'
  },
  {
    id: 'd_c2_nernst',
    subjectId: 'chemistry',
    subjectName: 'Chemistry',
    chapterTitle: 'Electrochemistry',
    title: 'Nernst Equation for Electrode Potential and Electrochemical Cell',
    derivationSummary: [
      '1. From thermodynamics: ΔG = ΔG° + 2.303 RT log Q.',
      '2. Relate electrical work to free energy: ΔG = -nFE and ΔG° = -nFE°.',
      '3. Substitute: -nFE = -nFE° + 2.303 RT log Q.',
      '4. Divide through by -nF: E = E° - (2.303 RT / nF) · log Q.',
      '5. At standard 298 K (25°C): (2.303 · R · 298) / F = 0.0591 V.',
      '6. E_cell = E°_cell - (0.0591 / n) · log [Anode ion] / [Cathode ion].'
    ],
    finalFormula: 'E_cell = E°_cell - (0.0591 / n) · log([Products] / [Reactants])',
    boardMarks: '3 Marks / 5 Marks Numerical (CBSE Every Year)',
    frequency: '100% compulsory topic across all board sets',
    examinerTip: 'Ensure n is balanced (e.g. for Daniell cell Zn + Cu²⁺, n = 2; for Al + Cu²⁺, n = 6).'
  },
  {
    id: 'd_m7_by_parts',
    subjectId: 'maths',
    subjectName: 'Mathematics',
    chapterTitle: 'Integrals',
    title: 'Standard Integration by Parts Theorem',
    derivationSummary: [
      '1. Start with derivative of product of two functions: d/dx [u · v] = u · (dv/dx) + v · (du/dx).',
      '2. Integrate both sides with respect to x: u · v = ∫ u (dv/dx) dx + ∫ v (du/dx) dx.',
      '3. Let u = f(x) and dv/dx = g(x) => v = ∫ g(x) dx.',
      '4. Rearranging terms: ∫ f(x) g(x) dx = f(x) ∫ g(x) dx - ∫ [f\'(x) · ∫ g(x) dx] dx.'
    ],
    finalFormula: '∫ (First · Second) dx = First · ∫ Second dx - ∫ [d/dx(First) · ∫ Second dx] dx',
    boardMarks: '3 Marks (Applied in 5-Mark Integral Questions)',
    frequency: 'Standard calculus core tool',
    examinerTip: 'Use ILATE rule (Inverse, Logarithmic, Algebraic, Trigonometric, Exponential) to select First function.'
  }
];

// Curated CBSE Examiner Common Mistakes & Traps
export const CORE_COMMON_MISTAKES: CommonMistakeItem[] = [
  {
    id: 'm1',
    subjectId: 'physics',
    chapterTitle: 'Electric Charges and Fields',
    topic: 'Dipole Separation 2a',
    whatStudentsDoWrong: 'Doubling the distance 2a to 4a when distance between charges is given as 4 cm.',
    correctApproach: 'The total separation between charges IS 2a = 4 cm = 4 × 10⁻² m. "a" is 2 cm.',
    boardPenalty: 'Loss of 1 mark in dipole numericals due to arithmetic substitution error.'
  },
  {
    id: 'm2',
    subjectId: 'physics',
    chapterTitle: 'Alternating Current',
    topic: 'RMS vs Peak Voltage',
    whatStudentsDoWrong: 'Using peak voltage V₀ in power calculation P = V · I instead of RMS voltage V_rms = V₀ / √2.',
    correctApproach: 'Domestic and AC instrument readings are ALWAYS RMS values. P = V_rms · I_rms · cos φ.',
    boardPenalty: 'Loss of 1.5 marks on 3-mark LCR circuit problems.'
  },
  {
    id: 'm3',
    subjectId: 'chemistry',
    chapterTitle: 'Solutions',
    topic: "Van 't Hoff Factor 'i' in Colligative Formulas",
    whatStudentsDoWrong: 'Calculating ΔT_b or ΔT_f for ionic salts (like NaCl, BaCl₂, K₂SO₄) using ΔT = K·m without multiplying by i.',
    correctApproach: 'Always use ΔT_b = i · K_b · m. For completely dissociated BaCl₂, i = 3 (one Ba²⁺ and two Cl⁻).',
    boardPenalty: 'Complete loss of 2-3 marks on physical chemistry board numericals.'
  },
  {
    id: 'm4',
    subjectId: 'chemistry',
    chapterTitle: 'Chemical Kinetics',
    topic: 'Units of Rate Constant k',
    whatStudentsDoWrong: 'Writing mol L⁻¹ s⁻¹ for all reaction orders.',
    correctApproach: 'Units of k depend on overall order n: Unit = (mol/L)^(1-n) · s⁻¹. For first order (n=1), unit is s⁻¹.',
    boardPenalty: '0.5 mark deduction per question for missing or wrong SI units.'
  },
  {
    id: 'm5',
    subjectId: 'maths',
    chapterTitle: 'Integrals',
    topic: 'Definite Integrals Adding 2I',
    whatStudentsDoWrong: 'Applying King’s Property ∫₀ᵃ f(x) = ∫₀ᵃ f(a-x), obtaining 2I = π/2, but forgetting to divide by 2 for final I.',
    correctApproach: 'Always explicitly write: 2I = π/2 => I = π/4.',
    boardPenalty: 'Loss of 1 mark on final step of 4-mark integral question.'
  }
];

// Helper to get all formulas across all subjects
export const getAllCuratedFormulas = (): { subject: string; chapterTitle: string; formula: FormulaData }[] => {
  const result: { subject: string; chapterTitle: string; formula: FormulaData }[] = [];
  Object.entries(CHAPTER_FORMULA_VAULT).forEach(([chapterTitle, formulas]) => {
    formulas.forEach(formula => {
      let sub = 'Physics';
      if (chapterTitle.includes('Solution') || chapterTitle.includes('Electrochem') || chapterTitle.includes('Kinetics')) {
        sub = 'Chemistry';
      } else if (chapterTitle.includes('Integral') || chapterTitle.includes('Matrix') || chapterTitle.includes('Relation')) {
        sub = 'Mathematics';
      }
      result.push({
        subject: sub,
        chapterTitle,
        formula
      });
    });
  });
  return result;
};

// Helper to get high-frequency PYQs across subjects from existing revision data
export const getHighFrequencyPYQs = (subjectId?: string): RevisionQuestion[] => {
  const targetSubjects = subjectId ? [subjectId] : ['physics', 'chemistry', 'maths', 'biology', 'cs'];
  const result: RevisionQuestion[] = [];

  targetSubjects.forEach(sid => {
    const data = getRevisionSubjectData(sid);
    if (data && data.questions) {
      // Pick top high priority & frequently asked questions
      const top = data.questions.filter(
        q => q.label === 'Frequently Asked' || q.label === 'High Priority' || q.label === 'Must Practice'
      ).slice(0, 5);
      result.push(...top);
    }
  });

  return result;
};
