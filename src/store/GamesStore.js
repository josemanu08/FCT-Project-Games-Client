import { create } from 'zustand'

export const useGameStore = create((set) => ({
  xboxProfile: 'null',
  playStationProfile: null,
  xboxGames: null,
  playStationGames: null,
  setXboxProfile: (newProfile) => {
    set(() => ({ xboxProfile: newProfile }))
  },
  updateXboxProfile: () => {},
  setPlaystationProfile: () => {},
  updatePlaystationProfile: () => {},
  setxboxGames: () => {},
  setplayStationGames: () => {},
  updatexboxGames: () => {},
  updateplayStationGames: () => {}
})
)
// export const useGameStore = create((set) => ({
//   a: null,
//   b: null,
//   setA: (something) => {
//     set((state) => ({ a: something }))
//   }
// }))
