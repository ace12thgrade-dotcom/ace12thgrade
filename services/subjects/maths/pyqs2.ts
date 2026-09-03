// services/subjects/maths/pyqs2.ts
// Chapters 7 to 13 + Full Revision Question Bank & Solved Board PYQs
// Authentic recent CBSE Board questions with complete notebook-style solutions.

export function getMathsPart2PYQs(chapterLower: string): string | null {
  // FULL REVISION / MASTER PYQ BANK
  if (
    chapterLower.includes('revision') ||
    chapterLower.includes('full') ||
    chapterLower.includes('master') ||
    chapterLower.includes('summary') ||
    chapterLower === 'm_all'
  ) {
    return `QUESTION: Q1. [5 Marks Core Board Problem, CBSE 2024 Composite Master Question]
(a) Find the shortest distance between the skew lines:
r = (î + 2ĵ + 3k̂) + λ(î - 3ĵ + 2k̂)
r = (4î + 5ĵ + 6k̂) + μ(2î + 3ĵ + k̂).
(b) Evaluate the definite integral:
I = ∫₀^(π/2) [ (sin⁴x) / (sin⁴x + cos⁴x) ] dx.
SOLUTION:
**(a) Shortest Distance Between Skew Lines:**
**Step 1: Identify Vectors:**
Line 1: r = a₁ + λ b₁
- a₁ = î + 2ĵ + 3k̂
- b₁ = î - 3ĵ + 2k̂
Line 2: r = a₂ + μ b₂
- a₂ = 4î + 5ĵ + 6k̂
- b₂ = 2î + 3ĵ + k̂.

**Step 2: Calculate (a₂ - a₁):**
a₂ - a₁ = (4 - 1)î + (5 - 2)ĵ + (6 - 3)k̂ = **3î + 3ĵ + 3k̂**.

**Step 3: Calculate Cross Product (b₁ × b₂):**
b₁ × b₂ = det [[î, ĵ, k̂], [1, -3, 2], [2, 3, 1]]
= î [ (-3)(1) - (2)(3) ] - ĵ [ (1)(1) - (2)(2) ] + k̂ [ (1)(3) - (-3)(2) ]
= î [ -3 - 6 ] - ĵ [ 1 - 4 ] + k̂ [ 3 + 6 ]
= **- 9î + 3ĵ + 9k̂**.

**Step 4: Calculate Magnitude |b₁ × b₂|:**
|b₁ × b₂| = √[ (-9)² + (3)² + (9)² ] = √[ 81 + 9 + 81 ] = √171 = √(9 × 19) = **3√19**.

**Step 5: Calculate Dot Product (a₂ - a₁) · (b₁ × b₂):**
(a₂ - a₁) · (b₁ × b₂) = (3)(-9) + (3)(3) + (3)(9) = -27 + 9 + 27 = **9**.

**Step 6: Calculate Shortest Distance d:**
Formula: d = | (a₂ - a₁) · (b₁ × b₂) | / |b₁ × b₂|
d = | 9 | / (3√19) = 3 / √19 = **(3√19) / 19 units**.
**Final Answer:**
- Shortest distance d = **3 / √19 units** (or 3√19/19 units).

**(b) Definite Integral using King's Property:**
**Step 1:** Let I = ∫₀^(π/2) [ (sin⁴x) / (sin⁴x + cos⁴x) ] dx  --- (Equation 1).
**Step 2: Apply Property ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a - x) dx:**
Replace x with (π/2 - x):
Since sin(π/2 - x) = cos x and cos(π/2 - x) = sin x:
I = ∫₀^(π/2) [ (cos⁴x) / (cos⁴x + sin⁴x) ] dx  --- (Equation 2).
**Step 3: Add Equations (1) and (2):**
2I = ∫₀^(π/2) [ (sin⁴x + cos⁴x) / (sin⁴x + cos⁴x) ] dx
2I = ∫₀^(π/2) 1 dx
2I = [ x ]₀^(π/2) = π/2 - 0 = π/2
**I = π / 4**.
**Final Answer:**
- Integral I = **π/4**.
**CBSE Marking Rubric:**
- 1 Mark for (a₂ - a₁) and cross product (b₁ × b₂).
- 1 Mark for shortest distance formula and substitution.
- 1 Mark for final distance 3/√19 units.
- 1 Mark for King's property substitution in integral.
- 1 Mark for adding equations and solving I = π/4.
INSIGHT: For any integral of type ∫₀^(π/2) (sinⁿx)/(sinⁿx + cosⁿx) dx, the answer is always π/4.`;
  }

  // CHAPTER 7: Integrals
  if (
    chapterLower.includes('integral') ||
    chapterLower.includes('integration') ||
    chapterLower === 'm7' ||
    chapterLower.includes('chapter 7: integrals') ||
    chapterLower.includes('chapter 7 - integrals')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (65/1/1)] The value of ∫ eˣ (tan x + sec²x) dx is:
(A) eˣ sec²x + C
(B) eˣ tan x + C
(C) eˣ sec x + C
(D) eˣ + tan x + C
SOLUTION:
**Correct Answer:** (B) eˣ tan x + C
**Notebook Explanation:**
We use the standard exponential identity:
∫ eˣ [ f(x) + f'(x) ] dx = eˣ · f(x) + C.
Let f(x) = tan x. Then f'(x) = d/dx(tan x) = sec²x.
The integrand is exactly in the form eˣ [ f(x) + f'(x) ].
Therefore, ∫ eˣ (tan x + sec²x) dx = **eˣ tan x + C**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).
INSIGHT: Always identify f(x) and check whether its exact derivative is present.

QUESTION: Q2. [Assertion-Reason, CBSE 2023 (Delhi), 1 Mark]
Assertion (A): The value of ∫₋₁¹ (x³ + x cos x + tan⁵x) dx is equal to 0.
Reason (R): For any continuous odd function f(x) on [-a, a], ∫₋ₐᵃ f(x) dx = 0.
(A) Both (A) and (R) are true and (R) is the correct explanation of (A).
(B) Both (A) and (R) are true but (R) is not the correct explanation of (A).
(C) (A) is true but (R) is false.
(D) (A) is false but (R) is true.
SOLUTION:
**Correct Answer:** (A)
**Notebook Explanation:**
Let f(x) = x³ + x cos x + tan⁵x.
Replace x with -x:
f(-x) = (-x)³ + (-x) cos(-x) + tan⁵(-x)
= - x³ - x cos x - tan⁵x = - (x³ + x cos x + tan⁵x) = - f(x).
Since f(-x) = -f(x), the integrand is an **Odd function**.
By the definite integral property P7, for any odd function, ∫₋ₐᵃ f(x) dx = 0.
Thus, both A and R are true, and R correctly explains A.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).

QUESTION: Q3. [3 Marks, CBSE 2024 (65/2/2)] Evaluate:
∫ [ x / ((x - 1)(x² + 1)) ] dx.
SOLUTION:
**Step 1: Partial Fraction Decomposition:**
- Set: x / [ (x - 1)(x² + 1) ] = A / (x - 1) + (B x + C) / (x² + 1).
- Multiply by denominator: x = A (x² + 1) + (B x + C)(x - 1).
- Put x = 1: 1 = A (1 + 1) + 0 => 2A = 1 => **A = 1/2**.
- Expand: x = A x² + A + B x² - B x + C x - C = (A + B)x² + (C - B)x + (A - C).
- Equating coefficient of x²: A + B = 0 => B = -A = **- 1/2**.
- Equating constant term: A - C = 0 => C = A = **1/2**.
**Step 2: Rewrite and Integrate:**
∫ [ x / ((x - 1)(x² + 1)) ] dx = (1/2) ∫ dx/(x - 1) + ∫ [ (-x/2 + 1/2) / (x² + 1) ] dx
= (1/2) ∫ dx/(x - 1) - (1/4) ∫ (2x / (x² + 1)) dx + (1/2) ∫ dx/(x² + 1).
**Step 3: Evaluate Each Elementary Integral:**
= (1/2) ln|x - 1| - (1/4) ln(x² + 1) + (1/2) tan⁻¹x + C.
**Final Answer:**
- **(1/2) ln|x - 1| - (1/4) ln(x² + 1) + (1/2) tan⁻¹x + C**.
**CBSE Marking Rubric:**
- 1.5 Marks for finding partial fraction coefficients A = 1/2, B = -1/2, C = 1/2.
- 1.5 Marks for correct integration with tan⁻¹x and ln terms.
INSIGHT: For (x² + 1) in the denominator, write (Bx + C), split into 2x/(x²+1) and 1/(x²+1).

QUESTION: Q4. [5 Marks Core Definite Integral Problem, CBSE 2023 (Delhi)]
Evaluate: I = ∫₀^π [ (x sin x) / (1 + cos²x) ] dx.
SOLUTION:
**Step 1: Set Up Equation (1):**
I = ∫₀^π [ (x sin x) / (1 + cos²x) ] dx  --- (Equation 1).

**Step 2: Apply King's Property ∫₀ᵃ f(x) dx = ∫₀ᵃ f(a - x) dx:**
Replace x with (π - x):
Since sin(π - x) = sin x and cos(π - x) = -cos x => cos²(π - x) = (-cos x)² = cos²x:
I = ∫₀^π [ (π - x) sin x ] / [ 1 + cos²x ] dx  --- (Equation 2).

**Step 3: Add Equations (1) and (2) to Eliminate x:**
2I = ∫₀^π [ (x + π - x) sin x ] / [ 1 + cos²x ] dx
2I = π ∫₀^π [ sin x / (1 + cos²x) ] dx
=> **I = (π / 2) ∫₀^π [ sin x / (1 + cos²x) ] dx**.

**Step 4: Substitution Method:**
Put **cos x = t**.
Differentiating: - sin x dx = dt => **sin x dx = - dt**.
- When x = 0: t = cos 0 = 1.
- When x = π: t = cos π = -1.
I = (π / 2) ∫₁⁻¹ [ - dt / (1 + t²) ]
Using property P1: - ∫₁⁻¹ dt = ∫₋₁¹ dt:
I = (π / 2) ∫₋₁¹ [ dt / (1 + t²) ].
Since 1/(1 + t²) is an even function:
I = (π / 2) × 2 ∫₀¹ [ dt / (1 + t²) ] = π [ tan⁻¹t ]₀¹.
I = π [ tan⁻¹(1) - tan⁻¹(0) ] = π [ π/4 - 0 ] = **π² / 4**.

**Final Answer:**
- **I = π² / 4**.
**CBSE Marking Rubric:**
- 1 Mark for applying King's property P4.
- 1 Mark for adding equations to eliminate x and obtaining I = (π/2) ∫ sin x / (1 + cos²x) dx.
- 1.5 Marks for substitution t = cos x with changing limits from 1 to -1.
- 1.5 Marks for evaluating [tan⁻¹t] and obtaining final result π²/4.
INSIGHT: Eliminating the 'x' in the numerator by adding I + I is the standard strategy for all x·f(sin x) integrals on [0, π].`;
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
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (65/2/1)] The area of the region bounded by the curve y = cos x between x = 0 and x = π/2 is:
(A) 2 sq. units
(B) 1 sq. unit
(C) 1/2 sq. unit
(D) π/2 sq. units
SOLUTION:
**Correct Answer:** (B) 1 sq. unit
**Notebook Explanation:**
On the interval [0, π/2], cos x ≥ 0.
Area = ∫₀^(π/2) cos x dx = [ sin x ]₀^(π/2) = sin(π/2) - sin 0 = 1 - 0 = **1 sq. unit**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).

QUESTION: Q2. [3 Marks, CBSE 2024 (65/1/2)] Find the area bounded by the parabola y² = 4x and its latus rectum.
SOLUTION:
**Step 1: Identify Parabola & Latus Rectum:**
- Parabola: y² = 4x => 4a = 4 => a = 1.
- Focus is at (1, 0).
- Equation of latus rectum (vertical line passing through focus): **x = 1**.
- Points of intersection: When x = 1, y² = 4(1) = 4 => y = ±2.
  Vertices of latus rectum are L(1, 2) and L'(1, -2).
**Step 2: Set Up Definite Integral Using Symmetry:**
- The parabola is symmetric about the x-axis.
- Total Area = 2 × [ Area in the first quadrant from x = 0 to x = 1 ]:
  Area = 2 ∫₀¹ y dx.
- In first quadrant, y = + 2√x.
- Area = 2 ∫₀¹ 2√x dx = 4 ∫₀¹ x^(1/2) dx.
**Step 3: Evaluate Integral:**
- Area = 4 [ (x^(3/2)) / (3/2) ]₀¹ = 4 × (2/3) [ 1^(3/2) - 0 ]
  = **8/3 sq. units**.
**Final Answer:**
- Area = **8/3 sq. units**.
**CBSE Marking Rubric:**
- 1 Mark for labeled sketch and finding limits x = 0 to x = 1.
- 1 Mark for setting up Area = 2 ∫₀¹ 2√x dx.
- 1 Mark for integration and final answer 8/3 sq. units.
INSIGHT: For any standard parabola y² = 4ax, the area bounded by its latus rectum is (8/3)a². Here a = 1, so (8/3)(1)² = 8/3 sq. units.

QUESTION: Q3. [5 Marks Core Board Problem, CBSE 2023 (Delhi)]
Find the area of the region bounded by the ellipse x² / 16 + y² / 9 = 1 using integration.
SOLUTION:
**Step 1: Understand Geometric Equation & Symmetry:**
- Equation of ellipse: x² / 4² + y² / 3² = 1.
- Semi-major axis a = 4, semi-minor axis b = 3.
- The ellipse is symmetric about both the x-axis and y-axis.
- Therefore:
  **Total Area of Ellipse = 4 × [ Area of region in the First Quadrant ]**.

**Step 2: Express y in terms of x for the First Quadrant:**
y² / 9 = 1 - x² / 16 = (16 - x²) / 16
y² = (9 / 16) (16 - x²)
=> **y = (3 / 4) √(16 - x²)** (taking positive square root for first quadrant).

**Step 3: Set Up the Definite Integral:**
Limits of x in first quadrant: from x = 0 (origin) to x = 4 (major vertex).
Total Area = 4 ∫₀⁴ y dx
= 4 ∫₀⁴ [ (3 / 4) √(16 - x²) ] dx
= **3 ∫₀⁴ √(4² - x²) dx**.

**Step 4: Use Standard Integration Formula:**
Formula: ∫ √(a² - x²) dx = (x / 2) √(a² - x²) + (a² / 2) sin⁻¹(x / a).
Here a = 4 (so a² = 16):
Total Area = 3 [ (x / 2) √(16 - x²) + (16 / 2) sin⁻¹(x / 4) ]₀⁴
= 3 [ (x / 2) √(16 - x²) + 8 sin⁻¹(x / 4) ]₀⁴.

**Step 5: Substitute Upper and Lower Limits:**
- Upper Limit (x = 4):
  (4 / 2) √(16 - 16) + 8 sin⁻¹(4 / 4) = 0 + 8 sin⁻¹(1) = 8 × (π / 2) = **4π**.
- Lower Limit (x = 0):
  (0 / 2) √(16 - 0) + 8 sin⁻¹(0) = 0 + 0 = **0**.
- Total Area = 3 [ 4π - 0 ] = **12π sq. units**.

**Final Answer:**
- Total Area = **12π sq. units**.
*(Verification: Standard formula for ellipse area is π a b = π (4)(3) = 12π sq. units. Verified!)*
**CBSE Marking Rubric:**
- 1 Mark for rough sketch of ellipse with labeled axes and vertices.
- 1 Mark for expressing y = (3/4)√(16 - x²) and symmetry factor 4.
- 1.5 Marks for applying standard integral formula.
- 1.5 Marks for substituting limits and final answer 12π sq. units.
INSIGHT: Forgetting the factor of 4 or omitting 'sq. units' leads to avoidable mark loss.`;
  }

  // CHAPTER 9: Differential Equations
  if (
    chapterLower.includes('differential equation') ||
    chapterLower === 'm9' ||
    chapterLower.includes('chapter 9: differential equations') ||
    chapterLower.includes('chapter 9 - differential equations')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (65/3/1)] The order and degree of the differential equation [ 1 + (dy/dx)² ]^(3/2) = d²y/dx² are respectively:
(A) 2, 3
(B) 2, 2
(C) 1, 3
(D) 2, not defined
SOLUTION:
**Correct Answer:** (B) 2, 2
**Notebook Explanation:**
To determine degree, the differential equation must be made free from fractional exponents / radicals:
[ 1 + (dy/dx)² ]^(3/2) = d²y/dx².
Squaring both sides:
[ 1 + (dy/dx)² ]³ = (d²y/dx²)².
1. Highest order derivative present is d²y/dx² => **Order = 2**.
2. The highest power of d²y/dx² after clearing radicals is 2 => **Degree = 2**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).
INSIGHT: Always clear radicals before determining degree.

QUESTION: Q2. [3 Marks, CBSE 2024 (65/1/2)] Find the general solution of the differential equation:
x (dy/dx) + 2y = x²  (for x ≠ 0).
SOLUTION:
**Step 1: Write in Standard Linear Form dy/dx + P(x) y = Q(x):**
Divide the entire equation by x:
dy/dx + (2 / x) y = x.
Here: P(x) = 2 / x and Q(x) = x.
**Step 2: Calculate Integrating Factor (IF):**
IF = e^(∫ P(x) dx) = e^(∫ (2/x) dx) = e^(2 ln x) = e^(ln(x²)) = **x²**.
**Step 3: Write General Solution Equation:**
y · (IF) = ∫ [ Q(x) · (IF) ] dx + C
y · (x²) = ∫ [ x · x² ] dx + C
x² y = ∫ x³ dx + C
x² y = (x⁴ / 4) + C
**y = (x² / 4) + C x⁻²**.
**Final Answer:**
- General solution: **y = (x² / 4) + C / x²** (or 4 x² y = x⁴ + C').
**CBSE Marking Rubric:**
- 1 Mark for dividing by x and identifying P = 2/x, Q = x.
- 1 Mark for calculating IF = x².
- 1 Mark for integrating and writing final solution.
INSIGHT: Note that e^(2 ln x) = x², not 2x.

QUESTION: Q3. [5 Marks Core Homogeneous DE Problem, CBSE 2023 (Delhi)]
Solve the following differential equation:
(x² + y²) dx - 2x y dy = 0.
Given that y = 1 when x = 1 (find particular solution).
SOLUTION:
**Step 1: Identify as Homogeneous Differential Equation:**
2x y dy = (x² + y²) dx
=> **dy/dx = (x² + y²) / (2xy)**.
Both numerator (x² + y²) and denominator (2xy) are homogeneous functions of degree 2.

**Step 2: Substitution Method (Put y = v x):**
y = v x => **dy/dx = v + x (dv/dx)**.
Substitute into equation:
v + x (dv/dx) = [ x² + (vx)² ] / [ 2x (vx) ]
v + x (dv/dx) = [ x² (1 + v²) ] / [ 2 v x² ] = (1 + v²) / (2v).
x (dv/dx) = (1 + v²) / (2v) - v = (1 + v² - 2v²) / (2v) = **(1 - v²) / (2v)**.

**Step 3: Separate Variables:**
[ 2v / (1 - v²) ] dv = dx / x.
Multiply by -1:
[ - 2v / (1 - v²) ] dv = - dx / x.

**Step 4: Integrate Both Sides:**
∫ [ - 2v / (1 - v²) ] dv = - ∫ (dx / x)
ln|1 - v²| = - ln|x| + ln C = ln|C / x|.
Taking antilog on both sides:
**|1 - v²| = C / x**.

**Step 5: Substitute back v = y / x:**
1 - (y² / x²) = C / x
(x² - y²) / x² = C / x
=> **x² - y² = C x**  (General Solution).

**Step 6: Find Particular Solution using Initial Condition (y = 1 when x = 1):**
Substitute x = 1 and y = 1:
(1)² - (1)² = C(1)
0 = C => **C = 0**.
Substitute C = 0 back into general solution:
x² - y² = 0 => **y² = x²** (or y = x, since x=1, y=1).

**Final Answer:**
- Particular solution: **x² - y² = 0** (or y = x).
**CBSE Marking Rubric:**
- 1 Mark for homogeneous identification and substitution y = vx.
- 1.5 Marks for separation of variables and integrating to get ln|1 - v²| = -ln|x| + ln C.
- 1 Mark for general solution x² - y² = Cx.
- 1.5 Marks for substituting x = 1, y = 1 to find C = 0 and writing particular solution.
INSIGHT: For homogeneous equations, always check if numerator and denominator have matching degrees before substituting y = vx.`;
  }

  // CHAPTER 10: Vector Algebra
  if (
    chapterLower.includes('vector') ||
    chapterLower === 'm10' ||
    chapterLower.includes('chapter 10: vector algebra') ||
    chapterLower.includes('chapter 10 - vector algebra')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (65/2/3)] If |a| = 2, |b| = 3, and a · b = 3, then the projection of vector a on vector b is:
(A) 1
(B) 3/2
(C) 1/2
(D) 2
SOLUTION:
**Correct Answer:** (A) 1
**Notebook Explanation:**
Projection of vector a on vector b is given by:
Projection = (a · b) / |b|.
Given: a · b = 3 and |b| = 3.
Projection = 3 / 3 = **1**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).
INSIGHT: Projection of a on b divides by |b|; projection of b on a divides by |a|.

QUESTION: Q2. [2 Marks, CBSE 2023 (All India)] Find the angle between two vectors a and b with magnitudes 1 and 2 respectively, having |a × b| = √3.
SOLUTION:
**Step 1: Formula for Cross Product Magnitude:**
|a × b| = |a| |b| sin θ.
**Step 2: Substitution & Calculation:**
√3 = (1) (2) sin θ
=> 2 sin θ = √3
=> **sin θ = √3 / 2**.
Since angle between vectors θ ∈ [0, π]:
θ = π/3 (60°) or θ = 2π/3 (120°).
**Final Answer:**
- Angle θ = **π/3** or **2π/3**.
**CBSE Marking Rubric:**
- 1 Mark for |a × b| = |a||b| sin θ formula.
- 1 Mark for finding θ = π/3 or 2π/3.

QUESTION: Q3. [3 Marks, CBSE 2024 (65/1/1)] If a, b, c are three vectors such that |a| = 3, |b| = 4, |c| = 5, and each vector is perpendicular to the sum of the other two, find |a + b + c|.
SOLUTION:
**Step 1: Mathematical Translation of Given Conditions:**
- a is perpendicular to (b + c) => **a · (b + c) = 0** => a · b + a · c = 0  --- (1)
- b is perpendicular to (c + a) => **b · (c + a) = 0** => b · c + b · a = 0  --- (2)
- c is perpendicular to (a + b) => **c · (a + b) = 0** => c · a + c · b = 0  --- (3)
**Step 2: Add Equations (1), (2), and (3):**
(a · b + a · c) + (b · c + b · a) + (c · a + c · b) = 0
2(a · b + b · c + c · a) = 0
=> **a · b + b · c + c · a = 0**.
**Step 3: Evaluate |a + b + c|²:**
|a + b + c|² = (a + b + c) · (a + b + c)
= |a|² + |b|² + |c|² + 2(a · b + b · c + c · a).
Substitute given magnitudes |a|=3, |b|=4, |c|=5 and 2(a·b + b·c + c·a) = 0:
|a + b + c|² = 3² + 4² + 5² + 0
= 9 + 16 + 25 = 50.
**Step 4: Take Square Root:**
|a + b + c| = √50 = √(25 × 2) = **5√2**.
**Final Answer:**
- |a + b + c| = **5√2**.
**CBSE Marking Rubric:**
- 1 Mark for translating perpendicularity to a·(b+c)=0 and adding to get 2(a·b + b·c + c·a) = 0.
- 1 Mark for identity |a + b + c|² = |a|² + |b|² + |c|² + 2(a·b + b·c + c·a).
- 1 Mark for substitution and answer 5√2.
INSIGHT: This question appears frequently in CBSE board exams; notice the zero cross-term.`;
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
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (65/1/2)] The direction cosines of a line making equal angles with the coordinate axes are:
(A) (1, 1, 1)
(B) (1/√3, 1/√3, 1/√3) or (-1/√3, -1/√3, -1/√3)
(C) (1/3, 1/3, 1/3)
(D) (1/√2, 1/√2, 1/√2)
SOLUTION:
**Correct Answer:** (B) (±1/√3, ±1/√3, ±1/√3)
**Notebook Explanation:**
Let the line make angle α with all three coordinate axes (α = β = γ).
Then direction cosines are l = cos α, m = cos α, n = cos α.
Fundamental identity: l² + m² + n² = 1
cos²α + cos²α + cos²α = 1
3 cos²α = 1 => cos α = ± 1 / √3.
Hence, direction cosines are **(±1/√3, ±1/√3, ±1/√3)**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (B).

QUESTION: Q2. [5 Marks Core Skew Lines Problem, CBSE 2023 (Delhi)]
Find the shortest distance between the lines whose vector equations are:
r = (î + 2ĵ - 4k̂) + λ(2î + 3ĵ + 6k̂)
r = (3î + 3ĵ - 5k̂) + μ(2î + 3ĵ + 6k̂).
SOLUTION:
**Step 1: Check whether Lines are Skew or Parallel!**
- Line 1: r = a₁ + λ b₁ => b₁ = 2î + 3ĵ + 6k̂.
- Line 2: r = a₂ + μ b₂ => b₂ = 2î + 3ĵ + 6k̂.
- **CRUCIAL OBSERVATION:** b₁ = b₂ = b! The direction vectors are IDENTICAL.
- Therefore, the two lines are **PARALLEL LINES**, not skew lines!
- We MUST use the formula for distance between parallel lines:
  **d = | (a₂ - a₁) × b | / |b|**.

**Step 2: Calculate (a₂ - a₁):**
a₁ = î + 2ĵ - 4k̂
a₂ = 3î + 3ĵ - 5k̂
a₂ - a₁ = (3 - 1)î + (3 - 2)ĵ + (-5 - (-4))k̂ = **2î + ĵ - k̂**.

**Step 3: Calculate Cross Product (a₂ - a₁) × b:**
(a₂ - a₁) × b = det [[î, ĵ, k̂], [2, 1, -1], [2, 3, 6]]
= î [ (1)(6) - (-1)(3) ] - ĵ [ (2)(6) - (-1)(2) ] + k̂ [ (2)(3) - (1)(2) ]
= î [ 6 + 3 ] - ĵ [ 12 + 2 ] + k̂ [ 6 - 2 ]
= **9î - 14ĵ + 4k̂**.

**Step 4: Calculate Magnitudes:**
- |(a₂ - a₁) × b| = √[ 9² + (-14)² + 4² ] = √[ 81 + 196 + 16 ] = **√293**.
- |b| = √[ 2² + 3² + 6² ] = √[ 4 + 9 + 36 ] = √49 = **7**.

**Step 5: Calculate Shortest Distance d:**
d = |(a₂ - a₁) × b| / |b| = **√293 / 7 units**.
**Final Answer:**
- Shortest distance d = **√293 / 7 units**.
**CBSE Marking Rubric:**
- 1 Mark for recognizing lines are parallel (b₁ = b₂).
- 1 Mark for (a₂ - a₁) = 2î + ĵ - k̂.
- 1.5 Marks for cross product (a₂ - a₁) × b = 9î - 14ĵ + 4k̂.
- 1.5 Marks for formula d = |(a₂ - a₁) × b| / |b| and final answer √293 / 7 units.
INSIGHT: If a student mistakenly uses the skew formula here, b₁ × b₂ = 0, leading to a division by zero disaster! Always inspect the direction vectors first.`;
  }

  // CHAPTER 12: Linear Programming
  if (
    chapterLower.includes('linear programming') ||
    chapterLower.includes('lpp') ||
    chapterLower === 'm12' ||
    chapterLower.includes('chapter 12: linear programming') ||
    chapterLower.includes('chapter 12 - linear programming')
  ) {
    return `QUESTION: Q1. [5 Marks Core LPP Problem, CBSE 2024 (65/1/1)]
Solve the following Linear Programming Problem graphically:
Maximize: Z = 4x + y
Subject to the constraints:
x + y ≤ 50
3x + y ≤ 90
x ≥ 0, y ≥ 0.
SOLUTION:
**Step 1: Convert Inequalities to Linear Boundary Equations:**
1. Line L₁: x + y = 50.
   - When x = 0, y = 50 => Point A(0, 50).
   - When y = 0, x = 50 => Point B(50, 0).
2. Line L₂: 3x + y = 90.
   - When x = 0, y = 90 => Point C(0, 90).
   - When y = 0, x = 30 => Point D(30, 0).
3. Non-negative constraints: x ≥ 0, y ≥ 0 restrict the feasible region to the **First Quadrant**.

**Step 2: Determine Half-Planes (Test with Origin (0, 0)):**
- For x + y ≤ 50: 0 + 0 ≤ 50 (True). Region includes origin.
- For 3x + y ≤ 90: 3(0) + 0 ≤ 90 (True). Region includes origin.

**Step 3: Find Point of Intersection of Lines L₁ and L₂:**
Subtract Line 1 from Line 2:
(3x + y) - (x + y) = 90 - 50
2x = 40 => **x = 20**.
Substitute x = 20 into Line 1:
20 + y = 50 => **y = 30**.
Point of intersection is **E(20, 30)**.

**Step 4: Identify Feasible Region & Corner Points:**
The feasible region O D E A is a **Bounded Convex Polygon** with vertices:
1. **O(0, 0)**
2. **D(30, 0)**
3. **E(20, 30)**
4. **A(0, 50)**.

**Step 5: Evaluate Objective Function Z = 4x + y at All Corner Points:**
| Corner Point (x, y) | Value of Z = 4x + y | Nature |
|---|---|---|
| O(0, 0) | Z = 4(0) + 0 = 0 | Minimum |
| **D(30, 0)** | Z = 4(30) + 0 = **120** | **Maximum** |
| E(20, 30) | Z = 4(20) + 30 = 80 + 30 = 110 | Intermediate |
| A(0, 50) | Z = 4(0) + 50 = 50 | Intermediate |

**Conclusion:**
Since the feasible region is bounded, the maximum value of Z is **120**, which occurs at the corner point **(30, 0)**.
**Final Answer:**
- **Maximum Z = 120 at x = 30, y = 0**.
**CBSE Marking Rubric:**
- 1.5 Marks for accurate graph showing boundary lines and shaded feasible region.
- 1.5 Marks for calculating intersection point (20, 30) and listing all 4 corner points.
- 1 Mark for corner point evaluation table.
- 1 Mark for final conclusion Maximum Z = 120 at (30, 0).
INSIGHT: Always write the corner point table clearly with columns for coordinates and Z values.`;
  }

  // CHAPTER 13: Probability
  if (
    chapterLower.includes('probability') ||
    chapterLower.includes('bayes') ||
    chapterLower === 'm13' ||
    chapterLower.includes('chapter 13: probability') ||
    chapterLower.includes('chapter 13 - probability')
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (65/2/2)] If P(A) = 0.4, P(B) = 0.8, and P(B | A) = 0.6, then P(A ∪ B) is:
(A) 0.96
(B) 0.24
(C) 0.56
(D) 0.48
SOLUTION:
**Correct Answer:** (A) 0.96
**Notebook Explanation:**
1. Multiplication theorem: P(A ∩ B) = P(A) · P(B | A) = (0.4) × (0.6) = **0.24**.
2. Addition theorem: P(A ∪ B) = P(A) + P(B) - P(A ∩ B)
   P(A ∪ B) = 0.4 + 0.8 - 0.24 = 1.2 - 0.24 = **0.96**.
**CBSE Marking Rubric:**
- 1 Mark for selecting option (A).

QUESTION: Q2. [5 Marks Core Bayes' Theorem Problem, CBSE 2023 (Delhi)]
An insurance company insured 2000 scooter drivers, 4000 car drivers, and 6000 truck drivers. The probability of an accident involving a scooter, a car, and a truck driver is 0.01, 0.03, and 0.15 respectively. One of the insured persons meets with an accident. What is the probability that he is a scooter driver?
SOLUTION:
**Step 1: Define Events Clearly in Words:**
Let:
- E₁ = Event that the insured person is a scooter driver.
- E₂ = Event that the insured person is a car driver.
- E₃ = Event that the insured person is a truck driver.
- A = Event that the insured person meets with an accident.

**Step 2: Calculate Prior Probabilities P(E_i):**
Total number of insured drivers = 2000 + 4000 + 6000 = 12,000.
- P(E₁) = 2000 / 12000 = 2/12 = **1/6**.
- P(E₂) = 4000 / 12000 = 4/12 = **1/3** (or 2/6).
- P(E₃) = 6000 / 12000 = 6/12 = **1/2** (or 3/6).
*(Check: 1/6 + 2/6 + 3/6 = 6/6 = 1. Valid partition!)*

**Step 3: State Given Conditional Probabilities P(A | E_i):**
- P(A | E₁) = Probability of accident given scooter driver = 0.01 = **1/100**.
- P(A | E₂) = Probability of accident given car driver = 0.03 = **3/100**.
- P(A | E₃) = Probability of accident given truck driver = 0.15 = **15/100**.

**Step 4: State Bayes' Theorem Formula:**
We want to find P(E₁ | A) (Probability that the driver who had an accident was driving a scooter):
**P(E₁ | A) = [ P(E₁) · P(A | E₁) ] / [ P(E₁) P(A | E₁) + P(E₂) P(A | E₂) + P(E₃) P(A | E₃) ]**.

**Step 5: Substitution and Step-by-Step Calculation:**
Numerator:
P(E₁) · P(A | E₁) = (1/6) × (1/100) = **1 / 600**.

Denominator (Theorem of Total Probability P(A)):
P(A) = (1/6)(1/100) + (2/6)(3/100) + (3/6)(15/100)
= [ 1(1) + 2(3) + 3(15) ] / 600
= [ 1 + 6 + 45 ] / 600
= **52 / 600**.

Calculate P(E₁ | A):
P(E₁ | A) = (1 / 600) / (52 / 600) = 1 / 52.

**Final Answer:**
- The probability that the person who met with an accident is a scooter driver = **1 / 52** (approx. 0.0192).
**CBSE Marking Rubric:**
- 1 Mark for defining events E₁, E₂, E₃, and A in words.
- 1 Mark for calculating prior probabilities P(E₁), P(E₂), P(E₃).
- 1 Mark for Bayes' Theorem formula statement.
- 1 Mark for denominator calculation (52/600).
- 1 Mark for final probability 1/52.
INSIGHT: Keeping the common denominator 600 simplifies the fraction division instantly.`;
  }

  return null;
}
