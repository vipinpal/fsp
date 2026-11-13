import React from 'react';
import { Box } from '@mui/material';
import { PreschoolPageHeader } from '../../components/preschool/PreschoolPageHeader';
import { SEOHead } from '../../components/common/SEOHead';
import { VisitUsSection } from '../../components/preschool/Visit/VisitUsSection';
import pageSeo from '../../config/preschool/pageSeo.json';

export const PreschoolContactPage: React.FC = () => (
  <Box component="main" sx={{ minHeight: '60vh', bgcolor: '#FFFDF9' }}>
    <SEOHead
      title={pageSeo.contact.title}
      description={pageSeo.contact.description}
      canonicalPath={pageSeo.contact.path}
    />
    <PreschoolPageHeader
      eyebrow={pageSeo.contact.eyebrow}
      title={pageSeo.contact.heading}
      description="Ask a question, enquire about admissions, or get directions to our school on Joya Road, Amroha."
    />
    <VisitUsSection />
  </Box>
);

export default PreschoolContactPage;
