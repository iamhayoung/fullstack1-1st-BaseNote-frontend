import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.scss';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      loginIdValue: '',
      loginPwValue: '',
    };
  }

  login = () => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_account: this.stateloginIdValue,
        password: this.stateloginPwValue,
      }),
    }).then(response => response.json());
  };

  render() {
    return (
      <form className="LoginForm">
        <div className="idWrap">
          <label className="loginIdName">아이디</label>
          <input
            className="loginInput loginId"
            type="text"
            placeholder="아이디를 입력해주세요"
            onChange={this.handleInput}
          />
        </div>
        <div className="pwWrap">
          <label className="loginPwName">비밀번호</label>
          <input
            className="loginInput"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={this.handleInput}
          />
          <div className="linkWrap">
            <div className="forgotLink">
              <Link to="#">계정을 잊으셨나요?</Link>
              <span className="sign"> / </span>
              <Link to="#">비밀번호를 잊으셨나요?</Link>
              <button className="signupBtn">회원 가입하기</button>
            </div>
          </div>
          <button
            className={
              this.state.loginIdValue > 4 && this.state.loginPwValue.length > 4
                ? 'loginBtn loginBtnActive'
                : 'loginBtn'
            }
            type="button"
            onClick={this.login}
          >
            로그인
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
