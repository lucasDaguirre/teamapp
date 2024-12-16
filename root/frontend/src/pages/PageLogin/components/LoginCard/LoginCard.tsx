import React from 'react';
import './LoginCard.scss';
import Card from '../../../../components/Card/Card';
import Form, { FormProps } from '../../../../components/Form/Form';

const formProps : FormProps = {
  id: "login-form",
  lines: "double",
  inputs: [
    {
      type: "text",
      name: "username",
      label: "Username",
      required: true,
      placeholder: "Enter your username",
    },
    {
      type: "email",
      name: "email",
      label: "Email",
      required: true,
      placeholder: "Enter your email",
    },
    {
      type: "password",
      name: "password",
      label: "Password",
      required: true,
      placeholder: "Enter your password",
    },
    {
      type: "checkbox",
      name: "rememberMe",
      label: "Remember me on this device",
      required: false,
    },
  ],
};


const LoginCard = () => {
  return (
    <div className="login-card">
      <Card 
        title={{
            text: "Login", 
            size: "h2"
        }}
        content={

          <Form id={formProps.id} lines={formProps.lines} inputs={formProps.inputs} />

        }
        >
      </Card>
    </div>
  )
}

export default LoginCard;