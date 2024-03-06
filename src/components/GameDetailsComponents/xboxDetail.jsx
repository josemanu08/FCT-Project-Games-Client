import { React } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { useXboxTrophies } from '../../hooks/detailHooks'

const Header = ({ img }) => {
  return (
  <header>
    <img src="" alt="" />
  </header>
  )
}

export const XboxDetail = () => {
  const params = useParams()
  const { xboxTrophyData } = useXboxTrophies(params)
  return (
    <>
        <NavLink to='/'>go back</NavLink>
        <h1>Juego de xbox con id {params.gameId}, y usuario {params.userId}</h1>
        {JSON.stringify(xboxTrophyData)}
    </>
  )
}
