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
import { Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { admissionConfig } from '../../../config/preschool/admission.config';
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

  return (
    <SectionDecoration
      sceneKey="admission"
      overlayColor="rgba(255, 245, 230, 0.7)"
      floatingObjects={[
        { objectKey: 'balloon', size: 60, style: { top: '15%', right: '8%' } },
      ]}
      bridgeType="organicWave"
    >
      <Box id="admission-form" sx={{ py: { xs: 8, md: 12 }, position: 'relative', zIndex: 2 }}>
        <Container maxWidth="md">
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3.5, sm: 6 },
              borderRadius: '36px',
              bgcolor: '#FFFFFF',
              border: '3px solid #FFEAEB',
              boxShadow: '0 24px 60px rgba(255, 107, 107, 0.12)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <Box sx={{ textAlign: 'center', mb: 5 }}>
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
                🎒 ADMISSIONS 2026–2027
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
                {admissionConfig.title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  color: '#546E7A',
                  mt: 1.5,
                }}
              >
                {admissionConfig.subtitle}
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
                  sx={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: '#2C3E50', mb: 2 }}
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

                <Grid container spacing={2.5}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Parent Name *"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      variant="outlined"
                      sx={{ '& .MuiOutlinedInput-root': { borderRadius: '16px' } }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Child Name *"
                      name="childName"
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
                      label="Program Interested In *"
                      name="program"
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
                      label="Phone Number (10 digits) *"
                      name="phone"
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
                        fontSize: '1.15rem',
                        py: 1.8,
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
          </Paper>
        </Container>
      </Box>
    </SectionDecoration>
  );
};
