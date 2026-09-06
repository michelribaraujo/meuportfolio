import React, { useMemo } from "react";
import { Link } from "react-router";
import {
  ArrowRight,
  Sparkles,
  Heart,
  Cpu,
  MapPin,
  FileText,
  Bell,
  Star,
  Mail as MailIcon,
  BookOpen,
  Lightbulb,
  Target,
  TrendingUp,
} from "lucide-react";
import { motion } from "motion/react";
import DiscoveryOrbit from "../sections/DiscoveryOrbit";
import netflixLogoPng from "../../imports/generated/netflix-logo.webp";
import svgPaths from "../../imports/Logo-1/svg-kvxxug3d2k";
import profilePhoto from "../../imports/generated/avatar-michel.webp";
import dogPhoto from "../../imports/generated/avatar-cachorra.webp";

const CV_URL =
  "https://docs.google.com/document/d/e/2PACX-1vQVGtsXMLZWAXUnKXDPV1kSDl7YCYUxV2FzQWeCQbdQLatmKniOrtvABeLGCfSGKLM9qrLhv7YusOZs/pub";

const cases = [
  {
    slug: "zapflix",
    num: "01",
    title: "O Cavalo de Troia Digital",
    subtitle: "Zapflix · Netflix Brasil",
    year: "2023",
    tags: ["Strategy", "Chatbot Design", "WhatsApp"],
    desc: "Um chatbot com falso positivo nas métricas se torna canal de aquisição massiva de um público invisível ao mercado.",
    accentColor: "#e50914",
    featured: true,
    brand: "netflix" as const,
  },
  {
    slug: "confidencial",
    num: "05",
    title: "Discovery como Escudo de Governança",
    subtitle: "Confidencial · Ecossistema Digital",
    nda: true,
    year: "2026",
    tags: [
      "Product Discovery",
      "Service Blueprint",
      "Governança",
    ],
    desc: "Como transformei o processo de Discovery em instrumento de governança — forçando visibilidade executiva sobre riscos críticos antes de um lançamento irresponsável.",
    accentColor: "#6366f1",
    featured: true,
    brand: "Confidencial" as const,
  },
  {
    slug: "convex-mindset",
    num: "02",
    title: "Convex Mindset",
    subtitle: "Metodologia para Chatbots",
    year: "2022",
    tags: ["Visual Analytics", "Power BI", "Research"],
    desc: "Uma metodologia proprietária de análise comportamental para chatbots com 4 categorias de intenção.",
    accentColor: "#34d399",
    featured: false,
    brand: null,
  },
  {
    slug: "design-thinking",
    num: "03",
    title: "Workshop de Design Thinking",
    subtitle: "Take Blip · WhatsApp",
    year: "2022",
    tags: ["Facilitation", "Miro", "Figma"],
    desc: "Workshop de empatia e ideação com stakeholders para alinhar time e cliente em torno de um produto de chatbot.",
    accentColor: "#60a5fa",
    featured: false,
    brand: null,
  },
  {
    slug: "discovery-flow",
    num: "04",
    title: "Workshop de Discovery Flow",
    subtitle: "Take Blip · WhatsApp",
    year: "2022",
    tags: ["Product Discovery", "Research", "Workshop"],
    desc: "Workshop imersivo de discovery com múltiplas áreas para mapear dores e alinhar próximos passos.",
    accentColor: "#facc15",
    featured: false,
    brand: null,
  },
];

const facts = [
  { icon: Heart, label: "Movido por empatia e boas histórias" },
  {
    icon: Cpu,
    label:
      "Falo a língua da Engenharia — sem perder o foco no usuário",
  },
  {
    icon: Sparkles,
    label: "Acredito que design com alma faz produtos melhores",
  },
  {
    icon: MapPin,
    label: "Belo Horizonte, MG · aberto a remoto",
  },
];

/* ─── Cosmic icon set — thematic to the design system ─── */
function IconSparkle({
  size = 16,
  className,
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2L13.09 8.26L19 9L13.09 10.74L12 17L10.91 10.74L5 9L10.91 8.26L12 2Z" />
    </svg>
  );
}

function IconConstellation({
  size = 20,
  className,
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <circle
        cx="5"
        cy="18"
        r="1.5"
        fill="currentColor"
        opacity="0.7"
      />
      <circle
        cx="10"
        cy="8"
        r="1.5"
        fill="currentColor"
        opacity="0.7"
      />
      <circle
        cx="18"
        cy="14"
        r="1.5"
        fill="currentColor"
        opacity="0.7"
      />
      <circle
        cx="14"
        cy="4"
        r="1.5"
        fill="currentColor"
        opacity="0.7"
      />
      <line
        x1="5"
        y1="18"
        x2="10"
        y2="8"
        strokeDasharray="2 1.5"
        opacity="0.5"
      />
      <line
        x1="10"
        y1="8"
        x2="14"
        y2="4"
        strokeDasharray="2 1.5"
        opacity="0.5"
      />
      <line
        x1="14"
        y1="4"
        x2="18"
        y2="14"
        strokeDasharray="2 1.5"
        opacity="0.5"
      />
    </svg>
  );
}

function IconPlanet({
  size = 20,
  className,
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <circle cx="12" cy="12" r="5" />
      <ellipse
        cx="12"
        cy="12"
        rx="11"
        ry="4"
        transform="rotate(-20 12 12)"
      />
    </svg>
  );
}

function IconComet({
  size = 20,
  className,
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <circle cx="16" cy="8" r="3" />
      <path d="M13.5 10.5L3 20" strokeWidth="1.5" />
      <path d="M11 12L5 21" opacity="0.4" strokeWidth="1" />
      <path d="M13 9L2 17" opacity="0.3" strokeWidth="1" />
    </svg>
  );
}

function IconOrbit({
  size = 20,
  className,
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    >
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        transform="rotate(-30 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="10"
        ry="4"
        transform="rotate(30 12 12)"
      />
      <circle
        cx="12"
        cy="12"
        r="2.5"
        fill="currentColor"
        opacity="0.6"
      />
    </svg>
  );
}

function IconTelescope({
  size = 20,
  className,
  style,
}: {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 4L15 9L9 6L3 11" />
      <path d="M9 6L10.5 14" />
      <path d="M10.5 14L8 20" />
      <path d="M10.5 14L13 20" />
      <path d="M3 11L9 6" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   Moon3D — só aparece em dark mode (hidden dark:block)
   Esfera com gradiente, crateras, terminator e halo atmosférico
───────────────────────────────────────────────────────────── */
function Moon3D({
  size = 100,
  className,
  delay = 0,
}: {
  size?: number;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none hidden dark:block ${className ?? ""}`}
      style={{ width: size, height: size }}
      animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Lit surface — warm grey, lit from upper-left */}
          <radialGradient
            id="moonSurface"
            cx="32%"
            cy="28%"
            r="70%"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0%" stopColor="#f5f0e8" />
            <stop offset="25%" stopColor="#d8d0bc" />
            <stop offset="55%" stopColor="#b0a890" />
            <stop offset="80%" stopColor="#7a7260" />
            <stop offset="100%" stopColor="#3c3830" />
          </radialGradient>
          {/* Terminator — darkness on the right side */}
          <radialGradient
            id="moonTerminator"
            cx="78%"
            cy="52%"
            r="52%"
            gradientUnits="objectBoundingBox"
          >
            <stop
              offset="0%"
              stopColor="#0e0c10"
              stopOpacity="0.82"
            />
            <stop
              offset="50%"
              stopColor="#0e0c10"
              stopOpacity="0.45"
            />
            <stop
              offset="100%"
              stopColor="#0e0c10"
              stopOpacity="0"
            />
          </radialGradient>
          {/* Atmosphere halo */}
          <radialGradient
            id="moonHalo"
            cx="50%"
            cy="50%"
            r="50%"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="72%" stopColor="transparent" />
            <stop
              offset="88%"
              stopColor="rgba(200,210,240,0.10)"
            />
            <stop
              offset="100%"
              stopColor="rgba(160,180,230,0.04)"
            />
          </radialGradient>
          {/* Crater inner shadow */}
          <radialGradient
            id="craterShd"
            cx="60%"
            cy="60%"
            r="50%"
          >
            <stop offset="0%" stopColor="rgba(30,28,24,0.5)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <clipPath id="moonClip">
            <circle cx="60" cy="60" r="52" />
          </clipPath>
        </defs>

        {/* Atmosphere glow */}
        <circle cx="60" cy="60" r="59" fill="url(#moonHalo)" />

        {/* Base sphere */}
        <circle
          cx="60"
          cy="60"
          r="52"
          fill="url(#moonSurface)"
        />

        {/* Surface detail — maria (dark patches) */}
        <g clipPath="url(#moonClip)">
          <ellipse
            cx="52"
            cy="48"
            rx="16"
            ry="10"
            fill="#6a6454"
            opacity="0.22"
            transform="rotate(-15 52 48)"
          />
          <ellipse
            cx="72"
            cy="56"
            rx="10"
            ry="7"
            fill="#6a6454"
            opacity="0.17"
            transform="rotate(8 72 56)"
          />
          <ellipse
            cx="44"
            cy="68"
            rx="8"
            ry="5"
            fill="#6a6454"
            opacity="0.18"
            transform="rotate(-5 44 68)"
          />

          {/* Crater A — large, top-right */}
          <circle
            cx="76"
            cy="34"
            r="10"
            fill="#c4bc9e"
            opacity="0.25"
          />
          <circle
            cx="76"
            cy="34"
            r="10"
            fill="url(#craterShd)"
            opacity="0.5"
          />
          <circle
            cx="76"
            cy="34"
            r="10"
            fill="none"
            stroke="#9a9280"
            strokeWidth="1.2"
            opacity="0.4"
          />
          <circle
            cx="74"
            cy="32"
            r="2.5"
            fill="white"
            opacity="0.12"
          />

          {/* Crater B — medium, centre-left */}
          <circle
            cx="44"
            cy="58"
            r="7"
            fill="#b8b09a"
            opacity="0.2"
          />
          <circle
            cx="44"
            cy="58"
            r="7"
            fill="url(#craterShd)"
            opacity="0.45"
          />
          <circle
            cx="44"
            cy="58"
            r="7"
            fill="none"
            stroke="#9a9280"
            strokeWidth="1"
            opacity="0.35"
          />

          {/* Crater C — small, bottom-centre */}
          <circle
            cx="62"
            cy="80"
            r="5"
            fill="#b0a890"
            opacity="0.18"
          />
          <circle
            cx="62"
            cy="80"
            r="5"
            fill="url(#craterShd)"
            opacity="0.4"
          />
          <circle
            cx="62"
            cy="80"
            r="5"
            fill="none"
            stroke="#908878"
            strokeWidth="0.8"
            opacity="0.3"
          />

          {/* Tiny craters */}
          <circle
            cx="36"
            cy="40"
            r="3"
            fill="none"
            stroke="#908878"
            strokeWidth="0.7"
            opacity="0.3"
          />
          <circle
            cx="85"
            cy="58"
            r="2.5"
            fill="none"
            stroke="#908878"
            strokeWidth="0.7"
            opacity="0.25"
          />
          <circle
            cx="55"
            cy="30"
            r="2"
            fill="none"
            stroke="#908878"
            strokeWidth="0.6"
            opacity="0.25"
          />
        </g>

        {/* Terminator overlay */}
        <circle
          cx="60"
          cy="60"
          r="52"
          fill="url(#moonTerminator)"
        />

        {/* Specular shimmer — brightest point upper-left */}
        <ellipse
          cx="40"
          cy="36"
          rx="14"
          ry="9"
          fill="white"
          opacity="0.09"
          transform="rotate(-30 40 36)"
        />
      </svg>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Sun3D — só aparece em light mode (block dark:hidden)
   Esfera com corona, raios e gradiente quente
───────────────────────────────────────────────────────────── */
function Sun3D({
  size = 100,
  className,
  delay = 0,
}: {
  size?: number;
  className?: string;
  delay?: number;
}) {
  const rays = useMemo(
    () =>
      Array.from({ length: 14 }, (_, i) => {
        const angle = i * (360 / 14) * (Math.PI / 180);
        const r1 = size * 0.35;
        const r2 =
          r1 + (i % 3 === 0 ? size * 0.14 : size * 0.09);
        const cx = size / 2;
        const cy = size / 2;
        return {
          x1: cx + Math.cos(angle) * r1,
          y1: cy + Math.sin(angle) * r1,
          x2: cx + Math.cos(angle) * r2,
          y2: cy + Math.sin(angle) * r2,
          thick: i % 2 === 0,
        };
      }),
    [size],
  );

  return (
    <motion.div
      className={`absolute pointer-events-none block dark:hidden ${className ?? ""}`}
      style={{ width: size, height: size }}
      animate={{ y: [0, -8, 0] }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {/* Slow spin on the rays layer */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          fill="none"
        >
          <defs>
            <radialGradient
              id="sunCorona"
              cx="50%"
              cy="50%"
              r="50%"
            >
              <stop offset="38%" stopColor="transparent" />
              <stop
                offset="80%"
                stopColor="rgba(255,200,60,0.18)"
              />
              <stop
                offset="100%"
                stopColor="rgba(255,140,20,0.06)"
              />
            </radialGradient>
          </defs>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2 - 1}
            fill="url(#sunCorona)"
          />
          {rays.map((r, i) => (
            <line
              key={i}
              x1={r.x1}
              y1={r.y1}
              x2={r.x2}
              y2={r.y2}
              stroke="#f59e0b"
              strokeWidth={r.thick ? 2 : 1.2}
              strokeLinecap="round"
              opacity={r.thick ? 0.6 : 0.4}
            />
          ))}
        </svg>
      </motion.div>

      {/* Static sphere */}
      <svg
        className="absolute inset-0"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
      >
        <defs>
          <radialGradient
            id="sunSphere"
            cx="35%"
            cy="30%"
            r="68%"
            gradientUnits="objectBoundingBox"
          >
            <stop offset="0%" stopColor="#fffde0" />
            <stop offset="20%" stopColor="#fde68a" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="80%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#c2410c" />
          </radialGradient>
          <radialGradient
            id="sunGlint"
            cx="38%"
            cy="33%"
            r="40%"
          >
            <stop
              offset="0%"
              stopColor="white"
              stopOpacity="0.35"
            />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size * 0.33}
          fill="url(#sunSphere)"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size * 0.33}
          fill="url(#sunGlint)"
        />
      </svg>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   IdentityOrbit — logo orbital do design system flutuando
───────────────────────────────────────────────────────────── */
function IdentityOrbit({
  size = 96,
  className,
  delay = 0,
}: {
  size?: number;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute pointer-events-none ${className ?? ""}`}
      style={{ width: size, height: size }}
      animate={{ y: [0, -7, 0], rotate: [0, 3, 0] }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {/* Slow counter-rotation on the orbit path for a living feel */}
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 80 80"
        fill="none"
        animate={{ rotate: [0, -360] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <g id="symbol">
          <path
            d={svgPaths.p382aa200}
            stroke="url(#orbitGradA)"
            strokeWidth="1.14286"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="orbitGradA"
            x1="6.66571"
            x2="73.3343"
            y1="73.3371"
            y2="73.3371"
          >
            <stop stopColor="#2563EB" stopOpacity="0.7" />
            <stop
              offset="0.5"
              stopColor="#7C3AED"
              stopOpacity="0.7"
            />
            <stop
              offset="1"
              stopColor="#263B59"
              stopOpacity="0.5"
            />
          </linearGradient>
        </defs>
      </motion.svg>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   AvatarPlanetRing — feixe de luz orbitando em elipse inclinada
   Split em camada back (z:5, atrás do avatar) e front (z:15,
   na frente), para simular órbita 3D com profundidade real.
───────────────────────────────────────────────────────────── */
function AvatarPlanetRing() {
  const rx = 90;
  const ry = 24;
  const pad = 16;
  const W = (rx + pad) * 2;
  const H = (ry + pad) * 2;
  const vCx = W / 2;
  const vCy = H / 2;

  // Approximate ellipse circumference (Ramanujan)
  const circ = Math.PI * (3 * (rx + ry) - Math.sqrt((3 * rx + ry) * (rx + 3 * ry)));
  const beamLen = circ * 0.10;

  const L = `${vCx - rx},${vCy}`;
  const R = `${vCx + rx},${vCy}`;
  const backArc  = `M ${L} A ${rx},${ry},0,0,0,${R}`;  // bottom arc (behind)
  const frontArc = `M ${L} A ${rx},${ry},0,0,1,${R}`;  // top arc (in front)
  // Full ellipse for beam to travel (clockwise from right → top → left → bottom → right)
  const fullPath = `M ${R} A ${rx},${ry},0,1,1,${L} A ${rx},${ry},0,1,1,${R}`;

  const beamAnim = { strokeDashoffset: [0, -circ] };
  const beamTrans = { duration: 5.5, repeat: Infinity, ease: "linear" as const };

  const base = (z: number): React.CSSProperties => ({
    position: "absolute",
    pointerEvents: "none",
    left: "50%",
    top: "50%",
    width: W,
    height: H,
    marginLeft: -W / 2,
    marginTop: -H / 2,
    transform: "rotate(-35deg)",
    zIndex: z,
  });

  const svg = { width: W, height: H, viewBox: `0 0 ${W} ${H}`, fill: "none" as const };

  const RING = "rgba(160,190,255,0.12)";
  const GLOW_FRONT = "rgba(210,228,255,0.90)";
  const GLOW_BACK  = "rgba(180,210,255,0.35)";

  return (
    <>
      {/* Back layer — draws behind the avatar */}
      <div style={base(5)}>
        <svg {...svg} overflow="visible">
          <path d={backArc} stroke={RING} strokeWidth="1" strokeLinecap="round" />
          <motion.path
            d={fullPath}
            stroke={GLOW_BACK}
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${beamLen} ${circ - beamLen}`}
            animate={beamAnim}
            transition={beamTrans}
          />
        </svg>
      </div>

      {/* Front layer — draws in front of the avatar */}
      <div style={base(15)}>
        <svg {...svg} overflow="visible">
          <defs>
            {/* Clip beam to top half only — hides it when behind the avatar */}
            <clipPath id="ringFrontClip">
              <rect x={0} y={0} width={W} height={vCy} />
            </clipPath>
          </defs>
          <path d={frontArc} stroke={RING} strokeWidth="1" strokeLinecap="round" />
          <motion.path
            d={fullPath}
            stroke={GLOW_FRONT}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${beamLen} ${circ - beamLen}`}
            animate={beamAnim}
            transition={beamTrans}
            clipPath="url(#ringFrontClip)"
            style={{ filter: "drop-shadow(0 0 4px rgba(190,215,255,0.7))" }}
          />
        </svg>
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   ProfileCard — avatar circular flutuando acima do card
   sem crop agressivo, sem fade, borda e sombra preservadas
───────────────────────────────────────────────────────────── */
const AVATAR = 128; // diâmetro do avatar em px
const OVERLAP = AVATAR / 2 + 8; // quanto o avatar "desce" para dentro do card

function ProfileCard() {
  return (
    <motion.div
      className="relative"
      style={{ paddingTop: OVERLAP }}
      initial={{ opacity: 0, x: 28 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        delay: 0.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Ambient glow */}
      <div
        className="absolute -inset-3 rounded-3xl opacity-40 blur-2xl pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 20%, rgba(124,58,237,0.25) 0%, rgba(37,99,235,0.13) 55%, transparent 80%)",
        }}
      />

      {/* ── Avatar circular — flutua acima e sobrepõe o card ── */}
      <div
        className="absolute left-1/2 -translate-x-1/2 z-20"
        style={{ top: 0 }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* Planet ring — back half renders behind avatar (z:5), front half in front (z:15) */}
          <AvatarPlanetRing />

          {/* Anel gradiente — Michel (z:10, between ring back and ring front) */}
          <div
            className="rounded-full p-[3px] shadow-2xl"
            style={{
              position: "relative",
              zIndex: 10,
              background:
                "linear-gradient(135deg, #2563EB 0%, #7C3AED 55%, #ff6b47 100%)",
            }}
          >
            <div
              className="rounded-full overflow-hidden bg-card"
              style={{ width: AVATAR, height: AVATAR }}
            >
              <img
                src={profilePhoto}
                alt="Michel Araujo"
                className="w-full h-full object-cover" loading="eager" decoding="async"
                style={{ objectPosition: "50% 14%" }}
              />
            </div>
          </div>

          {/* Cachorra — badge circular no canto inferior direito do avatar */}
          <motion.div
            className="absolute z-10"
            style={{ bottom: -4, right: -8 }}
            animate={{ y: [0, -4, 0] }}
            transition={{
              duration: 4.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          >
            <div
              className="rounded-full p-[2.5px] shadow-lg"
              style={{
                background:
                  "linear-gradient(135deg, #7C3AED 0%, #4f46e5 60%, #2563EB 100%)",
              }}
            >
              <div
                className="rounded-full overflow-hidden bg-card"
                style={{ width: 52, height: 52 }}
              >
                <img
                  src={dogPhoto}
                  alt="Companheira"
                  className="w-full h-full object-cover" loading="eager" decoding="async"
                  style={{ objectPosition: "50% 20%" }}
                />
              </div>
            </div>
            {/* Patinha decorativa */}
            <motion.span
              className="absolute -bottom-1 -right-1 text-[10px] select-none pointer-events-none"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            >
              🐾
            </motion.span>
          </motion.div>

          {/* Sparkles ao redor do avatar */}
          <motion.span
            className="absolute -top-1 -right-0.5 text-sm select-none pointer-events-none"
            style={{
              fontFamily: "system-ui",
              color: "#7C3AED",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
              rotate: [0, 20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✦
          </motion.span>
          <motion.span
            className="absolute -bottom-1 -left-2 text-xs select-none pointer-events-none"
            style={{
              fontFamily: "system-ui",
              color: "#ff6b47",
            }}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.9, 0.4],
              rotate: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            ★
          </motion.span>
        </motion.div>
      </div>

      {/* ── Card body — gradiente border + conteúdo ── */}
      <div
        className="relative rounded-2xl p-[2px] shadow-xl"
        style={{
          background:
            "linear-gradient(135deg, #2563EB 0%, #7C3AED 55%, #ff6b47 100%)",
        }}
      >
        <div
          className="rounded-[14px] bg-card"
          style={{ paddingTop: OVERLAP + 12 }}
        >
          {/* Nome + role + orbital */}
          <div className="px-5 pb-4 text-center border-b border-border">
            <p
              className="font-bold text-base leading-tight text-foreground"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Michel Araujo
            </p>
            <p
              className="text-[11px] text-muted-foreground mt-1"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Product Designer Sênior · BH, Brasil
            </p>
            {/* Orbital micro — assinatura da identidade */}
            <div className="flex justify-center mt-2 opacity-40">
              <svg
                width="18"
                height="18"
                viewBox="0 0 80 80"
                fill="none"
                aria-hidden
              >
                <path
                  d={svgPaths.p382aa200}
                  stroke="url(#pcOrbit)"
                  strokeWidth="1.6"
                />
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="pcOrbit"
                    x1="6.67"
                    x2="73.33"
                    y1="73.34"
                    y2="73.34"
                  >
                    <stop stopColor="#2563EB" />
                    <stop offset="0.5" stopColor="#7C3AED" />
                    <stop offset="1" stopColor="#263B59" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          {/* O Michel fora do Figma */}
          <div className="px-5 pt-4 pb-5">
            {facts.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-start gap-3 py-2 border-b border-border last:border-0"
              >
                <Icon
                  size={12}
                  className="text-primary mt-0.5 shrink-0"
                />
                <span className="text-xs text-muted-foreground leading-snug">
                  {label}
                </span>
              </div>
            ))}
            <div className="pt-3 flex gap-1.5 flex-wrap">
              {[
                "🌈 Gay com orgulho",
                "☕ Cafezeiro e mineiro",
                "🎨 Product Designer que ama IA",
                "🐶 Pai de pet",
              ].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] bg-muted text-muted-foreground px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────────────────────
   CosmicField — campo estelar completo
───────────────────────────────────────────────────────────── */
function CosmicField() {
  const stars = useMemo(
    () =>
      Array.from({ length: 52 }, (_, i) => ({
        id: i,
        x: (i * 37 + 11) % 100,
        y: (i * 53 + 7) % 100,
        size: i % 5 === 0 ? 2.2 : i % 3 === 0 ? 1.5 : 1,
        delay: (i * 0.19) % 5.5,
        duration: 2.2 + (i % 4) * 0.9,
        opacity: 0.12 + (i % 6) * 0.1,
      })),
    [],
  );

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none select-none"
      aria-hidden
    >
      {/* Nebula glows — palette alinhada com identidade azul/roxo */}
      <div
        className="absolute -top-24 -right-24 w-[580px] h-[580px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.10) 0%, rgba(139,92,246,0.05) 40%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-[380px] h-[380px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute top-[35%] right-[28%] w-[200px] h-[200px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-[10%] left-[42%] w-[160px] h-[160px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,71,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Lua menor decorativa — só dark, canto inferior esquerdo */}
      <Moon3D
        size={48}
        className="bottom-20 left-[10%]"
        delay={2.5}
      />

      {/* ── Constelações extras — dark mode, zona superior central ── */}
      <svg
        className="absolute hidden dark:block top-4 left-[36%]"
        width="110"
        height="90"
        viewBox="0 0 110 90"
        fill="none"
      >
        <line
          x1="10"
          y1="70"
          x2="55"
          y2="18"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.8"
        />
        <line
          x1="55"
          y1="18"
          x2="100"
          y2="50"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="0.8"
        />
        <line
          x1="55"
          y1="18"
          x2="68"
          y2="78"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="0.8"
        />
        <line
          x1="10"
          y1="70"
          x2="68"
          y2="78"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="0.7"
        />
        <circle
          cx="10"
          cy="70"
          r="2.2"
          fill="rgba(255,255,255,0.36)"
        />
        <circle
          cx="55"
          cy="18"
          r="2.8"
          fill="rgba(255,255,255,0.45)"
        />
        <circle
          cx="100"
          cy="50"
          r="1.8"
          fill="rgba(255,255,255,0.30)"
        />
        <circle
          cx="68"
          cy="78"
          r="2"
          fill="rgba(255,255,255,0.27)"
        />
      </svg>
      <svg
        className="absolute hidden dark:block top-[14%] left-[51%]"
        width="75"
        height="65"
        viewBox="0 0 75 65"
        fill="none"
      >
        <line
          x1="5"
          y1="55"
          x2="38"
          y2="8"
          stroke="rgba(196,181,253,0.09)"
          strokeWidth="0.8"
        />
        <line
          x1="38"
          y1="8"
          x2="70"
          y2="42"
          stroke="rgba(196,181,253,0.09)"
          strokeWidth="0.8"
        />
        <line
          x1="38"
          y1="8"
          x2="50"
          y2="60"
          stroke="rgba(196,181,253,0.07)"
          strokeWidth="0.7"
        />
        <circle
          cx="5"
          cy="55"
          r="2"
          fill="rgba(196,181,253,0.40)"
        />
        <circle
          cx="38"
          cy="8"
          r="2.6"
          fill="rgba(196,181,253,0.46)"
        />
        <circle
          cx="70"
          cy="42"
          r="1.6"
          fill="rgba(196,181,253,0.32)"
        />
        <circle
          cx="50"
          cy="60"
          r="2"
          fill="rgba(196,181,253,0.28)"
        />
      </svg>
      {/* Estrelas concentradas na zona central */}
      {[
        { x: "38%", y: "8%", s: 2 },
        { x: "44%", y: "4%", s: 1.4 },
        { x: "49%", y: "14%", s: 1.8 },
        { x: "53%", y: "7%", s: 1.2 },
        { x: "41%", y: "20%", s: 1.4 },
        { x: "57%", y: "18%", s: 2 },
        { x: "46%", y: "26%", s: 1 },
      ].map((st, i) => (
        <motion.div
          key={`zs-${i}`}
          className="absolute rounded-full hidden dark:block"
          style={{
            left: st.x,
            top: st.y,
            width: st.s,
            height: st.s,
            background: "white",
          }}
          animate={{
            opacity: [0.1, 0.55, 0.1],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 2.5 + i * 0.6,
            repeat: Infinity,
            delay: i * 0.35,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ── Nuvens pastel — light mode, zona superior central ── */}
      {/* Nuvem principal (onde o sol ficava) */}
      <motion.div
        className="absolute block dark:hidden pointer-events-none"
        style={{ top: "5%", left: "33%", opacity: 0.8 }}
        animate={{ x: [0, 14, 0], y: [0, -4, 0] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="170"
          height="72"
          viewBox="0 0 170 72"
          fill="none"
        >
          <ellipse
            cx="85"
            cy="56"
            rx="76"
            ry="22"
            fill="rgba(208,218,245,0.42)"
          />
          <ellipse
            cx="58"
            cy="42"
            rx="40"
            ry="26"
            fill="rgba(218,226,250,0.48)"
          />
          <ellipse
            cx="100"
            cy="36"
            rx="34"
            ry="24"
            fill="rgba(214,224,248,0.46)"
          />
          <ellipse
            cx="76"
            cy="26"
            rx="30"
            ry="21"
            fill="rgba(226,232,252,0.50)"
          />
          <ellipse
            cx="98"
            cy="20"
            rx="22"
            ry="17"
            fill="rgba(232,237,254,0.46)"
          />
          <ellipse
            cx="70"
            cy="16"
            rx="16"
            ry="13"
            fill="rgba(238,242,255,0.42)"
          />
        </svg>
      </motion.div>
      {/* Nuvem secundária — esquerda média */}
      <motion.div
        className="absolute block dark:hidden pointer-events-none"
        style={{ top: "23%", left: "10%", opacity: 0.65 }}
        animate={{ x: [0, -10, 0], y: [0, -3, 0] }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      >
        <svg
          width="115"
          height="52"
          viewBox="0 0 115 52"
          fill="none"
        >
          <ellipse
            cx="57"
            cy="40"
            rx="50"
            ry="17"
            fill="rgba(200,214,244,0.36)"
          />
          <ellipse
            cx="38"
            cy="30"
            rx="28"
            ry="19"
            fill="rgba(210,222,248,0.40)"
          />
          <ellipse
            cx="68"
            cy="25"
            rx="24"
            ry="17"
            fill="rgba(216,226,250,0.38)"
          />
          <ellipse
            cx="52"
            cy="17"
            rx="20"
            ry="14"
            fill="rgba(226,233,252,0.36)"
          />
        </svg>
      </motion.div>
      {/* Nuvem pequena — direita */}
      <motion.div
        className="absolute block dark:hidden pointer-events-none"
        style={{ top: "31%", right: "10%", opacity: 0.55 }}
        animate={{ x: [0, 8, 0] }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10,
        }}
      >
        <svg
          width="95"
          height="44"
          viewBox="0 0 95 44"
          fill="none"
        >
          <ellipse
            cx="47"
            cy="34"
            rx="42"
            ry="15"
            fill="rgba(204,216,244,0.32)"
          />
          <ellipse
            cx="31"
            cy="25"
            rx="22"
            ry="16"
            fill="rgba(212,222,248,0.36)"
          />
          <ellipse
            cx="60"
            cy="20"
            rx="19"
            ry="14"
            fill="rgba(218,228,250,0.34)"
          />
        </svg>
      </motion.div>

      {/* ── Pássaros elegantes — light mode ── */}
      <motion.div
        className="absolute block dark:hidden pointer-events-none"
        style={{ top: "10%", left: "18%" }}
        animate={{ x: [0, 18, 0], y: [0, -7, 0] }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <svg
          width="110"
          height="65"
          viewBox="0 0 110 65"
          fill="none"
        >
          <path
            d="M6 24 Q13 15 21 24"
            stroke="rgba(90,110,155,0.32)"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M30 11 Q37  2 44 11"
            stroke="rgba(90,110,155,0.28)"
            strokeWidth="1.4"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M58 28 Q65 19 72 28"
            stroke="rgba(90,110,155,0.26)"
            strokeWidth="1.3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M82 14 Q87  8 92 14"
            stroke="rgba(90,110,155,0.20)"
            strokeWidth="1.1"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
      <motion.div
        className="absolute block dark:hidden pointer-events-none"
        style={{ top: "30%", left: "45%" }}
        animate={{ x: [0, 12, 0] }}
        transition={{
          duration: 44,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 14,
        }}
      >
        <svg
          width="72"
          height="44"
          viewBox="0 0 72 44"
          fill="none"
        >
          <path
            d="M5 28 Q11 20 17 28"
            stroke="rgba(110,130,175,0.26)"
            strokeWidth="1.3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M24 14 Q30  6 36 14"
            stroke="rgba(110,130,175,0.24)"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M44 32 Q49 25 54 32"
            stroke="rgba(110,130,175,0.20)"
            strokeWidth="1.0"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* ── Borboletas delicadas — light mode ── */}
      <motion.div
        className="absolute block dark:hidden pointer-events-none"
        style={{ top: "40%", left: "20%" }}
        animate={{ y: [0, -9, 0], rotate: [-3, 3, -3] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          width="22"
          height="19"
          viewBox="0 0 22 19"
          fill="none"
          opacity="0.55"
        >
          <path
            d="M11 9.5C8.5 4.5 1.5 5.5 2.5 9.5C1.5 13.5 8.5 14.5 11 9.5Z"
            fill="rgba(155,135,210,0.38)"
          />
          <path
            d="M11 9.5C13.5 4.5 20.5 5.5 19.5 9.5C20.5 13.5 13.5 14.5 11 9.5Z"
            fill="rgba(155,135,210,0.36)"
          />
          <line
            x1="11"
            y1="5"
            x2="11"
            y2="14"
            stroke="rgba(100,80,155,0.30)"
            strokeWidth="0.8"
          />
          <path
            d="M11 5 L9 2 M11 5 L13 2"
            stroke="rgba(100,80,155,0.22)"
            strokeWidth="0.7"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
      <motion.div
        className="absolute block dark:hidden pointer-events-none"
        style={{ top: "18%", left: "58%" }}
        animate={{ y: [0, -7, 0], rotate: [2, -2, 2] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <svg
          width="17"
          height="15"
          viewBox="0 0 17 15"
          fill="none"
          opacity="0.45"
        >
          <path
            d="M8.5 7.5C6.5 3.5 1 4.5 2 7.5C1 10.5 6.5 11.5 8.5 7.5Z"
            fill="rgba(175,155,220,0.42)"
          />
          <path
            d="M8.5 7.5C10.5 3.5 16 4.5 15 7.5C16 10.5 10.5 11.5 8.5 7.5Z"
            fill="rgba(175,155,220,0.40)"
          />
          <line
            x1="8.5"
            y1="4"
            x2="8.5"
            y2="11"
            stroke="rgba(120,100,170,0.28)"
            strokeWidth="0.7"
          />
        </svg>
      </motion.div>

      {/* Logo orbital — apenas um, sutil, canto inferior */}
      <IdentityOrbit
        size={52}
        className="bottom-16 right-[12%]"
        delay={3.5}
      />

      {/* Shooting stars */}
      <motion.div
        className="absolute"
        style={{
          top: "16%",
          left: "4%",
          width: 100,
          height: 1.5,
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.75), transparent)",
          borderRadius: 2,
          transform: "rotate(-22deg)",
        }}
        animate={{ x: [0, 300], opacity: [0, 1, 0] }}
        transition={{
          duration: 1.1,
          repeat: Infinity,
          repeatDelay: 8,
          ease: "easeOut",
        }}
      />
      <motion.div
        className="absolute"
        style={{
          top: "58%",
          right: "6%",
          width: 70,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(196,181,253,0.8), transparent)",
          borderRadius: 2,
          transform: "rotate(-18deg)",
        }}
        animate={{ x: [0, -220], opacity: [0, 1, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 12,
          ease: "easeOut",
          delay: 5,
        }}
      />

      {/* Campo de estrelas */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            background: "white",
          }}
          animate={{
            opacity: [
              star.opacity * 0.3,
              star.opacity,
              star.opacity * 0.3,
            ],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Constellation clusters */}
      <svg
        className="absolute top-6 left-[54%]"
        width="80"
        height="60"
        viewBox="0 0 80 60"
        fill="none"
      >
        <line
          x1="10"
          y1="10"
          x2="40"
          y2="30"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="0.8"
        />
        <line
          x1="40"
          y1="30"
          x2="70"
          y2="15"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="0.8"
        />
        <line
          x1="40"
          y1="30"
          x2="55"
          y2="55"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth="0.8"
        />
        <circle
          cx="10"
          cy="10"
          r="2"
          fill="rgba(255,255,255,0.28)"
        />
        <circle
          cx="40"
          cy="30"
          r="2.5"
          fill="rgba(255,255,255,0.35)"
        />
        <circle
          cx="70"
          cy="15"
          r="1.5"
          fill="rgba(255,255,255,0.22)"
        />
        <circle
          cx="55"
          cy="55"
          r="2"
          fill="rgba(255,255,255,0.22)"
        />
      </svg>
      <svg
        className="absolute bottom-14 right-[16%]"
        width="60"
        height="50"
        viewBox="0 0 60 50"
        fill="none"
      >
        <line
          x1="5"
          y1="40"
          x2="30"
          y2="10"
          stroke="rgba(196,181,253,0.1)"
          strokeWidth="0.8"
        />
        <line
          x1="30"
          y1="10"
          x2="55"
          y2="35"
          stroke="rgba(196,181,253,0.1)"
          strokeWidth="0.8"
        />
        <circle
          cx="5"
          cy="40"
          r="2"
          fill="rgba(196,181,253,0.32)"
        />
        <circle
          cx="30"
          cy="10"
          r="2.5"
          fill="rgba(196,181,253,0.38)"
        />
        <circle
          cx="55"
          cy="35"
          r="1.5"
          fill="rgba(196,181,253,0.28)"
        />
      </svg>

      {/* Sparkle glyphs animados */}
      <motion.span
        className="absolute top-16 right-[38%] text-primary/25 text-2xl"
        style={{ fontFamily: "system-ui" }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.25, 0.6, 0.25],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✦
      </motion.span>
      <motion.span
        className="absolute bottom-24 left-[20%] text-xl"
        style={{
          fontFamily: "system-ui",
          color: "rgba(196,181,253,0.35)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.7, 0.3],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        ✦
      </motion.span>
      <motion.span
        className="absolute top-40 left-[9%] text-lg"
        style={{
          fontFamily: "system-ui",
          color: "rgba(253,224,71,0.35)",
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.65, 0.3],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        ★
      </motion.span>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Netflix logo img
───────────────────────────────────────────────────────────── */
function NetflixLogo({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <img
      src={netflixLogoPng}
      alt=""
      aria-hidden
      className={className}
      style={style}
      draggable={false}
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   CIEE+ watermark — bússola/compasso
───────────────────────────────────────────────────────────── */
function CieePlus({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden
    >
      <circle
        cx="60"
        cy="60"
        r="54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 3"
      />
      <circle
        cx="60"
        cy="60"
        r="36"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line
        x1="60"
        y1="6"
        x2="60"
        y2="114"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <line
        x1="6"
        y1="60"
        x2="114"
        y2="60"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <polygon
        points="60,12 64,24 60,30 56,24"
        fill="currentColor"
        fillOpacity="0.6"
      />
      <polygon
        points="60,90 64,96 60,108 56,96"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <polygon
        points="12,60 24,56 30,60 24,64"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <polygon
        points="90,60 96,56 108,60 96,64"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <circle
        cx="60"
        cy="60"
        r="4"
        fill="currentColor"
        fillOpacity="0.5"
      />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────────
   SVG brand watermarks for secondary case cards
───────────────────────────────────────────────────────────── */
function ConvexMindsetIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden
    >
      <circle
        cx="30"
        cy="30"
        r="16"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle
        cx="90"
        cy="30"
        r="16"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle
        cx="30"
        cy="90"
        r="16"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle
        cx="90"
        cy="90"
        r="16"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle
        cx="60"
        cy="60"
        r="5"
        fill="currentColor"
        fillOpacity="0.45"
      />
      <line
        x1="46"
        y1="30"
        x2="74"
        y2="30"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="3 2"
      />
      <line
        x1="46"
        y1="90"
        x2="74"
        y2="90"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="3 2"
      />
      <line
        x1="30"
        y1="46"
        x2="30"
        y2="74"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="3 2"
      />
      <line
        x1="90"
        y1="46"
        x2="90"
        y2="74"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="3 2"
      />
      <line
        x1="41"
        y1="41"
        x2="55"
        y2="55"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeDasharray="2 2"
      />
      <line
        x1="79"
        y1="41"
        x2="65"
        y2="55"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeDasharray="2 2"
      />
      <line
        x1="41"
        y1="79"
        x2="55"
        y2="65"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeDasharray="2 2"
      />
      <line
        x1="79"
        y1="79"
        x2="65"
        y2="65"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeDasharray="2 2"
      />
    </svg>
  );
}

function DesignThinkingIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden
    >
      <path
        d="M10 60 L35 22 L60 60 L35 98 Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <path
        d="M60 60 L85 22 L110 60 L85 98 Z"
        stroke="currentColor"
        strokeWidth="1.3"
      />
      <circle
        cx="10"
        cy="60"
        r="3.5"
        fill="currentColor"
        fillOpacity="0.4"
      />
      <circle
        cx="35"
        cy="22"
        r="3"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <circle
        cx="60"
        cy="60"
        r="4"
        fill="currentColor"
        fillOpacity="0.55"
      />
      <circle
        cx="85"
        cy="22"
        r="3"
        fill="currentColor"
        fillOpacity="0.3"
      />
      <circle
        cx="110"
        cy="60"
        r="3.5"
        fill="currentColor"
        fillOpacity="0.4"
      />
      <line
        x1="10"
        y1="60"
        x2="110"
        y2="60"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeDasharray="3 3"
        opacity="0.3"
      />
    </svg>
  );
}

function DiscoveryFlowIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden
    >
      <circle
        cx="22"
        cy="32"
        r="12"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle
        cx="60"
        cy="32"
        r="12"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle
        cx="98"
        cy="32"
        r="12"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <line
        x1="34"
        y1="32"
        x2="47"
        y2="32"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M44 29 L48 32 L44 35"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="72"
        y1="32"
        x2="85"
        y2="32"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M82 29 L86 32 L82 35"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="22"
        y1="44"
        x2="22"
        y2="60"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="2 2"
      />
      <line
        x1="60"
        y1="44"
        x2="60"
        y2="60"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="2 2"
      />
      <line
        x1="98"
        y1="44"
        x2="98"
        y2="60"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeDasharray="2 2"
      />
      <rect
        x="10"
        y="60"
        width="24"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <rect
        x="48"
        y="60"
        width="24"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <rect
        x="86"
        y="60"
        width="24"
        height="16"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <line
        x1="34"
        y1="68"
        x2="48"
        y2="68"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M45 65.5 L48 68 L45 70.5"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="72"
        y1="68"
        x2="86"
        y2="68"
        stroke="currentColor"
        strokeWidth="0.8"
      />
      <path
        d="M83 65.5 L86 68 L83 70.5"
        stroke="currentColor"
        strokeWidth="0.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="22"
        y1="76"
        x2="22"
        y2="90"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeDasharray="2 2"
      />
      <line
        x1="60"
        y1="76"
        x2="60"
        y2="90"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeDasharray="2 2"
      />
      <line
        x1="98"
        y1="76"
        x2="98"
        y2="90"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeDasharray="2 2"
      />
      <line
        x1="22"
        y1="90"
        x2="98"
        y2="90"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle
        cx="60"
        cy="100"
        r="8"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}

function SmallCaseCard({ c }: { c: (typeof cases)[0] }) {
  const WatermarkIcon =
    c.slug === "convex-mindset"
      ? ConvexMindsetIcon
      : c.slug === "design-thinking"
        ? DesignThinkingIcon
        : c.slug === "discovery-flow"
          ? DiscoveryFlowIcon
          : null;

  return (
    <Link
      to={`/case/${c.slug}`}
      className="block rounded-2xl border border-border bg-card group overflow-hidden relative h-full"
    >
      {/* Hover: accent border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-400"
        style={{
          boxShadow: `inset 0 0 0 1px ${c.accentColor}55`,
        }}
      />
      {/* Soft accent tint */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 80% 110%, ${c.accentColor}12 0%, transparent 70%)`,
        }}
      />
      {/* Corner glow */}
      <div
        className="absolute bottom-0 right-0 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${c.accentColor}20 0%, transparent 70%)`,
          transform: "translate(35%, 35%)",
        }}
      />
      {/* Brand watermark */}
      {WatermarkIcon && (
        <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none">
          <WatermarkIcon
            className="w-[150px] h-[150px] select-none transition-all duration-700 translate-x-10 opacity-0 group-hover:translate-x-2 group-hover:opacity-[0.09]"
            style={{ color: c.accentColor }}
          />
        </div>
      )}
      <div className="p-6 sm:p-8 h-full flex flex-col relative">
        <div className="flex items-center justify-between mb-5">
          <span
            className="text-xs font-bold"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: c.accentColor,
            }}
          >
            {c.num}
          </span>
          <span
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {c.year}
          </span>
        </div>
        <h3
          className="text-xl font-bold mb-1 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {c.title}
        </h3>
        <p className="text-xs text-muted-foreground mb-4">
          {c.subtitle}
        </p>
        <p className="text-sm text-muted-foreground font-light leading-relaxed flex-1">
          {c.desc}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-5">
          {c.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-muted-foreground border border-border px-2 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300 mt-5 text-sm font-semibold"
          style={{ color: c.accentColor }}
        >
          Ver case <ArrowRight size={12} />
        </div>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────────────────────────
   Cinematic featured card — Netflix e CIEE+
───────────────────────────────────────────────────────────── */
function CinematicFeaturedCard({
  c,
}: {
  c: (typeof cases)[0];
}) {
  const isNetflix = c.brand === "netflix";
  const isCiee = c.brand === "Confidencial";

  return (
    <Link
      to={`/case/${c.slug}`}
      className="block rounded-2xl border border-border bg-card group overflow-hidden relative h-full"
    >
      {/* Hover: accent border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-400"
        style={{
          boxShadow: `inset 0 0 0 1px ${c.accentColor}55`,
        }}
      />

      {/* Soft accent tint on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(ellipse 80% 60% at 80% 110%, ${c.accentColor}12 0%, transparent 70%)`,
        }}
      />

      {/* Corner glow */}
      <div
        className="absolute bottom-0 right-0 w-56 h-56 rounded-full opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${c.accentColor}18 0%, transparent 70%)`,
          transform: "translate(35%, 35%)",
        }}
      />

      {/* Brand watermark */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none">
        {isNetflix && (
          <NetflixLogo className="w-[200px] h-[200px] object-contain select-none transition-all duration-700 translate-x-12 opacity-0 group-hover:translate-x-4 group-hover:opacity-[0.11]" />
        )}
        {isCiee && (
          <CieePlus
            className="w-[180px] h-[180px] select-none transition-all duration-700 translate-x-12 opacity-0 group-hover:translate-x-4 group-hover:opacity-[0.10]"
            style={{ color: c.accentColor }}
          />
        )}
      </div>

      {/* Content */}
      <div className="p-5 sm:p-8 h-full flex flex-col relative">
        <div className="flex items-center gap-3 mb-6">
          <span
            className="text-xs font-medium"
            style={{
              fontFamily: "'DM Mono', monospace",
              color: c.accentColor,
            }}
          >
            {c.num}
          </span>
          <span
            className="text-xs font-semibold border px-2.5 py-0.5 rounded-full"
            style={{
              color: c.accentColor,
              borderColor: `${c.accentColor}40`,
              background: `${c.accentColor}10`,
            }}
          >
            Destaque ✦
          </span>
          {isNetflix && (
            <span
              className="ml-auto flex items-center gap-1.5 text-[10px] font-bold tracking-wide px-2.5 py-0.5 rounded-full"
              style={{
                color: "#e50914",
                background: "rgba(229,9,20,0.10)",
                border: "1px solid rgba(229,9,20,0.25)",
              }}
            >
              <NetflixLogo className="w-3 h-3 object-contain" />
              Netflix
            </span>
          )}
          {isCiee && (
            <span
              className="ml-auto flex items-center gap-1.5 text-[10px] font-bold tracking-widest px-2.5 py-0.5 rounded-full uppercase"
              style={{
                color: "#d97706",
                background: "rgba(217,119,6,0.10)",
                border: "1px solid rgba(217,119,6,0.30)",
              }}
            >
              <svg
                width="9"
                height="9"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              NDA
            </span>
          )}
        </div>

        <h2
          className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight mb-3 flex-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {c.title}
        </h2>
        <p className="text-muted-foreground font-light mb-6 leading-relaxed text-sm">
          {c.desc}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {c.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-muted-foreground border border-border px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p
              className="text-xs text-muted-foreground"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              {c.subtitle}
            </p>
            <p className="text-xs text-muted-foreground">
              {c.year}
            </p>
          </div>
          <div
            className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300 text-sm font-semibold"
            style={{ color: c.accentColor }}
          >
            Ver case <ArrowRight size={13} />
          </div>
        </div>
      </div>
    </Link>
  );
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─────────────────────────────────────────────────────────────
   Linhas de exemplo da tabela de Gestão de Hipóteses
───────────────────────────────────────────────────────────── */
const hypothesisRows = [
  {
    hypothesis:
      "O usuário não completa o cadastro por falta de confiança na plataforma",
    question: "O que causa abandono no passo 3?",
    method: "Entrevistas + Session Recording",
    evidence:
      "78% citaram medo de spam como barreira principal",
  },
  {
    hypothesis:
      "A demora no tempo de resposta aumenta o churn no primeiro mês",
    question: "Qual é a correlação entre SLA e retenção?",
    method: "Analytics + Cohort Analysis",
    evidence: "Resposta > 24h = 2.3× mais churn confirmado",
  },
  {
    hypothesis:
      "Usuários power não usam a feature X por desconhecimento",
    question: "A feature X é visível no fluxo atual?",
    method: "Heuristic Evaluation + Tree Test",
    evidence: "Apenas 12% encontraram sem ajuda externa",
  },
];

/* ─────────────────────────────────────────────────────────────
   HypothesisTable — a Gestão de Hipóteses em prática

   Era a metade final da antiga DiscoveryProcess. Continua no
   mesmo lugar da página; o que saiu daqui foi o navegador de
   fases, que virou a seção em órbita no fim da home.
───────────────────────────────────────────────────────────── */
function HypothesisTable() {
  return (
    <section className="border-y border-border/40">
      <div className="max-w-6xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-8 2xl:px-16 py-14 sm:py-20">
        <motion.div
          className="flex items-center gap-4 mb-10 sm:mb-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-muted-foreground whitespace-nowrap"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            <IconOrbit size={14} className="shrink-0" />
            Gestão de Hipóteses
          </h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        {/* Gestão de Hipóteses table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="rounded-2xl border border-border overflow-hidden"
          style={{ background: "var(--card)" }}
        >
          <div
            className="px-5 sm:px-8 py-5 border-b border-border flex flex-col sm:flex-row sm:items-center gap-4"
            style={{
              background:
                "linear-gradient(90deg, rgba(124,58,237,0.07) 0%, transparent 70%)",
            }}
          >
            <div>
              <div className="flex items-center gap-2.5 mb-1">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#7C3AED" }}
                />
                <span
                  className="text-xs uppercase tracking-widest text-muted-foreground"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Metodologia · Fase 02 — Entender
                </span>
              </div>
              <h4
                className="flex items-center gap-2 text-lg font-bold text-foreground"
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                <Target
                  size={14}
                  style={{ color: "#7C3AED" }}
                  className="shrink-0"
                />
                Gestão de Hipóteses em prática
              </h4>
            </div>
            <div className="sm:ml-auto flex items-center gap-2 flex-wrap">
              {[
                "Suposição",
                "→",
                "Pergunta",
                "→",
                "Método",
                "→",
                "Evidência",
              ].map((item, i) =>
                item === "→" ? (
                  <ArrowRight
                    key={i}
                    size={10}
                    className="text-muted-foreground"
                  />
                ) : (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full border text-muted-foreground"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--muted)",
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Dados fictícios notice */}
          <div
            className="px-5 sm:px-8 py-3 border-b border-border flex items-center gap-2.5"
            style={{ background: "rgba(245,158,11,0.06)" }}
          >
            <span
              className="text-sm select-none"
              style={{ fontFamily: "system-ui" }}
            >
              ⚠
            </span>
            <p
              className="text-xs text-muted-foreground"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <span
                className="font-semibold"
                style={{ color: "#f59e0b" }}
              >
                Dados fictícios
              </span>{" "}
              — esta tabela usa exemplos ilustrativos para
              demonstrar a didática da metodologia.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr
                  className="border-b border-border"
                  style={{ background: "var(--muted)" }}
                >
                  {[
                    "Hipótese (suposição)",
                    "Pergunta investigável",
                    "Método",
                    "Evidência encontrada",
                  ].map((h) => (
                    <th
                      key={h}
                      className="px-5 py-3 text-left text-xs font-semibold text-muted-foreground whitespace-nowrap"
                      style={{
                        fontFamily: "'DM Mono', monospace",
                      }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {hypothesisRows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-border last:border-0"
                    style={{
                      background:
                        i % 2 === 0
                          ? "transparent"
                          : "var(--muted)",
                    }}
                  >
                    <td
                      className="px-5 py-4 text-sm text-foreground font-medium"
                      style={{ maxWidth: 240 }}
                    >
                      {row.hypothesis}
                    </td>
                    <td
                      className="px-5 py-4 text-sm text-muted-foreground font-light"
                      style={{ maxWidth: 200 }}
                    >
                      {row.question}
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className="text-xs font-medium px-2.5 py-1 rounded-full border text-muted-foreground whitespace-nowrap"
                        style={{
                          borderColor: "var(--border)",
                          background: "var(--card)",
                        }}
                      >
                        {row.method}
                      </span>
                    </td>
                    <td
                      className="px-5 py-4"
                      style={{ maxWidth: 220 }}
                    >
                      <span className="flex items-start gap-2">
                        <span
                          className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full block"
                          style={{ background: "#10b981" }}
                        />
                        <span className="text-sm text-foreground font-medium">
                          {row.evidence}
                        </span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            className="px-5 sm:px-8 py-4 border-t border-border flex items-center gap-2"
            style={{ background: "var(--muted)" }}
          >
            <span
              className="text-xs text-muted-foreground"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              ✦ Cada hipótese tem dono, prazo e critério de
              validação — antes de qualquer sprint começar.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


export default function Home() {
  return (
    <div style={{ fontFamily: "'Outfit', sans-serif" }}>
      {/* ── Hero ── */}
      <section className="max-w-6xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-8 2xl:px-16 pt-14 sm:pt-20 pb-20 sm:pb-28 border-b border-border relative">
        <CosmicField />

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold px-3.5 py-1.5 rounded-full mb-10"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <IconComet size={12} className="opacity-70" />
            Disponível para contratação
          </motion.div>

          <div className="grid grid-cols-12 gap-8 items-start">
            <motion.div
              className="col-span-12 lg:col-span-7 pt-2"
              variants={stagger}
              initial="hidden"
              animate="show"
            >
              <motion.h1
                variants={fadeUp}
                className="text-5xl sm:text-6xl lg:text-8xl 2xl:text-9xl font-black leading-[0.88] tracking-tight mb-6 sm:mb-8 text-foreground"
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Oi, eu sou
                <br />
                <em className="not-italic text-primary">
                  Michel.
                </em>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-xl text-muted-foreground font-light max-w-lg leading-relaxed mb-4"
              >
                Product Designer que{" "}
                <span className="text-foreground font-medium">
                  ama pessoas
                </span>
                ,{" "}
                <span className="text-foreground font-medium">
                  vive de tecnologia
                </span>{" "}
                e acredita que um produto bem desenhado é quase
                um ato de carinho.
              </motion.p>
              <motion.p
                variants={fadeUp}
                className="text-muted-foreground font-light max-w-lg leading-relaxed mb-10"
              >
                9 anos traduzindo caos em clareza — de{" "}
                <span className="font-medium text-foreground">
                  Globo, Netflix e Globoplay
                </span>{" "}
                até squads de IA. Com perfil híbrido de designer
                + PM + dev-aware, entrego soluções que realmente
                saem do papel.
              </motion.p>
              <motion.div
                variants={fadeUp}
                className="flex flex-wrap gap-3"
              >
                <a
                  href="mailto:michel@mikhaelangelo.com.br"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
                >
                  <MailIcon size={13} />
                  Vamos conversar →
                </a>
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border text-sm font-medium px-5 py-2.5 rounded-full hover:border-primary/40 transition-colors text-muted-foreground hover:text-foreground"
                >
                  <FileText size={13} />
                  Ver currículo
                </a>
                <a
                  href="https://www.linkedin.com/in/mikhaelangelo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-border text-sm font-medium px-5 py-2.5 rounded-full hover:border-primary/40 transition-colors text-muted-foreground hover:text-foreground"
                >
                  LinkedIn
                </a>
              </motion.div>
            </motion.div>

            {/* Right column — z-10 garante que o card fica acima dos elementos cósmicos */}
            <div className="col-span-12 lg:col-span-5 relative z-10">
              {/*
                Lua (dark) / Sol (light) — peekam do canto superior esquerdo do card.
                Wrapper hidden lg:block: invisível no mobile (layout empilhado).
                Moon3D/Sun3D são absolute, posicionados pelo className.
                DOM order: vêm antes do ProfileCard → ficam atrás dentro do mesmo stacking context.
              */}
              <div className="hidden lg:block">
                <Moon3D
                  size={120}
                  className="-top-6 -left-10"
                  delay={0}
                />
                <Sun3D
                  size={120}
                  className="-top-6 -left-10"
                  delay={0}
                />
              </div>
              <ProfileCard />
            </div>
          </div>
        </div>
      </section>

      {/* ── Cases ── */}
      <section className="max-w-6xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-8 2xl:px-16 py-14 sm:py-20">
        <motion.div
          className="flex items-center gap-4 mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2
            className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-widest text-muted-foreground whitespace-nowrap"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            <IconConstellation size={14} className="shrink-0" />
            Cases Selecionados
          </h2>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 items-stretch"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cases
            .filter((c) => c.featured)
            .map((c) => (
              <motion.div
                key={c.slug}
                variants={fadeUp}
                className="h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <CinematicFeaturedCard c={c} />
              </motion.div>
            ))}
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
        >
          {cases
            .filter((c) => !c.featured)
            .map((c) => (
              <motion.div
                key={c.slug}
                variants={fadeUp}
                className="h-full"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <SmallCaseCard c={c} />
              </motion.div>
            ))}
        </motion.div>
      </section>

      {/* ── Gestão de Hipóteses ── */}
      <HypothesisTable />

      {/* ── About ── */}
      <section className="border-t border-border/40">
        <div className="max-w-6xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-8 2xl:px-16 py-14 sm:py-20">
          <div className="grid grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-start">
            <motion.div
              className="col-span-12 lg:col-span-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="flex items-center gap-1.5 text-xs text-muted-foreground uppercase tracking-widest mb-6"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                <BookOpen size={12} className="shrink-0" />{" "}
                Sobre
              </p>
              <h3
                className="text-3xl lg:text-4xl 2xl:text-5xl font-bold leading-tight mb-6"
                style={{
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Design é a arte de
                <br />
                <em>simplificar o caos.</em>
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Comecei em Sistemas de Informação porque sempre
                quis entender como as coisas funcionam por
                dentro. Mas foi no design que descobri que
                tecnologia sem empatia é só código solto.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed mb-4">
                Hoje trabalho na interseção entre produto,
                design e engenharia — um espaço raro onde
                consigo fazer produtos que são tecnicamente
                viáveis, visualmente coerentes e, acima de tudo,
                úteis para pessoas de verdade.
              </p>
              <p className="text-muted-foreground font-light leading-relaxed">
                Quando não estou no Figma, provavelmente estou
                defendendo por que a jornada do usuário importa
                mais do que a tela perfeita. ☕
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={CV_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm border border-border px-4 py-2 rounded-full text-muted-foreground hover:text-foreground hover:border-foreground/20 transition-all"
                >
                  <FileText size={12} />
                  Currículo completo
                </a>
              </div>
            </motion.div>

            <motion.div
              className="col-span-12 lg:col-span-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <p
                className="flex items-center gap-1.5 text-xs text-muted-foreground uppercase tracking-widest mb-5"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                <Star size={12} className="shrink-0" />
                Jornada
              </p>
              <div className="space-y-3">
                {[
                  {
                    company: "[Empresa] · NDA",
                    role: "Product Designer Sênior & PM",
                    period: "2024 – 2026",
                    note: "Liderou squad técnica de 6 pessoas (IA e SRE) num ecossistema digital do zero.",
                    color: "#ff6b47",
                  },
                  {
                    company: "Take Blip",
                    role: "UX Designer Sênior",
                    period: "2021 – 2023",
                    note: "Projetos para Netflix e Globoplay. Discovery, pesquisa de campo, mentoria de designers.",
                    color: "#e50914",
                  },
                  {
                    company: "GetInfo",
                    role: "UX/UI Designer Pleno",
                    period: "2020 – 2021",
                    note: "Criou Design System do zero, reduzindo atrito no desenvolvimento de novas features.",
                    color: "#60a5fa",
                  },
                ].map((exp, i) => (
                  <motion.div
                    key={exp.company}
                    className="rounded-xl border border-border bg-card p-5 flex gap-4 items-start"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.1,
                    }}
                  >
                    <div
                      className="w-1 self-stretch rounded-full shrink-0"
                      style={{ background: exp.color }}
                    />
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <p className="font-semibold text-sm">
                          {exp.company}
                        </p>
                        <span
                          className="text-xs text-muted-foreground shrink-0"
                          style={{
                            fontFamily: "'DM Mono', monospace",
                          }}
                        >
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">
                        {exp.role}
                      </p>
                      <p className="text-sm text-muted-foreground font-light">
                        {exp.note}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="border-t border-border mt-16 pt-12"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p
              className="flex items-center gap-1.5 text-xs text-muted-foreground uppercase tracking-widest mb-6"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <Lightbulb size={12} className="shrink-0" />
              No meu toolkit
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Figma",
                "Design Systems",
                "UX Research",
                "Product Discovery",
                "Service Blueprint",
                "Arquitetura de IA",
                "Power BI",
                "Miro",
                "Agile/Scrum",
                "OKRs",
                "Handoff Técnico",
                "APIs",
                "Visão de Front-end",
                "Facilitação de Workshops",
              ].map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: i * 0.03,
                  }}
                  className="text-xs text-muted-foreground border border-border bg-card px-3 py-1.5 rounded-full hover:border-primary/30 hover:text-foreground transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="max-w-6xl 2xl:max-w-[96rem] mx-auto px-4 sm:px-8 2xl:px-16 py-16 sm:py-24 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <IconSparkle
            size={18}
            className="mx-auto mb-2 text-primary opacity-60"
          />
          <h2
            className="text-4xl lg:text-5xl 2xl:text-6xl font-black mb-6 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Bora criar algo
            <br />
            <em className="not-italic text-primary">
              incrível juntos?
            </em>
          </h2>
          <p className="text-muted-foreground font-light max-w-sm mx-auto mb-10 leading-relaxed">
            Adoro desafios complexos e times que acreditam que
            design faz diferença de verdade.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:michel@mikhaelangelo.com.br"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-7 py-3 rounded-full hover:opacity-90 transition-opacity text-sm"
            >
              Manda um oi →
            </a>
            <a
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border/50 text-sm font-medium px-7 py-3 rounded-full hover:border-primary/30 transition-colors text-muted-foreground hover:text-foreground"
            >
              <FileText size={13} />
              Ver CV
            </a>
          </div>
        </motion.div>
      </section>

      {/* Breathing room so the fixed corner moon is visible */}
      <div className="h-20 sm:h-32" aria-hidden />

      {/* ── Discovery em órbita ──
          Fica por último de propósito: o sol precisa encostar no
          rodapé para a coroa ser cortada pela borda da tela, e
          não por uma faixa vazia. */}
      <DiscoveryOrbit />
    </div>
  );
}