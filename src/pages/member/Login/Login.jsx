import React, { Component } from 'react';
import LoginForm from './LoginForm';
import LoginOtherBtn from './LoginOtherBtn';
import LoginTitle from './LoginTitle';
import TopNav from '../../../components/TopNav/TopNav';
import './Login.scss';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <TopNav />
        <div>
          <LoginTitle />
          <LoginForm />
        </div>
        <LoginOtherBtn />
      </div>
    );
  }
}
export default Login;
