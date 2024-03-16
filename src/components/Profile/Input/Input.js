import React from 'react'
import './Input.css'

function Input({
  inputState,
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
    <label className='profile__label'>
          <span className='profile__input-name'>{inputLabel}</span>
          <input 
            className='profile__input' 
            disabled={inputState}
            name={inputName} 
            type={inputType}
            id={inputName}
            onChange={onChange}
            value={inputValue}  
            minLength={minLength}
            maxLength={maxLength}
            required
          />
          <p className='profile__input-error'>{error ? errorMesage : ''}</p>
    </label>
  )
}

export default Input;