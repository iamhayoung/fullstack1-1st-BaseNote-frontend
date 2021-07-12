import { Component } from 'react';
import './CartTable.scss';

class CartTable extends Component {
  render() {
    return (
      <div className="cartTable">
        <div className="row isHead">
          <div className="cell selectHead">
            <input className="cartItemCheckBox" type="checkbox" />
            <div className="selectOption">전체 선택</div>
            <div className="divider"></div>
            <div className="selectOption isRemove">선택 삭제</div>
          </div>
          <div className="cell">제품 정보</div>
          <div className="cell">수량</div>
          <div className="cell">배송비</div>
          <div className="cell">금액</div>
        </div>
        <div className="row isData">
          <div className="cell selectHead">
            <input className="cartItemCheckBox" type="checkbox" />
            <img
              src="https://placehold.jp/125x160.png"
              alt="Product thumbnail"
            />
          </div>
          <div className="cell">
            <p className="productName">wind 03. 오후의 디저트</p>
            <p className="volume">40ML only</p>
          </div>
          <div className="cell">
            <div className="quantityBox">
              <div className="item btnQuantity decrease"></div>
              <div className="item value">1개</div>
              <div className="item btnQuantity increase"></div>
            </div>
          </div>
          <div className="cell price">무료</div>
          <div className="cell price">48,000원</div>
        </div>
        <div className="row isData">
          <div className="cell selectHead">
            <input className="cartItemCheckBox" type="checkbox" />
            <img
              src="https://placehold.jp/125x160.png"
              alt="Product thumbnail"
            />
          </div>
          <div className="cell">
            <p className="productName">time 02. 포근한 겨울밤</p>
          </div>
          <div className="cell">
            <div className="quantityBox">
              <div className="item btnQuantity decrease"></div>
              <div className="item value">1개</div>
              <div className="item btnQuantity increase"></div>
            </div>
          </div>
          <div className="cell price">무료</div>
          <div className="cell price">4,000원</div>
        </div>
      </div>
    );
  }
}
export default CartTable;
