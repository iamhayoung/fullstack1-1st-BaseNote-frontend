import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CART_API, ERROR_MESSAGES } from '../../../config';
import { formatMoney } from '../../../utils';
import './CartTableDataRow.scss';

class CartTableDataRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: props.quantity,
    };
  }

  updateQuantity = async () => {
    const accessToken = localStorage.getItem('token');

    if (!accessToken) {
      alert('로그인 후 이용하실 수 있습니다. 로그인을 해주세요 🌸');
      return this.props.history.push('/member/login');
    }

    fetch(CART_API, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        cartItemId: this.props.cartItemId,
        quantity: this.state.quantity,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === ERROR_MESSAGES.invalidToken) {
          localStorage.removeItem('token');

          window.confirm(
            '안전한 서비스 이용을 위해, 일정 이용 시간 초과 후 자동 로그아웃 되었습니다.\n다시 로그인 후 이용해주세요 🌸'
          ) && this.props.history.push('/member/login');
        }
      })
      .catch(console.error);
  };

  increaseQuantity = () => {
    this.setState({ quantity: this.state.quantity + 1 }, () =>
      this.updateQuantity()
    );
  };

  decreaseQuantity = () => {
    const { quantity } = this.state;

    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 }, () => this.updateQuantity());
    }
  };

  render() {
    const { imageUrl, name, series, seriesNumber, volume, price } = this.props;
    const { quantity } = this.state;

    return (
      <tr className="cartTableDataRow">
        <td className="selectColumn">
          <input className="cartItemCheckBox" type="checkbox" />
          <img className="cartItemImage" src={imageUrl} alt={name} />
        </td>
        <td className="productColumn">
          <p className="productName">{`${series} ${seriesNumber}. ${name}`}</p>
          {volume === 40 && <p className="volume">40ML only</p>}
        </td>
        <td>
          <div className="quantityBox">
            <div
              className="item btnQuantity decrease"
              onClick={this.decreaseQuantity}
            ></div>
            <div className="item value">{quantity}개</div>
            <div
              className="item btnQuantity increase"
              onClick={this.increaseQuantity}
            ></div>
          </div>
        </td>
        <td>
          <p className="price">무료</p>
        </td>
        <td>
          <p className="price">{formatMoney(price * quantity)}</p>
        </td>
      </tr>
    );
  }
}

export default withRouter(CartTableDataRow);
