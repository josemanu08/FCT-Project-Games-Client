import { React } from 'react'
import { Roots } from './routes/routes'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './pages/UserSite/components/Header'
import { usePlayStationUserData, useXboxUserData } from './hooks/hooks'

function App () {
  useXboxUserData()
  usePlayStationUserData()
  return (
    <BrowserRouter>
      <div className='container'>
        <Header></Header>
        <div className="flex-container"style={{ display: 'flex', width: '100%' }}>
          <Roots/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
