import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
// @ts-ignore
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './OnBoardingStyles';

type RootStackParamList = {
  Login: undefined;
  Onboarding: undefined;
  Verification: undefined;
  CreateAccount: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const OnBoardingScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSendOTP = () => {
    // Handle OTP sending logic here
    console.log('Sending OTP to:', phoneNumber);
    navigation.navigate('Verification');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Welcome Section */}
      <View style={styles.welcomeSection}>
        <Text style={styles.welcomeTitle}>Welcome Back!</Text>
        <Text style={styles.welcomeSubtitle}>Sign in to continue shopping</Text>
      </View>

      {/* Phone Number Input Section */}
      <View style={styles.inputSection}>
        <Text style={styles.inputLabel}>Phone Number</Text>
        <View style={styles.inputContainer}>
          <Icon
            name="phone"
            size={20}
            color="#9E9E9E"
            style={styles.phoneIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="0000 000 000"
            placeholderTextColor="#9E9E9E"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
            maxLength={15}
          />
        </View>
      </View>

      {/* Send OTP Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.sendOTPButton}
          onPress={handleSendOTP}
          activeOpacity={0.8}
        >
          <Text style={styles.sendOTPButtonText}>Send OTP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
