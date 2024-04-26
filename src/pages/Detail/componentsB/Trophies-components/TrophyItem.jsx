/* eslint-disable react/prop-types */
import React from 'react'

export const TrophyItem = ({ trophy }) => {
  return (
        <li className='trophy-li-data'>
          <img src={`${trophy.icon}`} alt="" />
          <div>
            <p className="percentaje">{trophy.earnedRate}%</p>
            <p className="trophy-name">{trophy.name}</p>
            <p className="trophy-description">{trophy.detail}</p>
          </div>
        </li>
  )
}
