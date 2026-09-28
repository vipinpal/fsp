import React, { useState } from 'react';
import { Box, Container, Accordion, AccordionSummary, AccordionDetails, Typography, Tabs, Tab } from '@mui/material';
import { ChevronDown } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { faqContent, FAQItem } from '../../content/faqContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

const categories = ['All', 'Admissions', 'Academics', 'Campus & Safety', 'Transport & Fees'];

export const FAQPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const [selectedCat, setSelectedCat] = useState('All');
  const [expanded, setExpanded] = useState<string | false>('faq-0');

  const filtered = selectedCat === 'All'
    ? faqContent.items
    : faqContent.items.filter((item) => item.category === selectedCat);

  return (
    <Box component="main">
      <SEOHead title="Frequently Asked Questions (FAQ)" canonicalPath="/resources/faq" />
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Quick, comprehensive answers covering admissions, transport, curriculum, and campus life."
        eyebrow="Help & Support"
        breadcrumbs={[{ label: 'Resources', href: '/resources/downloads' }, { label: 'FAQ', href: '/resources/faq' }]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="md">
          {/* Category Tabs */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 5 }}>
            <Tabs
              value={selectedCat}
              onChange={(_e, v) => setSelectedCat(v)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTabs-indicator': { backgroundColor: palette.primary, height: 3 },
                '& .MuiTab-root': { fontWeight: 700, textTransform: 'none', '&.Mui-selected': { color: palette.primary } },
              }}
            >
              {categories.map((c) => (
                <Tab key={c} label={c} value={c} />
              ))}
            </Tabs>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            {filtered.map((item, idx) => {
              const panelId = `faq-${idx}`;
              return (
                <Accordion
                  key={idx}
                  expanded={expanded === panelId}
                  onChange={(_e, isExp) => setExpanded(isExp ? panelId : false)}
                  elevation={0}
                  sx={{
                    border: `1px solid ${palette.borderLight}`,
                    borderRadius: '12px !important',
                    overflow: 'hidden',
                    '&:before': { display: 'none' },
                    '&.Mui-expanded': { borderColor: palette.primaryLight, boxShadow: '0 4px 16px rgba(15, 61, 62, 0.06)' },
                  }}
                >
                  <AccordionSummary expandIcon={<ChevronDown size={20} color={palette.primary} />}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: palette.textPrimary }}>
                      {item.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ pt: 0, pb: 3, px: 3 }}>
                    <Typography variant="body1" sx={{ color: palette.textSecondary, lineHeight: 1.75 }}>
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default FAQPage;
