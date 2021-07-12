import React, { Component } from 'react';
import './SignupForm.scss';

class SignupForm extends Component {
  render() {
    return (
      <form className="SignupForm">
        <div className="nameWrap">
          <label className="infoName">이름</label>
          <input
            className="infoInput name"
            type="text"
            placeholder="이름을 입력해주세요"
          />
        </div>
        <div className="idWrap">
          <label className="infoId">아이디</label>
          <input
            className="infoInput id"
            type="text"
            placeholder="아이디를 입력해주세요"
          />
        </div>
        <div className="emailWrap">
          <label className="infoEmail">이메일</label>
          <input
            className="infoInput email"
            type="email"
            placeholder="이메일을 입력해주세요"
          />
        </div>
        <div className="telWrap">
          <label className="infoTel">휴대전화 번호</label>
          <input
            className="infoInput tel"
            type="tel"
            placeholder="000-0000-0000"
          />
        </div>
        <div className="pWWrap">
          <label className="infoPw">비밀번호</label>
          <input
            className="infoInput pw"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
        </div>
        <div className="pwCheckWrap">
          <label className="infoPwCheck">비밀번호 확인</label>
          <input
            className="infoInput pwCheck"
            type="password"
            placeholder="비밀번호를 다시 입력해주세요"
          />
          <input type="checkbox" name="agree" value="1"></input>
          <label className="eventAgreement">
            이벤트 및 할인 소식 알림 동의 (선택)
          </label>
        </div>
        <button className="signUpBtn">동의하고 회원가입</button>
      </form>
    );
  }
}

export default SignupForm;
