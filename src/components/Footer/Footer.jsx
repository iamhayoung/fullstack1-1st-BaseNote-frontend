import React, { Component } from 'react';
import Container from '../Container/Container';
import LowerFooter from './LowerFooter';
import UpperFooter from './UpperFooter';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Container option="footer wide">
          <UpperFooter />
          <LowerFooter />
        </Container>
      </footer>
    );
  }
}

export default Footer;
