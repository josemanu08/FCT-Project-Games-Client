/* eslint-disable react/prop-types */
import React from 'react'

export default function GameBodyItem ({ gameInfo }) {
  return (
    <li>
        <div className="game-img-container">
            <img src={gameInfo?.icon} alt="" />
        </div>
        <div className="game-item-content">
            <p className="platforms">
                {
                    gameInfo.titlePlatforms
                }
            </p>
            <p className="game-title">{gameInfo.name}</p>
        </div>
        <div
        className="progress"
        style={{
          height: '2px',
          width: `${gameInfo.percentaje}%`,
          backgroundColor: 'white'
        }}>
        </div>
        <ul hidden className='game-details-hover-list'>
            {}
        </ul>
    </li>
  )
}
