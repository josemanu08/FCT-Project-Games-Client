import { useState, useEffect } from 'react'
import { fetchTrophies } from '../scripts/TROPHY/trophyFetch'
import trophies from '../mocks/TROPHIES/tDetailPlay.json'

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
