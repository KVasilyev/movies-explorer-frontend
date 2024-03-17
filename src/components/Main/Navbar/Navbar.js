import React from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__frame'>
        <AnchorLink href='#project' className='navbar__link link'>О проекте</AnchorLink>
        <AnchorLink href='#technology' className='navbar__link link'>Технологии</AnchorLink>
        <AnchorLink href='#about' className='navbar__link link'>Студент</AnchorLink>
      </div>
    </nav>
  )
}

export default Navbar;