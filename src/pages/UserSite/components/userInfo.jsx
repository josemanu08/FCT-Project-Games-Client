/* eslint-disable react/prop-types */
import React, { useState } from 'react'
// import { PlayUserInfo } from './sub-components/playUserInfo'
// import { XboxUserInfo } from './sub-components/xboxUserInfo'
import { PlayUserInfoB } from './sub-components/playUserInfoB'
import { XboxUserInfoB } from './sub-components/xboxUserInfoB'

export const UserInfo = ({ profileInfo, profileXbox }) => {
  const [toggleState, setToggleState] = useState('play')

  const handleToggle = () => {
    setToggleState(prev => prev === 'play' ? 'xbox' : 'play')
  }

  return (
          <>
            {
              !profileInfo || !profileXbox
                ? 'LOADING'
                : <section
                  className='userInfo'
                  style={{
                    backgroundImage: `linear-gradient(to right, #151515 , ${toggleState === 'play' ? 'blue' : '#005E0D'}, #151515)`,
                    position: 'relative'
                  }}>
                    {
                      toggleState === 'play'
                        ? <PlayUserInfoB profileInfo={profileInfo}></PlayUserInfoB>
                        : <XboxUserInfoB xboxProfileInfo={profileXbox}></XboxUserInfoB>
                    }
                    <button style={{
                      position: 'absolute',
                      bottom: '.5rem',
                      right: '.5rem',
                      cursor: 'pointer'
                    }} onClick={() => handleToggle()}>🥥</button>
                  </section>
            }
          </>
  )
}
