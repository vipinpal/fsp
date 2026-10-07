import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { campusConfig } from '../../../config/preschool/campus.config';
import { preschoolPalette } from '../../../config/preschoolTheme.palette';
import { SectionDecoration } from '../visual/SectionDecoration';

export const CampusExplorer: React.FC = () => {
  const [activeZone, setActiveZone] = useState(campusConfig[0]);

  return (
    <SectionDecoration
      sceneKey="campus"
      overlayColor="rgba(240, 253, 250, 0.65)"
      characters={[
        { name: 'tara', pose: 'read', size: 130, style: { top: 30, right: '5%' } },
      ]}
      floatingObjects={[
        { objectKey: 'paperPlane', size: 50, style: { top: '15%', left: '6%' } },
      ]}
      bridgeType="rainbowBridge"
    >
      <Box id="campus" sx={{ py: { xs: 8, md: 12 }, position: 'relative', zIndex: 2 }}>
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
              🏫 A SAFE & JOYFUL WORLD
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
              Our Thoughtfully Designed Campus
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
              Built with child-safety corner guards, ergonomic furniture, sensory nooks, and supervised zones.
            </Typography>
          </Box>

          {/* Interactive Feature Showcase */}
          <Grid container spacing={4} alignItems="center">
            {/* Left: Zone Selector List */}
            <Grid item xs={12} md={5}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {campusConfig.map((zone) => {
                  const isSelected = activeZone.id === zone.id;
                  return (
                    <Paper
                      key={zone.id}
                      onClick={() => setActiveZone(zone)}
                      elevation={0}
                      sx={{
                        p: 3,
                        borderRadius: '28px',
                        cursor: 'pointer',
                        bgcolor: isSelected ? preschoolPalette.sky : '#FFFFFF',
                        border: `2px solid ${isSelected ? preschoolPalette.primaryBlue : preschoolPalette.borderLight}`,
                        transition: 'all 0.3s ease',
                        boxShadow: isSelected ? '0 8px 24px rgba(85, 188, 235, 0.15)' : 'none',
                        '&:hover': {
                          transform: 'translateX(6px)',
                          borderColor: preschoolPalette.primaryBlue,
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0.8 }}>
                        <Typography
                          variant="h6"
                          sx={{
                            fontFamily: "'Fredoka', sans-serif",
                            fontWeight: 700,
                            color: isSelected ? preschoolPalette.primaryBlue : preschoolPalette.text,
                            fontSize: '1.25rem',
                          }}
                        >
                          {zone.title}
                        </Typography>
                        <Chip
                          label={zone.badge}
                          size="small"
                          sx={{
                            bgcolor: isSelected ? preschoolPalette.primaryBlue : preschoolPalette.warmWhite,
                            color: isSelected ? '#FFFFFF' : preschoolPalette.mutedText,
                            fontWeight: 700,
                            fontFamily: "'Fredoka', sans-serif",
                          }}
                        />
                      </Box>

                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          color: preschoolPalette.mutedText,
                          lineHeight: 1.5,
                        }}
                      >
                        {zone.subtitle}
                      </Typography>
                    </Paper>
                  );
                })}
              </Box>
            </Grid>

            {/* Right: Active Zone Showcase Image */}
            <Grid item xs={12} md={7}>
              <motion.div
                key={activeZone.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    borderRadius: '36px',
                    overflow: 'hidden',
                    position: 'relative',
                    border: '4px solid #FFFFFF',
                    boxShadow: '0 24px 48px rgba(48, 68, 90, 0.12)',
                  }}
                >
                  <Box sx={{ height: { xs: 320, sm: 440 }, position: 'relative' }}>
                    <Box
                      component="img"
                      src={activeZone.image}
                      alt={activeZone.title}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(48, 68, 90, 0.9) 0%, transparent 60%)',
                      }}
                    />

                    <Box
                      sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        p: { xs: 3, sm: 4 },
                        color: '#FFFFFF',
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontFamily: "'Fredoka', sans-serif",
                          fontWeight: 700,
                          mb: 1,
                          fontSize: { xs: '1.6rem', sm: '2.1rem' },
                        }}
                      >
                        {activeZone.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={{
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          color: 'rgba(255, 255, 255, 0.9)',
                          lineHeight: 1.6,
                          fontSize: '1.05rem',
                        }}
                      >
                        {activeZone.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </SectionDecoration>
  );
};
