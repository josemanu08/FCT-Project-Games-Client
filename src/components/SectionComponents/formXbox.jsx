import { React, useState, useContext } from 'react'
import { userDataContext } from '../../Context/contexts'

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
