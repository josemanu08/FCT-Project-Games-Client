/* eslint-disable react/prop-types */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserSite } from '../pages/userSite'
import { UserOption } from '../pages/userOptions'
import { Aside } from '../components/MainComponents/aside'
import { PlayDetail } from '../components/GameDetailsComponents/playDetail'
import { XboxDetail } from '../components/GameDetailsComponents/xboxDetail'
export const Roots = ({ xbox, play, profileInfo, profileXbox }) => {
  return (
          <Routes>
            <Route end path='/' element= {<Aside></Aside>}>
              <Route path='/' element={<UserSite profileXbox = {profileXbox} profileInfo={profileInfo} xbox={xbox} play={play}/>} ></Route>
              <Route path='/userOptions' element={<UserOption/>}></Route>
            </Route>
              <Route path='/xbl/:gameId/:userId'element={<XboxDetail/>} ></Route>
              <Route path='/psn/:gameId/:userId/:gameName' element={<PlayDetail/>}></Route>
         </Routes>
  )
}
