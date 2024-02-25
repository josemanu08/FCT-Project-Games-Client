import { React } from 'react'
import { Aside, Roots } from './components/mainComponents'
import { BrowserRouter } from 'react-router-dom'

function App () {
  return (
    <BrowserRouter>
      <div className='container'>
        <Aside/>
        <Roots/>
      </div>
    </BrowserRouter>
  )
}

export default App
