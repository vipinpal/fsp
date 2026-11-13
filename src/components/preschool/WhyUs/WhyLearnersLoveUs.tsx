import React from 'react';
import { Box, Button, Container, Typography, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';
import { Palette, Heart, Sprout } from 'lucide-react';
import { motion } from 'framer-motion';
import { sectionEnvironments, preschoolPalette } from '../../../config/preschoolTheme.palette';

export const WhyLearnersLoveUs: React.FC = () => {
  const env = sectionEnvironments.whyUs;

  const pillars = [
    {
      title: 'Learning through play',
      description: 'Stories, creative activities, play, and exploration make early learning engaging and meaningful.',
      icon: <Palette size={32} color={preschoolPalette.coral} />,
      bgColor: preschoolPalette.peachLight,
      borderColor: preschoolPalette.coral,
    },
    {
      title: 'Care that builds confidence',
      description: 'A welcoming environment helps children settle in, try new things, and celebrate their progress.',
      icon: <Heart size={32} color={preschoolPalette.primaryBlue} />,
      bgColor: preschoolPalette.skyLight,
      borderColor: preschoolPalette.primaryBlue,
    },
    {
      title: 'Growing together',
      description: 'Children learn alongside their peers while building curiosity, communication, and independence.',
      icon: <Sprout size={32} color={preschoolPalette.leafGreen} />,
      bgColor: preschoolPalette.leafGreenLight,
      borderColor: preschoolPalette.leafGreen,
    },
  ];

  return (
    <Box id="why-us" sx={{ py: { xs: 10, md: 0 }, bgcolor: env.bg, scrollMarginTop: { xs: '72px', md: '96px' } }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 }, maxWidth: 740, mx: 'auto' }}>
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
            A place for play, care, and curiosity
          </Typography>
        </Box>

        {/* Feature Cards Grid */}
        <Grid container spacing={2.5}>
          {pillars.map((item) => (
            <Grid item xs={12} md={4} key={item.title}>
              <motion.div whileHover={{ scale: 1.03, y: -6 }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    borderRadius: '26px',
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
                      mb: 2,
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
                      fontSize: { xs: '1.2rem', md: '1.3rem' },
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
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3.5 }}>
          <Button
            component={Link}
            to="/why-us/"
            variant="outlined"
            sx={{
              borderColor: preschoolPalette.mint,
              color: preschoolPalette.text,
              borderRadius: '9999px',
              px: 2.5,
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 700,
            }}
          >
            Discover more about our approach
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
