import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import { Phone, MessageCircle, MapPin, Sparkles } from 'lucide-react';
import { siteConfig } from '../../../config/site.config';

export const MobileQuickActionBar: React.FC = () => {
  return (
    <Paper
      elevation={8}
      sx={{
        display: { xs: 'flex', md: 'none' },
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        bgcolor: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(10px)',
        borderTop: '1.5px solid #FFEAEB',
        py: 1,
        px: 1.5,
        justifyContent: 'space-around',
        alignItems: 'center',
        boxShadow: '0 -8px 24px rgba(0, 0, 0, 0.08)',
      }}
    >
      {/* Action 1: Call */}
      <Box
        component="a"
        href={`tel:${siteConfig.phone}`}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.4,
          color: '#FF6B6B',
          textDecoration: 'none',
        }}
      >
        <Phone size={20} />
        <Typography variant="caption" sx={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: '0.72rem' }}>
          Call
        </Typography>
      </Box>

      {/* Action 2: WhatsApp */}
      <Box
        component="a"
        href={`https://wa.me/${siteConfig.whatsappPhone}`}
        target="_blank"
        rel="noreferrer"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.4,
          color: '#25D366',
          textDecoration: 'none',
        }}
      >
        <MessageCircle size={20} />
        <Typography variant="caption" sx={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: '0.72rem' }}>
          WhatsApp
        </Typography>
      </Box>

      {/* Action 3: Directions */}
      <Box
        component="a"
        href={siteConfig.address.googleMapsDirectionsUrl}
        target="_blank"
        rel="noreferrer"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.4,
          color: '#4ECDC4',
          textDecoration: 'none',
        }}
      >
        <MapPin size={20} />
        <Typography variant="caption" sx={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: '0.72rem' }}>
          Directions
        </Typography>
      </Box>

      {/* Action 4: Admission */}
      <Box
        component="a"
        href="#admission-form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 0.6,
          bgcolor: '#FF6B6B',
          color: '#FFFFFF',
          px: 2,
          py: 0.8,
          borderRadius: '9999px',
          textDecoration: 'none',
          boxShadow: '0 4px 12px rgba(255, 107, 107, 0.3)',
        }}
      >
        <Sparkles size={16} />
        <Typography variant="caption" sx={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: '0.82rem' }}>
          Admission
        </Typography>
      </Box>
    </Paper>
  );
};
