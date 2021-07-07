import React, { Component } from 'react';
import './LoginForm.scss';

class LoginForm extends Component {
  render() {
    return (
      <form className="loginForm">
        <div className="idWrap">
          <div className="loginIdName">아이디</div>
          <input
            className="loginId"
            type="text"
            placeholder="아이디를 입력해주세요"
          />
        </div>
        <div className="pwWrap">
          <div className="loginPwName">비밀번호</div>
          <input
            className="loginPw"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
      </form>
    );
  }
}

export default LoginForm;
