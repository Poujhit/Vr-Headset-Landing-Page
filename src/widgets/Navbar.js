import React from 'react';

import Logo from '../images/headset.png';

import { Link } from 'react-scroll';

import '../components/Top-Section/Top-Section.css';

function Navbar() {
  return (
    <div className='Navbar'>
      <img className='Logo' src={Logo} alt='My logo' />
      <Link
        activeClass='active'
        to='Home'
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className='NavbarText'
      >
        Home
      </Link>
      <Link
        activeClass='active'
        to='Features'
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className='NavbarText'
      >
        Features
      </Link>
      <Link
        activeClass='active'
        to='Subscribe'
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className='NavbarText'
      >
        Subscribe
      </Link>
    </div>
  );
}

export { Navbar };
