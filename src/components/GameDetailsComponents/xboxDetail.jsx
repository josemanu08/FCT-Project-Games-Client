/* eslint-disable react/prop-types */
import { React, useEffect, useRef, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { useXboxTrophies } from '../../hooks/detailHooks'

// import { useDescription } from '../../hooks/useDescription'

export const TitleInfo = ({ info }) => {
  // const { descState, handleClick } = useDescription({ info })

  return (
    <section style={{ position: 'relative' }} className='titleInfoContainer'>
     <h2 className='titleName'>{info.name}</h2>
      <ul className='detailsHeaderSection'>
        <li>
          <ul className='gameInfo'>
            <li>
              <span className='infoName'>Created By </span>
              <p className='info'>{info.developerName}</p>
            </li>
            <li>
              <span className='infoName'>Date </span>
              <p className='info'>{(new Date(info.releaseDate).toLocaleDateString())}</p>
            </li>
            <li>
              <span className='infoName'>Price </span>
              <p className='info'>{(info.price)}</p>
            </li>
          </ul>
        </li>
        <li className={'xboxTitleDescription '}>
          <p className='infoName'>{info.shortDescription}</p>
            {/* }<button className='open-close-desc' onClick={}><i className='bx bx-sm bx-chevron-down'></i></button>{ */}
        </li>
      </ul>
      <button type='button'><a target='_blank' href={`${info.website}`} rel="noreferrer">Website</a></button>
    </section>
  )
}

export const TitleImages = ({ info }) => {
  const [index, setIndex] = useState(0)
  const imgRef = useRef()

  useEffect(() => {
    // const img = imgRef.current.children[index]
    const img = document.querySelectorAll('img')[index]
    img.scrollIntoView()
  }, [index])

  const changeImage = (step) => {
    if (step === 'next') {
      const isLastImage = index === info.lenth - 1
      setIndex(isLastImage ? info.length - 1 : index + 1)
    } else {
      const isFistImage = index === 0
      setIndex(isFistImage ? 0 : index - 1)
    }
  }

  return (
    <section className='titleImageContainer'>
      <div ref={imgRef} className="images">
        {
          Array.from(new Set(info)).map((img, index) => {
            return <img width='400px' key={index} src={`${img.Uri}`} alt="" />
          })
        }
      </div>
      <button onClick={() => changeImage('next')} className='nextImage'>
        <i className='bx bx-sm bxs-right-arrow'></i>
      </button>
      <button onClick={() => changeImage('prev')} className='prevImage'>
        <i className='bx bx-sm bxs-left-arrow' ></i>
      </button>
    </section>
  )
}

export const Categories = ({ info }) => {
  return (
      <ul className='categories'>
      {
        info.categories.map((cat, index) => {
          return <li key={index}>{cat}</li>
        })
      }
    </ul>
  )
}

export const Header = ({ children }) => {
  return (
  <header className='detailsHeader'>
    {children}
  </header>
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
                  <NavLink className='goBack' to='/'><i className='bx bxs-left-arrow'></i></NavLink>
              </div>
            : 'Waiting'
        }
    </>
  )
}
