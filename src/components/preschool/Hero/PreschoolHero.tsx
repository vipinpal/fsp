// src/components/preschool/Hero/PreschoolHero.tsx

import React from 'react';
import { SectionDecoration } from '../visual/SectionDecoration';
import { PreschoolHeroCarousel } from './PreschoolHeroCarousel';
import { HeroWorldStrip } from './HeroWorldStrip';

/**
 * PreschoolHero:
 * Features a high-converting auto-scrolling image carousel with headlines,
 * subtitles, CTA buttons, and trust metrics, wrapped in the
 * SectionDecoration storytelling layer with character illustration (Mia waving)
 * and an organic wave bridge to the next section.
 */
export const PreschoolHero: React.FC = () => {
  return (
    <SectionDecoration
      sceneKey="hero"
      overlayColor="rgba(255, 255, 255, 0.2)"
      floatingObjects={[
        { objectKey: 'balloon', size: 55, style: { top: '16%', left: '4%' } },
        { objectKey: 'kite', size: 70, style: { top: '14%', right: '5%' } },
      ]}
      bridgeType="organicWave"
    >
      <PreschoolHeroCarousel />
      {/* <HeroWorldStrip /> */}
    </SectionDecoration>
  );
};
