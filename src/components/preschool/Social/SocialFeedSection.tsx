import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { socialConfig } from '../../../config/preschool/social.config';
import { FacebookIcon, InstagramIcon } from '../../common/BrandIcons';

export const SocialFeedSection: React.FC = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 14 }, bgcolor: '#FFFDF9' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box sx={{ textAlign: 'center', mb: 7, maxWidth: 720, mx: 'auto' }}>
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
            📸 FROM OUR SCHOOL SOCIAL FEED
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
            Life at Our School
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: '#546E7A',
              mt: 1.5,
              fontSize: '1.1rem',
            }}
          >
            Daily moments, celebrations, art showcases, and outdoor adventures shared directly with our parent community.
          </Typography>
        </Box>

        {/* Social Posts Grid */}
        <Grid container spacing={3.5}>
          {socialConfig.map((post) => (
            <Grid item xs={12} sm={6} md={3} key={post.id}>
              <Paper
                elevation={0}
                sx={{
                  borderRadius: '28px',
                  overflow: 'hidden',
                  bgcolor: '#FFFFFF',
                  border: '1.5px solid #FFEAEB',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.35s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 16px 36px rgba(255, 107, 107, 0.12)',
                  },
                }}
              >
                {/* Header info */}
                <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                    <Avatar
                      sx={{
                        width: 34,
                        height: 34,
                        bgcolor: post.platform === 'Instagram' ? '#E1306C' : '#1877F2',
                        color: '#FFFFFF',
                      }}
                    >
                      {post.platform === 'Instagram' ? <InstagramIcon size={18} color="#FFFFFF" /> : <FacebookIcon size={18} color="#FFFFFF" />}
                    </Avatar>
                    <Box>
                      <Typography variant="caption" sx={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, color: '#2C3E50', display: 'block' }}>
                        {post.platform}
                      </Typography>
                      <Typography variant="caption" sx={{ color: '#546E7A', fontSize: '0.72rem' }}>
                        {post.date}
                      </Typography>
                    </Box>
                  </Box>

                  <Box
                    component="a"
                    href={post.postUrl}
                    target="_blank"
                    rel="noreferrer"
                    sx={{ color: '#546E7A', '&:hover': { color: '#FF6B6B' } }}
                  >
                    <ExternalLink size={16} />
                  </Box>
                </Box>

                {/* Media Image */}
                <Box sx={{ height: 200, position: 'relative', overflow: 'hidden' }}>
                  <Box
                    component="img"
                    src={post.mediaUrl}
                    alt="Social feed"
                    sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </Box>

                {/* Caption & Stats */}
                <Box sx={{ p: 2.5, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      color: '#2C3E50',
                      lineHeight: 1.5,
                      fontSize: '0.88rem',
                      mb: 2,
                      flexGrow: 1,
                    }}
                  >
                    {post.caption}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 2.5, color: '#FF6B6B', fontSize: '0.82rem', fontWeight: 700 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Heart size={15} color="#FF6B6B" fill="#FF6B6B" />
                      <span>{post.likes}</span>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#4ECDC4' }}>
                      <MessageCircle size={15} />
                      <span>{post.commentsCount}</span>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};
