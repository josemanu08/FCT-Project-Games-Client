/* eslint-disable react/prop-types */
import { React, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { useXboxTrophies } from '../../hooks/detailHooks'

const TitleInfo = ({ info }) => {
  const [descState, setDescState] = useState(info.ti.shortDescription.length > 200 ? 'closedDesc' : 'openedDesc')

  const handleClick = () => {
    setDescState((prev) => {
      return prev === 'closedDesc' ? 'openedDesc' : 'closedDesc'
    })
  }

  return (
    <section style={{ position: 'relative' }} className='titleInfoContainer'>
     <h2 className='titleName'>{info?.ti?.name}</h2>
      <ul className='detailsHeaderSection'>
        <li>
          <ul className='gameInfo'>
            <li>
              <span className='infoName'>Created By </span>
              <p className='info'>{info?.ti?.developerName}</p>
            </li>
            <li>
              <span className='infoName'>Date </span>
              <p className='info'>{(new Date(info?.ti?.releaseDate).toLocaleDateString())}</p>
            </li>
            <li>
              <span className='infoName'>Price </span>
              <p className='info'>{(info?.ti?.price)}</p>
            </li>
          </ul>
        </li>
        <li className={`xboxTitleDescription ${descState}`}>
          <p className='infoName'>{info?.ti?.shortDescription}</p>
          {
            info.ti.shortDescription > 200 && window.outerWidth < 1600 &&
            <button onClick={handleClick}><i className='bx bx-sm bx-chevron-down'></i></button>
          }
        </li>
      </ul>
      <button type='button'><a target='_blank' href={`${info?.ti?.website}`} rel="noreferrer">Website</a></button>
    </section>
  )
}

const TitleImages = ({ info }) => {
  return (
    <section className='titleImageContainer'>
      { /* }<div className='img' style={{ backgroundImage: `url("${info?.ti?.imgs?.logo[0]?.Uri}")`, height: '300px', width: '100%' }}></div>{ */ }
      { }<img src={`${info?.ti?.imgs?.logo[0]?.Uri}`} alt="" />{ }
    </section>
  )
}

const Header = ({ children }) => {
  return (
  <header className='detailsHeader'>
    {children}
  </header>
  )
}

export const XboxDetail = () => {
  const params = useParams()
  const { xboxTrophyData } = useXboxTrophies(params)
  return (
    <>
        {
          xboxTrophyData
            ? <div className='detailBody'>
                  <Header>
                    <TitleImages info = {xboxTrophyData}></TitleImages>
                    <TitleInfo info={xboxTrophyData}></TitleInfo>
                  </Header>
                  <NavLink className='goBack' to='/'><i className='bx bxs-left-arrow'></i></NavLink>
              </div>
            : 'Waiting'
        }
    </>
  )
}
