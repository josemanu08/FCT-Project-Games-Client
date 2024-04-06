/* eslint-disable react/prop-types */
import React from 'react'
import { useGameStore } from '../../../../store/GamesStore'
export const PlayUserInfoB = () => {
  const { playStationData } = useGameStore()
  return (
    !playStationData
      ? 'Wating...'
      : <div className='user-info-container'>
            <div className='user-img'>
                <img src={playStationData.psnProfile.icon} />
            </div>
            <div className='user-trophy-name-info'>
                <div className='username-info'>
                    <p>{playStationData.psnProfile.username}</p>
                </div>
                <div className='user-trophy-info'>
                    <ul className='trophies'>
                        {
                        Object
                          .entries(playStationData.psnProfile.TrohySummary)
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
