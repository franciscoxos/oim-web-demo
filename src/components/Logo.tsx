// Logo placeholder OIM — 3 láminas overlapping verde+naranja+blanco con texto
// Cuando Fernando envíe el logo oficial en alta, reemplazar este SVG.
export function Logo({ size = 32, dark = false }: { size?: number; dark?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* 3 láminas overlapping */}
        <rect x="4" y="6" width="22" height="28" rx="3" fill="#71BF44" />
        <rect x="11" y="9" width="22" height="28" rx="3" fill="#FFAB5E" opacity="0.95" />
        <rect x="18" y="12" width="20" height="22" rx="3" fill={dark ? "#FFFFFF" : "#FBF8F8"} />
      </svg>
      <div className="leading-none">
        <span
          className="font-[family-name:var(--font-poppins)] font-bold text-[1.05rem] tracking-tight"
          style={{ color: dark ? "#FFFFFF" : "#71BF44" }}
        >
          OIM
        </span>
        <span
          className="font-[family-name:var(--font-poppins)] font-bold text-[1.05rem] tracking-tight"
          style={{ color: dark ? "#FFFFFF" : "#2E4A66" }}
        >
          SEGUROS
        </span>
      </div>
    </div>
  );
}
