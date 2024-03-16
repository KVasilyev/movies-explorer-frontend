import React from 'react';
import './Profile.css';
import { useState } from 'react';
import Input from './Input/Input';
import { Link } from 'react-router-dom';

import useFormValidation from '../../utils/FormValidation';

function Profile() {
  const {errors, isValid, handleChange } = useFormValidation();

  const [isEdit, setEdit] = useState(false);
  const [isSame, setSame] = useState(false);

  const [errorText, setErrorText] = useState('');

  const [name, setName] = useState('Константин');
  const [email, setEmail] = useState('hello.vasilyev@gmail.com');

  function handleEdit() {
    setEdit(true);
  }

  function onNameChange(e) {
    handleChange(e);
    setName(e.target.value)
    if (e.target.value === 'Константин') {
      setErrorText('Имя пользователя совпадает с текущим');  
      setSame(true); 
    } else {
      setErrorText('');
      setSame(false);
    }
  }

  function onEmailChange(e) {
    handleChange(e);
    setEmail(e.target.value)
    if (e.target.value === 'hello.vasilyev@gmail.com') {
      setErrorText('E-mail совпадает с текущим'); 
      setSame(true);   
    } else {
      setErrorText('');
      setSame(false);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email);
  }   

  return (
    <section className='profile'>
      <form className='profile__form' onSubmit={handleSubmit}>
        <div className='profile__form-top'>
        <h1 className='profile__headline'>Привет, Константин!</h1>
        <Input
          inputName={"name"}
          inputType={"text"}
          inputLabel={'Имя'}
          inputState={!isEdit}
          inputPlaceholder={'Ваше Имя'}
          inputValue={name}
          onChange={onNameChange}
          minLength={2}
          maxLength={30}
          isValid={isValid}
          error={errors.name}
          errorMesage={errors.name || ''}     
        />
        <hr className='profile__line'></hr>
        <Input
          inputName={"email"}
          inputType={"email"}
          inputLabel={'E-mail'}
          inputState={!isEdit}
          inputPlaceholder={'E-mail'}
          inputValue={email}
          onChange={onEmailChange}
          isValid={isValid}
          error={errors.email}
          errorMesage={errors.email || ''}     
        />
        </div>
        <div className='profile__form-bottom'>
          {isEdit ? (
            <>
              <p className='profile__form-error'>{errorText}</p>
              <button className='button profile__button' disabled={!isValid || isSame}>Сохранить</button>
            </>
          ) : (
            <>
              <Link className='profile__link link' onClick={handleEdit}>Редактировать</Link>
              <Link className='profile__link link profile__link_red'>Выйти из профиля</Link>
            </>
          )}
        </div>
      </form>
    </section>
  )
}

export default Profile;