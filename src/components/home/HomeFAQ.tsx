import React from 'react';
import {
  Box,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
} from '@mui/material';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { faqContent } from '../../content/faqContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';
import { SectionHeader } from '../common/SectionHeader';
import { useScrollAnimation } from '../../animations/useScrollAnimation';
import { getAnimationStyles } from '../../animations/animationVariants';

export const HomeFAQ: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const items = faqContent.items.slice(0, 5);
  const [expanded, setExpanded] = React.useState<string | false>('panel-0');

  const { ref, isVisible, reducedMotion } = useScrollAnimation(0.2);

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: palette.background,
      }}
    >
      <Container maxWidth="md">
        <SectionHeader
          eyebrow={faqContent.eyebrow}
          title={faqContent.title}
          subtitle={faqContent.subtitle}
        />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            ...getAnimationStyles('fade-up', isVisible, reducedMotion),
          }}
        >
          {items.map((item, index) => {
            const panelId = `panel-${index}`;
            return (
              <Accordion
                key={index}
                expanded={expanded === panelId}
                onChange={handleChange(panelId)}
                elevation={0}
                sx={{
                  border: `1px solid ${palette.borderLight}`,
                  borderRadius: '12px !important',
                  overflow: 'hidden',
                  '&:before': { display: 'none' },
                  transition: 'border-color 0.25s ease',
                  '&.Mui-expanded': {
                    borderColor: palette.primaryLight,
                    boxShadow: '0 4px 16px rgba(15, 61, 62, 0.06)',
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ChevronDown size={20} color={palette.primary} />}
                  sx={{
                    px: 3,
                    py: 1,
                    backgroundColor: expanded === panelId ? 'rgba(15, 61, 62, 0.03)' : '#FFFFFF',
                  }}
                >
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: palette.textPrimary }}>
                    {item.question}
                  </Typography>
                </AccordionSummary>

                <AccordionDetails sx={{ px: 3, pb: 3, pt: 1, backgroundColor: '#FFFFFF' }}>
                  <Typography variant="body1" sx={{ color: palette.textSecondary, lineHeight: 1.7 }}>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </Box>

        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            component={RouterLink}
            to="/resources/faq"
            variant="text"
            color="primary"
            endIcon={<ArrowRight size={16} />}
            sx={{ fontWeight: 700 }}
          >
            Have More Questions? View All FAQs
          </Button>
        </Box>
      </Container>
    </Box>
  );
};
