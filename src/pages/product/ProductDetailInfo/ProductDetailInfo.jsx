import React, { Component } from 'react';
import ContentsTab from '../Components/ContentsTab';
import Hashtags from './Hashtags';
import NoteTable from './NoteTable';
import './ProductDetailInfo.scss';

class ProductDetailInfo extends Component {
  render() {
    return (
      <section className="detailInfoArea">
        <ContentsTab area="detail" />
        <div className="intro">
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
      </section>
    );
  }
}
export default ProductDetailInfo;
