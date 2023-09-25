import gsap from 'gsap';
import React, { useEffect } from 'react'

const About = () => {
  useEffect(() => {
    gsap.from(".container", { opacity: 0, x: 500,y:500, duration: 1, scale: 0.5});
    gsap.to(".container", { opacity: 1, x: 0, y:0, duration: 1, scale: 1});
  }, []);
  return (
    <React.Fragment>
        <div className="main-body">
            <div className="body">
            <div className="section-name">About</div>
            <div className="container">
                <h1 className='heading'>Every great design begin with an even <samp className='main-color'>Better Story</samp></h1><br />
                <div className="section">
                    <p className='main-para'>Since beginning my journey as a freelance designer nearly 3 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chopsone design problem at a time.</p>
                </div>
            </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default About