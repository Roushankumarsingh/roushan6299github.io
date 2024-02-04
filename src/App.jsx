import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from '../components/Navbar'
import { BrowserRouter } from 'react-router-dom' 
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Intro from '../components/intro/intro'
import Skills from '../components/skills/Skills'
import Footer from '../components/Contact/Footer/Footer'
import Home from './Home'
import About from "./About.jsx"
import Contacting from './Contacting.jsx'
import TechSkills from './TechSkills.jsx'
import ProjectAll from './ProjectAll.jsx'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contacting />} />
      <Route path="/skills" element={<TechSkills />} />
      <Route path="/project" element={<ProjectAll />} />
    </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
