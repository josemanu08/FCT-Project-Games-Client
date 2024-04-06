import React, { useEffect, useRef, useState } from 'react'
import { useSearchBar } from '../../hooks/useSearchBar'
import { SearchResult } from './SearchResults'

const useBarWidth = (searchBar) => {
  const [barWidth, setBarWidth] = useState(null)

  useEffect(() => {
    const input = document.querySelector('.searchBar')
    if (!barWidth) setBarWidth(input.clientWidth)

    const handleWidth = () => {
      setBarWidth(input.clientWidth)
    }

    window.addEventListener('resize', handleWidth)

    return () => window.removeEventListener('resize', handleWidth)
  }, [])

  return ({ barWidth })
}

export const SearchBar = () => {
  const searchRef = useRef(null)
  const { filterState, searchHandler } = useSearchBar({ searchRef })
  const { barWidth } = useBarWidth(searchRef)

  const [focus, setFocus] = useState(false)

  return (
      <div className='searchBar-container'>
        <input
        onSelect={() => setFocus(true)}
        onBlur={() => setTimeout(() => setFocus(false), 100)}
        value={filterState.search}
        onInput={searchHandler}
        ref={searchRef}
        className = 'searchBar'
        type="text"placeholder='Bloodborne, Uncharted, Dark Souls....'/>
        <SearchResult focus={focus} width={barWidth}></SearchResult>
      </div>
  )
}
