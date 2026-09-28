import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Tabs, Tab, Card, CardContent } from '@mui/material';
import { Maximize2, Camera } from 'lucide-react';
import { PageHero } from '../../components/common/PageHero';
import { SEOHead } from '../../components/common/SEOHead';
import { SectionHeader } from '../../components/common/SectionHeader';
import { ImageWithFallback } from '../../components/common/ImageWithFallback';
import { LightboxModal } from '../../components/common/LightboxModal';
import { activeMediaProvider } from '../../media/useMedia';
import { schoolThemeConfig } from '../../theme/schoolTheme';

const categories = ['All', 'Sports', 'Science', 'Celebrations', 'Arts', 'Trips', 'Activities', 'Achievements'];

export const GalleryOverviewPage: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const images = activeMediaProvider.getGalleryImages(selectedCategory);

  const handleOpenImage = (index: number) => {
    setCurrentIdx(index);
    setLightboxOpen(true);
  };

  return (
    <Box component="main">
      <SEOHead title="Photo Gallery & Media Showcase" canonicalPath="/gallery" />
      <PageHero
        title="Visual Memories & Moments"
        subtitle="A vibrant photographic chronicle capturing life, milestones, sports triumphs, and celebrations."
        eyebrow="Campus Gallery"
        breadcrumbs={[{ label: 'Gallery', href: '/gallery' }]}
        bgImage="https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&auto=format&fit=crop&q=80"
      />

      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: palette.background }}>
        <Container maxWidth="xl">
          {/* Category Tabs */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <Tabs
              value={selectedCategory}
              onChange={(_e, val) => setSelectedCategory(val)}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{
                '& .MuiTabs-indicator': { backgroundColor: palette.primary, height: 3 },
                '& .MuiTab-root': {
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textTransform: 'none',
                  minWidth: 100,
                  color: palette.textSecondary,
                  '&.Mui-selected': { color: palette.primary },
                },
              }}
            >
              {categories.map((cat) => (
                <Tab key={cat} label={cat} value={cat} />
              ))}
            </Tabs>
          </Box>

          {/* Photo Grid */}
          <Grid container spacing={3.5}>
            {images.map((item, idx) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card
                  onClick={() => handleOpenImage(idx)}
                  sx={{
                    borderRadius: 3,
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: `1px solid ${palette.borderLight}`,
                    transition: 'all 0.35s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: '0 16px 32px rgba(15, 61, 62, 0.12)',
                      '& .photo-zoom': { transform: 'scale(1.08)' },
                      '& .photo-overlay': { opacity: 1 },
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', height: 260, overflow: 'hidden' }}>
                    <ImageWithFallback
                      src={item.imageUrl}
                      alt={item.title}
                      className="photo-zoom"
                      style={{ transition: 'transform 0.5s ease', width: '100%', height: '100%' }}
                    />
                    <Box
                      className="photo-overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(15, 61, 62, 0.75)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        p: 3,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        color: '#FFFFFF',
                        textAlign: 'center',
                      }}
                    >
                      <Box sx={{ p: 1.5, borderRadius: '50%', backgroundColor: palette.secondary, color: palette.primaryDark, mb: 1 }}>
                        <Maximize2 size={20} />
                      </Box>
                      <Typography variant="caption" sx={{ color: palette.secondaryLight, fontWeight: 700 }}>
                        {item.category}
                      </Typography>
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 2.5 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: palette.textPrimary }} noWrap>
                      {item.title}
                    </Typography>
                    {item.caption && (
                      <Typography variant="body2" sx={{ color: palette.textSecondary, mt: 0.5 }} noWrap>
                        {item.caption}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Lightbox */}
      <LightboxModal
        open={lightboxOpen}
        images={images}
        currentIndex={currentIdx}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setCurrentIdx(newIdx)}
      />
    </Box>
  );
};

export default GalleryOverviewPage;
