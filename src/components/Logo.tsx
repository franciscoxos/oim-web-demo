// Logo isotipo OIM · 3 láminas overlapping verde + naranja + paper
// Pendiente: cuando Fernando envíe el logo HD oficial (SVG con fondo transparente),
// reemplazar este isotipo placeholder por <img src="..." />.
// El texto "OIM Seguros" lo pinta el Header.tsx por separado para mejor control tipográfico.
export function Logo({ size = 38 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
    >
      {/* Lámina trasera · verde marca */}
      <rect x="4" y="6" width="22" height="28" rx="3.5" fill="#71BF44" />
      {/* Lámina media · naranja marca */}
      <rect x="11" y="9" width="22" height="28" rx="3.5" fill="#FFAB5E" opacity="0.92" />
      {/* Lámina frontal · paper */}
      <rect x="18" y="12" width="18" height="22" rx="3" fill="#FBFAF6" stroke="#0F1E2E" strokeOpacity="0.08" strokeWidth="0.5" />
    </svg>
  );
}
