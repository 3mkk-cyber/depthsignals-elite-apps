import { ExpoConfig, ConfigContext } from 'expo/config';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: 'DepthSignals Elite',
  slug: 'depthsignals-elite',
  scheme: 'depthsignalselite',
  version: '0.1.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'dark',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#020617',
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'elite.depthsignals.app',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#020617',
    },
    package: 'elite.depthsignals.app',
  },
  extra: {
    eas: {
      projectId: 'replace-with-real-project-id',
    },
    apiBaseUrl: 'https://api.depthsignals.elite/admin/v2',
  },
  plugins: ['expo-local-authentication', 'expo-notifications'],
});
