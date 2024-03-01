import { React, useContext } from 'react'
// import { Aside, Roots } from './components/mainComponents'
import { Aside } from './components/MainComponents/aside'
import { Roots } from './components/MainComponents/routes'
import { BrowserRouter } from 'react-router-dom'
import { userDataContext } from './Context/contexts'

import { useXbox, usePlay, usePlayProfile, useXboxProfile } from './hooks/hooks'

function App () {
  const { userData } = useContext(userDataContext)
  const { playStationState } = usePlay({ userData })
  const { xboxState } = useXbox({ userData })
  const { ProfilePSN } = usePlayProfile({ userData })
  const { ProfileXbox } = useXboxProfile({ userData, xboxState })

  return (
    <BrowserRouter>
      <div className='container'>
        <Aside/>
        <Roots profileXbox={ProfileXbox} profileInfo={ProfilePSN} xbox={xboxState} play={playStationState}/>
      </div>
    </BrowserRouter>
  )
}

export default App
