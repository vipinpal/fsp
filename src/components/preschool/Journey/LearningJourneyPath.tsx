import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { Palette, Compass, Search, Sparkles } from 'lucide-react';
import { preschoolPalette } from '../../../config/preschoolTheme.palette';
import { SectionDecoration } from '../visual/SectionDecoration';
import { AdventurePath } from '../visual/AdventurePath';

interface JourneyStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  icon: React.ReactNode;
  characterBadge: string;
  badgePose: string;
}

const stages: JourneyStage[] = [
  {
    step: 'STAGE 01',
    title: 'CREATE',
    subtitle: 'Sensory Art & Hands-on Wonder',
    description: 'Messy play, painting with safe organic pigments, clay sculpting, and creative expression without boundaries.',
    color: preschoolPalette.coral,
    icon: <Palette size={32} color="#FFFFFF" />,
    characterBadge: 'Mia Painting',
    badgePose: '🎨',
  },
  {
    step: 'STAGE 02',
    title: 'EXPLORE',
    subtitle: 'Nature Trail & Guided STEM',
    description: 'Looking under magnifying glasses, observing mini-gardens, tactile water play, and building early physical intuition.',
    color: preschoolPalette.leafGreen,
    icon: <Compass size={32} color="#FFFFFF" />,
    characterBadge: 'Avi Investigating',
    badgePose: '🔍',
  },
  {
    step: 'STAGE 03',
    title: 'DISCOVER',
    subtitle: 'Phonics, Numbers & Puzzles',
    description: 'Joyful story circles, phonetic rhymes, pattern recognition blocks, and curiosity-driven discovery stations.',
    color: preschoolPalette.sunshine,
    icon: <Search size={32} color="#FFFFFF" />,
    characterBadge: 'Milo Mascot Guide',
    badgePose: '🔭',
  },
  {
    step: 'STAGE 04',
    title: 'EXPRESS',
    subtitle: 'Music, Rhythm & Confidence',
    description: 'Little stage theater, percussion drum circles, dance movement, and collaborative celebration of individual voices.',
    color: preschoolPalette.lavender,
    icon: <Sparkles size={32} color="#FFFFFF" />,
    characterBadge: 'Tara & Children',
    badgePose: '🎭',
  },
];

export const LearningJourneyPath: React.FC = () => {
  return (
    <SectionDecoration
      sceneKey="journey"
      overlayColor="rgba(255, 249, 237, 0.7)"
      characters={[
        { name: 'milo', pose: 'read', size: 125, style: { top: 35, left: '5%' } },
      ]}
      floatingObjects={[
        { objectKey: 'paperPlane', size: 50, style: { top: '15%', right: '5%' } },
      ]}
      bridgeType="rollingHills"
    >
      <Box id="journey" sx={{ py: { xs: 8, md: 12 }, position: 'relative', zIndex: 2 }}>
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 8, maxWidth: 780, mx: 'auto' }}>
            <Typography
              variant="overline"
              sx={{
                fontFamily: "'Fredoka', sans-serif",
                fontWeight: 700,
                color: preschoolPalette.leafGreen,
                letterSpacing: '0.14em',
                fontSize: '0.95rem',
              }}
            >
              🌿 CONTINUOUS ADVENTURE TRAIL
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Fredoka', sans-serif",
                fontWeight: 700,
                color: preschoolPalette.text,
                fontSize: { xs: '2.2rem', md: '3.1rem' },
                mt: 1,
              }}
            >
              Our 4-Stage Learning Journey
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: preschoolPalette.mutedText,
                mt: 2,
                fontSize: { xs: '1rem', md: '1.15rem' },
                lineHeight: 1.6,
              }}
            >
              Children do not learn from rigid desks. They follow an organic path of curiosity:
              from raw sensory creation to vibrant expressive confidence.
            </Typography>
          </Box>

          {/* Interactive Visual Trail */}
          <Box sx={{ position: 'relative', my: 4 }}>
            {/* Background Adventure Path */}
            <Box sx={{ display: { xs: 'none', md: 'block' }, mb: 4 }}>
              <AdventurePath width="100%" height={80} animate={true} strokeColor={preschoolPalette.sunshine} />
            </Box>

            <Grid container spacing={3.5}>
              {stages.map((stage, idx) => (
                <Grid item xs={12} sm={6} md={3} key={stage.step}>
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3.5,
                        borderRadius: '32px',
                        bgcolor: '#FFFFFF',
                        border: `3px solid ${stage.color}40`,
                        boxShadow: '0 16px 36px rgba(48, 68, 90, 0.05)',
                        position: 'relative',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                      }}
                    >
                      {/* Step Indicator & Badge */}
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                        <Chip
                          label={stage.step}
                          size="small"
                          sx={{
                            bgcolor: `${stage.color}18`,
                            color: stage.color,
                            fontWeight: 800,
                            fontFamily: "'Fredoka', sans-serif",
                            fontSize: '0.8rem',
                          }}
                        />
                        <Typography sx={{ fontSize: '1.5rem' }}>{stage.badgePose}</Typography>
                      </Box>

                      {/* Icon Circle */}
                      <Box
                        sx={{
                          width: 64,
                          height: 64,
                          borderRadius: '22px',
                          bgcolor: stage.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2.5,
                          boxShadow: `0 8px 20px ${stage.color}44`,
                        }}
                      >
                        {stage.icon}
                      </Box>

                      {/* Title & Subtitle */}
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: "'Fredoka', sans-serif",
                          fontWeight: 700,
                          color: preschoolPalette.text,
                          fontSize: '1.75rem',
                          mb: 0.5,
                        }}
                      >
                        {stage.title}
                      </Typography>
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          color: stage.color,
                          fontSize: '0.9rem',
                          mb: 2,
                        }}
                      >
                        {stage.subtitle}
                      </Typography>

                      {/* Description */}
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          color: preschoolPalette.mutedText,
                          lineHeight: 1.6,
                          fontSize: '0.92rem',
                          mt: 'auto',
                        }}
                      >
                        {stage.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </SectionDecoration>
  );
};
