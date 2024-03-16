import React from 'react';
import './Form.css';
import Logo from '../Logo/Logo';

function Form({ title, onSubmit ,children }) {
  
  return (
    <section className='form'>
        <form className='form__auth' onSubmit={onSubmit} noValidate>
          <Logo />
          <h1 className='form__headline'>{title}</h1>
          {children}
        </form>
    </section>
  )
}

export default Form;