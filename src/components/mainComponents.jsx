import { React, useState, useContext, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { UserInfo, Filter, Table } from './sectionComponents'
import myGames from '../mocks/myGames.json'
import myGamesXbox from '../mocks/myGamesXbox.json'

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
  const [xboxState, setXboxState] = useState(null)
  const [playStationState, setPlaystationState] = useState(null)

  const { userData } = useContext(userDataContext)

  useEffect(() => {
    if (!userData.playStationUsername) return
    setPlaystationState(myGames.trophyTitles)
  }, [userData])

  useEffect(() => {
    if (!userData.xboxUsername) return
    setXboxState(myGamesXbox.titles)
  }, [userData])

  return (
    <section className='userSite'>
        <UserInfo></UserInfo>
        <Filter></Filter>
        <Table gameData={{}}></Table>
    </section>
  )
}

export const userOption = () => {
  return (
        <h1>Aquí es donde configuras cosas 😏</h1>
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
