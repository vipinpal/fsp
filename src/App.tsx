import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { AppThemeProvider } from './theme/themeProvider';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { AppRoutes } from './routes/AppRoutes';

// Scrolls page to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </AppThemeProvider>
  );
};

export default App;
