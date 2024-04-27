import React, { useEffect } from 'react'
import { useGameDetailsStore } from '../../../store/GameDetailsStore'
import { NavLink } from 'react-router-dom'

const useStickyTopModal = () => {
  useEffect(() => {
    const handleStickyScroll = () => {
      const modal = document.querySelector('.modal-sticky-top')
      if (window.scrollY > (window.innerHeight * 0.25) &&
        !modal.classList.contains('show-sticky-modal')) {
        modal.classList.toggle('show-sticky-modal')
      }
      if (window.scrollY < (window.innerHeight * 0.25) &&
        modal.classList.contains('show-sticky-modal')) {
        modal.classList.toggle('show-sticky-modal')
      }
    }

    window.addEventListener('scroll', handleStickyScroll)

    return () => window.removeEventListener('scroll', handleStickyScroll)
  }, [])
}

export const ModalStickyTop = () => {
  const { gameDetail } = useGameDetailsStore()
  useStickyTopModal()

  const doStickyScrollIntoTitleName = () => {
    const header = document.querySelector('.header')
    header.scrollIntoView({ behavior: 'smooth' })
  }

  return (
        <div className="modal-sticky-top">
            <div className="modal-sticky-main-data">
                <NavLink to='/' style={{ color: 'white' }}>
                <i className='bx bx-sm bx-arrow-back'></i>
                </NavLink>
                <img src={gameDetail?.gi?.background_image}alt="" />
                <p onClick={doStickyScrollIntoTitleName} className='modal-sticky-name'>{gameDetail?.gi?.name}</p>
            </div>
            <div className="modal-sticky-secondary-data">
                <ul>
                    <li>
                        <p className='modal-sticky-date'>{gameDetail?.gi?.date}</p>
                    </li>
                    <li>
                        <p className='modal-sticky-metacritic metacritic-small'>{gameDetail?.gi?.metacritic}</p>
                    </li>
                </ul>
            </div>
        </div>
  )
}
