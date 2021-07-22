import React, { Component } from 'react';
import Container from '../../../components/Container/Container';
import LoginTitle from './LoginTitle';
import LoginForm from './LoginForm';
import OtherLoginButton from './OtherLoginButton';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="login">
        <div>
          <Container option="loginContainer">
            <LoginTitle />
            <LoginForm />
            <OtherLoginButton />
          </Container>
        </div>
        <LoginOtherBtn />
      </div>
    );
  }
}

export default Login;
