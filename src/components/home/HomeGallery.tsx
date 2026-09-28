import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Button, Card, CardContent } from '@mui/material';
import { ArrowRight, Maximize2 } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { activeMediaProvider } from '../../media/useMedia';
import { schoolThemeConfig } from '../../theme/schoolTheme';
import { SectionHeader } from '../common/SectionHeader';
import { ImageWithFallback } from '../common/ImageWithFallback';
import { LightboxModal } from '../common/LightboxModal';
import { useScrollAnimation } from '../../animations/useScrollAnimation';
import { getAnimationStyles } from '../../animations/animationVariants';

export const HomeGallery: React.FC = () => {
  const { palette } = schoolThemeConfig;
  const galleryItems = activeMediaProvider.getGalleryImages().slice(0, 6);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const { ref, isVisible, reducedMotion } = useScrollAnimation(0.15);

  const handleOpenPhoto = (idx: number) => {
    setActivePhotoIdx(idx);
    setLightboxOpen(true);
  };

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: palette.background,
      }}
    >
      <Container maxWidth="xl">
        <SectionHeader
          eyebrow="Campus Life in Frames"
          title="Moments of Joy, Discovery & Triumph"
          subtitle="Explore snapshot glimpses of student performances, scientific innovation, athletic meets, and everyday camaraderie."
        />

        <Grid container spacing={3}>
          {galleryItems.map((item, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={item.id}
              sx={{
                ...getAnimationStyles('scale', isVisible, reducedMotion, idx * 60),
              }}
            >
              <Card
                onClick={() => handleOpenPhoto(idx)}
                sx={{
                  position: 'relative',
                  borderRadius: 3,
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: `1px solid ${palette.borderLight}`,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.05)',
                  '&:hover': {
                    '& .gallery-zoom-img': {
                      transform: 'scale(1.08)',
                    },
                    '& .gallery-overlay': {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box sx={{ position: 'relative', height: 260, overflow: 'hidden' }}>
                  <ImageWithFallback
                    src={item.imageUrl}
                    alt={item.title}
                    className="gallery-zoom-img"
                    style={{ transition: 'transform 0.5s ease', width: '100%', height: '100%' }}
                  />

                  {/* Hover Overlay */}
                  <Box
                    className="gallery-overlay"
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
                      textAlign: 'center',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      color: '#FFFFFF',
                    }}
                  >
                    <Box
                      sx={{
                        p: 1.5,
                        borderRadius: '50%',
                        backgroundColor: palette.secondary,
                        color: palette.primaryDark,
                        mb: 1.5,
                      }}
                    >
                      <Maximize2 size={20} />
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#FFFFFF' }}>
                      {item.title}
                    </Typography>
                    {item.category && (
                      <Typography variant="caption" sx={{ color: palette.secondaryLight, mt: 0.5 }}>
                        {item.category}
                      </Typography>
                    )}
                  </Box>
                </Box>

                <CardContent sx={{ p: 2, backgroundColor: '#FFFFFF' }}>
                  <Typography variant="subtitle2" sx={{ fontWeight: 600, color: palette.textPrimary }} noWrap>
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View Full Gallery Link Button */}
        <Box sx={{ textAlign: 'center', mt: 6 }}>
          <Button
            component={RouterLink}
            to="/gallery"
            variant="outlined"
            color="primary"
            size="large"
            endIcon={<ArrowRight size={18} />}
            sx={{ px: 4, py: 1.5, fontWeight: 700 }}
          >
            View Complete Gallery & Media Archives
          </Button>
        </Box>
      </Container>

      {/* Lightbox Modal */}
      <LightboxModal
        open={lightboxOpen}
        images={galleryItems}
        currentIndex={activePhotoIdx}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setActivePhotoIdx(newIdx)}
      />
    </Box>
  );
};
