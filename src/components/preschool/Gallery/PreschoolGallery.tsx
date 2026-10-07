import React, { useState } from 'react';
import { Box, Container, Typography, Grid, Paper, Chip, Modal, IconButton } from '@mui/material';
import { X as CloseIcon, ZoomIn } from 'lucide-react';
import { galleryConfig, GalleryMediaItem } from '../../../config/preschool/gallery.config';

export const PreschoolGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryMediaItem | null>(null);

  const categories = ['All', 'Classrooms', 'Activities', 'Events', 'Playground', 'Celebrations'];

  const filteredItems = selectedCategory === 'All'
    ? galleryConfig
    : galleryConfig.filter((item) => item.category === selectedCategory);

  return (
    <Box id="gallery" sx={{ py: { xs: 8, md: 14 }, bgcolor: '#FFFDF9' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 6, maxWidth: 720, mx: 'auto' }}>
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
            📸 MEMORABLE MOMENTS
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
            Preschool Gallery Showcase
          </Typography>
        </Box>

        {/* Category Chips Bar */}
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 1.5, mb: 6 }}>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setSelectedCategory(cat)}
                sx={{
                  bgcolor: isSelected ? '#FF6B6B' : '#FFF0F0',
                  color: isSelected ? '#FFFFFF' : '#FF6B6B',
                  fontWeight: 800,
                  fontFamily: "'Fredoka', sans-serif",
                  fontSize: '0.95rem',
                  py: 2.2,
                  px: 1.5,
                  cursor: 'pointer',
                  borderRadius: '9999px',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    bgcolor: '#FF6B6B',
                    color: '#FFFFFF',
                  },
                }}
              />
            );
          })}
        </Box>

        {/* Gallery Grid */}
        <Grid container spacing={3}>
          {filteredItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Paper
                elevation={0}
                onClick={() => setActiveItem(item)}
                sx={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  height: 280,
                  boxShadow: '0 10px 24px rgba(0,0,0,0.06)',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 40px rgba(255, 107, 107, 0.2)',
                    '& .gallery-img': { transform: 'scale(1.08)' },
                    '& .gallery-overlay': { opacity: 1 },
                  },
                }}
              >
                <Box
                  className="gallery-img"
                  component="img"
                  src={item.imageUrl}
                  alt={item.title}
                  loading="lazy"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                />

                <Box
                  className="gallery-overlay"
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    bgcolor: 'rgba(44, 62, 80, 0.75)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    p: 3,
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    color: '#FFFFFF',
                  }}
                >
                  <Typography variant="h6" sx={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif", opacity: 0.9 }}>
                    {item.caption}
                  </Typography>
                  <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', gap: 0.8, color: '#FFE66D' }}>
                    <ZoomIn size={18} />
                    <Typography variant="caption" sx={{ fontWeight: 700 }}>Click to enlarge</Typography>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Lightbox Modal */}
        <Modal open={Boolean(activeItem)} onClose={() => setActiveItem(null)}>
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '90%',
              maxWidth: 800,
              bgcolor: '#FFFFFF',
              borderRadius: '28px',
              overflow: 'hidden',
              boxShadow: 24,
              outline: 'none',
            }}
          >
            {activeItem && (
              <>
                <Box sx={{ position: 'relative', height: { xs: 300, sm: 480 } }}>
                  <Box
                    component="img"
                    src={activeItem.imageUrl}
                    alt={activeItem.title}
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <IconButton
                    onClick={() => setActiveItem(null)}
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      bgcolor: 'rgba(0,0,0,0.6)',
                      color: '#FFFFFF',
                      '&:hover': { bgcolor: '#FF6B6B' },
                    }}
                  >
                    <CloseIcon size={24} />
                  </IconButton>
                </Box>

                <Box sx={{ p: 3.5 }}>
                  <Typography variant="h5" sx={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: '#2C3E50', mb: 1 }}>
                    {activeItem.title}
                  </Typography>
                  <Typography variant="body1" sx={{ fontFamily: "'Plus Jakarta Sans', sans-serif", color: '#546E7A' }}>
                    {activeItem.caption}
                  </Typography>
                </Box>
              </>
            )}
          </Box>
        </Modal>
      </Container>
    </Box>
  );
};
