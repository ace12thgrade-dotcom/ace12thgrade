// services/subjects/maths/part2.ts
// Chapters 7 to 13 + Full Revision: Integrals, Application of Integrals, Differential Equations, Vector Algebra, 3D Geometry, Linear Programming, Probability, Master Revision
// Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

export function getMathsPart2Notes(chapterLower: string): string | null {
  // FULL REVISION / MASTER FORMULA SHEET
  if (
    chapterLower.includes('revision') ||
    chapterLower.includes('full') ||
    chapterLower.includes('master') ||
    chapterLower.includes('summary') ||
    chapterLower === 'm_all'
  ) {
    return `TOPIC: CBSE Class 12 Mathematics Complete Master Formula Sheet (2026-27 Pattern)
Master Notebook Revision Book - Covering all 13 NCERT Chapters with complete formulas, standard integral forms, 3D line formulas, vector identities, and probability theorems.

**1. Relations, Functions & Matrices:**
- Equivalence Relation: Reflexive (a,a)∈R, Symmetric (a,b)∈R => (b,a)∈R, Transitive (a,b)∈R & (b,c)∈R => (a,c)∈R.
- Bijection: f is one-one (f(x₁)=f(x₂) => x₁=x₂) and onto (Range = Codomain).
- Matrix Symmetry: Symmetric (Aᵀ = A), Skew-Symmetric (Aᵀ = -A, diagonal elements always 0).
- Matrix Decomposition: A = (1/2)(A + Aᵀ) + (1/2)(A - Aᵀ).
- Determinant & Adjoint Identities:
  * |adj A| = |A|^(n - 1)
  * |A · adj A| = |A|^n
  * adj(AB) = (adj B)(adj A)
  * |kA| = k^n |A|
  * A⁻¹ = (1 / |A|) · adj A  (|A| ≠ 0).

**2. Differential Calculus Master Formula Vault:**
- Parametric Second Derivative: d²y/dx² = [ d/dt (dy/dx) ] / (dx/dt).
- Strictly Increasing: f'(x) > 0; Strictly Decreasing: f'(x) < 0.
- Optimization: f'(c) = 0. If f''(c) < 0 => Local Maximum. If f''(c) > 0 => Local Minimum.

**3. Integral Calculus Formula Vault:**
- **Standard Integrals:**
  * ∫ 1 / (x² + a²) dx = (1/a) tan⁻¹(x/a) + C
  * ∫ 1 / (x² - a²) dx = (1/2a) ln|(x - a)/(x + a)| + C
  * ∫ 1 / (a² - x²) dx = (1/2a) ln|(a + x)/(a - x)| + C
  * ∫ 1 / √(a² - x²) dx = sin⁻¹(x/a) + C
  * ∫ 1 / √(x² + a²) dx = ln|x + √(x² + a²)| + C
  * ∫ 1 / √(x² - a²) dx = ln|x + √(x² - a²)| + C
  * ∫ √(a² - x²) dx = (x/2)√(a² - x²) + (a²/2) sin⁻¹(x/a) + C
  * ∫ √(x² + a²) dx = (x/2)√(x² + a²) + (a²/2) ln|x + √(x² + a²)| + C
  * ∫ √(x² - a²) dx = (x/2)√(x² - a²) - (a²/2) ln|x + √(x² - a²)| + C
- **Integration by Parts (ILATE Rule):**
  ∫ u · v dx = u ∫ v dx - ∫ [ u' · (∫ v dx) ] dx.
- **Special Exponential Form:**
  ∫ eˣ [ f(x) + f'(x) ] dx = eˣ · f(x) + C.
- **Definite Integral Properties (P0 to P7):**
  * **King's Property (P4):** ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a - x) dx.
  * **Generalized King's (P3):** ∫ₐᵇ f(x) dx = ∫ₐᵇ f(a + b - x) dx.
  * **Even / Odd Functions (P7):** ∫₋ₐᵃ f(x) dx = 2 ∫₀ᵃ f(x) dx (if f(-x) = f(x), even) OR 0 (if f(-x) = -f(x), odd).
  * **Periodic Splitting (P6):** ∫₀^(2a) f(x) dx = 2 ∫₀ᵃ f(x) dx (if f(2a - x) = f(x)) OR 0 (if f(2a - x) = -f(x)).

**4. Differential Equations Master Vault:**
- Degree exists only if DE is a polynomial equation in derivatives!
- **Variable Separable:** f(x) dx = g(y) dy => integrate both sides.
- **Homogeneous DE:** dy/dx = f(y/x) => Put y = v x => dy/dx = v + x (dv/dx).
- **Linear Differential Equation (LDE):**
  * Type 1: dy/dx + P(x) y = Q(x) => Integrating Factor IF = e^(∫P dx) => General Solution: **y · IF = ∫ (Q · IF) dx + C**.
  * Type 2: dx/dy + P(y) x = Q(y) => IF = e^(∫P dy) => General Solution: **x · IF = ∫ (Q · IF) dy + C**.

**5. Vectors & 3D Geometry Master Vault:**
- Dot Product: a · b = |a||b| cosθ = a₁ b₁ + a₂ b₂ + a₃ b₃. Two vectors perpendicular <=> a · b = 0.
- Projection of a on b: Proj = (a · b) / |b|.
- Cross Product: a × b = |a||b| sinθ n̂ = det [[i, j, k], [a₁, a₂, a₃], [b₁, b₂, b₃]].
  * Area of triangle = (1/2) |a × b|.
  * Area of parallelogram = |a × b| (sides) = (1/2) |d₁ × d₂| (diagonals).
- Vector equation of line through a parallel to b: **r = a + λ b**.
- Cartesian equation: (x - x₁)/a = (y - y₁)/b = (z - z₁)/c.
- **Shortest Distance between Skew Lines:**
  **d = | (a₂ - a₁) · (b₁ × b₂) | / |b₁ × b₂|**.
  * Lines intersect if and only if **(a₂ - a₁) · (b₁ × b₂) = 0**.
- **Distance between Parallel Lines:**
  **d = | (a₂ - a₁) × b | / |b|**.

**6. Probability & Linear Programming Master Vault:**
- Conditional Probability: P(A | B) = P(A ∩ B) / P(B).
- Multiplication Theorem: P(A ∩ B) = P(A) · P(B | A).
- Independent Events: P(A ∩ B) = P(A) · P(B) <=> P(A | B) = P(A).
- **Bayes' Theorem:**
  **P(E_i | A) = [ P(E_i) · P(A | E_i) ] / [ ∑_(k=1)^n P(E_k) · P(A | E_k) ]**.
- Probability Distribution of Random Variable X:
  * Mean (Expectation): E(X) = μ = ∑ x_i p_i.
- LPP Corner Point Method: Evaluate objective function Z = ax + by at all vertices of feasible region.

**KEY POINTS:**
- Always show step-by-step substitution and units.
- In Bayes' theorem, write events E₁, E₂, and A in words before calculating probabilities.`;
  }

  // CHAPTER 7: Integrals
  if (
    chapterLower.includes('integral') ||
    chapterLower.includes('integration') ||
    chapterLower === 'm7' ||
    chapterLower.includes('chapter 7: integrals') ||
    chapterLower.includes('chapter 7 - integrals')
  ) {
    return `TOPIC: Chapter 7: Integrals
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Indefinite Integrals & Basic Integration Methods:**
- **Method of Substitution:**
  If integral is of the form ∫ f(g(x)) · g'(x) dx, put g(x) = t => g'(x) dx = dt => ∫ f(t) dt.
  * Standard Trigonometric Integrals:
    - ∫ tan x dx = ln|sec x| + C = - ln|cos x| + C
    - ∫ cot x dx = ln|sin x| + C
    - ∫ sec x dx = ln|sec x + tan x| + C = ln|tan(π/4 + x/2)| + C
    - ∫ cosec x dx = ln|cosec x - cot x| + C = ln|tan(x/2)| + C.
- **Integration Using Partial Fractions:**
  Used for rational functions P(x)/Q(x) where degree of P(x) < degree of Q(x) (proper fraction):
  * Linear non-repeated factors: 1 / ((x - a)(x - b)) = A / (x - a) + B / (x - b).
  * Linear repeated factors: 1 / ((x - a)² (x - b)) = A / (x - a) + B / (x - a)² + C / (x - b).
  * Quadratic non-factorable factor: 1 / ((x² + a²)(x - b)) = (Ax + B) / (x² + a²) + C / (x - b).
- **Integration by Parts (ILATE Rule):**
  ∫ u · v dx = u ∫ v dx - ∫ [ (du/dx) · (∫ v dx) ] dx.
  * **ILATE Priority Order:**
    - **I:** Inverse Trigonometric (sin⁻¹x, tan⁻¹x)
    - **L:** Logarithmic (ln x)
    - **A:** Algebraic (x, x², 2x + 1)
    - **T:** Trigonometric (sin x, cos x)
    - **E:** Exponential (eˣ, 2ˣ).
  * **Crucial Exponential Identity:**
    **∫ eˣ [ f(x) + f'(x) ] dx = eˣ · f(x) + C**.
    Example: ∫ eˣ (tan⁻¹x + 1/(1+x²)) dx = eˣ tan⁻¹x + C.

**2. Standard Special Integral Formulas (Must-Memorize):**
1. ∫ dx / (x² - a²) = (1 / 2a) ln|(x - a) / (x + a)| + C
2. ∫ dx / (a² - x²) = (1 / 2a) ln|(a + x) / (a - x)| + C
3. ∫ dx / (x² + a²) = (1 / a) tan⁻¹(x / a) + C
4. ∫ dx / √(a² - x²) = sin⁻¹(x / a) + C
5. ∫ dx / √(x² - a²) = ln|x + √(x² - a²)| + C
6. ∫ dx / √(x² + a²) = ln|x + √(x² + a²)| + C
7. ∫ √(a² - x²) dx = (x / 2) √(a² - x²) + (a² / 2) sin⁻¹(x / a) + C
8. ∫ √(x² + a²) dx = (x / 2) √(x² + a²) + (a² / 2) ln|x + √(x² + a²)| + C
9. ∫ √(x² - a²) dx = (x / 2) √(x² - a²) - (a² / 2) ln|x + √(x² - a²)| + C.

**3. Completing the Square Method:**
- For integrals of types ∫ dx / (ax² + bx + c) or ∫ dx / √(ax² + bx + c):
  Express ax² + bx + c = a [ (x + b/2a)² + (c/a - b²/4a²) ] = (X² ± A²).

**4. Definite Integrals & Fundamental Theorem of Calculus:**
- If F'(x) = f(x), then ∫ₐᵇ f(x) dx = [F(x)]ₐᵇ = F(b) - F(a).
- **Core Properties of Definite Integrals (P0 to P7):**
  * **P0 (Dummy Variable):** ∫ₐᵇ f(x) dx = ∫ₐᵇ f(t) dt.
  * **P1 (Reversing Limits):** ∫ₐᵇ f(x) dx = - ∫_bᵃ f(x) dx; ∫ₐᵃ f(x) dx = 0.
  * **P2 (Splitting at Intermediate Point c):** ∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫_cᵇ f(x) dx (Indispensable for modulus integrals like ∫₀⁴ |x - 2| dx).
  * **P3 (Shift Property):** ∫ₐᵇ f(x) dx = ∫ₐᵇ f(a + b - x) dx.
  * **P4 (King's Property - Most Frequently Tested):**
    **∫₀ᵃ f(x) dx = ∫₀ᵃ f(a - x) dx**.
    *Classic Application:* To evaluate I = ∫₀^(π/2) (√sin x) / (√sin x + √cos x) dx:
    By P4: I = ∫₀^(π/2) (√cos x) / (√cos x + √sin x) dx.
    Adding both equations: 2I = ∫₀^(π/2) 1 dx = π/2 => **I = π/4**.
  * **P7 (Even and Odd Functions):**
    ∫₋ₐᵃ f(x) dx =
    - **2 ∫₀ᵃ f(x) dx**, if f(-x) = f(x) (Even function).
    - **0**, if f(-x) = -f(x) (Odd function).
    *(Check oddness first for any symmetric interval [-a, a]!)*

**COMMON MISTAKE:**
- In integration by parts, forgetting the negative sign before the second integral.
- In definite integrals with substitution, forgetting to change the integration limits corresponding to the new variable t! Always update limits immediately upon substituting t = g(x).`;
  }

  // CHAPTER 8: Application of Integrals
  if (
    chapterLower.includes('application of integral') ||
    chapterLower.includes('aoi') ||
    chapterLower.includes('area under') ||
    chapterLower === 'm8' ||
    chapterLower.includes('chapter 8: application of integrals') ||
    chapterLower.includes('chapter 8 - application of integrals')
  ) {
    return `TOPIC: Chapter 8: Application of Integrals
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Area Under Simple Curves:**
- **Area Bounded by Curve y = f(x), x-axis, and Ordinates x = a to x = b:**
  **Area = ∫ₐᵇ y dx = ∫ₐᵇ f(x) dx**.
  (Consider vertical elementary strip of width dx and height y; Area of strip dA = y dx).
- **Area Bounded by Curve x = g(y), y-axis, and Abscissae y = c to y = d:**
  **Area = ∫_cᵈ x dy = ∫_cᵈ g(y) dy**.
  (Consider horizontal elementary strip of width dy and length x; Area of strip dA = x dy).
- **Curve Below the x-axis:**
  If f(x) < 0 on [a, b], the definite integral yields a negative number. Since area is always a non-negative physical magnitude:
  **Area = | ∫ₐᵇ f(x) dx |** or - ∫ₐᵇ f(x) dx.
- **Curve Crossing the x-axis at c ∈ (a, b):**
  If f(x) ≥ 0 on [a, c] and f(x) ≤ 0 on [c, b]:
  **Total Area = ∫ₐᶜ f(x) dx + | ∫_cᵇ f(x) dx |**.

**2. Standard Geometric Figures & Boundary Integration:**
- **Area of Circle x² + y² = a²:**
  * By Symmetry, Total Area = 4 × Area in 1st Quadrant:
    Area = 4 ∫₀ᵃ √(a² - x²) dx = 4 [ (x/2)√(a²-x²) + (a²/2) sin⁻¹(x/a) ]₀ᵃ
    = 4 [ 0 + (a²/2) · (π/2) ] = **π a² sq. units**.
- **Area of Ellipse x²/a² + y²/b² = 1:**
  * In 1st Quadrant: y = (b/a) √(a² - x²).
  * Total Area = 4 ∫₀ᵃ (b/a) √(a² - x²) dx = 4 (b/a) [ (π a² / 4) ] = **π a b sq. units**.
- **Standard Parabola y² = 4ax:**
  * Area bounded by parabola y² = 4ax and its latus rectum x = a:
    Area = 2 ∫₀ᵃ 2√(ax) dx = 4√a [ (2/3) x^(3/2) ]₀ᵃ = 4√a · (2/3) a^(3/2) = **(8/3) a² sq. units**.

**3. Step-by-Step Algorithm for CBSE Area Problems:**
1. **Sketch the Rough Figure:** Always draw a clear, labeled coordinate diagram showing the curve, axis, and boundary lines (allocates 1 mark in CBSE rubric).
2. **Find Points of Intersection:** Solve curve equations simultaneously to determine limits of integration (a and b).
3. **Set Up the Definite Integral:** State whether you are taking vertical strips (y dx) or horizontal strips (x dy).
4. **Integrate Carefully:** Use standard formula ∫ √(a² - x²) dx = (x/2)√(a² - x²) + (a²/2) sin⁻¹(x/a).
5. **Substitute Limits:** Upper limit minus lower limit. State the final answer with **"sq. units"**.

**COMMON MISTAKE:**
- Forgetting to multiply by 2 or 4 when using symmetry! (e.g., calculating only the first quadrant area of a circle or ellipse and forgetting to multiply by 4 for the total area).
- Forgetting to write "sq. units" at the end of the numerical calculation.`;
  }

  // CHAPTER 9: Differential Equations
  if (
    chapterLower.includes('differential equation') ||
    chapterLower === 'm9' ||
    chapterLower.includes('chapter 9: differential equations') ||
    chapterLower.includes('chapter 9 - differential equations')
  ) {
    return `TOPIC: Chapter 9: Differential Equations
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Order and Degree of a Differential Equation:**
- **Order:** The order of the highest-order derivative occurring in the differential equation. (Always defined and is a positive integer).
- **Degree:** The highest power (exponent) of the highest-order derivative occurring in the differential equation, **provided the equation is a polynomial equation in its derivatives**.
  * If the differential equation contains terms like sin(dy/dx), e^(dy/dx), ln(dy/dx), then the equation is NOT a polynomial in derivatives, and its **DEGREE IS NOT DEFINED**!
  * Example 1: d²y/dx² + 3(dy/dx)² + y = 0 => Order = 2, Degree = 1.
  * Example 2: d²y/dx² + sin(dy/dx) = 0 => Order = 2, **Degree is NOT DEFINED**.

**2. General and Particular Solutions:**
- **General Solution:** A solution containing as many arbitrary constants as the order of the differential equation (n arbitrary constants for an n-th order DE).
- **Particular Solution:** A solution obtained from the general solution by giving specific numerical values to arbitrary constants, determined by given boundary / initial conditions (contains **ZERO arbitrary constants**).

**3. Methods of Solving First-Order, First-Degree Differential Equations:**
- **Method 1: Variable Separable Method:**
  * Form: dy/dx = f(x) · g(y) => **dy / g(y) = f(x) dx**.
  * Integrate both sides directly: ∫ dy / g(y) = ∫ f(x) dx + C.
- **Method 2: Homogeneous Differential Equations:**
  * A function f(x, y) is homogeneous of degree n if f(λx, λy) = λⁿ f(x, y).
  * Form: **dy/dx = F(y / x)**.
  * **Standard Solving Algorithm:**
    1. Substitute **y = v x** => dy/dx = v + x (dv/dx).
    2. Replace dy/dx and y in the equation: v + x (dv/dx) = F(v).
    3. Separate variables: **dv / [F(v) - v] = dx / x**.
    4. Integrate both sides: ∫ dv / [F(v) - v] = ln|x| + C.
    5. Substitute back **v = y / x** to obtain the solution in x and y.
- **Method 3: Linear Differential Equations (Standard Board 5-Marker):**
  * **Type 1 (Linear in y):**
    **dy/dx + P(x) · y = Q(x)**, where P and Q are functions of x only or constants.
    - Step 1: Calculate Integrating Factor (IF): **IF = e^(∫ P(x) dx)**.
    - Step 2: Multiply equation by IF; the left-hand side becomes d/dx [y · IF].
    - Step 3: Write general solution directly:
      **y · (IF) = ∫ [ Q(x) · (IF) ] dx + C**.
  * **Type 2 (Linear in x):**
    **dx/dy + P(y) · x = Q(y)**, where P and Q are functions of y only or constants.
    - Step 1: Integrating Factor: **IF = e^(∫ P(y) dy)**.
    - Step 2: General solution:
      **x · (IF) = ∫ [ Q(y) · (IF) ] dy + C**.

**COMMON MISTAKE:**
- In Linear Differential Equations, writing IF = e^(∫P dx) and forgetting that e^(ln f(x)) = f(x). For example, e^(2 ln x) = e^(ln(x²)) = x², NOT 2x!
- In homogeneous DE, forgetting to replace v back with y/x at the very end.`;
  }

  // CHAPTER 10: Vector Algebra
  if (
    chapterLower.includes('vector') ||
    chapterLower === 'm10' ||
    chapterLower.includes('chapter 10: vector algebra') ||
    chapterLower.includes('chapter 10 - vector algebra')
  ) {
    return `TOPIC: Chapter 10: Vector Algebra
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Basic Concepts, Magnitude & Direction Cosines:**
- Position vector of point P(x, y, z): **r = OP = x î + y ĵ + z k̂**.
- Magnitude: **|r| = √(x² + y² + z²)**.
- Unit Vector: **â = a / |a|** (Vector of magnitude 1 pointing in the direction of a).
- **Direction Cosines (l, m, n):**
  Cosines of angles α, β, γ that vector r makes with positive x, y, and z axes:
  l = cos α = x / |r|, m = cos β = y / |r|, n = cos γ = z / |r|.
  * **Fundamental Identity:** **l² + m² + n² = cos²α + cos²β + cos²γ = 1**.
  * Consequence: sin²α + sin²β + sin²γ = (1 - l²) + (1 - m²) + (1 - n²) = 3 - 1 = **2**.
- **Direction Ratios (a, b, c):** Any numbers proportional to direction cosines: l/a = m/b = n/c.
  l = ± a / √(a² + b² + c²), m = ± b / √(a² + b² + c²), n = ± c / √(a² + b² + c²).

**2. Scalar (Dot) Product of Vectors:**
- Definition: **a · b = |a| |b| cos θ**, where θ is angle between a and b (0 ≤ θ ≤ π).
- In Component Form: a · b = a₁ b₁ + a₂ b₂ + a₃ b₃.
- Key Properties:
  1. Commutative: a · b = b · a.
  2. î · î = ĵ · ĵ = k̂ · k̂ = 1; î · ĵ = ĵ · k̂ = k̂ · î = 0.
  3. **Perpendicularity Condition:** Two non-zero vectors a and b are orthogonal if and only if **a · b = 0**.
  4. Angle between vectors: **cos θ = (a · b) / (|a| |b|)**.
  5. Self-Product: a · a = |a|² => |a| = √(a · a).
  6. **Projection of vector a on vector b:**
     **Projection = (a · b) / |b| = a · b̂**.
     (Projection vector = [ (a · b) / |b|² ] · b).
  7. Cauchy-Schwarz Inequality: |a · b| ≤ |a| |b|.
  8. Triangle Inequality: |a + b| ≤ |a| + |b|.

**3. Vector (Cross) Product of Vectors:**
- Definition: **a × b = |a| |b| sin θ n̂**, where n̂ is a unit vector perpendicular to both a and b forming a right-handed system.
- In Determinant Form:
  **a × b = det [[î, ĵ, k̂], [a₁, a₂, a₃], [b₁, b₂, b₃]]**.
- Key Properties:
  1. **Anti-Commutative:** **a × b = - (b × a)**.
  2. î × î = ĵ × ĵ = k̂ × k̂ = 0; î × ĵ = k̂, ĵ × k̂ = î, k̂ × î = ĵ (Right-hand cycle).
  3. **Collinearity / Parallel Condition:** Two non-zero vectors a and b are collinear if and only if **a × b = 0** (or a₁/b₁ = a₂/b₂ = a₃/b₃).
  4. Sine of angle between vectors: **sin θ = |a × b| / (|a| |b|)**.
  5. Lagrange's Identity: **|a × b|² = |a|² |b|² - (a · b)²**.
- **Geometrical Applications:**
  * **Area of Triangle with adjacent sides a and b:** **Area = (1/2) |a × b|**.
  * **Area of Triangle with position vectors of vertices A(a), B(b), C(c):**
    **Area = (1/2) |(b - a) × (c - a)| = (1/2) |a × b + b × c + c × a|**.
    (Vertices A, B, C are collinear if and only if a × b + b × c + c × a = 0).
  * **Area of Parallelogram with adjacent side vectors a and b:** **Area = |a × b|**.
  * **Area of Parallelogram with diagonal vectors d₁ and d₂:** **Area = (1/2) |d₁ × d₂|**.

**COMMON MISTAKE:**
- Confusing area of parallelogram given sides vs given diagonals: with sides it is |a × b|, with diagonals it is (1/2)|d₁ × d₂|!
- Forgetting that a × b = - (b × a) (order matters in cross product).`;
  }

  // CHAPTER 11: Three Dimensional Geometry
  if (
    chapterLower.includes('three dimensional') ||
    chapterLower.includes('3d') ||
    chapterLower.includes('geometry') ||
    chapterLower === 'm11' ||
    chapterLower.includes('chapter 11: three dimensional geometry') ||
    chapterLower.includes('chapter 11 - three dimensional geometry')
  ) {
    return `TOPIC: Chapter 11: Three Dimensional Geometry
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Line Equations in 3D Space:**
- **Equation of Line Passing Through Point A(a) and Parallel to Vector b:**
  * Vector Form: **r = a + λ b**, where λ ∈ R.
  * Cartesian Form: Passing through (x₁, y₁, z₁) with direction ratios (a, b, c):
    **(x - x₁) / a = (y - y₁) / b = (z - z₁) / c = λ**.
- **Equation of Line Passing Through Two Given Points A(x₁, y₁, z₁) and B(x₂, y₂, z₂):**
  * Vector Form: **r = a + λ (b - a)**.
  * Cartesian Form: **(x - x₁) / (x₂ - x₁) = (y - y₁) / (y₂ - y₁) = (z - z₁) / (z₂ - z₁)**.

**2. Angle Between Two Lines:**
- Given lines with direction ratios (a₁, b₁, c₁) and (a₂, b₂, c₂):
  **cos θ = | a₁ a₂ + b₁ b₂ + c₁ c₂ | / [ √(a₁² + b₁² + c₁²) · √(a₂² + b₂² + c₂²) ]**.
  * **Perpendicular Condition:** **a₁ a₂ + b₁ b₂ + c₁ c₂ = 0**.
  * **Parallel Condition:** **a₁ / a₂ = b₁ / b₂ = c₁ / c₂**.

**3. Shortest Distance Between Two Lines (Compulsory 5-Mark Question):**
- **Skew Lines (Non-parallel, non-intersecting lines in different planes):**
  Let lines be L₁: r = a₁ + λ b₁ and L₂: r = a₂ + μ b₂.
  * **Vector Formula:**
    **d = | (a₂ - a₁) · (b₁ × b₂) | / |b₁ × b₂|**.
  * **Cartesian Formula:**
    Numerator = | det [[x₂ - x₁, y₂ - y₁, z₂ - z₁], [a₁, b₁, c₁], [a₂, b₂, c₂]] |.
    Denominator = √[ (b₁ c₂ - b₂ c₁)² + (c₁ a₂ - c₂ a₁)² + (a₁ b₂ - a₂ b₁)² ].
  * **Condition for Two Lines to Intersect:**
    Distance d = 0 <=> **(a₂ - a₁) · (b₁ × b₂) = 0**.
- **Parallel Lines:**
  Let lines be L₁: r = a₁ + λ b and L₂: r = a₂ + μ b.
  * **Vector Formula:**
    **d = | (a₂ - a₁) × b | / |b|**.

**COMMON MISTAKE:**
- Using the skew lines formula for parallel lines! If the direction vectors b₁ and b₂ are proportional (i.e. b₁ = k b₂), then b₁ × b₂ = 0 (denominator becomes zero), and the formula breaks down. Always inspect b₁ and b₂ first: if they are parallel, use the parallel lines formula d = |(a₂ - a₁) × b| / |b|!
- Forgetting to write equations in standard Cartesian form: (x - x₁)/a = (y - y₁)/b = (z - z₁)/c. If given (1 - x)/2, rewrite it as (x - 1)/(-2)!`;
  }

  // CHAPTER 12: Linear Programming
  if (
    chapterLower.includes('linear programming') ||
    chapterLower.includes('lpp') ||
    chapterLower === 'm12' ||
    chapterLower.includes('chapter 12: linear programming') ||
    chapterLower.includes('chapter 12 - linear programming')
  ) {
    return `TOPIC: Chapter 12: Linear Programming
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Fundamental Terminology:**
- **Objective Function:** A linear function Z = a x + b y which is to be maximized or minimized subject to linear constraints.
- **Constraints:** Linear inequalities or equations restricting the variables x and y (e.g. 2x + 3y ≤ 12).
- **Non-Negative Constraints:** x ≥ 0, y ≥ 0 (restricts the problem to the first quadrant).
- **Feasible Region:** The common intersection region determined by all constraints simultaneously, including x ≥ 0, y ≥ 0.
- **Feasible Solution:** Any point (x, y) lying inside or on the boundary of the feasible region.
- **Optimal Solution:** Any feasible point that gives the optimal (maximum or minimum) value of the objective function.

**2. Corner Point Theorem & Graphical Solution Algorithm:**
- **Theorem 1:** Let R be the feasible region (convex polygon) for a linear programming problem and let Z = ax + by be the objective function. When Z has an optimal value (maximum or minimum), it MUST occur at one of the **Corner Points (Vertices)** of the feasible region.
- **Theorem 2:** If the feasible region R is **Bounded**, then the objective function Z has both a maximum and a minimum value on R, and each occurs at a corner point.
- **Step-by-Step Graphical Solution Procedure:**
  1. Convert each inequality constraint into an equation (e.g., 2x + 3y = 12).
  2. Find two points for each line (typically setting x = 0 and y = 0) and plot them on the coordinate plane.
  3. Determine the half-plane satisfying each inequality by testing the origin (0, 0).
  4. Shade the common **Feasible Region**.
  5. Determine the coordinates of all **Corner Points (Vertices)** by solving simultaneous boundary line equations.
  6. Construct a table listing each Corner Point and compute the value of **Z = ax + by** at that point.
  7. Identify the largest value (Maximum) or smallest value (Minimum).

**3. Unbounded Feasible Region (Special CBSE Case):**
- If the feasible region is **Unbounded**:
  * Let M be the largest value of Z at corner points.
  * Draw the open half-plane **ax + by > M**.
  * If this half-plane has **NO POINT IN COMMON** with the feasible region, then M is the true maximum.
  * If this half-plane has points in common with the feasible region, then Z has **NO MAXIMUM VALUE**.
  * Similarly, for minimum m, examine the half-plane **ax + by < m**.

**COMMON MISTAKE:**
- In an unbounded region, concluding the maximum value directly from the table without verifying whether the open half-plane ax + by > M intersects the feasible region.
- Forgetting to include x ≥ 0 and y ≥ 0 in the diagram (always restrict to 1st quadrant).`;
  }

  // CHAPTER 13: Probability
  if (
    chapterLower.includes('probability') ||
    chapterLower.includes('bayes') ||
    chapterLower === 'm13' ||
    chapterLower.includes('chapter 13: probability') ||
    chapterLower.includes('chapter 13 - probability')
  ) {
    return `TOPIC: Chapter 13: Probability
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Conditional Probability & Multiplication Theorem:**
- **Conditional Probability:** The probability of occurrence of event A given that event B has already occurred:
  **P(A | B) = P(A ∩ B) / P(B)**  (provided P(B) > 0).
  * Properties:
    1. P(S | B) = P(B | B) = 1.
    2. P((A ∪ B) | E) = P(A | E) + P(B | E) - P((A ∩ B) | E).
    3. P(A' | B) = 1 - P(A | B).
- **Multiplication Theorem on Probability:**
  **P(A ∩ B) = P(A) · P(B | A) = P(B) · P(A | B)**.
  For three events: P(A ∩ B ∩ C) = P(A) · P(B | A) · P(C | (A ∩ B)).

**2. Independent Events:**
- Two events A and B are statistically **Independent** if the occurrence of one does not affect the probability of occurrence of the other:
  P(A | B) = P(A) and P(B | A) = P(B).
- **Fundamental Test for Independence:**
  **P(A ∩ B) = P(A) · P(B)**.
- If A and B are independent, then:
  * A and B' are independent.
  * A' and B are independent.
  * A' and B' are independent: P(A' ∩ B') = P(A') · P(B') = (1 - P(A)) · (1 - P(B)).
- *Crucial Distinction:* Independent events ≠ Mutually Exclusive events! Mutually exclusive events have P(A ∩ B) = 0 (cannot occur together). Independent events can occur together and have P(A ∩ B) = P(A) · P(B) > 0.

**3. Theorem of Total Probability & Bayes' Theorem (Compulsory 5-Marker):**
- **Partition of Sample Space:** A set of events E₁, E₂, ..., E_n forms a partition of S if:
  1. E_i ∩ E_j = ∅ for all i ≠ j (Pairwise mutually disjoint).
  2. E₁ ∪ E₂ ∪ ... ∪ E_n = S (Exhaustive).
  3. P(E_i) > 0 for all i.
- **Theorem of Total Probability:**
  Let {E₁, E₂, ..., E_n} be a partition of S. For any event A associated with S:
  **P(A) = ∑_(k=1)^n P(E_k) · P(A | E_k) = P(E₁)P(A|E₁) + P(E₂)P(A|E₂) + ... + P(E_n)P(A|E_n)**.
- **Bayes' Theorem (Inverse / Posterior Probability):**
  If an event A has already occurred, the conditional probability that it was caused by specific event E_i is given by:
  **P(E_i | A) = [ P(E_i) · P(A | E_i) ] / [ ∑_(k=1)^n P(E_k) · P(A | E_k) ]**.
  * **CBSE Standard Writing Steps:**
    1. Define the hypotheses E₁, E₂, ... clearly in words.
    2. Define the observed event A clearly in words.
    3. Write prior probabilities P(E₁), P(E₂)... and conditional probabilities P(A | E₁), P(A | E₂)...
    4. State Bayes' Theorem formula explicitly before substituting numbers!

**4. Random Variables & Probability Distributions:**
- **Random Variable X:** A real-valued function whose domain is the sample space S.
- **Probability Distribution of X:**
| X = x_i | x₁ | x₂ | ... | x_n |
|---|---|---|---|---|
| **P(X = x_i) = p_i** | p₁ | p₂ | ... | p_n |
  * **Validity Constraints:**
    1. p_i ≥ 0 for all i.
    2. **∑ p_i = p₁ + p₂ + ... + p_n = 1**.
- **Mean (Expectation) of Random Variable X:**
  **E(X) = μ = ∑_(i=1)^n x_i · p_i**.

**COMMON MISTAKE:**
- Not writing the explicit event definitions in words before applying Bayes' theorem. CBSE examiners deduct 1 mark if events E₁, E₂, A are not explicitly defined.
- In probability distribution, not checking whether ∑ p_i = 1.`;
  }

  return null;
}
