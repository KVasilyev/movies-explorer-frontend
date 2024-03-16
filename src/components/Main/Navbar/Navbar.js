import React from 'react';
import './Navbar.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {
  return (
    <section className='navbar'>
      <div className='navbar__frame'>
        <AnchorLink href='#project' className='navbar__link'>О проекте</AnchorLink>
        <AnchorLink href='#technology' className='navbar__link'>Технологии</AnchorLink>
        <AnchorLink href='#about' className='navbar__link'>Студент</AnchorLink>
      </div>
    </section>
  )
}

export default Navbar;