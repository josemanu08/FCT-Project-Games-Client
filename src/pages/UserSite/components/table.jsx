import { React, useContext, useState, useEffect } from 'react'
import { PlayStationGameItem } from './sub-components/playGameItem'
import { XboxGameItem } from './sub-components/xboxGameItem'
import { applyFilters } from '../../../helpers/helpers'
import { filterContext } from '../../../Context/contexts'
// import { animate, stagger } from 'motion'
import { useBodyState } from '../hooks/useBodyState'
// eslint-disable-next-line react/prop-types
export const Table = () => {
  const { filterState } = useContext(filterContext)
  const { bodyState } = useBodyState()

  /* useEffect(() => {
    const tr = document.querySelectorAll('tr')
    animate(
      tr,
      { opacity: [0, 1], scale: [0, 1] },
      { easing: 'ease-in-out', delay: stagger(0.1) }
    )
  }, [filterState]) */

  const filteredTableBody = applyFilters(bodyState, filterState)
  return (
          <div className='table-container'>
            <table className='gamesTable'>
              <tbody>
                {
                  (!bodyState.length)
                    ? 'Waiting for your games... 😘'
                    : filteredTableBody.sort((a, b) => a.name.localeCompare(b.name))
                      .map((title, index) => {
                        return (title.platform === 'playStation')
                          ? <PlayStationGameItem key={index} gameData={title} />
                          : <XboxGameItem key={index} gameData={title}/>
                      })
                }
              </tbody>
            </table>
          </div>
  )
}
