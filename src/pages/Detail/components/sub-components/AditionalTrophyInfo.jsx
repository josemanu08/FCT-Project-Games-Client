/* eslint-disable react/prop-types */
import React from 'react'
import { TrophySubItem } from './TrophySubitem'
import { getRarestTrophies, getFirstTrophy, getLatestTrophy } from '../../../../helpers/helpers'
import { useModal } from '../../../../hooks/useModal'
import { TrophyModal } from '../../../../components/Modal'

export const AditionalTrophyInfo = ({ trophyInfo }) => {
  const { modalData, setModalData } = useModal()
  return (
      <ul className='trophy-detail-aditional-info'>
        <li className='first-trophy'>
          <p>Primer Trofeo</p>
          <TrophySubItem
          setModalData={setModalData}
          trophyInfo={getFirstTrophy(trophyInfo)}
          isAditionalInfo={true}/>
        </li>
        <li className='latest-trophy'>
          <p>Último Trofeo</p>
          <TrophySubItem
          setModalData={setModalData}
          trophyInfo={getLatestTrophy(trophyInfo)}
          isAditionalInfo={true}/>
        </li>
        <ul className="rarest-trophies">
          <p>Trofeos mas raros</p>
          {
            getRarestTrophies(trophyInfo)
              .map(tr => (
                <li key={tr.tId}>
                  <TrophySubItem
                  setModalData={setModalData}
                  trophyInfo={tr}
                  isAditionalInfo={true}/>
                </li>
              ))
          }
        </ul>
        {
          modalData &&
          <TrophyModal setModalData={setModalData}
          trophyInfo={modalData}/>
        }
      </ul>
  )
}
