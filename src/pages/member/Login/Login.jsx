import React, { Component } from 'react';
import LoginTitle from './LoginTitle';
import LoginForm from './LoginForm';
import OtherLoginButton from './OtherLoginButton';
import Container from '../../../components/Container/Container';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div>
          <LoginTitle />
          <LoginForm />
          <OtherLoginButton />
          <Container />
        </div>
      </div>
    );
  }
}

export default Login;
