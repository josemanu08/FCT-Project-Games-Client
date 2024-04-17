/* eslint-disable react/prop-types */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { UserSite } from '../pages/UserSite/userSite'
import { Aside } from '../layouts/aside'
import { PlayDetail } from '../pages/Detail/playDetail'
import { XboxDetail } from '../pages/Detail/xboxDetail'
import { UserOptionsB } from '../pages/UserOptions/userOptionsB'
import { ConnectForm } from '../pages/UserOptions/components/ConnectForm'
import { DetailsB } from '../pages/Detail/detailB'

export const Roots = ({ play, profileInfo }) => {
  return (
          <Routes>
            <Route path='/' element= {<Aside></Aside>}>
              <Route path='/' element={<UserSite/>} ></Route>
              <Route path='/userOptions' element={<UserOptionsB/>}></Route>
              <Route path='/connectForm/:platform' element={<ConnectForm></ConnectForm>}></Route>
            </Route>
              <Route path='/xbl/:gameId/:userId/:gameName'element={<DetailsB/>} ></Route>
              <Route path='/psn/:gameId/:userId/:gameName' element={<DetailsB/>}></Route>
         </Routes>
  )
}
