import { useState, useEffect } from 'react'
import { fetchTrophies, fetchXboxTrophies, getAvailableTrophies } from '../scripts/TROPHY/trophyFetch'
import trophies from '../mocks/TROPHIES/tDetailPlay.json'
import xboxTrophies from '../mocks/TROPHIES/tDetailXbox.json'
import allPstrophiesInfo from '../mocks/TROPHIES/allPlayStationTrophyInfo.json'

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
      // const trophies = await fetchXboxTrophies(userId, gameId)
      setXboxTrophyData(xboxTrophies)
    }
    fetchData()
  }, [])

  return { xboxTrophyData }
}
