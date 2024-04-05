import React, { useRef } from 'react'
import { useSearchBar } from '../../hooks/useSearchBar'

export const SearchBar = () => {
  const searchRef = useRef(null)
  const { filterState, searchHandler } = useSearchBar({ searchRef })
  return (
      <input
        value={filterState.search}
        onInput={searchHandler}
        ref={searchRef}
        className = 'searchBar'
        type="text"placeholder='Bloodborne, Uncharted, Dark Souls....'/>
  )
}
