/* eslint-disable react/prop-types */
import React from 'react'
import { skipPartiallyEmittedExpressions } from 'typescript'

export const HeaderDetails = ({ gameInfo }) => {
  console.log(gameInfo)
  const ratings = {
    exceptional: 'Exceptional ⭐',
    recommended: 'Recommended 😚',
    meh: 'meh 😴',
    skip: 'skip 😫'
  }

  const calcBestRating = (arr) => {
    return arr.filter(rating => {
      return rating.count === Math.max(
        ...arr.map(rate => rate.count)
      )
    }).pop()
  }

  const calcRating = (arr) => {
    return arr.reduce((acc, rating) => rating.count + acc, 0)
  }

  return (
        <>
            <div className="header-details-container">

                <div className="header-mini-ramdom-info">
                    <p>{new Date(gameInfo.gi.date).toLocaleDateString()}</p>
                </div>

                <div className="game-title-container">
                    <h1 className='game-title'>{gameInfo.gi.name}</h1>
                </div>

                <div className="store-options">
                    <button className="add-to-favourite">Add to 💓</button>
                </div>

                <div className="rating-info">
                    <div className="ratings">
                        <p className="type-of-rating">
                            {ratings[calcBestRating(gameInfo.gi.ratings).title]}
                        </p>
                        <span className='total-ratings-mini'>
                            {calcRating(gameInfo.gi.ratings)} Ratings
                        </span>
                    </div>
                    <div className="top-game-info">
                        <p className="top">#{gameInfo.gi.rating_top}</p>
                        <span className='top-year-mini'>TOP {new Date(gameInfo.gi.date).getFullYear()}</span>
                    </div>
                    <div className="metacritic-score-container">
                        <p className="metacritic-score">{gameInfo.gi.metacritic}%</p>
                    </div>
                </div>

                <div className="ratings-visual-info">
                    <div className="rating-label-coloritos">
                        {
                            gameInfo.gi.ratings.map((rating, index) => (
                                <section key={index} className={`visual slice ${rating.title}`}>{ratings[rating.title]}</section>
                            ))
                        }
                    </div>
                    <div className="rating-indexes">

                    </div>
                </div>
            </div>
        </>
  )
}
