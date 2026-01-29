import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View, FlatList } from 'react-native';
import { useDashboard } from '../hooks/useDashboard';

export function DashboardScreen() {
  const { data, isLoading } = useDashboard();

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Total P&L</Text>
      <Text style={styles.pnl}>{data?.total_pnl?.toFixed(2) ?? '0.00'}</Text>
      <Text style={styles.subtitle}>Win rate: {data?.win_rate?.toFixed(2) ?? '0.00'}%</Text>

      <Text style={styles.sectionTitle}>Open Positions</Text>
      <FlatList
        data={data?.open_positions ?? []}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.pair}>{item.pair}</Text>
            <Text>{item.side.toUpperCase()}</Text>
            <Text>Size: {item.size}</Text>
            <Text>Entry: {item.entry_price}</Text>
            <Text>PnL: {item.pnl}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#050816' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 20, fontWeight: '600', color: '#fff' },
  pnl: { fontSize: 32, fontWeight: '700', color: '#4ade80', marginVertical: 8 },
  subtitle: { fontSize: 14, color: '#9ca3af', marginBottom: 16 },
  sectionTitle: { fontSize: 16, fontWeight: '600', color: '#fff', marginVertical: 8 },
  card: { padding: 12, borderRadius: 8, backgroundColor: '#111827', marginBottom: 8 },
  pair: { fontSize: 16, fontWeight: '600', color: '#e5e7eb' },
});
