import React from 'react';
import { useSubmit } from 'react-router';
import './Form.scss';
import Input, { InputProps } from '../Input/Input';

export type FormProps = {
  id: string;
  lines: "single" | "double";
  inputs: InputProps[];
};

const Form = ({ 
  id,
  lines,
  inputs 
}: FormProps) => {

  return (
    <form id={id} className="form">
      {inputs.map((input, index) => (
        <div key={index} className="form-group">

          <label htmlFor={input.name}>
            {input.label}
          </label>

          {(lines === "double" && input.type !== "checkbox") ? 
            (<br/>) : null} {/* Line Break Handler */}
            
          <Input {...input}/>
        </div>
      ))}
    </form>
  )
}
export default Form;