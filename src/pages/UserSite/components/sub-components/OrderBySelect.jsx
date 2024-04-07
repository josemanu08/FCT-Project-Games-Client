import React, { useRef } from 'react'
import { useOrderBySelect } from '../../hooks/useOrderBySelect'

export default function OrderBySelect () {
  const orderRef = useRef(null)
  const { handleOrderChange, filterState } = useOrderBySelect({ orderRef })
  console.log(filterState.order)
  return (
    <div className="select-container">
        <p style={{ color: 'grey' }}>Order By:</p>
        <select
        defaultValue={filterState.order}
        ref={orderRef}
        onInput={handleOrderChange}
        className='select-platform'>
          <option value="name">name</option>
          <option value="name-descendent">name-desc</option>
          <option value="percentaje">percentaje</option>
          <option value="percentaje-descendent">percentaje-desc</option>
        </select>
        <div className="select-icon-container">
          <i className='bx bx-sm bx-chevron-down'></i>
        </div>
      </div>
  )
}
