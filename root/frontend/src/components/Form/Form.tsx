import React from 'react';
import { useSubmit } from 'react-router';
import './Form.scss';

export type FormProps = {
  id: string;
  lines: "single" | "double";
  inputs: {
    type: string;
    name: string;
    label: string;
    required?: false | true;
    placeholder?: string;
  }[]

}

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

          {(lines == "double" && input.type != "checkbox") ? 
          (<br/>) : null} {/* Line Break Handler */}

          <input 
          type={input.type} 
          id={input.name} 
          name={input.name}
          required={input.required }
          placeholder={input.placeholder}
          />
        </div>
      ))}
    </form>
  )
}
export default Form;