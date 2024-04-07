/* eslint-disable react/prop-types */
import { React } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { useXboxTrophies } from '../../hooks/detailHooks'
import { TitleInfo } from './components/TitleInfo'
import { TitleImages } from './components/TitleImages'
import { Header } from './components/Header'
import { Categories } from './components/Categories'
import { TrophyTable } from './components/TrophyTable'
import { GameCharItemLoc } from './components/GameCharItemLoc'

// import { useDescription } from '../../hooks/useDescription'
export const XboxDetail = () => {
  const params = useParams()
  const { xboxTrophyData } = useXboxTrophies(params)
  return (
    <>
      {
        xboxTrophyData
          ? <div className='detailBody' style={{ backgroundImage: `url("${xboxTrophyData.ti.imgs[1].Uri}")` }}>
                <Header>
                  <TitleImages info = {xboxTrophyData.ti.imgs}></TitleImages>
                  <TitleInfo info={xboxTrophyData.ti}></TitleInfo>
                  <Categories info={xboxTrophyData.ti}></Categories>
                </Header>
                {/* <GameCharItemLoc/> */}
                <TrophyTable info={xboxTrophyData.tr}></TrophyTable>
                <NavLink className='goBack' to='/'>
                  <i className='bx bxs-left-arrow'></i>
                </NavLink>
            </div>
          : 'Waiting'
      }
    </>
  )
}
