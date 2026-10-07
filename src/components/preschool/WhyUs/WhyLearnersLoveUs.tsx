import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { Palette, Brain, Heart, Gamepad2, Sprout, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { sectionEnvironments, preschoolPalette } from '../../../config/preschoolTheme.palette';
import { CharacterLeo } from '../illustrations/PreschoolWorld';

export const WhyLearnersLoveUs: React.FC = () => {
  const env = sectionEnvironments.whyUs;

  const pillars = [
    {
      title: 'Creative Learning',
      description: 'Hands-on arts, clay modeling, finger painting, and music expression every single day.',
      icon: <Palette size={32} color={preschoolPalette.coral} />,
      bgColor: preschoolPalette.peachLight,
      borderColor: preschoolPalette.coral,
    },
    {
      title: 'Curious Minds',
      description: 'Encouraging playful questions, little science labs, shape puzzles, and STEM blocks.',
      icon: <Brain size={32} color={preschoolPalette.primaryBlue} />,
      bgColor: preschoolPalette.skyLight,
      borderColor: preschoolPalette.primaryBlue,
    },
    {
      title: 'Caring Teachers',
      description: 'Compassionate, background-verified educators who give dedicated warmth to each child.',
      icon: <Heart size={32} color={preschoolPalette.coral} />,
      bgColor: preschoolPalette.coralLight,
      borderColor: preschoolPalette.coral,
    },
    {
      title: 'Learn Through Play',
      description: 'Gamified storytelling, mini slides, sensory play corners, and indoor splash fun.',
      icon: <Gamepad2 size={32} color={preschoolPalette.lavender} />,
      bgColor: preschoolPalette.lavenderLight,
      borderColor: preschoolPalette.lavender,
    },
    {
      title: 'Growing Together',
      description: 'Building peer kindness, sharing habits, emotional intelligence, and early team play.',
      icon: <Sprout size={32} color={preschoolPalette.leafGreen} />,
      bgColor: preschoolPalette.leafGreenLight,
      borderColor: preschoolPalette.leafGreen,
    },
    {
      title: '100% Safe Sanctuary',
      description: 'CCTV streaming, soft padded play floors, biometric access, and pediatric first aid.',
      icon: <ShieldCheck size={32} color={preschoolPalette.mint} />,
      bgColor: preschoolPalette.mintLight,
      borderColor: preschoolPalette.mint,
    },
  ];

  return (
    <Box id="why-us" sx={{ py: { xs: 10, md: 0 }, bgcolor: env.bg }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box sx={{ textAlign: 'center', mb: 8, maxWidth: 740, mx: 'auto' }}>
          <Typography
            variant="overline"
            sx={{
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 700,
              color: preschoolPalette.mint,
              letterSpacing: '0.12em',
              fontSize: '0.95rem',
            }}
          >
            WHY OUR LITTLE LEARNERS LOVE US
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 700,
              color: preschoolPalette.text,
              mt: 1,
              fontSize: { xs: '2.1rem', md: '2.9rem' },
            }}
          >
            A Digital & Physical Playground Designed for Joy
          </Typography>
        </Box>

        {/* Feature Cards Grid */}
        <Grid container spacing={3.5}>
          {pillars.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.title}>
              <motion.div whileHover={{ scale: 1.03, y: -6 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3.5,
                    borderRadius: '32px',
                    bgcolor: item.bgColor,
                    border: `2px solid ${item.borderColor}33`,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.35s ease',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.02)',
                  }}
                >
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: '20px',
                      bgcolor: '#FFFFFF',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5,
                      boxShadow: '0 6px 16px rgba(0,0,0,0.04)',
                    }}
                  >
                    {item.icon}
                  </Box>

                  <Typography
                    variant="h5"
                    sx={{
                      fontFamily: "'Fredoka', sans-serif",
                      fontWeight: 700,
                      color: preschoolPalette.text,
                      mb: 1.2,
                      fontSize: '1.35rem',
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: preschoolPalette.mutedText,
                      lineHeight: 1.65,
                      fontWeight: 500,
                    }}
                  >
                    {item.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
