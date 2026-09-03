// services/subjects/maths/pyqs1.ts
// Chapters 1 to 6 Solved Board PYQs & Comprehensive Question Bank
// Authentic recent CBSE Board questions with complete notebook-style solutions.

export function getMathsPart1PYQs(chapterLower: string): string | null {
  // CHAPTER 1: Relations and Functions
  if (
    chapterLower.includes('relation') ||
    chapterLower.includes('function') ||
    chapterLower === 'm1' ||
    chapterLower.includes('chapter 1: relations and functions') ||
    chapterLower.includes('chapter 1 - relations and functions')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (65/1/1)] Let A = {1, 2, 3}. Then number of equivalence relations containing (1, 2) is:
(A) 1
(B) 2
(C) 3
(D) 4
SOLUTION:
**Correct Answer:** (B) 2
**Notebook Explanation:**
Let A = {1, 2, 3}. An equivalence relation R on A must be reflexive, symmetric, and transitive.
1. Reflexive condition implies (1, 1), (2, 2), (3, 3) must be in R.
2. Given that (1, 2) ∈ R, symmetry requires (2, 1) ∈ R.
- Smallest Equivalence Relation: R₁ = {(1, 1), (2, 2), (3, 3), (1, 2), (2, 1)}. This is reflexive, symmetric, and transitive.
- If we add any single other pair, say (2, 3), symmetry requires (3, 2). Then transitivity forces (1, 3) and (3, 1) to be included as well, which yields the Universal Relation: R₂ = A × A.
Thus, there are exactly **2** distinct equivalence relations containing (1, 2).
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).
INSIGHT: If no pair is forced, the total number of equivalence relations on a set of 3 elements is 5 (Bell number B₃ = 5).

QUESTION: Q2. [Assertion-Reason, CBSE 2023 (Delhi), 1 Mark]
Assertion (A): The function f: R -> R defined by f(x) = x³ + x is a bijective function.
Reason (R): A strictly increasing continuous function whose range is R is always one-one and onto.
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is true but (R) is false.
(D) (A) is false but (R) is true.
SOLUTION:
**Correct Answer:** (A)
**Notebook Explanation:**
1. Differentiate f(x): f'(x) = 3x² + 1. Since x² ≥ 0 for all x ∈ R, 3x² + 1 ≥ 1 > 0 for all x ∈ R.
   Because f'(x) > 0 strictly everywhere, f(x) is strictly increasing and therefore **strictly one-one (injective)**.
2. As x -> +∞, f(x) -> +∞; as x -> -∞, f(x) -> -∞. Since f(x) is continuous on R, by the Intermediate Value Theorem, f(x) attains every real value. Hence, Range of f = R = Codomain, making f **onto (surjective)**.
3. Being both one-one and onto, f is bijective. Reason (R) states this general mathematical theorem directly. Hence, both A and R are true, and R correctly explains A.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).

QUESTION: Q3. [2 Marks, CBSE 2024 (65/2/2)] Show that the relation R in the set Z of integers given by R = { (a, b) : 2 divides (a - b) } is an equivalence relation.
SOLUTION:
**Step 1: Reflexivity:**
For any a ∈ Z:
a - a = 0 = 2 × 0.
Since 0 is divisible by 2, (a, a) ∈ R for all a ∈ Z. Hence, R is **Reflexive**.
**Step 2: Symmetry:**
Let (a, b) ∈ R.
=> 2 divides (a - b) => a - b = 2k for some integer k ∈ Z.
=> b - a = - (a - b) = - (2k) = 2(-k).
Since -k ∈ Z, 2 divides (b - a).
=> (b, a) ∈ R. Hence, R is **Symmetric**.
**Step 3: Transitivity:**
Let (a, b) ∈ R and (b, c) ∈ R.
=> a - b = 2k₁ and b - c = 2k₂ for some integers k₁, k₂ ∈ Z.
Adding both equations:
(a - b) + (b - c) = 2k₁ + 2k₂
=> a - c = 2(k₁ + k₂).
Since (k₁ + k₂) is an integer, 2 divides (a - c).
=> (a, c) ∈ R. Hence, R is **Transitive**.
**Conclusion:**
Since R is reflexive, symmetric, and transitive, R is an **Equivalence Relation**.
**CBSE Marking Rubric:**
- 0.5 Mark for proving Reflexivity.
- 0.5 Mark for proving Symmetry.
- 1 Mark for proving Transitivity and final conclusion.
INSIGHT: Always mention that integers are closed under negation and addition.

QUESTION: Q4. [3 Marks, CBSE 2023 (All India)] Check whether the function f: R -> R defined by f(x) = x / (1 + x²) is one-one and onto.
SOLUTION:
**Step 1: Checking Injectivity (One-One):**
- Let x₁, x₂ ∈ R such that f(x₁) = f(x₂).
- x₁ / (1 + x₁²) = x₂ / (1 + x₂²)
- Cross-multiplying: x₁ (1 + x₂²) = x₂ (1 + x₁²)
- x₁ + x₁ x₂² = x₂ + x₂ x₁²
- (x₁ - x₂) - x₁ x₂ (x₁ - x₂) = 0
- (x₁ - x₂) (1 - x₁ x₂) = 0
- This implies either x₁ = x₂ OR x₁ x₂ = 1 (i.e. x₂ = 1/x₁).
- **Counterexample:** Take x₁ = 2 and x₂ = 1/2:
  f(2) = 2 / (1 + 2²) = 2/5.
  f(1/2) = (1/2) / (1 + (1/2)²) = (1/2) / (5/4) = 2/5.
- Since f(2) = f(1/2) but 2 ≠ 1/2, the function f is **NOT ONE-ONE (Many-One)**.
**Step 2: Checking Surjectivity (Onto):**
- Let y ∈ R (Codomain). Set y = x / (1 + x²).
- y x² - x + y = 0.
- For x to be real, the discriminant of this quadratic equation in x must be non-negative:
  D = b² - 4ac = (-1)² - 4(y)(y) = 1 - 4y² ≥ 0
  => 4y² ≤ 1 => y² ≤ 1/4 => **-1/2 ≤ y ≤ 1/2**.
- Therefore, the **Range of f = [-1/2, 1/2]**.
- Since Codomain = R ≠ Range, any element outside [-1/2, 1/2] (e.g. y = 2) has NO pre-image in R.
- Hence, f is **NOT ONTO (Into)**.
**Final Conclusion:**
- The function f is **Neither One-One nor Onto**.
**CBSE Marking Rubric:**
- 1.5 Marks for showing f is not one-one with algebraic factor (1 - x₁x₂) and numerical counterexample.
- 1.5 Marks for calculating Range [-1/2, 1/2] and proving f is not onto.
INSIGHT: For functions of type x/(1+x²), always use the quadratic discriminant method to find range.

QUESTION: Q5. [5 Marks Structured Problem, CBSE 2024 (65/1/1)]
Let N denote the set of all natural numbers and R be the relation on N × N defined by:
(a, b) R (c, d) if and only if a d (b + c) = b c (a + d).
Show that R is an equivalence relation on N × N.
SOLUTION:
**Given Relation:**
- Set: S = N × N.
- For (a, b), (c, d) ∈ N × N:
  (a, b) R (c, d) <=> a d (b + c) = b c (a + d).
- Dividing both sides by a b c d:
  (b + c) / (b c) = (a + d) / (a d)
  => **1/c + 1/b = 1/d + 1/a**
  => **1/a + 1/d = 1/b + 1/c** (or 1/a - 1/b = 1/c - 1/d).
This simplified form makes testing equivalence properties straightforward and rigorous!

**Step 1: Reflexivity:**
Let (a, b) ∈ N × N.
We need to test whether (a, b) R (a, b).
Left Hand Side of simplified relation: 1/a + 1/b.
Right Hand Side: 1/b + 1/a.
Since addition in R is commutative, 1/a + 1/b = 1/b + 1/a is identically true for all a, b ∈ N.
=> a b (b + a) = b a (a + b).
Thus, **(a, b) R (a, b)** for all (a, b) ∈ N × N.
Hence, R is **Reflexive**.

**Step 2: Symmetry:**
Let (a, b), (c, d) ∈ N × N such that (a, b) R (c, d).
=> a d (b + c) = b c (a + d)
=> 1/a + 1/d = 1/b + 1/c
=> 1/b + 1/c = 1/a + 1/d
=> 1/c + 1/b = 1/d + 1/a
Multiplying by c d a b:
=> c b (a + d) = d a (c + b)
=> c b (d + a) = d a (b + c)
=> **(c, d) R (a, b)**.
Hence, R is **Symmetric**.

**Step 3: Transitivity:**
Let (a, b), (c, d), (e, f) ∈ N × N such that:
(1) (a, b) R (c, d) => 1/a + 1/d = 1/b + 1/c  => **1/a - 1/b = 1/c - 1/d**
(2) (c, d) R (e, f) => 1/c + 1/f = 1/d + 1/e  => **1/c - 1/d = 1/e - 1/f**.
Comparing both equations:
1/a - 1/b = 1/e - 1/f
=> 1/a + 1/f = 1/b + 1/e
=> (a + f) / (a f) = (b + e) / (b e)
=> a f (b + e) = b e (a + f).
Therefore, **(a, b) R (e, f)**.
Hence, R is **Transitive**.

**Conclusion:**
Since the relation R is reflexive, symmetric, and transitive, R is an **Equivalence Relation** on N × N.
**CBSE Marking Rubric:**
- 1 Mark for algebraic rearrangement 1/a - 1/b = 1/c - 1/d.
- 1 Mark for proving Reflexivity.
- 1.5 Marks for proving Symmetry.
- 1.5 Marks for proving Transitivity and final statement.
INSIGHT: Dividing by a b c d simplifies this notoriously tricky 5-marker into elementary arithmetic.`;
  }

  // CHAPTER 2: Inverse Trigonometric Functions
  if (
    chapterLower.includes('inverse') ||
    chapterLower.includes('trigonometr') ||
    chapterLower === 'm2' ||
    chapterLower.includes('chapter 2: inverse trigonometric functions') ||
    chapterLower.includes('chapter 2 - inverse trigonometric functions')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (65/3/1)] The principal value of cos⁻¹(-1/2) + 2 sin⁻¹(1/2) is:
(A) π/3
(B) 2π/3
(C) π
(D) 4π/3
SOLUTION:
**Correct Answer:** (C) π
**Notebook Explanation:**
1. For cos⁻¹(-x): Use the identity cos⁻¹(-x) = π - cos⁻¹(x).
   cos⁻¹(-1/2) = π - cos⁻¹(1/2) = π - π/3 = 2π/3. (Since 2π/3 ∈ [0, π]).
2. For sin⁻¹(1/2):
   sin⁻¹(1/2) = π/6. (Since π/6 ∈ [-π/2, π/2]).
3. Sum = cos⁻¹(-1/2) + 2 sin⁻¹(1/2) = 2π/3 + 2(π/6) = 2π/3 + π/3 = 3π/3 = **π**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (C).
INSIGHT: Writing cos⁻¹(-1/2) = -π/3 is the most common mistake in this question.

QUESTION: Q2. [Assertion-Reason, CBSE 2023 (Delhi), 1 Mark]
Assertion (A): The value of sin⁻¹(sin(3π/5)) is equal to 3π/5.
Reason (R): sin⁻¹(sin θ) = θ if and only if θ ∈ [-π/2, π/2].
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is false but (R) is true.
(D) (A) is true but (R) is false.
SOLUTION:
**Correct Answer:** (C) (A) is false but (R) is true.
**Notebook Explanation:**
Reason (R) states the fundamental identity: sin⁻¹(sin θ) = θ is valid if and only if θ lies within the Principal Value Branch [-π/2, π/2] = [-0.5π, 0.5π]. This is a true statement.
Now check Assertion (A):
θ = 3π/5 = 0.6π = 108°.
Since 108° > 90°, 3π/5 does NOT belong to [-π/2, π/2].
We must reduce θ:
sin(3π/5) = sin(π - 2π/5) = sin(2π/5).
Since 2π/5 = 72° ∈ [-π/2, π/2], sin⁻¹(sin(3π/5)) = 2π/5 ≠ 3π/5.
Therefore, Assertion (A) is FALSE, and Reason (R) is TRUE.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (C).

QUESTION: Q3. [2 Marks, CBSE 2024 (65/1/2)] Find the value of tan⁻¹(√3) - sec⁻¹(-2).
SOLUTION:
**Step 1: Evaluate tan⁻¹(√3):**
- Let tan⁻¹(√3) = θ. Since √3 = tan(π/3) and π/3 ∈ (-π/2, π/2):
  tan⁻¹(√3) = **π/3**.
**Step 2: Evaluate sec⁻¹(-2):**
- Use identity: sec⁻¹(-x) = π - sec⁻¹(x).
- sec⁻¹(-2) = π - sec⁻¹(2).
- Since sec(π/3) = 2 and π/3 ∈ [0, π] - {π/2}:
  sec⁻¹(2) = π/3.
- Therefore, sec⁻¹(-2) = π - π/3 = **2π/3**.
**Step 3: Compute Difference:**
- tan⁻¹(√3) - sec⁻¹(-2) = π/3 - 2π/3 = **- π/3**.
**Final Answer:**
- The value is **- π/3**.
**CBSE Marking Rubric:**
- 0.5 Mark for tan⁻¹(√3) = π/3.
- 1 Mark for sec⁻¹(-2) = 2π/3.
- 0.5 Mark for final answer -π/3.
INSIGHT: Remember sec⁻¹(-x) = π - sec⁻¹(x), not -sec⁻¹(x).

QUESTION: Q4. [3 Marks, CBSE 2023 (All India)] Express in simplest form:
tan⁻¹ [ (cos x - sin x) / (cos x + sin x) ], where -π/4 < x < 3π/4.
SOLUTION:
**Step 1: Divide Numerator and Denominator by cos x:**
- Since -π/4 < x < 3π/4 and x ≠ π/2, cos x ≠ 0:
  (cos x - sin x) / (cos x + sin x) = [ 1 - (sin x / cos x) ] / [ 1 + (sin x / cos x) ]
  = (1 - tan x) / (1 + tan x).
**Step 2: Use Trigonometric Identity tan(A - B):**
- We know that tan(π/4) = 1.
- (1 - tan x) / (1 + 1 · tan x) = [ tan(π/4) - tan x ] / [ 1 + tan(π/4) · tan x ]
  = **tan(π/4 - x)**.
**Step 3: Check Principal Value Branch Constraint:**
- Given: -π/4 < x < 3π/4
- Multiply by -1: -3π/4 < -x < π/4
- Add π/4: π/4 - 3π/4 < π/4 - x < π/4 + π/4
  => **-π/2 < (π/4 - x) < π/2**.
- Since (π/4 - x) strictly lies inside the principal branch (-π/2, π/2) of tan⁻¹:
  tan⁻¹ [ tan(π/4 - x) ] = **π/4 - x**.
**Final Answer:**
- Simplest form = **π/4 - x**.
**CBSE Marking Rubric:**
- 1 Mark for dividing by cos x and converting to tan(π/4 - x).
- 1 Mark for rigorous branch verification -π/2 < π/4 - x < π/2.
- 1 Mark for final result π/4 - x.
INSIGHT: Always explicitly verify that the angle falls in (-π/2, π/2) to get the branch mark.`;
  }

  // CHAPTER 3: Matrices
  if (
    chapterLower.includes('matri') ||
    chapterLower === 'm3' ||
    chapterLower.includes('chapter 3: matrices') ||
    chapterLower.includes('chapter 3 - matrices')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (65/2/1)] If A and B are symmetric matrices of the same order, then (AB - BA) is always a:
(A) Skew-symmetric matrix
(B) Symmetric matrix
(C) Zero matrix
(D) Identity matrix
SOLUTION:
**Correct Answer:** (A) Skew-symmetric matrix
**Notebook Explanation:**
Given that A and B are symmetric matrices: Aᵀ = A and Bᵀ = B.
Let matrix C = AB - BA.
Taking transpose on both sides:
Cᵀ = (AB - BA)ᵀ = (AB)ᵀ - (BA)ᵀ.
Using reversal law of transpose: (AB)ᵀ = Bᵀ Aᵀ and (BA)ᵀ = Aᵀ Bᵀ:
Cᵀ = Bᵀ Aᵀ - Aᵀ Bᵀ.
Substitute Aᵀ = A and Bᵀ = B:
Cᵀ = BA - AB = - (AB - BA) = - C.
Since Cᵀ = -C, the matrix (AB - BA) is **Skew-symmetric**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).
INSIGHT: Note that (AB + BA) is always symmetric, while (AB - BA) is always skew-symmetric.

QUESTION: Q2. [Assertion-Reason, CBSE-Style Practice Question, 1 Mark]
Assertion (A): If A is any square matrix, then A + Aᵀ is symmetric and A - Aᵀ is skew-symmetric.
Reason (R): For any square matrix A, (A + Aᵀ)ᵀ = A + Aᵀ and (A - Aᵀ)ᵀ = - (A - Aᵀ).
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is true but (R) is false.
(D) (A) is false but (R) is true.
SOLUTION:
**Correct Answer:** (A)
**Notebook Explanation:**
Let P = A + Aᵀ. Pᵀ = (A + Aᵀ)ᵀ = Aᵀ + (Aᵀ)ᵀ = Aᵀ + A = A + Aᵀ = P. Hence, P is symmetric.
Let Q = A - Aᵀ. Qᵀ = (A - Aᵀ)ᵀ = Aᵀ - (Aᵀ)ᵀ = Aᵀ - A = - (A - Aᵀ) = - Q. Hence, Q is skew-symmetric.
Both A and R are true, and R is the direct mathematical proof of A.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).

QUESTION: Q3. [2 Marks, CBSE 2024 (65/1/3)] Find the values of x and y if:
2 [[x, 5], [7, y - 3]] + [[3, -4], [1, 2]] = [[7, 6], [15, 14]].
SOLUTION:
**Step 1: Perform Scalar Multiplication:**
2 [[x, 5], [7, y - 3]] = [[2x, 10], [14, 2y - 6]].
**Step 2: Matrix Addition on Left Hand Side:**
[[2x, 10], [14, 2y - 6]] + [[3, -4], [1, 2]] = [[2x + 3, 10 - 4], [14 + 1, 2y - 6 + 2]]
= [[2x + 3, 6], [15, 2y - 4]].
**Step 3: Equating Corresponding Elements:**
[[2x + 3, 6], [15, 2y - 4]] = [[7, 6], [15, 14]].
1. 2x + 3 = 7 => 2x = 4 => **x = 2**.
2. 2y - 4 = 14 => 2y = 18 => **y = 9**.
**Final Answer:**
- x = 2, y = 9.
**CBSE Marking Rubric:**
- 1 Mark for scalar multiplication and matrix addition.
- 1 Mark for equating elements and finding x = 2, y = 9.

QUESTION: Q4. [3 Marks, CBSE 2023 (Delhi)] Express the matrix A = [[3, 5], [1, -1]] as the sum of a symmetric and a skew-symmetric matrix.
SOLUTION:
**Given:**
A = [[3, 5], [1, -1]].
Transpose Aᵀ = [[3, 1], [5, -1]].
**Step 1: Find Symmetric Matrix P = (1/2)(A + Aᵀ):**
A + Aᵀ = [[3 + 3, 5 + 1], [1 + 5, -1 + (-1)]] = [[6, 6], [6, -2]].
P = (1/2) [[6, 6], [6, -2]] = **[[3, 3], [3, -1]]**.
Check Pᵀ: Pᵀ = [[3, 3], [3, -1]] = P. Hence, P is Symmetric.
**Step 2: Find Skew-Symmetric Matrix Q = (1/2)(A - Aᵀ):**
A - Aᵀ = [[3 - 3, 5 - 1], [1 - 5, -1 - (-1)]] = [[0, 4], [-4, 0]].
Q = (1/2) [[0, 4], [-4, 0]] = **[[0, 2], [-2, 0]]**.
Check Qᵀ: Qᵀ = [[0, -2], [2, 0]] = - Q. Hence, Q is Skew-Symmetric.
**Step 3: Verification (P + Q = A):**
P + Q = [[3, 3], [3, -1]] + [[0, 2], [-2, 0]] = [[3 + 0, 3 + 2], [3 - 2, -1 + 0]] = [[3, 5], [1, -1]] = A.
**Final Representation:**
A = [[3, 3], [3, -1]] + [[0, 2], [-2, 0]].
**CBSE Marking Rubric:**
- 1 Mark for calculating P and verifying Pᵀ = P.
- 1 Mark for calculating Q and verifying Qᵀ = -Q.
- 1 Mark for verifying P + Q = A.
INSIGHT: Diagonal elements of Q must be zeros; if not, check your arithmetic.`;
  }

  // CHAPTER 4: Determinants
  if (
    chapterLower.includes('determinant') ||
    chapterLower === 'm4' ||
    chapterLower.includes('chapter 4: determinants') ||
    chapterLower.includes('chapter 4 - determinants')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (65/1/1)] If A is a square matrix of order 3 such that |A| = 5, then the value of |adj A| is:
(A) 5
(B) 25
(C) 125
(D) 1/5
SOLUTION:
**Correct Answer:** (B) 25
**Notebook Explanation:**
For any square matrix A of order n:
|adj A| = |A|^(n - 1).
Here, order n = 3 and determinant |A| = 5.
|adj A| = 5^(3 - 1) = 5² = **25**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).
INSIGHT: If asked for |A · adj A|, use |A · adj A| = |A|^n = 5³ = 125.

QUESTION: Q2. [Assertion-Reason, CBSE 2023 (All India), 1 Mark]
Assertion (A): If A is an invertible matrix of order 3 and |A| = 4, then |A⁻¹| = 1/4.
Reason (R): For any invertible matrix A, |A⁻¹| = 1 / |A|.
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is true but (R) is false.
(D) (A) is false but (R) is true.
SOLUTION:
**Correct Answer:** (A)
**Notebook Explanation:**
By definition of matrix inverse, A · A⁻¹ = I.
Taking determinants of both sides: |A · A⁻¹| = |I|.
Using property |AB| = |A| |B|:
|A| · |A⁻¹| = 1 => |A⁻¹| = 1 / |A|. (Reason R is true).
Given |A| = 4: |A⁻¹| = 1/4. (Assertion A is true).
Reason R directly justifies Assertion A.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).

QUESTION: Q3. [5 Marks Core Matrix Inversion Board Problem, CBSE 2023 (Delhi)]
Solve the following system of linear equations using matrix method:
2x + 3y + 3z = 5
x - 2y + z = -4
3x - y - 2z = 3
SOLUTION:
**Step 1: Write in Matrix Form AX = B:**
[[2, 3, 3], [1, -2, 1], [3, -1, -2]] [[x], [y], [z]] = [[5], [-4], [3]].
Here:
A = [[2, 3, 3], [1, -2, 1], [3, -1, -2]], X = [[x], [y], [z]], B = [[5], [-4], [3]].

**Step 2: Calculate Determinant |A|:**
|A| = 2 [ (-2)(-2) - (1)(-1) ] - 3 [ (1)(-2) - (1)(3) ] + 3 [ (1)(-1) - (-2)(3) ]
|A| = 2 [ 4 + 1 ] - 3 [ -2 - 3 ] + 3 [ -1 + 6 ]
|A| = 2(5) - 3(-5) + 3(5)
|A| = 10 + 15 + 15 = **40**.
Since |A| = 40 ≠ 0, matrix A is non-singular and A⁻¹ exists. The system has a unique solution given by **X = A⁻¹ B**.

**Step 3: Calculate All 9 Cofactors of Matrix A (A_ij = (-1)^(i+j) M_ij):**
- A₁₁ = + [ (-2)(-2) - (1)(-1) ] = 4 + 1 = **5**
- A₁₂ = - [ (1)(-2) - (1)(3) ] = - [-2 - 3] = **5**
- A₁₃ = + [ (1)(-1) - (-2)(3) ] = -1 + 6 = **5**
- A₂₁ = - [ (3)(-2) - (3)(-1) ] = - [-6 + 3] = **3**
- A₂₂ = + [ (2)(-2) - (3)(3) ] = -4 - 9 = **-13**
- A₂₃ = - [ (2)(-1) - (3)(3) ] = - [-2 - 9] = **11**
- A₃₁ = + [ (3)(1) - (3)(-2) ] = 3 + 6 = **9**
- A₃₂ = - [ (2)(1) - (3)(1) ] = - [2 - 3] = **1**
- A₃₃ = + [ (2)(-2) - (3)(1) ] = -4 - 3 = **-7**.

**Step 4: Form the Adjoint Matrix (adj A = Transpose of Cofactor Matrix):**
adj A = [[A₁₁, A₂₁, A₃₁], [A₁₂, A₂₂, A₃₂], [A₁₃, A₂₃, A₃₃]]
**adj A = [[5, 3, 9], [5, -13, 1], [5, 11, -7]]**.

**Step 5: Compute X = A⁻¹ B = (1 / |A|) (adj A) B:**
[[x], [y], [z]] = (1 / 40) [[5, 3, 9], [5, -13, 1], [5, 11, -7]] [[5], [-4], [3]]
Row 1: 5(5) + 3(-4) + 9(3) = 25 - 12 + 27 = 40
Row 2: 5(5) + (-13)(-4) + 1(3) = 25 + 52 + 3 = 80
Row 3: 5(5) + 11(-4) + (-7)(3) = 25 - 44 - 21 = -40.
[[x], [y], [z]] = (1 / 40) [[40], [80], [-40]] = **[[1], [2], [-1]]**.

**Final Answer:**
- **x = 1, y = 2, z = -1**.
*(Verification: 2(1) + 3(2) + 3(-1) = 2 + 6 - 3 = 5. Verified!)*
**CBSE Marking Rubric:**
- 1 Mark for matrix form AX = B and |A| = 40.
- 2 Marks for calculating all 9 cofactors correctly.
- 1 Mark for adj A and formula X = (1/|A|) (adj A) B.
- 1 Mark for matrix multiplication and final answers x = 1, y = 2, z = -1.
INSIGHT: Always substitute x, y, z back into Equation 1 to confirm your answer before moving to the next question.`;
  }

  // CHAPTER 5: Continuity and Differentiability
  if (
    chapterLower.includes('continuity') ||
    chapterLower.includes('differentiab') ||
    chapterLower === 'm5' ||
    chapterLower.includes('chapter 5: continuity and differentiability') ||
    chapterLower.includes('chapter 5 - continuity and differentiability')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (65/2/2)] The function f(x) = |x - 1| is:
(A) Continuous and differentiable at x = 1
(B) Continuous but not differentiable at x = 1
(C) Neither continuous nor differentiable at x = 1
(D) Differentiable but not continuous at x = 1
SOLUTION:
**Correct Answer:** (B) Continuous but not differentiable at x = 1
**Notebook Explanation:**
1. Continuity at x = 1:
   lim_(x->1⁻) |x - 1| = lim_(h->0) |(1 - h) - 1| = 0.
   lim_(x->1⁺) |x - 1| = lim_(h->0) |(1 + h) - 1| = 0.
   f(1) = |1 - 1| = 0.
   Since LHL = RHL = f(1) = 0, f(x) is continuous at x = 1.
2. Differentiability at x = 1:
   LHD = lim_(h->0) [ f(1 - h) - f(1) ] / (-h) = lim_(h->0) [ |-h| - 0 ] / (-h) = h / (-h) = -1.
   RHD = lim_(h->0) [ f(1 + h) - f(1) ] / h = lim_(h->0) [ |h| - 0 ] / h = h / h = +1.
   Since LHD (-1) ≠ RHD (+1), the function has a sharp corner (kink) and is NOT differentiable at x = 1.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).
INSIGHT: All modulus functions |x - a| are continuous everywhere on R but fail to be differentiable at x = a.

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] Find the value of k for which the function:
f(x) = { (k cos x) / (π - 2x), if x ≠ π/2 ; 3, if x = π/2 }
is continuous at x = π/2.
SOLUTION:
**Step 1: Calculate Limit as x -> π/2:**
- Let x = π/2 + h. As x -> π/2, h -> 0.
- f(π/2 + h) = [ k cos(π/2 + h) ] / [ π - 2(π/2 + h) ]
  = [ k (-sin h) ] / [ π - π - 2h ]
  = [ - k sin h ] / [ - 2h ]
  = (k / 2) · [ (sin h) / h ].
- lim_(x->π/2) f(x) = lim_(h->0) (k / 2) · (sin h / h) = (k / 2) × 1 = **k / 2**.
**Step 2: Equate Limit to f(π/2):**
- Given: f(π/2) = 3.
- Since f is continuous at x = π/2:
  lim_(x->π/2) f(x) = f(π/2)
  => k / 2 = 3
  => **k = 6**.
**Final Answer:**
- k = 6.
**CBSE Marking Rubric:**
- 1 Mark for substitution x = π/2 + h and evaluating limit as k/2.
- 1 Mark for equating to 3 and solving k = 6.

QUESTION: Q3. [3 Marks, CBSE 2024 (65/3/1)] If x = a(cos θ + θ sin θ) and y = a(sin θ - θ cos θ), find d²y/dx².
SOLUTION:
**Step 1: Differentiate x with respect to θ:**
dx/dθ = a [ - sin θ + (1 · sin θ + θ cos θ) ]
dx/dθ = a [ - sin θ + sin θ + θ cos θ ] = **a θ cos θ**.
**Step 2: Differentiate y with respect to θ:**
dy/dθ = a [ cos θ - (1 · cos θ + θ (-sin θ)) ]
dy/dθ = a [ cos θ - cos θ + θ sin θ ] = **a θ sin θ**.
**Step 3: Find First Derivative dy/dx:**
dy/dx = (dy/dθ) / (dx/dθ) = (a θ sin θ) / (a θ cos θ) = sin θ / cos θ = **tan θ**.
**Step 4: Find Second Derivative d²y/dx² (Crucial Step):**
d²y/dx² = d/dx [ tan θ ] = d/dθ [ tan θ ] · (dθ/dx)
d²y/dx² = sec²θ · [ 1 / (dx/dθ) ].
Substitute dx/dθ = a θ cos θ:
d²y/dx² = sec²θ · [ 1 / (a θ cos θ) ] = sec²θ · (sec θ / (a θ)) = **sec³θ / (a θ)**.
**Final Answer:**
- d²y/dx² = **(sec³θ) / (a θ)**.
**CBSE Marking Rubric:**
- 1 Mark for dx/dθ = a θ cos θ and dy/dθ = a θ sin θ.
- 1 Mark for dy/dx = tan θ.
- 1 Mark for d²y/dx² = sec²θ · (dθ/dx) and final answer sec³θ / (a θ).
INSIGHT: Forgetting the factor (dθ/dx) when differentiating tan θ with respect to x is the most frequent deduction in this problem.

QUESTION: Q4. [5 Marks, CBSE 2023 (All India)] If y = (sin⁻¹x)², prove that:
(1 - x²) (d²y/dx²) - x (dy/dx) - 2 = 0.
SOLUTION:
**Given:**
y = (sin⁻¹x)².
**Step 1: First Differentiation:**
Differentiating with respect to x:
dy/dx = 2 (sin⁻¹x) · [ d/dx(sin⁻¹x) ]
dy/dx = [ 2 sin⁻¹x ] / √(1 - x²).

**Step 2: Clear the Denominator Before Second Differentiation:**
√(1 - x²) · (dy/dx) = 2 sin⁻¹x.
Squaring both sides to eliminate square roots:
(1 - x²) · (dy/dx)² = 4 (sin⁻¹x)².
Since y = (sin⁻¹x)²:
**(1 - x²) · (dy/dx)² = 4 y**.

**Step 3: Differentiate Again with Respect to x:**
Differentiating both sides using product rule and chain rule:
d/dx [ (1 - x²) · (dy/dx)² ] = d/dx [ 4 y ]
(1 - x²) · [ 2(dy/dx) · (d²y/dx²) ] + (dy/dx)² · (-2x) = 4 · (dy/dx).

**Step 4: Divide Throughout by Common Factor 2(dy/dx):**
Since dy/dx ≠ 0 in general:
(1 - x²) · (d²y/dx²) - x · (dy/dx) = 2.
Transposing 2 to the left-hand side:
**(1 - x²) (d²y/dx²) - x (dy/dx) - 2 = 0**.
*Hence Proved.*
**CBSE Marking Rubric:**
- 1 Mark for dy/dx = 2 sin⁻¹x / √(1 - x²).
- 1.5 Marks for cross-multiplying and squaring to get (1 - x²)(dy/dx)² = 4y.
- 1.5 Marks for second differentiation using product rule.
- 1 Mark for dividing by 2(dy/dx) and obtaining exact final relation.
INSIGHT: Squaring both sides after the first derivative completely bypasses cumbersome quotient rule calculations.`;
  }

  // CHAPTER 6: Application of Derivatives
  if (
    chapterLower.includes('application of derivative') ||
    chapterLower.includes('aod') ||
    chapterLower === 'm6' ||
    chapterLower.includes('chapter 6: application of derivatives') ||
    chapterLower.includes('chapter 6 - application of derivatives')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (65/1/2)] The function f(x) = x³ - 3x² + 3x - 100 is:
(A) Strictly increasing on R
(B) Strictly decreasing on R
(C) Increasing on (-∞, 1) and decreasing on (1, ∞)
(D) Neither increasing nor decreasing
SOLUTION:
**Correct Answer:** (A) Strictly increasing on R
**Notebook Explanation:**
f(x) = x³ - 3x² + 3x - 100.
Differentiating with respect to x:
f'(x) = 3x² - 6x + 3 = 3(x² - 2x + 1) = 3(x - 1)².
Since (x - 1)² > 0 for all x ≠ 1 and equals 0 only at the isolated point x = 1, f'(x) ≥ 0 everywhere on R with no interval on which f'(x) is identically zero.
Hence, the function f(x) is **Strictly Increasing on R**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).

QUESTION: Q2. [Assertion-Reason, CBSE 2023 (Delhi), 1 Mark]
Assertion (A): The maximum value of the function f(x) = sin x + cos x on [0, π/2] is √2.
Reason (R): At critical point x = π/4, f''(π/4) = -√2 < 0.
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is true but (R) is false.
(D) (A) is false but (R) is true.
SOLUTION:
**Correct Answer:** (A)
**Notebook Explanation:**
f(x) = sin x + cos x.
f'(x) = cos x - sin x = 0 => tan x = 1 => x = π/4 ∈ [0, π/2].
f''(x) = - sin x - cos x.
At x = π/4: f''(π/4) = - 1/√2 - 1/√2 = - 2/√2 = -√2 < 0 (confirms local maximum).
Maximum value = f(π/4) = sin(π/4) + cos(π/4) = 1/√2 + 1/√2 = √2.
Both A and R are true, and R provides the second derivative verification for A.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).

QUESTION: Q3. [3 Marks, CBSE 2024 (65/2/3)] Find the intervals in which the function f(x) = 2x³ - 9x² + 12x + 15 is:
(a) Strictly increasing
(b) Strictly decreasing.
SOLUTION:
**Step 1: Find f'(x):**
f(x) = 2x³ - 9x² + 12x + 15.
f'(x) = 6x² - 18x + 12 = 6(x² - 3x + 2) = 6(x - 1)(x - 2).
**Step 2: Find Critical Points:**
Set f'(x) = 0 => 6(x - 1)(x - 2) = 0 => **x = 1, x = 2**.
These points divide the real line (-∞, ∞) into three disjoint open intervals:
(-∞, 1), (1, 2), and (2, ∞).
**Step 3: Test Sign of f'(x) in Each Interval:**
1. **Interval (-∞, 1):** Take test point x = 0:
   f'(0) = 6(0 - 1)(0 - 2) = 6(-1)(-2) = +12 > 0.
   => f'(x) > 0 => **Strictly Increasing**.
2. **Interval (1, 2):** Take test point x = 1.5:
   f'(1.5) = 6(1.5 - 1)(1.5 - 2) = 6(0.5)(-0.5) = -1.5 < 0.
   => f'(x) < 0 => **Strictly Decreasing**.
3. **Interval (2, ∞):** Take test point x = 3:
   f'(3) = 6(3 - 1)(3 - 2) = 6(2)(1) = +12 > 0.
   => f'(x) > 0 => **Strictly Increasing**.
**Final Answer:**
(a) Strictly increasing on **(-∞, 1) ∪ (2, ∞)**.
(b) Strictly decreasing on **(1, 2)**.
**CBSE Marking Rubric:**
- 1 Mark for factorization f'(x) = 6(x - 1)(x - 2) and finding critical points 1, 2.
- 1 Mark for testing intervals.
- 1 Mark for correct intervals of increase and decrease.
INSIGHT: For strictly increasing/decreasing, write open intervals.

QUESTION: Q4. [5 Marks Core Optimization Problem, CBSE 2023 (Delhi)]
Show that of all the rectangles inscribed in a given fixed circle of radius R, the square has the maximum area.
SOLUTION:
**Given:**
- A fixed circle of radius R.
- Let a rectangle ABCD be inscribed in the circle.
- Let length of the rectangle be x and breadth be y.
- The diagonal of the inscribed rectangle passes through the center of the circle and is equal to the diameter 2R.

**Step 1: Constraint Equation:**
By Pythagoras theorem in right triangle ABC:
x² + y² = (2R)² = 4R²
=> **y = √(4R² - x²)**.

**Step 2: Objective Function (Area of Rectangle):**
Area A = x · y = x √(4R² - x²).
To simplify differentiation, maximize Z = A² = x² (4R² - x²) = 4R² x² - x⁴.
(Since A > 0, maximizing A² also maximizes A).

**Step 3: First Derivative Test (Find Critical Points):**
dZ/dx = d/dx [ 4R² x² - x⁴ ] = 8R² x - 4x³ = 4x (2R² - x²).
Set dZ/dx = 0:
4x (2R² - x²) = 0.
Since x > 0 (length cannot be zero):
2R² - x² = 0 => x² = 2R² => **x = √2 R**.

**Step 4: Find Corresponding Breadth y:**
y = √(4R² - x²) = √(4R² - 2R²) = √(2R²) = **√2 R**.
Since x = y = √2 R, the rectangle is a **Square**!

**Step 5: Second Derivative Test (Confirm Maximum):**
d²Z/dx² = d/dx [ 8R² x - 4x³ ] = 8R² - 12x².
At x = √2 R (x² = 2R²):
d²Z/dx² = 8R² - 12(2R²) = 8R² - 24R² = **- 16R² < 0**.
Since the second derivative is strictly negative, Z (and therefore Area A) is **Maximum** at x = √2 R.
Maximum Area = x · y = (√2 R)(√2 R) = **2R² sq. units**.

**Conclusion:**
Hence, of all the rectangles inscribed in a given fixed circle, the **Square** has the maximum area.
*Hence Proved.*
**CBSE Marking Rubric:**
- 1 Mark for diagram and constraint x² + y² = 4R².
- 1 Mark for Area function A² = 4R²x² - x⁴.
- 1 Mark for setting first derivative to 0 and finding x = √2 R.
- 1 Mark for calculating y = √2 R and concluding x = y (square).
- 1 Mark for showing second derivative d²Z/dx² = -16R² < 0.
INSIGHT: Working with A² instead of A avoids messy square root differentiation and saves valuable exam time.`;
  }

  return null;
}
