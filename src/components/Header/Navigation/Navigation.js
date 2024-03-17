import React from 'react';
import './Navigation.css';
import PinkLogo from '../../../images/avatar.svg';
import GrayLogo from '../../../images/avatar-grey.svg';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {

  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Открыть меню
  function openMenuClick() {
    setIsMenuOpen(true);
  }
  // Закрыть меню
  function closeMenuClick() {
    setIsMenuOpen(false);
  }

  return (
    <nav className='navigation'>
      <button className='button navigation__menu-open' onClick={openMenuClick}></button>
      <div className={`navigation__menu ${isMenuOpen ? `navigation__menu_active` : ``}`}>
        <button className='button navigation__menu-close navigation__link-mobile' onClick={closeMenuClick}></button>
        <div className='navigation__links'>
          <Link to='/' onClick={closeMenuClick} className={pathname === '/' ? 'navigation__link link navigation__link-mobile navigation__link_active' : 'navigation__link link navigation__link-mobile'}>Главная</Link>
          <Link to='/movies' onClick={closeMenuClick} className={pathname === '/movies' ? 'navigation__link link navigation__link_active' : 'navigation__link link'}>Фильмы</Link>
          <Link to='/saved-movies' onClick={closeMenuClick} className={pathname === '/saved-movies' ? 'navigation__link link navigation__link_active' : 'navigation__link link'}>Сохраненные фильмы</Link>
        </div>
        <Link to='/profile' className='navigation__account'>
          Контснатин
          <img src={pathname === '/' ? PinkLogo : GrayLogo} className='navigation__account-logo-desktop' alt='Аккаунт' />
          <div className='navigation__account-logo'></div>
        </Link>
      </div>
      <div className={`navigation__overlay ${isMenuOpen ? `navigation__overlay-active` : ``}`} />
    </nav>
  )
}

export default Navigation;