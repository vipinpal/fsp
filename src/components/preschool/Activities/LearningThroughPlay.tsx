import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { Palette, Music, BookOpen, Puzzle, Sprout, Gamepad2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { activitiesConfig } from '../../../config/preschool/activities.config';
import { sectionEnvironments, preschoolPalette } from '../../../config/preschoolTheme.palette';
import { SectionDecoration } from '../visual/SectionDecoration';

export const LearningThroughPlay: React.FC = () => {
  const env = sectionEnvironments.activities;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Palette':
        return <Palette size={26} color="#FFFFFF" />;
      case 'Music':
        return <Music size={26} color="#FFFFFF" />;
      case 'BookOpen':
        return <BookOpen size={26} color="#FFFFFF" />;
      case 'Puzzle':
        return <Puzzle size={26} color="#FFFFFF" />;
      case 'Sprout':
        return <Sprout size={26} color="#FFFFFF" />;
      case 'Gamepad2':
        return <Gamepad2 size={26} color="#FFFFFF" />;
      default:
        return <Sparkles size={26} color="#FFFFFF" />;
    }
  };

  const getCardColor = (idx: number) => {
    const colors = [
      preschoolPalette.coral,
      preschoolPalette.primaryBlue,
      preschoolPalette.lavender,
      preschoolPalette.sunshine,
      preschoolPalette.leafGreen,
      preschoolPalette.mint,
    ];
    return colors[idx % colors.length];
  };

  return (
    <SectionDecoration
      sceneKey="activities"
      overlayColor="rgba(255, 253, 248, 0.65)"
      floatingObjects={[
        { objectKey: 'balloon', size: 55, style: { bottom: '20%', right: '8%' } },
      ]}
      bridgeType="organicWave"
    >
      <Box id="activities" sx={{ py: { xs: 8, md: 12 }, position: 'relative', zIndex: 2 }}>
        <Container maxWidth="lg">
          {/* Section Title */}
          <Box sx={{ textAlign: 'center', mb: 7, maxWidth: 740, mx: 'auto' }}>
            <Typography
              variant="overline"
              sx={{
                fontFamily: "'Fredoka', sans-serif",
                fontWeight: 700,
                color: preschoolPalette.lavender,
                letterSpacing: '0.12em',
                fontSize: '0.95rem',
              }}
            >
              🎨 SENSORY & CREATIVE LABS
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "'Fredoka', sans-serif",
                fontWeight: 700,
                color: preschoolPalette.text,
                fontSize: { xs: '2.1rem', md: '2.9rem' },
                mt: 1,
              }}
            >
              Learning Through Play Experiences
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                color: preschoolPalette.mutedText,
                mt: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Tactile, musical, and environmental experiences that turn everyday curiosity into deep understanding.
            </Typography>
          </Box>

          {/* Activity Cards Grid */}
          <Grid container spacing={3.5}>
            {activitiesConfig.map((item, idx) => {
              const cardAccent = getCardColor(idx);

              return (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <motion.div whileHover={{ scale: 1.03, y: -8 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        borderRadius: '32px',
                        overflow: 'visible', // Allow icon badge to comfortably overlap without clipping
                        bgcolor: '#FFFFFF',
                        border: `2.5px solid ${cardAccent}33`,
                        transition: 'all 0.35s ease',
                        position: 'relative',
                        boxShadow: '0 12px 32px rgba(48, 68, 90, 0.05)',
                        display: 'flex',
                        flexDirection: 'column',
                        height: '100%',
                      }}
                    >
                      {/* Image Container with Top Rounded Corners */}
                      <Box
                        sx={{
                          height: 220,
                          position: 'relative',
                          borderTopLeftRadius: '29px',
                          borderTopRightRadius: '29px',
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          component="img"
                          src={item.image}
                          alt={item.title}
                          sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.5s ease',
                          }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(to top, rgba(48, 68, 90, 0.65) 0%, transparent 60%)',
                          }}
                        />

                        <Chip
                          label={item.category}
                          sx={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            bgcolor: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(6px)',
                            color: preschoolPalette.text,
                            fontWeight: 800,
                            fontFamily: "'Fredoka', sans-serif",
                            fontSize: '0.8rem',
                          }}
                        />
                      </Box>

                      {/* Prominent Floating Experience Accent Icon - Fully in Foreground */}
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 192, // Sits prominently across image bottom boundary
                          left: 24,
                          width: 56,
                          height: 56,
                          borderRadius: '20px',
                          bgcolor: cardAccent,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 8px 22px ${cardAccent}66`,
                          zIndex: 10, // Foreground above card body
                          border: '3px solid #FFFFFF',
                        }}
                      >
                        {getIcon(item.icon)}
                      </Box>

                      {/* Card Body Content */}
                      <Box sx={{ pt: 4.5, pb: 3.5, px: 3.5, position: 'relative', zIndex: 1, flexGrow: 1 }}>
                        <Typography
                          variant="h5"
                          sx={{
                            fontFamily: "'Fredoka', sans-serif",
                            fontWeight: 700,
                            color: preschoolPalette.text,
                            mb: 1,
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
                      </Box>
                    </Paper>
                  </motion.div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </SectionDecoration>
  );
};
