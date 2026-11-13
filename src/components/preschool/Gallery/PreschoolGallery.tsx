import React, { useState } from 'react';
import { Box, Button, Container, Dialog, Grid, IconButton, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { galleryConfig } from '../../../config/preschool/gallery.config';

const categories = ['All', 'Classrooms', 'Activities', 'Events', 'Playground', 'Celebrations'] as const;

export const PreschoolGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  const filteredItems = selectedCategory === 'All'
    ? galleryConfig
    : galleryConfig.filter((item) => item.category === selectedCategory);
  const activeItem = filteredItems[activeIndex];

  const showPrevious = () => {
    setActiveIndex((index) => (index - 1 + filteredItems.length) % filteredItems.length);
  };

  const showNext = () => {
    setActiveIndex((index) => (index + 1) % filteredItems.length);
  };

  return (
    <Box id="gallery" sx={{ pt: { xs: 4, md: 4 }, pb: { xs: 8, md: 14 }, bgcolor: '#FFFDF9' }}>
      <Container maxWidth="lg">
        <Box
          role="group"
          aria-label="Filter gallery by category"
          sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1.5, mb: { xs: 4, md: 5 } }}
        >
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <Button
                key={category}
                type="button"
                aria-pressed={isSelected}
                onClick={() => {
                  setSelectedCategory(category);
                  setActiveIndex(0);
                }}
                sx={{
                  bgcolor: isSelected ? '#FF6B6B' : '#FFF0F0',
                  color: isSelected ? '#FFFFFF' : '#FF6B6B',
                  fontWeight: 800,
                  fontFamily: "'Fredoka', sans-serif",
                  fontSize: '0.95rem',
                  px: 2.5,
                  py: 1,
                  borderRadius: '9999px',
                  transition: 'all 0.3s ease',
                  '&:hover': { bgcolor: '#FF6B6B', color: '#FFFFFF' },
                }}
              >
                {category}
              </Button>
            );
          })}
        </Box>

        <Grid container spacing={{ xs: 2, sm: 2.5 }}>
          {filteredItems.map((item, index) => (
            <Grid item xs={6} sm={6} md={4} key={item.id}>
              <Box
                component="button"
                type="button"
                aria-label={`View ${item.title}`}
                onClick={() => {
                  setActiveIndex(index);
                  setIsZoomOpen(true);
                }}
                sx={{
                  display: 'block',
                  width: '100%',
                  aspectRatio: '4 / 3',
                  p: 0,
                  border: 0,
                  borderRadius: { xs: '14px', sm: '20px' },
                  overflow: 'hidden',
                  bgcolor: '#17212B',
                  cursor: 'zoom-in',
                  boxShadow: '0 8px 24px rgba(44, 62, 80, 0.12)',
                  '&:hover img': { transform: 'scale(1.04)' },
                  '&:focus-visible': { outline: '3px solid #FF6B6B', outlineOffset: 3 },
                }}
              >
                <Box
                  component="img"
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  sx={{
                    width: '100%',
                    height: '100%',
                    display: 'block',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>

        {activeItem && (
          <Dialog
            open={isZoomOpen}
            onClose={() => setIsZoomOpen(false)}
            fullWidth
            maxWidth="xl"
            aria-labelledby="gallery-zoom-title"
            PaperProps={{
              sx: {
                m: { xs: 1, sm: 3 },
                width: { xs: 'calc(100% - 16px)', sm: 'calc(100% - 48px)' },
                maxWidth: 1440,
                maxHeight: 'calc(100% - 32px)',
                borderRadius: { xs: '16px', sm: '24px' },
                bgcolor: '#17212B',
                color: '#FFFFFF',
              },
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: { xs: 2, sm: 3 }, py: 1.5 }}>
              <Typography id="gallery-zoom-title" variant="h6" sx={{ fontWeight: 700, pr: 2 }}>
                {activeItem.title}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Typography aria-live="polite" variant="body2" sx={{ color: 'rgba(255,255,255,0.72)' }}>
                  {activeIndex + 1} / {filteredItems.length}
                </Typography>
                <IconButton aria-label="Close zoom view" onClick={() => setIsZoomOpen(false)} sx={{ color: '#FFFFFF' }}>
                  <X size={24} />
                </IconButton>
              </Box>
            </Box>

            <Box
              sx={{
                position: 'relative',
                height: { xs: '55vh', sm: '68vh' },
                minHeight: 240,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                px: { xs: 1, sm: 5 },
              }}
            >
              <Box
                key={activeItem.id}
                component="img"
                src={activeItem.imageUrl}
                alt={activeItem.title}
                sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
              />
              {filteredItems.length > 1 && (
                <>
                  <IconButton
                    aria-label="Previous image"
                    onClick={showPrevious}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: { xs: 8, sm: 16 },
                      transform: 'translateY(-50%)',
                      bgcolor: 'rgba(255,255,255,0.92)',
                      color: '#2C3E50',
                      '&:hover': { bgcolor: '#FFFFFF' },
                    }}
                  >
                    <ChevronLeft size={28} />
                  </IconButton>
                  <IconButton
                    aria-label="Next image"
                    onClick={showNext}
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      right: { xs: 8, sm: 16 },
                      transform: 'translateY(-50%)',
                      bgcolor: 'rgba(255,255,255,0.92)',
                      color: '#2C3E50',
                      '&:hover': { bgcolor: '#FFFFFF' },
                    }}
                  >
                    <ChevronRight size={28} />
                  </IconButton>
                </>
              )}
            </Box>

            <Box
              role="group"
              aria-label="Choose a gallery image"
              sx={{
                display: 'flex',
                gap: 1.5,
                overflowX: 'auto',
                px: { xs: 2, sm: 3 },
                py: 2,
                scrollbarWidth: 'thin',
                '&::-webkit-scrollbar': { height: 8 },
                '&::-webkit-scrollbar-thumb': { bgcolor: '#596774', borderRadius: 4 },
              }}
            >
              {filteredItems.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <Box
                    key={item.id}
                    component="button"
                    type="button"
                    aria-label={`Show image ${index + 1}: ${item.title}`}
                    aria-pressed={isActive}
                    onClick={() => setActiveIndex(index)}
                    sx={{
                      flex: '0 0 auto',
                      width: { xs: 76, sm: 104 },
                      height: { xs: 62, sm: 80 },
                      p: 0,
                      border: isActive ? '3px solid #FF6B6B' : '3px solid transparent',
                      borderRadius: '10px',
                      overflow: 'hidden',
                      bgcolor: '#FFFFFF',
                      cursor: 'pointer',
                      opacity: isActive ? 1 : 0.68,
                      '&:hover': { opacity: 1 },
                      '&:focus-visible': { outline: '3px solid #FFFFFF', outlineOffset: 2 },
                    }}
                  >
                    <Box
                      component="img"
                      src={item.imageUrl}
                      alt=""
                      loading="lazy"
                      sx={{ width: '100%', height: '100%', display: 'block', objectFit: 'cover' }}
                    />
                  </Box>
                );
              })}
            </Box>
          </Dialog>
        )}
      </Container>
    </Box>
  );
};
