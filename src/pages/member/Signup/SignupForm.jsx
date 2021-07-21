import React, { Component } from 'react';
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
      pw: '',
      pwCheck: '',
    };
  }

  checkChange = () => {
    this.setState({
      isChecked: !this.state.isChecked,
    });
  };

  handleNameInput = event => {
    this.setState({
      name: event.target.value,
    });
  };

  handleIdInput = event => {
    this.setState({
      id: event.target.value,
    });
  };

  handleEmailInput = event => {
    this.setState({
      email: event.target.value,
    });
  };

  handlePhoneNumberInput = event => {
    this.setState({
      phoneNumber: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      pw: event.target.value,
    });
  };

  handlePwCheckInput = event => {
    this.setState({
      pwCheck: event.target.value,
    });
  };

  signup = () => {
    fetch(`${SIGNUP_API}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        userAccount: this.state.id,
        email: this.state.email,
        phoneNumber: this.state.phoneNumber,
        password: this.state.pw,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
      });
  };

  render() {
    return (
      <form className="SignupForm">
        <div className="nameWrap">
          <label className="infoName">이름</label>
          <input
            className="infoInput name"
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={this.handleNameInput}
          />
        </div>
        <div className="idWrap">
          <label className="infoId">아이디</label>
          <input
            className="infoInput id"
            type="text"
            placeholder="아이디를 입력해주세요"
            onChange={this.handleIdInput}
          />
        </div>
        <div className="emailWrap">
          <label className="infoEmail">이메일</label>
          <input
            className="infoInput email"
            type="email"
            placeholder="이메일을 입력해주세요"
            onChange={this.andleEmailInput}
          />
        </div>
        <div className="telWrap">
          <label className="infoTel">휴대전화 번호</label>
          <input
            className="infoInput tel"
            type="tel"
            placeholder="000-0000-0000"
            onChange={this.handlePhoneNumberInput}
          />
        </div>
        <div className="pWWrap">
          <label className="infoPw">비밀번호</label>
          <input
            className="infoInput pw"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            onChange={this.handlePwInput}
          />
        </div>
        <div className="pwCheckWrap">
          <label className="infoPwCheck">비밀번호 확인</label>
          <input
            className="infoInput pwCheck"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
            onChange={this.handlePwCheckInput}
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
        <button type="button" className="signUpBtn" onClick={this.signup}>
          동의하고 회원가입
        </button>
      </form>
    );
  }
}

export default SignupForm;
