import { React } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { useTrophies } from '../../hooks/detailHooks'

export const PlayDetail = () => {
  const params = useParams()
  const { trophyData } = useTrophies(params)
  return (
    <>
      <NavLink to='/'>go back</NavLink>
      <h1 style={{ color: 'white' }}>Detalles de Juego con id {params?.gameId}. Del usuario {params?.userId}</h1>
      {/* }<p style={{ color: 'white' }}>{JSON.stringify({ trophyData })}</p>{ */}
      {/* }<ul>
        {trophyData.map((data, index) => <li key={index}>{JSON.stringify(data)}</li>)}
      </ul>{ */}
    </>
  )
}
