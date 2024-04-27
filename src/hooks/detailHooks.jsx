import { useState, useEffect } from 'react'
import { getAvailableTrophiesGameInfo, getXboxAvailableTrophies } from '../services/fetch-api/getAvailableTrophies'
import { useGameDetailsStore } from '../store/GameDetailsStore'

// Mocks
// import xboxTrophies from '../mocks/TROPHIES/tDetailXbox.json'
// // import allPstrophiesInfo from '../mocks/TROPHIES/allPlayStationTrophyInfo.json'
// import ALLxboxINFO from '../mocks/INFO/ALLxboxINFO.json'
// import AllPlayInfo from '../mocks/INFO/ALLplaystationINFO.json'
// import AllxboxInfo2 from '../mocks/INFO/ALLxboxINFO2.json'
// import LisOfP from '../mocks/INFO/liesOfP.json'
// import cocoon from '../mocks/INFO/cocoon.json'

export const useTrophies = ({ userId, gameId, gameName }) => {
  const [trophyData, setTrophyData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      // const trophies = await fetchTrophies(userId, gameId)
      const trophies = await getAvailableTrophiesGameInfo(userId, gameId, gameName)
      setIsLoading(false)
      setTrophyData(trophies)
    }
    fetchData()
  }, [userId, gameId, gameName])
  return { trophyData, isLoading }
}

export const useTrophyData = (gameInfo, path) => {
  const [trophyData, setTrophyData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const { setGameDetail } = useGameDetailsStore()

  useEffect(() => {
    const fetchTrophyData = async () => {
      const { userId, gameId, gameName } = gameInfo
      setIsLoading(true)
      const trophies = path.includes('psn')
        ? await getAvailableTrophiesGameInfo(userId, gameId, gameName)
        : await getXboxAvailableTrophies(userId, gameId, gameName)
      setIsLoading(false)
      setTrophyData(trophies)
      setGameDetail(trophies)
    }
    fetchTrophyData()
  }, [gameInfo])

  return { isLoading, trophyData }
}

export const useXboxTrophies = ({ userId, gameId }) => {
  const [xboxTrophyData, setXboxTrophyData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const trophies = await getXboxAvailableTrophies(userId, gameId)
      setIsLoading(false)
      setXboxTrophyData(trophies)
    }
    fetchData()
  }, [userId, gameId])

  return { xboxTrophyData, isLoading }
}
