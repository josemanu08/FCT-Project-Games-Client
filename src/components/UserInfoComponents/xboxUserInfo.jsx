/* eslint-disable react/prop-types */
import React from 'react'

export const XboxUserInfo = ({ xboxProfileInfo }) => {
  return (
          <>
              {
                  !xboxProfileInfo
                    ? 'Waiting...'
                    : <ul className='XboxUserInfo'>
                  <li>
                      <img src={xboxProfileInfo.icon} alt="" />
                      {xboxProfileInfo.username}
                  </li>
                  <ul>
                      <li>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1024px-Xbox_one_logo.svg.png" alt="" />
                          <p style={{ color: 'green' }}>{xboxProfileInfo.gamerScore}</p>
                      </li>
                      <li>
                      <i className='bx bx-md bxs-medal' ></i>
                          {xboxProfileInfo.tier}
                      </li>
                      <li>
                          <i className='bx bx-md bxs-trophy'></i>
                          {xboxProfileInfo.total}
                      </li>
                  </ul>
              </ul>
              }
          </>
  )
}
