/* eslint-disable react/prop-types */
import React from 'react'

export const TitleInfo = ({ info }) => {
  // const { descState, handleClick } = useDescription({ info })
  // name, developerNamem, releaseDate, shortDescription, website
  return (
      <section style={{ position: 'relative' }} className='titleInfoContainer'>
       <h2 className='titleName'>{info.name}</h2>
        <ul className='detailsHeaderSection'>
          <li>
            <ul className='gameInfo'>
              <li>
                <span className='infoName'>Created By </span>
                <p className='info'>{info.developerName}</p>
              </li>
              <li>
                <span className='infoName'>Date </span>
                <p className='info'>{(new Date(info.releaseDate).toLocaleDateString())}</p>
              </li>
              <li>

                {info.price && (
                  <>
                <span className='infoName'>Price </span>
                <p className='info'>{(info.price)}</p>
                </>
                )}
              </li>
            </ul>
          </li>
          <li className={'xboxTitleDescription '}>
            <p className='infoName'>{info.shortDescription}</p>
              {/* }<button className='open-close-desc' onClick={}><i className='bx bx-sm bx-chevron-down'></i></button>{ */}
          </li>
        </ul>
        {
          info.website && <button type='button'><a target='_blank' href={`${info.website}`} rel="noreferrer">Website</a></button>
        }
      </section>
  )
}
