import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { gsap } from "gsap";
import { TextPlugin } from 'gsap/TextPlugin'; // Import TextPlugin

gsap.registerPlugin(TextPlugin); 

const role = ["Software Developer", "Web Developer", "Full Stack Developer", "UI/UX Designer"];

const Home = () => {
  useEffect(() => {
    gsap.to(".curser-point", { opacity: 0, repeat: -1, yoyo: true, duration: 0.5, ease: "none" });
    let tlMaster = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    role.forEach((item) => {
      let duration = item.length / 10;
      let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: duration});
      tl.to("#animete-text", { duration: duration, delay:0.2, text: { value: item, delimiter: "" } }); 
      tlMaster.add(tl);
    });
  }, []);
  return (
    <React.Fragment>
      <div className="main-body">
        <div className="body">
        <div className="section-name">Home</div>
          <div className="container">
            <h1 className='heading'>Say Hi from <samp className='main-color'>Bhathika Gimhan</samp>,<br /> <span id="animete-text"></span><span className='curser-point'>_</span></h1><br />
            <div className="section">
              <p className='para'>Highly motivated and experienced software engineer with 3 years of experience in developing and maintaining software applications, seeking a challenging role in a dynamic organization where I can utilize my technical skills and experience to contribute to the development and success of the company</p>
              <div className="scroll-project right-8 relative">
                <img className='scroll-png' src="/images/scroll.png" alt="" />
                <FontAwesomeIcon className='scroll-icon' icon={faArrowDown} />
              </div>
            </div>
            <div className="exp">
              <div className="exp-section">
                <h1 className='number'>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
              </div>
              <div className="exp-section">
                <h1 className='number'>28+</h1>
                <p>PROJECTS COMPLETED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Home