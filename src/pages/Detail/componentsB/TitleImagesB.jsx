/* eslint-disable react/prop-types */
import React from 'react'
import { dataSubject } from '../../../services/subject-implementation'

export const TitleImagesB = ({ images }) => {
  const setModalData = () => {
    dataSubject.setSubject(images)
  }
  return (
        <div className="title-images-container">
            {
                images?.slice(0, 5)?.map((img, index) => (
                  !index
                    ? <img onClick={() => setModalData()} key={index} className='main-title-image' src={img.Uri} alt="" />
                    : (
                        <img onClick={() => setModalData()} key={index} className='secondary-title-image' src={img.Uri} alt="" />
                      )
                ))
            }
        </div>
  )
}
