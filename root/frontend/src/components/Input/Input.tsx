import React from 'react';
import './Input.scss';

export type InputProps = {
  type: string;
  name: string;
  label: string;
  required?: boolean;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  required = false,
  ...props

}: InputProps) => {
  return (
    <input
        {...props}
    />
  )
}

export default Input;