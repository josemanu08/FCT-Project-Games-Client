/* eslint-disable react/prop-types */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserSite } from './userSite'
import { UserOption } from './userOptions'

export const Roots = ({ xbox, play, profileInfo, profileXbox }) => {
  return (
          <Routes>
              <Route path='/' element={<UserSite profileXbox = {profileXbox} profileInfo={profileInfo} xbox={xbox} play={play}/>} ></Route>
              <Route path='/userOptions' element={<UserOption/>}></Route>
          </Routes>
  )
}
