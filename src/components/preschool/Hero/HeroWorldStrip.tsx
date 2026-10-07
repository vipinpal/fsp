// src/components/preschool/Hero/HeroWorldStrip.tsx
// Decorative illustrated world strip that fills the space below the carousel
// and transitions beautifully into the organic wave bridge.

import React from 'react';
import { Box, keyframes } from '@mui/material';
import {
  SunIllustration,
  CloudIllustration,
  TreeIllustration,
  ButterflyIllustration,
  AlphabetBlockIllustration,
  BalloonIllustration,
  CharacterLeo,
  CharacterMaya,
} from '../illustrations/PreschoolWorld';

/* ─── Keyframe animations ─── */
const floatUp = keyframes`
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-10px); }
`;
const drift = keyframes`
  0%   { transform: translateX(0px); }
  50%  { transform: translateX(18px); }
  100% { transform: translateX(0px); }
`;
const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;
const flap = keyframes`
  0%, 100% { transform: scaleX(1) rotate(-5deg); }
  50%      { transform: scaleX(0.8) rotate(5deg); }
`;
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  40%      { transform: translateY(-14px); }
  60%      { transform: translateY(-8px); }
`;
const peekIn = keyframes`
  0%   { transform: translateY(30px); opacity: 0; }
  100% { transform: translateY(0px);  opacity: 1; }
`;

/* New animation for the moving train */
const driveTrain = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100vw);
  }
`;

export const HeroWorldStrip: React.FC = () => {
  return (
    <Box
      component="div"
      aria-hidden="true"
      sx={{
        position: 'relative',
        width: '100%',
        height: { xs: '170px', sm: '200px', md: '220px' },
        overflow: 'hidden',
        mt: 0,
        flexShrink: 0,
        // Optional background color or styling to set the horizon line
        background: 'linear-gradient(to bottom, #ffffff 70%, #f0fdf4 30%)', 
      }}
    >
      {/* Moving Train Instance */}
      <Box
        component="img"
        src="/assets/preschool/objects/alphabet-train.jpeg" // Replace with your actual public folder path to the image
        alt="Moving alphabet train"
        sx={{
          position: 'absolute',
          bottom: '10px', // Rest above the bottom boundary of the component
          left: 0,
          height: { xs: '65px', sm: '80px', md: '95px' }, // Scale nicely across devices
          width: 'auto',
          zIndex: 2,
          animation: `${driveTrain} 16s linear infinite`, // Infinite continuous movement
          willChange: 'transform',
        }}
      />
    </Box>
  );
};
