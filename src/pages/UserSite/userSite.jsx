/* eslint-disable react/prop-types */
import React from 'react'
import { UserInfo } from './components/userInfo'
import { Filter } from './components/filter'
import { Table } from './components/table'
import { GamesBody } from './components/GamesBody'

export const UserSite = () => {
  return (
    <section className='userSite'>
      <UserInfo></UserInfo>
      <Filter></Filter>
      <GamesBody></GamesBody>
      <Table></Table>
    </section>
  )
}
