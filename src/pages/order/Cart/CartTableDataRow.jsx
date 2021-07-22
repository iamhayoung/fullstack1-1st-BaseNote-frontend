import React, { Component } from 'react';
import './CartTableDataRow.scss';

class CartTableDataRow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: props.quantity,
    };
  }

  increaseQuantity = () => {
    this.setState({ quantity: this.state.quantity + 1 });
  };

  decreaseQuantity = () => {
    const { quantity } = this.state;

    if (quantity > 1) {
      this.setState({ quantity: quantity - 1 });
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
          <p className="price">{price * quantity}</p>
        </td>
      </tr>
    );
  }
}

export default CartTableDataRow;
