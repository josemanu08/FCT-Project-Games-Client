import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const Aside = () => {
  useEffect(() => {
    const stickyScroll = () => {
      const wrapper = document.querySelector('.content-wrapper')
      if (window.scrollY < wrapper.clientHeight) {
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
        <div className='content-wrapper' style={{ height: 'fit-content' }}>
          {/* NAV-USER-INFO TIENE QUE SER OTRO COMPONENTE */}
          <div className='nav-user-info'>
            <p className='user-icon'>JM</p>
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
