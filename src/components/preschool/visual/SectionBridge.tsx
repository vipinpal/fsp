// src/components/preschool/visual/SectionBridge.tsx

import React from 'react';
import { Box } from '@mui/material';

/**
 * SectionBridge renders an organic SVG transition between two sections.
 * The SVG files live under `src/assets/preschool/transitions/`.
 */
interface Props {
  /** Identifier of the bridge SVG file (without extension). */
  type: 'organicWave' | 'adventureTrail' | 'cloudBridge' | 'rollingHills' | 'rainbowBridge';
  /** Optional colour overlay applied via CSS `filter` (e.g., hue‑rotate). */
  color?: string;
  /** Height of the bridge container (default 120px). */
  height?: number | string;
}

export const SectionBridge: React.FC<Props> = ({ type, color, height = 120 }) => {
  const src = `/assets/preschool/transitions/${type}.svg`;
  return (
    <Box
      sx={{
        width: '100%',
        height,
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': { width: '100%', height: 'auto', ...(color ? { filter: `drop-shadow(0 0 4px ${color})` } : {}) },
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={`${type} bridge`} loading="lazy" />
    </Box>
  );
};
