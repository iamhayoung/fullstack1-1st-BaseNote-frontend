import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { GoPencil } from 'react-icons/go';
import { ReactComponent as Logo } from '../../assets/logo-BASENOTE.svg';
import './LowerFooter.scss';

class LowerFooter extends Component {
  render() {
    return (
      <div className="lowerFooter">
        <div className="socialMedias">
          <Link className="socialMediaIcon isInstagram" to="/">
            <AiOutlineInstagram />
          </Link>
          <Link className="socialMediaIcon isFacebook" to="/">
            <FaFacebookF />
          </Link>
          <Link className="socialMediaIcon isPencil" to="/">
            <GoPencil />
          </Link>
        </div>
        <p className="slogan">Find Your Scent, BASENOTE</p>
        <div className="companyInfo">
          <p className="companyName">주식회사 베이스노트</p>
          <p className="companyDetail">
            주소: 부산광역시 부산진구 베이스노트로 100 김관희타워 1004층 |
            사업자등록번호: 123-45-67890{' '}
            <Link className="companyInfoLink" to="/">
              사업자정보확인
            </Link>{' '}
            | 상호: 베이스노트 | 대표: 이장현
            <br />
            고객 문의 이메일: basenote@here.com | 고객 센터: 051-1234-5678 |
            통신판매업신고번호: 제2021-부산진구-0524호 |{' '}
            <Link className="companyInfoLink" to="/">
              개인정보취급방침
            </Link>{' '}
            및{' '}
            <Link className="companyInfoLink" to="/">
              이용약관
            </Link>{' '}
            | 개인정보관리책임자: 이소헌
          </p>
          <p className="copyright">
            Created by{' '}
            <Link
              className="companyInfoLink"
              to={{
                pathname:
                  'https://github.com/wecode-bootcamp-korea/fullstack1-1st-BaseNote-frontend',
              }}
              target="_blank"
            >
              TEAM BASENOTE
            </Link>
            . © BASENOTE All right reserved.
          </p>
        </div>
        <Logo />
      </div>
    );
  }
}

export default LowerFooter;
