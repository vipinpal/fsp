import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { ShieldCheck, HeartHandshake, Users, Sparkles, Activity, Utensils, CalendarDays, MessageSquareText, ListOrdered, Images, Laptop, UsersRound, ClipboardCheck, Presentation } from 'lucide-react';
import { curriculumFeatureConfig, trustConfig } from '../../../config/preschool/trust.config';

export const ParentTrustSection: React.FC = () => {
  const getIcon = (iconName: string, color?: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck size={32} color={color ?? '#FF6B6B'} />;
      case 'HeartHandshake':
        return <HeartHandshake size={32} color={color ?? '#4ECDC4'} />;
      case 'Users':
        return <Users size={32} color={color ?? '#FF9F43'} />;
      case 'Sparkles':
        return <Sparkles size={32} color={color ?? '#6BCB77'} />;
      case 'Activity':
        return <Activity size={32} color={color ?? '#9B5DE5'} />;
      case 'Utensils':
        return <Utensils size={32} color={color ?? '#00CEC9'} />;
      case 'CalendarDays':
        return <CalendarDays size={28} color={color ?? '#FF6B6B'} />;
      case 'MessageSquareText':
        return <MessageSquareText size={28} color={color ?? '#4ECDC4'} />;
      case 'ListOrdered':
        return <ListOrdered size={28} color={color ?? '#FF9F43'} />;
      case 'Images':
        return <Images size={28} color={color ?? '#6BCB77'} />;
      case 'Laptop':
        return <Laptop size={28} color={color ?? '#9B5DE5'} />;
      case 'UsersRound':
        return <UsersRound size={28} color={color ?? '#00CEC9'} />;
      case 'ClipboardCheck':
        return <ClipboardCheck size={28} color={color ?? '#FF9F43'} />;
      case 'Presentation':
        return <Presentation size={28} color={color ?? '#55BCEB'} />;
      default:
        return <ShieldCheck size={32} color="#FF6B6B" />;
    }
  };

  return (
    <Box sx={{ py: { xs: 8, md: 14 }, bgcolor: '#FFF5E6' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        {/* <Box sx={{ textAlign: 'center', mb: 8, maxWidth: 780, mx: 'auto' }}>
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
            ❤️ WHY PARENTS TRUST US
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
            Because Every Little One Deserves the Best Start
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: '#546E7A',
              mt: 1.5,
              fontSize: '1.1rem',
            }}
          >
            Complete safety, compassionate care, and transparent parent updates every single step of the way.
          </Typography>
        </Box>

        {/* Trust and care pillars
        <Grid container spacing={3.5}>
          {trustConfig.map((pillar) => (
            <Grid item xs={12} sm={6} md={4} key={pillar.id}>
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  borderRadius: '28px',
                  bgcolor: '#FFFFFF',
                  border: '2px solid #FFEAEB',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: pillar.accentColor,
                    boxShadow: '0 16px 36px rgba(0,0,0,0.06)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: '20px',
                    bgcolor: '#FFF0F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                  }}
                >
                  {getIcon(pillar.iconName, pillar.accentColor)}
                </Box>

                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "'Fredoka', sans-serif",
                    fontWeight: 700,
                    color: '#2C3E50',
                    mb: 1,
                    fontSize: '1.3rem',
                  }}
                >
                  {pillar.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: '#546E7A',
                    lineHeight: 1.6,
                    fontWeight: 500,
                  }}
                >
                  {pillar.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid> */}

        <Box sx={{ width: '100%', mt: { xs: 8, md: 10 }, mb: 4, textAlign: 'center' }}>
          <Typography variant="overline" sx={{ color: '#FF6B6B', fontWeight: 700, letterSpacing: '0.12em' }}>
            LEARNING, MADE VISIBLE
          </Typography>
          <Typography variant="h3" sx={{ color: '#2C3E50', fontFamily: "'Fredoka', sans-serif", fontWeight: 700, mt: 0.5 }}>
            Unique Curriculum Features
          </Typography>
          <Typography sx={{ color: '#546E7A', mt: 1.5, maxWidth: 720, mx: 'auto', lineHeight: 1.7 }}>
            A thoughtful connection between classroom experiences, children’s progress, and family participation.
          </Typography>
        </Box>

        <Grid container spacing={3.5}>
          {curriculumFeatureConfig.map((feature) => (
            <Grid item xs={12} sm={6} md={4} key={feature.id}>
              <Paper
                elevation={0}
                sx={{
                  p: 3.5,
                  borderRadius: '28px',
                  bgcolor: '#FFFFFF',
                  border: '2px solid #FFEAEB',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    borderColor: feature.accentColor,
                    boxShadow: '0 16px 36px rgba(0,0,0,0.06)',
                  },
                }}
              >
                <Box sx={{ width: 64, height: 64, borderRadius: '20px', bgcolor: '#FFF0F0', display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2.5 }}>
                  {getIcon(feature.iconName, feature.accentColor)}
                </Box>
                <Typography variant="h5" sx={{ color: '#2C3E50', fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: '1.3rem', mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#546E7A', fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.6, fontWeight: 500 }}>
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
