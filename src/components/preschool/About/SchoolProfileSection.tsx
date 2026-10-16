import React from 'react';
import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { BookOpen, Cake, GraduationCap, MapPin, PartyPopper, Trophy, UsersRound } from 'lucide-react';
import { preschoolProfile } from '../../../config/preschool/profile.config';
import { preschoolPalette, sectionEnvironments } from '../../../config/preschoolTheme.palette';

const getEventIcon = (icon: string, color: string) => {
  switch (icon) {
    case 'UsersRound': return <UsersRound size={25} color={color} />;
    case 'BookOpen': return <BookOpen size={25} color={color} />;
    case 'MapPin': return <MapPin size={25} color={color} />;
    case 'Trophy': return <Trophy size={25} color={color} />;
    case 'GraduationCap': return <GraduationCap size={25} color={color} />;
    case 'PartyPopper': return <PartyPopper size={25} color={color} />;
    case 'Cake': return <Cake size={25} color={color} />;
    default: return <BookOpen size={25} color={color} />;
  }
};

const desktopRoadPath = 'M 500 129 C 535 175, 465 309, 500 355 C 535 401, 535 535, 500 581 C 465 627, 465 761, 500 807 C 535 853, 535 987, 500 1033 C 465 1079, 465 1213, 500 1259 C 535 1305, 535 1439, 500 1485';
const mobileRoadPath = 'M 16 119 C 8 164, 8 268, 16 337 C 24 382, 8 486, 16 555 C 24 600, 8 704, 16 773 C 24 818, 8 922, 16 991 C 24 1036, 8 1140, 16 1209 C 24 1254, 8 1358, 16 1427';

export const SchoolProfileSection: React.FC = () => (
  <Box id="about-us" sx={{ py: { xs: 5, md: 7 }, color: '#FFFFFF', scrollMarginTop: { xs: 72, md: 96 } }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 5 } }}>
        <Typography variant="overline" sx={{ color: '#FFE66D', fontFamily: "'Fredoka', sans-serif", fontWeight: 800, letterSpacing: '0.12em' }}>
          LITTLE WINGS CARE SCHOOL
        </Typography>
        <Typography variant="h2" sx={{ color: '#FFFFFF', fontFamily: "'Fredoka', sans-serif", fontWeight: 700, mt: 0.5, fontSize: { xs: '2rem', md: '2.5rem' } }}>
          About Us
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 4, md: 7 }}>
        <Grid item xs={12} md={6}>
          <Typography component="blockquote" sx={{ m: 0, px: 2.5, py: 2, borderLeft: `4px solid ${preschoolPalette.coral}`, borderRadius: '0 12px 12px 0', bgcolor: 'rgba(255,255,255,0.08)', color: '#FFFFFF', fontSize: { xs: '1rem', md: '1.1rem' }, fontStyle: 'italic', lineHeight: 1.75 }}>
            “{preschoolProfile.quote}”
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.82)', fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.8, mt: 2.5 }}>
            {preschoolProfile.overview}
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.82)', fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.8, mt: 1.5 }}>
            {preschoolProfile.overviewDetail}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ color: '#FFFFFF', fontFamily: "'Fredoka', sans-serif", fontWeight: 700, mb: 1.5, fontSize: '1.7rem' }}>
            Our Mission
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.82)', fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.8 }}>
            {preschoolProfile.mission}
          </Typography>
          <Typography sx={{ color: '#FFE66D', fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, lineHeight: 1.7, mt: 2.5, fontStyle: 'italic' }}>
            “{preschoolProfile.missionClosing}”
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export const AnnualEventsJourney: React.FC = () => (
  <Box sx={{ py: { xs: 8, md: 11 }, background: sectionEnvironments.learningJourney.bg }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 780, mx: 'auto', textAlign: 'center', mb: 6 }}>
          <Typography variant="overline" sx={{ color: preschoolPalette.leafGreen, fontFamily: "'Fredoka', sans-serif", fontWeight: 700, letterSpacing: '0.12em' }}>
            MOMENTS TO GROW TOGETHER
          </Typography>
          <Typography variant="h2" sx={{ color: preschoolPalette.text, fontFamily: "'Fredoka', sans-serif", fontWeight: 700, mt: 0.5, fontSize: { xs: '2rem', md: '2.8rem' } }}>
            A Year of Learning, Play & Celebration
          </Typography>
          <Typography sx={{ color: preschoolPalette.mutedText, lineHeight: 1.7, mt: 1.5 }}>
            From family participation to end-of-year celebrations, each event gives children another chance to explore, connect, and shine.
          </Typography>
        </Box>

        <Box sx={{ position: 'relative', maxWidth: 960, mx: 'auto', px: { xs: 2, md: 4 }, py: 3, borderRadius: { xs: '28px', md: '40px' }, overflow: 'hidden', background: `linear-gradient(160deg, ${preschoolPalette.skyLight} 0%, ${preschoolPalette.cream} 52%, ${preschoolPalette.peachLight} 100%)` }}>
          <Box component="svg" viewBox="0 0 1000 1614" preserveAspectRatio="none" aria-hidden="true" sx={{ display: { xs: 'none', md: 'block' }, position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
            <path d={desktopRoadPath} fill="none" stroke={preschoolPalette.mint} strokeWidth="30" strokeLinecap="round" />
            <path d={desktopRoadPath} fill="none" stroke={preschoolPalette.sunshineLight} strokeWidth="22" strokeLinecap="round" />
            <path d={desktopRoadPath} fill="none" stroke={preschoolPalette.coral} strokeWidth="3" strokeDasharray="3 16" strokeLinecap="round" opacity="0.75" />
          </Box>
          <Box component="svg" viewBox="0 0 32 1546" preserveAspectRatio="none" aria-hidden="true" sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', top: 0, bottom: 0, left: 16, width: 32, height: '100%', pointerEvents: 'none' }}>
            <path d={mobileRoadPath} fill="none" stroke={preschoolPalette.mint} strokeWidth="22" strokeLinecap="round" />
            <path d={mobileRoadPath} fill="none" stroke={preschoolPalette.sunshineLight} strokeWidth="14" strokeLinecap="round" />
            <path d={mobileRoadPath} fill="none" stroke={preschoolPalette.coral} strokeWidth="2.5" strokeDasharray="3 14" strokeLinecap="round" opacity="0.75" />
          </Box>
          {preschoolProfile.annualEvents.map((event, index) => {
            const eventColors = [
              preschoolPalette.coral,
              preschoolPalette.primaryBlue,
              preschoolPalette.leafGreen,
              preschoolPalette.sunshine,
              preschoolPalette.lavender,
              preschoolPalette.mint,
              preschoolPalette.peach,
            ];
            const accentColor = eventColors[index % eventColors.length];
            const eventOnLeft = index % 2 === 0;

            return (
              <Box
                key={event.title}
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '32px minmax(0, 1fr)', md: 'minmax(0, 1fr) 72px minmax(0, 1fr)' },
                  alignItems: 'center',
                  position: 'relative',
                  height: { xs: 190, md: 210 },
                  zIndex: 1,
                  mb: index === preschoolProfile.annualEvents.length - 1 ? 0 : { xs: 3.5, md: 2 },
                }}
              >
                <Box
                  sx={{
                    gridColumn: { xs: '1', md: '2' },
                    gridRow: '1',
                    display: 'flex',
                    justifyContent: 'center',
                    zIndex: 1,
                  }}
                >
                  <Box sx={{ width: 20, height: 20, borderRadius: '50%', bgcolor: accentColor, border: '5px solid #FFFFFF', boxSizing: 'content-box', boxShadow: '0 0 0 2px rgba(48, 68, 90, 0.08)' }} />
                </Box>

                <Paper
                  elevation={0}
                  sx={{
                    gridColumn: { xs: '2', md: eventOnLeft ? '1' : '3' },
                    gridRow: '1',
                    p: { xs: 2.5, md: 3 },
                    height: 'calc(100% - 16px)',
                    borderRadius: '28px',
                    boxSizing: 'border-box',
                    bgcolor: '#FFFFFF',
                    border: `2px solid ${accentColor}66`,
                    boxShadow: '0 12px 32px rgba(48, 68, 90, 0.05)',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 16px 36px rgba(48, 68, 90, 0.09)' },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                    <Box sx={{ width: 52, height: 52, flex: '0 0 52px', borderRadius: '18px', bgcolor: `${accentColor}22`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {getEventIcon(event.icon, accentColor)}
                    </Box>
                    <Box>
                      <Typography variant="overline" sx={{ color: accentColor, fontFamily: "'Fredoka', sans-serif", fontWeight: 700, lineHeight: 1.2 }}>
                        {index === 0 ? 'START · ' : ''}SCHOOL YEAR · {String(index + 1).padStart(2, '0')}{index === preschoolProfile.annualEvents.length - 1 ? ' · FINISH' : ''}
                      </Typography>
                      <Typography variant="h5" sx={{ color: preschoolPalette.text, fontFamily: "'Fredoka', sans-serif", fontWeight: 700, lineHeight: 1.2 }}>
                        {event.title}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ color: preschoolPalette.mutedText, fontFamily: "'Plus Jakarta Sans', sans-serif", lineHeight: 1.65, fontSize: '0.92rem' }}>
                    {event.description}
                  </Typography>
                </Paper>

                <Box sx={{ display: { xs: 'none', md: 'block' }, gridColumn: eventOnLeft ? '3' : '1', gridRow: '1' }} />
              </Box>
            );
          })}
        </Box>
    </Container>
  </Box>
);

export default SchoolProfileSection;