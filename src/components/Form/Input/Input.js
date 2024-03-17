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
    <fieldset className='form__inputs'>
      <label className='form__lable'>
            {inputLabel}
            <input
              className={`form__input ${error ? 'form__input_error' : ''}` }
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
      <span className='form__input-error'>{error ? errorMesage : ''}</span>
    </fieldset>
  )
}

export default Input;