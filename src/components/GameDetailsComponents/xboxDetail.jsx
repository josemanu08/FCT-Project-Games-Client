/* eslint-disable react/prop-types */
import { React } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { useXboxTrophies } from '../../hooks/detailHooks'
import { TitleInfo } from './TitleInfo'
import { TitleImages } from './TitleImages'
import { Header } from './Header'
import { Categories } from './Categories'
import { LazyLoadComponent, LazyLoadImage } from 'react-lazy-load-image-component'

// import { useDescription } from '../../hooks/useDescription'
import { getFirstTrophy, getLatestTrophy, getRarestTrophies } from '../../scripts/helpers'

export const TrophySubItem = ({ trophyInfo }) => {
  return (
    <>
      <div className="main-trophy-info">
         { }<LazyLoadImage style={{ objectFit: 'cover', borderRadius: '100px' }} src={`${trophyInfo?.icon}`} height='60' width='60'>
         </LazyLoadImage>{ }
          <section className='trophy-desc-name'>
            <p className='trophy-name'>{trophyInfo?.name}</p>
            <p className='trophy-description'>{trophyInfo?.detail}</p>
          </section>
        </div>
        <div className='date-trophy-info'>
          {
            trophyInfo?.achieved && (new Date(trophyInfo?.date)).toLocaleDateString()
          }
        </div>
    </>
  )
}

export const TrophyItem = ({ trophyInfo }) => {
  return (
    <tr className={trophyInfo?.achieved || 'not-achieved'}>
      <td>
        <TrophySubItem trophyInfo={trophyInfo}></TrophySubItem>
      </td>
      <td>
        <p className='earned-rate'>{trophyInfo.earnedRate}%</p>
      </td>
    </tr>
  )
}

export const AditionalTrophyInfo = ({ trophyInfo }) => {
  return (
    <ul className='trophy-detail-aditional-info'>
      <li className='first-trophy'>
        <p>Primer Trofeo</p>
        <TrophySubItem trophyInfo={getFirstTrophy(trophyInfo)}></TrophySubItem>
      </li>
      <li className='latest-trophy'>
        <p>Último Trofeo</p>
        <TrophySubItem trophyInfo={getLatestTrophy(trophyInfo)}></TrophySubItem>
      </li>
      <ul className="rarest-trophies">
        <p>Trofeos mas raros</p>
        {
          getRarestTrophies(trophyInfo)
            .map(tr => (
              <li key={tr.tId}>
                <TrophySubItem trophyInfo={tr}></TrophySubItem>
              </li>
            ))
        }
      </ul>
    </ul>
  )
}

export const TrophyTable = ({ info }) => {
  return (
    <section className='trophy-detail-container'>
      <AditionalTrophyInfo trophyInfo={info}/>
      <table className='trophy-detail-table' border={1}>
        <tbody>
            {
              info.map((tr) => (
                <LazyLoadComponent
                key={tr.tId}
                >
                   <TrophyItem trophyInfo={tr} />
                </LazyLoadComponent>
              ))
            }
        </tbody>
      </table>
    </section>
  )
}

export const XboxDetail = () => {
  console.log('me Renderizo')
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
                  <NavLink className='goBack' to='/'><i className='bx bxs-left-arrow'></i></NavLink>
              </div>
            : 'Waiting'
        }
    </>
  )
}
