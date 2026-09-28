export interface AnimationConfig {
  duration: {
    fast: number;
    normal: number;
    slow: number;
  };
  easing: {
    easeInOut: string;
    easeOutBack: string;
    smooth: string;
  };
}

export const animationConfig: AnimationConfig = {
  duration: {
    fast: 200,
    normal: 400,
    slow: 700,
  },
  easing: {
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    easeOutBack: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    smooth: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  },
};
