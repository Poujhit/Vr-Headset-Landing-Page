import React from 'react';

import Logo from '../../images/headset.png';

import './Top-Section.css';

function NavbarTextContents() {
  return ['Home', 'Features', 'Explore', 'Contact'].map((eachElement) => {
    return (
      <a href className='NavbarText'>
        {eachElement}
      </a>
    );
  });
}

function Navbar() {
  return (
    <div className='Navbar'>
      <img className='Logo' src={Logo} alt='My logo' />

      <NavbarTextContents />

      <img src="https://img.icons8.com/android/24/ffffff/more.png" alt = "more_vert" className = "More-vert" />

    </div>
  );
}

export { Navbar };
