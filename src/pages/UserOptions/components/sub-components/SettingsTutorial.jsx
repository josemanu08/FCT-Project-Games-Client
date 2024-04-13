import React from 'react'
import { useParams } from 'react-router-dom'
export const SettingsTutorial = () => {
  const { platform } = useParams()
  return (
        <div className="settings-tutorial-container" style={{ display: 'flex', gap: '1rem' }}>
            {
                platform === 'xbox'
                  ? <XboxTutorial></XboxTutorial>
                  : <PlayTutorial></PlayTutorial>
            }
        </div>
  )
}

export const PlayTutorial = () => {
  return (
        <>
            <img style={{ width: '500px' }} src={'https://wallpapers.com/images/hd/playstation-profile-pictures-1024-x-576-ue42d92fxye0p0ig.jpg'} alt="" />
            <div
            className="tutorial-description"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
                <p style={{ fontSize: 'small' }}>Your Profile Name is on : main menu &gt; profile, but make shure your profile is public, otherwhise I cant acces to your account</p>
                <img style={{
                  width: '150px'
                }} src="https://media.tenor.com/24iuReE89ooAAAAi/sans-mood.gif" alt="" />
            </div>

        </>
  )
}

export const XboxTutorial = () => {
  return (
          <>
              <img style={{ width: '500px' }} src="https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/01/xbox-guide-profile-and-system.jpg" alt="" />
              <div
              className="tutorial-description"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                  <p style={{ fontSize: 'small' }}>Your Profile Name is on Game Pass Main Menu, but make shure your profile is public, otherwhise I cant acces to your account</p>
                  <img style={{
                    width: '150px'
                  }} src="https://media.tenor.com/xb1-WC1x7G0AAAAi/pixel-foot-stomping.gif" alt="" />
              </div>

          </>
  )
}
