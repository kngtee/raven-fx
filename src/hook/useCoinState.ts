import { create } from 'zustand'

interface Coin {
  id: string;
  symbol: string;
  name: string;
}

interface CoinState {
  coinId: Coin['id']
  setCoinId: (id: string) => void
}

export const useCoinStore = create<CoinState>((set) => ({
  coinId: 'bitcoin',
  setCoinId: (id: string) => set({ coinId: id })
}))