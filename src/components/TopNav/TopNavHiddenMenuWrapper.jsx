import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TopNavHiddenMenu from './TopNavHiddenMenu';
import { hiddenMenuTitle } from './data';
import './TopNavHiddenMenuWrapper.scss';

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
        className="TopNavHiddenMenuWrapper hideButton"
        onMouseOver={this.showMenu}
        onMouseLeave={this.hideMenu}
      >
        SHOP
        <ul
          className={`hiddenMenu ${hiddenMenu ? 'menuInactive' : ''}`}
          onMouseLeave={this.mouseLeave}
        >
          {hiddenMenuTitle.map(menuData => {
            return (
              <TopNavHiddenMenu
                hiddenMenuNum={menuData.hiddenMenuNum}
                title={menuData.title}
              />
            );
          })}
        </ul>
      </Link>
    );
  }
}
export default TopNavHiddenMenuWrapper;