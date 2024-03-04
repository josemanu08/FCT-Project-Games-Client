import { React, useRef, useContext, useState } from 'react'
import { filterContext } from '../../Context/contexts'

export const Filter = () => {
  const { setFilterState, filterState } = useContext(filterContext)
  const [range, setRange] = useState(50)

  const searchRef = useRef(null)
  const platformRef = useRef(null)

  const searchHandler = () => {
    setFilterState((previous) => {
      return ({
        ...previous,
        search: searchRef.current.value
      })
    })
  }

  const platformHandler = () => {
    setFilterState((previous) => {
      return ({
        ...previous,
        platform: platformRef.current.value
      })
    })
  }
  return (
          <section className='filters'>
              <input onInput={searchHandler} ref={searchRef} className = 'selectTitle' type="text"placeholder='Bloodborne, Uncharted, Dark Souls....'/>
             <div className="sub-filters">
                <select ref={platformRef} onInput={platformHandler} className='selectRarity'>
                    <option value="both">both</option>
                    <option value="playStation">PlayStation</option>
                    <option value="xbox">Xbox</option>
                </select>
                {/* }<input className = 'selectRange' defaultValue={range} onInput={(event) => setRange(event.target.value)} type="range" step="10"/>
                {range}%{ */}
             </div>
          </section>
  )
}
