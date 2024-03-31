import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Aside = () => {
  return (
    <>
      <nav className='web-aside'>
          <NavLink className='nav-item' to= "/userOptions" ><i className='bx bx-sm bxs-info-circle'></i></NavLink>
          <NavLink className='nav-item' to= "/" ><i className='bx bx-sm bx-table'></i></NavLink>
      </nav>
      <Outlet></Outlet>
    </>
  )
}
