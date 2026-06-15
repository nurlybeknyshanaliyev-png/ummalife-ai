export const Colors = {
  primary: '#00342b', // Deep Emerald
  primaryContainer: '#004d40',
  onPrimary: '#ffffff',
  secondary: '#735c00', // Matte Gold
  secondaryContainer: '#fed65b',
  onSecondary: '#ffffff',
  background: '#fcf9f8',
  surface: '#fcf9f8',
  onSurface: '#1c1b1b',
  onSurfaceVariant: '#3f4945',
  outline: '#707975',
  outlineVariant: '#bfc9c4',
  error: '#ba1a1a',
  emeraldGradient: ['#004D40', '#002B24'] as const,
  goldGlow: 'rgba(212, 175, 55, 0.15)',
  matteGold: '#D4AF37',
  matteGoldLow: 'rgba(212, 175, 55, 0.3)',
  aiBubble: '#e8f5e9', // Light Emerald tint
  userBubble: '#ffffff',
};

export const Spacing = {
  marginMobile: 20,
  stackSm: 8,
  stackMd: 16,
  stackLg: 32,
  gutter: 24,
};

export const BorderRadius = {
  sm: 4,
  default: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
};

export const Typography = {
  headlineXL: {
    fontFamily: 'Manrope_700Bold',
    fontSize: 40,
    lineHeight: 48,
    letterSpacing: -0.8,
  },
  headlineLG: {
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.32,
  },
  headlineMobile: {
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 28,
    lineHeight: 36,
  },
  headlineMD: {
    fontFamily: 'Manrope_600SemiBold',
    fontSize: 24,
    lineHeight: 32,
  },
  bodyLG: {
    fontFamily: 'PlusJakartaSans_400Regular',
    fontSize: 18,
    lineHeight: 28,
  },
  bodyMD: {
    fontFamily: 'PlusJakartaSans_400Regular',
    fontSize: 16,
    lineHeight: 24,
  },
  labelMD: {
    fontFamily: 'PlusJakartaSans_600SemiBold',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.28,
  },
  labelSM: {
    fontFamily: 'PlusJakartaSans_500Medium',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.6,
  },
};
