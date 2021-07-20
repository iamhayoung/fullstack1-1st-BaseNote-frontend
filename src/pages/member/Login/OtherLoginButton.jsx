import React, { Component } from 'react';
import './OtherLoginButton.scss';

class OtherLoginButton extends Component {
  render() {
    return (
      <div className="OtherLoginButton">
        <button
          className="otherLoginBtn"
          onClick={() => alert('BASENOTE팀과 함께해보실까요?')}
        >
          다른 방법으로 시작하기
        </button>
      </div>
    );
  }
}

export default OtherLoginButton;
