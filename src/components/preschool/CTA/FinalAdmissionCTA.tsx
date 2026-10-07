import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Sparkles } from 'lucide-react';

export const FinalAdmissionCTA: React.FC = () => {
  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: '#FF6B6B',
        color: '#FFFFFF',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{ mb: 2 }}>
          <Sparkles size={40} color="#FFE66D" />
        </Box>

        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Fredoka', sans-serif",
            fontWeight: 700,
            fontSize: { xs: '2.2rem', sm: '3.2rem', md: '3.8rem' },
            mb: 2,
            lineHeight: 1.15,
          }}
        >
          Ready for Their First Big Adventure?
        </Typography>

        <Typography
          variant="h6"
          sx={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 500,
            opacity: 0.95,
            mb: 4.5,
            maxWidth: 620,
            mx: 'auto',
            fontSize: { xs: '1.1rem', md: '1.3rem' },
          }}
        >
          Give your child the gift of joy, lifelong curiosity, and compassionate early mentorship.
        </Typography>

        <Button
          component="a"
          href="#admission-form"
          variant="contained"
          size="large"
          sx={{
            bgcolor: '#FFE66D',
            color: '#2C3E50',
            fontWeight: 800,
            fontFamily: "'Fredoka', sans-serif",
            fontSize: '1.25rem',
            px: 5,
            py: 1.8,
            borderRadius: '9999px',
            boxShadow: '0 16px 40px rgba(0,0,0,0.2)',
            '&:hover': {
              bgcolor: '#FFFFFF',
              color: '#FF6B6B',
              transform: 'translateY(-3px)',
            },
          }}
        >
          🎒 Book a School Visit
        </Button>
      </Container>
    </Box>
  );
};
