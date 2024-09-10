import React from 'react'
import { useField } from 'formik'

import {
	InputGroup,
	InputField,
	InputLabel,
  InputSelect,
  InputTextArea,
} from './styles'

interface InputData {
  label: string
  name: string
  type?: string
  options: { value: string; label: string }[]
}

const Input: React.FC<InputData> = ({ label, name, type = 'text', options }) => {
  const [field, meta] = useField(name)

  return (
    <InputGroup>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      {type === 'textarea' ?
        <InputTextArea
          {...field}
          id={name}
          rows='6'
        /> :
        type === 'select' ?
          <InputSelect {...field} id={name} >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </InputSelect>
          :
          <InputField
            {...field}
            id={name}
            type={type}
          />
      }
        
      {meta.touched && meta.error ? (
        <div style={{ color: 'red' }}>{meta.error}</div>
      ) : null}
    </InputGroup>
  );
};

export default Input
