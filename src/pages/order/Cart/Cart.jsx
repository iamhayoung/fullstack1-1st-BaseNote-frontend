import React, { Component } from 'react';
import { CART_API, ERROR_MESSAGES } from '../../../config';
import Loader from '../../../components/Loader/Loader';
import Container from '../../../components/Container/Container';
import CartTable from './CartTable';
import TotalPriceTable from './TotalPriceTable';
import BuyButtons from './BuyButtons';
import './Cart.scss';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
      isLoading: true,
    };
  }

  getCartData = async () => {
    const accessToken = localStorage.getItem('token');

    if (!accessToken) {
      this.setState({ isLoading: false });
      return;
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

          this.setState({ isLoading: false });
          return;
        }

        this.setState({ cartItems: result.cartItems, isLoading: false });
      })
      .catch(console.error);
  };

  componentDidMount() {
    this.getCartData();
  }

  render() {
    const { isLoading, cartItems } = this.state;

    return isLoading ? (
      <Loader />
    ) : (
      <Container option="cart">
        <h2 className="pageTitle">Cart</h2>
        <CartTable cartItems={cartItems} />
        <TotalPriceTable />
        <BuyButtons />
      </Container>
    );
  }
}

export default Cart;
