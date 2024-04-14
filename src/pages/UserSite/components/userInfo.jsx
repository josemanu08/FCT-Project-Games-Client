/* eslint-disable react/prop-types */
import React, { useState } from 'react'
// import { PlayUserInfo } from './sub-components/playUserInfo'
// import { XboxUserInfo } from './sub-components/xboxUserInfo'
import { PlayUserInfoB } from './sub-components/playUserInfoB'
import { XboxUserInfoB } from './sub-components/xboxUserInfoB'
import { GamerRange } from './GamerRange'

export const UserInfo = () => {
  const [toggleState, setToggleState] = useState('play')

  const handleToggle = () => {
    setToggleState(prev => prev === 'play' ? 'xbox' : 'play')
  }

  return (
          <>
            { <section
                  className='userInfo'
                  style={{
                    // backgroundImage: `linear-gradient(to right, #151515 , ${toggleState === 'play' ? 'blue' : '#005E0D'}, #151515)`,
                    position: 'relative'
                  }}>
                    {
                      toggleState === 'play'
                        ? <PlayUserInfoB></PlayUserInfoB>
                        : <XboxUserInfoB></XboxUserInfoB>
                    }
                    <button style={{
                      position: 'absolute',
                      bottom: '.5rem',
                      right: '.5rem',
                      cursor: 'pointer'
                    }} onClick={() => handleToggle()}>🥥</button>
                    {/* <GamerRange></GamerRange> */}
                  </section>
            }
          </>
  )
}
