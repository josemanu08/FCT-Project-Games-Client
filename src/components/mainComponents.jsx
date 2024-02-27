import { React, useState, useContext, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { UserInfo, Filter, Table, ConfigPlaystation, ConfigXbox, FormPlayStation, FormXbox } from './sectionComponents'
import myGames from '../mocks/myGames.json'
import myGamesXbox from '../mocks/myGamesXbox.json'
import { mapXboxGames, mapPlayStationGames } from '../scripts/helpers'

// Funciones fetch de Xbox

import { getGamesFromXuid, getXuidFromUsername } from '../scripts/XBOX/xboxFunctions'

import { userDataContext } from '../Context/contexts'

export const Aside = () => {
  return (
    <nav className='web-aside'>
        <Link className='nav-item' to= "/userOptions" ><i className='bx bxs-info-circle'></i></Link>
        <Link className='nav-item' to= "/userSite" ><i className='bx bx-table'></i></Link>
    </nav>
  )
}

// ----------Rutas-Principales-----------
export const userSite = () => {
  const [xboxState, setXboxState] = useState([])
  const [playStationState, setPlaystationState] = useState([])

  const { userData } = useContext(userDataContext)

  useEffect(() => {
    if (!userData.playStationUsername) return
    (async () => {
      // const auth = await uploadTokenAuth(authPsn)
      // const userId = await getUserId(authPsn, userData.playStationUsername)
      // const userGames = await getUserGamesFromId(authPsn, userId)
    })()
    // setPlaystationState(mapPlayStationGames(myGames.trophyTitles))
    setPlaystationState(mapPlayStationGames(myGames.trophyTitles))
  }, [userData])

  useEffect(() => {
    if (!userData.xboxUsername) return
    getXuidFromUsername(userData.xboxUsername)
      .then(xuid => getGamesFromXuid(xuid))
      .then(games => setXboxState(mapXboxGames(games.titles)))
    // setXboxState(mapXboxGames(myGamesXbox.titles))
  }, [userData])

  return (
    <section className='userSite'>
        <UserInfo></UserInfo>
        <Filter></Filter>
        <Table xbox={xboxState} play={playStationState}></Table>
    </section>
  )
}

export const userOption = () => {
  return (
      <ul className='userOptions'>
        <h1>😏</h1>
        <li>
          <input hidden type="checkbox" id="playChecked"/>
          <ConfigPlaystation></ConfigPlaystation>
          <FormPlayStation></FormPlayStation>
        </li>
        <li>
          <input hidden type="checkbox" id="xboxCheck" />
          <ConfigXbox></ConfigXbox>
          <FormXbox></FormXbox>
        </li>
      </ul>
  )
}
// ----------Rutas-Principales-----------
export const Roots = () => {
  return (
        <Routes>
            <Route path='/' Component={userSite}></Route>
            <Route path='/userSite' Component={userSite}></Route>
            <Route path='/userOptions' Component={userOption}></Route>
        </Routes>
  )
}
