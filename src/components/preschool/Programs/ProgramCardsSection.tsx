import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button, Chip } from '@mui/material';
import { Baby, Palette, BookOpen, GraduationCap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { programsConfig } from '../../../config/preschool/programs.config';
import { sectionEnvironments, preschoolPalette } from '../../../config/preschoolTheme.palette';
import { SectionDecoration } from '../visual/SectionDecoration';

export const ProgramCardsSection: React.FC = () => {
  const env = sectionEnvironments.programs;

  const getProgramStyle = (id: string) => {
    switch (id) {
      case 'playgroup':
        return env.playgroup;
      case 'nursery':
        return env.nursery;
      case 'lkg':
        return env.lkg;
      case 'ukg':
        return env.ukg;
      default:
        return env.playgroup;
    }
  };

  const getIcon = (iconName: string, color: string) => {
    switch (iconName) {
      case 'Baby':
        return <Baby size={36} color={color} />;
      case 'Palette':
        return <Palette size={36} color={color} />;
      case 'BookOpen':
        return <BookOpen size={36} color={color} />;
      case 'GraduationCap':
        return <GraduationCap size={36} color={color} />;
      default:
        return <Baby size={36} color={color} />;
    }
  };

  return (
    <SectionDecoration
      sceneKey="programs"
      overlayColor="rgba(255, 253, 248, 0.65)"
      floatingObjects={[
        { objectKey: 'alphabetA', size: 52, style: { top: '18%', right: '8%' } },
      ]}
      bridgeType="cloudBridge"
    >
      <Box id="programs" sx={{ py: { xs: 8, md: 12 }, position: 'relative', zIndex: 2 }}>
        <Container maxWidth="lg">
          {/* Section Header */}
          <Box sx={{ textAlign: 'center', mb: 8, maxWidth: 740, mx: 'auto' }}>
            <Typography
              variant="overline"
              sx={{
                fontFamily: "'Fredoka', sans-serif",
                fontWeight: 700,
                color: preschoolPalette.primaryBlue,
                letterSpacing: '0.12em',
                fontSize: '0.95rem',
              }}
            >
              🌈 DISCOVER EXPLORER STAGES
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
              Miniature Worlds Tailored by Age Stage
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
              Every stage has its own sensory ecosystem, custom-tailored play equipment, and cognitive milestones.
            </Typography>
          </Box>

          {/* Program Cards Grid */}
          <Grid container spacing={3.5}>
            {programsConfig.map((program) => {
              const pStyle = getProgramStyle(program.id);

              return (
                <Grid item xs={12} sm={6} md={3} key={program.id}>
                  <motion.div whileHover={{ scale: 1.03, y: -8 }}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3.5,
                        borderRadius: '36px',
                        bgcolor: pStyle.bg,
                        border: `3px solid ${pStyle.border}`,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'all 0.35s ease',
                        boxShadow: '0 12px 32px rgba(48, 68, 90, 0.05)',
                      }}
                    >
                      {/* Age Badge */}
                      <Box sx={{ mb: 2 }}>
                        <Chip
                          label={program.age}
                          sx={{
                            bgcolor: '#FFFFFF',
                            color: pStyle.text,
                            fontWeight: 800,
                            fontFamily: "'Fredoka', sans-serif",
                            fontSize: '0.85rem',
                            py: 1.8,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
                          }}
                        />
                      </Box>

                      {/* Icon Container */}
                      <Box
                        sx={{
                          width: 72,
                          height: 72,
                          borderRadius: '24px',
                          bgcolor: '#FFFFFF',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2.5,
                          boxShadow: '0 6px 16px rgba(0,0,0,0.04)',
                        }}
                      >
                        {getIcon(program.iconName, pStyle.border)}
                      </Box>

                      {/* Title & Tagline */}
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: "'Fredoka', sans-serif",
                          fontWeight: 700,
                          color: preschoolPalette.text,
                          fontSize: '1.65rem',
                          mb: 0.5,
                        }}
                      >
                        {program.title}
                      </Typography>

                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 700,
                          color: pStyle.text,
                          fontSize: '0.88rem',
                          mb: 2,
                          lineHeight: 1.3,
                        }}
                      >
                        {program.tagline}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          color: preschoolPalette.mutedText,
                          fontSize: '0.92rem',
                          lineHeight: 1.6,
                          mb: 3,
                        }}
                      >
                        {program.description}
                      </Typography>

                      {/* Features List */}
                      <Box sx={{ mt: 'auto', mb: 3 }}>
                        {program.features.map((feat) => (
                          <Box key={feat} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            <CheckCircle2 size={16} color={pStyle.border} />
                            <Typography
                              variant="caption"
                              sx={{
                                fontFamily: "'Plus Jakarta Sans', sans-serif",
                                fontWeight: 600,
                                color: preschoolPalette.text,
                              }}
                            >
                              {feat}
                            </Typography>
                          </Box>
                        ))}
                      </Box>

                      {/* CTA Button */}
                      <Button
                        component="a"
                        href="#admission-form"
                        fullWidth
                        variant="contained"
                        endIcon={<ArrowRight size={18} />}
                        sx={{
                          bgcolor: pStyle.border,
                          color: '#FFFFFF',
                          fontFamily: "'Fredoka', sans-serif",
                          fontWeight: 700,
                          py: 1.3,
                          borderRadius: '9999px',
                          boxShadow: 'none',
                          '&:hover': {
                            bgcolor: pStyle.text,
                          },
                        }}
                      >
                        Enquire Program
                      </Button>
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
