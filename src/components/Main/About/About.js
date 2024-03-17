import React from 'react';
import './About.css';
import photo from '../../../images/avatar.jpg'
import { Link } from 'react-router-dom';
import Site from './Sites/Site'

import { projectsLink } from '../../../utils/constants.js';

function About() {
  return (
    <section className='about' id='about'>
      <div className='about__frame'>
        <h2 className='about__headline'>Студент</h2>
        <div className='about__info'>
          <div className='about__texts'>
            <div className='about__text'>
              <h3 className='about__name'>Константин</h3>
              <span className='about__specialty'>Фронтенд-разработчик и продуктовый дизайнер, 36 лет</span>
              Я родился и живу в Чебоксарах. Вообще я продуктовый дизайнер в одном из банков, но мне всегда нравилось что-то кодить. К тому же, всегда есть идеи которые хочется быстро собрать и протестить жизнеспособность совего «продукта». Так я и оказался на курсе «Фронтенд».
            </div>
            <div className='about__links'>
            <Link to='https://github.com/KVasilyev' target='_blank' className='about__link link'>GitHub</Link>
            </div>
          </div>
          <img className='about__image' src={photo} alt='Фото Васильева К.А.'/> 
        </div>
        <div className='about__portfolio'>
          <h3 className='about__portfolio-headline'>Портфолио</h3>
          <ul className='about__sites'>
            {projectsLink.map(({name, link}) => {
              return (                  
                <Site name={name} link={link} key={name}/>
              )})
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About;