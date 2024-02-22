import { React } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import { UserInfo, Filter, Table } from './sectionComponents'

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
  return (
    <section className='userSite'>
        <UserInfo></UserInfo>
        <Filter></Filter>
        <Table></Table>
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
