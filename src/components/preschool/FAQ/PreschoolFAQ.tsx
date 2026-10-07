import React from 'react';
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqConfig } from '../../../config/preschool/faq.config';

export const PreschoolFAQ: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 14 }, bgcolor: '#FFFDF9' }}>
      <Container maxWidth="md">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 7 }}>
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
            ❓ FREQUENTLY ASKED QUESTIONS
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
            Got Questions? We Have Answers.
          </Typography>
        </Box>

        {/* Accordion List */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {faqConfig.map((item) => (
            <Accordion
              key={item.id}
              elevation={0}
              sx={{
                borderRadius: '20px !important',
                border: '2px solid #FFEAEB',
                bgcolor: '#FFFFFF',
                overflow: 'hidden',
                '&::before': { display: 'none' },
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
              }}
            >
              <AccordionSummary
                expandIcon={<ChevronDown size={22} color="#FF6B6B" />}
                sx={{ p: 2.5 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.8 }}>
                  <HelpCircle size={22} color="#4ECDC4" />
                  <Typography
                    variant="h6"
                    sx={{
                      fontFamily: "'Fredoka', sans-serif",
                      fontWeight: 700,
                      color: '#2C3E50',
                      fontSize: '1.15rem',
                    }}
                  >
                    {item.question}
                  </Typography>
                </Box>
              </AccordionSummary>

              <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    color: '#546E7A',
                    lineHeight: 1.7,
                    fontSize: '1rem',
                  }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};
