import { React, useRef, useContext } from 'react'
import { filterContext } from '../../Context/contexts'

const useFilter = ({ searchRef, platformRef }) => {
  const { setFilterState, filterState } = useContext(filterContext)

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

  return { searchHandler, platformHandler, filterState }
}

export const Filter = () => {
  // const { setFilterState, filterState } = useContext(filterContext)
  const searchRef = useRef(null)
  const platformRef = useRef(null)
  const { searchHandler, platformHandler, filterState } = useFilter({ searchRef, platformRef })

  return (
          <section className='filters'>
            <input
            value={filterState.search}
            onInput={searchHandler}
            ref={searchRef}
            className = 'selectTitle'
            type="text"placeholder='Bloodborne, Uncharted, Dark Souls....'/>

            <div className="sub-filters">
              <select defaultValue={filterState.platform} ref={platformRef} onInput={platformHandler} className='selectRarity'>
                  <option value="both">both</option>
                  <option value="playStation">PlayStation</option>
                  <option value="xbox">Xbox</option>
              </select>
            </div>
          </section>
  )
}
