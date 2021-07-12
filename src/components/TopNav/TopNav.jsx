import React, { Component } from 'react';
import './TopNav.scss';
import { BsPerson } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ReactComponent as MainLogo } from '../../assets/logo-BASENOTE_icon.svg';

class TopNav extends Component {
  constructor() {
    super();
    this.state = {
      hiddenMenu: true,
      hiddenCard1: true,
      hiddenCard2: true,
      hiddenCard3: true,
      hiddenCard4: true,
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
  cardMouseEnter1 = () => {
    this.setState({
      hiddenCard1: false,
    });
  };
  cardMouseLeave1 = () => {
    this.setState({
      hiddenCard1: true,
    });
  };
  cardMouseEnter2 = () => {
    this.setState({
      hiddenCard2: false,
    });
  };
  cardMouseLeave2 = () => {
    this.setState({
      hiddenCard2: true,
    });
  };
  cardMouseEnter3 = () => {
    this.setState({
      hiddenCard3: false,
    });
  };
  cardMouseLeave3 = () => {
    this.setState({
      hiddenCard3: true,
    });
  };
  cardMouseEnter4 = () => {
    this.setState({
      hiddenCard4: false,
    });
  };
  cardMouseLeave4 = () => {
    this.setState({
      hiddenCard4: true,
    });
  };

  render() {
    const { hiddenMenu, hiddenCard1, hiddenCard2, hiddenCard3, hiddenCard4 } =
      this.state;
    return (
      <div className="TopNavWrapper">
        <div className="TopNav shopHover">
          <ul className="navCategory">
            <Link to="/" className="navCategoryLink">
              Perfume Teller
            </Link>
            <span
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
                  onMouseOver={this.cardMouseEnter1}
                  onMouseLeave={this.cardMouseLeave1}
                >
                  <p
                    className={
                      hiddenCard1
                        ? 'hiddenMenuTitleBefore1'
                        : 'hiddenMenuTitle1'
                    }
                  >
                    2.5ml / 데일리키트
                  </p>
                </Link>
                <div
                  className={
                    hiddenCard1 ? 'hiddenCard1 cardInactive' : 'hiddenCard1'
                  }
                >
                  <img
                    className="hiddenCardImage"
                    src="https://images.unsplash.com/photo-1582616698198-f978da534162?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlcmZ1bWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    alt="2.5ml/데일리키트 이미지"
                  />
                  <span className="hiddenCardDescription">데일리키트</span>
                </div>
                <Link
                  to="/category/40ml"
                  className="hiddenMenuTitle"
                  onMouseOver={this.cardMouseEnter2}
                  onMouseLeave={this.cardMouseLeave2}
                >
                  <p
                    className={
                      hiddenCard2
                        ? 'hiddenMenuTitleBefore2'
                        : 'hiddenMenuTitle2'
                    }
                  >
                    40ml
                  </p>
                </Link>
                <div
                  className={
                    hiddenCard2 ? 'hiddenCard2 cardInactive' : 'hiddenCard2'
                  }
                >
                  <img
                    className="hiddenCardImage"
                    src="https://images.unsplash.com/photo-1612871178341-33f941a841e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg2fHxwZXJmdW1lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    alt="40ml 이미지"
                  />
                  <span className="hiddenCardDescription">40ml</span>
                </div>
                <Link
                  to="/category"
                  className="hiddenMenuTitle"
                  onMouseOver={this.cardMouseEnter3}
                  onMouseLeave={this.cardMouseLeave3}
                >
                  <p
                    className={
                      hiddenCard3
                        ? 'hiddenMenuTitleBefore3'
                        : 'hiddenMenuTitle3'
                    }
                  >
                    SET
                  </p>
                </Link>
                <div
                  className={
                    hiddenCard3 ? 'hiddenCard3 cardInactive' : 'hiddenCard3'
                  }
                >
                  <img
                    className="hiddenCardImage"
                    src="https://images.unsplash.com/photo-1588159509476-9a71061bd9e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDIxfHxwZXJmdW1lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    alt="SET 이미지"
                  />
                  <span className="hiddenCardDescription">SET</span>
                </div>
                <Link
                  to="/category"
                  className="hiddenMenuTitle"
                  onMouseOver={this.cardMouseEnter4}
                  onMouseLeave={this.cardMouseLeave4}
                >
                  <p
                    className={
                      hiddenCard4
                        ? 'hiddenMenuTitleBefore4'
                        : 'hiddenMenuTitle4'
                    }
                  >
                    GOODS
                  </p>
                </Link>
                <div
                  className={
                    hiddenCard4 ? 'hiddenCard4 cardInactive' : 'hiddenCard4'
                  }
                >
                  <img
                    className="hiddenCardImage"
                    src="https://images.unsplash.com/photo-1612871178341-33f941a841e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTg2fHxwZXJmdW1lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                    alt="GOODS 이미지"
                  />
                  <span className="hiddenCardDescription">GOODS</span>
                </div>
              </ul>
            </span>
            <Link to="/" className="navCategoryLink">
              ABOUT
            </Link>
            <Link to="/" className="navCategoryLink">
              EVENT
            </Link>
          </ul>
          <Link to="메인컴포넌트" className="avTitle">
            <MainLogo />
          </Link>
          <div className="NavIcons">
            <Link to="/member">
              <BsPerson className="LoginIcon" />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;

//나중에 컴포넌트 완성시 링크 수정할것//
