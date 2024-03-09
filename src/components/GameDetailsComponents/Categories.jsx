/* eslint-disable react/prop-types */
import React from 'react'

export const Categories = ({ info }) => {
  return (
        <ul className='categories'>
        {
          info.categories.map((cat, index) => {
            return <li key={index}>{cat}</li>
          })
        }
      </ul>
  )
}
