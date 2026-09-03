// services/subjects/physics/part2.ts
// Chapters 8 to 14 + Full Subject Revision Notes

export function getPhysicsPart2Notes(chapterLower: string): string | null {
  // CHAPTER 8: Electromagnetic Waves
  if (
    chapterLower.includes('electromagnetic waves') ||
    chapterLower.includes('em waves') ||
    chapterLower.includes('displacement current') ||
    chapterLower === 'p8'
  ) {
    return `TOPIC: Chapter 8: Electromagnetic Waves
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Displacement Current & Maxwell's Equations:**
- **Inconsistency in Ampere's Circuital Law:** Ampere's law ∮ B · dl = μ₀ I failed during charging of a capacitor where conduction current I_c flows in connecting wires, but zero conduction current flows across the insulating gap between plates, even though magnetic field exists in the gap.
- **Displacement Current (I_d):** Maxwell postulated that a time-varying electric field produces an equivalent current:
**FORMULA:** I_d = ε₀ · (dΦ_E / dt), where Φ_E is the electric flux.
- **Generalized Ampere-Maxwell Law:** ∮ B · dl = μ₀ (I_c + I_d) = μ₀ I_c + μ₀ ε₀ (dΦ_E / dt).
- **Core Principle of Continuity:** Conduction current in connecting wire equals displacement current in dielectric gap: I_c = I_d.
- **Maxwell's Four Electromagnetic Equations:**
  1. Gauss's Law in Electrostatics: ∮ E · dA = Q_enclosed / ε₀.
  2. Gauss's Law in Magnetism: ∮ B · dA = 0 (No magnetic monopoles).
  3. Faraday's Law of Electromagnetic Induction: ∮ E · dl = - dΦ_B / dt.
  4. Ampere-Maxwell Law: ∮ B · dl = μ₀ I_c + μ₀ ε₀ (dΦ_E / dt).

**2. Sources & Transverse Characteristics of EM Waves:**
- **Sources:** An accelerating electric charge emits electromagnetic waves. (Neither stationary charges nor steady DC currents produce EM waves).
- **Transverse Nature:** The electric field vector E and magnetic field vector B oscillate perpendicular to each other and perpendicular to the direction of propagation vector k: Direction = E × B.
- **Speed of Light in Vacuum:**
**FORMULA:** c = 1 / √(μ₀ ε₀) ≈ 3.0 × 10⁸ m/s. Ratio of amplitudes: c = E₀ / B₀.
- In material medium of refractive index n: v = 1 / √(μ ε) = c / √(μ_r ε_r).
- **Energy Density in EM Wave:**
**FORMULA:** Total average energy density u = u_E + u_B = 1/2 ε₀ E_rms² + B_rms² / (2μ₀) = ε₀ E_rms² = B_rms² / μ₀. (Energy is shared equally between electric and magnetic fields: u_E = u_B).
- **Radiation Pressure & Momentum:** Momentum transferred by EM wave of energy U: p = U / c (for complete absorption); p = 2U / c (for complete reflection). Radiation pressure = (Intensity I) / c.

**3. The Complete Electromagnetic Spectrum (In Order of Decreasing Wavelength / Increasing Frequency):**
1. **Radio Waves (> 0.1 m):**
   - Production: Rapid acceleration of electrons in oscillating LC circuits.
   - Applications: AM/FM radio, cellular phones, television communication.
2. **Microwaves (0.1 m to 1 mm):**
   - Production: Special vacuum tubes (Klystrons, Magnetrons, Gunn diodes).
   - Applications: Radar systems for aircraft navigation, satellite communications, microwave ovens (water molecules rotate at 2.45 GHz resonant frequency, heating food evenly).
3. **Infrared Waves (1 mm to 700 nm):**
   - Production: Thermal vibrations of molecules and hot bodies ("Heat Waves").
   - Applications: Greenhouse effect (maintaining Earth's warmth), TV remotes, night-vision cameras, physical therapy.
4. **Visible Light (700 nm to 400 nm - Red to Violet):**
   - Production: Electron transitions between valence energy levels in excited atoms.
   - Applications: Human vision, optical microscopy, photography.
5. **Ultraviolet Rays (400 nm to 1 nm):**
   - Production: Very hot bodies (Sun, electric arcs, mercury vapor lamps).
   - Applications: Water purifiers (germicidal action kills bacteria), LASIK eye surgery, detecting counterfeit currency. Absorbed by stratospheric ozone layer.
6. **X-Rays (1 nm to 10⁻³ nm / 10⁻¹² m):**
   - Production: Bombarding heavy metal target (Tungsten) with high-energy electrons in Coolidge tube.
   - Applications: Diagnostic bone radiography, CT scans, airport baggage scanners, crystallographic study of crystals.
7. **Gamma Rays (< 10⁻³ nm):**
   - Production: Radioactive nuclear decay and cosmic radiation.
   - Applications: Radiation therapy for cancer treatment (killing malignant tumor cells), food sterilization.

**4. Quick Revision Points:**
**KEY POINTS:**
- Displacement current: I_d = ε₀ dΦ_E / dt; Continuity: I_c = I_d.
- Speed: c = 1 / √(μ₀ ε₀) = E₀ / B₀ ≈ 3 × 10⁸ m/s; Direction: E × B.
- Energy density: u = 1/2 ε₀ E² + B²/(2μ₀); Equal partition: u_E = u_B.
- Spectrum order (increasing frequency): Radio -> Micro -> IR -> Visible -> UV -> X-rays -> Gamma rays.`;
  }

  // CHAPTER 9: Ray Optics and Optical Instruments
  if (
    chapterLower.includes('ray optics') ||
    chapterLower.includes('lens') ||
    chapterLower.includes('telescope') ||
    chapterLower.includes('microscope') ||
    chapterLower.includes('prism') ||
    chapterLower === 'p9'
  ) {
    return `TOPIC: Chapter 9: Ray Optics & Optical Instruments
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Refraction, Snell's Law & Total Internal Reflection (TIR):**
- **Snell's Law:** μ₁ sin i = μ₂ sin r => sin i / sin r = μ₂ / μ₁ = v₁ / v₂ = λ₁ / λ₂. (Frequency ν remains strictly unchanged during refraction).
- **Total Internal Reflection:** When light travels from denser medium (index μ₁) to rarer medium (index μ₂) at an angle of incidence greater than the critical angle (i > i_c):
**FORMULA:** sin(i_c) = 1 / μ  (where μ = μ_denser / μ_rarer).
- **Conditions for TIR:** (1) Light must travel from optically denser to rarer medium. (2) Angle of incidence i must exceed critical angle i_c.
- **Applications of TIR:**
  - **Optical Fibers:** Core of high refractive index (μ₁ ≈ 1.68) coated with cladding of lower refractive index (μ₂ ≈ 1.44). Light entering core undergoes repeated successive TIR with almost negligible transmission loss.
  - **Mirage in Deserts:** Atmospheric refraction and TIR due to hot air layers near ground having lower density and refractive index.
  - **Totally Reflecting Prisms:** 45°-90°-45° prisms turn light by 90° or 180° without chromatic aberration or intensity loss.

**2. Refraction at Spherical Surface & Lens Maker's Formula Derivations:**
- **DERIVATION:** Refraction at Single Spherical Surface (Convex surface separating medium μ₁ and μ₂):
  Step 1: Consider small aperture spherical surface of radius R, center of curvature C, pole P. Point object O placed in medium μ₁ on principal axis.
  Step 2: Real image I formed in medium μ₂. Normal drawn from C through point of incidence N.
  Step 3: For paraxial rays, small angles tanα ≈ α, tanβ ≈ β, tanγ ≈ γ.
  Step 4: From triangle NOC: exterior angle i = α + γ. From triangle NIC: γ = r + β => r = γ - β.
  Step 5: Applying Snell's law for small angles: μ₁ i = μ₂ r => μ₁ (α + γ) = μ₂ (γ - β).
  Step 6: Express angles as arc/radius: α ≈ NP / -u, β ≈ NP / +v, γ ≈ NP / +R.
  Step 7: μ₁ (-NP/u + NP/R) = μ₂ (NP/R - NP/v) => μ₂/v - μ₁/u = (μ₂ - μ₁) / R.
- **DERIVATION:** Lens Maker's Formula for Thin Convex Lens (Radii R₁ and R₂, lens index μ₂ in medium μ₁):
DIAGRAM: lens_maker | Lens Maker's Formula Geometric Derivation (NCERT Fig 9.17)
  Step 1: For refraction at first surface (radius R₁): μ₂/v₁ - μ₁/u = (μ₂ - μ₁) / R₁.
  Step 2: The intermediate image formed acts as virtual object for second surface (radius R₂): μ₁/v - μ₂/v₁ = (μ₁ - μ₂) / R₂ = - (μ₂ - μ₁) / R₂.
  Step 3: Adding both equations: μ₁ (1/v - 1/u) = (μ₂ - μ₁) [ 1/R₁ - 1/R₂ ].
  Step 4: Dividing by μ₁: 1/v - 1/u = (μ₂/μ₁ - 1) [ 1/R₁ - 1/R₂ ].
  Step 5: When object is at infinity (u = ∞), image forms at focus (v = f):
  Step 6: Lens Maker's Formula: 1/f = (μ - 1) [ 1/R₁ - 1/R₂ ].
- **Thin Lens Formula:** 1/f = 1/v - 1/u. Magnification m = v / u = h_i / h_o.
- **Power of Lens:** P = 1 / f(in meters) Dioptres (D). For lenses in contact: P_eq = P₁ + P₂ => 1/F = 1/f₁ + 1/f₂.

**3. Refraction Through Prism Derivation:**
- **DERIVATION:** Prism Formula:
DIAGRAM: prism_refraction | Refraction of Light Ray Through Triangular Glass Prism (NCERT Fig 9.21)
  Step 1: Light ray enters face AB of triangular prism (angle A) at incident angle i₁, refracts at r₁, hits AC at r₂, and emerges at angle of emergence e (i₂).
  Step 2: Angle of deviation: δ = (i₁ - r₁) + (e - r₂) = (i₁ + e) - (r₁ + r₂).
  Step 3: In quadrilateral AQNR: A + ∠QNR = 180°. In triangle QNR: r₁ + r₂ + ∠QNR = 180° => A = r₁ + r₂.
  Step 4: Therefore: δ = i + e - A => A + δ = i + e.
  Step 5: At Minimum Deviation (δ = D_m): Ray passes symmetrically through prism, so i = e and r₁ = r₂ = r.
  Step 6: A = 2r => r = A / 2. And A + D_m = 2i => i = (A + D_m) / 2.
  Step 7: Applying Snell's Law μ = sin i / sin r:
  Step 8: Prism Formula: μ = sin [ (A + D_m) / 2 ] / sin [ A / 2 ].

**4. Optical Instruments (Microscopes & Telescopes):**
- **Compound Microscope:**
  - Consists of objective lens (small focal length f_o, small aperture) and eyepiece (moderate focal length f_e, larger aperture).
  - Objective forms real, inverted, magnified image; eyepiece acts as simple magnifier producing final virtual, inverted, highly magnified image.
  - **Magnifying Power (m):**
    - Final image at Least Distance of Distinct Vision (D = 25 cm): m = (- L / f_o) · (1 + D / f_e).
    - Normal Adjustment (Image at infinity): m = (- L / f_o) · (D / f_e). (Tube length L ≈ distance between objective and eyepiece).
- **Astronomical Refracting Telescope:**
  - Consists of objective lens (large focal length f_o, large aperture to gather maximum light) and eyepiece (small focal length f_e, small aperture).
  - **Normal Adjustment (Final image at infinity):**
    - Magnifying Power: m = - f_o / f_e. Tube length: L = f_o + f_e.
  - **Final image at D:** m = (- f_o / f_e) · (1 + f_e / D).
- **Reflecting Type Telescope (Cassegrain Design):**
  - Uses concave parabolic primary mirror instead of glass objective lens.
  - **Advantages over Refracting Telescope:**
    1. **No Chromatic Aberration:** Reflection obeys law of reflection identically for all colors; mirrors do not disperse light.
    2. **Reduced Spherical Aberration:** Parabolic mirror focuses all parallel rays to a single sharp focal point.
    3. **High Light Gathering Power & Mechanical Rigidity:** Huge mirrors can be supported from the entire rear base, whereas large heavy glass lenses sag under their own weight.

**5. Quick Revision Points:**
**KEY POINTS:**
- Critical angle: sin(i_c) = 1/μ; TIR requires i > i_c (denser to rarer).
- Refraction at single surface: μ₂/v - μ₁/u = (μ₂ - μ₁)/R.
- Lens Maker's Formula: 1/f = (μ - 1)(1/R₁ - 1/R₂); Lens formula: 1/f = 1/v - 1/u.
- Prism formula: μ = sin[(A + D_m)/2] / sin(A/2).
- Microscope: m = (-L/f_o)(D/f_e); Telescope: m = -f_o/f_e, L = f_o + f_e.`;
  }

  // CHAPTER 10: Wave Optics
  if (
    chapterLower.includes('wave optics') ||
    chapterLower.includes('interference') ||
    chapterLower.includes('diffraction') ||
    chapterLower.includes('huygens') ||
    chapterLower.includes('ydse') ||
    chapterLower === 'p10'
  ) {
    return `TOPIC: Chapter 10: Wave Optics
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Huygens' Principle & Laws of Reflection/Refraction:**
**DEFINITION:** A Wavefront is defined as the continuous locus of all points in a medium oscillating in the exact same phase. (Spherical wavefront from point source; Cylindrical from linear slit source; Plane wavefront from distant source).
**PRINCIPLE:** Huygens' Principle Postulates:
1. Every point on a given primary wavefront acts as a secondary source of spherical wavelets spreading out in all directions with the speed of the wave in that medium.
2. The forward common tangential envelope to these secondary wavelets at any later time t gives the new position of the wavefront.
- **Deduction of Laws of Refraction using Huygens' Principle:**
  Step 1: Consider plane wavefront AB incident at angle i on planar interface separating medium 1 (speed v₁) and medium 2 (speed v₂ < v₁).
  Step 2: Point A strikes boundary first; secondary wavelet from A travels distance v₂ τ into medium 2 in time τ taken by point B to reach boundary at C: BC = v₁ τ.
  Step 3: In right triangle ABC: sin i = BC / AC = (v₁ τ) / AC.
  Step 4: In right triangle ADC: sin r = AD / AC = (v₂ τ) / AC.
  Step 5: Dividing: sin i / sin r = (v₁ τ) / (v₂ τ) = v₁ / v₂ = μ₂ / μ₁ (Snell's Law).

**2. Interference of Light & Young's Double Slit Experiment (YDSE):**
**DEFINITION:** Coherent sources are two sources of light which emit continuous light waves of identical wavelength, identical frequency, and have a constant or zero phase difference. (Two independent sources can NEVER be coherent).
- **Conditions for Constructive & Destructive Interference:**
  - For Constructive Interference (Bright fringe / Maxima): Path difference Δx = n · λ  (n = 0, 1, 2...); Phase difference Φ = 2nπ.
  - For Destructive Interference (Dark fringe / Minima): Path difference Δx = (2n - 1) · (λ / 2)  (n = 1, 2, 3...); Phase difference Φ = (2n - 1)π.
- **DERIVATION:** Fringe Width (β) in Young's Double Slit Experiment:
  Step 1: Two coherent slits S₁ and S₂ separated by distance d; Screen placed at distance D (D >> d).
  Step 2: Path difference between waves reaching point P at distance y from central axis: Δx = S₂P - S₁P.
  Step 3: (S₂P)² - (S₁P)² = [ D² + (y + d/2)² ] - [ D² + (y - d/2)² ] = 2yd.
  Step 4: (S₂P - S₁P) · (S₂P + S₁P) = 2yd. Since D >> d, S₂P + S₁P ≈ 2D:
  Step 5: Path difference: Δx = (y · d) / D.
  Step 6: Position of n-th Bright Fringe: (y_n · d) / D = n λ => y_n = (n λ D) / d.
  Step 7: Position of n-th Dark Fringe: y_n' = (2n - 1) · (λ D) / (2d).
  Step 8: Fringe Width β (distance between consecutive bright or dark fringes):
  Step 9: β = y_(n+1) - y_n = [ (n+1) λ D / d ] - [ n λ D / d ] => β = (λ · D) / d.
- **Resultant Intensity Formula:**
**FORMULA:** I = I₁ + I₂ + 2 √(I₁ I₂) cosΦ. For identical slits of intensity I₀: I = 4 I₀ cos²(Φ / 2).
- Ratio: I_max / I_min = [ √(I₁) + √(I₂) ]² / [ √(I₁) - √(I₂) ]² = (a₁ + a₂)² / (a₁ - a₂)².

**3. Single Slit Diffraction Derivation:**
**DEFINITION:** Diffraction is the phenomenon of bending of light waves around the sharp corners of an obstacle or aperture and spreading into the region of geometrical shadow. (Significant only when aperture size a is comparable to wavelength λ: a ≈ λ).
- **DERIVATION:** Width of Central Maximum in Single Slit Diffraction:
  Step 1: Single slit AB of width a illuminated by parallel monochromatic beam of wavelength λ. Screen at distance D.
  Step 2: Angular spread θ to any point on screen: Path difference between waves from top and bottom edges is Δx = a sinθ.
  Step 3: Condition for Secondary Minima: Slit divided into 2n equal halves which cancel in pairs: a sinθ = n λ => sinθ ≈ θ = n λ / a (n = ±1, ±2...). First minimum at θ₁ = λ / a.
  Step 4: Condition for Secondary Maxima: a sinθ = (2n + 1) λ / 2 => θ ≈ (2n + 1) λ / (2a) (n = 1, 2...).
  Step 5: Angular Width of Central Maximum (from -λ/a to +λ/a): 2θ₁ = 2 λ / a (radians).
  Step 6: Linear Width of Central Maximum on Screen: β₀ = 2θ₁ · D = (2 λ D) / a = 2 β_interference.

**4. Comparison: Interference vs Diffraction:**
1. Interference is superposition of waves from two distinct separate wavefronts (slits); Diffraction is superposition of secondary wavelets originating from different parts of the same single wavefront.
2. In interference, all bright fringes have identical equal width β = λD/d; In diffraction, central maximum is twice as wide as secondary fringes (β₀ = 2λD/a).
3. In interference, all bright fringes have equal uniform intensity (I = 4I₀); In diffraction, intensity drops drastically for higher orders (Central : 1st Max : 2nd Max ≈ 1 : 1/22 : 1/61).
4. In interference, dark fringes are completely dark (I_min = 0); In diffraction, minima are never completely dark.

**5. Quick Revision Points:**
**KEY POINTS:**
- Huygens wavefront: Locus of constant phase. Snell's law: sin i / sin r = v₁/v₂.
- YDSE fringe width: β = λD / d. Bright: Δx = nλ; Dark: Δx = (2n-1)λ/2.
- Intensity: I = 4I₀ cos²(Φ/2); I_max / I_min = (a₁+a₂)² / (a₁-a₂)².
- Diffraction central maximum width: 2λD / a (angular: 2λ/a). Minima: a sinθ = nλ.`;
  }

  // CHAPTER 11: Dual Nature of Radiation and Matter
  if (
    chapterLower.includes('dual nature') ||
    chapterLower.includes('photoelectric') ||
    chapterLower.includes('de broglie') ||
    chapterLower === 'p11'
  ) {
    return `TOPIC: Chapter 11: Dual Nature of Radiation and Matter
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Photoelectric Effect & Experimental Observations:**
**DEFINITION:** Photoelectric effect is the phenomenon of emission of electrons from a metallic surface when electromagnetic radiation of sufficiently high frequency is incident upon it. Emitted electrons are called photoelectrons.
- **Threshold Frequency (ν₀):** The minimum cutoff frequency of incident radiation below which no photoelectric emission can occur, regardless of how intense the radiation is. (Threshold wavelength λ₀ = c / ν₀ is maximum cutoff wavelength).
- **Work Function (Φ₀):** The minimum energy required to eject an electron from the metal surface: Φ₀ = h · ν₀ = h c / λ₀ (SI Unit: eV or Joules; 1 eV = 1.602 × 10⁻¹⁹ J). Lowest for Cesium (Φ₀ ≈ 2.14 eV); highest for Platinum (Φ₀ ≈ 5.65 eV).
- **Stopping Potential (Cutoff Potential V₀):** The minimum negative (retarding) potential applied to the collector plate at which the photoelectric current becomes strictly zero: e · V₀ = K_max.
- **Experimental Laws:**
  1. For a given frequency ν > ν₀, photoelectric saturation current is directly proportional to the intensity of incident radiation.
  2. Maximum kinetic energy K_max (and stopping potential V₀) is independent of intensity; it depends linearly on the frequency of incident radiation.
  3. Emission is instantaneous: Time lag between incidence of light photon and ejection of photoelectron is less than 10⁻⁹ seconds.

**2. Einstein's Photoelectric Equation Derivation:**
**STATEMENT:** Einstein explained photoelectric effect using Planck's quantum theory: Light consists of discrete packets of energy called photons, each carrying energy E = h ν. One photon interacts with only one electron in an all-or-none collision.
- **DERIVATION:**
  Step 1: Energy of incident photon = h ν.
  Step 2: A portion of photon energy is used to overcome binding forces (Work function Φ₀ = h ν₀).
  Step 3: The remaining energy is imparted to the electron as maximum kinetic energy K_max:
  Step 4: h ν = Φ₀ + K_max = h ν₀ + 1/2 m v_max².
  Step 5: Expressed in terms of Stopping Potential V₀ (K_max = e V₀):
  Step 6: e V₀ = h ν - Φ₀ => V₀ = (h / e) · ν - (Φ₀ / e).
  Step 7: Linear Graph V₀ vs ν: Straight line with slope = h / e (universal constant, independent of metal) and negative intercept on y-axis = - Φ₀ / e.

**3. de-Broglie Hypothesis & Matter Waves:**
**PRINCIPLE:** de-Broglie proposed that nature loves symmetry: If electromagnetic radiation exhibits dual wave-particle properties, material particles (electrons, protons, neutrons) in motion must also possess wave-like properties.
- **de-Broglie Wavelength Formula:**
**FORMULA:** λ = h / p = h / (m · v).
- **In Terms of Kinetic Energy E:** Since p = √(2mE): λ = h / √(2 m E).
- **For a Charged Particle Accelerated through Potential Difference V:**
  - Work done W = q · V = E => λ = h / √(2 m q V).
  - **For Electron (m = 9.11 × 10⁻³¹ kg, q = 1.6 × 10⁻¹⁹ C):**
**FORMULA:** λ_electron = (1.227 / √V) nm = (12.27 / √V) Å.
- **For Thermal Neutron at absolute temperature T (Kinetic energy E = 3/2 k_B T):**
  - λ_neutron = h / √(3 m k_B T).

**4. Quick Revision Points:**
**KEY POINTS:**
- Photon energy: E = hν = hc/λ; Momentum: p = h/λ = E/c.
- Einstein's equation: hν = Φ₀ + K_max = hν₀ + eV₀ => V₀ = (h/e)ν - (Φ₀/e).
- Stopping potential V₀ depends only on frequency ν, NOT on intensity.
- de-Broglie wavelength: λ = h/p = h/mv = h/√(2mE); For electron: λ = 1.227 / √V nm.`;
  }

  // CHAPTER 12: Atoms
  if (
    chapterLower.includes('atom') ||
    chapterLower.includes('bohr') ||
    chapterLower.includes('rutherford') ||
    chapterLower.includes('spectral') ||
    chapterLower === 'p12'
  ) {
    return `TOPIC: Chapter 12: Atoms
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Rutherford's Alpha Scattering & Nuclear Atom Model:**
- **Geiger-Marsden Experiment:** Alpha particles (He²⁺) fired at thin gold foil (thickness ~10⁻⁷ m). Most pass undeflected (~99.86%); ~0.14% deflect by > 1°; 1 in 8000 deflects by > 90° or rebounds backwards (180°).
- **Distance of Closest Approach (r₀) Derivation:**
  Step 1: At distance of closest approach r₀, initial kinetic energy K of alpha particle completely converts into electrostatic potential energy.
  Step 2: K = (1 / 4πε₀) · [ (2e) · (Ze) / r₀ ] = (1 / 4πε₀) · (2 Z e² / r₀).
  Step 3: r₀ = (1 / 4πε₀) · (2 Z e² / K) = (4 k Z e²) / (m v²). (Gives nuclear size upper bound ~10⁻¹⁴ m).
- **Impact Parameter (b):** The perpendicular distance of the initial velocity vector of the alpha particle from the center of the nucleus: b = (1 / 4πε₀) · [ Z e² cot(θ / 2) ] / K. For head-on collision (b = 0), θ = 180°.

**2. Bohr's Postulates & Hydrogen Orbit Derivations:**
- **Bohr's Three Postulates:**
  1. **Postulate 1:** An electron revolves around nucleus in stable non-radiating circular orbits where electrostatic attraction provides necessary centripetal force: (m v_n²) / r_n = (1 / 4πε₀) · (Z e² / r_n²).
  2. **Postulate 2 (Quantization Rule):** An electron can only revolve in orbits where its orbital angular momentum L is an integral multiple of h / (2π): L = m v_n r_n = n · (h / 2π)  (n = 1, 2, 3... principal quantum number).
  3. **Postulate 3 (Frequency Condition):** Radiation is absorbed or emitted only when electron jumps from one stationary orbit to another: E_final - E_initial = h ν.
- **DERIVATION:** Radius of n-th Orbit (r_n):
  Step 1: From Postulate 2: v_n = (n h) / (2π m r_n).
  Step 2: Substitute v_n into Postulate 1: m [ (n h) / (2π m r_n) ]² = (1 / 4πε₀) · (Z e² / r_n).
  Step 3: (n² h²) / (4π² m r_n) = (Z e²) / (4πε₀) => r_n = (ε₀ n² h²) / (π m Z e²).
  Step 4: For Hydrogen (Z = 1) in ground state (n = 1): Bohr radius **r₁ = a₀ = 0.529 Å = 0.0529 nm**. In general: **r_n = (0.529 Å) · (n² / Z)**.
- **DERIVATION:** Orbital Velocity (v_n):
  Step 1: v_n = (n h) / (2π m r_n) = (Z e²) / (2 ε₀ n h). For Hydrogen ground state: v₁ = c / 137 ≈ 2.18 × 10⁶ m/s.
- **DERIVATION:** Total Energy of Electron in n-th Orbit (E_n):
  Step 1: Kinetic Energy K = 1/2 m v_n² = (1 / 8πε₀) · (Z e² / r_n).
  Step 2: Potential Energy U = - (1 / 4πε₀) · (Z e² / r_n).
  Step 3: Total Energy E = K + U = - (1 / 8πε₀) · (Z e² / r_n) = - 1/2 |U| = - K.
  Step 4: Substituting r_n: E_n = - [ m Z² e⁴ ] / [ 8 ε₀² n² h² ].
  Step 5: For Hydrogen (Z = 1): **E_n = - 13.6 / n² eV**.
  Step 6: Energy levels: n=1 (Ground State: -13.6 eV), n=2 (1st Excited: -3.4 eV), n=3 (-1.51 eV), n=4 (-0.85 eV), n=∞ (0 eV). Ionization energy of H-atom = 13.6 eV.

**3. Hydrogen Emission Spectral Series:**
**FORMULA:** Rydberg Formula: 1 / λ = R_H · Z² · [ 1 / n₁² - 1 / n₂² ], where Rydberg Constant R_H = 1.097 × 10⁷ m⁻¹.
1. **Lyman Series:** n₁ = 1, n₂ = 2, 3, 4... Spectral Region: **Ultraviolet (UV)**.
2. **Balmer Series:** n₁ = 2, n₂ = 3, 4, 5... Spectral Region: **Visible Light**. (Only visible series!).
3. **Paschen Series:** n₁ = 3, n₂ = 4, 5, 6... Spectral Region: **Infrared (Near IR)**.
4. **Brackett Series:** n₁ = 4, n₂ = 5, 6, 7... Spectral Region: **Infrared (Mid IR)**.
5. **Pfund Series:** n₁ = 5, n₂ = 6, 7, 8... Spectral Region: **Infrared (Far IR)**.
- Shortest wavelength (series limit): set n₂ = ∞ => λ_min = n₁² / R_H.
- Longest wavelength: set n₂ = n₁ + 1.

**4. Quick Revision Points:**
**KEY POINTS:**
- Closest approach: r₀ = 2kZe² / K; Impact parameter: b ∝ cot(θ/2).
- Bohr's postulates: mvr = nh / 2π; Radius: r_n = 0.529 (n²/Z) Å; Energy: E_n = -13.6 (Z²/n²) eV.
- Energy relations: K = -E, U = 2E = -2K.
- Spectral series: Lyman (UV, n₁=1), Balmer (Visible, n₁=2), Paschen (IR, n₁=3).`;
  }

  // CHAPTER 13: Nuclei
  if (
    chapterLower.includes('nuclei') ||
    chapterLower.includes('nuclear') ||
    chapterLower.includes('binding energy') ||
    chapterLower.includes('fission') ||
    chapterLower === 'p13'
  ) {
    return `TOPIC: Chapter 13: Nuclei
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Nuclear Composition, Size & Density:**
- Mass number A = Z + N (Protons Z, Neutrons N).
- **Nuclear Size Formula:**
**FORMULA:** R = R₀ · A^(1/3), where R₀ ≈ 1.2 × 10⁻¹⁵ m = 1.2 fm.
- **Nuclear Density Independence from Mass Number A Derivation:**
  Step 1: Volume of spherical nucleus: V = 4/3 π R³ = 4/3 π (R₀ A^(1/3))³ = 4/3 π R₀³ A.
  Step 2: Total mass of nucleus ≈ A · m_nucleon (where average nucleon mass m_n ≈ 1.66 × 10⁻²⁷ kg).
  Step 3: Nuclear density: ρ = Mass / Volume = (A · m_n) / (4/3 π R₀³ A) = (3 m_n) / (4π R₀³).
  Step 4: Notice mass number A completely cancels out! Nuclear density is **constant for all nuclei regardless of size**: ρ ≈ 2.3 × 10¹⁷ kg/m³ (enormously dense compared to water 10³ kg/m³).

**2. Mass Defect, Binding Energy & BE/A Curve:**
- **Atomic Mass Unit (u):** 1 u = 1/12th the mass of a Carbon-12 atom = 1.660539 × 10⁻²⁷ kg ≈ **931.5 MeV/c²**.
- **Mass Defect (Δm):** The difference between the sum of masses of individual constituent nucleons and the actual rest mass of the nucleus:
**FORMULA:** Δm = [ Z · m_p + (A - Z) · m_n ] - M_nucleus.
- **Binding Energy (BE):** Energy required to break nucleus into separated constituent nucleons:
**FORMULA:** BE = Δm × c² = Δm(in u) × 931.5 MeV.
- **Binding Energy per Nucleon (BE / A):** Measure of stability of nucleus:
  - Average BE/A for intermediate nuclei (30 < A < 170) is approximately constant at **~8.5 MeV/nucleon**.
  - Maximum at Iron-56 (⁵⁶Fe): **8.75 MeV/nucleon** (most stable nucleus in nature).
  - Falls to ~7.6 MeV/nucleon for heavy nuclei like Uranium-238 (²³⁸U).
  - Very low for light nuclei (e.g. Deuteron ~1.1 MeV/nucleon).
- **Physical Deductions from the BE/A Curve:**
  1. **Nuclear Fission:** When a heavy nucleus (A > 200, e.g. ²³⁵U) splits into two medium-sized fragments, BE/A increases from ~7.6 MeV to ~8.5 MeV, releasing enormous energy (~200 MeV per fission event).
  2. **Nuclear Fusion:** When very light nuclei (A ≤ 10, e.g. hydrogen/deuterium) fuse together to form a heavier nucleus (like ⁴He), BE/A increases sharply from ~1.1 MeV to ~7.1 MeV, liberating tremendous energy (powers the Sun and hydrogen bomb).

**3. Nuclear Forces Characteristics:**
**DEFINITION:** Nuclear force is the strong attractive force that binds protons and neutrons together inside the nucleus, overcoming the strong electrostatic repulsion between positive protons.
- **Key Characteristics:**
  1. **Strongest Interaction:** Strongest force in nature (~100 times stronger than electrostatic force, 10³⁸ times stronger than gravitational force).
  2. **Extremely Short-Range:** Acts only over distances of ~1 to 2 fm; drops to zero beyond ~2-3 fm.
  3. **Charge Independent:** Operates equally between proton-proton (p-p), neutron-neutron (n-n), and proton-neutron (p-n).
  4. **Non-Central & Spin-Dependent:** Does not act simply along the line joining the centers of nucleons; depends on the relative spin orientations of nucleons.
  5. **Saturation Property:** Each nucleon interacts only with its immediate nearest neighbors, which explains why BE/A is constant across intermediate nuclei.

**4. Quick Revision Points:**
**KEY POINTS:**
- Radius: R = R₀ A^(1/3); Nuclear density is constant for all nuclei: ρ ≈ 2.3 × 10¹⁷ kg/m³.
- Energy equivalence: 1 u = 931.5 MeV; Δm = [Z m_p + (A-Z) m_n] - M.
- Binding energy: BE = Δm × 931.5 MeV; Stability depends on BE / A.
- Max BE/A is for ⁵⁶Fe (8.75 MeV/nucleon). Fission (heavy nuclei) and Fusion (light nuclei) both release energy because BE/A increases.
- Nuclear force: Short-range, strongest force, charge-independent, exhibits saturation.`;
  }

  // CHAPTER 14: Semiconductor Electronics
  if (
    chapterLower.includes('semiconductor') ||
    chapterLower.includes('diode') ||
    chapterLower.includes('rectifier') ||
    chapterLower.includes('p-n') ||
    chapterLower === 'p14'
  ) {
    return `TOPIC: Chapter 14: Semiconductor Electronics
Master Notebook Notes - Strictly aligned with CBSE Class 12 NCERT Syllabus (2026-27).

**1. Energy Bands & Classification of Solids:**
- **Valence Band (VB):** Highest filled energy band containing valence electrons.
- **Conduction Band (CB):** Lowest unfilled energy band above valence band where electrons are free to conduct.
- **Energy Band Gap (E_g):** Energy separation between top of VB and bottom of CB.
  - **Metals / Conductors:** VB and CB overlap, or CB is partially filled (E_g ≈ 0 eV). Resistivity: 10⁻² to 10⁻⁸ Ω·m.
  - **Semiconductors:** Small, finite band gap (E_g < 3 eV; for Silicon E_g = 1.1 eV, for Germanium E_g = 0.7 eV). Resistivity: 10⁻⁵ to 10⁶ Ω·m.
  - **Insulators:** Very large band gap (E_g > 3 eV; e.g. Diamond E_g ≈ 5.4 eV). Resistivity: 10¹¹ to 10¹⁹ Ω·m.

**2. Intrinsic vs Extrinsic Semiconductors:**
- **Intrinsic Semiconductors (Pure Si or Ge):**
  - Tetravalent crystal lattice. Thermal agitation breaks covalent bonds, creating equal number of free electrons (n_e) in CB and mobile holes (n_h) in VB: **n_e = n_h = n_i** (intrinsic carrier concentration).
  - Total current: I = I_e + I_h = e A (n_e v_e + n_h v_h).
  - At absolute zero (T = 0 K), intrinsic semiconductor behaves as a perfect insulator.
- **Extrinsic Semiconductors (Doped with controlled impurities):**
  - **n-Type Semiconductor:** Pure Si/Ge doped with **pentavalent impurity** (P, As, Sb - Group 15 donors). Four valence electrons bond with Si; 5th electron easily ionizes into CB.
    - Majority carriers: **Electrons** (n_e >> n_h).
    - Donor energy level E_d lies just below conduction band edge (~0.05 eV for Si).
  - **p-Type Semiconductor:** Pure Si/Ge doped with **trivalent impurity** (B, Al, In, Ga - Group 13 acceptors). Three electrons form bonds; one vacancy (hole) created.
    - Majority carriers: **Holes** (n_h >> n_e).
    - Acceptor energy level E_a lies just above valence band edge (~0.05 eV for Si).
  - **Mass Action Law:** Under thermal equilibrium: **n_e · n_h = n_i²**. (Both n-type and p-type semiconductors are electrically neutral overall).

**3. P-N Junction Formation & Biasing:**
- **Formation of P-N Junction:**
  - **Diffusion Current:** Majority holes from p-side diffuse to n-side and majority electrons from n-side diffuse to p-side.
  - **Depletion Region:** Unneutralized immobile donor ions (+ve) on n-side and immobile acceptor ions (-ve) on p-side form a space-charge layer devoid of free mobile carriers (~0.5 to 1 μm wide).
  - **Barrier Potential (V_B):** Internal electric field from n-side to p-side creates barrier potential (~0.7 V for Si, ~0.3 V for Ge) and sets up a small opposing **drift current** of minority carriers. Equilibrium reached when Diffusion current = Drift current (Net I = 0).
- **Forward Biasing:** P-side connected to positive terminal, N-side to negative terminal of battery.
  - Applied voltage opposes and decreases barrier potential (V_eff = V_B - V) and decreases depletion width.
  - Low dynamic resistance (r_d ≈ 10 to 100 Ω); current rises exponentially above Knee Voltage (~0.7 V for Si).
- **Reverse Biasing:** P-side connected to negative terminal, N-side to positive terminal.
  - Applied voltage aids and increases barrier potential (V_eff = V_B + V) and widens depletion region.
  - Extremely high resistance (~10⁶ Ω); only negligible reverse saturation current (~μA for Ge, ~nA for Si) flows due to minority carriers, until reverse breakdown occurs.

**4. P-N Junction Diode as Rectifier:**
**DEFINITION:** Rectification is the process of converting alternating current (AC) into unidirectional direct current (DC) using the unilateral conduction property of a p-n junction diode.
- **Half-Wave Rectifier:**
  - Uses a single diode connected in series with AC secondary transformer and load resistance R_L.
  - During positive half cycle of AC: Diode is forward biased and conducts current.
  - During negative half cycle: Diode is reverse biased and blocks current.
  - Output: Pulsating DC across alternate half cycles. Efficiency: η_max = 40.6%. Output ripple frequency = f_in (50 Hz).
- **Full-Wave Rectifier (Center-Tapped Design):**
  - Uses two diodes (D₁, D₂) connected across secondary winding with center-tap grounded to load resistor R_L.
  - During positive half cycle: D₁ is forward biased (conducts) and D₂ is reverse biased (off). Current flows through R_L.
  - During negative half cycle: D₂ is forward biased (conducts) and D₁ is reverse biased (off). Current flows through R_L in the EXACT same direction as before.
  - Output: Continuous pulsating DC across both half cycles. Efficiency: η_max = 81.2%. Output ripple frequency = 2 f_in (100 Hz for 50 Hz input).
- **Capacitor Filter:** Connected in parallel with load resistor R_L. Capacitor charges during voltage rise and discharges through R_L during voltage fall, flattening the output waveform into smooth DC.

**5. Quick Revision Points:**
**KEY POINTS:**
- Energy gap: Metals E_g ≈ 0; Semiconductors E_g < 3 eV (Si: 1.1 eV, Ge: 0.7 eV); Insulators E_g > 3 eV.
- Intrinsic: n_e = n_h = n_i; Extrinsic n-type (pentavalent, n_e >> n_h), p-type (trivalent, n_h >> n_e).
- Mass action law: n_e · n_h = n_i².
- Forward bias: Barrier & depletion decrease, current ~mA; Reverse bias: Barrier & depletion increase, current ~μA.
- Full wave rectifier: 2 diodes, η_max = 81.2%, output frequency = 2f; Filter capacitor removes AC ripple.`;
  }

  // FULL SUBJECT REVISION
  if (
    chapterLower.includes('revision') ||
    chapterLower.includes('full') ||
    chapterLower === 'p_rev'
  ) {
    return `TOPIC: Class 12 Physics Full Subject Revision Master Vault (2026-27 CBSE Pattern)
Master Formula Book, Laws, SI Units, and High-Yield Revision Points for the 2026-27 Board Examination.

**1. Fundamental Physical Constants:**
- Permittivity of free space: ε₀ = 8.854 × 10⁻¹² C²/(N·m²). Constant: 1/(4πε₀) = 9.0 × 10⁹ N·m²/C².
- Permeability of free space: μ₀ = 4π × 10⁻⁷ T·m/A. Constant: μ₀/(4π) = 10⁻⁷ T·m/A.
- Elementary charge: e = 1.602 × 10⁻¹⁹ C. Electron mass: m_e = 9.109 × 10⁻³¹ kg.
- Planck's constant: h = 6.626 × 10⁻³⁴ J·s. Speed of light: c = 2.998 × 10⁸ m/s.
- Rydberg constant: R_H = 1.097 × 10⁷ m⁻¹. 1 atomic mass unit: 1 u = 931.5 MeV.

**2. High-Yield Derivations Checklist for Board Exam (5-Markers):**
1. Electric field of dipole on axial line: E = 2kp / r³; equatorial line: E = - kp / r³.
2. Gauss's Law applications: Line charge (E = λ/2πε₀r), plane sheet (E = σ/2ε₀), spherical shell (E = kQ/r², E_inside = 0).
3. Capacitance of parallel plate capacitor with dielectric slab: C = ε₀A / [d - t + t/K].
4. Drift velocity v_d = eEτ/m and deduction of Ohm's law (ρ = m/ne²τ).
5. Magnetic field on axis of circular loop: B = (μ₀NIR²) / [2(R²+x²)^(3/2)].
6. Ampere's law: Magnetic field inside ideal solenoid: B = μ₀ n I.
7. Force per unit length between parallel current wires: F/L = (μ₀ I₁ I₂) / (2π d).
8. Moving Coil Galvanometer: Current sensitivity & conversion to ammeter (S = I_g G / (I - I_g)) and voltmeter (R = V/I_g - G).
9. Self-inductance of solenoid (L = μ₀ n² A l) and mutual inductance of coaxial solenoids (M = μ₀ n₁ n₂ A l).
10. Series LCR circuit: Phasor diagram, impedance Z = √[R² + (X_L - X_C)²], and resonance frequency f_r = 1/(2π√LC).
11. Refraction at spherical surface (μ₂/v - μ₁/u = (μ₂ - μ₁)/R) and Lens Maker's formula: 1/f = (μ-1)(1/R₁ - 1/R₂).
12. Prism formula: μ = sin[(A + D_m)/2] / sin(A/2).
13. Young's Double Slit Experiment fringe width: β = λD / d.
14. Single slit diffraction central maximum width: 2λD / a.
15. Bohr's atom model: Radius r_n = 0.529 n²/Z Å and energy E_n = -13.6 Z²/n² eV.
16. Full-Wave rectifier: Circuit, working, and input/output waveforms.

**3. Common Examiner Traps:**
**COMMON MISTAKE:** Using degrees instead of radians in angular width formulas (e.g. θ = λ/a).
**COMMON MISTAKE:** Forgetting that power factor is cosΦ = R/Z; in purely reactive circuits (pure L or pure C), power dissipation is strictly zero.
**COMMON MISTAKE:** Confusing stopping potential vs frequency graph: Slope is always h/e (constant for all metals), while intercept determines work function.`;
  }

  return null;
}
