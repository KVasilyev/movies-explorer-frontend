import React from 'react'
import './Input.css'

function Input({
  inputState,
  inputPlaceholder,
  inputName, 
  inputType, 
  inputLabel, 
  error, 
  onChange, 
  inputValue,    
  isValid, 
  minLength, 
  maxLength, 
  errorMesage
}) {
  return (
    <fieldset className='profile__inputs'>
      <label className='profile__label'>
            <span className='profile__input-name'>{inputLabel}</span>
            <input 
              className='profile__input' 
              disabled={inputState}
              placeholder={inputPlaceholder}
              name={inputName} 
              type={inputType}
              id={inputName}
              onChange={onChange}
              value={inputValue}  
              minLength={minLength}
              maxLength={maxLength}
              required
            />
      </label>
      <p className='profile__input-error'>{error ? errorMesage : ''}</p>
    </fieldset>
  )
}

export default Input;