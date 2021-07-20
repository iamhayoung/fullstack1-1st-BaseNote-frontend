import React, { Component } from 'react';
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

    if (accessToken) {
      fetch('http://192.168.0.158:8000/order/cart', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then(res => res.json())
        .then(result =>
          this.setState({ cartItems: result.cartItems, isLoaded: true })
        )
        .catch(error => console.error(error));
    }
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
                🛒 장바구니에 담은 상품이 없습니다.
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

export default CartTable;
