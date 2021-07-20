import React, { Component } from 'react';
import LoginForm from './LoginForm';
import './Login.scss';
<<<<<<< HEAD:src/pages/member/Login.jsx
import LoginForm from './LoginForm';
import OtherLoginButton from './OtherLoginButton';
import LoginTitle from './LoginTitle';
=======
>>>>>>> main:src/pages/member/Login/Login.jsx

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <TopNav />
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
