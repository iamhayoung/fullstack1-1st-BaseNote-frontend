import React, { Component } from 'react';
import Container from '../../../components/Container/Container';
import SignupTitle from './SignupTitle';
import SignupForm from './SignupForm';
import SignupTermLink from './SignupTermLink';
import './Signup.scss';

class SignUp extends Component {
  render() {
    return (
      <div className="signup">
        <Container option="loginContainer">
          <SignupTitle />
          <SignupForm />
          <SignupTermLink />
        </Container>
      </div>
    );
  }
}

export default SignUp;
