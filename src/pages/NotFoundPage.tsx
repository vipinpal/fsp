import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Home, ArrowLeft } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { PageHero } from '../components/common/PageHero';
import { SEOHead } from '../components/common/SEOHead';
import { schoolThemeConfig } from '../theme/schoolTheme';

export const NotFoundPage: React.FC = () => {
  const { palette } = schoolThemeConfig;

  return (
    <Box component="main">
      <SEOHead title="Page Not Found" canonicalPath="/404" />
      <PageHero
        title="404 - Page Not Found"
        subtitle="The page you are looking for may have been moved or archived."
        eyebrow="Error"
        breadcrumbs={[{ label: 'Not Found', href: '#' }]}
      />

      <Box sx={{ py: 12, textAlign: 'center', backgroundColor: palette.background }}>
        <Container maxWidth="sm">
          <Typography variant="h1" sx={{ fontWeight: 800, color: palette.primary, fontSize: '6rem', mb: 2 }}>
            404
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700, color: palette.textPrimary, mb: 2 }}>
            Oops! That Page Cannot Be Found
          </Typography>
          <Typography variant="body1" sx={{ color: palette.textSecondary, mb: 4 }}>
            Please return to our homepage or use the navigation menu above to find what you are looking for.
          </Typography>
          <Button
            component={RouterLink}
            to="/"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<Home size={18} />}
            sx={{ fontWeight: 700, px: 4 }}
          >
            Return to Homepage
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default NotFoundPage;
