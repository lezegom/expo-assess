import { useRouter } from 'expo-router';
import { X } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import { Alert, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../../constants/styles';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { login } from '../../store/slices/authSlice';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

/**
 * LoginScreen Component
 * 
 * Handles user authentication using Redux.
 * Collects username and password, dispatches login action,
 * and navigates to the document screen on success.
 * 
 * @returns {JSX.Element} The rendered login screen
 */
export const LoginScreen = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
    const { status, error, token } = useAppSelector((state) => state.auth);
    console.log('====================================');
    console.log(status, error, token);
    console.log('====================================');
    

  const [formData, setFormData] = useState({
    username: 'jackson',
    password: '1234',
  });

  // Navigate on successful login
  useEffect(() => {
    if (status === 'succeeded' && token) {
      console.log('Login succeeded, navigating to document screen');
      router.replace('/document');
    }
  }, [status, token, router]);

  // Show error alert
  useEffect(() => {
    if (status === 'failed' && error) {
      Alert.alert('Login Failed', error);
    }
  }, [status, error]);

  const handleLogin = () => {
    if (!formData.username || !formData.password) {
      Alert.alert('Error', 'Please enter username and password');
      return;
    }

    dispatch(login({ 
      username: formData.username, 
      password: formData.password 
    }));
  };

  const isLoading = status === 'loading';

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, styles.headerJustifyEnd]}>
        <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
          <X size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.title}>Log in to your account</Text>
        <Text style={styles.subtitle}>
          Enter your credentials to access your account.
        </Text>

        <View style={styles.form}>
          <Input
            label="Username"
            placeholder="Enter username"
            value={formData.username}
            onChangeText={(text) => setFormData({ ...formData, username: text })}
            editable={!isLoading}
          />

          <Input
            label="Password"
            placeholder="Enter password"
            isPassword
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
            editable={!isLoading}
          />
        </View>

        {error && status === 'failed' && (
          <Text style={styles.errorText}>{error}</Text>
        )}
      </ScrollView>

      <View style={styles.footer}>
        <Button 
          icon 
          onPress={handleLogin}
        >
          {isLoading ? 'Logging in...' : 'Log in'}
        </Button>
      </View>
    </SafeAreaView>
  );
};
