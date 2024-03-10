/* eslint-disable react/prop-types */
import React from 'react'

export const Categories = ({ info, className }) => {
  return (
        <ul className={`categories ${className}`}>
        {
          info.categories.map((cat, index) => {
            return <li key={index}>{cat}</li>
          })
        }
      </ul>
  )
}
