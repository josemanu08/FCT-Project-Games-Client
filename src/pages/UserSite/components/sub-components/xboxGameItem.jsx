/* eslint-disable react/prop-types */
import React from 'react'
import { NavLink } from 'react-router-dom'

export const XboxGameItem = ({ gameData }) => {
  return (
      <tr className='xboxItem'>
         <td colSpan={2}>
          <div className='mainInfo'>
            <img loading='lazy' className='icon' src={gameData.icon} alt={gameData.icon} />
            <section className="subInfo">
              <p>{gameData.name}</p>
              <p style={{ fontSize: 'small', color: 'gray' }}>
              <span className='trophieNumber'>{gameData.earnedTrophies}</span>
              &nbsp;Trophies&nbsp;({gameData.currentGamerscore}/{gameData.totalGamerscore})
              </p>
            </section>
          </div>
          <div className="platformInfo">
            {
              gameData.titlePlatforms.map((platform, index) => {
                if (platform === 'PC') return <p className='PC' key={index}>PC</p>
                if (platform === 'XboxOne') return <p className='XboxOne' key={index}>XO</p>
                return <p className='XboxSeries' key={index}>XS</p>
              })
            }
          </div>
        </td>
        <td className='detailsColumn'>
          <NavLink to={`/xbl/${gameData.id}/${gameData.userId}`} className='getDetails'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-xbox" viewBox="0 0 16 16">
              <path d="M7.202 15.967a8 8 0 0 1-3.552-1.26c-.898-.585-1.101-.826-1.101-1.306 0-.965 1.062-2.656 2.879-4.583C6.459 7.723 7.897 6.44 8.052 6.475c.302.068 2.718 2.423 3.622 3.531 1.43 1.753 2.088 3.189 1.754 3.829-.254.486-1.83 1.437-2.987 1.802-.954.301-2.207.429-3.239.33m-5.866-3.57C.589 11.253.212 10.127.03 8.497c-.06-.539-.038-.846.137-1.95.218-1.377 1.002-2.97 1.945-3.95.401-.417.437-.427.926-.263.595.2 1.23.638 2.213 1.528l.574.519-.313.385C4.056 6.553 2.52 9.086 1.94 10.653c-.315.852-.442 1.707-.306 2.063.091.24.007.15-.3-.319Zm13.101.195c.074-.36-.019-1.02-.238-1.687-.473-1.443-2.055-4.128-3.508-5.953l-.457-.575.494-.454c.646-.593 1.095-.948 1.58-1.25.381-.237.927-.448 1.161-.448.145 0 .654.528 1.065 1.104a8.4 8.4 0 0 1 1.343 3.102c.153.728.166 2.286.024 3.012a9.5 9.5 0 0 1-.6 1.893c-.179.393-.624 1.156-.82 1.404-.1.128-.1.127-.043-.148ZM7.335 1.952c-.67-.34-1.704-.705-2.276-.803a4 4 0 0 0-.759-.043c-.471.024-.45 0 .306-.358A7.8 7.8 0 0 1 6.47.128c.8-.169 2.306-.17 3.094-.005.85.18 1.853.552 2.418.9l.168.103-.385-.02c-.766-.038-1.88.27-3.078.853-.361.176-.676.316-.699.312a12 12 0 0 1-.654-.319Z"/>
            </svg>
          </NavLink>
        </td>
        <td>
          {gameData.percentaje}%
        </td>
      </tr>
  )
}