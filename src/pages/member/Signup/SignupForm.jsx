import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { SIGNUP_API } from '../../../config';
import './SignupForm.scss';

class SignupForm extends Component {
  constructor() {
    super();
    this.state = {
      isChecked: false,
      name: '',
      id: '',
      email: '',
      phoneNumber: '',
      password: '',
      passwordCheck: '',
    };
  }

  checkChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  handleInput = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value,
    });
  };

  signup = () => {
    fetch(SIGNUP_API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        userAccount: this.state.id,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        alert('회원가입을 축하드립니다🥳!!');
        this.props.history.push('/member/login');
      });
  };

  signupCheck = () => {
    const { name, id, email, phoneNumber, password, passwordCheck } =
      this.state;
    if (!name) {
      alert('이름을 입력해주세요');
      return;
    }
    if (!id) {
      alert('아이디를 입력해주세요');
      return;
    }
    if (!email) {
      alert('이메일을 입력해주세요');
      return;
    }
    if (!phoneNumber) {
      alert('휴대전화 번호를 입력해주세요');
      return;
    }
    if (!password) {
      alert('비밀번호를 입력해주세요');
      return;
    }
    if (!passwordCheck) {
      alert('비밀번호를 입력해주세요');
      return;
    }
    if (password !== passwordCheck) {
      alert('비밀번호가 일치하지 않습니다');
      return;
    }
    if (password.length < 5) {
      alert('패스워드 항목이 4자(개) 이상으로 해주십시오.');
      return;
    }

    this.signup();
  };

  render() {
    return (
      <form className="signupForm">
        <div className="nameWrap">
          <label className="infoName">이름</label>
          <input
            className="infoInput name"
            type="text"
            name="name"
            placeholder="이름을 입력해주세요"
            onChange={this.handleInput}
          />
        </div>
        <div className="idWrap">
          <label className="infoId">아이디</label>
          <input
            className="infoInput id"
            type="text"
            name="id"
            placeholder="아이디를 입력해주세요"
            onChange={this.handleInput}
          />
        </div>
        <div className="emailWrap">
          <label className="infoEmail">이메일</label>
          <input
            className="infoInput email"
            type="email"
            name="email"
            placeholder="이메일을 입력해주세요"
            onChange={this.handleInput}
          />
        </div>
        <div className="telWrap">
          <label className="infoPhoneNumber">휴대전화 번호</label>
          <input
            className="infoInput phoneNumber"
            type="tel"
            name="phoneNumber"
            placeholder="000-0000-0000"
            onChange={this.handleInput}
          />
        </div>
        <div className="pWWrap">
          <label className="infoPw">비밀번호</label>
          <input
            className="infoInput pw"
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={this.handleInput}
          />
        </div>
        <div className="passwordCheckWrap">
          <label className="infoPasswordCheck">비밀번호 확인</label>
          <input
            className="infoInput passwordCheck"
            type="password"
            name="passwordCheck"
            placeholder="비밀번호를 다시 입력해주세요"
            onChange={this.handleInput}
          />
          <input
            type="checkbox"
            checked={this.state.isChecked}
            onChange={this.checkChange}
          ></input>
          <label className="eventAgreement">
            이벤트 및 할인 소식 알림 동의 (선택)
          </label>
        </div>
        <button type="button" className="signUpBtn" onClick={this.signupCheck}>
          동의하고 회원가입
        </button>
      </form>
    );
  }
}

export default withRouter(SignupForm);
