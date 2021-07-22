import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { LOGIN_API } from '../../../config';
import './LoginForm.scss';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      loginIdValue: '',
      loginPwValue: '',
    };
  }

  handleInput = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  login = () => {
    const { loginIdValue, loginPwValue } = this.state;
    if (!loginIdValue) {
      alert('아이디 항목은 필수 입력값입니다.');
      return;
    }
    if (loginPwValue.length < 5) {
      alert('패스워드 항목이 4자(개) 이상으로 해주십시오.');
      return;
    }

    fetch(`${LOGIN_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userAccount: this.state.loginIdValue,
        password: this.state.loginPwValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.accessToken) {
          localStorage.setItem('token', result.accessToken);
          this.props.history.push('/');
        } else {
          alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        }
      });
  };

  render() {
    return (
      <form className="loginForm">
        <div className="idWrap">
          <label className="loginIdNam">아이디</label>
          <input
            className="loginInput loginId"
            type="text"
            name="loginIdValue"
            placeholder="아이디를 입력해주세요"
            onChange={this.handleInput}
          />
        </div>
        <div className="pwWrap">
          <label className="loginPwName">비밀번호</label>
          <input
            className="loginInput"
            type="password"
            name="loginPwValue"
            placeholder="비밀번호를 입력해주세요"
            onChange={this.handleInput}
          />
          <div className="linkWrap">
            <div className="forgotLink">
              <Link to="#">계정을 잊으셨나요?</Link>
              <span className="sign"> / </span>
              <Link to="#">비밀번호를 잊으셨나요?</Link>
            </div>
            <Link to="/member/signup" className="signupBtn">
              회원 가입하기
            </Link>
          </div>
          <button className="loginBtn" type="button" onClick={this.login}>
            로그인
          </button>
        </div>
      </form>
    );
  }
}

export default withRouter(LoginForm);
