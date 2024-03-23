/* eslint-disable react/prop-types */
import { React, useState, useEffect, useContext, useRef } from 'react'
import { userDataContext, filterContext } from '../Context/contexts'
import { PlayUserInfo, XboxUserInfo } from './sectionSubComponents'
import { applyFilters } from '../scripts/helpers'
// import myGames from '../mocks/myGames.json'
// import { userDataContext } from '../Context/contexts'

// Aquí van los componentes del UserSite y el userOptions
export const UserInfo = ({ profileInfo, profileXbox }) => {
  return (
        <section className='userInfo'>
          {/* Extraible */}
            <PlayUserInfo profileInfo={profileInfo}></PlayUserInfo>
            <XboxUserInfo xboxProfileInfo={profileXbox}></XboxUserInfo>
            {/* PONER EL RESTO DE UL DE LA INFO */}
        </section>
  )
}

export const Filter = () => {
  const { setFilterState } = useContext(filterContext)
  const [range, setRange] = useState(50)

  const searchRef = useRef(null)
  const platformRef = useRef(null)

  const searchHandler = () => {
    setFilterState((previous) => {
      return ({
        ...previous,
        search: searchRef.current.value
      })
    })
  }

  const platformHandler = () => {
    setFilterState((previous) => {
      return ({
        ...previous,
        platform: platformRef.current.value
      })
    })
  }

  return (
        <section className='filters'>
            <input onInput={searchHandler} ref={searchRef} className = 'selectTitle' type="text" size= "100" placeholder='Bloodborne, Uncharted, Dark Souls....'/>
           <div className="sub-filters">
              <select ref={platformRef} onInput={platformHandler} className='selectRarity'>
                  <option defaultChecked value="both">both</option>
                  <option value="playStation">PlayStation</option>
                  <option value="xbox">Xbox</option>
              </select>
              <input className = 'selectRange' defaultValue={range} onInput={(event) => setRange(event.target.value)} type="range" step="10"/>
              {range}%
           </div>
        </section>
  )
}

const XboxGameItem = ({ gameData }) => {
  return (
    <tr className='xboxItem'>
       <td colSpan={2}>
        <div className='mainInfo'>
          <img className='icon' src={gameData.icon} alt={gameData.icon} />
          <section className="subInfo">
            <p>{gameData.name}</p>
            <p style={{ fontSize: 'small' }}>
            <span className='trophieNumber'>{gameData.earnedTrophies}</span>
            &nbsp;Trophies&nbsp;({gameData.currentGamerscore}/{gameData.totalGamerscore})</p>
          </section>
        </div>
      </td>
      <td><span className='playPlatform'>{gameData.platform}</span></td>
      <td>{gameData.percentaje}%</td>
    </tr>
  )
}

const PlayStationGameItem = ({ gameData }) => {
  return (
    <tr className='playItem'>
      <td colSpan={2}>
        <div className='mainInfo'>
          <img className='icon' src={gameData.icon} alt={gameData.icon} />
          <section className="subInfo">
            <p>{gameData.name}</p>
            <p style={{ fontSize: 'small' }}>
              <span className='trophieNumber'>{gameData.earnedTrophies}/{gameData.definedTrophies}</span>
              &nbsp;Trophies</p>
          </section>
        </div>
      </td>
      <td><span className='playPlatform'>{gameData.platform}</span></td>
      <td>{gameData.percentaje}%</td>
    </tr>
  )
}

export const Table = ({ xbox, play }) => {
  const { filterState } = useContext(filterContext)
  const [bodyState, setBodyState] = useState([])

  useEffect(() => {
    setBodyState([...xbox, ...play])
  }, [xbox, play])

  const filteredTableBody = applyFilters(bodyState, filterState)
  return (
        <div className='table-container'>
          <table className='gamesTable'>
            <thead>
                <tr>
                  <th colSpan={2}>Name</th>
                  <th>Platform</th>
                  <th>Pertentaje</th>
                </tr>
            </thead>
            <tbody>
              {
                (!bodyState.length)
                  ? 'Waiting for your games... 😘'
                  : filteredTableBody.sort((a, b) => a.name.localeCompare(b.name))
                    .map((title, index) => {
                      return (title.platform === 'playStation')
                        ? <PlayStationGameItem key={index} gameData={title} />
                        : <XboxGameItem key={index} gameData={title}/>
                    })
              }
            </tbody>
          </table>
        </div>
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
  const { userData, setUserData } = useContext(userDataContext)

  const handleClick = () => {
    setEdit(!edit)
  }

  const eraseContext = () => {
    setUserData((previous) => {
      return {
        ...previous,
        playStationUsername: null
      }
    })
  }

  const HandleSubmit = (event) => {
    event.preventDefault()
    if (!edit) return
    const { usernamePlay } = Object.fromEntries(new FormData(event.target))
    // VERIFICAR SI EL USUARIO EXISTE Y PUEDE TRAER DATOS

    setEdit(false)
    if (usernamePlay === userData.playStationUsername) return
    setUserData((previous) => {
      return {
        ...previous,
        playStationUsername: usernamePlay
      }
    })
  }

  return (
    <form onSubmit={(event) => HandleSubmit(event)} className='playConfigContent' method='post'>
      <section className='playParameterInfo'>
        <p>PlayStation Username</p>
        <button onClick={handleClick} type='button'>Edit</button>
      </section>
      {
        edit
          ? <input
          name='usernamePlay'
          required
          className='input-username'
          type="text"
          placeholder='DatilonFG, TheWolf, xXCHRISCHETOXx'/>
          : <input
          value={userData.playStationUsername ?? ''}
          name='usernamePlay'
          required
          disabled
          className='input-username'
          type="text"
          placeholder='DatilonFG, TheWolf, xXCHRISCHETOXx'/>
      }
      <button type='button' className='erase-button' onClick={eraseContext}>
        <i className='bx bx-x'></i>
      </button>
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

  const eraseContext = () => {
    setUserData((previous) => {
      return {
        ...previous,
        xboxUsername: null
      }
    })
  }

  const HandleSubmit = (event) => {
    event.preventDefault()
    if (!edit) return
    const { usernameXbox } = Object.fromEntries(new FormData(event.target))
    // VERIFICAR SI EL USUARIO EXISTE Y PUEDE TRAER DATOS

    setEdit(false)
    if (usernameXbox === userData.xboxUsername) return
    setUserData((previous) => {
      return {
        ...previous,
        xboxUsername: usernameXbox
      }
    })
  }
  return (
    <form onSubmit={(event) => HandleSubmit(event)} action="" className='xboxConfigContent'>
      <section className='xboxParameterInfo'>
        <p style={{ fontSize: '18px', textDecoration: 'underline', textUnderlineOffset: '7px', textDecorationColor: 'rgb(19, 162, 17)', textDecorationThickness: '5px' }}>Xbox Username</p>
        <button onClick={handleClick} type='button'>Edit</button>
      </section>
      {
        edit
          ? <input
          name='usernameXbox'
          required
          className='input-username'
          type="text"
          placeholder='DatilonFG, TheWolf, xXCHRISCHETOXx'/>
          : <input
          value={userData.xboxUsername ?? ''}
          name='usernameXbox'
          required
          disabled
          className='input-username'
          type="text"
          placeholder='DatilonFG, TheWolf, xXCHRISCHETOXx'/>
      }

      <button type='button' className='erase-button' onClick={eraseContext}>
        <i className='bx bx-x'></i>
      </button>
      <button className='submit-button'>Select</button>
    </form>
  )
}