import React, { Component } from 'react';
import SignupForm from './SignupForm';
import SignupTermLink from './SignupTermLink';
import SignupTitle from './SignupTitle';
import './Signup.scss';

class SignUp extends Component {
  render() {
    return (
      <div className="Signup">
        <div>
          <SignupTitle />
          <div>
            <SignupForm />
          </div>
          <SignupTermLink />
        </div>
      </div>
    );
  }
}

export default SignUp;
