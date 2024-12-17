import React from 'react';
import './Button.scss';

export type ButtonProps = {
  type: "button" | "reset" | "submit";
  label: string;
  name?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  variant?: "primary" | "secondary" | "danger" | "success";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  form?: string;
  value?: string;
}

const Button = ({
  type = "button",
  ...props
}: ButtonProps) => {

  const className = `button 
  ${props.variant || ""} 
  ${props.size || ""} 
  ${props.loading ? "loading" : ""}
  `;

  return (
    <button 
    className={className}
    type={type}
    {...props}
    >
      {(props.loading) ? "Loading..." : (props.label)}
    </button>
  )
}

export default Button;