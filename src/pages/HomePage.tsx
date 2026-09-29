import React from 'react';
import { Box } from '@mui/material';
import { HeroBanner } from '../components/home/HeroBanner';
import { MarqueeNotice } from '../components/home/MarqueeNotice';
import { AboutSection } from '../components/home/AboutSection';
import { StatsSection } from '../components/home/StatsSection';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { AcademicsGrid } from '../components/home/AcademicsGrid';
import { HomeGallery } from '../components/home/HomeGallery';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { HomeFAQ } from '../components/home/HomeFAQ';
import { AdmissionCTA } from '../components/home/AdmissionCTA';
import { SEOHead } from '../components/common/SEOHead';
import { FacebookSection } from '../components/social/FacebookSection';

export const HomePage: React.FC = () => {
  return (
    <Box component="main">
      <SEOHead
        title="Leading CBSE World School in New Delhi"
        canonicalPath="/"
      />
      <MarqueeNotice />
      <HeroBanner />
      <StatsSection />
      <AboutSection />
      <WhyChooseUs />
      <AcademicsGrid />
      <AdmissionCTA />
      <HomeGallery />
      <FacebookSection />
      <TestimonialsSection />
      <HomeFAQ />
    </Box>
  );
};

export default HomePage;
