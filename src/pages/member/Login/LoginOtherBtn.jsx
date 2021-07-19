import React, { Component } from 'react';
import './LoginOtherBtn.scss';

class LoginOtherBtn extends Component {
  render() {
    return (
      <div className="LoginOtherBtn">
        <button
          className="otherBtn"
          onClick={() => alert('BASENOTE팀과 함께해보실까요?')}
        >
          다른 방법으로 시작하기
        </button>
      </div>
    );
  }
}

export default LoginOtherBtn;
