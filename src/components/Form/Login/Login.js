import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from '../Form';
import Input from '../Input/Input'
import useFormValidation from '../../../utils/FormValidation';


function Login({ formErrorText }) {
  const { values, errors, isValid, handleChange } = useFormValidation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onEmailChange(e) {
      handleChange(e);
      setEmail(e.target.value)
  }
  
  function onPasswordChange(e) {
    handleChange(e);
    setPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, password);
  }   

  return (
    <Form 
      title='Рады видеть!'
      onSubmit={handleSubmit}
    >
    <div className='form__form'>
      <div className='form__top'>
      <Input
        inputName={"email"}
        inputType={"email"}
        inputLabel={'E-mail'}
        inputPlaceholder={'E-mail'}
        inputValue={values.email || ''}
        onChange={onEmailChange}
        isValid={isValid}
        error={errors.email}
        errorMesage={errors.email || ''}     
      />
      <Input
        inputName={"password"}
        inputType={"password"}
        inputLabel={'Пароль'}
        inputPlaceholder={'Пароль'}
        inputValue={values.password || ''}
        onChange={onPasswordChange}
        minLength={6}
        isValid={isValid}
        error={errors.password}
        errorMesage={'Некорректный пароль'}     
      />
      </div>
      <div className='form__bottom'>
        <p className='form__bottom-error'>{formErrorText}</p>
        <button type='submit' className='button form__button' disabled={!isValid}>Войти</button>
        <p className='form__text'>
          Ещё не зарегистрированы?
          <Link to='/signup' className='form__link link'>Регистрация</Link>
        </p>
      </div>
    </div>
    </Form>
  )
}

export default Login;