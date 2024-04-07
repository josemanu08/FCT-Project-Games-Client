import React from 'react'
import { SearchBar } from './sub-components/SearchBar'
import { PlatformSelect } from './sub-components/PlatformSelect'
import OrderBySelect from './sub-components/OrderBySelect'
import { DisplayOptions } from './sub-components/DisplaySelect'

export const Filter = () => {
  return (
      <section className='filters'>
        <div className="sub-filters">
          <PlatformSelect></PlatformSelect>
          <OrderBySelect></OrderBySelect>
        </div>
        <DisplayOptions></DisplayOptions>
      </section>
  )
}
