import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
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
    this.setState({
      loginIdValue: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      loginPwValue: event.target.value,
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

    fetch('/member/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_account: this.state.loginIdValue,
        password: this.state.loginPwValue,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result.access_token); // <- token값 저장!
        if (result.access_token) {
          localStorage.setItem('token', result.access_token);
          this.props.history.push('/');
        } else {
          alert('아이디 또는 비밀번호가 일치하지 않습니다.');
        }

        // 자바스크립트의 경우 아래로 코드를 입력할 수 있음!
        // if(result.access_token) { <-- 로그인 성공/실패 조건문?
        // 	window.location.href="main";
        // } else {

        //} 	alert('아이디 또는 비밀번호가 일치하지 않습니다.')
        // })
      });
  };

  render() {
    console.log(this.props);
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
