/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'

export const TitleImagModalSlider = ({ images, changeIndex, index }) => {
  useEffect(() => {

  }, [index])
  const handleClick = (index) => {
    // Cambio de índice
    changeIndex(index)
    const img = document.querySelectorAll('.img-modal-slider img')[index]
    img.scrollIntoView({ block: 'nearest', inline: 'start', behavior: 'smooth' })

    // Manejo de color
    handleActiveModals()
    img.classList.toggle('active-slide')
  }

  const handleActiveModals = () => {
    document
      .querySelectorAll('.active-slide')
      .forEach(slide => slide.classList.toggle('active-slide'))
  }

  return (
        <div className="img-modal-slider">
            {
                images.map((img, index) => (
                    <div className='slider-modal-dark-container' key={index}>
                        <img className='img' onClick={() => handleClick(index)} src={img.Uri} alt="" />
                        <div className="slider-modal-dark"></div>
                    </div>
                ))
            }
        </div>
  )
}
