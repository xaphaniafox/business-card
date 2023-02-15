import { useState } from 'react'
import './App.css'
import Info from './components/Info'
import About from './components/About'
import Interests from './components/Interests'

function App() {
  return (
    <div className="App">
      <Info />
      <div className='container'>
        <About />
        <Interests />
      </div>
    </div>
  )
}

export default App
