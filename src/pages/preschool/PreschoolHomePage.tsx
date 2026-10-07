import React from 'react';
import { Box } from '@mui/material';
import { PreschoolHero } from '../../components/preschool/Hero/PreschoolHero';
import { WhyLearnersLoveUs } from '../../components/preschool/WhyUs/WhyLearnersLoveUs';
import { LearningJourneyPath } from '../../components/preschool/Journey/LearningJourneyPath';
import { ProgramCardsSection } from '../../components/preschool/Programs/ProgramCardsSection';
import { LearningThroughPlay } from '../../components/preschool/Activities/LearningThroughPlay';
import { CampusExplorer } from '../../components/preschool/Campus/CampusExplorer';
import { ParentTrustSection } from '../../components/preschool/Trust/ParentTrustSection';
import { SocialFeedSection } from '../../components/preschool/Social/SocialFeedSection';
import { PreschoolGallery } from '../../components/preschool/Gallery/PreschoolGallery';
import { ParentTestimonials } from '../../components/preschool/Testimonials/ParentTestimonials';
import { VisitUsSection } from '../../components/preschool/Visit/VisitUsSection';
import { AdmissionEnquirySection } from '../../components/preschool/Admission/AdmissionEnquirySection';
import { PreschoolFAQ } from '../../components/preschool/FAQ/PreschoolFAQ';
import { FinalAdmissionCTA } from '../../components/preschool/CTA/FinalAdmissionCTA';
import { JumpingCharacterBridge } from '../../components/preschool/visual/JumpingCharacterBridge';

export const PreschoolHomePage: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#FFFDF9', overflowX: 'hidden' }}>
      <PreschoolHero />

      {/* Leaping boy cutout transitioning Hero into Why Choose Us */}
      <JumpingCharacterBridge align="right" size={175} offsetY={-180}/>
      <WhyLearnersLoveUs />

      {/* Leaping boy cutout transitioning into Learning Journey */}
      {/* <JumpingCharacterBridge align="left" size={165} offsetY={-80} /> */}
      <LearningJourneyPath />

      <ProgramCardsSection />

      {/* Leaping boy cutout transitioning into Learning Play */}
      {/* <JumpingCharacterBridge align="right" size={170} offsetY={-85} /> */}
      <LearningThroughPlay />

      <CampusExplorer />
      <ParentTrustSection />
      <SocialFeedSection />
      <PreschoolGallery />
      <ParentTestimonials />
      <VisitUsSection />

      {/* Leaping boy cutout guiding parents into Admission Enquiry */}
      <JumpingCharacterBridge align="left" size={175} offsetY={-80} />
      <AdmissionEnquirySection />

      <PreschoolFAQ />
      <FinalAdmissionCTA />
    </Box>
  );
};

export default PreschoolHomePage;
