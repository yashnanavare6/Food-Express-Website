import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import { About } from './component/About'
import { Navbar } from './component/Navbar'
import { Home } from './component/Home'
import { Contact } from './component/Contact'
import { Menu } from './component/Menu'
function App() {
  

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </div>
  )
}

export default App
