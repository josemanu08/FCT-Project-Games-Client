import { useState, useEffect } from 'react'
import { getAvailableTrophies, getXboxAvailableTrophies } from '../scripts/TROPHY/getAvailableTrophies'

// Mocks
import xboxTrophies from '../mocks/TROPHIES/tDetailXbox.json'
import allPstrophiesInfo from '../mocks/TROPHIES/allPlayStationTrophyInfo.json'
import ALLxboxINFO from '../mocks/INFO/ALLxboxINFO.json'
import LisOfP from '../mocks/INFO/liesOfP.json'

export const useTrophies = ({ userId, gameId }) => {
  const [trophyData, setTrophyData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      // const trophies = await fetchTrophies(userId, gameId)
      // const trophies = await getAvailableTrophies(userId, gameId)
      setTrophyData(allPstrophiesInfo)
    }
    fetchData()
  }, [])
  return { trophyData }
}

export const useXboxTrophies = ({ userId, gameId }) => {
  const [xboxTrophyData, setXboxTrophyData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      // const trophies = await getXboxAvailableTrophies(userId, gameId)
      setXboxTrophyData(LisOfP)
    }
    fetchData()
  }, [])

  return { xboxTrophyData }
}
