import React, { useState, useEffect, useCallback } from 'react';
import { Box, Container, Typography, Button, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { homeContent } from '../../content/homeContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const HeroBanner: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { slides, interval = 6000, autoplay = true } = homeContent.hero;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Autoplay timer
  useEffect(() => {
    if (!autoplay || isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, interval);
    return () => clearInterval(timer);
  }, [autoplay, isPaused, interval, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Mobile touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    setTouchStart(null);
  };

  const currentSlide = slides[currentIndex];

  return (
    <Box
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      sx={{
        position: 'relative',
        width: '100%',
        minHeight: { xs: '540px', sm: '620px', md: '720px' },
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: palette.primaryDark,
        color: '#FFFFFF',
      }}
    >
      {/* Background slide images with crossfade */}
      {slides.map((slide, idx) => (
        <Box
          key={slide.id}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `linear-gradient(to right, rgba(8, 36, 37, 0.94) 0%, rgba(8, 36, 37, 0.75) 50%, rgba(8, 36, 37, 0.45) 100%), url(${slide.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: idx === currentIndex ? 1 : 0,
            transition: 'opacity 1s ease-in-out',
            zIndex: 1,
          }}
        />
      ))}

      {/* Decorative Gold Accent Bar at bottom */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '6px',
          background: `linear-gradient(90deg, ${palette.secondary} 0%, ${palette.secondaryLight} 50%, ${palette.secondaryDark} 100%)`,
          zIndex: 5,
        }}
      />

      {/* Content Container */}
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 3, py: { xs: 8, md: 12 } }}>
        <Box sx={{ maxWidth: { xs: '100%', md: '780px' } }}>
          {currentSlide.eyebrow && (
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                backgroundColor: 'rgba(212, 175, 55, 0.2)',
                border: `1px solid ${palette.secondary}`,
                color: palette.secondaryLight,
                px: 2,
                py: 0.6,
                borderRadius: 99,
                fontWeight: 700,
                fontSize: { xs: '0.75rem', sm: '0.85rem' },
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                mb: 2.5,
              }}
            >
              {currentSlide.eyebrow}
            </Box>
          )}

          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.4rem', sm: '3.2rem', md: '4rem' },
              fontWeight: 800,
              lineHeight: 1.15,
              color: '#FFFFFF',
              letterSpacing: '-0.02em',
              mb: 2.5,
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.4)',
            }}
          >
            {currentSlide.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1.05rem', sm: '1.2rem', md: '1.3rem' },
              color: 'rgba(255, 255, 255, 0.9)',
              lineHeight: 1.65,
              mb: 4.5,
              maxWidth: '650px',
            }}
          >
            {currentSlide.description}
          </Typography>

          {/* Action CTAs */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
            {currentSlide.primaryCTA && (
              <Button
                component={RouterLink}
                to={currentSlide.primaryCTA.href}
                variant="contained"
                color="secondary"
                size="large"
                endIcon={<ArrowRight size={18} />}
                sx={{
                  py: 1.6,
                  px: 4,
                  fontSize: '1rem',
                  fontWeight: 800,
                }}
              >
                {currentSlide.primaryCTA.label}
              </Button>
            )}

            {currentSlide.secondaryCTA && (
              <Button
                component={RouterLink}
                to={currentSlide.secondaryCTA.href}
                variant="outlined"
                size="large"
                sx={{
                  py: 1.6,
                  px: 3.5,
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.6)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(4px)',
                  '&:hover': {
                    borderColor: '#FFFFFF',
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  },
                }}
              >
                {currentSlide.secondaryCTA.label}
              </Button>
            )}
          </Box>
        </Box>
      </Container>

      {/* Navigation Controls (Arrows) */}
      <IconButton
        onClick={prevSlide}
        aria-label="Previous Hero Slide"
        sx={{
          position: 'absolute',
          left: { xs: 8, md: 24 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 4,
          color: '#FFFFFF',
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
          display: { xs: 'none', sm: 'flex' },
        }}
      >
        <ChevronLeft size={28} />
      </IconButton>

      <IconButton
        onClick={nextSlide}
        aria-label="Next Hero Slide"
        sx={{
          position: 'absolute',
          right: { xs: 8, md: 24 },
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 4,
          color: '#FFFFFF',
          backgroundColor: 'rgba(0, 0, 0, 0.35)',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
          display: { xs: 'none', sm: 'flex' },
        }}
      >
        <ChevronRight size={28} />
      </IconButton>

      {/* Slide Pagination Dots */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 24,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: 1.25,
          zIndex: 4,
        }}
      >
        {slides.map((_, idx) => (
          <Box
            key={idx}
            component="button"
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            sx={{
              width: idx === currentIndex ? 32 : 10,
              height: 10,
              borderRadius: 5,
              backgroundColor: idx === currentIndex ? palette.secondary : 'rgba(255, 255, 255, 0.4)',
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
