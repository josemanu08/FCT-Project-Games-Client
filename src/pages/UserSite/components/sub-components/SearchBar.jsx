import React, { useEffect, useRef, useState } from 'react'
import { useSearchBar } from '../../hooks/useSearchBar'
import { SearchResult } from './SearchResults'

const useBarWidth = ({ searchBar }) => {

}

export const SearchBar = () => {
  const searchRef = useRef(null)
  const { filterState, searchHandler } = useSearchBar({ searchRef })

  const [barWidth, setBarWidth] = useState(null)

  useEffect(() => {
    const input = document.querySelector('.searchBar')
    const handleWidth = () => {
      console.log(input.style.width)
    }
    window.addEventListener('resize', handleWidth)

    return () => window.removeEventListener('resize', handleWidth)
  }, [])

  return (
      <div className='searchBar-container'>
        <input
        value={filterState.search}
        onInput={searchHandler}
        ref={searchRef}
        className = 'searchBar'
        type="text"placeholder='Bloodborne, Uncharted, Dark Souls....'/>
        <SearchResult ></SearchResult>
      </div>
  )
}
