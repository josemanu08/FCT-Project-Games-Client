/* eslint-disable react/prop-types */
import React from 'react'
export const PlayUserInfoB = ({ profileInfo }) => {
  return (
    <div className='user-info-container'>
        <div className='user-img'>
            <img src={profileInfo.icon} />
        </div>
        <div className='user-trophy-name-info'>
            <div className='username-info'>
                <p>{profileInfo.username}</p>
            </div>
            <div className='user-trophy-info'>
                <ul className='trophies'>
                    {
                        Object
                          .entries(profileInfo.TrohySummary)
                          .map(trophy => {
                            return (<li key={crypto.randomUUID}>
                                <img src={`https://psnprofiles.com/lib/img/icons/40-${trophy[0]}.png`} />
                                {trophy[1]}
                            </li>)
                          })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}
