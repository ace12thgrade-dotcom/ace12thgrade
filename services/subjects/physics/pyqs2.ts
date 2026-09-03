// services/subjects/physics/pyqs2.ts
// Chapters 8 to 14 Solved Board PYQs & Comprehensive Question Bank

export function getPhysicsPart2PYQs(chapterLower: string): string | null {
  // CHAPTER 8: Electromagnetic Waves
  if (
    chapterLower.includes('electromagnetic waves') ||
    chapterLower.includes('em waves') ||
    chapterLower.includes('displacement current') ||
    chapterLower === 'p8'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (55/1/1)] Which of the following electromagnetic waves has the highest frequency?
(A) Microwaves
(B) Ultraviolet rays
(C) X-rays
(D) Gamma rays
SOLUTION:
**Correct Answer:** (D) Gamma rays
**Notebook Explanation:**
In the electromagnetic spectrum, Gamma rays have the shortest wavelength (λ < 10⁻¹² m) and consequently the highest frequency (ν > 10²⁰ Hz) and highest photon energy (E = hν).
**CBSE Marking Rubric:**
- 1 Mark for option (D).

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] A parallel plate capacitor with circular plates of radius 10 cm is being charged by a current of 0.2 A. (i) What is the conduction current in the connecting wires? (ii) What is the displacement current across the capacitor plates?
SOLUTION:
**Given:**
- Charging current I_c = 0.2 A
- Radius of plates R = 10 cm
**To Find:** (i) Conduction current I_c, (ii) Displacement current I_d
**Formula & Principle:**
- By Maxwell's continuity principle, the conduction current in the lead wires is exactly equal to the displacement current across the dielectric/air gap: **I_c = I_d**.
**Notebook Evaluation:**
(i) Conduction current in the connecting wires: **I_c = 0.2 A**.
(ii) Displacement current across the plates: **I_d = I_c = 0.2 A**.
**Final Answer:**
Both the conduction current in the wires and the displacement current between the plates are **0.2 A**.
**CBSE Marking Rubric:**
- 1 Mark for stating continuity law I_c = I_d.
- 1 Mark for correct values of I_c and I_d with unit Ampere.

QUESTION: Q3. [3 Marks, CBSE 2023 (Foreign)] Name the electromagnetic waves used in: (i) radar systems for aircraft navigation, (ii) killing germs in water purifiers, and (iii) remote controls of television sets. State their approximate wavelength ranges.
SOLUTION:
**Step 1: Radar Systems:**
- Wave type: **Microwaves**.
- Approximate Wavelength Range: **0.1 m to 1 mm (10⁻¹ m to 10⁻³ m)**.
**Step 2: Killing Germs in Water Purifiers:**
- Wave type: **Ultraviolet (UV) Rays**.
- Approximate Wavelength Range: **400 nm to 1 nm (4 × 10⁻⁷ m to 10⁻⁹ m)**.
**Step 3: Remote Controls for TV:**
- Wave type: **Infrared (IR) Waves**.
- Approximate Wavelength Range: **1 mm to 700 nm (10⁻³ m to 7 × 10⁻⁷ m)**.
**CBSE Marking Rubric:**
- 1 Mark for Microwaves with wavelength range.
- 1 Mark for UV rays with wavelength range.
- 1 Mark for Infrared with wavelength range.`;
  }

  // CHAPTER 9: Ray Optics & Optical Instruments
  if (
    chapterLower.includes('ray optics') ||
    chapterLower.includes('lens') ||
    chapterLower.includes('telescope') ||
    chapterLower.includes('microscope') ||
    chapterLower.includes('prism') ||
    chapterLower === 'p9'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (55/2/2)] A convex lens of focal length 20 cm in air is immersed in water of refractive index 4/3. If the refractive index of the glass is 3/2, the new focal length of the lens in water will be:
(A) 20 cm
(B) 40 cm
(C) 80 cm
(D) 10 cm
SOLUTION:
**Correct Answer:** (C) 80 cm
**Notebook Explanation:**
By Lens Maker's Formula:
1 / f_air = (μ_g - 1) · [ 1/R₁ - 1/R₂ ] = (3/2 - 1) [ 1/R₁ - 1/R₂ ] = 1/2 [ 1/R₁ - 1/R₂ ].
In water:
1 / f_water = (μ_g / μ_w - 1) · [ 1/R₁ - 1/R₂ ] = [ (3/2)/(4/3) - 1 ] [ 1/R₁ - 1/R₂ ] = (9/8 - 1) [ 1/R₁ - 1/R₂ ] = 1/8 [ 1/R₁ - 1/R₂ ].
Dividing the two equations:
f_water / f_air = (1/2) / (1/8) = 4 => f_water = 4 × f_air = 4 × 20 cm = 80 cm.
**CBSE Marking Rubric:**
- 1 Mark for option (C) with Lens Maker ratio.

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] A ray of light passes through an equilateral glass prism such that the angle of incidence is equal to the angle of emergence, and each of these angles is equal to 3/4 of the angle of the prism. Calculate the angle of deviation.
SOLUTION:
**Given:**
- Equilateral prism => Prism angle A = 60°
- Angle of incidence i = 3/4 A = (3/4) × 60° = 45°
- Angle of emergence e = i = 45°
**To Find:** Angle of deviation (δ)
**Formula:**
**A + δ = i + e => δ = i + e - A**
**Substitution & Calculation:**
- δ = 45° + 45° - 60° = 90° - 60° = **30°**.
**Final Answer:**
The angle of deviation is **30°**.
**CBSE Marking Rubric:**
- 1 Mark for relation A + δ = i + e.
- 1 Mark for calculating δ = 30°.

QUESTION: Q3. [3 Marks Derivation, CBSE 2023 (All India)] Derive the Lens Maker's formula for a thin double convex lens of radii of curvature R₁ and R₂ and refractive index μ placed in air.
SOLUTION:
**Step 1: Setup & Refraction at First Surface (Radius R₁):**
- Let a point object O be placed in air (μ₁ = 1) on the principal axis of a convex lens of glass (index μ₂ = μ).
- Refraction occurs at first spherical surface of radius R₁ forming intermediate real image at distance v₁:
  μ₂ / v₁ - μ₁ / u = (μ₂ - μ₁) / R₁
  => **μ / v₁ - 1 / u = (μ - 1) / R₁**  --- (Eq. 1)
**Step 2: Refraction at Second Surface (Radius R₂):**
- The image at distance v₁ acts as a virtual object for the second surface forming the final real image at distance v in air (index 1):
  1 / v - μ / v₁ = (1 - μ) / R₂ = **- (μ - 1) / R₂**  --- (Eq. 2)
**Step 3: Adding Equations (1) and (2):**
- (μ / v₁ - 1 / u) + (1 / v - μ / v₁) = (μ - 1) [ 1 / R₁ - 1 / R₂ ]
- **1 / v - 1 / u = (μ - 1) [ 1 / R₁ - 1 / R₂ ]**  --- (Eq. 3)
**Step 4: Focal Length Condition:**
- By definition, when object is at infinity (u = ∞), image forms at the principal focus (v = f):
  1 / f - 1 / ∞ = (μ - 1) [ 1 / R₁ - 1 / R₂ ]
  => **1 / f = (μ - 1) [ 1 / R₁ - 1 / R₂ ]**.
**CBSE Marking Rubric:**
- 1 Mark for first surface refraction equation.
- 1 Mark for second surface virtual object equation.
- 1 Mark for adding and concluding Lens Maker's formula.

QUESTION: Q4. [5 Marks Structured Problem, CBSE 2024 (55/1/1)]
(a) Draw a labeled ray diagram showing the image formation by an astronomical refracting telescope in normal adjustment. Define its magnifying power and write its mathematical formula in terms of focal lengths.
(b) An astronomical telescope has an objective lens of focal length 140 cm and an eyepiece of focal length 5.0 cm. (i) What is the magnifying power of the telescope for viewing distant objects in normal adjustment? (ii) What is the separation between the objective and the eyepiece? (iii) If this telescope is used to view a 100 m tall tower 3 km away, what is the height of the tower image formed by the objective lens?
SOLUTION:
**(a) Astronomical Telescope in Normal Adjustment:**
1. **Ray Diagram Description:**
   - Parallel rays from distant object enter objective lens at angle α and form a real, inverted, diminished image A'B' at its focal plane (f_o).
   - Eyepiece is positioned such that A'B' falls exactly at its principal focus (f_e).
   - Eyepiece produces final image at infinity (parallel emerging beam viewed by relaxed eye at visual angle β).
2. **Magnifying Power (m):**
   - Magnifying power is defined as the ratio of angle β subtended at the eye by the final image to the angle α subtended at the unaided eye by the object: m = β / α.
   - For small angles: tanβ ≈ β = A'B' / f_e, and tanα ≈ α = A'B' / f_o.
   - **m = - f_o / f_e** (Negative sign indicates final image is inverted).
   - Tube length: **L = f_o + f_e**.

**(b) Numerical Notebook Solution:**
- **Given:**
  - Focal length of objective f_o = 140 cm = 1.40 m
  - Focal length of eyepiece f_e = 5.0 cm = 0.05 m
  - Tower height h_o = 100 m
  - Object distance u = 3 km = 3000 m
**(i) Magnifying Power (Normal Adjustment):**
- Formula: m = - f_o / f_e
- Substitution: m = - 140 cm / 5.0 cm = **- 28**.
**(ii) Tube Length (Separation L):**
- Formula: L = f_o + f_e
- Substitution: L = 140 cm + 5.0 cm = **145 cm = 1.45 m**.
**(iii) Height of Image Formed by Objective (h_i):**
- Angle subtended by tower at objective:
  α = h_o / u = 100 m / 3000 m = (1/30) radians.
- Since image forms in focal plane of objective (distance = f_o = 140 cm):
  α = h_i / f_o => h_i = α · f_o
  h_i = (1/30) × 140 cm = 14/3 cm ≈ **4.67 cm**.
**Final Answer:**
(i) Magnifying power is **- 28** (magnified 28 times, inverted).
(ii) Separation between lenses is **145 cm**.
(iii) Height of the tower image formed by objective is **4.67 cm**.
**CBSE Marking Rubric:**
- 2 Marks for labeled ray diagram and definition of magnifying power.
- 1 Mark for m = -28.
- 1 Mark for L = 145 cm.
- 1 Mark for image height h_i = 4.67 cm.`;
  }

  // CHAPTER 10: Wave Optics
  if (
    chapterLower.includes('wave optics') ||
    chapterLower.includes('interference') ||
    chapterLower.includes('diffraction') ||
    chapterLower.includes('ydse') ||
    chapterLower === 'p10'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (55/3/1)] In Young's double slit experiment, if the separation between the slits is halved and the distance between slits and screen is doubled, the fringe width will:
(A) Remain unchanged
(B) Be halved
(C) Be doubled
(D) Become four times
SOLUTION:
**Correct Answer:** (D) Become four times
**Notebook Explanation:**
Fringe width in YDSE is given by:
β = (λ · D) / d.
When d' = d / 2 and D' = 2 D:
β' = [ λ · (2 D) ] / (d / 2) = 4 · [ (λ D) / d ] = 4 β.
**CBSE Marking Rubric:**
- 1 Mark for option (D).

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] In a single slit diffraction experiment, a slit of width 'a' is illuminated by red light of wavelength 650 nm. For what value of slit width 'a' will the first diffraction minimum fall at an angle of 30°?
SOLUTION:
**Given:**
- Wavelength λ = 650 nm = 650 × 10⁻⁹ m
- Diffraction angle θ = 30°
- Order of minimum n = 1
**To Find:** Slit width a
**Formula:**
For first diffraction minimum:
**a · sinθ = λ => a = λ / sinθ**
**Substitution & Calculation:**
- a = (650 × 10⁻⁹ m) / (sin 30°)
- a = (650 × 10⁻⁹ m) / 0.5 = 1300 × 10⁻⁹ m = **1.3 × 10⁻⁶ m = 1.3 μm**.
**Final Answer:**
The required slit width is **1.3 × 10⁻⁶ m** (or **1.3 μm**).
**CBSE Marking Rubric:**
- 1 Mark for stating formula a sinθ = λ.
- 1 Mark for substitution and calculation of a = 1.3 μm.

QUESTION: Q3. [3 Marks Derivation, CBSE 2023 (Foreign)] In Young's double slit experiment, derive the condition for constructive and destructive interference, and show that the fringe width β is given by β = λD / d.
SOLUTION:
**Step 1: Setup & Path Difference:**
- Two coherent slits S₁ and S₂ separated by distance d. Screen placed at distance D (D >> d).
- Let P be a point on screen at distance y from central point O.
- (S₂P)² - (S₁P)² = [ D² + (y + d/2)² ] - [ D² + (y - d/2)² ] = 2yd.
- (S₂P - S₁P) · (S₂P + S₁P) = 2yd. Since D >> d, S₂P + S₁P ≈ 2D:
- Path difference: **Δx = S₂P - S₁P = (y · d) / D**.
**Step 2: Conditions for Maxima & Minima:**
- **Bright Fringes (Constructive):** Δx = n λ => (y_n · d) / D = n λ => **y_n = (n λ D) / d** (n = 0, 1, 2...).
- **Dark Fringes (Destructive):** Δx = (2n - 1) λ / 2 => **y_n' = (2n - 1) (λ D) / (2d)** (n = 1, 2...).
**Step 3: Fringe Width (β):**
- Distance between consecutive bright fringes:
  β = y_(n+1) - y_n = [ (n+1) λ D / d ] - [ n λ D / d ]
  => **β = (λ · D) / d**.
**CBSE Marking Rubric:**
- 1 Mark for path difference Δx = yd/D.
- 1 Mark for positions of bright and dark fringes.
- 1 Mark for fringe width expression β = λD/d.

QUESTION: Q4. [5 Marks Structured Problem, CBSE 2024 (55/1/2)]
(a) State Huygens' principle. Using this principle, prove Snell's law of refraction of a plane wave at a plane interface between two media.
(b) Two coherent sources of light of intensity ratio 81 : 1 interfere. Find the ratio of: (i) the amplitudes of the two interfering waves, and (ii) the maximum intensity to minimum intensity in the resulting interference pattern.
SOLUTION:
**(a) Huygens' Principle & Deduction of Snell's Law:**
1. **Huygens' Principle Postulates:**
   - Every point on a given wavefront acts as a fresh source of secondary spherical wavelets spreading in all directions with the speed of light in that medium.
   - The forward envelope touching these wavelets tangentially gives the new wavefront at any later instant.
2. **Proof of Snell's Law:**
   - Consider a plane wavefront AB incident on plane refracting surface XY separating Medium 1 (speed v₁) and Medium 2 (speed v₂).
   - Let i be the angle of incidence. The time taken by wavefront edge B to reach point C on boundary is τ = BC / v₁ => BC = v₁ τ.
   - In the same time interval τ, the secondary wavelet from point A spreads into Medium 2 over distance AD = v₂ τ.
   - Tangent CD represents refracted wavefront making angle of refraction r.
   - In right triangle ABC: sin i = BC / AC = (v₁ τ) / AC.
   - In right triangle ADC: sin r = AD / AC = (v₂ τ) / AC.
   - Dividing: sin i / sin r = (v₁ τ) / (v₂ τ) = v₁ / v₂.
   - Since refractive index μ = c / v: v₁ / v₂ = μ₂ / μ₁.
   - **sin i / sin r = μ₂ / μ₁** (Snell's Law of Refraction).

**(b) Numerical Notebook Solution:**
- **Given:** Intensity ratio I₁ / I₂ = 81 / 1
**(i) Ratio of Amplitudes (a₁ / a₂):**
- Formula: Intensity I ∝ (Amplitude a)² => a₁ / a₂ = √(I₁ / I₂)
- Substitution: a₁ / a₂ = √(81 / 1) = **9 : 1**.
**(ii) Ratio of Maximum to Minimum Intensity (I_max / I_min):**
- Formula:
  **I_max / I_min = [ a₁ + a₂ ]² / [ a₁ - a₂ ]²**
- Substitution:
  I_max / I_min = [ 9 + 1 ]² / [ 9 - 1 ]² = (10)² / (8)² = 100 / 64 = **25 / 16 = 25 : 16**.
**Final Answer:**
(i) Amplitude ratio is **9 : 1**.
(ii) Intensity ratio I_max : I_min is **25 : 16**.
**CBSE Marking Rubric:**
- 2 Marks for Huygens' postulates and deduction of Snell's law.
- 1.5 Marks for amplitude ratio 9 : 1.
- 1.5 Marks for intensity ratio 25 : 16.`;
  }

  // CHAPTER 11: Dual Nature of Radiation & Matter
  if (
    chapterLower.includes('dual nature') ||
    chapterLower.includes('photoelectric') ||
    chapterLower.includes('de broglie') ||
    chapterLower === 'p11'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (55/1/1)] The slope of the graph between stopping potential (V₀) and frequency of incident radiation (ν) for a photoelectric material is:
(A) h
(B) h / e
(C) e / h
(D) Φ₀ / e
SOLUTION:
**Correct Answer:** (B) h / e
**Notebook Explanation:**
By Einstein's photoelectric equation:
e · V₀ = h · ν - Φ₀ => V₀ = (h / e) · ν - (Φ₀ / e).
Comparing with straight line equation y = m x + c, the slope is m = h / e (universal constant for all metals).
**CBSE Marking Rubric:**
- 1 Mark for option (B).

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] An electron is accelerated through a potential difference of 100 V. What is its de-Broglie wavelength?
SOLUTION:
**Given:**
- Accelerating potential V = 100 Volts
**To Find:** de-Broglie wavelength λ
**Formula:**
For an electron:
**λ = (1.227 / √V) nm = (12.27 / √V) Å**
**Substitution & Calculation:**
- λ = 1.227 / √100 nm = 1.227 / 10 nm = **0.1227 nm** (or **1.227 Å** = 1.227 × 10⁻¹⁰ m).
**Final Answer:**
The de-Broglie wavelength of the electron is **0.1227 nm** (or **1.227 Å**).
**CBSE Marking Rubric:**
- 1 Mark for formula λ = 1.227 / √V nm.
- 1 Mark for correct evaluation 0.1227 nm.

QUESTION: Q3. [3 Marks, CBSE 2023 (All India)] The work function of Cesium is 2.14 eV. Find: (i) the threshold frequency for Cesium, and (ii) the maximum kinetic energy of emitted photoelectrons in eV when incident light of wavelength 400 nm falls on the surface. (h = 6.63 × 10⁻³⁴ J·s).
SOLUTION:
**Given:**
- Work function Φ₀ = 2.14 eV = 2.14 × (1.6 × 10⁻¹⁹ J) = 3.424 × 10⁻¹⁹ J
- Incident wavelength λ = 400 nm = 400 × 10⁻⁹ m = 4.0 × 10⁻⁷ m
**(i) Threshold Frequency (ν₀):**
- Formula: ν₀ = Φ₀ / h
- Substitution:
  ν₀ = (3.424 × 10⁻¹⁹ J) / (6.63 × 10⁻³⁴ J·s) = **5.16 × 10¹⁴ Hz**.
**(ii) Energy of Incident Photon (E):**
- E = h c / λ = (6.63 × 10⁻³⁴ × 3.0 × 10⁸) / (4.0 × 10⁻⁷) = 4.9725 × 10⁻¹⁹ J.
- Convert to eV: E = (4.9725 × 10⁻¹⁹) / (1.6 × 10⁻¹⁹) = **3.11 eV**.
**(iii) Maximum Kinetic Energy (K_max):**
- Formula: K_max = E - Φ₀
- Substitution:
  K_max = 3.11 eV - 2.14 eV = **0.97 eV** (or 1.55 × 10⁻¹⁹ J).
**Final Answer:**
(i) Threshold frequency is **5.16 × 10¹⁴ Hz**.
(ii) Maximum kinetic energy is **0.97 eV**.
**CBSE Marking Rubric:**
- 1 Mark for threshold frequency ν₀ = 5.16 × 10¹⁴ Hz.
- 1 Mark for photon energy E = 3.11 eV.
- 1 Mark for K_max = 0.97 eV.`;
  }

  // CHAPTER 12: Atoms
  if (
    chapterLower.includes('atom') ||
    chapterLower.includes('bohr') ||
    chapterLower.includes('rutherford') ||
    chapterLower.includes('spectral') ||
    chapterLower === 'p12'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (55/1/1)] The ground state energy of hydrogen atom is -13.6 eV. What is the kinetic energy and potential energy of the electron in the second excited state (n = 3)?
(A) K = 1.51 eV, U = -3.02 eV
(B) K = -1.51 eV, U = 1.51 eV
(C) K = 3.4 eV, U = -6.8 eV
(D) K = 1.51 eV, U = 3.02 eV
SOLUTION:
**Correct Answer:** (A) K = 1.51 eV, U = -3.02 eV
**Notebook Explanation:**
For hydrogen atom, energy in n-th state is E_n = -13.6 / n² eV.
For second excited state, n = 3 => E₃ = -13.6 / 3² = -1.51 eV.
- Kinetic energy: K = - E = - (-1.51 eV) = **+ 1.51 eV**.
- Potential energy: U = 2 E = 2 × (-1.51 eV) = **- 3.02 eV**.
**CBSE Marking Rubric:**
- 1 Mark for option (A).

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] Calculate the shortest wavelength of light emitted in the Paschen series of hydrogen spectrum. (Take Rydberg constant R_H = 1.097 × 10⁷ m⁻¹).
SOLUTION:
**Given:**
- Paschen series => n₁ = 3
- Shortest wavelength (series limit) occurs when electron jumps from n₂ = ∞.
**To Find:** Shortest wavelength λ_min
**Formula:**
**1 / λ_min = R_H · [ 1 / n₁² - 1 / n₂² ] = R_H · [ 1 / 3² - 1 / ∞ ] = R_H / 9**
=> **λ_min = 9 / R_H**
**Substitution & Calculation:**
- λ_min = 9 / (1.097 × 10⁷ m⁻¹) = 8.204 × 10⁻⁷ m = **820.4 nm** (in Infrared region).
**Final Answer:**
The shortest wavelength in the Paschen series is **820.4 nm**.
**CBSE Marking Rubric:**
- 1 Mark for formula with n₁ = 3 and n₂ = ∞.
- 1 Mark for calculating λ = 820.4 nm.

QUESTION: Q3. [3 Marks Derivation, CBSE 2023 (Foreign)] Using Bohr's postulates of the hydrogen atom, derive the expression for the radius of the n-th stationary orbit of the electron.
SOLUTION:
**Step 1: Bohr's Postulates:**
1. Centripetal force is provided by electrostatic attraction:
   (m v_n²) / r_n = (1 / 4πε₀) · (e² / r_n²) => **m v_n² r_n = e² / (4πε₀)**  --- (Eq. 1)
2. Bohr's angular momentum quantization condition:
   m v_n r_n = n · (h / 2π) => **v_n = (n h) / (2π m r_n)**  --- (Eq. 2)
**Step 2: Substitution & Radius Deduction:**
- Substitute v_n into Eq. 1:
  m [ (n h) / (2π m r_n) ]² · r_n = e² / (4πε₀)
  m [ (n² h²) / (4π² m² r_n²) ] · r_n = e² / (4πε₀)
  (n² h²) / (4π² m r_n) = e² / (4πε₀).
- Solving for r_n:
  **r_n = (ε₀ n² h²) / (π m e²)**.
- For ground state n = 1 of Hydrogen:
  r₁ = a₀ = (8.854 × 10⁻¹² × 1² × (6.63 × 10⁻³⁴)²) / (3.1416 × 9.1 × 10⁻³¹ × (1.6 × 10⁻¹⁹)²) = **0.529 Å = 0.0529 nm**.
**CBSE Marking Rubric:**
- 1 Mark for writing both Bohr postulates.
- 1 Mark for algebraic elimination of v_n.
- 1 Mark for final expression r_n = ε₀n²h²/(πme²).`;
  }

  // CHAPTER 13: Nuclei
  if (
    chapterLower.includes('nuclei') ||
    chapterLower.includes('nuclear') ||
    chapterLower.includes('binding energy') ||
    chapterLower.includes('fission') ||
    chapterLower === 'p13'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (55/2/2)] The ratio of the nuclear radius of ₂₇Al to that of ₁₂₅Te is:
(A) 27 / 125
(B) 3 / 5
(C) 5 / 3
(D) 9 / 25
SOLUTION:
**Correct Answer:** (B) 3 / 5
**Notebook Explanation:**
Nuclear radius is given by R = R₀ · A^(1/3).
R(Al) / R(Te) = (27)^(1/3) / (125)^(1/3) = 3 / 5.
**CBSE Marking Rubric:**
- 1 Mark for option (B).

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] Prove that the nuclear matter density is independent of the mass number A.
SOLUTION:
**Notebook Proof:**
- Consider a nucleus of mass number A and radius R.
- Volume of spherical nucleus: V = 4/3 π R³ = 4/3 π (R₀ A^(1/3))³ = 4/3 π R₀³ A.
- Total mass of nucleus ≈ A · m_n (where m_n is average nucleon mass ≈ 1.66 × 10⁻²⁷ kg).
- Nuclear density:
  ρ = Mass / Volume = (A · m_n) / (4/3 π R₀³ A) = (3 m_n) / (4π R₀³).
- Notice that the mass number A cancels out completely!
- Since m_n and R₀ are universal constants, nuclear density is constant for all nuclei (ρ ≈ 2.3 × 10¹⁷ kg/m³).
**CBSE Marking Rubric:**
- 1 Mark for volume V = 4/3 π R₀³ A and mass = A · m_n.
- 1 Mark for showing cancellation of A to conclude ρ is constant.

QUESTION: Q3. [3 Marks, CBSE 2023 (All India)] Calculate the binding energy per nucleon of ₂₆⁵⁶Fe nucleus. Given: Mass of proton m_p = 1.007825 u, mass of neutron m_n = 1.008665 u, and mass of ⁵⁶Fe nucleus = 55.934939 u.
SOLUTION:
**Given:**
- Z = 26 protons, N = (56 - 26) = 30 neutrons, A = 56
- m_p = 1.007825 u
- m_n = 1.008665 u
- M_Fe = 55.934939 u
**Step 1: Calculate Total Nucleon Mass:**
- Total mass of 26 protons = 26 × 1.007825 u = 26.203450 u.
- Total mass of 30 neutrons = 30 × 1.008665 u = 30.259950 u.
- Sum of constituent masses = 26.203450 + 30.259950 = **56.463400 u**.
**Step 2: Calculate Mass Defect (Δm):**
- Δm = 56.463400 u - 55.934939 u = **0.528461 u**.
**Step 3: Calculate Total Binding Energy (BE):**
- BE = Δm × 931.5 MeV = 0.528461 × 931.5 MeV = **492.26 MeV**.
**Step 4: Calculate Binding Energy per Nucleon (BE / A):**
- BE / A = 492.26 MeV / 56 = **8.79 MeV/nucleon**.
**Final Answer:**
The binding energy per nucleon of ⁵⁶Fe is **8.79 MeV/nucleon**.
**CBSE Marking Rubric:**
- 1 Mark for mass defect calculation Δm = 0.528461 u.
- 1 Mark for total binding energy BE = 492.26 MeV.
- 1 Mark for BE/A = 8.79 MeV/nucleon.`;
  }

  // CHAPTER 14: Semiconductor Electronics
  if (
    chapterLower.includes('semiconductor') ||
    chapterLower.includes('diode') ||
    chapterLower.includes('rectifier') ||
    chapterLower.includes('p-n') ||
    chapterLower === 'p14'
  ) {
    return `QUESTION: Q1. [1 Mark MCQ, CBSE 2024 (55/1/1)] In a p-type semiconductor, the majority charge carriers and donor/acceptor impurity are:
(A) Electrons, Pentavalent
(B) Holes, Trivalent
(C) Holes, Pentavalent
(D) Electrons, Trivalent
SOLUTION:
**Correct Answer:** (B) Holes, Trivalent
**Notebook Explanation:**
A p-type semiconductor is created by doping pure tetravalent silicon/germanium with trivalent impurities (such as Boron, Aluminum, Indium). This creates an abundance of mobile holes in the valence band (n_h >> n_e).
**CBSE Marking Rubric:**
- 1 Mark for option (B).

QUESTION: Q2. [2 Marks, CBSE 2023 (Delhi)] Why does the conductivity of an intrinsic semiconductor increase with an increase in temperature, whereas that of a metallic conductor decreases?
SOLUTION:
**Notebook Explanation:**
1. **Intrinsic Semiconductor:** The charge carrier concentration n increases exponentially with temperature as covalent bonds break (n ∝ e^(-E_g / k_B T)). This exponential surge in mobile carriers overwhelmingly dominates over the slight decrease in relaxation time τ, so electrical conductivity **increases significantly**.
2. **Metallic Conductor:** The free electron density n is already fixed and very high. As temperature rises, thermal lattice vibrations increase, causing more frequent collisions which drastically shortens relaxation time τ (ρ = m / ne²τ increases). Thus, metallic conductivity **decreases**.
**CBSE Marking Rubric:**
- 1 Mark for semiconductor explanation (carrier multiplication dominates).
- 1 Mark for metal explanation (lattice collisions decrease relaxation time).

QUESTION: Q3. [5 Marks Structured Problem, CBSE 2024 (55/1/2)]
(a) With the help of a neat labeled circuit diagram, explain the working principle of a full-wave center-tapped rectifier. Draw the input AC and output DC voltage waveforms.
(b) What is the function of a capacitor filter connected across the load resistance? If the input AC frequency is 50 Hz, what is the ripple frequency of the output voltage for: (i) a half-wave rectifier, and (ii) a full-wave rectifier?
SOLUTION:
**(a) Full-Wave Rectifier Working & Waveforms:**
1. **Principle:** A p-n junction diode conducts current when forward biased and blocks current when reverse biased. In a full-wave rectifier, two diodes (D₁, D₂) conduct alternately across successive half-cycles of the AC input, producing unidirectional current through load resistor R_L throughout both half-cycles.
2. **Working Cycle:**
   - **Positive Half Cycle:** Terminal A is positive with respect to center-tap C, and terminal B is negative. Diode D₁ is forward biased (ON) and conducts; diode D₂ is reverse biased (OFF). Current flows through D₁, then downwards through load R_L to center-tap C.
   - **Negative Half Cycle:** Terminal A is negative with respect to center-tap C, and terminal B is positive. Diode D₁ is reverse biased (OFF); diode D₂ is forward biased (ON) and conducts. Current flows through D₂, and again downwards through load R_L in the EXACT same direction as before.
3. **Waveforms:**
   - Input: Sinusoidal AC wave oscillating symmetrically between +V₀ and -V₀.
   - Output: Continuous sequence of positive unidirectional pulses across every half cycle.
   - Maximum Rectification Efficiency: **η_max = 81.2%**.

**(b) Capacitor Filter & Ripple Frequency:**
1. **Function of Capacitor Filter:**
   - The capacitor C is connected in parallel with load resistor R_L.
   - When the pulsating output voltage rises, the capacitor charges to the peak voltage V₀.
   - When the rectifier voltage drops towards zero, the capacitor discharges slowly through R_L, maintaining an almost steady current and removing the AC ripple to deliver smooth DC.
2. **Output Ripple Frequencies:**
   - **(i) Half-Wave Rectifier:** Output contains 1 pulse per cycle => Ripple frequency = f_in = **50 Hz**.
   - **(ii) Full-Wave Rectifier:** Output contains 2 pulses per cycle => Ripple frequency = 2 × f_in = 2 × 50 Hz = **100 Hz**.
**Final Answer:**
(i) Half-wave ripple frequency is **50 Hz**.
(ii) Full-wave ripple frequency is **100 Hz**.
**CBSE Marking Rubric:**
- 2 Marks for circuit diagram and operation of D₁/D₂ in alternating half-cycles.
- 1 Mark for input and output waveforms.
- 1 Mark for capacitor filter explanation.
- 1 Mark for ripple frequencies (50 Hz and 100 Hz).`;
  }

  // FULL SUBJECT REVISION PYQS
  if (
    chapterLower.includes('revision') ||
    chapterLower.includes('full') ||
    chapterLower === 'p_rev'
  ) {
    return `QUESTION: Q1. [5 Marks Structured Problem, CBSE 2024 (Delhi)]
(a) State Gauss's law in electrostatics. Using it, derive the electric field due to a uniformly charged thin spherical shell of radius R at a point: (i) outside the shell (r > R), and (ii) inside the shell (r < R).
(b) A circular coil of 20 turns and radius 10 cm is placed in a uniform magnetic field of 0.10 T normal to the plane of the coil. If the current in the coil is 5.0 A, find: (i) total torque on the coil, and (ii) total force on the coil.
SOLUTION:
**(a) Gauss's Law & Spherical Shell Derivation:**
1. **Gauss's Law:** Total electric flux through any closed Gaussian surface: ∮ E · dA = Q_enclosed / ε₀.
2. **(i) Outside the shell (r > R):**
   - Draw concentric spherical Gaussian surface of radius r > R.
   - By spherical symmetry, E is radially outward and has identical magnitude over entire surface:
     ∮ E · dA = E (4π r²) = Q / ε₀ => **E = (1 / 4πε₀) · (Q / r²)**.
3. **(ii) Inside the shell (r < R):**
   - Draw concentric spherical Gaussian surface of radius r < R.
   - Since all charge resides entirely on the outer surface of the shell, enclosed charge is strictly zero: Q_enclosed = 0.
   - E · (4π r²) = 0 => **E = 0**.

**(b) Numerical Notebook Solution:**
- **Given:**
  - Turns N = 20
  - Radius R = 10 cm = 0.10 m => Area A = π R² = π (0.10)² = 0.01π m²
  - Magnetic field B = 0.10 T
  - Current I = 5.0 A
  - Field is normal to the plane of the coil => Angle between area vector A and field B is θ = 0°.
**(i) Total Torque on Coil (τ):**
- Formula: τ = N · I · A · B · sinθ
- Since θ = 0°: sin 0° = 0 => **Torque τ = 0 N·m**.
**(ii) Total Force on Coil (F):**
- In a uniform magnetic field, forces on diametrically opposite elements of any closed planar current loop are equal and opposite:
  **Net Force F = 0 N**.
**Final Answer:**
(i) Total torque is **0 N·m**.
(ii) Total net force is **0 N**.
**CBSE Marking Rubric:**
- 2.5 Marks for Gauss's law statement and spherical shell derivations outside and inside.
- 1.5 Marks for torque calculation τ = 0 N·m.
- 1 Mark for force F = 0 N in uniform magnetic field.`;
  }

  return null;
}
