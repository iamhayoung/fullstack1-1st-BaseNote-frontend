import React, { Component } from 'react';
import './TopNav.scss';
import { BsPerson } from 'react-icons/bs';
import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { ReactComponent as MainLogo } from '../../assets/logo-BASENOTE_icon.svg';

class TopNav extends Component {
  constructor() {
    super();
    this.state = {
      index: -1,
      hiddenCard: true,
    };
  }
  mouseEnter = () => {
    this.setState({
      hiddenMenu: false,
    });
  };
  mouseLeave = () => {
    this.setState({
      hiddenMenu: true,
    });
  };
  cardMouseEnter = index => {
    this.setState({
      hiddenCard: false,
      index: index,
    });
  };
  cardMouseLeave = () => {
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
            <a
              href="https://paffem.me/perfume_teller.html"
              className="navCategoryLink"
            >
              Perfume Teller
            </a>
            <Link
              to="/"
              className="navCategoryLink hideButton"
              onMouseOver={this.mouseEnter}
              onMouseLeave={this.mouseLeave}
            >
              SHOP
              <ul
                className={
                  hiddenMenu ? 'hiddenMenu menuInactive' : 'hiddenMenu'
                }
                onMouseLeave={this.mouseLeave}
              >
                <Link
                  to="/category/2.5ml"
                  className="hiddenMenuTitle"
                  onMouseOver={() => this.cardMouseEnter(0)}
                  onMouseLeave={this.cardMouseLeave}
                >
                  <p
                    className={
                      index === 0
                        ? 'hiddenMenuTitleAfter'
                        : 'hiddenMenuTitleBefore'
                    }
                  >
                    2.5ml / 데일리키트
                  </p>
                </Link>
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
                <Link
                  to="/category/40ml"
                  className="hiddenMenuTitle"
                  onMouseOver={() => this.cardMouseEnter(1)}
                  onMouseLeave={this.cardMouseLeave}
                >
                  <p
                    className={
                      index === 1
                        ? 'hiddenMenuTitleAfter'
                        : 'hiddenMenuTitleBefore'
                    }
                  >
                    40ml
                  </p>
                </Link>
                <Link
                  to="/"
                  className="hiddenMenuTitle"
                  onMouseOver={() => this.cardMouseEnter(2)}
                  onMouseLeave={this.cardMouseLeave}
                >
                  <p
                    className={
                      index === 2
                        ? 'hiddenMenuTitleAfter'
                        : 'hiddenMenuTitleBefore'
                    }
                  >
                    SET
                  </p>
                </Link>
                <Link
                  to="/"
                  className="hiddenMenuTitle"
                  onMouseOver={() => this.cardMouseEnter(3)}
                  onMouseLeave={this.cardMouseLeave}
                >
                  <p
                    className={
                      index === 3
                        ? 'hiddenMenuTitleAfter'
                        : 'hiddenMenuTitleBefore'
                    }
                  >
                    GOODS
                  </p>
                </Link>
              </ul>
            </Link>
            <Link to="/" className="navCategoryLink">
              ABOUT
            </Link>
            <Link to="/" className="navCategoryLink">
              EVENT
            </Link>
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
