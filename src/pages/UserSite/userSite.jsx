/* eslint-disable react/prop-types */
import React from 'react'
import { UserInfo } from './components/userInfo'
import { Filter } from './components/filter'
import { Table } from './components/table'
import { Header } from './components/Header'

export const UserSite = ({ xbox, play, profileInfo, profileXbox }) => {
  return (
    <section className='userSite'>
      <UserInfo profileXbox = {profileXbox} profileInfo={profileInfo}></UserInfo>
      <Filter></Filter>
      <Table xbox={xbox} play={play}></Table>
    </section>
  )
}
