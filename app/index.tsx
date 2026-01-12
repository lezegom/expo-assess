import { Logo } from '@/components/ui/logo';
import { useRouter } from 'expo-router';
import React, { useEffect, useRef } from 'react';
import { Animated, Easing, SafeAreaView, StyleSheet, View } from 'react-native';

// Splash Screen with Animated Logo, unnecessary, I couldn't help myself
export default function Splash() {
  const router = useRouter();
  const scale = useRef(new Animated.Value(1)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const cycles = 3;
    const seq: Animated.CompositeAnimation[] = [];

    // Fade in once at start
    const fadeIn = Animated.timing(opacity, {
      toValue: 1,
      duration: 250,
      easing: Easing.out(Easing.quad),
      useNativeDriver: true,
    });

    for (let i = 0; i < cycles; i++) {
      seq.push(
        Animated.timing(scale, {
          toValue: 1.12,
          duration: 280,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        })
      );
      seq.push(
        Animated.timing(scale, {
          toValue: 1,
          duration: 280,
          easing: Easing.inOut(Easing.quad),
          useNativeDriver: true,
        })
      );
    }

    Animated.sequence([fadeIn, Animated.sequence(seq)]).start(() => {
      router.replace('/landing');
    });
  }, [opacity, scale, router]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Animated.View style={{ transform: [{ scale }], opacity }}>
          <Logo />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#064E3B' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  appName: { color: '#10B981', fontSize: 24, fontWeight: 'bold' },
});