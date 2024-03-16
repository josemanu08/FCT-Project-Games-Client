/* eslint-disable react/prop-types */
import React from 'react'

export const PlayUserInfo = ({ profileInfo }) => {
  return (
   <>
    {
        !profileInfo
          ? 'No hay'
          : <ul className='playUserInfo'>
                <li>
                    <img src={profileInfo.icon} alt="" />
                    <p>{profileInfo.username}</p>
                </li>
                <ul>
                    <li>
                        <img src="https://psnprofiles.com/lib/img/icons/40-platinum.png" alt="" />
                        {profileInfo.TrohySummary.platinum}
                    </li>
                    <li>
                        <img src="https://psnprofiles.com/lib/img/icons/40-gold.png" alt="" />
                        {profileInfo.TrohySummary.gold}
                    </li>
                    <li>
                        <img src="https://psnprofiles.com/lib/img/icons/40-silver.png" alt="" />
                        {profileInfo.TrohySummary.silver}
                    </li>
                    <li>
                        <img src="https://psnprofiles.com/lib/img/icons/40-bronze.png" alt="" />
                        {profileInfo.TrohySummary.bronze}
                    </li>
                    <li>
                        <i className='bx bx-md bxs-trophy'></i>
                        {Object.values(profileInfo.TrohySummary).reduce((acc, value) => acc + value)}
                    </li>
                </ul>
            </ul>
    }
   </>
  )
}

export const XboxUserInfo = ({ xboxProfileInfo }) => {
  return (
        <>
            {
                !xboxProfileInfo
                  ? 'Waiting...'
                  : <ul className='XboxUserInfo'>
                <li>
                    <img src={xboxProfileInfo.icon} alt="" />
                    {xboxProfileInfo.username}
                </li>
                <ul>
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
            </ul>
            }
        </>
  )
}
