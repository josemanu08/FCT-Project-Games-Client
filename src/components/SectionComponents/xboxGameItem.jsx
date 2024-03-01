/* eslint-disable react/prop-types */
import React from 'react'

export const XboxGameItem = ({ gameData }) => {
  return (
      <tr className='xboxItem'>
         <td colSpan={2}>
          <div className='mainInfo'>
            <img className='icon' src={gameData.icon} alt={gameData.icon} />
            <section className="subInfo">
              <p>{gameData.name}</p>
              <p style={{ fontSize: 'small' }}>
              <span className='trophieNumber'>{gameData.earnedTrophies}</span>
              &nbsp;Trophies&nbsp;({gameData.currentGamerscore}/{gameData.totalGamerscore})</p>
            </section>
          </div>
        </td>
        <td><span className='playPlatform'>{gameData.platform}</span></td>
        <td>{gameData.percentaje}%</td>
      </tr>
  )
}
