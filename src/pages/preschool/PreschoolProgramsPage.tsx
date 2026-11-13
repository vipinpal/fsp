import React from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import { PreschoolPageHeader } from '../../components/preschool/PreschoolPageHeader';
import { SEOHead } from '../../components/common/SEOHead';
import { ProgramCardsSection } from '../../components/preschool/Programs/ProgramCardsSection';
import pageSeo from '../../config/preschool/pageSeo.json';

export const PreschoolProgramsPage: React.FC = () => (
  <Box component="main" sx={{ minHeight: '60vh', bgcolor: '#FFFDF9' }}>
    <SEOHead
      title={pageSeo.programs.title}
      description={pageSeo.programs.description}
      canonicalPath={pageSeo.programs.path}
    />
    {/* <PreschoolPageHeader
      eyebrow={pageSeo.programs.eyebrow}
      title={pageSeo.programs.heading}
      description="Explore Pre-Nursery, Nursery, LKG and UKG at Little Wings Care School in Amroha. Contact us for age guidance and programme enquiries."
    /> */}
    <ProgramCardsSection />
    <Box sx={{ textAlign: 'center', px: 2, pb: { xs: 6, md: 9 }, color: '#546E7A' }}>
      Have a question about a programme? <Link to="/admissions/">Ask about admissions</Link>.
    </Box>
  </Box>
);

export default PreschoolProgramsPage;
