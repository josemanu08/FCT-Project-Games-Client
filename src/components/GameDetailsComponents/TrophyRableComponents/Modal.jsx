/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react'

export const TrophyModal = ({ trophyInfo, setModalData }) => {
  const [modalState, setModalState] = useState(false)

  useEffect(() => {
    setModalState(true)
  }, [])

  const close = () => {
    setModalState(false)
    setTimeout(() => {
      setModalData(false)
    }, 100)
  }

  console.log(trophyInfo)

  return (
    <div className="overlay">
      <section className={`trophy-modal ${(modalState) ? 'opened' : ''}`}>
        <button className='close-modal' style={{ cursor: 'pointer' }} onClick={() => close()}>
          <i className='bx bx-plus-medical'></i>
        </button>
        <img src={trophyInfo.icon} alt="" style={{ width: '200px' }} />
        <div className="trophy-description">

        </div>
      </section>
    </div>
  )
}
