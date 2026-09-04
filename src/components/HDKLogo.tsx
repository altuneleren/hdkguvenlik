import React from "react";

interface HDKLogoProps {
  className?: string;
  variant?: "red-d" | "match-image";
  height?: number;
}

export default function HDKLogo({
  className = "",
  variant = "red-d",
  height = 44,
}: HDKLogoProps) {
  // Ratio 600:240 is 2.5 : 1
  const width = Math.round(height * 2.5);
  const isRedD = variant === "red-d";

  // Colors for D vs (H & K)
  // When isRedD: H & K are Chrome White, D is Vivid 3D Metallic Red with Neon Glow
  // When match-image: H & K are 3D Metallic Red, D is Chrome White
  const hFace = isRedD ? "url(#chrome-face-hdk)" : "url(#red-face-hdk)";
  const hStroke = isRedD ? "#FFFFFF" : "#FF85A1";
  const hTopHl = isRedD ? "url(#chrome-hl-hdk)" : "url(#red-hl-hdk)";
  const hFilter = isRedD ? "url(#chrome-depth-hdk)" : "url(#red-depth-hdk)";

  const dFace = isRedD ? "url(#red-face-hdk)" : "url(#chrome-face-hdk)";
  const dStroke = isRedD ? "#FFB3C1" : "#FFFFFF";
  const dTopHl = isRedD ? "url(#red-hl-hdk)" : "url(#chrome-hl-hdk)";
  const dFilter = isRedD ? "url(#red-glow-strong-hdk)" : "url(#chrome-depth-hdk)";

  const kFace = isRedD ? "url(#chrome-face-hdk)" : "url(#red-face-hdk)";
  const kStroke = isRedD ? "#FFFFFF" : "#FF85A1";
  const kTopHl = isRedD ? "url(#chrome-hl-hdk)" : "url(#red-hl-hdk)";
  const kFilter = isRedD ? "url(#chrome-depth-hdk)" : "url(#red-depth-hdk)";

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 600 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rounded-xl overflow-hidden shadow-2xl transition-transform hover:scale-[1.02]"
      >
        <defs>
          {/* Background Dark Panel */}
          <radialGradient id="bg-grad-hdk" cx="50%" cy="50%" r="75%">
            <stop offset="0%" stopColor="#141824" />
            <stop offset="100%" stopColor="#040608" />
          </radialGradient>

          {/* Chrome / Mirror Silver Gradient */}
          <linearGradient id="chrome-face-hdk" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="18%" stopColor="#F1F5F9" />
            <stop offset="48%" stopColor="#94A3B8" />
            <stop offset="52%" stopColor="#FFFFFF" />
            <stop offset="76%" stopColor="#CBD5E1" />
            <stop offset="100%" stopColor="#475569" />
          </linearGradient>

          <linearGradient id="chrome-hl-hdk" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="50%" stopColor="#E2E8F0" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="1" />
          </linearGradient>

          {/* Ultra-Vibrant Candy 3D Red Gradient (High Luminance) */}
          <linearGradient id="red-face-hdk" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FF6B8B" />
            <stop offset="16%" stopColor="#FF1E42" />
            <stop offset="46%" stopColor="#C9002B" />
            <stop offset="52%" stopColor="#FF3355" />
            <stop offset="78%" stopColor="#E6002E" />
            <stop offset="100%" stopColor="#8A001A" />
          </linearGradient>

          <linearGradient id="red-hl-hdk" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#FFAEC0" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF2E50" stopOpacity="0.95" />
          </linearGradient>

          {/* High-Luminance Red Glow Filter */}
          <filter id="red-glow-strong-hdk" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000000" floodOpacity="0.9" />
            <feDropShadow dx="0" dy="0" stdDeviation="7" floodColor="#FF1E42" floodOpacity="0.8" />
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#FFAEC0" floodOpacity="0.5" />
          </filter>

          {/* Chrome Depth Filter */}
          <filter id="chrome-depth-hdk" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000000" floodOpacity="0.95" />
            <feDropShadow dx="0" dy="1" stdDeviation="4" floodColor="#FFFFFF" floodOpacity="0.5" />
          </filter>

          {/* Red Base Depth Filter */}
          <filter id="red-depth-hdk" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000000" floodOpacity="0.95" />
            <feDropShadow dx="0" dy="2" stdDeviation="5" floodColor="#FF1E42" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Background Dark Capsule */}
        <rect width="600" height="240" fill="url(#bg-grad-hdk)" rx="24" stroke="#1E293B" strokeWidth="2" />

        {/* Subtle Floor Ambient Shadow */}
        <ellipse cx="300" cy="195" rx="260" ry="12" fill="#000000" opacity="0.85" />

        <g transform="translate(60, 45)">
          {/* ==================== LETTER H ==================== */}
          <g filter={hFilter}>
            {/* Extrusion Base */}
            <path
              d="M 0 115 L 42 115 L 42 75 L 88 75 L 88 115 L 130 115 L 130 0 L 88 0 L 88 40 L 42 40 L 42 0 L 0 0 Z"
              fill="#090D16"
              transform="translate(0, 4)"
            />
            {/* Main Face */}
            <path
              d="M 0 110 L 42 110 L 42 70 L 88 70 L 88 110 L 130 110 L 130 0 L 88 0 L 88 40 L 42 40 L 42 0 L 0 0 Z"
              fill={hFace}
              stroke={hStroke}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Top Bevel Highlight */}
            <polygon points="0,0 42,0 36,6 6,6" fill={hTopHl} />
            <polygon points="88,0 130,0 124,6 94,6" fill={hTopHl} />
            <polygon points="42,40 88,40 84,46 46,46" fill={hTopHl} />
            {/* Specular Horizontal Sheen */}
            <rect x="2" y="52" width="126" height="4" fill="#FFFFFF" opacity={isRedD ? "0.6" : "0.35"} />
          </g>

          {/* ==================== LETTER D (PROMINENT, VIBRANT, CRYSTAL CLEAR) ==================== */}
          <g filter={dFilter} transform="translate(150, 0)">
            {/* Extrusion Base Shadow */}
            <path
              d="M 0 0 L 85 0 C 130 0 152 26 152 57 C 152 88 130 114 L 0 114 Z"
              fill="#090D16"
              transform="translate(0, 4)"
            />

            {/* Main D Solid Body */}
            <path
              d="M 0 0 L 85 0 C 130 0 152 26 152 55 C 152 84 130 110 L 0 110 Z"
              fill={dFace}
              stroke={dStroke}
              strokeWidth="2"
              strokeLinejoin="round"
            />

            {/* Inner Cutout (Hole) - Explicit dark fill with inner stroke for guaranteed visibility */}
            <path
              d="M 40 34 L 75 34 C 92 34 104 44 104 55 C 104 66 92 76 75 76 L 40 76 Z"
              fill="#060911"
              stroke={isRedD ? "#FF4D6D" : "#94A3B8"}
              strokeWidth="1.5"
            />

            {/* Distinct Inner Notch (Iconic reference shape) */}
            <rect
              x="40"
              y="49"
              width="18"
              height="12"
              rx="2"
              fill={dFace}
              stroke={dStroke}
              strokeWidth="1.2"
            />

            {/* Top Bevel Highlight Curve */}
            <path
              d="M 0 0 L 85 0 C 122 0 144 22 147 48 L 140 48 C 135 25 116 6 85 6 L 4 6 Z"
              fill={dTopHl}
            />

            {/* Center Specular Flash Flare */}
            <rect x="2" y="52" width="146" height="3.5" fill="#FFFFFF" opacity={isRedD ? "0.65" : "0.75"} />

            {/* Star Sparkle Accent */}
            <circle cx="120" cy="26" r="3.5" fill="#FFFFFF" />
            <polygon
              points="120,18 122,26 130,26 123,29 126,36 120,31 114,36 117,29 110,26 118,26"
              fill="#FFFFFF"
              opacity="0.9"
            />
          </g>

          {/* ==================== LETTER K ==================== */}
          <g filter={kFilter} transform="translate(320, 0)">
            {/* Extrusion Base */}
            <path
              d="M 0 115 L 42 115 L 42 0 L 0 0 Z M 38 65 L 100 0 L 148 0 L 75 65 L 152 115 L 102 115 L 40 70 Z"
              fill="#090D16"
              transform="translate(0, 4)"
            />
            {/* Main Face */}
            <path
              d="M 0 110 L 42 110 L 42 0 L 0 0 Z M 38 60 L 98 0 L 146 0 L 72 63 L 150 110 L 100 110 L 40 65 Z"
              fill={kFace}
              stroke={kStroke}
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            {/* Top Bevel Highlight */}
            <polygon points="0,0 42,0 36,6 6,6" fill={kTopHl} />
            <polygon points="98,0 146,0 138,6 102,6" fill={kTopHl} />
            {/* Specular Sheen */}
            <rect x="2" y="52" width="144" height="4" fill="#FFFFFF" opacity={isRedD ? "0.6" : "0.35"} />
          </g>
        </g>
      </svg>
    </div>
  );
}
