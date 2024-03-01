import React from 'react'
import { NavLink } from 'react-router-dom'

export const Aside = () => {
  return (
      <nav className='web-aside'>
          <NavLink className='nav-item' to= "/userOptions" ><i className='bx bxs-info-circle'></i></NavLink>
          <NavLink className='nav-item' to= "/" ><i className='bx bx-table'></i></NavLink>
      </nav>
  )
}
