import React, { Component } from 'react';
import './Login.scss';
import LoginForm from './Componenets/LoginForm';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div>
          <header className="title">로그인</header>
          <div>
            <LoginForm />
          </div>
          <button className="otherButton">
            BASENOTE 여러분 사랑하고 고맙습니다
          </button>
        </div>
      </div>
    );
  }
}
export default Login;
