import React from 'react';

import { Navbar } from './Navbar';
import Image1 from '../../images/image1.png';
import Image2 from '../../images/image2.png';
import Image3 from '../../images/image3.png';
import Image4 from '../../images/image4.png';
import Image5 from '../../images/image5.png';

import './Top-Section.css';

function TopSection() {
  return (
    <div className='Top-Section'>
      <Navbar />
      <img src={Image1} className='Image-1' />
      <div className='Top-section-content-left'>
        <text className='Intro'>Introducing</text>
        <br />
        <text className='Intro2'>Our latest VR headset</text>
        <br />
        <br />
        <text className='Intro3'>
          UNTETHER YOUR EXPECTATIONS EXPLORE AWE-INSPIRING GAMES AND EXPERIENCES
          WITH UNPARALLELED FREEDOM.
        </text>
      </div>
      <button className='Intro-button'>Buy Now</button>
      <div className='Top-section-content-right'>
        <img src={Image2} className='Image-2' />
        <img src={Image3} className='Image-3' />
        <img src={Image4} className='Image-4' />
        <img src={Image5} className='Image-5' />
      </div>
    </div>
  );
}

export { TopSection };
