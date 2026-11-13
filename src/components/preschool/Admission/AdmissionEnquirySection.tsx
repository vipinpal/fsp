import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  MenuItem,
  Button,
  Alert,
  CircularProgress,
} from '@mui/material';
import { Send, CheckCircle2, Mail, MessageCircle, Phone } from 'lucide-react';
import confetti from 'canvas-confetti';
import { admissionConfig } from '../../../config/preschool/admission.config';
import { siteConfig } from '../../../config/site.config';
import { SectionDecoration } from '../visual/SectionDecoration';

export const AdmissionEnquirySection: React.FC = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    phone: '',
    email: '',
    program: '',
    preferredDate: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fireCelebration = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#FF6B6B', '#4ECDC4', '#FFE66D', '#6BCB77', '#9B5DE5'],
      });
    } catch {
      // Fallback
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.parentName || !formData.childName || !formData.phone || !formData.program) {
      setError('Please fill in all required fields (Parent Name, Child Name, Phone Number, Program).');
      return;
    }

    if (!/^\+?[0-9]{10,12}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      fireCelebration();
    }, 1200);
  };

  const content = (
      <Box id="admission-form" sx={{ py: { xs: 4, md: 6 }, position: 'relative', zIndex: 2, width: '100%' }}>
        <Container maxWidth="lg">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, sm: 3, md: 4 },
              borderRadius: { xs: '24px', md: '30px' },
              bgcolor: '#FFFFFF',
              border: '1px solid #FFE4E1',
              boxShadow: '0 20px 50px rgba(48, 68, 90, 0.08)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
              <Grid item xs={12} lg={8}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="overline"
                    sx={{
                      fontFamily: "'Fredoka', sans-serif",
                      fontWeight: 700,
                      color: '#FF6B6B',
                      letterSpacing: '0.1em',
                      fontSize: '0.78rem',
                    }}
                  >
                    ADMISSIONS ENQUIRIES
                  </Typography>
                  <Typography
                    component="h2"
                    variant="h4"
                    sx={{
                      fontFamily: "'Fredoka', sans-serif",
                      fontWeight: 700,
                      color: '#2C3E50',
                      mt: 0.5,
                      fontSize: { xs: '1.65rem', md: '2rem' },
                      lineHeight: 1.2,
                    }}
                  >
                    Enquire or arrange a visit
                  </Typography>
                  <Typography
                    component="p"
                    sx={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: '#526579',
                      mt: 1,
                      fontSize: { xs: '0.94rem', md: '1rem' },
                      lineHeight: 1.7,
                    }}
                  >
                    Ask us about Pre-Nursery, Nursery, LKG or UKG, current availability, or arranging a school visit. Share a few details and our team can follow up with you.
                  </Typography>
                </Box>

            {submitted ? (
              <Box sx={{ textAlign: 'center', py: 6 }}>
                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    bgcolor: '#EEFBEF',
                    color: '#6BCB77',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  <CheckCircle2 size={48} />
                </Box>
                <Typography
                  variant="h4"
                  sx={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: { xs: '1.55rem', md: '1.8rem' }, color: '#2C3E50', mb: 2 }}
                >
                  {admissionConfig.successTitle}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#546E7A', maxWidth: 500, mx: 'auto', mb: 4 }}
                >
                  {admissionConfig.successMessage}
                </Typography>

                <Button
                  variant="outlined"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      parentName: '',
                      childName: '',
                      childAge: '',
                      phone: '',
                      email: '',
                      program: '',
                      preferredDate: '',
                      message: '',
                    });
                  }}
                  sx={{
                    borderColor: '#FF6B6B',
                    color: '#FF6B6B',
                    fontWeight: 700,
                    fontFamily: "'Fredoka', sans-serif",
                    borderRadius: '9999px',
                    px: 4,
                  }}
                >
                  Submit Another Enquiry
                </Button>
              </Box>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <Alert severity="error" sx={{ mb: 3, borderRadius: '16px' }}>
                    {error}
                  </Alert>
                )}

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Parent Name"
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Child Name"
                      name="childName"
                      required
                      value={formData.childName}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      fullWidth
                      label="Child Age Group"
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }}
                    >
                      {admissionConfig.ageOptions.map((opt) => (
                        <MenuItem key={opt} value={opt}>
                          {opt}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      select
                      fullWidth
                      label="Program Interested In"
                      name="program"
                      required
                      value={formData.program}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }}
                    >
                      {admissionConfig.programOptions.map((prog) => (
                        <MenuItem key={prog} value={prog}>
                          {prog}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number (10 digits)"
                      name="phone"
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Preferred Visit Date"
                      name="preferredDate"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      value={formData.preferredDate}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      label="Any specific questions or preferences?"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      disabled={loading}
                      startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Send size={20} />}
                      sx={{
                        bgcolor: '#FF6B6B',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontFamily: "'Fredoka', sans-serif",
                        fontSize: '1rem',
                        py: 1.35,
                        borderRadius: '9999px',
                        boxShadow: '0 12px 28px rgba(255, 107, 107, 0.35)',
                        '&:hover': { bgcolor: '#FF5252' },
                      }}
                    >
                      {loading ? 'Submitting Enquiry...' : 'Send Admission Enquiry'}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            )}
              </Grid>
              <Grid item xs={12} lg={4}>
                <Box
                  component="aside"
                  sx={{
                    height: '100%',
                    p: { xs: 2.5, md: 3 },
                    borderRadius: '22px',
                    bgcolor: '#FFF7EC',
                    border: '1px solid #F6E5CB',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    component="h3"
                    sx={{
                      fontFamily: "'Fredoka', sans-serif",
                      fontWeight: 700,
                      fontSize: { xs: '1.3rem', md: '1.45rem' },
                      lineHeight: 1.25,
                      color: '#2C3E50',
                    }}
                  >
                    Prefer to talk?
                  </Typography>
                  <Typography sx={{ mt: 1, mb: 2.5, color: '#526579', fontSize: '0.92rem', lineHeight: 1.65 }}>
                    Contact the school directly to ask a question or discuss arranging a visit.
                  </Typography>
                  <Box sx={{ display: 'grid', gap: 1.25 }}>
                    <Button
                      component="a"
                      href={`tel:${siteConfig.phone}`}
                      fullWidth
                      variant="contained"
                      startIcon={<Phone size={18} />}
                      sx={{
                        justifyContent: 'flex-start',
                        px: 2,
                        py: 1.2,
                        borderRadius: '14px',
                        bgcolor: '#FF6B6B',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        textTransform: 'none',
                        '&:hover': { bgcolor: '#E95C5C' },
                      }}
                    >
                      Call the school
                    </Button>
                    {/* <Button
                      component="a"
                      href={`mailto:${siteConfig.email}`}
                      fullWidth
                      variant="outlined"
                      startIcon={<Mail size={18} />}
                      sx={{
                        justifyContent: 'flex-start',
                        px: 2,
                        py: 1.2,
                        borderRadius: '14px',
                        borderColor: '#D8C8B3',
                        color: '#2C3E50',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        textTransform: 'none',
                      }}
                    >
                      Email an enquiry
                    </Button> */}
                    <Button
                      component="a"
                      href={`https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      fullWidth
                      variant="outlined"
                      startIcon={<MessageCircle size={18} />}
                      sx={{
                        justifyContent: 'flex-start',
                        px: 2,
                        py: 1.2,
                        borderRadius: '14px',
                        borderColor: '#B9DDC5',
                        color: '#26734D',
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontWeight: 700,
                        textTransform: 'none',
                      }}
                    >
                      WhatsApp us
                    </Button>
                  </Box>
                  <Typography
                    sx={{
                      mt: 'auto',
                      pt: 3,
                      color: '#687987',
                      fontSize: '0.82rem',
                      lineHeight: 1.6,
                    }}
                  >
                    No need to decide everything now—our team can share programme and availability information with you.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Box>
  );

  return (
    <SectionDecoration
      sceneKey="admission"
      overlayColor="rgba(255, 245, 230, 0.7)"
      floatingObjects={[
        { objectKey: 'balloon', size: 60, style: { top: '15%', right: '8%' } },
      ]}
      bridgeType="organicWave"
      bridgeProp={{ height: 150 }}
    >
      {content}
    </SectionDecoration>
  );
};
