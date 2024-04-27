/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { SerieGame } from './SeriesGamesComponents/SerieGame'
import { useGameDetailsStore } from '../../../store/GameDetailsStore'

export const useShowMore = ({ length }) => {
  const [maxIndex, setMaxIndes] = useState(4)
  const changeIndex = () => {
    setMaxIndes(prev => (prev === length) ? 4 : length)
  }
  return { maxIndex, changeIndex }
}

export const SeriesGames = () => {
  const { gameDetail } = useGameDetailsStore()
  const { maxIndex, changeIndex } = useShowMore(gameDetail?.gi?.series?.length)
  return (
        <ul className='series-section'>
            {
                gameDetail
                  ?.gi
                  ?.series
                  .slice(0, maxIndex)
                  .map((game, index) => (
                    <SerieGame seriesGames={game} key={index}/>
                  ))
            }
            {
                gameDetail?.gi?.series?.length > 4 && <button onClick={changeIndex}>ShowMore</button>
            }
        </ul>
  )
}
