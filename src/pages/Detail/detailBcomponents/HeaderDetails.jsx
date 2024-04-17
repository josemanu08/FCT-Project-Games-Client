/* eslint-disable react/prop-types */
import React from 'react'

export const HeaderDetails = ({ gameInfo }) => {
  const ratings = {
    exceptional: 'Exceptional 🌟',
    recommended: 'Recommended ✅',
    meh: 'meh 💨',
    skip: 'skip 💥'
  }

  const ratingIcons = {
    exceptional: '🌟',
    recommended: '✅',
    meh: '💨',
    skip: '💥'
  }

  console.log(gameInfo)

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
                    <p className='date-mini-random-info'>{new Date(gameInfo.gi.date).toDateString()}</p>
                    <p className='avg-time-random-info'>Average Time Playing: 15 hours</p>
                </div>

                <div className="game-title-container" >
                    <h1 className='game-title-detail'>{gameInfo.gi.name}</h1>
                </div>

                <div className="store-options">
                    <button className="add-to-favourite">
                    <i className='bx bxs-heart'></i>
                    </button>
                </div>

                <div className="rating-info">
                    <div className="ratings">
                        <p className="type-of-rating">
                            {ratings[calcBestRating(gameInfo.gi.ratings).title]}
                        </p>
                        <span className='total-ratings-mini detail-mini'>
                            {calcRating(gameInfo.gi.ratings)} Ratings
                        </span>
                    </div>
                    <div className="top-game-info">
                        <p className="top">#{gameInfo.gi.rating_top}</p>
                        <span className='top-year-mini detail-mini'>TOP {new Date(gameInfo.gi.date).getFullYear()}</span>
                    </div>
                    <div className="metacritic-score-container">
                        <p className="metacritic-score">{gameInfo.gi.metacritic}</p>
                    </div>
                </div>

                <div className="ratings-visual-info">
                    <div className="rating-label-coloritos">
                        {
                            gameInfo.gi.ratings.map((rating, index) => (
                                <section style={{ width: `${rating.percent}%` }} key={index} className={`visual-slice ${rating.title}`}/>
                            ))
                        }
                    </div>
                    <div className="rating-indexes">
                        <div className="index">Exceptional 🟢</div>
                        <div className="index">Recommended 🔵</div>
                        <div className="index">Meh 🟡</div>
                        <div className="index">Skip 🔴</div>
                    </div>
                </div>
            </div>
        </>
  )
}
