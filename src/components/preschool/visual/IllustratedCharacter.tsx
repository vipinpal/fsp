// src/components/preschool/visual/IllustratedCharacter.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { visualConfig, type CharacterName, type CharacterPose } from '../../../config/preschool/visualConfig';
import { Box } from '@mui/material';

/**
 * IllustratedCharacter renders a character asset from visualConfig.
 * Props:
 *  - name: character identifier (mia, avi, milo, tara)
 *  - pose: which pose to use (defaults to "idle")
 *  - size: pixel size for the image (default 120)
 *  - animate: enable subtle idle animation (bob & slight scale)
 */
interface Props {
  name: CharacterName;
  pose?: CharacterPose;
  size?: number;
  animate?: boolean;
}

export const IllustratedCharacter: React.FC<Props> = ({
  name,
  pose = 'idle',
  size = 120,
  animate = true,
}) => {
  const asset = visualConfig.characters[name];
  const src = asset?.poses[pose] ?? '';

  return (
    <motion.div
      animate={
        animate
          ? {
              y: [0, -8, 0],
              rotate: [0, 2, 0],
            }
          : {}
      }
      transition={
        animate
          ? { duration: 4, repeat: Infinity, ease: 'easeInOut' as const }
          : undefined
      }
      style={{ width: size, height: size, display: 'inline-block' }}
    >
      <img
        src={src}
        alt={`${String(name)}-${String(pose)}`}
        width={size}
        height={size}
        style={{ display: 'block' }}
      />
    </motion.div>
  );
};
