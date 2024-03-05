/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'

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
          <div className='platformInfo'>
            {
              gameData?.titlePlatforms.split(',')
                .map((platform, index) => {
                  if (platform === 'PS4') return <p className='PS4' key={index}>{platform}</p>
                  if (platform === 'PSVITA') return <p className='PSVITA' key={index}>{platform}</p>
                  return <p className='PS3' key={index}>{platform}</p>
                })
            }
          </div>
        </td>
        <td className='detailsColumn'>
          {/* }<span className='playPlatform'>{gameData.platform}</span>{ */}
            <NavLink to={`/psn/${gameData.id}/${gameData.accId}`} className='getDetails'><i className='bx bx-sm bxs-spreadsheet'></i></NavLink>
        </td>
        <td>{gameData.percentaje}%</td>
      </tr>
  )
}
