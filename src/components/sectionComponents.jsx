/* eslint-disable react/prop-types */
import { React, useState, useEffect } from 'react'
// import myGames from '../mocks/myGames.json'
// import { userDataContext } from '../Context/contexts'

// Aquí van los componentes del UserSite y el userOptions
export const UserInfo = () => {
  return (
        <section className='userInfo'>
            {/* Extraible */}
            <ul className='TroffieInfo'>
                <li>
                    <b>Platinum <img src="https://psnprofiles.com/lib/img/icons/40-platinum.png"/></b>
                    data
                </li>
                <li>
                    <b>Gold <img src="https://psnprofiles.com/lib/img/icons/40-silver.png" alt="" /></b>
                    data
                </li>
                <li>
                    <b>silver <img src="https://psnprofiles.com/lib/img/icons/40-gold.png" alt="" /></b>
                    data
                </li>
                <li>
                    <b>bronze <img src="https://psnprofiles.com/lib/img/icons/40-bronze.png" alt="" /></b>
                    data
                </li>
            </ul>
            {/* PONER EL RESTO DE UL DE LA INFO */}

        </section>
  )
}

export const Filter = () => {
  const [range, setRange] = useState(50)
  return (
        <section className='filters'>
            <select className='selectRarity'>
                <option value="Platinum">Platinum</option>
                <option value="Gold">Gold</option>
                <option value="Silver">Silver</option>
                <option value="Bronze">Bronze</option>
            </select>
            <input className = 'selectDate' type="datetime-local" name="" id="" />
            <input className = 'selectTitle' type="text" placeholder='bloodborne, uncharted....'/>
            <input className = 'selectRange' defaultValue={range} onInput={(event) => setRange(event.target.value)} type="range" step="10"/>
            {range}%
        </section>
  )
}

const XboxGameItem = ({ gameData }) => {
  return (
    <tr>
      <td>{gameData.name}</td>
      <td>{gameData.platform}</td>
      <td>{gameData.percentaje}%</td>
    </tr>
  )
}

const PlayStationGameItem = ({ gameData }) => {
  return (
    <tr>
      <td>{gameData.name}</td>
      <td><span className='playPlatform'>{gameData.platform}</span></td>
      <td>{gameData.percentaje}%</td>
    </tr>
  )
}

export const Table = ({ xbox, play }) => {
  const [bodyState, setBodyState] = useState([])

  useEffect(() => {
    setBodyState([...xbox, ...play])
  }, [xbox, play])

  return (
        <table border='1px' className='gamesTable'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Platform</th>
              <th>Pertentaje</th>
            </tr>
          </thead>
          <tbody>
            {
              (!bodyState.length)
                ? 'Waiting for your games... 😘'
                : bodyState.sort((a, b) => a.name.localeCompare(b.name))
                  .map((title, index) => {
                    return (title.platform === 'playStation')
                      ? <PlayStationGameItem key={index} gameData={title} />
                      : <XboxGameItem key={index} gameData={title}/>
                  })
            }
          </tbody>
        </table>
  )
}
