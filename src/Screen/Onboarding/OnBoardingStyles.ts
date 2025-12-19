import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  welcomeSection: {
    marginTop: 60,
    marginBottom: 40,
  },
  welcomeTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1976D2',
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    color: '#757575',
    fontWeight: '400',
  },
  inputSection: {
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    minHeight: 56,
  },
  phoneIcon: {
    marginRight: 12,
  },
  inputIcon: {
    marginRight: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
    padding: 0,
  },
  buttonContainer: {
    marginTop: 'auto',
    paddingBottom: 24,
  },
  sendOTPButton: {
    backgroundColor: '#1976D2',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowColor: '#1976D2',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  sendOTPButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.3,
  },
  sendOTPButtonDisabled: {
    backgroundColor: '#BDBDBD',
    shadowOpacity: 0,
  },
  // Verification Page Styles
  verificationContent: {
    flex: 1,
  },
  verificationTitleSection: {
    marginTop: 16,
    marginBottom: 24,
  },
  verificationTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1976D2',
    marginBottom: 6,
  },
  verificationSubtitle: {
    fontSize: 14,
    color: '#757575',
    fontWeight: '400',
  },
  otpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 8,
    flexWrap: 'wrap',
  },
  otpInput: {
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    backgroundColor: '#FFFFFF',
  },
  resendButtonContainer: {
    alignItems: 'center',
    marginBottom: 4,
  },
  resendButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  resendButtonText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#9E9E9E',
  },
  resendButtonTextActive: {
    color: '#1976D2',
  },
  countdownContainer: {
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 12,
  },
  countdownText: {
    fontSize: 13,
    color: '#757575',
    fontWeight: '400',
  },
  countdownTime: {
    fontWeight: '700',
    color: '#000000',
  },
  editNumberContainer: {
    alignItems: 'center',
    marginTop: 12,
  },
  editNumberText: {
    fontSize: 13,
    color: '#757575',
    fontWeight: '400',
  },
  editNumberLink: {
    color: '#1976D2',
    fontWeight: '600',
  },
  // Create Account Page Styles
  createAccountTitleSection: {
    marginTop: 60,
    marginBottom: 40,
    alignItems: 'center',
  },
  createAccountTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1976D2',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#1976D2',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowColor: '#1976D2',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default styles;
