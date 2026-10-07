// src/components/preschool/visual/OrganicDivider.tsx

import React from 'react';
import { Box } from '@mui/material';
import { visualConfig } from '../../../config/preschool/visualConfig';

/**
 * OrganicDivider renders a decorative SVG divider (e.g., wave, leaf pattern).
 * The SVG files should be placed under `src/assets/preschool/transitions/`.
 */
interface Props {
  /** Identifier of the SVG file (without extension) */
  variant: 'organicWave' | 'rollingHills' | 'grassEdge' | 'rainbow';
  /** Optional colour overlay */
  color?: string;
  /** Height of the divider (default 80) */
  height?: number | string;
}

export const OrganicDivider: React.FC<Props> = ({ variant, color, height = 80 }) => {
  const src = `/assets/preschool/transitions/${variant}.svg`;
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
      <img src={src} alt={`${variant} divider`} loading="lazy" />
    </Box>
  );
};
