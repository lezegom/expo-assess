/**
 * Theme Configuration
 * 
 * Centralized theme constants for consistent styling across the application.
 * Includes color palette, spacing scale, typography settings, and border radius values.
 */

/**
 * Color Palette
 * Defines the primary color scheme and semantic colors used throughout the app
 */
export const colors = {
  primary: '#064E3B',
  secondary: '#10B981',
  background: '#FFFFFF',
  text: {
    primary: '#064E3B',
    secondary: '#6B7280',
    tertiary: '#9CA3AF',
  },
  border: {
    light: '#E5E7EB',
    medium: '#D1D5DB',
  },
  success: '#10B981',
  error: '#EF4444',
  lightGreen: '#D1FAE5',
  darkGreen: '#047857',
};

/**
 * Spacing Scale
 * Consistent spacing values for margins, padding, and gaps
 */
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  huge: 40,
};

/**
 * Typography Settings
 * Font sizes and weights for text elements
 */
export const typography = {
  sizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 28,
    xxxl: 32,
    huge: 36,
    massive: 40,
  },
  weights: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: 'bold' as const,
  },
};

/**
 * Border Radius Values
 * Standard border radius sizes for consistent rounded corners
 */
export const borderRadius = {
  sm: 8,
  md: 12,
  lg: 24,
  xl: 30,
  round: 999,
};
