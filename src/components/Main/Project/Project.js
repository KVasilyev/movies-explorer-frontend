import React from 'react';
import './Project.css';

function Project() {
  return (
    <section className='project' id='project'>
      <div className='project__frame'>
        <h2 className='project__headline'>О проекте</h2>
        <ul className='project__columns'>
          <li>
            <h3 className='project__column-headline'>Дипломный проект включал 5 этапов</h3>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </li>
          <li>
            <h3 className='project__column-headline'>На выполнение диплома ушло 5 недель</h3>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </li>
        </ul>
        <ul className='project__infograph'>
          <li>
            <p className='project__infograph-black'>1 неделя</p>
            Back-end
          </li>
          <li>
            <p className='project__infograph-gray'>4 недели</p>
            Front-end
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Project;