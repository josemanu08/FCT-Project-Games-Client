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
