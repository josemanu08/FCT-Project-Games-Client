/* eslint-disable react/prop-types */
import React, { useState, useEffect, useContext } from 'react'
import { userDataContext } from '../../../Context/contexts'

export const TrophyModal = ({ trophyInfo, setModalData }) => {
  const [modalState, setModalState] = useState(false)

  const { userData } = useContext(userDataContext)

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
    <div className="overlay" onClick={() => close()}>
      <section className={`trophy-modal ${(modalState) ? 'opened' : ''}`}>
        <button className='close-modal' style={{ cursor: 'pointer' }} onClick={() => close()}>
          <i className='bx bx-plus-medical'></i>
        </button>
        <img src={trophyInfo.icon} alt="" style={{ width: '200px' }} />
        <div className="trophy-description">
          <p style={{ maxWidth: '150px' }}>{trophyInfo.detail}</p>
          <p>Earned By &nbsp;
            {
              trophyInfo.platform === 'xbox'
                ? <span style={{ color: 'green' }}>{userData.xboxUsername}</span>
                : <span style={{ color: 'rgb(67, 160, 236)' }}>{userData.playStationUsername}</span>
            }
          </p>
        </div>
      </section>
    </div>
  )
}
