import { Outlet, Link, useLocation } from "react-router";
import { ArrowLeft, Sun, Moon, Mail } from "lucide-react";
import { useState, useEffect, useMemo } from "react";
import { motion } from "motion/react";
import svgPaths from "../imports/Logo-1/svg-kvxxug3d2k";

const WA_URL =
  "https://wa.me/5531983545099?text=Ol%C3%A1%2C%20vim%20do%20LinkedIn!";

function LinkedInIcon({ size = 13 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function HeaderOrbit() {
  return (
    <motion.div
      className="flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
      animate={{ rotate: [0, 360] }}
      transition={{
        duration: 32,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 80 80"
        fill="none"
        aria-hidden
      >
        <path
          d={svgPaths.p382aa200}
          stroke="url(#headerOrbitGrad)"
          strokeWidth="1.14286"
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="headerOrbitGrad"
            x1="6.66571"
            x2="73.3343"
            y1="73.3371"
            y2="73.3371"
          >
            <stop stopColor="#2563EB" />
            <stop offset="0.5" stopColor="#7C3AED" />
            <stop offset="1" stopColor="#263B59" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

function seededRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

/*
  Constellation cluster definition.
  Each cluster has a viewport-relative position (vw/vh anchor) and a set of connected star nodes.
  Nodes are in local px coordinates, lines connect consecutive pairs.
*/
type Cluster = {
  ax: number;
  ay: number;
  nodes: [number, number][];
  edges: [number, number][];
  depth: "near" | "mid" | "far";
};

// Depth visual weights
const DEPTH = {
  near: {
    lineOpacity: 0.18,
    nodeR: 3.2,
    nodeOpacity: 0.65,
    lineW: 1.0,
  },
  mid: {
    lineOpacity: 0.1,
    nodeR: 2.2,
    nodeOpacity: 0.42,
    lineW: 0.7,
  },
  far: {
    lineOpacity: 0.055,
    nodeR: 1.4,
    nodeOpacity: 0.25,
    lineW: 0.5,
  },
};

// ay values are % of the full document height (0–100), so clusters are
// distributed across the entire scrollable page, not just the first viewport.
const CLUSTERS: Cluster[] = [
  {
    depth: "near",
    ax: 11,
    ay: 5,
    nodes: [
      [0, 0],
      [62, 38],
      [28, 82],
      [88, 90],
      [-18, 70],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [0, 4],
      [4, 2],
    ],
  },
  {
    depth: "mid",
    ax: 74,
    ay: 9,
    nodes: [
      [0, 0],
      [30, 22],
      [60, 5],
      [90, 28],
      [120, 8],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
  },
  {
    depth: "far",
    ax: 44,
    ay: 15,
    nodes: [
      [0, 0],
      [38, 22],
      [19, 52],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
  },
  {
    depth: "near",
    ax: 82,
    ay: 22,
    nodes: [
      [30, 0],
      [30, 62],
      [0, 30],
      [60, 30],
      [30, 30],
    ],
    edges: [
      [0, 4],
      [4, 1],
      [2, 4],
      [4, 3],
    ],
  },
  {
    depth: "far",
    ax: 8,
    ay: 29,
    nodes: [
      [0, 30],
      [26, 0],
      [54, 30],
      [26, 60],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
    ],
  },
  {
    depth: "mid",
    ax: 55,
    ay: 36,
    nodes: [
      [0, 0],
      [38, 18],
      [72, 8],
      [108, 30],
      [140, 14],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
    ],
  },
  {
    depth: "far",
    ax: 22,
    ay: 43,
    nodes: [
      [0, 0],
      [34, 18],
      [16, 44],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
  },
  {
    depth: "near",
    ax: 78,
    ay: 50,
    nodes: [
      [24, 0],
      [64, 18],
      [52, 58],
      [0, 58],
      [0, 18],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 0],
    ],
  },
  {
    depth: "mid",
    ax: 38,
    ay: 57,
    nodes: [
      [0, 0],
      [30, 22],
      [60, 5],
      [90, 28],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
    ],
  },
  {
    depth: "far",
    ax: 14,
    ay: 64,
    nodes: [
      [0, 0],
      [40, 22],
      [72, 8],
      [66, 52],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [1, 3],
    ],
  },
  {
    depth: "near",
    ax: 68,
    ay: 71,
    nodes: [
      [0, 0],
      [62, 38],
      [28, 82],
      [88, 90],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 3],
    ],
  },
  {
    depth: "mid",
    ax: 28,
    ay: 79,
    nodes: [
      [0, 0],
      [44, 0],
      [22, 36],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
  },
  {
    depth: "far",
    ax: 85,
    ay: 85,
    nodes: [
      [0, 0],
      [38, 22],
      [19, 52],
    ],
    edges: [
      [0, 1],
      [1, 2],
      [2, 0],
    ],
  },
  {
    depth: "near",
    ax: 48,
    ay: 93,
    nodes: [
      [30, 0],
      [30, 62],
      [0, 30],
      [60, 30],
      [30, 30],
    ],
    edges: [
      [0, 4],
      [4, 1],
      [2, 4],
      [4, 3],
    ],
  },
];

/*
  SpaceBackground — scrolls WITH the page (position: absolute inside the
  page wrapper). Stars and constellations distributed across 0–100% of the
  document height, so they enter and leave the viewport as the user scrolls.
  Dark mode: white stars + indigo constellation lines.
  Light mode: faint warm dust-mote dots + sepia constellation traces.
*/
function SpaceBackground() {
  const darkStars = useMemo(() => {
    const r = seededRng(42);
    return Array.from({ length: 300 }, () => ({
      x: r() * 100,
      y: r() * 100,
      s: r() * 1.6 + 0.4,
      o: r() * 0.38 + 0.07,
    }));
  }, []);

  const lightDots = useMemo(() => {
    const r = seededRng(77);
    return Array.from({ length: 140 }, () => ({
      x: r() * 100,
      y: r() * 100,
      s: r() * 2.2 + 0.8,
      o: r() * 0.045 + 0.015,
    }));
  }, []);

  const constellationLayer = (
    cr: number,
    cg: number,
    cb: number,
  ) =>
    CLUSTERS.map((cl, ci) => {
      const dv = DEPTH[cl.depth];
      const xs = cl.nodes.map((n) => n[0]);
      const ys = cl.nodes.map((n) => n[1]);
      const pad = dv.nodeR + 4;
      const minX = Math.min(...xs) - pad;
      const minY = Math.min(...ys) - pad;
      const w = Math.max(...xs) + pad - minX;
      const h = Math.max(...ys) + pad - minY;
      return (
        <div
          key={ci}
          className="absolute"
          style={{
            left: `${cl.ax}%`,
            top: `${cl.ay}%`,
            width: w,
            height: h,
            transform: "translate(-50%, -50%)",
          }}
        >
          <svg
            width={w}
            height={h}
            viewBox={`${minX} ${minY} ${w} ${h}`}
            fill="none"
            overflow="visible"
          >
            {cl.edges.map(([a, b], ei) => (
              <line
                key={ei}
                x1={cl.nodes[a][0]}
                y1={cl.nodes[a][1]}
                x2={cl.nodes[b][0]}
                y2={cl.nodes[b][1]}
                stroke={`rgba(${cr},${cg},${cb},${dv.lineOpacity})`}
                strokeWidth={dv.lineW}
                strokeLinecap="round"
              />
            ))}
            {cl.nodes.map(([nx, ny], ni) => (
              <circle
                key={ni}
                cx={nx}
                cy={ny}
                r={dv.nodeR}
                fill={`rgba(${cr},${cg},${cb},${dv.nodeOpacity})`}
              />
            ))}
          </svg>
        </div>
      );
    });

  return (
    <>
      {/* Dark mode layer */}
      <div
        className="absolute inset-0 pointer-events-none select-none hidden dark:block"
        style={{ zIndex: -1 }}
        aria-hidden
      >
        {darkStars.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.s,
              height: s.s,
              opacity: s.o,
            }}
          />
        ))}
        {constellationLayer(200, 210, 255)}
      </div>

      {/* Light mode layer */}
      <div
        className="absolute inset-0 pointer-events-none select-none block dark:hidden"
        style={{ zIndex: -1 }}
        aria-hidden
      >
        {lightDots.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: s.s,
              height: s.s,
              opacity: s.o,
              background: "rgba(110,90,70,1)",
            }}
          />
        ))}
        {constellationLayer(130, 110, 90)}
      </div>
    </>
  );
}

function useTheme() {
  const [dark, setDark] = useState(() => {
    const stored = localStorage.getItem("theme");
    if (stored) return stored === "dark";
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}

export default function Root() {
  const location = useLocation();
  const isCase = location.pathname.startsWith("/case/");
  const { dark, toggle } = useTheme();

  return (
    <div
      className="min-h-screen text-foreground relative"
      style={{ fontFamily: "'Outfit', sans-serif" }}
    >
      {/* Absolute so stars/constellations scroll naturally with page content */}
      <SpaceBackground />
      <header className="border-b border-border/60 sticky top-0 z-50 bg-background/70 backdrop-blur-md">
        <div className="max-w-6xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-8 2xl:px-16 py-3 sm:py-4 relative flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 group z-10"
          >
            {isCase && (
              <ArrowLeft
                size={14}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            )}
            <span className="text-sm font-semibold tracking-tight group-hover:text-primary transition-colors">
              Michel Araujo
            </span>
            <span
              className="text-xs text-muted-foreground hidden sm:block"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              · Product Designer
            </span>
          </Link>

          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
            <HeaderOrbit />
          </div>

          <nav className="flex items-center gap-2 z-10">
            <a
              href="mailto:michel@mikhaelangelo.com.br"
              aria-label="Enviar e-mail"
              title="michel@mikhaelangelo.com.br"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all"
            >
              <Mail size={15} />
            </a>
            <a
              href="https://www.linkedin.com/in/mikhaelangelo/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="linkedin.com/in/mikhaelangelo"
              className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all"
            >
              <LinkedInIcon size={15} />
            </a>
            <button
              onClick={toggle}
              aria-label={
                dark
                  ? "Mudar para tema claro"
                  : "Mudar para tema escuro"
              }
              className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
          </nav>
        </div>
      </header>

      <Outlet />

      <footer className="border-t border-border mt-24">
        <div className="max-w-6xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-8 2xl:px-16 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-sm">
              Michel Ribeiro Araujo
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Product Designer Sênior · Belo Horizonte, Brasil
            </p>
          </div>
          <div className="flex gap-6 flex-wrap justify-center">
            <a
              href="mailto:michel@mikhaelangelo.com.br"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail size={14} />
              michel@mikhaelangelo.com.br
            </a>
            <a
              href="https://www.linkedin.com/in/mikhaelangelo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              <LinkedInIcon size={14} />
              linkedin.com/in/mikhaelangelo
            </a>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-[#25d366] transition-colors flex items-center gap-1.5"
            >
              <WhatsAppIcon size={14} />
              WhatsApp
            </a>
          </div>
        </div>
      </footer>

      <a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Conversar no WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25d366] text-white shadow-lg hover:bg-[#20bd5a] active:scale-95 transition-all duration-200 rounded-full px-4 py-3 group"
      >
        <WhatsAppIcon size={20} />
        <span className="text-sm font-semibold max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-300 whitespace-nowrap">
          Fale comigo
        </span>
      </a>
    </div>
  );
}