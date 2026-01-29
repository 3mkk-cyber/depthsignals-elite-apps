import * as LocalAuthentication from 'expo-local-authentication';
import * as SecureStore from 'expo-secure-store';
import { useState } from 'react';
import { api } from '../services/api';

export function useBiometricAuth() {
  const [loading, setLoading] = useState(false);

  const loginWithBiometrics = async () => {
    setLoading(true);
    try {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      const enrolled = await LocalAuthentication.isEnrolledAsync();
      if (!hasHardware || !enrolled) return false;

      const result = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate to access DepthSignals Elite',
      });

      if (!result.success) return false;

      const savedToken = await SecureStore.getItemAsync('auth_token');
      if (!savedToken) return false;

      const { data } = await api.get('/dashboard');
      return !!data;
    } finally {
      setLoading(false);
    }
  };

  return { loginWithBiometrics, loading };
}
