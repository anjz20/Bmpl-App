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
import styles from './OnBoardingStyles';

const CreateAccount = () => {
  const [fullName, setFullName] = useState('');
  const [emailId, setEmailId] = useState('');

  const handleNext = () => {
    // Handle next button logic here
    console.log('Full Name:', fullName);
    console.log('Email Id:', emailId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Title Section */}
      <View style={styles.createAccountTitleSection}>
        <Text style={styles.createAccountTitle}>Create Your Account</Text>
      </View>

      {/* Full Name Input Section */}
      <View style={styles.inputSection}>
        <Text style={styles.inputLabel}>Full Name</Text>
        <View style={styles.inputContainer}>
          <Icon
            name="person"
            size={20}
            color="#9E9E9E"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your name"
            placeholderTextColor="#9E9E9E"
            value={fullName}
            onChangeText={setFullName}
            autoCapitalize="words"
          />
        </View>
      </View>

      {/* Email Id Input Section */}
      <View style={styles.inputSection}>
        <Text style={styles.inputLabel}>Email Id</Text>
        <View style={styles.inputContainer}>
          <Icon
            name="email"
            size={20}
            color="#9E9E9E"
            style={styles.inputIcon}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            placeholderTextColor="#9E9E9E"
            value={emailId}
            onChangeText={setEmailId}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
      </View>

      {/* Next Button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.nextButton}
          onPress={handleNext}
          activeOpacity={0.8}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CreateAccount;
