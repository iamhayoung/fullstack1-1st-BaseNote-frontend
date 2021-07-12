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

  handleIdInput = event => {
    if (event.target.value.length < 1) {
      this.setState({
        message: '아이디 항목은 필수 입력값입니다.',
        checkId: false,
      });
    } else {
      this.setState({
        message: '',
        checkId: true,
      });
    }
  };
  handlePwInput = event => {
    if (event.target.value.length < 5) {
      this.setState({
        message: '패스워드 항목이 4자(개) 이상으로 해주십시오.',
        checkPw: false,
      });
    } else {
      this.setState({
        message: '',
        checkPw: true,
      });
    }
  };

  login = () => {
    fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_account: this.state.loginIdValue,
        password: this.state.loginPwValue,
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
            onChange={this.handleIdInput}
          />
        </div>
        <div className="pwWrap">
          <label className="loginPwName">비밀번호</label>
          <input
            className="loginInput"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={this.handlePwInput}
          />
          <div className="linkWrap">
            <div className="forgotLink">
              <Link to="#">계정을 잊으셨나요?</Link>
              <span className="sign"> / </span>
              <Link to="#">비밀번호를 잊으셨나요?</Link>
              <Link to="/member/signup" className="signupBtn">
                회원 가입하기
              </Link>
            </div>
          </div>
          <button className="loginBtn" type="button" onClick={this.login}>
            로그인
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
