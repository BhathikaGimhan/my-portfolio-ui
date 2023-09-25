import React from 'react'

const Resume = () => {
  return (
    <React.Fragment>
        <div className="main-body">
            <div className="body w-full">
            <div className="section-name ">Resume</div>
            <div className="container">
                <h1 className='heading'>Education & <samp className='main-color'>Experience</samp></h1><br />
                <div className="section">
                    
                    <div className="list-view">
                        <div className="list">
                            <div className="sub-heading">
                                <h3>Experience</h3>
                            </div>
                            <ul type='disk' className="list-items">
                                <li className='list-item'>
                                    <span className='role main-color'>Full Stack Developer</span>
                                    <div className='company-name'>Future Planet</div>
                                    <div className='date'>Aug 2022 - Present</div>
                                </li>
                                <li className='list-item'>
                                    <span className='role main-color'>Full Stack Developer</span>
                                    <div className='company-name'>CygnusoneSL</div>
                                    <div className='date'>Jul 2020 - Aug 2022</div>
                                </li>
                                <li className='list-item'>
                                    <span className='role main-color'>Full Stack Developer</span>
                                    <div className='company-name'>Freelancer</div>
                                    <div className='date'>2019 - Jul 2020</div>
                                </li>
                            </ul>
                        </div>
                        <div className="list">
                            <div className="sub-heading">
                                <h3>Education</h3>
                            </div>
                            <ul type='disk' className="list-items">
                                <li className='list-item'>
                                    <span className='role main-color'>Bachelor of Information Technology</span>
                                    <div className='company-name'>University of Moratuwa</div>
                                    <div className='date'>undergraduate</div>
                                </li>
                                <li className='list-item'>
                                    <span className='role main-color'>Bachelor of Science in Business Management</span>
                                    <div className='company-name'>Eastern University of Trincomalee Campus</div>
                                    <div className='date'>undergraduate</div>
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

export default Resume