import { useEffect, useState, useRef } from 'react'
import { getPlayUserData, getXboxUserData } from '../scripts/USERDATA/userData'

export const useUserData = ({ userData }) => {
  const [data, setData] = useState({
    psn: null,
    xbl: null
  })

  const psnUsernameRef = useRef(null)
  const xblUsernameRef = useRef(null)

  useEffect(() => {
    const fetchData = async () => {
      const newData = { ...structuredClone(data) }
      if (userData.playStationUsername && (userData.playStationUsername !== psnUsernameRef.current)) {
        newData.psn = await getPlayUserData(userData.playStationUsername)
      }
      if (!userData.playStationUsername && data.psn) {
        newData.psn = null
      }
      if (userData.xboxUsername && (userData.xboxUsername !== xblUsernameRef.current)) {
        newData.xbl = await getXboxUserData(userData.xboxUsername)
      }
      if (!userData.xboxUsername && data.xbl) {
        newData.xbl = null
      }
      setData(newData)
      psnUsernameRef.current = userData.playStationUsername
      xblUsernameRef.current = userData.xboxUsername
    }
    fetchData()
  }, [userData])

  return {
    data
  }
}
