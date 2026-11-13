import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Container, Typography, Grid, Paper, Chip, Modal, IconButton } from '@mui/material';
import { X as CloseIcon, ZoomIn } from 'lucide-react';
import { galleryConfig, GalleryMediaItem } from '../../../config/preschool/gallery.config';

export const PreschoolGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryMediaItem | null>(null);
  const [visibleCount, setVisibleCount] = useState(4);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const categories = ['All', 'Classrooms', 'Activities', 'Events', 'Playground', 'Celebrations'];

  const filteredItems = selectedCategory === 'All'
    ? galleryConfig
    : galleryConfig.filter((item) => item.category === selectedCategory);
  const visibleItems = filteredItems.slice(0, visibleCount);

  useEffect(() => {
    setVisibleCount(4);
  }, [selectedCategory]);

  useEffect(() => {
    const sentinel = loadMoreRef.current;
    if (!sentinel || visibleCount >= filteredItems.length) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleCount((count) => Math.min(count + 4, filteredItems.length));
        }
      },
      { rootMargin: '250px' },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [filteredItems.length, visibleCount]);

  return (
    <Box id="gallery" sx={{ pt: { xs: 4, md: 4 }, pb: { xs: 8, md: 14 }, bgcolor: '#FFFDF9' }}>
      <Container maxWidth="lg">
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
          {visibleItems.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Paper
                elevation={0}
                component="button"
                type="button"
                aria-label={`View ${item.title}`}
                onClick={() => setActiveItem(item)}
                sx={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  height: 280,
                  width: '100%',
                  p: 0,
                  border: 0,
                  textAlign: 'left',
                  bgcolor: '#FFFFFF',
                  font: 'inherit',
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

        {visibleCount < filteredItems.length && (
          <Box ref={loadMoreRef} sx={{ py: 4, textAlign: 'center' }}>
            <Button
              variant="outlined"
              onClick={() => setVisibleCount((count) => Math.min(count + 4, filteredItems.length))}
              sx={{ borderColor: '#FF6B6B', color: '#D94F61', fontWeight: 700 }}
            >
              Load more photos
            </Button>
          </Box>
        )}

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
