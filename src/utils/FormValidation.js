import { useState } from "react";
const REGEX_EMAIL = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

export default function useFormValidation() {
   const [values, setValues] = useState({})
   const [errors, setErrors] = useState({})
   const [isValid, setIsValid] = useState(false)

   function handleChange(e) {
      const input = e.target;
      const name = input.name;
      const value = input.value;
      setValues({ ...values, [name]: value });
      setErrors({ ...errors, [name]: input.validationMessage });
      const isValidity = input.closest('form').checkValidity()
      if (name === "email") {
         const regex = new RegExp(REGEX_EMAIL)
         const isValidRegex = regex.test(value)
         if (!(isValidRegex)) {
            setIsValid(false);
            setErrors({ ...errors, email: 'Введите корректный e-mail' })
         } else {
            errors.email = ""
            setErrors(errors);
            setIsValid(true && isValidity);
         }
      } else {
         setIsValid(isValidity);
      }
   };
   
   return { values, errors, isValid, handleChange }
}