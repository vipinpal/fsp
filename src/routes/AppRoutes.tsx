import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

// Route-level code splitting (lazy loading) to maximize performance
const HomePage = lazy(() => import('../pages/HomePage'));

// About Pages
const AboutOverviewPage = lazy(() => import('../pages/about/AboutOverviewPage'));
const VisionMissionPage = lazy(() => import('../pages/about/VisionMissionPage'));
const CampusHistoryPage = lazy(() => import('../pages/about/CampusHistoryPage'));

// Administration Pages
const AdministrationOverviewPage = lazy(() => import('../pages/administration/AdministrationOverviewPage'));
const DirectorMessagePage = lazy(() => import('../pages/administration/DirectorMessagePage'));
const PrincipalMessagePage = lazy(() => import('../pages/administration/PrincipalMessagePage'));
const FacultyDirectoryPage = lazy(() => import('../pages/administration/FacultyDirectoryPage'));

// Admissions Pages
const AdmissionsOverviewPage = lazy(() => import('../pages/admissions/AdmissionsOverviewPage'));
const ProcessPage = lazy(() => import('../pages/admissions/ProcessPage'));
const EligibilityPage = lazy(() => import('../pages/admissions/EligibilityPage'));
const DocumentsPage = lazy(() => import('../pages/admissions/DocumentsPage'));
const FeeStructurePage = lazy(() => import('../pages/admissions/FeeStructurePage'));
const EnquiryPage = lazy(() => import('../pages/admissions/EnquiryPage'));

// Academics Pages
const AcademicsOverviewPage = lazy(() => import('../pages/academics/AcademicsOverviewPage'));
const CurriculumPage = lazy(() => import('../pages/academics/CurriculumPage'));
const KindergartenPage = lazy(() => import('../pages/academics/KindergartenPage'));
const PrimaryPage = lazy(() => import('../pages/academics/PrimaryPage'));
const MiddleSchoolPage = lazy(() => import('../pages/academics/MiddleSchoolPage'));
const SecondaryPage = lazy(() => import('../pages/academics/SecondaryPage'));
const SeniorSecondaryPage = lazy(() => import('../pages/academics/SeniorSecondaryPage'));
const AcademicCalendarPage = lazy(() => import('../pages/academics/AcademicCalendarPage'));

// Campus Pages
const CampusOverviewPage = lazy(() => import('../pages/campus/CampusOverviewPage'));
const CampusDetailPage = lazy(() => import('../pages/campus/CampusDetailPage'));

// Activities Pages
const ActivitiesOverviewPage = lazy(() => import('../pages/activities/ActivitiesOverviewPage'));
const ActivityDetailPage = lazy(() => import('../pages/activities/ActivityDetailPage'));

// Achievements Pages
const AchievementsOverviewPage = lazy(() => import('../pages/achievements/AchievementsOverviewPage'));

// Gallery Pages
const GalleryOverviewPage = lazy(() => import('../pages/gallery/GalleryOverviewPage'));

// Events Pages
const EventsOverviewPage = lazy(() => import('../pages/events/EventsOverviewPage'));

// Community Pages
const ParentsCornerPage = lazy(() => import('../pages/community/ParentsCornerPage'));
const HouseSystemPage = lazy(() => import('../pages/community/HouseSystemPage'));

// Resources Pages
const DownloadsPage = lazy(() => import('../pages/resources/DownloadsPage'));
const ProspectusPage = lazy(() => import('../pages/resources/ProspectusPage'));
const FAQPage = lazy(() => import('../pages/resources/FAQPage'));
const TransferCertificatePage = lazy(() => import('../pages/resources/TransferCertificatePage'));

// Careers & Contact
const CareersPage = lazy(() => import('../pages/careers/CareersPage'));
const ContactPage = lazy(() => import('../pages/contact/ContactPage'));

// 404
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const PageLoader = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
    <CircularProgress size={40} sx={{ color: '#0F3D3E' }} />
  </Box>
);

export const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Main */}
        <Route path="/" element={<HomePage />} />

        {/* About */}
        <Route path="/about" element={<AboutOverviewPage />} />
        <Route path="/about/vision-mission" element={<VisionMissionPage />} />
        <Route path="/about/campus" element={<CampusHistoryPage />} />

        {/* Administration */}
        <Route path="/administration" element={<AdministrationOverviewPage />} />
        <Route path="/administration/director-message" element={<DirectorMessagePage />} />
        <Route path="/administration/principal-message" element={<PrincipalMessagePage />} />
        <Route path="/administration/faculty" element={<FacultyDirectoryPage />} />

        {/* Admissions */}
        <Route path="/admissions" element={<AdmissionsOverviewPage />} />
        <Route path="/admissions/process" element={<ProcessPage />} />
        <Route path="/admissions/eligibility" element={<EligibilityPage />} />
        <Route path="/admissions/documents" element={<DocumentsPage />} />
        <Route path="/admissions/fee-structure" element={<FeeStructurePage />} />
        <Route path="/admissions/enquiry" element={<EnquiryPage />} />

        {/* Academics */}
        <Route path="/academics" element={<AcademicsOverviewPage />} />
        <Route path="/academics/curriculum" element={<CurriculumPage />} />
        <Route path="/academics/kindergarten" element={<KindergartenPage />} />
        <Route path="/academics/primary" element={<PrimaryPage />} />
        <Route path="/academics/middle-school" element={<MiddleSchoolPage />} />
        <Route path="/academics/secondary" element={<SecondaryPage />} />
        <Route path="/academics/senior-secondary" element={<SeniorSecondaryPage />} />
        <Route path="/academics/calendar" element={<AcademicCalendarPage />} />
        <Route path="/academics/faculty" element={<FacultyDirectoryPage />} />

        {/* Campus Facilities */}
        <Route path="/campus" element={<CampusOverviewPage />} />
        <Route path="/campus/infrastructure" element={<CampusDetailPage facilityId="smart-classrooms" />} />
        <Route path="/campus/library" element={<CampusDetailPage facilityId="library" />} />
        <Route path="/campus/laboratories" element={<CampusDetailPage facilityId="laboratories" />} />
        <Route path="/campus/smart-classrooms" element={<CampusDetailPage facilityId="smart-classrooms" />} />
        <Route path="/campus/sports" element={<CampusDetailPage facilityId="sports" />} />
        <Route path="/campus/transport" element={<CampusDetailPage facilityId="transport" />} />
        <Route path="/campus/health-safety" element={<CampusDetailPage facilityId="health-safety" />} />
        <Route path="/campus/counselling" element={<CampusDetailPage facilityId="counselling" />} />

        {/* Activities */}
        <Route path="/activities" element={<ActivitiesOverviewPage />} />
        <Route path="/activities/sports" element={<ActivityDetailPage activityId="sports" />} />
        <Route path="/activities/arts" element={<ActivityDetailPage activityId="arts" />} />
        <Route path="/activities/music" element={<ActivityDetailPage activityId="music" />} />
        <Route path="/activities/clubs" element={<ActivityDetailPage activityId="clubs" />} />
        <Route path="/activities/creative-corner" element={<ActivityDetailPage activityId="arts" />} />

        {/* Achievements */}
        <Route path="/achievements" element={<AchievementsOverviewPage />} />
        <Route path="/achievements/academic" element={<AchievementsOverviewPage />} />
        <Route path="/achievements/sports" element={<AchievementsOverviewPage />} />
        <Route path="/achievements/competitions" element={<AchievementsOverviewPage />} />

        {/* Gallery */}
        <Route path="/gallery" element={<GalleryOverviewPage />} />
        <Route path="/gallery/photos" element={<GalleryOverviewPage />} />
        <Route path="/gallery/videos" element={<GalleryOverviewPage />} />

        {/* Events */}
        <Route path="/events" element={<EventsOverviewPage />} />
        <Route path="/events/upcoming" element={<EventsOverviewPage />} />
        <Route path="/events/calendar" element={<AcademicCalendarPage />} />

        {/* Community */}
        <Route path="/community/parents" element={<ParentsCornerPage />} />
        <Route path="/community/houses" element={<HouseSystemPage />} />

        {/* Resources */}
        <Route path="/resources/downloads" element={<DownloadsPage />} />
        <Route path="/resources/prospectus" element={<ProspectusPage />} />
        <Route path="/resources/faq" element={<FAQPage />} />
        <Route path="/resources/transfer-certificate" element={<TransferCertificatePage />} />

        {/* Careers & Contact */}
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};
