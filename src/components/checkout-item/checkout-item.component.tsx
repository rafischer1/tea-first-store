import React from "react";
import { connect } from "react-redux";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";
import { CartItem } from "../../redux/cart/cart.interface";
import { AppDispatch } from "../../redux/store";

type Props = {
  item: CartItem;
  clearItemFromCart: (item: CartItem) => { payload: CartItem; type: string };
  removeItemFromCart: (item: CartItem) => { payload: CartItem; type: string };
  addItemToCart: (item: CartItem) => { payload: CartItem; type: string };
};

const CheckoutItem = ({
  item,
  clearItemFromCart,
  removeItemFromCart,
  addItemToCart,
}: Props) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={item.imageUrl} alt="item" />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItemFromCart(item)}>
          &#10094;
        </div>
        <span className="value">{item.quantity}</span>
        <div className="arrow" onClick={() => addItemToCart(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">${item.price}</span>
      <span className="remove-button" onClick={() => clearItemFromCart(item)}>
        &#10005;
      </span>
    </div>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  clearItemFromCart: (item: CartItem) => dispatch(clearItemFromCart(item)),
  removeItemFromCart: (item: CartItem) => dispatch(removeItemFromCart(item)),
  addItemToCart: (item: CartItem) => dispatch(addItemToCart(item)),
});

// @ts-ignore
export default connect(null, mapDispatchToProps)(CheckoutItem);
