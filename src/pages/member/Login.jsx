import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="#" className="findAccountBtn">
            계정을 잊으셨나요?
          </Link>
          /
          <Link to="#" className="findPasswordBtn">
            비밀번호를 잊으셨나요?
          </Link>
          <Link to="#" className="signUpBtn">
            회원 가입하기
          </Link>
        </div>
      </div>
    );
  }
}
export default Login;
