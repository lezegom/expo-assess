import { Eye, EyeOff } from 'lucide-react-native';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';
import { colors } from '../../constants/theme';

type InputProps = TextInputProps & {
  label?: string;
  error?: string;
  isPassword?: boolean;
};

/**
 * Input Component
 * 
 * A customizable text input field with label, error message, and password visibility toggle support.
 * Handles secure text entry for password fields with an eye icon to toggle visibility.
 * 
 * @param {string} label - Optional label text displayed above the input
 * @param {string} error - Optional error message displayed below the input
 * @param {boolean} isPassword - Whether this is a password input with visibility toggle (default: false)
 * @param {ViewStyle} style - Additional custom styles for the input field
 * @returns {JSX.Element} The rendered input field
 */
export const Input = ({ 
  label, 
  error, 
  isPassword = false,
  style,
  ...props 
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputWrapper, error && styles.inputError]}>
        <TextInput
          style={[styles.input, isPassword && styles.passwordInput, style]}
          placeholderTextColor="#999"
          secureTextEntry={isPassword && !showPassword}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Eye size={20} color="#666" />
            ) : (
              <EyeOff size={20} color="#666" />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: colors.darkGreen,
    fontWeight: '500',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border.medium,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    padding: 16,
    fontSize: 16,
  },
  passwordInput: {
    paddingRight: 0,
  },
  inputError: {
    borderColor: colors.error,
  },
  errorText: {
    fontSize: 12,
    color: colors.error,
  },
});
