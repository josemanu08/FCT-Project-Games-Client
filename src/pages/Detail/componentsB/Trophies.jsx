/* eslint-disable react/prop-types */
import React from 'react'
import { TrophyItem } from './Trophies-components/TrophyItem'

export const Trophies = ({ trophieList, name }) => {
  return (
    <>
       <h2 className='trophy-game-name'>{name} achievements</h2>
        <ul className='trophie-list'>
          {
            trophieList.map((trophy, index) => (
              <TrophyItem key={index} trophy={trophy}/>
            ))
          }
        </ul>
    </>
  )
}
