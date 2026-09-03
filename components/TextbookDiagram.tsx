import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, CheckCircle2, AlertCircle } from 'lucide-react';

export type DiagramType =
  | 'prism_refraction'
  | 'lens_maker'
  | 'electric_dipole'
  | 'wheatstone_bridge'
  | 'youngs_double_slit'
  | 'cfse_octahedral'
  | 'knockout_fixture_11'
  | 'pn_junction';

interface TextbookDiagramProps {
  type: DiagramType;
  caption?: string;
  theme?: 'paper' | 'oxford' | 'dark';
}

export const TextbookDiagram: React.FC<TextbookDiagramProps> = ({ type, caption, theme = 'paper' }) => {
  const [zoom, setZoom] = useState(1);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.2, 1.8));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.2, 0.8));
  const handleResetZoom = () => setZoom(1);

  const isDark = theme === 'dark';
  const bgColor = isDark ? 'bg-slate-900 border-slate-700/80 text-slate-100' : 'bg-white/95 border-amber-200/80 text-slate-800 shadow-sm';
  const canvasBg = isDark ? '#0f172a' : '#fefcf8';
  const gridColor = isDark ? '#1e293b' : '#f1ede4';
  const primaryStroke = isDark ? '#38bdf8' : '#0284c7';
  const rayColor = isDark ? '#fbbf24' : '#d97706';
  const textColor = isDark ? '#f8fafc' : '#1e293b';
  const subTextColor = isDark ? '#94a3b8' : '#64748b';
  const normalStroke = isDark ? '#94a3b8' : '#64748b';

  return (
    <div className={`my-5 rounded-2xl border overflow-hidden ${bgColor}`}>
      {/* Header Bar */}
      <div className="px-4 py-2.5 bg-black/5 dark:bg-white/5 border-b border-inherit flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 font-bold tracking-tight">
          <span className="px-2 py-0.5 rounded-md bg-amber-600/15 text-amber-800 dark:text-amber-300 border border-amber-500/30 text-[10px] font-black uppercase tracking-wider">
            NCERT Standard Diagram
          </span>
          <span className="font-extrabold truncate text-xs">
            {caption || getDiagramDefaultTitle(type)}
          </span>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={handleZoomOut}
            title="Zoom Out"
            className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <span className="text-[10px] font-mono font-bold w-10 text-center">
            {Math.round(zoom * 100)}%
          </span>
          <button
            onClick={handleZoomIn}
            title="Zoom In"
            className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          {zoom !== 1 && (
            <button
              onClick={handleResetZoom}
              title="Reset Zoom"
              className="p-1 rounded hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* SVG Canvas Area */}
      <div className="p-3 sm:p-5 overflow-x-auto flex justify-center items-center select-none" style={{ backgroundColor: canvasBg }}>
        <div 
          style={{ transform: `scale(${zoom})`, transformOrigin: 'center center', transition: 'transform 0.15s ease' }}
          className="w-full max-w-[650px]"
        >
          {renderDiagramSVG(type, { primaryStroke, rayColor, textColor, subTextColor, normalStroke, isDark, gridColor })}
        </div>
      </div>

      {/* Key Exam Marking Rubric for this diagram */}
      <div className="px-4 py-2.5 bg-black/5 dark:bg-white/5 border-t border-inherit text-[11px] flex items-start gap-2">
        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
        <span className="font-semibold text-slate-600 dark:text-slate-300">
          {getDiagramExaminerCheck(type)}
        </span>
      </div>
    </div>
  );
};

function getDiagramDefaultTitle(type: DiagramType): string {
  switch (type) {
    case 'prism_refraction':
      return 'Refraction of Light through Triangular Glass Prism (NCERT Fig 9.21)';
    case 'lens_maker':
      return "Lens Maker's Formula Derivation Geometry (NCERT Fig 9.17)";
    case 'electric_dipole':
      return 'Electric Dipole Field Lines & Axial/Equatorial Vectors (NCERT Fig 1.15)';
    case 'wheatstone_bridge':
      return 'Balanced Wheatstone Bridge Circuit (NCERT Fig 3.25)';
    case 'youngs_double_slit':
      return "Young's Double Slit Experiment Interference Geometry (NCERT Fig 10.12)";
    case 'cfse_octahedral':
      return 'Crystal Field d-Orbital Splitting in Octahedral Field (NCERT Fig 9.3)';
    case 'knockout_fixture_11':
      return 'Class 12 CBSE Standard Knock-Out Fixture for 11 Teams (10 Matches, 5 Byes)';
    case 'pn_junction':
      return 'P-N Junction Diode Depletion Region & Barrier Potential (NCERT Fig 14.11)';
  }
}

function getDiagramExaminerCheck(type: DiagramType): string {
  switch (type) {
    case 'prism_refraction':
      return 'CBSE Step-Mark: +0.5 for ray arrows (PQ, QR, RS), +0.5 for dashed normal lines intersecting at N, +0.5 for angle of deviation (δ) between incident and emergent rays.';
    case 'lens_maker':
      return 'CBSE Step-Mark: +1 Mark for drawing two separate spherical surfaces with radii R₁ & R₂ and showing intermediate virtual image I₁ acting as object for surface 2.';
    case 'electric_dipole':
      return 'CBSE Step-Mark: +0.5 for dipole vector p pointing from -q to +q; +1 Mark for resolving equatorial components (sinθ cancels, cosθ adds).';
    case 'wheatstone_bridge':
      return 'CBSE Step-Mark: +1 Mark for four balanced arms P, Q, R, S with galvanometer in branch BD. At Ig = 0, VB = VD.';
    case 'youngs_double_slit':
      return 'CBSE Step-Mark: +1 Mark for path difference Δx = S₂P - S₁P = d·sinθ ≈ y·d/D leading to constructive condition nλ.';
    case 'cfse_octahedral':
      return 'CBSE Step-Mark: +1 Mark for lower triply degenerate t_2g (-0.4 Δ_o) and upper doubly degenerate e_g (+0.6 Δ_o) with clear Barycentre line.';
    case 'knockout_fixture_11':
      return 'CBSE Step-Mark: +1 Mark for 11 teams divided into Upper (6) and Lower (5); +1 Mark for 5 byes in sequential order (11, 1, 7, 6, 10); +1 Mark for 10 matches across 4 rounds.';
    case 'pn_junction':
      return 'CBSE Step-Mark: +1 Mark for immobile negative ions on P-side, positive ions on N-side, and electric field directed from N to P.';
  }
}

interface SVGContext {
  primaryStroke: string;
  rayColor: string;
  textColor: string;
  subTextColor: string;
  normalStroke: string;
  isDark: boolean;
  gridColor: string;
}

function renderDiagramSVG(type: DiagramType, ctx: SVGContext) {
  switch (type) {
    case 'prism_refraction':
      return renderPrismRefractionSVG(ctx);
    case 'lens_maker':
      return renderLensMakerSVG(ctx);
    case 'electric_dipole':
      return renderElectricDipoleSVG(ctx);
    case 'wheatstone_bridge':
      return renderWheatstoneBridgeSVG(ctx);
    case 'youngs_double_slit':
      return renderYDSSVG(ctx);
    case 'cfse_octahedral':
      return renderCFSESVG(ctx);
    case 'knockout_fixture_11':
      return renderKnockoutFixtureSVG(ctx);
    case 'pn_junction':
      return renderPNJunctionSVG(ctx);
  }
}

// 1. Refraction through Prism
function renderPrismRefractionSVG(ctx: SVGContext) {
  return (
    <svg viewBox="0 0 600 380" className="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="ray-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill={ctx.rayColor} />
        </marker>
        <marker id="arrow-blue" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill={ctx.primaryStroke} />
        </marker>
      </defs>

      {/* Triangular Prism */}
      <polygon 
        points="300,50 140,320 460,320" 
        fill={ctx.isDark ? '#1e293b' : '#f0f9ff'} 
        stroke={ctx.primaryStroke} 
        strokeWidth="3" 
        strokeLinejoin="round" 
      />

      {/* Apex Angle A */}
      <path d="M 280,85 A 25 25 0 0 1 320,85" fill="none" stroke={ctx.textColor} strokeWidth="1.5" />
      <text x="300" y="80" textAnchor="middle" fill={ctx.textColor} fontSize="14" fontWeight="bold">A</text>

      {/* Vertices */}
      <text x="300" y="40" textAnchor="middle" fill={ctx.textColor} fontSize="15" fontWeight="black">A</text>
      <text x="125" y="335" textAnchor="middle" fill={ctx.textColor} fontSize="15" fontWeight="black">B</text>
      <text x="475" y="335" textAnchor="middle" fill={ctx.textColor} fontSize="15" fontWeight="black">C</text>

      {/* Normals */}
      {/* Normal 1 at Q(230, 168): line perp to AB (slope of AB is (320-50)/(140-300) = 270/-160 = -1.6875 -> normal slope = +160/270 = 0.59) */}
      <line x1="145" y1="118" x2="310" y2="216" stroke={ctx.normalStroke} strokeWidth="1.5" strokeDasharray="4 4" />
      <text x="135" y="115" fill={ctx.subTextColor} fontSize="11" fontWeight="bold">N₁</text>

      {/* Normal 2 at R(370, 168): line perp to AC (slope of AC is (320-50)/(460-300) = 270/160 = +1.6875 -> normal slope = -0.59) */}
      <line x1="455" y1="118" x2="290" y2="216" stroke={ctx.normalStroke} strokeWidth="1.5" strokeDasharray="4 4" />
      <text x="465" y="115" fill={ctx.subTextColor} fontSize="11" fontWeight="bold">N₂</text>
      <text x="300" y="235" textAnchor="middle" fill={ctx.subTextColor} fontSize="12" fontWeight="bold">N</text>

      {/* Incident Ray: P(60, 240) -> Q(230, 168) */}
      <line x1="60" y1="240" x2="155" y2="200" stroke={ctx.rayColor} strokeWidth="2.5" markerEnd="url(#ray-arrow)" />
      <line x1="150" y1="202" x2="230" y2="168" stroke={ctx.rayColor} strokeWidth="2.5" />
      <text x="50" y="250" fill={ctx.textColor} fontSize="13" fontWeight="black">P</text>
      <text x="215" y="160" fill={ctx.textColor} fontSize="13" fontWeight="black">Q</text>

      {/* Refracted Ray inside prism: Q(230, 168) -> R(370, 168) */}
      <line x1="230" y1="168" x2="310" y2="168" stroke={ctx.rayColor} strokeWidth="2.5" markerEnd="url(#ray-arrow)" />
      <line x1="305" y1="168" x2="370" y2="168" stroke={ctx.rayColor} strokeWidth="2.5" />
      <text x="385" y="160" fill={ctx.textColor} fontSize="13" fontWeight="black">R</text>

      {/* Emergent Ray: R(370, 168) -> S(530, 240) */}
      <line x1="370" y1="168" x2="460" y2="209" stroke={ctx.rayColor} strokeWidth="2.5" markerEnd="url(#ray-arrow)" />
      <line x1="455" y1="206" x2="530" y2="240" stroke={ctx.rayColor} strokeWidth="2.5" />
      <text x="545" y="250" fill={ctx.textColor} fontSize="13" fontWeight="black">S</text>

      {/* Virtual Extension of Incident Ray (dotted) */}
      <line x1="230" y1="168" x2="400" y2="96" stroke={ctx.rayColor} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.75" />

      {/* Virtual Extension of Emergent Ray backwards (dotted) */}
      <line x1="370" y1="168" x2="320" y2="130" stroke={ctx.rayColor} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.75" />
      <circle cx="343" cy="120" r="3" fill={ctx.textColor} />
      <text x="340" y="112" textAnchor="middle" fill={ctx.textColor} fontSize="12" fontWeight="bold">M</text>

      {/* Angle of Deviation δ at M */}
      <path d="M 370,109 A 20 20 0 0 1 362,126" fill="none" stroke="#ef4444" strokeWidth="2" />
      <text x="382" y="125" fill="#ef4444" fontSize="14" fontWeight="black">δ</text>

      {/* Angle of Incidence i */}
      <path d="M 185,142 A 30 30 0 0 1 180,189" fill="none" stroke={ctx.textColor} strokeWidth="1.5" />
      <text x="170" y="172" fill={ctx.textColor} fontSize="13" fontWeight="bold">i</text>

      {/* Angle r₁ */}
      <path d="M 252,168 A 22 22 0 0 1 247,178" fill="none" stroke={ctx.textColor} strokeWidth="1.5" />
      <text x="254" y="186" fill={ctx.textColor} fontSize="12" fontWeight="bold">r₁</text>

      {/* Angle r₂ */}
      <path d="M 347,178 A 22 22 0 0 1 352,168" fill="none" stroke={ctx.textColor} strokeWidth="1.5" />
      <text x="340" y="186" fill={ctx.textColor} fontSize="12" fontWeight="bold">r₂</text>

      {/* Angle of Emergence e */}
      <path d="M 420,189 A 30 30 0 0 1 415,142" fill="none" stroke={ctx.textColor} strokeWidth="1.5" />
      <text x="428" y="172" fill={ctx.textColor} fontSize="13" fontWeight="bold">e</text>

      {/* Summary Formula Callout Box */}
      <rect x="90" y="340" width="420" height="30" rx="8" fill={ctx.isDark ? '#334155' : '#fef3c7'} stroke={ctx.isDark ? '#475569' : '#f59e0b'} strokeWidth="1" />
      <text x="300" y="360" textAnchor="middle" fill={ctx.textColor} fontSize="11" fontWeight="bold">
        Governing Law: A + δ = i + e &bull; At Minimum Deviation (D_m): μ = sin[(A + D_m)/2] / sin(A/2)
      </text>
    </svg>
  );
}

// 2. Lens Maker's Formula
function renderLensMakerSVG(ctx: SVGContext) {
  return (
    <svg viewBox="0 0 620 300" className="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="lens-ray" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill={ctx.rayColor} />
        </marker>
      </defs>

      {/* Principal Axis */}
      <line x1="20" y1="150" x2="600" y2="150" stroke={ctx.subTextColor} strokeWidth="1.5" strokeDasharray="6 4" />
      <text x="590" y="142" fill={ctx.subTextColor} fontSize="11" fontWeight="bold">Axis</text>

      {/* Double Convex Lens */}
      <path 
        d="M 300,50 Q 325,150 300,250 Q 275,150 300,50 Z" 
        fill={ctx.isDark ? '#1e293b' : '#e0f2fe'} 
        stroke={ctx.primaryStroke} 
        strokeWidth="2.5" 
      />
      <text x="300" y="40" textAnchor="middle" fill={ctx.primaryStroke} fontSize="13" fontWeight="black">Thin Lens (Index μ₂ in μ₁)</text>
      <text x="300" y="165" textAnchor="middle" fill={ctx.textColor} fontSize="12" fontWeight="bold">P</text>

      {/* Radii Annotations */}
      <text x="250" y="70" fill={ctx.subTextColor} fontSize="11" fontWeight="bold">Surface 1 (R₁)</text>
      <text x="330" y="70" fill={ctx.subTextColor} fontSize="11" fontWeight="bold">Surface 2 (R₂)</text>

      {/* Point Object O */}
      <circle cx="90" cy="150" r="4" fill={ctx.textColor} />
      <text x="90" y="172" textAnchor="middle" fill={ctx.textColor} fontSize="13" fontWeight="black">O</text>

      {/* Center of Curvatures */}
      <circle cx="430" cy="150" r="3" fill={ctx.subTextColor} />
      <text x="430" y="172" textAnchor="middle" fill={ctx.subTextColor} fontSize="12" fontWeight="bold">C₁</text>

      {/* Real Final Image I */}
      <circle cx="510" cy="150" r="4" fill="#10b981" />
      <text x="510" y="172" textAnchor="middle" fill="#10b981" fontSize="13" fontWeight="black">I</text>

      {/* Intermediate Virtual Image I₁ */}
      <circle cx="565" cy="150" r="3" fill="#f59e0b" strokeDasharray="2 2" />
      <text x="565" y="172" textAnchor="middle" fill="#f59e0b" fontSize="12" fontWeight="bold">I₁ (Virtual)</text>

      {/* Ray from O to Lens */}
      <line x1="90" y1="150" x2="200" y2="128" stroke={ctx.rayColor} strokeWidth="2" markerEnd="url(#lens-ray)" />
      <line x1="195" y1="129" x2="295" y2="110" stroke={ctx.rayColor} strokeWidth="2" />

      {/* Refraction 1 towards I₁ */}
      <line x1="300" y1="110" x2="565" y2="150" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.75" />

      {/* Refraction 2 converging to Final Image I */}
      <line x1="300" y1="110" x2="410" y2="129" stroke={ctx.rayColor} strokeWidth="2" markerEnd="url(#lens-ray)" />
      <line x1="405" y1="128" x2="510" y2="150" stroke={ctx.rayColor} strokeWidth="2" />

      {/* Normal 1 from C₁ to lens point */}
      <line x1="430" y1="150" x2="295" y2="110" stroke={ctx.normalStroke} strokeWidth="1" strokeDasharray="3 3" />
      <text x="350" y="125" fill={ctx.subTextColor} fontSize="10">N₁</text>

      {/* Dimension brackets */}
      <line x1="90" y1="210" x2="300" y2="210" stroke={ctx.textColor} strokeWidth="1" />
      <text x="195" y="205" textAnchor="middle" fill={ctx.textColor} fontSize="11" fontWeight="bold">Object distance ( -u )</text>

      <line x1="300" y1="210" x2="510" y2="210" stroke={ctx.textColor} strokeWidth="1" />
      <text x="405" y="205" textAnchor="middle" fill={ctx.textColor} fontSize="11" fontWeight="bold">Image distance ( +v )</text>

      {/* Formula Footer */}
      <rect x="70" y="255" width="480" height="32" rx="8" fill={ctx.isDark ? '#334155' : '#f0fdf4'} stroke={ctx.isDark ? '#475569' : '#86efac'} strokeWidth="1" />
      <text x="310" y="275" textAnchor="middle" fill={ctx.textColor} fontSize="11" fontWeight="bold">
        Lens Maker's Formula: 1/f = (μ₂/μ₁ - 1) [ 1/R₁ - 1/R₂ ] &bull; Thin Lens: 1/v - 1/u = 1/f
      </text>
    </svg>
  );
}

// 3. Electric Dipole
function renderElectricDipoleSVG(ctx: SVGContext) {
  return (
    <svg viewBox="0 0 600 320" className="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="dipole-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#3b82f6" />
        </marker>
        <marker id="red-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#ef4444" />
        </marker>
      </defs>

      {/* Axis */}
      <line x1="40" y1="220" x2="560" y2="220" stroke={ctx.subTextColor} strokeWidth="1.5" strokeDasharray="4 4" />

      {/* Center O */}
      <circle cx="200" cy="220" r="3" fill={ctx.textColor} />
      <text x="200" y="240" textAnchor="middle" fill={ctx.textColor} fontSize="12" fontWeight="bold">O (Center)</text>

      {/* Charge -q at (140, 220) */}
      <circle cx="140" cy="220" r="16" fill="#ef4444" />
      <text x="140" y="225" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="black">-q</text>

      {/* Charge +q at (260, 220) */}
      <circle cx="260" cy="220" r="16" fill="#3b82f6" />
      <text x="260" y="225" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="black">+q</text>

      {/* Dipole Moment vector p (-q to +q) */}
      <line x1="160" y1="190" x2="245" y2="190" stroke="#3b82f6" strokeWidth="3" markerEnd="url(#dipole-arrow)" />
      <text x="200" y="180" textAnchor="middle" fill="#3b82f6" fontSize="13" fontWeight="black">p = 2qa (Vector)</text>

      {/* Separation 2a bracket */}
      <line x1="140" y1="255" x2="260" y2="255" stroke={ctx.textColor} strokeWidth="1.5" />
      <line x1="140" y1="250" x2="140" y2="260" stroke={ctx.textColor} strokeWidth="1.5" />
      <line x1="260" y1="250" x2="260" y2="260" stroke={ctx.textColor} strokeWidth="1.5" />
      <text x="200" y="270" textAnchor="middle" fill={ctx.textColor} fontSize="11" fontWeight="bold">2a</text>

      {/* Axial Point P */}
      <circle cx="480" cy="220" r="4" fill={ctx.textColor} />
      <text x="480" y="245" textAnchor="middle" fill={ctx.textColor} fontSize="13" fontWeight="black">P (Axial)</text>
      <line x1="480" y1="220" x2="550" y2="220" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#dipole-arrow)" />
      <text x="520" y="210" fill="#3b82f6" fontSize="11" fontWeight="bold">E_axial</text>

      {/* Distance r from Center O to P */}
      <line x1="200" y1="290" x2="480" y2="290" stroke={ctx.textColor} strokeWidth="1" />
      <text x="340" y="285" textAnchor="middle" fill={ctx.textColor} fontSize="11" fontWeight="bold">Distance r &gt;&gt; a</text>

      {/* Equatorial Point Q */}
      <circle cx="200" cy="70" r="4" fill={ctx.textColor} />
      <text x="180" y="65" textAnchor="middle" fill={ctx.textColor} fontSize="13" fontWeight="black">Q (Equatorial)</text>

      {/* Electric field vectors at Q */}
      {/* E+ away from +q */}
      <line x1="260" y1="220" x2="200" y2="70" stroke={ctx.subTextColor} strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="200" y1="70" x2="160" y2="30" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#dipole-arrow)" />
      <text x="145" y="45" fill="#3b82f6" fontSize="11" fontWeight="bold">E₊</text>

      {/* E- towards -q */}
      <line x1="140" y1="220" x2="200" y2="70" stroke={ctx.subTextColor} strokeWidth="1.5" strokeDasharray="3 3" />
      <line x1="200" y1="70" x2="160" y2="110" stroke="#ef4444" strokeWidth="2" markerEnd="url(#red-arrow)" />
      <text x="150" y="115" fill="#ef4444" fontSize="11" fontWeight="bold">E₋</text>

      {/* Resultant E_eq (opposite to p) */}
      <line x1="200" y1="70" x2="120" y2="70" stroke="#10b981" strokeWidth="2.5" markerEnd="url(#dipole-arrow)" />
      <text x="110" y="62" fill="#10b981" fontSize="12" fontWeight="black">E_eq</text>
      <text x="340" y="70" fill={ctx.subTextColor} fontSize="11" fontWeight="medium">Vertical components cancel; cosθ adds</text>
    </svg>
  );
}

// 4. Wheatstone Bridge
function renderWheatstoneBridgeSVG(ctx: SVGContext) {
  return (
    <svg viewBox="0 0 550 320" className="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      {/* Diamond Nodes: A(80, 160), B(275, 50), C(470, 160), D(275, 270) */}
      {/* Arm AB: Resistor P */}
      <line x1="80" y1="160" x2="160" y2="115" stroke={ctx.primaryStroke} strokeWidth="2.5" />
      <rect x="150" y="90" width="50" height="24" rx="4" fill={ctx.isDark ? '#1e293b' : '#fef3c7'} stroke={ctx.primaryStroke} strokeWidth="2" />
      <text x="175" y="106" textAnchor="middle" fill={ctx.textColor} fontSize="12" fontWeight="black">P</text>
      <line x1="195" y1="102" x2="275" y2="50" stroke={ctx.primaryStroke} strokeWidth="2.5" />

      {/* Arm BC: Resistor Q */}
      <line x1="275" y1="50" x2="355" y2="105" stroke={ctx.primaryStroke} strokeWidth="2.5" />
      <rect x="350" y="90" width="50" height="24" rx="4" fill={ctx.isDark ? '#1e293b' : '#fef3c7'} stroke={ctx.primaryStroke} strokeWidth="2" />
      <text x="375" y="106" textAnchor="middle" fill={ctx.textColor} fontSize="12" fontWeight="black">Q</text>
      <line x1="395" y1="115" x2="470" y2="160" stroke={ctx.primaryStroke} strokeWidth="2.5" />

      {/* Arm AD: Resistor R */}
      <line x1="80" y1="160" x2="160" y2="205" stroke={ctx.primaryStroke} strokeWidth="2.5" />
      <rect x="150" y="200" width="50" height="24" rx="4" fill={ctx.isDark ? '#1e293b' : '#fef3c7'} stroke={ctx.primaryStroke} strokeWidth="2" />
      <text x="175" y="216" textAnchor="middle" fill={ctx.textColor} fontSize="12" fontWeight="black">R</text>
      <line x1="195" y1="212" x2="275" y2="270" stroke={ctx.primaryStroke} strokeWidth="2.5" />

      {/* Arm DC: Resistor S */}
      <line x1="275" y1="270" x2="355" y2="215" stroke={ctx.primaryStroke} strokeWidth="2.5" />
      <rect x="350" y="200" width="50" height="24" rx="4" fill={ctx.isDark ? '#1e293b' : '#fef3c7'} stroke={ctx.primaryStroke} strokeWidth="2" />
      <text x="375" y="216" textAnchor="middle" fill={ctx.textColor} fontSize="12" fontWeight="black">S</text>
      <line x1="395" y1="205" x2="470" y2="160" stroke={ctx.primaryStroke} strokeWidth="2.5" />

      {/* Galvanometer Arm BD */}
      <line x1="275" y1="50" x2="275" y2="135" stroke={ctx.rayColor} strokeWidth="2" />
      <circle cx="275" cy="160" r="25" fill={ctx.isDark ? '#0f172a' : '#ffffff'} stroke={ctx.rayColor} strokeWidth="2" />
      <text x="275" y="167" textAnchor="middle" fill={ctx.rayColor} fontSize="18" fontWeight="black">G</text>
      <line x1="275" y1="185" x2="275" y2="270" stroke={ctx.rayColor} strokeWidth="2" />

      {/* Corner Nodes */}
      <circle cx="80" cy="160" r="6" fill={ctx.textColor} />
      <text x="60" y="165" fill={ctx.textColor} fontSize="14" fontWeight="black">A</text>

      <circle cx="275" cy="50" r="6" fill={ctx.textColor} />
      <text x="275" y="35" textAnchor="middle" fill={ctx.textColor} fontSize="14" fontWeight="black">B (V_B)</text>

      <circle cx="470" cy="160" r="6" fill={ctx.textColor} />
      <text x="490" y="165" fill={ctx.textColor} fontSize="14" fontWeight="black">C</text>

      <circle cx="275" cy="270" r="6" fill={ctx.textColor} />
      <text x="275" y="295" textAnchor="middle" fill={ctx.textColor} fontSize="14" fontWeight="black">D (V_D)</text>

      {/* Callout Rule */}
      <rect x="120" y="295" width="310" height="24" rx="6" fill={ctx.isDark ? '#334155' : '#e0f2fe'} />
      <text x="275" y="311" textAnchor="middle" fill={ctx.textColor} fontSize="11" fontWeight="black">
        Balanced Condition (I_G = 0 &bull; V_B = V_D) &rArr; P / Q = R / S
      </text>
    </svg>
  );
}

// 5. Young's Double Slit Experiment
function renderYDSSVG(ctx: SVGContext) {
  return (
    <svg viewBox="0 0 600 300" className="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="yds-arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill={ctx.rayColor} />
        </marker>
      </defs>

      {/* Slit Screen plane at x=140 */}
      <line x1="140" y1="30" x2="140" y2="110" stroke={ctx.textColor} strokeWidth="4" />
      <line x1="140" y1="130" x2="140" y2="170" stroke={ctx.textColor} strokeWidth="4" />
      <line x1="140" y1="190" x2="140" y2="270" stroke={ctx.textColor} strokeWidth="4" />

      {/* Slits S₁ and S₂ */}
      <text x="110" y="125" fill={ctx.textColor} fontSize="13" fontWeight="black">S₁</text>
      <text x="110" y="185" fill={ctx.textColor} fontSize="13" fontWeight="black">S₂</text>

      {/* Slit separation d */}
      <line x1="125" y1="120" x2="125" y2="180" stroke={ctx.primaryStroke} strokeWidth="1.5" />
      <text x="100" y="155" fill={ctx.primaryStroke} fontSize="12" fontWeight="bold">d</text>

      {/* Observation Screen at x=480 */}
      <line x1="480" y1="20" x2="480" y2="280" stroke={ctx.textColor} strokeWidth="4" />
      <text x="495" y="40" fill={ctx.textColor} fontSize="12" fontWeight="bold">Screen</text>

      {/* Central Axis */}
      <line x1="140" y1="150" x2="480" y2="150" stroke={ctx.subTextColor} strokeWidth="1" strokeDasharray="5 5" />
      <circle cx="480" cy="150" r="4" fill={ctx.textColor} />
      <text x="500" y="155" fill={ctx.textColor} fontSize="12" fontWeight="black">O (Central Bright)</text>

      {/* Point P on screen */}
      <circle cx="480" cy="80" r="4" fill="#ef4444" />
      <text x="500" y="85" fill="#ef4444" fontSize="13" fontWeight="black">P (Fringe)</text>

      {/* Distance y */}
      <line x1="465" y1="150" x2="465" y2="80" stroke="#ef4444" strokeWidth="1.5" />
      <text x="450" y="120" fill="#ef4444" fontSize="12" fontWeight="black">y</text>

      {/* Rays S₁P and S₂P */}
      <line x1="140" y1="120" x2="480" y2="80" stroke={ctx.rayColor} strokeWidth="2" markerEnd="url(#yds-arrow)" />
      <line x1="140" y1="180" x2="480" y2="80" stroke={ctx.rayColor} strokeWidth="2" markerEnd="url(#yds-arrow)" />

      {/* Perpendicular S₁N for path difference */}
      <line x1="140" y1="120" x2="175" y2="175" stroke={ctx.normalStroke} strokeWidth="1.5" strokeDasharray="3 3" />
      <text x="180" y="195" fill={ctx.textColor} fontSize="11" fontWeight="bold">N</text>
      <text x="145" y="215" fill="#ef4444" fontSize="11" fontWeight="bold">&Delta;x = S₂N = d&middot;sin&theta;</text>

      {/* Distance D */}
      <line x1="140" y1="285" x2="480" y2="285" stroke={ctx.textColor} strokeWidth="1" />
      <text x="310" y="280" textAnchor="middle" fill={ctx.textColor} fontSize="12" fontWeight="bold">Distance D &gt;&gt; d</text>
    </svg>
  );
}

// 6. Crystal Field Splitting in Octahedral (CFSE)
function renderCFSESVG(ctx: SVGContext) {
  return (
    <svg viewBox="0 0 600 320" className="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      {/* Energy Axis */}
      <line x1="50" y1="290" x2="50" y2="40" stroke={ctx.textColor} strokeWidth="2" />
      <polygon points="50,30 45,45 55,45" fill={ctx.textColor} />
      <text x="40" y="25" textAnchor="middle" fill={ctx.textColor} fontSize="12" fontWeight="black">Energy</text>

      {/* 1. Free Metal Ion (5 degenerate d-orbitals at y=200) */}
      <text x="120" y="260" textAnchor="middle" fill={ctx.subTextColor} fontSize="11" fontWeight="bold">Free Metal Ion</text>
      {[0, 1, 2, 3, 4].map(i => (
        <rect key={i} x={80 + i * 16} y="190" width="14" height="20" fill={ctx.isDark ? '#1e293b' : '#f1f5f9'} stroke={ctx.primaryStroke} strokeWidth="1.5" />
      ))}
      <text x="120" y="180" textAnchor="middle" fill={ctx.textColor} fontSize="11" fontWeight="bold">Degenerate 3d</text>

      {/* 2. Spherical Field (Barycenter at y=170) */}
      <line x1="170" y1="170" x2="520" y2="170" stroke={ctx.subTextColor} strokeWidth="1.5" strokeDasharray="4 4" />
      <text x="270" y="260" textAnchor="middle" fill={ctx.subTextColor} fontSize="11" fontWeight="bold">Spherical Field</text>
      {[0, 1, 2, 3, 4].map(i => (
        <rect key={i} x={230 + i * 16} y="160" width="14" height="20" fill={ctx.isDark ? '#1e293b' : '#f1f5f9'} stroke={ctx.primaryStroke} strokeWidth="1.5" />
      ))}
      <text x="270" y="150" textAnchor="middle" fill={ctx.textColor} fontSize="11" fontWeight="bold">Barycentre</text>

      {/* Splitting in Octahedral: upper e_g (2 orbitals at y=100) and lower t_2g (3 orbitals at y=220) */}
      {/* Upper e_g set (+0.6 Δ_o) */}
      <rect x="420" y="90" width="18" height="24" fill={ctx.isDark ? '#3b0764' : '#fae8ff'} stroke="#a855f7" strokeWidth="2" />
      <rect x="445" y="90" width="18" height="24" fill={ctx.isDark ? '#3b0764' : '#fae8ff'} stroke="#a855f7" strokeWidth="2" />
      <text x="442" y="80" textAnchor="middle" fill="#a855f7" fontSize="13" fontWeight="black">e_g (d_x²-y², d_z²)</text>
      <text x="495" y="105" fill="#a855f7" fontSize="11" fontWeight="bold">+ 0.6 &Delta;_o (or +3/5 &Delta;_o)</text>

      {/* Lower t_2g set (-0.4 Δ_o) */}
      <rect x="410" y="210" width="18" height="24" fill={ctx.isDark ? '#1e3a8a' : '#dbeafe'} stroke="#3b82f6" strokeWidth="2" />
      <rect x="435" y="210" width="18" height="24" fill={ctx.isDark ? '#1e3a8a' : '#dbeafe'} stroke="#3b82f6" strokeWidth="2" />
      <rect x="460" y="210" width="18" height="24" fill={ctx.isDark ? '#1e3a8a' : '#dbeafe'} stroke="#3b82f6" strokeWidth="2" />
      <text x="442" y="250" textAnchor="middle" fill="#3b82f6" fontSize="13" fontWeight="black">t_2g (d_xy, d_yz, d_zx)</text>
      <text x="505" y="225" fill="#3b82f6" fontSize="11" fontWeight="bold">- 0.4 &Delta;_o (or -2/5 &Delta;_o)</text>

      {/* Total Splitting Arrow Δ_o */}
      <line x1="380" y1="102" x2="380" y2="222" stroke="#ef4444" strokeWidth="2" />
      <polygon points="380,95 375,108 385,108" fill="#ef4444" />
      <polygon points="380,229 375,216 385,216" fill="#ef4444" />
      <text x="365" y="165" textAnchor="middle" fill="#ef4444" fontSize="14" fontWeight="black">&Delta;_o</text>

      {/* Connectors */}
      <line x1="310" y1="165" x2="415" y2="105" stroke={ctx.subTextColor} strokeWidth="1" strokeDasharray="3 3" />
      <line x1="310" y1="175" x2="410" y2="215" stroke={ctx.subTextColor} strokeWidth="1" strokeDasharray="3 3" />

      {/* Footnote on d⁴ Configuration */}
      <rect x="100" y="280" width="450" height="28" rx="6" fill={ctx.isDark ? '#334155' : '#fef3c7'} />
      <text x="325" y="298" textAnchor="middle" fill={ctx.textColor} fontSize="11" fontWeight="bold">
        d⁴ Ions: If &Delta;_o &gt; P (Strong ligand) &rArr; t_2g⁴ e_g⁰ (Low spin) | If &Delta;_o &lt; P (Weak ligand) &rArr; t_2g³ e_g¹ (High spin)
      </text>
    </svg>
  );
}

// 7. Knockout Tournament Fixture Chart for 11 Teams
function renderKnockoutFixtureSVG(ctx: SVGContext) {
  return (
    <svg viewBox="0 0 680 430" className="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      {/* Header Rounds */}
      <rect x="20" y="10" width="640" height="30" rx="6" fill={ctx.isDark ? '#1e293b' : '#f8fafc'} stroke={ctx.subTextColor} strokeWidth="1" />
      <text x="90" y="30" textAnchor="middle" fill={ctx.textColor} fontSize="11" fontWeight="black">Teams & Byes</text>
      <text x="230" y="30" textAnchor="middle" fill={ctx.textColor} fontSize="11" fontWeight="black">Round 1</text>
      <text x="350" y="30" textAnchor="middle" fill={ctx.textColor} fontSize="11" fontWeight="black">Round 2 (Quarters)</text>
      <text x="470" y="30" textAnchor="middle" fill={ctx.textColor} fontSize="11" fontWeight="black">Round 3 (Semis)</text>
      <text x="590" y="30" textAnchor="middle" fill="#d97706" fontSize="11" fontWeight="black">Round 4 (Final)</text>

      {/* Dividing Line between Upper and Lower Half */}
      <line x1="20" y1="230" x2="660" y2="230" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="6 4" />
      <text x="40" y="225" fill="#d97706" fontSize="10" fontWeight="black">UPPER HALF (6 TEAMS &bull; 2 BYES)</text>
      <text x="40" y="245" fill="#d97706" fontSize="10" fontWeight="black">LOWER HALF (5 TEAMS &bull; 3 BYES)</text>

      {/* 11 Teams Nodes */}
      {/* Team 1 (Bye 2) */}
      <text x="30" y="60" fill={ctx.textColor} fontSize="11" fontWeight="bold">1. Team 1</text>
      <rect x="90" y="48" width="50" height="18" rx="4" fill="#10b981" />
      <text x="115" y="61" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="black">Bye 2</text>
      <line x1="145" y1="57" x2="310" y2="57" stroke={ctx.textColor} strokeWidth="1.5" />

      {/* Team 2 */}
      <text x="30" y="90" fill={ctx.textColor} fontSize="11" fontWeight="bold">2. Team 2</text>
      <line x1="110" y1="87" x2="170" y2="87" stroke={ctx.textColor} strokeWidth="1.5" />

      {/* Team 3 */}
      <text x="30" y="120" fill={ctx.textColor} fontSize="11" fontWeight="bold">3. Team 3</text>
      <line x1="110" y1="117" x2="170" y2="117" stroke={ctx.textColor} strokeWidth="1.5" />

      {/* Match 1: 2 vs 3 */}
      <line x1="170" y1="87" x2="170" y2="117" stroke={ctx.primaryStroke} strokeWidth="2" />
      <line x1="170" y1="102" x2="230" y2="102" stroke={ctx.primaryStroke} strokeWidth="2" />
      <text x="200" y="96" textAnchor="middle" fill={ctx.primaryStroke} fontSize="9" fontWeight="bold">Match 1 &rarr; W1</text>
      <line x1="230" y1="102" x2="310" y2="102" stroke={ctx.primaryStroke} strokeWidth="1.5" />

      {/* Match 4: Team 1 vs W1 in Round 2 */}
      <line x1="310" y1="57" x2="310" y2="102" stroke="#6366f1" strokeWidth="2" />
      <line x1="310" y1="80" x2="430" y2="80" stroke="#6366f1" strokeWidth="2" />
      <text x="370" y="74" textAnchor="middle" fill="#6366f1" fontSize="9" fontWeight="bold">Match 4 &rarr; Winner</text>

      {/* Team 4 */}
      <text x="30" y="150" fill={ctx.textColor} fontSize="11" fontWeight="bold">4. Team 4</text>
      <line x1="110" y1="147" x2="170" y2="147" stroke={ctx.textColor} strokeWidth="1.5" />

      {/* Team 5 */}
      <text x="30" y="180" fill={ctx.textColor} fontSize="11" fontWeight="bold">5. Team 5</text>
      <line x1="110" y1="177" x2="170" y2="177" stroke={ctx.textColor} strokeWidth="1.5" />

      {/* Match 2: 4 vs 5 */}
      <line x1="170" y1="147" x2="170" y2="177" stroke={ctx.primaryStroke} strokeWidth="2" />
      <line x1="170" y1="162" x2="230" y2="162" stroke={ctx.primaryStroke} strokeWidth="2" />
      <text x="200" y="156" textAnchor="middle" fill={ctx.primaryStroke} fontSize="9" fontWeight="bold">Match 2 &rarr; W2</text>
      <line x1="230" y1="162" x2="310" y2="162" stroke={ctx.primaryStroke} strokeWidth="1.5" />

      {/* Team 6 (Bye 4) */}
      <text x="30" y="210" fill={ctx.textColor} fontSize="11" fontWeight="bold">6. Team 6</text>
      <rect x="90" y="198" width="50" height="18" rx="4" fill="#10b981" />
      <text x="115" y="211" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="black">Bye 4</text>
      <line x1="145" y1="207" x2="310" y2="207" stroke={ctx.textColor} strokeWidth="1.5" />

      {/* Match 5: W2 vs Team 6 */}
      <line x1="310" y1="162" x2="310" y2="207" stroke="#6366f1" strokeWidth="2" />
      <line x1="310" y1="185" x2="430" y2="185" stroke="#6366f1" strokeWidth="2" />
      <text x="370" y="179" textAnchor="middle" fill="#6366f1" fontSize="9" fontWeight="bold">Match 5 &rarr; Winner</text>

      {/* Semifinal 1 (Upper Half Winner) */}
      <line x1="430" y1="80" x2="430" y2="185" stroke="#ec4899" strokeWidth="2.5" />
      <line x1="430" y1="132" x2="550" y2="132" stroke="#ec4899" strokeWidth="2.5" />
      <text x="490" y="125" textAnchor="middle" fill="#ec4899" fontSize="10" fontWeight="black">Match 8 &rarr; FINALIST 1</text>

      {/* LOWER HALF */}
      {/* Team 7 (Bye 3) */}
      <text x="30" y="260" fill={ctx.textColor} fontSize="11" fontWeight="bold">7. Team 7</text>
      <rect x="90" y="248" width="50" height="18" rx="4" fill="#10b981" />
      <text x="115" y="261" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="black">Bye 3</text>
      <line x1="145" y1="257" x2="310" y2="257" stroke={ctx.textColor} strokeWidth="1.5" />

      {/* Team 8 */}
      <text x="30" y="290" fill={ctx.textColor} fontSize="11" fontWeight="bold">8. Team 8</text>
      <line x1="110" y1="287" x2="170" y2="287" stroke={ctx.textColor} strokeWidth="1.5" />

      {/* Team 9 */}
      <text x="30" y="320" fill={ctx.textColor} fontSize="11" fontWeight="bold">9. Team 9</text>
      <line x1="110" y1="317" x2="170" y2="317" stroke={ctx.textColor} strokeWidth="1.5" />

      {/* Match 3: 8 vs 9 */}
      <line x1="170" y1="287" x2="170" y2="317" stroke={ctx.primaryStroke} strokeWidth="2" />
      <line x1="170" y1="302" x2="230" y2="302" stroke={ctx.primaryStroke} strokeWidth="2" />
      <text x="200" y="296" textAnchor="middle" fill={ctx.primaryStroke} fontSize="9" fontWeight="bold">Match 3 &rarr; W3</text>
      <line x1="230" y1="302" x2="310" y2="302" stroke={ctx.primaryStroke} strokeWidth="1.5" />

      {/* Match 6: Team 7 vs W3 */}
      <line x1="310" y1="257" x2="310" y2="302" stroke="#6366f1" strokeWidth="2" />
      <line x1="310" y1="280" x2="430" y2="280" stroke="#6366f1" strokeWidth="2" />
      <text x="370" y="274" textAnchor="middle" fill="#6366f1" fontSize="9" fontWeight="bold">Match 6 &rarr; Winner</text>

      {/* Team 10 (Bye 5) */}
      <text x="30" y="350" fill={ctx.textColor} fontSize="11" fontWeight="bold">10. Team 10</text>
      <rect x="95" y="338" width="50" height="18" rx="4" fill="#10b981" />
      <text x="120" y="351" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="black">Bye 5</text>
      <line x1="150" y1="347" x2="310" y2="347" stroke={ctx.textColor} strokeWidth="1.5" />

      {/* Team 11 (Bye 1) */}
      <text x="30" y="380" fill={ctx.textColor} fontSize="11" fontWeight="bold">11. Team 11</text>
      <rect x="95" y="368" width="50" height="18" rx="4" fill="#10b981" />
      <text x="120" y="381" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="black">Bye 1</text>
      <line x1="150" y1="377" x2="310" y2="377" stroke={ctx.textColor} strokeWidth="1.5" />

      {/* Match 7: Team 10 vs Team 11 */}
      <line x1="310" y1="347" x2="310" y2="377" stroke="#6366f1" strokeWidth="2" />
      <line x1="310" y1="362" x2="430" y2="362" stroke="#6366f1" strokeWidth="2" />
      <text x="370" y="356" textAnchor="middle" fill="#6366f1" fontSize="9" fontWeight="bold">Match 7 &rarr; Winner</text>

      {/* Semifinal 2 (Lower Half Winner) */}
      <line x1="430" y1="280" x2="430" y2="362" stroke="#ec4899" strokeWidth="2.5" />
      <line x1="430" y1="321" x2="550" y2="321" stroke="#ec4899" strokeWidth="2.5" />
      <text x="490" y="314" textAnchor="middle" fill="#ec4899" fontSize="10" fontWeight="black">Match 9 &rarr; FINALIST 2</text>

      {/* FINAL MATCH (Round 4): Finalist 1 vs Finalist 2 */}
      <line x1="550" y1="132" x2="550" y2="321" stroke="#d97706" strokeWidth="3" />
      <line x1="550" y1="226" x2="620" y2="226" stroke="#d97706" strokeWidth="3" />
      <rect x="600" y="210" width="75" height="32" rx="6" fill="#d97706" />
      <text x="637" y="230" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="black">CHAMPION</text>
      <text x="585" y="202" textAnchor="middle" fill="#d97706" fontSize="10" fontWeight="black">Match 10 (Final)</text>

      {/* Summary Box */}
      <rect x="20" y="402" width="640" height="24" rx="4" fill={ctx.isDark ? '#334155' : '#fef3c7'} />
      <text x="340" y="418" textAnchor="middle" fill={ctx.textColor} fontSize="10" fontWeight="bold">
        Total Teams N=11 &bull; Total Matches = N - 1 = 10 &bull; Next Power of 2 = 16 &bull; Total Byes = 16 - 11 = 5 (Upper: 2, Lower: 3)
      </text>
    </svg>
  );
}

// 8. P-N Junction Diode
function renderPNJunctionSVG(ctx: SVGContext) {
  return (
    <svg viewBox="0 0 600 280" className="w-full h-auto font-sans" xmlns="http://www.w3.org/2000/svg">
      {/* P-region */}
      <rect x="80" y="40" width="180" height="140" fill={ctx.isDark ? '#1e3a8a' : '#dbeafe'} stroke={ctx.primaryStroke} strokeWidth="2" />
      <text x="170" y="65" textAnchor="middle" fill={ctx.textColor} fontSize="14" fontWeight="black">P-Type Region</text>
      <text x="170" y="85" textAnchor="middle" fill={ctx.subTextColor} fontSize="11">Majority: Holes (⊕)</text>

      {/* Depletion Region */}
      <rect x="260" y="40" width="80" height="140" fill={ctx.isDark ? '#475569' : '#fef3c7'} stroke="#f59e0b" strokeWidth="2" strokeDasharray="4 4" />
      <text x="300" y="65" textAnchor="middle" fill="#d97706" fontSize="11" fontWeight="black">Depletion</text>
      <text x="300" y="80" textAnchor="middle" fill="#d97706" fontSize="10">Layer (W)</text>

      {/* Immobile ions in depletion layer */}
      {/* P-side: negative acceptor ions */}
      <text x="278" y="110" fill="#ef4444" fontSize="14" fontWeight="black">⊖</text>
      <text x="278" y="135" fill="#ef4444" fontSize="14" fontWeight="black">⊖</text>
      <text x="278" y="160" fill="#ef4444" fontSize="14" fontWeight="black">⊖</text>

      {/* N-side: positive donor ions */}
      <text x="312" y="110" fill="#3b82f6" fontSize="14" fontWeight="black">⊕</text>
      <text x="312" y="135" fill="#3b82f6" fontSize="14" fontWeight="black">⊕</text>
      <text x="312" y="160" fill="#3b82f6" fontSize="14" fontWeight="black">⊕</text>

      {/* Internal Electric Field E_int (N to P) */}
      <line x1="330" y1="125" x2="270" y2="125" stroke="#ef4444" strokeWidth="2" />
      <polygon points="265,125 275,120 275,130" fill="#ef4444" />
      <text x="300" y="145" textAnchor="middle" fill="#ef4444" fontSize="11" fontWeight="black">E_int (N &rarr; P)</text>

      {/* N-region */}
      <rect x="340" y="40" width="180" height="140" fill={ctx.isDark ? '#14532d' : '#dcfce7'} stroke={ctx.primaryStroke} strokeWidth="2" />
      <text x="430" y="65" textAnchor="middle" fill={ctx.textColor} fontSize="14" fontWeight="black">N-Type Region</text>
      <text x="430" y="85" textAnchor="middle" fill={ctx.subTextColor} fontSize="11">Majority: Electrons (⊖)</text>

      {/* Barrier Potential Curve */}
      <line x1="80" y1="240" x2="260" y2="240" stroke={ctx.textColor} strokeWidth="2" />
      <path d="M 260,240 Q 300,210 340,190" fill="none" stroke="#ef4444" strokeWidth="2.5" />
      <line x1="340" y1="190" x2="520" y2="190" stroke={ctx.textColor} strokeWidth="2" />
      <text x="300" y="270" textAnchor="middle" fill={ctx.textColor} fontSize="11" fontWeight="bold">
        Barrier Potential (V_B &approx; 0.7 V for Si, 0.3 V for Ge)
      </text>
    </svg>
  );
}
