import React from 'react';
import { Box, Typography, Button, Card } from '@mui/material';
import { ExternalLink } from 'lucide-react';
import { schoolThemeConfig } from '../../theme/schoolTheme';

interface FacebookFallbackProps {
  /** The Facebook page URL to link to */
  pageUrl: string;
  /** Whether this is shown due to an error vs. the feature being disabled */
  reason?: 'error' | 'disabled';
}

/**
 * Shown when:
 *  - The Facebook SDK fails to load (network error, ad blocker, etc.)
 *  - facebook.enabled is false in socialConfig
 *
 * The homepage layout is never broken — this card is always safe to render.
 */
export const FacebookFallback: React.FC<FacebookFallbackProps> = ({
  pageUrl,
  reason = 'error',
}) => {
  const { palette, borderRadius, shadows } = schoolThemeConfig;

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 5, md: 7 },
        borderRadius: borderRadius.large / 8,  // MUI units (÷8)
        backgroundColor: 'rgba(255,255,255,0.07)',
        border: '1px solid rgba(255,255,255,0.15)',
        boxShadow: shadows.card,
        textAlign: 'center',
        gap: 2.5,
        minHeight: 260,
        maxWidth: 520,
        mx: 'auto',
      }}
      elevation={0}
    >
      {/* Facebook 'f' brand icon — inline SVG, zero extra dependency */}
      <Box
        aria-hidden="true"
        sx={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          backgroundColor: '#1877F2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="#FFFFFF"
          aria-hidden="true"
        >
          <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.024 4.388 11.024 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.514c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796v8.437C19.612 23.097 24 18.097 24 12.073z" />
        </svg>
      </Box>

      <Box>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: '#FFFFFF', mb: 1 }}
        >
          {reason === 'error'
            ? 'Facebook updates unavailable'
            : 'Follow Us on Facebook'}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}
        >
          {reason === 'error'
            ? 'Unable to load the Facebook feed right now. Visit our page directly to see the latest updates.'
            : 'Stay connected with school news, events, and announcements on our Facebook page.'}
        </Typography>
      </Box>

      <Button
        component="a"
        href={pageUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        endIcon={<ExternalLink size={16} />}
        sx={{
          backgroundColor: '#1877F2',
          color: '#FFFFFF',
          fontWeight: 700,
          px: 3,
          py: 1,
          borderRadius: 2,
          textTransform: 'none',
          fontSize: '0.95rem',
          '&:hover': {
            backgroundColor: '#1558b0',
          },
          '&:focus-visible': {
            outline: `3px solid ${palette.secondary}`,
            outlineOffset: 2,
          },
        }}
      >
        Visit Facebook Page
      </Button>
    </Card>
  );
};

export default FacebookFallback;
