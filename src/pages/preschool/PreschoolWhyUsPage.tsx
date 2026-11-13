import React from 'react';
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Heart,
  MessageSquareText,
  Palette,
  Presentation,
  Sprout,
  UsersRound,
} from 'lucide-react';
import { PreschoolPageHeader } from '../../components/preschool/PreschoolPageHeader';
import { SEOHead } from '../../components/common/SEOHead';
import pageSeo from '../../config/preschool/pageSeo.json';
import { curriculumFeatureConfig } from '../../config/preschool/trust.config';
import { preschoolProfile } from '../../config/preschool/profile.config';
import { preschoolPalette } from '../../config/preschoolTheme.palette';

const learningPillars = [
  {
    title: 'Learning through play',
    description:
      'Play, stories, creative activities, and exploration give children meaningful ways to engage with new ideas.',
    icon: <Palette size={25} />,
    color: preschoolPalette.coral,
    tint: preschoolPalette.coralLight,
  },
  {
    title: 'Care that builds confidence',
    description:
      'A welcoming environment helps children settle in, try new things, and celebrate their own small milestones.',
    icon: <Heart size={25} />,
    color: preschoolPalette.primaryBlue,
    tint: preschoolPalette.skyLight,
  },
  {
    title: 'Growing together',
    description:
      'Children learn alongside their peers while building curiosity, communication, and independence at their own pace.',
    icon: <Sprout size={25} />,
    color: preschoolPalette.leafGreen,
    tint: preschoolPalette.leafGreenLight,
  },
];

const curriculumIcons: Record<string, React.ReactNode> = {
  'weekly-planner': <CalendarDays size={20} />,
  'school-home-communique': <MessageSquareText size={20} />,
  'flow-of-the-day': <CheckCircle2 size={20} />,
  'digital-gallery': <BookOpen size={20} />,
  'online-hybrid-learning': <BookOpen size={20} />,
  'parent-participation': <UsersRound size={20} />,
  'student-assessments': <CheckCircle2 size={20} />,
  'class-presentations': <Presentation size={20} />,
};

export const PreschoolWhyUsPage: React.FC = () => (
  <Box component="main" sx={{ minHeight: '60vh', bgcolor: '#FFFDF9' }}>
    <SEOHead
      title={pageSeo.whyUs.title}
      description={pageSeo.whyUs.description}
      canonicalPath={pageSeo.whyUs.path}
    />
    {/* <PreschoolPageHeader
      eyebrow={pageSeo.whyUs.eyebrow}
      title={pageSeo.whyUs.heading}
      description="At Little Wings Care School, early learning is shaped by care, curiosity, purposeful play, and a close connection between school and home."
    /> */}

    <Box component="section" sx={{ py: { xs: 4, md: 6 }, bgcolor: preschoolPalette.cream }}>
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 720, mx: 'auto', textAlign: 'center', mb: { xs: 3, md: 4 } }}>
          <Typography
            component="h2"
            sx={{
              color: preschoolPalette.text,
              fontFamily: "'Fredoka', sans-serif",
              fontSize: { xs: '1.7rem', md: '2.1rem' },
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            {pageSeo.whyUs.heading}
          </Typography>
          <Typography sx={{ mt: 1, color: preschoolPalette.mutedText, lineHeight: 1.75 }}>
            {preschoolProfile.overview}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
            gap: { xs: 1.5, md: 2 },
          }}
        >
          {learningPillars.map((pillar) => (
            <Paper
              key={pillar.title}
              elevation={0}
              sx={{
                display: 'flex',
                gap: 1.75,
                alignItems: 'flex-start',
                p: { xs: 2, md: 2.5 },
                borderRadius: '22px',
                bgcolor: '#FFFFFF',
                border: `1px solid ${pillar.color}38`,
                boxShadow: '0 10px 28px rgba(48, 68, 90, 0.045)',
              }}
            >
              <Box
                sx={{
                  flex: '0 0 auto',
                  width: 46,
                  height: 46,
                  display: 'grid',
                  placeItems: 'center',
                  borderRadius: '16px',
                  color: pillar.color,
                  bgcolor: pillar.tint,
                }}
              >
                {pillar.icon}
              </Box>
              <Box>
                <Typography
                  component="h3"
                  sx={{
                    color: preschoolPalette.text,
                    fontFamily: "'Fredoka', sans-serif",
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    lineHeight: 1.25,
                    mb: 0.65,
                  }}
                >
                  {pillar.title}
                </Typography>
                <Typography sx={{ color: preschoolPalette.mutedText, fontSize: '0.91rem', lineHeight: 1.65 }}>
                  {pillar.description}
                </Typography>
              </Box>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>

    <Box component="section" sx={{ py: { xs: 5, md: 8 } }}>
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 2.5, sm: 3.5, md: 5 },
            borderRadius: { xs: '24px', md: '32px' },
            bgcolor: '#FFFFFF',
            border: '1px solid #FFE4E1',
            boxShadow: '0 18px 48px rgba(48, 68, 90, 0.07)',
          }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 2.5, md: 3.5 } }}>
            <Typography
              sx={{
                color: preschoolPalette.coral,
                fontFamily: "'Fredoka', sans-serif",
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
              }}
            >
              LEARNING, MADE VISIBLE
            </Typography>
            <Typography
              component="h2"
              sx={{
                color: preschoolPalette.text,
                fontFamily: "'Fredoka', sans-serif",
                fontSize: { xs: '1.75rem', md: '2.2rem' },
                fontWeight: 700,
                lineHeight: 1.2,
                mt: 0.5,
              }}
            >
              Unique Curriculum Features
            </Typography>
            <Typography sx={{ color: preschoolPalette.mutedText, mt: 1, lineHeight: 1.7 }}>
              A thoughtful connection between classroom experiences, children’s progress, and family participation.
            </Typography>
          </Box>

          <Box
            component="ul"
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              columnGap: { xs: 0, sm: 3 },
            }}
          >
            {curriculumFeatureConfig.map((feature) => (
              <Box
                component="li"
                key={feature.id}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 1.5,
                  py: 1.8,
                  borderBottom: '1px solid #F0E6D8',
                }}
              >
                <Box
                  sx={{
                    flex: '0 0 auto',
                    mt: 0.15,
                    width: 36,
                    height: 36,
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: '12px',
                    color: feature.accentColor,
                    bgcolor: `${feature.accentColor}16`,
                  }}
                >
                  {curriculumIcons[feature.id] ?? <BookOpen size={20} />}
                </Box>
                <Box>
                  <Typography
                    component="h3"
                    sx={{
                      color: preschoolPalette.text,
                      fontFamily: "'Fredoka', sans-serif",
                      fontSize: '1.02rem',
                      fontWeight: 700,
                      lineHeight: 1.3,
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography sx={{ color: preschoolPalette.mutedText, fontSize: '0.86rem', lineHeight: 1.6, mt: 0.4 }}>
                    {feature.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 3, md: 4 } }}>
            <Button
              component={Link}
              to="/programs/"
              variant="contained"
              sx={{
                px: 3,
                py: 1.15,
                borderRadius: '9999px',
                bgcolor: preschoolPalette.coral,
                fontFamily: "'Fredoka', sans-serif",
                fontWeight: 700,
                '&:hover': { bgcolor: '#E96849' },
              }}
            >
              Explore our programmes
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  </Box>
);

export default PreschoolWhyUsPage;
