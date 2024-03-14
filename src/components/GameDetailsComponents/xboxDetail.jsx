/* eslint-disable react/prop-types */
import { React } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { useXboxTrophies } from '../../hooks/detailHooks'
import { TitleInfo } from './TitleInfo'
import { TitleImages } from './TitleImages'
import { Header } from './Header'
import { Categories } from './Categories'
import { TrophyTable } from './TrophyRableComponents/TrophyTable'

// import { useDescription } from '../../hooks/useDescription'
export const XboxDetail = () => {
  const params = useParams()
  const { xboxTrophyData } = useXboxTrophies(params)
  return (
    <>
      {
        xboxTrophyData
          ? <div className='detailBody'>
                <Header>
                  <TitleImages info = {xboxTrophyData.ti.imgs}></TitleImages>
                  <TitleInfo info={xboxTrophyData.ti}></TitleInfo>
                  <Categories info={xboxTrophyData.ti}></Categories>
                </Header>
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
