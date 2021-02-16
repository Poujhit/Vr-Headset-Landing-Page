import React from 'react';

import { Navbar } from './Navbar';
import Image1 from '../../images/image1.png';

import './Top-Section.css';

function TopSection() {
  return (
    <div className='Top-Section'>
      <Navbar />
      <img src={Image1} className='Image-1' />
      <div className='Top-section-content-right'>
        <text className='Intro'>Introducing</text>
        <br />
        <text className='Intro2'>Our latest VR headset</text>
        <br />
        <br />
        <text className = "Intro3" >
          UNTETHER YOUR EXPECTATIONS EXPLORE AWE-INSPIRING GAMES AND EXPERIENCES WITH UNPARALLELED FREEDOM.
        </text>
      </div>
      <button className = "Intro-button" >Buy Now</button>
    </div>
  );
}

export { TopSection };
