import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import "./index.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import Game from './components/Game/Game.jsx'
function App() {


  return (
    <>
    <Router>
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
    </Routes>
  </Router>
    </>
  )
}

export default App
