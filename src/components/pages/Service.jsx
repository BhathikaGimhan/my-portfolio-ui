import { faFigma, faUncharted } from '@fortawesome/free-brands-svg-icons'
import { faCode, faNetworkWired } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Service = () => {
  return (
    <React.Fragment>
        <div className="main-body">
            <div className="body">
            <div className="section-name">Service</div>
            <div className="container">
                <h1 className='heading'>My <samp className='main-color'>Specializations</samp></h1><br />
                <div className="section">
                <div className="list-view">
                        <div className="list">
                            <ul type='disk' className="list-items">
                                <li className='list-item'>
                                    <span className='role main-color'>Web Development</span>
                                    <div className='company-name'>I build website Using Framework: Laravel, React, Angular, Node JS, etc..</div>
                                    <div className='text-blue-400 animate-pulse'><FontAwesomeIcon className='text-[30px]' icon={faCode} /></div>
                                </li>
                            </ul>
                        </div>
                        <div className="list">
                            <ul type='disk' className="list-items">
                                <li className='list-item'>
                                    <span className='role main-color'>Mobile App & Software Development</span>
                                    <div className='company-name'>I build Software using Electon JS, C#, React-Native, Java..</div>
                                    <div className='text-blue-400 animate-pulse'><FontAwesomeIcon className='text-[40px]' icon={faUncharted} /></div>
                                </li>
                            </ul>
                        </div>
                        <div className="list">
                            <ul type='disk' className="list-items">
                                <li className='list-item'>
                                    <span className='role main-color'>Website Design</span>
                                    <div className='company-name'>I created digital products with unique ideas use Figma</div>
                                    <div className='text-blue-400 animate-pulse'><FontAwesomeIcon className='text-[40px]' icon={faFigma} /></div>
                                </li>
                            </ul>
                        </div>
                        <div className="list">
                            <ul type='disk' className="list-items">
                                <li className='list-item'>
                                    <span className='role main-color'>SEO/Marketing</span>
                                    <div className='company-name'>Increase the traffic for your website with SEO optimized</div>
                                    <div className='text-blue-400 animate-pulse font-[100]'><FontAwesomeIcon className='text-[30px]' icon={faNetworkWired} /></div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Service