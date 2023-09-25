import { faIntercom } from '@fortawesome/free-brands-svg-icons'
import { faBars, faBriefcase, faEnvelope, faHouseChimney, faRightToBracket, faSchool, faShapes, faStar, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Nav = () => {
  return (
    <React.Fragment>
    <div className="nav-continer">
        <div className="nav">
            <div className="nav-btn"><FontAwesomeIcon className='nav-btn-icon' icon={faBars} /></div>
            <div className="nav-bar">
                <div className="nav-bar-icon">
                    <FontAwesomeIcon className='bar-icon' icon={faHouseChimney} />
                </div>
                <div className="nav-bar-icon">
                    <FontAwesomeIcon className='bar-icon' icon={faUser} />
                </div>
                <div className="nav-bar-icon">
                    <FontAwesomeIcon className='bar-icon' icon={faBriefcase} />
                </div>
                <div className="nav-bar-icon">
                    <FontAwesomeIcon className='bar-icon' icon={faSchool} />
                </div>
                <div className="nav-bar-icon">
                    <FontAwesomeIcon className='bar-icon' icon={faShapes} />
                </div>
                <div className="nav-bar-icon">
                    <FontAwesomeIcon className='bar-icon' icon={faIntercom} />
                </div>
                <div className="nav-bar-icon">
                    <FontAwesomeIcon className='bar-icon' icon={faStar} />
                </div>
                <div className="nav-bar-icon">
                    <FontAwesomeIcon className='bar-icon' icon={faEnvelope} />
                </div>
                <div className="nav-bar-icon">
                    <FontAwesomeIcon className='bar-icon' icon={faRightToBracket} />
                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Nav