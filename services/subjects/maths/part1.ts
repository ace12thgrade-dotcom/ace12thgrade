// services/subjects/maths/part1.ts
// Chapters 1 to 6: Relations & Functions, Inverse Trigonometric Functions, Matrices, Determinants, Continuity & Differentiability, Application of Derivatives
// Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

export function getMathsPart1Notes(chapterLower: string): string | null {
  // CHAPTER 1: Relations and Functions
  if (
    chapterLower.includes('relation') ||
    chapterLower.includes('function') ||
    chapterLower === 'm1' ||
    chapterLower.includes('chapter 1: relations and functions') ||
    chapterLower.includes('chapter 1 - relations and functions')
  ) {
    return `TOPIC: Chapter 1: Relations and Functions
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Types of Relations on Set A:**
- **Empty Relation:** R = ∅ ⊂ A × A (no element of A is related to any element of A).
- **Universal Relation:** R = A × A (every element of A is related to every element of A).
- **Reflexive Relation:** (a, a) ∈ R for EVERY element a ∈ A.
- **Symmetric Relation:** If (a, b) ∈ R, then (b, a) ∈ R for all a, b ∈ A.
- **Transitive Relation:** If (a, b) ∈ R and (b, c) ∈ R, then (a, c) ∈ R for all a, b, c ∈ A.
  *Note:* If (a, b) ∈ R but there is NO element c such that (b, c) ∈ R, the condition for transitivity is not violated (it is vacuously transitive).
- **Equivalence Relation:** A relation R on set A is an equivalence relation if and only if it is simultaneously **Reflexive, Symmetric, and Transitive**.
- **Equivalence Class [a]:** For an equivalence relation R on A, the equivalence class of an element a ∈ A is the set of all elements in A related to a:
  **[a] = { x ∈ A : (x, a) ∈ R }**.
  *Properties of Equivalence Classes:*
  1. Any two equivalence classes [a] and [b] are either strictly identical or completely disjoint: [a] = [b] or [a] ∩ [b] = ∅.
  2. The union of all pairwise disjoint equivalence classes yields the entire set A: ⋃ [a] = A.

**2. Types of Functions (Mappings):**
- **One-One Function (Injective Mapping):**
  * **Definition:** Distinct elements in domain have distinct images in codomain.
  * **Algebraic Verification Algorithm:**
    1. Let x₁, x₂ ∈ Domain.
    2. Set f(x₁) = f(x₂).
    3. Solve algebraically. If f(x₁) = f(x₂) strictly implies **x₁ = x₂** as the unique solution, then f is one-one (injective).
    4. If x₁ = ±x₂ or multiple solutions exist, then f is many-one.
  * **Calculus Test (for continuous functions):** If f'(x) > 0 for all x in domain (strictly increasing) or f'(x) < 0 for all x (strictly decreasing), then f is strictly monotonic and therefore one-one.
- **Onto Function (Surjective Mapping):**
  * **Definition:** Every element y in the codomain has at least one pre-image x in the domain such that f(x) = y.
  * **Algebraic Verification Algorithm:**
    1. Let y ∈ Codomain.
    2. Set y = f(x).
    3. Express x in terms of y: x = g(y).
    4. Check whether for EVERY possible value of y in the codomain, the corresponding value of x exists and lies inside the Domain of f.
    5. Equivalently: **Range of f = Codomain of f**.
- **Bijective Function:** A function that is simultaneously **Injective (One-One) and Surjective (Onto)**.
  * A function is invertible if and only if it is bijective.

**3. Number of Relations and Functions Formulas:**
- If n(A) = m and n(B) = n:
  * Total number of relations from A to B = 2^(m × n).
  * Total number of reflexive relations on A (n(A)=n) = 2^[n(n-1)].
  * Total number of symmetric relations on A = 2^[n(n+1)/2].
  * Total number of functions from A to B = n^m.
  * Number of One-One functions from A to B:
    - If m ≤ n: n! / (n - m)! = ⁿPₘ.
    - If m > n: 0 (Pigeonhole Principle).
  * Number of Bijective functions from A to A (n(A)=n) = n!.

**COMMON MISTAKE:**
- Forgetting to prove onto: Showing f(x₁) = f(x₂) => x₁ = x₂ only proves Injectivity! You must also express x in terms of y and show x ∈ Domain for all y ∈ Codomain to prove Surjectivity.
- Confusing f: R -> R with f: N -> N or f: [0, ∞) -> [0, ∞). Always check the specified domain and codomain carefully!`;
  }

  // CHAPTER 2: Inverse Trigonometric Functions
  if (
    chapterLower.includes('inverse') ||
    chapterLower.includes('trigonometr') ||
    chapterLower === 'm2' ||
    chapterLower.includes('chapter 2: inverse trigonometric functions') ||
    chapterLower.includes('chapter 2 - inverse trigonometric functions')
  ) {
    return `TOPIC: Chapter 2: Inverse Trigonometric Functions
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Principal Value Branches (PVB) Master Table (Compulsory 1 & 2 Mark Questions):**
| Function | Domain | Range (Principal Value Branch) | Behavior at Boundaries |
|---|---|---|---|
| **y = sin⁻¹(x)** | [-1, 1] | **[-π/2, π/2]** | Closed interval; reaches -π/2 at x=-1 and π/2 at x=1 |
| **y = cos⁻¹(x)** | [-1, 1] | **[0, π]** | Closed interval; reaches π at x=-1 and 0 at x=1 |
| **y = tan⁻¹(x)** | R | **(-π/2, π/2)** | Open interval; approaches ±π/2 as x -> ±∞ |
| **y = cosec⁻¹(x)** | R - (-1, 1) | **[-π/2, π/2] - {0}** | Closed interval excluding 0 where cosec is undefined |
| **y = sec⁻¹(x)** | R - (-1, 1) | **[0, π] - {π/2}** | Closed interval excluding π/2 where sec is undefined |
| **y = cot⁻¹(x)** | R | **(0, π)** | Open interval; cot⁻¹(0) = π/2 |

**2. Core Identities & Negative Angle Properties:**
- **Type 1 (Odd-function-like, negative signs come straight out):**
  * sin⁻¹(-x) = - sin⁻¹(x), for x ∈ [-1, 1]
  * tan⁻¹(-x) = - tan⁻¹(x), for x ∈ R
  * cosec⁻¹(-x) = - cosec⁻¹(x), for |x| ≥ 1
- **Type 2 (Supplementary angle shifts with π):**
  * cos⁻¹(-x) = **π - cos⁻¹(x)**, for x ∈ [-1, 1]
  * sec⁻¹(-x) = **π - sec⁻¹(x)**, for |x| ≥ 1
  * cot⁻¹(-x) = **π - cot⁻¹(x)**, for x ∈ R
- **Complementary Co-function Pairs:**
  * sin⁻¹(x) + cos⁻¹(x) = π/2, for x ∈ [-1, 1]
  * tan⁻¹(x) + cot⁻¹(x) = π/2, for x ∈ R
  * sec⁻¹(x) + cosec⁻¹(x) = π/2, for |x| ≥ 1

**3. Evaluation and Simplification Techniques:**
- **Property: f⁻¹(f(θ)) = θ ONLY IF θ lies inside the Principal Value Branch!**
  * Example 1: sin⁻¹(sin(2π/3)).
    - 2π/3 = 120° ∉ [-π/2, π/2].
    - Write 2π/3 = π - π/3.
    - sin(2π/3) = sin(π - π/3) = sin(π/3).
    - Since π/3 ∈ [-π/2, π/2], sin⁻¹(sin(π/3)) = **π/3**.
  * Example 2: cos⁻¹(cos(7π/6)).
    - 7π/6 = 210° ∉ [0, π].
    - Write 7π/6 = 2π - 5π/6.
    - cos(7π/6) = cos(2π - 5π/6) = cos(5π/6).
    - Since 5π/6 ∈ [0, π], cos⁻¹(cos(5π/6)) = **5π/6**.
  * Example 3: tan⁻¹(tan(3π/4)).
    - 3π/4 ∉ (-π/2, π/2).
    - tan(3π/4) = tan(π - π/4) = -tan(π/4) = tan(-π/4).
    - Since -π/4 ∈ (-π/2, π/2), tan⁻¹(tan(-π/4)) = **-π/4**.

**4. Standard Trigonometric Substitutions:**
- Expression √(a² - x²) => Put x = a sinθ or a cosθ.
- Expression √(a² + x²) => Put x = a tanθ or a cotθ.
- Expression √(x² - a²) => Put x = a secθ or a cosecθ.
- Expression √((a - x)/(a + x)) => Put x = a cos(2θ).

**COMMON MISTAKE:**
- Writing cos⁻¹(-1/2) = -cos⁻¹(1/2) = -π/3. This is completely WRONG! For cos⁻¹, negative argument gives π - cos⁻¹(1/2) = π - π/3 = 2π/3.
- Blindly canceling sin⁻¹(sin x) = x when x is outside [-π/2, π/2].`;
  }

  // CHAPTER 3: Matrices
  if (
    chapterLower.includes('matri') ||
    chapterLower === 'm3' ||
    chapterLower.includes('chapter 3: matrices') ||
    chapterLower.includes('chapter 3 - matrices')
  ) {
    return `TOPIC: Chapter 3: Matrices
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Types of Matrices & Basic Definitions:**
- **Order of Matrix:** A matrix with m rows and n columns has order m × n, containing m·n entries: A = [a_ij]_(m×n).
- **Row Matrix:** Order 1 × n; **Column Matrix:** Order m × 1.
- **Square Matrix:** m = n.
- **Diagonal Matrix:** Square matrix where all non-diagonal elements are zero: a_ij = 0 for i ≠ j.
- **Scalar Matrix:** Diagonal matrix where all diagonal elements are equal: a_ii = k.
- **Identity (Unit) Matrix (I_n):** Scalar matrix where diagonal entries are 1: a_ii = 1 and a_ij = 0 for i ≠ j.
- **Zero Matrix (O):** All entries are zero.
- **Equality of Matrices:** A = B if and only if: (1) They have identical order. (2) Every corresponding element is equal: a_ij = b_ij.

**2. Matrix Operations & Properties:**
- **Matrix Addition & Subtraction:** Defined only for matrices of identical order.
  * Commutative: A + B = B + A.
  * Associative: (A + B) + C = A + (B + C).
- **Scalar Multiplication:** k · [a_ij] = [k · a_ij].
- **Matrix Multiplication (A_(m×n) · B_(n×p) = C_(m×p)):**
  * **Existence Condition:** Number of columns in A MUST equal the number of rows in B.
  * Row-by-column multiplication rule: c_ij = ∑_(k=1)^n (a_ik · b_kj).
  * **NON-COMMUTATIVE in general:** AB ≠ BA (Even if both exist, they may have different orders or different values).
  * Associative: (AB)C = A(BC).
  * Distributive: A(B + C) = AB + AC.
  * Identity: AI = IA = A.
  * If AB = O, it does NOT necessarily imply A = O or B = O (Zero divisor property).

**3. Transpose of a Matrix & Symmetry:**
- **Transpose (A' or Aᵀ):** Formed by interchanging rows into columns: [a_ij]ᵀ = [a_ji].
  * Properties:
    1. (Aᵀ)ᵀ = A
    2. (kA)ᵀ = k Aᵀ
    3. (A + B)ᵀ = Aᵀ + Bᵀ
    4. **Reversal Law:** (AB)ᵀ = Bᵀ · Aᵀ. For three matrices: (ABC)ᵀ = Cᵀ Bᵀ Aᵀ.
- **Symmetric Matrix:** A square matrix A is symmetric if and only if **Aᵀ = A** (i.e. a_ij = a_ji for all i, j).
- **Skew-Symmetric Matrix:** A square matrix A is skew-symmetric if and only if **Aᵀ = -A** (i.e. a_ij = -a_ji for all i, j).
  * **CRUCIAL THEOREM:** The diagonal elements of any skew-symmetric matrix are ALWAYS ZERO!
    *Proof:* For diagonal elements, i = j => a_ii = -a_ii => 2 a_ii = 0 => a_ii = 0.
- **Decomposition Theorem (High-Frequency CBSE Board 3-Marker):**
  Any square matrix A can be uniquely expressed as the sum of a symmetric matrix and a skew-symmetric matrix:
  **A = P + Q**, where:
  * **P = (1/2)(A + Aᵀ)** is Symmetric (Pᵀ = P).
  * **Q = (1/2)(A - Aᵀ)** is Skew-Symmetric (Qᵀ = -Q).

**COMMON MISTAKE:**
- Writing (AB)ᵀ = Aᵀ Bᵀ. It is ALWAYS reversed: (AB)ᵀ = Bᵀ Aᵀ.
- Assuming AB = BA; matrix multiplication is strictly non-commutative in general.`;
  }

  // CHAPTER 4: Determinants
  if (
    chapterLower.includes('determinant') ||
    chapterLower === 'm4' ||
    chapterLower.includes('chapter 4: determinants') ||
    chapterLower.includes('chapter 4 - determinants')
  ) {
    return `TOPIC: Chapter 4: Determinants
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Minors and Cofactors:**
- For a square matrix A = [a_ij] of order n:
  * **Minor (M_ij):** The determinant of the submatrix of order (n-1) obtained by deleting the i-th row and j-th column.
  * **Cofactor (A_ij or C_ij):** The signed minor given by:
    **A_ij = (-1)^(i+j) · M_ij**.
  * **Expansion Formula:** The determinant |A| equals the sum of the products of elements of ANY single row (or column) with their corresponding cofactors:
    |A| = a₁₁ A₁₁ + a₁₂ A₁₂ + a₁₃ A₁₃.
  * **Zero Sum Property:** If elements of a row (or column) are multiplied with cofactors of ANY OTHER row (or column), their sum is IDENTICALLY ZERO:
    a₁₁ A₂₁ + a₁₂ A₂₂ + a₁₃ A₂₃ = 0.

**2. Adjoint of a Matrix & Matrix Inverse:**
- **Adjoint (adj A):** The **TRANSPOSE of the cofactor matrix**:
  adj(A) = [A_ij]ᵀ.
- **Fundamental Identity:**
  **A · (adj A) = (adj A) · A = |A| · I_n**.
- **Properties of Adjoint & Determinants (Compulsory 1-Mark MCQs):**
  1. **|adj A| = |A|^(n - 1)**, where n is the order of matrix A.
  2. **|A · adj A| = |A|^n**.
  3. **adj(adj A) = |A|^(n - 2) · A**.
  4. **|adj(adj A)| = |A|^[(n - 1)²]**.
  5. **adj(AB) = (adj B) · (adj A)**.
  6. **|kA| = k^n · |A|** for an n × n matrix.
  7. **|Aᵀ| = |A|** and **|AB| = |A| · |B|**.
- **Inverse of a Matrix (A⁻¹):**
  A square matrix A is invertible if and only if it is **non-singular (|A| ≠ 0)**:
  **A⁻¹ = (1 / |A|) · adj(A)**.
  * If |A| = 0, A is singular and A⁻¹ does not exist.
  * Properties of Inverse: (A⁻¹)⁻¹ = A; (AB)⁻¹ = B⁻¹ A⁻¹; (Aᵀ)⁻¹ = (A⁻¹)ᵀ; |A⁻¹| = 1 / |A|.

**3. System of Linear Equations (Matrix Method - Standard 5-Marker):**
- Given system:
  a₁ x + b₁ y + c₁ z = d₁
  a₂ x + b₂ y + c₂ z = d₂
  a₃ x + b₃ y + c₃ z = d₃
- Matrix Form: **A X = B**, where:
  A = [[a₁, b₁, c₁], [a₂, b₂, c₂], [a₃, b₃, c₃]], X = [[x], [y], [z]], B = [[d₁], [d₂], [d₃]].
- **Step-by-Step Solution Algorithm:**
  1. Calculate determinant |A|.
  2. **Case 1: |A| ≠ 0 (Consistent, Unique Solution):**
     * The system has a unique solution given by: **X = A⁻¹ B = (1 / |A|) · (adj A) · B**.
  3. **Case 2: |A| = 0:**
     * Calculate (adj A) · B:
       - If **(adj A) · B ≠ O**, the system is **Inconsistent** and has **NO SOLUTION**.
       - If **(adj A) · B = O**, the system is either **Consistent with Infinitely Many Solutions** or Inconsistent.

**4. Area of Triangle & Collinearity:**
- Area of triangle with vertices (x₁, y₁), (x₂, y₂), (x₃, y₃):
  Δ = (1/2) | |[x₁, y₁, 1], [x₂, y₂, 1], [x₃, y₃, 1]| |. (Always take absolute value).
- Three points are collinear if and only if **Δ = 0**.

**COMMON MISTAKE:**
- Forgetting to transpose the cofactor matrix to get adj(A). Adjoint is the TRANSPOSE of cofactors!
- When factoring scalar k out of an n × n determinant, writing k|A| instead of k^n |A|. For a 3 × 3 matrix, |2A| = 2³ |A| = 8|A|!`;
  }

  // CHAPTER 5: Continuity and Differentiability
  if (
    chapterLower.includes('continuity') ||
    chapterLower.includes('differentiab') ||
    chapterLower === 'm5' ||
    chapterLower.includes('chapter 5: continuity and differentiability') ||
    chapterLower.includes('chapter 5 - continuity and differentiability')
  ) {
    return `TOPIC: Chapter 5: Continuity and Differentiability
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Continuity of a Function at a Point x = c:**
- A function f(x) is continuous at x = c in its domain if and only if:
  **lim_(x->c⁻) f(x) = lim_(x->c⁺) f(x) = f(c)**.
  (i.e., Left Hand Limit LHL = Right Hand Limit RHL = Value of Function f(c)).
- Standard continuous functions on their domains: Polynomials, trigonometric (sin x, cos x), exponential (eˣ, aˣ), logarithmic (ln x for x > 0), and modulus (|x|).

**2. Differentiability of a Function at x = c:**
- A function f(x) is differentiable at x = c if and only if:
  Left Hand Derivative (LHD) = Right Hand Derivative (RHD):
  **lim_(h->0) [ f(c - h) - f(c) ] / (-h) = lim_(h->0) [ f(c + h) - f(c) ] / h**.
- **Crucial Relationship:**
  * **Every differentiable function is continuous.**
    *Proof:* f(x) - f(c) = [ (f(x) - f(c))/(x - c) ] · (x - c). Taking lim_(x->c) gives f'(c) · 0 = 0 => lim f(x) = f(c).
  * **The converse is NOT necessarily true.**
    *Counterexample:* f(x) = |x| is continuous at x = 0, but NOT differentiable at x = 0 because LHD = -1 while RHD = +1 (sharp corner / kink).

**3. Advanced Differentiation Methods:**
- **Chain Rule:** If y = f(u) and u = g(x), then dy/dx = (df/du) · (du/dx).
- **Implicit Differentiation:** Differentiate both sides with respect to x directly, applying product/chain rule to terms in y (multiplying by dy/dx), then collect dy/dx terms on one side.
- **Logarithmic Differentiation (Essential for [f(x)]^[g(x)] or complex products):**
  * For y = [u(x)]^[v(x)]:
    1. Take natural logarithm of both sides: ln y = v(x) · ln[u(x)].
    2. Differentiate with respect to x: (1/y) · (dy/dx) = v'(x) · ln[u(x)] + v(x) · [u'(x) / u(x)].
    3. Multiply by y to solve for dy/dx:
       **dy/dx = [u(x)]^[v(x)] · [ v'(x) ln(u) + v(x) u'(x) / u(x) ]**.
- **Parametric Differentiation:**
  * If x = f(t) and y = g(t):
    **dy/dx = (dy/dt) / (dx/dt)**  (provided dx/dt ≠ 0).
  * **Second Derivative of Parametric Functions (Major Board Pitfall):**
    **d²y/dx² = [ d/dt (dy/dx) ] · (dt/dx) = [ d/dt (dy/dx) ] / (dx/dt)**.
    *(Do NOT simply divide d²y/dt² by d²x/dt²!)*

**4. Standard Derivatives Quick Reference:**
- d/dx(xⁿ) = n xⁿ⁻¹
- d/dx(eˣ) = eˣ; d/dx(aˣ) = aˣ ln a
- d/dx(ln x) = 1/x; d/dx(log_a x) = 1 / (x ln a)
- d/dx(sin x) = cos x; d/dx(cos x) = -sin x; d/dx(tan x) = sec²x
- d/dx(sec x) = sec x tan x; d/dx(cosec x) = -cosec x cot x; d/dx(cot x) = -cosec²x
- d/dx(sin⁻¹x) = 1 / √(1 - x²); d/dx(cos⁻¹x) = -1 / √(1 - x²)
- d/dx(tan⁻¹x) = 1 / (1 + x²); d/dx(cot⁻¹x) = -1 / (1 + x²)
- d/dx(sec⁻¹x) = 1 / (|x| √(x² - 1)); d/dx(cosec⁻¹x) = -1 / (|x| √(x² - 1)).

**COMMON MISTAKE:**
- In parametric second derivative d²y/dx², forgetting to multiply by dt/dx at the end.
- Differentiating u^v as v · u^(v-1) · u'. That power rule only works when the exponent is a constant! When both base and exponent are variables, you MUST use logarithmic differentiation.`;
  }

  // CHAPTER 6: Application of Derivatives
  if (
    chapterLower.includes('application of derivative') ||
    chapterLower.includes('aod') ||
    chapterLower === 'm6' ||
    chapterLower.includes('chapter 6: application of derivatives') ||
    chapterLower.includes('chapter 6 - application of derivatives')
  ) {
    return `TOPIC: Chapter 6: Application of Derivatives
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Rate of Change of Quantities:**
- If a quantity y depends on x, the instantaneous rate of change of y with respect to x is **dy/dx = lim_(Δx->0) (Δy/Δx)**.
- If two variables x and y change with time t: **dy/dx = (dy/dt) / (dx/dt)**.
- Common Geometrical Formulas:
  * Sphere: Volume V = (4/3) π r³ => dV/dt = 4 π r² (dr/dt); Surface Area S = 4 π r² => dS/dt = 8 π r (dr/dt).
  * Cone: Volume V = (1/3) π r² h (use similar triangles r/h = R/H to express V in a single variable).
  * Circle: Area A = π r² => dA/dt = 2 π r (dr/dt); Perimeter P = 2 π r.
  * Cube: Volume V = x³ => dV/dt = 3 x² (dx/dt); Surface Area S = 6 x² => dS/dt = 12 x (dx/dt).

**2. Increasing and Decreasing Functions:**
- Let f be continuous on [a, b] and differentiable on (a, b):
  1. **Strictly Increasing on (a, b):** If **f'(x) > 0** for all x ∈ (a, b).
  2. **Strictly Decreasing on (a, b):** If **f'(x) < 0** for all x ∈ (a, b).
  3. **Increasing on [a, b]:** If f'(x) ≥ 0 for all x ∈ (a, b).
  4. **Decreasing on [a, b]:** If f'(x) ≤ 0 for all x ∈ (a, b).
  5. **Constant on [a, b]:** If f'(x) = 0 for all x ∈ (a, b).
- **Algorithm to Determine Intervals of Increase/Decrease:**
  1. Find f'(x).
  2. Set f'(x) = 0 and find critical points that divide the domain into disjoint open intervals.
  3. Pick a test value inside each sub-interval to test the algebraic sign of f'(x).
  4. Conclude: where f'(x) > 0, function is strictly increasing; where f'(x) < 0, function is strictly decreasing.

**3. Maxima and Minima (Standard 5-Marker Word Problems):**
- **Critical Points:** Points in the domain where f'(x) = 0 or f'(x) does not exist.
- **First Derivative Test:**
  * If f'(x) changes sign from **positive to negative** as x increases through c => x = c is a point of **Local Maximum**.
  * If f'(x) changes sign from **negative to positive** as x increases through c => x = c is a point of **Local Minimum**.
  * If f'(x) does not change sign => x = c is a **Point of Inflection**.
- **Second Derivative Test (Preferred for CBSE Optimization Problems):**
  1. Find f'(x) and solve f'(x) = 0 to get critical point(s) x = c.
  2. Find f''(x) and evaluate at x = c:
     * If **f''(c) < 0** => f has a **Local Maximum** at x = c.
     * If **f''(c) > 0** => f has a **Local Minimum** at x = c.
     * If **f''(c) = 0** => Test fails; revert to First Derivative Test.
- **Absolute (Global) Extrema on a Closed Interval [a, b]:**
  1. Find all critical points c_i ∈ (a, b) where f'(c_i) = 0.
  2. Calculate values of f at all critical points and at boundary endpoints: f(a), f(b), f(c₁), f(c₂)...
  3. Maximum of these values = **Absolute Maximum**; Minimum of these values = **Absolute Minimum**.

**COMMON MISTAKE:**
- In optimization word problems, students often find the critical point and forget to verify the second derivative test! CBSE marking rubric allocates 1 full mark to showing f''(c) < 0 (for maximum) or f''(c) > 0 (for minimum). Always compute and show the sign of f''(x).
- Confusing open and closed intervals for strictly increasing/decreasing. For strictly increasing, specify open intervals (a, b).`;
  }

  return null;
}
