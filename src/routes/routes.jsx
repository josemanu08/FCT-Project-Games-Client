/* eslint-disable react/prop-types */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserSite } from '../pages/UserSite/userSite'
import { UserOption } from '../pages/UserOptions/userOptions'
import { Aside } from '../layouts/aside'
import { PlayDetail } from '../pages/Detail/playDetail'
import { XboxDetail } from '../pages/Detail/xboxDetail'
export const Roots = ({ play, profileInfo }) => {
  return (
          <Routes>
            <Route end path='/' element= {<Aside></Aside>}>
              <Route path='/' element={<UserSite profileInfo={profileInfo} play={play}/>} ></Route>
              <Route path='/userOptions' element={<UserOption/>}></Route>
            </Route>
              <Route path='/xbl/:gameId/:userId'element={<XboxDetail/>} ></Route>
              <Route path='/psn/:gameId/:userId/:gameName' element={<PlayDetail/>}></Route>
         </Routes>
  )
}
