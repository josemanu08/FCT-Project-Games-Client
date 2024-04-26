import React, { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { userDataContext } from '../../../Context/contexts'
import { SettingsTutorial } from './sub-components/SettingsTutorial'
import { toast } from 'react-toastify'

export const ConnectForm = () => {
  const { platform } = useParams()
  const { userData, setUserData } = useContext(userDataContext)

  const HandleSubmit = (event) => {
    event.preventDefault()
    const { username } = Object.fromEntries(new FormData(event.target))
    if (platform === 'xbox') {
      toast.info('searching xbox info', {
        theme: 'dark'
      })
      setUserData((previous) => {
        return {
          ...previous,
          xboxUsername: username
        }
      })
    } else {
      setUserData((previous) => {
        toast.info('searching psn info', {
          theme: 'dark'
        })
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
            <NavLink to='/userOptions' className='return-to-settings'>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z"/>
            </svg>
          </NavLink>
                <h1>
                    <span style={{ color: 'orange' }}>Connect your </span>
                    <span style={{ textTransform: 'uppercase' }}>{platform} </span>
                    account
                </h1>
                <form onSubmit={HandleSubmit} className="settings-form">
                    <input required name='username' placeholder='Playstation Network Username' type="text" />
                    <button className='settings-button'>Connect</button>
                </form>
                <SettingsTutorial></SettingsTutorial>
            </div>
        </div>
  )
}
