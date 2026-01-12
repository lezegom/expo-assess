import { StyleSheet } from 'react-native';
import { colors } from './theme';

/**
 * Global Styles
 * 
 * Centralized stylesheet containing all component styles for the application.
 * Organized by screen and component type for easy maintenance.
 * 
 * Sections:
 * - Landing Screen Styles
 * - Common Styles
 * - Profile Screen Styles
 * - Documents Screen Styles
 * - Modal Styles
 * - Utility Styles
 */

const styles = StyleSheet.create({
  // Landing Screen Styles
  landingContainer: {
    flex: 1,
    backgroundColor: colors.primary,
    minHeight: '100%',
  },
  landingContent: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  imageGrid: {
    marginTop: 40,
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.primary,
  },
  gridImages: {
    flexDirection: 'row',
    gap: 16,
  },
  imageCircle1: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: colors.secondary,
  },
  imageCircle2: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: colors.secondary,
  },
  imageCircle3: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: colors.secondary,
  },
  landingTextContainer: {
    marginBottom: 40,
  },
  brandName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.secondary,
    marginBottom: 16,
  },
  tagline: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.background,
    lineHeight: 40,
  },
  buttonContainer: {
    gap: 16,
    marginBottom: 20,
  },
  signUpButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: colors.secondary,
    borderRadius: 30,
    padding: 18,
    alignItems: 'center',
  },
  signUpText: {
    color: colors.secondary,
    fontSize: 16,
    fontWeight: '600',
  },
  loginButton: {
    backgroundColor: colors.secondary,
    borderRadius: 30,
    padding: 18,
    alignItems: 'center',
  },
  loginText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
  inviteButton: {
    padding: 18,
    alignItems: 'center',
  },
  inviteText: {
    color: colors.secondary,
    fontSize: 14,
  },

  // Common Styles
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: 8,
  },
  progressBar: {
    flex: 1,
    flexDirection: 'row',
    gap: 8,
    marginRight: 16,
  },
  progressSegment: {
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
  progressActive: {
    backgroundColor: colors.secondary,
  },
  progressInactive: {
    backgroundColor: colors.border.light,
  },
  closeButton: {
    padding: 4,
  },
  content: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 32,
    lineHeight: 20,
  },

  // Profile Screen Styles
  form: {
    gap: 24,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: colors.darkGreen,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border.medium,
    borderRadius: 8,
    padding: 16,
    fontSize: 16,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border.medium,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  passwordInput: {
    flex: 1,
    padding: 16,
    fontSize: 16,
  },
  footer: {
    padding: 24,
    paddingBottom: 32,
  },
  continueButton: {
    backgroundColor: colors.primary,
    borderRadius: 30,
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  continueText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: '600',
  },

  // Documents Screen Styles
  documentsContainer: {
    gap: 24,
  },
  documentCard: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  documentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 8,
  },
  documentDescription: {
    fontSize: 14,
    color: colors.text.secondary,
    marginBottom: 16,
  },
  uploadArea: {
    backgroundColor: colors.lightGreen,
    borderRadius: 8,
    padding: 40,
    alignItems: 'center',
    marginBottom: 12,
  },
  uploadText: {
    color: colors.darkGreen,
    fontSize: 16,
    fontWeight: '500',
  },
  supportedFormats: {
    fontSize: 12,
    color: colors.text.tertiary,
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: 40,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
  optionsContainer: {
    gap: 16,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  optionIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: colors.lightGreen,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: colors.primary,
    fontWeight: '500',
  },

  // Landing Screen Additional Styles
  headerJustifyEnd: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: 8,
    paddingBottom: 8,
  },
  photoGridContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    gap: 3,
  },
  flexEndContainer: {
    justifyContent: 'flex-end',
  },
  alignFlexEnd: {
    alignItems: 'flex-end',
  },
  alignFlexStart: {
    alignItems: 'flex-start',
  },
  overflowHidden: {
    overflow: 'hidden',
  },
  decorativeDotWithBorder: {
    zIndex: 1,
    borderWidth: 5,
    borderColor: colors.primary,
  },
  decorativeDotPositioned: {
    zIndex: 1,
    borderWidth: 5,
    borderColor: colors.primary,
  },
  imageFullSize: {
    width: '100%',
    height: '100%',
  },
  buttonFlex: {
    flex: 1,
    minWidth: '45%',
  },
  buttonFullWidth: {
    width: '100%',
  },
  textSize16: {
    fontSize: 16,
  },

  // Landing Screen Layout Styles
  imageSection: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 0,
  },
  photoGrid: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  topRow: {
    top: 0,
    right: 0,
    position: 'relative',
    alignItems: 'flex-start',
  },
  middleRow: {
    left: 0,
    alignItems: 'flex-start',
  },
  bottomRow: {
    right: 0,
    bottom: 0,
  },
  largeCircle: {
    width: 200,
    height: 200,
    borderRadius: 0,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'transparent',
  },
  mediumCircle: {
    width: 160,
    height: 160,
    borderRadius: 0,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'transparent',
  },
  photoPlaceholder: {
    flex: 1,
    backgroundColor: '#A7F3D0',
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  decorativeDot: {
    width: 50,
    height: 50,
    position: 'absolute',
    borderRadius: 25,
    backgroundColor: colors.secondary,
    borderColor: 'transparent',
    borderWidth: 3,
    right: 20,
    top: -30,
    margin: 5,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 0,
    zIndex: 1,
  },
  decorativeDotSmall: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.secondary,
    position: 'absolute',
    right: 20,
    bottom: -10,
  },
  blCorner: {
    borderBottomLeftRadius: 0,
  },
  brCorner: {
    borderBottomRightRadius: 0,
  },
  tlCorner: {
    borderTopLeftRadius: 0,
  },
  trCorner: {
    borderTopRightRadius: 0,
  },
});

export default styles;