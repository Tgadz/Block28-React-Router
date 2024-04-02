import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Red from './components/Red'
import Blue from './components/Blue'
import Home from './components/Home'
import Green from './components/Green'

function App() {

  return (
    <div id="container">
      <div id="navbar">
        <Link to='/home'>Home</Link>
        <Link to='/blue'>Blue</Link>
        <Link to='/red'>Red</Link>
        <Link to='/green'>Green</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path='/blue' element={<Blue />} />
          <Route path='/red' element={<Red />} />
          <Route path='/home' element={<Home />} />
          <Route path='/green' element={<Green />} />
        </Routes>
      </div>
      <div id='footer'>
        <Link to='/home'>Home</Link>
        <Link to='/blue'>Blue</Link>
        <Link to='/red'>Red</Link>
        <Link to='/green'>Green</Link>
      </div>
    </div>
  )
}

export default App
