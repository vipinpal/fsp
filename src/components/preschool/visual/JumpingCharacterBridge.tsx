// src/components/preschool/visual/JumpingCharacterBridge.tsx

import React from 'react';
import { Box } from '@mui/material';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Props {
  /** Alignment of the jumping character: left, right, or center */
  align?: 'left' | 'right' | 'center';
  /** Size in pixels */
  size?: number;
  /** Custom vertical offset (e.g. -70) */
  offsetY?: number;
}

export const JumpingCharacterBridge: React.FC<Props> = ({
  align = 'right',
  size = 180,
  offsetY = -90,
}) => {
  const { scrollYProgress } = useScroll();

  // Gentle scroll-driven parallax leap
  const yLeap = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  const getPositionStyles = () => {
    switch (align) {
      case 'left':
        return { left: { xs: '6%', md: '10%' } };
      case 'center':
        return { left: '50%', transform: 'translateX(-50%)' };
      case 'right':
      default:
        return { right: { xs: '6%', md: '8%' } };
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 0,
        zIndex: 20, // High z-index to leap forward over both sections
        overflow: 'visible',
        pointerEvents: 'none',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: offsetY,
          ...getPositionStyles(),
        }}
      >
        <motion.div
          style={{ y: yLeap }}
          animate={{
            y: [0, -32, 0],
            rotate: [0, 6, -4, 0],
            scale: [1, 1.08, 0.98, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* High-quality boy cutout image jumping across sections */}
          <Box
            component="img"
            src="/assets/preschool/characters/avi/jump.svg"
            alt="Playful boy leaping between sections"
            sx={{
              width: { xs: size * 0.75, sm: size * 0.85, md: size },
              height: 'auto',
              filter: 'drop-shadow(0 18px 24px rgba(48, 68, 90, 0.28))',
              display: 'block',
            }}
          />
        </motion.div>
      </Box>
    </Box>
  );
};
