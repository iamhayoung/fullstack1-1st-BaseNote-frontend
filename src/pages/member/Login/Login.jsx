import React, { Component } from 'react';
import Container from '../../../components/Container/Container';
import LoginTitle from './LoginTitle';
import LoginForm from './LoginForm';
<<<<<<< HEAD
import LoginOtherBtn from './LoginOtherBtn';
import LoginTitle from './LoginTitle';
=======
import OtherLoginButton from './OtherLoginButton';
>>>>>>> main
import './Login.scss';

class Login extends Component {
  render() {
    return (
<<<<<<< HEAD
      <div className="Login">
        <div>
          <LoginTitle />
          <LoginForm />
=======
      <div className="login">
        <div>
          <Container option="loginContainer">
            <LoginTitle />
            <LoginForm />
            <OtherLoginButton />
          </Container>
>>>>>>> main
        </div>
        <LoginOtherBtn />
      </div>
    );
  }
}

export default Login;
