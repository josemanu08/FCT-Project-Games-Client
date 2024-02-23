import { React, useState, useEffect, useContext } from 'react'
import myGames from '../mocks/myGames.json'
import { userDataContext } from '../Context/contexts'

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
            <input className = 'selectTitle' type="text" placeholder='bloodbrone, uncharted....'/>
            <input className = 'selectRange' defaultValue={range} onInput={(event) => setRange(event.target.value)} type="range" step="10"/>
            {range}%
        </section>
  )
}

const GameItem = ({ gameData }) => {
  return (
        <tr>

        </tr>
  )
}

export const Table = ({ gameData }) => {
  return (
        <table border='1px' className='gamesTable'>
          <thead></thead>
          <tbody>
            {
            (gameData)
              ? 'Hay fiesta 😘'
              : 'no hay fiesta'
            }
          </tbody>
          <tfoot></tfoot>
        </table>
  )
}
