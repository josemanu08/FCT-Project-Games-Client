/* eslint-disable react/prop-types */
import React from 'react'
import { dataSubject } from '../../../services/subject-implementation'
import { AdditionalModal } from '../../../components/AdditionalModal'
import { Characters } from './sub-components/Characters'
import { Locations } from './sub-components/Locations'
import { Items } from './sub-components/Items'

export const GameCharItemLoc = ({ info }) => {
  const ItemsBof = HOC(Items)
  return (
    <ul className="game-char-item-loc-container">
        <Characters info={info}/>
        <ItemsBof info = {info}/>
        <Locations/>
        <AdditionalModal/>
    </ul>
  )
}

export const HOC = (WrappedComponnet) => {
  return function HOC ({ info }) {
    const addData = () => {
      dataSubject.setSubject(info)
    }
    return (
        <div onClick={addData}>
            <WrappedComponnet info={info}/>
        </div>
    )
  }
}
