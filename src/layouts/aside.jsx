import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Aside = () => {
  return (
    <>
      <nav className='web-aside'>
        <div className='nav-user-info'>
        <i className='bx bxs-user-rectangle'></i>
          <p>User</p>
        </div>
          <NavLink className='nav-item' to= "/userOptions" >
            {/* <i className='bx bx-sm bxs-info-circle'></i> */}
            <p>Accounts</p>
            </NavLink>
          <NavLink className='nav-item' to= "/" >
            {/* <i className='bx bx-sm bx-table'></i> */}
            <p>Games</p>
            </NavLink>
      </nav>
      <Outlet></Outlet>
    </>
  )
}
