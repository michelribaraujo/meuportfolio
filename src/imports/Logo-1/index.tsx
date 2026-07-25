import svgPaths from "./svg-kvxxug3d2k";

function Symbol() {
  return (
    <div className="absolute left-[16px] size-[80px] top-[16px]" data-name="symbol">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 80 80">
        <g id="symbol">
          <g id="glow" opacity="0.06" />
          <path d={svgPaths.p382aa200} id="orbit" stroke="url(#paint0_linear_10_3700)" strokeWidth="1.14286" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_10_3700" x1="6.66571" x2="73.3343" y1="73.3371" y2="73.3371">
            <stop stopColor="#2563EB" />
            <stop offset="0.5" stopColor="#7C3AED" />
            <stop offset="1" stopColor="#263B59" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Logo() {
  return (
    <div className="relative size-full" data-name="Logo">
      <Symbol />
    </div>
  );
}