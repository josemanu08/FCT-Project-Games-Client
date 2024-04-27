/* eslint-disable react/prop-types */
import React from 'react'

export const SerieGame = ({ seriesGames }) => {
  return (
        <li className='series-item'>
            <section className='series-item-main-info'>
                <img src={seriesGames.background_image} alt="" />
               <div>
                    <p className='series-name'>{seriesGames.name}</p>
                    <p className='series-date'>{seriesGames.released}</p>
               </div>
            </section>
            <p className='metacritic-small'>{seriesGames?.metacritic}</p>
        </li>
  )
}
