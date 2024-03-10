import { React } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { useTrophies, useXboxTrophies } from '../../hooks/detailHooks'
import { mapPlayImages, mapTitleInfo, mapCategories } from '../../scripts/helpers'

import { TitleInfo } from './TitleInfo'
import { TitleImages } from './TitleImages'
import { Header } from './Header'
import { Categories } from './Categories'

export const PlayDetail = () => {
  const params = useParams()
  const { trophyData } = useTrophies(params)
  return (
    <>
    {
    trophyData
      ? <div className='detailBody bodyPlayStation'>
      <Header>
        <TitleImages info={mapPlayImages(trophyData.gi.results.image, trophyData.gi.results.images)}></TitleImages>
        <TitleInfo info={mapTitleInfo(trophyData.gi.results)}></TitleInfo>
        <Categories className={'playStationCategories'} info={mapCategories(trophyData.gi.results.genres)}></Categories>
      </Header>
    <NavLink className='goBack goBackPlayStation' to='/'><i className='bx bxs-left-arrow'/></NavLink>
    </div>
      : 'Loading...'
      }
    </>
  )
}
