import React, { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { userDataContext } from '../../../Context/contexts'
import { SettingsTutorial } from './sub-components/SettingsTutorial'

export const ConnectForm = () => {
  const { platform } = useParams()
  const { userData, setUserData } = useContext(userDataContext)
  console.log(userData)

  const HandleSubmit = (event) => {
    event.preventDefault()
    const { username } = Object.fromEntries(new FormData(event.target))
    if (platform === 'xbox') {
      setUserData((previous) => {
        return {
          ...previous,
          xboxUsername: username
        }
      })
    } else {
      setUserData((previous) => {
        return {
          ...previous,
          playStationUsername: username
        }
      })
    }
  }
  return (
        <div className='user-options-b'>
            <div className="form-container">
            <NavLink to='/userOptions' className='return-to-settings'>🐱</NavLink>
                <h1>
                    <span style={{ color: 'orange' }}>Connect your </span>
                    <span style={{ textTransform: 'uppercase' }}>{platform} </span>
                    account
                </h1>
                <form onSubmit={HandleSubmit} className="settings-form">
                    <input required name='username' placeholder='Playstation Network Username' type="text" />
                    <button>Connect</button>
                </form>
                <SettingsTutorial></SettingsTutorial>
            </div>
        </div>
  )
}
