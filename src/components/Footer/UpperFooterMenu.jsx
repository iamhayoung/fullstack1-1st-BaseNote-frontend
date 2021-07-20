import React, { Component } from 'react';
import UpperFooterMenuLink from './UpperFooterMenuLink';
import './UpperFooterMenu.scss';

class upperFooterMenu extends Component {
  render() {
    const { category, links } = this.props;

    return (
      <div className="upperFooterMenu">
        <h5 className="upperFooterMenuTitle">{category}</h5>
        {links.map(link => (
          <UpperFooterMenuLink key={link.id} link={link} />
        ))}
      </div>
    );
  }
}

export default upperFooterMenu;
