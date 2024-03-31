/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import { TrophySubItem } from './TrophySubitem'
import { TrophyModal } from '../../../../components/Modal'
import { useModal } from '../../../../hooks/useModal'

export const TrophyItem = ({ trophyInfo }) => {
  // className={trophyInfo?.achieved || 'not-achieved'}
  const { modalData, setModalData } = useModal()

  return (
    <>
      <tr>
        <td>
          <TrophySubItem
          setModalData={setModalData}
          trophyInfo={trophyInfo}
          isAditionalInfo={false}/>
        </td>
        <td>
          <p className='earned-rate'>{trophyInfo.earnedRate}%</p>
        </td>
      </tr>
        {
          modalData &&
          <TrophyModal setModalData={setModalData}
          trophyInfo={modalData}/>
        }
    </>
  )
}
