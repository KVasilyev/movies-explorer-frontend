import React from 'react';
import './Site.css';
import { Link } from 'react-router-dom';

function Skill({ name, link }) {
  return (
    <li className='about__site'>
      <Link to={link} className='about__site-link link' target='_blank'>
        <span className='about__stie-link-text'>{name}</span>
        <span className='about__site-arrow'>↗</span></Link>
    </li>
  )
}

export default Skill;