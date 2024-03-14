/* eslint-disable react/prop-types */
import React from 'react'
import { TrophySubItem } from './TrophySubitem'

export const TrophyItem = ({ trophyInfo }) => {
  // className={trophyInfo?.achieved || 'not-achieved'}
  return (
      <tr>
        <td>
          <TrophySubItem trophyInfo={trophyInfo} isAditionalInfo={false}></TrophySubItem>
        </td>
        <td>
          <p className='earned-rate'>{trophyInfo.earnedRate}%</p>
        </td>
      </tr>
  )
}
