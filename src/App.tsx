import React, { useEffect, useState } from 'react';
import { BrowserRouter, useLocation, Routes, Route } from 'react-router-dom';
import { AppThemeProvider } from './theme/themeProvider';
import { siteConfig, SiteType } from './config/site.config';

// School Mode Components
import { Header as SchoolHeader } from './components/common/Header';
import { Footer as SchoolFooter } from './components/common/Footer';
import { AppRoutes as SchoolAppRoutes } from './routes/AppRoutes';

// Preschool Mode Components
import { PreschoolHeader } from './components/preschool/Header/PreschoolHeader';
import { PreschoolFooter } from './components/preschool/Footer/PreschoolFooter';
import { PreschoolHomePage } from './pages/preschool/PreschoolHomePage';
import { MobileQuickActionBar } from './components/preschool/QuickActions/MobileQuickActionBar';

// Scroll to top helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
};

const MainContent: React.FC = () => {
  const location = useLocation();
  const [activeSiteType, setActiveSiteType] = useState<SiteType>(siteConfig.siteType);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const modeParam = params.get('mode');
    if (modeParam === 'preschool' || modeParam === 'school') {
      setActiveSiteType(modeParam as SiteType);
    }
  }, [location.search]);

  if (activeSiteType === 'preschool') {
    return (
      <Box sx={{ pb: { xs: 7, md: 0 } }}>
        <PreschoolHeader />
        <Routes>
          <Route path="*" element={<PreschoolHomePage />} />
        </Routes>
        <PreschoolFooter />
        <MobileQuickActionBar />
      </Box>
    );
  }

  return (
    <>
      <SchoolHeader />
      <SchoolAppRoutes />
      <SchoolFooter />
    </>
  );
};

// Box import for layout wrapper
import { Box } from '@mui/material';

export const App: React.FC = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <MainContent />
      </BrowserRouter>
    </AppThemeProvider>
  );
};

export default App;
