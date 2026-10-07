// src/components/preschool/visual/FloatingObject.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { visualConfig } from '../../../config/preschool/visualConfig';

/**
 * FloatingObject renders a decorative asset (e.g., balloon, kite) with a gentle
 * bobbing animation. The asset is looked up from visualConfig.floatingObjects.
 */
interface Props {
  /** Key identifier from visualConfig.floatingObjects */
  objectKey: string;
  /** Desired size in pixels */
  size?: number;
  /** Enable idle floating animation (default true) */
  animate?: boolean;
  /** Additional CSS for positioning (e.g., { top: '20%', left: '10%' }) */
  style?: React.CSSProperties;
}

export const FloatingObject: React.FC<Props> = ({
  objectKey,
  size = 60,
  animate = true,
  style = {},
}) => {
  const src = visualConfig.floatingObjects[objectKey] ?? '';

  return (
    <motion.div
      animate={
        animate
          ? {
              y: [0, -12, 0],
              rotate: [0, 4, -4, 0],
            }
          : {}
      }
      transition={
        animate
          ? { duration: 6, repeat: Infinity, ease: 'easeInOut' as const }
          : undefined
      }
      style={{ width: size, height: size, display: 'inline-block', ...style }}
    >
      <img
        src={src}
        alt={String(objectKey)}
        width={size}
        height={size}
        style={{ display: 'block' }}
      />
    </motion.div>
  );
};
