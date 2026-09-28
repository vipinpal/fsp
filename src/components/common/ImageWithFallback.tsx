import React, { useState } from 'react';
import { Box, Skeleton } from '@mui/material';
import { ImageOff } from 'lucide-react';
import { mediaConfig } from '../../media/mediaConfig';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  aspectRatio?: string;
  borderRadius?: number | string;
  showSkeleton?: boolean;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackSrc = mediaConfig.fallbackImage,
  aspectRatio,
  borderRadius = 0,
  showSkeleton = true,
  style,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const finalSrc = hasError ? fallbackSrc : (src || fallbackSrc);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        aspectRatio: aspectRatio || 'auto',
        borderRadius,
        overflow: 'hidden',
        backgroundColor: '#F3F4F6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {!isLoaded && showSkeleton && (
        <Skeleton
          variant="rectangular"
          animation="wave"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        />
      )}

      {hasError && !fallbackSrc ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9CA3AF',
            p: 2,
            textAlign: 'center',
          }}
        >
          <ImageOff size={32} />
        </Box>
      ) : (
        <img
          src={finalSrc}
          alt={alt || 'School photograph'}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => {
            if (!hasError) {
              setHasError(true);
            }
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'opacity 0.3s ease',
            opacity: isLoaded ? 1 : 0,
            ...style,
          }}
          {...props}
        />
      )}
    </Box>
  );
};
