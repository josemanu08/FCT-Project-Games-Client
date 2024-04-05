import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Aside = () => {
  useEffect(() => {
    const stickyScroll = () => {
      const wrapper = document.querySelector('.content-wrapper')
      if (window.scrollY < window.outerHeight) {
        wrapper.style.position = ''
        return
      }
      wrapper.style.position = 'fixed'
    }
    window.addEventListener('scroll', stickyScroll)
    return () => window.removeEventListener('scroll', stickyScroll)
  }, [])

  return (
    <>
      <nav className='web-aside'>
        <div className='content-wrapper'>
          <div className='nav-user-info'>
            <p>JM</p>
          </div>
          <NavLink className='nav-item' to= "/userOptions" >
            <p>Accounts</p>
          </NavLink>
          <NavLink className='nav-item' to= "/" >
            <p>Games</p>
          </NavLink>
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  )
}
