import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
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

const VerificationPage = () => {
  const navigation = useNavigation<NavigationProp>();
  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(116); // 1 minute 56 seconds in seconds
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`;
  };

  const handleOtpChange = (text: string, index: number) => {
    if (text.length > 1) {
      // Handle paste
      const pastedText = text.slice(0, 5);
      const newOtp = [...otp];
      for (let i = 0; i < pastedText.length && index + i < 5; i++) {
        newOtp[index + i] = pastedText[i];
      }
      setOtp(newOtp);
      // Focus on the last filled input or next empty
      const nextIndex = Math.min(index + pastedText.length, 4);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto-focus next input
    if (text && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    if (canResend) {
      setTimeLeft(116);
      setCanResend(false);
      setOtp(['', '', '', '', '']);
      inputRefs.current[0]?.focus();
      // Handle resend OTP logic here
      console.log('Resending OTP...');
    }
  };

  const handleContinue = () => {
    const otpCode = otp.join('');
    if (otpCode.length === 5) {
      // Handle verification logic here
      console.log('Verifying OTP:', otpCode);
      navigation.navigate('CreateAccount');
    }
  };

  const handleEditNumber = () => {
    // Handle navigation back to edit phone number
    console.log('Edit phone number');
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.verificationContent}>
        {/* Title Section */}
        <View style={styles.verificationTitleSection}>
          <Text style={styles.verificationTitle}>Verification Code</Text>
          <Text style={styles.verificationSubtitle}>
            We sent a code to +91 7898 987 898
          </Text>
        </View>

        {/* OTP Input Section */}
        <View style={styles.otpContainer}>
          {otp.map((digit, index) => (
            <TextInput
              key={index}
              ref={ref => {
                inputRefs.current[index] = ref;
              }}
              style={[styles.otpInput, index < 4 && { marginRight: 8 }]}
              value={digit}
              onChangeText={text => handleOtpChange(text, index)}
              onKeyPress={e => handleKeyPress(e, index)}
              keyboardType="number-pad"
              maxLength={1}
              selectTextOnFocus
            />
          ))}
        </View>

        {/* Resend Button */}
        <View style={styles.resendButtonContainer}>
          <TouchableOpacity
            style={styles.resendButton}
            onPress={handleResend}
            disabled={!canResend}
          >
            <Text
              style={[
                styles.resendButtonText,
                canResend && styles.resendButtonTextActive,
              ]}
            >
              Resend
            </Text>
          </TouchableOpacity>
        </View>

        {/* Countdown Timer */}
        {!canResend && (
          <View style={styles.countdownContainer}>
            <Text style={styles.countdownText}>
              Resend OTP in{' '}
              <Text style={styles.countdownTime}>{formatTime(timeLeft)}</Text>
            </Text>
          </View>
        )}

        {/* Continue Button */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.sendOTPButton,
              otp.join('').length !== 5 && styles.sendOTPButtonDisabled,
            ]}
            onPress={handleContinue}
            activeOpacity={0.8}
            disabled={otp.join('').length !== 5}
          >
            <Text style={styles.sendOTPButtonText}>Continue</Text>
          </TouchableOpacity>

          {/* Edit Number Link */}
          <View style={styles.editNumberContainer}>
            <Text style={styles.editNumberText}>
              Incorrect mobile Number?{' '}
              <Text style={styles.editNumberLink} onPress={handleEditNumber}>
                Edit now
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default VerificationPage;
