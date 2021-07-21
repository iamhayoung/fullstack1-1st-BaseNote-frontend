import React, { Component } from 'react';
import LoginTitle from './LoginTitle';
import LoginForm from './LoginForm';
import OtherLoginButton from './OtherLoginButton';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div>
          <LoginTitle />
          <LoginForm />
          <OtherLoginButton />
        </div>
      </div>
    );
  }
}

export default Login;
