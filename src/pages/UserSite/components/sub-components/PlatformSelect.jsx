import React, { useRef } from 'react'
import { usePlatformSelect } from '../../hooks/usePlatformSelect'

export const PlatformSelect = () => {
  const platformRef = useRef(null)
  const { filterState, platformHandler } = usePlatformSelect({ platformRef })
  return (
      <div className="select-container">
        <select
        defaultValue={filterState.platform}
        ref={platformRef}
        onInput={platformHandler}
        className='select-platform'>
          <option value="both">Platforms</option>
          <option value="playStation">PlayStation</option>
          <option value="xbox">Xbox</option>
        </select>
        <div className="select-icon-container">
          <i className='bx bx-sm bx-chevron-down'></i>
        </div>
      </div>
  )
}
