import React from 'react';
import { Box, Typography } from '@mui/material';
import { Volume2 } from 'lucide-react';
import { homeContent } from '../../content/homeContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const MarqueeNotice: React.FC = () => {
  const { palette } = schoolThemeConfig;

  return (
    <Box
      sx={{
        backgroundColor: palette.secondaryLight,
        color: palette.secondaryContrast,
        py: 1,
        px: 2,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        borderBottom: `1px solid ${palette.secondary}`,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          fontWeight: 700,
          fontSize: '0.85rem',
          mr: 3,
          flexShrink: 0,
          backgroundColor: palette.secondary,
          color: '#FFFFFF',
          px: 1.5,
          py: 0.25,
          borderRadius: 1,
        }}
      >
        <Volume2 size={16} />
        LATEST UPDATES
      </Box>

      {/* CSS Scrolling text */}
      <Box
        component="div"
        sx={{
          display: 'inline-block',
          animation: 'marquee 30s linear infinite',
          fontWeight: 600,
          fontSize: '0.9rem',
          color: palette.primaryDark,
          '&:hover': {
            animationPlayState: 'paused',
          },
          '@keyframes marquee': {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
        }}
      >
        {homeContent.marqueeText}
      </Box>
    </Box>
  );
};
