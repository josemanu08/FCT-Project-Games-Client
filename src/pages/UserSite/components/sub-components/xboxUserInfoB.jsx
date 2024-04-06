/* eslint-disable react/prop-types */
import React from 'react'
import { useGameStore } from '../../../../store/GamesStore'

export const XboxUserInfoB = () => {
  const { xboxData } = useGameStore()

  return (
    !xboxData
      ? 'Waiting...'
      : <div className='user-info-container'>
    <div className='user-img'>
        <img src={xboxData.xblProfile.icon} />
    </div>
    <div className='user-trophy-name-info'>
        <div className='username-info'>
            <p>{xboxData.xblProfile.username}</p>
        </div>
        <div className='user-trophy-info'>
            <ul className='trophies'>
                <li>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1024px-Xbox_one_logo.svg.png" alt="" />
                    <p style={{ color: 'green' }}>{xboxData.xblProfile.gamerScore}</p>
                </li>
                <li>
                    <i className='bx bx-md bxs-medal' ></i>
                        {xboxData.xblProfile.tier}
                </li>
                <li>
                    <i className='bx bx-md bxs-trophy'></i>
                    {xboxData.xblProfile.total}
                </li>
            </ul>
        </div>
    </div>
</div>
  )
}
