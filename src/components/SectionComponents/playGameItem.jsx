/* eslint-disable react/prop-types */
import React from 'react'

export const PlayStationGameItem = ({ gameData }) => {
  return (
      <tr className='playItem'>
        <td colSpan={2}>
          <div className='mainInfo'>
            <img className='icon' src={gameData.icon} alt={gameData.icon} />
            <section className="subInfo">
              <p>{gameData.name}</p>
              <p style={{ fontSize: 'small' }}>
                <span className='trophieNumber'>{gameData.earnedTrophies}/{gameData.definedTrophies}</span>
                &nbsp;Trophies</p>
            </section>
          </div>
        </td>
        <td><span className='playPlatform'>{gameData.platform}</span></td>
        <td>{gameData.percentaje}%</td>
      </tr>
  )
}
