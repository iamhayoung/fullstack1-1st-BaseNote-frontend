import React, { Component } from 'react';
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
      <span
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
                key={menuData.id}
                hiddenMenuNum={menuData.hiddenMenuNum}
                title={menuData.title}
                path={menuData.path}
              />
            );
          })}
        </ul>
      </span>
    );
  }
}
export default TopNavHiddenMenuWrapper;
