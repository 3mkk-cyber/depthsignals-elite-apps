import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export function SettingsScreen() {
  const handleLogout = async () => {
    await SecureStore.deleteItemAsync('auth_token');
    // TODO: navigate to auth stack when implemented
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#050816' },
  title: { fontSize: 18, fontWeight: '600', color: '#e5e7eb', marginBottom: 16 },
});
