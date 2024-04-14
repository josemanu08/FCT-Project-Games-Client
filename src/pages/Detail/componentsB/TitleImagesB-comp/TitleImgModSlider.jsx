/* eslint-disable react/prop-types */
import React from 'react'

export const TitleImagModalSlider = ({ images, changeIndex }) => {
  const handleClick = (index) => {
    changeIndex(index)
    const img = document.querySelectorAll('.img-modal-slider img')[index]
    img.scrollIntoView({ block: 'nearest', inline: 'start', behavior: 'smooth' })
    img.classList.toggle()
  }
  return (
        <div className="img-modal-slider">
            {
                images.map((img, index) => (
                    <img onClick={() => handleClick(index)} key={index} src={img.Uri} alt="" />
                ))
            }
        </div>
  )
}
