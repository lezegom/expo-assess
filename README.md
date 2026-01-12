# Khula Trader

A React Native mobile application for selling products and connecting with buyers, built with Expo.

## Features

- **Landing Screen**: Visual introduction with brand identity and call-to-action buttons
- **User Authentication**: Sign up and login flow
- **Profile Management**: Complete user profile during onboarding
- **Document Upload**: Multi-step document submission with support for photos and files
- **Progress Tracking**: Visual progress indicators for multi-step processes

## Tech Stack

- **Framework**: React Native with Expo (~54.0)
- **Navigation**: Expo Router (file-based routing)
- **Language**: TypeScript
- **Styling**: React Native StyleSheet with centralized theme
- **Icons**: Lucide React Native
- **Storage**: AsyncStorage

## Project Structure

```
expo-assess/
├── app/                    # File-based routing (Expo Router)
│   ├── _layout.tsx        # Root layout
│   ├── index.tsx          # Entry point
│   ├── landing.tsx        # Landing screen route
│   └── auth/              # Authentication routes
│       └── signup.tsx
├── components/
│   ├── screens/           # Screen components
│   │   ├── landing-screen.tsx
│   │   ├── profile-screen.tsx
│   │   └── documents-screen.tsx
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── logo.tsx
│   │   └── progress-bar.tsx
│   └── upload-modal.tsx
├── constants/
│   ├── styles.ts          # Centralized styles (all components)
│   └── theme.ts           # Color palette, spacing, typography
├── assets/
│   └── images/            # Image assets
└── utils/
    └── async.ts           # Utility functions
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo Go app (for testing on physical device)
- iOS Simulator or Android Emulator (optional)

### Installation

1. **Clone the repository**

   ```bash
   git clone git@github.com:lezegom/expo-assess.git
   cd expo-assess
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

### Running the Project

1. **Start the development server**

   ```bash
   npm start
   ```

   Or use specific commands:

   ```bash
   npm run ios        # Open in iOS Simulator
   npm run android    # Open in Android Emulator
   npm run web        # Open in web browser
   ```

2. **Scan QR code with Expo Go**

   - Install Expo Go on your iOS or Android device
   - Scan the QR code from the terminal
   - The app will load on your device

### Development Commands

```bash
npm run lint          # Run ESLint to check code quality
npm start             # Start Expo development server
npm run reset-project # Reset to blank project (removes starter code)
```

## Code Organization

### Styling

All styles are centralized in `constants/styles.ts` and organized by screen/component. Colors, spacing, and typography values reference the theme constants from `constants/theme.ts` for consistency.

**Theme Structure:**
- `colors`: Primary, secondary, background, text, border colors
- `spacing`: Consistent spacing scale (xs to huge)
- `typography`: Font sizes and weights
- `borderRadius`: Standard border radius values

### Component Documentation

All components and screens include JSDoc comments describing their purpose, props, and usage.

### Linting

ESLint is configured with React Native recommended rules. Run `npm run lint` to check for issues.

## Development Notes

- **File-based routing**: Routes are defined by the file structure in the `app/` directory
- **Type safety**: TypeScript is used throughout for type checking
- **Centralized styles**: Avoid inline styles; use constants/styles.ts
- **Theme consistency**: Reference theme constants for colors and spacing
- **Component reusability**: UI components are designed to be reusable and configurable

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Native Documentation](https://reactnative.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
