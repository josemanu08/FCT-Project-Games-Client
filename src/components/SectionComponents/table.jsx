import { React, useContext, useState, useEffect } from 'react'
import { PlayStationGameItem } from './playGameItem'
import { XboxGameItem } from './xboxGameItem'
import { applyFilters } from '../../scripts/helpers'
import { filterContext } from '../../Context/contexts'
import { animate, stagger } from 'motion'

// eslint-disable-next-line react/prop-types
export const Table = ({ xbox, play }) => {
  const { filterState } = useContext(filterContext)
  const [bodyState, setBodyState] = useState([])

  useEffect(() => {
    setBodyState([...xbox, ...play])
  }, [xbox, play])

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
              <thead>
                  <tr>
                    <th colSpan={2}>Name</th>
                    <th>Platform</th>
                    <th>Pertentaje</th>
                  </tr>
              </thead>
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
