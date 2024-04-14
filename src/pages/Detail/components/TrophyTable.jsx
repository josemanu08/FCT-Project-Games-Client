/* eslint-disable react/prop-types */
import React from 'react'
import { TrophyItem } from './sub-components/TrophyItem'
import { AditionalTrophyInfo } from './sub-components/AditionalTrophyInfo'
import { LazyLoadComponent } from 'react-lazy-load-image-component'

export const TrophyTable = ({ info }) => {
  return (
      <section className='trophy-detail-container'>
        {
          info.length === 0 || <AditionalTrophyInfo trophyInfo={info}/>
        }
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
