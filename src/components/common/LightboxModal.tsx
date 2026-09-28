import React, { useEffect } from 'react';
import { Dialog, DialogContent, IconButton, Typography, Box } from '@mui/material';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { MediaItem } from '../../media/mediaConfig';

interface LightboxModalProps {
  open: boolean;
  images: MediaItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  open,
  images,
  currentIndex,
  onClose,
  onNavigate,
}) => {
  const currentItem = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && images.length > 1) {
        onNavigate((currentIndex + 1) % images.length);
      }
      if (e.key === 'ArrowLeft' && images.length > 1) {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, currentIndex, images.length, onClose, onNavigate]);

  if (!currentItem) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          backgroundColor: 'rgba(10, 20, 20, 0.96)',
          backdropFilter: 'blur(16px)',
          borderRadius: 3,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
          overflow: 'hidden',
          m: 2,
        },
      }}
    >
      <DialogContent sx={{ p: 0, position: 'relative', display: 'flex', flexDirection: 'column', minHeight: '60vh' }}>
        {/* Close button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 10,
            color: '#FFFFFF',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
          }}
          aria-label="Close lightbox"
        >
          <X size={24} />
        </IconButton>

        {/* Navigation buttons */}
        {images.length > 1 && (
          <>
            <IconButton
              onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
              sx={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                color: '#FFFFFF',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
              }}
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </IconButton>

            <IconButton
              onClick={() => onNavigate((currentIndex + 1) % images.length)}
              sx={{
                position: 'absolute',
                right: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                color: '#FFFFFF',
                backgroundColor: 'rgba(0, 0, 0, 0.4)',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
              }}
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </IconButton>
          </>
        )}

        {/* Main image container */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: { xs: 2, md: 4 },
            minHeight: { xs: '350px', md: '550px' },
            maxHeight: '75vh',
          }}
        >
          <img
            src={currentItem.imageUrl}
            alt={currentItem.alt || currentItem.title}
            style={{
              maxWidth: '100%',
              maxHeight: '70vh',
              objectFit: 'contain',
              borderRadius: 8,
              boxShadow: '0 8px 30px rgba(0,0,0,0.5)',
            }}
          />
        </Box>

        {/* Caption bar */}
        <Box
          sx={{
            p: 2.5,
            px: 4,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 1,
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ color: '#FFFFFF', fontWeight: 600 }}>
              {currentItem.title}
            </Typography>
            {currentItem.caption && (
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.75)', mt: 0.5 }}>
                {currentItem.caption}
              </Typography>
            )}
          </Box>
          <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            {currentIndex + 1} of {images.length}
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
