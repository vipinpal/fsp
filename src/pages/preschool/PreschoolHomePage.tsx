import React, { useEffect, useState } from 'react';
import { Box, Fade, Fab, Tooltip } from '@mui/material';
import { ArrowUp } from 'lucide-react';
import { SEOHead } from '../../components/common/SEOHead';
import { PreschoolHero } from '../../components/preschool/Hero/PreschoolHero';
import { WhyLearnersLoveUs } from '../../components/preschool/WhyUs/WhyLearnersLoveUs';
import { AnnualEventsJourney } from '../../components/preschool/About/SchoolProfileSection';
import { LearningJourneyPath } from '../../components/preschool/Journey/LearningJourneyPath';
import { LearningThroughPlay } from '../../components/preschool/Activities/LearningThroughPlay';
import { CampusExplorer } from '../../components/preschool/Campus/CampusExplorer';
import { ParentTrustSection } from '../../components/preschool/Trust/ParentTrustSection';
import { SocialFeedSection } from '../../components/preschool/Social/SocialFeedSection';
import { ParentTestimonials } from '../../components/preschool/Testimonials/ParentTestimonials';
import { VisitUsSection } from '../../components/preschool/Visit/VisitUsSection';
import { PreschoolFAQ } from '../../components/preschool/FAQ/PreschoolFAQ';
import { FinalAdmissionCTA } from '../../components/preschool/CTA/FinalAdmissionCTA';
import { JumpingCharacterBridge } from '../../components/preschool/visual/JumpingCharacterBridge';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const scrollPosition = Math.max(window.scrollY, document.documentElement.scrollTop);
      setIsVisible(scrollPosition > 450);
    };
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    document.addEventListener('scroll', updateVisibility, { passive: true, capture: true });
    return () => {
      window.removeEventListener('scroll', updateVisibility);
      document.removeEventListener('scroll', updateVisibility, true);
    };
  }, []);

  return (
    <Fade in={isVisible} unmountOnExit>
      <Box sx={{ position: 'fixed', right: { xs: 16, md: 24 }, bottom: { xs: 78, md: 24 }, zIndex: 1200 }}>
        <Tooltip title="Back to top">
          <Fab
            size="medium"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' })}
            sx={{ bgcolor: '#FF6B6B', color: '#FFFFFF', '&:hover': { bgcolor: '#FF5252' } }}
          >
            <ArrowUp size={22} />
          </Fab>
        </Tooltip>
      </Box>
    </Fade>
  );
};

export const PreschoolHomePage: React.FC = () => {
  return (
    <Box id="page-top" sx={{ minHeight: '100vh', bgcolor: '#FFFDF9', overflowX: 'hidden' }}>
      <SEOHead />
      <PreschoolHero />

      <JumpingCharacterBridge align="right" size={175} offsetY={-180} />
      <WhyLearnersLoveUs />

      <LearningJourneyPath />
      <LearningThroughPlay />

      <CampusExplorer />
      {/* <ParentTrustSection /> */}
      <AnnualEventsJourney />
      <SocialFeedSection />
      <ParentTestimonials />
      {/* <VisitUsSection /> */}

      <PreschoolFAQ />
      <FinalAdmissionCTA />
      <ScrollToTopButton />
    </Box>
  );
};

export default PreschoolHomePage;
