import React, { Component } from 'react';
import './Login.scss';
import TopNav from '../../../components/TopNav/TopNav';
import LoginForm from './LoginForm';

class Login extends Component {
  render() {
    return (
      <div className="Login">
        <TopNav />
        <div>
          <header className="title">로그인</header>
          <div>
            <LoginForm />
          </div>
          <button
            className="otherBtn"
            onClick={() => alert('BASENOTE팀과 함께해보실까요?')}
          >
            다른 방법으로 시작하기
          </button>
        </div>
      </div>
    );
  }
}
export default Login;
