/* eslint-disable react/prop-types */
import React from 'react'
import { TrophyItem } from './Trophies-components/TrophyItem'

export const Trophies = ({ trophieList }) => {
  console.log(trophieList)
  return (
        <ul className='trophie-list'>
          {
            // trophieList.map((trophy, index) => (
            //   <TrophyItem key={index} trophy={trophy}/>
            // ))
          }
        </ul>
  )
}
