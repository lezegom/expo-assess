import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import { X } from 'lucide-react-native';
import React, { useState } from 'react';
import { Alert, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../constants/styles';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { ProgressBar } from '../ui/progress-bar';

/**
 * ProfileScreen Component
 * 
 * Handles user profile completion during the onboarding process.
 * Collects user's name, surname, and password information.
 * Validates form data and stores it in AsyncStorage before navigating to the document upload screen.
 * 
 * @returns {JSX.Element} The rendered profile screen
 */
export const ProfileScreen = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: 'test',
    surname: 'test',
    password: 'test123',
    confirmPassword: 'test123',
  });

  const handleContinue = async () => {
    if (!formData.name || !formData.surname || !formData.password || !formData.confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    try {
      await AsyncStorage.setItem('userProfile', JSON.stringify(formData));
      router.push('/document');
    } catch {
      Alert.alert('Error', 'Failed to save profile');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, styles.headerJustifyEnd]}>
        <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
        <X size={24} color="#000" />
        </TouchableOpacity>
      </View>
          
      <View style={styles.header}>
        <ProgressBar steps={5} currentStep={3} />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>Complete your profile</Text>
        <Text style={styles.subtitle}>
          Almost there! Please add a few more details to complete your profile.
        </Text>

        <View style={styles.form}>
          <Input
            label=""
            placeholder="Name"
            value={formData.name}
            onChangeText={(text) => setFormData({ ...formData, name: text })}
          />

          <Input
            label=""
            placeholder="Surname"
            value={formData.surname}
            onChangeText={(text) => setFormData({ ...formData, surname: text })}
          />

          <Input
            label=""
            placeholder="Password"
            isPassword
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
          />

          <Input
            label=""
            placeholder="Confirm password"
            isPassword
            value={formData.confirmPassword}
            onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button icon onPress={handleContinue}>
          Continue
        </Button>
      </View>
    </SafeAreaView>
  );
};
