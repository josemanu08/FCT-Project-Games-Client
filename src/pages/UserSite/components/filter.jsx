import React from 'react'
import { SearchBar } from './sub-components/SearchBar'
import { PlatformSelect } from './sub-components/PlatformSelect'

export const Filter = () => {
  return (
      <section className='filters'>
      {/* <SearchBar></SearchBar> */}
        <div className="sub-filters">
          <PlatformSelect></PlatformSelect>
        </div>
      </section>
  )
}
