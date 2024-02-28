/* eslint-disable react/prop-types */
import { React } from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import { UserInfo, Filter, Table, ConfigPlaystation, ConfigXbox, FormPlayStation, FormXbox } from './sectionComponents'

// Funciones fetch de Xbox

// import { getGamesFromXuid, getXuidFromUsername } from '../scripts/XBOX/xboxFunctions'

export const Aside = () => {
  return (
    <nav className='web-aside'>
        <NavLink className='nav-item' to= "/userOptions" ><i className='bx bxs-info-circle'></i></NavLink>
        <NavLink className='nav-item' to= "/" ><i className='bx bx-table'></i></NavLink>
    </nav>
  )
}

// ----------Rutas-Principales-----------
export const UserSite = ({ xbox, play, profileInfo, profileXbox }) => {
  return (
    <section className='userSite'>
        <UserInfo profileXbox = {profileXbox} profileInfo={profileInfo}></UserInfo>
        <Filter></Filter>
        <Table xbox={xbox} play={play}></Table>
    </section>
  )
}

export const UserOption = () => {
  return (
      <ul className='userOptions'>
        <h1>😏</h1>
        <li>
          <input defaultChecked hidden type="checkbox" id="playChecked"/>
          <ConfigPlaystation></ConfigPlaystation>
          <FormPlayStation></FormPlayStation>
        </li>
        <li>
          <input defaultChecked hidden type="checkbox" id="xboxCheck" />
          <ConfigXbox></ConfigXbox>
          <FormXbox></FormXbox>
        </li>
      </ul>
  )
}
// ----------Rutas-Principales-----------
export const Roots = ({ xbox, play, profileInfo, profileXbox }) => {
  return (
        <Routes>
            <Route path='/' element={<UserSite profileXbox = {profileXbox} profileInfo={profileInfo} xbox={xbox} play={play}/>} ></Route>
            <Route path='/userOptions' element={<UserOption/>}></Route>
        </Routes>
  )
}
