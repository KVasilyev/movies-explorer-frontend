import React from 'react';
import './Skill.css';

function Skill({ skill }) {
  return (
    <li className='technology__skill'>
      {skill}
    </li>
  )
}

export default Skill;