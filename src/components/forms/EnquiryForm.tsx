import React, { useState } from 'react';
import {
  Box,
  TextField,
  MenuItem,
  Button,
  Typography,
  Alert,
  CircularProgress,
  Grid,
} from '@mui/material';
import { Send, CheckCircle2, Mail } from 'lucide-react';
import { enquiryConfig } from '../../config/enquiryConfig';
import { schoolConfig } from '../../config/schoolConfig';
import { schoolThemeConfig } from '../../theme/schoolTheme';

interface EnquiryFormProps {
  onSuccess?: () => void;
  compact?: boolean;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ onSuccess, compact = false }) => {
  const { palette } = schoolThemeConfig;

  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    mobileNumber: '',
    email: '',
    grade: enquiryConfig.gradesList[0] || 'Nursery',
    enquiryType: enquiryConfig.enquiryTypes[0] || 'New Admission',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitMethodUsed, setSubmitMethodUsed] = useState<'external' | 'mailto' | null>(null);

  const validate = () => {
    const err: Record<string, string> = {};
    if (!formData.parentName.trim()) err.parentName = 'Parent name is required';
    if (!formData.studentName.trim()) err.studentName = 'Student name is required';
    
    if (!formData.mobileNumber.trim()) {
      err.mobileNumber = 'Mobile number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.mobileNumber.trim())) {
      err.mobileNumber = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      err.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      err.email = 'Please enter a valid email address';
    }

    if (formData.message.length > 500) {
      err.message = 'Message cannot exceed 500 characters';
    }

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(`${enquiryConfig.defaultSubjectPrefix} - ${formData.studentName} (${formData.grade})`);
    const body = encodeURIComponent(
      `Hello ${schoolConfig.name} Admissions Team,\n\n` +
      `I would like to make an enquiry regarding admission:\n\n` +
      `• Parent/Guardian Name: ${formData.parentName}\n` +
      `• Student Name: ${formData.studentName}\n` +
      `• Grade Applying For: ${formData.grade}\n` +
      `• Phone Number: ${formData.mobileNumber}\n` +
      `• Email Address: ${formData.email}\n` +
      `• Enquiry Type: ${formData.enquiryType}\n\n` +
      `Message / Specific Questions:\n${formData.message || 'N/A'}\n\n` +
      `Thank you,\n${formData.parentName}`
    );

    window.location.href = `mailto:${enquiryConfig.schoolEmail}?subject=${subject}&body=${body}`;
    setSubmitMethodUsed('mailto');
    setSubmitSuccess(true);
    if (onSuccess) onSuccess();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    if (enquiryConfig.provider === 'external-form' && enquiryConfig.endpoint) {
      try {
        const response = await fetch(enquiryConfig.endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setSubmitMethodUsed('external');
          setSubmitSuccess(true);
          if (onSuccess) onSuccess();
        } else {
          // Fall back gracefully to mailto
          handleMailtoFallback();
        }
      } catch (err) {
        // Network or CORS failure -> fallback to mailto without breaking
        handleMailtoFallback();
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Direct mailto approach (100% static, zero dependency)
      handleMailtoFallback();
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <Box
        sx={{
          p: 4,
          textAlign: 'center',
          backgroundColor: '#F0FDF4',
          borderRadius: 2,
          border: '1px solid #BBF7D0',
        }}
      >
        <CheckCircle2 size={48} color={palette.success} style={{ margin: '0 auto 16px' }} />
        <Typography variant="h5" sx={{ fontWeight: 700, color: '#166534', mb: 1 }}>
          Enquiry Initiated Successfully!
        </Typography>
        <Typography variant="body1" sx={{ color: '#15803D', maxWidth: '500px', mx: 'auto', mb: 3 }}>
          {submitMethodUsed === 'mailto'
            ? `Your default email client has been opened with your pre-filled inquiry to ${enquiryConfig.schoolEmail}. Please hit send to submit.`
            : `Thank you for reaching out. Our admissions counselor will contact you at ${formData.mobileNumber} within 24 working hours.`}
        </Typography>
        <Button
          variant="outlined"
          onClick={() => {
            setSubmitSuccess(false);
            setFormData({
              parentName: '',
              studentName: '',
              mobileNumber: '',
              email: '',
              grade: enquiryConfig.gradesList[0],
              enquiryType: enquiryConfig.enquiryTypes[0],
              message: '',
            });
          }}
          sx={{ borderColor: '#166534', color: '#166534' }}
        >
          Submit Another Enquiry
        </Button>
      </Box>
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <Grid container spacing={compact ? 2 : 2.5}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="parentName"
            name="parentName"
            label="Parent / Guardian Name"
            value={formData.parentName}
            onChange={handleChange}
            error={Boolean(errors.parentName)}
            helperText={errors.parentName}
            size={compact ? 'small' : 'medium'}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="studentName"
            name="studentName"
            label="Student Full Name"
            value={formData.studentName}
            onChange={handleChange}
            error={Boolean(errors.studentName)}
            helperText={errors.studentName}
            size={compact ? 'small' : 'medium'}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            id="mobileNumber"
            name="mobileNumber"
            label="Mobile Number (e.g. +91-9876543210)"
            value={formData.mobileNumber}
            onChange={handleChange}
            error={Boolean(errors.mobileNumber)}
            helperText={errors.mobileNumber}
            size={compact ? 'small' : 'medium'}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            required
            type="email"
            id="email"
            name="email"
            label="Email Address"
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
            size={compact ? 'small' : 'medium'}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            id="grade"
            name="grade"
            label="Grade Applying For"
            value={formData.grade}
            onChange={handleChange}
            size={compact ? 'small' : 'medium'}
          >
            {enquiryConfig.gradesList.map((grade) => (
              <MenuItem key={grade} value={grade}>
                {grade}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            select
            id="enquiryType"
            name="enquiryType"
            label="Enquiry Category"
            value={formData.enquiryType}
            onChange={handleChange}
            size={compact ? 'small' : 'medium'}
          >
            {enquiryConfig.enquiryTypes.map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <TextField
            fullWidth
            multiline
            rows={compact ? 3 : 4}
            id="message"
            name="message"
            label="Questions or Message (Optional)"
            placeholder="Share details about previous curriculum, specific interests, transport requests, etc."
            value={formData.message}
            onChange={handleChange}
            error={Boolean(errors.message)}
            helperText={errors.message || `${formData.message.length}/500 characters`}
          />
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              disabled={isSubmitting}
              startIcon={isSubmitting ? <CircularProgress size={18} color="inherit" /> : <Send size={18} />}
              sx={{ py: 1.5, fontWeight: 700 }}
            >
              {isSubmitting ? 'Sending Request...' : 'Submit Admission Enquiry'}
            </Button>

            <Typography variant="caption" sx={{ color: palette.textMuted, display: 'flex', alignItems: 'center', gap: 0.75 }}>
              <Mail size={14} /> Note: Form connects to our direct admissions desk. Your contact information is never shared.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
