import React from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { PreschoolPageHeader } from '../../components/preschool/PreschoolPageHeader';
import { SEOHead } from '../../components/common/SEOHead';
import { AdmissionEnquirySection } from '../../components/preschool/Admission/AdmissionEnquirySection';
import { programsConfig } from '../../config/preschool/programs.config';
import pageSeo from '../../config/preschool/pageSeo.json';

export const PreschoolAdmissionsPage: React.FC = () => (
  <Box component="main" sx={{ minHeight: '60vh', bgcolor: '#FFFDF9' }}>
    <SEOHead
      title={pageSeo.admissions.title}
      description={pageSeo.admissions.description}
      canonicalPath={pageSeo.admissions.path}
    />
    <PreschoolPageHeader
      eyebrow={pageSeo.admissions.eyebrow}
      title={pageSeo.admissions.heading}
      description="Contact Little Wings Care School to ask about current programme availability, age guidance, and arranging a school visit."
    />
    <Container maxWidth="lg" sx={{ pt: { xs: 3, md: 4 }, pb: { xs: 2, md: 3 } }}>
      <Box sx={{ mb: { xs: 3, md: 4 } }}>
        <Typography
          component="h2"
          sx={{
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: 700,
            fontSize: { xs: '1.55rem', md: '1.9rem' },
            lineHeight: 1.2,
            color: '#2C3E50',
            textAlign: 'center',
            mb: 0.75,
          }}
        >
          Which programme would you like to know about?
        </Typography>
        <Typography
          sx={{
            color: '#526579',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: { xs: '0.95rem', md: '1rem' },
            lineHeight: 1.65,
            textAlign: 'center',
          }}
        >
          Explore the stages we offer. Our team can answer questions about the right next step for your child.
        </Typography>
      </Box>
      <Grid container spacing={1.5}>
        {programsConfig.map((program, index) => (
          <Grid item xs={12} sm={6} md={3} key={program.id}>
            <Paper
              elevation={0}
              sx={{
                position: 'relative',
                height: '100%',
                minHeight: { xs: 0, md: 178 },
                p: { xs: 2, md: 2.25 },
                borderRadius: '20px',
                bgcolor: '#FFFFFF',
                border: `1px solid ${program.themeColor}40`,
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: '0 auto 0 0',
                  width: 5,
                  bgcolor: program.themeColor,
                },
              }}
            >
              <Box
                aria-hidden="true"
                sx={{
                  width: 30,
                  height: 30,
                  mb: 1.25,
                  display: 'grid',
                  placeItems: 'center',
                  borderRadius: '50%',
                  bgcolor: program.accentBg,
                  color: program.textColor,
                  fontFamily: "'Fredoka', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.9rem',
                }}
              >
                {index + 1}
              </Box>
              <Typography
                component="h3"
                sx={{
                  fontFamily: "'Fredoka', sans-serif",
                  fontWeight: 700,
                  fontSize: { xs: '1.08rem', md: '1.12rem' },
                  lineHeight: 1.25,
                  color: '#2C3E50',
                  mb: 0.75,
                }}
              >
                {program.title}
              </Typography>
              <Typography sx={{ color: '#526579', fontSize: '0.88rem', lineHeight: 1.6 }}>
                {program.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button
          component={Link}
          to="/programs/"
          variant="text"
          sx={{
            color: '#287FA5',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            textTransform: 'none',
          }}
        >
          See programme details
        </Button>
      </Box>
    </Container>
    <AdmissionEnquirySection />
  </Box>
);

export default PreschoolAdmissionsPage;
