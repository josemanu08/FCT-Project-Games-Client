import { React } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { useTrophies } from '../../hooks/detailHooks'

export const PlayDetail = () => {
  const params = useParams()
  const { trophyData } = useTrophies(params)
  return (
    <>
      <NavLink to='/'>go back</NavLink>
      <h1>Detalles de Juego con id {params?.gameId}. Del usuario {params?.userId}</h1>
      {JSON.stringify({ trophyData })}
    </>
  )
}
