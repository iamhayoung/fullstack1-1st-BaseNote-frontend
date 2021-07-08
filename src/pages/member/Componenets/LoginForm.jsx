import React, { Component } from 'react';
import './LoginForm.scss';

class LoginForm extends Component {
  render() {
    return (
      <form className="LoginForm">
        <div className="idWrap">
          <label className="loginIdName">아이디</label>
          <input
            className="loginId"
            type="text"
            placeholder="아이디를 입력해주세요"
          />
        </div>
        <div className="pwWrap">
          <label className="loginPwName">비밀번호</label>
          <input
            className="loginPw"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          <button className="loginBtn" type="button">
            로그인
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
