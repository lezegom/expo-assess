import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../constants/theme';

/**
 * Logo Component
 * 
 * Renders the Khula Trader application logo.
 * Displays a custom geometric design with rounded corners and decorative elements.
 * 
 * @returns {JSX.Element} The rendered logo
 */
export const Logo = () => (
  <View style={styles.logoWrapper}>
    <View style={styles.logoCircle}>
      <View style={styles.logoShape}>
        <View style={styles.logoBar} />
        <View style={styles.logoDotBottom} />
        <View style={styles.logoDotUpper} />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  logoWrapper: {
    zIndex: 10,
    alignItems: 'flex-end',
  },
  logoCircle: {
    width: 90,
    height: 90,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 0,
  },
  logoShape: {
    position: 'relative',
    width: 40,
    height: 50,
  },
  logoBar: {
    width: 16,
    height: 50,
    backgroundColor: colors.primary,
    borderRadius: 8,
    position: 'absolute',
    left: 0,
  },
  logoDotUpper: {
    width: 16,
    height: 16,
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 8,
    right: 5,
    borderRadius: 8,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 100,
  },
  logoDotBottom: {
    width: 12,
    height: 25,
    backgroundColor: colors.primary,
    borderRadius: 6,
    position: 'absolute',
    right: 5,
    bottom: 0,
    transform: [{ rotate: '140deg' }],
  },
});
