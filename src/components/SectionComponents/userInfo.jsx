/* eslint-disable react/prop-types */
import React from 'react'
import { PlayUserInfo } from '../UserInfoComponents/playUserInfo'
import { XboxUserInfo } from '../UserInfoComponents/xboxUserInfo'

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
