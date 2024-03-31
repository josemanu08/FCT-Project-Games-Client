import React from 'react'
import { ConfigPlaystation } from './components/configPlaystation'
import { FormPlayStation } from './components/formPlaystation'
import { ConfigXbox } from './components/configXbox'
import { FormXbox } from './components/formXbox'

export const UserOption = () => {
  return (
        <ul className='userOptions'>
          <h1>😏</h1>
          <li>
            <input hidden type="checkbox" id="playChecked"/>
            <ConfigPlaystation></ConfigPlaystation>
            <FormPlayStation></FormPlayStation>
          </li>
          <li>
            <input hidden type="checkbox" id="xboxCheck" />
            <ConfigXbox></ConfigXbox>
            <FormXbox></FormXbox>
          </li>
        </ul>
  )
}
