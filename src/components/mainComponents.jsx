import { React, useState, useContext, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { UserInfo, Filter, Table } from './sectionComponents'
import myGames from '../mocks/myGames.json'
import myGamesXbox from '../mocks/myGamesXbox.json'
import { mapXboxGames, mapPlayStationGames } from '../scripts/helpers'

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
    setPlaystationState(mapPlayStationGames(myGames.trophyTitles))
  }, [userData])

  useEffect(() => {
    if (!userData.xboxUsername) return
    setXboxState(mapXboxGames(myGamesXbox.titles))
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
      <section className='userOptions'>
        <h1>Aquí es donde configuras cosas 😏</h1>
        <div className="playStationOptionToggle">
          <div className='playFirstSection'>
            <section className='PSN'>PSN</section>
            <span>PSN account</span>
          </div>
          <i className='bx bx-sm bx-chevron-down'></i>
        </div>
        <div className="xboxOptionToggle">
          <div className="xboxFirstSection">
            <section className='XBL'>XBL</section>
            <span>Xbox account</span>
          </div>
          <i className='bx bx-sm bx-chevron-down'></i>
        </div>
      </section>
  )
}
// ----------Rutas-Principales-----------
export const Roots = () => {
  return (
        <Routes>
            <Route path='/userSite' Component={userSite}></Route>
            <Route path='/userOptions' Component={userOption}></Route>
        </Routes>
  )
}
