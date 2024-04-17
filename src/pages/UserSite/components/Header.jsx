import React, { useEffect } from 'react'
import { SearchBar } from './sub-components/SearchBar'

export const Header = () => {
  useEffect(() => {
    const header = document.querySelector('.header')
    window.addEventListener('scroll', () => {
      if (window.scrollY >= header.clientHeight - 20) {
        header.classList.add('scrolling')
      } else {
        header.classList.remove('scrolling')
      }
    })
  }, [])
  return (
      <header className='header'>
        <p className='proyect-title'>Game Hub</p>
        {/* GAMER_RANGE VA A SER UN COMPONENTE */}
        <p className='gamer-range'>🐱‍👤Lorem, ipsum dolor.</p>
        <SearchBar></SearchBar>
        <p className='user-icon'>JM</p>
        <p>José Manuel</p>
      </header>

  )
}

export const HeaderDetailsVersion = () => {
  return (
    <header className='header'>
      <p className='proyect-title'>Game Hub</p>
      {/* GAMER_RANGE VA A SER UN COMPONENTE */}
      <p className='gamer-range'>🐱‍👤Lorem, ipsum dolor.</p>
      <SearchBar></SearchBar>
      <p className='user-icon'>JM</p>
      <p>José Manuel</p>
    </header>
  )
}
