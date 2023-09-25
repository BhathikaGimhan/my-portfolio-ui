import React, { useEffect } from 'react';
import gsap from 'gsap';
import Card from '../components/tools/Card';
import Nav from '../components/tools/Nav';
import './style.css';
import Landing from '../components/Landing';

const Main = () => {
  
  useEffect(() => {
    const plate = document.querySelector('.card');
    const nav = document.querySelector('.nav-bar');
    
    gsap.from([plate,nav], {
      y: -700,
      ease: 'bounce.out',
      scale: 2.5,
      opacity: 0,
    });
    setTimeout(() => {
      gsap.to([plate,nav], {
        y: 0,
        ease: 'bounce.out',
        scale: 1,
        opacity: 1,
        duration: 1.2,
      });
    }, 10);
  }, []);

  return (
    <React.Fragment>
      <div className="main h-screen flex">
        <Card />
        <Landing />
        <Nav />
      </div>
    </React.Fragment>
  );
};

export default Main;
