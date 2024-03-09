/* eslint-disable react/prop-types */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserSite } from './userSite'
import { UserOption } from './userOptions'
import { Aside } from './aside'
import { PlayDetail } from '../GameDetailsComponents/playDetail'
import { XboxDetail } from '../GameDetailsComponents/xboxDetail'
export const Roots = ({ xbox, play, profileInfo, profileXbox }) => {
  return (
          <Routes>
            <Route end path='/' element= {<Aside></Aside>}>
              <Route path='/' element={<UserSite profileXbox = {profileXbox} profileInfo={profileInfo} xbox={xbox} play={play}/>} ></Route>
              <Route path='/userOptions' element={<UserOption/>}></Route>
              <Route path='/xbl/:gameId/:userId'element={<XboxDetail/>} ></Route>
              <Route path='/psn/:gameId/:userId/:gameName' element={<PlayDetail/>}></Route>
            </Route>
         </Routes>
  )
}
