import React, { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Button,
  Typography,
} from '@mui/material';
import { ExternalLink } from 'lucide-react';
import { FacebookFeed } from './FacebookFeed';
import { FacebookFallback } from './FacebookFallback';
import { socialConfig } from '../../config/socialConfig';
import { schoolThemeConfig } from '../../theme/schoolTheme';
import { SectionHeader } from '../common/SectionHeader';
import { useScrollAnimation } from '../../animations/useScrollAnimation';
import { getAnimationStyles } from '../../animations/animationVariants';

/**
 * FacebookSection — Homepage-only "Latest Updates" section.
 *
 * Placement: Between TestimonialsSection and HomeFAQ on the home page.
 * This ensures the Facebook SDK never delays the hero, stats, or above-the-fold content.
 *
 * Auto-rotation note:
 *   socialConfig.facebook.autoRotate and rotationInterval are honoured at the
 *   section level (gentle pulsing accent on the heading). The Page Plugin's
 *   internal timeline cannot be rotated via its official API without DOM
 *   manipulation, which we intentionally avoid.
 */
export const FacebookSection: React.FC = () => {
  const { palette, borderRadius, shadows } = schoolThemeConfig;
  const { facebook } = socialConfig;
  const { ref, isVisible, reducedMotion } = useScrollAnimation(0.15);

  // Auto-rotation: pulse the gold accent bar while `autoRotate` is enabled.
  // This is purely cosmetic and pauses when user's mouse is over the section.
  const accentRef = useRef<HTMLDivElement>(null);
  const rotationTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const isPausedByHover = useRef(false);

  useEffect(() => {
    if (!facebook.autoRotate || reducedMotion || !facebook.enabled) return;

    const interval = facebook.rotationInterval ?? 5000;

    rotationTimer.current = setInterval(() => {
      if (isPausedByHover.current) return;
      if (accentRef.current) {
        // Subtle accent pulse — we briefly scale the gold bar.
        accentRef.current.style.transform = 'scaleX(1.08)';
        setTimeout(() => {
          if (accentRef.current) accentRef.current.style.transform = 'scaleX(1)';
        }, 300);
      }
    }, interval);

    return () => {
      if (rotationTimer.current) clearInterval(rotationTimer.current);
    };
  }, [facebook.autoRotate, facebook.rotationInterval, facebook.enabled, reducedMotion]);

  // If the feature is disabled, render the fallback card.
  if (!facebook.enabled) {
    return (
      <Box
        component="section"
        aria-label="Follow us on Facebook"
        sx={{ py: { xs: 8, md: 10 }, backgroundColor: palette.primary }}
      >
        <Container maxWidth="md">
          <FacebookFallback pageUrl={facebook.pageUrl} reason="disabled" />
        </Container>
      </Box>
    );
  }

  return (
    <Box
      component="section"
      aria-labelledby="fb-section-heading"
      ref={ref}
      onMouseEnter={() => { isPausedByHover.current = true; }}
      onMouseLeave={() => { isPausedByHover.current = false; }}
      sx={{
        py: { xs: 8, md: 12 },
        // Dark emerald background — same pattern as StatsSection dark band.
        background: `linear-gradient(145deg, ${palette.primaryDark} 0%, ${palette.primary} 60%, ${palette.primaryLight} 100%)`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle decorative circle — purely visual, aria-hidden */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: -120,
          right: -120,
          width: 440,
          height: 440,
          borderRadius: '50%',
          background: 'rgba(212, 175, 55, 0.06)',
          pointerEvents: 'none',
        }}
      />
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          bottom: -80,
          left: -80,
          width: 280,
          height: 280,
          borderRadius: '50%',
          background: 'rgba(212, 175, 55, 0.04)',
          pointerEvents: 'none',
        }}
      />

      <Container maxWidth="xl">
        {/* ── Section header ─────────────────────────────────────────── */}
        <Box
          sx={{
            ...getAnimationStyles('fade-up', isVisible, reducedMotion, 0),
            mb: 5,
            textAlign: 'center',
          }}
        >
          {/* Gold accent bar */}
          <Box
            ref={accentRef}
            aria-hidden="true"
            sx={{
              display: 'inline-block',
              width: 48,
              height: 4,
              borderRadius: 2,
              backgroundColor: palette.secondary,
              mb: 2.5,
              transformOrigin: 'center',
              transition: 'transform 0.3s ease',
            }}
          />

          <Typography
            id="fb-section-heading"
            variant="overline"
            sx={{
              display: 'block',
              fontWeight: 700,
              letterSpacing: '0.12em',
              color: palette.secondary,
              textTransform: 'uppercase',
              fontSize: '0.85rem',
              mb: 1,
            }}
          >
            Social
          </Typography>

          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.85rem', sm: '2.25rem', md: '2.75rem' },
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.2,
              mb: 1.5,
            }}
          >
            Latest Updates
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: { xs: '1rem', md: '1.1rem' },
              maxWidth: 560,
              mx: 'auto',
              lineHeight: 1.65,
            }}
          >
            Follow our Facebook page to stay connected with campus news,
            events, achievements and announcements.
          </Typography>
        </Box>

        {/* ── Facebook Page Plugin ────────────────────────────────────── */}
        <Box
          sx={{
            ...getAnimationStyles('fade-up', isVisible, reducedMotion, 120),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
          }}
        >
          {/* Plugin wrapper — styled card */}
          <Box
            sx={{
              width: '100%',
              maxWidth: 520,
              borderRadius: `${borderRadius.large / 8}px`,
              overflow: 'hidden',
              boxShadow: shadows.cardHover,
              backgroundColor: '#FFFFFF',
              // Ensure only this section scrolls horizontally on very narrow
              // viewports, not the whole page.
              overflowX: 'auto',
            }}
          >
            <FacebookFeed config={facebook} />
          </Box>

          {/* Follow button — visible, accessible CTA beneath the feed */}
          <Button
            component="a"
            href={facebook.pageUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            endIcon={<ExternalLink size={16} />}
            aria-label={`Follow ${socialConfig.facebook.pageUrl} on Facebook (opens in new tab)`}
            sx={{
              color: '#FFFFFF',
              borderColor: 'rgba(255,255,255,0.4)',
              fontWeight: 700,
              px: 4,
              py: 1.25,
              borderRadius: 2,
              textTransform: 'none',
              fontSize: '0.95rem',
              '&:hover': {
                borderColor: palette.secondary,
                backgroundColor: 'rgba(212,175,55,0.1)',
                color: palette.secondary,
              },
              '&:focus-visible': {
                outline: `3px solid ${palette.secondary}`,
                outlineOffset: 3,
              },
            }}
          >
            Follow us on Facebook
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FacebookSection;
