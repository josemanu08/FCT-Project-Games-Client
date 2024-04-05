import React, {} from 'react'
import { SearchBar } from './sub-components/SearchBar'

export const Header = () => {
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
