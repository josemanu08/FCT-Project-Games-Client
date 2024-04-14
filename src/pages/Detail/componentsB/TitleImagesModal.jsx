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
                        <TitleImagModalSlider changeIndex={changeIndex} images={data}/>
                    </>
                 )
               }
                <button className='close-modal-button' onClick={() => setData(null)}>Close</button>
            </div>
    )
  )
}
