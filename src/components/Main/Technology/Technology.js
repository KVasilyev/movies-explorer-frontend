import React from 'react';
import './Technology.css';
import Skill from './Skill/Skill';

import { cards } from '../../../utils/constants.js';

function Technology() {
  return (
    <section className='technology' id='technology'>
      <div className='technology__frame'>
        <h2 className='technology__headline'>Технологии</h2>
        <h3 className='technology__counter'>7 технологий</h3>
        <span className='technology__description'>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </span>
        <ul className='technology__skills'>
          {cards.map((skill) => {
              return (                  
                <Skill skill={skill} key={skill}/>
              )})
          }
        </ul>
      </div>
    </section>
  )
}

export default Technology;