import React, { useEffect, useState } from 'react'
import { dataSubject } from '../../../services/subject-implementation'
import { TitleImagModalSlider } from './TitleImagesB-comp/TitleImgModSlider'

export const TitleImagesModal = () => {
  const [data, setData] = useState(null)
  const [index, setIndex] = useState(0)

  const changeIndex = (index) => {
    setIndex(index)
  }

  useEffect(() => {
    dataSubject.getSubject().subscribe((data) => {
      setData(data)
    })
  }, [])

  return (
    (
            <div className={`images-modal-container ${data && 'show-images-modal'}`}>
               {
                 data && (
                    <>
                        <div className="main-modal-image-container">
                            <img src={data[index].Uri} alt="" />
                        </div>
                        <TitleImagModalSlider index={index} changeIndex={changeIndex} images={data}/>
                    </>
                 )
               }
                <div className='close-modal-button' onClick={() => setData(null)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                  </svg>
                </div>
            </div>
    )
  )
}
