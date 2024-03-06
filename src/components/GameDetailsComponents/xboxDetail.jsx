import { React } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { useXboxTrophies } from '../../hooks/detailHooks'

const TitleInfo = ({ info }) => {
  return (
    <>
      <h2>Title</h2>
      <ul className='detailsHeaderSection'>
        <li>
          <ul className='gameInfo'>
            <li>Creador</li>
            <li>Fecha de Lanzamiento</li>
          </ul>
        </li>
        <li className='xboxTitleDescription'>
          Descripción del juego
        </li>
      </ul>
      <button type='button'><a href=""></a></button>
    </>
  )
}

const TitleImages = () => {
  return (
    <></>
  )
}

const Header = ({ children }) => {
  return (
  <header>
    {children}
  </header>
  )
}

export const XboxDetail = () => {
  const params = useParams()
  const { xboxTrophyData } = useXboxTrophies(params)
  return (
    <>
        <Header>
          <TitleImages></TitleImages>
          <TitleInfo></TitleInfo>
        </Header>
        <NavLink to='/'>go back</NavLink>
        {/* }<h1>Juego de xbox con id {params.gameId}, y usuario {params.userId}</h1>{ */}
        {/* }{JSON.stringify(xboxTrophyData, null, 3)}{ */}
    </>
  )
}
