import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Card, CardContent, TextField, MenuItem } from '@mui/material';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { administrationContent } from '../../content/administrationContent';
import { schoolThemeConfig } from '../../theme/schoolTheme';

export const FacultyDirectoryPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const { facultyHeads } = administrationContent;
  const [selectedDept, setSelectedDept] = useState('All');

  const departments = ['All', 'Senior Secondary', 'Middle School', 'Primary Wing', 'Sports'];

  const allFaculty = [
    ...facultyHeads,
    {
      name: "Dr. Shalini Saxena",
      role: "Senior Chemistry Specialist",
      department: "Senior Secondary",
      experience: "14 Years Experience",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    },
    {
      name: "Mr. David Thomas",
      role: "Head of English & Literature",
      department: "Senior Secondary",
      experience: "16 Years Experience",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    },
    {
      name: "Mrs. Priya Nambiar",
      role: "Robotics & Computer Science Mentor",
      department: "Middle School",
      experience: "9 Years Experience",
      image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=400&auto=format&fit=crop&q=80",
    },
    {
      name: "Mr. Rajesh Gurung",
      role: "Visual Arts & Clay Sculptor",
      department: "Primary Wing",
      experience: "11 Years Experience",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80",
    },
  ];

  const filtered = selectedDept === 'All'
    ? allFaculty
    : allFaculty.filter((f) => f.department.toLowerCase().includes(selectedDept.toLowerCase()));

  return (
    <Box component="main">
      <SEOHead title="Faculty & Staff Directory" canonicalPath="/administration/faculty" />
      <PageHero
        title="Distinguished Faculty & Staff"
        subtitle="Meet the subject specialists and passionate mentors guiding every student's learning arc."
        eyebrow="Our Educators"
        breadcrumbs={[
          { label: 'Administration', href: '/administration' },
          { label: 'Faculty Directory', href: '/administration/faculty' },
        ]}
      />

      <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5, flexWrap: 'wrap', gap: 2 }}>
            <SectionHeader
              eyebrow="Department Filter"
              title="Educator Profiles"
              align="left"
            />
            <TextField
              select
              size="small"
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              sx={{ minWidth: 200 }}
              label="Filter by Department"
            >
              {departments.map((d) => (
                <MenuItem key={d} value={d}>
                  {d}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Grid container spacing={4}>
            {filtered.map((f, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card sx={{ height: '100%', borderRadius: 3, overflow: 'hidden', border: `1px solid ${palette.borderLight}` }}>
                  <Box
                    component="img"
                    src={f.image}
                    alt={f.name}
                    sx={{ width: '100%', height: 260, objectFit: 'cover' }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: palette.textPrimary, mb: 0.5 }}>
                      {f.name}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: palette.primary, fontWeight: 600, mb: 0.5 }}>
                      {f.role}
                    </Typography>
                    <Typography variant="caption" sx={{ color: palette.textMuted, display: 'block' }}>
                      {f.department} • {f.experience}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default FacultyDirectoryPage;
