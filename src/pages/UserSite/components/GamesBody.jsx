import React, { useContext } from 'react'
import { filterContext } from '../../../Context/contexts'
import { useBodyState } from '../hooks/useBodyState'
import { applyBodyFilters } from '../../../helpers/helpers'
import GameBodyItem from './sub-components/GameBodyItem'

export const GamesBody = () => {
  const { filterState } = useContext(filterContext)
  const { bodyState } = useBodyState()

  // useEffect(() => {
  //   const box = document.querySelector('.games-body')
  //   const msn = new Masonry(box, {
  //     itemSelector: '.game-body-item',
  //     columnWidth: 80

  //   })
  // })
  /* useEffect(() => {
    const tr = document.querySelectorAll('tr')
    animate(
      tr,
      { opacity: [0, 1], scale: [0, 1] },
      { easing: 'ease-in-out', delay: stagger(0.1) }
    )
  }, [filterState]) */

  const filteredTableBody = applyBodyFilters(bodyState, filterState)

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
