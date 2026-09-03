import { FormulaData } from '../components/FormulaCard.tsx';

/**
 * Curated, textbook-accurate CBSE Class 12 Formula Vault Bank.
 * Each formula contains:
 * - title: Physical law / formula name
 * - equation: Clean Unicode mathematical expression
 * - variables: Symbol, meaning, and standard SI unit
 * - whenToApply: Specific physical conditions
 * - trap: High-frequency examiner traps & student pitfalls
 */

export const CHAPTER_FORMULA_VAULT: Record<string, FormulaData[]> = {
  // PHYSICS CHAPTER 1: Electric Charges and Fields
  'Electric Charges and Fields': [
    {
      title: "Coulomb's Law (Electrostatic Force)",
      equation: "F = (1 / 4πε₀) · (|q₁ · q₂| / r²)",
      variables: [
        { symbol: "F", meaning: "Electrostatic force between point charges", unit: "N (Newton)" },
        { symbol: "q₁, q₂", meaning: "Magnitudes of the two point charges", unit: "C (Coulomb)" },
        { symbol: "r", meaning: "Separation distance between charge centers", unit: "m (meter)" },
        { symbol: "ε₀", meaning: "Permittivity of free space = 8.854 × 10⁻¹²", unit: "C²/(N·m²)" },
        { symbol: "1/(4πε₀)", meaning: "Coulomb constant k ≈ 9.0 × 10⁹", unit: "N·m²/C²" }
      ],
      whenToApply: "Valid strictly for stationary point charges at rest. In a dielectric medium of constant K, divide force by K: F_med = F_vac / K.",
      trap: "Do not forget to convert cm to meters (10⁻²) and microcoulombs (μC) to Coulombs (10⁻⁶) before squaring r!",
      category: "Electrostatics"
    },
    {
      title: "Electric Dipole Moment",
      equation: "p = q · (2a)",
      variables: [
        { symbol: "p", meaning: "Electric dipole moment vector (directed from -q to +q)", unit: "C·m" },
        { symbol: "q", meaning: "Magnitude of either charge", unit: "C" },
        { symbol: "2a", meaning: "Separation vector between the two opposite charges", unit: "m" }
      ],
      whenToApply: "For a system of two equal and opposite charges separated by small distance 2a.",
      trap: "2a is the TOTAL distance between charges. Do not accidentally double it to 4a in calculations!",
      category: "Dipole"
    },
    {
      title: "Electric Field on Axial Line of Short Dipole",
      equation: "E_axial = (1 / 4πε₀) · (2p / r³)",
      variables: [
        { symbol: "E_axial", meaning: "Electric field at distance r along dipole axis", unit: "N/C or V/m" },
        { symbol: "p", meaning: "Dipole moment (q · 2a)", unit: "C·m" },
        { symbol: "r", meaning: "Distance from center of dipole to observation point (r >> a)", unit: "m" }
      ],
      whenToApply: "Valid only for a short dipole where r >> a. Notice inverse-cube dependence (1/r³).",
      trap: "Field falls off as 1/r³ (NOT 1/r² like a single point charge). Direction is parallel to vector p.",
      category: "Dipole"
    },
    {
      title: "Electric Field on Equatorial Line of Short Dipole",
      equation: "E_equatorial = (1 / 4πε₀) · (p / r³)",
      variables: [
        { symbol: "E_equatorial", meaning: "Electric field at distance r on equatorial plane", unit: "N/C or V/m" },
        { symbol: "p", meaning: "Dipole moment", unit: "C·m" },
        { symbol: "r", meaning: "Distance from center along perpendicular bisector", unit: "m" }
      ],
      whenToApply: "Valid for short dipole (r >> a). Exactly half the magnitude of E_axial at same distance: E_axial = 2 · E_equatorial.",
      trap: "Direction of E_equatorial is ANTIPARALLEL (opposite) to dipole moment vector p!",
      category: "Dipole"
    },
    {
      title: "Torque on Dipole in Uniform Electric Field",
      equation: "τ = p × E = p · E · sin(θ)",
      variables: [
        { symbol: "τ", meaning: "Torque acting on the dipole", unit: "N·m" },
        { symbol: "p", meaning: "Dipole moment", unit: "C·m" },
        { symbol: "E", meaning: "Uniform external electric field", unit: "N/C" },
        { symbol: "θ", meaning: "Angle between dipole moment vector p and field E", unit: "radians or degrees" }
      ],
      whenToApply: "Dipole in uniform field experiences zero net force (F_net = 0), but experiences torque aligning it with E. Max torque at θ = 90°.",
      trap: "Net translational force in a UNIFORM field is zero! Non-zero force only occurs in a non-uniform field.",
      category: "Dipole Dynamics"
    },
    {
      title: "Gauss's Law of Electrostatics",
      equation: "Φ_E = ∮ E · dA = q_enclosed / ε₀",
      variables: [
        { symbol: "Φ_E", meaning: "Total electric flux through closed Gaussian surface", unit: "N·m²/C or V·m" },
        { symbol: "q_enclosed", meaning: "Net algebraic sum of charges enclosed inside surface", unit: "C" },
        { symbol: "ε₀", meaning: "Permittivity of free space", unit: "C²/(N·m²)" }
      ],
      whenToApply: "Applies to any closed 3D Gaussian surface of arbitrary shape. Highly symmetric cases (spherical, cylindrical, planar).",
      trap: "Charges OUTSIDE the Gaussian surface contribute to electric field E, but contribute ZERO to net flux Φ_E!",
      category: "Gauss Law"
    },
    {
      title: "Electric Field of Infinitely Long Straight Wire",
      equation: "E = λ / (2πε₀ · r)",
      variables: [
        { symbol: "E", meaning: "Electric field intensity at perpendicular distance r", unit: "N/C or V/m" },
        { symbol: "λ", meaning: "Linear charge density (q / L)", unit: "C/m" },
        { symbol: "r", meaning: "Radial distance from central axis of wire", unit: "m" },
        { symbol: "ε₀", meaning: "Permittivity of free space", unit: "C²/(N·m²)" }
      ],
      whenToApply: "Gaussian cylindrical surface around an infinitely long, thin straight charged conductor. Notice E ∝ 1/r.",
      trap: "Field is inversely proportional to r (1/r), NOT r²! Graph of E vs r is a rectangular hyperbola.",
      category: "Gauss Law"
    },
    {
      title: "Electric Field of Uniformly Charged Infinite Plane Sheet",
      equation: "E = σ / (2ε₀)",
      variables: [
        { symbol: "E", meaning: "Electric field intensity near the sheet", unit: "N/C or V/m" },
        { symbol: "σ", meaning: "Surface charge density (q / A)", unit: "C/m²" },
        { symbol: "ε₀", meaning: "Permittivity of free space", unit: "C²/(N·m²)" }
      ],
      whenToApply: "Thin non-conducting charged plane sheet of infinite extent. Note that field is completely INDEPENDENT of distance r!",
      trap: "For a thick conducting sheet with charge on both faces, field is E = σ / ε₀ (twice as large)!",
      category: "Gauss Law"
    },
    {
      title: "Electric Field of Uniformly Charged Thin Spherical Shell",
      equation: "E_out = (1 / 4πε₀) · (Q / r²)  [r ≥ R],  E_in = 0  [r < R]",
      variables: [
        { symbol: "E_out", meaning: "Electric field outside spherical shell of radius R", unit: "N/C" },
        { symbol: "E_in", meaning: "Electric field at any internal point", unit: "N/C" },
        { symbol: "Q", meaning: "Total charge on the shell", unit: "C" },
        { symbol: "R", meaning: "Radius of the spherical shell", unit: "m" },
        { symbol: "r", meaning: "Distance from the center of the shell", unit: "m" }
      ],
      whenToApply: "Uniformly charged hollow conducting sphere or thin spherical shell. Zero internal field is basis for electrostatic shielding.",
      trap: "Electric field strictly drops to ZERO everywhere inside (r < R), but electrostatic potential inside is constant and non-zero: V_in = V_surface = kQ/R!",
      category: "Gauss Law"
    },
    {
      title: "Potential Energy of Electric Dipole in Uniform Field",
      equation: "U = - p · E = - p · E · cos(θ)",
      variables: [
        { symbol: "U", meaning: "Potential energy of the dipole", unit: "J (Joules)" },
        { symbol: "p", meaning: "Electric dipole moment", unit: "C·m" },
        { symbol: "E", meaning: "Uniform electric field", unit: "N/C" },
        { symbol: "θ", meaning: "Angle between dipole moment p and electric field E", unit: "degrees or radians" }
      ],
      whenToApply: "Energy of dipole rotated in uniform electric field. Work done rotating from θ₁ to θ₂ is W = pE(cosθ₁ - cosθ₂).",
      trap: "Stable equilibrium occurs at θ = 0° (U = -pE, minimum). Unstable equilibrium occurs at θ = 180° (U = +pE, maximum)!",
      category: "Dipole Dynamics"
    },
    {
      title: "Quantization of Electric Charge",
      equation: "q = ± n · e",
      variables: [
        { symbol: "q", meaning: "Net electric charge on body", unit: "C (Coulomb)" },
        { symbol: "n", meaning: "Integer number of transferred electrons (1, 2, 3...)", unit: "dimensionless" },
        { symbol: "e", meaning: "Elementary charge = 1.602 × 10⁻¹⁹", unit: "C" }
      ],
      whenToApply: "Any macroscopic or microscopic transfer of electrons between bodies.",
      trap: "At macroscopic levels involving microcoulombs, quantization can be treated as continuous because e is extraordinarily small.",
      category: "Electrostatics"
    }
  ],

  // PHYSICS CHAPTER 9: Ray Optics and Optical Instruments
  'Ray Optics and Optical Instruments': [
    {
      title: "Refraction at Spherical Surface",
      equation: "(μ₂ / v) - (μ₁ / u) = (μ₂ - μ₁) / R",
      variables: [
        { symbol: "μ₁", meaning: "Refractive index of medium containing object", unit: "dimensionless" },
        { symbol: "μ₂", meaning: "Refractive index of refracting medium", unit: "dimensionless" },
        { symbol: "u", meaning: "Object distance from pole (with sign)", unit: "m or cm" },
        { symbol: "v", meaning: "Image distance from pole (with sign)", unit: "m or cm" },
        { symbol: "R", meaning: "Radius of curvature of spherical surface (with sign)", unit: "m or cm" }
      ],
      whenToApply: "Refraction of paraxial rays at a single spherical boundary of radius R separating two media.",
      trap: "Always substitute Cartesian signs: u is negative for real object, R is positive for convex toward rarer medium!",
      category: "Spherical Refraction"
    },
    {
      title: "Lens Maker's Formula",
      equation: "1/f = (μ₂/μ₁ - 1) · [ (1/R₁) - (1/R₂) ]",
      variables: [
        { symbol: "f", meaning: "Focal length of the thin lens", unit: "m or cm" },
        { symbol: "μ₂", meaning: "Refractive index of lens glass material", unit: "dimensionless" },
        { symbol: "μ₁", meaning: "Refractive index of surrounding medium (μ₁ = 1 for air)", unit: "dimensionless" },
        { symbol: "R₁", meaning: "Radius of curvature of first refracting surface", unit: "m or cm" },
        { symbol: "R₂", meaning: "Radius of curvature of second refracting surface", unit: "m or cm" }
      ],
      whenToApply: "Designing thin lenses with two spherical refracting faces in any medium. For equiconvex lens in air: R₁ = +R, R₂ = -R => 1/f = (μ - 1)(2/R).",
      trap: "For a convex lens, R₁ is POSITIVE and R₂ is NEGATIVE! Never use positive signs for both surfaces.",
      category: "Lenses"
    },
    {
      title: "Thin Lens Formula & Magnification",
      equation: "(1/f) = (1/v) - (1/u)    &    m = v / u = h_i / h_o",
      variables: [
        { symbol: "f", meaning: "Focal length (+ for convex, - for concave)", unit: "cm or m" },
        { symbol: "v", meaning: "Image distance from optical center", unit: "cm or m" },
        { symbol: "u", meaning: "Object distance from optical center", unit: "cm or m" },
        { symbol: "m", meaning: "Linear magnification (- for real/inverted, + for virtual/erect)", unit: "dimensionless" }
      ],
      whenToApply: "For thin lenses where thickness is negligible compared to focal length.",
      trap: "Mirror formula has + (1/v + 1/u = 1/f), but Lens formula has - (1/v - 1/u = 1/f). Do not mix up the signs!",
      category: "Lenses"
    },
    {
      title: "Prism Formula (Refractive Index at Minimum Deviation)",
      equation: "μ = sin [ (A + D_m) / 2 ] / sin [ A / 2 ]",
      variables: [
        { symbol: "μ", meaning: "Refractive index of prism glass relative to air", unit: "dimensionless" },
        { symbol: "A", meaning: "Angle of triangular prism (apex angle, usually 60°)", unit: "degrees (°)" },
        { symbol: "D_m", meaning: "Angle of minimum deviation", unit: "degrees (°)" }
      ],
      whenToApply: "Valid strictly at Minimum Deviation condition where light ray passes symmetrically through prism (i = e and r₁ = r₂ = A/2).",
      trap: "For thin prism (A < 10°), formula simplifies to D_m = (μ - 1)·A. Do not use thin prism formula for standard 60° prisms!",
      category: "Prism"
    },
    {
      title: "Magnifying Power of Compound Microscope",
      equation: "m = (- L / f_o) · (1 + D / f_e)   [at D]    |    m = (- L / f_o) · (D / f_e)   [at ∞]",
      variables: [
        { symbol: "m", meaning: "Total angular magnifying power", unit: "dimensionless" },
        { symbol: "L", meaning: "Tube length (separation between objective and eyepiece)", unit: "cm" },
        { symbol: "f_o", meaning: "Focal length of objective lens (small)", unit: "cm" },
        { symbol: "f_e", meaning: "Focal length of eyepiece lens", unit: "cm" },
        { symbol: "D", meaning: "Least distance of distinct vision = 25 cm", unit: "cm" }
      ],
      whenToApply: "Use (1 + D/f_e) when final image is formed at near point D = 25 cm (maximum strain). Use (D/f_e) for normal adjustment (relaxed eye at infinity).",
      trap: "Minus sign indicates the final image is inverted with respect to the original object.",
      category: "Optical Instruments"
    },
    {
      title: "Astronomical Telescope Magnifying Power & Tube Length",
      equation: "m = - f_o / f_e   (at ∞, L = f_o + f_e)    |    m = (- f_o / f_e) · (1 + f_e / D)   (at D)",
      variables: [
        { symbol: "m", meaning: "Magnifying power of refracting telescope", unit: "dimensionless" },
        { symbol: "f_o", meaning: "Focal length of objective (large aperture & focal length)", unit: "cm or m" },
        { symbol: "f_e", meaning: "Focal length of eyepiece (small focal length)", unit: "cm" },
        { symbol: "L", meaning: "Length of telescope tube in normal adjustment = f_o + f_e", unit: "cm" }
      ],
      whenToApply: "Viewing celestial distant objects. Objective forms inverted real image at focus; eyepiece magnifies it.",
      trap: "In telescope, f_o > f_e (opposite of microscope where f_o is very small)!",
      category: "Optical Instruments"
    }
  ],

  // CHEMISTRY CHAPTER: Solutions
  'Solutions': [
    {
      title: "Raoult's Law for Volatile Liquids",
      equation: "P_total = P_A + P_B = P°_A · x_A + P°_B · x_B",
      variables: [
        { symbol: "P_total", meaning: "Total vapor pressure above binary solution", unit: "atm or mmHg or Pa" },
        { symbol: "P°_A, P°_B", meaning: "Vapor pressure of pure components A and B", unit: "atm or mmHg" },
        { symbol: "x_A, x_B", meaning: "Mole fractions of A and B in liquid phase (x_A + x_B = 1)", unit: "dimensionless" }
      ],
      whenToApply: "Binary ideal solutions of volatile liquids where solute-solvent interactions equal pure component interactions.",
      trap: "In vapor phase, mole fraction y_A = P_A / P_total. Do not confuse liquid mole fraction x_A with vapor mole fraction y_A!",
      category: "Colligative Properties"
    },
    {
      title: "Elevation in Boiling Point & van 't Hoff Factor",
      equation: "ΔT_b = i · K_b · m",
      variables: [
        { symbol: "ΔT_b", meaning: "Elevation in boiling point = T_b(solution) - T°_b(solvent)", unit: "K or °C" },
        { symbol: "i", meaning: "van 't Hoff factor (accounts for dissociation/association)", unit: "dimensionless" },
        { symbol: "K_b", meaning: "Molal boiling point elevation constant (ebullioscopic constant)", unit: "K·kg/mol" },
        { symbol: "m", meaning: "Molality = moles of solute / kg of solvent", unit: "mol/kg" }
      ],
      whenToApply: "Dilute solutions containing non-volatile solute. For non-electrolytes (glucose, urea), i = 1.",
      trap: "Molality uses MASS OF SOLVENT in kg, NOT mass of solution or volume!",
      category: "Colligative Properties"
    },
    {
      title: "Depression in Freezing Point",
      equation: "ΔT_f = i · K_f · m",
      variables: [
        { symbol: "ΔT_f", meaning: "Depression in freezing point = T°_f(solvent) - T_f(solution)", unit: "K or °C" },
        { symbol: "i", meaning: "van 't Hoff factor", unit: "dimensionless" },
        { symbol: "K_f", meaning: "Molal freezing point depression constant (cryoscopic constant)", unit: "K·kg/mol" },
        { symbol: "m", meaning: "Molality of solution", unit: "mol/kg" }
      ],
      whenToApply: "Dilute solutions. For NaCl, i ≈ 2; for CaCl₂, i ≈ 3; for dimerization of benzoic acid in benzene, i < 1.",
      trap: "Notice ΔT_f is T°_solvent - T_solution (pure solvent freezes at higher temperature than solution)!",
      category: "Colligative Properties"
    },
    {
      title: "Osmotic Pressure Formula",
      equation: "Π = i · C · R · T = i · (n_B / V) · R · T",
      variables: [
        { symbol: "Π", meaning: "Osmotic pressure across semi-permeable membrane", unit: "atm or Pa" },
        { symbol: "C", meaning: "Molar concentration of solution = n_B / V", unit: "mol/L or mol/m³" },
        { symbol: "R", meaning: "Universal gas constant = 0.0821 L·atm/(mol·K) or 8.314 J/(mol·K)", unit: "gas constant" },
        { symbol: "T", meaning: "Absolute temperature in Kelvin = °C + 273.15", unit: "K" }
      ],
      whenToApply: "Preferred method for determining molar masses of polymers and biomolecules (proteins) because Π is measurable at room temperature.",
      trap: "Temperature MUST always be converted to Kelvin! If using R = 0.0821, V must be in Liters and Π in atm.",
      category: "Colligative Properties"
    }
  ],

  // PHYSICAL EDUCATION: Management of Sporting Events
  'Management of Sporting Events': [
    {
      title: "Total Matches in Knock-Out Tournament",
      equation: "Total Matches (M) = N - 1",
      variables: [
        { symbol: "M", meaning: "Total number of matches required to declare champion", unit: "matches" },
        { symbol: "N", meaning: "Total number of participating teams", unit: "teams" }
      ],
      whenToApply: "Single elimination (Knock-out) tournament where each defeated team is eliminated immediately.",
      trap: "For 11 teams: M = 11 - 1 = 10 matches. If there is a match for 3rd place, add 1 extra match (M = N).",
      category: "Tournament Math"
    },
    {
      title: "Total Byes Calculation in Knock-Out Tournament",
      equation: "Total Byes (NB) = 2ⁿ - N",
      variables: [
        { symbol: "NB", meaning: "Total number of byes given in Round 1", unit: "byes" },
        { symbol: "2ⁿ", meaning: "Next immediate power of 2 greater than or equal to N (2, 4, 8, 16, 32, 64)", unit: "number" },
        { symbol: "N", meaning: "Total participating teams", unit: "teams" }
      ],
      whenToApply: "When total teams N is not an exact power of 2. For N = 11, next power of 2 is 16, so NB = 16 - 11 = 5 byes.",
      trap: "Byes advance teams directly to Round 2 without playing Round 1.",
      category: "Tournament Math"
    },
    {
      title: "Division of Teams and Byes into Halves",
      equation: "Teams Upper = (N + 1)/2, Lower = (N - 1)/2  |  Byes Upper = (NB - 1)/2, Lower = (NB + 1)/2",
      variables: [
        { symbol: "N", meaning: "Total teams (when N is odd)", unit: "teams" },
        { symbol: "NB", meaning: "Total byes (when NB is odd)", unit: "byes" }
      ],
      whenToApply: "For odd number of teams in knock-out tournament. Notice Upper Half has MORE teams (N+1)/2, but FEWER byes (NB-1)/2!",
      trap: "Opposite signs! Teams Upper = (N+1)/2, but Byes Upper = (NB-1)/2. Mixing this up loses 1 full mark!",
      category: "Tournament Math"
    }
  ]
};

/**
 * Intelligent formula retriever:
 * 1. Checks curated high-yield formula bank.
 * 2. If not found or custom, extracts formulas dynamically from sections and parses them into FormulaData.
 */
export const getFormulasForChapter = (
  chapterTitle: string,
  sections: { title: string; items: { type: string; text: string }[] }[]
): FormulaData[] => {
  const normTitle = chapterTitle.toLowerCase();

  for (const [key, formulas] of Object.entries(CHAPTER_FORMULA_VAULT)) {
    if (normTitle.includes(key.toLowerCase()) || key.toLowerCase().includes(normTitle)) {
      return formulas;
    }
  }

  // Dynamic extraction from notes content
  const extracted: FormulaData[] = [];

  sections.forEach(sec => {
    sec.items.forEach(item => {
      if (item.type === 'formula') {
        const lines = item.text.split('\n').map(l => l.trim()).filter(Boolean);
        if (lines.length === 0) return;

        let equation = lines[0]
          .replace(/^(\*\*|\*|#)*FORMULA:?(\*\*|\*|#)*/i, '')
          .replace(/^`+|`+$/g, '')
          .trim();

        // Extract Title if present
        let title = sec.title;
        const colonIdx = equation.indexOf(':');
        if (colonIdx > 0 && colonIdx < 35) {
          title = equation.substring(0, colonIdx).trim();
          equation = equation.substring(colonIdx + 1).trim();
        }

        const variables: { symbol: string; meaning: string; unit?: string }[] = [];
        let whenToApply = '';
        let trap = '';

        lines.slice(1).forEach(subLine => {
          if (subLine.toLowerCase().includes('when to apply') || subLine.toLowerCase().includes('condition')) {
            whenToApply = subLine.replace(/^[-*•]?\s*(when to apply|conditions?):?/i, '').trim();
          } else if (subLine.toLowerCase().includes('trap') || subLine.toLowerCase().includes('mistake') || subLine.toLowerCase().includes('caution')) {
            trap = subLine.replace(/^[-*•]?\s*(examiner trap|caution|common mistake|note):?/i, '').trim();
          } else if (subLine.includes('=') || subLine.includes(':')) {
            const cleanVar = subLine.replace(/^[-*•]\s*/, '');
            const parts = cleanVar.split(/=|:/);
            if (parts.length >= 2) {
              const sym = parts[0].trim();
              const rest = parts.slice(1).join('=').trim();
              let unit = '';
              const unitMatch = rest.match(/\(([^)]+)\)$/);
              if (unitMatch) {
                unit = unitMatch[1];
              }
              variables.push({
                symbol: sym,
                meaning: rest.replace(/\(([^)]+)\)$/, '').trim(),
                unit: unit || undefined
              });
            }
          }
        });

        extracted.push({
          title,
          equation,
          variables: variables.length > 0 ? variables : undefined,
          whenToApply: whenToApply || 'Direct formula substitution in standard CBSE Class 12 board numericals.',
          trap: trap || undefined,
          category: sec.title
        });
      }
    });
  });

  return extracted;
};
