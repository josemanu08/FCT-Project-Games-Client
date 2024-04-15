import { React } from 'react'
import { Roots } from './routes/routes'
import { BrowserRouter } from 'react-router-dom'
import { usePlayStationUserData, useXboxUserData } from './hooks/hooks'
import { ToastContainer } from 'react-toastify'

function App () {
  useXboxUserData()
  usePlayStationUserData()
  return (
    <BrowserRouter>
      <Roots/>
      <ToastContainer></ToastContainer>
    </BrowserRouter>
  )
}

export default App
