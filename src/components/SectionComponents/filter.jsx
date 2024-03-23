import { React, useRef, useContext, useEffect } from 'react'
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

  /* useEffect(() => {
    console.log(filterState.platform)
    switch (filterState.platform) {
      case 'playStation':
        document.querySelector('#play-radio').toggleAttribute('ey')
        break
      case 'xbox':
        document.querySelector('#xbox-radio').toggleAttribute('ey')
        break
      default:
        document.querySelector('#both-radio').toggleAttribute('ey')
    }
  }, [filterState]) */

  return (
          <section className='filters'>
            <input
            value={filterState.search}
            onInput={searchHandler}
            ref={searchRef}
            className = 'selectTitle'
            type="text"placeholder='Bloodborne, Uncharted, Dark Souls....'/>

            <div onInput={(event) => console.log(event.target.value)} className="sub-filters">
              <input defaultChecked hidden type="radio" name="select-platform" id="both-radio" />
              <input hidden type="radio" name="select-platform" id="play-radio" />
              <input hidden type="radio" name="select-platform" id="xbox-radio" />

              <label hidden className='both-label' htmlFor="both-radio">Both</label>
              <label hidden className='play-label' htmlFor="play-radio">PlayStation</label>
              <label hidden className='xbox-label' htmlFor="xbox-radio">Xbox</label>
              <select defaultValue={filterState.platform} ref={platformRef} onInput={platformHandler} className='selectRarity'>
                  <option value="both">both</option>
                  <option value="playStation">PlayStation</option>
                  <option value="xbox">Xbox</option>
              </select>
            </div>
          </section>
  )
}
