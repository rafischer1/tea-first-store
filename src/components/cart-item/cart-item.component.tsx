import React from "react";
import "./cart-item.styles.scss";
import { CartItem } from "../../redux/cart/cart.interface";

type CartItemProps = { item: CartItem };

const CartItemComponent = ({ item }: CartItemProps) => (
  <div className="cart-item">
    <img src={item.imageUrl} alt="image" />
    <div className="item-details">
      <span className="name">{item.name}</span>
      <span className="price">
        {item.quantity} x ${item.price}
      </span>
    </div>
  </div>
);

export default CartItemComponent;
