import React, { Component } from 'react';
import './Login.scss';
import LoginForm from './Componenets/LoginForm';

class Login extends Component {
  render() {
    return (
      <body className="container">
        <div>
          <header className="title">로그인</header>
          <div>
            <LoginForm />
            <button className="loginBt" type="button">
              로그인
            </button>
          </div>
          <a href="#" className="findAccountBtn">
            계정을 잊으셨나요?
          </a>
          "/"
          <a href="#" className="findPasswordBtn">
            비밀번호를 잊으셨나요?
          </a>
          <div>
            <a href="#" className="signUpBtn">
              회원 가입하기
            </a>
          </div>
        </div>
      </body>
    );
  }
}
export default Login;
