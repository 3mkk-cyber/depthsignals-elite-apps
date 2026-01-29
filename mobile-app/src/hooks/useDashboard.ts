import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';

export interface Position {
  id: number;
  pair: string;
  side: 'long' | 'short';
  size: number;
  entry_price: number;
  current_price: number;
  pnl: number;
}

export interface DashboardData {
  open_positions: Position[];
  total_pnl: number;
  win_rate: number;
}

export function useDashboard() {
  return useQuery<DashboardData>({
    queryKey: ['dashboard'],
    queryFn: async () => {
      const { data } = await api.get('/dashboard');
      return data;
    },
    staleTime: 5_000,
  });
}
