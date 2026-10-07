import React from 'react';

// Character 1: Maya - The Curious Girl (Backpack, cheerful pose)
export const CharacterMaya: React.FC<{ size?: number; className?: string }> = ({ size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 140 140" fill="none">
    {/* Body & Clothes */}
    <rect x="52" y="76" width="36" height="42" rx="14" fill="#FF7A59" />
    <path d="M46 80 Q70 65 94 80" stroke="#FFD95A" strokeWidth="6" strokeLinecap="round" />
    {/* Legs */}
    <rect x="58" y="114" width="8" height="18" rx="4" fill="#FFD0B5" />
    <rect x="74" y="114" width="8" height="18" rx="4" fill="#FFD0B5" />
    {/* Shoes */}
    <rect x="54" y="128" width="14" height="8" rx="4" fill="#55BCEB" />
    <rect x="72" y="128" width="14" height="8" rx="4" fill="#55BCEB" />
    {/* Head */}
    <circle cx="70" cy="50" r="26" fill="#FFD0B5" />
    {/* Hair (Cute pigtails) */}
    <circle cx="44" cy="44" r="14" fill="#30445A" />
    <circle cx="96" cy="44" r="14" fill="#30445A" />
    <path d="M48 40 Q70 24 92 40 C80 34 60 34 48 40Z" fill="#30445A" />
    {/* Hair bows */}
    <circle cx="48" cy="48" r="5" fill="#69D7C4" />
    <circle cx="92" cy="48" r="5" fill="#69D7C4" />
    {/* Eyes & Smile */}
    <circle cx="62" cy="50" r="3" fill="#30445A" />
    <circle cx="78" cy="50" r="3" fill="#30445A" />
    <path d="M64 58 Q70 64 76 58" stroke="#30445A" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="58" cy="56" r="3" fill="#FF7A59" opacity="0.4" />
    <circle cx="82" cy="56" r="3" fill="#FF7A59" opacity="0.4" />
    {/* Backpack */}
    <rect x="84" y="78" width="12" height="24" rx="5" fill="#A994E8" />
  </svg>
);

// Character 2: Leo - The Playful Boy (Cap, playful wave)
export const CharacterLeo: React.FC<{ size?: number }> = ({ size = 120 }) => (
  <svg width={size} height={size} viewBox="0 0 140 140" fill="none">
    {/* Body & Shorts */}
    <rect x="52" y="76" width="36" height="30" rx="10" fill="#55BCEB" />
    <rect x="52" y="102" width="36" height="14" rx="6" fill="#73B95C" />
    {/* Legs & Sneakers */}
    <rect x="58" y="112" width="8" height="18" rx="4" fill="#FFD0B5" />
    <rect x="74" y="112" width="8" height="18" rx="4" fill="#FFD0B5" />
    <rect x="54" y="126" width="14" height="8" rx="4" fill="#FF7A59" />
    <rect x="72" y="126" width="14" height="8" rx="4" fill="#FF7A59" />
    {/* Head */}
    <circle cx="70" cy="48" r="25" fill="#FFD0B5" />
    {/* Hair */}
    <path d="M46 45 C46 30 55 24 70 24 C85 24 94 30 94 45 Z" fill="#7C4A27" />
    {/* Cap */}
    <path d="M44 42 Q70 28 96 42" fill="#FFD95A" />
    <path d="M85 40 L108 42" stroke="#FFD95A" strokeWidth="5" strokeLinecap="round" />
    {/* Face Details */}
    <circle cx="62" cy="48" r="3" fill="#30445A" />
    <circle cx="78" cy="48" r="3" fill="#30445A" />
    <path d="M64 56 Q70 62 76 56" stroke="#30445A" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="58" cy="54" r="3" fill="#FF7A59" opacity="0.3" />
    <circle cx="82" cy="54" r="3" fill="#FF7A59" opacity="0.3" />
    {/* Waving Arm */}
    <path d="M86 80 Q106 65 110 50" stroke="#FFD0B5" strokeWidth="7" strokeLinecap="round" />
  </svg>
);

// Character 3: Ms. Clara - The Friendly Teacher
export const CharacterClara: React.FC<{ size?: number }> = ({ size = 140 }) => (
  <svg width={size} height={size} viewBox="0 0 160 160" fill="none">
    {/* Dress */}
    <path d="M50 85 L110 85 L120 145 L40 145 Z" fill="#69D7C4" />
    <rect x="62" y="66" width="36" height="22" rx="8" fill="#A994E8" />
    {/* Head */}
    <circle cx="80" cy="44" r="24" fill="#FFD0B5" />
    {/* Hair bun */}
    <circle cx="80" cy="18" r="12" fill="#4B2E1E" />
    <path d="M56 40 C56 26 66 22 80 22 C94 22 104 26 104 40 Z" fill="#4B2E1E" />
    {/* Glasses */}
    <circle cx="72" cy="44" r="7" stroke="#30445A" strokeWidth="2" fill="none" />
    <circle cx="88" cy="44" r="7" stroke="#30445A" strokeWidth="2" fill="none" />
    <line x1="79" y1="44" x2="81" y2="44" stroke="#30445A" strokeWidth="2" />
    {/* Smile */}
    <path d="M74 54 Q80 60 86 54" stroke="#30445A" strokeWidth="2.5" strokeLinecap="round" />
    {/* Storybook in hand */}
    <rect x="100" y="80" width="22" height="30" rx="3" fill="#FF7A59" transform="rotate(15 100 80)" />
  </svg>
);

// ENVIRONMENT ILLUSTRATIONS: Sun, Clouds, Trees, Butterfly, PaperPlane, AlphabetBlocks, Balloon
export const SunIllustration: React.FC<{ size?: number }> = ({ size = 80 }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <circle cx="50" cy="50" r="28" fill="#FFD95A" />
    {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
      <line
        key={deg}
        x1="50"
        y1="12"
        x2="50"
        y2="4"
        stroke="#FFD95A"
        strokeWidth="5"
        strokeLinecap="round"
        transform={`rotate(${deg} 50 50)`}
      />
    ))}
  </svg>
);

export const CloudIllustration: React.FC<{ width?: number; height?: number; color?: string }> = ({ width = 110, height = 60, color = "#CFEFFF" }) => (
  <svg width={width} height={height} viewBox="0 0 120 70" fill="none">
    <path
      d="M20 50C10 50 0 42 0 30C0 18 12 10 24 12C30 4 44 0 58 4C72 8 80 20 84 28C94 26 106 32 108 42C116 44 120 52 118 60C116 68 106 70 98 70H20Z"
      fill={color}
    />
  </svg>
);

export const TreeIllustration: React.FC<{ size?: number }> = ({ size = 90 }) => (
  <svg width={size} height={size * 1.3} viewBox="0 0 100 130" fill="none">
    <rect x="44" y="80" width="12" height="45" rx="5" fill="#7C4A27" />
    <circle cx="50" cy="55" r="38" fill="#73B95C" />
    <circle cx="35" cy="45" r="24" fill="#69D7C4" />
    <circle cx="68" cy="50" r="22" fill="#73B95C" />
  </svg>
);

export const ButterflyIllustration: React.FC<{ size?: number }> = ({ size = 44 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
    <path d="M30 30 Q10 10 10 25 Q10 40 30 30 Z" fill="#A994E8" />
    <path d="M30 30 Q50 10 50 25 Q50 40 30 30 Z" fill="#A994E8" />
    <path d="M30 30 Q15 45 20 52 Q30 52 30 30 Z" fill="#FF7A59" />
    <path d="M30 30 Q45 45 40 52 Q30 52 30 30 Z" fill="#FF7A59" />
    <line x1="30" y1="18" x2="30" y2="42" stroke="#30445A" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

export const PaperPlaneIllustration: React.FC<{ size?: number }> = ({ size = 50 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
    <path d="M6 30 L54 6 L36 54 L26 34 L6 30 Z" fill="#55BCEB" />
    <path d="M26 34 L54 6 L36 54 Z" fill="#CFEFFF" />
  </svg>
);

export const AlphabetBlockIllustration: React.FC<{ letter: string; color: string; size?: number }> = ({ letter, color, size = 50 }) => (
  <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
    <rect x="4" y="4" width="52" height="52" rx="14" fill={color} />
    <rect x="8" y="8" width="44" height="44" rx="10" stroke="#FFFFFF" strokeWidth="2.5" fill="none" opacity="0.4" />
    <text x="30" y="38" textAnchor="middle" fill="#FFFFFF" fontSize="28" fontWeight="800" fontFamily="Fredoka, sans-serif">
      {letter}
    </text>
  </svg>
);

export const BalloonIllustration: React.FC<{ color?: string; size?: number }> = ({ color = "#FF7A59", size = 60 }) => (
  <svg width={size} height={size * 1.4} viewBox="0 0 60 84" fill="none">
    <ellipse cx="30" cy="32" rx="24" ry="30" fill={color} />
    <path d="M27 61 L33 61 L30 65 Z" fill={color} />
    <path d="M30 65 Q25 74 35 84" stroke="#64748B" strokeWidth="2" fill="none" strokeDasharray="3 3" />
    <ellipse cx="20" cy="20" rx="6" ry="10" fill="#FFFFFF" opacity="0.3" transform="rotate(-20 20 20)" />
  </svg>
);
