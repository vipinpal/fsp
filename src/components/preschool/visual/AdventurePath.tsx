// src/components/preschool/visual/AdventurePath.tsx

import React from 'react';
import { Box } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '@mui/material/styles';

/**
 * AdventurePath renders a decorative SVG path that can animate its drawing
 * based on scroll position. It is used to visually connect major sections.
 */
interface AdventurePathProps {
  /** Width of the SVG (relative, e.g., "100%" or a number in px) */
  width?: string | number;
  /** Height of the SVG */
  height?: string | number;
  /** Color of the stroke – defaults to theme primary */
  strokeColor?: string;
  /** Enable scroll‑driven drawing animation */
  animate?: boolean;
}

export const AdventurePath: React.FC<AdventurePathProps> = ({
  width = '100%',
  height = 80,
  strokeColor,
  animate = true,
}) => {
  const theme = useTheme();

  // Framer Motion scroll‑driven dashoffset animation
  const { scrollYProgress } = useScroll();
  const dashOffset = useTransform(scrollYProgress, [0, 1], [200, 0]);

  const finalStroke = strokeColor ?? theme.palette.primary.main;

  return (
    <Box sx={{ width, height, overflow: 'visible' }}>
      <svg viewBox="0 0 1000 80" preserveAspectRatio="none" width="100%" height="100%">
        <motion.path
          d="M0,40 Q250,85 500,40 T1000,40"
          stroke={finalStroke}
          strokeWidth={6}
          strokeLinecap="round"
          strokeDasharray="12 8"
          fill="none"
          style={animate ? { strokeDashoffset: dashOffset } : undefined}
        />
      </svg>
    </Box>
  );
};
