/* eslint-disable react/prop-types */
import React from 'react'
import { UserInfo } from '../SectionComponents/userInfo'
import { Filter } from '../SectionComponents/filter'
import { Table } from '../SectionComponents/table'

export const UserSite = ({ xbox, play, profileInfo, profileXbox }) => {
  return (
    <section className='userSite'>
      <UserInfo profileXbox = {profileXbox} profileInfo={profileInfo}></UserInfo>
      <Filter></Filter>
      <Table xbox={xbox} play={play}></Table>
    </section>
  )
}
