import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useScrollAnimation } from '../../animations/useScrollAnimation';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  end,
  duration = 2000,
  suffix = '',
  prefix = '',
}) => {
  const [count, setCount] = useState(0);
  const { ref, isVisible, reducedMotion } = useScrollAnimation(0.2);

  useEffect(() => {
    if (!isVisible) return;
    if (reducedMotion) {
      setCount(end);
      return;
    }

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, end, duration, reducedMotion]);

  return (
    <span ref={ref}>
      <Typography component="span" variant="inherit" sx={{ fontWeight: 800 }}>
        {prefix}{count.toLocaleString()}{suffix}
      </Typography>
    </span>
  );
};
