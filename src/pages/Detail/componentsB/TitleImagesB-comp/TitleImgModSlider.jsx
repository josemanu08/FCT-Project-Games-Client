/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'

export const TitleImagModalSlider = ({ images, changeIndex, index }) => {
  useEffect(() => {
    // Cambio de índice
    const img = document.querySelectorAll('.img-modal-slider img')[index]
    img.scrollIntoView({ block: 'nearest', inline: 'start', behavior: 'smooth' })

    // Manejo de color
    handleActiveModals()
    img.classList.toggle('active-slide')
  }, [index])

  const handleActiveModals = () => {
    document
      .querySelectorAll('.active-slide')
      .forEach(slide => slide.classList.toggle('active-slide'))
  }

  return (
        <div className="img-modal-slider">
            {/* <button
            style={{
              position: 'absolute',
              left: '-10px'
            }}>prev</button> */}
            {
                images.map((img, i) => (
                    <div className='slider-modal-dark-container' key={i}>
                        <img loading='lazy' className='img' onClick={() => changeIndex(i)} src={img.Uri} alt="" />
                        <div className={`slider-modal-${index === i ? 'light' : 'dark'}`}></div>
                    </div>
                ))
            }
            {/* <button
            style={{
              position: 'absolute',
              right: '-10px'
            }}>prev</button> */}
        </div>
  )
}
