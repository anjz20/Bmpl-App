import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import styles from './LoginStyles';

type RootStackParamList = {
  Login: undefined;
  Onboarding: undefined;
  Verification: undefined;
  CreateAccount: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const { width, height } = Dimensions.get('window');

const DiagonalPattern = () => {
  const stripes = [];
  const stripeWidth = 60;
  const stripeSpacing = 40;

  for (let i = -10; i < 20; i++) {
    stripes.push(
      <View
        key={i}
        style={[
          styles.stripe,
          {
            left: i * (stripeWidth + stripeSpacing) - width,
            width: stripeWidth,
            height: height * 2,
          },
        ]}
      />,
    );
  }

  return <View style={styles.patternContainer}>{stripes}</View>;
};

const LoginScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  const handleLogin = () => {
    navigation.navigate('Onboarding');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Green Background Section */}
      <LinearGradient
        colors={['#8FD16A', '#71C044']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.greenSection}
      >
        {/* Diagonal Stripe Pattern Overlay */}
        <DiagonalPattern />

        {/* Middle Section: Logo and Text */}
        <View style={styles.middleSection}>
          {/* Logo Container */}
          <View style={styles.logoContainer}>
            <View style={styles.logoBox}>
              <Image
                source={require('../../assets/BMPL 1.png')}
                style={styles.logoImage}
                resizeMode="contain"
              />
            </View>
          </View>

          {/* Welcome Text */}
          <Text style={styles.welcomeText}>Welcome to BM2 Mall</Text>

          {/* Description Text */}
          <Text style={styles.descriptionText}>
            Your trusted marketplace for premium & natural health products
          </Text>
        </View>

        {/* Category Buttons - Bottom */}
        <View style={styles.categoryButtonsContainer}>
          <TouchableOpacity style={styles.categoryButton}>
            <Image
              source={require('../../assets/shopping-bag.png')}
              style={styles.categoryIcon}
              resizeMode="contain"
            />
            <Text style={styles.categoryButtonText}>Shop</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoryButton}>
            <Image
              source={require('../../assets/Care.png')}
              style={styles.categoryIcon}
              resizeMode="contain"
            />
            <Text style={styles.categoryButtonText}>Natural Care</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      {/* Bottom White Section */}
      <View style={styles.bottomSection}>
        {/* Login Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Join as Agent Button */}
        <TouchableOpacity style={styles.joinAgentButton}>
          <Text style={styles.joinAgentButtonText}>Join as Agent</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
