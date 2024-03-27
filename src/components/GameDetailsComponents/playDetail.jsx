import { React } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { useTrophies, useXboxTrophies } from '../../hooks/detailHooks'
import { mapPlayImages, mapTitleInfo, mapCategories } from '../../helpers/helpers'

import { TitleInfo } from './TitleInfo'
import { TitleImages } from './TitleImages'
import { Header } from './Header'
import { Categories } from './Categories'
import { TrophyTable } from './TrophyRableComponents/TrophyTable'
import { GameCharItemLoc } from './TrophyRableComponents/GameCharItemLoc'

export const PlayDetail = () => {
  const params = useParams()
  const { trophyData } = useTrophies(params)
  return (
    <>
    {
    trophyData
      ? <div className='detailBody bodyPlayStation' style={{ backgroundImage: `url("${trophyData.gi.background_image_additional}")` }}>
          <Header>
            <TitleImages
            info={
              mapPlayImages(trophyData.gi.background_image, trophyData.gi.screen_shots)}
            />
            <TitleInfo info={mapTitleInfo(trophyData.gi)}></TitleInfo>
            <Categories
            className={'playStationCategories'}
            info={mapCategories(trophyData.gi.genres)}
            />
          </Header>
          <GameCharItemLoc info={trophyData.additional}/>
          <TrophyTable info={trophyData.ti}></TrophyTable>
          <NavLink className='goBack goBackPlayStation' to='/'>
            <i className='bx bxs-left-arrow'/>
          </NavLink>
        </div>
      : 'Loading...'
      }
    </>
  )
}
