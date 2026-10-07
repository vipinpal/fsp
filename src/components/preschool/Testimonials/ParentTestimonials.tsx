import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar, Rating } from '@mui/material';
import { Quote } from 'lucide-react';
import { testimonialsConfig } from '../../../config/preschool/testimonials.config';

export const ParentTestimonials: React.FC = () => {
  return (
    <Box id="testimonials" sx={{ py: { xs: 8, md: 14 }, bgcolor: '#FFF5E6' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 7, maxWidth: 720, mx: 'auto' }}>
          <Typography
            variant="overline"
            sx={{
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 700,
              color: '#FF6B6B',
              letterSpacing: '0.12em',
              fontSize: '0.95rem',
            }}
          >
            💬 HEARTFELT REVIEWS
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 700,
              color: '#2C3E50',
              mt: 1,
              fontSize: { xs: '2rem', md: '2.8rem' },
            }}
          >
            What Parents Say About Us
          </Typography>
        </Box>

        {/* Testimonials Cards Grid */}
        <Grid container spacing={3.5}>
          {testimonialsConfig.map((item) => (
            <Grid item xs={12} md={4} key={item.id}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: '32px',
                  bgcolor: '#FFFFFF',
                  border: '2px solid #FFEAEB',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  transition: 'all 0.35s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 40px rgba(255, 107, 107, 0.12)',
                  },
                }}
              >
                <Quote size={40} color="#FFD1D1" style={{ marginBottom: 16 }} />

                <Rating value={item.rating} readOnly sx={{ color: '#FF9F43', mb: 2 }} />

                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: '#2C3E50',
                    lineHeight: 1.7,
                    fontStyle: 'italic',
                    mb: 3,
                    flexGrow: 1,
                  }}
                >
                  "{item.quote}"
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar src={item.avatar} alt={item.parentName} sx={{ width: 52, height: 52, border: '2px solid #FF6B6B' }} />
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: '#2C3E50', lineHeight: 1.2 }}>
                      {item.parentName}
                    </Typography>
                    <Typography variant="caption" sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#FF6B6B', fontWeight: 700 }}>
                      {item.parentRole} • {item.program}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
