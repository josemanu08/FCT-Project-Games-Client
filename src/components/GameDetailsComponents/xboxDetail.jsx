/* eslint-disable react/prop-types */
import { React } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { useXboxTrophies } from '../../hooks/detailHooks'
import { TitleInfo } from './TitleInfo'
import { TitleImages } from './TitleImages'
import { Header } from './Header'
import { Categories } from './Categories'

// import { useDescription } from '../../hooks/useDescription'

export const TrophyItem = ({ trophyInfo }) => {
  return (
    <tr className={trophyInfo?.achieved || 'not-achieved'}>
      <td>
        <div className="main-trophy-info">
          <img loading='lazy' className='trophy-icon' src={`${trophyInfo.icon}`} alt={`${trophyInfo.icon}`} />
          <p className='description'>{trophyInfo.detail}</p>
        </div>
        <div className='date-trophy-info'>{(new Date(trophyInfo.date)).toLocaleDateString()}</div>
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

      </li>
      <li className='latest-trophy'>

      </li>
      <ul className="rarest-trophies">

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
              info.map((tr) => <TrophyItem key={tr.tId} trophyInfo={tr} />)
            }
        </tbody>
      </table>
    </section>
  )
}

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
                  <NavLink className='goBack' to='/'><i className='bx bxs-left-arrow'></i></NavLink>
              </div>
            : 'Waiting'
        }
    </>
  )
}
