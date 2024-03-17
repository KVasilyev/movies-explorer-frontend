import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo'
import Navigation from './Navigation/Navigation';
import { Link } from 'react-router-dom';



function Header({ isLogged }) {
  return (
    <header className='header'>
      <div className='header__frame'>
        <Logo />
        {isLogged ? (
        <Navigation />
        ) : (
          <div className='header__auth-links'>
            <Link to='/signup' className='header__auth-link link'>Регистрация</Link>
            <Link to='/signin' className='header__auth-link header__auth-link_black'>Войти</Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header;