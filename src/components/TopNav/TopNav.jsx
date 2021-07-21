import React, { Component } from 'react';
import './TopNav.scss';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ReactComponent as MainLogo } from '../../assets/logo-BASENOTE_icon.svg';
import TopNavTeller from './TopNavTeller';
import TopNavMenu from './TopNavMenu';
import TopNavHiddenMenuWrapper from './TopNavHiddenMenuWrapper';

class TopNav extends Component {
  render() {
    return (
      <div className="TopNavWrapper">
        <div className="TopNav shopHover">
          <ul className="navCategory">
            <TopNavTeller title="Perfume teller" />
            <TopNavHiddenMenuWrapper />
            <TopNavMenu menuTitle="About" />
            <TopNavMenu menuTitle="Event" />
          </ul>
          <Link to="/" className="NavTitle">
            <MainLogo />
          </Link>
          <div className="NavIcons">
            <Link to="/member">
              <BsPerson className="LoginIcon" />
            </Link>
            <Link to="/order/cart">
              <AiOutlineShopping className="LoginIcon" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;
