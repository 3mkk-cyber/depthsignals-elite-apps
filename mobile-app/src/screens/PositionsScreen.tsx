import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function PositionsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Positions screen (placeholder)</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#050816' },
  text: { color: '#e5e7eb' },
});
