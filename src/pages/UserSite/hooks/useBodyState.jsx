import { useEffect, useState } from 'react'
import { useGameStore } from '../../../store/GamesStore'

export const useBodyState = () => {
  const [bodyState, setBodyState] = useState([])
  const { xboxData } = useGameStore()
  const { playStationData } = useGameStore()

  useEffect(() => {
    const xboxTableData = xboxData?.xblTitles ?? []
    const playTableData = playStationData?.psnTitles ?? []
    setBodyState([...xboxTableData, ...playTableData])
  }, [xboxData, playStationData])

  return { bodyState }
}
