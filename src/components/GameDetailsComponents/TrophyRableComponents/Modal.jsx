/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react'

export const TrophyModal = ({ trophyInfo, setModalData }) => {
  const [modalState, setModalState] = useState(false)

  console.log(trophyInfo)

  useEffect(() => {
    setModalState(true)
  }, [])

  const close = () => {
    setModalState(false)
    setTimeout(() => {
      setModalData(false)
    }, 100)
  }

  return (
    <div className="overlay">
      <section className={`trophy-modal ${(modalState) ? 'opened' : ''}`}>
        <button className='close-modal' style={{ cursor: 'pointer' }} onClick={() => close()}>&times;</button>
        <img src={trophyInfo.icon} alt="" style={{ width: '500px' }} />
      </section>
    </div>
  )
}
