/* eslint-disable react/prop-types */
import { React, useState, useEffect, useContext } from 'react'
import { userDataContext } from '../Context/contexts'
// import myGames from '../mocks/myGames.json'
// import { userDataContext } from '../Context/contexts'

// Aquí van los componentes del UserSite y el userOptions
export const UserInfo = () => {
  return (
        <section className='userInfo'>
            {/* Extraible */}
            <ul className='TroffieInfo'>
                <li><b>Platinum <img src="https://psnprofiles.com/lib/img/icons/40-platinum.png"/></b></li>
                <li><b>Gold <img src="https://psnprofiles.com/lib/img/icons/40-silver.png" alt="" /></b></li>
                <li><b>silver <img src="https://psnprofiles.com/lib/img/icons/40-gold.png" alt="" /></b></li>
                <li><b>bronze <img src="https://psnprofiles.com/lib/img/icons/40-bronze.png" alt="" /></b></li>
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

// UserConfig Components
// <i className='bx bx-sm bx-chevron-down'></i>
export const ConfigPlaystation = () => {
  return (
    <label htmlFor='playChecked' className="playStationOptionToggle">
        <div className='playFirstSection'>
          <div className='PSN'>PSN</div>
          <div>PSN account</div>
        </div>
        <div className="arrow-play"></div>
    </label>
  )
}

export const ConfigXbox = () => {
  return (
    <label htmlFor='xboxCheck' className="xboxOptionToggle">
      <div className="xboxFirstSection">
        <div className='XBL'>XBL</div>
        <div>Xbox account</div>
      </div>
      <div className="arrow-xbox"></div>
    </label>
  )
}

// UserConfigFormComponents

export const FormPlayStation = () => {
  const [edit, setEdit] = useState(false)
  // const [error, setError] = useState(false)
  const { userData, setUserData } = useContext(userDataContext)

  const handleClick = () => {
    setEdit(!edit)
  }

  const HandleSubmit = (event) => {
    event.preventDefault()
    if (!edit) return
    const { usernamePlay } = Object.fromEntries(new FormData(event.target))
    // VERIFICAR SI EL USUARIO EXISTE Y PUEDE TRAER DATOS

    localStorage.setItem('playUser', usernamePlay)
    setEdit(false)
    setUserData((previous) => {
      return {
        ...previous,
        playStationUsername: usernamePlay
      }
    })
  }

  return (
    <form onSubmit={(event) => HandleSubmit(event)} action="" className='playConfigContent' method='post'>
      <section className='playParameterInfo'>
        <p style={{ fontSize: '18px', textDecoration: 'underline', textUnderlineOffset: '7px', textDecorationColor: 'rgb(36, 127, 232)', textDecorationThickness: '5px' }}>
          PlayStation Username</p>
        <button onClick={handleClick} style={{ cursor: 'pointer', width: '6rem', padding: '.1rem', fontSize: '15px' }} type='button'>Edit</button>
      </section>
      {
        edit
          ? <input name='usernamePlay' required className='input-username' type="text" placeholder='DatilonFG, TheWolf, xXCHRISCHETOXx'/>
          : <input value={userData.playStationUsername ?? ''} name='usernamePlay' required disabled className='input-username' type="text" placeholder='DatilonFG, TheWolf, xXCHRISCHETOXx'/>
      }
      <button className='submit-button'>Select</button>
    </form>
  )
}

export const FormXbox = () => {
  const [edit, setEdit] = useState(false)
  // const [error, setError] = useState(false)
  const { userData, setUserData } = useContext(userDataContext)

  const handleClick = () => {
    setEdit(!edit)
  }

  const HandleSubmit = (event) => {
    event.preventDefault()
    if (!edit) return
    const { usernamePlay } = Object.fromEntries(new FormData(event.target))
    // VERIFICAR SI EL USUARIO EXISTE Y PUEDE TRAER DATOS

    setEdit(false)
    setUserData((previous) => {
      return {
        ...previous,
        xboxUsername: usernamePlay
      }
    })
  }
  return (
    <form onSubmit={(event) => HandleSubmit(event)} action="" className='xboxConfigContent'>
      <section className='xboxParameterInfo'>
        <p style={{ fontSize: '18px', textDecoration: 'underline', textUnderlineOffset: '7px', textDecorationColor: 'rgb(19, 162, 17)', textDecorationThickness: '5px' }}>Xbox Username</p>
        <button onClick={handleClick} style={{ cursor: 'pointer', width: '6rem', padding: '.1rem', fontSize: '15px' }} type='button'>Edit</button>
      </section>
      {
        edit
          ? <input name='usernamePlay' required className='input-username' type="text" placeholder='DatilonFG, TheWolf, xXCHRISCHETOXx'/>
          : <input value={userData.xboxUsername ?? ''} name='usernamePlay' required disabled className='input-username' type="text" placeholder='DatilonFG, TheWolf, xXCHRISCHETOXx'/>
      }
      <button className='submit-button'>Select</button>
    </form>
  )
}
