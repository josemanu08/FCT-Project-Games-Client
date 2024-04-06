import { React, useContext } from 'react'
// import { Aside, Roots } from './components/mainComponents'
import { Roots } from './routes/routes'
import { BrowserRouter } from 'react-router-dom'
import { userDataContext } from './Context/contexts'
// ---Mock---
import myGames from './mocks/myGames.json'
import PSNProfile from './mocks/userPlaystation.json'
import gamesXbox from './mocks/myGamesXbox.json'
import userXbox from './mocks/userXbox.json'
import { mapPlayProfile, mapPlayStationGames, mapXboxProfile, mapXboxGames } from './helpers/helpers'
// ---Mock---
import { useUserData, useXboxUserData } from './hooks/hooks'
import { Header } from './pages/UserSite/components/Header'
import { useGameStore } from './store/GamesStore'
// import { getAvailableTrophies } from './scripts/TROPHY/trophyFetch'
// import { getXboxAvailableTrophies } from './scripts/TROPHY/getAvailableTrophies'

/* (async () => {
  await getAvailableTrophies('7397312102069087760', 'NPWR11234_00')
})() */

/* (async () => {
  await getXboxAvailableTrophies('2535430809538288', '2059211995')
})() */

function App () {
  const { xboxData } = useXboxUserData()
  return (
    <BrowserRouter>
      <div className='container'>
        <Header></Header>
        <div className="flex-container" style={{ display: 'flex', width: '100%' }}>
          <Roots
            // profileXbox={mapXboxProfile(userXbox.people, gamesXbox.titles)}
           // profileXbox={xboxData?.xblProfile}
            profileInfo={mapPlayProfile(PSNProfile.profile)}
            // xbox={mapXboxGames(gamesXbox)}
           // xbox={xboxData?.xblTitles}
            play={mapPlayStationGames(myGames.trophyTitles, PSNProfile.profile)}
          />
        </div>
        {/* }
        <Roots
        profileXbox={data.xbl?.xblProfile}
        profileInfo={data.psn?.psnProfile}
        xbox={data.xbl?.xblTitles}
        play={data.psn?.psnTitles}/>
        { */}
      </div>
    </BrowserRouter>
  )
}

export default App
