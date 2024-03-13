import React from 'react'
import { ConfigPlaystation } from '../SectionComponents/configPlaystation'
import { FormPlayStation } from '../SectionComponents/formPlaystation'
import { ConfigXbox } from '../SectionComponents/configXbox'
import { FormXbox } from '../SectionComponents/formXbox'

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
