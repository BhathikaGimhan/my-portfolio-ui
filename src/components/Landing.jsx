import React, {} from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Service from './pages/Service'
import Skill from './pages/Skill'
import gsap from 'gsap'
// import './style.css'

const Landing = () => {
  return (
    <React.Fragment>
      <div className="body-container">
        <Home />
        <About />
        <Resume />
        <Service />
        <Skill />
      </div>
    </React.Fragment>
  )
}

export default Landing