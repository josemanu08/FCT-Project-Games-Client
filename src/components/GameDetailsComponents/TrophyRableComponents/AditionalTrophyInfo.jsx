/* eslint-disable react/prop-types */
import React from 'react'
import { TrophySubItem } from './TrophySubitem'
import { getRarestTrophies, getFirstTrophy, getLatestTrophy } from '../../../scripts/helpers'

export const AditionalTrophyInfo = ({ trophyInfo }) => {
  return (
      <ul className='trophy-detail-aditional-info'>
        <li className='first-trophy'>
          <p>Primer Trofeo</p>
          <TrophySubItem trophyInfo={getFirstTrophy(trophyInfo)} isAditionalInfo={true}></TrophySubItem>
        </li>
        <li className='latest-trophy'>
          <p>Último Trofeo</p>
          <TrophySubItem trophyInfo={getLatestTrophy(trophyInfo)} isAditionalInfo={true}></TrophySubItem>
        </li>
        <ul className="rarest-trophies">
          <p>Trofeos mas raros</p>
          {
            getRarestTrophies(trophyInfo)
              .map(tr => (
                <li key={tr.tId}>
                  <TrophySubItem trophyInfo={tr} isAditionalInfo={true}></TrophySubItem>
                </li>
              ))
          }
        </ul>
      </ul>
  )
}
