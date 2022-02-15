import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={item.imageUrl} alt="item" />
    </div>
    <span className="name">{item.name}</span>
    <span className="quantity">{item.quantity}</span>
    <span className="price">${item.price}</span>
    <span className="remove-button">X</span>
  </div>
);

export default CheckoutItem;
