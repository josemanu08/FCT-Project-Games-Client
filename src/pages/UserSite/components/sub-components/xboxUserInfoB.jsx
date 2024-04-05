/* eslint-disable react/prop-types */
import React from 'react'

export const XboxUserInfoB = ({ xboxProfileInfo }) => {
  return (
    <div className='user-info-container'>
        <div className='user-img'>
            <img src={xboxProfileInfo.icon} />
        </div>
        <div className='user-trophy-name-info'>
            <div className='username-info'>
                <p>{xboxProfileInfo.username}</p>
            </div>
            <div className='user-trophy-info'>
                <ul className='trophies'>
                    <li>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1024px-Xbox_one_logo.svg.png" alt="" />
                        <p style={{ color: 'green' }}>{xboxProfileInfo.gamerScore}</p>
                    </li>
                    <li>
                        <i className='bx bx-md bxs-medal' ></i>
                            {xboxProfileInfo.tier}
                    </li>
                    <li>
                        <i className='bx bx-md bxs-trophy'></i>
                        {xboxProfileInfo.total}
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
