import React, { Component } from 'react';
import './Login.scss';
import LoginForm from './LoginForm';
import OtherLoginButton from './OtherLoginButton';
import LoginTitle from './LoginTitle';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div>
          <LoginTitle />
          <LoginForm />
        </div>
        <OtherLoginButton />
      </div>
    );
  }
}
export default Login;
