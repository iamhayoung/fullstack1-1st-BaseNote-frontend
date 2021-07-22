import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { CART_API, ERROR_MESSAGES } from '../../../config';
import CartTableHeadRow from './CartTableHeadRow';
import CartTableDataRow from './CartTableDataRow';
import './CartTable.scss';

class CartTable extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      isLoaded: false,
    };
  }

  getCartData = async () => {
    const accessToken = localStorage.getItem('token');

    if (!accessToken) {
      return this.setState({ isLoaded: true });
    }

    fetch(CART_API, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === ERROR_MESSAGES.invalidToken) {
          localStorage.removeItem('token');

          window.confirm(
            '안전한 서비스 이용을 위해, 일정 이용 시간 초과 후 자동 로그아웃 되었습니다.\n다시 로그인 후 이용해주세요 🌸'
          ) && this.props.history.push('/member/login');

          return this.setState({ isLoaded: true });
        }

        this.setState({ cartItems: result.cartItems, isLoaded: true });
      })
      .catch(error => console.error(error));
  };

  componentDidMount() {
    this.getCartData();
  }

  render() {
    const { cartItems, isLoaded } = this.state;

    return (
      <table className="cartTable">
        <thead>
          <CartTableHeadRow />
        </thead>
        <tbody>
          {isLoaded && cartItems.length === 0 ? (
            <tr className="cartTableDataRow isEmpty">
              <td colSpan="5" className="emptyCartColumn">
                🛒&nbsp;&nbsp;장바구니에 담은 상품이 없습니다.
              </td>
            </tr>
          ) : (
            cartItems.map(item => (
              <CartTableDataRow key={item.cartItemId} {...item} />
            ))
          )}
        </tbody>
      </table>
    );
  }
}

export default withRouter(CartTable);
