/* eslint-disable react/prop-types */
import React from 'react'
import { UserInfo } from './components/userInfo'
import { Filter } from './components/filter'
import { Table } from './components/table'

export const UserSite = ({ play, profileInfo }) => {
  return (
    <section className='userSite'>
      <UserInfo profileInfo={profileInfo}></UserInfo>
      <Filter></Filter>
      <Table play={play}></Table>
    </section>
  )
}
