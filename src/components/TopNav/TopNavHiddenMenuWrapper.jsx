import React, { Component } from 'react';
import './TopNavHiddenMenuWrapper.scss';
import { Link } from 'react-router-dom';
import TopNavHiddenMenu from './TopNavHiddenMenu';

class TopNavHiddenMenuWrapper extends Component {
  constructor() {
    super();
    this.state = {
      hiddenMenu: true,
    };
  }

  showMenu = () => {
    this.setState({
      hiddenMenu: false,
    });
  };

  hideMenu = () => {
    this.setState({
      hiddenMenu: true,
    });
  };

  render() {
    const { hiddenMenu } = this.state;
    return (
      <Link
        to="/"
        className="navCategoryLink hideButton"
        onMouseOver={this.showMenu}
        onMouseLeave={this.hideMenu}
      >
        SHOP
        <ul
          className={hiddenMenu ? 'hiddenMenu menuInactive' : 'hiddenMenu'}
          onMouseLeave={this.mouseLeave}
        >
          <TopNavHiddenMenu hiddenMenuNum="0" title="2.5ml/데일리키트" />
          <TopNavHiddenMenu hiddenMenuNum="1" title="40ml" />
          <TopNavHiddenMenu hiddenMenuNum="2" title="SET" />
          <TopNavHiddenMenu hiddenMenuNum="3" title="GOODS" />
        </ul>
      </Link>
    );
  }
}
export default TopNavHiddenMenuWrapper;
