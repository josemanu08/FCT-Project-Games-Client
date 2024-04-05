import React, { useRef } from 'react'
import { usePlatformSelect } from '../../hooks/usePlatformSelect'

export const PlatformSelect = () => {
  const platformRef = useRef(null)
  const { filterState, platformHandler } = usePlatformSelect({ platformRef })
  return (
      <select
        defaultValue={filterState.platform}
        ref={platformRef}
        onInput={platformHandler}
        className='selectRarity'>
          <option value="both">both</option>
          <option value="playStation">PlayStation</option>
          <option value="xbox">Xbox</option>
      </select>
  )
}
