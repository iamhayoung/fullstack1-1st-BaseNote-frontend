import React, { Component } from 'react';
import './Container.scss';
import TopNav from '../../components/TopNav/TopNav';

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
