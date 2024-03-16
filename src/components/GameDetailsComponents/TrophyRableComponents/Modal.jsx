/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'

export const TrophyModal = ({ trophyInfo, setModalData }) => {
  const [modalState, setModalState] = useState(false)

  useEffect(() => {
    setModalState(true)
  }, [])

  const close = () => {
    setModalState(false)
    setTimeout(() => {
      setModalData(false)
    }, 400)
  }

  return (
    <div className="overlay">
      <section className={`trophy-modal ${(modalState) ? 'opened' : ''}`}>
        <button className='close-modal' style={{ cursor: 'pointer' }} onClick={() => close()}>&times;</button>
        <img src={trophyInfo.icon} alt="" />
      </section>
    </div>
  )
}
