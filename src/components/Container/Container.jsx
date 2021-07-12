import React, { Component } from 'react';
import TopNav from '../TopNav/TopNav';
import './Container.scss';

class Container extends Component {
  render() {
    const { children, option } = this.props;
    return (
      <>
        <TopNav />
        <div
          className={option === undefined ? 'container' : `container ${option}`}
        >
          {children}
        </div>
      </>
    );
  }
}

export default Container;
