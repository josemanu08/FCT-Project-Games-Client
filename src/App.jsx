import { React, useContext } from 'react'
// import { Aside, Roots } from './components/mainComponents'
import { Roots } from './components/MainComponents/routes'
import { BrowserRouter } from 'react-router-dom'
import { userDataContext } from './Context/contexts'
// ---Mock---
import myGames from './mocks/myGames.json'
import PSNProfile from './mocks/userPlaystation.json'
import gamesXbox from './mocks/myGamesXbox.json'
import userXbox from './mocks/userXbox.json'
import { mapPlayProfile, mapPlayStationGames, mapXboxProfile, mapXboxGames } from './scripts/helpers'
// ---Mock---
import { useUserData } from './hooks/hooks'
import { getAvailableTrophies } from './scripts/TROPHY/trophyFetch'

/* (async () => {
  await getAvailableTrophies('7397312102069087760', 'NPWR11234_00')
})() */

function App () {
  const { userData } = useContext(userDataContext)
  const { data } = useUserData({ userData })
  // data.psn?.psnProfile
  // data.psn?.psnTitles
  // data.xbl?.xblProfile
  // data.xbl?.xblTitles
  return (
    <BrowserRouter>
      <div className='container'>
        { }<Roots profileXbox={mapXboxProfile(userXbox.people, gamesXbox.titles)} profileInfo={mapPlayProfile(PSNProfile.profile)} xbox={mapXboxGames(gamesXbox)} play={mapPlayStationGames(myGames.trophyTitles, PSNProfile.profile)}/>{}
        { /* }<Roots profileXbox={data.xbl?.xblProfile} profileInfo={data.psn?.psnProfile} xbox={data.xbl?.xblTitles} play={data.psn?.psnTitles}/> { */}
      </div>
    </BrowserRouter>
  )
}

export default App
