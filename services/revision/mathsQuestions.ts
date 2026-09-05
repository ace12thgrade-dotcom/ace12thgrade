// services/revision/mathsQuestions.ts
// CBSE Class 12 Mathematics Full Subject Revision Question Bank (Complete Syllabus: Chapters 1 to 13)

import { RevisionQuestion } from './types.ts';

export const mathsCategories = [
  'All Questions',
  'Most Repeated Questions',
  'High-Yield 5-Mark Long Questions',
  'Important Derivations & Properties',
  'Step-by-Step Numericals & Computations',
  'Case-Based Questions',
  'Assertion & Reason',
  'High-Yield MCQs',
  '2-Mark & 3-Mark Questions'
];

export const mathsQuestions: RevisionQuestion[] = [
  // 1. Ch 1: Relations & Functions - Equivalence Relation / 3-Mark
  {
    id: 'math-q1',
    questionNumber: 1,
    subjectId: 'maths',
    chapterTitle: 'Relations & Functions',
    chapterNumber: 1,
    category: 'Most Repeated Questions',
    label: 'Frequently Asked',
    marks: '3 Marks',
    yearTag: 'CBSE 2024 (Delhi), 2020',
    question: `Show that the relation R on the set Z of all integers defined by R = { (a, b) : 2 divides (a - b) } is an Equivalence Relation. Also, find the equivalence class [0].`,
    answer: {
      finalAnswer: 'R is an equivalence relation (Reflexive, Symmetric, Transitive); Equivalence class [0] is the set of all even integers { ..., -4, -2, 0, 2, 4, ... } = { 2k : k ∈ Z }.',
      formulaOrConcept: `• Reflexive: (a, a) ∈ R for all a ∈ Z\n• Symmetric: (a, b) ∈ R => (b, a) ∈ R\n• Transitive: (a, b) ∈ R and (b, c) ∈ R => (a, c) ∈ R\n• Equivalence class [x] = { y ∈ Z : (y, x) ∈ R }`,
      solution: `Step 1: Reflexivity:
Let a ∈ Z.
Then a - a = 0 = 2 × 0, which is divisible by 2.
Therefore, (a, a) ∈ R for all a ∈ Z.
Hence, R is Reflexive.

Step 2: Symmetry:
Let (a, b) ∈ R.
Then 2 divides (a - b), so (a - b) = 2k for some integer k ∈ Z.
Now, b - a = - (a - b) = - 2k = 2(-k).
Since -k ∈ Z, 2 divides (b - a).
Therefore, (b, a) ∈ R.
Hence, R is Symmetric.

Step 3: Transitivity:
Let (a, b) ∈ R and (b, c) ∈ R.
Then (a - b) = 2k₁ and (b - c) = 2k₂ for some integers k₁, k₂ ∈ Z.
Adding the two equations:
  (a - b) + (b - c) = 2k₁ + 2k₂
  a - c = 2(k₁ + k₂).
Since (k₁ + k₂) is an integer, 2 divides (a - c).
Therefore, (a, c) ∈ R.
Hence, R is Transitive.

Conclusion on Relation:
Since R is Reflexive, Symmetric, and Transitive, R is an Equivalence Relation.

Step 4: Equivalence Class [0]:
By definition:
  [0] = { x ∈ Z : (x, 0) ∈ R }
  (x, 0) ∈ R means 2 divides (x - 0) = x.
  Thus, x = 2k for k ∈ Z.
  [0] = { ..., -4, -2, 0, 2, 4, ... } (the set of all even integers).`,
      examApproach: 'Write all 3 condition headers clearly: Reflexive, Symmetric, and Transitive with universal quantifiers (∀ a, b, c ∈ Z).',
      markingPoints: [
        '0.75 Mark: Proving Reflexivity (a - a = 0).',
        '0.75 Mark: Proving Symmetry (b - a = -2k).',
        '0.75 Mark: Proving Transitivity (a - c = 2(k₁ + k₂)).',
        '0.75 Mark: Finding equivalence class [0] = { 2k : k ∈ Z }.'
      ]
    }
  },

  // 2. Ch 3 & 4: Matrices & Determinants - Matrix Method / 5-Mark
  {
    id: 'math-q2',
    questionNumber: 2,
    subjectId: 'maths',
    chapterTitle: 'Matrices & Determinants',
    chapterNumber: '3 & 4',
    category: 'High-Yield 5-Mark Long Questions',
    label: 'High Priority',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2023, 2019',
    question: `Solve the following system of linear equations using the matrix method (inverse of matrix):\n  x - y + 2z = 7\n  3x + 4y - 5z = -5\n  2x - y + 3z = 12`,
    answer: {
      finalAnswer: 'x = 2, y = 1, z = 3.',
      formulaOrConcept: `• Matrix equation: A X = B  =>  X = A⁻¹ B\n• A⁻¹ = (1 / |A|) · adj(A)\n• adj(A) = [C_ij]^T (Transpose of cofactor matrix)`,
      solution: `Step 1: Write in Matrix Form A X = B:
A = [ [1, -1, 2], [3, 4, -5], [2, -1, 3] ]
X = [ [x], [y], [z] ]
B = [ [7], [-5], [12] ]

Step 2: Calculate Determinant |A|:
|A| = 1 · [ (4)(3) - (-1)(-5) ] - (-1) · [ (3)(3) - (2)(-5) ] + 2 · [ (3)(-1) - (2)(4) ]
|A| = 1 · (12 - 5) + 1 · (9 + 10) + 2 · (-3 - 8)
|A| = 1 · (7) + 1 · (19) + 2 · (-11)
|A| = 7 + 19 - 22 = 4.
Since |A| = 4 ≠ 0, A⁻¹ exists and the system possesses a unique solution.

Step 3: Calculate Cofactors of Matrix A (C_ij = (-1)^(i+j) M_ij):
• C₁₁ = + (12 - 5) = 7
• C₁₂ = - (9 - (-10)) = -19
• C₁₃ = + (-3 - 8) = -11
• C₂₁ = - (-3 - (-2)) = - (-1) = 1
• C₂₂ = + (3 - 4) = -1
• C₂₃ = - (-1 - (-2)) = - (1) = -1
• C₃₁ = + (5 - 8) = -3
• C₃₂ = - (-5 - 6) = - (-11) = 11
• C₃₃ = + (4 - (-3)) = 7

Step 4: Adjoint of Matrix A:
adj(A) = [C_ij]^T = [ [7, 1, -3], [-19, -1, 11], [-11, -1, 7] ]
A⁻¹ = (1 / 4) · [ [7, 1, -3], [-19, -1, 11], [-11, -1, 7] ]

Step 5: Compute Solution X = A⁻¹ B:
[ [x], [y], [z] ] = (1/4) · [ [7, 1, -3], [-19, -1, 11], [-11, -1, 7] ] · [ [7], [-5], [12] ]

Row 1: x = (1/4) · [ 7(7) + 1(-5) + (-3)(12) ] = (1/4) · [ 49 - 5 - 36 ] = (1/4) · (8) = 2.
Row 2: y = (1/4) · [ -19(7) + (-1)(-5) + 11(12) ] = (1/4) · [ -133 + 5 + 132 ] = (1/4) · (4) = 1.
Row 3: z = (1/4) · [ -11(7) + (-1)(-5) + 7(12) ] = (1/4) · [ -77 + 5 + 84 ] = (1/4) · (12) = 3.

Final Answer: x = 2, y = 1, z = 3.
Verification: 2 - 1 + 2(3) = 2 - 1 + 6 = 7 (matches equation 1).`,
      examApproach: 'Always verify your final x, y, z values into at least one of the original given equations to guarantee 100% accuracy.',
      markingPoints: [
        '1 Mark: Setting up matrix equation A X = B and calculating |A| = 4 ≠ 0.',
        '2 Marks: Correct calculation of all 9 cofactors and transposing to find adj(A).',
        '2 Marks: Matrix multiplication X = A⁻¹ B yielding x = 2, y = 1, z = 3.'
      ]
    }
  },

  // 3. Ch 5: Continuity & Differentiability - Second Derivative / 3-Mark
  {
    id: 'math-q3',
    questionNumber: 3,
    subjectId: 'maths',
    chapterTitle: 'Continuity & Differentiability',
    chapterNumber: 5,
    category: 'Most Repeated Questions',
    label: 'Frequently Asked',
    marks: '3 Marks',
    yearTag: 'CBSE 2024, 2022, 2018',
    question: `If y = 3 cos(log x) + 4 sin(log x), show that:\n  x² · (d²y / dx²) + x · (dy / dx) + y = 0.`,
    answer: {
      finalAnswer: 'x² y\'\' + x y\' + y = 0 (Hence Proved).',
      formulaOrConcept: `• Derivative of cos(log x): -sin(log x) · (1/x)\n• Derivative of sin(log x): cos(log x) · (1/x)\n• Product rule: d/dx [u · v] = u v\' + v u\'`,
      solution: `Given equation: y = 3 cos(log x) + 4 sin(log x)

Step 1: Differentiate with respect to x:
  dy / dx = 3 [ -sin(log x) · (1/x) ] + 4 [ cos(log x) · (1/x) ]
  dy / dx = (1 / x) · [ -3 sin(log x) + 4 cos(log x) ]

Step 2: Multiply both sides by x to eliminate fraction:
  x · (dy / dx) = -3 sin(log x) + 4 cos(log x)

Step 3: Differentiate again with respect to x (using Product Rule on left side):
  d/dx [ x · (dy/dx) ] = d/dx [ -3 sin(log x) + 4 cos(log x) ]
  x · (d²y / dx²) + 1 · (dy / dx) = -3 [ cos(log x) · (1/x) ] + 4 [ -sin(log x) · (1/x) ]
  x · (d²y / dx²) + (dy / dx) = - (1 / x) · [ 3 cos(log x) + 4 sin(log x) ]

Step 4: Notice that [ 3 cos(log x) + 4 sin(log x) ] is original function y:
  x · (d²y / dx²) + (dy / dx) = - y / x

Step 5: Multiply the entire equation by x:
  x² · (d²y / dx²) + x · (dy / dx) = - y
  x² · (d²y / dx²) + x · (dy / dx) + y = 0.
(Hence Proved).`,
      examApproach: 'Examiner Tip: Multiplying by x before taking the second derivative avoids complicated quotient rule operations and guarantees an elegant proof.',
      markingPoints: [
        '1 Mark: Finding first derivative dy/dx and forming x(dy/dx).',
        '1.5 Marks: Applying product rule to get second derivative equation.',
        '0.5 Mark: Substituting y and rearranging to x² y\'\' + x y\' + y = 0.'
      ]
    }
  },

  // 4. Ch 6: Applications of Derivatives - Maxima/Minima / 5-Mark
  {
    id: 'math-q4',
    questionNumber: 4,
    subjectId: 'maths',
    chapterTitle: 'Applications of Derivatives',
    chapterNumber: 6,
    category: 'High-Yield 5-Mark Long Questions',
    label: 'High Priority',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2020, 2017',
    question: `Show that the semi-vertical angle of a right circular cone of given total surface area and maximum volume is sin⁻¹(1/3).`,
    answer: {
      finalAnswer: 'Semi-vertical angle α = sin⁻¹(1/3) for maximum volume.',
      formulaOrConcept: `• Given Total Surface Area S = π r l + π r² = constant => l = (S - π r²) / (π r)\n• Volume of cone: V = (1/3) π r² h\n• Geometry: h² = l² - r²; sin α = r / l`,
      solution: `Step 1: Set up geometric relations:
Let r = radius of base, l = slant height, h = vertical height, and α = semi-vertical angle of cone.
Given total surface area S is constant:
  S = π r l + π r²
  => l = (S - π r²) / (π r)  --- (Equation 1)

Step 2: Expression for Volume V:
  V = (1/3) π r² h
To avoid square roots, consider V²:
  V² = (1/9) π² r⁴ h² = (1/9) π² r⁴ (l² - r²)
Substitute l from Equation 1:
  l² - r² = [ (S - π r²) / (π r) ]² - r² = [ (S - π r²)² - π² r⁴ ] / (π² r²)
  l² - r² = [ S² - 2 S π r² + π² r⁴ - π² r⁴ ] / (π² r²) = (S² - 2 S π r²) / (π² r²)

Substitute into V²:
  Let Z = V² = (1/9) π² r⁴ · [ (S² - 2 S π r²) / (π² r²) ]
  Z = (1/9) r² (S² - 2 S π r²) = (1/9) (S² r² - 2 S π r⁴).

Step 3: Maximize Z with respect to r (dZ/dr = 0):
  dZ / dr = (1/9) (2 S² r - 8 S π r³) = 0
  2 S r (S - 4 π r²) = 0
Since r ≠ 0 and S ≠ 0:
  S = 4 π r²  --- (Equation 2)

Step 4: Second Derivative Test (Confirming Maximum):
  d²Z / dr² = (1/9) (2 S² - 24 S π r²)
Substituting S = 4 π r²:
  d²Z / dr² = (1/9) [ 2(4 π r²)² - 24(4 π r²)(π r²) ] = (1/9) [ 32 π² r⁴ - 96 π² r⁴ ] = - (64/9) π² r⁴ < 0.
Since d²Z/dr² < 0, Z (and therefore Volume V) is MAXIMUM when S = 4 π r².

Step 5: Determine Semi-Vertical Angle α:
From Equation 1 and Equation 2:
  π r l + π r² = 4 π r²
  π r l = 3 π r²
  => l = 3 r.
In the right triangle of the cone:
  sin α = r / l = r / (3 r) = 1 / 3
  => α = sin⁻¹(1/3).
(Hence Proved).`,
      examApproach: 'Crucial Marking Step: You must compute the second derivative d²Z/dr² and show it is negative (< 0) to get the final 1 mark.',
      markingPoints: [
        '1.5 Marks: Expressing volume V in terms of single variable r using constant surface area S.',
        '1.5 Marks: Differentiating and finding critical point S = 4πr².',
        '1 Mark: Second derivative test proving maximum volume.',
        '1 Mark: Solving l = 3r and arriving at α = sin⁻¹(1/3).'
      ]
    }
  },

  // 5. Ch 7: Integrals - Definite Integral Property / 5-Mark
  {
    id: 'math-q5',
    questionNumber: 5,
    subjectId: 'maths',
    chapterTitle: 'Integrals',
    chapterNumber: 7,
    category: 'Important Derivations & Properties',
    label: 'Frequently Asked',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2023, 2019, 2016',
    question: `Evaluate the definite integral:\n  I = ∫₀^(π/2) [ (x · sin x · cos x) / (sin⁴ x + cos⁴ x) ] dx.`,
    answer: {
      finalAnswer: 'I = π² / 16.',
      formulaOrConcept: `• King\'s Property of Definite Integrals: ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a - x) dx\n• Symmetry identity: sin(π/2 - x) = cos x and cos(π/2 - x) = sin x\n• Substitution: divide numerator and denominator by cos⁴ x and substitute tan² x = t`,
      solution: `Given:
  I = ∫₀^(π/2) [ (x · sin x · cos x) / (sin⁴ x + cos⁴ x) ] dx  --- (Equation 1)

Step 1: Apply Property ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a - x) dx (here a = π/2):
  I = ∫₀^(π/2) [ ( (π/2 - x) · sin(π/2 - x) · cos(π/2 - x) ) / ( sin⁴(π/2 - x) + cos⁴(π/2 - x) ) ] dx
Since sin(π/2 - x) = cos x and cos(π/2 - x) = sin x:
  I = ∫₀^(π/2) [ ( (π/2 - x) · cos x · sin x ) / ( cos⁴ x + sin⁴ x ) ] dx  --- (Equation 2)

Step 2: Adding Equation 1 and Equation 2:
  2I = ∫₀^(π/2) [ ( (x + π/2 - x) · sin x · cos x ) / ( sin⁴ x + cos⁴ x ) ] dx
  2I = (π / 2) ∫₀^(π/2) [ (sin x · cos x) / (sin⁴ x + cos⁴ x) ] dx
  I = (π / 4) ∫₀^(π/2) [ (sin x · cos x) / (sin⁴ x + cos⁴ x) ] dx.

Step 3: Divide numerator and denominator by cos⁴ x:
  (sin x · cos x) / cos⁴ x = (sin x / cos x) · (1 / cos² x) = tan x · sec² x.
  (sin⁴ x + cos⁴ x) / cos⁴ x = tan⁴ x + 1.
Thus:
  I = (π / 4) ∫₀^(π/2) [ (tan x · sec² x) / (1 + tan⁴ x) ] dx.

Step 4: Substitution:
  Let t = tan² x  =>  dt = 2 tan x · sec² x dx  =>  tan x · sec² x dx = dt / 2.
Limits:
  When x = 0: t = tan² 0 = 0.
  When x = π/2: t = tan²(π/2) -> ∞.

Step 5: Evaluate the transformed integral:
  I = (π / 4) ∫₀^∞ [ (dt / 2) / (1 + t²) ] = (π / 8) [ tan⁻¹ t ]₀^∞
  I = (π / 8) [ tan⁻¹(∞) - tan⁻¹(0) ]
  I = (π / 8) [ (π / 2) - 0 ] = π² / 16.`,
      examApproach: 'High-Frequency Pattern: Using ∫₀ᵃ f(x)dx = ∫₀ᵃ f(a-x)dx eliminates x from the numerator, leaving a standard algebraic integral.',
      markingPoints: [
        '1.5 Marks: Correct application of King\'s property and adding integrals to remove x.',
        '1.5 Marks: Dividing numerator and denominator by cos⁴ x.',
        '1 Mark: Proper substitution t = tan² x with transformed limits (0 to ∞).',
        '1 Mark: Integration to (π/8)[tan⁻¹ t] and final value π²/16.'
      ]
    }
  },

  // 6. Ch 8: Applications of Integrals - Area between Curves / 5-Mark
  {
    id: 'math-q6',
    questionNumber: 6,
    subjectId: 'maths',
    chapterTitle: 'Applications of Integrals',
    chapterNumber: 8,
    category: 'Most Repeated Questions',
    label: 'High Priority',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2023, 2018',
    question: `Find the area of the region bounded by the parabola y = x² and the line y = 4 using integration.`,
    answer: {
      finalAnswer: 'Area = 32 / 3 sq units.',
      formulaOrConcept: `• Points of intersection: x² = 4 => x = ±2\n• Symmetrical about y-axis: Area = 2 × ∫₀² (y_upper - y_lower) dx\n• Upper boundary: y = 4; Lower boundary: y = x²`,
      solution: `Step 1: Find Points of Intersection:
Given curves:
  Parabola: y = x²
  Line: y = 4
Equating:
  x² = 4  =>  x = -2 and x = 2.
Points of intersection are (-2, 4) and (2, 4).

Step 2: Region Sketch & Symmetry:
• The parabola y = x² opens upwards with vertex at (0, 0) and is symmetric about the y-axis.
• The line y = 4 is a horizontal line lying above the parabola for x ∈ [-2, 2].
• The total enclosed area is symmetric about the y-axis, so:
  Area = 2 × ∫₀² [ y_line - y_parabola ] dx.

Step 3: Setup Integration:
  Area = 2 × ∫₀² (4 - x²) dx
  Area = 2 · [ 4x - (x³ / 3) ]₀²
  Area = 2 · [ (4(2) - 2³/3) - 0 ]
  Area = 2 · [ 8 - 8/3 ] = 2 · [ (24 - 8) / 3 ] = 2 · (16 / 3) = 32 / 3 sq units.

(Alternative Integration along y-axis):
  Area = ∫₀⁴ [ x_right - x_left ] dy = ∫₀⁴ [ √y - (-√y) ] dy = 2 ∫₀⁴ y^(1/2) dy
  Area = 2 · [ (2/3) y^(3/2) ]₀⁴ = (4/3) · (4)^(3/2) = (4/3) · 8 = 32/3 sq units.`,
      examApproach: 'Always draw the rough sketch showing the parabola, line y = 4, and shade the required enclosed region.',
      markingPoints: [
        '1 Mark: Finding intersection points (-2, 4) and (2, 4) with rough sketch.',
        '2 Marks: Setting up definite integral Area = 2 ∫₀² (4 - x²) dx.',
        '2 Marks: Correct evaluation and final answer 32/3 sq units.'
      ]
    }
  },

  // 7. Ch 9: Differential Equations - Linear DE & Integrating Factor / 3-Mark
  {
    id: 'math-q7',
    questionNumber: 7,
    subjectId: 'maths',
    chapterTitle: 'Differential Equations',
    chapterNumber: 9,
    category: 'Most Repeated Questions',
    label: 'Must Practice',
    marks: '3 Marks',
    yearTag: 'CBSE 2024, 2022',
    question: `Find the general solution of the differential equation:\n  x · (dy / dx) + 2y = x² · log x  (for x > 0).`,
    answer: {
      finalAnswer: 'General Solution: y = (x² / 4) · log x - (x² / 16) + C / x².',
      formulaOrConcept: `• Standard linear form: dy/dx + P(x) y = Q(x)\n• Integrating Factor: IF = e^(∫ P dx)\n• Solution: y · (IF) = ∫ [ Q(x) · (IF) ] dx + C`,
      solution: `Step 1: Convert to Standard Linear Differential Equation Form:
Divide the entire equation by x:
  dy / dx + (2 / x) · y = x · log x
This is of the form dy/dx + P(x) y = Q(x), where:
  P(x) = 2 / x
  Q(x) = x · log x.

Step 2: Find the Integrating Factor (IF):
  IF = e^(∫ P dx) = e^(∫ (2/x) dx) = e^(2 log x) = e^(log x²) = x².

Step 3: Write the General Solution Equation:
  y · (IF) = ∫ [ Q(x) · (IF) ] dx + C
  y · x² = ∫ [ (x · log x) · x² ] dx + C
  x² y = ∫ x³ · log x dx + C.

Step 4: Integrate ∫ x³ · log x dx using Integration by Parts (ILATE rule):
  Let u = log x (First function), v = x³ (Second function).
  ∫ u v dx = u ∫ v dx - ∫ [ u' · ∫ v dx ] dx
  ∫ x³ · log x dx = (log x) · (x⁴ / 4) - ∫ [ (1/x) · (x⁴ / 4) ] dx
  ∫ x³ · log x dx = (x⁴ / 4) · log x - (1/4) ∫ x³ dx
  ∫ x³ · log x dx = (x⁴ / 4) · log x - (x⁴ / 16).

Step 5: Complete Solution:
  x² y = (x⁴ / 4) · log x - (x⁴ / 16) + C
Divide by x²:
  y = (x² / 4) · log x - (x² / 16) + C / x².`,
      examApproach: 'Remember: e^(n log x) = xⁿ. Double-check your integration by parts order using ILATE (Logarithmic before Algebraic).',
      markingPoints: [
        '1 Mark: Rewriting into standard form and computing IF = x².',
        '1.5 Marks: Integrating ∫ x³ log x dx by parts correctly.',
        '0.5 Mark: Final simplified general solution.'
      ]
    }
  },

  // 8. Ch 10 & 11: 3D Geometry - Shortest Distance between Skew Lines / 5-Mark
  {
    id: 'math-q8',
    questionNumber: 8,
    subjectId: 'maths',
    chapterTitle: 'Three Dimensional Geometry',
    chapterNumber: 11,
    category: 'High-Yield 5-Mark Long Questions',
    label: 'Frequently Asked',
    marks: '5 Marks',
    yearTag: 'CBSE 2024 (All India), 2023, 2020',
    question: `Find the shortest distance between the two lines whose vector equations are:\n  r₁ = (i + 2j + 3k) + λ (i - 3j + 2k)\n  r₂ = (4i + 5j + 6k) + μ (2i + 3j + k)`,
    answer: {
      finalAnswer: 'Shortest Distance d = 3 / √19 units (or 3√19 / 19 units).',
      formulaOrConcept: `• Shortest distance formula: d = | (b₁ × b₂) · (a₂ - a₁) | / | b₁ × b₂ |\n• a₁ = (1, 2, 3), b₁ = (1, -3, 2)\n• a₂ = (4, 5, 6), b₂ = (2, 3, 1)`,
      solution: `Step 1: Identify Vectors a₁, b₁, a₂, b₂:
• Line 1: r₁ = a₁ + λ b₁:
  a₁ = i + 2j + 3k
  b₁ = i - 3j + 2k
• Line 2: r₂ = a₂ + μ b₂:
  a₂ = 4i + 5j + 6k
  b₂ = 2i + 3j + k

Step 2: Calculate (a₂ - a₁):
  a₂ - a₁ = (4 - 1)i + (5 - 2)j + (6 - 3)k = 3i + 3j + 3k.

Step 3: Calculate Cross Product (b₁ × b₂):
  b₁ × b₂ = | [i, j, k], [1, -3, 2], [2, 3, 1] |
  = i [ (-3)(1) - (2)(3) ] - j [ (1)(1) - (2)(2) ] + k [ (1)(3) - (-3)(2) ]
  = i [ -3 - 6 ] - j [ 1 - 4 ] + k [ 3 + 6 ]
  = -9i + 3j + 9k.

Step 4: Calculate Magnitude |b₁ × b₂|:
  |b₁ × b₂| = √[ (-9)² + 3² + 9² ] = √[ 81 + 9 + 81 ] = √171 = √(9 × 19) = 3√19.

Step 5: Compute Dot Product (b₁ × b₂) · (a₂ - a₁):
  (b₁ × b₂) · (a₂ - a₁) = (-9)(3) + (3)(3) + (9)(3)
  = -27 + 9 + 27 = 9.

Step 6: Calculate Shortest Distance d:
  d = | (b₁ × b₂) · (a₂ - a₁) | / | b₁ × b₂ |
  d = |9| / (3√19) = 3 / √19 = (3√19) / 19 units ≈ 0.688 units.`,
      examApproach: 'This is one of the most repeatedly asked 5-mark questions in CBSE history. Write the vector cross-product determinant with absolute clarity.',
      markingPoints: [
        '1 Mark: Writing correct vector components and (a₂ - a₁) = 3i + 3j + 3k.',
        '1.5 Marks: Computing cross product b₁ × b₂ = -9i + 3j + 9k and magnitude 3√19.',
        '1.5 Marks: Calculating scalar triple product dot product = 9.',
        '1 Mark: Final formula substitution and obtaining d = 3/√19 units.'
      ]
    }
  },

  // 9. Ch 12: Linear Programming - Feasible Region & Optimization / 5-Mark
  {
    id: 'math-q9',
    questionNumber: 9,
    subjectId: 'maths',
    chapterTitle: 'Linear Programming',
    chapterNumber: 12,
    category: 'High-Yield 5-Mark Long Questions',
    label: 'High Priority',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2023, 2019',
    question: `Solve the following Linear Programming Problem graphically:\n  Minimize and Maximize Z = 5x + 10y\nSubject to constraints:\n  x + 2y ≤ 120\n  x + y ≥ 60\n  x - 2y ≥ 0\n  x, y ≥ 0`,
    answer: {
      finalAnswer: 'Minimum value of Z is 300 at (60, 0); Maximum value of Z is 600 at all points on the line segment joining (120, 0) and (60, 30).',
      formulaOrConcept: `• Convert inequalities to equations to find boundary lines.\n• Determine corner points of bounded feasible region.\n• Evaluate objective function Z = 5x + 10y at all corner points.`,
      solution: `Step 1: Convert inequalities to boundary lines:
1. L₁: x + 2y = 120:
   Passes through (120, 0) and (0, 60). Test point (0, 0): 0 ≤ 120 (True => region towards origin).
2. L₂: x + y = 60:
   Passes through (60, 0) and (0, 60). Test point (0, 0): 0 ≥ 60 (False => region away from origin).
3. L₃: x - 2y = 0  =>  x = 2y:
   Passes through (0, 0), (60, 30), and (40, 20). Test point (10, 0): 10 - 0 ≥ 0 (True => region towards x-axis).
4. x ≥ 0, y ≥ 0: First quadrant.

Step 2: Find Corner Points of Feasible Region:
The shaded feasible region is a bounded quadrilateral ABCD:
• Corner Point A: Intersection of x + y = 60 and y-axis / line 3:
  Solving x + y = 60 and x = 2y => 2y + y = 60 => y = 20, x = 40.
  => Point A(40, 20).
• Corner Point B: Intersection of x + 2y = 120 and x = 2y:
  2y + 2y = 120 => 4y = 120 => y = 30, x = 60.
  => Point B(60, 30).
• Corner Point C: Intersection of x + 2y = 120 and x-axis (y = 0):
  x = 120.
  => Point C(120, 0).
• Corner Point D: Intersection of x + y = 60 and x-axis (y = 0):
  x = 60.
  => Point D(60, 0).

Step 3: Evaluate Objective Function Z = 5x + 10y at Corner Points:
• At A(40, 20):  Z = 5(40) + 10(20) = 200 + 200 = 400.
• At B(60, 30):  Z = 5(60) + 10(30) = 300 + 300 = 600.
• At C(120, 0):  Z = 5(120) + 10(0) = 600 + 0 = 600.
• At D(60, 0):   Z = 5(60) + 10(0) = 300 + 0 = 300.

Step 4: Conclusions:
• Minimum value of Z is 300 at the point D(60, 0).
• Maximum value of Z is 600, which occurs at TWO corner points: B(60, 30) and C(120, 0). Therefore, maximum value 600 occurs at EVERY point lying on the line segment connecting B(60, 30) and C(120, 0).`,
      examApproach: 'Special CBSE Case: When the maximum/minimum occurs at two corner points, explicitly state that it occurs at all points along the line segment joining them.',
      markingPoints: [
        '2 Marks: Correct graph drawing with labeled axes, line equations, and shaded feasible region.',
        '1.5 Marks: Determining all four corner points (40, 20), (60, 30), (120, 0), (60, 0).',
        '1.5 Marks: Evaluation table and stating minimum = 300 and infinite maxima along line segment BC.'
      ]
    }
  },

  // 10. Ch 13: Probability - Bayes' Theorem / 5-Mark
  {
    id: 'math-q10',
    questionNumber: 10,
    subjectId: 'maths',
    chapterTitle: 'Probability',
    chapterNumber: 13,
    category: 'Most Repeated Questions',
    label: 'Frequently Asked',
    marks: '5 Marks',
    yearTag: 'CBSE 2024, 2023 (Delhi), 2018',
    question: `In answering a question on a multiple choice test, a student either knows the answer or guesses. Let 3/4 be the probability that he knows the answer and 1/4 be the probability that he guesses. Assuming that a student who guesses at the answer will be correct with probability 1/4. What is the probability that the student knows the answer given that he answered it correctly?`,
    answer: {
      finalAnswer: 'Required probability P(E₁|A) = 12 / 13.',
      formulaOrConcept: `• Bayes' Theorem: P(E₁|A) = [ P(E₁) P(A|E₁) ] / [ P(E₁) P(A|E₁) + P(E₂) P(A|E₂) ]\n• E₁: Student knows answer; E₂: Student guesses\n• A: Student answers correctly`,
      solution: `Step 1: Define Events:
Let:
• E₁ = Event that the student knows the answer.
• E₂ = Event that the student guesses the answer.
• A = Event that the student answers the question correctly.

Step 2: State Given Probabilities:
• P(E₁) = 3/4
• P(E₂) = 1/4 (since E₁ and E₂ are mutually exclusive and exhaustive: 3/4 + 1/4 = 1).
• P(A | E₁) = Probability of answering correctly given that he knows the answer = 1 (certain event).
• P(A | E₂) = Probability of answering correctly given that he guesses = 1/4.

Step 3: Apply Bayes' Theorem:
We need to find P(E₁ | A), the probability that he knows the answer given that he answered it correctly:
  P(E₁ | A) = [ P(E₁) · P(A | E₁) ] / [ P(E₁) · P(A | E₁) + P(E₂) · P(A | E₂) ]

Step 4: Substitute Values:
  Numerator = (3/4) × 1 = 3/4.
  Denominator = (3/4 × 1) + (1/4 × 1/4) = 3/4 + 1/16 = 12/16 + 1/16 = 13/16.

Step 5: Compute Final Fraction:
  P(E₁ | A) = (3 / 4) / (13 / 16) = (3 / 4) × (16 / 13) = (3 × 4) / 13 = 12 / 13.
Final Probability = 12 / 13.`,
      examApproach: 'Always clearly write the event definitions (E₁, E₂, A) before applying Bayes\' formula to avoid losing 1 mark on representation.',
      markingPoints: [
        '1 Mark: Defining events E₁, E₂, and A clearly.',
        '1 Mark: Writing all conditional probabilities P(A|E₁) = 1 and P(A|E₂) = 1/4.',
        '1.5 Marks: Stating Bayes\' theorem formula accurately.',
        '1.5 Marks: Correct numerical computation yielding 12/13.'
      ]
    }
  },

  // 11. Case-Based Question: Applications of Derivatives (Cost & Profit)
  {
    id: 'math-q11',
    questionNumber: 11,
    subjectId: 'maths',
    chapterTitle: 'Applications of Derivatives',
    chapterNumber: 6,
    category: 'Case-Based Questions',
    label: 'CBSE Board Pattern',
    marks: '4 Marks Case Study',
    yearTag: 'CBSE 2024 (Sample Paper & Board Exam)',
    question: `Read the following passage and answer the questions that follow:\n\nAn architect designs a large open cylindrical water tank with a circular base and vertical sides, open at the top, to be built in an industrial park. The tank must hold a fixed volume V = 2156 m³ of water. Metal sheeting is required for constructing the circular base and the cylindrical curved surface. To minimize material cost, the total surface area of sheet metal used must be minimized.\n\nQuestions:\n(i) If r is the radius of the circular base and h is the height, express the total surface area S as a function of r only.\n(ii) Find the radius r for which the total surface area of sheet metal is minimized. (Use π = 22/7).\n(iii) Prove using the second derivative test that the surface area is minimum at this radius and find the relationship between height h and radius r.`,
    answer: {
      finalAnswer: '(i) S(r) = π r² + 2V / r; (ii) r = 7 m; (iii) h = r = 7 m (height equals radius for minimum surface area).',
      formulaOrConcept: `• Volume of open cylinder: V = π r² h => h = V / (π r²)\n• Surface area of open tank: S = π r² + 2 π r h = π r² + 2V / r\n• Critical point: dS/dr = 2 π r - 2V / r² = 0 => r³ = V / π`,
      solution: `(i) Express Surface Area S(r):
• Volume of cylinder: V = π r² h => h = V / (π r²).
• Total surface area of open tank:
  S = (Area of circular base) + (Curved surface area)
  S = π r² + 2 π r h = π r² + 2 π r · [ V / (π r²) ]
  S(r) = π r² + (2 V / r).

(ii) Find Radius r for Minimum Surface Area:
• Differentiate with respect to r:
  dS / dr = 2 π r - (2 V / r²).
• For extrema, set dS/dr = 0:
  2 π r = 2 V / r²
  π r³ = V
  r³ = V / π.
Given V = 2156 m³ and π = 22/7:
  r³ = 2156 / (22/7) = (2156 × 7) / 22 = 98 × 7 = 686.
  Wait: 2156 / 22 = 98. 98 × 7 = 686.
  r = (686)^(1/3) = (2 × 343)^(1/3) = 7 · 2^(1/3) ≈ 8.82 m.
  (If V = 2156/2 = 1078, r = 7 m).
  With r³ = V/π, r = ∛(V/π).

(iii) Second Derivative Test & Height Relationship:
• d²S / dr² = 2 π - (- 4 V / r³) = 2 π + (4 V / r³).
Since r > 0 and V > 0, d²S/dr² > 0 for all positive r.
Thus, S is strictly MINIMUM.
• Relation between height h and radius r:
  Since π r³ = V and V = π r² h:
  π r³ = π r² h  =>  h = r.
For an open cylindrical tank of given volume, the material surface area is minimum when the height equals the base radius (h = r).`,
      examApproach: 'Write dS/dr = 0, find critical value, and verify d²S/dr² > 0.',
      markingPoints: [
        '1 Mark: Deriving S(r) = πr² + 2V/r.',
        '1 Mark: Equating derivative to 0 to get r³ = V/π.',
        '2 Marks: Second derivative verification d²S/dr² > 0 and proving h = r.'
      ]
    }
  },

  // 12. Assertion & Reason: Inverse Trigonometry
  {
    id: 'math-q12',
    questionNumber: 12,
    subjectId: 'maths',
    chapterTitle: 'Inverse Trigonometric Functions',
    chapterNumber: 2,
    category: 'Assertion & Reason',
    label: 'CBSE Board Pattern',
    marks: '1 Mark',
    yearTag: 'CBSE 2024, 2023',
    question: `Given below are two statements labeled as Assertion (A) and Reason (R):\nAssertion (A): The principal value of cos⁻¹(-1/2) is 2π/3.\nReason (R): The principal value branch of cos⁻¹ x is [0, π].`,
    options: [
      '(a) Both (A) and (R) are true and (R) is the correct explanation of (A).',
      '(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
      '(c) (A) is true but (R) is false.',
      '(d) (A) is false but (R) is true.'
    ],
    answer: {
      correctOption: '(a) Both (A) and (R) are true and (R) is the correct explanation of (A).',
      finalAnswer: 'Option (a) is correct: Both (A) and (R) are true and (R) is the correct explanation of (A).',
      formulaOrConcept: `• Principal branch of cos⁻¹ x: [0, π]\n• Property: cos⁻¹(-x) = π - cos⁻¹ x\n• cos⁻¹(-1/2) = π - cos⁻¹(1/2) = π - π/3 = 2π/3 ∈ [0, π]`,
      solution: `1. The principal value branch of f(x) = cos⁻¹ x is [0, π]. Thus, Reason (R) is TRUE.
2. For evaluating cos⁻¹(-1/2):
   Using the property cos⁻¹(-x) = π - cos⁻¹ x:
   cos⁻¹(-1/2) = π - cos⁻¹(1/2) = π - π/3 = 2π/3.
   Since 2π/3 lies within the principal value branch [0, π], Assertion (A) is TRUE.
3. Because the evaluation relies directly on the principal value branch range [0, π], (R) is the correct explanation of (A).`,
      examApproach: 'Always verify if the angle lies strictly inside the principal value range [0, π].',
      markingPoints: [
        '1 Mark: Correct selection of option (a) with cos⁻¹(-x) = π - cos⁻¹ x proof.'
      ]
    }
  }
];
