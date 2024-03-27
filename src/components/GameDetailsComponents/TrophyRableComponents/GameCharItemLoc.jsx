/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { dataSubject } from '../../../services/subject-implementation'
import { AdditionalModal } from './AdditionalModal/AdditionalModal'

export const GameCharItemLoc = ({ info }) => {
  const ItemsBof = HOC(Items)
  return (
    <ul className="game-char-item-loc-container">
        <Characters info={info}/>
        <ItemsBof info = {info}/>
        <Locations/>
        <AdditionalModal/>
    </ul>
  )
}

export const HOC = (WrappedComponnet) => {
  return function HOC ({ info }) {
    const addData = () => {
      dataSubject.setSubject(info)
    }
    return (
        <div onClick={addData}>
            <WrappedComponnet info={info}/>
        </div>
    )
  }
}

export const Characters = ({ info }) => {
  const addData = () => {
    dataSubject.setSubject(info)
  }
  return (
        <li onClick={addData} className='characters'>
            {/* <input hidden type="radio" name='additional-info' id="character-check" /> */}
            <section className='character-icon'>
                {/* <label htmlFor="character-check"> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-person-arms-up" viewBox="0 0 16 16">
                        <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                        <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z"/>
                    </svg>
                {/* </label> */}
            </section>
        </li>
  )
}

export const Items = ({ info }) => {
  return (
        <li className='items'>
            {/* <input hidden type="radio" name='additional-info' id='item-check'/> */}
            <section className="item-icon">
                {/* <label htmlFor="item-check"> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
                        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5"/>
                        <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z"/>
                    </svg>
                {/* </label> */}
            </section>
        </li>
  )
}

export const Locations = () => {
  return (
    <li className='locations'>
        {/* <input hidden type="radio" name='additional-info' id='location-check'/> */}
        <section className="location-icon">
            {/* <label htmlFor="location-check"> */}
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" className="bi bi-map-fill" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.598-.49L10.5.99 5.598.01a.5.5 0 0 0-.196 0l-5 1A.5.5 0 0 0 0 1.5v14a.5.5 0 0 0 .598.49l4.902-.98 4.902.98a.5.5 0 0 0 .196 0l5-1A.5.5 0 0 0 16 14.5zM5 14.09V1.11l.5-.1.5.1v12.98l-.402-.08a.5.5 0 0 0-.196 0zm5 .8V1.91l.402.08a.5.5 0 0 0 .196 0L11 1.91v12.98l-.5.1z"/>
                </svg>
            {/* </label> */}
        </section>
    </li>
  )
}
