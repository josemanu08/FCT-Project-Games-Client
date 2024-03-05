import { React } from 'react'
import { useParams, NavLink } from 'react-router-dom'

export const XboxDetail = () => {
  const params = useParams()
  return (
    <>
        <NavLink to='/'>go back</NavLink>
        <h1>Juego de xbox con id {params.gameId}, y usuario {params.userId}</h1>
    </>
  )
}
