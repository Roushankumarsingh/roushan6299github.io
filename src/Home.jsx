import React from 'react'
import Navbar from '../components/Navbar'
import Intro from '../components/intro/intro'
import Skills from '../components/skills/Skills'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Contact/Footer/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
