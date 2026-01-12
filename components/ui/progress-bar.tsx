import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../constants/theme';

type ProgressBarProps = {
  steps: number;
  currentStep: number;
};

/**
 * ProgressBar Component
 * 
 * Displays a visual progress indicator showing the current step in a multi-step process.
 * Renders a series of segments where completed steps are highlighted.
 * 
 * @param {number} steps - Total number of steps in the process
 * @param {number} currentStep - Current active step (1-indexed)
 * @returns {JSX.Element} The rendered progress bar
 */
export const ProgressBar = ({ steps, currentStep }: ProgressBarProps) => {
  return (
    <View style={styles.container}>
      {Array.from({ length: steps }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.segment,
            index < currentStep ? styles.active : styles.inactive,
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    // marginRight: 16,
  },
  segment: {
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
  active: {
    backgroundColor: colors.secondary,
  },
  inactive: {
    backgroundColor: colors.border.light,
  },
});
