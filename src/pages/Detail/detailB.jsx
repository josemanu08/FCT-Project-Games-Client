import React from 'react'
import { TitleImagesB } from './componentsB/TitleImagesB'
import { TitleImagesModal } from './componentsB/TitleImagesModal'
import { HeaderDetails } from './detailBcomponents/HeaderDetails'
import { useLocation, useParams } from 'react-router-dom'
import { useTrophyData } from '../../hooks/detailHooks'
import { mapPlayImages } from '../../helpers/helpers'

export const DetailsB = () => {
  const location = useLocation()
  const platform = location.pathname.split('/')[1]
  const params = useParams()
  const { isLoading, trophyData } = useTrophyData(params, location.pathname)
  return (
    !trophyData && isLoading
      ? '🐱'
      : (
        <>
        <div className="detail-view-container"
        style={{ backgroundImage: `url("${trophyData.gi.background_image}")` }}>
            <div style={{ color: 'white' }} className="detail-header-section">
                <section className="first-details-header-section">
                    <TitleImagesB images={
                        platform === 'psn'
                          ? mapPlayImages(trophyData.gi.background_image, trophyData.gi.screen_shots)
                          : trophyData.ti.imgs
                    }/>
                    <HeaderDetails gameInfo={trophyData}/>
                </section>
                <section className="last-details-header-section">

                </section>
            </div>
            {/* CONTENIDO VA AQUÍ 😻😻😻 */}
        </div>
          <div className="linear-gradient-details-section">

          </div>
          <TitleImagesModal/>
        </>
        )
  )
}
