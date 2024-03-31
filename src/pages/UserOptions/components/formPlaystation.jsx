import { React, useState, useContext } from 'react'
import { userDataContext } from '../../../Context/contexts'

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
            ? (<input
            name='usernamePlay'
            required
            defaultValue={userData.playStationUsername ?? ''}
            className='input-username'
            type="text"
            placeholder='DatilonFG, TheWolf, xXCHRISCHETOXx'/>)
            : (<input
            value={userData.playStationUsername ?? ''}
            name='usernamePlay'
            required
            disabled
            className='input-username'
            type="text"
            placeholder='DatilonFG, TheWolf, xXCHRISCHETOXx'/>)
        }
        <button type='button' className='erase-button' onClick={eraseContext}>
          <i className='bx bx-x'></i>
        </button>
        <button className='submit-button'>Select</button>
      </form>
  )
}
