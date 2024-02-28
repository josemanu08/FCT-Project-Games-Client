import { React, useState, useContext, useEffect, useRef } from 'react'
import { Aside, Roots } from './components/mainComponents'
import { BrowserRouter } from 'react-router-dom'
import { userDataContext } from './Context/contexts'

import { useXbox, usePlay, usePlayProfile, useXboxProfile } from './hooks/hooks'

function App () {
  const { userData } = useContext(userDataContext)
  const { playStationState } = usePlay({ userData })
  const { xboxState } = useXbox({ userData })
  const { ProfilePSN } = usePlayProfile({ userData })
  const { ProfileXbox } = useXboxProfile({ userData })

  console.log(ProfileXbox)
  return (
    <BrowserRouter>
      <div className='container'>
        <Aside/>
        <Roots profileXbox = {ProfileXbox} profileInfo={ProfilePSN} xbox={xboxState} play={playStationState}/>
      </div>
    </BrowserRouter>
  )
}

export default App
