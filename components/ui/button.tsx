import { ChevronRight } from 'lucide-react-native';
import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../../constants/theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';

type ButtonProps = {
  onPress: () => void;
  children: React.ReactNode;
  variant?: ButtonVariant;
  icon?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

/**
 * Button Component
 * 
 * A customizable button component with multiple visual variants.
 * Supports different styles (primary, secondary, outline, text) and optional right arrow icon.
 * 
 * @param {() => void} onPress - Function to call when button is pressed
 * @param {string} children - Button text content
 * @param {ButtonVariant} variant - Visual style variant (default: 'primary')
 * @param {boolean} icon - Whether to show a chevron icon (default: false)
 * @param {ViewStyle} style - Additional custom styles for the button container
 * @param {TextStyle} textStyle - Additional custom styles for the button text
 * @returns {JSX.Element} The rendered button
 */
export const Button = ({ 
  onPress, 
  children, 
  variant = 'primary', 
  icon = false,
  style,
  textStyle 
}: ButtonProps) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryButton;
      case 'secondary':
        return styles.secondaryButton;
      case 'outline':
        return styles.outlineButton;
      case 'text':
        return styles.textButton;
      default:
        return styles.primaryButton;
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'primary':
        return styles.primaryText;
      case 'secondary':
        return styles.secondaryText;
      case 'outline':
        return styles.outlineText;
      case 'text':
        return styles.textText;
      default:
        return styles.primaryText;
    }
  };

  return (
    <TouchableOpacity 
      style={[getButtonStyle(), style]} 
      onPress={onPress}
    >
      {typeof children === 'string' ? (
        <Text style={[getTextStyle(), textStyle]}>{children}</Text>
      ) : (
        <Text style={[getTextStyle(), textStyle]}>{children as any}</Text>
      )}
      {icon && <ChevronRight size={20} color="#fff" />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  secondaryButton: {
    backgroundColor: colors.secondary,
    borderRadius: 30,
    padding: 18,
    alignItems: 'center',
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.secondary,
    borderRadius: 30,
    padding: 18,
    alignItems: 'center',
  },
  textButton: {
    padding: 18,
    alignItems: 'center',
  },
  primaryText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  outlineText: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: '600',
  },
  textText: {
    color: colors.background,
    fontSize: 14,
  },
});
