import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedinIn, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';


const Card = () => {
  return (
    <React.Fragment>
      <div className="right-card h-screen flex flex-col m-auto justify-center items-start">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title text-white">Bhathika.</h5>
            <h5 className='card-right-title'>Web Designer & <br />Developer</h5>
            <div className="plate">
              <img className='image' src="/images/me.jpeg" alt='' />
            </div>
            <div className="card-containt">I am a Software and Web Developer</div>
            <div className="copy-right">© 2023 Bhathika. All Rights Reserved</div>
            <div className="card-link">
              <div className="link-plate">
                <a className='icon' href="https://www.linkedin.com/in/bhathika-gimhan/" target='_blank'>
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
              <div className="link-plate">
                <a className='icon' href="https://web.facebook.com/bhathika.gimhan.14/" target='_blank'>
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </div>
              <div className="link-plate">
                <a className='icon'  href="https://github.com/BhathikaGimhan" target='_blank'>
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
              <div className="link-plate">
                <a className='icon'  href="https://stackoverflow.com/users/14588298/bhathika" target='_blank'>
                  <FontAwesomeIcon icon={faStackOverflow} />
                </a>
              </div>
            </div>
            <div className="contact">
              <button><FontAwesomeIcon icon={faEnvelope} /> Contact Me</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Card;
