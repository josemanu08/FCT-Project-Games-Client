/* eslint-disable react/prop-types */
import React, { useContext, useRef } from 'react'
import { filterContext } from '../../../../Context/contexts'
import { useBodyState } from '../../hooks/useBodyState'
import { SearchItem } from '../SearchItem'

export const SearchResult = ({ width, focus }) => {
  const { filterState: { search } } = useContext(filterContext)
  const { bodyState } = useBodyState()
  const resultsRef = useRef(null)

  const applySearch = (body) => {
    return body.filter((game) => game.name.toLowerCase().includes(search.toLowerCase()))
  }
  const filteredBody = applySearch(bodyState)

  const setOverFlow = () => {
    // resultsRef.current?
    return (
      resultsRef.current?.clientHeight > 400
        ? 'scroll'
        : 'unset'
    )
  }

  return (
        <div >
            <ul
            ref={resultsRef}
            className={`results ${focus && 'show-result'}`}
            style={{ width, overflowY: setOverFlow(), maxHeight: '500px' }}>
              <p className='total-games-search'>Games <span style={{ color: 'grey' }}>{filteredBody.length}</span></p>
                {
                  filteredBody
                    .sort((a, b) => a.name.localeCompare(b.name))
                    .map((game, index) => (
                    <SearchItem key={index} gameInfo={game}/>
                    ))
                }
            </ul>
       </div>
  )
}
