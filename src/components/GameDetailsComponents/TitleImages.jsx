/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const TitleImages = ({ info }) => {
  const [index, setIndex] = useState(0)
  const imgRef = useRef()

  useEffect(() => {
    // const img = imgRef.current.children[index]
    const img = document.querySelectorAll('.img')[index]
    img.scrollIntoView({ block: 'nearest', inline: 'start' })
  }, [index])

  const changeImage = (step) => {
    if (step === 'next') {
      const isLastImage = index === info.length - 1
      setIndex(isLastImage ? info.length - 1 : index + 1)
    } else {
      const isFistImage = index === 0
      setIndex(isFistImage ? 0 : index - 1)
    }
  }

  return (
      <section className='titleImageContainer'>
        <div ref={imgRef} className="images">
          {
            Array.from(new Set(info)).map((img, index) => {
              return <LazyLoadImage className='img' width='400px' key={index} src={`${img.Uri}`}></LazyLoadImage>
              // return <img width='400px' className='img' key={index} src={`${img.Uri}`} alt="" />
            })
          }
        </div>
        <button onClick={() => changeImage('next')} className='nextImage'>
          <i className='bx bx-sm bxs-right-arrow'></i>
        </button>
        <button onClick={() => changeImage('prev')} className='prevImage'>
          <i className='bx bx-sm bxs-left-arrow' ></i>
        </button>
      </section>
  )
}
