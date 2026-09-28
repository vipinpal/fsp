import React from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { eventsContent } from '../../content/eventsContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const EventsOverviewPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { upcomingEvents } = eventsContent;

  return (
    <Box component="main">
      <SEOHead title="School Events & Happenings" canonicalPath="/events" />
      <PageHero
        title="School Events & Celebrations"
        subtitle="Stay updated on athletic meets, literary conclaves, musical productions, and symposiums."
        eyebrow="Happenings"
        breadcrumbs={[{ label: 'Events', href: '/events' }]}
        bgImage="https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=1600&auto=format&fit=crop&q=80"
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          <SectionHeader
            eyebrow="Upcoming Dates"
            title="Mark Your Calendar"
            subtitle="Engaging conclaves and cultural milestones welcoming our students and parent community."
          />

          <Grid container spacing={4}>
            {upcomingEvents.map((ev) => (
              <Grid item xs={12} md={6} key={ev.id}>
                <Card sx={{ height: '100%', p: 4, borderRadius: 4, border: `1px solid ${palette.borderLight}`, backgroundColor: palette.surfaceAlt, display: 'flex', flexDirection: 'column' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: palette.primary, fontWeight: 700 }}>
                      <Calendar size={18} color={palette.secondary} />
                      {ev.date}
                    </Box>
                    <Box sx={{ backgroundColor: 'rgba(15, 61, 62, 0.08)', color: palette.primary, px: 1.5, py: 0.25, borderRadius: 1, fontSize: '0.75rem', fontWeight: 700 }}>
                      {ev.category}
                    </Box>
                  </Box>

                  <Typography variant="h5" sx={{ fontWeight: 800, color: palette.textPrimary, mb: 1.5 }}>
                    {ev.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: palette.textSecondary, lineHeight: 1.65, mb: 3, flexGrow: 1 }}>
                    {ev.description}
                  </Typography>

                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, pt: 2, borderTop: `1px solid ${palette.border}`, mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Clock size={16} color={palette.textMuted} />
                      <Typography variant="caption" sx={{ color: palette.textSecondary }}>
                        {ev.time}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <MapPin size={16} color={palette.textMuted} />
                      <Typography variant="caption" sx={{ color: palette.textSecondary }}>
                        {ev.venue}
                      </Typography>
                    </Box>
                  </Box>

                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="contained"
                    color="primary"
                    sx={{ alignSelf: 'flex-start', fontWeight: 700 }}
                  >
                    Event Details & Queries
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default EventsOverviewPage;
