/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'

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
          <div className="platformInfo">
            {
              gameData.titlePlatforms.map((platform, index) => {
                if (platform === 'PC') return <p className='PC' key={index}>PC</p>
                if (platform === 'XboxOne') return <p className='XboxOne' key={index}>XO</p>
                return <p className='XboxSeries' key={index}>XS</p>
              })
            }
          </div>
        </td>
        <td className='detailsColumn'>
          <NavLink className='getDetails'><i className='bx bx-sm bxs-spreadsheet'></i></NavLink>
        </td>
        <td>{gameData.percentaje}%</td>
      </tr>
  )
}
