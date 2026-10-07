// src/components/preschool/visual/SectionDecoration.tsx

import React from 'react';
import { Box } from '@mui/material';
import { SceneIllustration } from './SceneIllustration';
import { IllustratedCharacter } from './IllustratedCharacter';
import { FloatingObject } from './FloatingObject';
import { SectionBridge } from './SectionBridge';
import { visualConfig, type CharacterName, type CharacterPose } from '../../../config/preschool/visualConfig';

/**
 * SectionDecoration composes a background scene, optional characters, floating
 * objects, and an optional bridge to the following section. It centralises the
 * layout logic for the visual storytelling approach.
 */
interface CharacterConfig {
  name: CharacterName;
  pose?: CharacterPose;
  size?: number;
  animate?: boolean;
  /** Position relative to the container */
  style?: React.CSSProperties;
}

interface FloatingConfig {
  objectKey: string;
  size?: number;
  animate?: boolean;
  style?: React.CSSProperties;
}

interface Props {
  /** Scene key from visualConfig.scenes */
  sceneKey: string;
  /** Optional overlay colour for the scene */
  overlayColor?: string;
  /** Characters to render on top of the scene */
  characters?: CharacterConfig[];
  /** Floating decorative objects */
  floatingObjects?: FloatingConfig[];
  /** Bridge type to render after the section (optional) */
  bridgeType?: 'organicWave' | 'adventureTrail' | 'cloudBridge' | 'rollingHills' | 'rainbowBridge';
  /** Height of the scene container */
  height?: number | string;
  /** Optional nested content */
  children?: React.ReactNode;
}

export const SectionDecoration: React.FC<Props> = ({
  sceneKey,
  overlayColor,
  characters = [],
  floatingObjects = [],
  bridgeType,
  height,
  children,
}) => {
  return (
    <Box sx={{ position: 'relative', width: '100%', mb: 0, overflow: 'visible' }}>
      {/* Background scene illustration positioned absolutely behind content */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <SceneIllustration
          sceneKey={sceneKey}
          overlayColor={overlayColor}
          height={height ?? '100%'}
        />
      </Box>

      {/* Render decorative characters brought FORWARD (zIndex: 10) */}
      {characters.map((c, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            zIndex: 10, // Brought forward above backdrops and ambient cards
            pointerEvents: 'none',
            ...c.style,
          }}
        >
          <IllustratedCharacter
            name={c.name}
            pose={c.pose}
            size={c.size}
            animate={c.animate}
          />
        </Box>
      ))}

      {/* Render floating objects brought FORWARD (zIndex: 10) */}
      {floatingObjects.map((f, i) => (
        <Box
          key={i}
          sx={{
            position: 'absolute',
            zIndex: 10, // Brought forward above backdrops and ambient cards
            pointerEvents: 'none',
            ...f.style,
          }}
        >
          <FloatingObject
            objectKey={f.objectKey}
            size={f.size}
            animate={f.animate}
          />
        </Box>
      ))}

      {/* Section-specific children content */}
      {children && (
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          {children}
        </Box>
      )}

      {/* Optional bridge to the next section */}
      {bridgeType && (
        <Box sx={{ position: 'relative', zIndex: 2 }}>
          <SectionBridge type={bridgeType} height={120} />
        </Box>
      )}
    </Box>
  );
};
