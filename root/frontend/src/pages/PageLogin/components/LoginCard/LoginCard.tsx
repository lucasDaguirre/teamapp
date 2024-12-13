import React from 'react';
import './LoginCard.scss';
import Card from '../../../../components/Card/Card';
import Form, { FormProps } from '../../../../components/Form/Form';
import Button from '../../../../components/Button/Button';

const formProps : FormProps = {
  id: "login-form",
  lines: "single",
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

          <Form {...formProps} />

        }
        >
      </Card>
      <Button
        type="button" 
        variant="primary" 
        label= "Submit">
      </Button>
    </div>
  )
}

export default LoginCard;