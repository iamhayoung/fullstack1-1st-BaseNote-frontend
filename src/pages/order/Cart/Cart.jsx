import React, { Component } from 'react';
import Container from '../../../components/Container/Container';
import CartTable from './CartTable';
import TotalPriceTable from './TotalPriceTable';
import BuyButtons from './BuyButtons';
import './Cart.scss';

class Cart extends Component {
  render() {
    return (
      <Container option="cart">
        <h2 className="pageTitle">Cart</h2>
        <CartTable />
        <TotalPriceTable />
        <BuyButtons />
      </Container>
    );
  }
}

export default Cart;
