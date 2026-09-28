export type AnimationVariantType =
  | 'fade'
  | 'fade-up'
  | 'fade-down'
  | 'slide-left'
  | 'slide-right'
  | 'scale'
  | 'zoom';

export function getAnimationStyles(
  variant: AnimationVariantType,
  isVisible: boolean,
  reducedMotion: boolean,
  delayMs: number = 0
): React.CSSProperties {
  if (reducedMotion) {
    return {
      opacity: 1,
      transform: 'none',
      transition: 'none',
    };
  }

  const baseTransition = `opacity 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) ${delayMs}ms, transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) ${delayMs}ms`;

  const hiddenTransforms: Record<AnimationVariantType, string> = {
    fade: 'none',
    'fade-up': 'translateY(36px)',
    'fade-down': 'translateY(-36px)',
    'slide-left': 'translateX(36px)',
    'slide-right': 'translateX(-36px)',
    scale: 'scale(0.92)',
    zoom: 'scale(1.08)',
  };

  return {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'none' : hiddenTransforms[variant],
    transition: baseTransition,
    willChange: 'opacity, transform',
  };
}
