import React from 'react';
import { Box, Container, Typography } from '@mui/material';

interface PreschoolPageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export const PreschoolPageHeader: React.FC<PreschoolPageHeaderProps> = ({ eyebrow, title, description }) => (
  <Container component="header" maxWidth="lg" sx={{ pt: { xs: 4, md: 6 }, pb: { xs: 1, md: 2 } }}>
    <Box sx={{ maxWidth: 820, mx: 'auto', textAlign: 'center' }}>
      <Typography
        component="p"
        sx={{
          color: '#D94F61',
          fontFamily: "'Fredoka', sans-serif",
          fontWeight: 700,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        {eyebrow}
      </Typography>
      <Typography
        component="h1"
        variant="h1"
        sx={{
          color: '#2C3E50',
          fontFamily: "'Fredoka', sans-serif",
          fontWeight: 700,
          fontSize: { xs: '2rem', md: '2.75rem' },
          lineHeight: 1.12,
          letterSpacing: '-0.02em',
          mt: 1,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          maxWidth: 700,
          mx: 'auto',
          color: '#546E7A',
          fontSize: { xs: '1rem', md: '1.08rem' },
          lineHeight: 1.75,
          mt: { xs: 1.5, md: 2 },
        }}
      >
        {description}
      </Typography>
    </Box>
  </Container>
);
