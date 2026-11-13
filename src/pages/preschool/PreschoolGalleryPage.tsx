import React from 'react';
import { Box } from '@mui/material';
import { SEOHead } from '../../components/common/SEOHead';
import { PreschoolPageHeader } from '../../components/preschool/PreschoolPageHeader';
import { PreschoolGallery } from '../../components/preschool/Gallery/PreschoolGallery';
import pageSeo from '../../config/preschool/pageSeo.json';

export const PreschoolGalleryPage: React.FC = () => (
  <Box component="main" sx={{ minHeight: '60vh', bgcolor: '#FFFDF9' }}>
    <SEOHead
      title={pageSeo.gallery.title}
      description={pageSeo.gallery.description}
      canonicalPath={pageSeo.gallery.path}
    />
    <PreschoolPageHeader
      eyebrow={pageSeo.gallery.eyebrow}
      title={pageSeo.gallery.heading}
      description={pageSeo.gallery.description}
    />
    <PreschoolGallery />
  </Box>
);

export default PreschoolGalleryPage;
