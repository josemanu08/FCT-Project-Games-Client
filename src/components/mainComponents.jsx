import { React, useState, useContext, useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { UserInfo, Filter, Table, ConfigPlaystation, ConfigXbox } from './sectionComponents'
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
      <ul className='userOptions'>
        <h1>😏</h1>
        <li>
          <input hidden type="checkbox" id="playChecked"/>
          <ConfigPlaystation></ConfigPlaystation>
          <form action="" className='playConfigContent' method='post'>
            <section className='playParameterInfo'>
              <p style={{ fontSize: '18px', textDecoration: 'underline', textUnderlineOffset: '7px', textDecorationColor: 'rgb(36, 127, 232)', textDecorationThickness: '5px' }}>
                PlayStation Username</p>
              <button style={{ cursor: 'pointer', width: '6rem', padding: '.1rem', fontSize: '15px' }} type='button'>Edit</button>
            </section>
            <input className='input-username' type="text" placeholder='DatilonFG, TheWolf, xXCHRISCHETOXx'/>
            <button className='submit-button'>Select</button>
          </form>
        </li>
        <li>
          <input hidden type="checkbox" id="xboxCheck" />
          <ConfigXbox></ConfigXbox>
          <form action="" className='xboxConfigContent'>
          <section className='xboxParameterInfo'>
            <p style={{ fontSize: '18px', textDecoration: 'underline', textUnderlineOffset: '7px', textDecorationColor: 'rgb(19, 162, 17)', textDecorationThickness: '5px' }}>Xbox Username</p>
            <button style={{ cursor: 'pointer', width: '6rem', padding: '.1rem', fontSize: '15px' }} type='button'>Edit</button>
          </section>
            <input className='input-username' type="text" placeholder='DatilonFG, TheWolf, xXCHRISCHETOXx'/>
            <button className='submit-button'>Select</button>
          </form>
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
