import React, { Component } from 'react';
import './TopNav.scss';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ReactComponent as MainLogo } from '../../assets/logo-BASENOTE_icon.svg';
import TopNavTeller from './TopNavTeller';
import TopNavMenu from './TopNavMenu';
import TopNavHiddenMenu from './TopNavHiddenMenu';

class TopNav extends Component {
  constructor() {
    super();
    this.state = {
      index: -1,
      hiddenCard: true,
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

  showThumbail = index => {
    this.setState({
      hiddenCard: false,
      index,
    });
  };

  hideThumbnail = () => {
    this.setState({
      hiddenCard: true,
      index: -1,
    });
  };

  render() {
    const { hiddenMenu } = this.state;

    return (
      <div className="TopNavWrapper">
        <div className="TopNav shopHover">
          <ul className="navCategory">
            <TopNavTeller title="Perfume teller" />
            <Link
              to="/"
              className="navCategoryLink hideButton"
              onMouseOver={this.showMenu}
              onMouseLeave={this.hideMenu}
            >
              SHOP
              <ul
                className={
                  hiddenMenu ? 'hiddenMenu menuInactive' : 'hiddenMenu'
                }
                onMouseLeave={this.mouseLeave}
              >
                <TopNavHiddenMenu hiddenMenuNum="0" title="2.5ml/데일리키트" />
                <TopNavHiddenMenu hiddenMenuNum="1" title="40ml" />
                <TopNavHiddenMenu hiddenMenuNum="2" title="SET" />
                <TopNavHiddenMenu hiddenMenuNum="3" title="GOODS" />
              </ul>
            </Link>
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
