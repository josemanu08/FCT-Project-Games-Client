import React, { useContext } from 'react'
import { filterContext } from '../../../Context/contexts'
import { useBodyState } from '../hooks/useBodyState'
import { applyFilters } from '../../../helpers/helpers'
import GameBodyItem from './sub-components/GameBodyItem'

export const GamesBody = () => {
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
        <ul className="games-body">
            {
                filteredTableBody
                  .map((game, index) => (
                    <GameBodyItem key={index} gameInfo={game}></GameBodyItem>
                  ))
            }
        </ul>
  )
}
