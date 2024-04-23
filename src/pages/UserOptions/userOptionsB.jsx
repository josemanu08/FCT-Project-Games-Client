import React from 'react'
import { ConnectComponent } from './components/ConnectComponent'
export const UserOptionsB = () => {
  return (
        <div className='user-options-b'>
            <div className="options-container">
                {/* <h1 className='settings-title'>Settings</h1>
                <ul className='settings-list'>
                    <li>Profiles</li>
                </ul>
                <div className="connect-container">
                    <h2>Set your Gaming Profiles</h2>
                    <p>Select platform and write your username, then on the <span>Games</span> section, you´ll see all your profile games, and all the related info</p>
                </div> */}
                <div className="connect-platforms">
                    <ConnectComponent platform={'xbox'}></ConnectComponent>
                    <ConnectComponent platform={'playstation'}></ConnectComponent>
                    {/* <ConnectComponent platform={'xbox'}></ConnectComponent>
                    <ConnectComponent platform={'playstation'}></ConnectComponent> */}
                </div>
            </div>
        </div>
  )
}
