import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__frame'>  
          Учебный проект Яндекс.Практикум х BeatFilm.
          <div className="footer__bottom">
            © 2020
            <div className="footer__links">
              <Link className='footer__link link' to='https://practicum.yandex.ru' target='_blank'>Яндекс.Практикум</Link>
              <Link className='footer__link link' to='https://github.com/KVasilyev' target='_blank'>GitHub</Link>
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer;