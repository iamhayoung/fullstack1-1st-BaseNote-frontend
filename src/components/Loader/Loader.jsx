import React, { Component } from 'react';
import { FaSpinner } from 'react-icons/fa';
import Container from '../Container/Container';
import './Loader.scss';

class Loader extends Component {
  render() {
    return (
      <Container option="loader">
        <FaSpinner className="loadingSpinner" />
        <p className="loadingText">loading...</p>
      </Container>
    );
  }
}

export default Loader;
