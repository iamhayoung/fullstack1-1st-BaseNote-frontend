import React, { Component } from 'react';
import Container from '../Container/Container';
import UpperFooter from './UpperFooter';
import LowerFooter from './LowerFooter';
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
