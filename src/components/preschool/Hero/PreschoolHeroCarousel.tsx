// src/components/preschool/Hero/PreschoolHeroCarousel.tsx

import React, { useState, useEffect, useCallback } from 'react';
import { Box, Container, Typography, Button, IconButton } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles, Heart, ShieldCheck, Smile } from 'lucide-react';
import { preschoolPalette } from '../../../config/preschoolTheme.palette';
import { heroConfig } from '../../../config/preschool/hero.config';

export interface PreschoolSlide {
  id: string;
  badge: string;
  headlineMain: string;
  headlineHighlight: string;
  subtitle: string;
  image: string;
  themeColor: string;
}

const preschoolSlides: PreschoolSlide[] = [
  {
    id: 'slide-1',
    badge: '☀️ ADMISSIONS OPEN 2026–2027',
    headlineMain: 'Where Little Minds',
    headlineHighlight: 'Grow, Play & Explore',
    subtitle: 'A warm, joyful sanctuary where early childhood curiosity blossoms into deep learning through purposeful play.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1600&q=80',
    themeColor: preschoolPalette.primaryBlue,
  },
  {
    id: 'slide-2',
    badge: '🎨 CREATIVE ARTS & SENSORY LABS',
    headlineMain: 'Nurturing Hands-On',
    headlineHighlight: 'Curiosity & Wonder',
    subtitle: 'From messy finger painting to clay sculpting, children discover the magic of self-expression in inspiring art studios.',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=1600&q=80',
    themeColor: preschoolPalette.coral,
  },
  {
    id: 'slide-3',
    badge: '🛡️ 100% CHILD SAFE SANCTUARY',
    headlineMain: 'A Secure Haven for',
    headlineHighlight: 'Healthy Smiles & Play',
    subtitle: 'CCTV streaming, soft padded grounds, paediatric first-aid certified educators, and biometric entry gates.',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=1600&q=80',
    themeColor: preschoolPalette.leafGreen,
  },
  {
    id: 'slide-4',
    badge: '📚 FOUNDATIONAL PHONICS & STEM',
    headlineMain: 'Joyful Storytelling &',
    headlineHighlight: 'Early Discovery',
    subtitle: 'Interactive puppet theatre, pattern blocks, rhythm circles, and guided STEM exploration tailored by age stage.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1600&q=80',
    themeColor: preschoolPalette.lavender,
  },
];

export const PreschoolHeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % preschoolSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + preschoolSlides.length) % preschoolSlides.length);
  }, []);

  // Auto-scroll carousel every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const current = preschoolSlides[currentIndex];

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smile':
        return <Smile size={20} color={preschoolPalette.sunshine} />;
      case 'Heart':
        return <Heart size={20} color={preschoolPalette.coral} />;
      case 'ShieldCheck':
        return <ShieldCheck size={20} color={preschoolPalette.mint} />;
      default:
        return <Sparkles size={20} color={preschoolPalette.lavender} />;
    }
  };

  return (
    <Box
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      sx={{
        position: 'relative',
        // Perfectly calibrated height between 585px and 600px
        minHeight: { xs: '540px', sm: '585px', md: '595px' },
        maxHeight: { md: '610px' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image Carousel with Smooth Crossfade */}
      {preschoolSlides.map((slide, idx) => (
        <Box
          key={slide.id}
          sx={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `linear-gradient(135deg, rgba(48, 68, 90, 0.88) 0%, rgba(48, 68, 90, 0.65) 55%, rgba(48, 68, 90, 0.45) 100%), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: idx === currentIndex ? 1 : 0,
            transition: 'opacity 1.2s ease-in-out',
            zIndex: 1,
          }}
        />
      ))}

      {/* Hero Foreground Content */}
      <Container
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 3,
          py: { xs: 5, md: 6 },
        }}
      >
        <Box sx={{ maxWidth: { xs: '100%', md: '720px' } }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {/* Badge */}
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.8,
                  bgcolor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(10px)',
                  px: 2,
                  py: 0.6,
                  borderRadius: '9999px',
                  mb: 2,
                  boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
                }}
              >
                <Sparkles size={16} color={current.themeColor} />
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "'Fredoka', sans-serif",
                    fontWeight: 700,
                    color: current.themeColor,
                    letterSpacing: '0.08em',
                    fontSize: '0.8rem',
                  }}
                >
                  {current.badge}
                </Typography>
              </Box>

              {/* Main Headline */}
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Fredoka', sans-serif",
                  fontWeight: 700,
                  color: '#FFFFFF',
                  fontSize: { xs: '2.2rem', sm: '2.8rem', md: '3.4rem' },
                  lineHeight: 1.15,
                  mb: 1.5,
                  textShadow: '0 3px 14px rgba(0,0,0,0.3)',
                }}
              >
                {current.headlineMain}
                <br />
                <Box
                  component="span"
                  sx={{
                    color: preschoolPalette.sunshine,
                    textShadow: '0 4px 18px rgba(255, 217, 90, 0.45)',
                  }}
                >
                  {current.headlineHighlight}
                </Box>
              </Typography>

              {/* Subtitle */}
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontWeight: 500,
                  color: 'rgba(255, 255, 255, 0.95)',
                  fontSize: { xs: '0.98rem', md: '1.1rem' },
                  lineHeight: 1.6,
                  mb: 3,
                  maxWidth: 620,
                  textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                }}
              >
                {current.subtitle}
              </Typography>

              {/* Call to Actions */}
              <Box sx={{ display: 'flex', gap: 1.8, flexWrap: 'wrap', mb: 3.5 }}>
                <Button
                  variant="contained"
                  size="medium"
                  href={heroConfig.primaryCtaLink}
                  endIcon={<ArrowRight size={18} />}
                  sx={{
                    bgcolor: preschoolPalette.coral,
                    color: '#FFFFFF',
                    fontFamily: "'Fredoka', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.98rem',
                    px: 3.5,
                    py: 1.3,
                    borderRadius: '9999px',
                    boxShadow: '0 10px 24px rgba(255, 122, 89, 0.45)',
                    '&:hover': {
                      bgcolor: '#FF5A3C',
                    },
                  }}
                >
                  {heroConfig.primaryCtaText}
                </Button>

                <Button
                  variant="outlined"
                  size="medium"
                  href={heroConfig.secondaryCtaLink}
                  sx={{
                    borderColor: 'rgba(255, 255, 255, 0.8)',
                    color: '#FFFFFF',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px)',
                    fontFamily: "'Fredoka', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.98rem',
                    px: 3,
                    py: 1.3,
                    borderRadius: '9999px',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.25)',
                      borderColor: '#FFFFFF',
                    },
                  }}
                >
                  {heroConfig.secondaryCtaText}
                </Button>
              </Box>
            </motion.div>
          </AnimatePresence>

          {/* Key Trust Stats Pill Bar */}
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: { xs: 1.5, sm: 2.5 },
              pt: 2.2,
              borderTop: '1px solid rgba(255, 255, 255, 0.22)',
            }}
          >
            {heroConfig.stats.map((stat) => (
              <Box
                key={stat.label}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Box
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: '10px',
                    bgcolor: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(6px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {getStatIcon(stat.icon)}
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "'Fredoka', sans-serif",
                      fontWeight: 700,
                      color: '#FFFFFF',
                      fontSize: '1.05rem',
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 500,
                      color: 'rgba(255, 255, 255, 0.85)',
                      fontSize: '0.74rem',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>

      {/* Carousel Navigation Arrow Buttons */}
      <IconButton
        onClick={prevSlide}
        aria-label="Previous Slide"
        sx={{
          position: 'absolute',
          left: { xs: 12, md: 24 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 4,
          color: '#FFFFFF',
          bgcolor: 'rgba(0, 0, 0, 0.35)',
          backdropFilter: 'blur(6px)',
          '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.65)' },
          display: { xs: 'none', sm: 'flex' },
        }}
      >
        <ChevronLeft size={26} />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        aria-label="Next Slide"
        sx={{
          position: 'absolute',
          right: { xs: 12, md: 24 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 4,
          color: '#FFFFFF',
          bgcolor: 'rgba(0, 0, 0, 0.35)',
          backdropFilter: 'blur(6px)',
          '&:hover': { bgcolor: 'rgba(0, 0, 0, 0.65)' },
          display: { xs: 'none', sm: 'flex' },
        }}
      >
        <ChevronRight size={26} />
      </IconButton>

      {/* Dot Indicators */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1.2,
          zIndex: 4,
        }}
      >
        {preschoolSlides.map((_, idx) => (
          <Box
            key={idx}
            component="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            sx={{
              width: idx === currentIndex ? 28 : 9,
              height: 9,
              borderRadius: 5,
              backgroundColor: idx === currentIndex ? preschoolPalette.sunshine : 'rgba(255, 255, 255, 0.45)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              p: 0,
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
