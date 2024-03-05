import { useState, useEffect } from 'react'
import { fetchTrophies, fetchXboxTrophies } from '../scripts/TROPHY/trophyFetch'
import trophies from '../mocks/TROPHIES/tDetailPlay.json'
import xboxTrophies from '../mocks/TROPHIES/tDetailXbox.json'

export const useTrophies = ({ userId, gameId }) => {
  const [trophyData, setTrophyData] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      // const trophies = await fetchTrophies(userId, gameId)
      setTrophyData(trophies)
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
