import React, { Component } from 'react';
import './TopNavMenu.scss';
import { Link } from 'react-router-dom';

class TopNavMenu extends Component {
  render() {
    const { menuTitle } = this.props;

    return (
      <Link to="/" className="navCategoryLink">
        {menuTitle}
      </Link>
    );
  }
}
export default TopNavMenu;
