// src/components/preschool/visual/SceneIllustration.tsx

import React from 'react';
import { Box } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';
import { visualConfig } from '../../../config/preschool/visualConfig';

/**
 * SceneIllustration renders a full‑width background illustration for a section.
 * It supports optional lazy‑loading, a color overlay, and a subtle parallax effect
 * driven by the page scroll.
 */
interface Props {
  /** Key of the scene defined in visualConfig.scenes */
  sceneKey: string;
  /** Optional overlay colour (e.g., rgba or hex) applied on top of the image */
  overlayColor?: string;
  /** Enable scroll‑based parallax (default true) */
  parallax?: boolean;
  /** Height of the container (e.g., "100%", "400px" or 400) */
  height?: number | string;
}

export const SceneIllustration: React.FC<Props> = ({
  sceneKey,
  overlayColor = 'transparent',
  parallax = true,
  height = '100%',
}) => {
  const src = visualConfig.scenes[sceneKey] ?? '';

  // Simple parallax: move the image a fraction of scrollYProgress
  const { scrollYProgress } = useScroll();
  const yVal = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const y = parallax ? yVal : 0;

  return (
    <Box sx={{ position: 'relative', width: '100%', height, overflow: 'hidden' }}>
      <motion.img
        src={src}
        alt={`${String(sceneKey)} scene`}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          y,
        }}
      />
      {/* Colour overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: overlayColor,
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
};
