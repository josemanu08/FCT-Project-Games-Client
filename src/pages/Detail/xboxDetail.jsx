/* eslint-disable react/prop-types */
import { React } from 'react'
import { useParams, NavLink, useLocation } from 'react-router-dom'
import { useXboxTrophies, useTrophyData } from '../../hooks/detailHooks'

import { TitleInfo } from './components/TitleInfo'
import { TitleImages } from './components/TitleImages'
import { Header } from './components/Header'
import { Categories } from './components/Categories'
import { TrophyTable } from './components/TrophyTable'
import { GameCharItemLoc } from './components/GameCharItemLoc'
import { TitleImagesB } from './componentsB/TitleImagesB'
import { TitleImagesModal } from './componentsB/TitleImagesModal'
import { HeaderDetails } from './detailBcomponents/HeaderDetails'

// import { useDescription } from '../../hooks/useDescription'
export const XboxDetail = () => {
  const location = useLocation()
  const params = useParams()
  const { trophyData, isLoading } = useTrophyData(params, location.pathname)
  return (
    <>
      {
        trophyData && !isLoading
          ? <div className='detailBody' style={{ backgroundImage: `url("${trophyData.ti.imgs[1].Uri}")` }}>
                <Header>
                  <TitleImagesB images={trophyData.ti.imgs}></TitleImagesB>
                  {/* <TitleImages info = {xboxTrophyData.ti.imgs}></TitleImages> */}
                  <TitleInfo info={trophyData.ti}></TitleInfo>
                  <Categories info={trophyData.ti}></Categories>
                </Header>
                {/* <GameCharItemLoc/> */}
                <TrophyTable info={trophyData.tr}></TrophyTable>
                <NavLink className='goBack' to='/'>
                  <i className='bx bxs-left-arrow'></i>
                </NavLink>
            </div>
          : 'Waiting'
      }
      <TitleImagesModal/>
    </>
  )
}
