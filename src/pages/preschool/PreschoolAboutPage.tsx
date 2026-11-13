import React from 'react';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { PreschoolPageHeader } from '../../components/preschool/PreschoolPageHeader';
import { SEOHead } from '../../components/common/SEOHead';
import { preschoolProfile } from '../../config/preschool/profile.config';
import pageSeo from '../../config/preschool/pageSeo.json';

export const PreschoolAboutPage: React.FC = () => (
  <Box component="main" sx={{ minHeight: '60vh', bgcolor: '#FFFDF9' }}>
    <SEOHead
      title={pageSeo.about.title}
      description={pageSeo.about.description}
      canonicalPath={pageSeo.about.path}
    />
    <PreschoolPageHeader
      eyebrow={pageSeo.about.eyebrow}
      title={pageSeo.about.heading}
      description="A preschool in Amroha where children are encouraged to explore, learn, and grow through meaningful experiences."
    />
    <Container maxWidth="md" sx={{ pt: { xs: 2, md: 3 }, pb: { xs: 6, md: 9 } }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2.5, sm: 3.5, md: 5 },
          borderRadius: { xs: '22px', md: '28px' },
          bgcolor: '#FFFFFF',
          border: '1px solid #FFE4E1',
          boxShadow: '0 16px 40px rgba(48, 68, 90, 0.06)',
        }}
      >
        <Typography
          component="h2"
          variant="h4"
          sx={{
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: 700,
            fontSize: { xs: '1.65rem', md: '2rem' },
            lineHeight: 1.2,
            letterSpacing: '-0.01em',
            color: '#2C3E50',
            mb: 2,
          }}
        >
          Learning through care and curiosity
        </Typography>
        <Typography
          component="p"
          sx={{
            color: '#526579',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: { xs: '0.98rem', md: '1.04rem' },
            lineHeight: 1.85,
            mb: 2,
          }}
        >
          {preschoolProfile.overview}
        </Typography>
        <Typography
          component="p"
          sx={{
            color: '#526579',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: { xs: '0.98rem', md: '1.04rem' },
            lineHeight: 1.85,
            mb: { xs: 3, md: 4 },
          }}
        >
          {preschoolProfile.overviewDetail}
        </Typography>

        <Box
          component="section"
          sx={{
            p: { xs: 2, md: 3 },
            mb: 3,
            borderRadius: '20px',
            bgcolor: '#FFF7EC',
            borderLeft: '4px solid #FF7A59',
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            sx={{
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 700,
              fontSize: { xs: '1.5rem', md: '1.8rem' },
              lineHeight: 1.2,
              color: '#2C3E50',
              mb: 1.5,
            }}
          >
            Our mission
          </Typography>
          <Typography
            component="p"
            sx={{
              color: '#526579',
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: { xs: '0.98rem', md: '1.04rem' },
              lineHeight: 1.85,
              mb: 0,
            }}
          >
            {preschoolProfile.mission}
          </Typography>
        </Box>

        <Typography
          component="p"
          sx={{
            color: '#526579',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: { xs: '0.98rem', md: '1.04rem' },
            lineHeight: 1.85,
            mb: 3,
          }}
        >
          Families looking for a play school or preschool in Amroha can learn more about our
          Pre-Nursery, Nursery, LKG and UKG programmes and contact us with questions.
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
          <Button
            component={Link}
            to="/programs/"
            variant="contained"
            sx={{
              px: 2.5,
              py: 1.1,
              borderRadius: '9999px',
              bgcolor: '#FF7A59',
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 700,
              '&:hover': { bgcolor: '#E96849' },
            }}
          >
            Explore our programmes
          </Button>
          <Button
            component={Link}
            to="/contact/"
            variant="outlined"
            sx={{
              px: 2.5,
              py: 1.1,
              borderRadius: '9999px',
              borderColor: '#55BCEB',
              color: '#287FA5',
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 700,
            }}
          >
            Contact the school
          </Button>
        </Box>
      </Paper>
    </Container>
  </Box>
);

export default PreschoolAboutPage;
