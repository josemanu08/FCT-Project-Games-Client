import { React } from 'react'
import { Roots } from './routes/routes'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './pages/UserSite/components/Header'
import { usePlayStationUserData, useXboxUserData } from './hooks/hooks'
import { ToastContainer } from 'react-toastify'

function App () {
  useXboxUserData()
  usePlayStationUserData()
  return (
    <BrowserRouter>
      <div className='container' style={{ width: '100%' }}>
        <Header></Header>
        <div className="flex-container"style={{ display: 'flex', width: '100%' }}>
          <Roots/>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </BrowserRouter>
  )
}

export default App
