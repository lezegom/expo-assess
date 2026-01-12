import { useRouter } from 'expo-router';
import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import styles from '../../constants/styles';
import { Button } from '../ui/button';
import { Logo } from '../ui/logo';

import Image1 from '../../assets/images/CEBI-5043-1.png';
import Image2 from '../../assets/images/CEBI-5231-1.png';
import Image3 from '../../assets/images/CEBI-5250-1.png';

/**
 * LandingScreen Component
 * 
 * Displays the main landing page for the Khula Trader application.
 * Features an image grid, brand name, tagline, and action buttons for
 * user registration and login.
 * 
 * @returns {JSX.Element} The rendered landing screen
 */
export const LandingScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.landingContainer}>
      <View style={styles.imageSection}>

        {/* Photo Grid */}
        <View style={{...styles.photoGrid, ...styles.photoGridContainer}}>

          <View style={styles.flexEndContainer}>
            <View style={{margin: 3}}>
              <Logo />
            </View>
            <View style={[styles.middleRow, styles.alignFlexEnd]}>
              <View style={styles.largeCircle}>
                <View style={[styles.photoPlaceholder, styles.trCorner, styles.overflowHidden]}>
                  <Image
                    source={Image2}
                    style={styles.imageFullSize}
                    resizeMode="cover"
                  />
                </View>
              </View>
              <View style={[styles.decorativeDotSmall, styles.trCorner, styles.decorativeDotWithBorder]} />
            </View>

          </View>

          <View style={styles.alignFlexStart}>
            <View style={styles.topRow}>
              <View style={styles.largeCircle}>
                <View style={[styles.photoPlaceholder, styles.blCorner, styles.overflowHidden]}>
                  <Image
                    source={Image1}
                    style={styles.imageFullSize}
                    resizeMode="cover"
                  />
                </View>
              </View>
            </View>

            <View style={styles.bottomRow}>
              <View style={[styles.decorativeDot, styles.brCorner, styles.decorativeDotPositioned]} />
              <View style={styles.mediumCircle}>
                <View style={[styles.photoPlaceholder, styles.tlCorner, styles.overflowHidden]}>
                  <Image
                    source={Image3}
                    style={styles.imageFullSize}
                    resizeMode="cover"
                  />
                </View>
              </View>
            </View>

          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.landingTextContainer}>
          <Text style={styles.brandName}>Khula Trader</Text>
          <Text style={styles.tagline}>
            Sell your products and chat with your buyers.
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button 
            variant="outline" 
            onPress={() => console.log('Sign up pressed')}
            // style={styles.buttonFlex}
          >
            Sign up
          </Button>
          
          <Button 
            variant="secondary" 
            onPress={() => router.push('/auth/signup')}
            // style={styles.buttonFlex}
          >
            Log in
          </Button>

          <Button 
            variant="text" 
            onPress={() => console.log('Invite code pressed')}
            style={styles.buttonFullWidth}
            textStyle={styles.textSize16}
          >
            Accept team invite code
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};
