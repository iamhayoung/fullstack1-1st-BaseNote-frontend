import React, { Component } from 'react';
import './TopNav.scss';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ReactComponent as MainLogo } from '../../assets/logo-BASENOTE_icon.svg';
import TopNavTeller from './TopNavTeller';
import TopNavThumbnail from './TopNavThumbnail';
import TopNavMenu from './TopNavMenu';

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
    const { hiddenMenu, hiddenCard, index } = this.state;
    const sideMenuImageTitles = {
      Images: [
        'https://images.unsplash.com/photo-1582616698198-f978da534162?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcmZ1bWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1612871178341-33f941a841e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg2fHxwZXJmdW1lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1588159509476-9a71061bd9e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDIxfHxwZXJmdW1lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1612871178341-33f941a841e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg2fHxwZXJmdW1lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      ],
      Titles: ['데일리키트', '40ml', 'SET', 'GOODS'],
    };

    return (
      <div className="TopNavWrapper">
        <div className="TopNav shopHover">
          <ul className="navCategory">
            <TopNavTeller />
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
                <TopNavThumbnail indexNum="0" title="2.5ml/데일리키트" />
                <div
                  className={
                    hiddenCard ? 'hiddenCard cardInactive' : 'hiddenCard'
                  }
                >
                  {index >= 0 && (
                    <>
                      <img
                        className="hiddenCardImage"
                        src={sideMenuImageTitles.Images[index]}
                        alt="참고사진"
                      />
                      <span className="hiddenCardDescription">
                        {sideMenuImageTitles.Titles[index]}
                      </span>
                    </>
                  )}
                </div>
                <TopNavThumbnail indexNum="1" title="40ml" />
                <TopNavThumbnail indexNum="2" title="SET" />
                <TopNavThumbnail indexNum="3" title="GOODS" />
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
