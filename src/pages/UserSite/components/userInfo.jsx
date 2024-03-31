/* eslint-disable react/prop-types */
import React from 'react'
import { PlayUserInfo } from './sub-components/playUserInfo'
import { XboxUserInfo } from './sub-components/xboxUserInfo'

export const UserInfo = ({ profileInfo, profileXbox }) => {
  return (
          <section className='userInfo'>
            {/* Extraible */}
              <PlayUserInfo profileInfo={profileInfo}></PlayUserInfo>
              <XboxUserInfo xboxProfileInfo={profileXbox}></XboxUserInfo>
              {/* PONER EL RESTO DE UL DE LA INFO */}
          </section>
  )
}
