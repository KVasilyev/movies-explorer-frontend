import React from 'react';
import './Logo.css';
import logo from '../../images/logo.svg';
import { Link, useLocation } from 'react-router-dom';

function Logo() {
  const { pathname } = useLocation();

  return (
    <>
    {pathname === '/' ? (
      <img src={logo} alt='Учебный проект студента факультета Веб-разработки' className='header__logo' />
    ) : ( 
      <Link to='/'><img src={logo} alt='Учебный проект студента факультета Веб-разработки' className='header__logo' /></Link> )
    }
    </>
  )
}

export default Logo;