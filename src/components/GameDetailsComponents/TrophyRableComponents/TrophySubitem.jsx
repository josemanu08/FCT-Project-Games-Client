/* eslint-disable react/prop-types */
import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export const TrophySubItem = ({ trophyInfo, isAditionalInfo, setModalData }) => {
  return (
      <>
        <div className="main-trophy-info">
            <LazyLoadImage onClick={() => setModalData(trophyInfo)}
            style={{ objectFit: 'cover' }}
            src={`${trophyInfo?.icon}`} height='60' width='60'>
           </LazyLoadImage>
            <section className='trophy-desc-name'>
              <p className='trophy-name'>{trophyInfo?.name}</p>
              <p className='trophy-description'>{trophyInfo?.detail}</p>
            </section>
          </div>
          <div className='date-trophy-info'>
            {
              trophyInfo?.achieved && (isAditionalInfo || (new Date(trophyInfo?.date)).toLocaleDateString())
            }
          </div>
      </>
  )
}
