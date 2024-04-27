import { create } from 'zustand'

export const useGameDetailsStore = create((set) => ({
  gameDetail: null,
  setGameDetail: (data) => {
    set(() => ({ gameDetail: data }))
  }
}))
