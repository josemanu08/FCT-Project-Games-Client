/* eslint-disable react/prop-types */
import React from 'react'
import { TrophyItem } from './TrophyItem'
import { AditionalTrophyInfo } from './AditionalTrophyInfo'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

export const TrophyTable = ({ info }) => {
  return (
      <section className='trophy-detail-container'>
        <AditionalTrophyInfo trophyInfo={info}/>
        <table className='trophy-detail-table'>
          <tbody>
              {
                info.map((tr) => (
                  <LazyLoadComponent key={tr.tId}>
                     <TrophyItem trophyInfo={tr} />
                  </LazyLoadComponent>
                ))
              }
          </tbody>
        </table>
      </section>
  )
}
