import React, { useState, useEffect } from 'react'

export const useDescription = ({ info }) => {
  const [descState, setDescState] = useState(info.ti.shortDescription.length > 200 && window.innerWidth < 1600 ? 'closedDesc' : 'openedDesc')

  const handleClick = () => {
    setDescState((prev) => {
      return prev === 'closedDesc' ? 'openedDesc' : 'closedDesc'
    })
  }

  useEffect(() => {
    const eventFunc = () => {
      setDescState(() => {
        return window.innerWidth < 1200 && info.ti.shortDescription.length > 200 && 'closedDesc'
      })
    }
    window.addEventListener('resize', eventFunc)
    return () => {
      window.removeEventListener('resize', eventFunc)
    }
  }, [])

  return { descState, handleClick }
}
