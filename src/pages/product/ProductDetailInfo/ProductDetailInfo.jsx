import React, { Component } from 'react';
import ContentsTab from '../Components/ContentsTab';
import Hashtags from './Hashtags';
import NoteTable from './NoteTable';
import { ReactComponent as Logo } from '../../../assets/logo-BASENOTE_slogan.svg';
import './ProductDetailInfo.scss';

class ProductDetailInfo extends Component {
  render() {
    return (
      <section className="ProductDetailInfo" id="detail">
        <ContentsTab area="detail" />
        <div className="intro">
          <Logo />
          <p className="sentence">
            향기에는 가장 섬세하고 다양한 취향이 담겨있습니다.
            <br />
            그렇지만 어디 내가 좋아하는 향수 찾기가 쉬웠나요.
            <br />
            좋은 원료로 만든 다양한 향수를, 더 쉽게 경험할 수 있도록.
            <br />
            가장 '나다운 향'을 찾기 위한 여정을 함께 합니다.
          </p>
        </div>
        <div className="noteInfo">
          <h3 className="title">note</h3>
          <p className="noteDesc">
            농도 짙은 자스민과 녹진한 바닐라, 짙게 깔린 우드 노트의 찐득한 만남
          </p>
          <Hashtags tag="달달한" />
          <NoteTable />
        </div>
        <div className="keyword">
          <h3 className="title">keyword</h3>
          <p className="sentence">
            향 전문가와 사용자들의 느낌을 키워드로 표현하였습니다.
            <br />
            사용자와 주변 사람들이 어떻게 느낄지 유추할 수 있습니다.
          </p>
          <Hashtags tag="melt01" />
          <div className="bubbles">
            <div className="circle xlarge">달달한</div>
            <div className="circle xlarge">어른스러운</div>
            <div className="circle xlarge">바닐라</div>
            <div className="circle large">따뜻한</div>
            <div className="circle large">무거운</div>
            <div className="circle large">디저트</div>
            <div className="circle medium">복합적인</div>
            <div className="circle medium">부드러운</div>
            <div className="circle medium">과일</div>
            <div className="circle small">차분한</div>
            <div className="circle small">지적인</div>
            <div className="circle small">인센스</div>
          </div>
        </div>
      </section>
    );
  }
}
export default ProductDetailInfo;
