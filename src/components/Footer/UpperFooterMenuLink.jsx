import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UpperFooterMenuLink.scss';

class UpperFooterMenuLink extends Component {
  render() {
    const { link } = this.props;

    return (
      <small className="upperFooterMenuLinkItem">
        <Link className="upperFooterMenuLinkText" to="/">
          {link.link_name}
        </Link>
      </small>
    );
  }
}

export default UpperFooterMenuLink;
